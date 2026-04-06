import { Link } from "wouter";
import LocationPage from "@/components/location-page";
import CityExtrasTemplate, { CityExtrasData } from "@/components/city-extras-template";

const data: CityExtrasData = {
  cityName: "Wesseling",
  distanz: "ca. 35 km",
  fahrzeit: "ca. 35 Min.",
  plz: "50389",
  einwohner: "ca. 36.000",
  kreis: "Rhein-Erft-Kreis",
  entsorgung: "AWB Rhein-Erft-Kreis",
  naherOrtTip: "Wesseling liegt im südlichsten Zipfel des Rhein-Erft-Kreises direkt an der A555 — von Bergheim fahren wir in ca. 35 Minuten zu Ihnen. Die Stadt grenzt an Köln-Rodenkirchen, was viele Umzüge nach Köln und umgekehrt besonders günstig macht.",
  lokalerFakt: "Wesseling ist eine mittelgroße Industrie- und Wohnstadt mit ca. 36.000 Einwohnern. Die Stadtteile Berzdorf und Keldenich sind geprägt von Arbeiterwohnhäusern der Nachkriegszeit — hier finden regelmäßig Haushaltsauflösungen nach Generationenwechsel statt.",
  mfhText: "In Berzdorf und Keldenich gibt es viele Nachkriegs-Mietshäuser mit vollgestellten Kellern und Dachböden. Wohnungsauflösungen nach Erbschaft und Kellerentrümpelungen sind hier tägliche Aufträge.",
  mfhArea: "Berzdorf · Keldenich · Wesseling-Mitte",
  efhText: "In Eichholz und Urfeld stehen viele ältere Einfamilienhäuser in ruhiger Rheinlage. Haushaltsauflösungen nach Erbschaft — oft mit gehobener Einrichtung und gutem Wertanrechnungspotenzial.",
  efhArea: "Eichholz · Urfeld · Rengen",
  kellerText: "In den gewerblichen Bereichen Wesselings (Chemieparkbereich) gibt es Lager- und Büroräumungen. Schrottankauf aus Keller- und Garage-Räumungen reduziert den Preis.",
  kellerArea: "Gewerbegebiet · Schrottankauf stadtübergreifend",
  stadtteileCards: [
    { name: "Berzdorf", badge: "Häufigster Einsatzort", desc: "Zentraler Stadtteil mit vielen Nachkriegs-Mietshäusern. Wohnungsauflösungen und Haushaltsauflösungen nach Erbschaft sind hier tägliche Aufträge für unser Team." },
    { name: "Keldenich", desc: "Dicht besiedelter Ortsteil mit älteren Mehrfamilienhäusern. Keller- und Dachbodenentrümpelungen sowie Wohnungsauflösungen vor Neuvermietung werden häufig gebucht." },
    { name: "Urfeld", desc: "Rheinnaher Ortsteil mit modernen Wohnanlagen. Umzüge nach Köln und in den Rhein-Erft-Kreis sowie erste Kellerentrümpelungen nach Einzug." },
    { name: "Eichholz", badge: "Rheinlage", desc: "Grüner Ortsteil mit Einfamilienhäusern nahe dem Rheinufer. Haushaltsauflösungen nach Auszug älterer Bewohner — oft mit gehobener Einrichtung und guter Wertanrechnung." },
    { name: "Rengen", desc: "Kleiner Ortsteil mit ruhiger Wohnlage. Sperrmüllentsorgung, Gartengeräte-Abgabe und Teilentrümpelungen werden regelmäßig angefragt." },
    { name: "Wesseling-Mitte", desc: "Stadtzentrum mit Mischbebauung. Wohnungsauflösungen für Vermieter und Kellerentrümpelungen — schnell abgewickelt, da wir regelmäßig vor Ort sind." },
  ],
};

export default function WesselingPage() {
  return (
    <LocationPage
      cityName="Wesseling"
      slug="wesseling"
      description="Entrümpelungen, Haushaltsauflösungen und Umzüge in Wesseling. Zuverlässig, schnell und zu fairen Festpreisen im südlichen Rhein-Erft-Kreis."
      metaDescription="Entrümpelung Wesseling ✓ Haushaltsauflösung ✓ Umzüge ✓ Festpreise ✓ 24–48h ✓ 5.0 Sterne Google ✓ Kostenlose Besichtigung ☎ 02271 / 5880940"
      introText={<>
        Wesseling liegt im südlichen <Link href="/entruempelung-rhein-erft-kreis" className="text-primary hover:underline font-medium">Rhein-Erft-Kreis</Link> direkt an der A555 — von unserem Standort in <Link href="/entruempelung-bergheim" className="text-primary hover:underline font-medium">Bergheim</Link> sind wir in ca. 35 Minuten vor Ort. In Wesseling und den Stadtteilen Berzdorf, Keldenich, Urfeld und Eichholz bieten wir professionelle <Link href="/entruempelung" className="text-primary hover:underline font-medium">Entrümpelungen</Link>, <Link href="/haushaltsaufloesung" className="text-primary hover:underline font-medium">Haushaltsauflösungen</Link> und <Link href="/umzug" className="text-primary hover:underline font-medium">Umzüge</Link> an. Faire Festpreise, besenreine Übergabe und umweltgerechte Entsorgung — selbstverständlich.
      </>}
      localInfo={<>
        Wesseling ist eine mittelgroße Stadt mit ca. 36.000 Einwohnern im südlichsten Zipfel des Rhein-Erft-Kreises, direkt an der Grenze zu Köln. Die Stadt ist geprägt von Arbeiterwohnhäusern aus der Nachkriegszeit in Berzdorf und Keldenich sowie modernen Wohnanlagen in Urfeld. Dazu kommen viele ältere Einfamilienhäuser in Eichholz. <Link href="/nachlassaufloesung" className="text-primary hover:underline font-medium">Nachlassauflösungen</Link> und <Link href="/kellerentruempelung" className="text-primary hover:underline font-medium">Kellerentrümpelungen</Link> sind in Wesseling besonders häufig gefragt.
      </>}
      localExtras={<CityExtrasTemplate data={data} />}
      plz="50389"
      einwohner="ca. 36.000"
      kreis="Rhein-Erft-Kreis"
      highlights={[
        "Schnell erreichbar über A555 (ca. 35 Min. ab Bergheim)",
        "Alle Stadtteile: Berzdorf, Keldenich, Urfeld, Eichholz",
        "Entrümpelung in 24–48 Stunden",
        "Kostenlose Besichtigung und Festpreisangebot",
        "Besenreine Übergabe ohne Aufpreis",
        "Umweltgerechte Entsorgung und Wertanrechnung",
      ]}
      faqs={[
        {
          question: "Was kostet eine Entrümpelung in Wesseling?",
          answer: "Eine Entrümpelung in Wesseling beginnt je nach Größe und Füllgrad ab ca. 450–900 € für eine 2-Zimmer-Wohnung. Nach einer kostenlosen Besichtigung erhalten Sie ein verbindliches Festpreisangebot ohne versteckte Kosten.",
        },
        {
          question: "Entrümpeln Sie auch in Keldenich und Urfeld?",
          answer: "Ja, wir sind in allen Wesselinger Stadtteilen aktiv — Berzdorf, Keldenich, Urfeld, Rengen und Eichholz. Die Anfahrt ist stets im Festpreis enthalten.",
        },
        {
          question: "Können Sie eine Haushaltsauflösung in Wesseling nach Todesfall durchführen?",
          answer: "Ja. Wir begleiten Sie einfühlsam durch den gesamten Prozess: Wertanrechnung von Möbeln und Hausrat, komplette Räumung und besenreine Übergabe.",
        },
        {
          question: "Bieten Sie Umzüge von Wesseling nach Köln an?",
          answer: "Ja, Umzüge von Wesseling nach Köln sind besonders günstig — die Stadt grenzt direkt an Köln-Rodenkirchen und Köln-Godorf. Wir bieten Privatumzüge, Seniorenumzüge und Büroumzüge an.",
        },
        {
          question: "Wie schnell können Sie in Wesseling mit der Entrümpelung starten?",
          answer: "In der Regel in 24–48 Stunden. Bei Wohnungsübergaben oder dringenden Fällen auch kurzfristiger. Rufen Sie uns an unter 02271 / 5880940 — wir finden immer einen Weg.",
        },
        {
          question: "Ist die Entsorgung in Wesseling im Preis enthalten?",
          answer: "Ja, die fachgerechte Entsorgung aller anfallenden Materialien ist im Festpreis enthalten — keine Überraschungen. Wertvolle Gegenstände werden vorher bewertet und vom Preis abgezogen.",
        },
        {
          question: "Wie lange dauert eine Entrümpelung in Wesseling?",
          answer: "Eine 2-3-Zimmer-Wohnung ist in der Regel an einem Tag erledigt. Größere Objekte wie Einfamilienhäuser mit Keller und Garage dauern 1–2 Tage. Genaueres nach der Besichtigung.",
        },
        {
          question: "Wer räumt eine Wohnung nach Erbschaft in Wesseling?",
          answer: "Wir — diskret, vollständig und zum Festpreis. Wertanrechnung für Möbel, Metalle und Elektrogeräte senkt den Preis. Besenreine Übergabe inklusive.",
        },
        {
          question: "Kann ich in Wesseling auch nur einen Keller entrümpeln lassen?",
          answer: "Ja, Kellerentrümpelungen in Berzdorf, Keldenich und allen anderen Stadtteilen sind kein Problem. Auch einzelne Keller oder Garagen erhalten ein verbindliches Festpreisangebot.",
        },
        {
          question: "Bieten Sie Schrottankauf in Wesseling an?",
          answer: "Ja, Schrott und Altmetall werden direkt beim Festpreisangebot berücksichtigt und vom Gesamtpreis abgezogen. Das lohnt sich besonders bei Kellerentrümpelungen mit viel Altmetall.",
        },
        {
          question: "Helfen Sie mit einem Seniorenumzug aus Wesseling?",
          answer: "Ja, Seniorenumzüge — z.B. ins Pflegeheim oder zu Angehörigen — sind eine unserer Kernkompetenzen. Wir gehen geduldig vor und übernehmen alles vom Einpacken bis zum Aufbau.",
        },
        {
          question: "Können Sie auch Büro- und Gewerberäume in Wesseling räumen?",
          answer: "Ja, Büroauflösungen, Lagerräumungen und Gewerbeentrümpelungen in Wesseling gehören zu unserem Angebot. Auch am Wochenende, damit der Betriebsablauf nicht gestört wird.",
        },
      ]}
      beispiel={{
        stadtteil: "Keldenich",
        objektTyp: "4-Zimmer-Wohnung",
        etage: "EG mit Keller",
        flaeche: "ca. 85 m²",
        dauer: "1 Tag",
        team: "3 Mitarbeiter",
        preis: "1.100 €",
        leistungen: [
          "Komplettentrümpelung aller Räume und Keller",
          "Demontage von Einbauküche und Schränken",
          "Abtransport und fachgerechte Entsorgung",
          "Wertanrechnung für Hausrat und Elektrogeräte (–180 €)",
          "Besenreine Übergabe am selben Tag",
        ],
        kundenzitat: "Pünktlich, ordentlich und sehr faire Preise. Die Wertanrechnung hat mich positiv überrascht — top Team!",
        kundenName: "Renate K.",
      }}
      stadtteileDetail={[
        { name: "Berzdorf", href: "/entruempelung-berzdorf", text: "Zentraler Stadtteil mit vielen Nachkriegs-Mietshäusern — Wohnungsauflösungen und Haushaltsauflösungen nach Erbschaft sind hier tägliche Aufträge für unser Team." },
        { name: "Keldenich", href: "/entruempelung-keldenich", text: "Dicht besiedelter Ortsteil mit älteren Mehrfamilienhäusern — Keller- und Dachbodenentrümpelungen sowie Wohnungsauflösungen vor Neuvermietung werden hier regelmäßig gebucht." },
        { name: "Urfeld", href: "/entruempelung-urfeld", text: "Rheinnaher Ortsteil mit modernen Wohnanlagen — Umzüge nach Köln oder in den Rhein-Erft-Kreis sowie Einlagerungen vor dem Neubau sind typische Aufträge." },
        { name: "Rengen", text: "Kleiner Ortsteil mit ruhiger Wohnlage — Sperrmüllentsorgung, Gartengeräte-Abgabe und Teilentrümpelungen werden hier regelmäßig angefragt." },
        { name: "Eichholz", text: "Grüner Ortsteil mit Einfamilienhäusern nahe dem Rheinufer — Haushaltsauflösungen nach Auszug älterer Bewohner und Scheunenräumungen gehören zum Alltag." },
      ]}
      stadtteile={[
        "Berzdorf", "Keldenich", "Urfeld", "Rengen", "Eichholz", "Wesseling-Mitte",
      ]}
      neighborCities={[
        { name: "Brühl", slug: "bruehl" },
        { name: "Hürth", slug: "huerth" },
        { name: "Erftstadt", slug: "erftstadt" },
        { name: "Frechen", slug: "frechen" },
        { name: "Kerpen", slug: "kerpen" },
      ]}
      mapEmbed="https://www.google.com/maps?q=Wesseling,+Rhein-Erft-Kreis,+NRW&output=embed"
      trustStats={{ auftraege: "50+", reaktionszeit: "24–48h", erfahrung: "seit 2019", kundenzitat: "Dachbodenentrümpelung in Wesseling super unkompliziert — Angebot per WhatsApp, nächsten Tag ausgeführt. Top!", kundenName: "Peter G." }}
    />
  );
}
