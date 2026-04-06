import ServiceDetailPage from "@/components/service-detail-page";
import { Truck, Shield, Clock, CheckCircle2, MapPin, Star, Package, ArrowRight } from "lucide-react";

export default function UmzugstransportPage() {
  return (
    <ServiceDetailPage
      data={{
        slug: "umzugstransport",
        pageName: "Umzugstransport",
        badge: "Transport & Logistik",
        title: "Umzugstransport im Rhein-Erft-Kreis — Sicher & pünktlich von A nach B",
        subtitle: "Mit eigenem Fuhrpark, professionellem Team und Festpreisgarantie transportieren wir Ihren Hausrat sicher ans Ziel — lokal im Rhein-Erft-Kreis und überregional in ganz NRW.",
        heroImage: "/images/services/umzugstransport.webp",
        heroImageAlt: "Großer weißer Umzugswagen vor einem Wohnhaus im Rhein-Erft-Kreis — professioneller Umzugstransport",
        metaDescription: "Umzugstransport Rhein-Erft-Kreis ✓ Eigener Fuhrpark bis 7,5 Tonner ✓ Vollversichert ✓ Festpreisgarantie ✓ Lokal & überregional NRW ✓ Pünktlich ☎ 02271 / 5880940",
        intro: "Zuverlässiger Transport ist das Herzstück jedes erfolgreichen Umzugs — und gleichzeitig die häufigste Fehlerquelle, wenn man auf zu kleine Fahrzeuge, verspätete Fahrer oder fehlende Versicherung stößt. Mit unserem eigenen Fuhrpark — vom Kleintransporter bis zum 7,5-Tonner — und unserem erfahrenen Transportteam transportieren wir Ihren gesamten Hausrat sicher, pünktlich und vollversichert ans Ziel. Ob Umzug innerhalb von Bergheim, Kerpen oder Pulheim, Umzug nach Köln, Düsseldorf oder Aachen, oder überregionaler Fernumzug in ein anderes Bundesland — wir sind dabei. Kein Outsourcing, keine Überraschungen, kein Stundenlohn-Risiko: Festpreis nach Besichtigung.",
        benefits: [
          { icon: Truck, title: "Eigener Fuhrpark — kein Outsourcing", desc: "Kleintransporter (ca. 8 m³), 3,5-Tonner (ca. 15 m³) und 7,5-Tonner (ca. 40 m³) — wir wählen das richtige Fahrzeug für Ihren Hausrat. Kein Outsourcing an Subunternehmer." },
          { icon: Shield, title: "Vollversichert — Ihre Sicherheit zuerst", desc: "Alle Transporte sind durch Haftpflicht und Transportversicherung abgesichert. Ihr Eigentum ist bei uns in sicheren Händen — von der ersten bis zur letzten Box." },
          { icon: Clock, title: "Pünktlich & verlässlich — immer", desc: "Wir halten Termine ein. Kein Warten auf verspätete Fahrer, kein Vertrösten — wir erscheinen wann vereinbart und erledigen alles wie besprochen, ohne faule Ausreden." },
          { icon: MapPin, title: "Lokal & überregional in ganz NRW", desc: "Bergheim, Köln, Düsseldorf, Aachen, Dortmund oder weit darüber hinaus — wir transportieren in ganz NRW und in angrenzende Bundesländer. Auch Fernumzüge sind möglich." },
          { icon: Package, title: "Professionelle Ladungssicherung", desc: "Alles wird im Fahrzeug sorgfältig gesichert — mit Zurrgurten, Möbeldecken und Antirutschmatten. Kein Rutschen, keine Beschädigungen auf dem Weg." },
          { icon: Star, title: "Erfahrenes Team für enge Treppenhäuser", desc: "Unsere Fahrer und Träger kennen enge Treppenhäuser, schwierige Einfahrten und sperrige Möbel. Wir lösen jedes Problem — mit Erfahrung statt mit Improvisation." },
        ],
        ablauf: [
          { step: "1", title: "Route, Etagen & Umfang besprechen", desc: "Teilen Sie uns Start- und Zieladresse, Etagen, besondere Möbel und den ungefähren Umfang Ihres Hausrats mit. Wir klären Zufahrt, Parkplatzsituation und Besonderheiten." },
          { step: "2", title: "Fahrzeugauswahl & Festpreisangebot", desc: "Wir wählen das passende Fahrzeug oder die passende Fahrzeugkombination und erstellen ein verbindliches Festpreisangebot — inklusive aller Nebenkosten, ohne böse Überraschungen." },
          { step: "3", title: "Professionelles Beladen & Sichern", desc: "Am Umzugstag verladen wir alles systematisch, schützen Möbel mit Decken und Folie und sichern die Ladung fachgerecht. Dann geht's pünktlich los." },
          { step: "4", title: "Lieferung, Entladen & Aufstellen", desc: "Am Zielort entladen wir alles und stellen es im richtigen Raum ab. Auf Wunsch inklusive Möbelmontage und Auspackservice — alles aus einer Hand." },
        ],
        faqs: [
          { question: "Welche Fahrzeuggrößen haben Sie?", answer: "Wir verfügen über Kleintransporter (ca. 8 m³, ideal für 1-Zimmer-Apartments), 3,5-Tonner (ca. 15 m³, für 2-3 Zimmer) und 7,5-Tonner (ca. 40 m³, für große Haushalte). Für sehr große Haushalte setzen wir auch mehrere Fahrzeuge ein." },
          { question: "Transportieren Sie auch überregional — Fernumzüge?", answer: "Ja, wir transportieren in ganz NRW und darüber hinaus. Umzüge nach Bayern, Baden-Württemberg oder Berlin sind möglich. Bitte sprechen Sie uns für Fernumzüge direkt an, damit wir die Logistik optimal planen können." },
          { question: "Was ist, wenn etwas beim Transport beschädigt wird?", answer: "Alle Transporte sind vollversichert. Bei Schäden greift unsere Transportversicherung — wir klären das für Sie direkt mit der Versicherung. Kein Ärger, keine langen Diskussionen." },
          { question: "Kann ich auch nur den Transport buchen — ohne Umzugshelfer?", answer: "Ja, reiner Transport ohne weitere Leistungen ist möglich, wenn Sie selbst Helfer mitbringen. Sie können aber auch Ein- und Auspackservice sowie Möbelmontage dazu buchen — wir bieten alles aus einer Hand." },
          { question: "Wie planen Sie den Umzugstermin?", answer: "Wir koordinieren den Termin sorgfältig, prüfen Parkplatzsituation und Zufahrt vorab und beantragen bei Bedarf Halteverbotszonen für Sie — damit der Umzugswagen direkt vor der Tür parken kann." },
          { question: "Können Sie auch Möbel einlagern, wenn die neue Wohnung noch nicht fertig ist?", answer: "Ja, auf Anfrage können wir Möbel und Kartons kurzfristig einlagern, wenn es Überschneidungen bei Umzugsterminen gibt. Bitte früh anfragen, damit wir Kapazitäten reservieren können." },
          { question: "Transportieren Sie auch Pflanzen und empfindliche Gegenstände?", answer: "Ja, Pflanzen, Gemälde, Spiegel, Aquarien und andere empfindliche Gegenstände transportieren wir mit besonderer Sorgfalt und passender Verpackung. Bitte beim Anfragen erwähnen." },
          { question: "Was passiert, wenn es am Umzugstag regnet?", answer: "Wir kommen bei jedem Wetter. Regen ist kein Grund für Absagen — wir haben Folien, Decken und wasserdichte Verpackungen dabei. Wichtig: Schäden durch Nässe sind durch unsere Versicherung gedeckt." },
        ],
        priceHint: "Der Transportpreis hängt von der Entfernung, dem Fahrzeugbedarf, Etagen und dem Umfang ab. Nach kostenloser Besichtigung oder kurzer Absprache erhalten Sie ein verbindliches Festpreisangebot ohne versteckte Nebenkosten.",
        pricingRows: [
          { label: "Kleintransport (bis 8 m³ — 1 Zimmer)", price: "ab 299 €", note: "lokal im REK" },
          { label: "3,5-Tonner (bis 15 m³ — 2–3 Zimmer)", price: "ab 499 €", note: "lokal im REK" },
          { label: "7,5-Tonner (bis 40 m³ — 4+ Zimmer)", price: "ab 799 €", note: "lokal im REK" },
          { label: "Überregional NRW", price: "ab 599 €", note: "nach Entfernung" },
          { label: "Fernumzug (andere Bundesländer)", price: "ab 999 €", note: "individuelle Kalkulation" },
        ],
        reviews: [
          { text: "Umzugstransport von Bergheim nach Köln mit 7,5-Tonner — pünktlich, keine Schäden, kein Stress. Festpreis wurde eingehalten. Sehr empfehlenswert!", name: "Julia F." },
          { text: "Kleintransport für 2-Zimmer-Wohnung. Super schnell und günstig. Das Team war in 3 Stunden fertig!", name: "Markus W." },
          { text: "Überregionaler Umzug nach Düsseldorf — alles perfekt koordiniert, alle Möbel heil angekommen. Top Service!", name: "Christina L." },
        ],
        relatedLinks: [
          { label: "Privatumzug", href: "/privatumzug" },
          { label: "Halteverbotszone", href: "/halteverbotszone" },
          { label: "Schwerlasttransport", href: "/schwerlasttransport" },
          { label: "Außenlifteinsatz", href: "/aussenlifteinsatz" },
          { label: "Alle Leistungen", href: "/leistungen" },
        ],
      }}
    />
  );
}
