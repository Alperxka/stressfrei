import ServiceDetailPage from "@/components/service-detail-page";
import { Paintbrush, Shield, Clock, CheckCircle2, Star, Sparkles, Recycle, Heart } from "lucide-react";

export default function TapetenEntfernenPage() {
  return (
    <ServiceDetailPage
      data={{
        slug: "tapeten-entfernen",
        pageName: "Tapeten entfernen",
        badge: "Renovierung & Reinigung",
        title: "Tapeten entfernen im Rhein-Erft-Kreis — Schnell, staubarm & professionell",
        subtitle: "Wir entfernen alte Tapeten professionell und staubarm — für alle Wandtypen, inklusive Vliestapeten, Raufaser und mehrere Lagen. Als Vorbereitung für Renovierung oder Neuvermietung im Rhein-Erft-Kreis.",
        heroImage: "/images/services/tapeten-entfernen.webp",
        heroImageAlt: "Handwerker entfernt alte Tapeten von einer Wand mit einem Dampfgerät — Raufaser und Vliestapete",
        metaDescription: "Tapeten entfernen Rhein-Erft-Kreis ✓ Raufaser, Vliestapete, mehrere Lagen ✓ Staubarm mit Dampf ✓ Entsorgung inklusive ✓ Festpreis ✓ Für Vermieter & Mieter ☎ 02271 / 5880940",
        intro: "Alte Tapeten zu entfernen klingt einfach — ist in der Praxis aber oft ein zeitaufwändiges, schmutziges und körperlich anstrengendes Geschäft. Besonders bei alten Häusern mit mehreren Tapetenschichten übereinander, hartnäckigem Leimuntergrund oder empfindlichem Unterputz ist handwerkliche Erfahrung und das richtige Equipment entscheidend. Wir entfernen Tapeten professionell und staubarm mit Profi-Dampfgeräten, schützen Böden, Heizkörper und Fenster mit Schutzfolien und hinterlassen glatte, einsatzbereite Wände — damit Maler, Stuckateure oder Heimwerker direkt loslegen können. Im gesamten Rhein-Erft-Kreis von Bergheim bis Brühl, von Pulheim bis Erftstadt.",
        benefits: [
          { icon: Sparkles, title: "Alle Tapetentypen sicher entfernt", desc: "Raufaser, Vliestapeten, Papiertapeten, mehrere Lagen übereinander, Ölfarbe — wir entfernen alle Tapetentypen fachgerecht, schonend und ohne Beschädigungen am Unterputz." },
          { icon: Paintbrush, title: "Wandschutz durch Profi-Technik", desc: "Mit professionellen Dampfgeräten und der richtigen Technik durchweichen wir den Kleister gleichmäßig und schützen den Unterputz vor Beschädigungen durch zu starkes Abkratzen." },
          { icon: Shield, title: "Staubarm & rundum sauber", desc: "Wir schützen Böden, Heizkörper, Steckdosen und verbleibende Einrichtung mit Folie. Am Ende hinterlassen wir eine saubere Baustelle ohne Tapetenfetzen und Kleberreste." },
          { icon: Clock, title: "Ein Profi-Team spart Tage", desc: "Was ein Heimwerker Tage oder Wochen kostet, erledigt unser erfahrenes Team in einem Bruchteil der Zeit — ohne Stress, ohne Rücken, ohne Nacharbeiten." },
          { icon: Recycle, title: "Entsorgung komplett inklusive", desc: "Alle alten Tapeten, Kleberreste und Schutzfolien werden von uns ordnungsgemäß entsorgt. Kein Abfall, keine Entsorgungsfahrten für Sie." },
          { icon: Heart, title: "Für Vermieter ideal — schnell & kosteneffizient", desc: "Wohnung wieder vermieten? Wir bereiten die Wände optimal für Malerarbeiten oder Neugestaltung vor — schnell, günstig und professionell." },
        ],
        ablauf: [
          { step: "1", title: "Räume & Umfang besprechen", desc: "Teilen Sie uns mit, welche Räume und wie viele Quadratmeter Tapete entfernt werden sollen. Fotos vom Wandzustand und der Tapetenart helfen bei der genauen Kalkulation." },
          { step: "2", title: "Kostenlose Besichtigung & Festpreis", desc: "Wir besichtigen die Räume, beurteilen Wandzustand, Tapetenart und eventuelle Problemstellen und erstellen ein verbindliches Festpreisangebot — kein Stundenlohn." },
          { step: "3", title: "Vorbereitung & Schutz", desc: "Böden, Heizkörper und verbleibende Möbel werden mit Schutzfolie abgedeckt, Steckdosen und Lichtschalter gesichert. Erst dann beginnen wir." },
          { step: "4", title: "Professionelles Entfernen & Entsorgung", desc: "Mit Dampfgerät, Spachtel und bewährter Technik entfernen wir alle Tapeten und Klebereste, bis die Wand sauber und glatt ist. Alles wird anschließend ordnungsgemäß entsorgt." },
        ],
        faqs: [
          { question: "Können Sie auch mehrere Lagen Tapete übereinander entfernen?", answer: "Ja, das ist unser Spezialgebiet. Auch bei 3 oder 4 Lagen übereinander, hartnäckigen Leimresten oder beschichteten Tapeten haben wir die richtigen Methoden und Geräte." },
          { question: "Was passiert, wenn die Wand darunter beschädigt ist?", answer: "Wir informieren Sie sofort, wenn wir Beschädigungen am Unterputz, fehlende Putzstellen oder Risse entdecken. Auf Wunsch können wir kleinere Wandreparaturen oder das Grundieren mit einkalkulieren." },
          { question: "Müssen wir Möbel ausräumen?", answer: "Idealerweise ja — für einen reibungslosen Ablauf empfehlen wir leere Räume. Wenn das nicht möglich ist, schützen wir verbleibende Möbel sorgfältig mit Folien und Decken." },
          { question: "Entsorgen Sie die alten Tapeten?", answer: "Ja, alle Tapeten, Kleberreste und Verpackungen werden von uns ordnungsgemäß entsorgt. Sie müssen sich um nichts kümmern — keine Fahrten zur Deponie, kein zusätzlicher Sperrmüll." },
          { question: "Kann ich danach direkt streichen?", answer: "Nicht immer sofort — die Wände müssen nach dem Tapeten entfernen ggf. 24–48 Stunden trocknen. Danach empfehlen wir Grundierung vor dem Streichen. Wir beraten Sie, was als nächstes zu tun ist." },
          { question: "Können Sie auch Raufaser entfernen?", answer: "Ja, Raufaser ist einer der häufigsten Fälle. Je nach Untergrund und Kleister kann das aufwändig sein — aber mit Dampf und der richtigen Technik lösen wir auch hartnäckige Raufaser sauber ab." },
          { question: "Was kostet Tapeten entfernen pro Quadratmeter?", answer: "In der Regel 4–10 € pro m² je nach Tapetentyp, Lagenzahl und Wandzustand. Für eine 3-Zimmer-Wohnung mit 80–120 m² Wandfläche liegen die Kosten typischerweise bei 400–900 €. Wir erstellen ein verbindliches Festpreisangebot." },
          { question: "Kombinieren Sie Tapeten entfernen mit Renovierungsservice?", answer: "Ja, das ist besonders beliebt: Tapeten entfernen, Wände spachteln und grundieren, neu streichen oder tapezieren — alles aus einer Hand. Spart Koordinationsaufwand und oft auch Kosten." },
        ],
        priceHint: "Der Preis richtet sich nach der Anzahl der Räume, den Quadratmetern Wandfläche und der Tapetenart. Wir erstellen ein transparentes Festpreisangebot nach kostenloser Besichtigung — kein Stundenlohn, keine Überraschungen.",
        pricingRows: [
          { label: "1 Zimmer (bis 20 m² Wandfläche)", price: "ab 149 €", note: "Festpreis" },
          { label: "2–3 Zimmer (bis 60 m² Wandfläche)", price: "ab 349 €", note: "Festpreis" },
          { label: "Komplette Wohnung (4 Zimmer+)", price: "ab 549 €", note: "Festpreis" },
          { label: "Schwierige Tapeten (mehrlagig, Vinyl)", price: "+50–150 €", note: "Aufpreis" },
          { label: "Danach Wände grundieren + glätten", price: "+99 €", note: "je Zimmer" },
        ],
        reviews: [
          { text: "Tapeten in 3 Zimmern in einem Tag entfernt — gründlich, kein Schaden an den Wänden. Festpreis gehalten. Klasse Arbeit!", name: "Helmut B." },
          { text: "Mehrlagige Tapeten aus den 80ern — das Team hat das ohne Probleme erledigt. Fair berechnet, super Ergebnis.", name: "Hannelore M." },
          { text: "Tapeten entfernt und Wände geglättet — ready für Neubezug. Schnell und professionell. Sehr empfehlenswert!", name: "Oliver K." },
        ],
        relatedLinks: [
          { label: "Renovierungsservice", href: "/renovierungsservice" },
          { label: "Grundreinigung", href: "/grundreinigung" },
          { label: "Gebäudereinigung", href: "/gebaeudereinigung" },
          { label: "Haushaltsauflösung", href: "/haushaltsaufloesung" },
          { label: "Alle Leistungen", href: "/leistungen" },
        ],
      }}
    />
  );
}
