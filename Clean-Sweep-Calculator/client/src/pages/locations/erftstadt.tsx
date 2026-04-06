import { Link } from "wouter";
import LocationPage from "@/components/location-page";
import CityExtrasTemplate, { CityExtrasData } from "@/components/city-extras-template";

const data: CityExtrasData = {
  cityName: "Erftstadt",
  distanz: "ca. 25 km",
  fahrzeit: "ca. 25 Min.",
  plz: "50374",
  einwohner: "ca. 52.000",
  kreis: "Rhein-Erft-Kreis",
  entsorgung: "AWB Rhein-Erft-Kreis",
  naherOrtTip: "Erftstadt liegt im südlichen Rhein-Erft-Kreis — von unserem Standort in Bergheim sind wir in ca. 25 Minuten bei Ihnen. Die vielen Ortsteile mit Einfamilienhäusern der 1970er–80er Jahre sorgen regelmäßig für Haushaltsauflösungen nach Generationenwechsel oder vor dem Hausverkauf.",
  lokalerFakt: "Erftstadt vereint historische Ortsmitten wie Lechenich mit seiner mittelalterlichen Stadtmauer mit modernen Wohngebieten in Liblar. Die vielen Reihenhäuser und Einfamilienhäuser dieser Ära werden heute häufig geräumt — wir sind regelmäßig vor Ort.",
  mfhText: "In Lechenich gibt es viele ältere Altbauwohnungen in historischen Gebäuden. Wohnungsauflösungen und Haushaltsauflösungen nach Erbschaft sind hier besonders häufig. Historische Objekte behandeln wir mit besonderer Sorgfalt.",
  mfhArea: "Lechenich · Erftstadt-Innenstadt",
  efhText: "In Liblar, Gymnich und Bliesheim stehen viele Einfamilienhäuser und Reihenhäuser der 1970er–80er Jahre. Vor dem Hausverkauf oder nach Erbschaft werden diese regelmäßig geräumt — oft mit Garage und Keller.",
  efhArea: "Liblar · Gymnich · Bliesheim",
  kellerText: "In Erp und den ländlicheren Ortsteilen gibt es viele Hofanlagen und Scheunen. Alte Landmaschinen und Hofwerkzeuge werden fachgerecht entsorgt oder auf den Preis angerechnet.",
  kellerArea: "Erp · Borr · Ländliche Ortsteile",
  stadtteileCards: [
    { name: "Lechenich", badge: "Historischer Kern", desc: "Größter Erftstädter Ort mit mittelalterlicher Stadtmauer und vielen Altbauwohnungen. Haushaltsauflösungen nach Erbschaft sind besonders häufig — historische Möbel werden angerechnet." },
    { name: "Liblar", desc: "Moderner Wohnort mit vielen Reihen- und Einfamilienhäusern aus den 1970er Jahren. Umzüge in den Großraum Köln und Kellerentrümpelungen vor dem Hausverkauf." },
    { name: "Gymnich", badge: "Historisches Dorf", desc: "Historisches Dorf mit ländlichem Charakter und vielen älteren Einfamilienhäusern. Haushaltsauflösungen nach Erbschaft und Scheunenräumungen." },
    { name: "Bliesheim", desc: "Ruhige Wohnlage mit Einfamilienhäusern. Sperrmüllentsorgung und Teilentrümpelungen — oft kurzfristig und unkompliziert möglich." },
    { name: "Kierdorf / Dirmerzheim", desc: "Kleine Ortsteile mit Einfamilienhäusern. Kellerentrümpelungen vor dem Einzug und Gartengeräte-Entsorgung sind typische Anfragen." },
    { name: "Erp / Borr", badge: "Ländliche Lagen", desc: "Ländliche Dörfer mit Hofanlagen an der Erft. Hofräumungen, Scheunenentsorgungen und Auflösungen landwirtschaftlicher Bestände sind hier typisch." },
  ],
};

export default function ErftstadtPage() {
  return (
    <LocationPage
      cityName="Erftstadt"
      slug="erftstadt"
      description="Professionelle Entrümpelungen, Haushaltsauflösungen und Umzüge in Erftstadt. Faire Festpreise, schneller Service und besenreine Übergabe."
      metaDescription="Entrümpelung Erftstadt ✓ Haushaltsauflösung ✓ Umzüge ✓ Festpreise ✓ 24-48h Ausführung ✓ 5.0 Sterne Google ✓ Jetzt anfragen ☎ 02271 / 5880940"
      introText={<>
        Erftstadt liegt im südlichen Rhein-Erft-Kreis und umfasst zahlreiche Ortsteile wie Lechenich, Liblar, Gymnich und Bliesheim. Unser Team bietet hier professionelle <Link href="/entruempelung" className="text-primary hover:underline font-medium">Entrümpelungen</Link>, <Link href="/haushaltsaufloesung" className="text-primary hover:underline font-medium">Haushaltsauflösungen</Link> und <Link href="/umzug" className="text-primary hover:underline font-medium">Umzüge</Link> zu fairen Festpreisen an. Ob eine komplette Wohnungsauflösung in Lechenich oder eine <Link href="/kellerentruempelung" className="text-primary hover:underline font-medium">Kellerentrümpelung</Link> in Liblar — wir kümmern uns um alles, von der Räumung bis zur besenreinen Übergabe. Mit über 80 positiven Google-Bewertungen und einem eingespielten Team garantieren wir schnelle Reaktionszeiten und Festpreise ohne Nachforderungen.
      </>}
      localInfo={<>
        Erftstadt ist mit über 52.000 Einwohnern eine der größten Städte im Rhein-Erft-Kreis und besticht durch ihre Lage an der Erft sowie viele historische Ortskerne. In Lechenich und Liblar, den beiden Hauptorten, sind wir besonders häufig für <Link href="/entruempelung" className="text-primary hover:underline font-medium">Entrümpelungen</Link> und <Link href="/haushaltsaufloesung" className="text-primary hover:underline font-medium">Haushaltsauflösungen</Link> gebucht. Die vielen Einfamilienhäuser und Reihenhäuser aus den 1970er und 1980er Jahren werden regelmäßig vor dem Verkauf geräumt oder nach Generationenwechsel aufgelöst. In Gymnich und Bliesheim sind es vor allem die ländlicheren Einfamilienhäuser mit großen Kellern, für die <Link href="/kellerentruempelung" className="text-primary hover:underline font-medium">Kellerentrümpelungen</Link> unsere Teams beschäftigen.
      </>}
      localExtras={<CityExtrasTemplate data={data} />}
      plz="50374"
      einwohner="ca. 52.000"
      kreis="Rhein-Erft-Kreis"
      highlights={[
        "Alle Ortsteile: Lechenich, Liblar, Gymnich",
        "Kostenlose Besichtigung und Festpreisangebot",
        "Entrümpelung in 24–48 Stunden",
        "Besenreine Übergabe inklusive",
        "Fachgerechte Entsorgung aller Materialien",
        "Wertanrechnung auf den Entrümpelungspreis",
      ]}
      faqs={[
        {
          question: "Was kostet eine Entrümpelung in Erftstadt?",
          answer: "Die Kosten variieren je nach Objektgröße und Füllgrad. Eine 2-Zimmer-Wohnung in Erftstadt liegt zwischen 500–1.100 €. Für Häuser mit Keller rechnen Sie mit ca. 1.500–3.500 €. Genaue Preise erhalten Sie nach kostenloser Besichtigung.",
        },
        {
          question: "Sind Sie auch in Lechenich und Liblar aktiv?",
          answer: "Ja, wir sind in allen Erftstädter Ortsteilen aktiv: Lechenich, Liblar, Gymnich, Bliesheim, Kierdorf, Erp, Friesheim und allen weiteren.",
        },
        {
          question: "Kann ich auch nur den Dachboden entrümpeln lassen?",
          answer: "Ja, Teilentrümpelungen sind jederzeit möglich. Keller, Dachböden, Garagen oder einzelne Räume — für jeden Umfang erhalten Sie ein faires Festpreisangebot.",
        },
        {
          question: "Wie vereinbare ich einen Termin für Erftstadt?",
          answer: "Rufen Sie uns unter 02271 / 5880940 an oder nutzen Sie unseren Online-Terminplaner. Wir vereinbaren zunächst einen kostenlosen Besichtigungstermin, danach erhalten Sie Ihr Festpreisangebot.",
        },
        {
          question: "Bieten Sie auch Seniorenumzüge in Erftstadt an?",
          answer: "Ja, Seniorenumzüge sind eine unserer Spezialitäten. Unser Team geht besonders einfühlsam und geduldig vor, übernimmt das Einpacken, den Transport und den Aufbau in der neuen Wohnung.",
        },
        {
          question: "Was geschieht mit Möbeln und Gegenständen, die noch brauchbar sind?",
          answer: "Verwertbare Gegenstände wie Antiquitäten, Elektrogeräte oder hochwertige Möbel werden auf den Entrümpelungspreis angerechnet. Das reduziert Ihre Kosten direkt.",
        },
      ]}
      beispiel={{
        stadtteil: "Lechenich",
        objektTyp: "Reihenhaus mit Garage",
        etage: "EG + OG + Garage",
        flaeche: "ca. 110 m²",
        dauer: "1,5 Tage",
        team: "3 Mitarbeiter",
        preis: "1.900 €",
        leistungen: [
          "Komplette Haushaltsauflösung über zwei Etagen",
          "Garage mit alten Reifen, Werkzeug und Gartengeräten geräumt",
          "Demontage von Küche und Badmöbeln",
          "Fachgerechte Entsorgung von Sondermüll (Farben, Lacke)",
          "Wertanrechnung für Vintage-Möbel (–150 €)",
          "Besenreine Übergabe an den Makler",
        ],
        kundenzitat: "Mein Reihenhaus wurde für den Verkauf komplett geräumt. Alles top organisiert und der Makler war begeistert!",
        kundenName: "Günter F.",
      }}
      stadtteileDetail={[
        { name: "Lechenich", href: "/entruempelung-lechenich", text: "Größter Erftstädter Ort mit historischem Kern und mittelalterlicher Stadtmauer — viele Altbauwohnungen und ältere Reihenhäuser; Wohnungsauflösungen und Haushaltsauflösungen nach Erbschaft sind besonders häufig." },
        { name: "Liblar", href: "/entruempelung-liblar", text: "Moderner Wohnort mit vielen Reihen- und Einfamilienhäusern aus den 1970er Jahren — Umzüge in den Großraum Köln und Kellerentrümpelungen vor dem Hausverkauf werden am häufigsten gebucht." },
        { name: "Gymnich", href: "/entruempelung-gymnich", text: "Historisches Dorf mit ländlichem Charakter und vielen älteren Einfamilienhäusern — Haushaltsauflösungen nach Erbschaft und Scheunenräumungen sind die häufigsten Aufträge." },
        { name: "Bliesheim", href: "/entruempelung-bliesheim", text: "Ruhige Wohnlage mit überwiegend Einfamilienhäusern — Sperrmüllentsorgung und Teilentrümpelungen stehen auf unserem Plan, oft kurzfristig und unkompliziert." },
        { name: "Kierdorf", text: "Kleiner Ortsteil mit Einfamilienhäusern und Neubaugebieten — Kellerentrümpelungen vor dem Einzug und Gartengeräte-Entsorgung sind typische Anfragen." },
        { name: "Erp", text: "Ländliches Dorf mit vielen Hofanlagen und alten Scheunen — Hofräumungen, Scheunenentsorgungen und Auflösungen landwirtschaftlicher Bestände sind hier typisch." },
        { name: "Friesheim", href: "/entruempelung-friesheim", text: "Kleines Dorf mit ruhiger Wohnlage — Haushaltsauflösungen, Wohnungsräumungen für Vermieter und Sperrmüll werden regelmäßig bei uns angefragt." },
        { name: "Dirmerzheim", text: "Ruhiger Wohnort zwischen Erftstadt und Kerpen — Umzüge innerhalb des Kreises und Sperrmüllentsorgung sind häufige Aufträge." },
        { name: "Niederberg", text: "Kleiner Ortsteil mit Einfamilienhäusern — Teilentrümpelungen, Kellerräumungen und Gartenräumungen bei Auszug oder Hausverkauf." },
        { name: "Borr", text: "Ländlich gelegen nahe der Erft — Auflösungen von Einfamilienhäusern nach Generationenwechsel und Sperrmüllentsorgungen werden hier regelmäßig angefragt." },
      ]}
      stadtteile={[
        "Lechenich", "Liblar", "Gymnich", "Bliesheim", "Kierdorf",
        "Erp", "Friesheim", "Dirmerzheim", "Niederberg", "Borr",
      ]}
      neighborCities={[
        { name: "Kerpen", slug: "kerpen" },
        { name: "Hürth", slug: "huerth" },
        { name: "Frechen", slug: "frechen" },
        { name: "Bergheim", slug: "bergheim" },
        { name: "Elsdorf", slug: "elsdorf" },
        { name: "Bedburg", slug: "bedburg" },
      ]}
      mapEmbed="https://www.google.com/maps?q=Erftstadt,+Rhein-Erft-Kreis,+NRW&output=embed"
    />
  );
}
