import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../contexts/LanguageContext'

export default function Imprint() {
  const { language, languageData } = useLanguage()
  const pageTitle = languageData?.languages[language].pages.imprint?.title || 
                    "Imprint | ago · new wave/electronica · stuttgart"
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content="Legal notice and privacy policy for ago-band.info" />
      </Helmet>
      <article className="post page type-page status-publish hentry">
        <div className="post-content clearfix">
          <div className="entry-content clearfix">
            <div className="imprint-content">
              <div dangerouslySetInnerHTML={{ __html: imprintHTML }} />
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

const imprintHTML = `
<h2>Datenschutzerklärung</h2>
<h3 id="dsg-general-controller">Verantwortlicher</h3>
<p>
  ago<br>
  Manuel Minniti<br>
  Hölderlinplatz 9a<br>
  70193 Stuttgart<br>
  Deutschland<br>
  <br>
  E-Mail: minniti.manu@gmail.com<br>
  Website: http://www.ago-band.info
</p>
<h3 id="dsg-general-datatype">Arten der verarbeiteten Daten:</h3>
<p>
  - Bestandsdaten (z.B., Namen, Adressen).<br>
  - Kontaktdaten (z.B., E-Mail, Telefonnummern).<br>
  - Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos).<br>
  - Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten).<br>
  - Meta-/Kommunikationsdaten (z.B., Geräte-Informationen, IP-Adressen).
</p>
<h3 id="dsg-general-datasubjects">Kategorien betroffener Personen</h3>
<p>Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen wir die betroffenen Personen zusammenfassend auch als „Nutzer").</p>
<h3 id="dsg-general-purpose">Zweck der Verarbeitung</h3>
<p>
  - Zurverfügungstellung des Onlineangebotes, seiner Funktionen und Inhalte.<br>
  - Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern.<br>
  - Sicherheitsmaßnahmen.<br>
  - Reichweitenmessung/Marketing
</p>
<p>
  <a href="https://datenschutz-generator.de" className="dsg1-5" rel="nofollow" target="_blank">
    Erstellt mit Datenschutz-Generator.de von RA Dr. Thomas Schwenke
  </a>
</p>
`

