import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, BlogArticleCTA } from "@/components/layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowLeft,
  Building2,
  Calendar,
  CheckCircle2,
  MapPin,
  Phone,
  Scale,
  Trash2,
  Truck,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const kommunen = [
  { stadt: "Bergheim", info: "Kostenlose Abholung 1× pro Jahr, Anmeldung beim AWB nötig. Wertstoffhof in Bergheim-Zentrum." },
  { stadt: "Kerpen", info: "Sperrmüll über AWB anmelden. Kostenloses Kontingent für Privathaushalte. Termin 2–4 Wochen im Voraus." },
  { stadt: "Pulheim", info: "Sperrmüll nach Terminabsprache mit dem AWB Rhein-Erft. Online-Anmeldung möglich." },
  { stadt: "Frechen", info: "AWB Rhein-Erft zuständig. Direktanlieferung am Wertstoffhof Frechen alternativ möglich." },
  { stadt: "Hürth", info: "AWB zuständig. Sperrmüll max. 2 m³ pro Abholung. Termin telefonisch oder online." },
  { stadt: "Erftstadt", info: "AWB Rhein-Erft — Anmeldung erforderlich. Wertstoffhof Liblar nimmt auch größere Mengen an." },
  { stadt: "Grevenbroich", info: "Linksrheinische Entwässerungs-Genossenschaft (LEG) / AWB. Bitte direkt beim Stadtbüro nachfragen." },
  { stadt: "Elsdorf", info: "AWB zuständig. Anmeldung rechtzeitig erforderlich — Wartezeiten von 2–6 Wochen sind möglich." },
];

const vergleich = [
  { kriterium: "Kosten", sperrmull: "Kostenlos (Freimenge)", firma: "Ab 80 € (kleine Mengen)" },
  { kriterium: "Menge", sperrmull: "Begrenzt (1–3 m³/Jahr)", firma: "Unbegrenzt — nach Aufwand" },
  { kriterium: "Termine", sperrmull: "Wartezeit 2–6 Wochen", firma: "Oft 24–48 h möglich" },
  { kriterium: "Mülltrennung", sperrmull: "Selbst trennen erforderlich", firma: "Wir trennen für Sie" },
  { kriterium: "Aufwand", sperrmull: "Alles selbst raus- und raustragen", firma: "Wir erledigen alles" },
  { kriterium: "Sondermüll", sperrmull: "Nicht möglich", firma: "Zertifizierte Entsorgung" },
  { kriterium: "Wertanrechnung", sperrmull: "Keine", firma: "Möglich bei Verwertbarem" },
];

const faqs = [
  {
    q: "Wie melde ich Sperrmüll im Rhein-Erft-Kreis an?",
    a: "Sie melden Sperrmüll beim AWB Rhein-Erft an — per Telefon (02271 / 8385-0) oder online unter awb-rhein-erft.de. Der Termin wird meist 2–4 Wochen im Voraus vergeben. Manche Städte haben auch Direktanlieferungen am Wertstoffhof.",
  },
  {
    q: "Was darf in den Sperrmüll im Rhein-Erft-Kreis?",
    a: "Erlaubt sind: Möbel, Matratzen, Teppiche, Fahrräder, Kinderwagen, Gartenmöbel und andere sperrige Haushaltsgegenstände. Nicht erlaubt: Elektrogeräte, Kühlschränke, Farben, Bauschutt, Autoreifen und gefährliche Abfälle.",
  },
  {
    q: "Was passiert, wenn ich zu viel Sperrmüll habe?",
    a: "Wenn Ihr Sperrmüll die kostenlose Freimenge überschreitet, können Sie entweder einen weiteren kostenpflichtigen Termin beim AWB buchen oder eine Entrümpelungsfirma beauftragen. Bei großen Mengen ist die Firma oft günstiger und schneller.",
  },
  {
    q: "Können Sie Sperrmüll auch kurzfristig abholen?",
    a: "Ja. Im Gegensatz zur kommunalen Abholung mit 2–6 Wochen Wartezeit können wir in den meisten Fällen innerhalb von 24–48 Stunden kommen. Rufen Sie uns an: 02271 / 5880940.",
  },
  {
    q: "Was kostet der AWB Wertstoffhof im Vergleich zur Firma?",
    a: "Privatpersonen können am Wertstoffhof oft kostenlos anliefern — aber Sie müssen den Sperrmüll selbst transportieren. Wer keine Möglichkeit hat, den Müll zu transportieren, ist mit einer Entrümpelungsfirma oft besser bedient, auch wenn diese etwas kostet.",
  },
];

export default function SperrmullRheinErftPage() {
  useEffect(() => {
    document.title = "Sperrmüll Rhein-Erft-Kreis 2026 | Anmelden, Kosten & Alternativen";

    const setMeta = (name: string, content: string, prop?: boolean) => {
      const sel = prop ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(sel) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); prop ? el.setAttribute("property", name) : el.setAttribute("name", name); document.head.appendChild(el); }
      el.content = content;
    };
    const desc = "Sperrmüll im Rhein-Erft-Kreis anmelden: Kosten, Freimengen, Termine beim AWB und wann eine Entrümpelungsfirma besser ist. Alle Städte im Überblick.";
    setMeta("description", desc);
    setMeta("robots", "index, follow");
    setMeta("og:title", "Sperrmüll Rhein-Erft-Kreis 2026 | Anmelden, Kosten & Alternativen", true);
    setMeta("og:description", desc, true);
    setMeta("og:url", "https://stressfreientruempelungen.de/sperrmull-rhein-erft-kreis", true);
    setMeta("og:type", "article", true);
    setMeta("og:image", "https://stressfreientruempelungen.de/images/og-image.jpg", true);
    setMeta("og:image:width", "1200", true);
    setMeta("og:image:height", "630", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Sperrmüll Rhein-Erft-Kreis 2026");
    setMeta("twitter:description", desc);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://stressfreientruempelungen.de/sperrmull-rhein-erft-kreis";

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    };
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Sperrmüll Rhein-Erft-Kreis 2026: Anmelden, Kosten & Alternativen",
      description: desc,
      url: "https://stressfreientruempelungen.de/sperrmull-rhein-erft-kreis",
      author: { "@type": "Organization", name: "Stressfrei Entrümpelungen & Umzüge" },
      publisher: { "@type": "Organization", name: "Stressfrei Entrümpelungen & Umzüge", url: "https://stressfreientruempelungen.de" },
      inLanguage: "de",
    };
    [faqSchema, articleSchema].forEach((schema, i) => {
      const id = `sperrmull-schema-${i}`;
      let el = document.getElementById(id) as HTMLScriptElement | null;
      if (!el) { el = document.createElement("script"); el.type = "application/ld+json"; el.id = id; document.head.appendChild(el); }
      el.textContent = JSON.stringify(schema);
    });
    return () => { [0, 1].forEach(i => document.getElementById(`sperrmull-schema-${i}`)?.remove()); };
  }, []);

  return (
    <PageLayout>
      <PageHero
        title="Sperrmüll Rhein-Erft-Kreis"
        subtitle="Anmelden, Kosten & Alternativen zur kommunalen Abholung — Ratgeber 2026"
        highlight="Sperrmüll"
      >
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6 justify-center items-center">
          <Button size="lg" asChild className="w-full sm:w-auto" data-testid="button-hero-call">
            <a href="tel:+4922715880940"><Phone className="w-4 h-4 mr-2" /> Entrümpelung anfragen</a>
          </Button>
        </div>
      </PageHero>

      <nav aria-label="Brotkrumenpfad" className="bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <li><Link href="/">Startseite</Link></li><li>/</li>
            <li><Link href="/ratgeber">Ratgeber</Link></li><li>/</li>
            <li className="text-foreground font-medium">Sperrmüll Rhein-Erft-Kreis</li>
          </ol>
        </div>
      </nav>

      {/* Intro */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <Link href="/ratgeber" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors" data-testid="link-back">
              <ArrowLeft className="w-4 h-4" /> Zurück zum Ratgeber
            </Link>
            <h2 className="text-2xl font-bold text-foreground mb-4">Sperrmüll im Rhein-Erft-Kreis: Was Sie wissen müssen</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Im Rhein-Erft-Kreis ist der <strong>AWB Rhein-Erft</strong> (Abfallwirtschaftsbetrieb) für die Sperrmüllabholung zuständig. Privathaushalte haben in der Regel Anspruch auf eine kostenlose Abholung pro Jahr — die Menge ist aber begrenzt, und die Wartezeiten können 2–6 Wochen betragen.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wer mehr als die Freimenge entsorgen möchte — oder schnell handeln muss, zum Beispiel vor einem Auszugstermin — sollte eine professionelle Entrümpelungsfirma in Betracht ziehen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In diesem Ratgeber erklären wir, wie Sie Sperrmüll im Rhein-Erft-Kreis richtig anmelden, was erlaubt ist und wann es sich lohnt, einen <Link href="/entruempelung" className="text-primary hover:underline">Entrümpelungsservice</Link> zu beauftragen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Städte-Übersicht */}
      <section className="py-12 bg-muted/30 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Sperrmüll je Stadt im Rhein-Erft-Kreis</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {kommunen.map((k, i) => (
                <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.06 }}>
                  <Card className="p-4" data-testid={`city-card-${i}`}>
                    <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary shrink-0" /> {k.stadt}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{k.info}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 italic">
              *Angaben ohne Gewähr — Regelungen können sich ändern. Aktuelle Infos unter <a href="https://www.awb-rhein-erft.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">awb-rhein-erft.de</a>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vergleich */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Scale className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Vergleich: Kommunaler Sperrmüll vs. Entrümpelungsfirma</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Kriterium</th>
                    <th className="text-left py-3 pr-4 font-semibold text-primary">Kommunaler Sperrmüll</th>
                    <th className="text-left py-3 font-semibold text-foreground">Entrümpelungsfirma</th>
                  </tr>
                </thead>
                <tbody>
                  {vergleich.map((row, i) => (
                    <tr key={i} className="border-b border-border/50 last:border-0" data-testid={`compare-row-${i}`}>
                      <td className="py-3 pr-4 font-medium text-foreground">{row.kriterium}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{row.sperrmull}</td>
                      <td className="py-3 text-muted-foreground">{row.firma}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wann Firma */}
      <section className="py-12 bg-muted/30 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Wann lohnt sich eine Entrümpelungsfirma mehr?</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: CheckCircle2, text: "Wenn mehr als 2 m³ Sperrmüll anfallen (Haushalt, Keller, Dachboden)", color: "text-green-500" },
                { icon: CheckCircle2, text: "Wenn es schnell gehen muss (Übergabe, Erbschaft, Mieterwechsel)", color: "text-green-500" },
                { icon: CheckCircle2, text: "Wenn körperliche Arbeit nicht möglich ist (Alter, Krankheit)", color: "text-green-500" },
                { icon: CheckCircle2, text: "Wenn Elektrogeräte, Kühlschränke oder Sondermüll dabei sind", color: "text-green-500" },
                { icon: CheckCircle2, text: "Wenn verwertbare Gegenstände eine Wertanrechnung ermöglichen", color: "text-green-500" },
                { icon: CheckCircle2, text: "Wenn kein eigenes Fahrzeug für den Wertstoffhof vorhanden ist", color: "text-green-500" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 bg-background border border-border rounded-lg p-3" data-testid={`reason-item-${i}`}>
                  <item.icon className={`w-4 h-4 mt-0.5 shrink-0 ${item.color}`} />
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/entruempelung">
                <Button data-testid="button-entruempelung">
                  <Trash2 className="w-4 h-4 mr-2" /> Kostenlose Entrümpelung anfragen
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-8">Häufige Fragen zum Sperrmüll im Rhein-Erft-Kreis</motion.h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.07 }}>
                <Card className="p-5" data-testid={`faq-item-${i}`}>
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BlogArticleCTA topic="Sperrmüll-Entsorgung" />
      <CTASection />
    </PageLayout>
  );
}
