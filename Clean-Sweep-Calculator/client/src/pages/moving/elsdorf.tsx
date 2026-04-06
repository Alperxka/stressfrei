import MovingLocationPage from "@/components/moving-location-page";

export default function UmzugElsdorfPage() {
  return (
    <MovingLocationPage
      cityName="Elsdorf"
      slug="elsdorf"
      description="Umzugsunternehmen Elsdorf — stressfreie Umzüge mit Festpreisgarantie. Privatumzüge, Seniorenumzüge und Büroumzüge direkt vom Nachbarort Bergheim."
      metaDescription="Umzugsunternehmen Elsdorf ✓ Privatumzug ✓ Seniorenumzug ✓ Büroumzug ✓ Festpreise ✓ Schnelle Ausführung ✓ Kostenlos anfragen ☎ 02271 / 5880940"
      introText="Elsdorf liegt direkt neben unserem Hauptsitz in Bergheim — das bedeutet für Ihren Umzug: besonders kurze Anfahrtswege, günstige Preise und flexible Terminplanung. Ob Sie innerhalb von Elsdorf umziehen, nach Köln ziehen oder von Heppendorf in einen anderen Stadtteil wechseln — unser erfahrenes Umzugsteam kümmert sich um alles. Vom sorgfältigen Einpacken bis zum Aufbau Ihrer Möbel am neuen Standort."
      localInfo="Elsdorf grenzt direkt an Bergheim und ist über die L 213 und B 477 schnell erreichbar. Die Stadt wächst stetig, besonders die Neubaugebiete sorgen für viele Umzüge in und nach Elsdorf."
      plz="50189"
      einwohner="ca. 22.000"
      kreis="Rhein-Erft-Kreis"
      highlights={[
        "Direkter Nachbarort — minimale Anfahrtskosten",
        "Kostenlose Besichtigung in Elsdorf",
        "Schnelle Terminvergabe — oft in wenigen Tagen",
        "Möbeldemontage und -montage inklusive",
        "Vollversicherter Transport",
        "Auch Einlagerungsservice verfügbar",
      ]}
      faqs={[
        {
          question: "Was kostet ein Umzug in Elsdorf?",
          answer: "Durch die direkte Nachbarschaft zu unserem Standort profitieren Sie von besonders günstigen Preisen. Eine 2-Zimmer-Wohnung beginnt ab ca. 450–850 €. Nach kostenloser Besichtigung erhalten Sie ein verbindliches Festpreisangebot.",
        },
        {
          question: "Bieten Sie auch Einlagerung an?",
          answer: "Ja, wenn Ihr neues Zuhause noch nicht bezugsfertig ist, lagern wir Ihre Möbel und Kartons sicher ein. Unsere Lagerräume im Rhein-Erft-Kreis sind trocken, sauber und jederzeit zugänglich.",
        },
        {
          question: "Wie schnell können Sie meinen Umzug durchführen?",
          answer: "Dank unserer Nähe zu Elsdorf können wir oft innerhalb weniger Tage einen Umzugstermin anbieten. Bei dringenden Umzügen ist auch ein kurzfristiger Einsatz möglich.",
        },
        {
          question: "Übernehmen Sie auch den Küchentransport?",
          answer: "Ja, wir demontieren Ihre Einbauküche fachgerecht, transportieren sie sicher und bauen sie am neuen Standort wieder auf — inklusive aller Anschlüsse für Wasser und Strom (Elektriker/Installateur auf Wunsch vermittelbar).",
        },
      ]}
      einzugsgebiete={[
        { name: "Bergheim", slug: "bergheim", type: "umzug" },
        { name: "Bedburg", slug: "bedburg", type: "umzug" },
        { name: "Kerpen", slug: "kerpen", type: "umzug" },
        { name: "Frechen", slug: "frechen", type: "umzug" },
        { name: "Pulheim", slug: "pulheim", type: "umzug" },
        { name: "Elsdorf", slug: "elsdorf", type: "entruempelung" },
        { name: "Bergheim", slug: "bergheim", type: "entruempelung" },
        { name: "Bedburg", slug: "bedburg", type: "entruempelung" },
        { name: "Kerpen", slug: "kerpen", type: "entruempelung" },
      ]}
      stadtteile={[
        "Heppendorf",
        "Berrendorf",
        "Esch",
        "Grouven",
        "Tollhausen",
        "Oberembt",
        "Niederembt",
        "Widdendorf",
      ]}
      stadtteileDetail={[
        {
          name: "Heppendorf",
          text: "Größter und zentraler Stadtteil von Elsdorf mit den meisten Einkaufs- und Freizeitmöglichkeiten. Viele Familien ziehen hier ein — Einzugsumzüge aus Köln in die Neubaugebiete sind häufig.",
        },
        {
          name: "Berrendorf",
          text: "Südöstlicher Ortsteil, grenzt direkt an Bergheim. Durch unsere Nähe ist die Anfahrtszeit minimal — das schlägt sich spürbar in den Kosten nieder.",
        },
        {
          name: "Esch",
          text: "Kleiner Ortsteil nordöstlich von Heppendorf. Überwiegend Einfamilienhäuser — Hausumzüge mit großem Umfang sind typisch für Esch.",
        },
        {
          name: "Grouven",
          text: "Kleines Dorf westlich von Elsdorf — ruhige Lage. Senioren, die zu Kindern oder in Pflegeheime umziehen, gehören hier zu unserer Zielgruppe.",
        },
        {
          name: "Tollhausen",
          text: "Ortsteil im Nordwesten Elsdorfs, gut angebunden über L 361. Umzüge von Tollhausen nach Bergheim oder Bedburg sind besonders günstig machbar.",
        },
        {
          name: "Oberembt",
          text: "Bekannt durch Kloster Oberembt. Ländliche Wohnlage mit Altbestand — wir sind vertraut mit älteren Gebäuden und ungewöhnlichen Grundrissen.",
        },
        {
          name: "Niederembt",
          text: "Kleiner Ort nordöstlich von Elsdorf. Ruhige Wohnlage — wir sind hier zuverlässig vor Ort, auch wenn selten Aufträge anfallen.",
        },
        {
          name: "Widdendorf",
          text: "Kleinsiedlung im Nordwesten — auch in den kleinsten Ortschaften Elsdorfs sind wir für Sie da. Kurze Anfahrt aus Bergheim garantiert.",
        },
      ]}
      beispiel={{
        startOrt: "Heppendorf, Elsdorf",
        zielOrt: "Köln-Porz",
        objektTyp: "2-Zimmer-Wohnung",
        flaeche: "56 m²",
        entfernung: "38 km",
        preis: "1.100 €",
        leistungen: ["Transport", "Möbelaufbau", "Halteverbotszonen", "Einpackservice"],
        kundenzitat: "Ich wusste nicht, dass ein Umzug so einfach sein kann. Das Team aus Bergheim war in Heppendorf in 15 Minuten und hat alles in einem Zug erledigt.",
        kundenName: "Karin M.",
      }}
      neighborCities={[
        { name: "Bergheim", slug: "bergheim" },
        { name: "Bedburg", slug: "bedburg" },
        { name: "Kerpen", slug: "kerpen" },
        { name: "Frechen", slug: "frechen" },
        { name: "Pulheim", slug: "pulheim" },
      ]}
      trustStats={{ umzuege: "50+", reaktionszeit: "24–48h", erfahrung: "seit 2018", kundenzitat: "Seniorenumzug meiner Mutter aus Elsdorf — einfühlsam, gründlich und zum vereinbarten Preis. Danke!", kundenName: "Heike A." }}
      mapEmbed="https://www.google.com/maps?q=Elsdorf,+Rhein-Erft-Kreis,+NRW&output=embed"
    />
  );
}
