import { Link } from "wouter";
import LocationPage from "@/components/location-page";
import CityExtrasTemplate, { CityExtrasData } from "@/components/city-extras-template";

const data: CityExtrasData = {
  cityName: "Bedburg",
  distanz: "ca. 10 km",
  fahrzeit: "ca. 15 Min.",
  plz: "50181",
  einwohner: "ca. 25.000",
  kreis: "Rhein-Erft-Kreis",
  entsorgung: "AWB Rhein-Erft-Kreis",
  naherOrtTip: "Bedburg liegt im nördlichen Rhein-Erft-Kreis und ist von unserem Standort in Bergheim in nur 15 Minuten erreichbar. Als nördlichste Stadt des Kreises profitieren Sie von kurzen Anfahrtswegen und damit besonders günstigen Konditionen.",
  lokalerFakt: "Bedburg verbindet historischen Charme — die Wasserburg Kaster ist überregional bekannt — mit dem Strukturwandel des Braunkohlereviers. Viele ältere Wohnhäuser in Kaster und Bedburg-Mitte werden nach Generationenwechsel aufgelöst.",
  mfhText: "In Bedburg-Mitte gibt es einige Mehrfamilienhäuser mit vollgestellten Kellern. Wohnungsauflösungen für Vermieter sind hier häufig — oft kurzfristig nach Mieterwechsel.",
  mfhArea: "Bedburg-Mitte · Kaster",
  efhText: "In Kaster, Lipp und Rath stehen viele Einfamilienhäuser, die nach Erbschaft oder bei Hausverkauf geräumt werden. Ältere Haushalte mit schweren Möbeln und vielen Jahrzehnten Ansammlung sind typisch.",
  efhArea: "Kaster · Lipp · Rath",
  kellerText: "In den ländlichen Ortsteilen Kirchherten und Grottenherten gibt es viele Hofanlagen und Scheunen. Landwirtschaftliche Altgeräte und Schrott werden fachgerecht entsorgt oder angerechnet.",
  kellerArea: "Kirchherten · Grottenherten · Ländliche Lagen",
  stadtteileCards: [
    { name: "Bedburg-Mitte", badge: "Stadtzentrum", desc: "Zentrum der nördlichsten Kreisstadt. Wohnungsauflösungen für Vermieter und Kellerentrümpelungen werden hier am häufigsten angefragt. Schnell erreichbar in 15 Minuten von Bergheim." },
    { name: "Kaster", badge: "Historisch, Wasserburg", desc: "Historischer Ortsteil mit der bekannten Wasserburg Kaster. Viele ältere Gebäude und Haushaltsauflösungen nach Generationenwechsel — oft mit historischem Inventar und Wertgegenständen." },
    { name: "Lipp", desc: "Ruhiger Ortsteil mit Einfamilienhäusern. Haushaltsauflösungen nach Erbschaft und Kellerentrümpelungen vor dem Hausverkauf werden regelmäßig gebucht." },
    { name: "Rath", desc: "Ländlich geprägter Ortsteil. Scheunenräumungen und Auflösungen älterer Haushalte nach Generationenwechsel sind typische Anfragen." },
    { name: "Kirchherten", desc: "Kleiner ländlicher Ortsteil. Hofräumungen, landwirtschaftliche Altgeräte und Schrottentsorgung werden hier regelmäßig angefragt." },
    { name: "Grottenherten", desc: "Dörfliche Wohnlage nördlich von Bedburg. Teilentrümpelungen, Sperrmüll und Gartenräumungen bei Auszug oder Hausverkauf." },
  ],
};

export default function BedburgPage() {
  return (
    <LocationPage
      cityName="Bedburg"
      slug="bedburg"
      description="Professionelle Entrümpelungen, Haushaltsauflösungen und Umzüge in Bedburg. Stressfrei, zuverlässig und zum garantierten Festpreis."
      metaDescription="Entrümpelung Bedburg ✓ Haushaltsauflösung ✓ Umzüge ✓ Faire Festpreise ✓ 24-48h Ausführung ✓ 90+ Google Bewertungen ✓ Jetzt kostenlos anfragen! ☎ 02271 / 5880940"
      introText={<>
        In Bedburg und den umliegenden Ortsteilen wie Kaster, Lipp, Rath und Kirchherten sind wir regelmäßig im Einsatz. Ob komplette <Link href="/haushaltsaufloesung" className="text-primary hover:underline font-medium">Haushaltsauflösung</Link>, <Link href="/kellerentruempelung" className="text-primary hover:underline font-medium">Kellerentrümpelung</Link> oder ein stressfreier <Link href="/umzug" className="text-primary hover:underline font-medium">Umzug</Link> — unser Team aus dem nahegelegenen Bergheim ist schnell bei Ihnen vor Ort. Dank der kurzen Entfernung profitieren Sie von günstigen Anfahrtskosten und flexibler Terminplanung. Bedburg als nördlichste Stadt des Rhein-Erft-Kreises erreichen wir meist in unter 15 Minuten — das macht kurzfristige Termine möglich, die andere nicht anbieten können.
      </>}
      localInfo={<>
        Bedburg liegt im nördlichen Rhein-Erft-Kreis an der Erft. Die Stadt verbindet ländlichen Charme mit guter Anbindung an Köln und Düsseldorf. Besonders in den historischen Ortskernen von Kaster — mit der bekannten Wasserburg — und in Bedburg-Mitte werden wir häufig für <Link href="/entruempelung" className="text-primary hover:underline font-medium">Entrümpelungen</Link> und <Link href="/haushaltsaufloesung" className="text-primary hover:underline font-medium">Haushaltsauflösungen</Link> gebucht. In den ländlicheren Ortsteilen wie Rath und Kirchherten sind es vor allem Scheunenräumungen, Hofauflösungen und <Link href="/wohnungsaufloesung" className="text-primary hover:underline font-medium">Wohnungsauflösungen</Link> älterer Einfamilienhäuser.
      </>}
      localExtras={<CityExtrasTemplate data={data} />}
      plz="50181"
      einwohner="ca. 25.000"
      kreis="Rhein-Erft-Kreis"
      highlights={[
        "Nur 15 Min. von unserem Standort in Bergheim",
        "Alle Ortsteile: Kaster, Lipp, Rath, Kirchherten",
        "Entrümpelung in 24–48 Stunden",
        "Kostenlose Besichtigung und Festpreisangebot",
        "Besenreine Übergabe inklusive",
        "Wertanrechnung auf den Entrümpelungspreis",
      ]}
      faqs={[
        {
          question: "Was kostet eine Entrümpelung in Bedburg?",
          answer: "Für eine 2-Zimmer-Wohnung in Bedburg rechnen Sie mit ca. 400–800 €. Ein Einfamilienhaus mit Keller liegt bei ca. 1.200–3.000 €. Die kurze Anfahrt von Bergheim hält die Transportkosten niedrig. Genaue Preise nach kostenloser Besichtigung.",
        },
        {
          question: "Sind Sie auch in Kaster und den ländlichen Ortsteilen tätig?",
          answer: "Ja, wir sind in allen Bedburger Ortsteilen aktiv: Kaster, Lipp, Rath, Kirchherten, Grottenherten und allen weiteren. Die Anfahrt ist im Festpreis enthalten.",
        },
        {
          question: "Übernehmen Sie auch Scheunenräumungen in Bedburg?",
          answer: "Ja, Scheunenräumungen, Hofauflösungen und die Entsorgung alter landwirtschaftlicher Bestände sind für uns Routine. Altmetall und Schrott werden direkt vom Preis abgezogen.",
        },
        {
          question: "Wie schnell können Sie in Bedburg starten?",
          answer: "Da Bedburg nur ca. 15 Minuten von unserem Standort in Bergheim entfernt ist, können wir oft noch am gleichen oder nächsten Tag starten. Bei Erbschaftsfällen mit Räumungsfristen reagieren wir besonders schnell.",
        },
        {
          question: "Bieten Sie auch Umzüge von Bedburg nach Köln oder Düsseldorf an?",
          answer: "Ja, Bedburg liegt verkehrsgünstig an der A61, was Umzüge nach Köln, Düsseldorf und ins gesamte Rheinland besonders effizient macht. Wir bieten Privat-, Senioren- und Büroumzüge an.",
        },
        {
          question: "Wer räumt eine Wohnung in Bedburg nach einem Todesfall?",
          answer: "Wir begleiten Sie einfühlsam durch den gesamten Prozess — von der Sichtung und Wertanrechnung über die vollständige Räumung bis zur besenreinen Übergabe. Diskret, schnell und ohne versteckte Kosten.",
        },
        {
          question: "Können Sie auch den Dachboden in Bedburg entrümpeln?",
          answer: "Ja, Dachbodenentrümpelungen sind ein häufiger Auftrag — besonders in den älteren Häusern in Kaster und Lipp. Wir tragen alles sicher ab und entsorgen fachgerecht.",
        },
        {
          question: "Gibt es eine kostenlose Besichtigung in Bedburg?",
          answer: "Ja, die Besichtigung vor Ort ist für Sie komplett kostenlos und unverbindlich. Wir kommen zu Ihnen, schauen uns alles an und geben Ihnen direkt ein schriftliches Festpreisangebot.",
        },
        {
          question: "Arbeiten Sie auch am Wochenende in Bedburg?",
          answer: "Ja, auf Anfrage sind wir auch samstags in Bedburg tätig. Bei dringenden Fällen — etwa vor einer Wohnungsübergabe — finden wir fast immer einen Weg.",
        },
        {
          question: "Was passiert mit noch verwertbaren Gegenständen aus der Entrümpelung?",
          answer: "Wertvolle Möbel, Antiquitäten, Metalle oder Elektrogeräte werden beim Festpreisangebot berücksichtigt und direkt vom Gesamtpreis abgezogen. So sparen Sie bares Geld.",
        },
        {
          question: "Können Sie kurzfristig bei einer Zwangsräumung in Bedburg helfen?",
          answer: "Ja, bei Zwangsräumungen und kurzfristigen Räumungsfristen reagieren wir so schnell wie möglich. Rufen Sie uns direkt unter 02271 / 5880940 an — wir prüfen sofort die Verfügbarkeit.",
        },
      ]}
      beispiel={{
        stadtteil: "Kaster",
        objektTyp: "Einfamilienhaus mit Keller",
        etage: "EG + OG + Keller",
        flaeche: "ca. 100 m²",
        dauer: "1 Tag",
        team: "3 Mitarbeiter",
        preis: "1.600 €",
        leistungen: [
          "Komplette Haushaltsauflösung nach Erbschaft",
          "Kellerentrümpelung mit alten Werkzeugen und Fahrrädern",
          "Demontage von Einbauküche und Schränken",
          "Wertanrechnung für Antiquitäten und Metalle",
          "Besenreine Übergabe an die Erbengemeinschaft",
        ],
        kundenzitat: "Das Haus meiner Mutter wurde in Kaster geräumt — einfühlsam, schnell und zum fairen Festpreis. Sehr empfehlenswert!",
        kundenName: "Klaus M.",
      }}
      stadtteileDetail={[
        { name: "Bedburg-Mitte", text: "Stadtzentrum mit Rathaus und Mischbebauung — Wohnungsauflösungen für Vermieter und Kellerentrümpelungen werden hier am häufigsten gebucht." },
        { name: "Kaster", href: "/entruempelung-kaster", text: "Historischer Ortsteil mit bekannter Wasserburg — viele ältere Gebäude und Haushaltsauflösungen nach Generationenwechsel mit historischem Inventar." },
        { name: "Lipp", text: "Ruhiger Ortsteil mit Einfamilienhäusern — Haushaltsauflösungen nach Erbschaft und Kellerentrümpelungen werden regelmäßig gebucht." },
        { name: "Rath", text: "Ländlich geprägter Ortsteil — Scheunenräumungen und Auflösungen älterer Haushalte nach Generationenwechsel." },
        { name: "Kirchherten", text: "Kleiner ländlicher Ortsteil — Hofräumungen, landwirtschaftliche Altgeräte und Schrottentsorgung werden hier regelmäßig angefragt." },
        { name: "Grottenherten", text: "Dörfliche Wohnlage nördlich von Bedburg — Teilentrümpelungen, Sperrmüll und Gartenräumungen bei Auszug oder Hausverkauf." },
      ]}
      stadtteile={[
        "Bedburg-Mitte", "Kaster", "Lipp", "Rath", "Kirchherten", "Grottenherten",
      ]}
      neighborCities={[
        { name: "Bergheim", slug: "bergheim" },
        { name: "Elsdorf", slug: "elsdorf" },
        { name: "Kerpen", slug: "kerpen" },
        { name: "Grevenbroich", slug: "grevenbroich" },
        { name: "Rommerskirchen", slug: "rommerskirchen" },
      ]}
      mapEmbed="https://www.google.com/maps?q=Bedburg,+Rhein-Erft-Kreis,+NRW&output=embed"
      trustStats={{ auftraege: "90+", reaktionszeit: "24–48h", erfahrung: "seit 2018", kundenzitat: "Kellerentrümpelung in Bedburg super erledigt — Festpreis eingehalten, kein Stress. Absolut empfehlenswert!", kundenName: "Marion H." }}
    />
  );
}
