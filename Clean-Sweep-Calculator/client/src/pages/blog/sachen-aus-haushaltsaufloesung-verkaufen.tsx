import { useEffect } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, BlogArticleCTA } from "@/components/layout";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  Euro,
  HelpCircle,
  PhoneCall,
  ShieldCheck,
  Star,
  Lightbulb,
  Package,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const wege = [
  {
    nr: "01",
    titel: "Ebay Kleinanzeigen (heute: Kleinanzeigen.de)",
    geeignetFuer: "Möbel, Haushaltsgeräte, Kleidung, Spielzeug, Bücher",
    vorteile: [
      "Kostenlos und einfach zu nutzen",
      "Lokale Käufer — Selbstabholung möglich",
      "Sehr große Reichweite in NRW",
    ],
    tipp: "Fotos bei gutem Licht machen, Maße angeben, Preise leicht unter Marktwert setzen für schnellen Verkauf.",
  },
  {
    nr: "02",
    titel: "Sozialkaufhäuser & Möbelbörsen",
    geeignetFuer: "Gut erhaltene Möbel, Kleidung, Hausrat, Bücher, Spielzeug",
    vorteile: [
      "Gutes Gewissen — soziale Weitergabe",
      "Viele holen auch ab (kostenlos oder günstig)",
      "Steuerlich als Sachspende absetzbar",
    ],
    tipp: "Im Rhein-Erft-Kreis gibt es Sozialkaufhäuser in Bergheim, Kerpen und Frechen. Vorab anrufen, ob die Sachen angenommen werden.",
  },
  {
    nr: "03",
    titel: "Antik- und Flohmarkt",
    geeignetFuer: "Antiquitäten, Sammlerstücke, Vintage-Möbel, Schmuck, Porzellan",
    vorteile: [
      "Gute Preise für seltene oder wertvolle Stücke",
      "Persönlicher Kontakt mit Käufern",
      "Keine Online-Komplexität",
    ],
    tipp: "Wertgegenstände vorab schätzen lassen — bei Antiquitäten lohnt sich das fast immer.",
  },
  {
    nr: "04",
    titel: "Wertanrechnung durch die Entrümpelungsfirma",
    geeignetFuer: "Verwertbare Möbel, Metalle, Elektrogeräte, Antiquitäten, Gold/Silber",
    vorteile: [
      "Kein eigener Aufwand",
      "Spart direkt bares Geld beim Entrümpelungspreis",
      "Alles aus einer Hand",
    ],
    tipp: "Bei Stressfrei Entrümpelungen & Umzüge schätzen wir bei der kostenlosen Besichtigung, was anrechenbar ist. Das kann Ihren Preis um 20–40 % senken.",
  },
  {
    nr: "05",
    titel: "Schrotthändler & Metallankauf",
    geeignetFuer: "Kupfer, Messing, Aluminium, Eisen, alte Elektrogeräte",
    vorteile: [
      "Barzahlung sofort",
      "Kostenlose Abholung bei ausreichender Menge",
      "Ideal für Kellerlagerungen mit Altmetall",
    ],
    tipp: "Im Rhein-Erft-Kreis gibt es mehrere Metallankäufer. Preise schwanken täglich nach Weltmarktpreis — bei größeren Mengen lohnt sich Vergleich.",
  },
];

const wertsachen = [
  { kategorie: "Antiquitäten & Gemälde", hinweis: "Gutachter beauftragen — oft mehr wert als gedacht" },
  { kategorie: "Schmuck & Uhren", hinweis: "Juwelier oder Pfandleihe — Goldgehalt bestimmt den Preis" },
  { kategorie: "Münzsammlungen", hinweis: "Münzhändler oder Numismatiker konsultieren" },
  { kategorie: "Markenporzella & Kristall", hinweis: "Sammlerbörsen oder Auktionshäuser" },
  { kategorie: "Vintage-Möbel (50er–70er)", hinweis: "Antiquitätenhändler oder Ebay — sehr gefragt" },
  { kategorie: "Bücher (Erstausgaben, Sachbücher)", hinweis: "Antiquariat oder ZVAB.com" },
  { kategorie: "Elektrisches Vintage (Röhrenradio etc.)", hinweis: "Sammlerforen und Ebay" },
  { kategorie: "Kupfer & Messing", hinweis: "Schrottankauf — aktuellen Tagespreise erfragen" },
];

const faqs = [
  {
    frage: "Lohnt es sich, Sachen aus einer Haushaltsauflösung zu verkaufen?",
    antwort:
      "Ja — besonders bei Möbeln, Elektrogeräten, Antiquitäten und Sammlerstücken. Gut erhaltene Sofas oder Schlafzimmergarnituren erzielen auf Kleinanzeigen 100–500 €. Antiquitäten können deutlich mehr wert sein. Der Aufwand ist aber real: Zeit für Fotos, Texte, Kundengespräche und Abwicklung einplanen.",
  },
  {
    frage: "Was ist Wertanrechnung bei der Entrümpelung?",
    antwort:
      "Wertanrechnung bedeutet: Die Entrümpelungsfirma schätzt, welche Gegenstände einen Wiederverkaufswert haben, und zieht diesen Betrag vom Entrümpelungspreis ab. Das kann Ihre Kosten um 20–40 % senken — ohne dass Sie selbst verkaufen müssen.",
  },
  {
    frage: "Welche Sachen haben bei einer Haushaltsauflösung den größten Wert?",
    antwort:
      "Am wertvollsten sind häufig: Schmuck, Uhren, Goldmünzen, Kupfer und Messing, Antiquitäten, Gemälde, Vintage-Möbel (50er–70er Jahre), Markenporzellan und seltene Bücher. Neuwertige Elektrogeräte und Küchen haben ebenfalls nennenswerten Wert.",
  },
  {
    frage: "Nehmen Sozialkaufhäuser im Rhein-Erft-Kreis alles an?",
    antwort:
      "Nein. Die meisten Sozialkaufhäuser nehmen nur gut erhaltene Sachen ohne Schäden, Schimmel oder starke Gebrauchsspuren. Vorab anrufen — viele haben spezifische Listen was sie annehmen und was nicht.",
  },
  {
    frage: "Wie lange dauert der Verkauf vor einer Haushaltsauflösung?",
    antwort:
      "Planen Sie 2–4 Wochen für den Eigenverkauf. Wer verkaufen und danach entrümpeln will, sollte frühzeitig anfangen. Alternativ: Wertanrechnung durch eine Firma — das dauert nur den Besichtigungstermin.",
  },
  {
    frage: "Können Antiquitäten aus der Haushaltsauflösung gespendet werden?",
    antwort:
      "Ja — Sachspenden an gemeinnützige Organisationen sind bis zu ihrem Marktwert steuerlich absetzbar. Eine Spendenquittung ausstellen lassen und den Zeitwert dokumentieren.",
  },
];

export default function SachenAusHaushaltsaufloesungVerkaufenPage() {
  useEffect(() => {
    document.title = "Wer kauft Sachen aus einer Haushaltsauflösung? 5 Wege | Stressfrei";
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.setAttribute(
        "content",
        "Wer kauft Sachen aus einer Haushaltsauflösung? 5 Wege zum Verkauf im Rhein-Erft-Kreis: Kleinanzeigen, Sozialkaufhaus, Antik, Schrottankauf & Wertanrechnung."
      );
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://stressfreientruempelungen.de/sachen-aus-haushaltsaufloesung-verkaufen";
  }, []);

  return (
    <>
      <PageLayout>
        <PageHero
          badge="Ratgeber"
          title="Wer kauft Sachen aus einer Haushaltsauflösung?"
          subtitle="5 bewährte Wege zum Verkauf im Rhein-Erft-Kreis — von Kleinanzeigen bis Wertanrechnung"
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
                src="/images/sachen-haushaltsaufloesung-verkaufen.png"
                alt="Haushaltsauflösung — Gegenstände zum Verkauf vorbereiten"
                className="w-full object-cover max-h-80"
                loading="lazy"
              />
            </motion.div>

            <motion.div {...fadeIn} className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nach einem Todesfall, einem Umzug oder bei einer Wohnungsauflösung stellt sich
                immer dieselbe Frage: Was mache ich mit den ganzen Sachen? Wegwerfen ist nicht
                immer die beste Antwort — oft steckt mehr Wert drin, als man denkt. Dieser Ratgeber
                zeigt 5 Wege, wie Sie Sachen aus einer Haushaltsauflösung im Rhein-Erft-Kreis und
                NRW sinnvoll verwerten.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-10 sm:py-14 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-8">
              Die 5 besten Wege zum Verkauf
            </motion.h2>
            <div className="space-y-5">
              {wege.map((w) => (
                <motion.div key={w.nr} {...fadeIn}>
                  <Card className="p-6">
                    <div className="flex gap-4 items-start">
                      <span className="text-3xl font-black text-primary/20 shrink-0 leading-none">{w.nr}</span>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-1">{w.titel}</h3>
                        <p className="text-xs text-muted-foreground mb-3">
                          <strong>Geeignet für:</strong> {w.geeignetFuer}
                        </p>
                        <ul className="space-y-1 mb-3">
                          {w.vorteile.map((v, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" /> {v}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-start gap-2 bg-primary/5 rounded-lg p-3">
                          <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <p className="text-xs text-muted-foreground">{w.tipp}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-6">
              Welche Sachen haben bei einer Haushaltsauflösung den größten Wert?
            </motion.h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {wertsachen.map((w, i) => (
                <motion.div key={i} {...fadeIn}>
                  <Card className="p-4 flex gap-3 items-start">
                    <Star className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">{w.kategorie}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{w.hinweis}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="rounded-2xl bg-primary/5 border border-primary/20 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 text-primary shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">
                    Kein Aufwand: Wertanrechnung durch uns
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Sie müssen nichts selbst verkaufen. Wir schätzen bei der kostenlosen Besichtigung
                    alles was einen Wert hat und ziehen es direkt von Ihrem Preis ab. Einfacher geht
                    es nicht.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Kostenlose Besichtigung & Wertschätzung",
                      "Wertanrechnung senkt Ihren Preis um bis zu 40 %",
                      "Kein eigenes Verkaufen, keine Ebay-Inserate",
                      "Alles aus einer Hand: Auflösung + Verwertung + Entsorgung",
                    ].map((p, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-primary" /> Häufig gestellte Fragen
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

        <section className="py-10 sm:py-14 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="flex items-center gap-3 p-5 bg-muted/40 rounded-xl border">
              <PhoneCall className="w-6 h-6 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm mb-0.5">Weiterlesen: Verwandte Ratgeber</p>
                <div className="flex flex-wrap gap-3 mt-2">
                  {[
                    { label: "Wertanrechnung: So sparen Sie", href: "/wertanrechnung-bei-der-entruempelung" },
                    { label: "Haushaltsauflösung vorbereiten", href: "/haushaltsaufloesung-vorbereiten" },
                    { label: "Haushaltsauflösung Checkliste", href: "/haushaltsaufloesung-checkliste" },
                    { label: "Entrümpelung nach Todesfall", href: "/entruempelung-nach-todesfall" },
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

        <BlogArticleCTA topic="Haushaltsauflösung" />
      <CTASection />
      </PageLayout>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Wer kauft Sachen aus einer Haushaltsauflösung? 5 Wege zum Verkauf",
        description: "Wer kauft Sachen aus einer Haushaltsauflösung? 5 Wege im Rhein-Erft-Kreis: Kleinanzeigen, Sozialkaufhaus, Antik, Schrottankauf & Wertanrechnung.",
        image: "https://stressfreientruempelungen.de/images/sachen-haushaltsaufloesung-verkaufen.png",
        author: { "@type": "Organization", name: "Stressfrei Entrümpelungen & Umzüge", url: "https://stressfreientruempelungen.de" },
        publisher: { "@type": "Organization", name: "Stressfrei Entrümpelungen & Umzüge", logo: { "@type": "ImageObject", url: "https://stressfreientruempelungen.de/favicon.webp" } },
        datePublished: "2026-03-25",
        dateModified: "2026-03-25",
        mainEntityOfPage: "https://stressfreientruempelungen.de/sachen-aus-haushaltsaufloesung-verkaufen",
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.frage, acceptedAnswer: { "@type": "Answer", text: faq.antwort } })),
      }) }} />
    </>
  );
}
