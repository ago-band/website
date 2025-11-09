import { Helmet } from "react-helmet-async";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contact() {
    const { language, languageData } = useLanguage();
    const pageTitle =
        languageData?.languages[language]?.pages.contact?.title ||
        "Contact | ago · new wave/electronica · stuttgart";

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta
                    name="description"
                    content="Contact and booking information for ago"
                />
            </Helmet>
            <article className="post page type-page status-publish hentry">
                <div className="post-content clearfix">
                    <div className="entry-content clearfix">
                        <div className="contact-content ago__contact-details">
                            <div className="contact-section">
                                <div className="lang-en">
                                    <h3 className="widget-title">
                                        contact + booking
                                    </h3>
                                    <div className="textwidget">
                                        <p className="p1">
                                            <a href="mailto:mail@ago-band.info">
                                                mail@ago-band.info
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="lang-de">
                                    <h3 className="widget-title">
                                        kontakt + booking
                                    </h3>
                                    <div className="textwidget">
                                        <p className="p1">
                                            <a href="mailto:mail@ago-band.info">
                                                mail@ago-band.info
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-section">
                                <h3 className="widget-title">socials</h3>
                                <div className="textwidget">
                                    <p className="p1">
                                        <a
                                            href="https://ago-band.bandcamp.com/"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            bandcamp
                                        </a>
                                        <br />
                                        <a
                                            href="https://soundcloud.com/ago-music"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            soundcloud
                                        </a>
                                        <br />
                                        <a
                                            href="https://www.instagram.com/ago_band"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            instagram
                                        </a>
                                        <br />
                                        <a
                                            href="https://www.facebook.com/ago.band.music"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            facebook
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
