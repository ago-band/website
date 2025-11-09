import { useLanguage } from "../contexts/LanguageContext";
import type { Release } from "../utils/loadMusic";

interface ReleaseProps {
    release: Release;
}

// Simple markdown-like link parser
function parseMarkdownLinks(text: string): React.ReactNode[] {
    if (!text) return [];

    const parts: React.ReactNode[] = [];
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let lastIndex = 0;
    let match;
    let key = 0;

    while ((match = linkRegex.exec(text)) !== null) {
        // Add text before the link
        if (match.index > lastIndex) {
            const beforeText = text.substring(lastIndex, match.index);
            if (beforeText) {
                parts.push(beforeText);
            }
        }
        // Add the link
        parts.push(
            <a
                key={key++}
                href={match[2]}
                target="_blank"
                rel="noopener noreferrer"
            >
                {match[1]}
            </a>
        );
        lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
        const remainingText = text.substring(lastIndex);
        if (remainingText) {
            parts.push(remainingText);
        }
    }

    return parts.length > 0 ? parts : [text];
}

function formatDescription(text: string): React.ReactNode {
    if (!text) return null;

    const lines = text.split("\n").filter((line) => line.trim());
    if (lines.length === 0) return null;

    return lines.map((line, i) => {
        const parsed = parseMarkdownLinks(line.trim());
        return <p key={i}>{parsed}</p>;
    });
}

export default function Release({ release }: ReleaseProps) {
    const { language } = useLanguage();
    const content = release.languages[language];

    return (
        <article className="release-item">
            <div className="release-content two-column-layout">
                <div className="release-image">
                    <img src={release.image} alt={release.title} />
                </div>
                <div className="release-details">
                    <h3 className="widget-title">
                        {release.title} ({release.year})
                    </h3>
                    <div className="release-embed">
                        <iframe
                            src={release.spotifyUrl}
                            width="100%"
                            height={release.embedHeight}
                            frameBorder="0"
                            allow="encrypted-media"
                            loading="lazy"
                            title={release.title}
                        ></iframe>
                    </div>
                    <div className="release-text">
                        {formatDescription(content.description)}
                        {content.additionalInfo && (
                            <p>{parseMarkdownLinks(content.additionalInfo)}</p>
                        )}
                        {content.buyLink && (
                            <p>
                                {content.buyLink.text.includes(":") ? (
                                    <>
                                        <strong>
                                            {content.buyLink.text.split(":")[0]}
                                            :
                                        </strong>{" "}
                                        <a
                                            href={content.buyLink.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {content.buyLink.text
                                                .split(":")[1]
                                                .trim()}
                                        </a>
                                    </>
                                ) : (
                                    <a
                                        href={content.buyLink.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {content.buyLink.text}
                                    </a>
                                )}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}
