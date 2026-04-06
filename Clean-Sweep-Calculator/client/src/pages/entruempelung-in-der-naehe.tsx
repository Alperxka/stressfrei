import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageLayout, PageHero, CTASection, InternalLinksSection } from "@/components/layout";
import { motion } from "framer-motion";
import {
  Star,
  Phone,
  Armchair,
  ClipboardList,
  Recycle,
  MapPin,
  Mail,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const benefits = [
  {
    icon: Armchair,
    title: "Rücken schonen",
    description:
      "Überlassen Sie das schwere Heben unseren erfahrenen Mitarbeitern. Wir entrümpeln alles, was Sie loswerden wollen.",
  },
  {
    icon: ClipboardList,
    title: "Planung überlassen",
    description:
      "Wir organisieren und planen Ihre Entrümpelung von A bis Z. Sie müssen sich um nichts kümmern.",
  },
  {
    icon: Recycle,
    title: "Fachgerechte Entsorgung",
    description:
      "Wir entsorgen den gesamten Ballast fachgerecht. Neben Sperrmüll auch Sondermüll und viele Schadstoffarten.",
  },
];

const serviceAreas = [
  "Bergheim",
  "Bedburg",
  "Kerpen",
  "Elsdorf",
  "Pulheim",
  "Frechen",
  "Hürth",
  "Erftstadt",
  "Rommerskirchen",
  "Köln",
  "Düsseldorf",
  "Aachen",
  "Bonn",
  "Leverkusen",
];

const reviews = [
  {
    name: "M. Meinke",
    text: "Schnell einen Termin bekommen, pünktlich, freundlich und unkompliziert wurde meine Garage und mein Keller geräumt. Schränke wurden demontiert, besenrein hinterlassen.",
  },
  {
    name: "Klarabella",
    text: "Ganz toller Service, Terminvergabe schnell und unkompliziert per WhatsApp, sehr sympathisches Team, haben alles mitgenommen und richtig gut gearbeitet.",
  },
  {
    name: "Katy S.",
    text: "Super Entrümpelungsteam! Sie kamen pünktlich, waren höflich und haben die Arbeit effizient erledigt. Ich kann diesen Entrümpelungsservice nur weiterempfehlen.",
  },
];

export default function EntruempelungInDerNaehePage() {
  useEffect(() => {
    document.title = "Entrümpelung in der Nähe | Stressfrei Entrümpelungen Rhein-Erft-Kreis";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/entruempelung-in-der-naehe");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/entruempelung-in-der-naehe");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/professionelle-entruempelung-service-rhein-erft-kreis.webp");
    _setOgMeta("og:locale", "de_DE");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Suchen Sie eine Entrümpelung in Ihrer Nähe? Wir sind im gesamten Rhein-Erft-Kreis und NRW für Sie im Einsatz. Kurze Anfahrt, faire Preise, schnelle Termine.");
    }
  }, []);

  return (
    <PageLayout>
      <PageHero
        title="Entrümpelung in der Nähe"
        subtitle="Suchen Sie eine professionelle Entrümpelung in Ihrer Nähe? Wir sind im gesamten Rhein-Erft-Kreis und NRW für Sie da."
        highlight="In der Nähe"
      />

      <section className="pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <img
              src="/images/professionelle-entruempelung-service-rhein-erft-kreis.webp"
              alt="Entrümpelung in der Nähe – lokaler Entrümpelungsservice im Rhein-Erft-Kreis"
              className="w-full rounded-2xl shadow-lg object-cover aspect-[16/9]"
              width={1200}
              height={675}
              loading="eager"
              fetchpriority="high"
              decoding="async"
              data-testid="img-service-hero"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-benefits-title">
              Ihre Entrümpelung vor Ort
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Egal wo Sie sich im Rhein-Erft-Kreis oder in NRW befinden - wir kommen zu Ihnen und
              kümmern uns um Ihre Entrümpelung. Schnell, zuverlässig und zu fairen Preisen.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div key={b.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <Card className="p-6 h-full hover-elevate">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-benefit-${i}`}>
                      {b.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-contact-title">
              Kontaktieren Sie uns
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Rufen Sie uns an oder schreiben Sie uns eine E-Mail. Wir erstellen Ihnen schnell und
              unkompliziert ein kostenloses Angebot für Ihre Entrümpelung.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0 }}>
              <Card className="p-6 h-full hover-elevate" data-testid="card-contact-phone">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                    <p className="text-sm text-muted-foreground mb-4">Mo-Sa 8:00-19:00 Uhr</p>
                    <a href="tel:+4922715880940" data-testid="link-contact-phone">
                      <Button data-testid="button-contact-phone">
                        <Phone className="w-3.5 h-3.5 mr-1.5" />
                        02271 / 5880940
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
              <Card className="p-6 h-full hover-elevate" data-testid="card-contact-email">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">E-Mail</h3>
                    <p className="text-sm text-muted-foreground mb-4">Antwort innerhalb von 24h</p>
                    <a href="mailto:info@stressfreientruempelungen.de" data-testid="link-contact-email">
                      <Button variant="outline" data-testid="button-contact-email">
                        <Mail className="w-3.5 h-3.5 mr-1.5" />
                        E-Mail schreiben
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-areas-title">
              Unsere Einsatzgebiete
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Wir sind im gesamten Rhein-Erft-Kreis und darüber hinaus für Sie da.
            </p>
          </motion.div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {serviceAreas.map((area, i) => (
              <motion.div key={area} {...fadeIn} transition={{ duration: 0.3, delay: i * 0.03 }}>
                <Card className="px-4 py-2.5 flex items-center gap-2" data-testid={`card-area-${i}`}>
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{area}</span>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-reviews-title">
              Unsere zufriedenen Kunden
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-current" />
              ))}
            </div>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-5">
            {reviews.map((review, i) => (
              <motion.div key={review.name} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Card className="p-5 h-full" data-testid={`card-review-${i}`}>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{review.text}"</p>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-semibold text-primary">{review.name.charAt(0)}</span>
                      </div>
                      <span className="text-sm font-medium text-foreground">{review.name}</span>
                    </div>
                    <img loading="lazy" src="/images/google-icon.svg" alt="Google" width="20" height="20" className="w-5 h-5" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <InternalLinksSection pageKey="entruempelung-in-der-naehe" />
      <CTASection />
    </PageLayout>
  );
}