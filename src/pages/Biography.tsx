import { Helmet } from "react-helmet-async";
import { useLanguage } from "../contexts/LanguageContext";

export default function Biography() {
    const { language, languageData } = useLanguage();
    const pageTitle =
        languageData?.languages[language]?.pages.biography?.title ||
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
            <div className="biography-content two-column-layout">
                <div className="biography-image">
                    <img src="/assets/images/ago_02_web.jpg" alt="ago band" />
                </div>
                <div className="biography-text">
                    <div className="lang-de">
                        <p>
                            ago ist ein musikprojekt von robin wörn und manuel
                            minniti aus stuttgart. die band wird bei
                            live-auftritten von gastmusiker*innen ergänzt. nach
                            der veröffentlichung ihrer debütsingle „sun" auf
                            vinyl im mai 2018 spielten sie eine tour in israel
                            mit der band D.R.Y.
                        </p>
                        <p>
                            zusammen mit dem leadsänger Dmitry Polykov von
                            D.R.Y. veröffentlichten sie im oktober 2019 die ep
                            "blessed" auf einer 7" unter dem gleichnamigen
                            projekt.
                        </p>
                        <p>
                            ihr debütalbum "chroma" wurde am 23. juli 2021
                            veröffentlicht, produziert von Ralv Milberg. kalte
                            und dunkle klänge zentraleuropas kontrastieren mit
                            nahöstlichen einflüssen. popkompositionen werden von
                            verschiedenen sängern und treibenden rhythmen
                            ergänzt. es besteht jedoch keine absicht, wie fertig
                            produzierter mainstream-pop zu klingen.
                        </p>
                        <p>
                            die kompositionen verbinden moderne elektronische
                            musik wie electronica, new wave oder synth pop mit
                            post rock, shoegaze und einem leichten
                            krautrock-einfluss.
                        </p>
                    </div>
                    <div className="lang-en">
                        <p>
                            ago is a music project by robin wörn and manuel
                            minniti from stuttgart. the band is complemented by
                            guest musicians during live performances. after
                            releasing their debut single „sun“ on vinyl in may
                            2018, they played a tour in israel with the local
                            group D.R.Y.
                        </p>
                        <p>
                            along with lead vocalist Dmitry Polykov of D.R.Y.
                            they released the “blessed” ep on a 7” in october
                            2019 under the same-titled project.
                        </p>
                        <p>
                            their debut album “chroma” was released on july 23rd
                            2021, produced by Ralv Milberg.
                            <br />
                            cold and dark sounds of central europe contrast
                            middle-eastern influences. pop compositions are
                            complemented by various vocalists and driving
                            rhythms. however, there is no intention of sounding
                            like off-the-shelf mainstream pop.
                        </p>
                        <p>
                            the compositions combine modern electronic music
                            like electronica, new wave or synth pop with post
                            rock, shoegaze and a slight kraut rock-impact.
                        </p>
                    </div>
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
