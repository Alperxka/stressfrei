import { Link } from "wouter";
import LocationPage from "@/components/location-page";
import CityExtrasTemplate, { CityExtrasData } from "@/components/city-extras-template";

const data: CityExtrasData = {
  cityName: "Frechen",
  distanz: "ca. 20 km",
  fahrzeit: "ca. 20 Min.",
  plz: "50226",
  einwohner: "ca. 54.000",
  kreis: "Rhein-Erft-Kreis",
  entsorgung: "AWB Rhein-Erft-Kreis",
  naherOrtTip: "Frechen liegt westlich von Köln an der A1 und A4 — von unserem Standort in Bergheim fahren wir in rund 20 Minuten zu Ihnen. Die Anbindung macht Frechen zum attraktiven Wohnstandort: viele Wohnungswechsel, Umzüge nach Köln und Haushaltsauflösungen bei Generationenwechsel.",
  lokalerFakt: "Frechen, bekannt als ehemalige Töpferstadt, hat eine attraktive Mischung aus historischen Vierteln und modernen Wohngebieten. In Königsdorf, dem bevölkerungsreichsten Ortsteil, sind Wohnungsauflösungen für uns Alltag.",
  mfhText: "In Königsdorf und der Frechener Innenstadt gibt es viele ältere Mehrfamilienhäuser mit engen Treppenhäusern und vollgestellten Kellern. Wohnungsauflösungen für Vermieter sind besonders häufig.",
  mfhArea: "Königsdorf · Frechen-Mitte",
  efhText: "In Bachem und Grefrath finden sich viele Einfamilienhäuser der 1970er–80er Jahre. Regelmäßig werden diese nach Generationenwechsel oder vor dem Hausverkauf komplett geräumt.",
  efhArea: "Bachem · Grefrath · Buschbell",
  kellerText: "In Habbelrath und den ländlicheren Ortsteilen gibt es viele alte Hofanlagen und Scheunen. Auch Garagenräumungen und Schrottabholung für Kerpener Gewerbegebiete.",
  kellerArea: "Habbelrath · Hücheln · Ländliche Ortsteile",
  stadtteileCards: [
    { name: "Königsdorf", badge: "Bevölkerungsreichster Ortsteil", desc: "Bevölkerungsreichster Frechener Ortsteil mit S-Bahn-Anbindung. Wohnungsauflösungen und Kellerentrümpelungen für Vermieter sind hier besonders häufig." },
    { name: "Frechen-Innenstadt", desc: "Historische Töpferstadt mit vielen Altbauten und Wohnblöcken. Haushaltsauflösungen nach Erbschaft und Wohnungsräumungen für Eigentümer werden regelmäßig gebucht." },
    { name: "Bachem", desc: "Ruhiges Wohngebiet mit Reihenhäusern und Einfamilienhäusern. Haushaltsauflösungen nach Erbschaft, Sperrmüll und Seniorenumzüge — wir kommen kurzfristig." },
    { name: "Grefrath", desc: "Kleiner Ortsteil mit Einfamilienhäusern in ruhiger Lage. Teilentrümpelungen, Garagenräumungen und Kellerentrümpelungen vor dem Einzug." },
    { name: "Habbelrath", badge: "Ländlicher Charakter", desc: "Ländlicher Ortsteil mit alten Hofanlagen. Scheunenräumungen, Hofauflösungen und Entrümpelungen nach Erbschaft — speziell für ländliche Objekte erfahren." },
    { name: "Buschbell / Hücheln", desc: "Kleine Orte zwischen Frechen und Kerpen. Sperrmüll, Kellerentrümpelungen und Gartengeräte-Entsorgung — schnell und unkompliziert." },
  ],
};

export default function FrechenPage() {
  return (
    <LocationPage
      cityName="Frechen"
      slug="frechen"
      description="Entrümpelungen, Haushaltsauflösungen und Umzüge in Frechen. Schnelle Ausführung, transparente Festpreise und besenreine Übergabe."
      metaDescription="Entrümpelung Frechen ✓ Haushaltsauflösung ✓ Umzüge ✓ Festpreise ✓ 24-48h ✓ 5.0 Sterne Google ✓ Kostenlose Besichtigung ☎ 02271 / 5880940"
      introText={<>
        Frechen liegt direkt westlich von Köln und ist von unserem Standort in <Link href="/entruempelung-bergheim" className="text-primary hover:underline font-medium">Bergheim</Link> schnell erreichbar. In Frechen und den Ortsteilen Königsdorf, Bachem, Grefrath und Habbelrath bieten wir professionelle <Link href="/entruempelung" className="text-primary hover:underline font-medium">Entrümpelungen</Link>, <Link href="/haushaltsaufloesung" className="text-primary hover:underline font-medium">Haushaltsauflösungen</Link> und <Link href="/umzug" className="text-primary hover:underline font-medium">Umzüge</Link> an. Unser Team arbeitet schnell, sauber und zu transparenten Festpreisen — damit Sie sich um nichts kümmern müssen. Die Nähe zu Köln macht Frechen zu einem attraktiven Wohnstandort mit vielen Wohnungswechseln, für die wir der zuverlässige Partner sind.
      </>}
      localInfo={<>
        Frechen ist als ehemalige Töpferstadt bekannt und liegt verkehrsgünstig an der A1 und A4. Die Stadt hat eine attraktive Mischung aus modernen Wohngebieten und historischen Vierteln. In Königsdorf, dem bevölkerungsreichsten Ortsteil, und der Frechener Innenstadt sind wir besonders häufig für <Link href="/entruempelung" className="text-primary hover:underline font-medium">Entrümpelungen</Link> und <Link href="/umzug" className="text-primary hover:underline font-medium">Umzüge</Link> im Einsatz. Die Nähe zu Köln sorgt für viele Umzugsaufträge in die Domstadt sowie häufige <Link href="/wohnungsaufloesung" className="text-primary hover:underline font-medium">Wohnungsauflösungen</Link> in den älteren Mehrfamilienhäusern.
      </>}
      localExtras={<CityExtrasTemplate data={data} />}
      plz="50226"
      einwohner="ca. 54.000"
      kreis="Rhein-Erft-Kreis"
      highlights={[
        "Schnell erreichbar zwischen Köln und Bergheim",
        "Alle Ortsteile: Königsdorf, Bachem, Grefrath",
        "Entrümpelung in 24–48 Stunden",
        "Kostenlose Besichtigung und Festpreisangebot",
        "Besenreine Übergabe ohne Aufpreis",
        "Umweltgerechte Entsorgung garantiert",
      ]}
      faqs={[
        {
          question: "Was kostet eine Entrümpelung in Frechen?",
          answer: "Eine Entrümpelung in Frechen beginnt je nach Größe und Füllgrad ab ca. 500–1.000 € für eine 2-Zimmer-Wohnung. Für größere Objekte erstellen wir ein individuelles Festpreisangebot nach kostenloser Besichtigung.",
        },
        {
          question: "Entrümpeln Sie auch in Königsdorf?",
          answer: "Ja, wir sind in allen Frechener Ortsteilen aktiv — Königsdorf, Bachem, Grefrath und Habbelrath. Die Anfahrt ist stets im Festpreis enthalten.",
        },
        {
          question: "Kann ich auch nur den Keller oder Dachboden entrümpeln lassen?",
          answer: "Ja, Teilentrümpelungen sind möglich. Egal ob Keller, Dachboden, Garage oder einzelne Zimmer — Sie erhalten für jeden Umfang ein faires Festpreisangebot.",
        },
        {
          question: "Bieten Sie auch Büroumzüge in Frechen an?",
          answer: "Ja, neben Privatumzügen und Seniorenumzügen bieten wir auch professionelle Büroumzüge in Frechen und Umgebung an. Wir sorgen dafür, dass Ihr Betrieb so schnell wie möglich weiterläuft.",
        },
        {
          question: "Führen Sie auch Umzüge von Frechen nach Köln durch?",
          answer: "Ja, Umzüge von Frechen nach Köln sind eine unserer häufigsten Aufgaben. Dank der kurzen Entfernung sind diese besonders günstig. Wir bieten Privat-, Senioren- und Büroumzüge mit vollem Möbelservice an.",
        },
        {
          question: "Wie läuft die Wertanrechnung bei einer Entrümpelung in Frechen ab?",
          answer: "Bei der kostenlosen Besichtigung schauen wir uns alle vorhandenen Gegenstände an. Antiquitäten, Metalle, Elektrogeräte und hochwertige Möbel werden bewertet und direkt vom Entrümpelungspreis abgezogen — ganz transparent und nachvollziehbar.",
        },
      ]}
      beispiel={{
        stadtteil: "Königsdorf",
        objektTyp: "2-Zimmer-Wohnung",
        etage: "3. OG mit Aufzug",
        flaeche: "ca. 55 m²",
        dauer: "1 Tag",
        team: "2 Mitarbeiter",
        preis: "750 €",
        leistungen: [
          "Entrümpelung aller Räume inkl. Abstellkammer",
          "Demontage von Schränken und Regalen",
          "Abtransport und fachgerechte Entsorgung",
          "Wertanrechnung für Antiquitäten (–120 €)",
          "Besenreine Übergabe am selben Tag",
        ],
        kundenzitat: "Schnell, unkompliziert und der Preis war fair. Die Wertanrechnung hat mich positiv überrascht!",
        kundenName: "Monika S.",
      }}
      stadtteileDetail={[
        { name: "Königsdorf", href: "/entruempelung-koenigsdorf", text: "Bevölkerungsreichster Frechener Ortsteil mit vielen Mehrfamilienhäusern und guter S-Bahn-Anbindung — Wohnungsauflösungen, Kellerentrümpelungen und Umzüge nach Köln sind hier besonders häufig." },
        { name: "Bachem", href: "/entruempelung-bachem", text: "Ruhiges Wohngebiet mit überwiegend Reihenhäusern und Einfamilienhäusern — Haushaltsauflösungen nach Erbschaft, Sperrmüllentsorgung und Seniorenumzüge ins Pflegeheim werden regelmäßig gebucht." },
        { name: "Grefrath", text: "Kleiner Ortsteil mit Einfamilienhäusern und ruhiger Wohnlage — Teilentrümpelungen, Garagenräumungen und Kellerentrümpelungen vor dem Einzug sind typische Aufträge." },
        { name: "Habbelrath", href: "/entruempelung-habbelrath", text: "Ländlich geprägter Ortsteil mit alten Hofanlagen und Einfamilienhäusern — Scheunenräumungen, Hofauflösungen und Entrümpelungen nach Erbschaft." },
        { name: "Buschbell", text: "Kleines Dorf zwischen Frechen und Kerpen — Sperrmüll, Kellerentrümpelungen und Gartengeräte-Entsorgung werden hier regelmäßig bei uns angefragt." },
        { name: "Hücheln", text: "Ruhige Wohnlage nahe der A1 — Umzüge nach Köln und in den Rhein-Erft-Kreis sowie Haushaltsauflösungen nach Auszug sind häufige Aufträge." },
      ]}
      stadtteile={[
        "Königsdorf", "Bachem", "Grefrath", "Habbelrath", "Buschbell", "Hücheln",
      ]}
      neighborCities={[
        { name: "Hürth", slug: "huerth" },
        { name: "Kerpen", slug: "kerpen" },
        { name: "Pulheim", slug: "pulheim" },
        { name: "Bergheim", slug: "bergheim" },
        { name: "Erftstadt", slug: "erftstadt" },
        { name: "Elsdorf", slug: "elsdorf" },
      ]}
      mapEmbed="https://www.google.com/maps?q=Frechen,+Rhein-Erft-Kreis,+NRW&output=embed"
    />
  );
}
