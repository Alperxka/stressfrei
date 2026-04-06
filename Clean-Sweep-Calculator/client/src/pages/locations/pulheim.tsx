import { Link } from "wouter";
import LocationPage from "@/components/location-page";
import CityExtrasTemplate, { CityExtrasData } from "@/components/city-extras-template";

const data: CityExtrasData = {
  cityName: "Pulheim",
  distanz: "ca. 15 km",
  fahrzeit: "ca. 15 Min.",
  plz: "50259",
  einwohner: "ca. 56.000",
  kreis: "Rhein-Erft-Kreis",
  entsorgung: "AWB Rhein-Erft-Kreis",
  naherOrtTip: "Pulheim liegt direkt zwischen Bergheim und Köln — ideal für uns. Wir erreichen Sie in Brauweiler, Stommeln oder Sinnersdorf in der Regel innerhalb von 15 Minuten. Die Nähe zu Köln sorgt für einen aktiven Wohnungsmarkt mit vielen Umzügen und Wohnungsauflösungen.",
  lokalerFakt: "Pulheim vereint gehobene Wohnlagen in Brauweiler und Stommeln mit ruhigeren Dörfern wie Geyen und Sinnersdorf. Die Nähe zu Köln macht die Stadt besonders attraktiv — und das spiegelt sich in hochwertiger Einrichtung wider, die bei Wertanrechnung oft viel spart.",
  mfhText: "In Pulheim-Mitte und Stommeln gibt es viele ältere Mehrfamilienhäuser aus den 1960er–80er Jahren. Wohnungsauflösungen für Vermieter sind hier häufig. Oft mit hochwertiger Einrichtung — Wertanrechnung lohnt sich.",
  mfhArea: "Pulheim-Mitte · Stommeln",
  efhText: "In Brauweiler und Sinnersdorf stehen viele Einfamilienhäuser in gehobener Wohnlage. Haushaltsauflösungen nach Erbschaft sind häufig — oft mit Designermöbeln und hochwertigen Elektrogeräten, die den Preis deutlich senken.",
  efhArea: "Brauweiler · Sinnersdorf · Geyen",
  kellerText: "In Dansweiler und Sinthern gibt es Keller und Garagen, die über Jahre gefüllt wurden. Außerdem Umzüge aus Pulheim nach Köln — regelmäßig und günstig durch kurze Fahrstrecken.",
  kellerArea: "Dansweiler · Sinthern · Manstedten",
  stadtteileCards: [
    { name: "Brauweiler", badge: "Gehobene Wohnlage", desc: "Bekannt durch das historische Benediktinerkloster. Viele Einfamilienhäuser in bester Lage — Haushaltsauflösungen nach Erbschaft mit hochwertiger Einrichtung sind hier häufig." },
    { name: "Stommeln", badge: "Historischer Ortskern", desc: "Größter Pulheimer Stadtteil mit altem Ortskern und vielen Altbauten. Wohnungsauflösungen, Kellerentrümpelungen und Umzüge nach Köln gehören zum Alltag." },
    { name: "Pulheim-Mitte", desc: "Zentraler Ort mit Mischbebauung und modernen Wohnblöcken. Wohnungsräumungen für Vermieter und Kellerentrümpelungen werden hier am häufigsten gebucht." },
    { name: "Sinnersdorf", desc: "Ruhige Wohnlage mit Einfamilienhäusern nahe Köln. Haushaltsauflösungen nach Generationenwechsel und Seniorenumzüge ins Pflegeheim." },
    { name: "Geyen", desc: "Kleines Dorf mit ländlichem Charakter. Teilentrümpelungen, Sperrmüll und Gartengeräte-Abholung — schnell und unkompliziert." },
    { name: "Dansweiler / Sinthern", desc: "Ruhige Wohnlagen mit älterem Einfamilienhausbestand. Seniorenumzüge, Haushaltsauflösungen nach Erbschaft und Sperrmüllentsorgung." },
  ],
};

export default function PulheimPage() {
  return (
    <LocationPage
      cityName="Pulheim"
      slug="pulheim"
      description="Professionelle Entrümpelungen, Haushaltsauflösungen und Umzüge in Pulheim. Faire Preise, besenreine Übergabe und über 90+ positive Google Bewertungen."
      metaDescription="Entrümpelung Pulheim ✓ Haushaltsauflösung ✓ Umzüge ✓ Festpreise ✓ Besenrein ✓ 5.0 Sterne Google ✓ Jetzt kostenlos anfragen ☎ 02271 / 5880940"
      introText={<>
        Pulheim liegt zwischen Köln und dem Rhein-Erft-Kreis und ist für uns optimal erreichbar. Ob in Pulheim-Mitte, Stommeln, Brauweiler, Sinnersdorf oder Geyen — unser Team ist schnell bei Ihnen vor Ort. Wir bieten professionelle <Link href="/entruempelung" className="text-primary hover:underline font-medium">Entrümpelungen</Link>, komplette <Link href="/haushaltsaufloesung" className="text-primary hover:underline font-medium">Haushaltsauflösungen</Link> und stressfreie <Link href="/umzug" className="text-primary hover:underline font-medium">Umzüge</Link> zu transparenten Festpreisen. Durch die Wertanrechnung können Sie zusätzlich sparen. Pulheim ist bekannt für seine gehobenen Wohnlagen und viele Einfamilienhäuser — wir kennen die lokalen Besonderheiten und arbeiten dementsprechend effizient.
      </>}
      localInfo={<>
        Pulheim grenzt direkt an Köln und vereint städtisches Flair mit ländlicher Ruhe. Die Stadt hat mehrere gewachsene Ortsteile mit vielen Ein- und Mehrfamilienhäusern aus verschiedenen Jahrzehnten. Besonders in Brauweiler mit dem bekannten ehemaligen Kloster, in Stommeln mit dem historischen Ortskern und in der Pulheimer Innenstadt sind wir regelmäßig für <Link href="/entruempelung" className="text-primary hover:underline font-medium">Entrümpelungen</Link> und <Link href="/umzug" className="text-primary hover:underline font-medium">Umzüge</Link> im Einsatz. Die Nähe zu Köln sorgt für viele <Link href="/privatumzug" className="text-primary hover:underline font-medium">Privatumzüge</Link> und regelmäßige <Link href="/wohnungsaufloesung" className="text-primary hover:underline font-medium">Wohnungsauflösungen</Link> bei Wohnungswechsel.
      </>}
      localExtras={<CityExtrasTemplate data={data} />}
      plz="50259"
      einwohner="ca. 56.000"
      kreis="Rhein-Erft-Kreis"
      highlights={[
        "Schnelle Erreichbarkeit zwischen Köln und Bergheim",
        "Kostenlose Besichtigung in allen Ortsteilen",
        "Entrümpelung in 24–48 Stunden",
        "Besenreine Übergabe inklusive",
        "Wertanrechnung bei verwertbaren Gegenständen",
        "Stommeln, Brauweiler, Sinnersdorf und weitere",
      ]}
      faqs={[
        {
          question: "Was kostet eine Entrümpelung in Pulheim?",
          answer: "Für eine 2-Zimmer-Wohnung in Pulheim rechnen Sie mit ca. 500–1.000 €. Ein Einfamilienhaus mit Keller liegt bei ca. 1.500–3.500 €. Die genauen Kosten ermitteln wir bei einer kostenlosen Besichtigung vor Ort.",
        },
        {
          question: "Machen Sie auch Entrümpelungen in Stommeln und Brauweiler?",
          answer: "Ja, wir sind in allen Pulheimer Ortsteilen aktiv: Stommeln, Brauweiler, Sinnersdorf, Geyen, Sinthern, Manstedten und Dansweiler. Die Anfahrt ist bereits im Festpreis enthalten.",
        },
        {
          question: "Bieten Sie auch Seniorenumzüge in Pulheim an?",
          answer: "Ja, wir haben uns auf Seniorenumzüge spezialisiert. Unser Team geht besonders einfühlsam und geduldig vor. Wir übernehmen alles — vom Einpacken bis zum Aufbau in der neuen Wohnung.",
        },
        {
          question: "Wie läuft eine Entrümpelung in Pulheim ab?",
          answer: "1. Kostenlose Besichtigung und Festpreisangebot. 2. Terminvereinbarung (oft innerhalb von 24–48h). 3. Professionelle Entrümpelung durch unser Team. 4. Besenreine Übergabe. Sie müssen sich um nichts kümmern.",
        },
        {
          question: "Können Sie auch Umzüge von Pulheim nach Köln durchführen?",
          answer: "Ja, Umzüge von Pulheim nach Köln gehören zu unseren häufigsten Aufgaben. Dank der kurzen Entfernung zwischen Pulheim und Köln sind diese Umzüge besonders effizient und günstig.",
        },
        {
          question: "Was passiert mit Elektrogeräten und Sondermüll bei der Entrümpelung?",
          answer: "Elektrogeräte, Farben, Lacke und anderer Sondermüll werden von uns fachgerecht und umweltkonform entsorgt. Wir arbeiten mit zertifizierten Entsorgungspartnern zusammen und trennen alle Materialien ordnungsgemäß.",
        },
      ]}
      beispiel={{
        stadtteil: "Brauweiler",
        objektTyp: "4-Zimmer-Wohnung",
        etage: "1. OG mit Aufzug",
        flaeche: "ca. 95 m²",
        dauer: "1 Tag",
        team: "3 Mitarbeiter",
        preis: "1.450 €",
        leistungen: [
          "Komplettentrümpelung aller Wohn- und Schlafräume",
          "Demontage von Einbauküche und begehbarem Kleiderschrank",
          "Abtransport von Möbeln, Elektrogeräten und Textilien",
          "Wertanrechnung für hochwertige Möbelstücke (–200 €)",
          "Fachgerechte Entsorgung und besenreine Übergabe",
        ],
        kundenzitat: "Innerhalb eines Tages war die komplette Wohnung leer und besenrein. Der Festpreis wurde eingehalten — perfekt!",
        kundenName: "Andrea L.",
      }}
      stadtteileDetail={[
        { name: "Stommeln", href: "/entruempelung-stommeln", text: "Größter Ortsteil mit historischem Ortskern und vielen Altbauten aus dem frühen 20. Jahrhundert — Haushaltsauflösungen in Altbauten, Kellerentrümpelungen und Umzüge nach Köln sind hier besonders häufig." },
        { name: "Brauweiler", href: "/entruempelung-brauweiler", text: "Bekannt durch das ehemalige Benediktinerkloster, viele Einfamilienhäuser und gehobene Wohnlage — Wohnungsauflösungen, Haushaltsauflösungen nach Erbschaft und Umzüge ins Rheinland werden regelmäßig gebucht." },
        { name: "Sinnersdorf", href: "/entruempelung-sinnersdorf", text: "Ruhige Wohnlage mit vielen Einfamilienhäusern nahe Köln — Haushaltsauflösungen nach Generationenwechsel und Seniorenumzüge ins Pflegeheim sind häufige Anfragen." },
        { name: "Geyen", href: "/entruempelung-geyen", text: "Kleines Dorf mit ländlichem Charakter — Teilentrümpelungen, Sperrmüllentsorgung und Gartengeräte-Abholung werden hier regelmäßig bei uns angefragt." },
        { name: "Sinthern", text: "Einfamilienhausgeprägte Wohnlage mit ruhiger Nachbarschaft — Kellerentrümpelungen vor dem Einzug und Umzüge in den Rhein-Erft-Kreis." },
        { name: "Manstedten", text: "Kleiner Ortsteil nahe Stommeln — Haushaltsauflösungen nach Todesfall und Gartenräumungen sind typische Anfragen aus diesem Ortsteil." },
        { name: "Dansweiler", text: "Ruhige Wohnlage mit älterem Einfamilienhausbestand — Seniorenumzüge, Haushaltsauflösungen nach Erbschaft und Sperrmüllentsorgung." },
        { name: "Stommelerbusch", text: "Kleines Dorf am Rande von Stommeln — Teilentrümpelungen, Gartengeräte-Entsorgung und Sperrmüll bei Hausverkauf oder Auszug." },
      ]}
      stadtteile={[
        "Stommeln", "Brauweiler", "Sinnersdorf", "Geyen",
        "Sinthern", "Manstedten", "Dansweiler", "Stommelerbusch",
      ]}
      neighborCities={[
        { name: "Bergheim", slug: "bergheim" },
        { name: "Frechen", slug: "frechen" },
        { name: "Kerpen", slug: "kerpen" },
        { name: "Bedburg", slug: "bedburg" },
        { name: "Rommerskirchen", slug: "rommerskirchen" },
        { name: "Hürth", slug: "huerth" },
      ]}
      mapEmbed="https://www.google.com/maps?q=Pulheim,+Rhein-Erft-Kreis,+NRW&output=embed"
    />
  );
}
