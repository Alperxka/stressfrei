import { useEffect } from "react";
import { Navbar, Footer } from "@/components/layout";

export default function ImpressumPage() {
  useEffect(() => {
    document.title = "Impressum | Stressfrei Entrümpelungen & Umzüge";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/impressum");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/impressum");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/professionelle-entruempelung-service-rhein-erft-kreis.webp");
    _setOgMeta("og:locale", "de_DE");
    const _robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null ?? (() => { const m = document.createElement('meta'); m.name = 'robots'; document.head.appendChild(m); return m; })();
    _robots.content = 'noindex, nofollow';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Impressum und Angaben gemäß § 5 TMG von Stressfrei Entrümpelungen & Umzüge, Bergheim, Rhein-Erft-Kreis.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8" data-testid="text-impressum-title">Impressum</h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3" data-testid="text-impressum-angaben">Angaben gemäß § 5 TMG:</h2>
              <p>Oskar Debus, Leon Klaus, Denis Uzunhan und Alper Kayim</p>
              <p>Debus, Klaus, Uzunhan, Kayim GbR</p>
              <p className="font-semibold text-foreground">Stressfrei Entrümpelungen & Umzüge</p>
              <p>Hauptstraße 26, 50126 Bergheim</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">Inhaber:</h2>
              <ul className="space-y-1">
                <li>Herr Oskar Debus</li>
                <li>Herr Leon Klaus</li>
                <li>Herr Denis Uzunhan</li>
                <li>Herr Alper Kayim</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">Kontakt:</h2>
              <p>Tel: <a href="tel:+4922715880940" className="text-primary hover:underline" data-testid="link-impressum-phone">+49 2271 5880940</a></p>
              <p>E-Mail: <a href="mailto:info@stressfreientruempelungen.de" className="text-primary hover:underline" data-testid="link-impressum-email">info@stressfreientruempelungen.de</a></p>
              <p>Website: <a href="https://www.stressfreientruempelungen.de" className="text-primary hover:underline" data-testid="link-impressum-website">www.stressfreientruempelungen.de</a></p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit.
                Die Plattform finden Sie unter{" "}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" data-testid="link-impressum-odr">
                  ec.europa.eu/consumers/odr/
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">Haftungsausschluss:</h2>

              <h3 className="font-semibold text-foreground mt-4 mb-2">Haftung für Inhalte</h3>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Dienstanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Dienstanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>

              <h3 className="font-semibold text-foreground mt-4 mb-2">Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>

              <h3 className="font-semibold text-foreground mt-4 mb-2">Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
