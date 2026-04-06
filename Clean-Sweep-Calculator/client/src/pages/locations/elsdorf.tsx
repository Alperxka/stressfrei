import { Link } from "wouter";
import LocationPage from "@/components/location-page";
import CityExtrasTemplate, { CityExtrasData } from "@/components/city-extras-template";

const data: CityExtrasData = {
  cityName: "Elsdorf",
  distanz: "ca. 5 km",
  fahrzeit: "ca. 5 Min.",
  plz: "50189",
  einwohner: "ca. 22.000",
  kreis: "Rhein-Erft-Kreis",
  entsorgung: "AWB Rhein-Erft-Kreis",
  naherOrtTip: "Elsdorf grenzt direkt an Bergheim — unser Team ist buchstäblich in 5 Minuten bei Ihnen. Kein anderer Anbieter kann kürzere Reaktionszeiten garantieren. Das bedeutet: maximale Flexibilität bei der Terminplanung und keinerlei Anfahrtsaufschlag.",
  lokalerFakt: "Elsdorf ist geprägt vom Strukturwandel des Braunkohlereviers und wächst durch neue Wohn- und Gewerbegebiete. Viele Einfamilienhäuser aus den 1960er–80er Jahren werden nach Generationenwechsel geräumt — wir kennen diese Objekte wie kein anderer.",
  mfhText: "In Heppendorf und Berrendorf gibt es Wohnblöcke aus der Nachkriegszeit mit vollgestellten Kellern. Wohnungsauflösungen für Vermieter — schnell erledigt, da wir in 5 Minuten vor Ort sind.",
  mfhArea: "Heppendorf · Berrendorf · Elsdorf-Mitte",
  efhText: "Viele Einfamilienhäuser aus den 1960er–80er Jahren in Grouven, Esch und Tollhausen werden nach Erbschaft oder vor dem Hausverkauf geräumt. Garten und Garage immer mit inbegriffen.",
  efhArea: "Grouven · Esch · Tollhausen",
  kellerText: "In Oberembt und Niederembt gibt es viele alte Hofanlagen aus der Braunkohle-Ära. Auch Schuppen und Gartengebäude auf neuen Wohngebieten werden vor Einzug geräumt.",
  kellerArea: "Oberembt · Niederembt · Widdendorf",
  stadtteileCards: [
    { name: "Heppendorf", badge: "Größter Ortsteil", desc: "Größter Elsdorfer Ortsteil mit Einfamilienhäusern aus den 1960er–80er Jahren. Haushaltsauflösungen nach Generationenwechsel und Kellerentrümpelungen — wir sind in 5 Minuten da." },
    { name: "Berrendorf", desc: "Wohnort mit Alt- und Neubauten. Kellerentrümpelungen, Umzüge in den Kreis und Sperrmüllentsorgungen stehen regelmäßig auf dem Plan." },
    { name: "Grouven / Esch", desc: "Ruhige Wohnlagen mit Einfamilienhäusern. Haushaltsauflösungen nach Erbschaft, Umzüge und Kellerentrümpelungen werden am häufigsten gebucht." },
    { name: "Tollhausen", desc: "Kleiner Ortsteil mit ländlichem Charakter. Sperrmüll, Gartenräumungen und Entrümpelungen nach Auszug werden regelmäßig angefragt." },
    { name: "Oberembt / Niederembt", badge: "Direkt an Bergheim", desc: "Ländliche Ortsteile mit alten Hofanlagen, direkt an der Stadtgrenze zu Bergheim. Hofräumungen, Scheunenentsorgungen und Wohnungsräumungen für Vermieter." },
    { name: "Widdendorf", desc: "Kleiner Ortsteil an der Stadtgrenze. Teilentrümpelungen, Garagenräumungen und Entsorgung alter Gartengeräte — oft kurzfristig und günstig." },
  ],
};

export default function ElsdorfPage() {
  return (
    <LocationPage
      cityName="Elsdorf"
      slug="elsdorf"
      description="Ihr Partner für Entrümpelungen, Haushaltsauflösungen und Umzüge in Elsdorf. Zuverlässig, stressfrei und zum garantierten Festpreis."
      metaDescription="Entrümpelung Elsdorf ✓ Haushaltsauflösung ✓ Umzüge ✓ Faire Festpreise ✓ Schnelle Ausführung ✓ 90+ Google Bewertungen ✓ Kostenlos anfragen ☎ 02271 / 5880940"
      introText={<>
        Elsdorf liegt direkt neben unserem Hauptsitz in Bergheim — das bedeutet für Sie: besonders kurze Anfahrtswege und günstige Konditionen. Ob <Link href="/entruempelung" className="text-primary hover:underline font-medium">Entrümpelung</Link> in der Elsdorfer Innenstadt, <Link href="/haushaltsaufloesung" className="text-primary hover:underline font-medium">Haushaltsauflösung</Link> in Heppendorf oder ein <Link href="/umzug" className="text-primary hover:underline font-medium">Umzug</Link> von Berrendorf — unser erfahrenes Team kümmert sich professionell und schnell um Ihr Anliegen. Wir kennen die Gegebenheiten vor Ort und arbeiten effizient. Elsdorf ist einer unserer meistgebuchten Einsatzorte — kein Wunder, denn die kurze Entfernung ermöglicht uns Reaktionszeiten, die kaum ein anderer Anbieter erreicht.
      </>}
      localInfo={<>
        Elsdorf liegt im Herzen des Rhein-Erft-Kreises und grenzt direkt an Bergheim. Die Stadt ist geprägt vom Strukturwandel des Braunkohlereviers und wächst stetig durch neue Wohn- und Gewerbegebiete. Besonders in den älteren Siedlungsgebieten rund um den Ortskern Heppendorf sind <Link href="/entruempelung" className="text-primary hover:underline font-medium">Entrümpelungen</Link> und <Link href="/haushaltsaufloesung" className="text-primary hover:underline font-medium">Haushaltsauflösungen</Link> gefragt. Die vielen Einfamilienhäuser aus den 1960er bis 1980er Jahren werden häufig nach Generationenwechsel aufgelöst oder vor dem Verkauf für eine <Link href="/wohnungsaufloesung" className="text-primary hover:underline font-medium">Wohnungsauflösung</Link> geräumt.
      </>}
      localExtras={<CityExtrasTemplate data={data} />}
      plz="50189"
      einwohner="ca. 22.000"
      kreis="Rhein-Erft-Kreis"
      highlights={[
        "Direkter Nachbarort — minimale Anfahrtskosten",
        "Kostenlose Besichtigung in Elsdorf",
        "Entrümpelung oft am gleichen oder nächsten Tag",
        "Besenreine Übergabe garantiert",
        "Fachgerechte Entsorgung inklusive",
        "Wertanrechnung auf den Gesamtpreis",
      ]}
      faqs={[
        {
          question: "Was kostet eine Entrümpelung in Elsdorf?",
          answer: "Da Elsdorf direkt neben unserem Standort Bergheim liegt, profitieren Sie von besonders günstigen Anfahrtskosten. Eine 2-Zimmer-Wohnung beginnt ab ca. 400–800 €. Genaue Preise erhalten Sie nach einer kostenlosen Besichtigung.",
        },
        {
          question: "Wie schnell können Sie in Elsdorf sein?",
          answer: "Durch die unmittelbare Nähe zu unserem Hauptsitz können wir in Elsdorf oft noch am selben Tag oder am Folgetag mit der Entrümpelung beginnen.",
        },
        {
          question: "Bieten Sie auch Sperrmüllentsorgung in Elsdorf an?",
          answer: "Ja, wir übernehmen die Entsorgung von Sperrmüll, Elektrogeräten und anderen Abfällen in Elsdorf. Alles wird fachgerecht getrennt und umweltgerecht entsorgt.",
        },
        {
          question: "Kann ich einzelne Räume entrümpeln lassen?",
          answer: "Ja, wir bieten auch Teilentrümpelungen an — zum Beispiel nur den Keller, Dachboden oder eine einzelne Garage. Auch dafür erhalten Sie ein Festpreisangebot.",
        },
        {
          question: "Helfen Sie auch beim Umzug innerhalb von Elsdorf?",
          answer: "Ja, wir bieten Privatumzüge, Seniorenumzüge und Büroumzüge innerhalb von Elsdorf sowie von und nach Elsdorf in den gesamten Rhein-Erft-Kreis an.",
        },
        {
          question: "Was passiert mit noch verwertbaren Möbeln und Gegenständen?",
          answer: "Wir prüfen bei der Besichtigung, welche Gegenstände noch einen Wiederverkaufswert haben. Antiquitäten, Metalle und Elektrogeräte werden auf den Preis angerechnet.",
        },
        {
          question: "Wer räumt eine Wohnung nach Todesfall oder Erbschaft in Elsdorf?",
          answer: "Das ist eine unserer häufigsten Anfragen aus Elsdorf. Wir gehen diskret und einfühlsam vor — mit vollständiger Wertanrechnung, Räumung und besenreiner Übergabe, alles aus einer Hand.",
        },
        {
          question: "Kann ich in Elsdorf auch nur eine Garage oder einen Schuppen entrümpeln lassen?",
          answer: "Ja, Teilentrümpelungen wie einzelne Garagen, Schuppen oder Kellerräume sind kein Problem. Da Elsdorf direkt bei uns liegt, ist die Anfahrt besonders günstig.",
        },
        {
          question: "Wie läuft eine Besichtigung vor der Entrümpelung in Elsdorf ab?",
          answer: "Wir kommen kostenlos und unverbindlich zu Ihnen — schauen uns alle zu räumenden Bereiche an und geben Ihnen direkt vor Ort ein schriftliches Festpreisangebot. Keine versteckten Kosten.",
        },
        {
          question: "Was passiert mit alten Elektrogeräten bei einer Entrümpelung in Elsdorf?",
          answer: "Elektrogeräte werden von uns fachgerecht nach ElektroG getrennt entsorgt. Noch funktionstüchtige Geräte werden bei der Wertanrechnung berücksichtigt.",
        },
        {
          question: "Arbeiten Sie auch an Wochenenden in Elsdorf?",
          answer: "Ja, samstags sind wir auf Anfrage auch in Elsdorf tätig. Bei dringenden Übergaben oder Fristen versuchen wir immer eine Lösung zu finden.",
        },
      ]}
      beispiel={{
        stadtteil: "Heppendorf",
        objektTyp: "Einfamilienhaus",
        etage: "EG + OG + Keller",
        flaeche: "ca. 140 m²",
        dauer: "2 Tage",
        team: "4 Mitarbeiter",
        preis: "2.400 €",
        leistungen: [
          "Komplette Haushaltsauflösung über drei Etagen",
          "Keller mit Werkstatt und Hobbyraum geräumt",
          "Demontage von Einbauküche und Wandschränken",
          "Gartenhaus-Entrümpelung inklusive",
          "Fachgerechte Entsorgung aller Materialien",
          "Besenreine Übergabe des gesamten Hauses",
        ],
        kundenzitat: "Alles aus einer Hand — vom Keller bis zum Dach wurde alles sauber erledigt. Klare Empfehlung!",
        kundenName: "Familie W.",
      }}
      stadtteileDetail={[
        { name: "Heppendorf", href: "/entruempelung-heppendorf", text: "Größter Ortsteil Elsdorfs mit vielen Einfamilienhäusern aus den 1960er bis 1980er Jahren — Haushaltsauflösungen nach Generationenwechsel und Kellerentrümpelungen vor dem Hausverkauf sind hier besonders häufig." },
        { name: "Berrendorf", href: "/entruempelung-berrendorf", text: "Wohnort mit gemischter Bebauung aus Alt- und Neubauten — Kellerentrümpelungen, Umzüge in den Kreis und Sperrmüllentsorgungen stehen regelmäßig auf unserem Plan." },
        { name: "Esch", text: "Kleines Dorf am Rande des ehemaligen Braunkohlereviers — Teilentrümpelungen, Gartengeräte-Entsorgung und Auflösungen älterer Haushalte sind typische Aufträge." },
        { name: "Grouven", text: "Ruhige Wohnlage mit Einfamilienhäusern — Haushaltsauflösungen nach Erbschaft, Umzüge und Kellerentrümpelungen werden am häufigsten gebucht." },
        { name: "Tollhausen", text: "Kleiner Ortsteil mit ländlichem Charakter — Sperrmüll, Gartenräumungen und Entrümpelungen nach Auszug werden regelmäßig angefragt." },
        { name: "Oberembt", href: "/entruempelung-oberembt", text: "Ländlich geprägter Ortsteil mit alten Hofanlagen — Hofräumungen, Scheunenentsorgungen und Auflösungen älterer Haushalte nach Umzug ins Pflegeheim." },
        { name: "Niederembt", href: "/entruempelung-niederembt", text: "Kleines Dorf an der Grenze zu Bergheim — Kellerentrümpelungen und Wohnungsräumungen für Vermieter werden hier regelmäßig durchgeführt." },
        { name: "Widdendorf", text: "Kleiner Ortsteil an der Stadtgrenze — Teilentrümpelungen, Garagenräumungen und Entsorgung alter Gartengeräte sind die häufigsten Anfragen." },
      ]}
      stadtteile={[
        "Heppendorf", "Berrendorf", "Esch", "Grouven",
        "Tollhausen", "Oberembt", "Niederembt", "Widdendorf",
      ]}
      neighborCities={[
        { name: "Bergheim", slug: "bergheim" },
        { name: "Bedburg", slug: "bedburg" },
        { name: "Kerpen", slug: "kerpen" },
        { name: "Frechen", slug: "frechen" },
        { name: "Pulheim", slug: "pulheim" },
      ]}
      mapEmbed="https://www.google.com/maps?q=Elsdorf,+Rhein-Erft-Kreis,+NRW&output=embed"
      trustStats={{ auftraege: "150+", reaktionszeit: "24–48h", erfahrung: "seit 2018", kundenzitat: "Haushaltsauflösung nach dem Tod meines Vaters — das Team war diskret, schnell und sehr menschlich. Vielen Dank!", kundenName: "Andrea S." }}
    />
  );
}
