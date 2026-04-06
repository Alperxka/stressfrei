import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, BlogArticleCTA } from "@/components/layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowLeft,
  BadgeEuro,
  Home,
  MapPin,
  CheckCircle2,
  Receipt,
  PiggyBank,
  Truck,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const preisTabelle = [
  { art: "Wohnungsentrümpelung (50–70 m²)", preis: "ca. 1.000 € – 3.000 €", beschreibung: "Inklusive Arbeitszeit, Transport & Entsorgung" },
  { art: "Hausentrümpelung (100–150 m²)", preis: "ca. 2.000 € – 5.000 €", beschreibung: "Je nach Aufwand und Sperrmüllmenge" },
  { art: "Keller / Dachboden", preis: "ca. 300 € – 1.200 €", beschreibung: "Kleinere Räume, aber oft viel Kleinmüll" },
  { art: "Messie-Wohnung", preis: "ab 2.000 €", beschreibung: "Starker Mehraufwand, ggf. mit Desinfektion" },
  { art: "Gewerbe-Entrümpelung", preis: "nach Aufwand", beschreibung: "Individuell kalkuliert nach Fläche & Müllart" },
];

const beispielKalkulation = [
  { position: "Arbeitszeit 3 Mitarbeiter", beschreibung: "ca. 6 Stunden", kosten: "720 €" },
  { position: "Container & Entsorgung", beschreibung: "Sperrmüll, Holz, Elektrogeräte", kosten: "1.000 €" },
  { position: "Anfahrt & Transport", beschreibung: "20 km Umkreis", kosten: "60 €" },
  { position: "Gesamtpreis (Pauschal)", beschreibung: "", kosten: "1.780 €" },
];

const faktoren = [
  { title: "Wohnungsgröße und Menge des Inventars", text: "Je mehr Quadratmeter und Gegenstände, desto höher der Aufwand und damit der Preis." },
  { title: "Zugänglichkeit der Immobilie", text: "Liegt die Wohnung im 4. Stock ohne Aufzug oder ist der Zugang eng, erhöht sich der Zeitaufwand." },
  { title: "Müllart und Entsorgungskosten", text: "Sperrmüll, Elektrogeräte, Sondermüll oder Bauschutt müssen unterschiedlich entsorgt werden." },
  { title: "Zusatzleistungen", text: "Grundreinigung nach der Entrümpelung, Tapetenentfernung / Renovierungsvorbereitung, Haushaltsauflösung mit Wertanrechnung." },
  { title: "Wertanrechnung verwertbarer Gegenstände", text: "Wenn Möbel oder Geräte weiterverkauft werden können, kann der Preis reduziert werden." },
];

export default function PreiseRheinErftKreisPage() {
  useEffect(() => {
    document.title = "Entrümpelung Preise Rhein-Erft-Kreis | Kostenübersicht 2026";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/entruempelung-rhein-erft-kreis-preise");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/entruempelung-rhein-erft-kreis-preise");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/professionelle-entruempelung-service-rhein-erft-kreis.webp");
    _setOgMeta("og:locale", "de_DE");
    _setOgMeta("og:type", "article");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Aktuelle Preise für Entrümpelungen im Rhein-Erft-Kreis. Kostenvergleich nach Raumgröße, Füllgrad und Sondermüll. Tipps zum Sparen.");
    }
    const schemaId = "schema-preise-rhein-erft";
    let el = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!el) { el = document.createElement("script"); el.type = "application/ld+json"; el.id = schemaId; document.head.appendChild(el); }
    el.textContent = JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Entrümpelung Preise Rhein-Erft-Kreis – Kostenübersicht 2026","description":"Aktuelle Preise für Entrümpelungen im Rhein-Erft-Kreis.","url":"https://stressfreientruempelungen.de/entruempelung-rhein-erft-kreis-preise","datePublished":"2026-01-10","dateModified":"2026-03-17","author":{"@type":"Organization","name":"Stressfrei Entrümpelungen & Umzüge","url":"https://stressfreientruempelungen.de"},"publisher":{"@type":"Organization","name":"Stressfrei Entrümpelungen & Umzüge","logo":{"@type":"ImageObject","url":"https://stressfreientruempelungen.de/favicon.webp"}},"image":"https://stressfreientruempelungen.de/images/professionelle-entruempelung-service-rhein-erft-kreis.webp","mainEntityOfPage":{"@type":"WebPage","@id":"https://stressfreientruempelungen.de/entruempelung-rhein-erft-kreis-preise"}});
    return () => { document.getElementById(schemaId)?.remove(); };
  }, []);

  return (
    <PageLayout>
      <PageHero
        title="Entrümpelung Rhein-Erft-Kreis Preise"
        subtitle="Alle Kosten einer Entrümpelung im Überblick – transparent, fair und regional."
        highlight="Ratgeber"
      />

      <section className="pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <img
              src="/images/entruempelung-dienstleistung-nrw.webp"
              alt="Entrümpelung Rhein-Erft-Kreis Preise und Kosten"
              className="w-full rounded-2xl shadow-lg object-cover aspect-[16/9]"
              width={1200}
              height={675}
              loading="eager"
              data-testid="img-service-hero"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link href="/ratgeber" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 text-sm" data-testid="link-back-ratgeber">
            <ArrowLeft className="w-4 h-4" /> Zurück zum Ratgeber
          </Link>

          <motion.div {...fadeIn}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8" data-testid="text-intro">
              Wer im Rhein-Erft-Kreis eine Entrümpelung plant – ob in Bergheim, Kerpen, Elsdorf, Erftstadt oder Bedburg – fragt sich schnell: <strong>Was kostet eine Entrümpelung wirklich?</strong> In diesem Beitrag erklären wir, wie sich die Preise zusammensetzen, welche Faktoren den Preis beeinflussen und mit welchen Kosten Sie realistisch rechnen sollten.
            </p>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
            <Card className="p-6 sm:p-8 mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <BadgeEuro className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground" data-testid="text-section-preise">
                  Durchschnittliche Kosten einer Entrümpelung
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm" data-testid="table-preise">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-4 font-semibold text-foreground">Art</th>
                      <th className="text-left py-3 pr-4 font-semibold text-foreground">Durchschnittspreis</th>
                      <th className="text-left py-3 font-semibold text-foreground hidden sm:table-cell">Beschreibung</th>
                    </tr>
                  </thead>
                  <tbody>
                    {preisTabelle.map((row, i) => (
                      <tr key={i} className="border-b border-border/50 last:border-0">
                        <td className="py-3 pr-4 text-muted-foreground">{row.art}</td>
                        <td className="py-3 pr-4 font-medium text-foreground whitespace-nowrap">{row.preis}</td>
                        <td className="py-3 text-muted-foreground hidden sm:table-cell">{row.beschreibung}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-4 italic">
                *Preise können je nach Umfang, Müllart und Lage im Rhein-Erft-Kreis variieren.
              </p>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.15 }}>
            <Card className="p-6 sm:p-8 mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Home className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground" data-testid="text-section-faktoren">
                  Welche Faktoren bestimmen den Preis?
                </h2>
              </div>
              <div className="space-y-5">
                {faktoren.map((f, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-foreground mb-1">{i + 1}. {f.title}</h3>
                    <p className="text-muted-foreground text-sm">{f.text}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.2 }}>
            <Card className="p-6 sm:p-8 mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground" data-testid="text-section-lokale">
                  Lokale Unterschiede im Rhein-Erft-Kreis
                </h2>
              </div>
              <div className="space-y-3">
                {[
                  { region: "Bergheim / Elsdorf / Bedburg", detail: "Moderate Entsorgungskosten, gute Erreichbarkeit" },
                  { region: "Hürth / Brühl / Frechen", detail: "Dichter besiedelt, mehr Parkprobleme → etwas teurer" },
                  { region: "Erftstadt / Wesseling / Kerpen", detail: "Größere Grundstücke, oft mehr Volumen" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <p className="text-muted-foreground"><strong>{item.region}:</strong> {item.detail}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Ein regionaler Anbieter wie Stressfrei Entrümpelungen & Umzüge kennt die Unterschiede genau und kann so <strong>faire Pauschalpreise</strong> anbieten.
              </p>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.25 }}>
            <Card className="p-6 sm:p-8 mb-10 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground" data-testid="text-section-tipp">
                  Tipp: Pauschalpreise statt versteckter Kosten
                </h2>
              </div>
              <p className="text-muted-foreground">
                Viele Entrümpelungsfirmen locken mit günstigen Preisen, rechnen aber Anfahrten, Zusatzleistungen oder Entsorgungskosten später extra ab. Bei <strong>Stressfrei Entrümpelung Rhein-Erft-Kreis</strong> erhalten Sie <strong>feste Pauschalpreise inklusive Entsorgung, Arbeitszeit und Transport</strong> – <strong>ohne versteckte Kosten</strong>.
              </p>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.3 }}>
            <Card className="p-6 sm:p-8 mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Receipt className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground" data-testid="text-section-beispiel">
                  Beispielkalkulation: 3-Zimmer-Wohnung in Bergheim
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm" data-testid="table-beispiel">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-4 font-semibold text-foreground">Position</th>
                      <th className="text-left py-3 pr-4 font-semibold text-foreground">Beschreibung</th>
                      <th className="text-right py-3 font-semibold text-foreground">Kosten</th>
                    </tr>
                  </thead>
                  <tbody>
                    {beispielKalkulation.map((row, i) => (
                      <tr key={i} className={`border-b border-border/50 last:border-0 ${i === beispielKalkulation.length - 1 ? "font-bold" : ""}`}>
                        <td className="py-3 pr-4 text-foreground">{row.position}</td>
                        <td className="py-3 pr-4 text-muted-foreground">{row.beschreibung}</td>
                        <td className="py-3 text-right text-foreground">{row.kosten}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.35 }}>
            <Card className="p-6 sm:p-8 mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <PiggyBank className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground" data-testid="text-section-sparen">
                  Wie Sie bei der Entrümpelung Geld sparen können
                </h2>
              </div>
              <ul className="space-y-3">
                {[
                  { title: "Selbst vorab sortieren", text: "Trennen Sie Wertgegenstände oder intakte Möbel vorher." },
                  { title: "Wertanrechnung nutzen", text: "Lassen Sie Gegenstände schätzen, die noch verkauft werden können." },
                  { title: "Frühzeitig buchen", text: "Kurzfristige Termine sind oft teurer." },
                  { title: "Lokale Anbieter wählen", text: "Spart Anfahrtskosten und Zeit." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                    <span><strong>{item.title}</strong> – {item.text}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.4 }}>
            <Card className="p-6 sm:p-8 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground" data-testid="text-section-fazit">
                  Fazit: Entrümpelung zum fairen Preis
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Eine professionelle Entrümpelung spart Ihnen Zeit, Stress und körperliche Arbeit. Im Rhein-Erft-Kreis liegen die <strong>Kosten meist zwischen 700 € und 3.000 €</strong>, je nach Umfang und Aufwand. Wenn Sie eine <strong>kostenlose Besichtigung</strong> oder ein <strong>unverbindliches Festpreisangebot</strong> wünschen, kontaktieren Sie uns gern.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.45 }}>
            <h2 className="text-xl font-bold text-foreground mb-4">Preise nach Stadtteil — direkt nachschlagen</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Unsere Festpreise gelten in allen Stadtteilen des Rhein-Erft-Kreises. Wählen Sie Ihren Ort für lokale Informationen:
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { city: "Bergheim", items: [{ name: "Quadrath-Ichendorf", slug: "quadrath-ichendorf" }, { name: "Niederaussem", slug: "niederaussem" }, { name: "Glesch", slug: "glesch" }, { name: "Paffendorf", slug: "paffendorf" }] },
                { city: "Kerpen", items: [{ name: "Sindorf", slug: "sindorf" }, { name: "Horrem", slug: "horrem" }, { name: "Buir", slug: "buir" }, { name: "Blatzheim", slug: "blatzheim" }] },
                { city: "Pulheim", items: [{ name: "Brauweiler", slug: "brauweiler" }, { name: "Stommeln", slug: "stommeln" }, { name: "Sinnersdorf", slug: "sinnersdorf" }] },
                { city: "Frechen", items: [{ name: "Königsdorf", slug: "koenigsdorf" }, { name: "Bachem", slug: "bachem" }, { name: "Habbelrath", slug: "habbelrath" }] },
                { city: "Hürth", items: [{ name: "Hermülheim", slug: "hermuelheim" }, { name: "Efferen", slug: "efferen" }, { name: "Gleuel", slug: "gleuel" }] },
                { city: "Erftstadt", items: [{ name: "Liblar", slug: "liblar" }, { name: "Lechenich", slug: "lechenich" }, { name: "Gymnich", slug: "gymnich" }] },
              ].map((group, gi) => (
                <div key={gi}>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{group.city}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((st) => (
                      <Link key={st.slug} href={`/entruempelung-${st.slug}`} className="text-xs bg-background border border-border hover:border-primary hover:text-primary px-2.5 py-1 rounded-full transition-colors">
                        {st.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              Alle Stadtteile finden Sie auf unserer{" "}
              <Link href="/standorte" className="text-primary hover:underline">Standorte-Übersicht</Link>.
            </p>
          </motion.div>
        </div>
      </section>

      <BlogArticleCTA />
      <CTASection />
    </PageLayout>
  );
}
