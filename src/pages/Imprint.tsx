import { Helmet } from "react-helmet-async";
import { useLanguage } from "../contexts/LanguageContext";

export default function Imprint() {
    const { language, languageData } = useLanguage();
    const pageTitle =
        languageData?.languages[language]?.pages.imprint?.title ||
        "Imprint | ago · new wave/electronica · stuttgart";
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta
                    name="description"
                    content="Legal notice and privacy policy for ago-band.info"
                />
            </Helmet>
            <div className="imprint-content">
                <div className="lang-de">
                    <h2>Datenschutzerklärung</h2>
                    <p>
                        Diese Datenschutzerklärung klärt die Art, den Umfang und
                        Zweck der Verarbeitung von personenbezogenen Daten
                        (nachfolgend "Daten") innerhalb unseres Onlineangebotes
                        und der mit ihm verbundenen Webseiten, Funktionen und
                        Inhalte sowie externen Onlinepräsenzen, wie z.B. unser
                        Social Media Profile auf (nachfolgend gemeinsam
                        bezeichnet als "Onlineangebot"). Bezüglich der
                        verwendeten Begriffe, wie z.B. "Verarbeitung" oder
                        "Verantwortlicher", verweisen wir auf die Definitionen
                        im Artikel 4 der Datenschutzgrundverordnung (DSGVO).
                    </p>
                    <h3 id="dsg-general-controller">Verantwortlicher</h3>
                    <p>
                        <span className="tsmcontroller">
                            ago
                            <br />
                            Manuel Minniti
                            <br />
                            Seyfferstraße 89
                            <br />
                            70197 Stuttgart Deutschland
                            <br />
                            E-Mail: mail@ago-band.info
                            <br />
                        </span>
                    </p>
                    <h3 id="dsg-general-datatype">
                        Arten der verarbeiteten Daten:
                    </h3>
                    <p>
                        - Bestandsdaten (z.B., Namen, Adressen).
                        <br />
                        - Kontaktdaten (z.B., E-Mail, Telefonnummern).
                        <br />
                        - Inhaltsdaten (z.B., Texteingaben, Fotografien,
                        Videos).
                        <br />
                        - Nutzungsdaten (z.B., besuchte Webseiten, Interesse an
                        Inhalten, Zugriffszeiten).
                        <br />- Meta-/Kommunikationsdaten (z.B.,
                        Geräte-Informationen, IP-Adressen).
                    </p>
                    <h3 id="dsg-general-datasubjects">
                        Kategorien betroffener Personen
                    </h3>
                    <p>
                        Besucher und Nutzer des Onlineangebotes (Im Folgenden
                        bezeichnen wir die betroffenen Personen zusammenfassend
                        auch als "Nutzer")
                    </p>
                    <h3 id="dsg-general-purpose">Zweck der Verarbeitung</h3>
                    <p>
                        - Bereitstellung des Onlineangebotes, seiner Funktionen
                        und Inhalte.
                        <br />
                        - Beantwortung von Kontaktanfragen und Kommunikation mit
                        Nutzern.
                        <br />
                        - Sicherheitsmaßnahmen
                        <br />. - Reichweitenmessung / Marketing |
                    </p>
                    <h3 id="dsg-general-terms">Verwendete Begriffe</h3>
                    <p>
                        "Personenbezogene Daten" sind alle Informationen, die
                        sich auf eine identifizierte oder identifizierbare
                        natürliche Person (im Folgenden "betroffene Person")
                        beziehen; als identifizierbar wird eine natürliche
                        Person angesehen, die direkt oder indirekt, insbesondere
                        mittels Zuordnung zu einer Kennung wie einem Namen, zu
                        einer Kennnummer, zu Standortdaten, zu einer
                        Online-Kennung (z.B. Cookie) oder zu einem oder mehreren
                        besonderen Merkmalen identifiziert werden kann, die
                        Ausdruck der physischen, physiologischen, genetischen,
                        psychischen, wirtschaftlichen, kulturellen oder sozialen
                        Identität dieser natürlichen Person sind
                        <br />
                        "Verarbeitung" ist jeder mit oder ohne Hilfe
                        automatisierter Verfahren ausgeführte Vorgang oder jede
                        solche Vorgangsreihe im Zusammenhang mit
                        personenbezogenen Daten. Der Begriff reicht weit und
                        umfasst praktisch jeden Umgang mit Daten.
                    </p>
                    <p>
                        "Pseudonymisierung" die Verarbeitung personenbezogener
                        Daten in einer Weise, dass die personenbezogenen Daten
                        ohne Hinzuziehung zusätzlicher Informationen nicht mehr
                        einer spezifischen betroffenen Person zugeordnet werden
                        können, sofern diese zusätzlichen Informationen
                        gesondert aufbewahrt werden und technischen und
                        organisatorischen Maßnahmen unterliegen, die
                        gewährleisten, dass die personenbezogenen Daten nicht
                        einer identifizierten oder identifizierbaren natürlichen
                        Person zugewiesen werden.
                    </p>
                    <p>
                        "Profiling" jede Art der automatisierten Verarbeitung
                        personenbezogener Daten, die darin besteht, dass diese
                        personenbezogenen Daten verwendet werden, um bestimmte
                        persönliche Aspekte, die sich auf eine natürliche Person
                        beziehen, zu bewerten, insbesondere um Aspekte bezüglich
                        Arbeitsleistung, wirtschaftliche Lage, Gesundheit,
                        persönliche Vorlieben, Interessen, Zuverlässigkeit,
                        Verhalten, Aufenthaltsort oder Ortswechsel dieser
                        natürlichen Person zu analysieren oder vorherzusagen.
                    </p>
                    <p>
                        "Verantwortlicher" die natürliche oder juristische
                        Person, Behörde, Einrichtung oder andere Stelle, die
                        allein oder gemeinsam mit anderen über die Zwecke und
                        Mittel der Verarbeitung von personenbezogenen Daten
                        entscheidet
                        <br />
                        "Auftragsverarbeiter" eine natürliche oder juristische
                        Person, Behörde, Einrichtung oder andere Stelle, die
                        personenbezogene Daten im Auftrag des Verantwortlichen
                        verarbeitet.
                    </p>
                    <h3 id="dsg-general-legal-basis">
                        Maßgebliche Rechtsgrundlagen
                    </h3>
                    <p>
                        Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die
                        Rechtsgrundlagen unserer Datenverarbeitung mit. Sofern
                        die Rechtsgrundlage in der Datenschutzerklärung nicht
                        genannt wird, gilt Folgendes: Die Rechtsgrundlage für
                        die Einholung von Einwilligungen ist Art. 6 Abs. 1 lit.
                        a und Art. 7 DSGVO, die Rechtsgrundlage für die
                        Verarbeitung zur Erfüllung unserer Leistungen und
                        Durchführung vertraglicher Maßnahmen sowie Beantwortung
                        von Anfragen ist Art. 6 Abs. 1 lit. b DSGVO, die
                        Rechtsgrundlage für die Verarbeitung zur Erfüllung
                        unserer rechtlichen Verpflichtungen ist Art. 6 Abs. 1
                        lit. c DSGVO, und die Rechtsgrundlage für die
                        Verarbeitung zur Wahrung unserer berechtigten Interessen
                        ist Art. 6 Abs. 1 lit. f DSGVO. Für den Fall, dass
                        lebenswichtige Interessen der betroffenen Person oder
                        einer anderen natürlichen Person eine Verarbeitung
                        personenbezogener Daten erforderlich machen, dient Art.
                        6 Abs. 1 lit. d DSGVO als Rechtsgrundlage.
                    </p>
                    <h3 id="dsg-general-securitymeasures">
                        Sicherheitsmaßnahmen
                    </h3>
                    <p>
                        Nach Maßgabe des Art. 32 DSGVO treffen wir unter
                        Berücksichtigung des Stands der Technik, der
                        Implementierungskosten und der Art, des Umfangs, der
                        Umstände und der Zwecke der Verarbeitung sowie der
                        unterschiedlichen Eintrittswahrscheinlichkeit und
                        Schwere des Risikos für die Rechte und Freiheiten
                        natürlicher Personen, geeignete technische und
                        organisatorische Maßnahmen, um ein dem Risiko
                        angemessenes Schutzniveau zu gewährleisten
                        <br />
                        Zu den Maßnahmen gehören insbesondere die Gewährleistung
                        der Vertraulichkeit, Integrität und Verfügbarkeit von
                        Daten durch Kontrolle des physischen Zugangs zu den
                        Daten, als auch des sie betreffenden Zugriffs, der
                        Eingabe, der Weitergabe, der Verfügbarkeit und der
                        Trennung. Ferner haben wir Verfahren eingerichtet, die
                        eine Wahrnehmung von Betroffenenrechten, die Löschung
                        von Daten und Reaktionen auf die Gefährdung der Daten
                        gewährleisten. Ferner berücksichtigen wir den Schutz
                        personenbezogener Daten bereits bei der Entwicklung bzw.
                        Auswahl von Hardware, Software sowie Verfahren nach dem
                        Prinzip des Datenschutzes durch Technikgestaltung und
                        durch datenschutzfreundliche Voreinstellungen (Art. 25
                        DSGVO)
                    </p>
                    <h3 id="dsg-general-coprocessing">
                        Zusammenarbeit mit Auftragsverarbeitern und Dritten
                    </h3>
                    <p>
                        Sofern wir im Rahmen unserer Verarbeitung Daten anderen
                        Personen und Unternehmen (Auftragsverarbeitern oder
                        Dritten) offenbaren, sie an diese übermitteln oder ihnen
                        sonst Zugriff auf die Daten gewähren, erfolgt dies nur
                        auf Grundlage einer gesetzlichen Erlaubnis (z.B. wenn
                        eine Übermittlung der Daten an Dritte, wie an
                        Zahlungsdienstleister, gem. Art. 6 Abs. 1 lit. b DSGVO
                        zur Vertragserfüllung erforderlich ist), Sie
                        eingewilligt haben, eine rechtliche Verpflichtung dies
                        vorsieht oder auf Grundlage unserer berechtigten
                        Interessen (z.B. beim Einsatz von Beauftragten,
                        Webhostern, etc.).
                    </p>
                    <p>
                        Sofern wir Dritte mit der Verarbeitung von Daten auf
                        Grundlage eines sog. "Auftragsverarbeitungsvertrages"
                        beauftragen, geschieht dies auf Grundlage des Art. 28
                        DSGVO.
                    </p>
                    <h3 id="dsg-general-thirdparty">
                        Übermittlungen in Drittländer
                    </h3>
                    <p>
                        Sofern wir Daten in einem Drittland (d.h. außerhalb der
                        Europäischen Union (EU) oder des Europäischen
                        Wirtschaftsraums (EWR)) verarbeiten oder dies im Rahmen
                        der Inanspruchnahme von Diensten Dritter oder
                        Offenlegung, bzw. Übermittlung von Daten an Dritte
                        geschieht, erfolgt dies nur, wenn es zur Erfüllung
                        unserer (vor)vertraglichen Pflichten, auf Grundlage
                        Ihrer Einwilligung, aufgrund einer rechtlichen
                        Verpflichtung oder auf Grundlage unserer berechtigten
                        Interessen geschieht. Vorbehaltlich gesetzlicher oder
                        vertraglicher Erlaubnisse, verarbeiten oder lassen wir
                        die Daten in einem Drittland nur beim Vorliegen der
                        besonderen Voraussetzungen des Art. 44 ff. DSGVO. D.h.
                        die Verarbeitung erfolgt z.B. auf Grundlage besonderer
                        Garantien, wie der offiziell anerkannten Feststellung
                        eines der EU entsprechenden Datenschutzniveaus (z.B. für
                        die USA durch das "Privacy Shield") oder Beachtung
                        offiziell anerkannter spezieller vertraglicher
                        Verpflichtungen (so genannte
                        "Standardvertragsklauseln").
                    </p>
                    <h3 id="dsg-general-rightssubject">
                        Rechte der betroffenen Personen
                    </h3>
                    <p>
                        Sie haben das Recht, eine Bestätigung darüber zu
                        verlangen, ob betreffende Daten verarbeitet werden und
                        auf Auskunft über diese Daten sowie auf weitere
                        Informationen und Kopie der Daten entsprechend Art. 15
                        DSGVO.
                    </p>
                    <p>
                        Sie haben entsprechend. Art. 16 DSGVO das Recht, die
                        Vervollständigung der Sie betreffenden Daten oder die
                        Berichtigung der Sie betreffenden unrichtigen Daten zu
                        verlangen.
                    </p>
                    <p>
                        Sie haben nach Maßgabe des Art. 17 DSGVO das Recht zu
                        verlangen, dass betreffende Daten unverzüglich gelöscht
                        werden, bzw. alternativ nach Maßgabe des Art. 18 DSGVO
                        eine Einschränkung der Verarbeitung der Daten zu
                        verlangen
                        <br />
                        Sie haben das Recht zu verlangen, dass die Sie
                        betreffenden Daten, die Sie uns bereitgestellt haben,
                        nach Maßgabe des Art. 20 DSGVO zu erhalten und deren
                        Übermittlung an andere Verantwortliche zu fordern.
                    </p>
                    <p>
                        Sie haben gem. Art. 77 DSGVO das Recht, eine Beschwerde
                        bei der zuständigen Aufsichtsbehörde einzureichen.
                    </p>
                    <h3 id="dsg-general-revokeconsent">Widerrufsrecht</h3>
                    <p>
                        Sie haben das Recht, erteilte Einwilligungen gem. Art. 7
                        Abs. 3 DSGVO mit Wirkung für die Zukunft zu widerrufen
                    </p>
                    <h3 id="dsg-general-object">Widerspruchsrecht</h3>
                    <p>
                        Sie können der künftigen Verarbeitung der Sie
                        betreffenden Daten nach Maßgabe des Art. 21 DSGVO
                        jederzeit widersprechen. Der Widerspruch kann
                        insbesondere gegen die Verarbeitung für Zwecke der
                        Direktwerbung erfolgen.
                    </p>
                    <h3 id="dsg-general-cookies">
                        Cookies und Widerspruchsrecht bei Direktwerbung
                    </h3>
                    <p>
                        "Cookies" sind kleine Dateien, die auf Computern der
                        Nutzer gespeichert werden. Innerhalb der Cookies können
                        unterschiedliche Angaben gespeichert werden. Ein Cookie
                        dient primär dazu, die Angaben zu einem Nutzer (bzw. dem
                        Gerät auf dem das Cookie gespeichert ist) während oder
                        auch nach seinem Besuch innerhalb eines Onlineangebotes
                        zu speichern. Als temporäre Cookies, bzw.
                        "Session-Cookies" oder "transiente Cookies", werden
                        Cookies bezeichnet, die nach dem Verlassen eines
                        Onlineangebotes und Schließen des Browsers gelöscht
                        werden. In einem solchen Cookie wird z.B. der Inhalt
                        eines Warenkorbs in einem Onlineshop oder ein
                        Login-Status gespeichert. Als "permanent" oder
                        "persistent" werden Cookies bezeichnet, die auch nach
                        dem Schließen des Browsers gespeichert bleiben. So wird
                        z.B. der Login-Status gespeichert, wenn die Nutzer diese
                        nach mehreren Tagen aufsuchen. Ebenso können in einem
                        solchen Cookie die Interessen der Nutzer gespeichert
                        werden, die für Reichweitenmessung oder Marketingzwecke
                        verwendet werden. Als "Third-Party-Cookie" werden
                        Cookies bezeichnet, die von anderen Anbietern als dem
                        Verantwortlichen, der das Onlineangebot betreibt,
                        angeboten werden (andernfalls, wenn nur dessen Cookies
                        als "First-Party-Cookies" bezeichnet werden)
                        <br />
                        Wir können temporäre und permanente Cookies einsetzen
                        und klären hierüber im Rahmen unserer
                        Datenschutzerklärung auf.
                    </p>
                    <p>
                        Falls die Nutzer nicht möchten, dass Cookies auf ihrem
                        Rechner gespeichert werden, werden sie gebeten die
                        entsprechende Option in den Systemeinstellungen ihres
                        Browsers zu deaktivieren. Gespeicherte Cookies können in
                        den Systemeinstellungen des Browsers gelöscht werden.
                        Der Ausschluss von Cookies kann zu
                        Funktionseinschränkungen dieses Onlineangebotes führen.
                    </p>
                    <p>
                        Ein allgemeiner Widerspruch gegen den Einsatz der zu
                        Zwecken des Onlinemarketing eingesetzten Cookies kann
                        bei einer Vielzahl von Diensten, vor allem im Fall des
                        Trackings, über die US-amerikanische Seite&nbsp;
                        <a href="http://www.aboutads.info/choices/">
                            http://www.aboutads.info/choices/
                        </a>
                        &nbsp;oder die EU-Seite&nbsp;
                        <a href="http://www.youronlinechoices.com/">
                            http://www.youronlinechoices.com/
                        </a>
                        &nbsp;erklärt werden. Des Weiteren kann die Speicherung
                        von Cookies mittels deren Abschaltung in den
                        Einstellungen des Browsers erreicht werden. Bitte
                        beachten Sie, dass dann gegebenenfalls nicht alle
                        Funktionen dieses Onlineangebotes genutzt werden können.
                    </p>
                    <h3 id="dsg-general-erasure">Löschung von Daten</h3>
                    <p>
                        Die von uns verarbeiteten Daten werden nach Maßgabe der
                        Art. 17 und 18 DSGVO gelöscht oder in ihrer Verarbeitung
                        eingeschränkt. Sofern nicht im Rahmen dieser
                        Datenschutzerklärung ausdrücklich angegeben, werden die
                        bei uns gespeicherten Daten gelöscht, sobald sie für
                        ihre Zweckbestimmung nicht mehr erforderlich sind und
                        der Löschung keine gesetzlichen Aufbewahrungspflichten
                        entgegenstehen. Sofern die Daten nicht gelöscht werden,
                        weil sie für andere und rechtlich zulässige Zwecke
                        erforderlich sind, wird deren Verarbeitung
                        eingeschränkt. D.h. die Daten werden gesperrt und nicht
                        für andere Zwecke verarbeitet. Das gilt z.B. für Daten,
                        die aus handels- oder steuerrechtlichen Gründen
                        aufbewahrt werden müssen.
                    </p>
                    <p>
                        Nach gesetzlichen Vorgaben in Deutschland erfolgt die
                        Aufbewahrung insbesondere für 10 Jahre gemäß §§ 147 Abs.
                        1 AO, 257 Abs. 1 Nr. 1 und 4, Abs. 4 HGB (Bücher,
                        Aufzeichnungen, Lageberichte, Buchungsbelege,
                        Handelsbücher, für die Besteuerung relevante Unterlagen,
                        etc.) und 6 Jahre gemäß § 257 Abs. 1 Nr. 2 und 3, Abs. 4
                        HGB (Handelsbriefe).
                    </p>
                    <p>
                        Nach gesetzlichen Vorgaben in Österreich erfolgt die
                        Aufbewahrung insbesondere für 7 J. gemäß § 132 Abs. 1
                        BAO (Buchhaltungsunterlagen, Belege/Rechnungen, Konten,
                        Belege, Geschäftspapiere, Aufstellung der Einnahmen und
                        Ausgaben, etc.), für 22 Jahre im Zusammenhang mit
                        Grundstücken und für 10 Jahre bei Unterlagen im
                        Zusammenhang mit elektronisch erbrachten Leistungen,
                        Telekommunikations-, Rundfunk- und Fernsehleistungen,
                        die an Nicht-EU-Unternehmen in EU-Mitgliedstaaten
                        erbracht werden und für die der Mini-One-Stop-Shop
                        (MOSS) in Anspruch genommen wird.
                    </p>
                    <h3 id="dsg-administration">
                        Administration, Finanzbuchhaltung, Büroorganisation,
                        Kontaktverwaltung
                    </h3>
                    <p>
                        <span className="ts-pattern-content ">
                            Wir verarbeiten Daten im Rahmen von
                            Verwaltungsaufgaben sowie Organisation unseres
                            Betriebs, Finanzbuchhaltung und Befolgung
                            rechtlicher Pflichten, wie z.B. der Archivierung.
                            Hierbei verarbeiten wir dieselben Daten, die wir
                            auch im Rahmen der Erbringung unserer vertraglichen
                            Leistungen verarbeiten. Die Verarbeitungsgrundlagen
                            sind Art. 6 Abs. 1 lit. c. DSGVO, Art. 6 Abs. 1 lit.
                            f. DSGVO. Von der Verarbeitung sind Kunden,
                            Interessenten, Geschäftspartner und Websitebesucher
                            betroffen. Der Zweck und unser Interesse an der
                            Verarbeitung liegt in der Administration,
                            Finanzbuchhaltung, Büroorganisation,
                            Datenarchivierung, d.h. Aufgaben, die der
                            Aufrechterhaltung unserer Geschäftstätigkeit,
                            Wahrnehmung unserer Aufgaben und Erbringung unserer
                            Leistungen dienen. Die Löschung der Daten im
                            Hinblick auf vertragliche Leistungen und
                            vertragliche Kommunikation entspricht den, bei
                            diesen Verarbeitungstätigkeiten genannten Angaben.
                        </span>
                    </p>
                    <p>
                        Wir offenbaren oder übermitteln Daten an die
                        Finanzverwaltung, Berater, wie z.B., Steuerberater oder
                        Wirtschaftsprüfer sowie weitere Gebührenstellen und
                        Zahlungsdienstleister
                        <br />
                        Ferner speichern wir auf Grundlage unserer
                        Geschäftsinteressen Angaben zu Lieferanten,
                        Organisatoren und sonstigen Geschäftspartnern, z.B.
                        zwecks späterer Kontaktaufnahme. Diese, grundsätzlich
                        dauerhaften, unternehmensbezogenen Daten speichern wir
                        grundsätzlich dauerhaft.
                    </p>
                    <h3 id="dsg-businessanalysis">
                        Geschäftsanalyse und Marktforschung
                    </h3>
                    <p>
                        <span className="ts muster-content ">
                            Um unser Geschäft wirtschaftlich betreiben zu
                            können, Markttendenzen, Wünsche der Vertragspartner
                            und Nutzer erkennen zu können, werten wir die Daten
                            verfügbar zu uns bezüglich Geschäftsvorgängen,
                            Verträgen, Anfragen, etc. aus. Dabei verarbeiten wir
                            Bestandsdaten, Kommunikationsdaten, Vertragsdaten,
                            Zahlungsdaten, Nutzungsdaten, Metadaten auf
                            Grundlage des Art. 6 Abs. 1 lit. f. DSGVO, wobei zu
                            den betroffenen Personen Vertragspartner,
                            Interessenten, Kunden, Besucher und Nutzer unseres
                            Onlineangebotes gehören.
                        </span>
                    </p>
                    <p>
                        Die Analysen erfolgen zum Zwecke der
                        Geschäftsauswertung, des Marketings und der
                        Marktforschung. Dabei können wir die Profile der
                        registrierten Nutzer mit Angaben, z.B. zu deren in
                        Anspruch genommenen Leistungen berücksichtigen. Die
                        Analysen dienen uns zur Steigerung der
                        Nutzerfreundlichkeit, der Optimierung unseres Angebotes
                        und der Betriebswirtschaftlichkeit. Die Analysen dienen
                        uns allein und werden nicht extern offenbart, es sei
                        denn, es handelt sich um anonyme, aggregierte
                        Wertanalysen.
                    </p>
                    <p>
                        Sofern diese Analysen oder Profile personenbezogen sind,
                        werden sie mit Beendigung des Nutzers gelöscht oder
                        anonymisiert, andernfalls nach zwei Jahren ab
                        Vertragsschluss. Im Übrigen werden die übergeordneten
                        Geschäftsanalysen und allgemeinen Trendbestimmungen nach
                        Möglichkeit anonym erstellt.
                    </p>
                    <h3 id="dsg-affiliate-Amazon">Amazon Partnerprogramm</h3>
                    <p>
                        <span className="ts -muster-content ">
                            Wir sind auf Grundlage unserer berechtigten
                            Interessen (d.h. Interesse an der wirtschaftlichen
                            Betrieb unseres Onlineangebotes im Sinne des Art. 6
                            Abs. 1 lit. f. DSGVO) Teilnehmer des
                            Partnerprogramms von Amazon EU, das zur
                            Bereitstellung eines Mediums für Websites konzipiert
                            wurde, mittels dessen durch Platzierung von
                            Werbeanzeigen und Links zu Amazon.de
                            Werbekostenerstattungen verdient werden können (sog.
                            Affiliate-System). Als Amazon-Partner verdienen wir
                            an qualifizierten Käufen.
                        </span>
                    </p>
                    <p>
                        Amazon setzt Cookies ein, um die Herkunft der
                        Bestellungen nachvollziehen zu können. So kann Amazon
                        erkennen, dass Sie den Partnerlink auf dieser Website
                        geklickt haben und anschließend ein Produkt von Amazon
                        erworben haben.
                    </p>
                    <p>
                        Weitere Informationen zur Datennutzung durch Amazon und
                        Widerspruchsmöglichkeiten erhalten Sie in der
                        Datenschutzerklärung des Unternehmens:&nbsp;
                        <a
                            href="https://www.amazon.com/gp/help/customer/display.html?nodeId=201909010"
                            target="_blank"
                            rel="noopener"
                        >
                            https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010
                        </a>
                    </p>
                    <p>
                        Hinweis: Amazon und das Amazon-Logo sind Warenzeichen
                        von Amazon.com, Inc. oder eines seiner verbundenen
                        Unternehmen.
                    </p>
                    <h3 id="dsg-musicpodcast-soundcloud">Soundcloud</h3>
                    <h2>
                        <a
                            href="https://www.amazon.com/gp/help/customer/display.html?nodeId=201909010"
                            target="_blank"
                            rel="noopener"
                        >
                            <span className="ts-pattern-content">
                                Unsere Podcasts werden auf der Plattform
                                "Soundcloud" der SoundCloud Limited,
                                Rheinsberger Str. 76/77, 10115 Berlin,
                                Deutschland angeboten und von dieser Plattform
                                wiedergegeben.
                            </span>
                        </a>
                    </h2>
                    <p>
                        Hierzu binden wir sogenannte Soundcloud-Widgets in
                        unsere Website ein. Es handelt sich um Abspielsoftware,
                        die es Nutzern ermöglicht, die Podcasts abzuspielen.
                        Hierbei kann Soundcloud messen, welche Podcasts in
                        welchem Umfang gehört werden und diese Informationen
                        pseudonym für statistische und geschäftliche Zwecke
                        verarbeiten. Hierzu können Cookies in den Browsern der
                        Nutzer gespeichert und zu Erstellung von Nutzerprofilen
                        verwendet werden, z.B. zum Zwecke der Ausspielung von
                        Werbeanzeigen, die den potentiellen Interessen der
                        Nutzer entsprechen. Bei bei Soundcloud registrierten
                        Nutzern kann Soundcloud die Hörinformationen deren
                        Profilen zuordnen.
                    </p>
                    <p>
                        Die Nutzung erfolgt auf Grundlage unserer berechtigten
                        Interessen, d.h. Interesse an einer sicheren und
                        effizienten Bereitstellung, Analyse und Optimierung
                        unseres Audioangebotes gem. Art. 6 Abs. 1 lit. f. DSGVO.
                    </p>
                    <p>
                        Weitere Informationen und Widerspruchsmöglichkeiten
                        finden Sie in der Datenschutzerklärung von Soundcloud:
                    </p>
                    <h2>
                        <a
                            href="https://soundcloud.com/pages/privacy"
                            target="_blank"
                            rel="noopener"
                        >
                            https://soundcloud.com/pages/privacy
                        </a>
                        &nbsp;.
                    </h2>
                    <h3 id="dsg-hostingprovider">Hosting und E-Mail-Versand</h3>
                    <p>
                        <span className="ts-muster-content">
                            Die von uns in Anspruch genommenen
                            Hosting-Leistungen dienen der Zurverfügungstellung
                            der folgenden Leistungen: Infrastruktur- und
                            Plattformdienstleistungen, Rechenkapazität,
                            Speicherplatz und Datenbankdienstleistungen,
                            E-Mail-Versand, Sicherheitsleistungen sowie
                            technische Wartungsleistungen, die wir zum Zwecke
                            des Betriebs dieses Onlineangebotes einsetzen.
                        </span>
                    </p>
                    <p>
                        Hierbei verarbeiten wir, bzw. unser Hostinganbieter
                        Bestandsdaten, Kontaktdaten, Inhaltsdaten,
                        Vertragsdaten, Nutzungsdaten, Meta- und
                        Kommunikationsdaten von Kunden, Interessenten und
                        Besuchern dieses Onlineangebotes auf Grundlage unserer
                        berechtigten Interessen an einer effizienten und
                        sicheren Zurverfügungstellung dieses Onlineangebotes
                        gem. Art. 6 Abs. 1 lit. f DSGVO i.V.m. Art. 28 DSGVO
                        (Abschluss Auftragsverarbeitungsvertrag).
                    </p>
                    <h3 id="dsg-logfiles">
                        Erhebung von Zugriffsdaten und Logfiles
                    </h3>
                    <p>
                        <span className="ts-muster-content">
                            Wir, bzw. unser Hostinganbieter, erhebt auf
                            Grundlage unserer berechtigten Interessen im Sinne
                            des Art. 6 Abs. 1 lit. f. DSGVO Daten über jeden
                            Zugriff auf den Server, auf dem sich dieser Dienst
                            befindet (sog. Server-Logfiles). Zu den
                            Zugriffsdaten gehören Name der abgerufenen Webseite,
                            Datei, Datum und Uhrzeit des Abrufs, übertragene
                            Datenmenge, Meldung über erfolgreichen Abruf,
                            Browsertyp und -version, das Betriebssystem des
                            Nutzers, Referrer-URL (die zuvor besuchte Seite),
                            IP-Adresse und der anfragende Provider.
                        </span>
                    </p>
                    <p>
                        Logfile-Informationen werden aus Sicherheitsgründen
                        (z.B. zur Aufklärung von Missbrauchs- oder
                        Betrugshandlungen) für die Dauer von maximal 7 Tagen
                        gespeichert und danach gelöscht. Daten, deren weitere
                        Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis
                        zur endgültigen Klärung des jeweiligen Vorfalls von der
                        Löschung ausgenommen.
                    </p>
                    <h3 id="dsg-ga-googleanalytics">Google Analytics</h3>
                    <p>
                        <span className="ts-pattern-content">
                            Wir setzen auf Grundlage unserer berechtigten
                            Interessen (d.h. Interesse an der Analyse,
                            Optimierung und wirtschaftlichen Betrieb unseres
                            Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f.
                            DSGVO) Google Analytics, einen Webanalysedienst der
                            Google LLC ("Google") ein. Google verwendet Cookies.
                            Die durch das Cookie erzeugten Informationen über
                            Benutzung des Onlineangebotes durch die Nutzer
                            werden in der Regel an einen Server von Google in
                            den USA übertragen und dort gespeichert.
                        </span>
                    </p>
                    <p>
                        Google ist unter dem Privacy-Shield-Abkommen
                        zertifiziert und bietet hierdurch eine Garantie, das
                        europäische Datenschutzrecht einzuhalten (
                        <a
                            href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active"
                            target="_blank"
                            rel="noopener"
                        >
                            https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active
                        </a>
                        ).
                    </p>
                    <p>
                        Google wird diese Informationen in unserem Auftrag
                        verwenden, um die Nutzung unseres Onlineangebotes durch
                        die Nutzer auszuwerten, um Reports über die Aktivitäten
                        innerhalb dieses Onlineangebotes zusammenzustellen und
                        um weitere, mit der Nutzung dieses Onlineangebotes und
                        der Internetnutzung verbundene Dienstleistungen, uns
                        gegenüber zu erbringen. Dabei können aus den
                        verarbeiteten Daten pseudonyme Nutzungsprofile der
                        Nutzer erstellt werden.
                    </p>
                    <p>
                        Wir setzen Google Analytics nur mit aktivierter
                        IP-Anonymisierung ein. Das bedeutet, die IP-Adresse der
                        Nutzer wird von Google innerhalb von Mitgliedstaaten der
                        Europäischen Union oder in anderen Vertragsstaaten des
                        Abkommens über den Europäischen Wirtschaftsraum gekürzt.
                        Nur in Ausnahmefällen wird die volle IP-Adresse an einen
                        Server von Google in den USA übertragen und dort
                        gekürzt.
                    </p>
                    <p>
                        Die von dem Browser des Nutzers übermittelte IP-Adresse
                        wird nicht mit anderen Daten von Google zusammengeführt.
                        Die Nutzer können die Speicherung der Cookies durch eine
                        entsprechende Einstellung ihrer Browser-Software
                        verhindern; die Nutzer können darüber hinaus die
                        Erfassung der durch das Cookie erzeugten und auf ihre
                        Nutzung des Onlineangebotes bezogenen Daten an Google
                        sowie die Verarbeitung dieser Daten durch Google
                        verhindern, indem sie das unter dem folgenden Link
                        verfügbare Browser-Plugin herunterladen und
                        installieren:&nbsp;
                        <a
                            href="http://tools.google.com/dlpage/gaoptout?hl=en"
                            target="_blank"
                            rel="noopener"
                        >
                            http://tools.google.com/dlpage/gaoptout?hl=en
                        </a>
                        .
                    </p>
                    <p>
                        Weitere Informationen zur Datennutzung durch Google,
                        Einstellungs- und Widerspruchsmöglichkeiten, erfahren
                        Sie in der Datenschutzerklärung von Google (
                        <a
                            href="https://policies.google.com/technologies/ads"
                            target="_blank"
                            rel="noopener"
                        >
                            https://policies.google.com/technologies/ads
                        </a>
                        ), sowie in den Einstellungen für die Darstellung von
                        Werbeeinblendungen durch Google&nbsp;
                        <a
                            href="https://adssettings.google.com/authenticated"
                            target="_blank"
                            rel="noopener"
                        >
                            (https://adssettings.google.com/authenticated)
                        </a>
                        .
                    </p>
                    <p>
                        Die personenbezogenen Daten der Nutzer werden nach 14
                        Monaten gelöscht oder anonymisiert.
                    </p>
                    <h3 id="dsg-ga-universal">Google Universal Analytics</h3>
                    <p>
                        <span className="ts-pattern-content">
                            Wir setzen Google Analytics in der Ausgestaltung als
                            "
                            <a
                                href="https://support.google.com/analytics/%20answer%20/%202790010?%20hl%20=%20DE%20&amp;%20ref_topic%20=%206010376"
                                target=" _blank "
                            >
                                Universal Analytics
                            </a>
                            " ein. "Universal Analytics" meint ein Verfahren von
                            Google Analytics, bei dem die Nutzeranalyse auf
                            Grundlage einer pseudonymen User-ID erfolgt und
                            damit ein pseudonymes Profil des Nutzers mit
                            Informationen aus der Nutzung verschiedener Geräte
                            erstellt wird (sog. "Cross-Device-Tracking").
                        </span>
                    </p>
                    <h3 id="dsg-ga-audiences">Google Analytics Remarketing</h3>
                    <p>
                        <span className="ts-muster-content">
                            Wir nutzen Google Analytics, um die innerhalb von
                            Google-Werbediensten und deren Partnern geschalteten
                            Anzeigen nur solchen Nutzern anzuzeigen, die auch
                            ein Interesse an unserem Onlineangebot gezeigt haben
                            oder die bestimmte Merkmale (z.B. Interessen in
                            bestimmten Themen oder Produkten, die anhand der
                            besuchten Webseiten festgestellt werden) aufweisen,
                            die wir an Google übermitteln (sog. "Remarketing"
                            bzw. "Google Analytics Audiences"). Mit Remarketing
                            Audiences möchten wir auch sicherstellen, dass
                            unsere Anzeigen dem potentiellen Interesse der
                            Nutzer entsprechen.
                            <br />
                        </span>
                    </p>
                    <h3 id="dsg-socialmedia">
                        Onlinepräsenzen in sozialen Medien
                    </h3>
                    <p>
                        <span className="ts muster-content ">
                            Wir unterhalten Onlinepräsenzen innerhalb sozialer
                            Netzwerke und Plattformen, um mit den dort aktiven
                            Kunden, Interessenten und Nutzern zu kommunizieren
                            und sie dort über unsere Leistungen zu informieren.
                        </span>
                    </p>
                    <p>
                        Wir weisen darauf hin, dass dabei Daten der Nutzer
                        außerhalb des Raumes der Europäischen Union verarbeitet
                        werden können. Dies kann Risiken für die Nutzer mit sich
                        bringen, weil z.B. die Durchsetzung der Rechte der
                        Nutzer erschwert werden könnte. Im Hinblick auf
                        US-Anbieter, die unter dem Privacy Shield zertifiziert
                        sind, weisen wir darauf hin, dass sie sich verpflichten,
                        die EU-Datenschutzstandards einzuhalten.
                    </p>
                    <p>
                        Ferner werden die Daten der Nutzer im Regelfall für
                        Marktforschungs- und Werbezwecke verarbeitet. So können
                        z.B. aus dem Nutzungsverhalten und sich daraus
                        ergebenden Interessen der Nutzer Nutzungsprofile
                        erstellt werden. Die Nutzungsprofile können wiederum
                        verwendet werden, um z.B. Werbeanzeigen innerhalb und
                        außerhalb der Plattformen zu schalten, die mutmaßlich
                        den Interessen der Nutzer entsprechen. Zu diesen Zwecken
                        werden im Regelfall Cookies auf den Rechnern der Nutzer
                        gespeichert, in denen das Nutzungsverhalten und die
                        Interessen der Nutzer gespeichert werden. Ferner können
                        in den Nutzungsprofilen auch Daten unabhängig von den
                        von den Nutzern verwendeten Geräten gespeichert werden
                        (insbesondere wenn die Nutzer Mitglieder der jeweiligen
                        Plattformen sind und bei diesen eingeloggt sind)
                        <br />
                        Die Verarbeitung der personenbezogenen Daten der Nutzer
                        erfolgt auf Grundlage unserer berechtigten Interessen an
                        einer effektiven Information der Nutzer und
                        Kommunikation mit den Nutzern gem. Art. 6 Abs. 1 lit. f.
                        DSGVO. Falls die Nutzer von den jeweiligen Anbietern um
                        eine Einwilligung in die Datenverarbeitung gebeten
                        werden (d.h. ihre Einwilligung erklären, z.B. durch
                        Anhaken eines Kontrollkästchens oder Bestätigung einer
                        Schaltfläche), ist die Rechtsgrundlage der Verarbeitung
                        Art. 6 Abs. 1 lit. a., Art. 7 DSGVO.
                    </p>
                    <p>
                        Für eine detaillierte Darstellung der jeweiligen
                        Verarbeitungen und der Widerspruchsmöglichkeiten
                        (Opt-Out) verweisen wir auf die nachfolgend verlinkten
                        Angaben der Anbieter.
                    </p>
                    <p>
                        Auch im Falle von Auskunftsanfragen und der
                        Geltendmachung von Nutzerrechten weisen wir darauf hin,
                        dass diese am effektivsten bei den Anbietern geltend
                        gemacht werden können. Nur die Anbieter haben Zugriff
                        auf die Daten der Nutzer und können direkt entsprechende
                        Maßnahmen ergreifen und Auskünfte geben. Sollten Sie
                        dennoch Hilfe benötigen, dann können Sie sich an uns
                        wenden
                        <br />- Facebook (Facebook Ireland Ltd., 4 Grand Canal
                        Square, Grand Canal Harbour, Dublin 2, Irland) -
                        Datenschutzerklärung:&nbsp;
                        <a
                            href="https://www.facebook.com/about/privacy/"
                            target="_blank"
                            rel="noopener"
                        >
                            https://www.facebook.com/about/privacy/
                        </a>
                        , Opt-Out:&nbsp;
                        <a
                            href="https://www.facebook.com/settings?tab=ads"
                            target="_blank"
                            rel="noopener"
                        >
                            https://www.facebook.com/settings?tab=ads
                        </a>
                        &nbsp;und&nbsp;
                        <a
                            href="http://www.youronlinechoices.com/"
                            target="_blank"
                            rel="noopener"
                        >
                            http://www.youronlinechoices.com
                        </a>
                        , Privacy Shield:&nbsp;
                        <a
                            href="https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&amp;status=Active"
                            target="_blank"
                            rel="noopener"
                        >
                            https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&amp;status=Active
                        </a>
                        <br />- Google / YouTube (Google LLC, 1600 Amphitheater
                        Parkway, Mountain View, CA 94043, USA) -
                        Datenschutzerklärung:&nbsp;
                        <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener"
                        >
                            https://policies.google.com/privacy
                        </a>
                        , Opt-Out:&nbsp;
                        <a
                            href="https://adssettings.google.com/authenticated"
                            target="_blank"
                            rel="noopener"
                        >
                            https://adssettings.google.com/authenticated
                        </a>
                        , Privacy Shield:&nbsp;
                        <a
                            href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active"
                            target="_blank"
                            rel="noopener"
                        >
                            https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active
                        </a>
                        <br />- Instagram (Instagram Inc., 1601 Willow Road, MO,
                        94025, USA) -{" "}
                        <a href="http://instagram.com/about/legal/privacy">
                            Datenschutzerklärung / Opt-Out
                        </a>
                        .
                    </p>
                    <p>
                        - Twitter (Twitter Inc., 1355 Market Street, Suite 900,
                        San Francisco, CA 94103, USA) -
                        Datenschutzerklärung:&nbsp;
                        <a
                            href="https://twitter.com/privacy"
                            target="_blank"
                            rel="noopener"
                        >
                            https://twitter.com/privacy
                        </a>
                        , Opt-Out:&nbsp;
                        <a
                            href="https://twitter.com/personalization"
                            target="_blank"
                            rel="noopener"
                        >
                            https://twitter.com/personalization
                        </a>
                        , Privacy Shield:&nbsp;
                        <a
                            href="https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&amp;status=Active"
                            target="_blank"
                            rel="noopener"
                        >
                            https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&amp;status=Active
                        </a>
                        .<br />- Pinterest (Pinterest Inc., 635 High Street,
                        Palo Alto, CA, 94301, USA) - Datenschutzerklärung /
                        Opt-Out:&nbsp;
                        <a
                            href="https://about.pinterest.com/en/privacy%20-policy"
                            target="_blank"
                            rel="noopener"
                        >
                            https://about.pinterest.com/de/privacy-policy
                        </a>
                    </p>
                    <p>
                        - LinkedIn (LinkedIn Ireland Unlimited Company Wilton
                        Place, Dublin 2, Irland) - Datenschutzerklärung
                        <a
                            href="https://www.linkedin.com/legal/privacy-policy"
                            target="_blank"
                            rel="noopener"
                        >
                            https://www.linkedin.com/legal/privacy-policy
                        </a>
                        , Opt-Out:&nbsp;
                        <a
                            href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
                            target="_blank"
                            rel="noopener"
                        >
                            https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out
                        </a>
                        , Privacy Shield:&nbsp;
                        <a
                            href="https://%20//www.privacyshield.%20gov%20/participant%20id%20=%20a2zt0000000L0UZAA0%20&amp;%20amp;?%20status%20=%20Active"
                            target="_blank"
                            rel="noopener"
                        >
                            https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&amp;status=Active
                        </a>
                        .<br />- Xing (XING AG, Dammtorstrasse 29-32, 20354
                        Hamburg, Deutschland) - Datenschutzerklärung /
                        Opt-Out:&nbsp;
                        <a
                            href="https://privacy.xing.com/en/privacy_policy"
                            target="_blank"
                            rel="noopener"
                        >
                            https://privacy.xing.com/de/datenschutzerklaerung
                        </a>
                        .
                    </p>
                    <h3 id="dsg-thirdparty-introduction">
                        Einbindung von Diensten und Inhalten Dritter
                    </h3>
                    <p>
                        <span className="ts-pattern-content">
                            Wir setzen innerhalb unseres Onlineangebotes auf
                            Grundlage unserer berechtigten Interessen (d.h.
                            Interesse an der Analyse, Optimierung und
                            wirtschaftlichen Betrieb unseres Onlineangebotes im
                            Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Inhalts- oder
                            Serviceangebote von Drittanbietern ein, um deren
                            Inhalte und Services, wie z.B. Videos oder
                            Schriftarten einzubinden (nachfolgend bezeichnet als
                            "Inhalte").
                        </span>
                    </p>
                    <p>
                        Dies setzt immer voraus, dass die Drittanbieter dieser
                        Inhalte, die IP-Adresse der Nutzer wahrnehmen, da sie
                        ohne die IP-Adresse die Inhalte nicht an deren Browser
                        senden könnten. Die IP-Adresse ist damit für die
                        Darstellung dieser Inhalte erforderlich. Wir bemühen uns
                        nur solche Inhalte zu verwenden, deren jeweilige
                        Anbieter die IP-Adresse lediglich zur Auslieferung der
                        Inhalte verwenden. Drittanbieter können ferner
                        sogenannte Pixel-Tags (unsichtbare Grafiken, auch als
                        "Web Beacons" bezeichnet) für statistische oder
                        Marketingzwecke verwenden. Die "Pixel-Tags" können
                        Informationen, wie z.B. Besucherverkehr auf den Seiten
                        dieser Website auswerten. Die pseudonymen Informationen
                        können ferner in Cookies auf dem Gerät der Nutzer
                        gespeichert werden und unter anderem technische
                        Informationen zum Browser und Betriebssystem,
                        verweisende Webseiten, Besuchszeit sowie weitere Angaben
                        zur Nutzung unseres Onlineangebotes enthalten.
                    </p>
                    <h3 id="dsg-thirdparty-vimeo">Vimeo</h3>
                    <p>
                        <span className="ts-pattern-content ">
                            Wir können die Videos der Plattform "Vimeo" des
                            Anbieters Vimeo Inc., Attention: Legal Department,
                            555 West 18th Street New York, New York 10011, USA
                            einbinden. Datenschutzerklärung:&nbsp;
                            <a
                                href="https://vimeo.com/privacy"
                                target="_blank"
                                rel="noopener"
                            >
                                https://vimeo.com/privacy
                            </a>
                            . Wir weisen darauf hin, dass Vimeo Google Analytics
                            verwenden kann und verweisen diesbezüglich auf die
                            Datenschutzerklärung (
                            <a
                                href="https://www.google.com/policies/privacy"
                                target="_blank"
                                rel="noopener"
                            >
                                https://www.google.com/policies/privacy
                            </a>
                            ) sowie Google Analytics Opt-Out-Möglichkeiten (
                            <a
                                href="http://tools.google.com/dlpage/gaoptout?hl=en"
                                target="_blank"
                                rel="noopener"
                            >
                                http://tools.google.com/dlpage/gaoptout?hl=en
                            </a>
                            ) oder Google's Datenschutzeinstellungen (
                            <a
                                href="https://%20//%20adssettings.%20google.com/"
                                target="_blank"
                                rel="noopener"
                            >
                                https://adssettings.google.com/
                            </a>
                            )
                        </span>
                    </p>
                    <h3 id="dsg-thirdparty-youtube">Youtube</h3>
                    <p>
                        <span className="ts-pattern-content">
                            Wir binden die Videos der Plattform "YouTube" des
                            Anbieters Google LLC, 1600 Amphitheater Parkway,
                            Mountain View, CA 94043, USA ein.
                            Datenschutzerklärung:&nbsp;
                            <a
                                href="https://www.google.com/policies/privacy/"
                                target="_blank"
                                rel="noopener"
                            >
                                https://www.google.com/policies/privacy/
                            </a>
                            , Opt-Out:&nbsp;
                            <a
                                href="https://adssettings.google.com/authenticated"
                                target="_blank"
                                rel="noopener"
                            >
                                https://adssettings.google.com/authenticated
                            </a>
                            .
                        </span>
                    </p>
                </div>
                <div className="lang-en">
                    <h2>Privacy Policy</h2>
                    <p>
                        This privacy policy clarifies the nature, scope and
                        purpose of the processing of personal information
                        (hereafter "Data"). within our online offer and the
                        related websites, functions and contents as well as
                        external online presences, eg our Social Media Profile
                        (collectively referred to as the "Online Offering").
                        With regard to the terminology used, e.g. "Processing"
                        or "Responsible", we refer to the definitions in Article
                        4 of the General Data Protection Regulation (GDPR).
                    </p>
                    <h3>Responsible</h3>
                    <p>
                        <span>
                            ago
                            <br />
                            Manuel Minniti
                            <br />
                            Seyfferstraße 89
                            <br />
                            70197 Stuttgart Germany
                            <br />
                            E-Mail: mail@ago-band.info
                            <br />
                        </span>
                    </p>
                    <h3>Types of processed data:</h3>
                    <p>
                        - Inventory data (eg, Names, addresses).
                        <br />
                        - contact information (e.g., email, phone numbers).
                        <br />
                        - content data (e.g., text input, photographs, videos).
                        <br />
                        - usage data (e.g., websites visited, interest in
                        content, access times).
                        <br />- Meta / communication data (e.g., device
                        information, IP addresses).
                    </p>
                    <h3>Affected Person Categories</h3>
                    <p>
                        Visitors and Users of the Online Offering (In the
                        following, we collectively refer to the Affected Persons
                        as "Users")
                    </p>
                    <h3>Purpose of Processing</h3>
                    <p>
                        - Providing the online offering, its features and
                        content.
                        <br />
                        - Answering contact requests and communicating with
                        users.
                        <br />
                        - Safety measures
                        <br />. - Audience measurement / Marketing |
                    </p>
                    <h3>Terms Used</h3>
                    <p>
                        "Personal Information" is any information that
                        identifies itself to an identified person or
                        identifiable natural person (hereinafter referred to as
                        "affected person"); a natural person is considered as
                        identifiable, which can be identified directly or
                        indirectly, in particular by means of assignment to an
                        identifier such as a name, to an identification number,
                        to location data, to an online identifier (eg cookie) or
                        to one or more special features, are the expression of
                        the physical, physiological, genetic, mental, economic,
                        cultural or social identity of this natural person
                        <br />
                        "Processing" means any process performed with or without
                        the aid of automated procedures or any such process
                        associated with personal data. The term covers a wide
                        range and covers practically every handling of data.
                    </p>
                    <p>
                        "Pseudonymisation" means the processing of personal data
                        in such a way that the personal data can no longer be
                        assigned to a specific data subject without additional
                        information being provided, provided that such
                        additional information is kept separate and subject to
                        technical and organizational measures to ensure that the
                        personal data not assigned to an identified or
                        identifiable natural person.
                    </p>
                    <p>
                        "Profiling" means any kind of automated processing of
                        personal data which involves the use of such personal
                        data to evaluate certain personal aspects relating to a
                        natural person, in particular aspects relating to job
                        performance, economic situation, health, personal To
                        analyze or predict preferences, interests, reliability,
                        behavior, location, or location of this natural person.
                    </p>
                    <p>
                        "Responsible" means the natural or legal person, public
                        authority, agency or other body that alone or together
                        with others decides on the purposes and means of
                        processing personal data
                        <br />
                        'Processor' means a natural or legal person, public
                        authority, body or body that processes personal data on
                        behalf of the controller.
                    </p>
                    <h3>Relevant legal basis</h3>
                    <p>
                        In accordance with Art. 13 GDPR, we inform you about the
                        legal basis of our data processing. Unless the legal
                        basis in the data protection declaration is mentioned,
                        the following applies: The legal basis for obtaining
                        consent is Article 6 (1) lit. a and Art. 7 DSGVO, the
                        legal basis for the processing for the performance of
                        our services and the execution of contractual measures
                        as well as the response to inquiries is Art. 6 (1) lit.
                        b DSGVO, the legal basis for processing in order to
                        fulfill our legal obligations is Art. 6 (1) lit. c
                        DSGVO, and the legal basis for processing in order to
                        safeguard our legitimate interests is Article 6 (1) lit.
                        f DSGVO. In the event that vital interests of the data
                        subject or another natural person require the processing
                        of personal data, Art. 6 para. 1 lit. d DSGVO as legal
                        basis.
                    </p>
                    <h3>Security Measures</h3>
                    <p>
                        In accordance with Art. 32 GDPR, we take into account
                        the state of the art, the implementation costs and the
                        type the scope, circumstances and purposes of the
                        processing and the different likelihood and severity of
                        the risk to the rights and freedoms of natural persons;
                        appropriate technical and organizational measures to
                        ensure a level of protection commensurate with the risk
                        <br />
                        Measures include, in particular, ensuring the
                        confidentiality, integrity and availability of data by
                        controlling physical access to the data, as well as
                        their access, input, disclosure, availability and
                        separation. We have also set up procedures to ensure the
                        enjoyment of data subject rights, data deletion and data
                        vulnerability. Furthermore, we consider the protection
                        of personal data already in the development or selection
                        of hardware, software and procedures, according to the
                        principle of data protection through technology design
                        and privacy-friendly default settings (Article 25 DSGVO)
                    </p>
                    <h3>
                        Collaboration with contract processors and third parties
                    </h3>
                    <p>
                        If, in the course of our processing, we disclose data to
                        other persons and companies (contract processors or
                        third parties) to them transmit or otherwise grant
                        access to the data, this is only on the basis of a legal
                        permission (eg, if a transmission of the data to third
                        parties, such as to payment service providers, in
                        accordance with Art. 6 para. 1 lit. b DSGVO required to
                        fulfill the contract), You have consented to a legal
                        obligation or on the basis of our legitimate interests
                        (eg the use of agents, web hosts, etc.).
                    </p>
                    <p>
                        Insofar as we commission third parties to process data
                        on the basis of a so-called "contract processing
                        contract", this is done on the basis of Art. 28 GDPR.
                    </p>
                    <h3 id="dsg-general-thirdparty">
                        Transfers to Third Countries
                    </h3>
                    <p>
                        If we process data in a third country (ie outside the
                        European Union (EU) or the European Economic Area (EEA))
                        or if this is done in the context of the use of third
                        party services or disclosure, or transmission of data to
                        third parties this only if it is to fulfill our (pre)
                        contractual obligations, on the basis of your consent,
                        on the basis of a legal obligation or on the basis of
                        our legitimate interests. Subject to legal or
                        contractual permissions, we process or have the data
                        processed in a third country only in the presence of the
                        special conditions of Art. 44 et seq. DSGVO. That the
                        processing is e.g. on the basis of specific guarantees,
                        such as the officially recognized level of data
                        protection (eg for the USA through the Privacy Shield)
                        or compliance with officially recognized special
                        contractual obligations (so - called "standard
                        contractual clauses").
                    </p>
                    <h3>Rights of Data Subjects</h3>
                    <p>
                        You have the right to ask for confirmation as to whether
                        such data is being processed and for information about
                        such data and for further information and copying of the
                        data accordingly Art. 15 GDPR.
                    </p>
                    <p>
                        You have accordingly. Art. 16 DSGVO the right to demand
                        the completion of the data concerning you or the
                        correction of the incorrect data concerning you.
                    </p>
                    <p>
                        In accordance with Art. 17 GDPR, they have the right to
                        demand that the relevant data be deleted without delay,
                        or alternatively to demand a restriction of the
                        processing of data in accordance with Art. 18 GDPR
                        <br />
                        You have the right to demand that the data relating to
                        you, which you have provided to us, be obtained in
                        accordance with Art. 20 GDPR and request their
                        transmission to other persons responsible.
                    </p>
                    <p>
                        You have gem. Art. 77 DSGVO the right to file a
                        complaint with the competent supervisory authority.
                    </p>
                    <h3>Right of Withdrawal</h3>
                    <p>
                        You have the right to give consent in accordance with
                        Art. Revoke Article 7 (3) of the GDPR with effect for
                        the future
                    </p>
                    <h3>Right to object</h3>
                    <p>
                        You may, in accordance with the provisions of the Art.
                        21 DSGVO contradict at any time. The objection may in
                        particular be made against processing for direct
                        marketing purposes.
                    </p>
                    <h3>Cookies and right of objection for direct mail</h3>
                    <p>
                        "Cookies" are small files, which are stored on users'
                        computers. Different information can be stored within
                        the cookies. A cookie is primarily used to store the
                        information about a user (or the device on which the
                        cookie is stored) during or after his visit to an online
                        offer. Temporary cookies, or "session cookies" or
                        "transient cookies", are cookies that are deleted after
                        a user leaves an online service and closes his browser.
                        In such a cookie, e.g. the contents of a shopping cart
                        in an online shop or a login status are saved. The term
                        "permanent" or "persistent" refers to cookies that
                        remain stored even after the browser has been closed.
                        Thus, e.g. the login status will be saved if users visit
                        it after several days. Likewise, in such a cookie the
                        interests of the users can be stored, which are used for
                        range measurement or marketing purposes. A "third-party
                        cookie" refers to cookies offered by providers other
                        than the person responsible for the online offer
                        (otherwise, if only its cookies are called "first-party
                        cookies")
                        <br />
                        We can use temporary and permanent cookies and clarify
                        this in the context of our privacy policy.
                    </p>
                    <p>
                        If users do not want cookies stored on their computer,
                        they will be asked to disable the option in their
                        browser's system settings. Saved cookies can be deleted
                        in the system settings of the browser. The exclusion of
                        cookies can lead to functional restrictions of this
                        online offer.
                    </p>
                    <p>
                        A general contradiction to the use of cookies used for
                        online marketing purposes can be found on the US side of
                        many services, especially in the case of tracking&nbsp;
                        <a href="http://www.aboutads.info/choices/">
                            http://www.aboutads.info/choices/
                        </a>
                        &nbsp;or the EU page&nbsp;
                        <a href="http://www.youronlinechoices.com/">
                            http://www.youronlinechoices.com/
                        </a>
                        &nbsp;be explained. Furthermore, the storage of cookies
                        can be achieved by switching them off in the settings of
                        the browser. Please note that it may not be possible to
                        use all the features of this online offer.
                    </p>
                    <h3>Deletion of data</h3>
                    <p>
                        The data processed by us will be processed as specified
                        Articles 17 and 18 DSGVO are deleted or restricted in
                        their processing. Unless explicitly stated in this
                        privacy policy, the data stored by us are deleted as
                        soon as they are no longer required for their purpose
                        and the deletion does not conflict with any statutory
                        storage requirements. Unless the data is deleted because
                        it is required for other and legitimate purposes, its
                        processing will be restricted. That The data is blocked
                        and not processed for other purposes. This applies, for
                        example for data that needs to be kept for commercial or
                        tax reasons.
                    </p>
                    <p>
                        According to legal requirements in Germany, the storage
                        takes place in particular for 10 years according to §§
                        147 Abs. 1 AO, 257 Abs. 1 Nr. 1 and 4, Abs. 4 HGB
                        (books, records, management reports, accounting
                        documents, trading books, relevant for taxation
                        Documents, etc.) and 6 years in accordance with § 257
                        (1) no. 2 and 3, para. 4 HGB (commercial letters).
                    </p>
                    <p>
                        According to legal regulations in Austria the storage
                        takes place especially for 7 years according to § 132
                        paragraph 1 BAO (accounting documents, receipts /
                        invoices, accounts, receipts, business papers, statement
                        of income and expenses, etc.), for 22 years in
                        connection with real estate and for 10 years in the case
                        of documents related to electronically supplied
                        services, telecommunications, broadcasting and
                        television services provided to non-EU companies in EU
                        Member States for which the Mini-One-Stop-Shop (MOSS) is
                        used. p&gt;
                    </p>
                    <h3>
                        Administration, Financial Accounting, Office
                        Organization, Contact Management
                    </h3>
                    <p>
                        <span>
                            We process data in the context of administrative
                            tasks as well as organization of our business,
                            financial accounting and compliance with legal
                            obligations, such as archiving. In doing so, we
                            process the same data that we process in the course
                            of rendering our contractual services. The
                            processing principles are Art. 6 para. 1 lit. c.
                            DSGVO, Art. 6 para. 1 lit. f. DSGVO. The processing
                            affects customers, prospects, business partners and
                            website visitors. The purpose and interest in
                            processing lies in administration, financial
                            accounting, office organization, data archiving,
                            that is, tasks that serve to maintain our business,
                            perform our duties and provide our services. The
                            deletion of the data in terms of contractual
                            performance and contractual communication is in line
                            with the information provided in these processing
                            activities.
                        </span>
                    </p>
                    <p>
                        We disclose or provide financial management information,
                        advisors, such as accountants or auditors, and other fee
                        agents and payment service providers
                        <br />
                        Furthermore, based on our business interests, we store
                        information about suppliers, promoters and other
                        business partners, e.g. for later contact. In principle,
                        we store this majority of company-related data
                        permanently.
                    </p>
                    <h3>Business Analysis and Market Research</h3>
                    <p>
                        <span>
                            In order to operate our business economically, to be
                            able to recognize market trends, wishes of the
                            contractual partners and users, we analyze the data
                            available to us for business transactions,
                            contracts, inquiries, etc. We process stock data,
                            communication data, contract data, payment data,
                            usage data, Metadata based on Art. 6 para. 1 lit. f.
                            DSGVO, whereby the data subjects include contractual
                            partners, interested parties, customers, visitors
                            and users of our online offer.
                        </span>
                    </p>
                    <p>
                        The analyzes are carried out for the purpose of business
                        analysis, marketing and market research. In doing so, we
                        can provide the profiles of registered users with
                        information, e.g. take into account their services. The
                        analyzes serve us to increase the user-friendliness, the
                        optimization of our offer and the business economics.
                        The analyzes are for us alone and will not be disclosed
                        externally unless they are anonymous, aggregated value
                        analyzes.
                    </p>
                    <p>
                        If these analyzes or profiles are personal, they will be
                        deleted or anonymised upon termination of the users,
                        otherwise after two years from the conclusion of the
                        contract. Incidentally, the overall business analyzes
                        and general trend provisions are created anonymously if
                        possible.
                    </p>
                    <h3>Amazon Affiliate Program</h3>
                    <p>
                        <span>
                            We are on the basis of our legitimate interests (ie
                            interest in the economic operation of our online
                            offer within the meaning of Art. 6 para 1 lit.
                            DSGVO) participants in the Affiliate Program of
                            Amazon EU, which provides a medium for websites was
                            designed by means of which the placement of
                            advertisements and links to Amazon.de advertising
                            rewards can be earned (so-called affiliate system).
                            That As an Amazon partner, we earn qualified
                            purchases.
                        </span>
                    </p>
                    <p>
                        Amazon uses cookies to track the origin of orders. For
                        example, Amazon may recognize that you clicked the
                        affiliate link on this site and subsequently purchased a
                        product from Amazon.
                    </p>
                    <p>
                        For more information about Amazon's data usage and
                        opt-out options, please see the company's privacy
                        policy:&nbsp;
                        <a
                            href="https://www.amazon.com/gp/help/customer/display.html?nodeId=201909010"
                            target="_blank"
                            rel="noopener"
                        >
                            https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010
                            code.
                        </a>
                    </p>
                    <p>
                        Note: Amazon and the Amazon logo are trademarks of
                        Amazon.com, Inc. or one of its affiliates.
                    </p>
                    <h3>Soundcloud</h3>
                    <h2>
                        <a
                            href="https://www.amazon.com/gp/help/customer/display.html?nodeId=201909010"
                            target="_blank"
                            rel="noopener"
                        >
                            <span>
                                Our podcasts are on the "Soundcloud" platform
                                offered by SoundCloud Limited, Rheinsberger Str.
                                76/77, 10115 Berlin, Germany and are reproduced
                                from this Platform.
                            </span>
                        </a>
                    </h2>
                    <p>
                        For this purpose, we integrate so-called Soundcloud
                        widgets into our website. It is playback software that
                        allows users to play the podcasts. Here Soundcloud can
                        measure which podcasts are heard to what extent and
                        process this information pseudonym for statistical and
                        business purposes. For this purpose, cookies can be
                        stored in the browsers of the users and used to create
                        user profiles, e.g. for the purpose of issuing
                        advertisements that correspond to the potential
                        interests of the users. For users registered with
                        Soundcloud, Soundcloud can map the listening information
                        to their profiles.
                    </p>
                    <p>
                        Use is made on the basis of our legitimate interests, i.
                        Interest in a safe and efficient provision, analysis and
                        optimization of our audio offer acc. Art. 6 para. 1 lit.
                        f. DSGVO.
                    </p>
                    <p>
                        For more information and disclaimer, see the Soundcloud
                        Privacy Policy:
                    </p>
                    <h2>
                        <a
                            href="https://soundcloud.com/pages/privacy"
                            target="_blank"
                            rel="noopener"
                        >
                            https://soundcloud.com/pages/privacy
                        </a>
                        &nbsp;.
                    </h2>
                    <h3>Hosting and Emailing</h3>
                    <p>
                        <span>
                            The hosting services we use to provide the following
                            services: infrastructure and platform services,
                            computing capacity, storage and database services,
                            e-mail delivery, security and technical maintenance
                            services we provide Use this website for the purpose
                            of operating this website.
                        </span>
                    </p>
                    <p>
                        Here we, or our hosting provider, process inventory
                        data, contact data, content data, contract data, usage
                        data, meta and communication data of customers,
                        interested parties and visitors to this online offer on
                        the basis of our legitimate interests in an efficient
                        and secure provision of this online offer acc. Art. 6
                        para. 1 lit. f DSGVO i.V.m. Art. 28 GDPR (conclusion of
                        contract processing contract)
                    </p>
                    <h3>Collection of access data and log files</h3>
                    <p>
                        <span>
                            We, or our hosting provider, collects on the basis
                            of our legitimate interests within the meaning of
                            Art. 6 para. 1 lit. f. DSGVO Data on every access to
                            the server on which this service is located
                            (so-called server log files). The access data
                            includes name of the retrieved web page, file, date
                            and time of retrieval, amount of data transferred,
                            message about successful retrieval, browser type and
                            version, the user's operating system, referrer URL
                            (the previously visited page), IP address and the
                            requesting provider .
                        </span>
                    </p>
                    <p>
                        Logfile information is stored for security purposes (for
                        example, to investigate abusive or fraudulent
                        activities) for a maximum of 7 days and then deleted.
                        Data whose further retention is required for evidential
                        purposes is excluded from the deletion until final
                        clarification of the respective incident.
                    </p>
                    <h3>Google Analytics</h3>
                    <p>
                        <span>
                            We rely on our legitimate interests (ie, interest in
                            the analysis, optimization and economic operation of
                            our online offer in the sense of Art. 6 para. 1 lit.
                            DSGVO) Google Analytics, a web analytics service
                            provided by Google LLC ("Google"). Google uses
                            cookies. The information generated by the cookie
                            about the use of the online offer by the users is
                            usually transmitted to a Google server in the USA
                            and stored there.
                        </span>
                    </p>
                    <p>
                        Google is certified under the Privacy Shield Agreement,
                        which provides a guarantee to comply with European data
                        protection law (
                        <a
                            href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active"
                            target="_blank"
                            rel="noopener"
                        >
                            https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active
                            code)
                        </a>
                        .
                    </p>
                    <p>
                        Google will use this information on our behalf to
                        evaluate the use of our online offer by users, to
                        compile reports on the activities within this online
                        offer and to provide us with further services related to
                        the use of this online offer and the internet usage. In
                        doing so, pseudonymous usage profiles of the users can
                        be created from the processed data.
                    </p>
                    <p>
                        We only use Google Analytics with activated IP
                        anonymization. This means that the IP address of the
                        users will be shortened by Google within member states
                        of the European Union or in other contracting states of
                        the Agreement on the European Economic Area. Only in
                        exceptional cases will the full IP address be sent to
                        and shortened to a Google server in the USA.
                    </p>
                    <p>
                        The IP address submitted by the user's browser will not
                        be merged with other data provided by Google. Users can
                        prevent the storage of cookies by setting their browser
                        software accordingly; Users may also prevent the
                        collection by Google of the data generated by the cookie
                        and related to their use of the online offer as well as
                        the processing of this data by Google by downloading and
                        installing the browser plug-in available under the
                        following link:
                        <br />
                        <a
                            href="http://tools.google.com/dlpage/gaoptout?hl=en"
                            target="_blank"
                            rel="noopener"
                        >
                            http://tools.google.com/dlpage/gaoptout?hl=en
                        </a>
                        .
                    </p>
                    <p>
                        For more information about Google's data usage, hiring
                        and disparaging options, please read Google's Privacy
                        Policy (
                        <a
                            href="https://policies.google.com/technologies/ads"
                            target="_blank"
                            rel="noopener"
                        >
                            https://policies.google.com/technologies/ads
                        </a>
                        ), as well as Google Ads Ads Settings&nbsp;
                        <a
                            href="https://adssettings.google.com/authenticated"
                            target="_blank"
                            rel="noopener"
                        >
                            (https://adssettings.google.com/authenticated_code)
                        </a>
                        .
                    </p>
                    <p>
                        Users' personal data will be deleted or anonymised after
                        14 months.
                    </p>
                    <h3>Google Universal Analytics</h3>
                    <p>
                        <span>
                            We set Google Analytics to "
                            <a
                                href="https://support.google.com/analytics/%20answer%20/%202790010?%20hl%20=%20DE%20&amp;%20ref_topic%20=%206010376"
                                target=" _blank "
                            >
                                Universal Analytics
                            </a>
                            ". "Universal Analytics" means a process of Google
                            Analytics, in which the user analysis is based on a
                            pseudonymous user ID and thus a pseudonymous profile
                            of the user is created with information from the use
                            of different devices (so-called "cross-device
                            tracking") .
                        </span>
                    </p>
                    <h3>Google Analytics Audience Building</h3>
                    <p>
                        <span>
                            We use Google Analytics to display advertisements
                            displayed within Google's advertising services and
                            its affiliates, only to users who have shown an
                            interest in our online offering or who have certain
                            characteristics (eg interests in particular) Themes
                            or products that are determined by the websites
                            visited) that we submit to Google (so-called
                            "remarketing" or "Google Analytics audiences"). With
                            Remarketing Audiences, we also want to make sure
                            that our ads are in the interest of the users.
                            <br />
                        </span>
                    </p>
                    <h3>online social media sites</h3>
                    <p>
                        <span>
                            We maintain online presence within social networks
                            and platforms in order to communicate with
                            customers, prospects and users active there and to
                            inform them about our services.
                        </span>
                    </p>
                    <p>
                        We point out that data of the users outside the area of
                        the European Union can be processed. This may result in
                        risks for the users because e.g. enforcement of user
                        rights could be made more difficult. With respect to US
                        providers certified under the Privacy Shield, we point
                        out that they are committed to respecting the EU's
                        privacy standards.
                    </p>
                    <p>
                        Furthermore, the data of the users are usually processed
                        for market research and advertising purposes. Thus, e.g.
                        user profiles are created from the user behavior and the
                        resulting interests of the users. The usage profiles can
                        in turn be used to e.g. Place advertisements inside and
                        outside the platforms that are allegedly in line with
                        users' interests. For these purposes, cookies are
                        usually stored on the computers of the users, in which
                        the user behavior and the interests of the users are
                        stored. Furthermore, in the usage profiles data can also
                        be stored independently of the devices used by the users
                        (in particular if the users are members of the
                        respective platforms and are logged in to them)
                        <br />
                        The processing of the personal data of users is based on
                        our legitimate interests in an effective information of
                        users and communication with users in accordance with.
                        Art. 6 para. 1 lit. f. DSGVO. If the users are asked by
                        the respective providers for a consent to the data
                        processing (that is, they declare their agreement, for
                        example, by ticking a check box or confirming a button),
                        the legal basis of the processing is Art. 6 para. a.,
                        Art. 7 GDPR.
                    </p>
                    <p>
                        For a detailed description of the respective processing
                        and the possibilities of contradiction (opt-out), we
                        refer to the following linked information of the
                        provider.
                    </p>
                    <p>
                        Also in the case of requests for information and the
                        assertion of user rights, we point out that these can be
                        claimed most effectively from the providers. Only the
                        providers have access to the data of the users and can
                        directly take appropriate measures and provide
                        information. If you still need help, then you can
                        contact us
                        <br />- Facebook (Facebook Ireland Ltd., 4 Grand Canal
                        Square, Grand Canal Harbor, Dublin 2, Ireland) - Privacy
                        Policy:&nbsp;
                        <a
                            href="https://www.facebook.com/about/privacy/"
                            target="_blank"
                            rel="noopener"
                        >
                            https://www.facebook.com/about/privacy/
                        </a>
                        , opt-out:&nbsp;
                        <a
                            href="https://www.facebook.com/settings?tab=ads"
                            target="_blank"
                            rel="noopener"
                        >
                            https://www.facebook.com/settings?tab=ads
                        </a>
                        &nbsp;and&nbsp;
                        <a
                            href="http://www.youronlinechoices.com/"
                            target="_blank"
                            rel="noopener"
                        >
                            http://www.youronlinechoices.com
                        </a>
                        , Privacy Shield:&nbsp;
                        <a
                            href="https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&amp;status=Active"
                            target="_blank"
                            rel="noopener"
                        >
                            https://www.privacyshield.gov/participant id =
                            a2zt0000000GnywAAC &amp; amp;?. status = Active
                        </a>
                        <br />- Google / YouTube (Google LLC, 1600 Amphitheater
                        Parkway, Mountain View, CA 94043, USA) - Privacy Policy:
                        <br />
                        <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener"
                        >
                            https: //policies.google.com/privacy
                        </a>
                        , opt-out:&nbsp;
                        <a
                            href="https://adssettings.google.com/authenticated"
                            target="_blank"
                            rel="noopener"
                        >
                            https://adssettings.google.com / authenticated
                        </a>
                        , Privacy Shield:&nbsp;
                        <a
                            href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active"
                            target="_blank"
                            rel="noopener"
                        >
                            https://www.privacyshield.gov /participant id =
                            a2zt000000001L5AAI &amp; amp;?. status = Active
                        </a>
                        <br />- Instagram (Instagram Inc., 1601 Willow Road, MO,
                        94025, USA) -{" "}
                        <a href="http://instagram.com/about/legal/privacy">
                            Privacy Policy / Opt-Out
                        </a>
                        .
                    </p>
                    <p>
                        - Twitter (Twitter Inc., 1355 Market Street, Suite 900,
                        San Francisco, CA 94103, USA) - Privacy Policy:&nbsp;
                        <a
                            href="https://twitter.com/privacy"
                            target="_blank"
                            rel="noopener"
                        >
                            https: //twitter.com/privacy
                        </a>
                        , opt-out:&nbsp;
                        <a
                            href="https://twitter.com/personalization"
                            target="_blank"
                            rel="noopener"
                        >
                            https://twitter.com/personalization
                        </a>
                        , Privacy Shield:&nbsp;
                        <a
                            href="https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&amp;status=Active"
                            target="_blank"
                            rel="noopener"
                        >
                            https://www.privacyshield.gov/participant?id =
                            a2zt0000000TORzAAO &amp; amp; status = Active
                        </a>
                        .<br />- Pinterest (Pinterest Inc., 635 High Street,
                        Palo Alto, CA, 94301, USA) - Privacy Policy /
                        Opt-Out:&nbsp;
                        <a
                            href="https://about.pinterest.com/en/privacy%20-policy"
                            target="_blank"
                            rel="noopener"
                        >
                            https://about.pinterest.com/de/privacy-policy code.
                        </a>
                    </p>
                    <p>
                        - LinkedIn (LinkedIn Ireland Unlimited Company Wilton
                        Place, Dublin 2, Ireland) - Privacy Policy
                        <a
                            href="https://www.linkedin.com/legal/privacy-policy"
                            target="_blank"
                            rel="noopener"
                        >
                            https: // www. linkedin.com/legal/privacy-policy
                        </a>
                        , opt-out:&nbsp;
                        <a
                            href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
                            target="_blank"
                            rel="noopener"
                        >
                            https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out
                        </a>
                        , Privacy Shield: &amp; nbsp;&nbsp;
                        <a
                            href="https://%20//www.privacyshield.%20gov%20/participant%20id%20=%20a2zt0000000L0UZAA0%20&amp;%20amp;?%20status%20=%20Active"
                            target="_blank"
                            rel="noopener"
                        >
                            https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&amp;status=Active
                        </a>
                        .<br />- Xing (XING AG, Dammtorstrasse 29-32, 20354
                        Hamburg, Germany) - Privacy Policy / Opt-Out:&nbsp;
                        <a
                            href="https://privacy.xing.com/en/privacy_policy"
                            target="_blank"
                            rel="noopener"
                        >
                            https: //privacy.xing.com/de/datenschutzerklaerung
                        </a>
                        .
                    </p>
                    <h3>Integration of third-party services and content</h3>
                    <p>
                        <span>
                            We rely on our legitimate interests (ie interest in
                            the analysis, optimization and economic operation of
                            our online offer within the meaning of our online
                            offer) of Art. 6 (1) lit. DSGVO) content or service
                            offers from third-party providers to their content
                            and services, such as Include videos or fonts
                            (collectively referred to as "content").
                        </span>
                    </p>
                    <p>
                        This always presupposes that the third-party providers
                        of this content perceive the IP address of the users,
                        since they could not send the content to their browser
                        without the IP address. The IP address is therefore
                        required for the presentation of this content. We
                        endeavor to use only content whose respective providers
                        use the IP address solely for the delivery of the
                        content. Third parties may also use so-called pixel tags
                        (invisible graphics, also referred to as "web beacons")
                        for statistical or marketing purposes. The "pixel tags"
                        can be used to evaluate information such as visitor
                        traffic on the pages of this website. The pseudonymous
                        information may also be stored in cookies on the user's
                        device and may include, but is not limited to, technical
                        information about the browser and operating system,
                        referring web pages, visit time, and other information
                        regarding the use of our online offer.
                    </p>
                    <h3>Vimeo</h3>
                    <p>
                        <span>
                            We can embed the videos of the Vimeo platform of
                            Vimeo Inc., Attention: Legal Department, 555 West
                            18th Street New York, New York 10011, USA. Privacy
                            Policy:&nbsp;
                            <a
                                href="https://vimeo.com/privacy"
                                target="_blank"
                                rel="noopener"
                            >
                                https://vimeo.com/privacy
                            </a>
                            . We point out that Vimeo can use Google Analytics
                            by referring to the privacy policy (
                            <a
                                href="https://www.google.com/policies/privacy"
                                target="_blank"
                                rel="noopener"
                            >
                                https://www.google .com /policies /privacy
                            </a>
                            ) as well as Google Analytics opt-out options (
                            <a
                                href="http://tools.google.com/dlpage/gaoptout?hl=en"
                                target="_blank"
                                rel="noopener"
                            >
                                http://tools.google.com/dlpage/gaoptout?hl=en
                            </a>
                            ) or Google's data marketing settings (
                            <a
                                href="https://%20//%20adssettings.%20google.com/"
                                target="_blank"
                                rel="noopener"
                            >
                                https://adssettings.google.com/.
                            </a>
                            )
                        </span>
                    </p>
                    <h3>Youtube</h3>
                    <p>
                        <span>
                            We're linking the videos from Google's platform
                            "YouTube" to Google LLC, 1600 Amphitheater Parkway,
                            Mountain View, CA 94043 , USA, one. Privacy
                            Policy:&nbsp;
                            <a
                                href="https://www.google.com/policies/privacy/"
                                target="_blank"
                                rel="noopener"
                            >
                                https://www.google.com/policies/privacy/
                            </a>
                            , opt-out :&nbsp;
                            <a
                                href="https://adssettings.google.com/authenticated"
                                target="_blank"
                                rel="noopener"
                            >
                                https://adssettings.google.com/authenticated
                            </a>
                            .
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
}
