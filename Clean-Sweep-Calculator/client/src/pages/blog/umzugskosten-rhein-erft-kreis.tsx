import { useEffect } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, BlogArticleCTA } from "@/components/layout";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  Euro,
  Truck,
  MapPin,
  HelpCircle,
  PhoneCall,
  ShieldCheck,
  Clock,
  AlertTriangle,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const kostenTabelle = [
  {
    groesse: "1-Zimmer-Wohnung",
    nahUmzug: "300–600 €",
    regionalUmzug: "500–900 €",
    hinweis: "Inkl. Möbelpacker",
  },
  {
    groesse: "2-Zimmer-Wohnung",
    nahUmzug: "500–900 €",
    regionalUmzug: "800–1.400 €",
    hinweis: "Inkl. Kartonage optional",
  },
  {
    groesse: "3-Zimmer-Wohnung",
    nahUmzug: "800–1.400 €",
    regionalUmzug: "1.200–2.000 €",
    hinweis: "2 Helfer + Transporter",
  },
  {
    groesse: "4-Zimmer-Wohnung",
    nahUmzug: "1.200–2.000 €",
    regionalUmzug: "1.800–3.000 €",
    hinweis: "3 Helfer + großer LKW",
  },
  {
    groesse: "Haus (5+ Zimmer)",
    nahUmzug: "2.000–4.000 €",
    regionalUmzug: "3.000–6.000 €",
    hinweis: "Mehrere Tage, individuell",
  },
];

const faktoren = [
  {
    icon: <MapPin className="w-5 h-5 text-primary" />,
    titel: "Entfernung & Strecke",
    text: "Umzüge innerhalb des Rhein-Erft-Kreises (z.B. Bergheim nach Kerpen) sind günstiger als Umzüge nach Köln, Düsseldorf oder Aachen.",
  },
  {
    icon: <Truck className="w-5 h-5 text-primary" />,
    titel: "Volumen & Möbelmenge",
    text: "Je mehr Möbel, desto größer der LKW und desto mehr Helfer werden benötigt. Weniger Sachen = weniger Kosten.",
  },
  {
    icon: <Clock className="w-5 h-5 text-primary" />,
    titel: "Etage & Aufzug",
    text: "Kein Aufzug im 4. Stock kostet deutlich mehr Zeit. Treppenhaus-Aufschläge sind bei seriösen Firmen transparent ausgewiesen.",
  },
  {
    icon: <Euro className="w-5 h-5 text-primary" />,
    titel: "Zusatzleistungen",
    text: "Ein- und Auspacken, Möbelmontage, Halteverbotszone beantragen oder Klaviertransport: Extras klar erfragen und im Angebot fixieren.",
  },
  {
    icon: <AlertTriangle className="w-5 h-5 text-primary" />,
    titel: "Saison & Termin",
    text: "Sommer und Monatsanfang/-ende sind teurer und schnell ausgebucht. Frühzeitig buchen spart Geld.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
    titel: "Versicherung",
    text: "Seriöse Umzugsunternehmen im Rhein-Erft-Kreis sind vollversichert. Fragen Sie nach der Transportversicherung — sie deckt Schäden an Ihrem Eigentum.",
  },
];

const staedte = [
  { name: "Bergheim", distanz: "Rhein-Erft-Kreis Kernstadt" },
  { name: "Kerpen", distanz: "~12 km von Bergheim" },
  { name: "Pulheim", distanz: "~15 km von Bergheim" },
  { name: "Frechen", distanz: "~18 km von Bergheim" },
  { name: "Hürth", distanz: "~22 km von Bergheim" },
  { name: "Erftstadt", distanz: "~25 km von Bergheim" },
  { name: "Brühl", distanz: "~28 km von Bergheim" },
  { name: "Grevenbroich", distanz: "~20 km von Bergheim" },
  { name: "Köln", distanz: "~30 km von Bergheim" },
  { name: "Düsseldorf", distanz: "~45 km von Bergheim" },
  { name: "Aachen", distanz: "~75 km von Bergheim" },
  { name: "Bonn", distanz: "~50 km von Bergheim" },
];

const spartipps = [
  "Früh buchen: 4–6 Wochen Vorlauf spart oft 10–15 %.",
  "Selbst packen: Kartons selbst packen reduziert die Arbeitszeit.",
  "Günstigster Umzugstag: Dienstag bis Donnerstag sind oft billiger als Freitag.",
  "Vergleich einholen: Mindestens 2–3 Angebote vergleichen.",
  "Sperrmüll vorher loswerden: Weniger Volumen = kleinerer LKW.",
  "Kombinieren: Entrümpelung und Umzug aus einer Hand — oft günstiger.",
];

const faqs = [
  {
    frage: "Was kostet ein Umzug innerhalb des Rhein-Erft-Kreises?",
    antwort:
      "Ein lokaler Umzug (z.B. Bergheim nach Kerpen) kostet für eine 3-Zimmer-Wohnung typischerweise 800–1.400 €. Der genaue Preis hängt vom Volumen, der Etage und gewünschten Zusatzleistungen ab.",
  },
  {
    frage: "Was kostet ein Umzug von Bergheim nach Köln?",
    antwort:
      "Für eine 3-Zimmer-Wohnung von Bergheim nach Köln rechnen Sie mit ca. 1.200–2.000 €. Die Entfernung (~30 km) und Zuschläge für Köln-typische Engpässe (Parkplatz, Altstadt) spielen eine Rolle.",
  },
  {
    frage: "Was ist im Umzugspreis enthalten?",
    antwort:
      "Bei Stressfrei Entrümpelungen & Umzüge sind im Festpreis enthalten: Transport, Auf- und Abladen, Möbelschutz, Versicherung und Anfahrt. Montage, Einpackservice und Halteverbotszone sind optional zubuchbar.",
  },
  {
    frage: "Wie beantrage ich eine Halteverbotszone für meinen Umzug?",
    antwort:
      "Halteverbotszone müssen beim zuständigen Straßenverkehrsamt beantragt werden — im Rhein-Erft-Kreis bei der jeweiligen Stadtverwaltung. Wir übernehmen diese Beantragung auf Wunsch für Sie.",
  },
  {
    frage: "Wie viele Helfer brauche ich für meine Wohnung?",
    antwort:
      "Als Faustregel: 1-Zimmer → 1 Helfer + Fahrer, 2–3 Zimmer → 2 Helfer + Fahrer, 4–5 Zimmer → 3 Helfer + Fahrer. Bei schwerem Inventar (Klavier, Tresor, Marmor) mehr einplanen.",
  },
  {
    frage: "Wie lange dauert ein Umzug im Rhein-Erft-Kreis?",
    antwort:
      "Eine 2-Zimmer-Wohnung braucht etwa 3–5 Stunden, eine 3-Zimmer-Wohnung ca. 5–8 Stunden. Größere Haushalte oder Häuser werden über mehrere Tage verteilt.",
  },
];

export default function UmzugskostenRheinErftPage() {
  useEffect(() => {
    document.title =
      "Umzugskosten Rhein-Erft-Kreis 2025: Was kostet ein Umzug? | Stressfrei";
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.setAttribute(
        "content",
        "Umzugskosten Rhein-Erft-Kreis 2025: Preistabelle, Kostenfaktoren & Spartipps für Ihren Umzug in Bergheim, Kerpen, Pulheim, Frechen, Hürth und ganz NRW."
      );
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://stressfreientruempelungen.de/umzugskosten-rhein-erft-kreis";
  }, []);

  return (
    <>
      <PageLayout>
        <PageHero
          badge="Umzugsratgeber"
          title="Umzugskosten Rhein-Erft-Kreis 2025"
          subtitle="Was kostet ein Umzug in Bergheim, Kerpen, Pulheim, Frechen & Co.? Alle Preise, Faktoren und Spartipps — lokal und ehrlich."
        />

        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <Link href="/ratgeber">
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary cursor-pointer mb-8">
                <ArrowLeft className="w-4 h-4" /> Zurück zum Ratgeber
              </span>
            </Link>

            <motion.div {...fadeIn} className="rounded-2xl overflow-hidden mb-8 shadow-sm">
              <img
                src="/images/umzugskosten-rhein-erft-kreis.png"
                alt="Professionelle Umzugsfirma im Rhein-Erft-Kreis — Möbelpacker tragen Kartons"
                className="w-full object-cover max-h-80"
                loading="lazy"
              />
            </motion.div>

            <motion.div {...fadeIn} className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wie viel ein Umzug im Rhein-Erft-Kreis kostet, hängt von vielen Faktoren ab. Dieser
                Ratgeber gibt Ihnen eine ehrliche Preisübersicht — von Bergheim bis Kerpen, von
                Pulheim bis Hürth — und erklärt, was die Kosten beeinflusst und wie Sie sparen.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-10 sm:py-14 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-2">
              Umzugskosten Übersicht: Was kostet Ihr Umzug?
            </motion.h2>
            <motion.p {...fadeIn} className="text-muted-foreground mb-6">
              Richtwerte für den Rhein-Erft-Kreis (Nah-Umzug bis 30 km / Regional bis 80 km).
            </motion.p>
            <motion.div {...fadeIn} className="overflow-x-auto rounded-xl border">
              <table className="w-full text-sm">
                <thead className="bg-muted/60">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">Wohnungsgröße</th>
                    <th className="text-left p-4 font-semibold text-foreground">Nah-Umzug</th>
                    <th className="text-left p-4 font-semibold text-foreground">Regional (bis 80 km)</th>
                    <th className="text-left p-4 font-semibold text-foreground hidden sm:table-cell">Hinweis</th>
                  </tr>
                </thead>
                <tbody>
                  {kostenTabelle.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted/20"}>
                      <td className="p-4 font-medium text-foreground">{row.groesse}</td>
                      <td className="p-4 text-green-700 font-semibold">{row.nahUmzug}</td>
                      <td className="p-4 text-foreground">{row.regionalUmzug}</td>
                      <td className="p-4 text-muted-foreground hidden sm:table-cell text-xs">{row.hinweis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
            <motion.p {...fadeIn} className="text-xs text-muted-foreground mt-3">
              * Richtwerte — genaue Preise nach kostenloser Besichtigung. Wir geben immer
              Festpreisangebote, keine Stundenabrechnungen mit bösen Überraschungen.
            </motion.p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-6">
              Was beeinflusst die Umzugskosten?
            </motion.h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {faktoren.map((f, i) => (
                <motion.div key={i} {...fadeIn}>
                  <Card className="p-5 h-full">
                    <div className="flex items-center gap-2 mb-2">
                      {f.icon}
                      <h3 className="font-semibold text-foreground text-sm">{f.titel}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-6">
              <MapPin className="inline w-6 h-6 text-primary mr-2" />
              Unser Einsatzgebiet im Rhein-Erft-Kreis & darüber hinaus
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {staedte.map((s, i) => (
                <motion.div key={i} {...fadeIn}>
                  <Card className="p-3 text-center">
                    <p className="font-semibold text-foreground text-sm">{s.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.distanz}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-6">
              6 Spartipps für Ihren Umzug
            </motion.h2>
            <div className="space-y-3">
              {spartipps.map((t, i) => (
                <motion.div key={i} {...fadeIn}>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{t}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-primary" />
              Häufig gestellte Fragen zu Umzugskosten im Rhein-Erft-Kreis
            </motion.h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div key={i} {...fadeIn}>
                  <Card className="p-5">
                    <h3 className="font-semibold text-foreground mb-2">{faq.frage}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.antwort}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="flex items-center gap-3 p-5 bg-muted/40 rounded-xl border">
              <PhoneCall className="w-6 h-6 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm mb-0.5">Weiterlesen: Verwandte Ratgeber</p>
                <div className="flex flex-wrap gap-3 mt-2">
                  {[
                    { label: "Umzugscheckliste 2025", href: "/umzugscheckliste" },
                    { label: "Umzugshelfer vs. Umzugsunternehmen", href: "/umzugshelfer-tipps" },
                    { label: "Privatumzug NRW", href: "/privatumzug" },
                    { label: "Senioren Umzug NRW", href: "/senioren-umzug-nrw" },
                  ].map((l) => (
                    <Link key={l.href} href={l.href} style={{ textDecoration: "none" }}>
                      <span className="text-sm text-primary hover:underline cursor-pointer">{l.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <BlogArticleCTA topic="Umzug" />
      <CTASection />
      </PageLayout>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Umzugskosten Rhein-Erft-Kreis 2025: Was kostet ein Umzug?",
            description:
              "Umzugskosten Rhein-Erft-Kreis 2025: Preistabelle, Kostenfaktoren & Spartipps für Ihren Umzug in Bergheim, Kerpen, Pulheim, Frechen, Hürth und ganz NRW.",
            image: "https://stressfreientruempelungen.de/images/privatumzug-stressfrei-rhein-erft-kreis.webp",
            author: {
              "@type": "Organization",
              name: "Stressfrei Entrümpelungen & Umzüge",
              url: "https://stressfreientruempelungen.de",
            },
            publisher: {
              "@type": "Organization",
              name: "Stressfrei Entrümpelungen & Umzüge",
              logo: {
                "@type": "ImageObject",
                url: "https://stressfreientruempelungen.de/favicon.webp",
              },
            },
            datePublished: "2026-03-25",
            dateModified: "2026-03-25",
            mainEntityOfPage:
              "https://stressfreientruempelungen.de/umzugskosten-rhein-erft-kreis",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.frage,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.antwort,
              },
            })),
          }),
        }}
      />
    </>
  );
}
