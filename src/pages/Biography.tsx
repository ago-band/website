import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../contexts/LanguageContext";
import {
    loadBiography,
    BiographyLanguageContent,
} from "../utils/loadBiography";
import { renderMarkdownLinks } from "../utils/renderMarkdownLinks";

export default function Biography() {
    const { language, languageData } = useLanguage();
    const [biography, setBiography] = useState<{
        languages: { en: BiographyLanguageContent; de: BiographyLanguageContent };
    } | null>(null);
    const pageTitle =
        languageData?.languages[language]?.pages.biography?.title ||
        "Biography | ago Â· new wave/electronica Â· stuttgart";

    useEffect(() => {
        loadBiography().then(setBiography);
    }, []);

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta
                    name="description"
                    content="ago is a new wave/electronica band from stuttgart (germany), consisting of robin wÃ¶rn and manuel minniti."
                />
            </Helmet>
            <div className="biography-content two-column-layout">
                <div className="biography-image">
                    <img
                        src={`${import.meta.env.BASE_URL}assets/images/ago_02_web.jpg`}
                        alt="ago band"
                    />
                </div>
                <div className="biography-text">
                    {biography && (
                        <>
                            <div className="lang-de">
                                {biography.languages.de.paragraphs.map(
                                    (p, i) => (
                                        <p key={i}>{renderMarkdownLinks(p)}</p>
                                    ),
                                )}
                            </div>
                            <div className="lang-en">
                                {biography.languages.en.paragraphs.map(
                                    (p, i) => (
                                        <p key={i}>{renderMarkdownLinks(p)}</p>
                                    ),
                                )}
                            </div>
                        </>
                    )}
                    {/* Bandcamp link */}
                    <p>
                        <a
                            href="https://ago-band.bandcamp.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            bandcamp
                        </a>
                        <br />
                        {/* Soundcloud link */}
                        <a
                            href="https://soundcloud.com/ago-music"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            soundcloud
                        </a>
                        <br />
                        {/* Instagram link */}

                        <a
                            href="https://www.instagram.com/ago_band"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            instagram
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}
