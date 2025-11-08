import { Helmet } from "react-helmet-async";
import { useLanguage } from "../contexts/LanguageContext";
import SocialLinks from "../components/SocialLinks";

export default function Biography() {
    const { language, languageData } = useLanguage();
    const pageTitle =
        languageData?.languages[language].pages.biography?.title ||
        "Biography | ago · new wave/electronica · stuttgart";

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta
                    name="description"
                    content="ago is a new wave/electronica band from stuttgart (germany), consisting of robin wörn and manuel minniti."
                />
            </Helmet>
            <article className="post page type-page status-publish hentry">
                <div className="post-content clearfix">
                    <div className="entry-content clearfix">
                        <div className="biography-content two-column-layout">
                            <div className="biography-image">
                                <img
                                    src="/assets/images/ago_02_web.jpg"
                                    alt="ago band"
                                />
                            </div>
                            <div className="biography-text">
                                <div className="lang-de">
                                    <p>
                                        ago ist ein Musikprojekt von Robin Wörn
                                        und Manuel Minniti aus Stuttgart, das
                                        seit 2015 besteht. Live wird die Band
                                        regelmäßig durch Gastmusiker*innen
                                        ergänzt.
                                    </p>
                                    <p>
                                        Nach mehreren digital veröffentlichten
                                        Tracks erscheint im Mai 2018 nun die
                                        Debut-Single „sun" auf Vinyl.
                                    </p>
                                    <p>
                                        Die überwiegend instrumentalen
                                        Kompositionen von ago vereinen moderne
                                        elektronische Musik wie Electronica, New
                                        Wave oder Synth Pop mit Post-Rock und
                                        Shoegaze sowie leichtem experimentellen
                                        Krautrock-Einschlag.
                                    </p>
                                    <p>
                                        Ein sphärisch-ruhiger Unterbau trägt die
                                        sture Rhythmik der Beats in den Stücken,
                                        die sich unentwegt weiter ausdehnen.
                                        Gedeckt von treibenden Bässen und einem
                                        melancholischen Gitarrensound ist ago's
                                        Musik ein voranschreitender Prozess von
                                        Dynamik, Tiefe und raumfüllendem Klang.
                                    </p>
                                </div>
                                <div className="lang-en">
                                    <p>
                                        ago is a music project by Robin Wörn and
                                        Manuel Minniti from Stuttgart, which has
                                        been active since 2015. Live, the band
                                        is regularly supplemented by guest
                                        musicians.
                                    </p>
                                    <p>
                                        After several digitally released tracks,
                                        the debut single "sun" is now released
                                        on vinyl in May 2018.
                                    </p>
                                    <p>
                                        The predominantly instrumental
                                        compositions of ago combine modern
                                        electronic music such as Electronica,
                                        New Wave or Synth Pop with Post-Rock and
                                        Shoegaze as well as light experimental
                                        Krautrock influences.
                                    </p>
                                    <p>
                                        A spherical-calm foundation carries the
                                        stubborn rhythm of the beats in the
                                        pieces, which continuously expand.
                                        Covered by driving basses and a
                                        melancholic guitar sound, ago's music is
                                        an advancing process of dynamics, depth
                                        and space-filling sound.
                                    </p>
                                </div>
                                <div className="biography-socials">
                                    <SocialLinks />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
