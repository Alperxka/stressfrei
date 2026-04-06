import { Link } from "wouter";
import LocationPage from "@/components/location-page";
import CityExtrasTemplate, { CityExtrasData } from "@/components/city-extras-template";

const data: CityExtrasData = {
  cityName: "Hürth",
  distanz: "ca. 25 km",
  fahrzeit: "ca. 25 Min.",
  plz: "50354",
  einwohner: "ca. 60.000",
  kreis: "Rhein-Erft-Kreis",
  entsorgung: "AWB Rhein-Erft-Kreis",
  naherOrtTip: "Hürth ist über die A1 von unserem Standort in Bergheim bequem in rund 25 Minuten erreichbar. Die Stadtgrenze zu Köln sorgt für einen aktiven Wohnungsmarkt — regelmäßige Umzüge nach Köln und umgekehrt gehören zu unserem Alltag.",
  lokalerFakt: "Hürth vereint urbane Dichte in Hermülheim und Efferen mit ruhigen Einfamilienhaussiedlungen in Kendenich und Gleuel. Die zahlreichen Nachkriegsbauten werden häufig nach Generationenwechsel aufgelöst.",
  mfhText: "In Hermülheim und Efferen dominieren Mehrfamilienhäuser aus Vor- und Nachkriegszeit mit engen Treppenhäusern. Wohnungsauflösungen für Vermieter und Hausverwaltungen sind hier der häufigste Auftrag.",
  mfhArea: "Hermülheim · Efferen · Alt-Hürth",
  efhText: "In Kendenich, Gleuel und Berrenrath finden sich viele Einfamilienhäuser der 1950er–80er Jahre. Haushaltsauflösungen nach Erbschaft und einfühlsame Seniorenumzüge ins Pflegeheim sind hier häufig.",
  efhArea: "Kendenich · Gleuel · Berrenrath",
  kellerText: "In Knapsack mit seinem Industriepark gibt es Gewerberäumungen und Lagerauflösungen. Auch Garagenräumungen und Schrottabholung in allen Hürther Stadtteilen.",
  kellerArea: "Knapsack · Stotzheim · Fischenich",
  stadtteileCards: [
    { name: "Hermülheim", badge: "Größter Stadtteil", desc: "Größter und zentraler Stadtteil mit vielen Mehrfamilienhäusern aus Vor- und Nachkriegszeit. Wohnungsauflösungen und Kellerentrümpelungen sind hier am häufigsten." },
    { name: "Efferen", desc: "Gut angebundener Ortsteil nahe der A1. Umzüge nach Köln und ins Rheinland sowie Haushaltsauflösungen für ältere Jahrgänge werden regelmäßig gebucht." },
    { name: "Kendenich", desc: "Ruhige Wohnlage mit Einfamilienhäusern aus den 1950er–80er Jahren. Haushaltsauflösungen nach Erbschaft und Seniorenumzüge ins Pflegeheim." },
    { name: "Berrenrath", desc: "Ortsteil mit älterer Wohnbebauung aus der Nachkriegszeit. Kellerentrümpelungen, Haushaltsauflösungen nach Todesfall und Sperrmüllentsorgungen." },
    { name: "Gleuel / Fischenich", desc: "Ruhige Dörfer mit älterer Bebauung. Auflösungen von Einfamilienhäusern nach Generationenwechsel und Kellerentrümpelungen." },
    { name: "Knapsack", badge: "Industrieller Ortsteil", desc: "Industriell geprägter Ortsteil mit Chemiepark. Gewerberäumungen, Betriebsauflösungen und Lagerräumungen — wir haben Erfahrung mit Industrie-Objekten." },
  ],
};

export default function HuerthPage() {
  return (
    <LocationPage
      cityName="Hürth"
      slug="huerth"
      description="Ihr zuverlässiger Partner für Entrümpelungen, Haushaltsauflösungen und Umzüge in Hürth. Professionell, stressfrei und zum Festpreis."
      metaDescription="Entrümpelung Hürth ✓ Haushaltsauflösung ✓ Umzüge ✓ Faire Festpreise ✓ Besenrein ✓ 90+ Google Bewertungen ✓ Jetzt anfragen ☎ 02271 / 5880940"
      introText={<>
        Hürth gehört zu den größten Städten im Rhein-Erft-Kreis und liegt direkt südwestlich von Köln. In allen Stadtteilen — von Hermülheim über Efferen, Kendenich bis Berrenrath — bieten wir professionelle <Link href="/entruempelung" className="text-primary hover:underline font-medium">Entrümpelungen</Link>, <Link href="/haushaltsaufloesung" className="text-primary hover:underline font-medium">Haushaltsauflösungen</Link> und <Link href="/umzug" className="text-primary hover:underline font-medium">Umzüge</Link> an. Unser Team aus <Link href="/entruempelung-bergheim" className="text-primary hover:underline font-medium">Bergheim</Link> ist über die A1 schnell vor Ort und bietet Ihnen einen Rundum-Service zu transparenten Festpreisen. Die Nähe zu Köln macht Hürth zu einem der gefragtesten Wohnstandorte im Kreis — entsprechend häufig werden wir für <Link href="/privatumzug" className="text-primary hover:underline font-medium">Umzüge nach Köln</Link> und zurück gebucht.
      </>}
      localInfo={<>
        Hürth ist durch seine Nähe zu Köln ein beliebter Wohnstandort mit vielen Ein- und Mehrfamilienhäusern aus verschiedenen Epochen. Das Hürth-Park Einkaufszentrum und die zahlreichen Film- und Fernsehstudios prägen die Stadt. Besonders in Hermülheim, Efferen und Alt-Hürth sind wir häufig für <Link href="/entruempelung" className="text-primary hover:underline font-medium">Entrümpelungen</Link> im Einsatz. Die vielen Nachkriegsbauten in Berrenrath und Kendenich werden regelmäßig nach Generationenwechsel mit einer <Link href="/haushaltsaufloesung" className="text-primary hover:underline font-medium">Haushaltsauflösung</Link> aufgelöst. In Knapsack mit seiner industriellen Geschichte werden wir auch für Gewerberäumungen gebucht.
      </>}
      localExtras={<CityExtrasTemplate data={data} />}
      plz="50354"
      einwohner="ca. 60.000"
      kreis="Rhein-Erft-Kreis"
      highlights={[
        "Schnelle Erreichbarkeit über A1 und A4",
        "Alle Stadtteile: Hermülheim, Efferen, Kendenich",
        "Entrümpelung innerhalb von 24–48 Stunden",
        "Kostenlose Besichtigung und Festpreisangebot",
        "Besenreine Übergabe inklusive",
        "Wertanrechnung reduziert Ihren Preis",
      ]}
      faqs={[
        {
          question: "Was kostet eine Entrümpelung in Hürth?",
          answer: "Eine 2-Zimmer-Wohnung in Hürth kostet in der Regel zwischen 500–1.000 €. Ein Einfamilienhaus mit Keller liegt bei ca. 1.500–3.500 €. Nach einer kostenlosen Besichtigung erhalten Sie ein verbindliches Festpreisangebot.",
        },
        {
          question: "Sind Sie in Efferen und Hermülheim aktiv?",
          answer: "Ja, wir entrümpeln in allen Hürther Stadtteilen: Hermülheim, Efferen, Kendenich, Berrenrath, Gleuel, Fischenich, Alt-Hürth, Stotzheim und Knapsack.",
        },
        {
          question: "Übernehmen Sie auch die Entsorgung von Elektrogeräten?",
          answer: "Ja, wir entsorgen alle Arten von Elektrogeräten fachgerecht — von Waschmaschinen über Kühlschränke bis hin zu Fernsehern. Die Entsorgung ist im Festpreis enthalten.",
        },
        {
          question: "Bieten Sie Umzüge von Hürth nach Köln an?",
          answer: "Ja, Umzüge von Hürth nach Köln gehören zu unseren häufigsten Aufträgen. Dank der kurzen Entfernung sind diese besonders günstig. Wir bieten Privat-, Senioren- und Büroumzüge an.",
        },
        {
          question: "Können Sie auch Gewerberäume und Büros in Hürth räumen?",
          answer: "Ja, wir übernehmen auch Gewerberäumungen, Büroauflösungen und Firmenauflösungen in Hürth. Besonders in Knapsack und den Gewerbegebieten sind wir ein erfahrener Partner für solche Aufgaben.",
        },
        {
          question: "Wie kurzfristig kann ein Termin in Hürth vereinbart werden?",
          answer: "In der Regel können wir innerhalb von 24–48 Stunden nach Auftragserteilung starten. Bei Notfällen — z.B. bei einem plötzlichen Todesfall und begrenzter Räumungsfrist — versuchen wir noch kurzfristiger zu reagieren.",
        },
      ]}
      beispiel={{
        stadtteil: "Hermülheim",
        objektTyp: "3-Zimmer-Wohnung mit Keller",
        etage: "1. OG + Keller",
        flaeche: "ca. 80 m²",
        dauer: "1 Tag",
        team: "3 Mitarbeiter",
        preis: "1.350 €",
        leistungen: [
          "Komplettentrümpelung der Wohnung und des Kellerabteils",
          "Demontage von Küche, Schränken und Regalen",
          "Entsorgung von Sperrmüll inkl. alter Waschmaschine",
          "Entrümpelung des Kellerraums mit Fahrrädern und Kisten",
          "Besenreine Übergabe an die Hausverwaltung",
        ],
        kundenzitat: "Sehr professionelles Team. Die Wohnung war nach wenigen Stunden komplett leer. Absolut fair und zuverlässig!",
        kundenName: "Sabine H.",
      }}
      stadtteileDetail={[
        { name: "Hermülheim", href: "/entruempelung-hermuelheim", text: "Größter und zentraler Stadtteil mit vielen Mehrfamilienhäusern aus Vor- und Nachkriegszeit — Wohnungsauflösungen, Kellerentrümpelungen und Umzüge nach Köln sind hier die häufigsten Aufträge." },
        { name: "Efferen", href: "/entruempelung-efferen", text: "Gut angebundener Ortsteil nahe der A1 mit gemischter Bebauung — Umzüge nach Köln und ins Rheinland sowie Haushaltsauflösungen für ältere Jahrgänge werden regelmäßig gebucht." },
        { name: "Kendenich", text: "Ruhige Wohnlage mit vielen Einfamilienhäusern aus den 1950er bis 1980er Jahren — Haushaltsauflösungen nach Erbschaft und Seniorenumzüge ins Pflegeheim sind häufige Anfragen." },
        { name: "Berrenrath", href: "/entruempelung-berrenrath", text: "Ortsteil mit älterer Wohnbebauung aus der Nachkriegszeit — Kellerentrümpelungen, Haushaltsauflösungen nach Todesfall und Sperrmüllentsorgungen werden regelmäßig durchgeführt." },
        { name: "Gleuel", href: "/entruempelung-gleuel", text: "Kleinerer Ortsteil mit überwiegend Einfamilienhäusern — Sperrmüllentsorgung, Teilentrümpelungen einzelner Räume und Gartengeräte-Abholung sind häufig." },
        { name: "Fischenich", text: "Ruhiges Dorf mit älterer Bebauung und viel Einfamilienhausbestand — Auflösungen von Einfamilienhäusern nach Generationenwechsel und Kellerentrümpelungen." },
        { name: "Alt-Hürth", text: "Historischer Ortskern Hürths mit vielen älteren Gebäuden aus dem 19. und frühen 20. Jahrhundert — Wohnungsauflösungen in Altbauten und Nachlassentrümpelungen." },
        { name: "Stotzheim", text: "Kleines Dorf mit ländlichem Charakter — Haushaltsauflösungen, Sperrmüllentsorgung und Garagenräumungen bei Auszug oder Hausverkauf." },
        { name: "Knapsack", text: "Industriell geprägter Ortsteil mit Chemiepark — wir werden hier besonders für Gewerberäumungen, Betriebsauflösungen und Lagerräumungen gebucht." },
        { name: "Kalscheuren", text: "Ruhige Wohnlage zwischen Hürth und Brühl — Umzüge in den Rhein-Erft-Kreis sowie Kellerentrümpelungen und Haushaltsauflösungen." },
      ]}
      stadtteile={[
        "Hermülheim", "Efferen", "Kendenich", "Berrenrath",
        "Gleuel", "Fischenich", "Alt-Hürth", "Stotzheim", "Knapsack", "Kalscheuren",
      ]}
      neighborCities={[
        { name: "Frechen", slug: "frechen" },
        { name: "Kerpen", slug: "kerpen" },
        { name: "Erftstadt", slug: "erftstadt" },
        { name: "Bergheim", slug: "bergheim" },
        { name: "Pulheim", slug: "pulheim" },
        { name: "Elsdorf", slug: "elsdorf" },
      ]}
      mapEmbed="https://www.google.com/maps?q=Hürth,+Rhein-Erft-Kreis,+NRW&output=embed"
    />
  );
}
