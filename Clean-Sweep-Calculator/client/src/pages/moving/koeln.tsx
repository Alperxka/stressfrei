import MovingLocationPage from "@/components/moving-location-page";

export default function UmzugKoelnPage() {
  return (
    <MovingLocationPage
      cityName="Köln"
      slug="koeln"
      description="Ihr Umzugsunternehmen für Köln und alle Stadtteile — Privatumzüge, Seniorenumzüge, Büroumzüge aus dem Rhein-Erft-Kreis. Faire Festpreise, erfahrenes Team."
      metaDescription="Umzugsunternehmen Köln ✓ Privatumzug ✓ Seniorenumzug ✓ Büroumzug ✓ Faire Festpreise ✓ 5.0 Sterne Google ✓ Jetzt kostenlos anfragen ☎ 02271 / 5880940"
      introText="Von unserem Standort in Bergheim erreichen wir Köln in 20–35 Minuten über die A4 und A57. Wir führen Privatumzüge, Seniorenumzüge und Büroumzüge in alle Kölner Stadtteile durch — von Ehrenfeld und Nippes über die Südstadt bis Rodenkirchen und Porz. Als eingespieltes Team mit eigenem Fuhrpark bieten wir Ihnen faire Festpreise, vollständige Transportversicherung und reibungslose Abläufe in der Millionenstadt."
      localInfo="Köln ist mit rund 1,1 Millionen Einwohnern die größte Stadt in NRW und einer der wichtigsten Umzugsstandorte in Deutschland. Die enge Bebauung, Parkraummangel und teils schmale Treppenhäuser in Altbauten stellen besondere Anforderungen an Umzugsteams. Wir kennen die Besonderheiten der Kölner Stadtteile: Aufzugspflicht, Halteverbotzonen beantragen, Klaviertransporte über enge Wendeltreppen — das alles ist für uns Alltag. Wir holen Halteverbotzonen auf Wunsch selbst ein."
      plz="50667–51149"
      einwohner="ca. 1.100.000"
      kreis="kreisfreie Stadt"
      highlights={[
        "Alle Kölner Stadtteile — von Ehrenfeld bis Porz",
        "Schnelle Anfahrt über A4, A57 und A555",
        "Halteverbotszone auf Wunsch selbst beantragt",
        "Erfahrung mit Altbau-Treppenhäusern und engen Aufzügen",
        "Möbelmontage und Einpackservice inklusive möglich",
        "Vollständig versicherter Transport",
      ]}
      faqs={[
        {
          question: "Was kostet ein Umzug von Bergheim nach Köln?",
          answer: "Ein Umzug von Bergheim nach Köln (ca. 20–30 km) kostet für eine 2-Zimmer-Wohnung in der Regel zwischen 600–1.000 €. Faktoren wie Stockwerk, Aufzug, Entfernung zur Haltestelle und Umfang der Leistungen beeinflussen den Preis. Wir erstellen ein kostenloses Festpreisangebot nach Besichtigung.",
        },
        {
          question: "Übernehmen Sie auch Umzüge innerhalb von Köln?",
          answer: "Ja, wir führen auch innerstädtische Umzüge innerhalb Kölns durch — von Stadtteil zu Stadtteil, z.B. von Ehrenfeld nach Nippes oder von der Südstadt nach Deutz. Kurzstrecken sind oft günstiger als erwartet.",
        },
        {
          question: "Können Sie eine Halteverbotszone in Köln für mich beantragen?",
          answer: "Ja, auf Wunsch beantragen wir die Halteverbotszone für den Umzugstag beim Ordnungsamt Köln. Wir kümmern uns um Antrag, Schilder und Rückgabe — für Sie entsteht kein Aufwand.",
        },
        {
          question: "Bieten Sie Seniorenumzüge nach Köln an?",
          answer: "Ja, Seniorenumzüge — z.B. vom Rhein-Erft-Kreis in ein Kölner Pflegeheim oder eine barrierefreie Wohnung — sind unser Spezialgebiet. Wir arbeiten mit Geduld und Einfühlsamkeit und übernehmen auf Wunsch auch die Haushaltsauflösung der bisherigen Wohnung.",
        },
        {
          question: "Wie lange im Voraus sollte ich den Umzug nach Köln planen?",
          answer: "Mindestens 2–3 Wochen im Voraus, damit wir auch die Halteverbotszone rechtzeitig beantragen können (Vorlaufzeit Stadt Köln: ca. 2 Wochen). Bei Büroumzügen empfehlen wir 4–6 Wochen Vorlauf.",
        },
        {
          question: "Gibt es einen Einpackservice für Köln-Umzüge?",
          answer: "Ja, wir bieten auf Wunsch einen kompletten Einpackservice an — Ihr gesamter Hausrat wird von uns professionell verpackt. Das spart Zeit und minimiert das Beschädigungsrisiko. Fragen Sie nach einem Komplettpakete-Angebot.",
        },
      ]}
      einzugsgebiete={[
        { name: "Bergheim", slug: "bergheim", type: "umzug" },
        { name: "Frechen", slug: "frechen", type: "umzug" },
        { name: "Hürth", slug: "huerth", type: "umzug" },
        { name: "Brühl", slug: "bruehl", type: "umzug" },
        { name: "Pulheim", slug: "pulheim", type: "umzug" },
        { name: "Frechen", slug: "frechen", type: "entruempelung" },
        { name: "Hürth", slug: "huerth", type: "entruempelung" },
        { name: "Brühl", slug: "bruehl", type: "entruempelung" },
        { name: "Bergheim", slug: "bergheim", type: "entruempelung" },
        { name: "Pulheim", slug: "pulheim", type: "entruempelung" },
      ]}
      stadtteile={[
        "Ehrenfeld",
        "Nippes",
        "Südstadt",
        "Innenstadt",
        "Deutz",
        "Rodenkirchen",
        "Porz",
        "Mülheim",
        "Chorweiler",
        "Lindenthal",
        "Sülz",
        "Kalk",
      ]}
      stadtteileDetail={[
        { name: "Ehrenfeld", text: "Dichtes Altbauviertel mit vielen Gründerzeithäusern — enge Treppenhäuser und Parkraumprobleme machen Umzüge anspruchsvoll; wir kennen jeden Kniff und beantragen die Haltezone." },
        { name: "Nippes", text: "Beliebtes Wohnviertel mit Altbauten und neueren Wohnanlagen — Umzüge in und aus Nippes sind häufig; viele Familien aus dem Rhein-Erft-Kreis ziehen hierher." },
        { name: "Südstadt", text: "Begehrtes innerstädtisches Viertel mit Gründerzeitaltbauten — Umzüge hier erfordern Erfahrung mit engen Treppenhäusern, hohen Decken und schweren Jugendstil-Möbeln." },
        { name: "Rodenkirchen", text: "Attraktive Rheinlage mit Einfamilienhäusern und Mehrfamilienhäusern — viele Umzüge aus Wesseling und Brühl führen direkt nach Rodenkirchen; kurze Wege für unser Team." },
        { name: "Lindenthal", text: "Grünes Villenviertel mit großen Einfamilienhäusern und Luxuswohnungen — Umzüge erfordern besondere Sorgfalt bei hochwertigen Möbeln; wir bringen die passende Ausrüstung mit." },
        { name: "Porz", text: "Großstadtteil am Flughafen mit gemischter Bebauung — viele Umzüge von Familien aus dem Rechtsrheinischen; gute A59-Anbindung macht die Anfahrt schnell." },
      ]}
      beispiel={{
        stadtteil: "Ehrenfeld",
        objektTyp: "3-Zimmer-Altbauwohnung",
        etage: "3. OG ohne Aufzug",
        flaeche: "ca. 80 m²",
        dauer: "1 Tag",
        team: "3 Mitarbeiter",
        preis: "1.050 €",
        leistungen: [
          "Vollständiger Umzug inkl. Möbelmontage",
          "Halteverbotszone beantragt",
          "Polsterdecken und Spezialverpackung",
          "Transport nach Bergheim (Rücktransport inklusive)",
          "Aufbau der Möbel am neuen Standort",
        ],
        kundenzitat: "Das Team hat alles perfekt organisiert — sogar die Haltezone war schon fertig als wir ankamen. Sehr empfehlenswert!",
        kundenName: "Thomas B.",
      }}
      trustStats={{ umzuege: "300+", reaktionszeit: "24–48h", erfahrung: "seit 2018", kundenzitat: "Umzug von Köln nach Bergheim — professionell, keine Schäden, Preis fair. Wir empfehlen Sie gerne weiter!", kundenName: "Lisa & Patrick F." }}
    />
  );
}
