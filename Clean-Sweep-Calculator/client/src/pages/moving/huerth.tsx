import MovingLocationPage from "@/components/moving-location-page";

export default function UmzugHuerthPage() {
  return (
    <MovingLocationPage
      cityName="Hürth"
      slug="huerth"
      description="Umzugsunternehmen Hürth — professionelle Umzüge in Hermülheim, Efferen, Kendenich und allen Stadtteilen. Faire Festpreise und erfahrenes Team."
      metaDescription="Umzugsunternehmen Hürth ✓ Privatumzug ✓ Seniorenumzug ✓ Büroumzug ✓ Hermülheim ✓ Efferen ✓ Festpreise ✓ Jetzt anfragen ☎ 02271 / 5880940"
      introText="Hürth gehört zu den größten Städten im Rhein-Erft-Kreis und ist ein beliebter Wohnstandort direkt an der Kölner Stadtgrenze. Wir bieten professionelle Umzüge in allen Hürther Stadtteilen an — von Hermülheim über Efferen und Kendenich bis Berrenrath. Unser erfahrenes Team übernimmt die komplette Organisation: Verpackung, Möbeldemontage, sicherer Transport und Aufbau in der neuen Wohnung."
      localInfo="Hürth ist durch die Nähe zu Köln und die gute Verkehrsanbindung (A1, A4, Stadtbahn) ein gefragtes Wohngebiet. Die vielen Mehrfamilienhäuser in Hermülheim und Efferen sowie die Einfamilienhäuser in Kendenich und Gleuel sorgen für eine hohe Umzugsfrequenz — wir sind regelmäßig vor Ort."
      plz="50354"
      einwohner="ca. 60.000"
      kreis="Rhein-Erft-Kreis"
      highlights={[
        "Alle Stadtteile: Hermülheim, Efferen, Kendenich",
        "Schnelle Anbindung nach Köln",
        "Kostenlose Besichtigung und Festpreisangebot",
        "Möbelmontage und Küchenservice",
        "Halteverbotszonen-Einrichtung",
        "Seniorenumzüge mit besonderer Fürsorge",
      ]}
      faqs={[
        {
          question: "Was kostet ein Umzug in Hürth?",
          answer: "Eine 2-Zimmer-Wohnung innerhalb von Hürth kostet zwischen 500–1.100 €. Ein Einfamilienhaus mit Keller liegt bei ca. 1.500–3.500 €. Nach einer kostenlosen Besichtigung erhalten Sie ein verbindliches Festpreisangebot.",
        },
        {
          question: "Bieten Sie Umzüge von Hürth nach Köln an?",
          answer: "Ja, Umzüge von Hürth nach Köln sind durch die direkte Nachbarschaft besonders günstig und schnell durchführbar. Wir kennen die Kölner Parksituation und richten Halteverbotszonen in allen Stadtteilen ein.",
        },
        {
          question: "Sind Sie in Efferen und Hermülheim aktiv?",
          answer: "Ja, wir führen Umzüge in allen Hürther Stadtteilen durch: Hermülheim, Efferen, Kendenich, Berrenrath, Gleuel, Fischenich, Alt-Hürth, Stotzheim und Knapsack.",
        },
        {
          question: "Bieten Sie auch Firmenumzüge in Hürth an?",
          answer: "Ja, wir führen professionelle Büro- und Firmenumzüge in Hürth durch. Wir planen den Umzug so, dass Ihr Betrieb minimal beeinträchtigt wird — auch am Wochenende möglich.",
        },
      ]}
      einzugsgebiete={[
        { name: "Frechen", slug: "frechen", type: "umzug" },
        { name: "Kerpen", slug: "kerpen", type: "umzug" },
        { name: "Erftstadt", slug: "erftstadt", type: "umzug" },
        { name: "Bergheim", slug: "bergheim", type: "umzug" },
        { name: "Pulheim", slug: "pulheim", type: "umzug" },
        { name: "Elsdorf", slug: "elsdorf", type: "umzug" },
        { name: "Hürth", slug: "huerth", type: "entruempelung" },
        { name: "Frechen", slug: "frechen", type: "entruempelung" },
        { name: "Kerpen", slug: "kerpen", type: "entruempelung" },
        { name: "Erftstadt", slug: "erftstadt", type: "entruempelung" },
        { name: "Bergheim", slug: "bergheim", type: "entruempelung" },
      ]}
      stadtteile={[
        "Hermülheim",
        "Efferen",
        "Kendenich",
        "Berrenrath",
        "Gleuel",
        "Fischenich",
        "Alt-Hürth",
        "Stotzheim",
        "Knapsack",
        "Kalscheuren",
      ]}
      stadtteileDetail={[
        {
          name: "Hermülheim",
          text: "Das Herz von Hürth — dichtest besiedelter Stadtteil mit vielen Mehrfamilienhäusern und Hochhäusern. Parksituation und enge Zufahrten erfordern Ortskenntnis. Wir beantragen Halteverbotszonen vorab.",
        },
        {
          name: "Efferen",
          text: "Direkt an der Kölner Stadtgrenze — Umzüge zwischen Efferen und Köln-Sülz oder Köln-Braunsfeld sind besonders häufig und durch die kurze Distanz günstig.",
        },
        {
          name: "Kendenich",
          text: "Gehobenes Wohnviertel mit vielen Einfamilienhäusern und großen Grundstücken. Haushaltsumzüge mit Wohnkeller, Garage und Gartenhaus führen wir hier regelmäßig durch.",
        },
        {
          name: "Berrenrath",
          text: "Ruhiger Süden Hürths mit Neubaugebieten und Reihenhäusern. Junge Familien ziehen hier besonders häufig ein und aus — Einzugsumzüge sind unsere Stärke.",
        },
        {
          name: "Gleuel",
          text: "Dorfcharakter trotz Stadtlage — enge historische Straßen kennen wir genau. Wir planen die Anfahrt vorab, um Zeitverluste zu vermeiden.",
        },
        {
          name: "Fischenich",
          text: "Kleines Dorf an der Erft mit Altbestand und Neubauten. Seniorenumzüge aus alten Häusern in Pflegeeinrichtungen sind hier typisch — wir gehen einfühlsam vor.",
        },
        {
          name: "Alt-Hürth",
          text: "Historischer Ortskern mit engen Gassen und alter Bausubstanz. Herausfordernd für manche Umzugsunternehmen — für uns tägliche Routine.",
        },
        {
          name: "Stotzheim",
          text: "Südlichster Stadtteil Hürths, gut erreichbar über die L 183. Umzüge von Stotzheim nach Erftstadt oder Weilerswist sind günstig und schnell machbar.",
        },
        {
          name: "Knapsack",
          text: "Ehemals industriell geprägt, heute Wohngebiet im Wandel. Gut angebunden über die A 1 — auch überregionale Umzüge von hier aus günstig.",
        },
        {
          name: "Kalscheuren",
          text: "Kleiner Ortsteil direkt an der A4. Wohngebiet mit guter Infrastruktur — Umzüge nach Köln und ins Umland schnell realisierbar.",
        },
      ]}
      beispiel={{
        startOrt: "Hermülheim, Hürth",
        zielOrt: "Köln-Zollstock",
        objektTyp: "2-Zimmer-Wohnung",
        flaeche: "52 m²",
        entfernung: "9 km",
        preis: "780 €",
        leistungen: ["Transport", "Möbelaufbau", "Halteverbotszonen Köln"],
        kundenzitat: "Das Team hat die Kölner Halteverbotszone selbst beantragt und eingerichtet. Wir mussten uns um gar nichts kümmern — alles perfekt!",
        kundenName: "Martina H.",
      }}
      neighborCities={[
        { name: "Frechen", slug: "frechen" },
        { name: "Kerpen", slug: "kerpen" },
        { name: "Erftstadt", slug: "erftstadt" },
        { name: "Bergheim", slug: "bergheim" },
        { name: "Pulheim", slug: "pulheim" },
      ]}
      trustStats={{ umzuege: "60+", reaktionszeit: "24–48h", erfahrung: "seit 2019", kundenzitat: "Umzug aus Hürth nach Köln — 3 Mann, 5 Stunden, fertig. Super Preis-Leistungs-Verhältnis!", kundenName: "Nicole W." }}
      mapEmbed="https://www.google.com/maps?q=H%C3%BCrth,+Rhein-Erft-Kreis,+NRW&output=embed"
    />
  );
}
