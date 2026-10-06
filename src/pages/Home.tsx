import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../contexts/LanguageContext";
import RandomVisuals from "../components/RandomVisuals";
import { loadHome, HomeLanguageContent } from "../utils/loadHome";
import { renderMarkdownLinks } from "../utils/renderMarkdownLinks";
import { loadShows, Show } from "../utils/loadShows";

const linkLabels: Record<string, { en: string; de: string }> = {
    tickets: { en: "tickets", de: "tickets" },
    facebook: { en: "facebook event", de: "facebook event" },
    organizer: { en: "organizer", de: "veranstalter" },
};

export default function Home() {
    const { language, languageData } = useLanguage();
    const [homeData, setHomeData] = useState<{
        languages: {
            en: HomeLanguageContent;
            de: HomeLanguageContent;
        };
    } | null>(null);
    const pageTitle =
        languageData?.languages[language]?.pages.home?.title ||
        "ago · new wave/electronica · stuttgart";

    const [upcomingShows, setUpcomingShows] = useState<Show[]>([]);

    useEffect(() => {
        loadHome().then(setHomeData);
        loadShows().then((shows) =>
            setUpcomingShows(
                shows
                    .filter((show) => show.status === "upcoming")
                    .sort(
                        (a, b) =>
                            new Date(a.date).getTime() -
                            new Date(b.date).getTime()
                    )
            )
        );
    }, []);

    const formatDate = (dateString: string) =>
        new Date(dateString).toLocaleDateString(
            language === "de" ? "de-DE" : "en-GB",
            {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            }
        );

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta
                    name="description"
                    content="ago is a new wave/electronica band from stuttgart (germany), consisting of robin woern and manuel minniti."
                />
                <meta property="og:title" content={pageTitle} />
                <meta
                    property="og:description"
                    content="ago is a new wave/electronica band from stuttgart (germany), consisting of robin woern and manuel minniti."
                />
                <meta property="og:type" content="website" />
            </Helmet>
            <RandomVisuals />
            <div className="home-content two-column-layout">
                <div className="home-text">
                    <div className="lang-en">
                        {homeData &&
                            homeData.languages.en.paragraphs.map((p, i) => (
                                <p key={i}>{renderMarkdownLinks(p)}</p>
                            ))}

                        {/* <h2>our debut album "chroma" is out now!</h2>
                    <p>
                        listen to it on all major music platforms (spotify,
                        apple music, bandcamp, etc) and order it on bandcamp.
                    </p>
                    <p>
                        <Link href="/music">listen to it here</Link>
                    </p> */}
                    </div>
                    <div className="lang-de">
                        {homeData &&
                            homeData.languages.de.paragraphs.map((p, i) => (
                                <p key={i}>{renderMarkdownLinks(p)}</p>
                            ))}

                        {/* <h2>unser debütalbum "chroma" ist jetzt erhältlich!</h2>
                    <p>
                        hört es auf allen großen musikplattformen (spotify,
                        apple music, bandcamp, etc) und bestellt es auf
                        bandcamp.
                    </p>
                    <p>
                        <Link href="/music">hier anhören</Link>
                    </p> */}
                    </div>
                </div>
                <div className="upcoming-shows">
                    <h2>
                        <span className="lang-en">upcoming concerts</span>
                        <span className="lang-de">kommende konzerte</span>
                    </h2>
                    {upcomingShows.length === 0 ? (
                        <p>
                            <span className="lang-en">
                                no upcoming concerts at the moment.
                            </span>
                            <span className="lang-de">
                                momentan sind keine konzerte geplant.
                            </span>
                        </p>
                    ) : (
                        upcomingShows.map((show, index) => (
                            <article key={index}>
                                <h3>{show.title || show.venue}</h3>
                                <p>
                                    {formatDate(show.date)}
                                    {show.title && (
                                        <>
                                            <br />
                                            {show.venue}
                                        </>
                                    )}
                                </p>
                                {show.links && (
                                    <p className="upcoming-show-links">
                                        {Object.entries(show.links).map(
                                            ([key, url]) =>
                                                url && (
                                                    <a
                                                        key={key}
                                                        href={url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        ›{" "}
                                                        {linkLabels[key]?.[
                                                            language
                                                        ] ?? key}
                                                    </a>
                                                )
                                        )}
                                    </p>
                                )}
                            </article>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}
