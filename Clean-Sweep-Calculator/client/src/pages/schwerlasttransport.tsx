import ServiceDetailPage from "@/components/service-detail-page";
import { Weight, Shield, Clock, CheckCircle2, Wrench, Truck, AlertTriangle, Star } from "lucide-react";

export default function SchwerlasttransportPage() {
  return (
    <ServiceDetailPage
      data={{
        slug: "schwerlasttransport",
        pageName: "Schwerlasttransport",
        badge: "Transport-Spezialleistung",
        title: "Schwerlasttransport im Rhein-Erft-Kreis — Sicher & professionell",
        subtitle: "Pianos, Tresore, Safeboxen, Schwerlastregale, Maschinen — wir transportieren auch extrem schwere Gegenstände sicher und schonend. Mit Spezialequipment und starkem Team im Rhein-Erft-Kreis und NRW.",
        heroImage: "/images/services/schwerlasttransport.webp",
        heroImageAlt: "Professionelle Umzugshelfer transportieren ein schweres Piano mit Gurten und Rollbrett eine Treppe herunter",
        metaDescription: "Schwerlasttransport Rhein-Erft-Kreis ✓ Pianos, Tresore, Maschinen ✓ Spezialequipment ✓ Vollversichert ✓ Festpreisgarantie ✓ Alle Etagen ☎ 02271 / 5880940",
        intro: "Manche Gegenstände sind zu schwer, zu groß oder zu wertvoll, um sie mit normalen Methoden zu transportieren — und genau für diese Fälle sind wir da. Wir verfügen über das richtige Spezialequipment (Rollbretter, Sackkarren, Möbelkarren, Hebegurte, Rampen, Spezialfahrzeuge) und ein erfahrenes Team, das regelmäßig Pianos, Tresore, Kühlvitrinen, Schwerlastregale und Industriemaschinen transportiert. Im gesamten Rhein-Erft-Kreis — von Bergheim über Kerpen, Pulheim und Frechen bis nach Brühl und Hürth — stehen wir für Schwerlasttransporte bereit. Kein Objekt ist zu schwer, kein Treppenhaus zu eng — wir finden immer eine Lösung.",
        benefits: [
          { icon: Weight, title: "Bis zu mehreren Tonnen", desc: "Mit professionellem Equipment und einem starken Team transportieren wir Gegenstände, die für normale Umzüge zu schwer sind — von 200 kg bis mehrere Tonnen." },
          { icon: Wrench, title: "Spezialequipment immer dabei", desc: "Rollbretter, Möbelkarren, Hebezeuge, Rampen, Gurtsysteme, Schutzfolien — wir haben das richtige Werkzeug für jeden Schwerlasttransport. Kein Improvisieren." },
          { icon: Shield, title: "Vollversichert", desc: "Alle Schwerlasttransporte sind durch unsere Haftpflichtversicherung abgesichert. Tresore und Pianos können auf Wunsch zusätzlich gesondert versichert werden." },
          { icon: AlertTriangle, title: "Risikoanalyse vor dem Transport", desc: "Wir analysieren vorab Treppen, Engstellen, Böden und Zugänge, um den Transport sicher und ohne Schäden an Möbeln, Böden und Gebäude zu planen." },
          { icon: Clock, title: "Termingerecht & präzise", desc: "Auch komplexe Schwerlasttransporte planen wir minutiös und führen sie pünktlich durch — wichtig für Firmen mit Betriebsunterbrechungen und private Umzüge." },
          { icon: Truck, title: "Passendes Fahrzeug für jedes Gewicht", desc: "Je nach Gewicht und Maß setzen wir das geeignete Fahrzeug ein — Pritsche, 7,5-Tonner oder Schwerlasttransporter. Mit eigenem Fuhrpark ohne Outsourcing." },
        ],
        ablauf: [
          { step: "1", title: "Objekt & Situation beschreiben", desc: "Teilen Sie uns Art, Gewicht, Maße und Standort des zu transportierenden Objekts mit. Fotos vom Objekt, dem Treppenhaus und dem Zugang helfen uns bei der ersten Einschätzung." },
          { step: "2", title: "Besichtigung & Risikoanalyse", desc: "Wir besichtigen den Standort vor Ort, prüfen Zugänge, Treppen und Böden und planen den Transport im Detail — inklusive Notfallplan für enge Situationen." },
          { step: "3", title: "Verbindliches Festpreisangebot", desc: "Auf Basis der Besichtigung erstellen wir ein transparentes Festpreisangebot. Kein Stundenlohn, keine bösen Überraschungen — Sie wissen vorher genau, was Sie zahlen." },
          { step: "4", title: "Professioneller Transport am Termin", desc: "Am vereinbarten Tag führen wir den Transport mit geeignetem Equipment, ausreichend Personal und maximaler Sorgfalt durch — effizient und ohne Schäden." },
        ],
        faqs: [
          { question: "Können Sie auch Pianos und Flügel transportieren?", answer: "Ja, wir haben langjährige Erfahrung mit dem Transport von Klavieren, Pianos und Flügeln. Diese erfordern besondere Sorgfalt, ein spezielles Klavierrollbrett und ausreichend Personal. Bitte teilen Sie uns Modell und Gewicht mit." },
          { question: "Was ist das maximale Gewicht, das Sie transportieren können?", answer: "Das hängt vom Objekt und der Situation ab — wir besprechen das individuell. Tresore bis 500 kg und mehr sind für uns kein Problem. Bei sehr schweren Lasten planen wir den Transport besonders sorgfältig." },
          { question: "Können Sie auch durch enge Treppenhäuser transportieren?", answer: "Wir prüfen das immer vor Ort. Für enge Treppen haben wir spezielle Techniken und Hilfsmittel. Falls es durch das Treppenhaus wirklich nicht geht, organisieren wir alternativ den Außenlift oder einen Kran." },
          { question: "Sind Schäden am Boden oder Treppenhaus versichert?", answer: "Ja, alle möglichen Schäden an Böden, Wänden, Treppengeländern und Türrahmen sind durch unsere Betriebshaftpflichtversicherung gedeckt. Wir schützen gefährdete Oberflächen zusätzlich mit Schutzfolien." },
          { question: "Transportieren Sie auch Maschinen und Industriegüter?", answer: "Ja, für Firmen transportieren wir Maschinen, Laborgeräte, CNC-Anlagen und schwere Büroausstattungen — auch innerhalb von Betrieben oder bei Betriebsverlagerungen. Bitte sprechen Sie uns an." },
          { question: "Können Sie Tresore in obere Stockwerke transportieren?", answer: "Ja. Tresore bis zu mehreren hundert Kilogramm transportieren wir über Treppen oder per Außenlift in jedes Stockwerk — sicher und ohne Beschädigungen. Wir prüfen vorab die Statik und den Weg." },
          { question: "Was kostet ein Schwerlasttransport?", answer: "Der Preis hängt von Gewicht, Maßen, Entfernung, Stockwerk und Schwierigkeitsgrad ab. Wir erstellen Ihnen nach Besichtigung oder Foto-Einschätzung ein verbindliches Festpreisangebot." },
          { question: "Transportieren Sie auch innerhalb von Gebäuden (Umstellen)?", answer: "Ja. Tresore, Pianos und schwere Maschinen innerhalb einer Wohnung oder eines Büros umstellen oder in einen anderen Raum bewegen — das übernehmen wir als Einzelauftrag ohne Umzug." },
        ],
        priceHint: "Schwerlasttransporte werden individuell nach Gewicht, Maßen, Entfernung und Schwierigkeitsgrad kalkuliert. Nach Besichtigung oder Foto-Einschätzung erstellen wir ein verbindliches Festpreisangebot — transparent und fair.",
        pricingRows: [
          { label: "Einzelnes Schwerlastteil (bis 500 kg)", price: "ab 199 €", note: "lokal im REK" },
          { label: "Maschine / Anlage (bis 2 t)", price: "ab 499 €", note: "inkl. Sicherung" },
          { label: "Schwerlast mit Kran / Hebebühne", price: "auf Anfrage", note: "individuelle Kalkulation" },
          { label: "Überregionaler Schwerlasttransport", price: "auf Anfrage", note: "nach Entfernung" },
        ],
        reviews: [
          { text: "Schwere Drehmaschine aus der 3. Etage — das Team hat das professionell mit Hebebühne gelöst. Kein Schaden, pünktlich. Perfekt!", name: "Bernd K." },
          { text: "Tresor-Transport aus dem Keller, mehrere hundert Kilogramm. Schnell erledigt, faire Preisgestaltung. Sehr empfehlenswert!", name: "Norbert S." },
          { text: "Industrieregale demontiert und abtransportiert — zuverlässig und professionell. Gerne wieder!", name: "Petra L." },
        ],
        relatedLinks: [
          { label: "Umzugstransport", href: "/umzugstransport" },
          { label: "Außenlifteinsatz", href: "/aussenlifteinsatz" },
          { label: "Büroumzug", href: "/bueroumzug" },
          { label: "Betriebsauflösung", href: "/betriebsaufloesung" },
          { label: "Alle Leistungen", href: "/leistungen" },
        ],
      }}
    />
  );
}
