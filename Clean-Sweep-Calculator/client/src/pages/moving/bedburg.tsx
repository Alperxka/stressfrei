import MovingLocationPage from "@/components/moving-location-page";

export default function UmzugBedburgPage() {
  return (
    <MovingLocationPage
      cityName="Bedburg"
      slug="bedburg"
      description="Umzugsunternehmen Bedburg — Privatumzüge, Seniorenumzüge und Büroumzüge. Stressfrei umziehen mit Festpreisgarantie und erfahrenem Team."
      metaDescription="Umzugsunternehmen Bedburg ✓ Privatumzug ✓ Seniorenumzug ✓ Büroumzug ✓ Festpreise ✓ 90+ Google Bewertungen ✓ Kostenlos anfragen ☎ 02271 / 5880940"
      introText="Sie planen einen Umzug in Bedburg oder möchten von Bedburg in eine andere Stadt ziehen? Als Umzugsunternehmen aus dem nahegelegenen Bergheim sind wir schnell bei Ihnen in Kaster, Lipp, Rath, Kirchherten oder der Bedburger Innenstadt. Wir bieten einen kompletten Umzugsservice: Verpacken, Möbeldemontage, Transport und Aufbau am neuen Wohnort — alles zu einem fairen Festpreis."
      localInfo="Bedburg liegt im nördlichen Rhein-Erft-Kreis und ist über die A61 und B477 optimal angebunden. Wir führen regelmäßig Umzüge innerhalb von Bedburg sowie in den Großraum Köln und Düsseldorf durch."
      plz="50181"
      einwohner="ca. 25.000"
      kreis="Rhein-Erft-Kreis"
      highlights={[
        "Kurze Anfahrt aus Bergheim — günstige Konditionen",
        "Kostenlose Besichtigung und Festpreisangebot",
        "Umzug innerhalb von Bedburg oder überregional",
        "Möbelmontage und Verpackungsservice",
        "Seniorenumzüge mit besonderer Sorgfalt",
        "Alle Ortsteile: Kaster, Lipp, Rath, Kirchherten",
      ]}
      faqs={[
        {
          question: "Was kostet ein Umzug in Bedburg?",
          answer: "Ein Umzug einer 2-Zimmer-Wohnung innerhalb von Bedburg beginnt ab ca. 500–900 €. Die genauen Kosten hängen von Wohnungsgröße, Stockwerk und gewünschtem Leistungsumfang ab. Wir erstellen nach kostenloser Besichtigung ein verbindliches Festpreisangebot.",
        },
        {
          question: "Bieten Sie Umzüge von Bedburg nach Köln an?",
          answer: "Ja, Umzüge von Bedburg nach Köln gehören zu unseren häufigsten Aufträgen. Die Strecke über die A61 und A1 ist schnell zurückgelegt. Wir bieten auch Umzüge nach Düsseldorf, Bonn und in ganz NRW an.",
        },
        {
          question: "Kann ich einzelne Leistungen dazubuchen?",
          answer: "Ja, unser Service ist modular aufgebaut. Sie können beispielsweise nur den Transport buchen oder den Komplettservice mit Einpacken, Möbelmontage und Auspacken. Alles ganz nach Ihren Wünschen.",
        },
        {
          question: "Stellen Sie auch Umzugskartons bereit?",
          answer: "Ja, wir liefern Ihnen auf Wunsch Umzugskartons, Luftpolsterfolie und weiteres Verpackungsmaterial direkt nach Hause. Die Kosten werden transparent im Angebot aufgeführt.",
        },
      ]}
      einzugsgebiete={[
        { name: "Bergheim", slug: "bergheim", type: "umzug" },
        { name: "Elsdorf", slug: "elsdorf", type: "umzug" },
        { name: "Kerpen", slug: "kerpen", type: "umzug" },
        { name: "Pulheim", slug: "pulheim", type: "umzug" },
        { name: "Frechen", slug: "frechen", type: "umzug" },
        { name: "Bedburg", slug: "bedburg", type: "entruempelung" },
        { name: "Bergheim", slug: "bergheim", type: "entruempelung" },
        { name: "Elsdorf", slug: "elsdorf", type: "entruempelung" },
        { name: "Kerpen", slug: "kerpen", type: "entruempelung" },
        { name: "Grevenbroich", slug: "grevenbroich", type: "entruempelung" },
        { name: "Rommerskirchen", slug: "rommerskirchen", type: "entruempelung" },
      ]}
      stadtteile={[
        "Kaster",
        "Lipp",
        "Rath",
        "Kirchherten",
        "Königshoven",
        "Pütz",
        "Broich",
        "Blerichen",
      ]}
      stadtteileDetail={[
        {
          name: "Kaster",
          text: "Schöner Ortsteil mit der historischen Wasserburg Kaster. Enge Burgstraßen und Pflasterwege kennen wir genau — wir planen Halteverbotszonen und Aufstellflächen vorab.",
        },
        {
          name: "Lipp",
          text: "Ruhige Wohnlage nördlich der Bedburger Innenstadt. Viele Einfamilienhäuser — Haushaltsumzüge mit Keller, Garage und Nebengebäuden sind typisch.",
        },
        {
          name: "Rath",
          text: "Östlicher Ortsteil, gut angebunden über die B 477. Umzüge von Rath nach Bergheim oder Köln sind schnell und günstig realisierbar.",
        },
        {
          name: "Kirchherten",
          text: "Südlicher Ortsteil direkt an der A 61. Viele Pendler ziehen von hier nach Köln oder Düsseldorf — überregionale Umzüge sind unser Tagesgeschäft.",
        },
        {
          name: "Königshoven",
          text: "Westlicher Ortsteil, bekannt durch die ehemalige Braunkohle-Geschichte, heute Naturgebiet. Ruhige Wohnlage mit vielen Einfamilienhäusern und großen Grundstücken.",
        },
        {
          name: "Pütz",
          text: "Kleines Dorf, idyllische Lage. Seniorenumzüge in Pflegeeinrichtungen machen einen großen Teil unserer Aufträge hier aus — wir gehen einfühlsam vor.",
        },
        {
          name: "Broich",
          text: "Kleiner Ortsteil im Norden Bedburgs. Wenig Bebauung — wir sind trotzdem schnell vor Ort, da Bergheim nur wenige Minuten entfernt liegt.",
        },
        {
          name: "Blerichen",
          text: "Ländlicher Weiler westlich von Bedburg. Über Nebenstraßen gut erreichbar — wir sind auch in abgelegenen Ortschaften zuverlässig für Sie da.",
        },
      ]}
      beispiel={{
        startOrt: "Kaster, Bedburg",
        zielOrt: "Bergheim-Mitte",
        objektTyp: "2-Zimmer-Wohnung",
        flaeche: "60 m²",
        entfernung: "12 km",
        preis: "680 €",
        leistungen: ["Transport", "Möbelaufbau", "Verpackungsmaterial"],
        kundenzitat: "Schnell, sauber, freundlich. Für den kurzen Weg von Kaster nach Bergheim war der Preis absolut fair — keine versteckten Kosten, wie versprochen.",
        kundenName: "Petra N.",
      }}
      neighborCities={[
        { name: "Bergheim", slug: "bergheim" },
        { name: "Elsdorf", slug: "elsdorf" },
        { name: "Kerpen", slug: "kerpen" },
        { name: "Pulheim", slug: "pulheim" },
        { name: "Grevenbroich", slug: "grevenbroich" },
      ]}
      trustStats={{ umzuege: "60+", reaktionszeit: "24–48h", erfahrung: "seit 2018", kundenzitat: "Umzug von Bedburg nach Köln — schnell, günstig, kein einziger Kratzer. Absolut top!", kundenName: "Claudia B." }}
      mapEmbed="https://www.google.com/maps?q=Bedburg,+Rhein-Erft-Kreis,+NRW&output=embed"
    />
  );
}
