import ServiceDetailPage from "@/components/service-detail-page";
import { Building2, Shield, Clock, CheckCircle2, Wrench, Truck, Recycle, AlertTriangle } from "lucide-react";

export default function BetriebsaufloesungPage() {
  return (
    <ServiceDetailPage
      data={{
        slug: "betriebsaufloesung",
        pageName: "Betriebsauflösung",
        badge: "Gewerbe & Industrie",
        title: "Betriebsauflösung & Gewerberäumung — Alles aus einer Hand",
        subtitle: "Wir räumen Produktionsstätten, Werkstätten, Lagerhallen und Gewerbebetriebe vollständig und termingerecht. Mit eigenem Fuhrpark, erfahrenem Team und fairem Festpreis im Rhein-Erft-Kreis und ganz NRW.",
        heroImage: "/images/services/firmenaufloesung-gewerbe-raeumung-service.webp",
        heroImageAlt: "Professionelle Gewerberäumung einer Produktionshalle — Maschinen und Regale werden demontiert",
        metaDescription: "Betriebsauflösung im Rhein-Erft-Kreis & NRW ✓ Werkstätten, Produktionsstätten, Lagerhallen ✓ Maschinendemontage ✓ Altmetallverwertung ✓ Festpreis ☎ 02271 / 5880940",
        intro: "Eine Betriebsauflösung unterscheidet sich grundlegend von einer normalen Entrümpelung: Produktionsanlagen, Maschinen, Schwerlastregale, Industriewerkzeug, Chemikalien und jahrzehntelang angesammeltes Betriebsmaterial verlangen Erfahrung, Spezialequipment und ein belastbares Team. Wir übernehmen die vollständige Räumung von Produktionsstätten, Werkstätten, Lagerhallen, Werkshallen und gewerblichen Gebäuden — vom ersten Handgriff bis zur besenreinen Übergabe. Dabei sind wir nicht nur schnell, sondern auch wirtschaftlich: Altmetalle, Maschinen und verwertbare Gegenstände werden fachkundig bewertet und auf den Räumungspreis angerechnet. Das reduziert Ihre Kosten erheblich.",
        benefits: [
          { icon: Building2, title: "Alle Betriebstypen", desc: "Werkstätten, Produktionshallen, Lagerhallen, Kühlhäuser, Autowerkstätten, Schreinereien, Metallbaubetriebe — wir räumen jede Art von Gewerbebetrieb vollständig und professionell." },
          { icon: Wrench, title: "Maschinendemontage", desc: "Maschinen, Anlagen, Förderbänder und schwere Industrieausstattungen werden fachgerecht demontiert, gesichert und entsorgt oder verwertet — ohne Beschädigungen an Böden und Gebäude." },
          { icon: Recycle, title: "Altmetall & Verwertung", desc: "Wir kennen den Metallmarkt. Stahl, Aluminium, Kupfer, Messing und Edelstahl aus Ihrer Betriebsauflösung werden bewertet und direkt auf den Räumungspreis angerechnet — das spart bares Geld." },
          { icon: Truck, title: "Eigener Fuhrpark", desc: "Mit Kleintransportern, 7,5-Tonnern und Pritschen-LKW sind wir für jede Menge Betriebsmaterial gerüstet. Kein Outsourcing, keine Wartezeiten — wir koordinieren alles selbst." },
          { icon: Shield, title: "Termingerecht & zuverlässig", desc: "Gerade bei Betriebsauflösungen in Insolvenzen oder beim Eigentümerwechsel kommt es auf Termine an. Wir halten was wir versprechen — auch unter Zeitdruck." },
          { icon: AlertTriangle, title: "Sondermüll & Gefahrstoffe", desc: "Betriebe hinterlassen oft Chemikalien, Altöle, Lacke, Schmierstoffe oder andere Gefahrstoffe. Wir entsorgen alles fachgerecht nach gesetzlichen Vorgaben — mit Entsorgungsnachweis." },
        ],
        ablauf: [
          { step: "1", title: "Kostenlose Besichtigung", desc: "Wir kommen vor Ort, nehmen den Betrieb in Augenschein, identifizieren verwertbare Materialien und klären Zugänge, Logistik und besondere Anforderungen." },
          { step: "2", title: "Verbindliches Festpreisangebot", desc: "Auf Basis der Besichtigung erstellen wir ein transparentes Festpreisangebot — inklusive Wertanrechnung für Metalle und verwertbare Güter. Keine Überraschungen bei der Endabrechnung." },
          { step: "3", title: "Systematische Räumung", desc: "Unser Team beginnt strukturiert — Demontage von Anlagen und Regalen, Sortierung nach Materialgruppen (Metall, Holz, Sondermüll, Restmüll), Beräumung der Flächen." },
          { step: "4", title: "Entsorgung & Verwertung", desc: "Werthaltige Materialien werden verwertet und angerechnet, Sondermüll fachgerecht entsorgt, Restmüll ordnungsgemäß in zugelassenen Anlagen deponiert — mit Nachweis auf Wunsch." },
          { step: "5", title: "Besenreine Übergabe", desc: "Am Ende übergeben wir die Gewerbefläche besenrein an Eigentümer oder Vermieter — bereit für Umbau, Verkauf oder Neuvermietung." },
        ],
        faqs: [
          { question: "Was ist der Unterschied zwischen Betriebsauflösung und Firmenauflösung?", answer: "Eine Betriebsauflösung bezieht sich auf die Räumung produktiver Betriebsstätten — Werkstätten, Produktionshallen, Lagerhallen, Gewerbebetriebe mit Maschinen und Industrieausstattung. Eine Firmenauflösung umfasst typischerweise die Räumung von Büros und administrativen Bereichen. Wir führen beide Arten durch." },
          { question: "Können Sie auch Insolvenz-Betriebsauflösungen durchführen?", answer: "Ja. Wir haben langjährige Erfahrung mit Betriebsauflösungen im Rahmen von Insolvenzen und arbeiten auch mit Insolvenzverwaltern zusammen. Kurzfristige Termine und strenge Fristen sind für uns selbstverständlich." },
          { question: "Was passiert mit den Maschinen und Anlagen?", answer: "Funktionstüchtige Maschinen können verwertet und auf den Räumungspreis angerechnet werden. Defekte oder veraltete Anlagen werden fachgerecht demontiert und als Schrottmetall verwertet. Sondermüll (Öle, Kühlmittel) entsorgen wir vorschriftsgemäß." },
          { question: "Können Sie auch Kühlhäuser und Kühleinrichtungen räumen?", answer: "Ja. Kühlhäuser, Tiefkühlzellen und gewerbliche Kühlanlagen erfordern besondere Vorkehrungen bei der Demontage der Kältemittel. Wir arbeiten mit zertifizierten Kälteanlagenbauern zusammen und sorgen für die rechtskonforme Entsorgung." },
          { question: "Wie schnell kann die Betriebsauflösung stattfinden?", answer: "Nach der Besichtigung und Angebotsannahme sind wir in der Regel innerhalb von 3–10 Werktagen einsatzbereit. Bei dringenden Fällen — zum Beispiel vor einer Räumungsklage oder einem Grundstücksverkauf — können wir auch kurzfristiger reagieren." },
          { question: "Was kostet eine Betriebsauflösung?", answer: "Die Kosten hängen stark von Fläche, Füllgrad, Art der Ausstattung und Entsorgungsaufwand ab. Durch die Wertanrechnung von Metallen und verwertbaren Gütern können die Kosten erheblich sinken — in manchen Fällen sogar auf null. Nach der kostenlosen Besichtigung erstellen wir ein verbindliches Festpreisangebot." },
          { question: "Führen Sie auch Teilräumungen durch?", answer: "Ja, wir räumen auch einzelne Hallen, Lagerbereiche oder Gebäudeteile. Sie definieren den Umfang, wir führen exakt das aus — nicht mehr und nicht weniger." },
          { question: "Erstellen Sie einen Entsorgungsnachweis?", answer: "Auf Wunsch dokumentieren wir alle entsorgten Materialien und stellen entsprechende Nachweise aus — wichtig für Behörden, Insolvenzverwalter und Eigentumsübertragungen." },
        ],
        priceHint: "Betriebsauflösungen werden individuell nach Fläche, Ausstattung und Entsorgungsaufwand kalkuliert. Die Wertanrechnung von Altmetallen und verwertbaren Gütern reduziert Ihre Kosten erheblich. Jetzt kostenlose Besichtigung vereinbaren.",
        pricingRows: [
          { label: "Werkstatt / Kleinbetrieb (bis 100 m²)", price: "ab 799 €", note: "inkl. Entsorgung" },
          { label: "Lagerhalle (100–300 m²)", price: "ab 1.499 €", note: "inkl. Metallverwertung" },
          { label: "Produktionshalle (300–600 m²)", price: "ab 2.499 €", note: "individuelle Kalkulation" },
          { label: "Büroauflösung (bis 150 m²)", price: "ab 599 €", note: "inkl. Entsorgung" },
          { label: "Wertanrechnung Altmetall", price: "bis –100 %", note: "je nach Menge & Markt" },
        ],
        reviews: [
          { text: "Betriebsauflösung einer kleinen Werkstatt reibungslos abgewickelt. Altmetall wurde angerechnet — haben am Ende fast nichts gezahlt. Sehr professionell!", name: "Ralf H." },
          { text: "Schnell, zuverlässig und kein bürokratischer Aufwand. Die Halle war innerhalb von 2 Tagen komplett geräumt. Sehr zu empfehlen!", name: "Klaus-Dieter B." },
          { text: "Insolvenzverwaltung abgewickelt — das Team hat termingerecht und diskret gearbeitet. Perfekte Koordination, alle Nachweise sofort erhalten.", name: "Monika S." },
        ],
        relatedLinks: [
          { label: "Firmenauflösung", href: "/firmenaufloesung" },
          { label: "Schrottankauf", href: "/schrottankauf" },
          { label: "Schwerlasttransport", href: "/schwerlasttransport" },
          { label: "Gewerbeumzug", href: "/gewerbeumzug" },
          { label: "Alle Leistungen", href: "/leistungen" },
        ],
      }}
    />
  );
}
