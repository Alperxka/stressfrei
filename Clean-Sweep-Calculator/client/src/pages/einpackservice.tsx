import ServiceDetailPage from "@/components/service-detail-page";
import { Package, Clock, Shield, CheckCircle2, Star, Truck, Heart, Recycle } from "lucide-react";

export default function EinpackservicePage() {
  return (
    <ServiceDetailPage
      data={{
        slug: "einpackservice",
        pageName: "Einpackservice",
        badge: "Umzug-Zusatzleistung",
        title: "Einpackservice im Rhein-Erft-Kreis — Wir packen für Sie",
        subtitle: "Professionelles Einpacken Ihres gesamten Hausrats — sicher verpackt, nichts vergessen, kein Stress für Sie. Im Rhein-Erft-Kreis und ganz NRW.",
        heroImage: "/images/services/einpackservice.webp",
        heroImageAlt: "Professionelle Umzugshelfer packen Kartons in einer hellen Wohnung sorgfältig und systematisch",
        metaDescription: "Einpackservice Rhein-Erft-Kreis ✓ Professionelles Einpacken ✓ Material inklusive ✓ Bruchsicher verpackt ✓ Festpreis ✓ Zeitersparnis ✓ Für Senioren ideal ☎ 02271 / 5880940",
        intro: "Umziehen ist stressig genug — überlassen Sie das zeitaufwändige Einpacken unseren erfahrenen Fachkräften. Wir bringen professionelles Verpackungsmaterial mit, packen Ihren gesamten Haushalt systematisch und fachgerecht ein — von der empfindlichen Porzellansammlung über die Bibliothek bis zur Werkzeugkiste — und stellen sicher, dass nichts beschädigt oder vergessen wird. Kein Chaos, kein Stress, kein schlafloses Einpacken die Nacht vor dem Umzug. Unser Einpackservice ist besonders beliebt bei Senioren, Familien mit kleinen Kindern und beruflich stark eingespannten Menschen im Rhein-Erft-Kreis — in Bergheim, Kerpen, Pulheim, Frechen, Hürth, Brühl und allen umliegenden Gemeinden.",
        benefits: [
          { icon: Shield, title: "Bruchsicher verpackt — Profi-Qualität", desc: "Wir verwenden hochwertiges Verpackungsmaterial — Luftpolsterfolie, Packpapier, stabile Kartons verschiedener Größen. Fragiles Geschirr, Gläser, Kunstgegenstände und Elektronik werden besonders sorgfältig geschützt." },
          { icon: Clock, title: "Enorme Zeitersparnis", desc: "Was Ihnen alleine Tage oder sogar Wochen kostet, erledigen unsere Teams in wenigen Stunden — systematisch, schnell und ohne Fehler. So haben Sie Zeit für das, was wirklich wichtig ist." },
          { icon: Package, title: "Verpackungsmaterial komplett inklusive", desc: "Kartons in verschiedenen Größen, Klebeband, Luftpolsterfolie, Seidenpapier, Bücherkartons — wir bringen alles mit. Sie müssen nichts kaufen oder organisieren." },
          { icon: CheckCircle2, title: "Systematische Beschriftung", desc: "Jeder Karton wird von uns mit Inhalt und Zielraum beschriftet — damit beim Auspacken am Zielort kein Chaos entsteht und alles sofort zugeordnet werden kann." },
          { icon: Heart, title: "Ideal für Senioren & Menschen mit wenig Zeit", desc: "Einpacken ist körperlich anstrengend. Gerade Senioren und Menschen mit körperlichen Einschränkungen oder wenig Zeit profitieren enorm von unserem professionellen Service." },
          { icon: Truck, title: "Kombinierbar mit Umzug & Auspackservice", desc: "Buchen Sie Einpackservice direkt mit Ihrem Umzug — ein Termin, ein Ansprechpartner, ein Festpreis. Optional auch mit Auspackservice am Zielort kombinierbar." },
        ],
        ablauf: [
          { step: "1", title: "Umfang & Zeitplan besprechen", desc: "Sie kontaktieren uns per Telefon oder Formular. Wir beraten Sie, welchen Umfang des Einpackservices Sie benötigen, und planen den Einpacktermin passend zum Umzugstag." },
          { step: "2", title: "Besichtigung & Festpreisangebot", desc: "Wir besichtigen Ihren Hausstand kostenlos — vor Ort oder per Video — und erstellen ein verbindliches Festpreisangebot. Inklusive Verpackungsmaterial, ohne versteckte Kosten." },
          { step: "3", title: "Systematisches Einpacken & Beschriften", desc: "Unser Team kommt zum vereinbarten Termin mit allem Material und verpackt systematisch Raum für Raum — fragiles Geschirr erhält Sonderbehandlung, alles wird beschriftet." },
          { step: "4", title: "Übergabe für Transport", desc: "Am Ende steht eine vollständig verpackte und beschriftete Wohnung — bereit für den Umzug. Auf Wunsch laden wir direkt in den Umzugswagen und fahren los." },
        ],
        faqs: [
          { question: "Bringen Sie das Verpackungsmaterial mit?", answer: "Ja, komplett. Kartons in verschiedenen Größen, Luftpolsterfolie, Packpapier, Klebeband und Spezialverpackungen für Bilder und Spiegel — wir bringen alles mit, inklusive im Preis." },
          { question: "Kann ich den Einpackservice auch ohne Umzug buchen?", answer: "Ja, Sie können den Einpackservice separat buchen und danach einen anderen Transporteur beauftragen. Wir sind flexibel und arbeiten auch mit Ihren eigenen Helfern zusammen." },
          { question: "Wie lange dauert das Einpacken einer 3-Zimmer-Wohnung?", answer: "In der Regel 4–8 Stunden mit 2–3 Personen, je nach Menge und Zerbrechlichkeit der Gegenstände. Besonders viel Geschirr, Bücher oder Sammlungen brauchen mehr Zeit." },
          { question: "Sind meine Sachen während des Einpackens versichert?", answer: "Ja, alle Gegenstände sind während unserer Arbeit durch unsere Betriebshaftpflicht und Transportversicherung abgedeckt. Bei Schäden greift die Versicherung unmittelbar." },
          { question: "Was ist mit sehr wertvollen oder empfindlichen Gegenständen?", answer: "Kunstwerke, Antiquitäten und besonders wertvolle Stücke verpacken wir mit besonderer Sorgfalt und Spezialpolsterung. Informieren Sie uns vorab, damit wir das passende Material mitbringen." },
          { question: "Was kostet der Einpackservice?", answer: "Der Preis richtet sich nach der Größe der Wohnung und dem Umfang. Typisch sind 300–700 € für eine 2-3 Zimmer Wohnung, inklusive Verpackungsmaterial. Wir erstellen ein verbindliches Festpreisangebot." },
          { question: "Müssen wir beim Einpacken dabei sein?", answer: "Idealerweise ja, damit Sie Anweisungen geben können, was wohin soll und was besondere Sorgfalt braucht. Sie müssen aber nicht die ganze Zeit dabei sein — wir arbeiten auch eigenständig nach Ihrer Anleitung." },
          { question: "Können Sie Einpackservice und Auspackservice kombinieren?", answer: "Ja, das ist unsere häufigste Kombination. Wir packen ein, transportieren und packen am Zielort aus — alles aus einer Hand, an ein bis zwei Tagen, zum Kombi-Festpreis." },
        ],
        priceHint: "Der Preis für unseren Einpackservice hängt vom Umfang des Hausrats und der Anzahl der Zimmer ab. Verpackungsmaterial ist inklusive. Nach kostenloser Besichtigung erhalten Sie ein verbindliches Festpreisangebot ohne versteckte Kosten.",
        relatedLinks: [
          { label: "Auspackservice", href: "/auspackservice" },
          { label: "Möbelmontage", href: "/moebelmontagedienst" },
          { label: "Privatumzug", href: "/privatumzug" },
          { label: "Seniorenumzug", href: "/seniorenumzug" },
          { label: "Alle Leistungen", href: "/leistungen" },
        ],
      }}
    />
  );
}
