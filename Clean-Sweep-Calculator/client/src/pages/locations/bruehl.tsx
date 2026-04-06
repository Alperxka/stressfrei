import { Link } from "wouter";
import LocationPage from "@/components/location-page";
import CityExtrasTemplate, { CityExtrasData } from "@/components/city-extras-template";

const data: CityExtrasData = {
  cityName: "Brühl",
  distanz: "ca. 30 km",
  fahrzeit: "ca. 30 Min.",
  plz: "50321",
  einwohner: "ca. 46.000",
  kreis: "Rhein-Erft-Kreis",
  entsorgung: "AWB Rhein-Erft-Kreis",
  naherOrtTip: "Brühl liegt im südlichen Rhein-Erft-Kreis und ist über die A61 von unserem Standort in Bergheim in ca. 30 Minuten erreichbar. Die bekannte Phantasialand-Stadt mit ihrer vielfältigen Bebauung ist ein regelmäßiger Einsatzort für unser Team.",
  lokalerFakt: "Brühl ist bekannt für Phantasialand und das UNESCO-Welterbe Schlösser Augustusburg und Falkenlust. Die vielfältige Bebauung — von gründerzeitlichen Altbauten in der Innenstadt bis zu Einfamilienhäusern in Vochem und Badorf — erfordert Erfahrung mit allen Wohnungstypen.",
  mfhText: "In der Brühler Innenstadt und Pingsdorf gibt es viele gründerzeitliche Altbauwohnungen mit hohen Decken und schweren Möbeln. Wohnungsauflösungen in diesen Objekten erfordern besondere Sorgfalt und Erfahrung.",
  mfhArea: "Brühl-Innenstadt · Pingsdorf · Kierberg",
  efhText: "In Vochem, Badorf und Schwadorf stehen viele Einfamilienhäuser der Nachkriegszeit und der 1970er Jahre. Haushaltsauflösungen nach Erbschaft und einfühlsame Seniorenumzüge sind hier häufig.",
  efhArea: "Vochem · Badorf · Schwadorf",
  kellerText: "In Brühl gibt es viele alte Keller und Garagen, die über Jahrzehnte gefüllt wurden. Auch Gewerberäumungen in den Brühler Gewerbegebieten gehören zu unserem Alltag.",
  kellerArea: "Gewerbegebiet · Ältere Stadtteile",
  stadtteileCards: [
    { name: "Brühl-Innenstadt", badge: "Gründerzeit-Altbauten", desc: "Historisches Zentrum mit Altbauwohnungen aus der Gründerzeit. Wohnungsauflösungen in diesen Objekten mit hohen Decken und historischem Inventar — wir gehen mit besonderer Sorgfalt vor." },
    { name: "Pingsdorf", desc: "Belebter Ortsteil mit Mischbebauung. Wohnungsauflösungen für Vermieter und Kellerentrümpelungen sind die häufigsten Anfragen aus diesem Ortsteil." },
    { name: "Vochem", badge: "Einfamilienhäuser", desc: "Ruhige Wohnlage mit vielen Einfamilienhäusern. Haushaltsauflösungen nach Erbschaft und Seniorenumzüge ins Pflegeheim werden regelmäßig gebucht." },
    { name: "Badorf", desc: "Ruhiger Ortsteil mit gemischter Bebauung. Kellerentrümpelungen und Haushaltsauflösungen nach Generationenwechsel werden regelmäßig angefragt." },
    { name: "Kierberg", desc: "Ortsteil mit Mischbebauung. Umzüge nach Köln und in den Rhein-Erft-Kreis sowie Haushaltsauflösungen nach Auszug älterer Bewohner." },
    { name: "Schwadorf", desc: "Ruhiger Ortsteil mit Einfamilienhäusern. Sperrmüllentsorgung, Teilentrümpelungen und Kellerräumungen vor Hausverkauf sind typisch." },
  ],
};

export default function BruehlPage() {
  return (
    <LocationPage
      cityName="Brühl"
      slug="bruehl"
      description="Entrümpelungen, Haushaltsauflösungen und Umzüge in Brühl. Professionelles Team, transparente Festpreise und besenreine Übergabe im Rhein-Erft-Kreis."
      metaDescription="Entrümpelung Brühl ✓ Haushaltsauflösung ✓ Umzüge ✓ Festpreise ✓ 24–48h ✓ 5.0 Sterne Google ✓ Kostenlose Besichtigung ☎ 02271 / 5880940"
      introText={<>
        Brühl liegt im Herzen des <Link href="/entruempelung-rhein-erft-kreis" className="text-primary hover:underline font-medium">Rhein-Erft-Kreises</Link> und ist von unserem Standort in <Link href="/entruempelung-bergheim" className="text-primary hover:underline font-medium">Bergheim</Link> bequem über die A61 erreichbar. In Brühl und den Stadtteilen Badorf, Kierberg, Pingsdorf, Vochem und Schwadorf führen wir professionelle <Link href="/entruempelung" className="text-primary hover:underline font-medium">Entrümpelungen</Link>, <Link href="/haushaltsaufloesung" className="text-primary hover:underline font-medium">Haushaltsauflösungen</Link> und <Link href="/umzug" className="text-primary hover:underline font-medium">Umzüge</Link> durch. Unser Team arbeitet schnell, diskret und zu transparenten Festpreisen — besenreine Übergabe ist immer inklusive.
      </>}
      localInfo={<>
        Brühl ist bekannt als Phantasialand-Stadt und Sitz des UNESCO-Welterbes Schlösser Augustusburg und Falkenlust. Mit rund 46.000 Einwohnern ist Brühl eine der größeren Städte im Rhein-Erft-Kreis. Die vielfältige Bebauung — von gründerzeitlichen Mehrfamilienhäusern in der Innenstadt bis zu Einfamilienhäusern in Vochem und Badorf — erfordert Erfahrung im Umgang mit allen Wohnungstypen. Wir kennen Brühl und führen hier regelmäßig <Link href="/haushaltsaufloesung" className="text-primary hover:underline font-medium">Haushaltsauflösungen nach Erbschaft</Link> und <Link href="/wohnungsaufloesung" className="text-primary hover:underline font-medium">Wohnungsauflösungen</Link> durch.
      </>}
      localExtras={<CityExtrasTemplate data={data} />}
      plz="50321"
      einwohner="ca. 46.000"
      kreis="Rhein-Erft-Kreis"
      highlights={[
        "Erreichbar über A61 (ca. 30 Min. ab Bergheim)",
        "Alle Stadtteile: Vochem, Badorf, Pingsdorf",
        "Entrümpelung in 24–48 Stunden",
        "Kostenlose Besichtigung und Festpreisangebot",
        "Besenreine Übergabe inklusive",
        "Wertanrechnung für Antiquitäten & Möbel",
      ]}
      faqs={[
        {
          question: "Was kostet eine Entrümpelung in Brühl?",
          answer: "Eine 2-Zimmer-Wohnung in Brühl kostet ca. 500–1.000 €. Ein Einfamilienhaus mit Keller liegt bei ca. 1.500–3.500 €. Wir erstellen nach kostenloser Besichtigung ein verbindliches Festpreisangebot.",
        },
        {
          question: "Entrümpeln Sie auch Altbauwohnungen in der Brühler Innenstadt?",
          answer: "Ja, gerade in den gründerzeitlichen Altbauten der Brühler Innenstadt sind wir regelmäßig im Einsatz. Schwere Möbel, enge Treppenhäuser und historisches Inventar — das ist für unser Team Alltag.",
        },
        {
          question: "Bieten Sie auch Haushaltsauflösungen nach Erbschaft in Brühl an?",
          answer: "Ja, Haushaltsauflösungen nach Todesfall oder Erbschaft sind eine unserer Kernkompetenzen. Wir gehen diskret und einfühlsam vor und regeln alles — von der Wertanrechnung bis zur besenreinen Übergabe.",
        },
        {
          question: "Können Sie Umzüge von Brühl nach Köln durchführen?",
          answer: "Ja, Umzüge von Brühl nach Köln sind besonders günstig — die Entfernung ist gering. Wir bieten Privat-, Senioren- und Büroumzüge mit vollem Möbelservice an.",
        },
        {
          question: "Wie schnell können Sie in Brühl mit der Entrümpelung starten?",
          answer: "In der Regel innerhalb von 24–48 Stunden nach Auftragserteilung. Bei dringenden Fällen — z.B. bei kurzfristigen Räumungsfristen — versuchen wir schneller zu reagieren.",
        },
        {
          question: "Wie lange dauert eine Entrümpelung in Brühl?",
          answer: "Eine 2-3-Zimmer-Wohnung ist meist an einem Tag erledigt. Ein Einfamilienhaus mit Keller benötigt 1–2 Tage. Die genaue Dauer besprechen wir bei der kostenlosen Besichtigung.",
        },
        {
          question: "Was kostet eine Kellerentrümpelung in Brühl?",
          answer: "Kellerentrümpelungen in Brühl kosten je nach Größe und Inhalt zwischen 150–600 €. Schrott und Metall werden direkt angerechnet. Festpreisangebot nach kostenloser Besichtigung.",
        },
        {
          question: "Bieten Sie auch Schrottabholung in Brühl an?",
          answer: "Ja, Schrottabholung und -ankauf ist bei uns inklusive. Beim Festpreisangebot ziehen wir den Schrottwert direkt vom Preis ab — so entrümpeln Sie günstiger.",
        },
        {
          question: "Helfen Sie auch bei der Räumung von Gewerberäumen in Brühl?",
          answer: "Ja, neben Privatwohnungen räumen wir auch Büros, Praxen, Läden und Lagerhallen in Brühl. Betriebsauflösungen und Firmenräumungen gehören zu unserem Alltag.",
        },
        {
          question: "Können Sie in Vochem oder Badorf kurzfristig entrümpeln?",
          answer: "Ja, auch in Vochem, Badorf und Schwadorf sind wir kurzfristig einsatzbereit. Bei Räumungsfristen oder dringenden Erbschaftsfällen reagieren wir so schnell wie möglich.",
        },
        {
          question: "Wie viele Mitarbeiter kommen bei einer Entrümpelung in Brühl?",
          answer: "Je nach Größe des Auftrags kommen 2–5 Mitarbeiter. Bei großen Objekten oder engen Zeitfenstern setzen wir mehr Personal ein, damit der Termin eingehalten wird.",
        },
      ]}
      beispiel={{
        stadtteil: "Vochem",
        objektTyp: "Einfamilienhaus",
        etage: "EG + OG + Keller",
        flaeche: "ca. 120 m²",
        dauer: "1,5 Tage",
        team: "3 Mitarbeiter",
        preis: "2.100 €",
        leistungen: [
          "Komplette Haushaltsauflösung über alle Etagen",
          "Kellerentrümpelung mit alten Werkzeugen und Fahrrädern",
          "Demontage von Einbauküche und Schränken",
          "Wertanrechnung für Antiquitäten (–250 €)",
          "Besenreine Übergabe an den Makler",
        ],
        kundenzitat: "Alles professionell abgewickelt — von der Besichtigung bis zur Übergabe. Sehr faire Preise!",
        kundenName: "Heinz R.",
      }}
      stadtteileDetail={[
        { name: "Brühl-Innenstadt", text: "Historisches Zentrum mit gründerzeitlichen Altbauwohnungen — Wohnungsauflösungen in Altbauten mit hohen Decken und historischem Inventar sind typisch." },
        { name: "Pingsdorf", text: "Belebter Ortsteil mit Mischbebauung — Wohnungsauflösungen für Vermieter und Kellerentrümpelungen sind die häufigsten Anfragen." },
        { name: "Vochem", text: "Ruhige Wohnlage mit Einfamilienhäusern — Haushaltsauflösungen nach Erbschaft und Seniorenumzüge ins Pflegeheim werden regelmäßig gebucht." },
        { name: "Badorf", text: "Ortsteil mit gemischter Bebauung — Kellerentrümpelungen und Haushaltsauflösungen nach Generationenwechsel werden regelmäßig angefragt." },
        { name: "Kierberg", text: "Ortsteil mit Mischbebauung — Umzüge nach Köln und Haushaltsauflösungen nach Auszug älterer Bewohner." },
        { name: "Schwadorf", text: "Ruhiger Ortsteil mit Einfamilienhäusern — Sperrmüll, Teilentrümpelungen und Kellerräumungen vor Hausverkauf sind typisch." },
      ]}
      stadtteile={[
        "Brühl-Innenstadt", "Pingsdorf", "Vochem", "Badorf", "Kierberg", "Schwadorf",
      ]}
      neighborCities={[
        { name: "Hürth", slug: "huerth" },
        { name: "Erftstadt", slug: "erftstadt" },
        { name: "Kerpen", slug: "kerpen" },
        { name: "Bergheim", slug: "bergheim" },
        { name: "Wesseling", slug: "wesseling" },
      ]}
      mapEmbed="https://www.google.com/maps?q=Brühl,+Rhein-Erft-Kreis,+NRW&output=embed"
      trustStats={{ auftraege: "70+", reaktionszeit: "24–48h", erfahrung: "seit 2019", kundenzitat: "Perfekte Haushaltsauflösung in Brühl — alles in einem Tag, besenrein übergeben. Festpreis wurde eingehalten.", kundenName: "Renate M." }}
    />
  );
}
