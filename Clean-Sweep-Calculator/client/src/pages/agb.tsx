import { useEffect } from "react";
import { Navbar, Footer } from "@/components/layout";

export default function AGBPage() {
  useEffect(() => {
    document.title = "AGB | Allgemeine Geschäftsbedingungen | Stressfrei Entrümpelungen";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/agb");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/agb");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/professionelle-entruempelung-service-rhein-erft-kreis.webp");
    _setOgMeta("og:locale", "de_DE");
    const _robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null ?? (() => { const m = document.createElement('meta'); m.name = 'robots'; document.head.appendChild(m); return m; })();
    _robots.content = 'noindex, nofollow';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Allgemeine Geschäftsbedingungen von Stressfrei Entrümpelungen & Umzüge. Informationen zu Leistungen, Haftung und Zahlungsbedingungen.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2" data-testid="text-agb-title">Allgemeine Geschäftsbedingungen (AGB)</h1>
          <p className="text-muted-foreground mb-8">Stressfrei Entrümpelungen und Umzüge – Inhaber: Debus, Klaus, Uzunhan, Kayim GbR<br />Stand: 1.09.2025</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">§ 1 Geltungsbereich</h2>
              <p>(1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, die zwischen Stressfrei Entrümpelungen und Umzüge (nachfolgend „Auftragnehmer") und Kunden (nachfolgend „Auftraggeber") geschlossen werden.</p>
              <p className="mt-2">(2) Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, der Auftragnehmer stimmt ihrer Geltung ausdrücklich schriftlich zu.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">§ 2 Vertragsgegenstand</h2>
              <p>(1) Der Auftragnehmer bietet Dienstleistungen im Bereich Umzüge, Transporte, Entrümpelungen, Haushaltsauflösungen und ähnliche Leistungen an.</p>
              <p className="mt-2">(2) Art und Umfang der Leistungen ergeben sich aus dem individuellen Angebot.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">§ 3 Angebot und Vertragsschluss</h2>
              <p>(1) Angebote sind freibleibend und unverbindlich.</p>
              <p className="mt-2">(2) Ein Vertrag kommt erst durch schriftliche Bestätigung oder durch Ausführung der Leistung zustande.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">§ 4 Preise und Zahlungsbedingungen</h2>
              <p>(1) Es gelten die im Angebot vereinbarten Preise.</p>
              <p className="mt-2">(2) Die Preise verstehen sich inkl. der jeweils geltenden gesetzlichen Mehrwertsteuer.</p>
              <p className="mt-2">(3) Der Rechnungsbetrag ist sofort nach Leistungserbringung ohne Abzug fällig, sofern nichts anderes schriftlich vereinbart wurde.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">§ 5 Stornierung und Rücktritt</h2>
              <p className="font-medium text-foreground">Stornierungen durch den Auftraggeber</p>
              <p className="mt-2">Der Auftraggeber ist berechtigt, den mit uns geschlossenen Vertrag vor Beginn der Leistungserbringung schriftlich oder in Textform (z. B. per E-Mail) zu stornieren.</p>
              <p className="mt-2">Im Falle einer Stornierung berechnen wir folgende pauschale Stornierungsgebühren:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>bis 14 Tage vor dem vereinbarten Termin: kostenlos</li>
                <li>13 bis 7 Tage vor dem Termin: 25 % des vereinbarten Auftragswertes</li>
                <li>6 bis 2 Tage vor dem Termin: 50 % des vereinbarten Auftragswertes</li>
                <li>weniger als 48 Stunden vor dem Termin oder am Tag der Leistung: 80 % des vereinbarten Auftragswertes</li>
              </ul>
              <p className="mt-2">Dem Auftraggeber bleibt ausdrücklich der Nachweis gestattet, dass uns kein oder ein wesentlich geringerer Schaden entstanden ist.</p>
              <p className="mt-2">Wir behalten uns vor, im Einzelfall einen höheren nachweisbaren Schaden geltend zu machen, soweit dieser die pauschalen Stornierungskosten übersteigt.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">§ 6 Mitwirkungspflichten des Auftraggebers</h2>
              <p>(1) Der Auftraggeber stellt sicher, dass die Arbeiten am vereinbarten Termin durchgeführt werden können (Zugang zu Räumen, Parkmöglichkeiten etc.).</p>
              <p className="mt-2">(2) Verzögerungen oder zusätzliche Kosten aufgrund mangelnder Mitwirkung trägt der Auftraggeber.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">§ 7 Haftung</h2>
              <p>(1) Der Auftragnehmer haftet für Schäden nur bei Vorsatz oder grober Fahrlässigkeit.</p>
              <p className="mt-2">(2) Für leicht fahrlässige Pflichtverletzungen wird die Haftung ausgeschlossen, soweit es sich nicht um Schäden aus der Verletzung von Leben, Körper oder Gesundheit handelt.</p>
              <p className="mt-2">(3) Der Auftraggeber ist verpflichtet, wertvolle Gegenstände (z. B. Schmuck, wichtige Dokumente, Bargeld) vor Beginn der Arbeiten selbst zu sichern.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">§ 8 Versicherung</h2>
              <p>Der Auftragnehmer verfügt über eine Betriebshaftpflichtversicherung. Schäden sind unverzüglich schriftlich anzuzeigen.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">§ 9 Gerichtsstand</h2>
              <p>(1) Es gilt das Recht der Bundesrepublik Deutschland.</p>
              <p className="mt-2">(2) Gerichtsstand ist – soweit gesetzlich zulässig – der Sitz des Auftragnehmers.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">§ 10 Salvatorische Klausel</h2>
              <p>Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
