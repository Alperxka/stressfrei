import MovingLocationPage from "@/components/moving-location-page";

export default function UmzugAachenPage() {
  return (
    <MovingLocationPage
      cityName="Aachen"
      slug="aachen"
      description="Umzugsunternehmen für Aachen — Privatumzüge, Seniorenumzüge und Büroumzüge aus dem Rhein-Erft-Kreis. Faire Festpreise, erfahrenes Team, stressfrei."
      metaDescription="Umzugsunternehmen Aachen ✓ Privatumzug ✓ Seniorenumzug ✓ Büroumzug ✓ Faire Festpreise ✓ 5.0 Sterne Google ✓ Jetzt kostenlos anfragen ☎ 02271 / 5880940"
      introText="Von unserem Standort in Bergheim ist Aachen über die A4 in etwa 55–70 Minuten erreichbar. In alle Aachener Stadtteile — von der Innenstadt über Burtscheid bis Laurensberg — führen wir Privatumzüge, Seniorenumzüge und Büroumzüge zu fairen Festpreisen durch. Besonders häufig: Umzüge von Studenten der RWTH Aachen aus dem Rhein-Erft-Kreis sowie Familienumzüge in die Region Aachen/Euregio."
      localInfo="Aachen ist eine Universitätsstadt mit ca. 260.000 Einwohnern im westlichen Zipfel Deutschlands, an der Grenze zu Belgien und den Niederlanden. Die RWTH Aachen sorgt für eine große Studierendenpopulation und damit für viele Umzüge. Die Altstadt mit engen Gassen und die neueren Stadtrandgebiete in Brand und Laurensberg stellen unterschiedliche Anforderungen — wir sind auf beide vorbereitet."
      plz="52062–52080"
      einwohner="ca. 260.000"
      kreis="Städteregion Aachen"
      highlights={[
        "Erreichbar über A4 (ca. 60 Min. ab Bergheim)",
        "Alle Aachener Stadtteile — Burtscheid, Laurensberg, Brand",
        "Erfahrung mit Studentenumzügen und RWTH-nahen Vierteln",
        "Halteverbotszone auf Wunsch selbst beantragt",
        "Möbelmontage und Einpackservice möglich",
        "Vollständig versicherter Transport",
      ]}
      faqs={[
        {
          question: "Was kostet ein Umzug von Bergheim nach Aachen?",
          answer: "Ein Umzug von Bergheim nach Aachen (ca. 65–75 km) kostet für eine 2-Zimmer-Wohnung in der Regel zwischen 850–1.400 €. Die Distanz und der Leistungsumfang bestimmen den Preis. Wir erstellen ein kostenloses Festpreisangebot nach kostenloser Besichtigung.",
        },
        {
          question: "Führen Sie Studentenumzüge nach Aachen durch?",
          answer: "Ja, Studentenumzüge nach Aachen (RWTH und FH Aachen) führen wir regelmäßig durch. Kleine Wohnungen, WG-Zimmer und möblierte Apartments — wir haben das passende Fahrzeug und Angebot für jeden Umfang.",
        },
        {
          question: "Bieten Sie Umzüge innerhalb von Aachen an?",
          answer: "Ja, auch innerstädtische Umzüge innerhalb Aachens führen wir durch — von Burtscheid nach Laurensberg oder von der Innenstadt nach Brand. Kurzstrecken sind oft günstiger als erwartet.",
        },
        {
          question: "Können Sie eine Halteverbotszone in Aachen beantragen?",
          answer: "Ja, wir beantragen die Halteverbotszone beim Ordnungsamt Aachen auf Wunsch für Sie (Vorlaufzeit ca. 2 Wochen). Wir kümmern uns um Antrag, Schilder und Rückgabe.",
        },
        {
          question: "Wie weit im Voraus sollte ich den Umzug nach Aachen planen?",
          answer: "Mindestens 2–3 Wochen im Voraus, damit wir alle Details — inkl. Haltezone — rechtzeitig planen können. Bei Büroumzügen empfehlen wir 4–6 Wochen Vorlauf.",
        },
        {
          question: "Bieten Sie Seniorenumzüge nach Aachen an?",
          answer: "Ja, wir führen Seniorenumzüge mit besonderer Sorgfalt durch — z.B. aus dem Rhein-Erft-Kreis in ein Aachener Seniorenheim oder eine barrierefreie Wohnung. Auf Wunsch übernehmen wir auch die Haushaltsauflösung am alten Wohnort.",
        },
      ]}
      einzugsgebiete={[
        { name: "Bergheim", slug: "bergheim", type: "umzug" },
        { name: "Kerpen", slug: "kerpen", type: "umzug" },
        { name: "Frechen", slug: "frechen", type: "umzug" },
        { name: "Hürth", slug: "huerth", type: "umzug" },
        { name: "Erftstadt", slug: "erftstadt", type: "umzug" },
        { name: "Bergheim", slug: "bergheim", type: "entruempelung" },
        { name: "Kerpen", slug: "kerpen", type: "entruempelung" },
        { name: "Frechen", slug: "frechen", type: "entruempelung" },
        { name: "Hürth", slug: "huerth", type: "entruempelung" },
        { name: "Erftstadt", slug: "erftstadt", type: "entruempelung" },
      ]}
      stadtteile={[
        "Innenstadt",
        "Burtscheid",
        "Laurensberg",
        "Brand",
        "Richterich",
        "Eilendorf",
        "Haaren",
        "Kornelimünster",
        "Aachen-Mitte",
        "Forst",
        "Rothe Erde",
        "Verlautenheide",
      ]}
      stadtteileDetail={[
        { name: "Burtscheid", text: "Historischer Kurort südlich der Altstadt mit Gründerzeitbauten — Umzüge aus dem Rhein-Erft-Kreis führen häufig nach Burtscheid; ruhige Wohnlage mit guter Infrastruktur." },
        { name: "Laurensberg", text: "Beliebtes Wohngebiet im Westen Aachens nahe der belgischen Grenze — viele Familien und Pendler; gut erreichbar über A4; häufig nachgefragt für Familienumzüge." },
        { name: "Brand", text: "Modernes Einfamilienhausgebiet im Süden Aachens — viele Neubaufamilien ziehen hierher; große Haushalte und Garagen erfordern erfahrene Teams." },
        { name: "Eilendorf", text: "Wohngebiet im Osten Aachens mit gemischter Bebauung — Umzüge aus dem Bergischen Land und dem Rhein-Erft-Kreis führen regelmäßig nach Eilendorf." },
        { name: "Richterich", text: "Grenznaher Ortsteil mit ruhiger Wohnlage — Familienumzüge, Seniorenumzüge und Haushaltsauflösungen werden hier regelmäßig von uns durchgeführt." },
        { name: "Haaren", text: "Nördlicher Stadtteil mit Wohnhäusern und Gewerbeflächen — Büroumzüge und Privatumzüge aus dem Rhein-Erft-Kreis nach Haaren sind typische Aufträge." },
      ]}
      beispiel={{
        stadtteil: "Burtscheid",
        objektTyp: "3-Zimmer-Wohnung",
        etage: "2. OG mit Aufzug",
        flaeche: "ca. 75 m²",
        dauer: "1 Tag",
        team: "3 Mitarbeiter",
        preis: "1.150 €",
        leistungen: [
          "Vollständiger Umzug inkl. Möbelmontage",
          "Transport ab Kerpen (ca. 65 km)",
          "Polsterdecken und Spezialverpackung",
          "Aufbau der Möbel am neuen Standort",
          "Halteverbotszone beantragt und aufgestellt",
        ],
        kundenzitat: "Alles hat perfekt geklappt — trotz der langen Strecke pünktlich und ohne Schäden. Sehr professionelles Team!",
        kundenName: "Sandra L.",
      }}
      trustStats={{ umzuege: "90+", reaktionszeit: "24–48h", erfahrung: "seit 2018", kundenzitat: "Fernumzug Aachen–Bergheim perfekt geplant und ausgeführt. Kein einziger Schaden. Vielen Dank!", kundenName: "Marco V." }}
    />
  );
}
