export interface StadtteilData {
  name: string;
  parentCity: string;
  parentSlug: string;
  plz: string;
  population?: string;
  intro: string;
  localInfo: string;
  character: string;
  highlights: string[];
  nearbyAreas: { name: string; slug: string }[];
  faqs: { question: string; answer: string }[];
  metaDescription: string;
}

export const stadtteile: Record<string, StadtteilData> = {

  /* ─────────────────────────────────────────
     BERGHEIM
  ───────────────────────────────────────── */
  "quadrath-ichendorf": {
    name: "Quadrath-Ichendorf",
    parentCity: "Bergheim",
    parentSlug: "bergheim",
    plz: "50127",
    population: "ca. 14.000",
    character: "Ehemaliges Bergarbeiterquartier mit großem Siedlungsbestand aus den 1950er bis 1970er Jahren — größter Stadtteil Bergheims",
    intro: "Quadrath-Ichendorf ist mit rund 14.000 Einwohnern der bevölkerungsreichste Stadtteil von Bergheim. Geprägt durch die Bergbauvergangenheit des Rheinischen Reviers besteht ein Großteil des Wohnbestands aus Bergmannssiedlungen der Nachkriegszeit — solide Häuser mit gefüllten Kellern, ausgebauten Dachböden und geräumigen Garagen, die nach Jahrzehnten oft einer professionellen Entrümpelung bedürfen. Die Kombination aus Generationenwechsel, Erbschaften und Umzügen ins Seniorenheim macht Quadrath-Ichendorf zu einem unserer aktivsten Einsatzgebiete im Rhein-Erft-Kreis. Unser Team ist hier regelmäßig im Einsatz und kennt die lokalen Gegebenheiten bestens.",
    localInfo: "Von unserem Bergheimer Hauptsitz erreichen wir Quadrath-Ichendorf in unter 10 Minuten. Ob Reihenhaussiedlung rund um die Industriestraße, Mehrfamilienhäuser im Bereich der Bergheimer Straße oder ältere Bergmannshäuser mit großen Grundstücken — wir holen Ihren Sperrmüll, Schrott und Hausrat schnell und zuverlässig ab. Verwertbare Möbel und Metalle rechnen wir direkt auf den Preis an.",
    highlights: [
      "Anfahrt ab Bergheim-Hauptsitz in unter 10 Minuten",
      "Spezialisiert auf Bergmannshäuser und Nachkriegssiedlungen",
      "Haushaltsauflösungen nach Todesfall, Erbschaft oder Heimeinzug",
      "Festpreis — keine versteckten Kosten",
      "Besenreine Übergabe inklusive",
      "Wertanrechnung von Möbeln, Metallen und Elektrogeräten",
    ],
    nearbyAreas: [
      { name: "Bergheim", slug: "bergheim" },
      { name: "Glesch", slug: "glesch" },
      { name: "Paffendorf", slug: "paffendorf" },
      { name: "Niederaussem", slug: "niederaussem" },
    ],
    faqs: [
      {
        question: "Wie schnell kommen Sie nach Quadrath-Ichendorf?",
        answer: "Da wir in Bergheim ansässig sind, erreichen wir Quadrath-Ichendorf in der Regel innerhalb von 10–15 Minuten. Oft können wir noch am gleichen oder am nächsten Werktag einen Termin anbieten. In dringenden Fällen — z. B. vor einer Wohnungsübergabe — reagieren wir besonders schnell.",
      },
      {
        question: "Räumen Sie auch alte Bergarbeiterhäuser komplett aus?",
        answer: "Ja, das ist eine unserer Spezialitäten in Quadrath-Ichendorf. Keller, Dachboden, Garage und alle Wohnräume — wir übernehmen die komplette Räumung und hinterlassen das Objekt besenrein, bereit für Übergabe oder Verkauf.",
      },
      {
        question: "Was kostet eine Entrümpelung in Quadrath-Ichendorf?",
        answer: "Der Preis richtet sich nach Volumen und Art der zu entsorgenden Gegenstände. Eine Kellerentrümpelung beginnt ab ca. 150 €, eine 3-Zimmer-Wohnung ab ca. 400 €, ein komplettes Einfamilienhaus ab ca. 800 €. Nach Fotos oder einer kurzen Besichtigung erhalten Sie einen verbindlichen Festpreis — kostenlos und unverbindlich.",
      },
      {
        question: "Führen Sie in Quadrath-Ichendorf auch Haushaltsauflösungen nach einem Todesfall durch?",
        answer: "Ja, Haushaltsauflösungen nach einem Todesfall oder Heimeinzug sind eine unserer Kernleistungen. Wir arbeiten diskret und respektvoll, sortieren Wertvolles aus und rechnen es auf den Preis an. Den Rest entsorgen wir fachgerecht.",
      },
      {
        question: "Kaufen Sie in Quadrath-Ichendorf auch Schrott und Altmetall an?",
        answer: "Ja, wir kaufen Altmetall, Kupfer, Messing, Aluminium und Eisen direkt vor Ort an. Bei Bergmannshäusern mit alten Werkzeugbeständen oder Metallteilen kann das den Preis erheblich senken. Der Ankaufspreis richtet sich nach dem tagesaktuellen Marktpreis.",
      },
      {
        question: "Können Sie auch Keller und Dachböden separat entrümpeln?",
        answer: "Ja, wir bieten auch Teilentrümpelungen an — z. B. nur den Keller, nur die Garage oder nur den Dachboden. Das Angebot richtet sich nach dem tatsächlichen Aufwand und wird nach einer kurzen Besichtigung oder per Fotos ermittelt.",
      },
      {
        question: "Sind die Entsorgungskosten im Preis enthalten?",
        answer: "Ja, alle Deponiegebühren, Transportkosten und die fachgerechte Entsorgung sind in unserem Festpreis enthalten. Es gibt keine versteckten Nachberechnungen — was im Angebot steht, zahlen Sie.",
      },
      {
        question: "Wie beantrage ich ein Angebot für Quadrath-Ichendorf?",
        answer: "Am einfachsten rufen Sie uns an unter 02271 / 5880940 oder schicken uns Fotos der zu entrümpelnden Bereiche per WhatsApp. Wir erstellen Ihnen noch am selben Tag ein kostenfreies Festpreisangebot.",
      },
    ],
    metaDescription: "Entrümpelung Quadrath-Ichendorf ✓ Bergheim ✓ Bergmannshäuser ✓ Haushaltsauflösung ✓ Festpreis ✓ Besenrein ☎ 02271 / 5880940",
  },

  "niederaussem": {
    name: "Niederaussem",
    parentCity: "Bergheim",
    parentSlug: "bergheim",
    plz: "50129",
    population: "ca. 5.500",
    character: "Bergarbeitersiedlung mit Altbaubestand der 1950er und 1960er Jahre, geprägt von der Braunkohle-Industrie und dem Kraftwerk Niederaussem",
    intro: "Niederaussem ist ein von der Braunkohlen-Industrie geprägter Stadtteil Bergheims, weithin bekannt durch das Kraftwerk Niederaussem mit seinen markanten Kühltürmen. Die charakteristischen Bergmannshäuser der 1950er und 1960er Jahre mit ausgedehnten Kellern und weitläufigen Grundstücken machen professionelle Entrümpelungen hier zu einem häufigen Bedarf — besonders bei Nachlass, Erbschaft und Haushaltsauflösungen aus Altersgründen. Unser Team aus Bergheim ist mit den örtlichen Gegebenheiten bestens vertraut und regelmäßig in Niederaussem im Einsatz.",
    localInfo: "Von unserem Bergheimer Hauptsitz erreichen wir Niederaussem in wenigen Minuten. Viele unserer Aufträge betreffen vollständige Haushaltsauflösungen nach einem Todesfall oder einem Umzug ins Seniorenheim. Wir arbeiten diskret, schnell und respektvoll — und hinterlassen das Objekt besenrein für Übergabe oder Verkauf. Wertgegenstände rechnen wir direkt auf den Preis an.",
    highlights: [
      "Erfahrung mit Bergmannshäusern und großen Kellern",
      "Haushaltsauflösung nach Todesfall, Erbschaft oder Heimeinzug",
      "Kurze Anfahrtszeit vom Bergheimer Hauptsitz",
      "Festpreisangebot nach Foto oder Besichtigung",
      "Komplette Räumung inkl. Keller, Dachboden, Garage",
      "Fachgerechte Entsorgung und Wertanrechnung",
    ],
    nearbyAreas: [
      { name: "Bergheim", slug: "bergheim" },
      { name: "Quadrath-Ichendorf", slug: "quadrath-ichendorf" },
      { name: "Oberaussem", slug: "oberaussem" },
      { name: "Elsdorf", slug: "elsdorf" },
    ],
    faqs: [
      {
        question: "Können Sie eine Haushaltsauflösung in Niederaussem kurzfristig durchführen?",
        answer: "Ja, kurzfristige Termine sind möglich. Kontaktieren Sie uns telefonisch unter 02271 / 5880940 oder per WhatsApp — in dringenden Fällen sind wir oft noch am gleichen Tag vor Ort.",
      },
      {
        question: "Was passiert mit dem Hausrat und den Möbeln?",
        answer: "Brauchbare Gegenstände — gut erhaltene Möbel, funktionierende Elektrogeräte, Werkzeug — werden separat sortiert und auf den Preis angerechnet. Nicht mehr verwertbare Materialien entsorgen wir fachgerecht über zertifizierte Betriebe.",
      },
      {
        question: "Was kostet eine Entrümpelung in Niederaussem?",
        answer: "Der Preis hängt von Umfang und Art der zu entsorgenden Gegenstände ab. Ein Keller beginnt ab ca. 150 €, ein Einfamilienhaus ab ca. 800 €. Wir erstellen Ihnen nach Fotos oder einer kurzen Besichtigung ein verbindliches Festpreisangebot — kostenlos und unverbindlich.",
      },
      {
        question: "Räumen Sie in Niederaussem auch komplette Bergmannshäuser aus?",
        answer: "Ja, das gehört zu unseren häufigsten Aufträgen in der Region. Wir übernehmen sämtliche Räume — Keller, Dachboden, Garage und alle Wohnräume — und hinterlassen das Haus besenrein.",
      },
      {
        question: "Kaufen Sie in Niederaussem auch Schrott und Altmetall an?",
        answer: "Ja, wir kaufen Altmetall, Kupfer, Messing, Eisen und Aluminium direkt vor Ort an. Bei Bergmannshäusern mit alten Werkzeug- und Metallbeständen kann das den Entrümpelungspreis erheblich senken.",
      },
      {
        question: "Wie diskret arbeiten Sie bei Nachlassentrümpelungen?",
        answer: "Sehr diskret. Wir respektieren die besondere Situation bei Todesfall und Erbschaft. Unser Team arbeitet ruhig, sorgfältig und ohne unnötige Außenwirkung. Auf Wunsch können wir auch außerhalb der regulären Arbeitszeiten tätig werden.",
      },
      {
        question: "Sind alle Entsorgungskosten im Festpreis enthalten?",
        answer: "Ja, alle Kosten — Transport, Deponiegebühren, Entsorgung — sind im Festpreis enthalten. Es gibt keine versteckten Nachberechnungen.",
      },
      {
        question: "Wie beantrage ich ein Angebot für Niederaussem?",
        answer: "Rufen Sie uns an unter 02271 / 5880940 oder senden Sie uns Fotos der zu entrümpelnden Bereiche per WhatsApp. Wir melden uns in der Regel noch am selben Tag mit einem Festpreis.",
      },
    ],
    metaDescription: "Entrümpelung Niederaussem ✓ Bergheim ✓ Haushaltsauflösung ✓ Bergmannshäuser ✓ Festpreis ✓ Besenrein ✓ Diskret ☎ 02271 / 5880940",
  },

  "glesch": {
    name: "Glesch",
    parentCity: "Bergheim",
    parentSlug: "bergheim",
    plz: "50126",
    character: "Ländlich geprägtes Dorf mit Einfamilienhäusern und landwirtschaftlichen Anwesen",
    intro: "Glesch ist ein beschauliches Dorf am westlichen Rand von Bergheim mit einem hohen Anteil an Einfamilienhäusern, alten Bauernhöfen und ruhigen Wohnstraßen. Besonders auf älteren landwirtschaftlichen Anwesen und in großen Einfamilienhäusern mit Scheune, Stall oder Schuppen benötigen Eigentümer oft eine professionelle Unterstützung beim Ausräumen. Wir kennen diese speziellen Anforderungen sehr gut.",
    localInfo: "Wir entrümpeln in Glesch regelmäßig Scheunen, Garagen, Schuppen und Keller — oft im Zuge einer Immobilienübergabe oder vor dem Verkauf des Familienhauses. Durch die kurze Distanz zu unserem Bergheimer Standort sind wir schnell vor Ort.",
    highlights: [
      "Erfahrung mit landwirtschaftlichen Anwesen und Scheunen",
      "Komplette Grundstücksreinigung möglich",
      "Schnelle Anfahrt aus Bergheim",
      "Schrott- und Metallankauf direkt vor Ort",
      "Festpreis — transparent und fair",
      "Besenreine Übergabe inklusive",
    ],
    nearbyAreas: [
      { name: "Bergheim", slug: "bergheim" },
      { name: "Quadrath-Ichendorf", slug: "quadrath-ichendorf" },
      { name: "Paffendorf", slug: "paffendorf" },
      { name: "Elsdorf", slug: "elsdorf" },
    ],
    faqs: [
      { question: "Räumen Sie auch Scheunen und Stallgebäude in Glesch aus?", answer: "Ja, Scheunen, Stallgebäude, Geräteschuppen und Garagen gehören zu unseren Standardaufträgen. Wir bringen ausreichend Manpower und Fahrzeuge mit, um auch größere Mengen zügig abzuarbeiten." },
      { question: "Können Sie auch Altmetall und Schrott von Bauernhöfen abnehmen?", answer: "Selbstverständlich. Im Rahmen unseres Schrottankaufs nehmen wir Altmetall, Eisenschrott, Maschinenteile und ähnliches direkt mit und rechnen den Wert auf Ihre Entrümpelung an." },
    ],
    metaDescription: "Entrümpelung Glesch ✓ Bergheim ✓ Scheunen & Einfamilienhäuser ✓ Festpreis ✓ Schrottankauf ✓ Schnell & zuverlässig ☎ 02271 / 5880940",
  },

  "paffendorf": {
    name: "Paffendorf",
    parentCity: "Bergheim",
    parentSlug: "bergheim",
    plz: "50126",
    character: "Dorf mit historischem Kern, bekannt durch Schloss Paffendorf und Weinbau-Tradition, derzeit im Wandel durch Tagebau-Rückzug",
    intro: "Paffendorf ist ein geschichtsträchtiger Stadtteil Bergheims mit dem bekannten Schloss Paffendorf und einer langen Weinbau-Tradition im Rheinischen Revier. Der Ortsteil befindet sich in unmittelbarer Nähe der Tagebaulegende Hambach und hat in den letzten Jahrzehnten teils erhebliche strukturelle Veränderungen erfahren. Haushaltsauflösungen und Objekträumungen im Zuge von Umzügen oder Besitzerwechseln sind in Paffendorf ein häufiges Thema.",
    localInfo: "Wir arbeiten in Paffendorf sowohl für Privateigentümer als auch für Immobilienverwaltungen, die Objekte besenrein übergeben müssen. Unser Team ist diskret, pünktlich und mit einem Festpreis-Angebot transparent.",
    highlights: [
      "Erfahrung mit historischen und älteren Wohnobjekten",
      "Objekträumung zur Immobilienweitergabe",
      "Schnelle Terminfindung auch kurzfristig",
      "Wertanrechnung bei verwertbaren Gegenständen",
      "Besenreine Übergabe garantiert",
      "Direkte Anfahrt vom Bergheimer Hauptsitz",
    ],
    nearbyAreas: [
      { name: "Bergheim", slug: "bergheim" },
      { name: "Glesch", slug: "glesch" },
      { name: "Quadrath-Ichendorf", slug: "quadrath-ichendorf" },
      { name: "Bedburg", slug: "bedburg" },
    ],
    faqs: [
      { question: "Bieten Sie Entrümpelungen für Immobilienverwaltungen in Paffendorf an?", answer: "Ja, wir arbeiten regelmäßig mit Hausverwaltungen und Maklern zusammen. Wir räumen das Objekt komplett aus, hinterlassen es besenrein und stellen auf Wunsch eine Bestätigung über die ordnungsgemäße Entsorgung aus." },
    ],
    metaDescription: "Entrümpelung Paffendorf ✓ Bergheim ✓ Festpreis ✓ Besenrein ✓ Haushaltsauflösung ✓ Schnell & diskret ☎ 02271 / 5880940",
  },

  "glessen": {
    name: "Glessen",
    parentCity: "Bergheim",
    parentSlug: "bergheim",
    plz: "50129",
    character: "Kleines Dorf östlich von Bergheim mit ruhiger Wohnlage und Einfamilienhäusern",
    intro: "Glessen liegt östlich des Bergheimer Stadtzentrums und ist geprägt durch Einfamilienhäuser und eine ruhige, dörfliche Atmosphäre. Entrümpelungen betreffen hier vor allem freistehende Häuser mit Keller, Garage und Garten — oft im Zuge eines Generationswechsels oder vor dem Verkauf der Immobilie. Wir sind mit kurzer Anfahrtszeit schnell vor Ort.",
    localInfo: "Viele Aufträge in Glessen umfassen Garten- und Kellerräumungen oder die vollständige Entrümpelung eines älteren Hauses nach einem Erbfall. Wir hinterlassen alles besenrein und bieten auf Wunsch auch Schrottankauf vor Ort an.",
    highlights: [
      "Keller, Dachboden, Garage und Garten in einem Einsatz",
      "Kurze Anfahrtszeit aus Bergheim",
      "Festpreis nach Besichtigung oder Fotos",
      "Schrottankauf direkt vor Ort",
      "Besenreine Übergabe garantiert",
      "Umweltgerechte Entsorgung",
    ],
    nearbyAreas: [
      { name: "Bergheim", slug: "bergheim" },
      { name: "Quadrath-Ichendorf", slug: "quadrath-ichendorf" },
      { name: "Niederaussem", slug: "niederaussem" },
      { name: "Kerpen", slug: "kerpen" },
    ],
    faqs: [
      { question: "Können Sie die Entrümpelung in Glessen an einem Wochenende durchführen?", answer: "Ja, nach Absprache führen wir Entrümpelungen auch samstags durch. Kontaktieren Sie uns einfach — wir finden gemeinsam den passenden Termin." },
    ],
    metaDescription: "Entrümpelung Glessen ✓ Bergheim ✓ Keller & Garage ✓ Festpreis ✓ Schrottankauf ✓ Besenrein ☎ 02271 / 5880940",
  },

  "oberaussem": {
    name: "Oberaussem",
    parentCity: "Bergheim",
    parentSlug: "bergheim",
    plz: "50129",
    character: "Industrie- und Wohngebiet im Wandel, mit älterem Gebäudebestand der Bergbau-Ära",
    intro: "Oberaussem grenzt direkt an Niederaussem und ist ebenfalls durch die Bergbau-Geschichte des Rheinischen Reviers geprägt. Viele Häuser aus den 1950er bis 1970er Jahren verfügen über umfangreiche Kellerräume und Nebengebäude, die nach Jahrzehnten der Nutzung professionell entrümpelt werden müssen. Als Bergheimer Unternehmen sind wir in Oberaussem schnell und zuverlässig vor Ort.",
    localInfo: "Haushaltsauflösungen und Nachlassräumungen sind in Oberaussem besonders häufig, da viele Bewohner der Bergbaugeneration das Seniorenalter erreicht haben. Wir erledigen diese Aufgaben diskret, respektvoll und zu fairen Festpreisen.",
    highlights: [
      "Diskretion bei Nachlassräumungen",
      "Erfahrung mit Altbau-Kellern und Bergmannshäusern",
      "Schnelle Anfahrt aus Bergheim",
      "Festpreis nach Foto oder Vor-Ort-Besichtigung",
      "Komplette Räumung aller Etagen und Nebengebäude",
      "Fachgerechte Entsorgung aller Materialien",
    ],
    nearbyAreas: [
      { name: "Niederaussem", slug: "niederaussem" },
      { name: "Bergheim", slug: "bergheim" },
      { name: "Elsdorf", slug: "elsdorf" },
      { name: "Quadrath-Ichendorf", slug: "quadrath-ichendorf" },
    ],
    faqs: [
      { question: "Wie läuft eine Nachlassräumung in Oberaussem ab?", answer: "Wir beginnen mit einer kostenlosen Besichtigung oder einer Preisschätzung anhand von Fotos. Danach erhalten Sie ein verbindliches Festpreisangebot. Am Ausführungstag räumen wir alle vereinbarten Bereiche komplett aus und übergeben besenrein." },
    ],
    metaDescription: "Entrümpelung Oberaussem ✓ Bergheim ✓ Nachlassräumung ✓ Festpreis ✓ Besenrein ✓ Diskret & schnell ☎ 02271 / 5880940",
  },

  "zieverich": {
    name: "Zieverich",
    parentCity: "Bergheim",
    parentSlug: "bergheim",
    plz: "50126",
    character: "Dörflicher Ortsteil Bergheims mit ruhiger Wohnlage westlich des Stadtzentrums",
    intro: "Zieverich ist ein kleines, ruhiges Dorf westlich von Bergheim mit überwiegend Einfamilienhäusern und kleinen Mehrfamilienhäusern. Entrümpelungen betreffen hier häufig Keller, Gartenhäuser und Garagen älterer Immobilien — oft vor dem Verkauf oder nach einem Umzug. Wir bieten schnelle Terminvergabe und transparente Festpreise.",
    localInfo: "Als lokales Bergheimer Unternehmen sind wir in Zieverich innerhalb von Minuten vor Ort und kennen die typischen Herausforderungen in diesem Ortsteil. Auf Wunsch bieten wir auch kurzfristige Terminvergabe an.",
    highlights: [
      "Kurze Anfahrtszeit aus Bergheim",
      "Keller-, Garagen- und Gartenhausentrümpelung",
      "Festpreis ohne versteckte Kosten",
      "Besenreine Übergabe",
      "Schrottankauf auf Anfrage",
      "Umweltgerechte Entsorgung",
    ],
    nearbyAreas: [
      { name: "Bergheim", slug: "bergheim" },
      { name: "Paffendorf", slug: "paffendorf" },
      { name: "Glesch", slug: "glesch" },
      { name: "Bedburg", slug: "bedburg" },
    ],
    faqs: [
      { question: "Räumen Sie in Zieverich auch einzelne Zimmer oder nur ganze Häuser?", answer: "Wir räumen alles — von der einzelnen Garage bis zum kompletten Haus. Auch die Entrümpelung einer einzelnen Kammer oder eines Kellers ist für uns kein Problem." },
    ],
    metaDescription: "Entrümpelung Zieverich ✓ Bergheim ✓ Keller & Garage ✓ Festpreis ✓ Besenrein ✓ Schnell vor Ort ☎ 02271 / 5880940",
  },

  "thorr": {
    name: "Thorr",
    parentCity: "Bergheim",
    parentSlug: "bergheim",
    plz: "50126",
    character: "Historisches Dorf nahe dem ehemaligen Tagebau Hambach, mit altem Ortskern",
    intro: "Thorr ist eines der westlichsten Dörfer Bergheims, historisch gewachsen und mit einem alten Ortskern. In der Nähe des ehemaligen Tagebaus Hambach hat der Strukturwandel des Rheinischen Reviers auch Thorr verändert. Haushaltsauflösungen und Kellerentrümpelungen sind hier ein verbreiteter Bedarf — wir kommen schnell und mit einem transparenten Angebot.",
    localInfo: "Wir führen in Thorr Entrümpelungen von Einfamilienhäusern, Scheunen und Nebengebäuden durch. Unser Bergheimer Standort ermöglicht kurze Reaktionszeiten und faire Konditionen.",
    highlights: [
      "Erfahrung mit alten Ortskern-Gebäuden",
      "Schnelle Anfahrt aus Bergheim",
      "Haushaltsauflösung und Nachlassräumung",
      "Festpreis nach Besichtigung",
      "Besenreine Übergabe",
      "Komplette Entsorgung aller Materialien",
    ],
    nearbyAreas: [
      { name: "Bergheim", slug: "bergheim" },
      { name: "Glesch", slug: "glesch" },
      { name: "Paffendorf", slug: "paffendorf" },
      { name: "Elsdorf", slug: "elsdorf" },
    ],
    faqs: [
      { question: "Kommen Sie auch für kleine Entrümpelungen nach Thorr?", answer: "Ja, auch Kleinaufträge wie eine Garage oder ein Keller sind für uns kein Problem. Nennen Sie uns kurz, was geräumt werden soll — wir machen ein faires Angebot." },
    ],
    metaDescription: "Entrümpelung Thorr ✓ Bergheim ✓ Festpreis ✓ Besenrein ✓ Keller & Haus ✓ Schnell & zuverlässig ☎ 02271 / 5880940",
  },

  /* ─────────────────────────────────────────
     KERPEN
  ───────────────────────────────────────── */
  "sindorf": {
    name: "Sindorf",
    parentCity: "Kerpen",
    parentSlug: "kerpen",
    plz: "50170",
    population: "ca. 15.000",
    character: "Größter Stadtteil Kerpens mit dichter Wohnbebauung, viele Mehrfamilienhäuser und Neubauten der 1970er bis 1990er Jahre",
    intro: "Sindorf ist mit rund 15.000 Einwohnern der bevölkerungsreichste Stadtteil der Stadt Kerpen und ein gefragtes Wohngebiet mit guter Infrastruktur. Das Stadtbild wird geprägt durch Mehrfamilienhäuser der 1970er bis 1990er Jahre sowie neuere Wohnquartiere. Wir entrümpeln in Sindorf regelmäßig Wohnungen, Keller und Dachböden — schnell, professionell und zu fairen Festpreisen.",
    localInfo: "Besonders in den Mehrfamilienhäusern rund um das Sindorfer Ortszentrum und an der Bonnstraße führen wir häufig Wohnungsentrümpelungen und Haushaltsauflösungen durch. Unser Team ist diskret und hinterlässt die Wohnung besenrein für den nächsten Mieter oder Käufer.",
    highlights: [
      "Schnelle Erreichbarkeit über A4 und A61",
      "Erfahrung mit Mehrfamilienhäusern und Wohnungsentrümpelungen",
      "Haushaltsauflösungen für Senioren und Familien",
      "Festpreis nach kostenlosem Besichtigungstermin",
      "Besenreine Übergabe garantiert",
      "Diskrete und respektvolle Vorgehensweise",
    ],
    nearbyAreas: [
      { name: "Kerpen", slug: "kerpen" },
      { name: "Horrem", slug: "horrem" },
      { name: "Bergheim", slug: "bergheim" },
      { name: "Buir", slug: "buir" },
    ],
    faqs: [
      { question: "Bieten Sie Wohnungsentrümpelungen in Sindorf auch für Vermieter an?", answer: "Ja, wir arbeiten mit privaten Vermietern und Hausverwaltungen zusammen. Wir räumen die Wohnung komplett aus und übergeben sie besenrein — oft innerhalb eines Werktages." },
      { question: "Was kostet eine Wohnungsentrümpelung in Sindorf?", answer: "Der Preis richtet sich nach Größe der Wohnung und Menge der Gegenstände. Nach einer kurzen Beschreibung oder Fotos erhalten Sie ein verbindliches Festpreisangebot ohne Überraschungen." },
    ],
    metaDescription: "Entrümpelung Sindorf ✓ Kerpen ✓ Wohnungsentrümpelung ✓ Haushaltsauflösung ✓ Festpreis ✓ Besenrein ☎ 02271 / 5880940",
  },

  "horrem": {
    name: "Horrem",
    parentCity: "Kerpen",
    parentSlug: "kerpen",
    plz: "50169",
    population: "ca. 9.000",
    character: "Stadtteil mit ICE-Haltepunkt, guter Verkehrsanbindung und Mix aus Alt- und Neubaubestand",
    intro: "Horrem ist ein lebendiger Stadtteil Kerpens, der durch seinen ICE-Bahnhof eine exzellente Verkehrsanbindung an Köln und Aachen hat. Der Stadtteil umfasst sowohl ältere Wohngebiete aus der Vorkriegszeit als auch neuere Siedlungsgebiete. Entrümpelungen in Horrem betreffen oft komplett eingerichtete Altbauwohnungen oder Häuser, die nach dem Auszug älterer Bewohner geräumt werden müssen.",
    localInfo: "Besonders in den Straßen rund um den Bahnhof und in den älteren Wohngebieten im Ortskern führen wir regelmäßig Entrümpelungen durch. Dank unserer guten Erreichbarkeit über die A4 sind wir schnell vor Ort.",
    highlights: [
      "Erfahrung mit Altbau- und Neubauobjekten",
      "Schnelle Anfahrt über A4 Ausfahrt Kerpen/Horrem",
      "Haushaltsauflösung und Wohnungsentrümpelung",
      "Festpreis nach Fotos oder Besichtigung",
      "Besenreine Übergabe für Vermieter und Makler",
      "Diskrete Vorgehensweise bei Nachlassräumungen",
    ],
    nearbyAreas: [
      { name: "Kerpen", slug: "kerpen" },
      { name: "Sindorf", slug: "sindorf" },
      { name: "Frechen", slug: "frechen" },
      { name: "Pulheim", slug: "pulheim" },
    ],
    faqs: [
      { question: "Können Sie eine Entrümpelung in Horrem auch kurzfristig durchführen?", answer: "Ja, in dringenden Fällen sind wir oft noch am selben oder nächsten Werktag vor Ort. Rufen Sie uns an oder schreiben Sie uns per WhatsApp — wir finden schnell einen Termin." },
      { question: "Nehmen Sie auch verwertbare Möbel von der Wohnungsentrümpelung mit?", answer: "Selbstverständlich. Gut erhaltene Möbel und Haushaltsgeräte werden beim Wert angerechnet, sodass sich der Gesamtpreis für Sie reduziert." },
      { question: "Was kostet eine Entrümpelung in Horrem?", answer: "Nach einer kurzen Beschreibung per Telefon oder Fotos per WhatsApp erstellen wir ein verbindliches Festpreisangebot. Eine Kellerntrümpelung beginnt oft ab 350–600 €, eine Wohnungsentrümpelung ab ca. 900 €. Kostenlose Ersteinschätzung jederzeit möglich." },
      { question: "Räumen Sie auch Keller und Dachböden in Horrem?", answer: "Ja, Keller- und Dachbodenentrümpelungen gehören zu unserem Kerngeschäft in Horrem. Besonders in den Altbaugebieten rund um den Bahnhof sind wir regelmäßig im Einsatz." },
      { question: "Führen Sie in Horrem auch komplette Haushaltsauflösungen durch?", answer: "Ja, wir übernehmen die vollständige Haushaltsauflösung — von der Räumung aller Räume über die Wertanrechnung brauchbarer Gegenstände bis zur besenreinen Übergabe." },
      { question: "Wie kann ich in Horrem ein Angebot anfordern?", answer: "Sie können uns telefonisch unter 02271/5880940 anrufen, per WhatsApp schreiben oder das Online-Formular auf unserer Website nutzen. Fotos der zu entrümpelnden Bereiche beschleunigen die Preisfindung." },
      { question: "Bieten Sie in Horrem auch Schrottankauf an?", answer: "Ja, Altmetall, Kupfer, Messing und Elektroschrott kaufen wir direkt vor Ort an. Der Erlös wird vom Gesamtpreis abgezogen — das senkt Ihre Kosten spürbar." },
      { question: "Was passiert mit dem Sperrmüll nach der Entrümpelung in Horrem?", answer: "Wir transportieren alles ab und entsorgen es fachgerecht über zertifizierte Entsorgungsbetriebe. Wiederverwertbares wird getrennt und möglichst dem Wertstoffkreislauf zugeführt." },
    ],
    metaDescription: "Entrümpelung Horrem ✓ Kerpen ✓ Haushaltsauflösung ✓ Altbau & Neubau ✓ Festpreis ✓ Besenrein ☎ 02271 / 5880940",
  },

  "buir": {
    name: "Buir",
    parentCity: "Kerpen",
    parentSlug: "kerpen",
    plz: "50171",
    character: "Ruhiges Dorf östlich von Kerpen mit Einfamilienhauscharakter",
    intro: "Buir ist ein kleines, beschauliches Dorf im Osten der Stadt Kerpen, geprägt durch Einfamilienhäuser, Landwirtschaft und eine ruhige Wohnatmosphäre. Entrümpelungen betreffen hier überwiegend freistehende Häuser mit großen Kellern, Garagen oder Gartenhäusern. Unser Team ist schnell und unkompliziert vor Ort.",
    localInfo: "Wir übernehmen in Buir sowohl kleine Kellerentrümpelungen als auch komplette Haushaltsauflösungen. Die Nähe zu unserem Standort in Bergheim ermöglicht kurze Anfahrtszeiten und faire Preise.",
    highlights: [
      "Für Einfamilienhäuser und Hofanwesen geeignet",
      "Keller, Scheune, Garage — alles aus einer Hand",
      "Schrottankauf bei Altmetall auf dem Grundstück",
      "Festpreisangebot nach Foto oder Besichtigung",
      "Besenreine Übergabe",
      "Flexible Terminplanung",
    ],
    nearbyAreas: [
      { name: "Kerpen", slug: "kerpen" },
      { name: "Sindorf", slug: "sindorf" },
      { name: "Erftstadt", slug: "erftstadt" },
      { name: "Frechen", slug: "frechen" },
    ],
    faqs: [
      { question: "Bieten Sie auch Entrümpelungen von Gartenhäusern und Schuppen in Buir an?", answer: "Ja, Gartenhaus, Schuppen, Garage und Stall — wir räumen alle Nebengebäude auf Ihrem Grundstück aus und entsorgen den Inhalt ordnungsgemäß." },
    ],
    metaDescription: "Entrümpelung Buir ✓ Kerpen ✓ Einfamilienhaus ✓ Keller & Garage ✓ Festpreis ✓ Besenrein ☎ 02271 / 5880940",
  },

  "manheim": {
    name: "Manheim",
    parentCity: "Kerpen",
    parentSlug: "kerpen",
    plz: "50170",
    population: "ca. 2.500",
    character: "Neubausiedlung mit besonderer Geschichte — Ortsteil wurde für den Tagebau Hambach abgerissen und als Manheim-neu neu aufgebaut",
    intro: "Manheim ist ein ganz besonderer Ortsteil der Stadt Kerpen: Das ursprüngliche Dorf musste dem Braunkohletagebau Hambach weichen und wurde wenige Kilometer entfernt als Manheim-neu komplett neu errichtet. Der Gebäudebestand ist daher vergleichsweise jung — überwiegend Einfamilienhäuser und Reihenhäuser aus den 1970er und 1980er Jahren. Obwohl die Häuser jünger sind als in vielen anderen Ortschaften des Rhein-Erft-Kreises, gibt es auch hier regelmäßig Bedarf an professioneller Entrümpelung und Haushaltsauflösung: Kinder ziehen aus, ältere Bewohner wechseln ins Seniorenheim, Eigentümer bereiten den Hausverkauf vor. Unser Team ist mit den örtlichen Gegebenheiten vertraut und in Manheim schnell vor Ort.",
    localInfo: "Von unserem Standort in Bergheim erreichen wir Manheim über die L 213 in kurzer Zeit. Wir übernehmen in Manheim die komplette Entrümpelung — Keller, Garage, Dachboden, Wohnräume — sowie Haushaltsauflösungen nach Umzug, Todesfall oder Heimeinzug. Auf Wunsch rechnen wir den Wert von Möbeln, Elektrogeräten oder Metallen direkt auf Ihren Preis an. Unser Festpreisangebot erhalten Sie nach einer kostenlosen Besichtigung oder per Foto.",
    highlights: [
      "Erfahrung mit Neubausiedlungen aus den 1970er/1980er Jahren",
      "Haushaltsauflösungen nach Todesfall oder Heimeinzug",
      "Komplette Räumung: Keller, Garage, Wohnräume, Dachboden",
      "Festpreis nach Foto oder kostenloser Besichtigung",
      "Wertanrechnung für Möbel, Elektrogeräte und Metalle",
      "Besenreine Übergabe inklusive — bereit für Übergabe oder Verkauf",
    ],
    nearbyAreas: [
      { name: "Kerpen", slug: "kerpen" },
      { name: "Sindorf", slug: "sindorf" },
      { name: "Bergheim", slug: "bergheim" },
      { name: "Elsdorf", slug: "elsdorf" },
      { name: "Horrem", slug: "horrem" },
    ],
    faqs: [
      {
        question: "Was kostet eine Entrümpelung in Manheim?",
        answer: "Den genauen Preis ermitteln wir anhand von Fotos oder einer kostenlosen Besichtigung. Eine Kellerentrümpelung in Manheim beginnt typischerweise ab 150 €, eine 3-Zimmer-Wohnung ab ca. 400 €, ein Einfamilienhaus ab ca. 800 €. Danach erhalten Sie ein verbindliches Festpreisangebot — ohne versteckte Kosten.",
      },
      {
        question: "Wie schnell kommen Sie nach Manheim?",
        answer: "Von unserem Standort in Bergheim erreichen wir Manheim in der Regel in 15–20 Minuten. Bei freien Kapazitäten können wir oft noch am selben oder am nächsten Werktag einen Termin anbieten. Rufen Sie uns einfach an unter 02271 / 5880940.",
      },
      {
        question: "Räumen Sie auch ein ganzes Haus in Manheim aus?",
        answer: "Ja, komplette Hausentrümpelungen — inklusive Keller, Garage, Dachboden und aller Wohnräume — sind unser Tagesgeschäft. Wir hinterlassen das Objekt besenrein, bereit für Übergabe, Renovierung oder Verkauf.",
      },
      {
        question: "Können Sie in Manheim auch eine Haushaltsauflösung nach einem Todesfall durchführen?",
        answer: "Ja, Haushaltsauflösungen nach einem Todesfall oder einem Heimeinzug gehören zu unseren Kernleistungen. Wir arbeiten diskret, respektvoll und sorgfältig. Verwertbare Gegenstände rechnen wir auf den Preis an, nicht mehr nutzbare Materialien entsorgen wir fachgerecht.",
      },
      {
        question: "Was passiert mit den Möbeln und dem Hausrat?",
        answer: "Brauchbare Gegenstände — gut erhaltene Möbel, funktionierende Elektrogeräte, Werkzeug, Bücher, Geschirr — sortieren wir aus und rechnen ihren Wert auf Ihren Gesamtpreis an. Nicht mehr verwertbare Materialien entsorgen wir fachgerecht über zertifizierte Entsorgungsbetriebe. Metalle und Schrott werden separat aufbereitet.",
      },
      {
        question: "Kaufen Sie in Manheim auch Schrott und Altmetall an?",
        answer: "Ja, wir kaufen Altmetall, Kupfer, Messing, Aluminium und sonstigen Schrott direkt vor Ort an. Der Ankaufspreis richtet sich nach dem Tagesmarktwert. Sprechen Sie uns bei der Anfrage an — wir prüfen gerne, ob eine Wertanrechnung möglich ist.",
      },
      {
        question: "Kann ich die Entrümpelung in Manheim auch kurzfristig beauftragen?",
        answer: "Ja, kurzfristige Termine sind bei uns möglich. Besonders bei dringenden Fällen — z. B. vor einer Wohnungsübergabe oder nach einem Todesfall — reagieren wir schnell. Kontaktieren Sie uns telefonisch oder per WhatsApp, und wir finden gemeinsam eine Lösung.",
      },
      {
        question: "Sind die Entsorgungskosten im Preis enthalten?",
        answer: "Ja, alle Entsorgungskosten sind in unserem Festpreis enthalten. Es gibt keine Nachberechnung für Deponiegebühren oder Fahrtkosten. Was Sie bezahlen, steht im Angebot — fertig.",
      },
    ],
    metaDescription: "Entrümpelung Manheim ✓ Kerpen ✓ Haushaltsauflösung ✓ Neubausiedlung ✓ Festpreis ✓ Besenrein ✓ Schnell & fair ☎ 02271 / 5880940",
  },

  "tuernich": {
    name: "Türnich",
    parentCity: "Kerpen",
    parentSlug: "kerpen",
    plz: "50169",
    population: "ca. 1.200",
    character: "Dorf mit altem Gutshofcharakter und Schloss Türnich — ruhige Wohnlage mit Einfamilienhäusern, Gutshöfen und landwirtschaftlichen Anwesen",
    intro: "Türnich ist ein malerisches Dorf im Südwesten der Stadt Kerpen, bekannt durch das historische Schloss Türnich inmitten eines weitläufigen Landschaftsparks. Der Ort bietet ruhige Wohnlagen mit überwiegend älteren Einfamilienhäusern, Bauernhäusern und kleineren Gutshöfen. Ältere Gebäude bedeuten oft: vollständige Keller, ausgebaute Dachböden, Scheunen und Garagen — jahrzehntelang gesammelte Haushalte, die irgendwann entrümpelt werden wollen. Unser Team ist erfahren im Umgang mit ländlichen Anwesen und kommt schnell nach Türnich — mit fairen Festpreisen und einer besenreinen Übergabe als Standard.",
    localInfo: "Von unserem Bergheimer Standort erreichen wir Türnich über die L 163 in etwa 20 Minuten. Wir übernehmen in Türnich die Räumung von Einfamilienhäusern, Bauernhäusern, Kellern, Garagen, Scheunen und Nebengebäuden. Ob einzelner Keller oder kompletter Hof — wir bieten Ihnen ein verbindliches Festpreisangebot nach einer kurzen Besichtigung oder per Foto. Verwertbare Gegenstände und Metalle rechnen wir auf den Preis an, was gerade bei alten Höfen und Werkstätten oft einen erheblichen Unterschied machen kann.",
    highlights: [
      "Erfahrung mit Gutshöfen, Scheunen und ländlichen Anwesen",
      "Keller-, Garagen- und Scheunenentrümpelung aus einer Hand",
      "Komplette Haushaltsauflösungen — auch nach Todesfall oder Heimeinzug",
      "Festpreis nach Besichtigung oder Foto — transparent und verbindlich",
      "Wertanrechnung für Metall, Werkzeug und verwertbare Möbel",
      "Besenreine Übergabe — bereit für Verkauf oder Renovierung",
    ],
    nearbyAreas: [
      { name: "Kerpen", slug: "kerpen" },
      { name: "Sindorf", slug: "sindorf" },
      { name: "Erftstadt", slug: "erftstadt" },
      { name: "Frechen", slug: "frechen" },
      { name: "Blatzheim", slug: "blatzheim" },
    ],
    faqs: [
      {
        question: "Räumen Sie in Türnich auch landwirtschaftliche Objekte aus?",
        answer: "Ja, wir übernehmen auch die Räumung von Scheunen, Ställen, Werkstätten und anderen Nebengebäuden auf landwirtschaftlichen Anwesen in Türnich. Gerade bei alten Höfen gibt es oft viel Metallschrott, Altmaschinen oder Werkzeuge — die wir auf Wunsch direkt ankaufen und vom Preis abziehen.",
      },
      {
        question: "Was kostet eine Entrümpelung in Türnich?",
        answer: "Der Preis richtet sich nach Art und Umfang des Auftrags. Ein Keller oder eine Garage in Türnich beginnt ab ca. 150 €, ein vollständiges Einfamilienhaus ab ca. 800 €. Nach einer kurzen Besichtigung oder der Zusendung von Fotos erhalten Sie von uns ein verbindliches Festpreisangebot — ohne Überraschungen nachher.",
      },
      {
        question: "Wie schnell kommen Sie nach Türnich?",
        answer: "Von unserem Standort in Bergheim erreichen wir Türnich in etwa 20 Minuten. Bei freien Kapazitäten bieten wir oft noch am selben oder am nächsten Werktag einen Termin an. In dringenden Fällen — z. B. vor einer Wohnungsübergabe oder nach einem Todesfall — reagieren wir besonders schnell.",
      },
      {
        question: "Führen Sie in Türnich auch komplette Haushaltsauflösungen durch?",
        answer: "Ja, Haushaltsauflösungen gehören zu unseren Kernleistungen. Wir kümmern uns um den gesamten Inhalt eines Hauses — von Möbeln über Elektrogeräte bis hin zu Kleinteilen und Sperrmüll. Das Objekt übergeben wir Ihnen besenrein, bereit für Übergabe, Renovierung oder Verkauf.",
      },
      {
        question: "Können Sie in Türnich auch Senioren bei einer Haushaltsauflösung unterstützen?",
        answer: "Ja, wir helfen bei Haushaltsauflösungen im Zuge eines Umzugs ins Seniorenheim oder in eine kleinere Wohnung. Wir arbeiten diskret und respektvoll, helfen beim Aussortieren und nehmen Ihnen die gesamte schwere Arbeit ab. Sprechen Sie uns auf Ihre Situation an.",
      },
      {
        question: "Kaufen Sie in Türnich Schrott und Altmetall an?",
        answer: "Ja, wir kaufen Altmetall, Kupfer, Messing, Aluminium, Eisen und sonstigen Schrott direkt vor Ort an. Bei älteren Höfen und Werkstätten in Türnich findet sich oft Wertvolles — der Ankaufspreis richtet sich nach dem tagesaktuellen Marktpreis und wird direkt vom Entrümpelungspreis abgezogen.",
      },
      {
        question: "Ist besenreine Übergabe in Türnich inklusive?",
        answer: "Ja, bei jeder Entrümpelung in Türnich hinterlassen wir das Objekt besenrein. Das bedeutet: sämtliche Gegenstände sind entfernt, der Boden ist gefegt. Auf Wunsch bieten wir auch eine gründlichere Grundreinigung an — sprechen Sie uns an.",
      },
      {
        question: "Sind Entsorgungskosten im Preis enthalten?",
        answer: "Ja, alle Entsorgungskosten sind im Festpreis eingeschlossen. Deponiegebühren, Transportkosten und die fachgerechte Entsorgung sind bereits kalkuliert. Es gibt keine versteckten Nachberechnungen.",
      },
    ],
    metaDescription: "Entrümpelung Türnich ✓ Kerpen ✓ Gutshöfe & Scheunen ✓ Keller & Garage ✓ Festpreis ✓ Besenrein ✓ Schnell vor Ort ☎ 02271 / 5880940",
  },

  "blatzheim": {
    name: "Blatzheim",
    parentCity: "Kerpen",
    parentSlug: "kerpen",
    plz: "50169",
    character: "Kleines Dorf mit landwirtschaftlichem Charakter im Südwesten Kerpens",
    intro: "Blatzheim ist ein kleines Dorf im Südwesten der Stadt Kerpen mit landwirtschaftlichem Charakter und vielen Einfamilienhäusern. Entrümpelungen in Blatzheim umfassen oft Keller, Garagen und Scheunen älterer Anwesen — manchmal im Zuge eines Generationswechsels, manchmal vor dem Verkauf der Immobilie. Wir erledigen das schnell und sauber.",
    localInfo: "Mit unserem Fahrzeugpark und erfahrenen Teams sind wir in Blatzheim gut aufgestellt. Von der Anfahrt über die Entrümpelung bis zur besenreinen Übergabe — alles aus einer Hand.",
    highlights: [
      "Einfamilienhäuser und ländliche Anwesen",
      "Keller, Scheune, Garage — in einem Einsatz",
      "Festpreis nach Fotos oder Besichtigung",
      "Besenreine Übergabe",
      "Schrottankauf möglich",
      "Schnelle Terminvergabe",
    ],
    nearbyAreas: [
      { name: "Kerpen", slug: "kerpen" },
      { name: "Türnich", slug: "tuernich" },
      { name: "Erftstadt", slug: "erftstadt" },
      { name: "Brühl", slug: "bruehl" },
    ],
    faqs: [
      { question: "Kommen Sie auch für kleine Aufträge nach Blatzheim?", answer: "Ja, auch Kleinaufträge wie ein einzelner Keller oder eine Garage sind für uns kein Problem. Fragen Sie einfach an — wir machen Ihnen ein faires Angebot." },
    ],
    metaDescription: "Entrümpelung Blatzheim ✓ Kerpen ✓ Keller & Scheune ✓ Festpreis ✓ Besenrein ✓ Schnell & zuverlässig ☎ 02271 / 5880940",
  },

  /* ─────────────────────────────────────────
     PULHEIM
  ───────────────────────────────────────── */
  "brauweiler": {
    name: "Brauweiler",
    parentCity: "Pulheim",
    parentSlug: "pulheim",
    plz: "50259",
    population: "ca. 10.000",
    character: "Historischer Ort mit Abtei Brauweiler, bekannt als ehemaliges NS-Gefängnis, heute attraktives Wohngebiet",
    intro: "Brauweiler ist einer der bekanntesten Stadtteile Pulheims und beheimatet die historische Abtei Brauweiler — ein markantes Wahrzeichen mit wechselvoller Geschichte. Als Wohngebiet bietet Brauweiler eine Mischung aus historischem Altbaubestand und modernen Eigenheimen. Entrümpelungen umfassen hier oft ältere Häuser mit vollen Kellern und Dachböden, aber auch moderne Wohnungsentrümpelungen sind regelmäßige Aufträge.",
    localInfo: "Wir kennen die Straßen rund um die Abtei und die angrenzenden Wohngebiete gut. Durch unsere Erfahrung im gesamten Rhein-Erft-Kreis und der Nähe zu Pulheim sind wir in Brauweiler schnell und zuverlässig im Einsatz.",
    highlights: [
      "Erfahrung mit historischem Altbaubestand",
      "Wohnungs- und Hausentrümpelung",
      "Haushaltsauflösung und Nachlassräumung",
      "Festpreis nach Besichtigung oder Fotos",
      "Besenreine Übergabe garantiert",
      "Schnelle Terminvergabe im Raum Pulheim",
    ],
    nearbyAreas: [
      { name: "Pulheim", slug: "pulheim" },
      { name: "Stommeln", slug: "stommeln" },
      { name: "Frechen", slug: "frechen" },
      { name: "Kerpen", slug: "kerpen" },
    ],
    faqs: [
      { question: "Wie lange dauert eine Entrümpelung in Brauweiler?", answer: "Das hängt vom Umfang ab. Eine Wohnung oder ein Keller sind meist innerhalb eines halben bis ganzen Tages erledigt. Für Häuser planen wir in der Regel 1–2 Arbeitstage ein." },
      { question: "Können Sie auch Altbaukeller in Brauweiler räumen?", answer: "Ja, Altbaukeller mit feuchten Wänden, alten Möbeln oder Heizöltanks sind kein Problem für uns. Wir bringen das passende Equipment mit und entsorgen alles fachgerecht." },
    ],
    metaDescription: "Entrümpelung Brauweiler ✓ Pulheim ✓ Altbau & Wohnung ✓ Festpreis ✓ Besenrein ✓ Haushaltsauflösung ☎ 02271 / 5880940",
  },

  "stommeln": {
    name: "Stommeln",
    parentCity: "Pulheim",
    parentSlug: "pulheim",
    plz: "50259",
    population: "ca. 8.000",
    character: "Historisches Dorf mit mittelalterlicher Kirche und Synagoge, geprägt durch Einfamilienhäuser und Fachwerkbauten",
    intro: "Stommeln ist ein charmantes Dorf in Pulheim mit einer langen Geschichte — die historische Synagoge Stommeln zieht Besucher aus der ganzen Region an. Der Ort besteht aus alten Fachwerkgebäuden im Ortskern und neueren Einfamilienhäusern in den Randlagen. Entrümpelungen in Stommeln umfassen häufig Altbauten mit komplexen Kellersituationen und voll ausgestatteten Haushalten der älteren Generation.",
    localInfo: "Wir entrümpeln in Stommeln mit Rücksicht auf die historische Bausubstanz und die engen Straßen im Ortskern. Auf Wunsch können wir mit kleineren Fahrzeugen anrücken und trotzdem alles effizient erledigen.",
    highlights: [
      "Erfahrung mit historischem Fachwerkbestand",
      "Enge Straßen kein Problem — flexible Fahrzeuge",
      "Komplette Haushaltsauflösung und Kellersanierung",
      "Diskrete und respektvolle Vorgehensweise",
      "Festpreis nach kostenloser Besichtigung",
      "Besenreine Übergabe",
    ],
    nearbyAreas: [
      { name: "Pulheim", slug: "pulheim" },
      { name: "Brauweiler", slug: "brauweiler" },
      { name: "Sinnersdorf", slug: "sinnersdorf" },
      { name: "Frechen", slug: "frechen" },
    ],
    faqs: [
      { question: "Können Sie in Stommeln auch bei engen Einfahrten arbeiten?", answer: "Ja, wir setzen je nach Situation unterschiedliche Fahrzeuggrößen ein. Auch in engen Straßen oder ohne Parkmöglichkeit direkt vor der Tür finden wir eine Lösung." },
    ],
    metaDescription: "Entrümpelung Stommeln ✓ Pulheim ✓ Altbau & Fachwerkhaus ✓ Festpreis ✓ Besenrein ✓ Haushaltsauflösung ☎ 02271 / 5880940",
  },

  "sinnersdorf": {
    name: "Sinnersdorf",
    parentCity: "Pulheim",
    parentSlug: "pulheim",
    plz: "50259",
    character: "Kleines Dorf nördlich von Pulheim mit Einfamilienhauscharakter und ruhiger Wohnlage",
    intro: "Sinnersdorf liegt nördlich von Pulheim und ist ein ruhiger Wohnort mit einem hohen Anteil an Einfamilienhäusern und kleinen Mehrfamilienhäusern. Entrümpelungen betreffen hier häufig Keller, Garagen und Dachböden älterer Häuser — oft vor einem Umzug oder Hausverkauf. Wir sind schnell und unkompliziert vor Ort.",
    localInfo: "Als regionaler Dienstleister im Rhein-Erft-Kreis sind wir auch in Sinnersdorf gut erreichbar. Wir bieten Festpreise und besenreine Übergabe — ohne versteckte Kosten.",
    highlights: [
      "Keller, Dachboden, Garage — alles in einem Einsatz",
      "Schnelle Terminvergabe",
      "Festpreis nach Foto oder Besichtigung",
      "Besenreine Übergabe",
      "Wertanrechnung bei verwertbaren Gegenständen",
      "Fachgerechte Entsorgung",
    ],
    nearbyAreas: [
      { name: "Pulheim", slug: "pulheim" },
      { name: "Stommeln", slug: "stommeln" },
      { name: "Brauweiler", slug: "brauweiler" },
      { name: "Frechen", slug: "frechen" },
    ],
    faqs: [
      { question: "Bieten Sie in Sinnersdorf auch Wohnungsentrümpelungen für Vermieter an?", answer: "Ja, wir arbeiten mit privaten Vermietern und Hausverwaltungen zusammen. Wir räumen die Wohnung komplett aus und übergeben besenrein — meist innerhalb eines Werktages." },
    ],
    metaDescription: "Entrümpelung Sinnersdorf ✓ Pulheim ✓ Keller & Garage ✓ Festpreis ✓ Besenrein ✓ Schnell vor Ort ☎ 02271 / 5880940",
  },

  "geyen": {
    name: "Geyen",
    parentCity: "Pulheim",
    parentSlug: "pulheim",
    plz: "50259",
    character: "Kleines Dorf in Pulheim mit dörflichem Charakter und Einfamilienhäusern",
    intro: "Geyen ist ein kleines Dorf in der Gemeinde Pulheim mit einem beschaulichen Dorfkern und überwiegend Einfamilienhäusern. Für Entrümpelungen kommen wir zuverlässig nach Geyen — ob Keller, Garage oder komplette Haushaltsauflösung. Wir bieten transparente Festpreise und besenreine Übergabe.",
    localInfo: "Unser Team ist auch in den kleineren Ortsteilen des Rhein-Erft-Kreises zuverlässig im Einsatz. In Geyen sind wir über die gute Straßenanbindung schnell erreichbar.",
    highlights: [
      "Auch in kleinen Dörfern schnell vor Ort",
      "Keller, Garage, Garten — alles möglich",
      "Festpreis ohne Überraschungen",
      "Besenreine Übergabe",
      "Schrottankauf auf Anfrage",
      "Umweltgerechte Entsorgung",
    ],
    nearbyAreas: [
      { name: "Pulheim", slug: "pulheim" },
      { name: "Brauweiler", slug: "brauweiler" },
      { name: "Frechen", slug: "frechen" },
      { name: "Rommerskirchen", slug: "rommerskirchen" },
    ],
    faqs: [
      { question: "Kommen Sie auch für kleine Entrümpelungen nach Geyen?", answer: "Ja, kein Auftrag ist zu klein. Auch eine einzelne Garage oder ein Kellerabteil werden von uns gerne übernommen. Fragen Sie an und wir machen Ihnen ein faires Angebot." },
    ],
    metaDescription: "Entrümpelung Geyen ✓ Pulheim ✓ Keller & Garage ✓ Festpreis ✓ Besenrein ✓ Schnell & zuverlässig ☎ 02271 / 5880940",
  },

  /* ─────────────────────────────────────────
     FRECHEN
  ───────────────────────────────────────── */
  "koenigsdorf": {
    name: "Königsdorf",
    parentCity: "Frechen",
    parentSlug: "frechen",
    plz: "50226",
    population: "ca. 10.000",
    character: "Größter Stadtteil Frechens, geprägt durch Keramikindustrie-Geschichte, Mix aus Alt- und Neubaugebieten",
    intro: "Königsdorf ist der bevölkerungsreichste Stadtteil der Stadt Frechen und blickt auf eine lange Tradition in der Keramikherstellung zurück — die Töpferöfen aus dem 16. Jahrhundert prägten die Region maßgeblich. Heute ist Königsdorf ein gewachsenes Wohngebiet mit einem breiten Mix aus älteren Häusern und neueren Wohnquartieren. Wir entrümpeln in Königsdorf regelmäßig und kennen die örtlichen Gegebenheiten sehr gut.",
    localInfo: "In Königsdorf sind wir vor allem in den älteren Wohngebieten rund um die Alte Heerstraße und in den Mehrfamilienhäusern der 1970er Jahre tätig. Keller und Dachböden, die über Jahrzehnte mit Hausrat gefüllt wurden, räumen wir effizient und sauber aus.",
    highlights: [
      "Schnelle Erreichbarkeit über A4 Ausfahrt Frechen",
      "Erfahrung mit Altbau und Keramikerbe-Gebäuden",
      "Keller-, Dachboden- und Wohnungsentrümpelung",
      "Haushaltsauflösung für Senioren und Familien",
      "Festpreis nach Besichtigung oder Fotos",
      "Besenreine Übergabe garantiert",
    ],
    nearbyAreas: [
      { name: "Frechen", slug: "frechen" },
      { name: "Bachem", slug: "bachem" },
      { name: "Pulheim", slug: "pulheim" },
      { name: "Kerpen", slug: "kerpen" },
    ],
    faqs: [
      { question: "Was kostet eine Kellersanierung in Königsdorf?", answer: "Die Kosten hängen von der Größe des Kellers und der Menge der Gegenstände ab. In der Regel beginnen Kellerentrümpelungen ab ca. 150–300 € — nach einer Besichtigung oder Fotos erhalten Sie einen genauen Festpreis." },
      { question: "Räumen Sie in Königsdorf auch Wohnungsauflösungen für Vermieter?", answer: "Ja, wir arbeiten mit Vermietern und Hausverwaltungen zusammen. Wir räumen die Wohnung komplett aus, reinigen besenrein und stellen auf Wunsch eine Entsorgungsbestätigung aus." },
    ],
    metaDescription: "Entrümpelung Königsdorf ✓ Frechen ✓ Keller & Wohnung ✓ Festpreis ✓ Besenrein ✓ Haushaltsauflösung ☎ 02271 / 5880940",
  },

  "bachem": {
    name: "Bachem",
    parentCity: "Frechen",
    parentSlug: "frechen",
    plz: "50226",
    character: "Kleines Dorf südlich von Frechen mit ruhiger Wohnlage und Einfamilienhäusern",
    intro: "Bachem ist ein kleiner, ruhiger Ortsteil südlich von Frechen mit einem hohen Anteil an Einfamilienhäusern und einer angenehmen Wohnatmosphäre. Entrümpelungen betreffen hier überwiegend freistehende Häuser mit Keller, Garage und Gartenhaus — oft im Zuge eines Umzugs oder einer Haushaltsauflösung. Wir sind schnell und zuverlässig vor Ort.",
    localInfo: "Unser Team entrümpelt in Bachem regelmäßig Einfamilienhäuser und Garagen. Durch die gute Anbindung an die A4 und A61 sind wir aus Bergheim schnell erreichbar.",
    highlights: [
      "Einfamilienhäuser, Garagen und Gartenhäuser",
      "Schnelle Anfahrt über A4",
      "Festpreis nach Fotos oder Besichtigung",
      "Besenreine Übergabe",
      "Wertanrechnung bei Metall und Möbeln",
      "Flexible Terminfindung",
    ],
    nearbyAreas: [
      { name: "Frechen", slug: "frechen" },
      { name: "Königsdorf", slug: "koenigsdorf" },
      { name: "Hürth", slug: "huerth" },
      { name: "Kerpen", slug: "kerpen" },
    ],
    faqs: [
      { question: "Kommen Sie auch an Wochenenden nach Bachem?", answer: "Ja, samstags sind wir nach Absprache verfügbar. Fragen Sie einfach an, wir schauen gemeinsam nach einem passenden Termin." },
    ],
    metaDescription: "Entrümpelung Bachem ✓ Frechen ✓ Einfamilienhaus & Garage ✓ Festpreis ✓ Besenrein ✓ Schnell vor Ort ☎ 02271 / 5880940",
  },

  "habbelrath": {
    name: "Habbelrath",
    parentCity: "Frechen",
    parentSlug: "frechen",
    plz: "50226",
    character: "Kleines ländliches Dorf westlich von Frechen an der Stadtgrenze zu Bergheim",
    intro: "Habbelrath ist ein kleines Dorf an der Grenze zwischen Frechen und Bergheim, das noch weitgehend ländlichen Charakter bewahrt hat. Die Bebauung besteht größtenteils aus älteren Einfamilienhäusern und kleinen Hofstellen. Für Entrümpelungen kommen wir auch hierher schnell und zuverlässig — mit transparentem Festpreisangebot.",
    localInfo: "Da Habbelrath direkt an der Stadtgrenze zu Bergheim liegt, profitieren Sie hier von den kürzesten Anfahrtszeiten aus unserem Hauptsitz. Das bedeutet auch besonders günstige Konditionen.",
    highlights: [
      "Direkter Standort zwischen Frechen und Bergheim",
      "Kürzeste Anfahrtszeiten aus Bergheim",
      "Landwirtschaftliche Anwesen und Einfamilienhäuser",
      "Festpreis nach Fotos",
      "Besenreine Übergabe",
      "Schrottankauf vor Ort möglich",
    ],
    nearbyAreas: [
      { name: "Frechen", slug: "frechen" },
      { name: "Bergheim", slug: "bergheim" },
      { name: "Königsdorf", slug: "koenigsdorf" },
      { name: "Glesch", slug: "glesch" },
    ],
    faqs: [
      { question: "Können Sie Habbelrath mit einem großen LKW anfahren?", answer: "Ja, die Hauptstraßen sind gut befahrbar. Falls nötig, setzen wir kleinere Fahrzeuge ein und fahren mehrmals — ganz ohne Aufpreis, wenn wir das im Vorfeld so vereinbaren." },
    ],
    metaDescription: "Entrümpelung Habbelrath ✓ Frechen ✓ Keller & Einfamilienhaus ✓ Festpreis ✓ Besenrein ✓ Schnell vor Ort ☎ 02271 / 5880940",
  },

  /* ─────────────────────────────────────────
     HÜRTH
  ───────────────────────────────────────── */
  "hermuelheim": {
    name: "Hermülheim",
    parentCity: "Hürth",
    parentSlug: "huerth",
    plz: "50354",
    population: "ca. 12.000",
    character: "Größter Stadtteil Hürths mit dichter Wohnbebauung, Mehrfamilienhäuser der 1960er–1980er Jahre dominieren",
    intro: "Hermülheim ist der bevölkerungsreichste Stadtteil der Stadt Hürth und ein lebendiges Wohngebiet mit vielen Mehrfamilienhäusern aus den 1960er bis 1980er Jahren. Wohnungsentrümpelungen, Kellerräumungen und Haushaltsauflösungen sind in Hermülheim ein regelmäßiger Bedarf — besonders bei älteren Mietern oder nach einem Nachlass. Wir entrümpeln schnell, professionell und besenrein.",
    localInfo: "In Hermülheim sind wir vor allem in den dichten Wohnblocks rund um das Hermülheimer Ortszentrum und entlang der Hauptstraßen tätig. Durch die gute Anbindung über die A1/A4 kommen wir zügig aus dem Rhein-Erft-Kreis.",
    highlights: [
      "Erfahrung mit Mehrfamilienhäusern der Nachkriegszeit",
      "Wohnungsentrümpelung für Vermieter und Mieter",
      "Schnelle Anfahrt über A1 und Hürther Ring",
      "Haushaltsauflösung diskret und respektvoll",
      "Festpreis nach Foto oder Besichtigung",
      "Besenreine Übergabe garantiert",
    ],
    nearbyAreas: [
      { name: "Hürth", slug: "huerth" },
      { name: "Efferen", slug: "efferen" },
      { name: "Gleuel", slug: "gleuel" },
      { name: "Brühl", slug: "bruehl" },
    ],
    faqs: [
      { question: "Können Sie Wohnungen in Hermülheim auch ohne Fahrstuhl räumen?", answer: "Ja, unser Team ist es gewohnt, auch in Gebäuden ohne Fahrstuhl zu arbeiten. Mehrere Etagen oder schmale Treppenhäuser sind für uns kein Problem." },
      { question: "Was kostet eine Wohnungsentrümpelung in Hermülheim?", answer: "Der Preis richtet sich nach Größe der Wohnung und Menge der Gegenstände. Für eine 2-Zimmer-Wohnung rechnen wir in der Regel mit 350–700 € — nach einer Besichtigung erhalten Sie einen verbindlichen Festpreis." },
    ],
    metaDescription: "Entrümpelung Hermülheim ✓ Hürth ✓ Wohnungsentrümpelung ✓ Mehrfamilienhaus ✓ Festpreis ✓ Besenrein ☎ 02271 / 5880940",
  },

  "efferen": {
    name: "Efferen",
    parentCity: "Hürth",
    parentSlug: "huerth",
    plz: "50354",
    character: "Etabliertes Wohngebiet in Hürth mit Mix aus Einfamilienhäusern und Mehrfamilienhäusern",
    intro: "Efferen ist ein gut erschlossenes Wohngebiet in Hürth mit einem ausgewogenen Mix aus Einfamilienhäusern der 1950er bis 1970er Jahre und modernen Mehrfamilienhäusern. Für Entrümpelungen — ob Keller, Wohnung oder ganzes Haus — sind wir in Efferen der richtige Ansprechpartner. Wir bieten transparente Festpreise und besenreine Übergabe.",
    localInfo: "Über die B265 und die Anbindung an den Hürther Ring sind wir in Efferen schnell erreichbar. Wir kennen die typischen Wohngebiete und arbeiten effizient.",
    highlights: [
      "Keller, Wohnung und Haus — alles aus einer Hand",
      "Schnelle Anfahrt über B265",
      "Haushaltsauflösung und Wohnungsentrümpelung",
      "Festpreis ohne versteckte Kosten",
      "Besenreine Übergabe für Vermieter",
      "Diskret bei Nachlassräumungen",
    ],
    nearbyAreas: [
      { name: "Hürth", slug: "huerth" },
      { name: "Hermülheim", slug: "hermuelheim" },
      { name: "Gleuel", slug: "gleuel" },
      { name: "Brühl", slug: "bruehl" },
    ],
    faqs: [
      { question: "Bieten Sie auch Teilentrümpelungen in Efferen an?", answer: "Ja, wir räumen auch nur einzelne Zimmer, Keller oder Garagen aus. Sie entscheiden, was geräumt werden soll — wir erledigen es zum vereinbarten Festpreis." },
    ],
    metaDescription: "Entrümpelung Efferen ✓ Hürth ✓ Keller & Wohnung ✓ Festpreis ✓ Besenrein ✓ Schnell & diskret ☎ 02271 / 5880940",
  },

  "gleuel": {
    name: "Gleuel",
    parentCity: "Hürth",
    parentSlug: "huerth",
    plz: "50354",
    population: "ca. 3.200",
    character: "Ruhiges Dorf im Südwesten Hürths mit Einfamilienhäusern, Gärten und einer entspannten Wohnatmosphäre",
    intro: "Gleuel ist ein ruhiger, dörflich geprägter Stadtteil im Südwesten von Hürth, abseits des Stadtlärms und doch gut mit Köln und Erftstadt verbunden. Der Bestand an Einfamilienhäusern mit Gärten, Garagen und Gartenhäusern macht Gleuel zu einem typischen Einsatzgebiet für Kellerentrümpelungen und Haushaltsauflösungen — besonders wenn nach dem Auszug älterer Bewohner oder nach einem Erbfall das Haus geräumt werden muss. Unser Team ist schnell und zuverlässig vor Ort.",
    localInfo: "Von unserem Standort im Rhein-Erft-Kreis erreichen wir Gleuel über die L 150 in kurzer Zeit. Wir übernehmen in Gleuel Keller-, Garagen- und Hausentrümpelungen sowie komplette Haushaltsauflösungen. Bei Grundstücken mit Schrott oder Altmetall rechnen wir den Ankaufswert direkt auf den Preis an.",
    highlights: [
      "Einfamilienhäuser, Garagen und Gartenhäuser — alles aus einer Hand",
      "Haushaltsauflösungen nach Erbfall oder Heimeinzug",
      "Schrottankauf direkt vor Ort — senkt Ihre Kosten",
      "Festpreis nach Fotos oder Besichtigung",
      "Besenreine Übergabe — bereit für Verkauf oder Renovierung",
      "Umweltgerechte Entsorgung über zertifizierte Betriebe",
    ],
    nearbyAreas: [
      { name: "Hürth", slug: "huerth" },
      { name: "Efferen", slug: "efferen" },
      { name: "Hermülheim", slug: "hermuelheim" },
      { name: "Erftstadt", slug: "erftstadt" },
    ],
    faqs: [
      {
        question: "Können Sie auch Gärten und Gartenhäuser in Gleuel entrümpeln?",
        answer: "Ja, Gartenabfälle, alte Gartenmöbel, Geräteschuppen-Inhalt und sonstige Gartengerätschaft nehmen wir mit und entsorgen alles fachgerecht. Auf Wunsch kaufen wir Metall und Schrott auch direkt an.",
      },
      {
        question: "Was kostet eine Entrümpelung in Gleuel?",
        answer: "Der Preis hängt vom Umfang ab. Ein Keller oder eine Garage beginnt ab ca. 150 €, ein Einfamilienhaus ab ca. 800 €. Wir erstellen Ihnen nach Fotos oder einer kurzen Besichtigung ein verbindliches Festpreisangebot — kostenlos und ohne Verpflichtung.",
      },
      {
        question: "Wie schnell kommen Sie nach Gleuel?",
        answer: "Wir erreichen Gleuel in der Regel innerhalb von 20–30 Minuten. Bei freien Kapazitäten bieten wir oft noch am gleichen oder nächsten Werktag einen Termin an. In dringenden Fällen reagieren wir besonders schnell.",
      },
      {
        question: "Führen Sie in Gleuel auch komplette Haushaltsauflösungen durch?",
        answer: "Ja, Haushaltsauflösungen nach Todesfall, Erbschaft oder Heimeinzug gehören zu unserem Kerngeschäft. Wir übernehmen alle Räume, sortieren Verwertbares aus und hinterlassen das Objekt besenrein.",
      },
      {
        question: "Kaufen Sie in Gleuel Schrott und Altmetall an?",
        answer: "Ja, wir kaufen Kupfer, Messing, Aluminium, Eisen und sonstigen Schrott direkt vor Ort an. Der Ankaufswert wird vom Entrümpelungspreis abgezogen — das senkt Ihre Gesamtkosten spürbar.",
      },
      {
        question: "Sind Entsorgungskosten im Festpreis enthalten?",
        answer: "Ja, alle Kosten — Transport, Deponiegebühren und fachgerechte Entsorgung — sind im Festpreis eingeschlossen. Es gibt keine versteckten Nachberechnungen.",
      },
      {
        question: "Können Sie in Gleuel auch nur den Keller oder nur die Garage entrümpeln?",
        answer: "Ja, wir bieten auch Teilentrümpelungen an. Ob nur Keller, nur Garage oder nur Gartenschuppen — wir erstellen ein Angebot basierend auf dem tatsächlichen Aufwand.",
      },
      {
        question: "Hinterlassen Sie das Haus nach der Entrümpelung in Gleuel besenrein?",
        answer: "Ja, besenreine Übergabe ist bei jeder Entrümpelung in Gleuel inklusive. Das Objekt wird von uns vollständig geräumt und gefegt — bereit für Übergabe, Renovierung oder Verkauf.",
      },
    ],
    metaDescription: "Entrümpelung Gleuel ✓ Hürth ✓ Einfamilienhaus & Garten ✓ Haushaltsauflösung ✓ Festpreis ✓ Besenrein ☎ 02271 / 5880940",
  },

  "berrenrath": {
    name: "Berrenrath",
    parentCity: "Hürth",
    parentSlug: "huerth",
    plz: "50354",
    character: "Ehemalige Braunkohle-Region im Wandel, mit Industriegeschichte und wachsendem Wohnbestand",
    intro: "Berrenrath ist ein Stadtteil Hürths mit einer langen Industriegeschichte, die durch den Braunkohleabbau und die chemische Industrie geprägt wurde. Heute entwickelt sich der Bereich zunehmend zum Wohngebiet. Für Entrümpelungen — ob in alten Häusern oder neueren Wohnungen — sind wir der zuverlässige Partner vor Ort.",
    localInfo: "Wir entrümpeln in Berrenrath sowohl ältere Häuser aus der Industriezeit als auch neuere Wohnobjekte. Unser Team arbeitet schnell und hinterlässt alles besenrein.",
    highlights: [
      "Erfahrung mit Industrie- und Wohnobjekten",
      "Schnelle Anfahrt aus dem Rhein-Erft-Kreis",
      "Festpreis nach Fotos oder Besichtigung",
      "Besenreine Übergabe",
      "Fachgerechte Entsorgung",
      "Flexible Terminfindung",
    ],
    nearbyAreas: [
      { name: "Hürth", slug: "huerth" },
      { name: "Hermülheim", slug: "hermuelheim" },
      { name: "Efferen", slug: "efferen" },
      { name: "Brühl", slug: "bruehl" },
    ],
    faqs: [
      { question: "Können Sie auch gewerbliche Objekte in Berrenrath entrümpeln?", answer: "Ja, wir übernehmen sowohl private als auch gewerbliche Entrümpelungen — von der alten Werkstatt bis zum Büro. Fragen Sie uns nach einem individuellen Angebot." },
    ],
    metaDescription: "Entrümpelung Berrenrath ✓ Hürth ✓ Wohnung & Gewerbe ✓ Festpreis ✓ Besenrein ✓ Schnell & zuverlässig ☎ 02271 / 5880940",
  },

  /* ─────────────────────────────────────────
     ERFTSTADT
  ───────────────────────────────────────── */
  "liblar": {
    name: "Liblar",
    parentCity: "Erftstadt",
    parentSlug: "erftstadt",
    plz: "50374",
    population: "ca. 12.000",
    character: "Verwaltungssitz von Erftstadt mit gutem Mix aus Wohn- und Geschäftsgebäuden",
    intro: "Liblar ist der Verwaltungssitz der Stadt Erftstadt und beheimatet Rathaus, Einkaufsmöglichkeiten und eine Vielzahl von Wohngebieten. Der Stadtteil umfasst ältere Wohnbereiche aus der Nachkriegszeit sowie neuere Baugebiete. Wir entrümpeln in Liblar regelmäßig Wohnungen, Keller und Einfamilienhäuser — mit Festpreisgarantie und besenreiner Übergabe.",
    localInfo: "Über die A61 sind wir aus unserem Bergheimer Standort gut nach Erftstadt-Liblar erreichbar. Wir kennen die verschiedenen Wohngebiete und arbeiten effizient und sauber.",
    highlights: [
      "Erfahrung mit Wohn- und Gewerbeobjekten",
      "Wohnungsentrümpelung für Vermieter und Eigentümer",
      "Schnelle Anfahrt über A61 Ausfahrt Erftstadt",
      "Haushaltsauflösung und Nachlassräumung",
      "Festpreis nach Fotos oder Besichtigung",
      "Besenreine Übergabe garantiert",
    ],
    nearbyAreas: [
      { name: "Erftstadt", slug: "erftstadt" },
      { name: "Lechenich", slug: "lechenich" },
      { name: "Gymnich", slug: "gymnich" },
      { name: "Brühl", slug: "bruehl" },
    ],
    faqs: [
      { question: "Wie schnell können Sie nach Liblar kommen?", answer: "Über die A61 sind wir aus Bergheim in ca. 20 Minuten in Liblar. In dringenden Fällen können wir oft noch am selben Tag einen Termin anbieten." },
      { question: "Bieten Sie in Liblar auch Büroauflösungen an?", answer: "Ja, neben privaten Haushalten entrümpeln wir auch Büros, Praxen und Geschäftsräume. Wir bieten dafür individuelle Angebote an." },
    ],
    metaDescription: "Entrümpelung Liblar ✓ Erftstadt ✓ Wohnungsentrümpelung ✓ Haushaltsauflösung ✓ Festpreis ✓ Besenrein ☎ 02271 / 5880940",
  },

  "lechenich": {
    name: "Lechenich",
    parentCity: "Erftstadt",
    parentSlug: "erftstadt",
    plz: "50374",
    population: "ca. 10.000",
    character: "Historische Kleinstadt mit mittelalterlicher Stadtmauer und altem Stadtkern, viel Altbaubestand",
    intro: "Lechenich ist ein Kleinod in Erftstadt — mit einer historischen mittelalterlichen Stadtmauer, dem alten Rathaus und einem gut erhaltenen Stadtkern. Der hohe Anteil an Altbaugebäuden macht Lechenich besonders interessant für Entrümpelungen: Alte Keller mit Natursteinwänden, Dachböden mit Jahrzehnte altem Hausrat und historisch gewachsene Wohnhäuser haben oft ganz besondere Anforderungen. Wir bringen die nötige Erfahrung mit.",
    localInfo: "In Lechenich entrümpeln wir sowohl historische Altbauten als auch neuere Wohnhäuser. Unsere Fahrer kennen die engen Straßen im historischen Ortskern und wählen die passende Fahrzeuggröße.",
    highlights: [
      "Erfahrung mit historischen Altbauten und engen Straßen",
      "Kellerentrümpelung auch in alten Natursteingewölben",
      "Haushaltsauflösung in historischen Wohngebäuden",
      "Diskrete und respektvolle Vorgehensweise",
      "Festpreis nach Besichtigung",
      "Besenreine Übergabe",
    ],
    nearbyAreas: [
      { name: "Erftstadt", slug: "erftstadt" },
      { name: "Liblar", slug: "liblar" },
      { name: "Gymnich", slug: "gymnich" },
      { name: "Kerpen", slug: "kerpen" },
    ],
    faqs: [
      { question: "Können Sie auch in engen historischen Straßen Lechenichs arbeiten?", answer: "Ja, wir setzen bei Bedarf kleinere Fahrzeuge ein oder parken in der Nähe und tragen manuell. Enge Gassen im historischen Kern sind für uns kein Hindernis." },
      { question: "Was ist beim Entrümpeln eines Altbaukellers in Lechenich zu beachten?", answer: "Alte Keller haben oft Feuchtigkeitsprobleme, schwere Möbel und jahrzehntelang angesammelten Hausrat. Wir kommen mit dem richtigen Equipment — auch für schwere Gegenstände und enge Treppen." },
    ],
    metaDescription: "Entrümpelung Lechenich ✓ Erftstadt ✓ Altbau & historischer Kern ✓ Festpreis ✓ Besenrein ✓ Haushaltsauflösung ☎ 02271 / 5880940",
  },

  "gymnich": {
    name: "Gymnich",
    parentCity: "Erftstadt",
    parentSlug: "erftstadt",
    plz: "50374",
    character: "Bekanntes Weindorf mit Schloss Gymnich, ländlicher Charakter und historischem Ortskern",
    intro: "Gymnich ist überregional bekannt durch das Schloss Gymnich und seine Weinbau-Tradition im Erfttal. Der Ort hat einen historisch gewachsenen Dorfkern mit altem Gebäudebestand — und entsprechend tiefe Keller, voll ausgestattete Haushalte und übervolle Dachböden, die regelmäßig entrümpelt werden wollen. Als erfahrenes Entrümpelungsunternehmen im Rhein-Erft-Kreis sind wir in Gymnich der richtige Ansprechpartner.",
    localInfo: "Ob Keller im alten Winzerhof, Dachboden im historischen Wohnhaus oder vollständige Haushaltsauflösung — wir erledigen das professionell und hinterlassen alles besenrein.",
    highlights: [
      "Erfahrung mit historischen Dorfhäusern und Winzerhöfen",
      "Keller, Dachboden und ganzes Haus in einem Einsatz",
      "Haushaltsauflösung mit Wertanrechnung",
      "Festpreis nach kostenloser Besichtigung",
      "Besenreine Übergabe",
      "Schnelle Anfahrt aus dem Rhein-Erft-Kreis",
    ],
    nearbyAreas: [
      { name: "Erftstadt", slug: "erftstadt" },
      { name: "Lechenich", slug: "lechenich" },
      { name: "Liblar", slug: "liblar" },
      { name: "Kerpen", slug: "kerpen" },
    ],
    faqs: [
      { question: "Räumen Sie auch landwirtschaftliche Gebäude und Weinkeller in Gymnich?", answer: "Ja, Weinlagerkeller, Scheunen, Stallgebäude und andere landwirtschaftliche Bauten zählen zu unseren Aufträgen. Wir bringen ausreichend Personal und Fahrzeuge mit." },
    ],
    metaDescription: "Entrümpelung Gymnich ✓ Erftstadt ✓ Weinbaudorf & Altbau ✓ Festpreis ✓ Besenrein ✓ Haushaltsauflösung ☎ 02271 / 5880940",
  },

  "bliesheim": {
    name: "Bliesheim",
    parentCity: "Erftstadt",
    parentSlug: "erftstadt",
    plz: "50374",
    character: "Kleines Dorf in Erftstadt mit ruhiger Wohnlage und Einfamilienhäusern",
    intro: "Bliesheim ist ein beschauliches Dorf in der Gemeinde Erftstadt mit überwiegend Einfamilienhäusern und einer ruhigen Wohnatmosphäre. Entrümpelungen betreffen hier oft ältere Häuser im Generationswechsel — wir kommen schnell, bieten Festpreise und hinterlassen alles besenrein.",
    localInfo: "Über die umliegenden Bundesstraßen sind wir in Bliesheim gut erreichbar. Wir entrümpeln Keller, Garagen, Dachböden und ganze Häuser.",
    highlights: [
      "Einfamilienhäuser und Dorfhäuser",
      "Keller, Garage und Dachboden",
      "Festpreis nach Fotos",
      "Besenreine Übergabe",
      "Schrottankauf auf Anfrage",
      "Flexible Terminplanung",
    ],
    nearbyAreas: [
      { name: "Erftstadt", slug: "erftstadt" },
      { name: "Liblar", slug: "liblar" },
      { name: "Gymnich", slug: "gymnich" },
      { name: "Kerpen", slug: "kerpen" },
    ],
    faqs: [
      { question: "Kommen Sie nach Bliesheim auch für kleine Entrümpelungen?", answer: "Ja, auch einzelne Keller oder Garagen räumen wir gerne aus. Nennen Sie uns kurz den Umfang — wir machen ein faires Angebot." },
    ],
    metaDescription: "Entrümpelung Bliesheim ✓ Erftstadt ✓ Keller & Einfamilienhaus ✓ Festpreis ✓ Besenrein ✓ Schnell & zuverlässig ☎ 02271 / 5880940",
  },

  "friesheim": {
    name: "Friesheim",
    parentCity: "Erftstadt",
    parentSlug: "erftstadt",
    plz: "50374",
    character: "Ländlich geprägtes Dorf in Erftstadt mit alten Gebäuden und Landwirtschaftsbetrieben",
    intro: "Friesheim liegt im ländlichen Südosten der Stadt Erftstadt und ist geprägt durch alte Wohnhäuser, Bauernhöfe und ruhige Dorfstraßen. Hier sammeln sich in Kellern und Scheunen oft über Generationen Hausrat und Gerätschaften an — ideal für eine professionelle Entrümpelung. Wir sind in Friesheim gut bekannt und arbeiten zuverlässig.",
    localInfo: "Für ländliche Anwesen in Friesheim bieten wir auch den Ankauf von Altmetall und Schrott an. Kombiniert mit der Entrümpelung lassen sich so oft Kosten sparen.",
    highlights: [
      "Ländliche Anwesen, Scheunen und Bauernhöfe",
      "Schrottankauf direkt vor Ort",
      "Festpreis nach Besichtigung",
      "Besenreine Übergabe",
      "Flexible Terminplanung",
      "Fachgerechte Entsorgung",
    ],
    nearbyAreas: [
      { name: "Erftstadt", slug: "erftstadt" },
      { name: "Lechenich", slug: "lechenich" },
      { name: "Bliesheim", slug: "bliesheim" },
      { name: "Brühl", slug: "bruehl" },
    ],
    faqs: [
      { question: "Können Sie in Friesheim auch landwirtschaftliche Gebäude räumen?", answer: "Ja, Scheunen, Ställe, Maschinenräume und Keller von Bauernhöfen sind gängige Aufträge für uns. Wir bringen genügend Manpower und passende Fahrzeuge mit." },
    ],
    metaDescription: "Entrümpelung Friesheim ✓ Erftstadt ✓ Bauernhof & Scheune ✓ Festpreis ✓ Schrottankauf ✓ Besenrein ☎ 02271 / 5880940",
  },

  /* ─────────────────────────────────────────
     ELSDORF
  ───────────────────────────────────────── */
  "heppendorf": {
    name: "Heppendorf",
    parentCity: "Elsdorf",
    parentSlug: "elsdorf",
    plz: "50189",
    character: "Dorf im Rheinischen Braunkohlerevier, im Wandel durch den Ausstieg aus der Braunkohle",
    intro: "Heppendorf ist ein Ortsteil der Gemeinde Elsdorf im Rheinischen Revier und befindet sich im Wandel nach der Braunkohle-Ära. Viele ältere Häuser aus der Bergbauzeit haben große Keller und Dachböden, die über Jahrzehnte gefüllt wurden. Für professionelle Entrümpelungen kommen wir nach Heppendorf — schnell, günstig und mit Festpreisgarantie.",
    localInfo: "Wir kennen die Gegebenheiten im Rheinischen Revier und arbeiten auch in den kleinen Ortschaften rund um Elsdorf. Durch unseren Standort in Bergheim sind wir in Heppendorf gut erreichbar.",
    highlights: [
      "Erfahrung im Rheinischen Revier",
      "Bergbauhäuser und Dorfhäuser",
      "Keller, Scheune und Garage",
      "Festpreis nach Fotos",
      "Besenreine Übergabe",
      "Schnelle Anfahrt aus Bergheim",
    ],
    nearbyAreas: [
      { name: "Elsdorf", slug: "elsdorf" },
      { name: "Bergheim", slug: "bergheim" },
      { name: "Bedburg", slug: "bedburg" },
      { name: "Kerpen", slug: "kerpen" },
    ],
    faqs: [
      { question: "Bieten Sie in Heppendorf auch Wohnungsentrümpelungen an?", answer: "Ja, ob Wohnung, Keller oder ganzes Haus — wir erledigen alle Entrümpelungsaufträge in Heppendorf zu fairen Festpreisen." },
      { question: "Was kostet eine Entrümpelung in Heppendorf?", answer: "Der Preis richtet sich nach Volumen und Art des Hausrats. Nach Fotos per WhatsApp oder einer kurzen Besichtigung erstellen wir ein verbindliches Festpreisangebot — kostenlos und unverbindlich." },
      { question: "Wie schnell sind Sie in Heppendorf vor Ort?", answer: "Von unserem Standort in Bergheim sind wir über die B477 in der Regel innerhalb von 15–20 Minuten in Heppendorf. Kurzfristige Termine sind häufig möglich." },
      { question: "Räumen Sie in Heppendorf auch alte Bergbau-Häuser?", answer: "Ja, das ist eine unserer Spezialitäten in der Region. Kellern aus der Bergbauzeit, vollgestellte Dachböden und Garagen — das kennen wir gut und bewältigen es effizient." },
      { question: "Können Sie in Heppendorf eine Haushaltsauflösung nach einem Todesfall durchführen?", answer: "Ja, und das mit der nötigen Diskretion und Ruhe. Wir geben Ihnen ausreichend Zeit, persönliche Gegenstände zu sichten, bevor wir mit der Räumung beginnen." },
      { question: "Gibt es in Heppendorf eine Möglichkeit zur Wertanrechnung?", answer: "Ja, gut erhaltene Möbel, Elektrogeräte und Antiquitäten werden angerechnet. Ihr Gesamtpreis reduziert sich dadurch entsprechend." },
      { question: "Übernehmen Sie in Heppendorf auch die Entsorgung von Sondermüll?", answer: "Wir entsorgen Sperrmüll, Holz, Elektronik und haushaltsübliche Sondermaterialien fachgerecht. Für Bauschutt oder chemische Sondermüll geben wir Ihnen entsprechende Hinweise." },
      { question: "Wie beantrage ich eine Entrümpelung in Heppendorf?", answer: "Einfach anrufen unter 02271/5880940, per WhatsApp schreiben oder das Kontaktformular auf unserer Website nutzen. Fotos helfen, einen schnellen Festpreis zu ermitteln." },
    ],
    metaDescription: "Entrümpelung Heppendorf ✓ Elsdorf ✓ Keller & Haus ✓ Festpreis ✓ Besenrein ✓ Schnell & fair ☎ 02271 / 5880940",
  },

  "berrendorf": {
    name: "Berrendorf",
    parentCity: "Elsdorf",
    parentSlug: "elsdorf",
    plz: "50189",
    character: "Kleines Dorf in der Gemeinde Elsdorf mit dörflichem Charakter",
    intro: "Berrendorf ist ein kleines Dorf in der Gemeinde Elsdorf mit einem überwiegend ländlichen Charakter. Einfamilienhäuser und Bauerngehöfte prägen das Ortsbild. Für Entrümpelungen — vor allem Scheunen, Keller und Garagen — sind wir zuverlässig vor Ort.",
    localInfo: "Wir sind in Berrendorf und allen umliegenden Ortschaften tätig. Schrottankauf und Wertanrechnung machen die Entrümpelung oft günstiger als erwartet.",
    highlights: [
      "Ländliche Anwesen und Einfamilienhäuser",
      "Schrottankauf und Wertanrechnung",
      "Festpreis nach Fotos",
      "Besenreine Übergabe",
      "Flexible Terminplanung",
      "Schnelle Anfahrt aus Bergheim",
    ],
    nearbyAreas: [
      { name: "Elsdorf", slug: "elsdorf" },
      { name: "Heppendorf", slug: "heppendorf" },
      { name: "Bergheim", slug: "bergheim" },
      { name: "Bedburg", slug: "bedburg" },
    ],
    faqs: [
      { question: "Kommen Sie auch für kleine Aufträge nach Berrendorf?", answer: "Ja, auch einzelne Keller, Garagen oder Schuppen räumen wir gerne aus. Fragen Sie an — wir nennen Ihnen schnell einen fairen Preis." },
    ],
    metaDescription: "Entrümpelung Berrendorf ✓ Elsdorf ✓ Keller & Scheune ✓ Festpreis ✓ Besenrein ✓ Schnell & zuverlässig ☎ 02271 / 5880940",
  },

  "niederembt": {
    name: "Niederembt",
    parentCity: "Elsdorf",
    parentSlug: "elsdorf",
    plz: "50189",
    character: "Kleines Dorf in Elsdorf, ruhige Wohnlage mit Einfamilienhäusern",
    intro: "Niederembt ist ein ruhiges, kleines Dorf in der Gemeinde Elsdorf mit Einfamilienhäusern und einer dörflichen Atmosphäre. Entrümpelungen in Niederembt umfassen häufig Keller, Garagen und ältere Häuser beim Generationswechsel. Wir kommen schnell und bieten faire Festpreise.",
    localInfo: "Als regionaler Dienstleister mit Sitz in Bergheim sind wir in Niederembt und der gesamten Gemeinde Elsdorf gut erreichbar und zuverlässig im Einsatz.",
    highlights: [
      "Einfamilienhäuser und Dorfhäuser",
      "Keller, Dachboden und Garage",
      "Festpreis nach Fotos",
      "Besenreine Übergabe",
      "Schrottankauf möglich",
      "Schnelle Terminvergabe",
    ],
    nearbyAreas: [
      { name: "Elsdorf", slug: "elsdorf" },
      { name: "Oberembt", slug: "oberembt" },
      { name: "Bergheim", slug: "bergheim" },
      { name: "Bedburg", slug: "bedburg" },
    ],
    faqs: [
      { question: "Haben Sie freie Termine in Niederembt diese Woche?", answer: "In der Regel können wir innerhalb von 1–3 Werktagen einen Termin anbieten. Rufen Sie uns an oder schreiben Sie per WhatsApp — wir schauen sofort nach Verfügbarkeit." },
    ],
    metaDescription: "Entrümpelung Niederembt ✓ Elsdorf ✓ Keller & Einfamilienhaus ✓ Festpreis ✓ Besenrein ✓ Schnell vor Ort ☎ 02271 / 5880940",
  },

  "oberembt": {
    name: "Oberembt",
    parentCity: "Elsdorf",
    parentSlug: "elsdorf",
    plz: "50189",
    character: "Kleines Dorf in der Gemeinde Elsdorf mit ländlichem Charakter",
    intro: "Oberembt liegt in der Gemeinde Elsdorf und ist ein kleines, ruhiges Dorf mit einem hohen Anteil an Einfamilienhäusern. Für Entrümpelungen — ob Keller, Garage oder vollständige Haushaltsauflösung — kommen wir nach Oberembt. Wir bieten Festpreise und besenreine Übergabe.",
    localInfo: "Wir decken die gesamte Gemeinde Elsdorf ab, einschließlich Oberembt. Unser Team ist gut ausgestattet und kommt mit der passenden Fahrzeuggröße.",
    highlights: [
      "Dorfhäuser und Einfamilienhäuser",
      "Keller, Garage und Gartenhaus",
      "Festpreis nach Fotos oder Besichtigung",
      "Besenreine Übergabe",
      "Schrottankauf auf Anfrage",
      "Flexible Terminplanung",
    ],
    nearbyAreas: [
      { name: "Elsdorf", slug: "elsdorf" },
      { name: "Niederembt", slug: "niederembt" },
      { name: "Bedburg", slug: "bedburg" },
      { name: "Bergheim", slug: "bergheim" },
    ],
    faqs: [
      { question: "Können Sie in Oberembt auch kurzfristig kommen?", answer: "Ja, in vielen Fällen können wir innerhalb von 24–48 Stunden einen Termin in Oberembt anbieten. Rufen Sie uns an oder schreiben Sie per WhatsApp." },
    ],
    metaDescription: "Entrümpelung Oberembt ✓ Elsdorf ✓ Keller & Einfamilienhaus ✓ Festpreis ✓ Besenrein ✓ Schnell & fair ☎ 02271 / 5880940",
  },

  /* ─────────────────────────────────────────
     GREVENBROICH
  ───────────────────────────────────────── */
  "kapellen-grevenbroich": {
    name: "Kapellen",
    parentCity: "Grevenbroich",
    parentSlug: "grevenbroich",
    plz: "41515",
    population: "ca. 12.000",
    character: "Größter Stadtteil Grevenbroichs mit dichten Wohngebieten und guter Infrastruktur",
    intro: "Kapellen ist der bevölkerungsreichste Stadtteil der Stadt Grevenbroich mit gut 12.000 Einwohnern, modernen Wohngebieten und einer soliden Infrastruktur. Die Mischung aus Einfamilienhäusern und Mehrfamilienhäusern macht Kapellen zu einem der gefragtesten Wohnorte im Kreisgebiet. Wir entrümpeln hier regelmäßig — ob Wohnung, Keller oder ganzes Haus.",
    localInfo: "Über die B477 und die Autobahnanbindung A46/A57 sind wir in Kapellen gut erreichbar. Wir bieten Festpreise und besenreine Übergabe — ohne Überraschungen.",
    highlights: [
      "Erfahrung mit Einfamilienhäusern und Mehrfamilienhäusern",
      "Wohnungsentrümpelung für Vermieter",
      "Haushaltsauflösung und Nachlassräumung",
      "Festpreis nach Foto oder Besichtigung",
      "Besenreine Übergabe garantiert",
      "Schnelle Terminvergabe im Raum Grevenbroich",
    ],
    nearbyAreas: [
      { name: "Grevenbroich", slug: "grevenbroich" },
      { name: "Gustorf", slug: "gustorf" },
      { name: "Elsen", slug: "elsen" },
      { name: "Bedburg", slug: "bedburg" },
    ],
    faqs: [
      { question: "Wie schnell kommen Sie nach Kapellen (Grevenbroich)?", answer: "Wir sind aus unserem Standort im Rhein-Erft-Kreis in ca. 20–25 Minuten in Kapellen. Kurzfristige Termine sind meist möglich." },
      { question: "Was kostet eine Wohnungsentrümpelung in Kapellen?", answer: "Der Preis richtet sich nach Größe und Inhalt. Nach einer Beschreibung oder Fotos erhalten Sie ein verbindliches Festpreisangebot. Typischerweise starten Wohnungsentrümpelungen ab ca. 350 €." },
    ],
    metaDescription: "Entrümpelung Kapellen ✓ Grevenbroich ✓ Wohnungsentrümpelung ✓ Haushaltsauflösung ✓ Festpreis ✓ Besenrein ☎ 02271 / 5880940",
  },

  "gustorf": {
    name: "Gustorf",
    parentCity: "Grevenbroich",
    parentSlug: "grevenbroich",
    plz: "41515",
    character: "Ehemaliges Braunkohlerevier-Dorf, geprägt durch Bergarbeitersiedlungen der 1950er und 1960er Jahre",
    intro: "Gustorf ist ein Stadtteil Grevenbroichs mit einer langen Geschichte in der Braunkohle-Industrie. Die charakteristischen Bergarbeitersiedlungen der Nachkriegszeit dominieren das Ortsbild — solide Häuser mit großen Kellern und gefüllten Dachböden, die heute oft entrümpelt werden müssen. Als erfahrenes Team kennen wir diese Objekttypen sehr gut.",
    localInfo: "In Gustorf übernehmen wir besonders häufig Haushaltsauflösungen der älteren Bergarbeitergeneration. Wir arbeiten diskret und respektvoll und bieten faire Festpreise.",
    highlights: [
      "Erfahrung mit Bergarbeitersiedlungen",
      "Haushaltsauflösung der Kriegs- und Nachkriegsgeneration",
      "Keller, Dachboden und ganzes Haus",
      "Diskrete und respektvolle Vorgehensweise",
      "Festpreis nach Fotos oder Besichtigung",
      "Besenreine Übergabe",
    ],
    nearbyAreas: [
      { name: "Grevenbroich", slug: "grevenbroich" },
      { name: "Kapellen-Grevenbroich", slug: "kapellen-grevenbroich" },
      { name: "Bedburg", slug: "bedburg" },
      { name: "Rommerskirchen", slug: "rommerskirchen" },
    ],
    faqs: [
      { question: "Wie gehen Sie bei einer Haushaltsauflösung in Gustorf mit persönlichen Gegenständen um?", answer: "Wir sind diskret und respektvoll. Persönliche Dokumente, Fotos und Wertsachen werden gesondert gelagert und Ihnen übergeben. Über den Umgang mit dem restlichen Hausrat entscheiden Sie im Vorfeld." },
    ],
    metaDescription: "Entrümpelung Gustorf ✓ Grevenbroich ✓ Bergarbeitersiedlung ✓ Haushaltsauflösung ✓ Festpreis ✓ Diskret ☎ 02271 / 5880940",
  },

  "elsen": {
    name: "Elsen",
    parentCity: "Grevenbroich",
    parentSlug: "grevenbroich",
    plz: "41515",
    character: "Dorf nördlich von Grevenbroich mit ruhiger Wohnlage und Einfamilienhäusern",
    intro: "Elsen ist ein ruhiger Ortsteil nördlich von Grevenbroich mit einem hohen Anteil an Einfamilienhäusern und einer angenehmen dörflichen Atmosphäre. Entrümpelungen betreffen hier häufig Keller, Garagen und ganze Häuser beim Eigentümerwechsel. Wir kommen schnell und bieten transparente Festpreise.",
    localInfo: "Als regionaler Entrümpelungsservice sind wir in Elsen und der gesamten Region Grevenbroich tätig. Unsere Festpreise sind klar und verständlich — ohne versteckte Kosten.",
    highlights: [
      "Einfamilienhäuser und Dorfhäuser",
      "Keller, Garage und Gartenhaus",
      "Festpreis nach Fotos oder Besichtigung",
      "Besenreine Übergabe",
      "Schrottankauf auf Anfrage",
      "Schnelle Terminvergabe",
    ],
    nearbyAreas: [
      { name: "Grevenbroich", slug: "grevenbroich" },
      { name: "Kapellen-Grevenbroich", slug: "kapellen-grevenbroich" },
      { name: "Rommerskirchen", slug: "rommerskirchen" },
      { name: "Bedburg", slug: "bedburg" },
    ],
    faqs: [
      { question: "Können Sie in Elsen (Grevenbroich) auch Gartenhäuser räumen?", answer: "Ja, Gartenhäuser, Schuppen, Garagen und Keller sind gängige Aufträge für uns. Wir räumen alles aus und entsorgen den Inhalt umweltgerecht." },
    ],
    metaDescription: "Entrümpelung Elsen ✓ Grevenbroich ✓ Keller & Einfamilienhaus ✓ Festpreis ✓ Besenrein ✓ Schnell vor Ort ☎ 02271 / 5880940",
  },

  /* ─────────────────────────────────────────
     ROMMERSKIRCHEN
  ───────────────────────────────────────── */
  "evinghoven": {
    name: "Evinghoven",
    parentCity: "Rommerskirchen",
    parentSlug: "rommerskirchen",
    plz: "41569",
    character: "Kleinst-Gemeinde Rommerskirchenss mit dörflichem Charakter am Niederrhein",
    intro: "Evinghoven ist ein kleines Dorf in der Gemeinde Rommerskirchen am nordwestlichen Rand des Rhein-Erft-Kreises. Das Dorf bietet ländliche Ruhe mit Einfamilienhäusern und alten Hofstellen. Für Entrümpelungen kommen wir auch in die kleinen Ortschaften der Gemeinde Rommerskirchen — mit Festpreisangebot und besenreiner Übergabe.",
    localInfo: "Wir sind in allen Ortsteilen der Gemeinde Rommerskirchen tätig und kennen die ländlichen Besonderheiten. Gute Festpreise auch für kleinere Aufträge.",
    highlights: [
      "Auch in kleinen Dörfern schnell vor Ort",
      "Ländliche Anwesen und Hofstellen",
      "Keller, Scheune und Garage",
      "Festpreis nach Fotos",
      "Besenreine Übergabe",
      "Schrottankauf möglich",
    ],
    nearbyAreas: [
      { name: "Rommerskirchen", slug: "rommerskirchen" },
      { name: "Gilbach", slug: "gilbach" },
      { name: "Grevenbroich", slug: "grevenbroich" },
      { name: "Bedburg", slug: "bedburg" },
    ],
    faqs: [
      { question: "Fahren Sie auch nach Evinghoven für kleine Entrümpelungsaufträge?", answer: "Ja, auch kleine Aufträge wie ein einzelner Keller oder eine Garage sind für uns kein Problem. Fragen Sie an — wir machen Ihnen ein faires Angebot." },
    ],
    metaDescription: "Entrümpelung Evinghoven ✓ Rommerskirchen ✓ Keller & Scheune ✓ Festpreis ✓ Besenrein ✓ Schnell & fair ☎ 02271 / 5880940",
  },

  "gilbach": {
    name: "Gilbach",
    parentCity: "Rommerskirchen",
    parentSlug: "rommerskirchen",
    plz: "41569",
    character: "Kleines Dorf in der Gemeinde Rommerskirchen mit ländlichem Charakter",
    intro: "Gilbach ist ein kleines Dorf in der Gemeinde Rommerskirchen im Rhein-Erft-Kreis mit überwiegend Einfamilienhäusern und ländlichem Charakter. Entrümpelungen umfassen hier typischerweise Keller, Scheunen, Garagen und ganze Häuser beim Generationswechsel. Wir sind für Sie da — schnell, fair und transparent.",
    localInfo: "Unser Team ist in der gesamten Gemeinde Rommerskirchen tätig. Wir bieten faire Festpreise und besenreine Übergabe — für Aufträge jeder Größe.",
    highlights: [
      "Keller, Scheune und Garage in einem Einsatz",
      "Schrottankauf direkt vor Ort",
      "Festpreis nach Fotos",
      "Besenreine Übergabe",
      "Flexible Terminplanung",
      "Fachgerechte Entsorgung",
    ],
    nearbyAreas: [
      { name: "Rommerskirchen", slug: "rommerskirchen" },
      { name: "Evinghoven", slug: "evinghoven" },
      { name: "Grevenbroich", slug: "grevenbroich" },
      { name: "Bedburg", slug: "bedburg" },
    ],
    faqs: [
      { question: "Können Sie nach Gilbach auch an einem Samstag kommen?", answer: "Ja, samstags sind wir nach Absprache verfügbar. Kontaktieren Sie uns rechtzeitig — wir planen den Termin gerne passend für Sie." },
    ],
    metaDescription: "Entrümpelung Gilbach ✓ Rommerskirchen ✓ Keller & Scheune ✓ Festpreis ✓ Besenrein ✓ Schnell vor Ort ☎ 02271 / 5880940",
  },

  "oekoven": {
    name: "Oekoven",
    parentCity: "Rommerskirchen",
    parentSlug: "rommerskirchen",
    plz: "41569",
    population: "ca. 1.000",
    character: "Kleines Dorf in Rommerskirchen mit alten Hofgebäuden, Scheunen und ruhiger ländlicher Wohnlage",
    intro: "Oekoven ist ein kleines Dorf in der Gemeinde Rommerskirchen am Nordrand des Rhein-Erft-Kreises. Die idyllische, ländliche Wohnlage mit alten Hofgebäuden, Scheunen und Einfamilienhäusern macht Oekoven zu einem Ort, an dem professionelle Entrümpelungen regelmäßig gefragt sind — ob bei Generationenwechsel auf dem Hof, bei Haushaltsauflösungen älterer Bewohner oder wenn ein Grundstück für den Verkauf vorbereitet werden soll. Unser Team kommt auch nach Oekoven — mit fairen Festpreisen, Schrottankauf und besenreiner Übergabe.",
    localInfo: "Von unserem Standort im Rhein-Erft-Kreis erreichen wir Oekoven über die B 477 in kurzer Zeit. Wir sind in Oekoven und allen umliegenden Ortschaften tätig. Besonders bei älteren Hofgebäuden mit Metallbeständen kann der Schrottankauf die Gesamtkosten der Entrümpelung erheblich senken.",
    highlights: [
      "Erfahrung mit Hofgebäuden, Scheunen und Stallgebäuden",
      "Haushaltsauflösungen nach Erbschaft oder Heimeinzug",
      "Schrottankauf direkt vor Ort — reduziert Ihre Kosten",
      "Festpreis nach Fotos oder Besichtigung",
      "Besenreine Übergabe — bereit für Verkauf oder Übergabe",
      "Fachgerechte Entsorgung aller Materialien",
    ],
    nearbyAreas: [
      { name: "Rommerskirchen", slug: "rommerskirchen" },
      { name: "Gilbach", slug: "gilbach" },
      { name: "Evinghoven", slug: "evinghoven" },
      { name: "Bedburg", slug: "bedburg" },
    ],
    faqs: [
      {
        question: "Räumen Sie in Oekoven auch alte Scheunen und Stallgebäude aus?",
        answer: "Ja, Scheunen, Ställe, Maschinenhallen und andere Nebengebäude auf landwirtschaftlichen Anwesen sind gängige Aufträge in Oekoven. Wir bringen ausreichend Personal und Fahrzeuge mit — auch für größere Mengen.",
      },
      {
        question: "Was kostet eine Entrümpelung in Oekoven?",
        answer: "Der Preis richtet sich nach Art und Umfang des Auftrags. Ein Keller oder eine Garage beginnt ab ca. 150 €, ein komplettes Einfamilienhaus oder Hofgebäude ab ca. 800 €. Wir erstellen nach Fotos oder einer Besichtigung ein verbindliches Festpreisangebot — kostenlos.",
      },
      {
        question: "Wie schnell kommen Sie nach Oekoven?",
        answer: "Wir erreichen Oekoven von unserem Standort im Rhein-Erft-Kreis in der Regel in unter 30 Minuten. Bei freien Kapazitäten bieten wir oft noch am gleichen oder nächsten Werktag einen Termin an.",
      },
      {
        question: "Kaufen Sie in Oekoven Altmetall und Schrott an?",
        answer: "Ja, wir kaufen Kupfer, Messing, Aluminium, Eisen und sonstigen Schrott direkt vor Ort an. Besonders bei alten Hofgebäuden mit Landmaschinenteilen oder Metallbeständen kann das den Preis deutlich senken. Der Ankaufswert richtet sich nach dem Tagesmarktwert.",
      },
      {
        question: "Führen Sie in Oekoven auch Haushaltsauflösungen durch?",
        answer: "Ja, wir übernehmen komplette Haushaltsauflösungen — auch nach einem Todesfall oder einem Umzug ins Seniorenheim. Wir arbeiten diskret und respektvoll, sortieren Wertgegenstände aus und hinterlassen das Objekt besenrein.",
      },
      {
        question: "Sind Entsorgungskosten im Festpreis enthalten?",
        answer: "Ja, Transport, Deponiegebühren und fachgerechte Entsorgung sind im Festpreis enthalten. Es gibt keine versteckten Kosten — was im Angebot steht, zahlen Sie.",
      },
      {
        question: "Können Sie in Oekoven auch kurzfristig kommen?",
        answer: "Ja, kurzfristige Termine sind bei uns möglich. Rufen Sie uns an unter 02271 / 5880940 oder schreiben Sie per WhatsApp — wir finden schnell eine Lösung.",
      },
      {
        question: "Was passiert mit verwertbaren Möbeln und Haushaltsgegenständen?",
        answer: "Gut erhaltene Möbel, funktionsfähige Elektrogeräte, Werkzeug und andere verwertbare Gegenstände werden aussortiert und auf den Preis angerechnet. Den Rest entsorgen wir fachgerecht und umweltgerecht.",
      },
    ],
    metaDescription: "Entrümpelung Oekoven ✓ Rommerskirchen ✓ Scheune & Hofgebäude ✓ Haushaltsauflösung ✓ Festpreis ✓ Schrottankauf ✓ Besenrein ☎ 02271 / 5880940",
  },

  /* ─────────────────────────────────────────
     BEDBURG
  ───────────────────────────────────────── */
  "kaster": {
    name: "Kaster",
    parentCity: "Bedburg",
    parentSlug: "bedburg",
    plz: "50181",
    population: "ca. 7.000",
    character: "Historische Kleinstadt mit mittelalterlichen Türmen und altem Stadtmauerring — ältester Stadtteil Bedburgs",
    intro: "Kaster ist der älteste Stadtteil Bedburgs und beeindruckt durch seinen historischen Stadtmauerring mit zwei gut erhaltenen Türmen — ein einzigartiges Kulturdenkmal im Rhein-Erft-Kreis. Die historische Bausubstanz bringt besondere Anforderungen bei Entrümpelungen: Enge Gassen, alte Keller mit Natursteinwänden und Häuser aus verschiedenen Epochen stellen uns vor interessante Herausforderungen, die wir gerne meistern.",
    localInfo: "Wir sind in Kaster erfahren mit der historischen Bausubstanz und kennen die Besonderheiten alter Keller und engen Straßenzüge. Festpreise und besenreine Übergabe sind auch hier Standard.",
    highlights: [
      "Erfahrung mit historischen Altbauten",
      "Enge Gassen kein Problem — angepasste Fahrzeuge",
      "Kellerentrümpelung in historischen Natursteingewölben",
      "Haushaltsauflösung und Nachlassräumung",
      "Festpreis nach kostenloser Besichtigung",
      "Besenreine Übergabe",
    ],
    nearbyAreas: [
      { name: "Bedburg", slug: "bedburg" },
      { name: "Kirchherten", slug: "kirchherten" },
      { name: "Bergheim", slug: "bergheim" },
      { name: "Grevenbroich", slug: "grevenbroich" },
    ],
    faqs: [
      { question: "Können Sie in den engen Straßen des historischen Kasters arbeiten?", answer: "Ja, wir passen unsere Fahrzeuggröße der Situation an. In sehr engen Bereichen arbeiten wir mit kleineren Transportern oder tragen manuell. Das besprechen wir im Vorfeld." },
      { question: "Was macht eine Entrümpelung in historischen Gebäuden in Kaster besonders?", answer: "Alte Häuser haben oft einzigartige Schätze — antike Möbel, Sammlerstücke oder Werkzeug — die beim Wert angerechnet werden können. Wir sortieren sorgfältig und informieren Sie über verwertbare Gegenstände." },
      { question: "Was kostet eine Entrümpelung in Kaster?", answer: "Wir erstellen nach Fotos oder einer kurzen Besichtigung ein verbindliches Festpreisangebot. Historische Gebäude können durch ihre Bauart etwas mehr Aufwand bedeuten — das besprechen wir ehrlich und transparent vorab." },
      { question: "Wie schnell können Sie in Kaster vor Ort sein?", answer: "Von Bergheim aus sind wir über die B477 in etwa 15–20 Minuten in Kaster. In dringenden Fällen oft noch am selben Tag — rufen Sie einfach an." },
      { question: "Führen Sie in Kaster auch vollständige Haushaltsauflösungen durch?", answer: "Ja, wir übernehmen die komplette Haushaltsauflösung in Kaster — von der ersten Besichtigung über die Räumung aller Räume bis zur besenreinen Übergabe." },
      { question: "Können Sie antike Gegenstände aus alten Häusern in Kaster bewerten?", answer: "Wir sortieren und identifizieren potenziell wertvolle Gegenstände. Gut erhaltene Antiquitäten, Möbel und Sammlerstücke werden vom Gesamtpreis abgezogen." },
      { question: "Gibt es in Kaster besondere Herausforderungen bei der Entrümpelung?", answer: "Historische Keller mit Natursteinwänden, enge Treppenhäuser und denkmalgeschützte Bausubstanz erfordern besonderes Feingefühl. Wir kennen diese Herausforderungen und gehen entsprechend vor." },
      { question: "Nehmen Sie in Kaster auch Schrottankäufe vor?", answer: "Ja, Altmetall, Eisen und Kupfer kaufen wir direkt vor Ort an. Gerade in alten Häusern gibt es oft gut erhaltenes Metall, das Ihren Gesamtpreis erheblich reduzieren kann." },
    ],
    metaDescription: "Entrümpelung Kaster ✓ Bedburg ✓ Historische Altbauten ✓ Festpreis ✓ Besenrein ✓ Haushaltsauflösung ☎ 02271 / 5880940",
  },

  "kirchherten": {
    name: "Kirchherten",
    parentCity: "Bedburg",
    parentSlug: "bedburg",
    plz: "50181",
    character: "Dorf in Bedburg mit altem Dorfkern und Kirche, Mischung aus Altbau und neueren Einfamilienhäusern",
    intro: "Kirchherten ist ein Dorf in der Stadt Bedburg mit einem alten Dorfkern und der namensgebenden Kirche. Die Bebauung umfasst ältere Häuser im Ortskern sowie neuere Wohngebiete in den Randlagen. Für Entrümpelungen — ob Keller, Garage oder Haushaltsauflösung — kommen wir nach Kirchherten mit Festpreisgarantie.",
    localInfo: "Unser Team aus Bergheim ist über die B477 schnell in Kirchherten und arbeitet auch in den kleinen Dörfern der Gemeinde Bedburg zuverlässig.",
    highlights: [
      "Altbau und neuere Einfamilienhäuser",
      "Keller, Dachboden und Garage",
      "Festpreis nach Fotos",
      "Besenreine Übergabe",
      "Diskrete Haushaltsauflösungen",
      "Schnelle Terminvergabe",
    ],
    nearbyAreas: [
      { name: "Bedburg", slug: "bedburg" },
      { name: "Kaster", slug: "kaster" },
      { name: "Bergheim", slug: "bergheim" },
      { name: "Elsdorf", slug: "elsdorf" },
    ],
    faqs: [
      { question: "Können Sie auch Dachböden in alten Häusern in Kirchherten räumen?", answer: "Ja, Dachböden sind einer unserer häufigsten Aufträge. Auch enge Treppen und schwere Gegenstände sind für unser Team kein Problem." },
    ],
    metaDescription: "Entrümpelung Kirchherten ✓ Bedburg ✓ Keller & Dachboden ✓ Festpreis ✓ Besenrein ✓ Schnell vor Ort ☎ 02271 / 5880940",
  },

  "lipp": {
    name: "Lipp",
    parentCity: "Bedburg",
    parentSlug: "bedburg",
    plz: "50181",
    character: "Kleines Dorf in Bedburg mit ländlichem Charakter und alten Hofstellen",
    intro: "Lipp ist ein kleines Dorf in der Gemeinde Bedburg mit ländlichem Flair und alten Hofanlagen. Entrümpelungen umfassen hier regelmäßig Scheunen, Keller und Garagen auf landwirtschaftlichen Anwesen. Wir kommen auch in die kleinen Ortschaften des Rhein-Erft-Kreises — mit Festpreis und besenreiner Übergabe.",
    localInfo: "Schrottankauf ist bei Hofanlagen in Lipp besonders interessant — Altmetall, Eisenschrott und andere Materialien können den Gesamtpreis der Entrümpelung erheblich reduzieren.",
    highlights: [
      "Schrottankauf bei Hofanlagen",
      "Scheune, Stall und Keller",
      "Festpreis nach Fotos",
      "Besenreine Übergabe",
      "Flexible Terminplanung",
      "Fachgerechte Entsorgung",
    ],
    nearbyAreas: [
      { name: "Bedburg", slug: "bedburg" },
      { name: "Kaster", slug: "kaster" },
      { name: "Bergheim", slug: "bergheim" },
      { name: "Elsdorf", slug: "elsdorf" },
    ],
    faqs: [
      { question: "Können Sie in Lipp auch Altmetall von einem Bauernhof ankaufen?", answer: "Ja, wir kaufen Altmetall, Eisenschrott und andere Metallobjekte direkt vor Ort an. Der Ankaufspreis wird auf Ihre Entrümpelungskosten angerechnet." },
    ],
    metaDescription: "Entrümpelung Lipp ✓ Bedburg ✓ Scheune & Keller ✓ Schrottankauf ✓ Festpreis ✓ Besenrein ☎ 02271 / 5880940",
  },

  /* ─────────────────────────────────────────
     BRÜHL
  ───────────────────────────────────────── */
  "vochem": {
    name: "Vochem",
    parentCity: "Brühl",
    parentSlug: "bruehl",
    plz: "50321",
    character: "Stadtteil Brühls nahe Phantasialand, Mix aus Wohngebiet und Gewerbeflächen",
    intro: "Vochem ist ein Stadtteil Brühls in unmittelbarer Nachbarschaft zum Freizeitpark Phantasialand — ein bekanntes Merkmal, das Vochem überregionale Bekanntheit gibt. Als Wohngebiet umfasst Vochem eine Mischung aus Einfamilienhäusern und neueren Mehrfamilienhäusern. Für Entrümpelungen und Haushaltsauflösungen in Vochem sind wir der zuverlässige Partner.",
    localInfo: "Wir sind in Vochem und dem gesamten Stadtgebiet Brühl regelmäßig im Einsatz. Über die A553 und die gute Straßenanbindung kommen wir schnell und günstig.",
    highlights: [
      "Schnelle Anfahrt über A553",
      "Einfamilienhäuser und Mehrfamilienhäuser",
      "Wohnungsentrümpelung für Vermieter",
      "Haushaltsauflösung und Nachlassräumung",
      "Festpreis nach Fotos oder Besichtigung",
      "Besenreine Übergabe",
    ],
    nearbyAreas: [
      { name: "Brühl", slug: "bruehl" },
      { name: "Kierberg", slug: "kierberg" },
      { name: "Hürth", slug: "huerth" },
      { name: "Wesseling", slug: "wesseling" },
    ],
    faqs: [
      { question: "Bieten Sie in Vochem auch Wohnungsauflösungen für Vermieter an?", answer: "Ja, wir arbeiten mit privaten Vermietern und Hausverwaltungen zusammen. Wir räumen die Wohnung komplett aus und übergeben besenrein — oft innerhalb eines Arbeitstages." },
    ],
    metaDescription: "Entrümpelung Vochem ✓ Brühl ✓ Wohnungsentrümpelung ✓ Haushaltsauflösung ✓ Festpreis ✓ Besenrein ☎ 02271 / 5880940",
  },

  "kierberg": {
    name: "Kierberg",
    parentCity: "Brühl",
    parentSlug: "bruehl",
    plz: "50321",
    character: "Wohngebiet in Brühl mit Einfamilienhäusern und grüner Wohnlage",
    intro: "Kierberg ist ein ruhiges Wohngebiet in Brühl mit vielen Einfamilienhäusern und einem hohen Grünanteil. Für Entrümpelungen — Keller, Dachboden, Garage oder Haushaltsauflösung — sind wir der richtige Ansprechpartner in Kierberg. Wir bieten Festpreise und besenreine Übergabe.",
    localInfo: "Kierberg liegt günstig zwischen Brühl-Mitte und Vochem. Wir kennen das Gebiet gut und sind schnell vor Ort — oft schon am nächsten Werktag.",
    highlights: [
      "Einfamilienhäuser mit Keller und Garage",
      "Haushaltsauflösung und Nachlassräumung",
      "Festpreis nach Fotos",
      "Besenreine Übergabe",
      "Wertanrechnung bei Möbeln und Metall",
      "Schnelle Terminvergabe",
    ],
    nearbyAreas: [
      { name: "Brühl", slug: "bruehl" },
      { name: "Vochem", slug: "vochem" },
      { name: "Hürth", slug: "huerth" },
      { name: "Erftstadt", slug: "erftstadt" },
    ],
    faqs: [
      { question: "Was kostet eine Kellerentrümpelung in Kierberg?", answer: "Kellerentrümpelungen starten typischerweise ab ca. 150 €, je nach Größe und Inhalt. Nach einem kurzen Foto oder einer Besichtigung erhalten Sie einen genauen Festpreis." },
    ],
    metaDescription: "Entrümpelung Kierberg ✓ Brühl ✓ Keller & Einfamilienhaus ✓ Festpreis ✓ Besenrein ✓ Schnell vor Ort ☎ 02271 / 5880940",
  },

  "pingsdorf": {
    name: "Pingsdorf",
    parentCity: "Brühl",
    parentSlug: "bruehl",
    plz: "50321",
    character: "Historischer Stadtteil mit Keramik-Geschichte — Pingsdorfer Ware ist weltbekanntes mittelalterliches Kulturgut",
    intro: "Pingsdorf ist ein historisch bedeutsamer Stadtteil Brühls, der durch die mittelalterliche Keramikindustrie — die sogenannte Pingsdorfer Ware — überregional bekannt ist. Das Ortsbild wird von älteren Häusern und ruhigen Wohnstraßen geprägt. Für Entrümpelungen in Pingsdorf bringen wir die nötige Erfahrung mit historischen Gebäuden mit.",
    localInfo: "Wir sind in Pingsdorf regelmäßig bei Hausentrümpelungen und Haushaltsauflösungen im Einsatz. Unser Team kennt die Besonderheiten älterer Gebäude und sortiert sorgfältig.",
    highlights: [
      "Erfahrung mit historischen Wohngebäuden",
      "Sorgfältige Sortierung bei wertvollen Objekten",
      "Haushaltsauflösung und Nachlassräumung",
      "Festpreis nach Besichtigung",
      "Besenreine Übergabe",
      "Schnelle Anfahrt aus dem Rhein-Erft-Kreis",
    ],
    nearbyAreas: [
      { name: "Brühl", slug: "bruehl" },
      { name: "Vochem", slug: "vochem" },
      { name: "Kierberg", slug: "kierberg" },
      { name: "Hürth", slug: "huerth" },
    ],
    faqs: [
      { question: "Können Sie bei der Entrümpelung in Pingsdorf auch antike Gegenstände bewerten?", answer: "Wir sortieren verwertbare Gegenstände sorgfältig aus und rechnen sie auf den Entrümpelungspreis an. Bei wertvollen Sammlerstücken oder Antiquitäten empfehlen wir, vorab einen Fachmann hinzuzuziehen." },
    ],
    metaDescription: "Entrümpelung Pingsdorf ✓ Brühl ✓ Historische Gebäude ✓ Festpreis ✓ Besenrein ✓ Haushaltsauflösung ☎ 02271 / 5880940",
  },

  /* ─────────────────────────────────────────
     WESSELING
  ───────────────────────────────────────── */
  "urfeld": {
    name: "Urfeld",
    parentCity: "Wesseling",
    parentSlug: "wesseling",
    plz: "50389",
    character: "Rheinnah gelegener Stadtteil Wesselings mit Chemie-Industrie-Geschichte und Wohngebiet am Rheinufer",
    intro: "Urfeld liegt direkt am Rhein und ist ein Stadtteil der Stadt Wesseling mit einer langen industriellen Geschichte durch die benachbarte Chemieindustrie. Der Wohnbestand umfasst ältere Häuser aus der Industriezeit sowie neuere Wohngebiete. Entrümpelungen in Urfeld — ob Wohnung, Keller oder Haus — erledigen wir schnell und professionell.",
    localInfo: "Über die A555 kommen wir aus unserem Rhein-Erft-Standort gut nach Urfeld. Wir bieten Festpreise und besenreine Übergabe.",
    highlights: [
      "Schnelle Anfahrt über A555",
      "Ältere Industrie-Wohnhäuser und neuere Objekte",
      "Wohnungsentrümpelung und Haushaltsauflösung",
      "Festpreis nach Fotos oder Besichtigung",
      "Besenreine Übergabe garantiert",
      "Fachgerechte Entsorgung",
    ],
    nearbyAreas: [
      { name: "Wesseling", slug: "wesseling" },
      { name: "Keldenich", slug: "keldenich" },
      { name: "Brühl", slug: "bruehl" },
      { name: "Hürth", slug: "huerth" },
    ],
    faqs: [
      { question: "Entrümpeln Sie in Urfeld auch Keller älterer Wohnhäuser?", answer: "Ja, ältere Keller mit Feuchtigkeit, schweren Möbeln und angesammeltem Hausrat sind für uns kein Problem. Wir bringen das passende Equipment mit." },
    ],
    metaDescription: "Entrümpelung Urfeld ✓ Wesseling ✓ Keller & Wohnung ✓ Festpreis ✓ Besenrein ✓ Schnell vor Ort ☎ 02271 / 5880940",
  },

  "keldenich": {
    name: "Keldenich",
    parentCity: "Wesseling",
    parentSlug: "wesseling",
    plz: "50389",
    character: "Wohngebiet in Wesseling mit Mehrfamilienhäusern und Einfamilienhäusern",
    intro: "Keldenich ist ein Wohngebiet in Wesseling mit einem guten Mix aus Mehrfamilienhäusern und Einfamilienhäusern. Für Entrümpelungen — ob Wohnung, Keller oder Haus — sind wir in Keldenich der zuverlässige Ansprechpartner. Festpreise und besenreine Übergabe sind bei uns Standard.",
    localInfo: "Über die gute Anbindung an Köln-Süd und die A555 kommen wir schnell nach Keldenich. Wir bieten kurze Wartezeiten und transparente Preise.",
    highlights: [
      "Mehrfamilienhäuser und Einfamilienhäuser",
      "Wohnungsentrümpelung für Vermieter",
      "Keller und Dachboden",
      "Festpreis nach Fotos",
      "Besenreine Übergabe",
      "Schnelle Terminvergabe",
    ],
    nearbyAreas: [
      { name: "Wesseling", slug: "wesseling" },
      { name: "Urfeld", slug: "urfeld" },
      { name: "Brühl", slug: "bruehl" },
      { name: "Hürth", slug: "huerth" },
    ],
    faqs: [
      { question: "Bieten Sie in Keldenich auch Wohnungsauflösungen für Hausverwaltungen an?", answer: "Ja, wir arbeiten mit Hausverwaltungen und Immobiliengesellschaften zusammen. Wir räumen Wohnungen komplett aus, übergeben besenrein und können eine Entsorgungsbestätigung ausstellen." },
    ],
    metaDescription: "Entrümpelung Keldenich ✓ Wesseling ✓ Wohnungsentrümpelung ✓ Festpreis ✓ Besenrein ✓ Schnell & fair ☎ 02271 / 5880940",
  },

  "berzdorf": {
    name: "Berzdorf",
    parentCity: "Wesseling",
    parentSlug: "wesseling",
    plz: "50389",
    character: "Kleines Dorf am Rand von Wesseling mit dörflichem Charakter",
    intro: "Berzdorf ist ein kleiner, ruhiger Ortsteil am Rand der Stadt Wesseling mit einem dörflichen Charakter und überwiegend Einfamilienhäusern. Für Entrümpelungen kommen wir auch nach Berzdorf — mit fairem Festpreis und besenreiner Übergabe.",
    localInfo: "Wir decken das gesamte Stadtgebiet Wesselings ab, einschließlich der kleineren Ortsteile wie Berzdorf. Kurze Wartezeiten und transparente Preise.",
    highlights: [
      "Einfamilienhäuser und Dorfhäuser",
      "Keller, Garage und Gartenhaus",
      "Festpreis nach Fotos",
      "Besenreine Übergabe",
      "Schrottankauf auf Anfrage",
      "Flexible Terminplanung",
    ],
    nearbyAreas: [
      { name: "Wesseling", slug: "wesseling" },
      { name: "Urfeld", slug: "urfeld" },
      { name: "Keldenich", slug: "keldenich" },
      { name: "Brühl", slug: "bruehl" },
    ],
    faqs: [
      { question: "Kommen Sie für kleine Aufträge nach Berzdorf?", answer: "Ja, auch einzelne Keller oder Garagen räumen wir gerne aus. Fragen Sie an — wir machen Ihnen ein faires Angebot." },
    ],
    metaDescription: "Entrümpelung Berzdorf ✓ Wesseling ✓ Keller & Einfamilienhaus ✓ Festpreis ✓ Besenrein ✓ Schnell vor Ort ☎ 02271 / 5880940",
  },
};

export const allStadtteilSlugs = Object.keys(stadtteile);
