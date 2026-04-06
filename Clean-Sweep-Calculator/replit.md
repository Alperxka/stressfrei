# Stressfrei Entrümpelungen & Umzüge - Website

## Overview
Multi-page website for "Stressfrei Entrümpelungen & Umzüge", a professional decluttering and moving service company in the Rhein-Erft-Kreis / NRW region of Germany. Replicates all pages from the original stressfreientruempelungen.de with a modern design.

## Architecture
- **Frontend only** - No database needed (static pages)
- React + TypeScript with Vite
- Tailwind CSS with shadcn/ui components
- Framer Motion for animations
- wouter for client-side routing (NOTE: regexparam only parses `:params` after `/`, not after `-`. For hyphen-prefixed dynamic URLs like `/haushaltsaufloesung-bergheim`, use explicit static routes with function children)
- Lazy loading for all subpages (React.lazy + Suspense)

## Key Features
- Modern responsive landing page with all company information
- 25+ dedicated subpages for all services, locations, and content
- Interactive Entrümpelungsrechner (cost calculator)
- Interactive Umzugsrechner (moving cost calculator with box count, floor, distance, no-parking zone)
- Kupfer, Kabelschrott & Messing Ankauf section (scrap metal purchase with price cards)
- Contact forms (hero section + dedicated contact section)
- **Lead forms on all city pages** — `LocationLeadForm` component renders twice per city page (top: after intro, bottom: after FAQs); submits to `/api/lead` with formName `stadtseite_top` / `stadtseite_bottom`; fields: name, phone, service dropdown, optional message; success/error/loading states
- Customer reviews / testimonials
- Service comparison sections (Private vs Stressfrei)
- FAQ accordion with 14+ questions
- Dropdown navigation with organized categories
- Mobile-responsive design with scrollable mobile menu

## Pages / Routes

### Main
- `/` - Home (landing page with all sections)

### Entrümpelung Services
- `/entruempelung` - Entrümpelung (decluttering)
- `/haushaltsaufloesung` - Haushaltsauflösung (household dissolution)
- `/wohnungsaufloesung` - Wohnungsauflösung (apartment dissolution)
- `/firmenaufloesung` - Firmenauflösung (company dissolution)
- `/betriebsaufloesung` - Betriebsauflösung (business dissolution, same as Firmen)
- `/messie-wohnung` - Messie-Wohnung (hoarder apartment)
- `/entruempelung-in-der-naehe` - Entrümpelung in der Nähe (nearby)
- `/kosten-entruempelung` - Entrümpelung Kosten & Kostenrechner (price overview + calculator)

### Moving Services
- `/umzug` - Umzüge (moving)
- `/kosten-umzug` - Umzug Kosten & Kostenrechner (price overview + calculator)
- `/seniorenumzug` - Seniorenumzug (senior moving)
- `/bueroumzug` - Büroumzug (office moving)
- `/einlagerung-rhein-erft-kreis` - Einlagerung (storage)

### Zusatzleistungen Umzug (new sub-pages, each with AI hero image)
- `/einpackservice` - Einpackservice
- `/auspackservice` - Auspackservice
- `/moebelmontagedienst` - Möbelmontage & Demontage
- `/umzugstransport` - Anfahrt, Abfahrt & Transport
- `/halteverbotszone` - Halteverbotszone einrichten
- `/schwerlasttransport` - Schwerlasttransport (Pianos, Tresore)
- `/aussenlifteinsatz` - Außenlifteinsatz

### Reinigung & Renovierung (new sub-pages, each with AI hero image)
- `/tapeten-entfernen` - Tapeten entfernen
- `/grundreinigung` - Grundreinigung (Tiefenreinigung)
- `/gebaeudereinigung` - Gebäudereinigung
- `/renovierungsservice` - Leichte Renovierungen

### Content Pages
- `/faq` - FAQ (frequently asked questions)
- `/ueber-uns` or `/stressfrei-entruempelungen-umzuege-2` - About us
- `/standorte` or `/standorte-und-einzugsgebiete` - Locations overview
- `/ratgeber` or `/ratgeber-und-tipps` - Blog / tips
- `/schrottankauf` - Scrap metal purchase (Kupfer, Messing, Kabelschrott)

### Location Pages (SEO-optimized, all `/entruempelung-*` pattern)
- `/entruempelung-bergheim` - Bergheim (Hauptsitz, PLZ 50126-50129)
- `/entruempelung-bedburg` - Bedburg (PLZ 50181)
- `/entruempelung-kerpen` - Kerpen (PLZ 50169-50171)
- `/entruempelung-elsdorf` - Elsdorf (PLZ 50189)
- `/entruempelung-pulheim` - Pulheim (PLZ 50259)
- `/entruempelung-frechen` - Frechen (PLZ 50226)
- `/entruempelung-huerth` - Hürth (PLZ 50354)
- `/entruempelung-erftstadt` - Erftstadt (PLZ 50374)
- `/entruempelung-rommerskirchen` - Rommerskirchen (PLZ 41569)
- `/entruempelung-grevenbroich` - Grevenbroich (PLZ 41515-41517)
- `/entruempelung-rhein-erft-kreis` - Rhein-Erft-Kreis (with pricing table)
- Old URLs (`/kerpen`, `/frechen`, etc.) redirect to canonical `/entruempelung-*` routes

### Moving/Umzug Location Pages (SEO-optimized, `/umzugsunternehmen-*` pattern)
- `/umzugsunternehmen-bergheim` - Umzugsunternehmen Bergheim
- `/umzugsunternehmen-bedburg` - Umzugsunternehmen Bedburg
- `/umzugsunternehmen-kerpen` - Umzugsunternehmen Kerpen
- `/umzugsunternehmen-elsdorf` - Umzugsunternehmen Elsdorf
- `/umzugsunternehmen-pulheim` - Umzugsunternehmen Pulheim
- `/umzugsunternehmen-frechen` - Umzugsunternehmen Frechen
- `/umzugsunternehmen-huerth` - Umzugsunternehmen Hürth
- `/umzugsunternehmen-erftstadt` - Umzugsunternehmen Erftstadt

## File Structure
- `client/src/pages/home.tsx` - Main landing page
- `client/src/pages/*.tsx` - Individual service/content pages
- `client/src/pages/locations/*.tsx` - Entrümpelung location-specific pages
- `client/src/pages/moving/*.tsx` - Umzugsunternehmen location-specific pages
- `client/src/components/service-detail-page.tsx` - Reusable service sub-page template (hero+benefits+ablauf+faq+cta+related links)
- `client/src/components/moving-location-page.tsx` - Reusable moving location page template
- `client/src/components/layout.tsx` - Shared layout (Navbar with dropdowns, Footer, ScrollToTop, PageHero, CTASection, InternalLinksSection)
- `client/src/components/location-page.tsx` - Reusable location page template
- `client/src/components/entruempelungs-rechner.tsx` - Interactive decluttering cost calculator
- `client/src/components/umzugs-rechner.tsx` - Interactive moving cost calculator
- `client/src/pages/schrottankauf.tsx` - Dedicated scrap metal purchase page
- `client/src/App.tsx` - App router with lazy-loaded routes

## Design
- Primary color: Cyan blue (HSL 194 72% 50%) - #24B0DB — original brand color
- Accent color: Orange (HSL 37 100% 50%) - stars and highlights
- Font: Plus Jakarta Sans (font-display:swap, preloaded woff2 latin + latin-ext)
- Clean, modern design with subtle framer-motion animations
- Card-based layout for sections

## Performance Optimizations Applied
- **Brotli/Gzip compression** on Express server (HTML 53→17 kB)
- **Framer Motion** lazy-loaded only where used (not in initial bundle)
- **Toaster (toast notifications)** lazy-loaded via React.lazy — removed from critical path (saves ~16 kB raw JS)
- **react-icons/si removed** from layout.tsx — replaced with inline SVG components (saves ~4 kB from layout chunk)
- **Chunk splitting** in vite.config: vendor-radix-core (tiny: slot+label only, 2kB), vendor-toast (lazy), vendor-radix-ui (lazy, includes tooltip), vendor-query, vendor-motion
- **TooltipProvider removed** from App.tsx — no `<Tooltip>` is used anywhere, saving 57kB gzip from critical path (TBT fix)
- **LCP hero image**: preloaded via `<link rel="preload">` + static `<img fetchpriority="high">` in index.html
- **GTM/GA4** deferred until `window.load` event
- **Critical path JS total**: ~113 kB gzip (was ~120 kB) = ~375 kB raw (was ~395 kB)

## Accessibility Fixes Applied
- All form `htmlFor`/`id` pairs matched
- Mobile menu: `aria-label`, `aria-expanded`, `aria-controls`
- Button `asChild` pattern for nav links (no invalid nesting)
- Slider thumb: `aria-label` forwarded
- Calendar nav buttons: `aria-label`
- Viewport: removed `maximum-scale=1`
- Primary color contrast: 4.59:1 vs white (WCAG AA ✓)

## Running
- `npm run dev` starts the Express backend + Vite frontend on port 5000

## Security
Dependency overrides are pinned in `package.json` for security:
- `minimatch` → 9.0.7 (was 9.0.5)
- `rollup` → 4.59.0 (was 4.53.5)

## SEO Architecture

### Structured Data Schemas (JSON-LD)
- **LocalBusiness** (all pages via layout.tsx): name, address, geo, openingHours, priceRange, aggregateRating, ContactPoint (phone + email), sameAs
- **WebSite** (all pages): name, url, potentialAction (SearchAction)
- **BreadcrumbList** (all pages): dynamic per route via SEO_DATA + BREADCRUMB_NAMES
- **Service** (service pages): name, description, provider, areaServed, serviceType
- **FAQPage** (service pages + faq.tsx): all Q&A pairs per page
- **Article** (blog pages): headline, description, url, datePublished, author, publisher, image
- **HowTo** (entsorgungsguide.tsx, haushaltsaufloesung-vorbereiten.tsx): step-by-step instructions
- **ItemList** (ratgeber.tsx, standorte.tsx): blog posts and location pages respectively
- **SpeakableSpecification** (faq.tsx): marks FAQ questions as speakable for voice

### noindex Pages
impressum, agb, datenschutz, rueckruf — all get `noindex, nofollow` robots meta via useEffect; excluded from sitemap

### Feeds & Discovery
- `/sitemap.xml` — 63+ URLs with priorities and lastmod
- `/rss.xml` — 12 blog posts with title, description, pubDate, guid
- `<link rel="alternate" type="application/rss+xml">` in index.html

### Technical SEO
- Canonical tags on every page
- og:title, og:description, og:image, og:url, og:type per page
- twitter:card, twitter:site, twitter:image globally
- hreflang de / x-default in index.html
- robots.txt with Googlebot/Bingbot rules, crawl-delay for bots, MJ12bot block
- GTM: GTM-NSNW3ZX4 | GA4: G-EY8PEHNKWG
