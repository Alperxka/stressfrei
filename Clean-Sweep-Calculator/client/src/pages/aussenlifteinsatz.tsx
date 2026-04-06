import ServiceDetailPage from "@/components/service-detail-page";
import { ArrowUpDown, Shield, Clock, CheckCircle2, Wrench, Truck, MapPin, Star } from "lucide-react";

export default function AussenlifteinsatzPage() {
  return (
    <ServiceDetailPage
      data={{
        slug: "aussenlifteinsatz",
        pageName: "Außenlifteinsatz",
        badge: "Transport-Spezialleistung",
        title: "Außenlifteinsatz im Rhein-Erft-Kreis — Wenn die Treppe nicht reicht",
        subtitle: "Bei engen Treppenhäusern, großen Möbeln oder hohen Etagen setzen wir den Außenaufzug ein — schnell, sicher und ohne Schäden an Treppen oder Möbeln. Im Rhein-Erft-Kreis und NRW.",
        heroImage: "/images/services/aussenlifteinsatz.webp",
        heroImageAlt: "Außenaufzug an einem mehrstöckigen Wohngebäude im Rhein-Erft-Kreis während eines Umzugs",
        metaDescription: "Außenlifteinsatz Rhein-Erft-Kreis ✓ Enge Treppenhäuser, hohe Etagen ✓ Bis 5. OG & höher ✓ 200 kg Traglast ✓ Ohne Beschädigungen ✓ Festpreis ☎ 02271 / 5880940",
        intro: "Manche Möbel passen einfach nicht durch das Treppenhaus — oder das Treppenhaus ist zu eng, zu niedrig oder zu gewunden, um schwere Gegenstände sicher zu tragen. In diesen Fällen ist der Außenaufzug (Außenlift) die mit Abstand schnellste, sicherste und schonendste Lösung: Er wird von außen am Gebäude befestigt und ermöglicht es, Möbel, Kartons und selbst große Gegenstände wie Kleiderschränke, Sofas und Kühlschränke direkt ins Stockwerk zu heben — ganz ohne das Treppenhaus zu belasten. Das spart erheblich Zeit, schützt Möbel und Treppenhaus und sorgt für einen entspannten Umzugstag. Besonders häufig eingesetzt in Altbauten in Bergheim, Kerpen, Pulheim und Köln, wo enge Treppenhäuser ohne Lift der Standard sind.",
        benefits: [
          { icon: ArrowUpDown, title: "Bis in jedes Stockwerk — sicher nach oben", desc: "Unser Außenlift erreicht problemlos das 5. OG und höher — ideal für Altbauten, Gründerzeithäuser, Hochhäuser und Wohngebäude mit engen oder gewundenen Treppenhäusern." },
          { icon: Shield, title: "Vollständig schonend für Möbel & Gebäude", desc: "Keine Kratzer an Wänden, kein Verbiegen von Möbelteilen, keine Beschädigungen am Treppengeländer oder Putz. Der Außenlift schont Möbel, Wände und Nerven." },
          { icon: Clock, title: "Drastische Zeitersparnis", desc: "Was durch ein enges Treppenhaus Stunden dauert (und manchmal scheitert), erledigt der Außenlift in Minuten. Besonders bei vielen Etagen ein enormer Zeit- und Kostenvorteil." },
          { icon: Wrench, title: "Professionelle Bedienung & Sicherung", desc: "Unser Team ist im sicheren Umgang mit dem Außenlift ausgebildet und zertifiziert. Die Ladung wird gesichert, kontrolliert gehoben und direkt in das Stockwerk transportiert." },
          { icon: MapPin, title: "Geringer Platzbedarf — flexibel einsetzbar", desc: "Der Außenlift benötigt nur einen Stellplatz direkt vor dem Gebäude. Wir beantragen bei Bedarf eine Halteverbotszone — inklusive im Rundum-Service." },
          { icon: Truck, title: "Kombinierbar mit Umzug & Schwerlasttransport", desc: "Außenlifteinsatz kombinierbar mit Umzug, Schwerlasttransport, Halteverbotszone und Möbelmontage — alles aus einer Hand, ein Termin, ein Festpreis." },
        ],
        ablauf: [
          { step: "1", title: "Situation & Etage beschreiben", desc: "Teilen Sie uns Etage, Treppenhaus-Situation, Fenstergröße oder Balkonsituation und die Gegenstände mit, die transportiert werden sollen. Fotos helfen bei der ersten Einschätzung." },
          { step: "2", title: "Vorprüfung & Besichtigung", desc: "Wir prüfen die Eignung des Außenlifts für Ihr Gebäude — Einfahrt, Abstands-anforderungen, Fenster oder Balkon als Zugangspunkt. Bei Bedarf beantragen wir eine Halteverbotszone." },
          { step: "3", title: "Aufbau des Außenlifts — ca. 30–60 Minuten", desc: "Unser Team baut den Außenlift sicher am Gebäude auf. Das dauert in der Regel nur 30–60 Minuten. Dann beginnt der eigentliche Transport." },
          { step: "4", title: "Transport & Abbau nach Fertigstellung", desc: "Alle Gegenstände werden sicher gehoben und direkt im richtigen Stockwerk und Raum abgestellt. Danach wird der Lift professionell abgebaut und abtransportiert." },
        ],
        faqs: [
          { question: "Bis in welche Etage reicht der Außenlift?", answer: "Unser Außenlift reicht standardmäßig bis in das 5. Stockwerk und höher — je nach Modell und Gebäudestruktur. Für extreme Höhen oder besondere Situationen sprechen Sie uns direkt an." },
          { question: "Brauche ich eine Genehmigung für den Außenlift?", answer: "In der Regel nicht. Wenn der Lift öffentlichen Verkehrsraum beansprucht, beantragen wir eine Halteverbotszone und ggf. eine Sondernutzungserlaubnis beim Straßenverkehrsamt — das ist in unserem Service inklusive." },
          { question: "Wie groß dürfen die Möbel sein?", answer: "Die Nutzlastbühne ist ca. 60 × 150 cm groß und trägt bis zu 200 kg. Selbst große Sofas, Schlafzimmerschränke, Kühlschränke und Waschmaschinen passen in der Regel problemlos." },
          { question: "Geht das auch über Balkon oder Fenster?", answer: "Ja, der Außenlift kann über Balkone oder große Fenster be- und entladen werden. Das ist oft die einfachste und praktischste Variante — keine Änderungen an der Fassade notwendig." },
          { question: "Ist der Außenlifteinsatz teuer?", answer: "Im Vergleich zum manuellen Tragen durch enge Treppenhäuser — mit dem Risiko von Schäden an Möbeln und Wänden sowie dem enormen Zeitaufwand — ist der Außenlift oft die günstigere und eindeutig sicherere Option. Preis auf Anfrage." },
          { question: "Können wir den Außenlift auch für eine Kellerentrümpelung nutzen?", answer: "Grundsätzlich ja — bei Kellern mit direktem Außenzugang oder wenn Gegenstände aus dem Keller nach oben transportiert werden müssen. Bitte schildern Sie die Situation, wir prüfen die Machbarkeit." },
          { question: "Wie lange dauert der Einsatz des Außenlifts?", answer: "Aufbau ca. 30–60 Minuten, Transport je nach Umfang 1–4 Stunden, Abbau ca. 30 Minuten. Der gesamte Einsatz ist meist in einem halben bis ganzen Tag abgeschlossen." },
          { question: "Was passiert, wenn der Außenlift nicht passt oder nicht geht?", answer: "Wir informieren Sie nach der Vorprüfung sofort, wenn ein Außenlifteinsatz nicht möglich ist. In diesem Fall bieten wir alternative Lösungen an — zum Beispiel Kran-Unterstützung oder eine spezielle Trage-Technik für enge Treppenhäuser." },
        ],
        priceHint: "Der Preis für den Außenlifteinsatz hängt von der Etage, dem Umfang und der Einsatzdauer ab. Wir erstellen nach kurzer Absprache oder Besichtigung ein transparentes Festpreisangebot — ohne versteckte Kosten.",
        relatedLinks: [
          { label: "Schwerlasttransport", href: "/schwerlasttransport" },
          { label: "Umzugstransport", href: "/umzugstransport" },
          { label: "Halteverbotszone", href: "/halteverbotszone" },
          { label: "Privatumzug", href: "/privatumzug" },
          { label: "Alle Leistungen", href: "/leistungen" },
        ],
      }}
    />
  );
}
