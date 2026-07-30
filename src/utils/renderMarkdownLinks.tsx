import { Link } from "wouter";

// Renders markdown-style links ([text](url)) in text loaded from YAML.
// Internal paths (starting with "/") use client-side routing; other URLs
// open in a new tab.
export function renderMarkdownLinks(text: string): React.ReactNode[] {
    if (!text) return [];

    const parts: React.ReactNode[] = [];
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let lastIndex = 0;
    let match;
    let key = 0;

    while ((match = linkRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.substring(lastIndex, match.index));
        }
        const label = match[1];
        const href = match[2];
        parts.push(
            href.startsWith("/") ? (
                <Link key={key++} href={href}>
                    {label}
                </Link>
            ) : (
                <a
                    key={key++}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {label}
                </a>
            ),
        );
        lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : [text];
}
