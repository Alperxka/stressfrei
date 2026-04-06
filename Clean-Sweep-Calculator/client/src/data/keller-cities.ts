import type { ServiceCityData } from "@/components/service-city-page";

const neighbors12 = [
  { name: "Bergheim", slug: "bergheim" },
  { name: "Kerpen", slug: "kerpen" },
  { name: "Bedburg", slug: "bedburg" },
  { name: "Elsdorf", slug: "elsdorf" },
  { name: "Pulheim", slug: "pulheim" },
  { name: "Frechen", slug: "frechen" },
  { name: "Hürth", slug: "huerth" },
  { name: "Erftstadt", slug: "erftstadt" },
  { name: "Rommerskirchen", slug: "rommerskirchen" },
  { name: "Grevenbroich", slug: "grevenbroich" },
  { name: "Brühl", slug: "bruehl" },
  { name: "Wesseling", slug: "wesseling" },
];

function neighbors(excludeSlug: string) {
  return neighbors12.filter(c => c.slug !== excludeSlug).slice(0, 8);
}

export const kellerCities: Record<string, ServiceCityData> = {
  bergheim: {
    cityName: "Bergheim",
    slug: "bergheim",
    plz: "50126",
    einwohner: "ca. 65.000",
    metaDescription:
      "Kellerentrümpelung Bergheim ✓ Schnell & günstig ✓ Festpreis ✓ Wertanrechnung ✓ Entsorgung inklusive ✓ Alle Stadtteile ☎ 02271 / 5880940",
    introText: [
      "Der Keller — in vielen Bergheimer Haushalten über Jahrzehnte die stille Sammelstelle für alles, was oben keinen Platz mehr findet. Besonders in den Bergarbeitersiedlungen von Quadrath-Ichendorf und Niederaußem sind Keller oft vollgestopft mit Werkzeug, Metallteilen, alten Maschinen und Vorräten aus der aktiven Bergbauzeit. Diese Keller brauchen Erfahrung bei der Entrümpelung.",
      "Wir führen Kellerentrümpelungen in Bergheim und allen Stadtteilen professionell durch — schnell, vollständig und zu einem fairen Festpreis. Alles, was Schrottwert oder Wiederverkaufswert hat, wird auf den Preis angerechnet. Metallschrott, Altmetall und gut erhaltene Elektrogeräte sind in Bergheimer Kellern häufig zu finden und können Ihre Kosten erheblich senken.",
      "In Bergheims Mehrfamilienhäusern und älteren Wohnblöcken gibt es viele gemeinschaftliche Keller und Abstellräume, die über viele Mieter hinweg immer voller geworden sind. Wir räumen diese Gemeinschaftskeller auf Anfrage von Hausverwaltungen oder Eigentümern vollständig aus — besenrein und sortiert nach Wertstoff, Sperrmüll und Sondermüll.",
      "Von Bergheim-Mitte über Ahe, Glesch und Paffendorf bis nach Büsdorf und Zieverich — wir sind in der gesamten Kreisstadt Bergheim aktiv. Kostenlose Besichtigung, verbindlicher Festpreis, vollständige Entsorgung: Das ist unser Versprechen für jede Kellerentrümpelung in Bergheim.",
    ],
    localInfo: "In Bergheimer Kellern aus der Bergmann-Ära finden wir häufig Werkzeugsammlungen, schwere Metallteile und technische Geräte aus der Braunkohlezeit. Wir sortieren fachkundig, bewerten Altmetall und Schrott separat und rechnen es auf den Preis an — oft reduziert das die Kosten erheblich.",
    highlights: [
      "Kellerentrümpelung Bergheim inkl. aller Stadtteile",
      "Wertanrechnung für Werkzeug, Schrott und Altmetall",
      "Spezialisiert auf Bergmann-Keller aus der Tagebauzeit",
      "Besenreine Übergabe nach Abschluss",
      "Festpreis nach kostenloser Besichtigung",
      "Entsorgung nach allen gesetzlichen Vorschriften",
    ],
    faqs: [
      {
        question: "Was kostet eine Kellerentrümpelung in Bergheim?",
        answer:
          "Kleine Keller beginnen ab ca. 150–250 €. Vollgemöbelte oder besonders große Keller kosten entsprechend mehr. Nach der Besichtigung erhalten Sie einen verbindlichen Festpreis — keine Überraschungen.",
      },
      {
        question: "Kann Altmetall und Schrott aus Bergheimer Kellern auf den Preis angerechnet werden?",
        answer:
          "Ja — Altmetall, Werkzeug und gut erhaltene Geräte werden von uns bewertet und auf den Preis angerechnet. In Bergheimer Bergmann-Haushalten ist das oft lohnend.",
      },
      {
        question: "Führen Sie Kellerentrümpelungen auch in Bergheim-Quadrath-Ichendorf durch?",
        answer:
          "Ja, wir sind in allen Bergheimer Stadtteilen aktiv — von Quadrath-Ichendorf und Niederaußem bis Ahe, Glesch und Paffendorf.",
      },
      {
        question: "Wie lange dauert eine Kellerentrümpelung in Bergheim?",
        answer:
          "Die meisten Keller schaffen wir in 2–4 Stunden. Sehr große oder vollgestopfte Keller können einen halben Tag in Anspruch nehmen. Wir planen den Zeitrahmen vorab realistisch.",
      },
    ],
    beispiel: {
      objektTyp: "Kellerabteil",
      flaeche: "18 m²",
      dauer: "3 Stunden",
      preis: "220 €",
      details:
        "Kellerentrümpelung eines vollgepackten Kellers in Bergheim-Quadrath. Entsorgung von altem Werkzeug, Metallschrott und Sperrmüll. Wertanrechnung Altmetall: 45 €.",
      kundenzitat:
        "Der Keller war seit 30 Jahren nicht ausgeräumt. Das Team hat ihn in 3 Stunden komplett leer gemacht. Einfach toll.",
      kundenName: "G. Mertens",
    },
    neighborCities: neighbors("bergheim"),
  },

  bedburg: {
    cityName: "Bedburg",
    slug: "bedburg",
    plz: "50181",
    einwohner: "ca. 26.000",
    metaDescription:
      "Kellerentrümpelung Bedburg ✓ Alle Ortschaften ✓ Festpreis ✓ Wertanrechnung ✓ Schnell & gründlich ☎ 02271 / 5880940",
    introText: [
      "Bedburger Keller — besonders in den alten Bauernhöfen und Einfamilienhäusern rund um Schloss Kaster, in Kirchherten, Lipp und Broich — sind häufig weitläufig und gut gefüllt. Generationen haben hier gelagert: alte Weinfässer, Gartengerät, Konserven, Einmachgläser, Werkzeuge und Mobiliar aus Jahrzehnten. Eine solche Kellerentrümpelung erfordert Erfahrung.",
      "Wir führen Kellerentrümpelungen in Bedburg und allen Ortschaften durch — vollständig, gründlich und zu einem fairen Festpreis. Was Wert hat — Altmetall, gut erhaltene Werkzeuge, Gartengeräte — wird auf den Preis angerechnet. Der Rest wird fachgerecht und umweltgerecht entsorgt, sortiert nach Fraktionen.",
      "Auf ländlichen Hofstellen in Bedburg-Kaster oder Münchrath finden sich in Kellern und Vorratsräumen oft auch Sondermüll wie alte Farben, Pestizide oder Chemikalien aus der landwirtschaftlichen Nutzung. Diese entsorgen wir rechtssicher und nach den gesetzlichen Vorschriften — das ist in unserem Festpreis enthalten.",
      "Von Bedburg-Kaster bis Lipp, von Kirchherten bis Broich — wir kennen alle Bedburger Ortschaften und sind nach einer kostenlosen Besichtigung schnell mit einem verbindlichen Angebot zur Stelle. Besenreine Übergabe, professionelle Entsorgung, faire Preise: Das ist unser Standard für jede Kellerentrümpelung in Bedburg.",
    ],
    localInfo: "Auf Bedburger Hofstellen finden sich in Kellern oft alte Gartengeräte, Weinfässer und landwirtschaftliche Materialien — teils auch Sondermüll wie alte Pestizide oder Chemikalien. Wir entsorgen alles rechtssicher und rechnen verwertbare Gegenstände auf den Preis an.",
    highlights: [
      "Kellerentrümpelung Bedburg inkl. aller Ortschaften",
      "Erfahrung mit landwirtschaftlichen Kellern und Vorratsräumen",
      "Entsorgung von Sondermüll und Chemikalien inklusive",
      "Wertanrechnung für Werkzeug und Altmetall",
      "Besenreine Übergabe garantiert",
      "Festpreis nach kostenloser Besichtigung",
    ],
    faqs: [
      {
        question: "Können Sie auch Sondermüll aus Bedburger Kellern entsorgen?",
        answer:
          "Ja — alte Farben, Pestizide, Chemikalien und andere Sonderstoffe werden von uns fachgerecht und legal entsorgt. Das ist in unserem Festpreis inbegriffen.",
      },
      {
        question: "Führen Sie Kellerentrümpelungen auch in Bedburg-Kaster durch?",
        answer:
          "Ja, in allen Bedburger Ortschaften — Kaster, Kirchherten, Lipp, Broich und Münchrath.",
      },
      {
        question: "Was kostet eine Kellerentrümpelung in Bedburg?",
        answer:
          "Kleine Keller ab ca. 140 €. Große Keller auf Hofstellen entsprechend mehr. Kostenlose Besichtigung und verbindlicher Festpreis vor Beginn.",
      },
      {
        question: "Wie lange dauert eine Kellerentrümpelung in Bedburg?",
        answer:
          "Normale Keller schaffen wir in 2–4 Stunden. Große Kellergeschosse auf Bauernhöfen können mehr Zeit in Anspruch nehmen. Wir planen realistisch und kommunizieren transparent.",
      },
    ],
    beispiel: {
      objektTyp: "Keller/Vorratskeller",
      flaeche: "25 m²",
      dauer: "4 Stunden",
      preis: "310 €",
      details:
        "Kellerentrümpelung eines alten Vorratskellers auf einem Bauernhof in Bedburg-Kaster. Einmachgläser, Werkzeug, Altmetall. Wertanrechnung Metallschrott: 55 €.",
      kundenzitat:
        "Der alte Keller war unser größter Problemraum. Das Team hat ihn in einem Nachmittag vollständig leer gemacht. Toller Service!",
      kundenName: "H. Fuchs",
    },
    neighborCities: neighbors("bedburg"),
  },

  kerpen: {
    cityName: "Kerpen",
    slug: "kerpen",
    plz: "50169",
    einwohner: "ca. 63.000",
    metaDescription:
      "Kellerentrümpelung Kerpen ✓ Sindorf, Türnich & alle Stadtteile ✓ Festpreis ✓ Wertanrechnung ✓ Schnell ☎ 02271 / 5880940",
    introText: [
      "In Kerpen — mit seinen Stadtteilen Sindorf, Manheim, Buir, Horrem und Blatzheim — gibt es viele Kellertypen: vom kleinen Kellerverschlag im Wohnblock bis zum großen Gewölbekeller auf alten Hofstellen. Jeder Keller ist anders, und jede Kellerentrümpelung in Kerpen erfordert individuelle Herangehensweise.",
      "Unser Team führt Kellerentrümpelungen in Kerpen schnell und vollständig durch — mit professioneller Sortierung nach Wert, Wertstoff und Sondermüll. Altmetall, gut erhaltene Werkzeuge und Elektrogeräte werden bewertet und auf den Preis angerechnet. Das macht die Kellerentrümpelung in Kerpen für viele Kunden günstiger als erwartet.",
      "In Kerpen-Sindorf gibt es viele Mehrfamilienhäuser aus den 1970er Jahren mit tiefen Kellergeschossen. Gemeinschaftskeller und Abstellräume sind dort häufig über die Jahre immer voller geworden. Wir räumen auf Anfrage von Eigentümern und Hausverwaltungen auch solche Gemeinschaftsbereiche professionell aus — sortiert und besenrein.",
      "Von Kerpen-Stadt über Türnich bis Buir und Blatzheim — wir kennen alle Kerpener Stadtteile und sind schnell vor Ort. Kostenlose Besichtigung, verbindlicher Festpreis, besenreine Übergabe: Das ist unser Standard für jede Kellerentrümpelung in Kerpen.",
    ],
    localInfo: "In Kerpen-Sindorf gibt es viele Mehrfamilienhäuser aus den 1970er Jahren mit tiefen Kellergeschossen und Gemeinschaftsabstellräumen. Wir räumen diese auf Anfrage von Eigentümern vollständig aus — sortiert und besenrein.",
    highlights: [
      "Kellerentrümpelung in allen Kerpener Stadtteilen",
      "Auch Gemeinschaftskeller auf Anfrage von Eigentümern",
      "Wertanrechnung für Altmetall und Werkzeug",
      "Besenrein nach Abschluss",
      "Festpreis nach kostenloser Besichtigung",
      "Fachgerechte Entsorgung aller Fraktionen",
    ],
    faqs: [
      {
        question: "Führen Sie Kellerentrümpelungen auch in Kerpen-Sindorf durch?",
        answer:
          "Ja, wir sind in allen Kerpener Stadtteilen aktiv — Sindorf, Manheim, Buir, Türnich, Horrem und Kerpen-Stadt.",
      },
      {
        question: "Was kostet eine Kellerentrümpelung in Kerpen?",
        answer:
          "Kleine Keller ab ca. 150 €, große Keller ab ca. 280 €. Festpreis nach kostenloser Besichtigung — inkl. Entsorgung.",
      },
      {
        question: "Können Sie auch Gemeinschaftskeller in Mehrfamilienhäusern in Kerpen entrümpeln?",
        answer:
          "Ja, auf Anfrage von Hausverwaltungen oder Eigentümern räumen wir auch Gemeinschaftsbereiche vollständig aus.",
      },
      {
        question: "Wie schnell kann eine Kellerentrümpelung in Kerpen stattfinden?",
        answer:
          "Oft innerhalb von 1–2 Werktagen nach der Besichtigung. Bei Dringlichkeit sprechen wir kurzfristige Lösungen ab.",
      },
    ],
    beispiel: {
      objektTyp: "Kellerabteil",
      flaeche: "15 m²",
      dauer: "2,5 Stunden",
      preis: "195 €",
      details:
        "Kellerentrümpelung in einem Mehrfamilienhaus in Kerpen-Sindorf. Entsorgung alter Möbel, Werkzeug und Sperrmüll. Wertanrechnung Altmetall: 30 €.",
      kundenzitat:
        "Schnell und unkompliziert — genau das, was ich brauchte. Der Keller ist endlich wieder nutzbar.",
      kundenName: "M. Berg",
    },
    neighborCities: neighbors("kerpen"),
  },

  elsdorf: {
    cityName: "Elsdorf",
    slug: "elsdorf",
    plz: "50189",
    einwohner: "ca. 20.000",
    metaDescription:
      "Kellerentrümpelung Elsdorf ✓ Alle Ortschaften ✓ Festpreis ✓ Werkzeug & Sondermüll ✓ Wertanrechnung ☎ 02271 / 5880940",
    introText: [
      "Elsdorf liegt im Umfeld des Tagebaus Hambach — und diese industrielle Prägung hinterlässt Spuren in den Kellern der Bewohner. Alte Werkzeuge, technische Geräte, Metallteile aus dem Bergbaubereich und Jahrzehnte alte Vorräte sind in Elsdorfer Kellern keine Seltenheit. Unsere Kellerentrümpelung in Elsdorf ist auf genau solche Haushalte spezialisiert.",
      "Wir entrümpeln Keller in Elsdorf und allen Ortschaften — Berrendorf, Angelsdorf, Heppendorf, Niederbolheim und Elsdorf-Mitte. Alles, was Wert hat — Altmetall, Werkzeug, funktionsfähige Elektrogeräte — wird bewertet und auf den Preis angerechnet. Der Rest wird sauber entsorgt, sortiert nach Fraktionen.",
      "Besonders in den älteren Bergarbeiterhäusern von Elsdorf finden sich in Kellern gelegentlich auch Sondermüll: alte Farben, Chemikalien aus dem Gewerbebereich, Altöl und dergleichen. Diese entsorgen wir rechtssicher nach den gesetzlichen Vorschriften — das ist in unserem Festpreis immer enthalten. Kein Problem ist zu groß für unser Team.",
      "Von Berrendorf bis Elsdorf-Mitte, von Niederbolheim bis Heppendorf — wir sind in allen Elsdorfer Ortschaften aktiv und kennen die lokalen Besonderheiten. Kostenlose Besichtigung, verbindlicher Festpreis, vollständige Entsorgung: Das ist unser Standard für jede Kellerentrümpelung in Elsdorf.",
    ],
    localInfo: "In Elsdorfer Kellern finden sich oft Werkzeuge und Materialien aus der Bergbauzeit sowie gelegentlich Sondermüll wie alte Farben oder Chemikalien. Wir entsorgen alles rechtssicher — Altmetall und Schrott werden bewertet und auf den Preis angerechnet.",
    highlights: [
      "Kellerentrümpelung in Elsdorf inkl. aller Ortschaften",
      "Erfahrung mit Bergbau-Inventar und Sondermüll",
      "Wertanrechnung für Werkzeug und Altmetall",
      "Fachgerechte Entsorgung aller Fraktionen",
      "Besenreine Übergabe garantiert",
      "Festpreis nach kostenloser Besichtigung",
    ],
    faqs: [
      {
        question: "Führen Sie Kellerentrümpelungen in Elsdorf-Berrendorf durch?",
        answer:
          "Ja, in allen Elsdorfer Ortschaften — Berrendorf, Angelsdorf, Heppendorf, Niederbolheim und Elsdorf-Mitte.",
      },
      {
        question: "Was kostet eine Kellerentrümpelung in Elsdorf?",
        answer:
          "Kleine Keller ab ca. 140 €, größere ab ca. 250–350 €. Festpreis nach kostenloser Besichtigung.",
      },
      {
        question: "Können Sie auch Sondermüll aus Elsdorfer Kellern fachgerecht entsorgen?",
        answer:
          "Ja — alte Farben, Chemikalien, Altöl und ähnliche Sonderstoffe werden von uns legal und umweltgerecht entsorgt.",
      },
      {
        question: "Wie lange dauert eine Kellerentrümpelung in Elsdorf?",
        answer:
          "Normale Keller in 2–4 Stunden. Sehr vollgestopfte Keller können einen halben Arbeitstag in Anspruch nehmen.",
      },
    ],
    beispiel: {
      objektTyp: "Kellerabteil",
      flaeche: "20 m²",
      dauer: "3 Stunden",
      preis: "240 €",
      details:
        "Kellerentrümpelung in Elsdorf-Mitte. Entsorgung von altem Werkzeug, Metallschrott und Sperrmüll. Wertanrechnung Altmetall: 40 €.",
      kundenzitat:
        "Absolut empfehlenswert. Schnell, günstig und der Keller ist jetzt wieder nutzbar.",
      kundenName: "T. Feld",
    },
    neighborCities: neighbors("elsdorf"),
  },

  pulheim: {
    cityName: "Pulheim",
    slug: "pulheim",
    plz: "50259",
    einwohner: "ca. 54.000",
    metaDescription:
      "Kellerentrümpelung Pulheim ✓ Stommeln, Brauweiler & alle Stadtteile ✓ Festpreis ✓ Wertanrechnung ✓ Schnell ☎ 02271 / 5880940",
    introText: [
      "Pulheim zählt zu den wohlhabenderen Wohnstädten im Rhein-Erft-Kreis — mit gepflegten Einfamilienhausgegenden in Stommeln, Sinnersdorf, Geyen und dem historisch bedeutsamen Brauweiler. In diesen Haushalten häufen sich in den Kellern über die Jahrzehnte hochwertige Gegenstände an — von gut erhaltenen Sportgeräten über Designermöbel bis hin zu Weinkellern und teuren Werkzeugsammlungen.",
      "Wir führen Kellerentrümpelungen in Pulheim mit besonderem Blick für wertvolle Gegenstände durch. Hochwertige Kellerinventare — Weinregale, Sportgeräte, Markenwerkzeuge, Elektrogeräte — werden vor der Entsorgung professionell bewertet und angerechnet. Das macht die Kellerentrümpelung in Pulheim häufig günstiger als gedacht.",
      "In Pulheims modernen Einfamilienhäusern finden sich in Kellern auch moderne Technikräume mit Heizungsanlagen, Wassersoftener und Filterstationen. Diese berühren wir nicht — wir räumen nur, was entrümpelt werden soll. Auf Wunsch können wir gemeinsam besprechen, was bleiben soll und was weg kann.",
      "Von Pulheim-Mitte bis Ingendorf, von Brauweiler bis Vorrhein — wir sind in der gesamten Stadt Pulheim tätig. Kostenlose Besichtigung, verbindlicher Festpreis, besenreine Übergabe: Das ist unser Versprechen für jede Kellerentrümpelung in Pulheim.",
    ],
    localInfo: "In Pulheimer Kellern finden wir häufig hochwertige Gegenstände — Weinregale, Sportgeräte, Markenwerkzeuge und gut erhaltene Einrichtungsgegenstände. Wir bewerten alles professionell und rechnen Verwertbares an — oft lohnt sich das besonders in gehobenen Wohnlagen.",
    highlights: [
      "Kellerentrümpelung in allen Pulheimer Stadtteilen",
      "Wertanrechnung für hochwertige Kellerinventare",
      "Diskrete Abwicklung — auch für Hausverwaltungen",
      "Fachgerechte Entsorgung aller Fraktionen",
      "Besenrein nach Abschluss",
      "Festpreis nach kostenloser Besichtigung",
    ],
    faqs: [
      {
        question: "Können Weinregale und Sportgeräte bei der Kellerentrümpelung in Pulheim bewertet werden?",
        answer:
          "Ja — wir bewerten hochwertige Kellerinventare vor der Entsorgung und rechnen Verwertbares auf den Preis an. In Pulheimer Haushalten lohnt sich das besonders.",
      },
      {
        question: "Führen Sie Kellerentrümpelungen auch in Pulheim-Brauweiler durch?",
        answer:
          "Ja, in allen Pulheimer Stadtteilen — Brauweiler, Stommeln, Sinnersdorf, Geyen und weiteren.",
      },
      {
        question: "Was kostet eine Kellerentrümpelung in Pulheim?",
        answer:
          "Kleine Keller ab ca. 160 €, größere ab ca. 280 €. Durch Wertanrechnung hochwertiger Inventare kann der Endpreis deutlich niedriger ausfallen.",
      },
      {
        question: "Wie lange dauert eine Kellerentrümpelung in Pulheim?",
        answer:
          "Die meisten Keller schaffen wir in 2–5 Stunden. Große Kellergeschosse können einen halben Arbeitstag dauern.",
      },
    ],
    beispiel: {
      objektTyp: "Kellergeschoss",
      flaeche: "30 m²",
      dauer: "5 Stunden",
      preis: "320 €",
      details:
        "Kellerentrümpelung in Pulheim-Stommeln. Sortierung und Entsorgung von Sportgeräten, alten Möbeln und Sperrmüll. Wertanrechnung Fitnessgeräte und Werkzeug: 70 €.",
      kundenzitat:
        "Toller Service — das Team hat alles sorgfältig sortiert und die Fitnessgeräte fair bewertet. Endpreis war überraschend günstig.",
      kundenName: "I. Schäfer",
    },
    neighborCities: neighbors("pulheim"),
  },

  frechen: {
    cityName: "Frechen",
    slug: "frechen",
    plz: "50226",
    einwohner: "ca. 51.000",
    metaDescription:
      "Kellerentrümpelung Frechen ✓ Grefrath & alle Stadtteile ✓ Festpreis ✓ Schnell ✓ Wertanrechnung ✓ Besenrein ☎ 02271 / 5880940",
    introText: [
      "Frechen liegt unmittelbar an der Kölner Stadtgrenze und ist dicht besiedelt — viele Wohnhäuser und Mehrfamilienhäuser haben tiefe Keller, die über die Jahre mit Möbeln, Kisten, Elektrogeräten und allerlei Hausrat vollgestopft werden. Eine Kellerentrümpelung in Frechen ist oft die erste Maßnahme, wenn Keller endlich wieder nutzbar werden sollen.",
      "Unser Team entrümpelt Keller in Frechen und allen Ortschaften — schnell, vollständig und zu einem fairen Festpreis. Grefrath, Habbelrath, Buschbell und Frechen-Stadt sind uns bestens bekannt. Verwertbares — Altmetall, gut erhaltene Geräte, Möbelstücke — wird auf den Preis angerechnet und senkt Ihre Kosten direkt.",
      "In Frechener Altbauhäusern finden sich in Kellerräumen gelegentlich historische Keramikobjekte aus der lokalen Töpfertradition — Frechener Steinzeug und Krüge aus verschiedenen Epochen. Diese bewerten wir vor der Entsorgung sorgfältig und teilen Ihnen mit, wenn ein Stück besonders wertvoll ist. Nichts Bedeutsames geht einfach verloren.",
      "Von der Frechener Innenstadt über Grefrath bis nach Habbelrath und Buschbell — wir sind in der gesamten Stadt Frechen tätig. Kostenlose Besichtigung, verbindlicher Festpreis, besenreine Übergabe: Das ist unser Standard für jede Kellerentrümpelung in Frechen.",
    ],
    localInfo: "In Frechener Altbauhäusern finden sich in Kellerräumen gelegentlich historische Keramikobjekte aus der lokalen Töpfertradition. Diese bewerten wir vor der Entsorgung sorgfältig. Auch Altmetall und gut erhaltene Elektrogeräte werden angerechnet und senken Ihre Kosten.",
    highlights: [
      "Kellerentrümpelung in Frechen und allen Ortschaften",
      "Fachkundige Bewertung historischer Keramikstücke",
      "Wertanrechnung für verwertbare Gegenstände",
      "Besenreine Übergabe nach Abschluss",
      "Festpreis nach kostenloser Besichtigung",
      "Schnelle Termine dank kurzer Anfahrtszeit",
    ],
    faqs: [
      {
        question: "Führen Sie Kellerentrümpelungen auch in Frechen-Grefrath durch?",
        answer:
          "Ja, in allen Frechener Ortschaften — Grefrath, Habbelrath, Buschbell und Frechen-Stadt.",
      },
      {
        question: "Was kostet eine Kellerentrümpelung in Frechen?",
        answer:
          "Kleine Keller ab ca. 150 €, größere ab ca. 260–380 €. Festpreis nach kostenloser Besichtigung.",
      },
      {
        question: "Kann Frechener Keramik und Steinzeug bei der Entrümpelung bewertet werden?",
        answer:
          "Ja — wir schauen uns historische Keramikobjekte genau an, bevor etwas entsorgt wird. Wertvolles wird auf den Preis angerechnet oder Sie werden separat informiert.",
      },
      {
        question: "Wie schnell kann eine Kellerentrümpelung in Frechen stattfinden?",
        answer:
          "Dank kurzer Anfahrtswege oft innerhalb von 1–2 Werktagen nach der Besichtigung.",
      },
    ],
    beispiel: {
      objektTyp: "Kellerabteil",
      flaeche: "16 m²",
      dauer: "2,5 Stunden",
      preis: "185 €",
      details:
        "Kellerentrümpelung in Frechen-Mitte. Entsorgung von alten Möbeln, Elektrogeräten und Sperrmüll. Wertanrechnung Altmetall: 25 €.",
      kundenzitat:
        "Schnell und günstig. Der Keller war nach 2,5 Stunden komplett leer — sehr zufrieden!",
      kundenName: "A. Müller",
    },
    neighborCities: neighbors("frechen"),
  },

  huerth: {
    cityName: "Hürth",
    slug: "huerth",
    plz: "50354",
    einwohner: "ca. 60.000",
    metaDescription:
      "Kellerentrümpelung Hürth ✓ Efferen, Hermülheim & alle Stadtteile ✓ Festpreis ✓ Schnell ✓ Besenrein ☎ 02271 / 5880940",
    introText: [
      "Hürths dichte Bebauung mit vielen Mehrfamilienhäusern in Efferen, Hermülheim, Kendenich und Hürth-Mitte bedeutet: viele kleine Kellerabteile, die über die Jahre voller werden. Bei Wohnungswechsel, Umzug oder einfach zu viel Zeug entscheiden sich immer mehr Hürther für eine professionelle Kellerentrümpelung — schnell, günstiger als erwartet und besenrein.",
      "Wir entrümpeln Keller in Hürth und allen Stadtteilen — von der schnellen 2-Stunden-Aktion bis zur großen Komplettausräumung eines mehrstöckigen Kellergeschosses. Altmetall, gut erhaltene Elektrogeräte und brauchbare Gegenstände werden auf den Preis angerechnet. Der Rest wird sauber nach Fraktionen entsorgt.",
      "In Hürth-Efferen und Kendenich gibt es viele ältere Mehrfamilienhäuser mit gemeinschaftlichen Kellerräumen und kleinen Abstellbereichen. Auf Anfrage von Hausverwaltungen oder Eigentümergemeinschaften räumen wir auch solche gemeinschaftlichen Bereiche professionell aus — nach vorheriger Abstimmung und mit Sorgfalt.",
      "Von Hürth-Mitte bis Stotzheim, von Hermülheim bis Fischenich und Kalscheuren — wir kennen alle Hürther Stadtteile. Kostenlose Besichtigung, verbindlicher Festpreis, besenreine Übergabe: Das ist unser Versprechen für jede Kellerentrümpelung in Hürth.",
    ],
    localInfo: "In Hürths Mehrfamilienhäusern gibt es viele kleine Kellerabteile, die regelmäßig entrümpelt werden müssen. Gemeinschaftliche Keller räumen wir auf Anfrage von Hausverwaltungen aus. Altmetall und gut erhaltene Elektrogeräte werden stets angerechnet.",
    highlights: [
      "Kellerentrümpelung in allen Hürther Stadtteilen",
      "Auch Gemeinschaftskeller auf Anfrage",
      "Wertanrechnung für Elektrogeräte und Altmetall",
      "Besenrein nach Abschluss",
      "Festpreis — kein Stundenlohn",
      "Schnelle Termine oft innerhalb 1–2 Tagen",
    ],
    faqs: [
      {
        question: "Führen Sie Kellerentrümpelungen auch in Hürth-Efferen und Kendenich durch?",
        answer:
          "Ja, in allen Hürther Stadtteilen — Efferen, Kendenich, Hermülheim, Stotzheim, Fischenich, Kalscheuren und Hürth-Mitte.",
      },
      {
        question: "Was kostet eine Kellerentrümpelung in Hürth?",
        answer:
          "Kleine Keller ab ca. 140 €, größere ab ca. 250 €. Festpreis nach Besichtigung — inkl. Entsorgung und Besenreinigung.",
      },
      {
        question: "Können auch Gemeinschaftskeller in Hürther Mehrfamilienhäusern entrümpelt werden?",
        answer:
          "Ja, auf Anfrage von Hausverwaltungen oder Eigentümergemeinschaften. Bitte im Erstgespräch klären.",
      },
      {
        question: "Wie lange dauert eine Kellerentrümpelung in Hürth?",
        answer:
          "Kleine Kellerabteile in 1–2 Stunden. Größere Keller in 3–5 Stunden. Selten länger als ein halber Arbeitstag.",
      },
    ],
    beispiel: {
      objektTyp: "Kellerabteil",
      flaeche: "12 m²",
      dauer: "2 Stunden",
      preis: "165 €",
      details:
        "Kellerentrümpelung in Hürth-Efferen. Entsorgung alter Fahrräder, Sperrmüll und Kartons. Besenreine Übergabe.",
      kundenzitat:
        "Schnell und unkompliziert. Das Team war pünktlich und hat alles sauber erledigt. Sehr empfehlenswert!",
      kundenName: "P. Horn",
    },
    neighborCities: neighbors("huerth"),
  },

  erftstadt: {
    cityName: "Erftstadt",
    slug: "erftstadt",
    plz: "50374",
    einwohner: "ca. 52.000",
    metaDescription:
      "Kellerentrümpelung Erftstadt ✓ Liblar, Lechenich & alle Stadtteile ✓ Festpreis ✓ Wertanrechnung ✓ Besenrein ☎ 02271 / 5880940",
    introText: [
      "Erftstadt bietet ein außergewöhnliches Ortsbild — von der historischen Altstadt Lechenich mit ihren mittelalterlichen Stadtmauern bis zum Schloss Liblar und den modernen Wohngebieten in Gymnich und Friesheim. Keller in Erftstädter Altbauten sind oft besonders charaktervoll — Gewölbekeller, gemauerte Vorratskammern und alte Weinkeller, die über Generationen genutzt wurden.",
      "Wir entrümpeln Keller in Erftstadt und allen Stadtteilen — mit besonderem Respekt für historische Bausubstanz. In den alten Lechenicher und Liblar Altbauten gehen wir schonend vor und vermeiden Beschädigungen am historischen Mauerwerk. Was Wert hat — Antiquitäten, Weinkeller-Ausstattungen, gut erhaltene Möbel — wird professionell bewertet und angerechnet.",
      "In den modernen Wohngebieten von Gymnich, Köttingen und Dirmerzheim begegnen uns dagegen eher Standard-Keller in Einfamilienhäusern — kompakter, aber oft vollgestopft mit allem, was oben keinen Platz mehr gefunden hat. Diese räumen wir effizient und vollständig aus, oft innerhalb von 2–4 Stunden.",
      "Von Lechenich bis Dirmerzheim, von Liblar bis Friesheim — wir sind in allen Erftstädter Stadtteilen tätig. Kostenlose Besichtigung, verbindlicher Festpreis, besenreine Übergabe: Das ist unser Standard für jede Kellerentrümpelung in Erftstadt.",
    ],
    localInfo: "In Erftstädter Altbauten gibt es oft Gewölbekeller und gemauerte Vorratskammern mit besonderem Charakter. Wir gehen schonend mit der historischen Bausubstanz um und bewerten Antiquitäten sowie Weinkeller-Ausstattungen vor der Entsorgung professionell.",
    highlights: [
      "Kellerentrümpelung in Erftstadt inkl. Liblar und Lechenich",
      "Schonender Umgang mit historischen Gewölbekellern",
      "Bewertung von Antiquitäten und Weinkeller-Ausstattungen",
      "Wertanrechnung maximiert Ihre Ersparnis",
      "Besenrein nach Abschluss",
      "Festpreis nach kostenloser Besichtigung",
    ],
    faqs: [
      {
        question: "Führen Sie Kellerentrümpelungen auch in Erftstadt-Gymnich und Friesheim durch?",
        answer:
          "Ja, in allen Erftstädter Stadtteilen — Lechenich, Liblar, Gymnich, Friesheim, Köttingen und Dirmerzheim.",
      },
      {
        question: "Wie gehen Sie mit historischen Gewölbekellern in Erftstadt um?",
        answer:
          "Sehr schonend — wir arbeiten bewusst ohne schwere Geräte, die das Mauerwerk beschädigen könnten. Alles wird vorsichtig abtransportiert.",
      },
      {
        question: "Was kostet eine Kellerentrümpelung in Erftstadt?",
        answer:
          "Kleine Keller ab ca. 160 €, Gewölbekeller oder historische Vorratskammer ab ca. 280 €. Festpreis nach Besichtigung.",
      },
      {
        question: "Kann Weinkeller-Ausstattung bei der Kellerentrümpelung in Erftstadt bewertet werden?",
        answer:
          "Ja — Weinregale, Fässer und Zubehör werden vor der Entsorgung bewertet. Wertvolles wird angerechnet oder Sie werden separat informiert.",
      },
    ],
    beispiel: {
      objektTyp: "Gewölbekeller",
      flaeche: "28 m²",
      dauer: "5 Stunden",
      preis: "370 €",
      details:
        "Kellerentrümpelung eines historischen Gewölbekellers in Erftstadt-Lechenich. Schonende Räumung, Bewertung alter Weinkeller-Ausstattung (Wertanrechnung: 60 €). Besenreine Übergabe.",
      kundenzitat:
        "Das Team war extrem vorsichtig mit dem alten Mauerwerk und hat nichts beschädigt. Die Weinkeller-Möbel wurden fair bewertet. Sehr empfehlenswert!",
      kundenName: "K. Lehmann",
    },
    neighborCities: neighbors("erftstadt"),
  },

  rommerskirchen: {
    cityName: "Rommerskirchen",
    slug: "rommerskirchen",
    plz: "41569",
    einwohner: "ca. 13.500",
    metaDescription:
      "Kellerentrümpelung Rommerskirchen ✓ Alle Ortschaften ✓ Festpreis ✓ Wertanrechnung ✓ Ländliche Anwesen ☎ 02271 / 5880940",
    introText: [
      "Im ländlichen Rommerskirchen — der nördlichsten Gemeinde im Rhein-Erft-Kreis — sind Keller oft weitläufig und über Generationen gewachsen. Nettesheim, Butzheim, Hoeningen, Sinsteden und Frixheim: In diesen kleinen Ortschaften finden sich in Kellern von Einfamilienhäusern und alten Hofstellen Jahrzehnte an Inventar — von Einmachgläsern über alte Möbel bis zu Werkzeugkästen und Gartengeräten.",
      "Wir führen Kellerentrümpelungen in Rommerskirchen und allen Ortschaften durch — mit der Erfahrung für ländliche Keller und ihre besonderen Herausforderungen. Verwertbares — Altmetall, gut erhaltene Werkzeuge, Gartengeräte — wird bewertet und angerechnet. Alles andere wird sauber entsorgt, sortiert nach Fraktionen.",
      "In der Nähe des rheinischen Weinbaugebiets finden sich in Rommerskirchener Kellern gelegentlich alte Weinkeller-Ausstattungen, Holzfässer und Keltergeräte aus vergangener Zeit. Diese bewerten wir sorgfältig — Sammlerstücke oder gut erhaltene Geräte können einen Wiederverkaufswert haben, der auf Ihren Preis angerechnet wird.",
      "Von Nettesheim bis Frixheim, von Hoeningen bis Sinsteden — wir sind in allen Rommerskirchener Ortschaften tätig. Kostenlose Besichtigung, verbindlicher Festpreis, vollständige Entsorgung und besenreine Übergabe: Das ist unser Standard.",
    ],
    localInfo: "In Rommerskirchener Kellern finden sich häufig alte Weinkeller-Ausstattungen, landwirtschaftliche Geräte und Jahrzehnte alte Vorräte. Wir bewerten Verwertbares sorgfältig und rechnen es an — von Altmetall über Werkzeug bis zu Keltergeräten.",
    highlights: [
      "Kellerentrümpelung Rommerskirchen inkl. aller Ortschaften",
      "Erfahrung mit ländlichen Anwesen und Hofkellern",
      "Bewertung von Weinkeller-Ausstattungen",
      "Wertanrechnung für Werkzeug und Altmetall",
      "Besenrein nach Abschluss",
      "Festpreis nach kostenloser Besichtigung",
    ],
    faqs: [
      {
        question: "Führen Sie Kellerentrümpelungen in Rommerskirchen-Nettesheim durch?",
        answer:
          "Ja, in allen Rommerskirchener Ortschaften — Nettesheim, Butzheim, Hoeningen, Sinsteden und Frixheim.",
      },
      {
        question: "Was kostet eine Kellerentrümpelung in Rommerskirchen?",
        answer:
          "Kleine Keller ab ca. 130 €, große Hofkeller ab ca. 280 €. Festpreis nach kostenloser Besichtigung.",
      },
      {
        question: "Können Weinkeller-Ausstattungen in Rommerskirchen bewertet werden?",
        answer:
          "Ja — alte Holzfässer, Weinpressen und Keltergeräte werden von uns begutachtet. Was Wert hat, wird angerechnet.",
      },
      {
        question: "Wie schnell kann eine Kellerentrümpelung in Rommerskirchen stattfinden?",
        answer:
          "Oft innerhalb von 1–2 Werktagen nach der Besichtigung. Die kurzen Anfahrtszeiten aus dem Rhein-Erft-Kreis helfen dabei.",
      },
    ],
    beispiel: {
      objektTyp: "Hofkeller",
      flaeche: "35 m²",
      dauer: "6 Stunden",
      preis: "410 €",
      details:
        "Kellerentrümpelung eines alten Hofkellers in Rommerskirchen-Nettesheim. Entsorgung alter Weinausstattung, Werkzeug und Metallschrott. Wertanrechnung: 75 €.",
      kundenzitat:
        "Der alte Hofkeller war seit Jahren nicht zugänglich. Das Team hat ihn gründlich und mit Sorgfalt geräumt. Sehr zufrieden!",
      kundenName: "B. Linke",
    },
    neighborCities: neighbors("rommerskirchen"),
  },

  grevenbroich: {
    cityName: "Grevenbroich",
    slug: "grevenbroich",
    plz: "41515",
    einwohner: "ca. 65.000",
    metaDescription:
      "Kellerentrümpelung Grevenbroich ✓ Kapellen, Elfgen & alle Stadtteile ✓ Festpreis ✓ Wertanrechnung ✓ Besenrein ☎ 02271 / 5880940",
    introText: [
      "Grevenbroich — die 'Stadt der Energie' im Rhein-Erft-Kreis — hat viele ältere Wohnhäuser und Wohnblöcke mit großen Kellern, besonders in Kapellen, Gustorf und der Innenstadt. Diese Keller akkumulieren über Jahrzehnte Gerümpel, alte Möbel, Elektrogeräte und Materialien aus der aktiven Berufszeit der Bewohner — oft aus dem Bergbau- und Energiesektor.",
      "Wir führen Kellerentrümpelungen in Grevenbroich und allen Stadtteilen durch — vollständig, besenrein und zu einem fairen Festpreis. Verwertbares — Werkzeug, Altmetall, gut erhaltene Elektrogeräte — wird bewertet und auf den Preis angerechnet. In Grevenbroicher Haushalten der Tagebau-Generation ist das oft lohnend.",
      "In Kapellen, Elfgen und Gustorf gibt es viele ältere Wohnblöcke mit gemeinschaftlichen Kellerräumen und großen Abstellbereichen. Auf Anfrage von Hausverwaltungen oder Eigentümergemeinschaften räumen wir auch solche Gemeinschaftsbereiche professionell aus — nach Absprache und mit größter Sorgfalt.",
      "Von der Grevenbroicher Innenstadt bis nach Wevelinghoven, von Kapellen bis Elfgen und Gustorf — wir kennen alle Stadtteile. Kostenlose Besichtigung, verbindlicher Festpreis, vollständige Entsorgung und besenreine Übergabe: Das ist unser Standard.",
    ],
    localInfo: "In Grevenbroicher Haushalten der Tagebau-Generation finden sich in Kellern häufig Werkzeuge, Metallteile und technisches Gerät aus der Energie- und Bergbaubranche. Altmetall und gut erhaltenes Werkzeug werden bewertet und auf den Preis angerechnet.",
    highlights: [
      "Kellerentrümpelung in Grevenbroich und allen Stadtteilen",
      "Erfahrung mit Tagebau-Haushalten und technischem Inventar",
      "Wertanrechnung für Werkzeug und Altmetall",
      "Auch Gemeinschaftskeller auf Anfrage",
      "Besenrein nach Abschluss",
      "Festpreis nach kostenloser Besichtigung",
    ],
    faqs: [
      {
        question: "Führen Sie Kellerentrümpelungen auch in Grevenbroich-Kapellen durch?",
        answer:
          "Ja, in allen Grevenbroicher Stadtteilen — Kapellen, Elfgen, Gustorf, Hemmerden, Hülchrath und weiteren.",
      },
      {
        question: "Was kostet eine Kellerentrümpelung in Grevenbroich?",
        answer:
          "Kleine Keller ab ca. 150 €, größere ab ca. 270 €. Festpreis nach Besichtigung — inkl. Entsorgung.",
      },
      {
        question: "Können auch Gemeinschaftskeller in Grevenbroich entrümpelt werden?",
        answer:
          "Ja, auf Anfrage von Hausverwaltungen oder Eigentümergemeinschaften — bitte im Erstgespräch besprechen.",
      },
      {
        question: "Wie lange dauert eine Kellerentrümpelung in Grevenbroich?",
        answer:
          "Normale Keller in 2–4 Stunden. Sehr große oder unzugängliche Keller können einen halben Tag in Anspruch nehmen.",
      },
    ],
    beispiel: {
      objektTyp: "Kellerabteil",
      flaeche: "20 m²",
      dauer: "3,5 Stunden",
      preis: "255 €",
      details:
        "Kellerentrümpelung in Grevenbroich-Kapellen. Entsorgung von altem Werkzeug, Metallschrott und Sperrmüll. Wertanrechnung Altmetall: 50 €.",
      kundenzitat:
        "Sehr zuverlässig und faire Preise. Der Keller war nach knapp 4 Stunden komplett leer. Klare Empfehlung!",
      kundenName: "U. König",
    },
    neighborCities: neighbors("grevenbroich"),
  },

  bruehl: {
    cityName: "Brühl",
    slug: "bruehl",
    plz: "50321",
    einwohner: "ca. 46.000",
    metaDescription:
      "Kellerentrümpelung Brühl ✓ Vochem, Pingsdorf & alle Stadtteile ✓ Festpreis ✓ Wertanrechnung ✓ Schnell ☎ 02271 / 5880940",
    introText: [
      "Brühl — bekannt durch das Phantasialand und das Welterbe Schloss Augustusburg — ist eine wohlhabende Stadt zwischen Köln und Bonn. In Brühls gepflegten Wohngebieten in Vochem, Pingsdorf, Kierberg und Badorf häufen sich in Kellern von Einfamilienhäusern über die Jahrzehnte hochwertige Gegenstände an — von gut erhaltenen Sportgeräten bis zu Möbeln aus besseren Tagen.",
      "Wir führen Kellerentrümpelungen in Brühl mit besonderem Blick für wertvolle Gegenstände durch. Designermöbel, hochwertige Sportgeräte, neuwertige Elektrogeräte und andere Kellerinventare werden professionell bewertet und auf den Preis angerechnet. Das macht die Kellerentrümpelung in Brühl oft günstiger als gedacht.",
      "In den ruhigen Wohnstraßen rund um das Schloss Augustusburg und den Brühler Stadtpark finden sich in Kellern gelegentlich Kunstgegenstände, Antiquitäten und Sammlerstücke, die über Generationen angesammelt wurden. Diese begutachten wir sorgfältig vor der Entsorgung — nichts Wertvolles geht verloren.",
      "Von Brühl-Mitte bis Vochem, von Pingsdorf bis Badorf — wir kennen alle Brühler Stadtteile. Kostenlose Besichtigung, verbindlicher Festpreis, besenreine Übergabe: Das ist unser Standard für jede Kellerentrümpelung in Brühl.",
    ],
    localInfo: "In Brühler Kellern finden wir häufig hochwertige Sportgeräte, Designermöbel und gelegentlich Kunstgegenstände und Antiquitäten. Wir bewerten alles sorgfältig vor der Entsorgung und rechnen Verwertbares auf den Preis an — das lohnt sich in gehobenen Wohnlagen besonders.",
    highlights: [
      "Kellerentrümpelung in allen Brühler Stadtteilen",
      "Fachkundige Bewertung von Antiquitäten und Sammlerstücken",
      "Wertanrechnung für hochwertige Kellerinventare",
      "Besenrein nach Abschluss",
      "Festpreis nach kostenloser Besichtigung",
      "Schnelle Termine — kurze Anfahrt",
    ],
    faqs: [
      {
        question: "Führen Sie Kellerentrümpelungen auch in Brühl-Vochem und Pingsdorf durch?",
        answer:
          "Ja, in allen Brühler Stadtteilen — Vochem, Pingsdorf, Kierberg, Badorf und Brühl-Mitte.",
      },
      {
        question: "Können Antiquitäten bei der Kellerentrümpelung in Brühl bewertet werden?",
        answer:
          "Ja — wir schauen uns alle Gegenstände vor der Entsorgung an. Wertvolles wird auf den Preis angerechnet oder Sie werden separat informiert.",
      },
      {
        question: "Was kostet eine Kellerentrümpelung in Brühl?",
        answer:
          "Kleine Keller ab ca. 160 €, größere ab ca. 290 €. Durch Wertanrechnung kann der Endpreis deutlich niedriger ausfallen.",
      },
      {
        question: "Wie lange dauert eine Kellerentrümpelung in Brühl?",
        answer:
          "Kleine Keller in 2–3 Stunden, größere in 4–6 Stunden. Wir kommunizieren den Zeitrahmen vorab klar.",
      },
    ],
    beispiel: {
      objektTyp: "Kellergeschoss",
      flaeche: "32 m²",
      dauer: "5 Stunden",
      preis: "340 €",
      details:
        "Kellerentrümpelung in Brühl-Vochem. Entsorgung alter Möbel, Sportgeräte und Sperrmüll. Wertanrechnung Fitnessgeräte und Altmetall: 65 €.",
      kundenzitat:
        "Toller Service — das Team hat die alten Fitnessgeräte fair bewertet und den Keller gründlich geleert. Sehr zufrieden!",
      kundenName: "J. Koch",
    },
    neighborCities: neighbors("bruehl"),
  },

  wesseling: {
    cityName: "Wesseling",
    slug: "wesseling",
    plz: "50389",
    einwohner: "ca. 37.000",
    metaDescription:
      "Kellerentrümpelung Wesseling ✓ Urfeld, Berzdorf & alle Stadtteile ✓ Festpreis ✓ Sondermüll ✓ Wertanrechnung ☎ 02271 / 5880940",
    introText: [
      "Wesseling am Rhein — geprägt durch den großen Chemiepark mit Shell, Bayer und Ineos — hat eine besondere Keller-Charakteristik. In den Werkswohnungen von Urfeld, Berzdorf und Wesseling-Mitte häufen sich gelegentlich berufsbezogene Materialien an: Werkzeuge, technische Geräte, Chemikalienbehälter und Metallteile aus dem Industriebereich.",
      "Wir führen Kellerentrümpelungen in Wesseling mit besonderer Expertise für chemische und industrielle Materialien durch. Die sachgerechte Entsorgung von Sondermüll — alte Farben, Lösungsmittel, Altöl und Chemikalien — ist für uns Routine und im Festpreis enthalten. Metallschrott und Altmetall werden auf den Preis angerechnet.",
      "Neben dem Sondermüll-Aspekt finden wir in Wesselinger Kellern auch ganz normales Inventar: alte Möbel, Fahrräder, Gartengeräte, Koffer und Kisten voller Erinnerungsstücke. Dieses Standard-Kellergut räumen wir genauso gründlich und effizient aus wie die anspruchsvolleren Materialien.",
      "Von Urfeld am Rhein bis Berzdorf und Wesseling-Mitte — wir sind in der gesamten Stadt Wesseling tätig. Kostenlose Besichtigung, verbindlicher Festpreis, vollständige Entsorgung und besenreine Übergabe: Das ist unser Standard für jede Kellerentrümpelung in Wesseling.",
    ],
    localInfo: "In Wesselinger Werkswohnungen sammeln sich in Kellern häufig berufsbezogene Chemikalienbehälter, technische Geräte und Metallteile aus dem Industriebereich an. Wir entsorgen alles fachgerecht — Sondermüll rechtssicher, Altmetall mit Wertanrechnung.",
    highlights: [
      "Kellerentrümpelung in Wesseling inkl. Urfeld und Berzdorf",
      "Spezialisiert auf Sondermüll und Chemikalien",
      "Wertanrechnung für Metallschrott und Elektrogeräte",
      "Fachgerechte Entsorgung nach gesetzlichen Vorschriften",
      "Besenrein nach Abschluss",
      "Festpreis nach kostenloser Besichtigung",
    ],
    faqs: [
      {
        question: "Können Sie Chemikalien und Sondermüll aus Wesselinger Kellern entsorgen?",
        answer:
          "Ja, wir sind auf die fachgerechte Entsorgung von Sondermüll spezialisiert — alte Farben, Lösungsmittel, Altöl und Chemikalien werden legal und umweltgerecht entsorgt.",
      },
      {
        question: "Führen Sie Kellerentrümpelungen auch in Wesseling-Urfeld durch?",
        answer:
          "Ja, in allen Wesselinger Stadtteilen — Urfeld, Berzdorf und Wesseling-Mitte.",
      },
      {
        question: "Was kostet eine Kellerentrümpelung in Wesseling?",
        answer:
          "Kleine Keller ab ca. 150 €, größere ab ca. 260 €. Bei Sondermüll-Entsorgung können leichte Aufpreise anfallen — wird bei der Besichtigung transparent kommuniziert.",
      },
      {
        question: "Wie lange dauert eine Kellerentrümpelung in Wesseling?",
        answer:
          "Standard-Keller in 2–4 Stunden. Bei größeren Mengen Sondermüll oder sehr vollgestopften Kellern kann es etwas länger dauern.",
      },
    ],
    beispiel: {
      objektTyp: "Kellerabteil",
      flaeche: "18 m²",
      dauer: "3 Stunden",
      preis: "235 €",
      details:
        "Kellerentrümpelung in Wesseling-Berzdorf. Entsorgung alter Farben, Chemikalien und Sperrmüll. Wertanrechnung Altmetall: 40 €.",
      kundenzitat:
        "Zuverlässig und faire Preise. Sogar der alte Keller mit dem ganzen Chemiezeugs wurde sauber geräumt. Sehr zufrieden.",
      kundenName: "D. Hartmann",
    },
    neighborCities: neighbors("wesseling"),
  },
};
