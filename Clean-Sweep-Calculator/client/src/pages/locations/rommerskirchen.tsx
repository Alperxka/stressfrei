import { Link } from "wouter";
import LocationPage from "@/components/location-page";
import CityExtrasTemplate, { CityExtrasData } from "@/components/city-extras-template";

const data: CityExtrasData = {
  cityName: "Rommerskirchen",
  distanz: "ca. 20 km",
  fahrzeit: "ca. 20 Min.",
  plz: "41569",
  einwohner: "ca. 14.000",
  kreis: "Rhein-Kreis Neuss",
  entsorgung: "AWB Rhein-Kreis Neuss",
  naherOrtTip: "Rommerskirchen liegt nördlich des Rhein-Erft-Kreises im Rhein-Kreis Neuss — von unserem Standort in Bergheim sind wir in ca. 20 Minuten bei Ihnen. Die ländliche Gemeinde mit ihren vielen Hofanlagen und Einfamilienhäusern ist ein typisches Einsatzgebiet für uns.",
  lokalerFakt: "Rommerskirchen ist eine ländlich geprägte Gemeinde — viele Einfamilienhäuser, Hofanlagen und Scheunen, die oft über Generationen mit Hausrat und Landwirtschaftlichem gefüllt wurden. Scheunenräumungen und Hofauflösungen sind hier unsere Spezialität.",
  mfhText: "In Nettesheim und Eckum gibt es einige ältere Mehrfamilienhäuser und Wohnblöcke. Wohnungsauflösungen nach Generationenwechsel und Kellerentrümpelungen werden regelmäßig gebucht.",
  mfhArea: "Nettesheim · Eckum · Butzheim",
  efhText: "In Frixheim, Vanikum und Hoeningen stehen viele ältere Einfamilienhäuser auf großen Grundstücken. Haushaltsauflösungen nach Erbschaft — oft mit mehreren Jahrzehnten Ansammlung in Keller, Garage und Schuppen.",
  efhArea: "Frixheim · Vanikum · Hoeningen",
  kellerText: "In Anstel und den ländlichsten Ortsteilen gibt es viele Hofanlagen mit Scheunen und Stallungen. Alte Landmaschinen, Schrott und Gerätschaften werden fachgerecht entsorgt oder auf den Preis angerechnet.",
  kellerArea: "Anstel · Gill · Sinsteden",
  stadtteileCards: [
    { name: "Nettesheim", badge: "Größter Ortsteil", desc: "Größter Ortsteil der Gemeinde mit Mischbebauung. Wohnungsauflösungen, Umzüge in den Großraum Köln/Düsseldorf und Kellerentrümpelungen werden am häufigsten angefragt." },
    { name: "Eckum", desc: "Zentraler Ort mit Ortskern und gemischter Bebauung. Haushaltsauflösungen, Kellerentrümpelungen und Seniorenumzüge ins Pflegeheim sind häufige Aufträge." },
    { name: "Butzheim", desc: "Ruhiges Dorf mit älteren Einfamilienhäusern und Hofanlagen. Hofräumungen, Scheunenentsorgungen und Auflösungen älterer Haushalte nach Erbschaft." },
    { name: "Frixheim / Vanikum", desc: "Kleine Dörfer mit ländlichem Charakter. Teilentrümpelungen, Sperrmüllentsorgung und Garagenräumungen werden hier angefragt." },
    { name: "Hoeningen", badge: "Ländlich & traditionell", desc: "Ländlich gelegen mit vielen Scheunen und Stallgebäuden. Scheunen- und Stallräumungen, Entsorgung alter Landmaschinen und Hofauflösungen sind hier typisch." },
    { name: "Anstel / Gill", desc: "Ländliche Ortsteile mit alten Hofanlagen. Hofräumungen, Scheunenentsorgungen und Auflösung landwirtschaftlicher Bestände aus mehreren Generationen." },
  ],
};

export default function RommerskirchenPage() {
  return (
    <LocationPage
      cityName="Rommerskirchen"
      slug="rommerskirchen"
      description="Entrümpelungen, Haushaltsauflösungen und Umzüge in Rommerskirchen. Zuverlässig, schnell und zum transparenten Festpreis."
      metaDescription="Entrümpelung Rommerskirchen ✓ Haushaltsauflösung ✓ Umzüge ✓ Festpreise ✓ Besenrein ✓ 90+ Google Bewertungen ✓ Jetzt anfragen ☎ 02271 / 5880940"
      introText={<>
        Rommerskirchen liegt nördlich des Rhein-Erft-Kreises im Rhein-Kreis Neuss und ist von unserem Standort in <Link href="/entruempelung-bergheim" className="text-primary hover:underline font-medium">Bergheim</Link> gut erreichbar. In Rommerskirchen und den umliegenden Ortschaften wie Eckum, Butzheim, Nettesheim, Frixheim und Hoeningen bieten wir professionelle <Link href="/entruempelung" className="text-primary hover:underline font-medium">Entrümpelungen</Link>, <Link href="/haushaltsaufloesung" className="text-primary hover:underline font-medium">Haushaltsauflösungen</Link> und <Link href="/umzug" className="text-primary hover:underline font-medium">Umzüge</Link> an. Faire Festpreise und besenreine Übergabe sind dabei selbstverständlich. Die ländliche Prägung der Gemeinde bedeutet: viele ältere Einfamilienhäuser, Hofanlagen und Scheunen, für die wir der richtige Partner sind.
      </>}
      localInfo={<>
        Rommerskirchen ist eine ländlich geprägte Gemeinde mit rund 14.000 Einwohnern. Die ruhige Wohnlage mit vielen Einfamilienhäusern, älteren Hofanlagen und landwirtschaftlichen Gebäuden macht <Link href="/entruempelung" className="text-primary hover:underline font-medium">Entrümpelungen</Link> und <Link href="/haushaltsaufloesung" className="text-primary hover:underline font-medium">Haushaltsauflösungen</Link> zu einem häufig nachgefragten Service. Besonders Scheunenräumungen, Hofauflösungen und die Entsorgung alter landwirtschaftlicher Geräte sind in Rommerskirchen regelmäßige Aufgaben für unser Team. Die Gemeinde grenzt an <Link href="/entruempelung-bedburg" className="text-primary hover:underline font-medium">Bedburg</Link> und <Link href="/entruempelung-grevenbroich" className="text-primary hover:underline font-medium">Grevenbroich</Link>.
      </>}
      localExtras={<CityExtrasTemplate data={data} />}
      plz="41569"
      einwohner="ca. 14.000"
      kreis="Rhein-Kreis Neuss"
      highlights={[
        "Gute Erreichbarkeit aus Bergheim",
        "Kostenlose Besichtigung in Rommerskirchen",
        "Schnelle Entrümpelung in 24–48 Stunden",
        "Besenreine Übergabe inklusive",
        "Fachgerechte Entsorgung garantiert",
        "Auch Hofräumungen und Scheunen",
      ]}
      faqs={[
        {
          question: "Was kostet eine Entrümpelung in Rommerskirchen?",
          answer: "Für eine 2-Zimmer-Wohnung in Rommerskirchen rechnen Sie mit ca. 500–900 €. Größere Objekte wie Einfamilienhäuser kosten zwischen 1.500–3.500 €. Wir erstellen Ihnen ein verbindliches Festpreisangebot nach Besichtigung.",
        },
        {
          question: "Entrümpeln Sie auch Scheunen und Höfe?",
          answer: "Ja, gerade in der ländlichen Umgebung von Rommerskirchen werden wir häufig für die Räumung von Hofanlagen, Scheunen und großen Garagen gebucht. Auch Gartenhaus-Entrümpelungen gehören dazu.",
        },
        {
          question: "Bieten Sie Umzüge von Rommerskirchen nach Köln an?",
          answer: "Ja, wir führen Umzüge von Rommerskirchen in den gesamten Großraum Köln, Düsseldorf und NRW durch. Privat-, Senioren- und Büroumzüge sind unser Spezialgebiet.",
        },
        {
          question: "Wie erreiche ich Sie für einen Termin?",
          answer: "Rufen Sie uns unter 02271 / 5880940 an oder nutzen Sie unseren Online-Terminplaner. Wir melden uns schnellstmöglich bei Ihnen zurück.",
        },
        {
          question: "Entrümpeln Sie auch landwirtschaftliche Gerätschaften und Maschinen?",
          answer: "Ja, alte Landmaschinen, Werkzeuge und Gerätschaften werden von uns fachgerecht entsorgt oder — wenn noch verwertbar — beim Schrottankauf angerechnet.",
        },
        {
          question: "Was muss ich vorbereiten, bevor das Team kommt?",
          answer: "Sie müssen nichts vorbereiten. Unser Team übernimmt alles — von der Räumung über die Demontage bis zur Entsorgung. Sie können gerne vor Ort sein oder uns einfach Zugang verschaffen.",
        },
        {
          question: "Wie weit im Voraus muss ich in Rommerskirchen buchen?",
          answer: "In der Regel bieten wir Termine innerhalb weniger Tage an. Bei dringenden Fällen — z.B. Erbschaft mit Räumungsfrist — versuchen wir kurzfristiger zu reagieren. Am besten sofort anrufen.",
        },
        {
          question: "Übernehmen Sie auch Dachbodenentrümpelungen in Rommerskirchen?",
          answer: "Ja, Dachbodenentrümpelungen sind in den älteren Häusern der Gemeinde besonders häufig. Wir tragen alles sicher ab und entsorgen nach Materialgruppen getrennt.",
        },
        {
          question: "Was kostet eine Haushaltsauflösung in Rommerskirchen nach Erbschaft?",
          answer: "Das hängt von der Größe des Objekts und dem Füllgrad ab. Ein typisches Einfamilienhaus mit Keller liegt zwischen 1.800–3.500 €. Wertanrechnung für Metalle und Antiquitäten senkt den Preis.",
        },
        {
          question: "Bieten Sie Seniorenumzüge aus Rommerskirchen in Pflegeheime an?",
          answer: "Ja, Seniorenumzüge — auch bei sehr kurzen Fristen — sind eine unserer Kernkompetenzen. Wir gehen geduldig und einfühlsam vor und übernehmen alles vom Einpacken bis zum Aufbau.",
        },
        {
          question: "Wie lange dauert eine typische Entrümpelung in Rommerskirchen?",
          answer: "Eine 2-3-Zimmer-Wohnung ist in der Regel an einem Tag erledigt. Ein Einfamilienhaus mit Keller und Scheune dauert 1–2 Tage. Genaueres erfahren Sie nach der kostenlosen Besichtigung.",
        },
      ]}
      beispiel={{
        stadtteil: "Nettesheim",
        objektTyp: "Bauernhof-Nebengebäude",
        etage: "EG + Scheune",
        flaeche: "ca. 160 m²",
        dauer: "2 Tage",
        team: "4 Mitarbeiter",
        preis: "2.200 €",
        leistungen: [
          "Räumung von Wohnräumen und landwirtschaftlichen Nebengebäuden",
          "Entsorgung von alten Maschinen und Werkzeugen",
          "Scheunenräumung inkl. Holz, Metall und Sondermüll",
          "Schrottankauf für Metallteile (Wertanrechnung –180 €)",
          "Fachgerechte Entsorgung aller Materialien",
          "Besenreine Übergabe des gesamten Grundstücks",
        ],
        kundenzitat: "Die Scheune und das Nebengebäude waren in zwei Tagen komplett leer. Sehr faire Preise für den Umfang!",
        kundenName: "Klaus D.",
      }}
      stadtteileDetail={[
        { name: "Eckum", text: "Zentraler Ort der Gemeinde Rommerskirchen mit Ortskern und gemischter Bebauung — Haushaltsauflösungen, Kellerentrümpelungen und Seniorenumzüge ins Pflegeheim sind häufige Aufträge." },
        { name: "Butzheim", text: "Ruhiges Dorf mit vielen älteren Einfamilienhäusern und Hofanlagen — Hofräumungen, Scheunenentsorgungen und Auflösungen älterer Haushalte nach Erbschaft werden hier regelmäßig gebucht." },
        { name: "Nettesheim", text: "Größter Ortsteil mit Mischbebauung — Wohnungsauflösungen, Umzüge in den Großraum Köln/Düsseldorf und Kellerentrümpelungen werden am häufigsten angefragt." },
        { name: "Frixheim", text: "Kleines Dorf mit ländlichem Charakter — Teilentrümpelungen, Sperrmüllentsorgung und Garagenräumungen sind typische Anfragen aus diesem Ortsteil." },
        { name: "Hoeningen", href: "/entruempelung-hoeningen", text: "Ländlich gelegen nahe der Gemeindegrenze — Scheunen- und Stallräumungen, Entsorgung alter Landmaschinen und Hofauflösungen werden hier regelmäßig durchgeführt." },
        { name: "Gill", text: "Kleines Dorf mit altem Bestand — Auflösungen älterer Haushalte, Nachlassentrümpelungen und Sperrmüllentsorgung für Vermieter und Eigentümer." },
        { name: "Vanikum", text: "Ruhige Wohnlage mit Einfamilienhäusern — Haushaltsauflösungen nach Generationenwechsel und Kellerentrümpelungen vor dem Hausverkauf." },
        { name: "Sinsteden", text: "Kleines Dorf am nördlichen Rand der Gemeinde — Teilentrümpelungen, Gartenräumungen und Entsorgung alter Möbel nach Auszug." },
        { name: "Anstel", text: "Ländlicher Ortsteil mit alten Hofanlagen — Hofräumungen, Scheunenentsorgungen und Auflösung landwirtschaftlicher Bestände aus mehreren Generationen." },
        { name: "Widdeshoven", text: "Grenzort zur Gemeinde Bedburg — Haushaltsauflösungen, Sperrmüll und Entrümpelungen älterer Einfamilienhäuser nach Todesfall oder Hausverkauf." },
      ]}
      stadtteile={[
        "Eckum", "Butzheim", "Nettesheim", "Frixheim", "Hoeningen",
        "Gill", "Vanikum", "Sinsteden", "Anstel", "Widdeshoven",
      ]}
      neighborCities={[
        { name: "Bergheim", slug: "bergheim" },
        { name: "Bedburg", slug: "bedburg" },
        { name: "Pulheim", slug: "pulheim" },
        { name: "Elsdorf", slug: "elsdorf" },
        { name: "Grevenbroich", slug: "grevenbroich" },
      ]}
      mapEmbed="https://www.google.com/maps?q=Rommerskirchen,+NRW&output=embed"
      trustStats={{ auftraege: "40+", reaktionszeit: "24–48h", erfahrung: "seit 2020", kundenzitat: "Entrümpelung Bauernhof in Rommerskirchen — riesiger Keller, alles weg in einem Tag. Toller Service!", kundenName: "Klaus-Dieter W." }}
    />
  );
}
