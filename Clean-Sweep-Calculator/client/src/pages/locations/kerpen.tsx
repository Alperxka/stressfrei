import { Link } from "wouter";
import LocationPage from "@/components/location-page";
import CityExtrasTemplate, { CityExtrasData } from "@/components/city-extras-template";

const data: CityExtrasData = {
  cityName: "Kerpen",
  distanz: "ca. 10 km",
  fahrzeit: "ca. 10 Min.",
  plz: "50169, 50170, 50171",
  einwohner: "ca. 67.000",
  kreis: "Rhein-Erft-Kreis",
  entsorgung: "AWB Rhein-Erft-Kreis",
  naherOrtTip: "Kerpen ist mit über 67.000 Einwohnern die größte Stadt im Rhein-Erft-Kreis — und mit nur 10 km einer unserer meistbesuchten Einsatzorte. Wir kennen alle 12 Stadtteile, die Parksituation am Horrem Bahnhof und die großen Wohnblöcke in Sindorf ebenso gut wie die ländlichen Hofanlagen in Buir.",
  lokalerFakt: "Kerpen vereint Stadtleben in Horrem und Sindorf mit ländlichem Charme in Türnich und Blatzheim — und dem historisch einzigartigen Fall Manheim, wo wir zahlreiche Familien bei ihrer Umsiedlung begleitet haben.",
  mfhText: "In Horrem und Sindorf dominieren Mehrfamilienhäuser der Nachkriegszeit mit engen Treppenhäusern und vollgestellten Kellern. Wohnungsauflösungen für Vermieter sind hier unsere häufigste Anfrage.",
  mfhArea: "Horrem · Sindorf · Kerpen-Mitte",
  efhText: "In Türnich, Brüggen und Blatzheim stehen viele Einfamilienhäuser der 1960er–80er Jahre, die nach Generationenwechsel oder Erbschaft geräumt werden. Oft mit großem Keller und Garage.",
  efhArea: "Türnich · Brüggen · Blatzheim",
  kellerText: "In Buir und den ländlicheren Ortsteilen gibt es viele alte Hofanlagen und Scheunen. Auch Gewerberäumungen in den Kerpener Gewerbegebieten gehören zu unserem Alltag.",
  kellerArea: "Buir · Manheim · Gewerbegebiete",
  stadtteileCards: [
    { name: "Horrem", badge: "Häufigster Einsatzort", desc: "Größter Kerpen-Stadtteil mit Bahnhof und vielen Nachkriegs-Mehrfamilienhäusern. Wohnungsauflösungen und Kellerentrümpelungen für Vermieter stehen täglich auf unserem Plan." },
    { name: "Sindorf", badge: "Modernes Wohngebiet", desc: "Vieles Neubauten und Reihenhäuser. Kellerentrümpelungen vor dem Einzug und Umzüge nach Köln und in den Kreis sind die häufigsten Anfragen." },
    { name: "Türnich", desc: "Kleines Dorf mit Schloss und historischem Ortskern. Haushaltsauflösungen in älteren Gebäuden und Nachlassentrümpelungen werden regelmäßig bei uns gebucht." },
    { name: "Brüggen", desc: "Ruhige Einfamilienhauslage. Teilentrümpelungen, Sperrmüll und Haushaltsauflösungen nach Erbschaft — wir kommen auch kurzfristig." },
    { name: "Buir / Manheim", badge: "Tagebau & Umsiedlung", desc: "Ländlich gelegen nahe dem Tagebaugebiet. Hofräumungen, Scheunenentsorgungen — und in Manheim haben wir viele Familien bei der Umsiedlung begleitet." },
    { name: "Blatzheim", desc: "Kleiner Ortsteil mit ländlichem Charakter. Haushaltsauflösungen und Gartenräumungen nach Generationenwechsel sind die häufigsten Aufträge." },
  ],
};

export default function KerpenPage() {
  return (
    <LocationPage
      cityName="Kerpen"
      slug="kerpen"
      description="Entrümpelungen, Haushaltsauflösungen und Umzüge in Kerpen und allen Ortsteilen. Schnell, professionell und zu fairen Festpreisen."
      metaDescription="Entrümpelung Kerpen ✓ Haushaltsauflösung ✓ Umzüge ✓ Faire Festpreise ✓ Besenrein ✓ 5.0 Sterne bei Google ✓ Kostenlose Besichtigung ☎ 02271 / 5880940"
      introText={<>
        Kerpen ist mit über 67.000 Einwohnern die größte Stadt im Rhein-Erft-Kreis und einer unserer wichtigsten Einsatzorte. Ob in Horrem, Sindorf, Türnich, Brüggen oder der Kerpener Innenstadt — wir kennen die Stadt und ihre Besonderheiten. Von der <Link href="/entruempelung" className="text-primary hover:underline font-medium">Entrümpelung</Link> eines Einfamilienhauses über eine <Link href="/haushaltsaufloesung" className="text-primary hover:underline font-medium">Haushaltsauflösung</Link> bis zum kompletten <Link href="/bueroumzug" className="text-primary hover:underline font-medium">Büroumzug</Link> bieten wir Ihnen einen Rundum-Service zu fairen Festpreisen. Als Heimatstadt von Michael Schumacher zieht Kerpen viele Besucher an — uns zieht es regelmäßig für Entrümpelungen und <Link href="/umzug" className="text-primary hover:underline font-medium">Umzüge</Link> dorthin.
      </>}
      localInfo={<>
        Kerpen ist bekannt als Heimatstadt von Michael Schumacher und liegt verkehrsgünstig an der A4 und A61. Die Stadt hat 12 Stadtteile mit einer Mischung aus historischen Ortskernen und modernen Wohngebieten sowie dem neuen Stadtteil Manheim-neu nach der Umsiedlung aus dem Tagebaugebiet. Besonders in Horrem mit dem Bahnhof und Sindorf, den größten Stadtteilen, sind wir häufig für <Link href="/kellerentruempelung" className="text-primary hover:underline font-medium">Kellerentrümpelungen</Link> und <Link href="/wohnungsaufloesung" className="text-primary hover:underline font-medium">Wohnungsauflösungen</Link> im Einsatz. Die Umsiedlung von Manheim hat zu vielen Umzugsaufträgen geführt, für die wir der verlässliche Partner waren.
      </>}
      localExtras={<CityExtrasTemplate data={data} />}
      plz="50169, 50170, 50171"
      einwohner="ca. 67.000"
      kreis="Rhein-Erft-Kreis"
      highlights={[
        "Alle 12 Stadtteile von Kerpen abgedeckt",
        "Kostenlose Besichtigung und Festpreisgarantie",
        "Schnelle Ausführung in 24–48 Stunden",
        "Besenreine Übergabe inklusive",
        "Fachgerechte Entsorgung nach Vorschrift",
        "Wertanrechnung spart Ihnen bares Geld",
      ]}
      faqs={[
        {
          question: "Was kostet eine Entrümpelung in Kerpen?",
          answer: "Die Kosten richten sich nach Größe, Füllgrad und Stockwerk. Eine 2-Zimmer-Wohnung in Kerpen kostet in der Regel zwischen 400–900 €. Für ein Einfamilienhaus mit Keller rechnen Sie mit 1.500–3.000 €. Wir erstellen immer ein verbindliches Festpreisangebot nach Besichtigung.",
        },
        {
          question: "Wie weit im Voraus muss ich einen Termin buchen?",
          answer: "Oft können wir innerhalb weniger Tage einen Termin anbieten. Bei dringenden Anfragen sind auch kurzfristige Einsätze in Kerpen möglich. Rufen Sie uns an oder nutzen Sie unseren Online-Terminplaner.",
        },
        {
          question: "Entrümpeln Sie auch Gewerberäume in Kerpen?",
          answer: "Ja, neben Privatwohnungen entrümpeln wir auch Büros, Lagerhallen, Praxen und Geschäftsräume in Kerpen. Auch Firmenauflösungen und Betriebsauflösungen gehören zu unserem Leistungsspektrum.",
        },
        {
          question: "Sind Sie auch in Horrem und Sindorf tätig?",
          answer: "Ja, wir sind in allen Stadtteilen von Kerpen aktiv: Horrem, Sindorf, Türnich, Brüggen, Blatzheim, Buir, Manheim und allen weiteren Ortsteilen.",
        },
        {
          question: "Helfen Sie auch bei der Umsiedlung aus Manheim?",
          answer: "Ja, wir haben zahlreiche Familien aus Manheim bei ihrer Umsiedlung in den neuen Stadtteil Manheim-neu und in andere Orte des Rhein-Erft-Kreises begleitet. Unser Team hat Erfahrung mit Zwangsumzügen und allem was dazugehört.",
        },
        {
          question: "Bieten Sie auch Seniorenumzüge in Kerpen an?",
          answer: "Ja, Seniorenumzüge sind eine unserer Kernkompetenzen. Wir sind geduldig, einfühlsam und übernehmen alles — vom Einpacken über den Transport bis zum Aufstellen der Möbel in der neuen Wohnung.",
        },
        {
          question: "Wer räumt eine Wohnung nach Erbschaft in Kerpen?",
          answer: "Wir begleiten Erbengemeinschaften und Angehörige diskret und vollständig — Wertanrechnung, Räumung aller Etagen und besenreine Übergabe. Alles aus einer Hand, zu einem Festpreis.",
        },
        {
          question: "Was kostet eine Kellerentrümpelung in Kerpen?",
          answer: "Kellerentrümpelungen in Kerpen kosten je nach Größe und Inhalt zwischen 150–600 €. Schrott und Metall werden direkt angerechnet. Festpreisangebot nach kostenloser Besichtigung.",
        },
        {
          question: "Können Sie auch einen Umzug innerhalb von Kerpen durchführen?",
          answer: "Ja, Umzüge innerhalb Kerpens — z.B. von Horrem nach Sindorf — gehören zu unserem Alltag. Wir bieten Privat-, Senioren- und Büroumzüge mit vollem Möbelservice an.",
        },
        {
          question: "Wie läuft eine Entrümpelung in Horrem oder Sindorf ab?",
          answer: "Zuerst kommen wir kostenlos zur Besichtigung, dann erhalten Sie ein schriftliches Festpreisangebot. Bei Auftragserteilung vereinbaren wir einen Termin — und unser Team erledigt alles an einem oder zwei Tagen.",
        },
        {
          question: "Gibt es eine kostenlose Besichtigung vor der Entrümpelung in Kerpen?",
          answer: "Ja, die Besichtigung ist immer kostenlos und unverbindlich. Wir kommen zu Ihnen, schauen uns alles an und legen den Festpreis direkt vor Ort fest — transparent und ohne Überraschungen.",
        },
      ]}
      beispiel={{
        stadtteil: "Horrem",
        objektTyp: "Einfamilienhaus mit Keller",
        etage: "EG + Keller",
        flaeche: "ca. 120 m²",
        dauer: "2 Tage",
        team: "4 Mitarbeiter",
        preis: "2.800 €",
        leistungen: [
          "Komplette Haushaltsauflösung über zwei Etagen",
          "Kellerentrümpelung inkl. Werkstatt und Lagerräume",
          "Demontage alter Möbel und Einbauküche",
          "Entsorgung von Sperrmüll, Elektro und Sondermüll",
          "Gartenabfälle und Außenbereich geräumt",
          "Besenreine Übergabe des gesamten Objekts",
        ],
        kundenzitat: "Das Haus meiner Eltern wurde komplett geräumt — schnell, sauber und zum vereinbarten Festpreis. Vielen Dank!",
        kundenName: "Thomas K.",
      }}
      stadtteileDetail={[
        { name: "Horrem", href: "/entruempelung-horrem", text: "Größter Stadtteil mit Bahnhof und vielen Mehrfamilienhäusern aus der Nachkriegszeit — Wohnungsauflösungen, Kellerentrümpelungen und Umzüge nach Köln sind hier besonders häufig." },
        { name: "Sindorf", href: "/entruempelung-sindorf", text: "Modernes Wohngebiet mit vielen Neubauten und Reihenhäusern — Umzüge innerhalb des Kreises und Kellerentrümpelungen vor dem Einzug in die neue Wohnung werden am häufigsten gebucht." },
        { name: "Türnich", href: "/entruempelung-tuernich", text: "Kleines Dorf mit Schloss und historischem Ortskern — Haushaltsauflösungen in älteren Gebäuden und Nachlassentrümpelungen stehen hier häufig auf unserem Programm." },
        { name: "Brüggen", text: "Ruhige Wohnlage mit Einfamilienhäusern und Reihenhäusern — Teilentrümpelungen, Sperrmüll und Haushaltsauflösungen nach Erbschaft werden regelmäßig angefragt." },
        { name: "Blatzheim", href: "/entruempelung-blatzheim", text: "Kleiner Ortsteil mit ländlichem Charakter — Haushaltsauflösungen, Gartenräumungen und Entrümpelungen älterer Einfamilienhäuser nach Generationenwechsel." },
        { name: "Buir", href: "/entruempelung-buir", text: "Ländlich gelegen nahe dem Tagebaugebiet — Hofräumungen, Scheunenentsorgungen und Auflösungen landwirtschaftlicher Bestände sind hier typische Anfragen." },
        { name: "Manheim", href: "/entruempelung-manheim", text: "Historischer Ortsteil am Tagebaurand — Entrümpelungen und Auflösungen im Rahmen der laufenden Umsiedlungsmaßnahmen waren und sind ein wichtiges Thema." },
        { name: "Manheim-neu", text: "Neu entstandener Ortsteil nach der Umsiedlung — Einzugsumzüge, Wohnungseinrichtungen und erste Kellerentrümpelungen der neuen Bewohner." },
        { name: "Balkhausen", text: "Kleines Dorf zwischen Kerpen und Frechen — Sperrmüllentsorgung, Teilentrümpelungen und Gartengeräte-Abholung werden hier regelmäßig gebucht." },
        { name: "Langenich", text: "Ruhiger Ortsteil mit Einfamilienhäusern — Haushaltsauflösungen nach Erbschaft und Kellerentrümpelungen vor dem Hausverkauf." },
        { name: "Götzenkirchen", text: "Kleines Dorf nahe Brüggen — Auflösungen älterer Haushalte und Sperrmüll nach Auszug sind die häufigsten Anfragen." },
        { name: "Neu-Bottenbroich", text: "Neueres Wohngebiet mit modernen Häusern — Umzüge nach Kerpen und in die Umgebung sowie erste Kellerentrümpelungen nach dem Einzug." },
      ]}
      stadtteile={[
        "Horrem", "Sindorf", "Türnich", "Brüggen", "Blatzheim",
        "Buir", "Manheim", "Manheim-neu", "Balkhausen", "Langenich",
        "Götzenkirchen", "Neu-Bottenbroich",
      ]}
      neighborCities={[
        { name: "Bergheim", slug: "bergheim" },
        { name: "Frechen", slug: "frechen" },
        { name: "Hürth", slug: "huerth" },
        { name: "Erftstadt", slug: "erftstadt" },
        { name: "Elsdorf", slug: "elsdorf" },
        { name: "Bedburg", slug: "bedburg" },
        { name: "Pulheim", slug: "pulheim" },
      ]}
      mapEmbed="https://www.google.com/maps?q=Kerpen,+Rhein-Erft-Kreis,+NRW&output=embed"
      trustStats={{ auftraege: "120+", reaktionszeit: "24–48h", erfahrung: "seit 2018", kundenzitat: "Wohnung in Kerpen-Horrem komplett entrümpelt — pünktlich, sauber, Preis genau wie besprochen. Sehr empfehlenswert!", kundenName: "Thomas R." }}
    />
  );
}
