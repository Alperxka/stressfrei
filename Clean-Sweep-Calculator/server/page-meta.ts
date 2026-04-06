const CITY_NAMES: Record<string, string> = {
  "bergheim": "Bergheim",
  "bedburg": "Bedburg",
  "kerpen": "Kerpen",
  "elsdorf": "Elsdorf",
  "pulheim": "Pulheim",
  "frechen": "Frechen",
  "huerth": "Hürth",
  "erftstadt": "Erftstadt",
  "rommerskirchen": "Rommerskirchen",
  "grevenbroich": "Grevenbroich",
  "rhein-erft-kreis": "Rhein-Erft-Kreis",
  "bruehl": "Brühl",
  "wesseling": "Wesseling",
  "quadrath-ichendorf": "Quadrath-Ichendorf",
  "niederaussem": "Niederaussem",
  "glesch": "Glesch",
  "paffendorf": "Paffendorf",
  "glessen": "Glessen",
  "oberaussem": "Oberaussem",
  "zieverich": "Zieverich",
  "thorr": "Thorr",
  "sindorf": "Sindorf",
  "horrem": "Horrem",
  "buir": "Buir",
  "manheim": "Manheim",
  "tuernich": "Türnich",
  "blatzheim": "Blatzheim",
  "brauweiler": "Brauweiler",
  "stommeln": "Stommeln",
  "sinnersdorf": "Sinnersdorf",
  "geyen": "Geyen",
  "koenigsdorf": "Königsdorf",
  "bachem": "Bachem",
  "habbelrath": "Habbelrath",
  "hermuelheim": "Hermülheim",
  "efferen": "Efferen",
  "gleuel": "Gleuel",
  "berrenrath": "Berrenrath",
  "liblar": "Liblar",
  "lechenich": "Lechenich",
  "gymnich": "Gymnich",
  "bliesheim": "Bliesheim",
  "friesheim": "Friesheim",
  "heppendorf": "Heppendorf",
  "berrendorf": "Berrendorf",
  "niederembt": "Niederembt",
  "oberembt": "Oberembt",
  "kapellen-grevenbroich": "Kapellen (Grevenbroich)",
  "gustorf": "Gustorf",
  "elsen": "Elsen",
  "evinghoven": "Evinghoven",
  "gilbach": "Gilbach",
  "oekoven": "Ökoven",
  "kaster": "Kaster",
  "kirchherten": "Kirchherten",
  "lipp": "Lipp",
  "vochem": "Vochem",
  "kierberg": "Kierberg",
  "pingsdorf": "Pingsdorf",
  "urfeld": "Urfeld",
  "keldenich": "Keldenich",
  "berzdorf": "Berzdorf",
  "koeln": "Köln",
  "duesseldorf": "Düsseldorf",
  "aachen": "Aachen",
  "bonn": "Bonn",
  "leverkusen": "Leverkusen",
};

type PageMeta = { title: string; description: string };

const STATIC_META: Record<string, PageMeta> = {
  "/": {
    title: "Stressfrei Entrümpelungen & Umzüge | Rhein-Erft-Kreis | Festpreis",
    description: "Ihr professioneller Partner für Entrümpelung, Haushaltsauflösung und Umzüge im Rhein-Erft-Kreis und NRW. Faire Festpreise, kostenlose Besichtigung. ☎ 02271 5880940",
  },
  "/entruempelung": {
    title: "Entrümpelung Rhein-Erft-Kreis | Festpreis | Stressfrei Entrümpelungen",
    description: "Professionelle Entrümpelung im Rhein-Erft-Kreis zum Festpreis. ✓ Kostenlose Besichtigung ✓ Besenreine Übergabe ✓ Wertanrechnung. Jetzt Angebot anfordern: 02271 5880940",
  },
  "/haushaltsaufloesung": {
    title: "Haushaltsauflösung Rhein-Erft-Kreis | Komplett-Service | Stressfrei",
    description: "Haushaltsauflösung im Rhein-Erft-Kreis zum Festpreis. Komplett-Service inkl. Entrümpelung, Wertanrechnung & besenreiner Übergabe. ☎ 02271 5880940",
  },
  "/wohnungsaufloesung": {
    title: "Wohnungsauflösung Rhein-Erft-Kreis | Festpreis | Stressfrei Entrümpelungen",
    description: "Wohnungsauflösung im Rhein-Erft-Kreis – professionell und zum fairen Festpreis. Inkl. Demontage, Entsorgung & besenreiner Übergabe. ☎ 02271 5880940",
  },
  "/nachlassaufloesung": {
    title: "Nachlassauflösung Rhein-Erft-Kreis | Einfühlsam & Diskret | Stressfrei",
    description: "Einfühlsame Nachlassauflösung im Rhein-Erft-Kreis. Wir kümmern uns respektvoll um den Nachlass – diskret, professionell und zum Festpreis. ☎ 02271 5880940",
  },
  "/firmenaufloesung": {
    title: "Firmenauflösung & Gewerberäumung NRW | Festpreis | Stressfrei Entrümpelungen",
    description: "Professionelle Firmenauflösung und Gewerberäumung in NRW. Zuverlässig, diskret und zum Festpreis. Kostenlose Besichtigung – ☎ 02271 5880940",
  },
  "/betriebsaufloesung": {
    title: "Betriebsauflösung & Gewerberäumung NRW | Festpreis | Stressfrei",
    description: "Professionelle Betriebsauflösung in NRW. Räumung von Produktionsstätten, Lagerhallen und Gewerbeimmobilien. Termingerecht zum Festpreis. ☎ 02271 5880940",
  },
  "/messie-wohnung": {
    title: "Messie Wohnung Räumung Rhein-Erft-Kreis | Diskret & Professionell",
    description: "Diskrete und professionelle Messie-Wohnung-Räumung im Rhein-Erft-Kreis. Erfahrenes Team, faire Preise, vollständige Entsorgung. ☎ 02271 5880940",
  },
  "/schrottankauf": {
    title: "Schrottankauf & Altmetall Ankauf NRW | Stressfrei Entrümpelungen",
    description: "Schrottankauf und Altmetall-Ankauf in NRW. Faire Preise für Kupfer, Eisen, Aluminium und mehr. Kostenlose Abholung möglich. ☎ 02271 5880940",
  },
  "/entruempelung-in-der-naehe": {
    title: "Entrümpelung in der Nähe | Rhein-Erft-Kreis & Köln | Stressfrei",
    description: "Entrümpelung in Ihrer Nähe im Rhein-Erft-Kreis und Umgebung. Schnelle Reaktionszeiten, faire Festpreise. Jetzt kostenlos anfragen: ☎ 02271 5880940",
  },
  "/kellerentruempelung": {
    title: "Kellerentrümpelung Rhein-Erft-Kreis | Festpreis | Stressfrei Entrümpelungen",
    description: "Professionelle Kellerentrümpelung im Rhein-Erft-Kreis zum Festpreis. Alles aus einer Hand – Demontage, Entsorgung & besenreine Übergabe. ☎ 02271 5880940",
  },
  "/dachbodenentraeumung": {
    title: "Dachbodenräumung Rhein-Erft-Kreis | Festpreis | Stressfrei Entrümpelungen",
    description: "Professionelle Dachbodenräumung im Rhein-Erft-Kreis zum Festpreis. Schnell, gründlich, besenrein. Kostenlose Besichtigung: ☎ 02271 5880940",
  },
  "/sperrmuell": {
    title: "Sperrmüllentsorgung Rhein-Erft-Kreis | Abholung & Entsorgung | Stressfrei",
    description: "Sperrmüll abholen und entsorgen im Rhein-Erft-Kreis. Schnell, zuverlässig, faire Preise. Kostenlose Einschätzung: ☎ 02271 5880940",
  },
  "/kosten-entruempelung": {
    title: "Entrümpelung Kosten 2026 | Was kostet eine Entrümpelung? | Stressfrei",
    description: "Was kostet eine Entrümpelung? Aktuelle Preise und Kostenübersicht 2026. Transparente Festpreise ohne versteckte Kosten. Kostenlose Einschätzung: ☎ 02271 5880940",
  },
  "/umzug": {
    title: "Umzugsunternehmen Rhein-Erft-Kreis | Stressfrei & Fair | Stressfrei Umzüge",
    description: "Professionelles Umzugsunternehmen im Rhein-Erft-Kreis. Faire Festpreise, erfahrenes Team, pünktlich & zuverlässig. Jetzt Angebot einholen: ☎ 02271 5880940",
  },
  "/kosten-umzug": {
    title: "Umzug Kosten 2026 | Was kostet ein Umzug? | Stressfrei Entrümpelungen",
    description: "Umzugskosten 2026 im Überblick. Kostenrechner und Preistipps für Ihren Umzug im Rhein-Erft-Kreis. Kostenlose Beratung: ☎ 02271 5880940",
  },
  "/privatumzug": {
    title: "Privatumzug Rhein-Erft-Kreis | Stressfrei & Günstig | Stressfrei Umzüge",
    description: "Privatumzug im Rhein-Erft-Kreis zum fairen Festpreis. Erfahrenes Umzugsteam, kompletter Service von der Verpackung bis zur Aufstellung. ☎ 02271 5880940",
  },
  "/seniorenumzug": {
    title: "Seniorenumzug Rhein-Erft-Kreis | Behutsam & Professionell | Stressfrei",
    description: "Einfühlsamer Seniorenumzug im Rhein-Erft-Kreis. Wir kümmern uns um alles – Einpacken, Transport, Aufbau. Fair und zuverlässig. ☎ 02271 5880940",
  },
  "/bueroumzug": {
    title: "Büroumzug & Firmenumzug NRW | Stressfrei & Pünktlich | Stressfrei Umzüge",
    description: "Professioneller Büroumzug in NRW. Minimale Ausfallzeiten, erfahrenes Team, zuverlässige Terminplanung. Kostenlose Besichtigung: ☎ 02271 5880940",
  },
  "/firmenumzug": {
    title: "Firmenumzug NRW | Professionell & Termingerecht | Stressfrei Umzüge",
    description: "Firmenumzug in NRW zum Festpreis. Komplettservice: Planung, Abbau, Transport, Aufbau. Minimale Betriebsunterbrechung. Kostenlose Besichtigung: ☎ 02271 5880940",
  },
  "/gewerbeumzug": {
    title: "Gewerbeumzug NRW | Laden, Lager & Betrieb | Stressfrei Umzüge",
    description: "Gewerbeumzug NRW – für Ladenlokal, Werkstatt, Lager oder Praxis. Professionell, termingerecht, Festpreisgarantie. Kostenlose Besichtigung: ☎ 02271 5880940",
  },
  "/behoerdenumzug": {
    title: "Behördenumzug NRW | Diskret, Sicher & Termingerecht | Stressfrei",
    description: "Behördenumzug NRW – DSGVO-konform, sicherer Aktentransport, Festpreisgarantie. Für Ämter, Behörden und öffentliche Einrichtungen. ☎ 02271 5880940",
  },
  "/archivumzug": {
    title: "Archivumzug NRW | Akten & Archive sicher umziehen | Stressfrei",
    description: "Archivumzug NRW – Akten, Ordner und Archive diskret, systematisch und sicher transportieren. Für Kanzleien, Behörden & Unternehmen. ☎ 02271 5880940",
  },
  "/fernumzug": {
    title: "Fernumzug NRW | Deutschlandweit umziehen | Stressfrei Umzüge",
    description: "Fernumzug aus NRW – deutschlandweit zum Festpreis. Von NRW in jedes Bundesland, vollversichert, Komplettservice. Kostenlose Besichtigung: ☎ 02271 5880940",
  },
  "/einlagerung-rhein-erft-kreis": {
    title: "Einlagerung Rhein-Erft-Kreis | Möbel & Hausrat lagern | Stressfrei",
    description: "Sichere Einlagerung von Möbeln und Hausrat im Rhein-Erft-Kreis. Flexible Laufzeiten, faire Preise. Kombination mit Umzug oder Entrümpelung möglich. ☎ 02271 5880940",
  },
  "/kontakt": {
    title: "Kontakt | Stressfrei Entrümpelungen & Umzüge | Bergheim",
    description: "Nehmen Sie Kontakt auf! Kostenlose Beratung und Angebotserstellung für Entrümpelung, Haushaltsauflösung oder Umzug. ☎ 02271 5880940 | Bergheim, NRW",
  },
  "/terminplaner": {
    title: "Terminplaner | Besichtigungstermin online buchen | Stressfrei Entrümpelungen",
    description: "Buchen Sie Ihren kostenlosen Besichtigungstermin online. Schnell, einfach und unverbindlich. Stressfrei Entrümpelungen Bergheim.",
  },
  "/standorte": {
    title: "Standorte & Einsatzgebiete | Rhein-Erft-Kreis & NRW | Stressfrei Entrümpelungen",
    description: "Stressfrei Entrümpelungen ist in ganz Rhein-Erft-Kreis und NRW aktiv. Bergheim, Kerpen, Pulheim, Hürth, Erftstadt und mehr. ☎ 02271 5880940",
  },
  "/faq": {
    title: "FAQ | Häufige Fragen zur Entrümpelung & Umzug | Stressfrei Entrümpelungen",
    description: "Antworten auf häufige Fragen zu Entrümpelung, Haushaltsauflösung und Umzug. Kosten, Ablauf, Wertanrechnung und mehr erklärt.",
  },
  "/ueber-uns": {
    title: "Über uns | Stressfrei Entrümpelungen & Umzüge Bergheim",
    description: "Lernen Sie das Team von Stressfrei Entrümpelungen kennen. Erfahren, zuverlässig und fair – Ihr Partner im Rhein-Erft-Kreis seit Jahren.",
  },
  "/ratgeber": {
    title: "Ratgeber Entrümpelung & Umzug | Tipps & Infos | Stressfrei Entrümpelungen",
    description: "Hilfreiche Tipps und Ratgeber rund um Entrümpelung, Haushaltsauflösung und Umzug. Informieren Sie sich kostenlos.",
  },
  "/galerie": {
    title: "Galerie | Vorher-Nachher-Bilder | Stressfrei Entrümpelungen & Umzüge",
    description: "Sehen Sie unsere Vorher-Nachher-Bilder aus echten Entrümpelung- und Haushaltsauflösungs-Projekten im Rhein-Erft-Kreis. Qualität, die überzeugt.",
  },
  "/rueckruf": {
    title: "Rückruf anfordern | Stressfrei Entrümpelungen & Umzüge",
    description: "Rückruf kostenlos anfordern. Wir melden uns schnellstmöglich bei Ihnen zurück für Ihre Entrümpelung oder Ihren Umzug im Rhein-Erft-Kreis.",
  },
  "/impressum": {
    title: "Impressum | Stressfrei Entrümpelungen & Umzüge Bergheim",
    description: "Impressum von Stressfrei Entrümpelungen & Umzüge, Bergheim, Rhein-Erft-Kreis.",
  },
  "/agb": {
    title: "AGB | Stressfrei Entrümpelungen & Umzüge",
    description: "Allgemeine Geschäftsbedingungen von Stressfrei Entrümpelungen & Umzüge Bergheim.",
  },
  "/datenschutz": {
    title: "Datenschutzerklärung | Stressfrei Entrümpelungen & Umzüge",
    description: "Datenschutzerklärung von Stressfrei Entrümpelungen & Umzüge gemäß DSGVO.",
  },
  "/entruempelung-bergheim": { title: "Entrümpelung Bergheim | Festpreis | Stressfrei Entrümpelungen", description: "Professionelle Entrümpelung in Bergheim zum Festpreis. ✓ Kostenlose Besichtigung ✓ Besenreine Übergabe. Ihr lokaler Partner: ☎ 02271 5880940" },
  "/entruempelung-bedburg": { title: "Entrümpelung Bedburg | Festpreis | Stressfrei Entrümpelungen", description: "Entrümpelung in Bedburg zum fairen Festpreis. Professionell, zuverlässig und schnell. Kostenlose Besichtigung: ☎ 02271 5880940" },
  "/entruempelung-kerpen": { title: "Entrümpelung Kerpen | Festpreis | Stressfrei Entrümpelungen", description: "Entrümpelung in Kerpen – schnell, sauber und zum Festpreis. Kostenlose Besichtigung und Angebotserstellung. ☎ 02271 5880940" },
  "/entruempelung-elsdorf": { title: "Entrümpelung Elsdorf | Festpreis | Stressfrei Entrümpelungen", description: "Professionelle Entrümpelung in Elsdorf zum Festpreis. Besenreine Übergabe garantiert. Kostenlose Besichtigung: ☎ 02271 5880940" },
  "/entruempelung-pulheim": { title: "Entrümpelung Pulheim | Festpreis | Stressfrei Entrümpelungen", description: "Entrümpelung in Pulheim zum fairen Festpreis. Schnell und professionell – Ihr lokaler Ansprechpartner. ☎ 02271 5880940" },
  "/entruempelung-frechen": { title: "Entrümpelung Frechen | Festpreis | Stressfrei Entrümpelungen", description: "Entrümpelung in Frechen – professionell und zum Festpreis. Kostenlose Besichtigung, besenreine Übergabe. ☎ 02271 5880940" },
  "/entruempelung-huerth": { title: "Entrümpelung Hürth | Festpreis | Stressfrei Entrümpelungen", description: "Entrümpelung in Hürth zum fairen Festpreis. Erfahrenes Team, schnelle Abwicklung, besenreine Übergabe. ☎ 02271 5880940" },
  "/entruempelung-erftstadt": { title: "Entrümpelung Erftstadt | Festpreis | Stressfrei Entrümpelungen", description: "Entrümpelung in Erftstadt – fair, schnell und professionell. Kostenlose Besichtigung vor Ort. ☎ 02271 5880940" },
  "/entruempelung-rommerskirchen": { title: "Entrümpelung Rommerskirchen | Festpreis | Stressfrei Entrümpelungen", description: "Professionelle Entrümpelung in Rommerskirchen. Faire Festpreise, zuverlässiges Team. Kostenlose Besichtigung: ☎ 02271 5880940" },
  "/entruempelung-grevenbroich": { title: "Entrümpelung Grevenbroich | Festpreis | Stressfrei Entrümpelungen", description: "Entrümpelung in Grevenbroich zum Festpreis. Professionell, pünktlich, besenrein. Kostenlose Besichtigung: ☎ 02271 5880940" },
  "/entruempelung-bruehl": { title: "Entrümpelung Brühl | Festpreis | Stressfrei Entrümpelungen", description: "Professionelle Entrümpelung in Brühl zum Festpreis. ✓ Kostenlose Besichtigung ✓ Besenreine Übergabe. Ihr lokaler Partner: ☎ 02271 5880940" },
  "/entruempelung-wesseling": { title: "Entrümpelung Wesseling | Festpreis | Stressfrei Entrümpelungen", description: "Entrümpelung in Wesseling zum fairen Festpreis. Professionell, zuverlässig und schnell. Kostenlose Besichtigung: ☎ 02271 5880940" },
  "/entruempelung-rhein-erft-kreis": { title: "Entrümpelung Rhein-Erft-Kreis | Alle Städte | Stressfrei Entrümpelungen", description: "Entrümpelung im gesamten Rhein-Erft-Kreis. Bergheim, Kerpen, Pulheim, Hürth und mehr. Festpreis, besenreine Übergabe. ☎ 02271 5880940" },
  "/umzugsunternehmen-rhein-erft-kreis": { title: "Umzugsunternehmen Rhein-Erft-Kreis | Stressfrei & Fair | Stressfrei Umzüge", description: "Ihr Umzugsunternehmen im Rhein-Erft-Kreis. Alle 10 Städte abgedeckt. Professionell, pünktlich und zum fairen Festpreis. ☎ 02271 5880940" },
  "/umzugsunternehmen-bergheim": { title: "Umzugsunternehmen Bergheim | Stressfrei & Fair | Stressfrei Umzüge", description: "Ihr Umzugsunternehmen in Bergheim. Professionell, pünktlich und zum fairen Festpreis. Jetzt Angebot einholen: ☎ 02271 5880940" },
  "/umzugsunternehmen-bedburg": { title: "Umzugsunternehmen Bedburg | Stressfrei & Fair | Stressfrei Umzüge", description: "Professionelles Umzugsunternehmen in Bedburg. Faire Preise, erfahrenes Team. Kostenlose Beratung: ☎ 02271 5880940" },
  "/umzugsunternehmen-kerpen": { title: "Umzugsunternehmen Kerpen | Stressfrei & Fair | Stressfrei Umzüge", description: "Zuverlässiges Umzugsunternehmen in Kerpen. Faire Festpreise, professionelle Abwicklung. ☎ 02271 5880940" },
  "/umzugsunternehmen-elsdorf": { title: "Umzugsunternehmen Elsdorf | Stressfrei & Fair | Stressfrei Umzüge", description: "Ihr Umzugsunternehmen in Elsdorf. Professionell und zum Festpreis. Kostenlose Besichtigung: ☎ 02271 5880940" },
  "/umzugsunternehmen-pulheim": { title: "Umzugsunternehmen Pulheim | Stressfrei & Fair | Stressfrei Umzüge", description: "Professionelles Umzugsunternehmen in Pulheim. Schnell, zuverlässig, faire Preise. ☎ 02271 5880940" },
  "/umzugsunternehmen-frechen": { title: "Umzugsunternehmen Frechen | Stressfrei & Fair | Stressfrei Umzüge", description: "Ihr Umzugsunternehmen in Frechen – erfahren und fair. Jetzt Angebot einholen: ☎ 02271 5880940" },
  "/umzugsunternehmen-huerth": { title: "Umzugsunternehmen Hürth | Stressfrei & Fair | Stressfrei Umzüge", description: "Zuverlässiges Umzugsunternehmen in Hürth. Faire Festpreise, professionelles Team. ☎ 02271 5880940" },
  "/umzugsunternehmen-erftstadt": { title: "Umzugsunternehmen Erftstadt | Stressfrei & Fair | Stressfrei Umzüge", description: "Umzugsunternehmen in Erftstadt – professionell und zum Festpreis. Kostenlose Beratung: ☎ 02271 5880940" },
  "/umzugsunternehmen-rommerskirchen": { title: "Umzugsunternehmen Rommerskirchen | Stressfrei & Fair | Stressfrei Umzüge", description: "Ihr Umzugsunternehmen in Rommerskirchen. Professionell, pünktlich und zum fairen Festpreis. ☎ 02271 5880940" },
  "/umzugsunternehmen-grevenbroich": { title: "Umzugsunternehmen Grevenbroich | Stressfrei & Fair | Stressfrei Umzüge", description: "Zuverlässiges Umzugsunternehmen in Grevenbroich. Faire Preise, erfahrenes Team. ☎ 02271 5880940" },
  "/umzugsunternehmen-koeln": { title: "Umzugsunternehmen Köln | Stressfrei & Fair | Stressfrei Umzüge", description: "Professionelles Umzugsunternehmen in Köln und Umgebung. Faire Festpreise, erfahrenes Team, pünktlich. ☎ 02271 5880940" },
  "/umzugsunternehmen-duesseldorf": { title: "Umzugsunternehmen Düsseldorf | Stressfrei & Fair | Stressfrei Umzüge", description: "Ihr Umzugsunternehmen in Düsseldorf. Professionell und zum Festpreis. Kostenlose Beratung: ☎ 02271 5880940" },
  "/umzugsunternehmen-aachen": { title: "Umzugsunternehmen Aachen | Stressfrei & Fair | Stressfrei Umzüge", description: "Zuverlässiges Umzugsunternehmen in Aachen. Faire Festpreise, professionelle Abwicklung. ☎ 02271 5880940" },
  "/kostenuebernahme-durch-die-pflegekasse-bei-entruempelung-und-umzug-fuer-senioren": {
    title: "Kostenübernahme Pflegekasse bei Entrümpelung für Senioren | Stressfrei",
    description: "Wann übernimmt die Pflegekasse Kosten für Entrümpelung und Umzug bei Senioren? Alle Infos und Tipps zur Beantragung.",
  },
  "/entruempelung-rhein-erft-kreis-preise": {
    title: "Entrümpelung Preise Rhein-Erft-Kreis 2026 | Aktuelle Kosten | Stressfrei",
    description: "Aktuelle Preise für Entrümpelung im Rhein-Erft-Kreis 2026. Was kostet eine Entrümpelung? Kostenübersicht und Tipps.",
  },
  "/missverstaendnisse-zum-thema-entruempelung": {
    title: "Häufige Missverständnisse zur Entrümpelung | Ratgeber | Stressfrei",
    description: "Die häufigsten Missverständnisse zum Thema Entrümpelung aufgeklärt. Was stimmt und was nicht? Ratgeber von Stressfrei Entrümpelungen.",
  },
  "/wie-man-eine-professionelle-entruempelungsfirma-engagiert": {
    title: "Professionelle Entrümpelungsfirma beauftragen | Ratgeber | Stressfrei",
    description: "Wie finde ich eine gute Entrümpelungsfirma? Worauf achten? Ratgeber mit Tipps zur Auswahl des richtigen Anbieters.",
  },
  "/entruempelungstipps": {
    title: "Entrümpelungstipps | Effizient entrümpeln | Stressfrei Entrümpelungen",
    description: "Praktische Tipps für eine effiziente Entrümpelung. Von der Vorbereitung bis zur Entsorgung – so klappt es stressfrei.",
  },
  "/was-kostet-sperrmuell": {
    title: "Was kostet Sperrmüll? Alle Kosten im Überblick | Stressfrei Entrümpelungen",
    description: "Aktuelle Preise für Sperrmüll 2026. Kostenlos oder kostenpflichtig? Alternativen zur Entsorgung. Alle Infos kompakt.",
  },
  "/haushaltsaufloesung-kosten-2026": {
    title: "Haushaltsauflösung Kosten 2026 | Was zahlen Sie wirklich? | Stressfrei",
    description: "Haushaltsauflösung Kosten 2026: Womit müssen Sie rechnen? Preisübersicht, Tipps zur Kostensenkung & Wertanrechnung erklärt.",
  },
  "/umzugscheckliste": {
    title: "Umzugscheckliste 2026 | Interaktiv & Kostenlos | Stressfrei Umzüge",
    description: "Kostenlose interaktive Umzugscheckliste 2026 mit 40+ Aufgaben in 6 Phasen. Von 8 Wochen vorher bis nach dem Umzug – nichts vergessen.",
  },
  "/entsorgungsguide": {
    title: "Entsorgungsguide: Was darf in den Sperrmüll? Kosten & Tipps | Stressfrei",
    description: "Was darf wohin? Unser Entsorgungsguide erklärt, wie Sie Sperrmüll, Elektroschrott, Sondermüll und mehr korrekt entsorgen. Kostenloser Ratgeber.",
  },
  "/wertanrechnung-bei-der-entruempelung": {
    title: "Wertanrechnung bei Entrümpelung | Geld sparen | Stressfrei Entrümpelungen",
    description: "Wertanrechnung bei der Entrümpelung: Wie verwertbare Gegenstände den Preis senken. Tipps zur Vorbereitung und was angerechnet werden kann.",
  },
  "/haushaltsaufloesung-vorbereiten": {
    title: "Haushaltsauflösung vorbereiten | Schritt-für-Schritt | Stressfrei",
    description: "So bereiten Sie eine Haushaltsauflösung optimal vor. Checkliste, Tipps zu Wertgegenständen und alles was Sie wissen müssen. Kostenloser Ratgeber.",
  },
  "/umzugshelfer-tipps": {
    title: "Umzugshelfer oder Umzugsunternehmen? Kosten & Vergleich | Stressfrei",
    description: "Umzugshelfer organisieren: Tipps zu Rechtsfragen, Versicherung und wie Sie alles optimal koordinieren. Ratgeber von Stressfrei Umzüge.",
  },
  "/entruempelung-nach-todesfall": {
    title: "Entrümpelung nach Todesfall: Leitfaden für Angehörige | Stressfrei",
    description: "Entrümpelung und Wohnungsauflösung nach einem Todesfall. Einfühlsam, diskret und professionell. Wir helfen Ihnen in schwierigen Zeiten. ☎ 02271 5880940",
  },
  "/gruenschnitt-entsorgen-kosten": {
    title: "Was kostet Grünschnitt entsorgen? Preise & Tipps NRW | Stressfrei",
    description: "Grünschnitt entsorgen in NRW: Kosten, Möglichkeiten und Tipps. Vom Containerdienst bis zur kostenlosen Entsorgung – alle Optionen erklärt.",
  },
  "/haushaltsaufloesung-bei-trennung": {
    title: "Haushaltsauflösung bei Trennung & Scheidung | Ratgeber | Stressfrei",
    description: "Haushaltsauflösung bei Trennung: Was passiert mit gemeinsamen Möbeln? Tipps zur fairen Aufteilung und wann ein Profi sinnvoll ist.",
  },
  "/haushaltsaufloesung-checkliste": {
    title: "Haushaltsauflösung Checkliste 2026 | Schritt-für-Schritt | Stressfrei",
    description: "Haushaltsauflösung Checkliste 2026: Alle Schritte von der Planung bis zur besenreinen Übergabe. Nichts vergessen mit unserem kostenlosen Ratgeber.",
  },
  "/kueche-entruempeln": {
    title: "Küche entrümpeln | Tipps & Anleitung | Stressfrei Entrümpelungen",
    description: "Küche entrümpeln: Schritt für Schritt zu mehr Ordnung. Tipps zum Ausmisten, Sortieren und Entsorgen von Küchengegenständen.",
  },
  "/sachen-aus-haushaltsaufloesung-verkaufen": {
    title: "Wer kauft Sachen aus einer Haushaltsauflösung? 5 Wege | Stressfrei",
    description: "Möbel und Gegenstände aus der Haushaltsauflösung verkaufen: eBay, Flohmärkte, Händler – alle Optionen im Vergleich.",
  },
  "/sperrmull-rhein-erft-kreis": {
    title: "Sperrmüll Rhein-Erft-Kreis 2026 | Anmelden, Kosten & Alternativen",
    description: "Sperrmüll im Rhein-Erft-Kreis 2026: Wie anmelden, was kostet es, welche Alternativen gibt es? Alle Infos kompakt.",
  },
  "/upcycling-nach-entruempelung": {
    title: "Upcycling nach der Entrümpelung: Kreative Ideen für Möbel & Deko | Stressfrei",
    description: "Nach der Entrümpelung: Alte Möbel und Gegenstände kreativ umnutzen statt entsorgen. Upcycling-Ideen und Inspirationen.",
  },
  "/umzugskosten-rhein-erft-kreis": {
    title: "Umzugskosten Rhein-Erft-Kreis 2026 | Preise & Tipps | Stressfrei",
    description: "Umzugskosten im Rhein-Erft-Kreis 2026: Was kostet ein professioneller Umzug? Preisübersicht, Spartipps und kostenloser Vergleich.",
  },
  "/umzugstransporter-beladen": {
    title: "Umzugstransporter richtig beladen: Profi-Tipps & Checkliste | Stressfrei",
    description: "Umzugstransporter optimal beladen: Sicherheits-Tipps, Packreihenfolge und worauf Sie beim Beladen achten müssen. Kostenloser Ratgeber.",
  },
  "/was-gehoert-zum-sperrmuell": {
    title: "Was gehört zum Sperrmüll? Komplette Liste NRW 2026 | Stressfrei",
    description: "Was darf in den Sperrmüll in NRW? Komplette Liste erlaubter und verbotener Gegenstände. Alternativen für Sondermüll erklärt.",
  },
  "/wohnungsaufloesung-selbst-oder-firma": {
    title: "Wohnungsauflösung selbst oder Firma beauftragen? | Ratgeber | Stressfrei",
    description: "Wohnungsauflösung selbst oder Profi beauftragen? Kostenvergleich, Vor- und Nachteile und wann ein Fachbetrieb sinnvoll ist.",
  },
  "/wohnungsuebergabe-nach-haushaltsaufloesung": {
    title: "Wohnungsübergabe nach Haushaltsauflösung | Tipps | Stressfrei",
    description: "Worauf achten bei der Wohnungsübergabe nach einer Haushaltsauflösung? Tipps zu Schäden, Protokoll und besenreiner Übergabe.",
  },
  "/preise-rhein-erft-kreis": {
    title: "Entrümpelung Preise Rhein-Erft-Kreis 2026 | Kostenübersicht | Stressfrei",
    description: "Aktuelle Preise für Entrümpelung, Haushaltsauflösung und Umzug im Rhein-Erft-Kreis 2026. Transparente Kostenübersicht ohne versteckte Kosten.",
  },
  "/senioren-umzug-nrw": {
    title: "Seniorenumzug NRW | Behutsam & Professionell | Stressfrei Umzüge",
    description: "Seniorenumzug in NRW – einfühlsam, professionell und zum fairen Festpreis. Komplettservice für Senioren: Einpacken, Transport, Aufbau. ☎ 02271 5880940",
  },
  "/messie-entruempelung": {
    title: "Messie Entrümpelung NRW | Diskret & Professionell | Rhein-Erft-Kreis",
    description: "Professionelle Messie-Entrümpelung in NRW. Diskret, erfahren, ohne Vorwürfe. Faire Festpreise, vollständige Entsorgung. ☎ 02271 5880940",
  },
};

const CITY_PATTERNS: Array<{
  prefix: string;
  getTitle: (city: string) => string;
  getDesc: (city: string) => string;
}> = [
  {
    prefix: "entruempelung-",
    getTitle: (city) => `Entrümpelung ${city} | Festpreis | Stressfrei Entrümpelungen`,
    getDesc: (city) => `Professionelle Entrümpelung in ${city} zum Festpreis. ✓ Kostenlose Besichtigung ✓ Besenreine Übergabe ✓ Wertanrechnung. ☎ 02271 5880940`,
  },
  {
    prefix: "umzugsunternehmen-",
    getTitle: (city) => `Umzugsunternehmen ${city} | Stressfrei & Fair | Stressfrei Umzüge`,
    getDesc: (city) => `Professionelles Umzugsunternehmen in ${city}. Faire Festpreise, zuverlässiges Team. Jetzt Angebot einholen: ☎ 02271 5880940`,
  },
  {
    prefix: "kellerentruempelung-",
    getTitle: (city) => `Kellerentrümpelung ${city} | Festpreis | Stressfrei Entrümpelungen`,
    getDesc: (city) => `Professionelle Kellerentrümpelung in ${city} zum Festpreis. Schnell, gründlich, besenrein. Kostenlose Besichtigung: ☎ 02271 5880940`,
  },
  {
    prefix: "haushaltsaufloesung-",
    getTitle: (city) => `Haushaltsauflösung ${city} | Festpreis | Stressfrei Entrümpelungen`,
    getDesc: (city) => `Komplett-Haushaltsauflösung in ${city} zum fairen Festpreis. Wertanrechnung möglich. Besenreine Übergabe. ☎ 02271 5880940`,
  },
  {
    prefix: "wohnungsaufloesung-",
    getTitle: (city) => `Wohnungsauflösung ${city} | Festpreis | Stressfrei Entrümpelungen`,
    getDesc: (city) => `Professionelle Wohnungsauflösung in ${city}. Besenreine Übergabe zum Festpreis. Demontage, Entsorgung inkl. ☎ 02271 5880940`,
  },
];

function capitalizeCitySlug(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("-");
}

export function getPageMeta(path: string): PageMeta | null {
  const cleanPath = path.split("?")[0];

  if (STATIC_META[cleanPath]) return STATIC_META[cleanPath];

  for (const pattern of CITY_PATTERNS) {
    const candidate = cleanPath.slice(1);
    if (candidate.startsWith(pattern.prefix)) {
      const citySlug = candidate.slice(pattern.prefix.length);
      if (citySlug) {
        const cityName = CITY_NAMES[citySlug] ?? capitalizeCitySlug(citySlug);
        return {
          title: pattern.getTitle(cityName),
          description: pattern.getDesc(cityName),
        };
      }
    }
  }

  return null;
}
