import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { loadMusic, type Release } from "../utils/loadMusic";
import ReleaseComponent from "../components/Release";

export default function Music() {
    const { language, languageData } = useLanguage();
    const pageTitle =
        languageData?.languages[language]?.pages.music?.title ||
        "Music | ago · new wave/electronica · stuttgart";
    const [releases, setReleases] = useState<Release[]>([]);

    useEffect(() => {
        loadMusic().then(setReleases);
    }, []);

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta
                    name="description"
                    content="Music and recordings by ago"
                />
            </Helmet>
            <article className="post page type-page status-publish hentry">
                <div className="post-content clearfix">
                    <div className="entry-content clearfix">
                        <div className="music-content">
                            {releases.map((release) => (
                                <article key={release.id}>
                                    <div className="textwidget">
                                        <ReleaseComponent release={release} />
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
