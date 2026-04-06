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

export const haushaltsaufloesungCities: Record<string, ServiceCityData> = {
  bergheim: {
    cityName: "Bergheim",
    slug: "bergheim",
    plz: "50126",
    einwohner: "ca. 65.000",
    metaDescription:
      "Haushaltsauflösung Bergheim ✓ Professionell & diskret ✓ Wertanrechnung ✓ Festpreis ✓ Besenreine Übergabe ✓ Inkl. Entsorgung ☎ 02271 / 5880940",
    introText: [
      "Als Kreisstadt des Rhein-Erft-Kreises bietet Bergheim ein vielfältiges Wohnumfeld — von den historischen Bergarbeitersiedlungen in Quadrath-Ichendorf und Niederaußem über Altbauwohnungen im Stadtkern bis hin zu modernen Einfamilienhäusern in Ahe, Glesch und Paffendorf. Genau dieses breite Spektrum begegnet uns täglich bei Haushaltsauflösungen in Bergheim.",
      "Ob nach einem Todesfall, beim Umzug ins Seniorenheim oder bei einer Erbauseinandersetzung — wir begleiten Sie diskret und professionell durch den gesamten Prozess. Unser Team kennt Bergheim mit all seinen Stadtteilen und ist innerhalb kürzester Zeit vor Ort. Dank unseres Firmensitzes im Rhein-Erft-Kreis entfallen lange Anfahrtszeiten — das hält Ihre Kosten niedrig.",
      "Haushaltsauflösungen in Bergheim erfordern oft besondere Erfahrung: In den Bergarbeitersiedlungen von Niederaußem und Quadrath-Ichendorf häufen sich über Jahrzehnte schwere Möbelgarnituren, Werkzeugsammlungen und Materialen aus der Zeit des Braunkohleabbaus an. Wir sortieren fachkundig, erkennen Wertgegenstände und rechnen Metallschrott, Werkzeug und gut erhaltene Möbelstücke auf Ihren Preis an — das macht die Haushaltsauflösung in Bergheim für viele Kunden deutlich günstiger als erwartet.",
      "Von der B477 bis zur L163, von Bergheim-Mitte bis nach Büsdorf und Zieverich — wir sind in der gesamten Kreisstadt Bergheim und allen angrenzenden Ortschaften im Einsatz. Nach einer kostenlosen Besichtigung erhalten Sie ein verbindliches Festpreisangebot. Kein Stundenlohn, keine Nachkalkulation — Sie wissen vorher, was Sie zahlen.",
    ],
    localInfo: "Besonders in den Bergarbeitersiedlungen von Niederaußem und Quadrath-Ichendorf begegnen uns häufig Haushalte mit Jahrzehnten angesammeltem Inventar — schwere Möbel, Werkzeug und Gerätschaften aus der Braunkohlezeit. Metallschrott und Altmetall werden bei uns bewertet und auf den Preis angerechnet. Unser Team ist auf solche Herausforderungen bestens vorbereitet.",
    highlights: [
      "Haushaltsauflösung Bergheim ab 1 Werktag Vorlauf möglich",
      "Wertanrechnung für Möbel, Schmuck und Elektrogeräte",
      "Diskrete Abwicklung — auch bei schwierigen Familiensituationen",
      "Besenreine Übergabe an Eigentümer oder Vermieter",
      "Festpreis nach kostenloser Besichtigung — ohne Nachkalkulation",
      "Fachgerechte Entsorgung inkl. Sperrmüll und Sondermüll",
    ],
    faqs: [
      {
        question: "Wie schnell kann die Haushaltsauflösung in Bergheim stattfinden?",
        answer:
          "In den meisten Fällen können wir die Haushaltsauflösung in Bergheim innerhalb von 1–3 Werktagen nach der Besichtigung durchführen. Bei dringendem Bedarf — zum Beispiel vor einer Wohnungsübergabe — sprechen wir gerne einen kurzfristigen Termin ab.",
      },
      {
        question: "Welche Gegenstände werden bei einer Haushaltsauflösung in Bergheim entsorgt?",
        answer:
          "Wir nehmen alles mit: Möbel, Elektrogeräte, Kleidung, Bücher, Spielzeug, Werkzeug, Gartengeräte und Sperrmüll. Für Sondermüll wie Farben oder alte Batterien kümmern wir uns ebenfalls um die fachgerechte Entsorgung nach gesetzlichen Vorgaben.",
      },
      {
        question: "Was passiert mit wertvollen Gegenständen aus dem Haushalt in Bergheim?",
        answer:
          "Wertgegenstände wie antike Möbel, Schmuck, Silber oder hochwertige Elektrogeräte werden vor der Entsorgung bewertet und auf den Preis angerechnet. Das kann die Kosten Ihrer Haushaltsauflösung in Bergheim erheblich reduzieren — in einigen Fällen sogar auf null.",
      },
      {
        question: "Können Sie auch Haushalte in Bergheim-Quadrath oder Niederaußem auflösen?",
        answer:
          "Ja, wir sind in allen Bergheimer Stadtteilen aktiv — von Ahe über Glesch und Paffendorf bis hin zu Quadrath-Ichendorf und Niederaußem. Kurze Anfahrtswege bedeuten für Sie günstigere Konditionen.",
      },
    ],
    beispiel: {
      objektTyp: "3-Zi.-Wohnung",
      flaeche: "78 m²",
      dauer: "1 Tag",
      preis: "480 €",
      details:
        "Haushaltsauflösung einer 3-Zimmer-Wohnung in Bergheim-Quadrath-Ichendorf. Komplette Räumung inkl. Demontage alter Einbauküche, Entsorgung von Sperrmüll und besenreiner Übergabe. Wertanrechnung für Elektrogeräte: 80 €.",
      kundenzitat:
        "Sehr professionell und diskret. Die Wohnung meiner Mutter wurde innerhalb eines Tages vollständig geräumt — ich hätte das nie alleine geschafft.",
      kundenName: "A. Brandt",
    },
    neighborCities: neighbors("bergheim"),
  },

  bedburg: {
    cityName: "Bedburg",
    slug: "bedburg",
    plz: "50181",
    einwohner: "ca. 26.000",
    metaDescription:
      "Haushaltsauflösung Bedburg ✓ Diskret & professionell ✓ Festpreis ✓ Wertanrechnung ✓ Besenrein ✓ Alle Stadtteile ☎ 02271 / 5880940",
    introText: [
      "Bedburg mit seinen Ortschaften Kaster, Kirchherten und Lipp ist von ländlichem Charakter geprägt. Viele Familien leben seit Generationen in Einfamilienhäusern und alten Bauernhöfen rund um das historische Schloss Kaster — und genau diese Haushalte erfordern bei einer Auflösung besondere Sorgfalt und Erfahrung.",
      "Wir führen Haushaltsauflösungen in Bedburg und allen Ortschaften durch — diskret, vollständig und zu einem fairen Festpreis. Von der ersten Besichtigung bis zur besenreinen Übergabe kümmern wir uns um alles. Unsere Kenntnis der Region — von Broich über Münchrath bis Lipp — ermöglicht uns schnelle Termine und günstige Anfahrtskosten.",
      "Auf Bedburger Bauernhöfen und alten Hofstellen finden wir häufig landwirtschaftliche Geräte, alte Stalleinrichtungen, Jahrzehnte alte Kellervorräte und massivholz Möbelstücke aus der Wirtschaftswunderzeit. Dieses Inventar erfordert Erfahrung: Wir sortieren fachkundig, erkennen was Wert hat — und rechnen es an. Was entsorgt werden muss, geht rechtssicher und umweltgerecht in die Verwertung.",
      "Ob Sie als Erbe eine große Hofstelle in Bedburg-Kaster auflösen müssen oder als Kind Ihrer Eltern das Elternhaus nach dem Umzug ins Pflegeheim räumen wollen — unser Team begleitet Sie mit Respekt und Effizienz. Kostenlose Besichtigung, verbindlicher Festpreis, keine bösen Überraschungen.",
    ],
    localInfo: "In Bedburger Bauernhöfen und alten Hofstellen finden wir häufig landwirtschaftliche Geräte, alte Stalleinrichtungen und Jahrzehnte alte Kellervorräte. Wir sortieren fachkundig und entsorgen alles rechtssicher — Altmetall und Schrott werden auf den Preis angerechnet.",
    highlights: [
      "Haushaltsauflösung Bedburg inkl. aller Ortschaften",
      "Erfahrung mit ländlichen Hofstellen und Bauernhäusern",
      "Wertanrechnung für Antiquitäten und Hof-Inventar",
      "Diskrete Abwicklung bei Erbfällen und Todesfällen",
      "Festpreis nach kostenloser Besichtigung",
      "Kompletträumung bis zur besenreinen Übergabe",
    ],
    faqs: [
      {
        question: "Lösen Sie auch Haushalte auf Bauernhöfen in Bedburg auf?",
        answer:
          "Ja, wir haben umfangreiche Erfahrung mit Hofstellen und ländlichen Anwesen in Bedburg und Umgebung. Auch landwirtschaftliche Geräte, alte Werkzeuge und Stallmobiliar werden fachgerecht entsorgt oder auf den Preis angerechnet.",
      },
      {
        question: "Wie läuft die Haushaltsauflösung in Bedburg ab?",
        answer:
          "Zunächst besichtigen wir das Objekt kostenlos und erstellen ein verbindliches Festpreisangebot. Nach Ihrer Zustimmung führen wir die Auflösung zum vereinbarten Termin vollständig durch — inkl. Entsorgung und besenreiner Übergabe.",
      },
      {
        question: "Gibt es für Haushaltsauflösungen in Bedburg eine Mindestgröße?",
        answer:
          "Nein. Wir übernehmen Aufträge jeder Größe — von einzelnen Zimmern bis zu großen Hofstellen. Rufen Sie uns an oder schicken Sie uns Fotos, und wir erstellen Ihnen ein passendes Angebot.",
      },
      {
        question: "Werden auch Keller und Dachböden in Bedburg mitgeräumt?",
        answer:
          "Selbstverständlich — wir räumen das gesamte Objekt leer, inkl. Keller, Dachboden, Garage und Nebengebäude. Auf Wunsch kümmern wir uns auch um die Gartenabräumung.",
      },
    ],
    beispiel: {
      objektTyp: "Einfamilienhaus",
      flaeche: "120 m²",
      dauer: "1,5 Tage",
      preis: "950 €",
      details:
        "Haushaltsauflösung eines Einfamilienhauses in Bedburg-Kaster nach Erbfall. Räumung aller Zimmer inkl. Keller und Garage. Wertanrechnung für alte Küchenmöbel und Werkzeug: 120 €.",
      kundenzitat:
        "Nach dem Tod meines Vaters stand ich vor einem vollen Haus. Das Team hat alles professionell und einfühlsam erledigt. Ich bin sehr dankbar.",
      kundenName: "T. Hollmann",
    },
    neighborCities: neighbors("bedburg"),
  },

  kerpen: {
    cityName: "Kerpen",
    slug: "kerpen",
    plz: "50169",
    einwohner: "ca. 63.000",
    metaDescription:
      "Haushaltsauflösung Kerpen ✓ Sindorf, Manheim & alle Stadtteile ✓ Wertanrechnung ✓ Festpreis ✓ Diskret ☎ 02271 / 5880940",
    introText: [
      "Kerpen — bekannt als Geburtsstadt von Michael Schumacher — ist eine der größten Städte im Rhein-Erft-Kreis. Mit Stadtteilen wie Sindorf, Manheim, Buir, Horrem und Blatzheim decken wir ein breites Spektrum von kompakten Mietwohnungen bis zu großen Einfamilienhäusern ab. Die Nähe zum Tagebau Hambach hat die Stadt und ihre Bevölkerungsstruktur über Jahrzehnte geprägt.",
      "Besonders in den 1970er-Jahre-Siedlungen von Sindorf häufen sich über Jahrzehnte Möbel und Gegenstände an, die bei Haushaltsauflösungen fachgerecht sortiert und entsorgt werden müssen. Unser Team kennt Kerpen in- und auswendig und führt Auflösungen aller Größenordnungen durch — vom Einzimmer-Appartement bis zum Mehrfamilienhaus.",
      "In Kerpen-Manheim — einem der vom Tagebau betroffenen Ortschaften — haben wir jahrelange Erfahrung mit der Räumung von Häusern, die über Generationen bewohnt wurden. Schwere Schrankwände, alte Werkzeugsammlungen und Jahrzehnte alte Kellervorräte sind für unser Team Routine. Was Wert hat — Elektrogeräte, Möbel, Metallschrott — wird angerechnet und senkt Ihre Kosten direkt.",
      "Von Kerpen-Stadt über Türnich bis nach Buir und Blatzheim — wir sind in allen Kerpener Stadtteilen schnell und zuverlässig vor Ort. Kostenlose Besichtigung, verbindlicher Festpreis, besenreine Übergabe. Das ist unser Versprechen für jede Haushaltsauflösung in Kerpen.",
    ],
    localInfo: "In Kerpener Haushalten — besonders in den älteren Sindorfer Siedlungen — finden wir häufig schwere Schrankwände und Möbelgarnituren aus den 70ern, die aufwendig demontiert werden müssen. Auch aus dem Braunkohle-Umfeld stammende Werkzeuge und Maschinen begegnen uns regelmäßig. Das ist für unser Team Routine.",
    highlights: [
      "Haushaltsauflösung in allen Kerpener Stadtteilen",
      "Demontage schwerer Möbel inklusive",
      "Wertanrechnung für verwertbare Gegenstände",
      "Besenreine Übergabe termingerecht",
      "Festpreis nach Besichtigung — keine Überraschungen",
      "Entsorgung inkl. Elektrogeräte und Sondermüll",
    ],
    faqs: [
      {
        question: "Führen Sie Haushaltsauflösungen auch in Kerpen-Sindorf durch?",
        answer:
          "Ja, wir sind in allen Kerpener Stadtteilen aktiv — Sindorf, Manheim, Buir, Kerpen-Stadt, Türnich und weitere. Besonders in Sindorf sind wir regelmäßig im Einsatz.",
      },
      {
        question: "Was passiert mit Möbeln aus den 70er Jahren bei einer Haushaltsauflösung in Kerpen?",
        answer:
          "Alte Möbelgarnituren werden von uns komplett demontiert und fachgerecht entsorgt. Einige Stücke — z. B. massivholz Schränke oder gut erhaltene Retro-Möbel — können auf den Preis angerechnet werden.",
      },
      {
        question: "Wie viel kostet eine Haushaltsauflösung in Kerpen?",
        answer:
          "Der Preis hängt von der Größe des Haushalts und dem Füllgrad ab. Wir erstellen nach der kostenlosen Besichtigung ein verbindliches Festpreisangebot. Typische 3-Zimmer-Wohnungen liegen bei ca. 450–700 €.",
      },
      {
        question: "Kann die Haushaltsauflösung in Kerpen kurzfristig stattfinden?",
        answer:
          "Ja, wir bieten auch kurzfristige Termine an — oft innerhalb von 2–3 Werktagen nach der Besichtigung. Kontaktieren Sie uns per Telefon oder WhatsApp für einen schnellen Termin.",
      },
    ],
    beispiel: {
      objektTyp: "4-Zi.-Wohnung",
      flaeche: "90 m²",
      dauer: "1 Tag",
      preis: "620 €",
      details:
        "Haushaltsauflösung einer 4-Zimmer-Wohnung in Kerpen-Sindorf. Demontage einer Schrankwand aus den 80ern, vollständige Räumung, Entsorgung und besenreine Übergabe. Wertanrechnung für Waschmaschine: 50 €.",
      kundenzitat:
        "Unkompliziert, pünktlich und preiswert. Die Wohnung wurde komplett geräumt und besenrein übergeben — genau wie versprochen.",
      kundenName: "J. Müller",
    },
    neighborCities: neighbors("kerpen"),
  },

  elsdorf: {
    cityName: "Elsdorf",
    slug: "elsdorf",
    plz: "50189",
    einwohner: "ca. 20.000",
    metaDescription:
      "Haushaltsauflösung Elsdorf ✓ Alle Ortschaften ✓ Festpreis ✓ Wertanrechnung ✓ Diskrete Abwicklung ☎ 02271 / 5880940",
    introText: [
      "Elsdorf befindet sich im Wandel — von der Bergbauregion zur modernen Wohnstadt. Viele der älteren Bergarbeiterhäuser in Angelsdorf, Berrendorf, Heppendorf und Elsdorf-Mitte werden heute aufgelöst, wenn die Generation der ehemaligen Tagebauarbeiter ins Heim zieht oder verstirbt. Diese Haushalte haben einen unverwechselbaren Charakter.",
      "Unser Team führt Haushaltsauflösungen in Elsdorf mit besonderem Respekt und Fingerspitzengefühl durch. Wir wissen, was in diesen Haushalten typischerweise zu finden ist: schwere Möbelstücke aus den 1950er bis 1970er Jahren, Werkzeugsammlungen, Kellervorräte und Erinnerungsstücke aus der Bergmann-Zeit. Wir sortieren alles, entsorgen fachgerecht — und rechnen Verwertbares an.",
      "Die Nähe zum Tagebau Hambach und die jahrelange Industrieprägung bedeuten, dass in Elsdorfer Kellern und Garagen oft technische Geräte, Metallteile und Materialen zu finden sind, die besondere Entsorgungskompetenz erfordern. Sondermüll wie alte Farben, Chemikalien und Altöl entsorgen wir legal und umweltgerecht — das ist in unserem Festpreis bereits enthalten.",
      "Von Berrendorf über Niederbolheim bis Angelsdorf — wir kennen alle Elsdorfer Ortschaften und sind nach einer kostenlosen Besichtigung schnell mit dem Termin zur Stelle. Die Haushaltsauflösung in Elsdorf wird besenrein abgeschlossen — damit Sie das Objekt problemlos übergeben können.",
    ],
    localInfo: "In Elsdorfer Bergarbeiterhäusern treffen wir regelmäßig auf schwere Werkzeugschränke, Arbeitsmaterialien aus dem Tagebau und solide Möbel aus der Wirtschaftswunderzeit. Metallschrott und gut erhaltenes Werkzeug werden separat bewertet und auf den Preis angerechnet. Wir sortieren fachkundig und trennen Wertvolles vom Müll.",
    highlights: [
      "Spezialisiert auf Haushaltsauflösungen in Bergarbeiterhäusern",
      "Erfahrung mit Inventar aus dem Bergbaubereich",
      "Wertanrechnung für Werkzeug und Metallschrott",
      "Alle Elsdorfer Ortschaften werden bedient",
      "Besenreine Übergabe garantiert",
      "Diskret — auch bei schwierigen Erbsituationen",
    ],
    faqs: [
      {
        question: "Können Sie Haushalte in Elsdorf-Berrendorf und Angelsdorf auflösen?",
        answer:
          "Ja, wir sind in allen Ortschaften von Elsdorf aktiv — Berrendorf, Angelsdorf, Heppendorf, Niederbolheim und Elsdorf-Mitte. Kurze Anfahrtswege und günstige Konditionen.",
      },
      {
        question: "Wie gehen Sie mit altem Bergbau-Werkzeug bei Haushaltsauflösungen in Elsdorf um?",
        answer:
          "Alte Werkzeuge, Maschinen und Metallschrott werden bei uns separat bewertet. Gut erhaltenes Werkzeug oder Metallschrott kann auf den Preis angerechnet werden — das senkt Ihre Kosten.",
      },
      {
        question: "Was kostet eine Haushaltsauflösung in Elsdorf?",
        answer:
          "Kleine Wohnungen starten ab ca. 300 €, Einfamilienhäuser ab ca. 700 €. Nach der kostenlosen Besichtigung erhalten Sie ein verbindliches Festpreisangebot. Wertanrechnung ist immer möglich.",
      },
      {
        question: "Wie lange dauert eine Haushaltsauflösung in Elsdorf?",
        answer:
          "Kleine Wohnungen schaffen wir meist an einem Tag. Größere Häuser oder Hofstellen können 1–2 Tage in Anspruch nehmen. Wir planen den Termin so, dass Sie pünktlich übergeben können.",
      },
    ],
    beispiel: {
      objektTyp: "Reihenhaus",
      flaeche: "100 m²",
      dauer: "1,5 Tage",
      preis: "780 €",
      details:
        "Haushaltsauflösung eines Reihenhauses in Elsdorf-Berrendorf nach Todesfall. Räumung aller Ebenen inkl. Keller. Wertanrechnung für Metallschrott und Werkzeug: 90 €.",
      kundenzitat:
        "Das Team kam pünktlich, arbeitete sehr sorgfältig und hat nichts Wichtiges weggeworfen ohne uns zu fragen. Klasse Leistung.",
      kundenName: "R. Schäfer",
    },
    neighborCities: neighbors("elsdorf"),
  },

  pulheim: {
    cityName: "Pulheim",
    slug: "pulheim",
    plz: "50259",
    einwohner: "ca. 54.000",
    metaDescription:
      "Haushaltsauflösung Pulheim ✓ Stommeln, Sinnersdorf & alle Stadtteile ✓ Wertanrechnung ✓ Diskret ✓ Festpreis ☎ 02271 / 5880940",
    introText: [
      "Pulheim zählt zu den wohlhabenderen Städten im Rhein-Erft-Kreis — mit gepflegten Wohngebieten in Stommeln, Sinnersdorf, Geyen und dem historisch bedeutsamen Brauweiler mit seinem bekannten Kloster. Entsprechend hochwertig ist oft auch das Inventar, das bei einer Haushaltsauflösung in Pulheim zu bewerten und zu verwalten ist.",
      "Wir schätzen Möbel, Kunstgegenstände, Designerstücke und Elektrogeräte fachmännisch ein und rechnen verwertbares Inventar auf den Auflösungspreis an. So sparen Sie bares Geld — und Ihr Haushalt wird vollständig und besenrein übergeben. In Pulheim ist die Wertanrechnung oft besonders lohnend: Hochwertige Einbauküchen, Designermöbel und neuwertige Elektrogeräte haben einen echten Marktwert.",
      "In den gehobenen Wohnlagen von Pulheim-Stommeln und Vorrhein begegnen uns regelmäßig Haushalte, in denen Antiquitäten, Kunstobjekte und hochwertige Möbelgarnituren über Jahrzehnte gesammelt wurden. Unser Team bewertet diese Gegenstände direkt bei der Besichtigung und sorgt dafür, dass nichts Wertvolles unerkannt entsorgt wird.",
      "Von Pulheim-Mitte bis Ingendorf, von Brauweiler bis Geyen — wir sind in der gesamten Stadt Pulheim bekannt und erfahren. Die Haushaltsauflösung in Pulheim wird nach einem festen Zeitplan durchgeführt: Besichtigung, Angebot, Termin, Räumung, Übergabe. Schnell, diskret und stressfrei.",
    ],
    localInfo: "In Pulheimer Einfamilienhäusern finden wir häufig hochwertige Möbelgarnituren, Designerküchen und Kunstobjekte. Wir beurteilen den Wert professionell und sorgen dafür, dass Verwertbares nicht einfach entsorgt wird — das kann Ihre Kosten um bis zu 40 % senken.",
    highlights: [
      "Wertschätzende Behandlung hochwertiger Möbel und Kunst",
      "Wertanrechnung maximiert — bis zu 40 % günstiger",
      "Alle Pulheimer Stadtteile inkl. Brauweiler und Stommeln",
      "Diskret und respektvoll — besonders bei Erbfällen",
      "Besenreine Übergabe nach Wunschtermin",
      "Festpreis nach kostenloser Besichtigung",
    ],
    faqs: [
      {
        question: "Wie wird der Wert von Möbeln bei einer Haushaltsauflösung in Pulheim ermittelt?",
        answer:
          "Unser Team bewertet verwertbare Gegenstände direkt bei der Besichtigung. Hochwertige Möbel, Elektrogeräte, Schmuck oder Kunstobjekte werden auf den Gesamtpreis angerechnet. In manchen Fällen kann die Wertanrechnung die Kosten auf nahezu null reduzieren.",
      },
      {
        question: "Führen Sie Haushaltsauflösungen auch in Pulheim-Brauweiler durch?",
        answer:
          "Ja, wir sind in allen Pulheimer Stadtteilen aktiv — Brauweiler, Stommeln, Sinnersdorf, Geyen, Ingendorf und mehr. Kurze Wege und schnelle Termine.",
      },
      {
        question: "Können Sie eine Haushaltsauflösung in Pulheim auch am Wochenende durchführen?",
        answer:
          "Auf Anfrage bieten wir auch Samstagsarbeit an. Geben Sie uns Ihren Wunschtermin durch, und wir stimmen uns so gut wie möglich darauf ab.",
      },
      {
        question: "Was passiert mit Gegenständen, die keinen Marktwert haben?",
        answer:
          "Nicht verwertbare Gegenstände werden fachgerecht und rechtssicher entsorgt — sortiert nach Wertstoff, Sperrmüll und Sondermüll. Es entstehen dabei keine zusätzlichen Entsorgungskosten über den vereinbarten Festpreis hinaus.",
      },
    ],
    beispiel: {
      objektTyp: "Einfamilienhaus",
      flaeche: "140 m²",
      dauer: "2 Tage",
      preis: "1.100 €",
      details:
        "Haushaltsauflösung eines gehobenen Einfamilienhauses in Pulheim-Stommeln. Bewertung und Anrechnung einer Designerküche und Wohnzimmermöbel (Wertanrechnung: 280 €). Besenreine Übergabe für Immobilienmakler.",
      kundenzitat:
        "Absolut professionell. Die Möbel wurden bewertet, angerechnet und alles restliche sauber entsorgt. Hätte ich nicht gedacht, dass das so reibungslos klappt.",
      kundenName: "K. Weber",
    },
    neighborCities: neighbors("pulheim"),
  },

  frechen: {
    cityName: "Frechen",
    slug: "frechen",
    plz: "50226",
    einwohner: "ca. 51.000",
    metaDescription:
      "Haushaltsauflösung Frechen ✓ Grefrath, Habbelrath & alle Stadtteile ✓ Festpreis ✓ Wertanrechnung ✓ Diskret ☎ 02271 / 5880940",
    introText: [
      "Frechen — bekannt für seine jahrhundertealte Töpfer- und Keramiktradition — liegt in direkter Nachbarschaft zu Köln und ist dicht besiedelt. Die Mischung aus älteren Ortschaften wie Grefrath, Habbelrath und Buschbell sowie modernen Neubaugebieten spiegelt sich in den Haushalten wider, die wir auflösen. Frechens Nähe zu Köln macht es zu einem gefragten Wohnort — und zu einem aktiven Markt für Haushaltsauflösungen.",
      "Von der kompakten Stadtwohnung in Frechen-Mitte bis zum Einfamilienhaus in Grefrath — unser Team führt Haushaltsauflösungen in Frechen schnell, vollständig und zu fairen Festpreisen durch. Wertvolles wird angerechnet, der Rest fachgerecht entsorgt. Dank unserer kurzen Anfahrt aus dem Rhein-Erft-Kreis sind wir oft schon am nächsten Werktag bei Ihnen.",
      "In Frechener Altbauhaushalten begegnen wir gelegentlich historischen Keramikstücken und Sammlungsgegenständen aus der regionalen Töpfertradition. Diese bewerten wir vor der Entsorgung sorgfältig — was Wert hat, wird angerechnet. Das betrifft auch hochwertige Elektrogeräte, Schmuck und gut erhaltene Möbelstücke, die über die Jahrzehnte angesammelt wurden.",
      "Ob Haushaltsauflösung nach Todesfall in Frechen-Habbelrath, Auflösung nach Heimeinzug in Buschbell oder Erbschaftsräumung in Grefrath — wir sind erfahren, diskret und zuverlässig. Kostenlose Besichtigung, verbindlicher Festpreis, besenreine Übergabe — so arbeiten wir in Frechen.",
    ],
    localInfo: "In Frechener Altbauhaushalten finden wir gelegentlich historische Keramikstücke und Sammlungsgegenstände aus der lokalen Töpfertradition. Diese bewerten wir vor der Entsorgung und rechnen Wertvolles gerne an. Auch historische Küchengerätschaften und Haushaltsgegenstände aus der Nachkriegszeit begegnen uns regelmäßig.",
    highlights: [
      "Haushaltsauflösung in Frechen und allen Ortschaften",
      "Erfahrung mit Keramik-Sammlungen und Antiquitäten",
      "Schnelle Abwicklung — Nähe zu Köln, kurze Anfahrt",
      "Wertanrechnung für Sammlerstücke und Hausrat",
      "Besenreine Übergabe nach Wunschtermin",
      "Festpreis ohne versteckte Kosten",
    ],
    faqs: [
      {
        question: "Wie schnell kann eine Haushaltsauflösung in Frechen stattfinden?",
        answer:
          "Dank unseres Standorts im Rhein-Erft-Kreis sind wir schnell in Frechen. Nach der Besichtigung planen wir den Termin meist innerhalb von 1–3 Werktagen. Bei Dringlichkeit sprechen wir kurzfristige Lösungen ab.",
      },
      {
        question: "Kann ich historische Keramikstücke aus dem Haushalt verkaufen lassen?",
        answer:
          "Wir können den Wert von Keramik und Sammlungsstücken einschätzen und diese auf den Auflösungspreis anrechnen. Für Raritäten mit besonderem Wert empfehlen wir ergänzend einen Spezialisten.",
      },
      {
        question: "Führen Sie Haushaltsauflösungen auch in Frechen-Grefrath durch?",
        answer:
          "Ja, wir sind in allen Frechener Ortschaften aktiv — Grefrath, Habbelrath, Buschbell und Frechen-Stadt. Kurze Wege, faire Preise.",
      },
      {
        question: "Was kostet eine Haushaltsauflösung in Frechen?",
        answer:
          "Kleine Wohnungen ab ca. 300–450 €, größere Häuser entsprechend mehr. Kostenlose Besichtigung und verbindlicher Festpreis vor Beginn — keine Nachzahlungen.",
      },
    ],
    beispiel: {
      objektTyp: "3-Zi.-Wohnung",
      flaeche: "72 m²",
      dauer: "1 Tag",
      preis: "430 €",
      details:
        "Haushaltsauflösung einer 3-Zimmer-Wohnung in Frechen-Mitte. Vollständige Räumung inkl. Keller, Entsorgung Sperrmüll, Wertanrechnung für gut erhaltene Küchengeräte: 60 €.",
      kundenzitat:
        "Sehr zufrieden — pünktlich, ordentlich und der Preis hat gestimmt. Keinerlei Beanstandungen durch den Vermieter bei der Übergabe.",
      kundenName: "C. Bauer",
    },
    neighborCities: neighbors("frechen"),
  },

  huerth: {
    cityName: "Hürth",
    slug: "huerth",
    plz: "50354",
    einwohner: "ca. 60.000",
    metaDescription:
      "Haushaltsauflösung Hürth ✓ Efferen, Hermülheim & alle Stadtteile ✓ Festpreis ✓ Wertanrechnung ✓ Besenrein ☎ 02271 / 5880940",
    introText: [
      "Hürth gehört zu den größeren Städten im Rhein-Erft-Kreis und zeichnet sich durch eine urbane Dichte aus — zahlreiche Mehrfamilienhäuser in Efferen, Hermülheim, Kendenich und Hürth-Mitte machen Haushaltsauflösungen hier zu einem häufigen Auftrag für unser Team. Die Nähe zu Köln und der WDR-Standort prägen das Stadtbild.",
      "Ob Wohnungskündigung nach Heimeinzug, Erbfall oder familiärer Neustart — wir lösen Haushalte in Hürth schnell und vollständig auf. Unsere Nähe zu Köln ermöglicht uns flexible Termingestaltung auch für eilige Fälle. In Hürths vielen Mehrfamilienhäusern sind Treppenhäuser ohne Aufzug keine Seltenheit — unser Team ist geschult im Transport schwerer Möbel über enge Treppen, auch aus dem 4. oder 5. Stockwerk.",
      "In Hürth-Efferen, Stotzheim und Fischenich finden wir häufig Haushalte, die über viele Jahre intensiv genutzt wurden — mit entsprechend großen Mengen an Sperrmüll, Elektrogeräten und Einrichtungsgegenständen. Wir räumen vollständig, sortieren fachgerecht nach Wertstoff, Sperrmüll und Sondermüll, und hinterlassen die Wohnung besenrein für Vermieter oder Erben.",
      "In Kalscheuren, Hermülheim und rund um den Hürther Rhein-Erft-Kreis-Stadtteil kennen wir die lokalen Verhältnisse genau. Eine Haushaltsauflösung in Hürth ist für uns Routine — von der Anfrage bis zur fertigen Übergabe vergehen selten mehr als 3–5 Werktage.",
    ],
    localInfo: "In Hürths Mehrfamilienhäusern sind Treppenhäuser ohne Aufzug keine Seltenheit — unser Team ist geschult im Transport schwerer Möbel über enge Treppen und passt die Arbeitsweise entsprechend an. Auch Sperrmüll aus höheren Stockwerken stellt für uns kein Problem dar.",
    highlights: [
      "Erfahrung mit Mehrfamilienhäusern und engen Treppenhäusern",
      "Haushaltsauflösung in allen Hürther Stadtteilen",
      "Schnelle Terminvergabe auch bei Kündigungsfristen",
      "Wertanrechnung für Elektrogeräte und Möbel",
      "Besenreine Übergabe an Vermieter",
      "Festpreis — kein Stundenlohn, keine Nachkalkulation",
    ],
    faqs: [
      {
        question: "Können Sie auch Haushalte in Hürther Hochhäusern ohne Aufzug auflösen?",
        answer:
          "Ja, das ist unser Alltag. Unser Team ist auf Transporte ohne Aufzug spezialisiert. Wir tragen schwere Gegenstände sicher aus dem Gebäude — egal in welchem Stockwerk.",
      },
      {
        question: "Wie schnell kann ich einen Termin für eine Haushaltsauflösung in Hürth bekommen?",
        answer:
          "In der Regel vergeben wir Termine innerhalb von 1–3 Werktagen nach der Besichtigung. Bei Kündigungsfristen oder eiligen Wohnungsübergaben sprechen wir kurzfristige Lösungen ab.",
      },
      {
        question: "Führen Sie Haushaltsauflösungen auch in Hürth-Efferen und Kendenich durch?",
        answer:
          "Ja, wir sind in allen Hürther Stadtteilen aktiv — Efferen, Hermülheim, Kendenich, Stotzheim und Fischenich. Kurze Fahrwege und günstige Preise.",
      },
      {
        question: "Was kostet eine Haushaltsauflösung in Hürth?",
        answer:
          "2-Zimmer-Wohnungen ab ca. 300 €, 3-Zimmer ca. 450–650 €. Festpreis nach kostenloser Besichtigung — inkl. Entsorgung und besenreiner Übergabe.",
      },
    ],
    beispiel: {
      objektTyp: "2-Zi.-Wohnung",
      flaeche: "58 m²",
      dauer: "0,5 Tage",
      preis: "320 €",
      details:
        "Haushaltsauflösung einer 2-Zimmer-Wohnung in Hürth-Efferen, 3. OG ohne Aufzug. Vollständige Räumung inkl. Sperrmüll, besenreine Übergabe. Wertanrechnung für Geschirrspüler: 40 €.",
      kundenzitat:
        "Trotz fehlendem Aufzug war alles innerhalb von 4 Stunden leer. Sehr zuverlässiges Team, klare Empfehlung!",
      kundenName: "G. Heinz",
    },
    neighborCities: neighbors("huerth"),
  },

  erftstadt: {
    cityName: "Erftstadt",
    slug: "erftstadt",
    plz: "50374",
    einwohner: "ca. 52.000",
    metaDescription:
      "Haushaltsauflösung Erftstadt ✓ Lechenich, Liblar & alle Stadtteile ✓ Festpreis ✓ Wertanrechnung ✓ Diskret ☎ 02271 / 5880940",
    introText: [
      "Erftstadt bietet eines der vielfältigsten Wohnumfelder im Rhein-Erft-Kreis — von der historischen Altstadt Lechenich mit ihren mittelalterlichen Stadtmauern über das Schloss Liblar bis hin zu modernen Siedlungen in Gymnich, Friesheim und Köttingen. Diese Vielfalt spiegelt sich in den Haushalten wider, die wir auflösen: von der kompakten Altbauwohnung bis zum geräumigen Landhaus.",
      "Unser Team führt Haushaltsauflösungen in Erftstadt mit besonderem Respekt für die historische Bausubstanz durch. In den alten Lechenicher und Liblar Häusern begegnen uns oft wertvolle Antiquitäten, Familienerbstücke und historisches Inventar, das vor der Entsorgung sorgfältig bewertet werden sollte. Was Wert hat, rechnen wir an — das senkt Ihre Kosten direkt.",
      "Besonders nach Erbfällen oder beim Umzug älterer Eltern in eine Pflegeeinrichtung werden in Erftstadt häufig große Einfamilienhäuser aufgelöst, die über Jahrzehnte bewohnt wurden. Diese Haushalte erfordern 1–2 Tage intensive Arbeit, sorgfältige Sortierung und fachgerechte Entsorgung. Wir planen den Zeitrahmen realistisch und kommunizieren transparent.",
      "Von Dirmerzheim über Köttingen bis Gymnich und Friesheim — wir sind in allen Erftstädter Stadtteilen aktiv und kennen die regionalen Besonderheiten. Kostenlose Besichtigung, verbindlicher Festpreis, besenreine Übergabe: Das ist unser Standard für jede Haushaltsauflösung in Erftstadt.",
    ],
    localInfo: "In den historischen Stadtkernen von Lechenich und Liblar gibt es viele Altbauwohnungen mit besonderen Merkmalen — Parkett, Stuckdecken, alte Einbauschränke und oft wertvolle Familienmöbel. Wir gehen schonend vor, vermeiden Beschädigungen und bewerten Wertgegenstände professionell.",
    highlights: [
      "Haushaltsauflösung in Erftstadt inkl. Lechenich und Liblar",
      "Erfahrung mit historischen Altbauten und Familienmöbeln",
      "Wertanrechnung für Antiquitäten und Erbstücke",
      "Diskrete Abwicklung bei Erbfällen",
      "Besenreine Übergabe termingerecht",
      "Festpreis nach kostenloser Besichtigung",
    ],
    faqs: [
      {
        question: "Führen Sie Haushaltsauflösungen auch in Erftstadt-Lechenich durch?",
        answer:
          "Ja, wir decken alle Erftstädter Stadtteile ab — Lechenich, Liblar, Gymnich, Friesheim, Köttingen, Dirmerzheim und weitere. Kurze Wege, faire Preise.",
      },
      {
        question: "Wie gehen Sie mit historischen Gegenständen bei einer Haushaltsauflösung in Erftstadt um?",
        answer:
          "Wir bewerten alte Möbel, Kunstgegenstände und Erbstücke vor der Entsorgung professionell. Was einen Marktwert hat, wird auf den Preis angerechnet — so sparen Sie oft deutlich.",
      },
      {
        question: "Was kostet eine Haushaltsauflösung in Erftstadt?",
        answer:
          "Wohnungen ab ca. 350 €, Einfamilienhäuser ab ca. 800 €. Festpreis nach kostenloser Besichtigung — inkl. Entsorgung und besenreiner Übergabe.",
      },
      {
        question: "Kann ich die Haushaltsauflösung in Erftstadt auch an einem Samstag durchführen lassen?",
        answer:
          "Auf Anfrage bieten wir auch Samstagsarbeit an. Bitte Wunschtermin frühzeitig mitteilen, damit wir die Kapazität einplanen können.",
      },
    ],
    beispiel: {
      objektTyp: "Einfamilienhaus",
      flaeche: "130 m²",
      dauer: "2 Tage",
      preis: "1.050 €",
      details:
        "Haushaltsauflösung eines Einfamilienhauses in Erftstadt-Liblar nach Todesfall. Räumung aller Räume inkl. Dachboden und Keller, Wertanrechnung für Antiquitäten und Silberbesteck: 160 €.",
      kundenzitat:
        "Das Team war sehr respektvoll und hat die alten Familienstücke sorgfältig bewertet. Wir sind sehr dankbar für die professionelle Hilfe.",
      kundenName: "M. Kramer",
    },
    neighborCities: neighbors("erftstadt"),
  },

  rommerskirchen: {
    cityName: "Rommerskirchen",
    slug: "rommerskirchen",
    plz: "41569",
    einwohner: "ca. 13.500",
    metaDescription:
      "Haushaltsauflösung Rommerskirchen ✓ Alle Ortschaften ✓ Festpreis ✓ Landwirtschaftl. Inventar ✓ Diskret ☎ 02271 / 5880940",
    introText: [
      "Rommerskirchen ist die nördlichste Gemeinde im Rhein-Erft-Kreis — ländlich geprägt, mit kleinen Ortschaften wie Nettesheim-Butzheim, Hoeningen, Sinsteden und Frixheim. Viele der Familien hier leben seit Generationen in Einfamilienhäusern oder auf landwirtschaftlichen Anwesen, deren Inventar bei einer Haushaltsauflösung besondere Aufmerksamkeit verdient.",
      "Wir führen Haushaltsauflösungen in Rommerskirchen und allen Ortschaften durch — mit Erfahrung für ländliche Anwesen, Höfe und traditionsreiche Familienhaushalte. Das Gut Mariaweiler und die typischen Rommerskirchener Bauernhöfe kennen wir aus eigener Erfahrung. Landwirtschaftliches Gerät, alte Werkzeuge und Kellerinventar aus Jahrzehnten sortieren wir fachkundig.",
      "In Rommerskirchener Haushalten begegnen uns häufig Gegenstände, die Weinbauregion-typisch sind: alte Weinkeller, Fässer, Weinpressen und Zubehör aus dem rheinischen Weinbau. Diese Spezialitäten bewerten wir separat — Verwertbares wird angerechnet. Auch Landmaschinen und Stalleinrichtungen nehmen wir sachgerecht in Empfang.",
      "Trotz seiner überschaubaren Größe bietet Rommerskirchen einen echten Bedarf an professionellen Haushaltsauflösungen — besonders bei Erbfällen in alten Familienhäusern. Wir arbeiten diskret, zuverlässig und zu fairen Festpreisen. Kostenlose Besichtigung, verbindliches Angebot, besenreine Übergabe — das ist unser Versprechen.",
    ],
    localInfo: "In Rommerskirchener Haushalten finden wir häufig landwirtschaftliches Inventar, Weinkeller-Ausstattungen und Jahrzehnte alte Vorratslager. Metallschrott, Altgeräte und gut erhaltene Werkzeuge werden bewertet und auf den Preis angerechnet.",
    highlights: [
      "Haushaltsauflösung Rommerskirchen inkl. aller Ortschaften",
      "Erfahrung mit ländlichen Anwesen und Bauernhöfen",
      "Wertanrechnung für Landmaschinen und Werkzeug",
      "Diskret — auch bei schwierigen Erbregelungen",
      "Besenreine Übergabe garantiert",
      "Festpreis nach kostenloser Besichtigung",
    ],
    faqs: [
      {
        question: "Führen Sie Haushaltsauflösungen in Rommerskirchen-Nettesheim durch?",
        answer:
          "Ja, wir sind in allen Rommerskirchener Ortschaften aktiv — Nettesheim, Butzheim, Hoeningen, Sinsteden, Frixheim und weiteren. Kurze Wege und günstige Preise.",
      },
      {
        question: "Können Sie auch landwirtschaftliche Geräte bei einer Haushaltsauflösung in Rommerskirchen entsorgen?",
        answer:
          "Ja — alte Landmaschinen, Stalleinrichtungen und landwirtschaftliches Gerät werden fachgerecht entsorgt oder auf den Preis angerechnet, wenn sie noch Schrottwert haben.",
      },
      {
        question: "Was kostet eine Haushaltsauflösung in Rommerskirchen?",
        answer:
          "Kleine Wohnungen ab ca. 300 €, Einfamilienhäuser ab ca. 700 €, größere Höfe entsprechend mehr. Nach der Besichtigung erhalten Sie ein verbindliches Festpreisangebot.",
      },
      {
        question: "Wie lange dauert eine Haushaltsauflösung in Rommerskirchen?",
        answer:
          "Kleine Wohnungen schaffen wir an einem Tag. Große Höfe oder vollgemöblierte Häuser können 1–2 Tage in Anspruch nehmen. Wir kommunizieren den Zeitrahmen vorab klar.",
      },
    ],
    beispiel: {
      objektTyp: "Einfamilienhaus",
      flaeche: "115 m²",
      dauer: "1,5 Tage",
      preis: "870 €",
      details:
        "Haushaltsauflösung eines Einfamilienhauses in Rommerskirchen-Nettesheim. Räumung inkl. Keller und Garage. Wertanrechnung für Werkzeug und Altmetall: 100 €.",
      kundenzitat:
        "Zuverlässig und fair. Das Haus meiner Großeltern wurde mit viel Respekt geräumt. Ich bin sehr dankbar für den guten Service.",
      kundenName: "P. Nolden",
    },
    neighborCities: neighbors("rommerskirchen"),
  },

  grevenbroich: {
    cityName: "Grevenbroich",
    slug: "grevenbroich",
    plz: "41515",
    einwohner: "ca. 65.000",
    metaDescription:
      "Haushaltsauflösung Grevenbroich ✓ Kapellen, Gustorf & alle Stadtteile ✓ Festpreis ✓ Wertanrechnung ✓ Diskret ☎ 02271 / 5880940",
    introText: [
      "Grevenbroich — die 'Stadt der Energie' — ist bekannt durch den nahe gelegenen Tagebau Garzweiler und den Energiestandort Frimmersdorf. Die Stadt mit rund 65.000 Einwohnern hat eine vielseitige Stadtstruktur: von der dichten Bebauung der Innenstadt über die Wohngebiete in Kapellen, Elfgen und Gustorf bis zu den ländlich geprägten Stadtteilen Hemmerden und Hülchrath.",
      "Haushaltsauflösungen in Grevenbroich sind sowohl bei stadtnahen Mehrfamilienhäusern als auch bei alten Bauernhöfen in den Außenortschaften gefragt. Unser Team ist regelmäßig in der gesamten Stadt im Einsatz und kennt die Besonderheiten der verschiedenen Stadtteile genau — von Wevelinghoven bis Neukirchen.",
      "In Grevenbroich begegnen uns bei Haushaltsauflösungen oft Haushalte der Tagebau-Generation: Familien, die über Jahrzehnte in den Bergbaugemeinden gelebt und entsprechend robustes, langlebiges Inventar angesammelt haben. Werkzeuge, Metallteile und solide Möbelgarnituren aus dieser Zeit werden von uns fachkundig sortiert — Verwertbares wird angerechnet und senkt Ihre Kosten direkt.",
      "Vom Stadtzentrum bis nach Kapellen, von Elfgen bis Gustorf — wir sind in Grevenbroich und allen Stadtteilen schnell vor Ort. Kostenlose Besichtigung, verbindliches Festpreisangebot, diskrete Abwicklung und besenreine Übergabe: So arbeiten wir in Grevenbroich.",
    ],
    localInfo: "In Grevenbroicher Wohngebieten, besonders in den älteren Teilen der Innenstadt und in Kapellen, finden wir häufig Haushalte mit schwerem Mobiliar aus den 1960er bis 1980er Jahren. Auch in den ländlichen Außenortschaften begegnen uns Hofstellen mit landwirtschaftlichem Inventar, das besondere Entsorgungskompetenz erfordert.",
    highlights: [
      "Haushaltsauflösung in Grevenbroich und allen Stadtteilen",
      "Erfahrung mit Tagebau-Generation und robustem Inventar",
      "Wertanrechnung für Werkzeug und Möbel",
      "Diskrete Abwicklung bei Erbfällen",
      "Besenreine Übergabe termingerecht",
      "Festpreis nach kostenloser Besichtigung",
    ],
    faqs: [
      {
        question: "Führen Sie Haushaltsauflösungen auch in Grevenbroich-Kapellen durch?",
        answer:
          "Ja, wir sind in allen Grevenbroicher Stadtteilen aktiv — Kapellen, Elfgen, Gustorf, Hemmerden, Hülchrath, Neukirchen, Wevelinghoven und weitere.",
      },
      {
        question: "Was kostet eine Haushaltsauflösung in Grevenbroich?",
        answer:
          "Kleine Wohnungen ab ca. 320 €, Einfamilienhäuser ab ca. 750 €. Nach der kostenlosen Besichtigung erhalten Sie einen verbindlichen Festpreis.",
      },
      {
        question: "Wie schnell kann die Haushaltsauflösung in Grevenbroich stattfinden?",
        answer:
          "Oft innerhalb von 2–4 Werktagen nach der Besichtigung. Bei dringendem Bedarf sprechen wir kurzfristige Lösungen ab.",
      },
      {
        question: "Können Sie auch Haushalte auf Höfen in den Außenortschaften Grevenbroichs auflösen?",
        answer:
          "Ja — landwirtschaftliche Anwesen, Hofstellen und ländliche Einfamilienhäuser in den Außenortschaften sind für uns kein Problem. Wir sind erfahren im Umgang mit großen und ungewöhnlichen Haushalten.",
      },
    ],
    beispiel: {
      objektTyp: "3-Zi.-Wohnung",
      flaeche: "80 m²",
      dauer: "1 Tag",
      preis: "520 €",
      details:
        "Haushaltsauflösung einer 3-Zimmer-Wohnung in Grevenbroich-Kapellen nach Heimeinzug. Vollständige Räumung inkl. Keller, Entsorgung, besenreine Übergabe. Wertanrechnung Elektrogeräte: 70 €.",
      kundenzitat:
        "Professionell, pünktlich und fair. Meine Mutter konnte beruhigt ins Seniorenheim ziehen, weil das Team alles perfekt geregelt hat.",
      kundenName: "H. Schubert",
    },
    neighborCities: neighbors("grevenbroich"),
  },

  bruehl: {
    cityName: "Brühl",
    slug: "bruehl",
    plz: "50321",
    einwohner: "ca. 46.000",
    metaDescription:
      "Haushaltsauflösung Brühl ✓ Vochem, Pingsdorf & alle Stadtteile ✓ Festpreis ✓ Wertanrechnung ✓ Diskret ☎ 02271 / 5880940",
    introText: [
      "Brühl — bekannt durch das weltberühmte Phantasialand und das UNESCO-Welterbe Schloss Augustusburg — ist eine wohlhabende Stadt zwischen Köln und Bonn. Die Wohngebiete in Vochem, Pingsdorf, Kierberg und Badorf zeichnen sich durch gepflegte Einfamilienhäuser und gut erhaltene Mietwohnungen aus. Bei Haushaltsauflösungen in Brühl begegnen uns entsprechend hochwertige Einrichtungen.",
      "Wir führen Haushaltsauflösungen in Brühl mit besonderem Blick für wertvolle Gegenstände durch — Antiquitäten, Designermöbel und hochwertige Elektrogeräte werden professionell bewertet und auf den Preis angerechnet. So profitieren Sie von der gehobenen Wohnlage: Das, was andere wegwerfen würden, senkt bei uns Ihre Kosten.",
      "In den ruhigen Wohnstraßen rund um das Schloss Augustusburg und den historischen Stadtkern von Brühl finden wir bei Haushaltsauflösungen oft Familienhaushalte mit langer Geschichte — Porzellansammlungen, antike Möbelstücke, Silberbesteck und Kunstgegenstände. Unser Team ist darin geübt, Wertvolles zu erkennen und sachgerecht zu behandeln, bevor es entsorgt wird.",
      "Von Brühl-Mitte bis Vochem, von Pingsdorf bis Kierberg — wir kennen alle Brühler Stadtteile und sind nach einer kostenlosen Besichtigung schnell mit einem verbindlichen Festpreis zur Stelle. Besenreine Übergabe, diskrete Abwicklung und faire Preise — das ist unser Standard in Brühl.",
    ],
    localInfo: "In Brühls gepflegten Wohngebieten rund um das Schloss Augustusburg finden wir häufig Haushalte mit hochwertigen Möbeln, Antiquitäten und Sammelgegenständen. Die Wertanrechnung lohnt sich hier besonders — gut erhaltene Designerstücke und Kunstgegenstände können die Kosten der Haushaltsauflösung erheblich reduzieren.",
    highlights: [
      "Haushaltsauflösung Brühl inkl. aller Stadtteile",
      "Fachkundige Bewertung von Antiquitäten und Designermöbeln",
      "Wertanrechnung maximiert Ihre Ersparnis",
      "Diskrete Abwicklung bei Erbfällen und Todesfällen",
      "Besenreine Übergabe nach Wunschtermin",
      "Festpreis nach kostenloser Besichtigung",
    ],
    faqs: [
      {
        question: "Führen Sie Haushaltsauflösungen auch in Brühl-Vochem und Pingsdorf durch?",
        answer:
          "Ja, wir sind in allen Brühler Stadtteilen aktiv — Vochem, Pingsdorf, Kierberg, Badorf und Brühl-Mitte. Kurze Wege und faire Konditionen.",
      },
      {
        question: "Kann ich Antiquitäten bei der Haushaltsauflösung in Brühl bewerten lassen?",
        answer:
          "Ja — wir bewerten Antiquitäten, alte Möbel, Schmuck und Kunstgegenstände direkt bei der Besichtigung und rechnen Wertvolles auf den Preis an. So sparen Sie oft deutlich.",
      },
      {
        question: "Was kostet eine Haushaltsauflösung in Brühl?",
        answer:
          "Wohnungen ab ca. 350 €, Einfamilienhäuser ab ca. 850 €. Durch Wertanrechnung kann der Endpreis deutlich niedriger ausfallen. Kostenlose Besichtigung und verbindlicher Festpreis.",
      },
      {
        question: "Wie diskret wird die Haushaltsauflösung in Brühl durchgeführt?",
        answer:
          "Sehr diskret — wir kommen mit unauffälligen Fahrzeugen, arbeiten respektvoll und kommunizieren ausschließlich mit den Auftraggebern. Nachbarn oder Vermieter erfahren nichts von der Situation, wenn Sie das so wünschen.",
      },
    ],
    beispiel: {
      objektTyp: "Einfamilienhaus",
      flaeche: "145 m²",
      dauer: "2 Tage",
      preis: "950 €",
      details:
        "Haushaltsauflösung eines Einfamilienhauses in Brühl-Vochem nach Erbfall. Bewertung von Antiquitäten und Wohnzimmermöbeln (Wertanrechnung: 220 €). Räumung aller Räume, Keller und Garage, besenreine Übergabe.",
      kundenzitat:
        "Die alten Möbel meiner Großeltern wurden professionell bewertet — der Endpreis war deutlich günstiger als erwartet. Sehr empfehlenswert.",
      kundenName: "S. Franken",
    },
    neighborCities: neighbors("bruehl"),
  },

  wesseling: {
    cityName: "Wesseling",
    slug: "wesseling",
    plz: "50389",
    einwohner: "ca. 37.000",
    metaDescription:
      "Haushaltsauflösung Wesseling ✓ Urfeld, Berzdorf & alle Stadtteile ✓ Festpreis ✓ Wertanrechnung ✓ Diskret ☎ 02271 / 5880940",
    introText: [
      "Wesseling am Rhein — geprägt vom Chemiepark mit Unternehmen wie Shell, Bayer und Ineos — ist eine kompakte Stadt mit überwiegend Mehrfamilienhäusern und Werkswohnungen in Urfeld, Berzdorf und Wesseling-Mitte. Haushaltsauflösungen in Wesseling sind häufig geprägt von typischem Arbeitnehmerhaushalt: solide, langlebig und oft mit speziellen Materialien aus dem beruflichen Umfeld.",
      "Ob in Urfeld am Rhein oder in Berzdorf — wir lösen Wesselinger Haushalte diskret und vollständig auf. Wertanrechnung für Metallschrott und Elektrogeräte senkt Ihre Kosten. Unser Team ist erfahren im Umgang mit Sondermüll und Chemikalien, die in Haushalten von Chemiepark-Mitarbeitern gelegentlich zu finden sind.",
      "In Wesselinger Werkswohnungen häufen sich häufig Werkzeuge, Chemikalienbehälter und technische Materialien aus dem beruflichen Umfeld an. Die fachgerechte und gesetzeskonforme Entsorgung dieser Sonderstoffe ist für uns Routine — wir arbeiten nach den gesetzlichen Vorschriften und entsorgen alles rechtssicher. Das ist im Festpreis enthalten.",
      "Vom Wesselinger Hafen bis zu den Wohngebieten in Berzdorf und Urfeld — wir sind in der gesamten Stadt Wesseling bekannt und schnell vor Ort. Kostenlose Besichtigung, verbindliches Festpreisangebot, besenreine Übergabe für Vermieter oder Erben. So arbeiten wir in Wesseling.",
    ],
    localInfo: "In Wesselinger Werkswohnungen häufen sich häufig Werkzeuge und Chemikalienbehälter aus dem beruflichen Umfeld an. Diese entsorgen wir rechtssicher und fachgerecht — auch Sondermüll ist kein Problem für uns. Altmetall und Schrott werden auf den Preis angerechnet.",
    highlights: [
      "Haushaltsauflösung in Wesseling inkl. Urfeld und Berzdorf",
      "Kompetente Entsorgung von Sondermüll und Chemikalien",
      "Wertanrechnung für Metallschrott und Elektrogeräte",
      "Schnelle Abwicklung — oft 1 Tag für kleine Haushalte",
      "Besenreine Übergabe an Vermieter oder Makler",
      "Festpreis nach kostenloser Besichtigung",
    ],
    faqs: [
      {
        question: "Können Sie auch Sondermüll und Chemikalien bei einer Haushaltsauflösung in Wesseling entsorgen?",
        answer:
          "Ja, wir sind auf die fachgerechte Entsorgung von Sondermüll spezialisiert — alte Farben, Lösungsmittel, Batterien und Elektroschrott werden legal und umweltgerecht entsorgt.",
      },
      {
        question: "Führen Sie Haushaltsauflösungen auch in Wesseling-Urfeld durch?",
        answer:
          "Ja, wir sind in allen Wesselinger Stadtteilen aktiv — Urfeld, Berzdorf, Wesseling-Mitte und allen umliegenden Gebieten.",
      },
      {
        question: "Wie viel kostet eine Haushaltsauflösung in Wesseling?",
        answer:
          "Kleine Wohnungen starten ab ca. 280 €, größere Wohnungen ab ca. 450–700 €. Nach der kostenlosen Besichtigung erhalten Sie ein verbindliches Festpreisangebot.",
      },
      {
        question: "Kann ich die Haushaltsauflösung in Wesseling auch als Vermieter beauftragen?",
        answer:
          "Selbstverständlich. Wir arbeiten direkt mit Eigentümern und Verwaltungen zusammen und übergeben besenrein — bereit für den nächsten Mieter.",
      },
    ],
    beispiel: {
      objektTyp: "3-Zi.-Wohnung",
      flaeche: "68 m²",
      dauer: "1 Tag",
      preis: "390 €",
      details:
        "Haushaltsauflösung einer 3-Zimmer-Wohnung in Wesseling-Berzdorf. Vollständige Räumung, fachgerechte Entsorgung inkl. alter Farben aus dem Keller. Wertanrechnung Metallschrott: 45 €.",
      kundenzitat:
        "Zuverlässig und faire Preise. Sogar der alte Keller mit dem ganzen Chemiezeugs wurde sauber geräumt. Sehr zufrieden.",
      kundenName: "D. Hartmann",
    },
    neighborCities: neighbors("wesseling"),
  },
};
