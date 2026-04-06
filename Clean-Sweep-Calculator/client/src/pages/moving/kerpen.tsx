import MovingLocationPage from "@/components/moving-location-page";

export default function UmzugKerpenPage() {
  return (
    <MovingLocationPage
      cityName="Kerpen"
      slug="kerpen"
      description="Umzugsunternehmen Kerpen — professionelle Privatumzüge, Seniorenumzüge und Büroumzüge in allen 12 Stadtteilen. Festpreisgarantie und erfahrenes Team."
      metaDescription="Umzugsunternehmen Kerpen ✓ Privatumzug ✓ Seniorenumzug ✓ Büroumzug ✓ Festpreise ✓ Horrem ✓ Sindorf ✓ Jetzt anfragen ☎ 02271 / 5880940"
      introText="Kerpen ist die größte Stadt im Rhein-Erft-Kreis — und ein Ort, in dem wir besonders häufig im Einsatz sind. Ob Umzug innerhalb von Horrem, von Sindorf nach Köln oder ein Büroumzug im Gewerbegebiet Türnich — unser Team kennt alle 12 Stadtteile und plant Ihren Umzug effizient. Wir bieten einen Komplettservice inklusive Verpackung, Transport und Möbelaufbau zu transparenten Festpreisen."
      localInfo="Kerpen liegt zentral an der A4 und A61, was überregionale Umzüge besonders einfach macht. Die Mischung aus städtischen Gebieten in Horrem und Sindorf und den ländlicheren Ortsteilen wie Blatzheim oder Buir erfordert unterschiedliche Umzugsplanung — wir kennen die Besonderheiten jedes Stadtteils."
      plz="50169, 50170, 50171"
      einwohner="ca. 67.000"
      kreis="Rhein-Erft-Kreis"
      highlights={[
        "Alle 12 Kerpener Stadtteile abgedeckt",
        "Kostenlose Besichtigung und Festpreisgarantie",
        "Umzüge lokal und überregional (Köln, Düsseldorf)",
        "Küchenmontage und Möbelservice",
        "Verpackungsmaterial und Kartons auf Wunsch",
        "Halteverbotszonen-Einrichtung inklusive",
      ]}
      faqs={[
        {
          question: "Was kostet ein Umzug in Kerpen?",
          answer: "Eine 2-Zimmer-Wohnung innerhalb von Kerpen kostet in der Regel zwischen 500–1.000 €. Ein Einfamilienhaus mit Keller liegt bei ca. 1.500–3.500 €. Die genauen Kosten ermitteln wir bei einer kostenlosen Besichtigung.",
        },
        {
          question: "Richten Sie auch Halteverbotszonen in Kerpen ein?",
          answer: "Ja, wir kümmern uns um die Beantragung und Einrichtung von Halteverbotszonen in Kerpen und allen Stadtteilen. So ist direkt vor Ihrer Haustür Platz für den Umzugswagen.",
        },
        {
          question: "Bieten Sie auch Umzüge am Wochenende an?",
          answer: "Ja, wir führen Umzüge auch samstags durch. So müssen Sie keinen Urlaub nehmen. Vereinbaren Sie einfach Ihren Wunschtermin mit uns.",
        },
        {
          question: "Sind Sie auch in Horrem und Sindorf verfügbar?",
          answer: "Ja, wir sind in allen Kerpener Stadtteilen aktiv: Horrem, Sindorf, Türnich, Brüggen, Blatzheim, Buir, Manheim, Neu-Bottenbroich und allen weiteren.",
        },
      ]}
      einzugsgebiete={[
        { name: "Bergheim", slug: "bergheim", type: "umzug" },
        { name: "Frechen", slug: "frechen", type: "umzug" },
        { name: "Hürth", slug: "huerth", type: "umzug" },
        { name: "Erftstadt", slug: "erftstadt", type: "umzug" },
        { name: "Elsdorf", slug: "elsdorf", type: "umzug" },
        { name: "Bedburg", slug: "bedburg", type: "umzug" },
        { name: "Pulheim", slug: "pulheim", type: "umzug" },
        { name: "Kerpen", slug: "kerpen", type: "entruempelung" },
        { name: "Bergheim", slug: "bergheim", type: "entruempelung" },
        { name: "Frechen", slug: "frechen", type: "entruempelung" },
        { name: "Hürth", slug: "huerth", type: "entruempelung" },
        { name: "Erftstadt", slug: "erftstadt", type: "entruempelung" },
      ]}
      stadtteile={[
        "Horrem",
        "Sindorf",
        "Türnich",
        "Brüggen",
        "Blatzheim",
        "Buir",
        "Manheim",
        "Manheim-neu",
        "Balkhausen",
        "Langenich",
        "Götzenkirchen",
        "Neu-Bottenbroich",
      ]}
      stadtteileDetail={[
        {
          name: "Horrem",
          text: "Größter Stadtteil mit eigenem Bahnhof (Köln-Aachen-Linie) — Umzüge nach Köln und Aachen besonders gefragt. Mehrfamilienhäuser am Bahnhofsbereich, Einfamilienhäuser am Ortsrand.",
        },
        {
          name: "Sindorf",
          text: "Modernes Neubaugebiet im Osten Kerpens — viele junge Familien ziehen hier ein. Einzugsumzüge in Reihenhäuser und Doppelhaushälften sind unser Spezialgebiet.",
        },
        {
          name: "Türnich",
          text: "Kleines Dorf mit Schloss Türnich — enge Gassen erfordern erfahrene Fahrer. Wir kennen die Straßenverhältnisse bestens und planen die Route im Voraus.",
        },
        {
          name: "Brüggen",
          text: "Ruhige Wohnlage direkt an der Grenze zu Bergheim. Kurze Anfahrt von unserem Standort — lokale Umzüge innerhalb Brüggens oder nach Bergheim besonders günstig.",
        },
        {
          name: "Blatzheim",
          text: "Ländlicher Ortsteil mit überwiegend Einfamilienhäusern. Haushaltsumzüge mit Keller, Garage und Gartenhütte sind typisch — wir bringen die passende Fahrzeugkapazität.",
        },
        {
          name: "Buir",
          text: "Kleines Dorf mit direkter Auffahrt zur A4. Überregionale Umzüge von Buir aus sind besonders günstig — keine langen Anfahrten zur Autobahn.",
        },
        {
          name: "Manheim",
          text: "Historischer Ort, teils für Braunkohleabbau umgesiedelt. Viele Bewohner zogen in den neuen Ortsteil Manheim-neu — wir haben Erfahrung mit dieser besonderen Umzugssituation.",
        },
        {
          name: "Manheim-neu",
          text: "Neuer Ortsteil, speziell für umgesiedelte Bewohner errichtet. Moderne Bebauung, breite Straßen — Umzüge laufen hier besonders reibungslos.",
        },
        {
          name: "Balkhausen",
          text: "Kleiner Ortsteil im Norden Kerpens. Ruhige Wohnlage mit Einfamilienhäusern — Seniorenumzüge und Familienumzüge führen wir hier regelmäßig durch.",
        },
        {
          name: "Langenich",
          text: "Winziger Weiler westlich von Horrem. Wir sind auch hier für Sie da — die kurze Entfernung zu unserem Standort hält die Kosten gering.",
        },
        {
          name: "Götzenkirchen",
          text: "Kleines Dorf, idyllische Lage. Gelegentliche Umzüge von hier nach Köln oder Bergheim — mit Festpreisgarantie und pünktlichem Service.",
        },
        {
          name: "Neu-Bottenbroich",
          text: "Abgelegener Weiler am Westrand Kerpens, bekannt durch das gleichnamige Naturschutzgebiet. Wir finden jeden Standort — auch abseits der Hauptstraßen.",
        },
      ]}
      beispiel={{
        startOrt: "Horrem, Kerpen",
        zielOrt: "Köln-Ehrenfeld",
        objektTyp: "2-Zimmer-Wohnung",
        flaeche: "58 m²",
        entfernung: "22 km",
        preis: "1.050 €",
        leistungen: ["Transport", "Möbelaufbau", "Halteverbotszonen", "Verpackungsmaterial"],
        kundenzitat: "Wir sind von Horrem nach Köln-Ehrenfeld gezogen — das Team kannte die Kölner Parksituation und hat alles perfekt geregelt. Top Service!",
        kundenName: "Julia S.",
      }}
      neighborCities={[
        { name: "Bergheim", slug: "bergheim" },
        { name: "Frechen", slug: "frechen" },
        { name: "Hürth", slug: "huerth" },
        { name: "Erftstadt", slug: "erftstadt" },
        { name: "Elsdorf", slug: "elsdorf" },
        { name: "Bedburg", slug: "bedburg" },
      ]}
      trustStats={{ umzuege: "90+", reaktionszeit: "24–48h", erfahrung: "seit 2018", kundenzitat: "Büroumzug in Kerpen-Sindorf in einem Tag — professionell, schnell, kein Schaden. Sehr empfehlenswert!", kundenName: "Florian K." }}
      mapEmbed="https://www.google.com/maps?q=Kerpen,+Rhein-Erft-Kreis,+NRW&output=embed"
    />
  );
}
