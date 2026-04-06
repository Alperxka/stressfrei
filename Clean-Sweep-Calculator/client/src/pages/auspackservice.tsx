import ServiceDetailPage from "@/components/service-detail-page";
import { PackageOpen, Clock, Shield, CheckCircle2, Heart, Truck, Recycle, Star } from "lucide-react";

export default function AuspackservicePage() {
  return (
    <ServiceDetailPage
      data={{
        slug: "auspackservice",
        pageName: "Auspackservice",
        badge: "Umzug-Zusatzleistung",
        title: "Auspackservice im Rhein-Erft-Kreis — Sofort zuhause fühlen",
        subtitle: "Wir packen aus, räumen ein und stellen Möbel auf — damit Sie vom ersten Moment an in Ihrem neuen Zuhause wirklich leben können. Im Rhein-Erft-Kreis und NRW.",
        heroImage: "/images/services/auspackservice.webp",
        heroImageAlt: "Umzugshelfer packen Kartons aus und räumen eine neue Wohnung sorgfältig ein",
        metaDescription: "Auspackservice Rhein-Erft-Kreis ✓ Wir räumen ein & stellen Möbel auf ✓ Kartonentsorgung inklusive ✓ Sofort bewohnbar ✓ Besonders für Senioren ✓ Festpreis ☎ 02271 / 5880940",
        intro: "Der Einzug in eine neue Wohnung sollte ein Neuanfang sein — kein wochenlanger Kampf mit Kartonbergen. Unser Auspackservice macht aus dem Einzugschaos in kürzester Zeit ein echtes Zuhause: Wir packen alle Kartons aus, räumen Küche, Schränke und Regale nach Ihren Wünschen sinnvoll ein, stellen Möbel auf, entsorgen das gesamte Verpackungsmaterial und hinterlassen alles ordentlich. Sie kommen am Abend nach Hause — und alles steht an seinem Platz, die Küche ist eingeräumt, die Betten sind aufgestellt. Besonders beliebt bei Senioren, die den Umzug ins Pflegeheim, in eine kleinere Wohnung oder in eine Seniorenresidenz begleiten lassen möchten.",
        benefits: [
          { icon: PackageOpen, title: "Komplettes Auspacken nach Plan", desc: "Wir leeren alle Kartons, räumen nach Ihren Wünschen ein und stellen alles an den gewünschten Platz — Küche, Schlafzimmer, Wohnzimmer, Badezimmer. Sie geben die Richtung vor, wir setzen um." },
          { icon: Recycle, title: "Kartonentsorgung komplett inklusive", desc: "Alle leeren Kartons und Verpackungsmaterialien werden von uns zusammengefaltet und ordnungsgemäß entsorgt — kein Müll, keine Kartonberge, keine Entsorgungsfahrten für Sie." },
          { icon: Clock, title: "Am selben Tag sofort bewohnbar", desc: "Nach unserem Auspackservice können Sie direkt einziehen — kein wochenlanges Leben aus Kartons, kein suchen nach dem Kaffeelöffel drei Wochen nach dem Umzug." },
          { icon: CheckCircle2, title: "Genau nach Ihren Wünschen", desc: "Sie bestimmen, was wohin kommt. Wir räumen nach Ihrer Anleitung, einem Einrichtungsplan oder einfach nach dem gesunden Menschenverstand ein — und fragen bei Unklarheiten nach." },
          { icon: Heart, title: "Besonders geeignet für Senioren", desc: "Gerade ältere Menschen, die in eine kleinere Wohnung oder eine Seniorenresidenz umziehen, profitieren enorm: kein Heben, kein Bücken, kein Stress. Wir erledigen alles — fürsorglich und geduldig." },
          { icon: Truck, title: "Als Kombi mit Umzug buchbar", desc: "Buchen Sie Auspackservice zusammen mit Ihrem Umzug und optional dem Einpackservice — alles aus einer Hand zum Kombi-Festpreis ohne Koordinationsaufwand." },
        ],
        ablauf: [
          { step: "1", title: "Einzugsplan & Raumaufteilung besprechen", desc: "Wir besprechen vorab oder beim Einzug, welche Gegenstände wohin sollen. Ein kurzer Raumplan oder mündliche Anweisungen reichen — wir hören genau zu." },
          { step: "2", title: "Möbel aufstellen & positionieren", desc: "Zuerst stellen wir alle Möbel an die richtigen Positionen und bauen auf Wunsch fehlende Möbel zusammen, bevor wir mit dem Auspacken beginnen." },
          { step: "3", title: "Zimmer für Zimmer systematisch auspacken", desc: "Wir arbeiten strukturiert — Zimmer für Zimmer — packen alle Kartons aus, räumen Schränke, Regale, Küche und Bad ein und ordnen alles sinnvoll an." },
          { step: "4", title: "Verpackungsmaterial entsorgen & aufräumen", desc: "Alle leeren Kartons und Verpackungsmaterialien werden zusammengefaltet und von uns abtransportiert. Wir hinterlassen eine aufgeräumte Wohnung — bereit zum Leben." },
        ],
        faqs: [
          { question: "Muss ich beim Auspacken dabei sein?", answer: "Es ist hilfreich, wenn Sie beim Start kurz vor Ort sind, um uns zu zeigen, was wohin soll. Danach können Sie ruhig weg oder sich ausruhen — wir erledigen den Rest gewissenhaft." },
          { question: "Können Sie auch Küchen einräumen?", answer: "Ja, das ist einer unserer Schwerpunkte. Wir räumen Küchen, Kühlschränke, Vorratskammern und alle Schränke nach Ihren Wünschen ein — praktisch und sinnvoll sortiert." },
          { question: "Wie lange dauert das Auspacken einer 3-Zimmer-Wohnung?", answer: "In der Regel 4–8 Stunden mit 2–3 Personen, abhängig vom Umfang und der Anzahl der Kartons. Mit Möbelaufbau kann es etwas länger dauern — wir schätzen vorab grob ab." },
          { question: "Können Sie auch Möbel aufbauen?", answer: "Ja, Möbelmontage ist ein fester Bestandteil unseres Angebots. Am besten gleich dazu buchen, damit alles aus einer Hand abläuft und keine Koordination notwendig ist." },
          { question: "Was passiert mit alten Kartons und Verpackungen?", answer: "Alles wird von uns zusammengefaltet und mitgenommen und umweltgerecht entsorgt. Sie müssen sich um nichts kümmern — keine Entsorgungsfahrten, keine Kartonberge vor der Tür." },
          { question: "Eignet sich der Auspackservice auch für Senioren?", answer: "Absolut ja — das ist tatsächlich einer unserer häufigsten Anwendungsfälle. Wir sind geduldig, fürsorglich und helfen Senioren beim Einzug in eine neue Wohnung oder Seniorenresidenz, ohne Zeitdruck und mit viel Verständnis." },
          { question: "Kann ich den Auspackservice auch ohne Umzug buchen?", answer: "Ja, auch als Einzelleistung möglich — zum Beispiel wenn Sie selbst oder mit Freunden umgezogen sind und jetzt Hilfe beim Auspacken und Einräumen brauchen." },
          { question: "Können Sie gezielt nur bestimmte Bereiche einräumen (z.B. nur die Küche)?", answer: "Ja, wir räumen auch gezielt einzelne Bereiche ein — nur die Küche, nur das Schlafzimmer, nur das Badezimmer. Sie bestimmen den Umfang." },
        ],
        priceHint: "Der Preis für den Auspackservice richtet sich nach Umfang, Zimmerzahl und Anzahl der Kartons. Wir erstellen nach kurzer Absprache ein verbindliches Festpreisangebot — kostenlos und unverbindlich.",
        pricingRows: [
          { label: "Kleinpaket (bis 20 Kartons)", price: "ab 149 €", note: "Festpreis" },
          { label: "1–2 Zimmer (bis 40 Kartons)", price: "ab 249 €", note: "Festpreis" },
          { label: "3–4 Zimmer (bis 80 Kartons)", price: "ab 399 €", note: "Festpreis" },
          { label: "Komplettwohnung inkl. Einräumen", price: "ab 549 €", note: "Festpreis" },
          { label: "Auspack + Möbelmontage Kombi", price: "auf Anfrage", note: "Paketpreis" },
        ],
        reviews: [
          { text: "Auspackservice nach Umzug mit 2 Kindern — das Team hat alles schnell und ordentlich eingeräumt. Eine riesige Erleichterung!", name: "Carola D." },
          { text: "80 Kartons in einem Tag ausgepackt und eingeräumt — super effizient und freundlich. Sehr empfehlenswert!", name: "Jürgen S." },
          { text: "Auspack + Möbelmontage als Kombi — alles aus einer Hand, kein Stress. Toller Service zum fairen Preis!", name: "Heike W." },
        ],
        relatedLinks: [
          { label: "Einpackservice", href: "/einpackservice" },
          { label: "Möbelmontage", href: "/moebelmontagedienst" },
          { label: "Privatumzug", href: "/privatumzug" },
          { label: "Seniorenumzug", href: "/seniorenumzug" },
          { label: "Alle Leistungen", href: "/leistungen" },
        ],
      }}
    />
  );
}
