import MovingLocationPage from "@/components/moving-location-page";

export default function UmzugDuesseldorfPage() {
  return (
    <MovingLocationPage
      cityName="Düsseldorf"
      slug="duesseldorf"
      description="Umzugsunternehmen für Düsseldorf — Privatumzüge, Seniorenumzüge und Büroumzüge aus dem Rhein-Erft-Kreis. Faire Festpreise, erfahrenes Team, vollständige Versicherung."
      metaDescription="Umzugsunternehmen Düsseldorf ✓ Privatumzug ✓ Seniorenumzug ✓ Büroumzug ✓ Faire Festpreise ✓ 5.0 Sterne Google ✓ Jetzt kostenlos anfragen ☎ 02271 / 5880940"
      introText="Von unserem Standort in Bergheim erreichen wir Düsseldorf in 35–50 Minuten über die A46 und A57. In alle Düsseldorfer Stadtteile — von Pempelfort und Bilk über Gerresheim bis Benrath — führen wir Privatumzüge, Seniorenumzüge und Firmenumzüge zu fairen Festpreisen durch. Als professionelles Team mit eigenem Fuhrpark kennen wir die Herausforderungen der Landeshauptstadt: Parkraum, Halteverbote und enge Altstadtgassen — alles kein Problem für uns."
      localInfo="Düsseldorf ist die Landeshauptstadt von NRW mit rund 650.000 Einwohnern. Viele Menschen aus dem Rhein-Erft-Kreis und Rhein-Kreis Neuss ziehen für Arbeit oder Studium nach Düsseldorf. Die Stadt bietet eine Mischung aus historischen Gründerzeitvierteln (Flingern, Unterbilk), modernen Neubauprojekten am Medienhafen und ruhigen Einfamilienhausvierteln in Benrath und Lohausen. Wir kennen die Eigenheiten jedes Viertels und planen Ihren Umzug entsprechend."
      plz="40210–40629"
      einwohner="ca. 650.000"
      kreis="kreisfreie Stadt / Landeshauptstadt NRW"
      highlights={[
        "Alle Düsseldorfer Stadtteile — von Pempelfort bis Benrath",
        "Schnelle Anfahrt über A46 und A57",
        "Halteverbotszone auf Wunsch selbst beantragt",
        "Erfahrung mit Altbau, Neubauten und Gewerbe",
        "Möbelmontage und Einpackservice möglich",
        "Vollständig versicherter Transport",
      ]}
      faqs={[
        {
          question: "Was kostet ein Umzug von Bergheim nach Düsseldorf?",
          answer: "Ein Umzug von Bergheim nach Düsseldorf (ca. 40–50 km) kostet für eine 2-Zimmer-Wohnung in der Regel zwischen 750–1.200 €. Die genauen Kosten hängen von Stockwerk, Aufzug, Entfernung zur Haltestelle und Leistungsumfang ab. Wir erstellen nach einer kostenlosen Besichtigung ein verbindliches Festpreisangebot.",
        },
        {
          question: "Übernehmen Sie Umzüge innerhalb von Düsseldorf?",
          answer: "Ja, wir führen auch innerstädtische Umzüge durch — von Stadtteilviertel zu Stadtteilviertel, z.B. von Flingern nach Benrath oder von Pempelfort nach Gerresheim. Auch Kurzstrecken werden fair berechnet.",
        },
        {
          question: "Bieten Sie Büroumzüge in Düsseldorf an?",
          answer: "Ja, wir führen professionelle Büro- und Firmenumzüge in Düsseldorf durch. IT-Equipment, Aktenschränke und Büromöbel werden sicher verpackt und am neuen Standort aufgebaut. Abend- und Wochenendtermine sind möglich, um Ausfallzeiten zu minimieren.",
        },
        {
          question: "Können Sie eine Halteverbotszone in Düsseldorf beantragen?",
          answer: "Ja, auf Wunsch beantragen wir die Halteverbotszone beim Ordnungsamt Düsseldorf (Vorlaufzeit ca. 2 Wochen). Wir kümmern uns um Antrag, Aufstellung der Schilder und Rückgabe.",
        },
        {
          question: "Wie weit im Voraus sollte ich den Umzug nach Düsseldorf planen?",
          answer: "Mindestens 2–4 Wochen im Voraus. Für Büroumzüge oder größere Haushalte empfehlen wir 4–6 Wochen, damit wir rechtzeitig die Haltezone beantragen und alle Details planen können.",
        },
        {
          question: "Bieten Sie Seniorenumzüge nach Düsseldorf an?",
          answer: "Ja, Seniorenumzüge — z.B. ins Düsseldorfer Pflegeheim oder in eine barrierefreie Wohnung — führen wir mit besonderer Sorgfalt durch. Auf Wunsch übernehmen wir auch die Haushaltsauflösung am alten Wohnort.",
        },
      ]}
      einzugsgebiete={[
        { name: "Grevenbroich", slug: "grevenbroich", type: "umzug" },
        { name: "Bedburg", slug: "bedburg", type: "umzug" },
        { name: "Bergheim", slug: "bergheim", type: "umzug" },
        { name: "Pulheim", slug: "pulheim", type: "umzug" },
        { name: "Rommerskirchen", slug: "rommerskirchen", type: "umzug" },
        { name: "Grevenbroich", slug: "grevenbroich", type: "entruempelung" },
        { name: "Bergheim", slug: "bergheim", type: "entruempelung" },
        { name: "Bedburg", slug: "bedburg", type: "entruempelung" },
        { name: "Pulheim", slug: "pulheim", type: "entruempelung" },
        { name: "Rommerskirchen", slug: "rommerskirchen", type: "entruempelung" },
      ]}
      stadtteile={[
        "Pempelfort",
        "Bilk",
        "Flingern",
        "Unterbilk",
        "Gerresheim",
        "Benrath",
        "Oberkassel",
        "Lohausen",
        "Derendorf",
        "Friedrichstadt",
        "Hassels",
        "Garath",
      ]}
      stadtteileDetail={[
        { name: "Pempelfort", text: "Beliebtes Wohnviertel nahe der Innenstadt mit Altbauten und Jugendstilhäusern — Umzüge aus dem Rhein-Erft-Kreis und Rhein-Kreis Neuss führen häufig hierher." },
        { name: "Bilk", text: "Dichtes Studentenviertel mit vielen Mehrfamilienhäusern — Umzüge in und aus Bilk sind sehr häufig; kleine Wohnungen, oft ohne Aufzug, erfordern Erfahrung." },
        { name: "Oberkassel", text: "Gehobenes Rheinviertel mit Villen und hochwertigen Wohnungen — Umzüge erfordern besondere Sorgfalt; wir bringen Spezialverpackung und erfahrene Träger mit." },
        { name: "Benrath", text: "Ruhiger Südbezirk mit Einfamilienhäusern und dem bekannten Schlosspark — viele Familien aus dem Rhein-Erft-Kreis zieht es nach Benrath; kurze Fahrtzeiten über A46." },
        { name: "Flingern", text: "Aufstrebendes Viertel mit Altbauten und Ateliers — viele Jungfamilien und Kreative ziehen hierher; wir kennen die engen Treppenhäuser und schmalen Einfahrten." },
        { name: "Gerresheim", text: "Familienfreundlicher Stadtbezirk mit gemischter Bebauung — Umzüge aus dem Bergischen Land und dem Rhein-Erft-Kreis führen regelmäßig nach Gerresheim." },
      ]}
      beispiel={{
        stadtteil: "Pempelfort",
        objektTyp: "2-Zimmer-Altbauwohnung",
        etage: "2. OG mit Aufzug",
        flaeche: "ca. 60 m²",
        dauer: "1 Tag",
        team: "3 Mitarbeiter",
        preis: "900 €",
        leistungen: [
          "Vollständiger Umzug inkl. Ein- und Auspacken",
          "Halteverbotszone beantragt",
          "Möbelmontage am neuen Standort",
          "Transport ab Bergheim (ca. 45 km)",
          "Besenreine Übergabe der alten Wohnung",
        ],
        kundenzitat: "Professionell und pünktlich — sogar die Haltezone war schon aufgestellt als wir ankamen. Klare Empfehlung!",
        kundenName: "Julia H.",
      }}
      trustStats={{ umzuege: "120+", reaktionszeit: "24–48h", erfahrung: "seit 2018", kundenzitat: "Umzug von Düsseldorf ins Rhein-Erft-Kreis — reibungslos, pünktlich, alles heil. Sehr empfohlen!", kundenName: "Rainer K." }}
    />
  );
}
