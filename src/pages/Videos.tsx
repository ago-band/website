import { Helmet } from "react-helmet-async";
import { useLanguage } from "../contexts/LanguageContext";

export default function Videos() {
    const { language, languageData } = useLanguage();
    const pageTitle =
        languageData?.languages[language]?.pages.videos?.title ||
        "Videos | ago · new wave/electronica · stuttgart";

    const videos = [
        {
            id: "FtuPdNwJHQ8",
        },
        {
            id: "Z4AF8GcO6mQ",
        },
        {
            id: "iYRzBgZYlTo",
        },
    ];

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content="Music videos by ago" />
            </Helmet>
            <article className="post page type-page status-publish hentry">
                <div className="post-content clearfix">
                    <div className="entry-content clearfix">
                        <div className="videos-content">
                            {videos.map((video) => (
                                <article key={video.id}>
                                    {/* <div className="lang-en">
                                        <h2>{video.titleEn}</h2>
                                    </div>
                                    <div className="lang-de">
                                        <h2>{video.titleDe}</h2>
                                    </div> */}
                                    <div className="video-wrapper">
                                        <iframe
                                            width="100%"
                                            height="420"
                                            src={`https://www.youtube.com/embed/${video.id}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title="Video"
                                        />
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
