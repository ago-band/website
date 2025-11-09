import { Helmet } from "react-helmet-async";
import { useLanguage } from "../contexts/LanguageContext";

export default function Music() {
    const { language, languageData } = useLanguage();
    const pageTitle =
        languageData?.languages[language].pages.music?.title ||
        "Music | ago · new wave/electronica · stuttgart";

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
                            {/* chroma album */}
                            <article>
                                <h3 className="widget-title">chroma (2021)</h3>
                                <div className="textwidget">
                                    <p>
                                        <iframe
                                            src="https://ago-band.bandcamp.com/album/chroma"
                                            width="100%"
                                            height="390px"
                                            frameBorder="0"
                                            title="chroma album"
                                        ></iframe>
                                    </p>
                                    <div className="lang-en">
                                        <p>
                                            Our debut album "chroma", released digitally on July 23, 2021 and on vinyl on December 23, 2021. it features{" "}
                                            <a href="https://www.meikeboltersdorf.com/" target="_blank" rel="noopener">
                                                meike boltersdorf
                                            </a>
                                            ,{" "}
                                            <a href="https://dontrepeatyourself.bandcamp.com/music" target="_blank" rel="noopener">
                                                dmitry polykov
                                            </a>{" "}
                                            and nursel kale. produced by ralv milberg at{" "}
                                            <a href="http://www.milbergstudios.de/" target="_blank" rel="noopener">
                                                milberg studios
                                            </a>
                                            . additional mixing and mastering by maximilian heinrich.
                                        </p>
                                        <p>
                                            <a href="https://ago-band.bandcamp.com/" target="_blank" rel="noopener">
                                                buy/order it here
                                            </a>
                                        </p>
                                    </div>
                                    <div className="lang-de">
                                        <p>
                                            Unser Debütalbum "chroma", digital veröffentlicht am 23. Juli 2021 und auf Vinyl am 23. Dezember 2021. Es enthält{" "}
                                            <a href="https://www.meikeboltersdorf.com/" target="_blank" rel="noopener">
                                                meike boltersdorf
                                            </a>
                                            ,{" "}
                                            <a href="https://dontrepeatyourself.bandcamp.com/music" target="_blank" rel="noopener">
                                                dmitry polykov
                                            </a>{" "}
                                            und nursel kale. produziert von ralv milberg bei{" "}
                                            <a href="http://www.milbergstudios.de/" target="_blank" rel="noopener">
                                                milberg studios
                                            </a>
                                            . zusätzliches mixing und mastering von maximilian heinrich.
                                        </p>
                                        <p>
                                            <a href="https://ago-band.bandcamp.com/" target="_blank" rel="noopener">
                                                hier kaufen/bestellen
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </article>

                            {/* montreal */}
                            <article>
                                <h3 className="widget-title">montreal (2021)</h3>
                                <div className="textwidget">
                                    <p>
                                        <iframe
                                            loading="lazy"
                                            src="https://ago-band.bandcamp.com/track/montreal"
                                            width="100%"
                                            height="86px"
                                            frameBorder="0"
                                            title="montreal"
                                        ></iframe>
                                    </p>
                                    <div className="lang-en">
                                        <p>
                                            montreal (feat. nursel kale) is the third and last single of our debut album "chroma".
                                        </p>
                                        <p>
                                            mixed and mastered at{" "}
                                            <a href="http://www.milbergstudios.de/" target="_blank" rel="noopener">
                                                milberg studios by ralv milberg
                                            </a>{" "}
                                            and maximilian heinrich.
                                        </p>
                                    </div>
                                    <div className="lang-de">
                                        <p>
                                            montreal (feat. nursel kale) ist die dritte und letzte Single unseres Debütalbums "chroma".
                                        </p>
                                        <p>
                                            gemischt und gemastert bei{" "}
                                            <a href="http://www.milbergstudios.de/" target="_blank" rel="noopener">
                                                milberg studios von ralv milberg
                                            </a>{" "}
                                            und maximilian heinrich.
                                        </p>
                                    </div>
                                </div>
                            </article>

                            {/* glowing */}
                            <article>
                                <h3 className="widget-title">glowing (2021)</h3>
                                <div className="textwidget">
                                    <p>
                                        <iframe
                                            loading="lazy"
                                            src="https://ago-band.bandcamp.com/track/glowing"
                                            width="100%"
                                            height="86px"
                                            frameBorder="0"
                                            title="glowing"
                                        ></iframe>
                                    </p>
                                    <div className="lang-en">
                                        <p>
                                            glowing (feat.{" "}
                                            <a href="https://www.meikeboltersdorf.com/" target="_blank" rel="noopener">
                                                meike boltersdorf
                                            </a>
                                            ) is the second single of our debut album "chroma".
                                        </p>
                                        <p>
                                            mixed and mastered at{" "}
                                            <a href="http://www.milbergstudios.de/" target="_blank" rel="noopener">
                                                milberg studios by ralv milberg
                                            </a>{" "}
                                            and maximilian heinrich.
                                        </p>
                                    </div>
                                    <div className="lang-de">
                                        <p>
                                            glowing (feat.{" "}
                                            <a href="https://www.meikeboltersdorf.com/" target="_blank" rel="noopener">
                                                meike boltersdorf
                                            </a>
                                            ) ist die zweite Single unseres Debütalbums "chroma".
                                        </p>
                                        <p>
                                            gemischt und gemastert bei{" "}
                                            <a href="http://www.milbergstudios.de/" target="_blank" rel="noopener">
                                                milberg studios von ralv milberg
                                            </a>{" "}
                                            und maximilian heinrich.
                                        </p>
                                    </div>
                                </div>
                            </article>

                            {/* falling */}
                            <article>
                                <h3 className="widget-title">falling (2020)</h3>
                                <div className="textwidget">
                                    <p>
                                        <iframe
                                            loading="lazy"
                                            src="https://ago-band.bandcamp.com/track/falling"
                                            width="100%"
                                            height="86px"
                                            frameBorder="0"
                                            title="falling"
                                        ></iframe>
                                    </p>
                                    <div className="lang-en">
                                        <p>
                                            falling (feat.{" "}
                                            <a href="https://dontrepeatyourself.bandcamp.com/music" target="_blank" rel="noopener">
                                                dmitry polykov
                                            </a>
                                            ) is the first single of our debut album "chroma".
                                        </p>
                                    </div>
                                    <div className="lang-de">
                                        <p>
                                            falling (feat.{" "}
                                            <a href="https://dontrepeatyourself.bandcamp.com/music" target="_blank" rel="noopener">
                                                dmitry polykov
                                            </a>
                                            ) ist die erste Single unseres Debütalbums "chroma".
                                        </p>
                                    </div>
                                </div>
                            </article>

                            {/* Blessed */}
                            <article>
                                <h3 className="widget-title">Blessed (2019)</h3>
                                <div className="textwidget">
                                    <p>
                                        <iframe
                                            loading="lazy"
                                            src="https://raashrecords.bandcamp.com/track/ago-blessed"
                                            width="100%"
                                            height="86px"
                                            frameBorder="0"
                                            title="Blessed"
                                        ></iframe>
                                    </p>
                                    <div className="lang-en">
                                        <p>
                                            released in 2019 on the experimental label{" "}
                                            <a href="https://raashrecords.bandcamp.com/" target="_blank" rel="noopener">
                                                raash records
                                            </a>
                                            .
                                        </p>
                                        <p>
                                            <strong>Buy at:</strong>{" "}
                                            <a href="https://raashrecords.bandcamp.com/album/raash-002" target="_blank" rel="noopener">
                                                raash records
                                            </a>
                                        </p>
                                    </div>
                                    <div className="lang-de">
                                        <p>
                                            veröffentlicht 2019 auf dem experimentellen Label{" "}
                                            <a href="https://raashrecords.bandcamp.com/" target="_blank" rel="noopener">
                                                raash records
                                            </a>
                                            .
                                        </p>
                                        <p>
                                            <strong>Kaufen bei:</strong>{" "}
                                            <a href="https://raashrecords.bandcamp.com/album/raash-002" target="_blank" rel="noopener">
                                                raash records
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </article>

                            {/* sun */}
                            <article>
                                <h3 className="widget-title">sun (2018)</h3>
                                <div className="textwidget">
                                    <div className="lang-en">
                                        <p className="p1">
                                            a — sun
                                        </p>
                                    </div>
                                    <div className="lang-de">
                                        <p className="p1">
                                            a — sun
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
