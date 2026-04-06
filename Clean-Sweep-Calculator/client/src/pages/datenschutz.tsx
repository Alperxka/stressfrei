import { useEffect } from "react";
import { Navbar, Footer } from "@/components/layout";

export default function DatenschutzPage() {
  useEffect(() => {
    document.title = "Datenschutzerklärung | Stressfrei Entrümpelungen & Umzüge";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/datenschutz");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/datenschutz");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/professionelle-entruempelung-service-rhein-erft-kreis.webp");
    _setOgMeta("og:locale", "de_DE");
    const _robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null ?? (() => { const m = document.createElement('meta'); m.name = 'robots'; document.head.appendChild(m); return m; })();
    _robots.content = 'noindex, nofollow';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Datenschutzerklärung gemäß DSGVO. Informationen zur Verarbeitung personenbezogener Daten bei Stressfrei Entrümpelungen & Umzüge.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8" data-testid="text-datenschutz-title">Datenschutzerklärung</h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <p>Datenschutz wird bei Stressfrei Entrümpelungen groß geschrieben.</p>
              <p className="mt-2">Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen. Datenschutz hat einen besonders hohen Stellenwert für die Geschäftsleitung der Stressfrei Entrümpelungen GbR. Eine Nutzung der Internetseiten der Stressfrei Entrümpelungen ist grundsätzlich ohne jede Angabe personenbezogener Daten, mit Ausnahme der Verarbeitung Ihrer pseudonymisierten IP-Adresse möglich. Sofern besondere Services unseres Unternehmens über unsere Internetseite in Anspruch genommen werden, könnte jedoch eine Verarbeitung personenbezogener Daten erforderlich werden. Besteht für eine solche Verarbeitung keine anderweitige gesetzliche Grundlage, holen wir eine Einwilligung der betroffenen Person ein.</p>
              <p className="mt-2">Die Verarbeitung personenbezogener Daten erfolgt stets im Einklang mit der Datenschutz-Grundverordnung (nachfolgend: DSGVO) und in Übereinstimmung mit den für Stressfrei Entrümpelungen geltenden Datenschutzbestimmungen. Mittels dieser Datenschutzerklärung möchte unser Unternehmen die Öffentlichkeit über Art, Umfang und Zweck der von uns verarbeiteten personenbezogenen Daten informieren. Ferner werden betroffene Personen mittels dieser Datenschutzerklärung über die ihnen zustehenden Rechte aufgeklärt.</p>
              <p className="mt-2">Stressfrei Entrümpelungen hat als für die Verarbeitung Verantwortlicher zahlreiche technische und organisatorische Maßnahmen umgesetzt, um einen möglichst lückenlosen Schutz der über diese Internetseite verarbeiteten personenbezogenen Daten sicherzustellen. Dennoch können internetbasierte Datenübertragungen grundsätzlich Sicherheitslücken aufweisen, sodass ein absoluter Schutz nicht gewährleistet werden kann. Aus diesem Grund steht es jeder betroffenen Person frei, personenbezogene Daten auch auf alternativen Wegen, beispielsweise telefonisch, an uns zu übermitteln.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">1. Begriffsbestimmungen</h2>
              <p>Die Datenschutzerklärung beruht auf den Begrifflichkeiten, die durch den Europäischen Richtlinien- und Verordnungsgeber beim Erlass der DSGVO verwendet wurden:</p>
              <ul className="list-disc ml-6 mt-3 space-y-3">
                <li><strong>personenbezogene Daten:</strong> Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person") beziehen. Als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind, identifiziert werden kann.</li>
                <li><strong>betroffene Person:</strong> Betroffene Person ist jede identifizierte oder identifizierbare natürliche Person, deren personenbezogene Daten von dem für die Verarbeitung Verantwortlichen verarbeitet werden.</li>
                <li><strong>Verarbeitung:</strong> Verarbeitung ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.</li>
                <li><strong>Einschränkung der Verarbeitung:</strong> Einschränkung der Verarbeitung ist die Markierung gespeicherter personenbezogener Daten mit dem Ziel, ihre künftige Verarbeitung einzuschränken.</li>
                <li><strong>Profiling:</strong> Profiling ist jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person beziehen, zu bewerten.</li>
                <li><strong>Pseudonymisierung:</strong> Pseudonymisierung ist die Verarbeitung personenbezogener Daten in einer Weise, auf welche die personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden können.</li>
                <li><strong>Verantwortlicher:</strong> Verantwortlicher oder für die Verarbeitung Verantwortlicher ist die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.</li>
                <li><strong>Auftragsverarbeiter:</strong> Auftragsverarbeiter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.</li>
                <li><strong>Empfänger:</strong> Empfänger ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, der personenbezogene Daten offengelegt werden, unabhängig davon, ob es sich bei ihr um einen Dritten handelt oder nicht.</li>
                <li><strong>Dritter:</strong> Dritter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle außer der betroffenen Person, dem Verantwortlichen, dem Auftragsverarbeiter und den Personen, die unter der unmittelbaren Verantwortung des Verantwortlichen oder des Auftragsverarbeiters befugt sind, die personenbezogenen Daten zu verarbeiten.</li>
                <li><strong>Einwilligung:</strong> Einwilligung ist jede von der betroffenen Person freiwillig für den bestimmten Fall in informierter Weise und unmissverständlich abgegebene Willensbekundung in Form einer Erklärung oder einer sonstigen eindeutigen bestätigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">2. Name und Anschrift des für die Verarbeitung Verantwortlichen</h2>
              <p>Verantwortlicher im Sinne der DSGVO, sonstiger in den Mitgliedstaaten der Europäischen Union geltenden Datenschutzgesetze und anderer Bestimmungen mit datenschutzrechtlichem Charakter ist die:</p>
              <div className="mt-3">
                <p className="font-medium text-foreground">Stressfrei Entrümpelungen GbR</p>
                <p>Hauptstraße 26</p>
                <p>50126 Bergheim</p>
                <p>Deutschland</p>
                <p className="mt-2">Tel.: <a href="tel:+4922715880940" className="text-primary hover:underline">+49 2271 5880940</a></p>
                <p>E-Mail: <a href="mailto:info@stressfreientruempelungen.de" className="text-primary hover:underline">info@stressfreientruempelungen.de</a></p>
                <p>Website: <a href="https://www.stressfreientruempelungen.de" className="text-primary hover:underline">www.stressfreientruempelungen.de</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">3. Cookies</h2>
              <p>Die Internetseiten der Stressfrei Entrümpelungen verwenden Cookies. Cookies sind Textdateien, welche über einen Internetbrowser auf einem Computersystem abgelegt und gespeichert werden.</p>
              <p className="mt-2">Zahlreiche Internetseiten und Server verwenden Cookies. Viele Cookies enthalten eine sogenannte Cookie-ID. Eine Cookie-ID ist eine eindeutige Kennung des Cookies. Sie besteht aus einer Zeichenfolge, durch welche Internetseiten und Server dem konkreten Internetbrowser zugeordnet werden können, in dem das Cookie gespeichert wurde. Dies ermöglicht es den besuchten Internetseiten und Servern, den individuellen Browser der betroffenen Person von anderen Internetbrowsern, die andere Cookies enthalten, zu unterscheiden.</p>
              <p className="mt-2">Durch den Einsatz von Cookies kann den Nutzern dieser Internetseite nutzerfreundlichere Services bereitstellen, die ohne die Cookie-Setzung nicht möglich wären.</p>
              <p className="mt-2">Die betroffene Person kann die Setzung von Cookies durch unsere Internetseite jederzeit mittels einer entsprechenden Einstellung des genutzten Internetbrowsers verhindern und damit der Setzung von Cookies dauerhaft widersprechen. Ferner können bereits gesetzte Cookies jederzeit über einen Internetbrowser oder andere Softwareprogramme gelöscht werden. Deaktiviert die betroffene Person die Setzung von Cookies in dem genutzten Internetbrowser, sind unter Umständen nicht alle Funktionen unserer Internetseite vollumfänglich nutzbar.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">4. Erfassung von allgemeinen Daten und Informationen</h2>
              <p>Die Internetseite erfasst mit jedem Aufruf der Internetseite durch eine betroffene Person oder ein automatisiertes System eine Reihe von allgemeinen Daten und Informationen. Diese allgemeinen Daten und Informationen werden in den Logfiles des Servers gespeichert. Erfasst werden können die (1) verwendeten Browsertypen und Versionen, (2) das vom zugreifenden System verwendete Betriebssystem, (3) die Internetseite, von welcher ein zugreifendes System auf unsere Internetseite gelangt, (4) die Unterwebseiten, (5) das Datum und die Uhrzeit eines Zugriffs, (6) eine Internet-Protokoll-Adresse (IP-Adresse), (7) der Internet-Service-Provider des zugreifenden Systems und (8) sonstige ähnliche Daten und Informationen, die der Gefahrenabwehr im Falle von Angriffen auf unsere informationstechnologischen Systeme dienen.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">5. Kontaktmöglichkeit über die Internetseite</h2>
              <p>Die Internetseite enthält aufgrund von gesetzlichen Vorschriften Angaben, die eine schnelle elektronische Kontaktaufnahme zu unserem Unternehmen sowie eine unmittelbare Kommunikation mit uns ermöglichen. Sofern eine betroffene Person per E-Mail oder über ein Kontaktformular den Kontakt mit dem für die Verarbeitung Verantwortlichen aufnimmt, werden die von der betroffenen Person übermittelten personenbezogenen Daten automatisch gespeichert. Solche auf freiwilliger Basis von einer betroffenen Person an den für die Verarbeitung Verantwortlichen übermittelten personenbezogenen Daten werden für Zwecke der Bearbeitung oder der Kontaktaufnahme zur betroffenen Person gespeichert.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">6. Routinemäßige Löschung und Sperrung von personenbezogenen Daten</h2>
              <p>Der für die Verarbeitung Verantwortliche verarbeitet und speichert personenbezogene Daten der betroffenen Person nur für den Zeitraum, der zur Erreichung des Speicherungszwecks erforderlich ist oder sofern dies durch den Europäischen Richtlinien- und Verordnungsgeber oder einen anderen Gesetzgeber in Gesetzen oder Vorschriften, welchen der für die Verarbeitung Verantwortliche unterliegt, vorgesehen wurde.</p>
              <p className="mt-2">Entfällt der Speicherungszweck oder läuft eine vom Europäischen Richtlinien- und Verordnungsgeber oder einem anderen zuständigen Gesetzgeber vorgeschriebene Speicherfrist ab, werden die personenbezogenen Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">7. Rechte der betroffenen Person</h2>
              <ul className="list-disc ml-6 space-y-3">
                <li><strong>Recht auf Bestätigung:</strong> Jede betroffene Person hat das Recht, von dem für die Verarbeitung Verantwortlichen eine Bestätigung darüber zu verlangen, ob sie betreffende personenbezogene Daten verarbeitet werden.</li>
                <li><strong>Recht auf Auskunft:</strong> Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das Recht, jederzeit von dem für die Verarbeitung Verantwortlichen unentgeltliche Auskunft über die zu seiner Person gespeicherten personenbezogenen Daten und eine Kopie dieser Auskunft zu erhalten.</li>
                <li><strong>Recht auf Berichtigung:</strong> Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das Recht, die unverzügliche Berichtigung sie betreffender unrichtiger personenbezogener Daten zu verlangen.</li>
                <li><strong>Recht auf Löschung (Recht auf Vergessen werden):</strong> Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das Recht, von dem Verantwortlichen zu verlangen, dass die sie betreffenden personenbezogenen Daten unverzüglich gelöscht werden, sofern einer der gesetzlich vorgesehenen Gründe zutrifft.</li>
                <li><strong>Recht auf Einschränkung der Verarbeitung:</strong> Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das Recht, von dem Verantwortlichen die Einschränkung der Verarbeitung zu verlangen, wenn eine der gesetzlichen Voraussetzungen gegeben ist.</li>
                <li><strong>Recht auf Datenübertragbarkeit:</strong> Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das Recht, die sie betreffenden personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
                <li><strong>Recht auf Widerspruch:</strong> Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das Recht, jederzeit gegen die Verarbeitung sie betreffender personenbezogener Daten Widerspruch einzulegen.</li>
                <li><strong>Automatisierte Entscheidungen im Einzelfall einschließlich Profiling:</strong> Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung beruhenden Entscheidung unterworfen zu werden.</li>
                <li><strong>Recht auf Widerruf einer datenschutzrechtlichen Einwilligung:</strong> Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das Recht, eine Einwilligung zur Verarbeitung personenbezogener Daten jederzeit zu widerrufen.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">8. Datenschutzbestimmungen zu Einsatz und Verwendung von Facebook</h2>
              <p>Der für die Verarbeitung Verantwortliche hat auf dieser Internetseite Komponenten des Unternehmens Facebook integriert. Facebook ist ein soziales Netzwerk. Betreibergesellschaft von Facebook ist die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland. Für die Verarbeitung personenbezogener Daten Verantwortlicher ist, wenn eine betroffene Person außerhalb der EU oder des EWR lebt, die Meta Platforms, Inc., 1 Hacker Way, Menlo Park, CA 94025, USA.</p>
              <p className="mt-2">Durch jeden Aufruf einer der Einzelseiten dieser Internetseite, die durch den für die Verarbeitung Verantwortlichen betrieben wird und auf welcher eine Facebook-Komponente integriert wurde, wird der Internetbrowser auf dem informationstechnologischen System der betroffenen Person automatisch durch die jeweilige Facebook-Komponente veranlasst, eine Darstellung der entsprechenden Facebook-Komponente von Facebook herunterzuladen.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">9. Datenschutzbestimmungen zu Einsatz und Verwendung von Google Analytics (mit Anonymisierungsfunktion) und Google Tag Manager</h2>
              <p>Der für die Verarbeitung Verantwortliche hat auf dieser Internetseite die Komponente Google Analytics (mit Anonymisierungsfunktion) und den Google Tag Manager integriert. Google Analytics ist ein Web-Analyse-Dienst. Betreibergesellschaft der Google-Analytics-Komponente ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland.</p>
              <p className="mt-2">Der für die Verarbeitung Verantwortliche nutzt für die Web-Analyse über Google Analytics den Zusatz „_gat._anonymizeIp". Mittels dieses Zusatzes wird die IP-Adresse des Internetanschlusses der betroffenen Person von Google gekürzt und anonymisiert, wenn der Zugriff auf unsere Internetseiten aus einem Mitgliedstaat der Europäischen Union oder aus einem anderen Vertragsstaat des Abkommens über den Europäischen Wirtschaftsraum erfolgt.</p>
              <p className="mt-2">Die betroffene Person kann die Erfassung der durch Google Analytics erzeugten, auf eine Nutzung dieser Internetseite bezogenen Daten sowie die Verarbeitung dieser Daten durch Google jederzeit verhindern und einer solchen widersprechen. Hierzu muss die betroffene Person ein Browser-Add-On unter dem Link <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://tools.google.com/dlpage/gaoptout</a> herunterladen und installieren.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">10. Datenschutzbestimmungen zu Einsatz und Verwendung von Google-AdWords</h2>
              <p>Der für die Verarbeitung Verantwortliche hat auf dieser Internetseite Google AdWords integriert. Google AdWords ist ein Dienst zur Internetwerbung, der es Werbetreibenden gestattet, sowohl Anzeigen in den Suchmaschinenergebnissen von Google als auch im Google-Werbenetzwerk zu schalten. Betreibergesellschaft der Dienste von Google AdWords ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland.</p>
              <p className="mt-2">Der Zweck von Google AdWords ist die Bewerbung unserer Internetseite durch die Einblendung von interessenrelevanter Werbung auf den Internetseiten von Drittunternehmen und in den Suchmaschinenergebnissen der Suchmaschine Google und eine Einblendung von Fremdwerbung auf unserer Internetseite.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">11. Rechtsgrundlage der Verarbeitung</h2>
              <p>Art. 6 I lit. a DS-GVO dient unserem Unternehmen als Rechtsgrundlage für Verarbeitungsvorgänge, bei denen wir eine Einwilligung für einen bestimmten Verarbeitungszweck einholen. Ist die Verarbeitung personenbezogener Daten zur Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, erforderlich, so beruht die Verarbeitung auf Art. 6 I lit. b DS-GVO. Gleiches gilt für solche Verarbeitungsvorgänge die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind.</p>
              <p className="mt-2">Unterliegt unser Unternehmen einer rechtlichen Verpflichtung, durch welche eine Verarbeitung von personenbezogenen Daten erforderlich wird, so basiert die Verarbeitung auf Art. 6 I lit. c DS-GVO. Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich und überwiegen die Interessen, Grundrechte und Grundfreiheiten des Betroffenen das erstgenannte Interesse nicht, so dient Art. 6 I lit. f DS-GVO als Rechtsgrundlage für die Verarbeitung.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">12. Dauer der Speicherung personenbezogener Daten</h2>
              <p>Das Kriterium für die Dauer der Speicherung von personenbezogenen Daten ist die jeweilige gesetzliche Aufbewahrungsfrist. Nach Ablauf der Frist werden die entsprechenden Daten routinemäßig gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">13. Bereitstellung personenbezogener Daten</h2>
              <p>Wir klären Sie darüber auf, dass die Bereitstellung personenbezogener Daten zum Teil gesetzlich vorgeschrieben ist (z.B. Steuervorschriften) oder sich auch aus vertraglichen Regelungen ergeben kann. Mitunter kann es zu einem Vertragsschluss erforderlich sein, dass eine betroffene Person uns personenbezogene Daten zur Verfügung stellt, die in der Folge durch uns verarbeitet werden müssen.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">14. Automatisierte Entscheidungsfindung</h2>
              <p>Als verantwortungsbewusstes Unternehmen verzichten wir auf eine automatische Entscheidungsfindung oder ein Profiling.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
