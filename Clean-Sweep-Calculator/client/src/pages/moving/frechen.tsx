import MovingLocationPage from "@/components/moving-location-page";

export default function UmzugFrechenPage() {
  return (
    <MovingLocationPage
      cityName="Frechen"
      slug="frechen"
      description="Umzugsunternehmen Frechen — Privatumzüge, Seniorenumzüge und Büroumzüge in Königsdorf, Bachem und allen Ortsteilen. Festpreise und professioneller Service."
      metaDescription="Umzugsunternehmen Frechen ✓ Privatumzug ✓ Seniorenumzug ✓ Büroumzug ✓ Königsdorf ✓ Festpreise ✓ Kostenlos anfragen ☎ 02271 / 5880940"
      introText="Frechen liegt direkt westlich von Köln und ist von unserem Standort in Bergheim über die A1 und A4 schnell erreichbar. Wir bieten professionelle Umzüge in Frechen und allen Ortsteilen — von Königsdorf über Bachem bis Grefrath. Ob Privatumzug, Seniorenumzug oder Büroumzug: Unser Team organisiert alles und sorgt dafür, dass Ihr Umzug reibungslos verläuft."
      localInfo="Frechen ist als ehemalige Töpferstadt bekannt und bietet eine attraktive Mischung aus Wohn- und Gewerbegebieten. Durch die unmittelbare Nähe zu Köln sind Umzüge zwischen Frechen und Köln besonders gefragt — und bei uns besonders günstig."
      plz="50226"
      einwohner="ca. 54.000"
      kreis="Rhein-Erft-Kreis"
      highlights={[
        "Schnelle Erreichbarkeit über A1 und A4",
        "Alle Ortsteile: Königsdorf, Bachem, Grefrath",
        "Kostenlose Besichtigung und Festpreisgarantie",
        "Professionelle Küchenmontage",
        "Halteverbotszonen werden eingerichtet",
        "Vollversicherter Transport",
      ]}
      faqs={[
        {
          question: "Was kostet ein Umzug in Frechen?",
          answer: "Ein Umzug einer 2-Zimmer-Wohnung innerhalb Frechens kostet in der Regel zwischen 500–1.000 €. Ein komplettes Haus liegt bei ca. 1.500–3.500 €. Genaue Preise erhalten Sie nach kostenloser Besichtigung.",
        },
        {
          question: "Bieten Sie Umzüge von Frechen nach Köln an?",
          answer: "Ja, Umzüge zwischen Frechen und Köln sind durch die kurze Entfernung besonders günstig. Wir kennen die Kölner Stadtteile und planen Ihren Umzug effizient — inklusive Halteverbotszonen vor Ort.",
        },
        {
          question: "Kann ich die Möbelmontage separat buchen?",
          answer: "Ja, Sie können auch nur die Möbelmontage oder den Küchenauf- und -abbau buchen, ohne den kompletten Umzugsservice. Sprechen Sie uns auf Ihre individuellen Wünsche an.",
        },
        {
          question: "Stellen Sie auch Umzugskartons bereit?",
          answer: "Ja, wir liefern Umzugskartons, Kleiderkisten, Luftpolsterfolie und weiteres Verpackungsmaterial direkt zu Ihnen nach Hause in Frechen.",
        },
      ]}
      einzugsgebiete={[
        { name: "Hürth", slug: "huerth", type: "umzug" },
        { name: "Kerpen", slug: "kerpen", type: "umzug" },
        { name: "Pulheim", slug: "pulheim", type: "umzug" },
        { name: "Bergheim", slug: "bergheim", type: "umzug" },
        { name: "Erftstadt", slug: "erftstadt", type: "umzug" },
        { name: "Elsdorf", slug: "elsdorf", type: "umzug" },
        { name: "Frechen", slug: "frechen", type: "entruempelung" },
        { name: "Hürth", slug: "huerth", type: "entruempelung" },
        { name: "Kerpen", slug: "kerpen", type: "entruempelung" },
        { name: "Pulheim", slug: "pulheim", type: "entruempelung" },
        { name: "Bergheim", slug: "bergheim", type: "entruempelung" },
      ]}
      stadtteile={[
        "Königsdorf",
        "Bachem",
        "Grefrath",
        "Habbelrath",
        "Buschbell",
        "Hücheln",
      ]}
      stadtteileDetail={[
        {
          name: "Königsdorf",
          text: "Direkter Kölner Vorort — die Straßenbahnlinie 7 verbindet Königsdorf mit der Kölner Innenstadt. Umzüge von hier nach Köln gehören zu unseren häufigsten Aufträgen. Viele Mehrfamilienhäuser und Reihenhäuser.",
        },
        {
          name: "Bachem",
          text: "Einfamilienhaussiedlung südlich von Frechen. Haushaltsumzüge mit Keller und Garage sind typisch — ruhige Lage ermöglicht entspanntes Arbeiten ohne Zeitdruck.",
        },
        {
          name: "Grefrath",
          text: "Westlichster Ortsteil Frechens, direkt an der Grenze zu Kerpen. Umzüge zwischen Grefrath und Kerpen oder Bergheim sind günstig und schnell durchführbar.",
        },
        {
          name: "Habbelrath",
          text: "Kleines Dorf im Norden Frechens — ruhige Wohnlage mit überwiegend Einfamilienhäusern. Erfahrene Fahrer kennen die engen Dorfstraßen und planen voraus.",
        },
        {
          name: "Buschbell",
          text: "Kleiner Ortsteil mit wenigen Häusern. Auch hier sind wir zuverlässig für Sie da — kurze Anfahrt, faire Festpreise.",
        },
        {
          name: "Hücheln",
          text: "Historischer Ortsteil im Süden Frechens, geprägt durch die Tonwerke-Geschichte. Ältere Bausubstanz kennen wir — auch ungewöhnliche Grundrisse sind kein Problem.",
        },
      ]}
      beispiel={{
        startOrt: "Königsdorf, Frechen",
        zielOrt: "Köln-Lindenthal",
        objektTyp: "3-Zimmer-Wohnung",
        flaeche: "74 m²",
        entfernung: "10 km",
        preis: "950 €",
        leistungen: ["Möbeldemontage", "Transport", "Möbelaufbau", "Verpackungsmaterial"],
        kundenzitat: "Sehr professionell und pünktlich. Die kurze Entfernung nach Köln hat sich deutlich im Preis bemerkbar gemacht — sehr faires Angebot!",
        kundenName: "Andreas K.",
      }}
      neighborCities={[
        { name: "Hürth", slug: "huerth" },
        { name: "Kerpen", slug: "kerpen" },
        { name: "Pulheim", slug: "pulheim" },
        { name: "Bergheim", slug: "bergheim" },
        { name: "Erftstadt", slug: "erftstadt" },
      ]}
      trustStats={{ umzuege: "65+", reaktionszeit: "24–48h", erfahrung: "seit 2019", kundenzitat: "Privatumzug in Frechen — Festpreis, pünktlich, Möbel aufgebaut. Genau was man sich wünscht.", kundenName: "Stefan H." }}
      mapEmbed="https://www.google.com/maps?q=Frechen,+Rhein-Erft-Kreis,+NRW&output=embed"
    />
  );
}
