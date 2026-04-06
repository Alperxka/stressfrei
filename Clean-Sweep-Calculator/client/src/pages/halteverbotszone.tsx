import ServiceDetailPage from "@/components/service-detail-page";
import { MapPin, Clock, Shield, CheckCircle2, FileText, Truck, Star, AlertTriangle } from "lucide-react";

export default function HalteverbotszoneePage() {
  return (
    <ServiceDetailPage
      data={{
        slug: "halteverbotszone",
        pageName: "Halteverbotszone",
        badge: "Umzug-Zusatzleistung",
        title: "Halteverbotszone einrichten — Wir erledigen alles für Sie",
        subtitle: "Wir beantragen die Halteverbotszone für Ihren Umzugstag offiziell beim zuständigen Straßenverkehrsamt, stellen die Schilder auf und räumen sie danach wieder weg. Im Rhein-Erft-Kreis und NRW.",
        heroImage: "/images/services/halteverbotszone.webp",
        heroImageAlt: "Halteverbotszone-Schilder auf einer deutschen Stadtstraße vor einem Umzugswagen",
        metaDescription: "Halteverbotszone Umzug Rhein-Erft-Kreis ✓ Offiziell beantragt ✓ Schilder inklusive ✓ Beide Adressen möglich ✓ Behördengang erledigt ✓ Festpreis ☎ 02271 / 5880940",
        intro: "Ein Umzug ohne freie Parkplätze direkt vor der Haustür kostet Zeit, Nerven und bares Geld — jede Minute, die der Umzugswagen nicht direkt vor der Tür parken kann, verlängert den Umzug und erhöht den Preis. Damit Ihr Umzugswagen genau dort parken kann, wo er gebraucht wird, beantragen wir für Sie rechtzeitig eine offizielle Halteverbotszone beim zuständigen Straßenverkehrsamt — in Bergheim, Kerpen, Pulheim, Frechen, Hürth, Brühl, Erftstadt, Grevenbroich und dem gesamten Rhein-Erft-Kreis. Wir stellen die Schilder rechtzeitig vor dem Umzugstag auf, kontrollieren die Einhaltung und holen die Schilder nach dem Umzug wieder ab. Sie müssen sich um nichts kümmern.",
        benefits: [
          { icon: FileText, title: "Behördengang komplett erledigt", desc: "Wir stellen den offiziellen Antrag beim zuständigen Straßenverkehrsamt — mit allen erforderlichen Angaben, Genehmigungen und Fristen. Sie müssen keinen einzigen Behördengang machen." },
          { icon: Clock, title: "Rechtzeitig und fristgerecht", desc: "Anträge müssen oft 5–10 Werktage im Voraus gestellt werden. Wir kümmern uns darum, dass die Genehmigung rechtzeitig vor Ihrem Umzugstag vorliegt." },
          { icon: MapPin, title: "Schilder inklusive — aufstellen & abholen", desc: "Wir liefern die offiziellen Halteverbot-Schilder, stellen sie an der richtigen Stelle auf und holen sie nach dem Umzug zuverlässig wieder ab. Komplett-Service." },
          { icon: Truck, title: "Für alte & neue Adresse", desc: "Ob an der alten Adresse, der neuen oder an beiden — wir richten die Halteverbotszone dort ein, wo Ihr Umzugswagen steht. Auch für mehrere Fahrzeuge." },
          { icon: AlertTriangle, title: "Rechtssichere Grundlage", desc: "Mit offizieller Genehmigung sind Sie rechtlich abgesichert. Falsch geparkte Fahrzeuge können kostenpflichtig abgeschleppt werden — Sie haben das Recht auf Ihren Stellplatz." },
          { icon: Shield, title: "Stressfreier Umzugstag garantiert", desc: "Kein Suchen nach Parklücken, kein Blockieren von Zufahrten, keine Mehrkosten durch längere Wege — Ihr Umzugsfahrzeug steht genau da, wo es gebraucht wird." },
        ],
        ablauf: [
          { step: "1", title: "Adresse, Datum & Länge mitteilen", desc: "Teilen Sie uns Start- und/oder Zieladresse, den geplanten Umzugstag und die benötigte Länge des Halteverbots mit. Wir prüfen die Zuständigkeit und den Zeitplan." },
          { step: "2", title: "Antrag beim Straßenverkehrsamt", desc: "Wir stellen rechtzeitig den offiziellen Antrag beim zuständigen Straßenverkehrsamt des Rhein-Erft-Kreises oder der Stadt Köln und koordinieren alle Formalitäten." },
          { step: "3", title: "Genehmigung erhalten & bestätigen", desc: "Nach Erhalt der Genehmigung informieren wir Sie und bestätigen die genehmigte Halteverbotszone. Sie wissen exakt, wo und für wie lange der Platz frei ist." },
          { step: "4", title: "Schilder aufstellen & nach Umzug abholen", desc: "Wir stellen die Schilder mindestens einen Tag vor dem Umzug auf und holen sie am Tag nach dem Umzug zuverlässig wieder ab. Alles ist erledigt." },
        ],
        faqs: [
          { question: "Wie lange im Voraus muss die Halteverbotszone beantragt werden?", answer: "In der Regel 5–10 Werktage vor dem Umzugstag. Je nach Gemeinde und Auslastung der Behörde kann es auch etwas länger dauern. Deshalb sollten Sie so früh wie möglich anfragen — wir kümmern uns sofort." },
          { question: "Was kostet die Halteverbotszone?", answer: "Die Gebühren bestehen aus der behördlichen Genehmigungsgebühr (je nach Gemeinde 25–100 €) und unserer Dienstleistungsgebühr für Antrag, Aufstellen und Abholen der Schilder. Wir nennen Ihnen die Gesamtkosten transparent vorab." },
          { question: "Können Sie die Zone für beide Adressen einrichten?", answer: "Ja, wenn Start- und Zieladresse in unserem Tätigkeitsgebiet liegen, richten wir die Halteverbotszone an beiden Adressen ein — in der Regel zu vergünstigten Gesamtkonditionen." },
          { question: "Was passiert, wenn trotzdem jemand in der Halteverbotszone parkt?", answer: "Mit einer offiziellen Genehmigung haben Sie das Recht, die Polizei oder ein Abschleppunternehmen zu rufen. Wir unterstützen Sie dabei, falls nötig, und erklären Ihnen vorab, was Sie in diesem Fall tun können." },
          { question: "Ist die Halteverbotszone im Umzugspreis enthalten?", answer: "Die Halteverbotszone ist eine optionale Zusatzleistung. Wir nennen Ihnen die Kosten transparent im Vorfeld — keine Überraschungen." },
          { question: "Können Sie auch eine Halteverbotszone für mehrere Tage einrichten?", answer: "Ja, bei mehrtägigen Umzügen oder wenn Sie mehr Zeit für Be- und Entladen brauchen, beantragen wir die Halteverbotszone für den gesamten benötigten Zeitraum." },
          { question: "Wie lang muss die Halteverbotszone sein?", answer: "Das hängt von der Fahrzeuggröße ab. Für einen 7,5-Tonner empfehlen wir mindestens 12–15 Meter. Für mehrere Fahrzeuge entsprechend mehr. Wir beraten Sie, was in Ihrer Situation sinnvoll ist." },
          { question: "Können Sie auch in Köln oder Düsseldorf eine Halteverbotszone einrichten?", answer: "Ja, wir sind nicht auf den Rhein-Erft-Kreis beschränkt. Auch in Köln, Leverkusen, Düsseldorf und anderen Städten in NRW können wir Halteverbotszonen beantragen und organisieren." },
        ],
        priceHint: "Die Kosten umfassen unsere Dienstleistungsgebühr sowie die behördliche Genehmigungsgebühr. Wir informieren Sie vorab über alle anfallenden Kosten — transparent, fair und ohne versteckte Gebühren.",
        pricingRows: [
          { label: "Halteverbotszone (bis 10 m)", price: "ab 99 €", note: "inkl. Genehmigung" },
          { label: "Halteverbotszone (10–30 m)", price: "ab 149 €", note: "inkl. Genehmigung" },
          { label: "Halteverbotszone (über 30 m)", price: "auf Anfrage", note: "individuelle Kalkulation" },
          { label: "Express-Beantragung (24h)", price: "+39 €", note: "je nach Behörde" },
        ],
        reviews: [
          { text: "Halteverbotszone für Umzug in 2 Tagen beantragt und aufgebaut — alles reibungslos, kein einziges fremdes Auto im Weg. Toller Service!", name: "Michael T." },
          { text: "Super unkompliziert — einfach anrufen, alles wurde erledigt. Umzugswagen stand direkt vor der Tür. Empfehlenswert!", name: "Birgit H." },
          { text: "Schnelle Genehmigung trotz kurzer Vorlaufzeit. Faire Preise, professionelle Abwicklung. Gerne wieder!", name: "Stefan W." },
        ],
        relatedLinks: [
          { label: "Privatumzug", href: "/privatumzug" },
          { label: "Umzugstransport", href: "/umzugstransport" },
          { label: "Außenlifteinsatz", href: "/aussenlifteinsatz" },
          { label: "Umzug", href: "/umzug" },
          { label: "Alle Leistungen", href: "/leistungen" },
        ],
      }}
    />
  );
}
