import ServiceDetailPage from "@/components/service-detail-page";
import { Sparkles, Shield, Clock, CheckCircle2, Heart, Recycle, Star, Droplets } from "lucide-react";

export default function GrundreinigungPage() {
  return (
    <ServiceDetailPage
      data={{
        slug: "grundreinigung",
        pageName: "Grundreinigung",
        badge: "Reinigung & Pflege",
        title: "Grundreinigung im Rhein-Erft-Kreis — Sauber bis in den letzten Winkel",
        subtitle: "Professionelle Tiefenreinigung nach Umzug, Entrümpelung oder Renovierung — für Wohnungen, Häuser und Gewerbeimmobilien. Festpreis, vollversichert, termingerecht im Rhein-Erft-Kreis.",
        heroImage: "/images/services/grundreinigung.webp",
        heroImageAlt: "Professionelle Reinigungskraft in Uniform reinigt eine Küche gründlich mit Profi-Equipment",
        metaDescription: "Grundreinigung Rhein-Erft-Kreis ✓ Tiefenreinigung nach Umzug, Entrümpelung & Renovierung ✓ Übergabereinigung ✓ Festpreis ✓ Bezugsfertig ☎ 02271 / 5880940",
        intro: "Nach einem Umzug, einer Entrümpelung oder Renovierung strahlt eine Immobilie erst dann richtig, wenn sie auch sauber ist. Unsere Grundreinigung im Rhein-Erft-Kreis geht weit über die normale Hausreinigung hinaus: Wir reinigen Böden bis in Ecken und unter Heizkörper, entfernen hartnäckige Kalkflecken in Bad und Küche, reinigen Backöfen und Dunstabzugshauben innen, säubern Schränke von innen, putzen Fenster und hinterlassen die Immobilie in einem Zustand, der direkt bewohnbar oder vermietbar ist. Wir arbeiten in Bergheim, Kerpen, Pulheim, Frechen, Hürth, Brühl, Erftstadt, Grevenbroich und dem gesamten Rhein-Erft-Kreis — pünktlich, gründlich und zum vereinbarten Festpreis.",
        benefits: [
          { icon: Sparkles, title: "Echte Tiefenreinigung", desc: "Wir reinigen Böden, Wände, Schränke (innen & außen), Herd, Backofen, Dunstabzugshaube, Bad, WC, Fenster innen — komplett und bis in den letzten Winkel." },
          { icon: CheckCircle2, title: "Übergabebereit & bezugsfertig", desc: "Ideal als Übergabereinigung für Vermieter und Mieter: Die Wohnung wird in einwandfreiem Zustand übergeben — bereit für Besichtigungen oder den nächsten Mieter." },
          { icon: Droplets, title: "Kalk, Flecken & hartnäckige Rückstände", desc: "Kalk in Bad und Küche, eingebrannte Rückstände im Backofen, alte Schmutzschichten auf Böden und Fliesen — wir beseitigen auch hartnäckigste Verschmutzungen mit professionellen Mitteln." },
          { icon: Shield, title: "Professionelles Reinigungsequipment", desc: "Wir verwenden professionelle, zugelassene Reinigungsmittel und Maschinen — wirksam gegen starke Verschmutzungen, schonend für Oberflächen und sicher für Allergiker." },
          { icon: Clock, title: "Effizientes Team vor Ort", desc: "Unser Reinigungsteam arbeitet mit 2–4 Personen systematisch und effizient — für schnelle Ergebnisse ohne Kompromisse bei der Qualität. In einem Tag bezugsfertig." },
          { icon: Recycle, title: "Umweltbewusste Reinigung", desc: "Wir setzen auf umweltfreundliche, biologisch abbaubare Reinigungsmittel und effiziente Wassernutzung — gut für die Immobilie, gut für die Umwelt und Ihre Gesundheit." },
        ],
        ablauf: [
          { step: "1", title: "Umfang & Größe besprechen", desc: "Teilen Sie uns die Größe der Immobilie, den Reinigungsumfang und besondere Anforderungen mit — Fotos oder eine kurze Beschreibung helfen bei der Kalkulation." },
          { step: "2", title: "Festpreisangebot erhalten", desc: "Wir erstellen nach Besichtigung oder Fotobeschreibung ein transparentes Festpreisangebot — ohne Stundenlohn, ohne versteckte Kosten." },
          { step: "3", title: "Professionelle Tiefenreinigung", desc: "Unser Team kommt zum vereinbarten Termin mit komplettem Reinigungsequipment und -material. Zimmer für Zimmer wird gründlich gereinigt — nach klar definiertem Plan." },
          { step: "4", title: "Qualitätskontrolle & Übergabe", desc: "Nach der Reinigung führen wir eine Abschlusskontrolle durch und dokumentieren das Ergebnis auf Wunsch mit Fotos — damit Sie wirklich zufrieden sind und die Übergabe reibungslos verläuft." },
        ],
        faqs: [
          { question: "Was ist der Unterschied zwischen Grundreinigung und normaler Reinigung?", answer: "Die Grundreinigung ist eine Tiefenreinigung — Schränke innen, hinter Geräten, Backofen, Dunstabzugshaube, Kalk entfernen, Böden maschinell reinigen, Fliesen fugen. Alles, was bei der regulären Hausreinigung üblicherweise nicht gemacht wird." },
          { question: "Können Sie eine Wohnung für die Übergabe reinigen?", answer: "Ja, die Übergabereinigung ist einer unserer häufigsten Aufträge. Wir stellen sicher, dass die Wohnung in einwandfreiem Zustand übergeben werden kann — inklusive Protokoll und Fotodokumentation auf Wunsch." },
          { question: "Bringen Sie Reinigungsmittel und Equipment mit?", answer: "Ja, komplett. Staubsauger, Wischmopp, Scheuerpads, Entkalker, Backofenreiniger, Glasreiniger, Scheuermittel — wir bringen alles mit. Sie müssen nichts bereitstellen." },
          { question: "Wie lange dauert eine Grundreinigung?", answer: "Für eine 3-Zimmer-Wohnung rechnen wir in der Regel 4–8 Stunden mit 2–3 Personen, abhängig vom Verschmutzungsgrad. Ein stark verschmutztes Bad oder ein eingebrannter Backofen braucht mehr Zeit als ein gepflegter Haushalt." },
          { question: "Können Sie auch nach der Entrümpelung reinigen?", answer: "Ja, wir kombinieren Grundreinigung sehr häufig mit unserer Entrümpelungsleistung — besonders praktisch für Haushaltsauflösungen und Erbschaften. Das spart Zeit und Koordinationsaufwand." },
          { question: "Was kostet eine Grundreinigung für eine 2-Zimmer-Wohnung?", answer: "Eine typische 2-Zimmer-Wohnung (ca. 50–60 m²) kostet zwischen 250–450 € abhängig vom Verschmutzungsgrad. Wir erstellen Ihnen nach kurzer Absprache oder Besichtigung ein verbindliches Festpreisangebot." },
          { question: "Reinigen Sie auch Keller und Dachböden?", answer: "Ja, auf Anfrage reinigen wir Keller, Dachböden, Garagen und Nebenräume — gerne in Kombination mit einer Entrümpelung." },
          { question: "Kann ich direkt nach der Grundreinigung einziehen?", answer: "Ja, nach unserer Grundreinigung ist die Immobilie sofort bezugsfertig. Böden sind trocken, Küche und Bad sind hygienisch sauber — Sie können direkt einziehen oder die Wohnung besichtigen." },
          { question: "Reinigen Sie auch Fenster von innen und außen?", answer: "Fenster innen reinigen wir standardmäßig. Fenster außen (bei Erdgeschoss oder mit Leiter erreichbar) auf Anfrage — sprechen Sie uns einfach an." },
        ],
        priceHint: "Der Preis richtet sich nach Größe der Immobilie und Reinigungsumfang. Pro Zimmer ab ca. 80–150 € — Festpreis nach Besichtigung. Keine Überraschungen bei der Endrechnung. Jetzt kostenlos anfragen.",
        pricingRows: [
          { label: "1-Zimmer-Wohnung (bis 40 m²)", price: "ab 199 €", note: "inkl. Bad & Küche" },
          { label: "2-Zimmer-Wohnung (bis 65 m²)", price: "ab 299 €", note: "inkl. Bad & Küche" },
          { label: "3-Zimmer-Wohnung (bis 90 m²)", price: "ab 399 €", note: "inkl. Bad & Küche" },
          { label: "4-Zimmer-Wohnung / Haus", price: "ab 549 €", note: "individuelle Kalkulation" },
          { label: "Gewerberäume", price: "auf Anfrage", note: "nach m² und Umfang" },
        ],
        reviews: [
          { text: "Grundreinigung vor Übergabe der Wohnung — makellos sauber, Vermieter war begeistert. Kaution vollständig zurückerhalten. Sehr empfehlenswert!", name: "Sandra K." },
          { text: "Endreinigung nach Renovierung schnell und gründlich erledigt. Preis war fair, Ergebnis tadellos. Gerne wieder!", name: "Peter M." },
          { text: "Küche und Bad wie neu — ich hätte nicht gedacht, dass das noch möglich ist. Klasse Arbeit zum fairen Preis!", name: "Ute R." },
        ],
        relatedLinks: [
          { label: "Gebäudereinigung", href: "/gebaeudereinigung" },
          { label: "Tapeten entfernen", href: "/tapeten-entfernen" },
          { label: "Haushaltsauflösung", href: "/haushaltsaufloesung" },
          { label: "Renovierungsservice", href: "/renovierungsservice" },
          { label: "Alle Leistungen", href: "/leistungen" },
        ],
      }}
    />
  );
}
