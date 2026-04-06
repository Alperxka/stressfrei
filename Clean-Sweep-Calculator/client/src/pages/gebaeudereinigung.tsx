import ServiceDetailPage from "@/components/service-detail-page";
import { Building2, Shield, Clock, CheckCircle2, Sparkles, Recycle, Star, Users } from "lucide-react";

export default function GebaeudereinigungPage() {
  return (
    <ServiceDetailPage
      data={{
        slug: "gebaeudereinigung",
        pageName: "Gebäudereinigung",
        badge: "Gewerbe & Immobilien",
        title: "Gebäudereinigung im Rhein-Erft-Kreis — Sauber, zuverlässig, fair",
        subtitle: "Professionelle Reinigung von Treppenhäusern, Büros, Praxen, Gemeinschaftsflächen und leerstehenden Immobilien. Regelmäßig oder einmalig — zum Festpreis im Rhein-Erft-Kreis.",
        heroImage: "/images/services/gebaeudereinigung.webp",
        heroImageAlt: "Professionelles Reinigungsteam reinigt einen Bürogebäude-Korridor mit Equipment",
        metaDescription: "Gebäudereinigung Rhein-Erft-Kreis ✓ Treppenhäuser, Büros, Praxen, Gewerbeimmobilien ✓ Einmalig oder regelmäßig ✓ Festpreis ✓ Vollversichert ☎ 02271 / 5880940",
        intro: "Ein gepflegtes Gebäude überzeugt auf den ersten Blick — Mieter, Kunden und Geschäftspartner beurteilen Ihr Objekt nach seinem äußeren und inneren Erscheinungsbild. Unsere Gebäudereinigung im Rhein-Erft-Kreis deckt das gesamte Spektrum ab: von der einmaligen Grundreinigung nach Leerstand über die regelmäßige Treppenhausreinigung bis zur professionellen Büroreinigung außerhalb der Geschäftszeiten. Wir bedienen Wohngebäude, Mehrfamilienhäuser, Bürokomplexe, Arztpraxen und leerstehende Gewerbeimmobilien in Bergheim, Kerpen, Pulheim, Brühl, Hürth, Frechen und dem gesamten Rhein-Erft-Kreis. Unser Reinigungspersonal ist zuverlässig, diskret und vollversichert — Sie beauftragen uns einmal und müssen sich danach um nichts mehr kümmern.",
        benefits: [
          { icon: Building2, title: "Alle Gebäudetypen", desc: "Wohngebäude, Bürogebäude, Arztpraxen, Einzelhandel, Lagergebäude, WEG-Objekte — wir reinigen alle gewerblichen und privaten Immobilientypen im Rhein-Erft-Kreis." },
          { icon: Users, title: "Zuverlässiges Team", desc: "Unser Reinigungspersonal ist erfahren, pünktlich und diskret. Für Praxen und Büros sind wir auch früh morgens, abends oder am Wochenende tätig — ohne Störung des Betriebs." },
          { icon: Clock, title: "Regelmäßig oder einmalig", desc: "Wöchentliche Unterhaltsreinigung, zweiwöchentliche Treppenhausreinigung oder einmalige Grundreinigung — wir passen uns vollständig Ihren Anforderungen an." },
          { icon: Sparkles, title: "Treppenhäuser & Gemeinschaftsflächen", desc: "Wir reinigen Treppenhäuser, Handläufe, Briefkästen, Eingangsbereiche, Keller- und Tiefgaragenzugänge — alles was Mieter und Besucher täglich sehen." },
          { icon: Shield, title: "Vollversichert", desc: "Alle Reinigungsarbeiten sind durch unsere Betriebshaftpflicht abgesichert. Schäden an Böden, Fliesen oder Einrichtung sind gedeckt — wir arbeiten verantwortungsvoll." },
          { icon: Recycle, title: "Umweltfreundlich", desc: "Wir setzen auf umweltverträgliche, biologisch abbaubare Reinigungsmittel und ressourcenschonende Methoden — gut für Ihre Immobilie, gut für die Umwelt." },
        ],
        ablauf: [
          { step: "1", title: "Anfrage & Bedarfsanalyse", desc: "Teilen Sie uns mit, welches Objekt wie oft gereinigt werden soll — Treppenhäuser, Büroetagen, Praxen oder die gesamte Immobilie. Fotos oder eine kurze Beschreibung reichen." },
          { step: "2", title: "Besichtigung & Angebot", desc: "Wir besichtigen das Objekt kostenlos und erstellen ein verbindliches Festpreisangebot für Einzel- oder Dauerreinigung. Kein Stundenlohn, kein Überraschungen." },
          { step: "3", title: "Reinigung nach Plan", desc: "Unser Team kommt pünktlich und arbeitet nach einem klar definierten Reinigungsplan — systematisch, gründlich und diskret." },
          { step: "4", title: "Qualitätskontrolle & Feedback", desc: "Nach der Reinigung nehmen wir das Ergebnis gemeinsam mit Ihnen ab oder schicken Fotos zur Dokumentation. Ihre Zufriedenheit ist unser Maßstab." },
        ],
        faqs: [
          { question: "Können Sie regelmäßig reinigen?", answer: "Ja, wir bieten wöchentliche, zweiwöchentliche und monatliche Reinigungsverträge für Gebäude und Büros an. Als zuverlässiger Partner übernehmen wir die Reinigung dauerhaft — mit festen Terminen und gleichbleibender Qualität." },
          { question: "Reinigen Sie auch Tiefgaragen und Außenbereiche?", answer: "Ja, auf Anfrage reinigen wir auch Tiefgaragen, Parkplätze, Außentreppen und Eingangsbereiche. Für Außenanlagen verwenden wir Hochdruckreiniger und geeignetes Equipment." },
          { question: "Können Sie außerhalb der Geschäftszeiten reinigen?", answer: "Ja, wir sind flexibel und reinigen Büros und Praxen gerne früh morgens ab 6 Uhr, abends oder am Wochenende — ohne Störung des Betriebs und ohne Beeinträchtigung Ihrer Mitarbeiter oder Patienten." },
          { question: "Bringen Sie alles mit?", answer: "Ja, alles. Staubsauger, Wischmopp, professionelle Reinigungsmittel, Leitern für Glasflächen, Hochdruckreiniger — wir kommen komplett ausgestattet. Sie müssen nichts bereitstellen." },
          { question: "Was kostet die regelmäßige Treppenhausreinigung?", answer: "Je nach Größe des Gebäudes, Anzahl der Stockwerke und Häufigkeit ab ca. 80–250 € pro Reinigung. Mehrfamilienhäuser mit 6 Parteien liegen typischerweise bei 100–150 € pro Reinigungsgang. Wir erstellen Ihnen ein individuelles Angebot." },
          { question: "Können Sie leerstehende Immobilien reinigen?", answer: "Ja, gerade für leerstehende Immobilien bieten wir einmalige Grundreinigungen an — ideal vor Neuvermietung, Verkauf oder Übergabe. Wir reinigen auch nach Entrümpelung oder Umbau." },
          { question: "Arbeiten Sie für WEGs (Wohnungseigentümergemeinschaften)?", answer: "Ja, wir übernehmen Reinigungsverträge für Wohnungseigentümergemeinschaften und Hausverwaltungen. Verwalter und Eigentümer erhalten von uns regelmäßige Berichte und Fotodokumentation." },
          { question: "Was ist im Reinigungsvertrag enthalten?", answer: "Je nach Vereinbarung: Treppenhausreinigung, Eingangsbereiche, Briefkästen, Gemeinschaftskeller, Tiefgaragenzufahrten und Außenbereiche. Wir erstellen einen individuellen Leistungsumfang, der genau auf Ihre Immobilie passt." },
          { question: "Können Sie auch nach Wasserschäden oder Baustellen reinigen?", answer: "Ja. Nach Wasserschäden, Renovierungen oder Umbauten führen wir Bauendreinigungen durch — gründlich, schnell und termingerecht, damit Ihr Objekt wieder bezugsfertig ist." },
        ],
        priceHint: "Gebäudereinigung zum Festpreis — einmalig oder als Wartungsvertrag. Größe, Häufigkeit und Umfang bestimmen den Preis. Wir erstellen Ihnen nach kostenloser Besichtigung ein transparentes Angebot ohne versteckte Kosten.",
        pricingRows: [
          { label: "Treppenhaus (bis 5 Etagen)", price: "ab 199 €", note: "einmalig" },
          { label: "Bürofläche (bis 200 m²)", price: "ab 299 €", note: "einmalig" },
          { label: "Regelmäßige Unterhaltsreinigung", price: "auf Anfrage", note: "Wartungsvertrag" },
          { label: "Außenbereich / Parkplatz", price: "ab 249 €", note: "einmalig" },
          { label: "Gewerbeobjekt (ab 500 m²)", price: "auf Anfrage", note: "individuelle Kalkulation" },
        ],
        reviews: [
          { text: "Treppenhausreinigung regelmäßig und zuverlässig — immer pünktlich und gründlich. Absolut empfehlenswert für Hausverwaltungen!", name: "Frank G." },
          { text: "Büroreinigung nach Renovierung sehr gründlich. Alles makellos sauber, pünktlich und zum fairen Festpreis.", name: "Brigitte N." },
          { text: "Glasreinigung und Außenfassade top erledigt. Schnelle Reaktionszeit auf Anfrage, professionelle Durchführung.", name: "Heinz-Werner P." },
        ],
        relatedLinks: [
          { label: "Grundreinigung", href: "/grundreinigung" },
          { label: "Büroumzug", href: "/bueroumzug" },
          { label: "Entrümpelung", href: "/entruempelung" },
          { label: "Renovierungsservice", href: "/renovierungsservice" },
          { label: "Alle Leistungen", href: "/leistungen" },
        ],
      }}
    />
  );
}
