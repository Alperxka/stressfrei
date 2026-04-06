import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, BlogArticleCTA } from "@/components/layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowLeft,
  BadgeEuro,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  Container,
  HelpCircle,
  Lightbulb,
  MapPin,
  Phone,
  Recycle,
  Scale,
  Trash2,
  Truck,
  Users,
} from "lucide-react";
import { useEffect } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const kostenUebersicht = [
  { weg: "Kommunale Abholung (Freimenge)", kosten: "Kostenlos", hinweis: "1–2× pro Jahr, max. 2–3 m³" },
  { weg: "Kommunale Abholung (Zusatztermin)", kosten: "20 – 60 €", hinweis: "Pro Abholung, je nach Kommune" },
  { weg: "Selbstanlieferung Wertstoffhof", kosten: "0 – 30 €", hinweis: "Oft kostenlos für Privatpersonen" },
  { weg: "Private Entrümpelungsfirma", kosten: "80 – 500 €+", hinweis: "Je nach Menge & Aufwand" },
  { weg: "Containermiete (5 m³)", kosten: "150 – 400 €", hinweis: "Inkl. Lieferung, Abholung & Entsorgung" },
  { weg: "Containermiete (10 m³)", kosten: "300 – 600 €", hinweis: "Für große Mengen / Haushaltsauflösung" },
];

const privatPreise = [
  { menge: "1–2 m³", beispiel: "Einzelnes Sofa, Schrank oder 2–3 Möbelstücke", preis: "80 – 150 €" },
  { menge: "3–5 m³", beispiel: "Wohnzimmer komplett oder mehrere Zimmer", preis: "150 – 300 €" },
  { menge: "5–10 m³", beispiel: "Keller- oder Dachbodenentrümpelung", preis: "300 – 600 €" },
  { menge: "10–20 m³", beispiel: "Komplette Haushaltsauflösung", preis: "600 – 1.500 €+" },
];

const sparTipps = [
  { title: "Kommunale Freimengen ausnutzen", text: "Prüfen Sie, wie viele kostenlose Abholungen Ihre Stadt pro Jahr erlaubt. Termine frühzeitig planen." },
  { title: "Mengen mit Nachbarn bündeln", text: "Sperrmüll gemeinsam anmelden, um Transportkosten und Extra-Gebühren zu reduzieren." },
  { title: "Wertstoffhof nutzen", text: "Viele Kommunen im Rhein-Erft-Kreis nehmen Sperrmüll am Wertstoffhof kostenlos oder günstiger an." },
  { title: "Verkaufen statt entsorgen", text: "Gut erhaltene Möbel und Elektrogeräte über eBay Kleinanzeigen, Facebook Marketplace oder an soziale Einrichtungen spenden." },
  { title: "Sperrmüll vorbereiten", text: "Möbel zerlegen, nach Material sortieren und getrennt lagern — spart Zusatzkosten für Demontage." },
  { title: "Angebote vergleichen", text: "Mehrere Anbieter anfragen. Lokale Firmen bieten oft bessere Preise als überregionale Dienstleister." },
];

const wasIstSperrmuell = [
  "Möbel (Sofas, Schränke, Tische, Stühle, Betten, Matratzen)",
  "Teppiche und Teppichböden",
  "Fahrräder und Kinderwagen",
  "Sanitärkeramik (Badewannen, Waschbecken, Toiletten)",
  "Große Haushaltsgeräte (Waschmaschinen, Herde, Kühlschränke*)",
  "Gartenmöbel und Spielgeräte",
];

const keinSperrmuell = [
  "Bauschutt und Renovierungsabfälle",
  "Autoreifen und Autoteile",
  "Schadstoffe (Farben, Lacke, Chemikalien)",
  "Gewerblicher Abfall",
  "Restmüll in Säcken",
  "Flüssigkeiten und Öle",
];

const rheinErftDaten = [
  { stadt: "Bergheim", abholung: "2× pro Jahr kostenlos", wertstoffhof: "Kostenlos bis 2 m³", besonderheit: "Online-Anmeldung über REMONDIS", link: "/entruempelung-bergheim" },
  { stadt: "Kerpen", abholung: "2× pro Jahr kostenlos", wertstoffhof: "Kostenlos für Privathaushalte", besonderheit: "Abholung über Abfallwirtschaftsbetrieb", link: "/entruempelung-kerpen" },
  { stadt: "Frechen", abholung: "2× pro Jahr kostenlos", wertstoffhof: "Kostenlos bis 2 m³", besonderheit: "Online-Terminvergabe", link: "/entruempelung-frechen" },
  { stadt: "Hürth", abholung: "2× pro Jahr kostenlos", wertstoffhof: "Kostenlos für Privathaushalte", besonderheit: "Anmeldung per App oder online", link: "/entruempelung-huerth" },
  { stadt: "Erftstadt", abholung: "2× pro Jahr kostenlos", wertstoffhof: "Kostenlos bis 2 m³", besonderheit: "Sperrmüll-Karte per Post", link: "/entruempelung-erftstadt" },
  { stadt: "Pulheim", abholung: "2× pro Jahr kostenlos", wertstoffhof: "Kostenlos für Privathaushalte", besonderheit: "Anmeldung über AWB Köln", link: "/entruempelung-pulheim" },
  { stadt: "Bedburg", abholung: "2× pro Jahr kostenlos", wertstoffhof: "Kostenlos bis 2 m³", besonderheit: "Telefonische Anmeldung möglich", link: "/entruempelung-bedburg" },
  { stadt: "Elsdorf", abholung: "2× pro Jahr kostenlos", wertstoffhof: "Kostenlos für Privathaushalte", besonderheit: "Gemeinschaftliche Abholung", link: "/entruempelung-elsdorf" },
];

const faqItems = [
  { q: "Was kostet 1 Tonne Sperrmüll?", a: "1 Tonne Sperrmüll entspricht ca. 3 m³. Im Rhein-Erft-Kreis ist diese Menge über die kommunale Abholung oft kostenlos. Bei privaten Anbietern liegen die Kosten zwischen 150 € und 400 €, je nach Aufwand und Entsorgungsweg." },
  { q: "Wie oft kann ich kostenlos Sperrmüll abholen lassen?", a: "Im Rhein-Erft-Kreis bieten die meisten Kommunen 2 kostenlose Abholungen pro Jahr an. Die genaue Freimenge variiert zwischen 2 und 3 m³ pro Termin." },
  { q: "Was darf nicht in den Sperrmüll?", a: "Bauschutt, Schadstoffe (Farben, Lacke, Chemikalien), Autoreifen, Flüssigkeiten und gewerblicher Abfall gehören nicht in den Sperrmüll. Diese müssen gesondert über den Wertstoffhof oder Fachbetriebe entsorgt werden." },
  { q: "Lohnt sich ein Container für Sperrmüll?", a: "Ein Container lohnt sich ab ca. 5 m³ Sperrmüll oder bei einer Haushaltsauflösung. Die Kosten liegen zwischen 150 € (5 m³) und 600 € (10 m³). Für kleinere Mengen ist die kommunale Abholung günstiger." },
  { q: "Kann Stressfrei Entrümpelungen meinen Sperrmüll entsorgen?", a: "Ja! Wir übernehmen die komplette Sperrmüllentsorgung im Rhein-Erft-Kreis — inklusive Demontage, Abtransport und fachgerechter Entsorgung. Sie erhalten vorab einen verbindlichen Festpreis." },
];

export default function WasKostetSperrmuellPage() {
  useEffect(() => {
    document.title = "Was kostet Sperrmüll? Alle Kosten im Überblick | Stressfrei Entrümpelungen";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Was kostet Sperrmüll? ✓ Kommunale Abholung ✓ Container ✓ Private Entsorgung ✓ Preise im Rhein-Erft-Kreis ✓ Spartipps ✓ Kostenloser Ratgeber");
    else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Was kostet Sperrmüll? ✓ Kommunale Abholung ✓ Container ✓ Private Entsorgung ✓ Preise im Rhein-Erft-Kreis ✓ Spartipps ✓ Kostenloser Ratgeber";
      document.head.appendChild(meta);
    }
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", "https://stressfreientruempelungen.de/was-kostet-sperrmuell");
    if (!document.querySelector('link[rel="canonical"]')) document.head.appendChild(canonical);

    const ogType = document.querySelector('meta[property="og:type"]') as HTMLMetaElement | null || (() => { const m = document.createElement("meta"); m.setAttribute("property", "og:type"); document.head.appendChild(m); return m; })();
    ogType.setAttribute("content", "article");

    const faqSchema = document.createElement("script");
    faqSchema.type = "application/ld+json";
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map(f => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(faqSchema);

    const articleSchema = document.createElement("script");
    articleSchema.type = "application/ld+json";
    articleSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Was kostet Sperrmüll? Alle Kosten im Überblick",
      description: "Kommunale Abholung, Container oder private Entsorgung — was kostet Sperrmüll wirklich? Alle Preise und Spartipps.",
      author: { "@type": "Organization", name: "Stressfrei Entrümpelungen & Umzüge" },
      publisher: { "@type": "Organization", name: "Stressfrei Entrümpelungen & Umzüge" },
      datePublished: "2026-03-10",
      mainEntityOfPage: "https://stressfreientruempelungen.de/was-kostet-sperrmuell",
    });
    document.head.appendChild(articleSchema);

    return () => { canonical.remove(); faqSchema.remove(); articleSchema.remove(); };
  }, []);

  return (
    <PageLayout>
      <PageHero
        title="Was kostet Sperrmüll?"
        subtitle="Alle Entsorgungswege, Preise und Spartipps im Überblick — mit lokalen Infos für den Rhein-Erft-Kreis."
        highlight="Ratgeber"
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link href="/ratgeber" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 text-sm" data-testid="link-back-ratgeber">
            <ArrowLeft className="w-4 h-4" /> Zurück zum Ratgeber
          </Link>

          <motion.div {...fadeIn} className="mb-10">
            <img
              src="/images/sperrmuell-kosten-entsorgung-rhein-erft-kreis.webp"
              alt="Sperrmüll entsorgen — alte Möbel und Haushaltsgegenstände zur Abholung bereit"
              className="w-full rounded-2xl shadow-lg object-cover aspect-[16/9]"
              width={1200}
              height={675}
              loading="eager"
              data-testid="img-blog-hero"
            />
          </motion.div>

          <motion.div {...fadeIn}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4" data-testid="text-intro">
              Alte Möbel, kaputte Matratzen, ausgediente Elektrogeräte — irgendwann stellt sich jeder die Frage: <strong>Was kostet es, Sperrmüll zu entsorgen?</strong> Die Antwort hängt vom Entsorgungsweg, der Menge und Ihrem Wohnort ab.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Als erfahrenes Entrümpelungsunternehmen aus <strong>Bergheim im Rhein-Erft-Kreis</strong> kennen wir die regionalen Kostenstrukturen und Entsorgungswege sehr gut. In diesem Ratgeber zeigen wir transparent, welche Kosten anfallen und wie Sie dabei sparen können.
            </p>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.05 }}>
            <Card className="p-6 sm:p-8 mb-6 bg-primary/5 border-primary/20">
              <h2 className="font-bold text-foreground mb-3 flex items-center gap-2" data-testid="text-quick-summary">
                <Lightbulb className="w-5 h-5 text-primary" /> Auf die Schnelle
              </h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />Kommunale Sperrmüllabholung ist im Rhein-Erft-Kreis oft <strong>2× pro Jahr kostenlos</strong>.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />Zusatztermine kosten bei der Kommune ca. <strong>20–60 €</strong> pro Abholung.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />Private Anbieter berechnen je nach Menge <strong>80–500 €+</strong>.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />Containermiete liegt bei <strong>150–600 €</strong> je nach Größe.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />Selbstanlieferung am Wertstoffhof ist oft <strong>kostenlos</strong>.</li>
              </ul>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="mb-10 p-5 rounded-xl bg-card border border-border/50">
              <h2 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wide">Inhaltsverzeichnis</h2>
              <nav className="space-y-1.5 text-sm">
                {[
                  { id: "ueberblick", label: "Sperrmüll: Was kostet das?" },
                  { id: "was-ist-sperrmuell", label: "Was zählt als Sperrmüll?" },
                  { id: "kostenfaktoren", label: "Wovon hängen die Kosten ab?" },
                  { id: "kommune", label: "Sperrmüll über die Stadt/Gemeinde" },
                  { id: "privat", label: "Sperrmüll über private Anbieter" },
                  { id: "container", label: "Sperrmüll per Container entsorgen" },
                  { id: "rhein-erft-kreis", label: "Sperrmüllkosten im Rhein-Erft-Kreis" },
                  { id: "spartipps", label: "Wie lassen sich Kosten sparen?" },
                  { id: "faq", label: "Häufig gestellte Fragen" },
                  { id: "fazit", label: "Fazit" },
                ].map((item) => (
                  <a key={item.id} href={`#${item.id}`} className="block text-primary hover:underline" data-testid={`toc-${item.id}`}>
                    → {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.15 }}>
            <Card className="p-6 sm:p-8 mb-10" id="ueberblick">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <BadgeEuro className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground" data-testid="text-section-ueberblick">
                  Sperrmüll: Was kostet das? Ein Überblick
                </h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Die Kosten für Sperrmüll lassen sich nicht pauschal festlegen. In Deutschland bewegen sie sich je nach Entsorgungsweg zwischen <strong>0 und über 500 Euro</strong>. Die wichtigsten Faktoren sind Wohnort, Menge und Art des Sperrmülls sowie der gewählte Entsorgungsweg.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm" data-testid="table-kosten-ueberblick">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-4 font-semibold text-foreground">Entsorgungsweg</th>
                      <th className="text-left py-3 pr-4 font-semibold text-foreground">Kosten</th>
                      <th className="text-left py-3 font-semibold text-foreground hidden sm:table-cell">Hinweis</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kostenUebersicht.map((row, i) => (
                      <tr key={i} className="border-b border-border/50 last:border-0">
                        <td className="py-3 pr-4 text-muted-foreground">{row.weg}</td>
                        <td className="py-3 pr-4 font-medium text-foreground whitespace-nowrap">{row.kosten}</td>
                        <td className="py-3 text-muted-foreground hidden sm:table-cell">{row.hinweis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-4 italic">
                *Preise sind Richtwerte und können je nach Region und Anbieter variieren.
              </p>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.18 }}>
            <Card className="p-6 sm:p-8 mb-10" id="was-ist-sperrmuell">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <HelpCircle className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground" data-testid="text-section-was-ist">
                  Was zählt als Sperrmüll — und was nicht?
                </h2>
              </div>
              <p className="text-muted-foreground mb-5">
                Bevor Sie sich über Kosten informieren, ist es wichtig zu wissen, was überhaupt als Sperrmüll gilt. Sperrmüll sind <strong>sperrige Haushaltsgegenstände</strong>, die aufgrund ihrer Größe nicht in die Restmülltonne passen.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> Das ist Sperrmüll
                  </h3>
                  <ul className="space-y-2">
                    {wasIstSperrmuell.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-green-500 mt-0.5">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2 italic">*Elektro-Großgeräte werden oft separat abgeholt.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Trash2 className="w-4 h-4 text-red-500" /> Kein Sperrmüll
                  </h3>
                  <ul className="space-y-2">
                    {keinSperrmuell.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-red-500 mt-0.5">✗</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.2 }}>
            <Card className="p-6 sm:p-8 mb-10" id="kostenfaktoren">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Scale className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground" data-testid="text-section-faktoren">
                  Wovon hängen die Sperrmüll-Kosten ab?
                </h2>
              </div>
              <div className="space-y-5">
                {[
                  { title: "Wohnort und kommunale Regeln", text: "Jede Stadt und Gemeinde legt eigene Regeln fest: Wie oft ist die Abholung kostenlos? Welche Mengen sind erlaubt? Im Rhein-Erft-Kreis sind in der Regel 2 Abholungen pro Jahr inklusive." },
                  { title: "Menge und Art des Sperrmülls", text: "Je mehr Gegenstände entsorgt werden, desto höher die Kosten. Besonders sperrige Möbel oder Elektrogeräte können die Gebühren erhöhen." },
                  { title: "Zugänglichkeit und Etage", text: "Muss der Sperrmüll aus dem 4. Stock ohne Aufzug getragen werden? Ist der Zugang eng oder verwinkelt? Das erhöht den Zeitaufwand — und damit den Preis." },
                  { title: "Gewählter Entsorgungsweg", text: "Kommunale Abholung ist am günstigsten. Private Anbieter sind flexibler, aber teurer. Container eignen sich für große Mengen." },
                  { title: "Zusatzleistungen", text: "Demontage von Möbeln, Heraustragen aus der Wohnung, besenreine Übergabe oder Express-Termine kosten extra." },
                ].map((item, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-foreground mb-1">{i + 1}. {item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.22 }}>
            <Card className="p-6 sm:p-8 mb-10" id="kommune">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground" data-testid="text-section-kommune">
                  Sperrmüll über die Stadt oder Gemeinde entsorgen
                </h2>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Was kostet die kommunale Sperrmüllabholung?</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Die meisten Städte im Rhein-Erft-Kreis bieten ihren Bürgern <strong>2 kostenlose Sperrmüllabholungen pro Jahr</strong> an. Die Freimenge liegt meist bei 2–3 m³ pro Termin. Zusätzliche Termine kosten in der Regel zwischen <strong>20 und 60 Euro</strong>.
              </p>
              <div className="bg-card/50 rounded-lg p-4 border border-border/50 mb-5">
                <p className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" /> Beispiel: So läuft es in Bergheim
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• <strong>Kostenfreie Abholung:</strong> 2× pro Jahr bis 2 m³</li>
                  <li>• <strong>Anmeldung:</strong> Online über REMONDIS oder telefonisch</li>
                  <li>• <strong>Vorlaufzeit:</strong> Ca. 2–4 Wochen</li>
                  <li>• <strong>Wertstoffhof:</strong> Kostenlose Anlieferung bis 2 m³ für Privatpersonen</li>
                  <li>• <strong>Zusatzabholung:</strong> Ca. 30–50 € pro Termin</li>
                </ul>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Was kostet die Selbstanlieferung am Wertstoffhof?</h3>
              <p className="text-muted-foreground text-sm">
                Eine günstige Alternative ist die Selbstanlieferung. Im Rhein-Erft-Kreis gibt es Wertstoffhöfe in Bergheim, Hürth, Erftstadt und weiteren Städten. Die Anlieferung ist für Privatpersonen häufig <strong>kostenlos</strong> — vorausgesetzt, die Menge überschreitet die erlaubte Grenze nicht.
              </p>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.24 }}>
            <Card className="p-6 sm:p-8 mb-10" id="privat">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground" data-testid="text-section-privat">
                  Sperrmüll über private Anbieter entsorgen
                </h2>
              </div>
              <p className="text-muted-foreground mb-5 text-sm">
                Private Entsorgungs- und Entrümpelungsdienste bieten flexible Termine, Tragehilfe und kurzfristige Abholung. Sie sind besonders sinnvoll bei <strong>großen Mengen, schweren Möbeln oder Zeitmangel</strong>.
              </p>
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-sm" data-testid="table-privat">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-4 font-semibold text-foreground">Menge</th>
                      <th className="text-left py-3 pr-4 font-semibold text-foreground hidden sm:table-cell">Beispiel</th>
                      <th className="text-left py-3 font-semibold text-foreground">Durchschnittspreis</th>
                    </tr>
                  </thead>
                  <tbody>
                    {privatPreise.map((row, i) => (
                      <tr key={i} className="border-b border-border/50 last:border-0">
                        <td className="py-3 pr-4 text-muted-foreground font-medium">{row.menge}</td>
                        <td className="py-3 pr-4 text-muted-foreground hidden sm:table-cell">{row.beispiel}</td>
                        <td className="py-3 font-medium text-foreground whitespace-nowrap">{row.preis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground italic">
                *Preise variieren je nach Anbieter, Region und Serviceumfang (Heraustragen, Express, Demontage).
              </p>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.26 }}>
            <Card className="p-6 sm:p-8 mb-10 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-lg font-bold text-foreground">
                  Wir entsorgen Ihren Sperrmüll — schnell & zum Festpreis
                </h2>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Stressfrei Entrümpelungen & Umzüge übernimmt die komplette Sperrmüllentsorgung im Rhein-Erft-Kreis. Inklusive Demontage, Abtransport und fachgerechter Entsorgung — <strong>zu einem verbindlichen Festpreis ohne versteckte Kosten</strong>.
              </p>
              <a href="tel:+4922715880940" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline" data-testid="link-cta-phone">
                <Phone className="w-4 h-4" /> Jetzt kostenlos anfragen: 02271 / 5880940
              </a>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.28 }}>
            <Card className="p-6 sm:p-8 mb-10" id="container">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Container className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground" data-testid="text-section-container">
                  Sperrmüll per Container entsorgen
                </h2>
              </div>
              <p className="text-muted-foreground mb-5 text-sm">
                Wer größere Mengen Sperrmüll hat oder eine komplette <Link href="/haushaltsaufloesung" className="text-primary hover:underline">Haushaltsauflösung</Link> plant, kann einen Container mieten. Die Kosten hängen von Größe, Mietdauer und Abfallart ab.
              </p>
              <div className="space-y-3 mb-5">
                {[
                  { groesse: "3 m³ Absetzcontainer", preis: "ca. 150–250 €", fuer: "Kleine Räumung, Keller, Garage" },
                  { groesse: "5 m³ Absetzcontainer", preis: "ca. 250–400 €", fuer: "Wohnungsentrümpelung, Renovierung" },
                  { groesse: "7 m³ Absetzcontainer", preis: "ca. 350–500 €", fuer: "Hausentrümpelung, Dachboden + Keller" },
                  { groesse: "10 m³ Abrollcontainer", preis: "ca. 400–600 €", fuer: "Komplette Haushaltsauflösung" },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-card/50 border border-border/50">
                    <div className="text-center shrink-0 w-16">
                      <div className="text-lg font-bold text-primary">{c.groesse.split(" ")[0]}</div>
                      <div className="text-[10px] text-muted-foreground">{c.groesse.split(" ")[1]}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-foreground text-sm">{c.preis}</div>
                      <div className="text-xs text-muted-foreground">{c.fuer}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <strong>Tipp:</strong> Containerpreise beinhalten meist Lieferung, Abholung und Entsorgung. Achten Sie darauf, dass <strong>keine gemischten Abfälle</strong> (z.B. Bauschutt + Sperrmüll) im Container landen — das kann zu Aufpreisen führen.
              </p>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.3 }}>
            <Card className="p-6 sm:p-8 mb-10" id="rhein-erft-kreis">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground" data-testid="text-section-rek">
                  Sperrmüllkosten im Rhein-Erft-Kreis
                </h2>
              </div>
              <p className="text-muted-foreground mb-5 text-sm">
                Als lokales Unternehmen mit Sitz in Bergheim kennen wir die Entsorgungsregelungen im Rhein-Erft-Kreis genau. Hier ein Überblick für die wichtigsten Städte:
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm" data-testid="table-rek">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-4 font-semibold text-foreground">Stadt</th>
                      <th className="text-left py-3 pr-4 font-semibold text-foreground">Abholung</th>
                      <th className="text-left py-3 font-semibold text-foreground hidden sm:table-cell">Wertstoffhof</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rheinErftDaten.map((row, i) => (
                      <tr key={i} className="border-b border-border/50 last:border-0">
                        <td className="py-3 pr-4">
                          <Link href={row.link} className="text-primary hover:underline font-medium" data-testid={`link-rek-${row.stadt.toLowerCase()}`}>
                            {row.stadt}
                          </Link>
                        </td>
                        <td className="py-3 pr-4 text-muted-foreground">{row.abholung}</td>
                        <td className="py-3 text-muted-foreground hidden sm:table-cell">{row.wertstoffhof}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground italic">
                *Angaben ohne Gewähr. Details zu Freimengen und Anmeldung bei der jeweiligen Stadtverwaltung erfragen.
              </p>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.32 }}>
            <Card className="p-6 sm:p-8 mb-10" id="spartipps">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <CircleDollarSign className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground" data-testid="text-section-spartipps">
                  6 Tipps: So sparen Sie bei der Sperrmüllentsorgung
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {sparTipps.map((tip, i) => (
                  <div key={i} className="p-4 rounded-lg bg-card/50 border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                      <h3 className="font-semibold text-foreground text-sm">{tip.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">{tip.text}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.34 }}>
            <Card className="p-6 sm:p-8 mb-10" id="faq">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <HelpCircle className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground" data-testid="text-section-faq">
                  Häufig gestellte Fragen
                </h2>
              </div>
              <div className="space-y-4">
                {faqItems.map((faq, i) => (
                  <div key={i} className="border-b border-border/50 pb-4 last:border-0 last:pb-0">
                    <h3 className="font-semibold text-foreground mb-1 text-sm">{faq.q}</h3>
                    <p className="text-muted-foreground text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.36 }}>
            <Card className="p-6 sm:p-8 mb-10 bg-primary/5 border-primary/20" id="fazit">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Recycle className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground" data-testid="text-section-fazit">
                  Fazit: Sperrmüll entsorgen muss nicht teuer sein
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Im Rhein-Erft-Kreis stehen Ihnen mehrere Wege zur Verfügung, um Sperrmüll günstig oder sogar kostenlos zu entsorgen. Die <strong>kommunale Abholung</strong> ist am günstigsten, <strong>private Anbieter</strong> bieten mehr Flexibilität, und <strong>Containerlösungen</strong> eignen sich für große Mengen.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Wenn Sie eine schnelle und unkomplizierte Lösung suchen, stehen wir Ihnen gerne zur Verfügung. <strong>Stressfrei Entrümpelungen & Umzüge</strong> übernimmt die komplette Sperrmüllentsorgung — von der Demontage bis zur fachgerechten Entsorgung. <Link href="/kontakt" className="text-primary hover:underline font-medium">Kontaktieren Sie uns</Link> für ein kostenloses Angebot.
              </p>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.38 }}>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs text-muted-foreground">Weitere Ratgeber:</span>
              <Link href="/entruempelung-rhein-erft-kreis-preise" className="text-xs text-primary hover:underline" data-testid="link-related-1">Entrümpelung Preise</Link>
              <span className="text-xs text-muted-foreground">•</span>
              <Link href="/kostenuebernahme-durch-die-pflegekasse-bei-entruempelung-und-umzug-fuer-senioren" className="text-xs text-primary hover:underline" data-testid="link-related-2">Pflegekasse & Entrümpelung</Link>
              <span className="text-xs text-muted-foreground">•</span>
              <Link href="/kosten-entruempelung" className="text-xs text-primary hover:underline" data-testid="link-related-3">Kostenrechner</Link>
              <span className="text-xs text-muted-foreground">•</span>
              <Link href="/haushaltsaufloesung" className="text-xs text-primary hover:underline" data-testid="link-related-4">Haushaltsauflösung</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <BlogArticleCTA topic="Entsorgung" />
      <CTASection
        title="Sperrmüll loswerden — stressfrei und zum Festpreis"
        subtitle="Kontaktieren Sie uns für eine kostenlose Beratung. Wir erstellen Ihnen ein unverbindliches Festpreis-Angebot für Ihre Sperrmüllentsorgung im Rhein-Erft-Kreis."
      />
    </PageLayout>
  );
}
