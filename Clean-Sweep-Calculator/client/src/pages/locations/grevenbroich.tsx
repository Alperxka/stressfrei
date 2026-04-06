import { Link } from "wouter";
import LocationPage from "@/components/location-page";
import CityExtrasTemplate, { CityExtrasData } from "@/components/city-extras-template";

const data: CityExtrasData = {
  cityName: "Grevenbroich",
  distanz: "ca. 25 km",
  fahrzeit: "ca. 25 Min.",
  plz: "41515, 41516, 41517",
  einwohner: "ca. 65.000",
  kreis: "Rhein-Kreis Neuss",
  entsorgung: "AWB Rhein-Kreis Neuss",
  naherOrtTip: "Grevenbroich ist über die B59 und A46 von unserem Standort in Bergheim in rund 25 Minuten erreichbar. Die Schlossstadt mit ihrer bewegten Industriegeschichte — als 'Bundeshauptstadt der Energie' bekannt — hat viele Arbeiterwohnviertel mit typischem Nachkriegsbestand.",
  lokalerFakt: "Grevenbroich, die 'Bundeshauptstadt der Energie', hat viele ältere Arbeiterwohnviertel rund um die ehemaligen Kraftwerksstandorte. Diese Objekte werden nach Generationenwechsel regelmäßig geräumt — oft mit schweren Möbeln und einem Leben voller Erinnerungen.",
  mfhText: "Rund um Gustorf und in den älteren Stadtteilen gibt es viele Arbeiterwohnhäuser und Mehrfamilienhäuser der Nachkriegszeit. Wohnungsauflösungen nach Generationenwechsel sind hier besonders häufig.",
  mfhArea: "Grevenbroich-Mitte · Gustorf",
  efhText: "In Kapellen und Wevelinghoven stehen viele Einfamilienhäuser in ruhiger Lage. Haushaltsauflösungen nach Erbschaft und Seniorenumzüge ins Pflegeheim werden hier regelmäßig gebucht.",
  efhArea: "Kapellen · Wevelinghoven · Neuenhausen",
  kellerText: "In den ländlicheren Ortsteilen der Gemeinde gibt es viele Keller und Schuppen, die über Jahrzehnte gefüllt wurden. Schrottankauf aus diesen Objekten spart oft erheblich.",
  kellerArea: "Noithausen · Hemmerden · Ländliche Lagen",
  stadtteileCards: [
    { name: "Grevenbroich-Mitte", badge: "Schlossstadt", desc: "Historisches Stadtzentrum mit Mischbebauung. Haushaltsauflösungen nach Erbschaft und Wohnungsräumungen für Vermieter sind die häufigsten Anfragen." },
    { name: "Gustorf", badge: "Energie-Geschichte", desc: "Ortsteil mit enger Verbindung zur Energiegeschichte. Viele ältere Arbeiterhäuser — Haushaltsauflösungen nach Generationenwechsel sind hier besonders typisch." },
    { name: "Kapellen", desc: "Ruhige Wohnlage mit vielen Einfamilienhäusern. Haushaltsauflösungen nach Erbschaft und Kellerentrümpelungen vor dem Hausverkauf werden regelmäßig gebucht." },
    { name: "Wevelinghoven", badge: "Historisches Stadtbild", desc: "Historischer Ortsteil mit altem Stadtbild. Wohnungsauflösungen in Altbauten und Nachlassentrümpelungen mit historischem Mobiliar." },
    { name: "Neuenhausen", desc: "Wohngebiet mit gemischter Bebauung. Seniorenumzüge, Kellerentrümpelungen und Sperrmüllentsorgungen werden regelmäßig angefragt." },
    { name: "Noithausen / Hemmerden", desc: "Ländlichere Ortsteile. Teilentrümpelungen, Gartengeräte-Entsorgung und Haushaltsauflösungen nach Auszug älterer Bewohner." },
  ],
};

export default function GrevenbroichPage() {
  return (
    <LocationPage
      cityName="Grevenbroich"
      slug="grevenbroich"
      description="Professionelle Entrümpelungen, Haushaltsauflösungen und Umzüge in Grevenbroich. Zuverlässig, schnell und zum Festpreis."
      metaDescription="Entrümpelung Grevenbroich ✓ Haushaltsauflösung ✓ Umzüge ✓ Festpreise ✓ 24-48h ✓ 90+ Google Bewertungen ✓ Jetzt kostenlos anfragen ☎ 02271 / 5880940"
      introText={<>
        Grevenbroich liegt im Rhein-Kreis Neuss und ist von unserem Standort in <Link href="/entruempelung-bergheim" className="text-primary hover:underline font-medium">Bergheim</Link> über die B59 und A46 gut erreichbar. In der Schlossstadt und den Ortsteilen Gustorf, Neuenhausen, Wevelinghoven und Kapellen bieten wir professionelle <Link href="/entruempelung" className="text-primary hover:underline font-medium">Entrümpelungen</Link>, <Link href="/haushaltsaufloesung" className="text-primary hover:underline font-medium">Haushaltsauflösungen</Link> und <Link href="/umzug" className="text-primary hover:underline font-medium">Umzüge</Link> an. Unser erfahrenes Team arbeitet schnell und gründlich — besenreine Übergabe und faire Festpreise sind selbstverständlich. Als bekannte 'Bundeshauptstadt der Energie' hat Grevenbroich viele ältere Arbeitersiedlungen, für deren Auflösung und Umzug wir besonders erfahren sind.
      </>}
      localInfo={<>
        Grevenbroich ist als 'Bundeshauptstadt der Energie' bekannt und hat rund 65.000 Einwohner. Die Stadt bietet eine Mischung aus urbanem Leben und ländlichem Charme mit vielen historischen Ortskernen. In den älteren Wohnvierteln rund um das Kraftwerk Gustorf und in den historischen Stadtteilen werden wir besonders häufig für <Link href="/entruempelung" className="text-primary hover:underline font-medium">Entrümpelungen</Link> gebucht. Wevelinghoven mit seinem historischen Stadtbild und Kapellen mit den vielen Einfamilienhäusern sind weitere Schwerpunkte — hier führen wir regelmäßig <Link href="/haushaltsaufloesung" className="text-primary hover:underline font-medium">Haushaltsauflösungen</Link> und <Link href="/seniorenumzug" className="text-primary hover:underline font-medium">Seniorenumzüge</Link> durch.
      </>}
      localExtras={<CityExtrasTemplate data={data} />}
      plz="41515, 41516, 41517"
      einwohner="ca. 65.000"
      kreis="Rhein-Kreis Neuss"
      highlights={[
        "Erreichbar über B59 und A46",
        "Alle Ortsteile: Gustorf, Kapellen, Wevelinghoven",
        "Schnelle Ausführung in 24–48 Stunden",
        "Kostenlose Besichtigung und Festpreisangebot",
        "Besenreine Übergabe inklusive",
        "Wertanrechnung auf den Entrümpelungspreis",
      ]}
      faqs={[
        {
          question: "Was kostet eine Entrümpelung in Grevenbroich?",
          answer: "Eine 2-Zimmer-Wohnung in Grevenbroich liegt bei ca. 500–1.000 €. Einfamilienhäuser mit Keller kosten ca. 1.500–3.500 €. Wir erstellen nach kostenloser Besichtigung ein verbindliches Festpreisangebot.",
        },
        {
          question: "Sind Sie auch in Gustorf und Kapellen aktiv?",
          answer: "Ja, wir sind in allen Grevenbroicher Ortsteilen aktiv: Grevenbroich-Mitte, Gustorf, Kapellen, Wevelinghoven, Neuenhausen, Noithausen, Hemmerden und allen weiteren Ortsteilen.",
        },
        {
          question: "Bieten Sie Seniorenumzüge in Grevenbroich an?",
          answer: "Ja, Seniorenumzüge sind eine unserer Kernkompetenzen. Wir gehen einfühlsam vor und übernehmen alles — vom Einpacken bis zum Aufbau in der neuen Wohnung.",
        },
        {
          question: "Können Sie auch bei Haushaltsauflösungen nach Todesfall helfen?",
          answer: "Ja, wir begleiten Sie diskret und einfühlsam durch den Prozess. Wertanrechnung von Möbeln, komplette Räumung und besenreine Übergabe — alles aus einer Hand.",
        },
        {
          question: "Wie schnell können Sie in Grevenbroich starten?",
          answer: "Wir sind über die B59/A46 in rund 25 Minuten bei Ihnen. In der Regel starten wir innerhalb von 24–48 Stunden nach Auftragserteilung.",
        },
        {
          question: "Bieten Sie auch Büroumzüge in Grevenbroich an?",
          answer: "Ja, Büro- und Firmenumzüge in Grevenbroich und in die Umgebung — Köln, Düsseldorf, Mönchengladbach — sind kein Problem. Wir arbeiten auch am Wochenende, um den Betriebsablauf nicht zu stören.",
        },
        {
          question: "Was passiert mit wertvollen Möbeln bei der Entrümpelung in Grevenbroich?",
          answer: "Wir sichten alle Gegenstände bei der Besichtigung und rechnen Antiquitäten, Metalle und gut erhaltene Möbel direkt auf den Entrümpelungspreis an. So profitieren Sie doppelt.",
        },
        {
          question: "Wer macht Wohnungsauflösungen in Wevelinghoven?",
          answer: "Wir — regelmäßig. Wevelinghoven ist ein häufiger Einsatzort für uns. Die historischen Altbauten dort erfordern Erfahrung, die unser Team mitbringt.",
        },
        {
          question: "Was kostet ein Seniorenumzug von Grevenbroich ins Pflegeheim?",
          answer: "Das hängt von der Wohnungsgröße und dem Zielort ab. Eine typische 2-Zimmer-Wohnung nach Köln oder Düsseldorf liegt bei 800–1.500 €. Wir erstellen ein transparentes Festpreisangebot.",
        },
        {
          question: "Wie wird bei Ihnen abgerechnet — nach Stunden oder Festpreis?",
          answer: "Wir arbeiten ausschließlich mit Festpreisen. Nach der kostenlosen Besichtigung erhalten Sie ein schriftliches Angebot — der Preis gilt, unabhängig davon, wie lange wir brauchen.",
        },
        {
          question: "Gibt es eine kostenlose Besichtigung in Grevenbroich?",
          answer: "Ja, die Besichtigung ist komplett kostenlos und unverbindlich. Wir kommen zu Ihnen, schauen uns alles an und geben Ihnen direkt vor Ort ein schriftliches Festpreisangebot.",
        },
      ]}
      beispiel={{
        stadtteil: "Kapellen",
        objektTyp: "3-Zimmer-Wohnung",
        etage: "2. OG ohne Aufzug",
        flaeche: "ca. 70 m²",
        dauer: "1 Tag",
        team: "3 Mitarbeiter",
        preis: "950 €",
        leistungen: [
          "Komplette Entrümpelung aller Räume",
          "Demontage von Schränken und Einbaumöbeln",
          "Abtransport von Sperrmüll und Elektrogeräten",
          "Wertanrechnung für Haushaltsgeräte (–100 €)",
          "Besenreine Übergabe an den Vermieter",
        ],
        kundenzitat: "Sehr zuverlässig und pünktlich. Die Wohnung war am gleichen Tag komplett leer — absolut empfehlenswert!",
        kundenName: "Helga B.",
      }}
      stadtteileDetail={[
        { name: "Grevenbroich-Mitte", text: "Stadtzentrum mit Schloss und Mischbebauung — Haushaltsauflösungen nach Erbschaft und Wohnungsräumungen für Vermieter sind die häufigsten Anfragen." },
        { name: "Gustorf", text: "Ortsteil mit Geschichte als Energiestadt — viele ältere Arbeiterwohnhäuser; Haushaltsauflösungen nach Generationenwechsel sind hier typisch." },
        { name: "Kapellen", text: "Ruhige Wohnlage mit Einfamilienhäusern — Haushaltsauflösungen nach Erbschaft und Kellerentrümpelungen vor dem Hausverkauf werden regelmäßig gebucht." },
        { name: "Wevelinghoven", text: "Historischer Ortsteil mit altem Stadtbild — Wohnungsauflösungen in Altbauten und Nachlassentrümpelungen mit historischem Mobiliar." },
        { name: "Neuenhausen", text: "Wohngebiet mit gemischter Bebauung — Seniorenumzüge, Kellerentrümpelungen und Sperrmüllentsorgungen werden regelmäßig angefragt." },
        { name: "Noithausen", text: "Ländlicher Ortsteil — Teilentrümpelungen, Gartengeräte-Entsorgung und Haushaltsauflösungen nach Auszug älterer Bewohner." },
        { name: "Hemmerden", text: "Kleines Dorf nahe Grevenbroich — Haushaltsauflösungen, Sperrmüllentsorgung und Kellerentrümpelungen." },
      ]}
      stadtteile={[
        "Grevenbroich-Mitte", "Gustorf", "Kapellen", "Wevelinghoven",
        "Neuenhausen", "Noithausen", "Hemmerden",
      ]}
      neighborCities={[
        { name: "Bedburg", slug: "bedburg" },
        { name: "Rommerskirchen", slug: "rommerskirchen" },
        { name: "Bergheim", slug: "bergheim" },
        { name: "Elsdorf", slug: "elsdorf" },
        { name: "Kerpen", slug: "kerpen" },
      ]}
      mapEmbed="https://www.google.com/maps?q=Grevenbroich,+Rhein-Kreis+Neuss,+NRW&output=embed"
      trustStats={{ auftraege: "60+", reaktionszeit: "24–48h", erfahrung: "seit 2019", kundenzitat: "Schnell, zuverlässig und günstig — Entrümpelung in Grevenbroich in nur einem halben Tag erledigt. Klasse Team!", kundenName: "Susanne F." }}
    />
  );
}
