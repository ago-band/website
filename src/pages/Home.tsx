import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../contexts/LanguageContext";
import RandomVisuals from "../components/RandomVisuals";
import { loadHome, HomeLanguageContent } from "../utils/loadHome";
import { renderMarkdownLinks } from "../utils/renderMarkdownLinks";

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

    useEffect(() => {
        loadHome().then(setHomeData);
    }, []);

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
        </>
    );
}
