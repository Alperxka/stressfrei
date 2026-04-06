import MovingLocationPage from "@/components/moving-location-page";

export default function UmzugPulheimPage() {
  return (
    <MovingLocationPage
      cityName="Pulheim"
      slug="pulheim"
      description="Umzugsunternehmen Pulheim — professionelle Umzüge in Stommeln, Brauweiler, Sinnersdorf und allen Ortsteilen. Faire Festpreise und vollversicherter Transport."
      metaDescription="Umzugsunternehmen Pulheim ✓ Privatumzug ✓ Seniorenumzug ✓ Büroumzug ✓ Stommeln ✓ Brauweiler ✓ Festpreise ✓ Jetzt anfragen ☎ 02271 / 5880940"
      introText="Pulheim liegt ideal zwischen Köln und dem Rhein-Erft-Kreis — und ist für unser Umzugsteam bestens erreichbar. Ob Sie von Pulheim-Mitte nach Köln-Ehrenfeld ziehen, innerhalb von Stommeln umziehen oder einen Büroumzug in Brauweiler planen: Wir organisieren Ihren Umzug von A bis Z. Unser Service umfasst Verpackung, Transport, Möbelmontage und auf Wunsch auch die Einrichtung von Halteverbotszonen."
      localInfo="Pulheim ist eine attraktive Wohnstadt direkt vor den Toren Kölns. Die vielen Ein- und Mehrfamilienhäuser in Brauweiler, Stommeln und Sinnersdorf machen Pulheim zu einem unserer häufigsten Einsatzgebiete für Umzüge."
      plz="50259"
      einwohner="ca. 56.000"
      kreis="Rhein-Erft-Kreis"
      highlights={[
        "Alle Ortsteile: Stommeln, Brauweiler, Sinnersdorf",
        "Schnelle Erreichbarkeit zwischen Köln und Bergheim",
        "Kostenlose Besichtigung und Festpreisangebot",
        "Halteverbotszonen-Einrichtung inklusive",
        "Seniorenumzüge mit besonderer Sorgfalt",
        "Vollversicherter Transport Ihrer Möbel",
      ]}
      faqs={[
        {
          question: "Was kostet ein Umzug in Pulheim?",
          answer: "Eine 2-Zimmer-Wohnung innerhalb von Pulheim kostet in der Regel zwischen 500–1.000 €. Ein Einfamilienhaus liegt bei ca. 1.500–3.500 €. Die genauen Kosten ermitteln wir bei einer kostenlosen Besichtigung.",
        },
        {
          question: "Bieten Sie Umzüge von Pulheim nach Köln an?",
          answer: "Ja, Umzüge von Pulheim nach Köln sind einer unserer häufigsten Aufträge. Die kurze Entfernung macht diese Umzüge besonders günstig. Wir kennen die Kölner Stadtteile und deren Besonderheiten.",
        },
        {
          question: "Sind Sie auch in Stommeln und Brauweiler aktiv?",
          answer: "Ja, wir führen Umzüge in allen Pulheimer Ortsteilen durch: Stommeln, Brauweiler, Sinnersdorf, Geyen, Sinthern, Manstedten und Dansweiler.",
        },
        {
          question: "Bieten Sie Seniorenumzüge in Pulheim an?",
          answer: "Ja, Seniorenumzüge sind unser Spezialgebiet. Wir gehen besonders einfühlsam vor, übernehmen das Einpacken, den Transport und den kompletten Aufbau am neuen Wohnort. Ihre Angehörigen müssen sich um nichts kümmern.",
        },
      ]}
      einzugsgebiete={[
        { name: "Bergheim", slug: "bergheim", type: "umzug" },
        { name: "Frechen", slug: "frechen", type: "umzug" },
        { name: "Kerpen", slug: "kerpen", type: "umzug" },
        { name: "Bedburg", slug: "bedburg", type: "umzug" },
        { name: "Hürth", slug: "huerth", type: "umzug" },
        { name: "Elsdorf", slug: "elsdorf", type: "umzug" },
        { name: "Pulheim", slug: "pulheim", type: "entruempelung" },
        { name: "Bergheim", slug: "bergheim", type: "entruempelung" },
        { name: "Frechen", slug: "frechen", type: "entruempelung" },
        { name: "Kerpen", slug: "kerpen", type: "entruempelung" },
        { name: "Rommerskirchen", slug: "rommerskirchen", type: "entruempelung" },
      ]}
      stadtteile={[
        "Stommeln",
        "Brauweiler",
        "Sinnersdorf",
        "Geyen",
        "Sinthern",
        "Manstedten",
        "Dansweiler",
        "Stommelerbusch",
      ]}
      stadtteileDetail={[
        {
          name: "Stommeln",
          text: "Größter und bekanntester Ortsteil Pulheims — die historische Synagoge Stommeln ist ein Wahrzeichen. Mischbebauung aus Altbestand und modernen Neubauten — wir kennen die Straßen bestens.",
        },
        {
          name: "Brauweiler",
          text: "Bekannt durch die romanische Abtei Brauweiler — gepflegte Wohnlage mit vielen Einfamilienhäusern. Umzüge laufen in Brauweiler meist ruhig und entspannt ab.",
        },
        {
          name: "Sinnersdorf",
          text: "Kleiner Ortsteil mit Dorfcharakter. Viele Familien ziehen von Köln ins Grüne nach Sinnersdorf — Einzugsumzüge aus Köln gehören hier zu unseren häufigsten Aufträgen.",
        },
        {
          name: "Geyen",
          text: "Südlichster Ortsteil Pulheims an der Grenze zu Kerpen. Umzüge zwischen Geyen und den Kerpener Stadtteilen sind durch die kurze Distanz besonders günstig.",
        },
        {
          name: "Sinthern",
          text: "Kleines Dorf westlich von Pulheim. Ruhige Wohnlage mit überwiegend Einfamilienhäusern — Haushaltsumzüge mit Garten und Keller sind typisch.",
        },
        {
          name: "Manstedten",
          text: "Winziger Ortsteil mit wenigen Häusern. Dank guter Straßenanbindung sind wir auch hier schnell vor Ort — mit Festpreisgarantie.",
        },
        {
          name: "Dansweiler",
          text: "Nördlichster Ortsteil Pulheims, grenzt an Köln-Ehlscheid. Umzüge zwischen Dansweiler und den Kölner Stadtteilen im Nordwesten sind häufig und günstig.",
        },
        {
          name: "Stommelerbusch",
          text: "Kleinsiedlung nordöstlich von Stommeln. Ruhige Wohnlage mit gelegentlichen Senioren- und Familienumzügen — wir sind auch hier zuverlässig für Sie da.",
        },
      ]}
      beispiel={{
        startOrt: "Brauweiler, Pulheim",
        zielOrt: "Köln-Ossendorf",
        objektTyp: "3-Zimmer-Wohnung",
        flaeche: "72 m²",
        entfernung: "15 km",
        preis: "1.080 €",
        leistungen: ["Möbeldemontage", "Transport", "Möbelaufbau", "Halteverbotszonen"],
        kundenzitat: "Umzug von Brauweiler nach Köln in Rekordzeit. Das Team war sehr freundlich und hat alles sicher und ohne Kratzer transportiert. Gern wieder!",
        kundenName: "Stefan W.",
      }}
      neighborCities={[
        { name: "Bergheim", slug: "bergheim" },
        { name: "Frechen", slug: "frechen" },
        { name: "Kerpen", slug: "kerpen" },
        { name: "Bedburg", slug: "bedburg" },
        { name: "Hürth", slug: "huerth" },
      ]}
      trustStats={{ umzuege: "70+", reaktionszeit: "24–48h", erfahrung: "seit 2019", kundenzitat: "Umzug von Pulheim nach Düsseldorf reibungslos — sehr nettes Team, alles gut verpackt angekommen.", kundenName: "Jana M." }}
      mapEmbed="https://www.google.com/maps?q=Pulheim,+Rhein-Erft-Kreis,+NRW&output=embed"
    />
  );
}
