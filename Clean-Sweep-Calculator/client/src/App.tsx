import { Switch, Route, useLocation, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense, useEffect } from "react";
import { CookieBanner } from "@/components/cookie-banner";

const Toaster = lazy(() =>
  import("@/components/ui/toaster").then((m) => ({ default: m.Toaster }))
);

function ScrollToTopOnNav() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location]);
  return null;
}

const HomePage = lazy(() => import("@/pages/home"));
const NotFound = lazy(() => import("@/pages/not-found"));
const HaushaltsaufloesungCityPage = lazy(() => import("@/pages/haushaltsaufloesung-city"));
const WohnungsaufloesungCityPage = lazy(() => import("@/pages/wohnungsaufloesung-city"));
const KellerentruempelungCityPage = lazy(() => import("@/pages/kellerentruempelung-city"));

const EntruempelungPage = lazy(() => import("@/pages/entruempelung"));
const HaushaltsaufloesungPage = lazy(() => import("@/pages/haushaltsaufloesung"));
const UmzugPage = lazy(() => import("@/pages/umzug"));
const FirmenaufloesungPage = lazy(() => import("@/pages/firmenaufloesung"));
const BetriebsaufloesungPage = lazy(() => import("@/pages/betriebsaufloesung"));
const WohnungsaufloesungPage = lazy(() => import("@/pages/wohnungsaufloesung"));
const MessieWohnungPage = lazy(() => import("@/pages/messie-wohnung"));
const GaleriePage = lazy(() => import("@/pages/galerie"));
const NachlassaufloesungPage = lazy(() => import("@/pages/nachlassaufloesung"));
const RueckrufPage = lazy(() => import("@/pages/rueckruf"));
const EntruempelungInDerNaehePage = lazy(() => import("@/pages/entruempelung-in-der-naehe"));
const SeniorenumzugPage = lazy(() => import("@/pages/seniorenumzug"));
const BueroumzugPage = lazy(() => import("@/pages/bueroumzug"));
const PrivatumzugPage = lazy(() => import("@/pages/privatumzug"));
const FirmenumzugPage = lazy(() => import("@/pages/firmenumzug"));
const GewerbeumzugPage = lazy(() => import("@/pages/gewerbeumzug"));
const BehoerdenumzugPage = lazy(() => import("@/pages/behoerdenumzug"));
const ArchivumzugPage = lazy(() => import("@/pages/archivumzug"));
const FernumzugPage = lazy(() => import("@/pages/fernumzug"));
const EinlagerungPage = lazy(() => import("@/pages/einlagerung"));
const FAQPage = lazy(() => import("@/pages/faq"));
const UeberUnsPage = lazy(() => import("@/pages/ueber-uns"));
const StandortePage = lazy(() => import("@/pages/standorte"));
const RatgeberPage = lazy(() => import("@/pages/ratgeber"));

const BergheimPage = lazy(() => import("@/pages/locations/bergheim"));
const BedburgPage = lazy(() => import("@/pages/locations/bedburg"));
const KerpenPage = lazy(() => import("@/pages/locations/kerpen"));
const ElsdorfPage = lazy(() => import("@/pages/locations/elsdorf"));
const PulheimPage = lazy(() => import("@/pages/locations/pulheim"));
const FrechenPage = lazy(() => import("@/pages/locations/frechen"));
const HuerthPage = lazy(() => import("@/pages/locations/huerth"));
const ErftstadtPage = lazy(() => import("@/pages/locations/erftstadt"));
const RommerskirchenPage = lazy(() => import("@/pages/locations/rommerskirchen"));
const RheinErftKreisPage = lazy(() => import("@/pages/locations/rhein-erft-kreis"));
const GrevenbroichPage = lazy(() => import("@/pages/locations/grevenbroich"));
const BruehlPage = lazy(() => import("@/pages/locations/bruehl"));
const WesselingPage = lazy(() => import("@/pages/locations/wesseling"));

const UmzugRheinErftKreisPage = lazy(() => import("@/pages/moving/rhein-erft-kreis"));
const UmzugBergheimPage = lazy(() => import("@/pages/moving/bergheim"));
const UmzugBedburgPage = lazy(() => import("@/pages/moving/bedburg"));
const UmzugKerpenPage = lazy(() => import("@/pages/moving/kerpen"));
const UmzugElsdorfPage = lazy(() => import("@/pages/moving/elsdorf"));
const UmzugPulheimPage = lazy(() => import("@/pages/moving/pulheim"));
const UmzugFrechenPage = lazy(() => import("@/pages/moving/frechen"));
const UmzugHuerthPage = lazy(() => import("@/pages/moving/huerth"));
const UmzugErftstadtPage = lazy(() => import("@/pages/moving/erftstadt"));
const UmzugRommerskirchenPage = lazy(() => import("@/pages/moving/rommerskirchen"));
const UmzugGrevenbroichPage = lazy(() => import("@/pages/moving/grevenbroich"));
const UmzugKoelnPage = lazy(() => import("@/pages/moving/koeln"));
const UmzugDuesseldorfPage = lazy(() => import("@/pages/moving/duesseldorf"));
const UmzugAachenPage = lazy(() => import("@/pages/moving/aachen"));

const KellerentruempelungPage = lazy(() => import("@/pages/kellerentruempelung"));
const SchrottankaufPage = lazy(() => import("@/pages/schrottankauf"));
const TerminplanerPage = lazy(() => import("@/pages/terminplaner"));
const LeistungenPage = lazy(() => import("@/pages/leistungen"));

const EinpackservicePage = lazy(() => import("@/pages/einpackservice"));
const AuspackservicePage = lazy(() => import("@/pages/auspackservice"));
const MoebelmontagedienstPage = lazy(() => import("@/pages/moebelmontagedienst"));
const UmzugstransportPage = lazy(() => import("@/pages/umzugstransport"));
const HalteverbotszoneePage = lazy(() => import("@/pages/halteverbotszone"));
const SchwerlasttransportPage = lazy(() => import("@/pages/schwerlasttransport"));
const AussenlifteinsatzPage = lazy(() => import("@/pages/aussenlifteinsatz"));
const TapetenEntfernenPage = lazy(() => import("@/pages/tapeten-entfernen"));
const GrundreinigungPage = lazy(() => import("@/pages/grundreinigung"));
const GebaeudereinigungPage = lazy(() => import("@/pages/gebaeudereinigung"));
const RenovierungsservicePage = lazy(() => import("@/pages/renovierungsservice"));

const BlogPflegekassePage = lazy(() => import("@/pages/blog/pflegekasse"));
const BlogPreisePage = lazy(() => import("@/pages/blog/preise-rhein-erft-kreis"));
const BlogMissverstaendnissePage = lazy(() => import("@/pages/blog/missverstaendnisse"));
const BlogEntruempelungsfirmaPage = lazy(() => import("@/pages/blog/entruempelungsfirma"));
const BlogEntruempelungstippsPage = lazy(() => import("@/pages/blog/entruempelungstipps"));
const BlogWasKostetSperrmuellPage = lazy(() => import("@/pages/blog/was-kostet-sperrmuell"));
const BlogWertanrechnungPage = lazy(() => import("@/pages/blog/wertanrechnung"));
const BlogUmzugschecklistePage = lazy(() => import("@/pages/blog/umzugscheckliste"));
const BlogEntruempelungNachTodesfallPage = lazy(() => import("@/pages/blog/entruempelung-nach-todesfall"));
const BlogEntsorgungsGuidePage = lazy(() => import("@/pages/blog/entsorgungsguide"));
const BlogUmzugshelferTippsPage = lazy(() => import("@/pages/blog/umzugshelfer-tipps"));
const BlogHaushaltsaufloesungVorbereitenPage = lazy(() => import("@/pages/blog/haushaltsaufloesung-vorbereiten"));
const BlogMessieEntruempelungPage = lazy(() => import("@/pages/blog/messie-entruempelung"));
const BlogSperrmullRheinErftPage = lazy(() => import("@/pages/blog/sperrmull-rhein-erft"));
const BlogHaushaltsaufloesungChecklistePage = lazy(() => import("@/pages/blog/haushaltsaufloesung-checkliste"));
const BlogWohnungsaufloesungSelbstOderFirmaPage = lazy(() => import("@/pages/blog/wohnungsaufloesung-selbst-oder-firma"));
const BlogHaushaltsaufloesungBeiTrennungPage = lazy(() => import("@/pages/blog/haushaltsaufloesung-bei-trennung"));
const BlogUmzugskostenRheinErftPage = lazy(() => import("@/pages/blog/umzugskosten-rhein-erft-kreis"));
const BlogKuecheEntruempelnPage = lazy(() => import("@/pages/blog/kueche-entruempeln"));
const BlogWohnungsuebergabePage = lazy(() => import("@/pages/blog/wohnungsuebergabe-nach-haushaltsaufloesung"));
const BlogSeniorenUmzugNrwPage = lazy(() => import("@/pages/blog/senioren-umzug-nrw"));
const BlogWasGehoertZumSperrmuellPage = lazy(() => import("@/pages/blog/was-gehoert-zum-sperrmuell"));
const BlogSachenVerkaufenPage = lazy(() => import("@/pages/blog/sachen-aus-haushaltsaufloesung-verkaufen"));
const BlogGruenschnittEntsorgenPage = lazy(() => import("@/pages/blog/gruenschnitt-entsorgen-kosten"));
const BlogUpcyclingPage = lazy(() => import("@/pages/blog/upcycling-nach-entruempelung"));
const BlogUmzugstransporterBeladenPage = lazy(() => import("@/pages/blog/umzugstransporter-beladen"));
const BlogHaushaltsaufloesungKosten2026Page = lazy(() => import("@/pages/blog/haushaltsaufloesung-kosten-2026"));
const KostenEntruempelungPage = lazy(() => import("@/pages/kosten-entruempelung"));
const KostenUmzugPage = lazy(() => import("@/pages/kosten-umzug"));
const ImpressumPage = lazy(() => import("@/pages/impressum"));
const AGBPage = lazy(() => import("@/pages/agb"));
const DatenschutzPage = lazy(() => import("@/pages/datenschutz"));
const KontaktPage = lazy(() => import("@/pages/kontakt"));
const StadtteilEntruempelungPage = lazy(() => import("@/pages/stadtteil-entruempelung"));
const StadtteilUmzugPage = lazy(() => import("@/pages/stadtteil-umzug"));

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" component={HomePage} />

        <Route path="/entruempelung" component={EntruempelungPage} />
        <Route path="/haushaltsaufloesung" component={HaushaltsaufloesungPage} />
        <Route path="/umzug" component={UmzugPage} />
        <Route path="/firmenaufloesung" component={FirmenaufloesungPage} />
        <Route path="/betriebsaufloesung" component={BetriebsaufloesungPage} />
        <Route path="/wohnungsaufloesung" component={WohnungsaufloesungPage} />
        <Route path="/messie-wohnung" component={MessieWohnungPage} />
        <Route path="/galerie" component={GaleriePage} />
        <Route path="/nachlassaufloesung" component={NachlassaufloesungPage} />
        <Route path="/rueckruf" component={RueckrufPage} />
        <Route path="/entruempelung-in-der-naehe" component={EntruempelungInDerNaehePage} />
        <Route path="/kellerentruempelung" component={KellerentruempelungPage} />

        <Route path="/seniorenumzug" component={SeniorenumzugPage} />
        <Route path="/bueroumzug" component={BueroumzugPage} />
        <Route path="/privatumzug" component={PrivatumzugPage} />
        <Route path="/firmenumzug" component={FirmenumzugPage} />
        <Route path="/gewerbeumzug" component={GewerbeumzugPage} />
        <Route path="/behoerdenumzug" component={BehoerdenumzugPage} />
        <Route path="/archivumzug" component={ArchivumzugPage} />
        <Route path="/fernumzug" component={FernumzugPage} />
        <Route path="/einlagerung-rhein-erft-kreis" component={EinlagerungPage} />

        <Route path="/faq" component={FAQPage} />
        <Route path="/stressfrei-entruempelungen-umzuege-2" component={UeberUnsPage} />
        <Route path="/ueber-uns" component={UeberUnsPage} />
        <Route path="/standorte-und-einzugsgebiete" component={StandortePage} />
        <Route path="/standorte" component={StandortePage} />
        <Route path="/ratgeber-und-tipps" component={RatgeberPage} />
        <Route path="/ratgeber" component={RatgeberPage} />

        <Route path="/schrottankauf" component={SchrottankaufPage} />
        <Route path="/terminplaner" component={TerminplanerPage} />
        <Route path="/leistungen" component={LeistungenPage} />

        <Route path="/einpackservice" component={EinpackservicePage} />
        <Route path="/auspackservice" component={AuspackservicePage} />
        <Route path="/moebelmontagedienst" component={MoebelmontagedienstPage} />
        <Route path="/umzugstransport" component={UmzugstransportPage} />
        <Route path="/halteverbotszone" component={HalteverbotszoneePage} />
        <Route path="/schwerlasttransport" component={SchwerlasttransportPage} />
        <Route path="/aussenlifteinsatz" component={AussenlifteinsatzPage} />
        <Route path="/tapeten-entfernen" component={TapetenEntfernenPage} />
        <Route path="/grundreinigung" component={GrundreinigungPage} />
        <Route path="/gebaeudereinigung" component={GebaeudereinigungPage} />
        <Route path="/renovierungsservice" component={RenovierungsservicePage} />

        <Route path="/entruempelung-bergheim" component={BergheimPage} />
        <Route path="/entruempelung-bedburg" component={BedburgPage} />
        <Route path="/entruempelung-kerpen" component={KerpenPage} />
        <Route path="/entruempelung-elsdorf" component={ElsdorfPage} />
        <Route path="/entruempelung-pulheim" component={PulheimPage} />
        <Route path="/entruempelung-frechen" component={FrechenPage} />
        <Route path="/entruempelung-huerth" component={HuerthPage} />
        <Route path="/entruempelung-erftstadt" component={ErftstadtPage} />
        <Route path="/entruempelung-rommerskirchen" component={RommerskirchenPage} />
        <Route path="/entruempelung-grevenbroich" component={GrevenbroichPage} />
        <Route path="/entruempelung-bruehl" component={BruehlPage} />
        <Route path="/entruempelung-wesseling" component={WesselingPage} />
        <Route path="/entruempelung-rhein-erft-kreis" component={RheinErftKreisPage} />

        <Route path="/umzugsunternehmen-rhein-erft-kreis" component={UmzugRheinErftKreisPage} />
        <Route path="/umzugsunternehmen-bergheim" component={UmzugBergheimPage} />
        <Route path="/umzugsunternehmen-bedburg" component={UmzugBedburgPage} />
        <Route path="/umzugsunternehmen-kerpen" component={UmzugKerpenPage} />
        <Route path="/umzugsunternehmen-elsdorf" component={UmzugElsdorfPage} />
        <Route path="/umzugsunternehmen-pulheim" component={UmzugPulheimPage} />
        <Route path="/umzugsunternehmen-frechen" component={UmzugFrechenPage} />
        <Route path="/umzugsunternehmen-huerth" component={UmzugHuerthPage} />
        <Route path="/umzugsunternehmen-erftstadt" component={UmzugErftstadtPage} />
        <Route path="/umzugsunternehmen-rommerskirchen" component={UmzugRommerskirchenPage} />
        <Route path="/umzugsunternehmen-grevenbroich" component={UmzugGrevenbroichPage} />
        <Route path="/umzugsunternehmen-koeln" component={UmzugKoelnPage} />
        <Route path="/umzugsunternehmen-duesseldorf" component={UmzugDuesseldorfPage} />
        <Route path="/umzugsunternehmen-aachen" component={UmzugAachenPage} />

        <Route path="/umzugsunternehmen-:stadtteil" component={StadtteilUmzugPage} />

        <Route path="/kerpen">{() => <Redirect to="/entruempelung-kerpen" />}</Route>
        <Route path="/elsdorf">{() => <Redirect to="/entruempelung-elsdorf" />}</Route>
        <Route path="/pulheim">{() => <Redirect to="/entruempelung-pulheim" />}</Route>
        <Route path="/frechen">{() => <Redirect to="/entruempelung-frechen" />}</Route>
        <Route path="/huerth">{() => <Redirect to="/entruempelung-huerth" />}</Route>
        <Route path="/erftstadt">{() => <Redirect to="/entruempelung-erftstadt" />}</Route>
        <Route path="/rommerskirchen">{() => <Redirect to="/entruempelung-rommerskirchen" />}</Route>

        <Route path="/kostenuebernahme-durch-die-pflegekasse-bei-entruempelung-und-umzug-fuer-senioren" component={BlogPflegekassePage} />
        <Route path="/entruempelung-rhein-erft-kreis-preise" component={BlogPreisePage} />
        <Route path="/missverstaendnisse-zum-thema-entruempelung" component={BlogMissverstaendnissePage} />
        <Route path="/wie-man-eine-professionelle-entruempelungsfirma-engagiert" component={BlogEntruempelungsfirmaPage} />
        <Route path="/entruempelungstipps" component={BlogEntruempelungstippsPage} />
        <Route path="/was-kostet-sperrmuell" component={BlogWasKostetSperrmuellPage} />
        <Route path="/wertanrechnung-bei-der-entruempelung" component={BlogWertanrechnungPage} />
        <Route path="/umzugscheckliste" component={BlogUmzugschecklistePage} />
        <Route path="/entruempelung-nach-todesfall" component={BlogEntruempelungNachTodesfallPage} />
        <Route path="/entsorgungsguide" component={BlogEntsorgungsGuidePage} />
        <Route path="/umzugshelfer-tipps" component={BlogUmzugshelferTippsPage} />
        <Route path="/haushaltsaufloesung-vorbereiten" component={BlogHaushaltsaufloesungVorbereitenPage} />
        <Route path="/messie-entruempelung-nrw" component={BlogMessieEntruempelungPage} />
        <Route path="/sperrmull-rhein-erft-kreis" component={BlogSperrmullRheinErftPage} />
        <Route path="/haushaltsaufloesung-checkliste" component={BlogHaushaltsaufloesungChecklistePage} />
        <Route path="/wohnungsaufloesung-selbst-oder-firma" component={BlogWohnungsaufloesungSelbstOderFirmaPage} />
        <Route path="/haushaltsaufloesung-bei-trennung" component={BlogHaushaltsaufloesungBeiTrennungPage} />
        <Route path="/umzugskosten-rhein-erft-kreis" component={BlogUmzugskostenRheinErftPage} />
        <Route path="/kueche-entruempeln" component={BlogKuecheEntruempelnPage} />
        <Route path="/wohnungsuebergabe-nach-haushaltsaufloesung" component={BlogWohnungsuebergabePage} />
        <Route path="/senioren-umzug-nrw" component={BlogSeniorenUmzugNrwPage} />
        <Route path="/was-gehoert-zum-sperrmuell" component={BlogWasGehoertZumSperrmuellPage} />
        <Route path="/sachen-aus-haushaltsaufloesung-verkaufen" component={BlogSachenVerkaufenPage} />
        <Route path="/gruenschnitt-entsorgen-kosten" component={BlogGruenschnittEntsorgenPage} />
        <Route path="/upcycling-nach-entruempelung" component={BlogUpcyclingPage} />
        <Route path="/umzugstransporter-beladen" component={BlogUmzugstransporterBeladenPage} />
        <Route path="/haushaltsaufloesung-kosten-2026" component={BlogHaushaltsaufloesungKosten2026Page} />

        <Route path="/kosten-entruempelung" component={KostenEntruempelungPage} />
        <Route path="/kosten-umzug" component={KostenUmzugPage} />
        <Route path="/kontakt" component={KontaktPage} />
        <Route path="/impressum" component={ImpressumPage} />
        <Route path="/agb" component={AGBPage} />
        <Route path="/datenschutz" component={DatenschutzPage} />

        <Route path="/haushaltsaufloesung-bergheim">{() => <HaushaltsaufloesungCityPage city="bergheim" />}</Route>
        <Route path="/haushaltsaufloesung-bedburg">{() => <HaushaltsaufloesungCityPage city="bedburg" />}</Route>
        <Route path="/haushaltsaufloesung-kerpen">{() => <HaushaltsaufloesungCityPage city="kerpen" />}</Route>
        <Route path="/haushaltsaufloesung-elsdorf">{() => <HaushaltsaufloesungCityPage city="elsdorf" />}</Route>
        <Route path="/haushaltsaufloesung-pulheim">{() => <HaushaltsaufloesungCityPage city="pulheim" />}</Route>
        <Route path="/haushaltsaufloesung-frechen">{() => <HaushaltsaufloesungCityPage city="frechen" />}</Route>
        <Route path="/haushaltsaufloesung-huerth">{() => <HaushaltsaufloesungCityPage city="huerth" />}</Route>
        <Route path="/haushaltsaufloesung-erftstadt">{() => <HaushaltsaufloesungCityPage city="erftstadt" />}</Route>
        <Route path="/haushaltsaufloesung-rommerskirchen">{() => <HaushaltsaufloesungCityPage city="rommerskirchen" />}</Route>
        <Route path="/haushaltsaufloesung-grevenbroich">{() => <HaushaltsaufloesungCityPage city="grevenbroich" />}</Route>
        <Route path="/haushaltsaufloesung-bruehl">{() => <HaushaltsaufloesungCityPage city="bruehl" />}</Route>
        <Route path="/haushaltsaufloesung-wesseling">{() => <HaushaltsaufloesungCityPage city="wesseling" />}</Route>

        <Route path="/wohnungsaufloesung-bergheim">{() => <WohnungsaufloesungCityPage city="bergheim" />}</Route>
        <Route path="/wohnungsaufloesung-bedburg">{() => <WohnungsaufloesungCityPage city="bedburg" />}</Route>
        <Route path="/wohnungsaufloesung-kerpen">{() => <WohnungsaufloesungCityPage city="kerpen" />}</Route>
        <Route path="/wohnungsaufloesung-elsdorf">{() => <WohnungsaufloesungCityPage city="elsdorf" />}</Route>
        <Route path="/wohnungsaufloesung-pulheim">{() => <WohnungsaufloesungCityPage city="pulheim" />}</Route>
        <Route path="/wohnungsaufloesung-frechen">{() => <WohnungsaufloesungCityPage city="frechen" />}</Route>
        <Route path="/wohnungsaufloesung-huerth">{() => <WohnungsaufloesungCityPage city="huerth" />}</Route>
        <Route path="/wohnungsaufloesung-erftstadt">{() => <WohnungsaufloesungCityPage city="erftstadt" />}</Route>
        <Route path="/wohnungsaufloesung-rommerskirchen">{() => <WohnungsaufloesungCityPage city="rommerskirchen" />}</Route>
        <Route path="/wohnungsaufloesung-grevenbroich">{() => <WohnungsaufloesungCityPage city="grevenbroich" />}</Route>
        <Route path="/wohnungsaufloesung-bruehl">{() => <WohnungsaufloesungCityPage city="bruehl" />}</Route>
        <Route path="/wohnungsaufloesung-wesseling">{() => <WohnungsaufloesungCityPage city="wesseling" />}</Route>

        <Route path="/kellerentruempelung-bergheim">{() => <KellerentruempelungCityPage city="bergheim" />}</Route>
        <Route path="/kellerentruempelung-bedburg">{() => <KellerentruempelungCityPage city="bedburg" />}</Route>
        <Route path="/kellerentruempelung-kerpen">{() => <KellerentruempelungCityPage city="kerpen" />}</Route>
        <Route path="/kellerentruempelung-elsdorf">{() => <KellerentruempelungCityPage city="elsdorf" />}</Route>
        <Route path="/kellerentruempelung-pulheim">{() => <KellerentruempelungCityPage city="pulheim" />}</Route>
        <Route path="/kellerentruempelung-frechen">{() => <KellerentruempelungCityPage city="frechen" />}</Route>
        <Route path="/kellerentruempelung-huerth">{() => <KellerentruempelungCityPage city="huerth" />}</Route>
        <Route path="/kellerentruempelung-erftstadt">{() => <KellerentruempelungCityPage city="erftstadt" />}</Route>
        <Route path="/kellerentruempelung-rommerskirchen">{() => <KellerentruempelungCityPage city="rommerskirchen" />}</Route>
        <Route path="/kellerentruempelung-grevenbroich">{() => <KellerentruempelungCityPage city="grevenbroich" />}</Route>
        <Route path="/kellerentruempelung-bruehl">{() => <KellerentruempelungCityPage city="bruehl" />}</Route>
        <Route path="/kellerentruempelung-wesseling">{() => <KellerentruempelungCityPage city="wesseling" />}</Route>

        <Route path="/entruempelung-:stadtteil" component={StadtteilEntruempelungPage} />

        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={null}>
        <Toaster />
      </Suspense>
      <ScrollToTopOnNav />
      <CookieBanner />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
