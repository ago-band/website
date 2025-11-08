import { Helmet } from "react-helmet-async";
import { useLanguage } from "../contexts/LanguageContext";
import SocialLinks from "../components/SocialLinks";

export default function Contact() {
    const { language, languageData } = useLanguage();
    const pageTitle =
        languageData?.languages[language].pages.contact?.title ||
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
                        <div className="contact-content">
                            <div className="contact-section lang-de">
                                <h3>Kontakt &amp; Booking</h3>
                                <p>
                                    <a href="mailto:mail@ago-band.info">
                                        mail@ago-band.info
                                    </a>
                                </p>
                            </div>
                            <div className="contact-section lang-en">
                                <h3>Contact &amp; Booking</h3>
                                <p>
                                    <a href="mailto:mail@ago-band.info">
                                        mail@ago-band.info
                                    </a>
                                </p>
                            </div>
                            <div className="contact-section">
                                <h3 className="lang-de">Socials</h3>
                                <h3 className="lang-en">Socials</h3>
                                <SocialLinks />
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
