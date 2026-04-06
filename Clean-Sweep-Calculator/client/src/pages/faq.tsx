import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero } from "@/components/layout";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const faqs = [
  {
    q: "Wie viel kostet eine Entrümpelung bei Stressfrei Entrümpelungen?",
    a: "Die Kosten für eine professionelle Entrümpelung lassen sich nicht pauschal festlegen, da jeder Auftrag unterschiedlich ist. Der Preis richtet sich nach dem Umfang der Räumung, der Menge und Art des zu entsorgenden Materials sowie möglichen Zusatzleistungen. Hier eine grobe Orientierung:\n\n1-Zimmer-Wohnung: ab ca. 500 €\n2-Zimmer-Wohnung: ab ca. 800 €\n3-Zimmer-Wohnung: ab ca. 1.200 €\nHaus: ab ca. 2.000 €\nKeller/Dachboden: ab ca. 300 €\n\nSie erhalten immer einen fairen Festpreis ohne versteckte Kosten.",
  },
  {
    q: "Wie lange dauert die Angebotserstellung?",
    a: "Für ein unverbindliches Angebot nehmen wir wichtige Eckdaten auf und begutachten das Entrümpelungsvolumen - vor Ort oder per Fotos/Video. In der Regel haben Sie einige Stunden nach der Besichtigung ein Angebot in Ihrem E-Mail-Postfach.",
  },
  {
    q: "In meiner Straße kann man schlecht parken. Wie lösen wir das?",
    a: "Wir übernehmen für Sie das Einrichten einer Halteverbotszone und kümmern uns um alle behördlichen Vorgaben. Auch das Aufstellen der Beschilderung fällt unter unseren Komplett-Service. So stellen wir sicher, dass unsere Fahrzeuge direkt vor dem Objekt parken können und die Entrümpelung effizient ablaufen kann.",
  },
  {
    q: "Entrümpeln Sie auch kurzfristig?",
    a: "Ja! Versprechen können wir nichts, aber wir bemühen uns, auch kurzfristige Anfragen schnell und sorgfältig durchzuführen. Bisher haben wir meistens eine Lösung gefunden. Rufen Sie uns einfach an, und wir schauen gemeinsam, was möglich ist.",
  },
  {
    q: "Wie funktioniert die Wertanrechnung?",
    a: "Die Wertanrechnung erfolgt durch die Bewertung der Objekte vor Ort, die für einen Ankauf interessant sind. Diese erscheinen im Kostenvoranschlag und verringern den Preis für die geplante Entrümpelung. So können Sie bares Geld sparen.",
  },
  {
    q: "Was ist eine Entrümpelung?",
    a: "Bei einer Entrümpelung werden Gegenstände, die nicht mehr benötigt werden, aus einem Objekt entfernt und fachgerecht entsorgt. Dies kann einzelne Räume, Keller, Dachböden oder ganze Wohnungen betreffen. Unser Team übernimmt das Tragen, den Abtransport und die umweltgerechte Entsorgung.",
  },
  {
    q: "Was ist eine Haushaltsauflösung?",
    a: "Bei einer Haushaltsauflösung wird der gesamte Haushalt aufgelöst. Alle Möbel, Einrichtungsgegenstände und persönlichen Sachen werden entfernt. Dies kommt häufig bei Umzügen ins Pflegeheim, nach einem Todesfall oder bei einer Verkleinerung des Haushalts vor. Wertvolle Gegenstände werden auf Wunsch verwertet und der Erlös wird angerechnet.",
  },
  {
    q: "Ist die Besichtigung wirklich kostenlos?",
    a: "Ja, die Besichtigung ist zu 100 % kostenlos und unverbindlich. Wir kommen zu Ihnen vor Ort, um den Umfang der Arbeit einzuschätzen und Ihnen ein faires Festpreis-Angebot zu erstellen. Alternativ können Sie uns Fotos oder Videos senden.",
  },
  {
    q: "Wie lange dauert eine Besichtigung?",
    a: "Eine Besichtigung dauert in der Regel zwischen 15 und 30 Minuten, je nach Größe des Objekts. Währenddessen nehmen wir alle relevanten Informationen auf und besprechen Ihre Wünsche und Anforderungen.",
  },
  {
    q: "Wie lange dauert eine Entrümpelung?",
    a: "Die allermeisten unserer Entrümpelungen erledigen wir innerhalb eines Tages. Bei sehr großen Objekten oder besonderen Anforderungen kann es auch 2-3 Tage dauern. Den genauen Zeitrahmen besprechen wir im Vorfeld mit Ihnen.",
  },
  {
    q: "Muss ich bei der Entrümpelung anwesend sein?",
    a: "Nein, Sie müssen nicht anwesend sein. Es reicht aus, wenn Sie uns den Zugang zum Objekt ermöglichen. Viele unserer Kunden hinterlegen einen Schlüssel oder beauftragen einen Nachbarn. Nach Abschluss der Arbeiten übergeben wir Ihnen das Objekt besenrein.",
  },
  {
    q: "Was kostet eine Entrümpelung im Todesfall?",
    a: "Die Kosten für eine Entrümpelung im Todesfall richten sich nach dem Umfang und der Menge des zu entsorgenden Materials. Wir gehen in solchen Situationen besonders einfühlsam und diskret vor. Wertvolle Erinnerungsstücke werden selbstverständlich gesondert behandelt. Kontaktieren Sie uns für ein individuelles Angebot.",
  },
  {
    q: "Wer darf die Wohnung eines Verstorbenen betreten?",
    a: "Grundsätzlich dürfen nur die Erben oder von den Erben bevollmächtigte Personen die Wohnung eines Verstorbenen betreten. Als beauftragtes Unternehmen handeln wir im Auftrag der Erben und benötigen eine entsprechende Vollmacht oder den direkten Zugang durch die Erben.",
  },
  {
    q: "Ist eine Entrümpelung steuerlich absetzbar?",
    a: "Ja, unter bestimmten Umständen können die Kosten für eine Entrümpelung steuerlich geltend gemacht werden. Haushaltsnahe Dienstleistungen können in der Steuererklärung angegeben werden. Wir empfehlen Ihnen, dies mit Ihrem Steuerberater zu besprechen. Eine ordentliche Rechnung stellen wir Ihnen selbstverständlich aus.",
  },
];

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Card
      className="cursor-pointer"
      data-testid={`card-faq-${index}`}
      onClick={() => setOpen(!open)}
    >
      <div className="p-5 flex items-start justify-between gap-4">
        <h3 className="font-medium text-foreground text-sm sm:text-base" data-testid={`text-faq-question-${index}`}>
          {item.q}
        </h3>
        <div className="shrink-0 mt-0.5">
          {open ? (
            <ChevronUp className="w-4 h-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          )}
        </div>
      </div>
      {open && (
        <div className="px-5 pb-5 pt-0">
          <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line" data-testid={`text-faq-answer-${index}`}>
            {item.a}
          </p>
        </div>
      )}
    </Card>
  );
}

export default function FAQPage() {
  useEffect(() => {
    document.title = "Häufige Fragen (FAQ) | Stressfrei Entrümpelungen & Umzüge";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/faq");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/faq");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/professionelle-entruempelung-service-rhein-erft-kreis.webp");
    _setOgMeta("og:locale", "de_DE");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Antworten auf die häufigsten Fragen zu Entrümpelung, Umzug, Kosten, Ablauf und Wertanrechnung. Alles Wichtige auf einen Blick.");
    }
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "FAQ | Häufige Fragen zur Entrümpelung & Umzug",
        "url": "https://stressfreientruempelungen.de/faq",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h3", "[data-testid^='text-faq-question']"]
        }
      }) }} />
    <PageLayout>
      <PageHero
        title="Häufig gestellte Fragen"
        subtitle="Hier finden Sie Antworten auf die am häufigsten gestellten Fragen rund um unsere Dienstleistungen."
        highlight="FAQ"
      />

      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.05 }}>
                <FAQItem item={faq} index={i} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
    </>
  );
}
