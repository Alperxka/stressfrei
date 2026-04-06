import MovingLocationPage from "@/components/moving-location-page";

export default function UmzugErftstadtPage() {
  return (
    <MovingLocationPage
      cityName="Erftstadt"
      slug="erftstadt"
      description="Umzugsunternehmen Erftstadt — Privatumzüge, Seniorenumzüge und Büroumzüge in Lechenich, Liblar und allen Ortsteilen. Festpreise und besenreine Übergabe."
      metaDescription="Umzugsunternehmen Erftstadt ✓ Privatumzug ✓ Seniorenumzug ✓ Büroumzug ✓ Lechenich ✓ Liblar ✓ Festpreise ✓ Jetzt anfragen ☎ 02271 / 5880940"
      introText="Erftstadt im südlichen Rhein-Erft-Kreis umfasst zahlreiche Ortsteile wie Lechenich, Liblar, Gymnich und Bliesheim. Als Ihr Umzugsunternehmen für Erftstadt planen wir Ihren Umzug individuell und führen ihn termingerecht durch. Ob lokaler Wohnungswechsel in Lechenich, Umzug von Liblar nach Köln oder ein Seniorenumzug in Gymnich — bei uns bekommen Sie alles aus einer Hand zu fairen Festpreisen."
      localInfo="Erftstadt besticht durch seine grüne Lage an der Erft und die vielen historischen Ortskerne. Die Stadt ist über die A1 und A61 gut angebunden, was überregionale Umzüge schnell und unkompliziert macht."
      plz="50374"
      einwohner="ca. 52.000"
      kreis="Rhein-Erft-Kreis"
      highlights={[
        "Alle Ortsteile: Lechenich, Liblar, Gymnich",
        "Kostenlose Besichtigung und Festpreisgarantie",
        "Umzüge lokal und überregional",
        "Möbelmontage und Küchenservice",
        "Verpackungsmaterial auf Wunsch",
        "Halteverbotszonen-Einrichtung inklusive",
      ]}
      faqs={[
        {
          question: "Was kostet ein Umzug in Erftstadt?",
          answer: "Eine 2-Zimmer-Wohnung innerhalb von Erftstadt kostet zwischen 500–1.100 €. Die genauen Kosten hängen von Wohnungsgröße, Stockwerk und gewünschtem Leistungsumfang ab. Wir erstellen nach kostenloser Besichtigung ein verbindliches Festpreisangebot.",
        },
        {
          question: "Sind Sie in Lechenich und Liblar aktiv?",
          answer: "Ja, wir führen Umzüge in allen Erftstädter Ortsteilen durch: Lechenich, Liblar, Gymnich, Bliesheim, Kierdorf, Erp, Friesheim und allen weiteren.",
        },
        {
          question: "Bieten Sie auch Umzüge nach Bonn an?",
          answer: "Ja, von Erftstadt aus sind Umzüge nach Bonn, Köln und in den gesamten Großraum NRW möglich. Die gute Autobahnanbindung macht auch weitere Strecken wirtschaftlich.",
        },
        {
          question: "Wie vereinbare ich einen Umzugstermin?",
          answer: "Rufen Sie uns unter 02271 / 5880940 an oder nutzen Sie unseren Online-Terminplaner. Wir vereinbaren zunächst einen kostenlosen Besichtigungstermin und erstellen dann Ihr Festpreisangebot.",
        },
      ]}
      einzugsgebiete={[
        { name: "Kerpen", slug: "kerpen", type: "umzug" },
        { name: "Hürth", slug: "huerth", type: "umzug" },
        { name: "Frechen", slug: "frechen", type: "umzug" },
        { name: "Bergheim", slug: "bergheim", type: "umzug" },
        { name: "Elsdorf", slug: "elsdorf", type: "umzug" },
        { name: "Bedburg", slug: "bedburg", type: "umzug" },
        { name: "Erftstadt", slug: "erftstadt", type: "entruempelung" },
        { name: "Kerpen", slug: "kerpen", type: "entruempelung" },
        { name: "Hürth", slug: "huerth", type: "entruempelung" },
        { name: "Frechen", slug: "frechen", type: "entruempelung" },
        { name: "Bergheim", slug: "bergheim", type: "entruempelung" },
      ]}
      stadtteile={[
        "Lechenich",
        "Liblar",
        "Gymnich",
        "Bliesheim",
        "Kierdorf",
        "Erp",
        "Friesheim",
        "Dirmerzheim",
        "Niederberg",
        "Borr",
      ]}
      stadtteileDetail={[
        {
          name: "Lechenich",
          text: "Ehemalige Kreisstadt mit historischem Stadtkern und engen Gassen — wir kennen jede Einbahnstraße. Viele Alt- und Neubauimmobilien, hohe Umzugsfrequenz.",
        },
        {
          name: "Liblar",
          text: "Größter Ortsteil Erftstadts mit dem bekannten Marktplatz. Mischbebauung aus Mehrfamilien- und Einfamilienhäusern — hier haben wir die meisten Aufträge in Erftstadt.",
        },
        {
          name: "Gymnich",
          text: "Bekannt durch Schloss Gymnich, Gästehaus der Bundesregierung. Ruhige, gehobene Wohnlage mit großen Häusern und Grundstücken — Haushaltsumzüge mit viel Umfang typisch.",
        },
        {
          name: "Bliesheim",
          text: "Kleiner Ortsteil westlich von Lechenich, direkt an der Grenze zu Kerpen. Umzüge zwischen Bliesheim und Kerpen sind durch die kurze Distanz besonders günstig.",
        },
        {
          name: "Kierdorf",
          text: "Ruhiger Ortsteil nördlich von Lechenich. Einfamilienhäuser mit Gärten — Umzüge laufen hier meist ohne Zeitdruck und entspannt ab.",
        },
        {
          name: "Erp",
          text: "Ländliches Dorf im Westen Erftstadts. Häufig Seniorenumzüge — die Bevölkerung hier ist etwas älter und wir gehen besonders fürsorglich vor.",
        },
        {
          name: "Friesheim",
          text: "Kleiner Ortsteil im Südwesten, gut erreichbar über L 162. Umzüge von Friesheim nach Bonn oder Weilerswist sind günstig und schnell machbar.",
        },
        {
          name: "Dirmerzheim",
          text: "Ortsteil im Norden Erftstadts — durch die Nähe zur A 61 sind auch Fernumzüge von hier günstig realisierbar.",
        },
        {
          name: "Niederberg",
          text: "Kleines Dorf mit ruhiger Wohnlage. Gelegentliche Umzüge in und aus Niederberg — wir sind auch hier zuverlässig für Sie da.",
        },
        {
          name: "Borr",
          text: "Kleinsiedlung im Nordosten Erftstadts. Auch in den kleinsten Ortschaften sind wir mit vollem Einsatz für Sie unterwegs.",
        },
      ]}
      beispiel={{
        startOrt: "Liblar, Erftstadt",
        zielOrt: "Köln-Rodenkirchen",
        objektTyp: "3-Zimmer-Wohnung",
        flaeche: "79 m²",
        entfernung: "28 km",
        preis: "1.250 €",
        leistungen: ["Möbeldemontage", "Einpackservice", "Transport", "Möbelaufbau", "Küchenservice"],
        kundenzitat: "Sehr guter Umzugsservice. Unsere Küche wurde fachgerecht demontiert und am Zielort wieder eingebaut — alles ohne Probleme und Schäden!",
        kundenName: "Nicole B.",
      }}
      neighborCities={[
        { name: "Kerpen", slug: "kerpen" },
        { name: "Hürth", slug: "huerth" },
        { name: "Frechen", slug: "frechen" },
        { name: "Bergheim", slug: "bergheim" },
        { name: "Elsdorf", slug: "elsdorf" },
      ]}
      trustStats={{ umzuege: "55+", reaktionszeit: "24–48h", erfahrung: "seit 2019", kundenzitat: "Umzug von Erftstadt nach Bonn — alles top. Klavier wurde sicher transportiert. Danke!", kundenName: "Gerhard T." }}
      mapEmbed="https://www.google.com/maps?q=Erftstadt,+Rhein-Erft-Kreis,+NRW&output=embed"
    />
  );
}
