import ServiceDetailPage from "@/components/service-detail-page";
import { Wrench, Clock, Shield, CheckCircle2, Heart, Truck, Star, Package } from "lucide-react";

export default function MoebelmontagedienstPage() {
  return (
    <ServiceDetailPage
      data={{
        slug: "moebelmontagedienst",
        pageName: "Möbelmontage",
        badge: "Umzug-Zusatzleistung",
        title: "Möbelmontage & -demontage im Rhein-Erft-Kreis — Professionell & schnell",
        subtitle: "Demontage am alten Ort, Montage am neuen Ort — inklusive Einbauküchen, Kleiderschränken und Betten. Für Umzüge und Einzelaufträge im Rhein-Erft-Kreis und NRW.",
        heroImage: "/images/services/moebelmontagedienst.webp",
        heroImageAlt: "Fachmann montiert einen großen Kleiderschrank in einer modernen Wohnung mit Profi-Werkzeug",
        metaDescription: "Möbelmontage Rhein-Erft-Kreis ✓ Schränke, Betten, Küchen, IKEA & alle Hersteller ✓ Demontage & Montage ✓ Festpreis ✓ Vollversichert ☎ 02271 / 5880940",
        intro: "Möbel demontieren und wieder aufbauen klingt simpel — ist in der Praxis aber zeitaufwändig, körperlich anstrengend und fehleranfällig. Ein falsch montiertes Schrankregal, eine schief hängende Küchentür oder ein fehlender Dübel können zu teuren Schäden führen. Unsere erfahrenen Monteure kennen alle gängigen Hersteller und Möbelsysteme: IKEA PAX und Kallax, Hülsta, Nolte, Brambauer, Schüller, nobilia und viele mehr. Wir demontieren sorgfältig, beschriften alle Teile, transportieren sicher und bauen alles am Zielort fachgerecht wieder auf — ohne einen einzigen Kratzer. Als Einzelauftrag oder kombiniert mit Ihrem Umzug im Rhein-Erft-Kreis.",
        benefits: [
          { icon: Wrench, title: "Alle Hersteller & Möbelsysteme", desc: "Ob IKEA PAX, Nolte Küche, Hülsta Schlafzimmer, nobilia oder Schüller — wir kennen alle Systeme und haben immer das richtige Werkzeug dabei. Kein Hersteller ist für uns ein Problem." },
          { icon: Shield, title: "Ohne Kratzer & Beschädigungen", desc: "Professionelle Demontage und Montage verhindert Schäden an Möbeln und Wänden. Wir arbeiten mit Schutzfolie, Decken und bewährten Techniken — Ihre Möbel bleiben makellos." },
          { icon: Clock, title: "Schnell & effizient", desc: "Was Sie einen ganzen Tag kostet, erledigen unsere Monteure in einem Bruchteil der Zeit. Kein Suchen nach Teilen, kein falsches Anziehen von Schrauben — direkt beim ersten Mal richtig." },
          { icon: CheckCircle2, title: "Werkzeug komplett inklusive", desc: "Wir kommen mit komplettem Profi-Werkzeug: Akkuschrauber, Dübelsatz, Wasserwaage, Inbusschlüssel aller Größen, Schutzfolie. Sie brauchen nichts vorzubereiten." },
          { icon: Package, title: "Einbauküchen — unser Spezialgebiet", desc: "Einbauküchen de- und montieren erfordert besondere Expertise: Elektro, Wasser, Gas. Wir demontieren, reinigen die Teile, transportieren und bauen am Zielort wieder auf — inklusive Anschluss." },
          { icon: Heart, title: "Einzelauftrag oder als Umzugskombi", desc: "Nur Möbelmontage ohne Umzug? Kein Problem. Oder kombiniert mit Umzug, Einpack- und Auspackservice für maximalen Komfort — alles aus einer Hand zum Kombi-Festpreis." },
        ],
        ablauf: [
          { step: "1", title: "Anfrage & Beratung", desc: "Teilen Sie uns mit, welche Möbel demontiert und/oder montiert werden sollen. Fotos oder eine Liste helfen bei der schnellen Kalkulation — oft reicht eine WhatsApp." },
          { step: "2", title: "Verbindliches Festpreisangebot", desc: "Wir erstellen ein verbindliches Festpreisangebot — ohne versteckte Kosten. Auch per Foto oder Video-Besichtigung möglich — ohne Terminaufwand für Sie." },
          { step: "3", title: "Demontage am alten Standort", desc: "Wir demontieren alle Möbel sorgfältig, beschriften sämtliche Teile und Schrauben eindeutig und verpacken alles transportsicher — damit beim Neuaufbau nichts fehlt." },
          { step: "4", title: "Montage am neuen Standort", desc: "Am Zielort bauen wir alle Möbel fachgerecht wieder auf — inklusive Ausrichten mit Wasserwaage, Funktionskontrolle aller Türen und Schubladen sowie einer abschließenden Sichtkontrolle." },
        ],
        faqs: [
          { question: "Können Sie auch Einbauküchen demontieren und neu aufbauen?", answer: "Ja, das ist eines unserer Spezialgebiete. Wir demontieren, reinigen die Teile, transportieren und bauen die Küche am neuen Standort wieder auf — inklusive Anschlussarbeiten für Spüle, Herd und Geschirrspüler (Wasseranschluss und Strom)." },
          { question: "Was ist, wenn Teile fehlen oder beschädigt sind?", answer: "Wir informieren Sie sofort, wenn wir fehlende oder beschädigte Teile feststellen, und beraten Sie zu den nächsten Schritten — ob Ersatzbestellung beim Hersteller oder alternative Lösung." },
          { question: "Können Sie auch neue (noch nicht aufgebaute) Möbel aufbauen?", answer: "Ja, wir bauen auch brandneue Möbel aus dem Karton auf — egal ob vom Möbelhaus, IKEA oder Online-Shop. Inklusive Einräumen und korrekter Aufstellung nach Ihren Wünschen." },
          { question: "Bringen Sie Werkzeug mit?", answer: "Komplett. Akkuschrauber, Dübelsatz, Wasserwaage, Inbusschlüssel aller Größen, Schutzfolie für Böden — wir kommen voll ausgestattet. Sie müssen kein eigenes Werkzeug bereitstellen." },
          { question: "Wie wird der Preis berechnet?", answer: "Der Preis hängt von der Anzahl der Möbelstücke, dem Aufwand und der Komplexität ab. Eine Küche kostet mehr als ein einzelnes Regal. Nach kurzer Absprache erstellen wir ein verbindliches Festpreisangebot." },
          { question: "Können Sie auch IKEA-Möbel montieren?", answer: "Ja, natürlich. IKEA-Möbel — PAX-Schränke, Kallax-Regale, Hemnes-Serien, Billy-Regale, Malm-Betten und mehr — montieren wir täglich. Inklusive Anpassung von Türen, Schubladen und Einlegeböden." },
          { question: "Montieren Sie auch Fernseher und Bilder an die Wand?", answer: "TV-Halterungen und Bilder an der Wand gehören ebenfalls zu unserem Leistungsumfang — gerne als Ergänzung zur Möbelmontage anfragen." },
          { question: "Wie weit fahren Sie für Möbelmontagen?", answer: "Wir sind im gesamten Rhein-Erft-Kreis und dem angrenzenden Großraum Köln tätig. Für weiter entfernte Einsätze sprechen Sie uns an — wir finden eine Lösung." },
        ],
        priceHint: "Möbelmontage zum fairen Festpreis — abhängig von der Anzahl der Möbelstücke und dem Aufwand. Einbauküchen auf Anfrage. Gerne erstellen wir Ihnen ein kostenloses Angebot nach kurzer Beschreibung oder Foto-Übersicht.",
        pricingRows: [
          { label: "Einzelnes Möbelstück (Kleiderschrank, Bett)", price: "ab 79 €", note: "Festpreis" },
          { label: "Kleinpaket (3–5 Möbel)", price: "ab 199 €", note: "Festpreis" },
          { label: "Komplettes Schlafzimmer / Wohnzimmer", price: "ab 349 €", note: "Festpreis" },
          { label: "Einbauküche", price: "auf Anfrage", note: "nach Umfang" },
          { label: "Komplettumzug inkl. Montage", price: "auf Anfrage", note: "Paketpreis" },
        ],
        reviews: [
          { text: "IKEA-Schrank und Bett montiert — in 2 Stunden fertig, alles perfekt ausgerichtet. Faire Preise, sehr empfehlenswert!", name: "Lisa V." },
          { text: "Komplettes Schlafzimmer aufgebaut nach Umzug. Das Team war schnell und präzise. Sehr zufrieden!", name: "Martin E." },
          { text: "Einbauküche montiert — sauber, fachgerecht und ohne Kratzer. Können wir nur weiterempfehlen!", name: "Andrea Z." },
        ],
        relatedLinks: [
          { label: "Einpackservice", href: "/einpackservice" },
          { label: "Auspackservice", href: "/auspackservice" },
          { label: "Privatumzug", href: "/privatumzug" },
          { label: "Schwerlasttransport", href: "/schwerlasttransport" },
          { label: "Alle Leistungen", href: "/leistungen" },
        ],
      }}
    />
  );
}
