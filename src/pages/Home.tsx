import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { useLanguage } from "../contexts/LanguageContext";
import RandomVisuals from "../components/RandomVisuals";

export default function Home() {
    const { language, languageData } = useLanguage();
    const pageTitle =
        languageData?.languages[language]?.pages.home?.title ||
        "ago · new wave/electronica · stuttgart";

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta
                    name="description"
                    content="ago is a new wave/electronica band from stuttgart (germany), consisting of robin wörn and manuel minniti."
                />
                <meta property="og:title" content={pageTitle} />
                <meta
                    property="og:description"
                    content="ago is a new wave/electronica band from stuttgart (germany), consisting of robin wörn and manuel minniti."
                />
                <meta property="og:type" content="website" />
            </Helmet>
            <RandomVisuals />
            <article
                id="post-30"
                className="post-30 page type-page status-publish hentry"
            >
                <div className="post-content clearfix">
                    <div className="entry-content clearfix">
                        <div className="panel-layout">
                            <div className="panel-grid panel-no-style">
                                <div className="panel-grid-cell panel-grid-cell-mobile-last">
                                    <div className="widget_text so-panel widget widget_custom_html panel-first-child panel-last-child">
                                        <div className="textwidget custom-html-widget">
                                            <div className="lang-en">
                                                <h2>
                                                    our debut album "chroma" is
                                                    out now!
                                                </h2>
                                                <p>
                                                    listen to it on all major
                                                    music platforms (spotify,
                                                    apple music, bandcamp, etc)
                                                    and order it on bandcamp.
                                                </p>
                                                <p>
                                                    <Link href="/music">
                                                        listen to it here
                                                    </Link>
                                                </p>
                                            </div>
                                            <div className="lang-de">
                                                <h2>
                                                    unser debütalbum "chroma"
                                                    ist jetzt erhältlich!
                                                </h2>
                                                <p>
                                                    hört es auf allen großen
                                                    musikplattformen (spotify,
                                                    apple music, bandcamp, etc)
                                                    und bestellt es auf
                                                    bandcamp.
                                                </p>
                                                <p>
                                                    <Link href="/music">
                                                        hier anhören
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
