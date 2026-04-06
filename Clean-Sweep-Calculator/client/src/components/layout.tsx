import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Menu, X, ArrowUp, ChevronDown, Send, CheckCircle2, Mail, MapPin, MoreVertical } from "lucide-react";
function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
    </svg>
  );
}
function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}
function IconTiktok({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
    </svg>
  );
}
function IconWhatsapp({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  );
}
import { Link, useLocation } from "wouter";
import { trackConversion } from "@/lib/gtag";
import { PhoneInput } from "@/components/phone-input";

const navItems = [
  {
    label: "Entrümpelung",
    href: "/entruempelung",
    children: [
      { label: "Entrümpelung", href: "/entruempelung" },
      { label: "Kosten & Rechner", href: "/kosten-entruempelung" },
      { label: "Haushaltsauflösung", href: "/haushaltsaufloesung" },
      { label: "Wohnungsauflösung", href: "/wohnungsaufloesung" },
      { label: "Firmenauflösung", href: "/firmenaufloesung" },
      { label: "Nachlassauflösung", href: "/nachlassaufloesung" },
      { label: "Messie-Wohnung", href: "/messie-wohnung" },
      { label: "Schrottankauf", href: "/schrottankauf" },
      { label: "In der Nähe", href: "/entruempelung-in-der-naehe" },
    ],
  },
  {
    label: "Umzüge",
    href: "/umzug",
    children: [
      { label: "Umzüge", href: "/umzug" },
      { label: "Kosten & Rechner", href: "/kosten-umzug" },
      { label: "Privatumzug", href: "/privatumzug" },
      { label: "Seniorenumzug", href: "/seniorenumzug" },
      { label: "Büroumzug", href: "/bueroumzug" },
      { label: "Firmenumzug", href: "/firmenumzug" },
      { label: "Gewerbeumzug", href: "/gewerbeumzug" },
      { label: "Behördenumzug", href: "/behoerdenumzug" },
      { label: "Archivumzug", href: "/archivumzug" },
      { label: "Fernumzug", href: "/fernumzug" },
      { label: "Einlagerung", href: "/einlagerung-rhein-erft-kreis" },
    ],
  },
  { label: "Standorte", href: "/standorte" },
  { label: "Über uns", href: "/ueber-uns" },
];

const moreMenuItems = [
  { label: "Kontakt", href: "/kontakt" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Terminplaner", href: "/terminplaner" },
  { label: "Galerie", href: "/galerie" },
  { label: "FAQ", href: "/faq" },
  { label: "Ratgeber", href: "/ratgeber" },
];

function MobileAccordion({ item, onClose }: { item: typeof navItems[number]; onClose: () => void }) {
  const [expanded, setExpanded] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="block py-2.5 px-3 text-sm rounded-md text-foreground"
        data-testid={`link-mobile-${item.href.slice(1) || "home"}`}
        style={{ textDecoration: "none" }}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between w-full py-2.5 px-3 text-sm rounded-md text-foreground"
        data-testid={`button-mobile-accordion-${item.href.slice(1)}`}
      >
        <span>{item.label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
      </button>
      {expanded && (
        <div className="ml-3 border-l-2 border-primary/20 pl-3 space-y-0.5">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onClose}
              className="block py-2 px-3 text-sm rounded-md text-muted-foreground"
              data-testid={`link-mobile-${child.href.slice(1)}`}
              style={{ textDecoration: "none" }}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function NavDropdown({ item }: { item: typeof navItems[number] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="text-sm text-muted-foreground transition-colors duration-200"
        data-testid={`link-nav-${item.href.slice(1) || "home"}`}
        style={{ textDecoration: "none" }}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm text-muted-foreground transition-colors duration-200"
        data-testid={`button-nav-${item.href.slice(1)}`}
      >
        {item.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-52 bg-background border rounded-lg shadow-lg py-2 z-50">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted transition-colors"
              data-testid={`link-nav-${child.href.slice(1)}`}
              style={{ textDecoration: "none" }}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MoreMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:bg-muted transition-colors"
        data-testid="button-more-menu"
        aria-label="Mehr"
      >
        <Menu className="w-4.5 h-4.5" />
      </button>
      {open && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-background border rounded-lg shadow-lg py-2 z-50">
          {moreMenuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted transition-colors"
              data-testid={`link-more-${item.href.slice(1)}`}
              style={{ textDecoration: "none" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0" style={{ textDecoration: "none" }} data-testid="link-logo">
          <img src="/images/stressfrei-icon-transparent.webp" alt="Stressfrei Logo" className="w-9 h-9 object-contain" width={36} height={36} />
          <span className="font-bold text-foreground hidden sm:inline">Stressfrei Entrümpelungen & Umzüge</span>
        </Link>
        <div className="hidden lg:flex items-center gap-5">
          {navItems.map((item) => (
            <NavDropdown key={item.href} item={item} />
          ))}
          <MoreMenu />
        </div>
        <div className="flex items-center gap-3">
          <Button size="sm" asChild data-testid="button-nav-call">
            <a href="tel:+4922715880940" data-testid="link-nav-call" aria-label="Anrufen">
              <Phone className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
              <span className="hidden sm:inline">Anrufen</span>
            </a>
          </Button>
          <Button size="sm" variant="outline" asChild data-testid="button-nav-mail">
            <a href="mailto:info@stressfreientruempelungen.de" data-testid="link-nav-mail" aria-label="E-Mail senden">
              <Mail className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
              <span className="hidden sm:inline">E-Mail</span>
            </a>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="lg:hidden"
            onClick={() => setOpen(!open)}
            data-testid="button-mobile-menu"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            aria-controls="mobile-nav-menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>
      {open && (
        <div id="mobile-nav-menu" className="lg:hidden border-t bg-background px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
          {navItems.map((item) => (
            <MobileAccordion key={item.href} item={item} onClose={() => setOpen(false)} />
          ))}
          <div className="border-t border-border/50 mt-2 pt-2">
            {moreMenuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 px-3 text-sm rounded-md text-foreground"
                data-testid={`link-mobile-${item.href.slice(1)}`}
                style={{ textDecoration: "none" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

const footerColumns = [
  {
    title: "Dienstleistungen",
    links: [
      { label: "Entrümpelung", href: "/entruempelung" },
      { label: "Haushaltsauflösung", href: "/haushaltsaufloesung" },
      { label: "Wohnungsauflösung", href: "/wohnungsaufloesung" },
      { label: "Firmenauflösung", href: "/firmenaufloesung" },
      { label: "Messie-Wohnung", href: "/messie-wohnung" },
    ],
  },
  {
    title: "Umzüge",
    links: [
      { label: "Umzüge", href: "/umzug" },
      { label: "Privatumzug", href: "/privatumzug" },
      { label: "Seniorenumzug", href: "/seniorenumzug" },
      { label: "Büroumzug", href: "/bueroumzug" },
      { label: "Firmenumzug", href: "/firmenumzug" },
      { label: "Gewerbeumzug", href: "/gewerbeumzug" },
      { label: "Behördenumzug", href: "/behoerdenumzug" },
      { label: "Archivumzug", href: "/archivumzug" },
      { label: "Fernumzug", href: "/fernumzug" },
      { label: "Einlagerung", href: "/einlagerung-rhein-erft-kreis" },
    ],
  },
  {
    title: "Informationen",
    links: [
      { label: "Standorte", href: "/standorte" },
      { label: "FAQ", href: "/faq" },
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Ratgeber", href: "/ratgeber" },
      { label: "Impressum", href: "/impressum" },
      { label: "AGB", href: "/agb" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="py-12 border-t bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/stressfrei-icon-transparent.webp" alt="Stressfrei Logo" className="w-9 h-9 object-contain" width={36} height={36} />
              <div>
                <div className="font-bold text-foreground text-sm" data-testid="text-footer-brand">
                  Stressfrei Entrümpelungen & Umzüge
                </div>
                <div className="text-xs text-muted-foreground">
                  Ihr Partner für Entrümpelungen & Umzüge
                </div>
              </div>
            </div>
            <div className="space-y-1.5 text-sm text-muted-foreground">
              <div>Hauptstraße 26</div>
              <div>50126 Bergheim</div>
              <div className="pt-1">
                <a href="tel:+4922715880940" className="text-foreground font-medium" style={{ textDecoration: "none" }} data-testid="link-footer-phone">
                  02271 / 5880940
                </a>
              </div>
              <div>
                <a href="mailto:info@stressfreientruempelungen.de" className="text-muted-foreground" style={{ textDecoration: "none" }} data-testid="link-footer-email">
                  info@stressfreientruempelungen.de
                </a>
              </div>
              <div className="text-xs pt-1">Mo - Sa: 8:00 - 19:00 Uhr</div>
              <div className="flex items-center gap-3 pt-3">
                <a href="https://www.facebook.com/stressfreientruempelungen" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-social-facebook" aria-label="Facebook">
                  <IconFacebook className="w-4.5 h-4.5" />
                </a>
                <a href="https://www.instagram.com/stressfrei_entruempelungen/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-social-instagram" aria-label="Instagram">
                  <IconInstagram className="w-4.5 h-4.5" />
                </a>
                <a href="https://www.tiktok.com/@stressfrei_entruempelung" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-social-tiktok" aria-label="TikTok">
                  <IconTiktok className="w-4.5 h-4.5" />
                </a>
                <a href="https://wa.me/4915258177453" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-social-whatsapp" aria-label="WhatsApp">
                  <IconWhatsapp className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <div className="font-semibold text-foreground text-sm mb-3">{col.title}</div>
              <div className="space-y-2">
                {col.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-muted-foreground transition-colors"
                    style={{ textDecoration: "none" }}
                    data-testid={`link-footer-${link.href.slice(1)}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t pt-6 text-center">
          <div className="text-xs text-muted-foreground" data-testid="text-copyright">
            © {new Date().getFullYear()} Stressfrei Entrümpelungen & Umzüge. Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </footer>
  );
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let ticking = false;
    const handler = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setVisible(window.scrollY > 400);
          ticking = false;
        });
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  if (!visible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-primary text-primary-foreground items-center justify-center shadow-lg z-40 transition-opacity hidden md:flex"
      aria-label="Nach oben scrollen"
      data-testid="button-scroll-top"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}

export function DesktopStickyBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 hidden md:flex items-center justify-between bg-background/97 backdrop-blur-sm border-t border-border/60 shadow-[0_-2px_12px_rgba(0,0,0,0.08)] px-6 py-2.5">
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-sm font-bold text-foreground whitespace-nowrap">Stressfrei Entrümpelungen & Umzüge</span>
        <span className="text-border/80 text-sm">·</span>
        <span className="text-xs text-muted-foreground whitespace-nowrap">Rhein-Erft-Kreis & NRW</span>
      </div>
      <div className="flex items-center gap-4">
        <a href="tel:+4922715880940" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors whitespace-nowrap">
          <Phone className="w-4 h-4 text-primary shrink-0" />
          02271 / 5880940
        </a>
        <div className="w-px h-4 bg-border/60" />
        <a href="mailto:info@stressfreientruempelungen.de" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
          <Mail className="w-4 h-4 shrink-0" />
          info@stressfreientruempelungen.de
        </a>
        <a href="tel:+4922715880940">
          <Button size="sm" className="whitespace-nowrap">
            Jetzt anfragen
          </Button>
        </a>
      </div>
    </div>
  );
}

export function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border/60 shadow-[0_-2px_10px_rgba(0,0,0,0.08)]" data-testid="mobile-bottom-bar">
      <div className="grid grid-cols-4 h-14">
        <a
          href="tel:+4922715880940"
          className="flex flex-col items-center justify-center gap-0.5 text-foreground active:bg-primary/10 transition-colors"
          data-testid="mobile-bar-phone"
        >
          <Phone className="w-5 h-5 text-primary" />
          <span className="text-[10px] font-medium">Anrufen</span>
        </a>
        <a
          href="mailto:info@stressfreientruempelungen.de"
          className="flex flex-col items-center justify-center gap-0.5 text-foreground active:bg-primary/10 transition-colors"
          data-testid="mobile-bar-email"
        >
          <Mail className="w-5 h-5 text-primary" />
          <span className="text-[10px] font-medium">E-Mail</span>
        </a>
        <a
          href="https://wa.me/4915258177453"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 text-foreground active:bg-primary/10 transition-colors"
          data-testid="mobile-bar-whatsapp"
        >
          <IconWhatsapp className="w-5 h-5 text-[#25D366]" />
          <span className="text-[10px] font-medium">WhatsApp</span>
        </a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-col items-center justify-center gap-0.5 text-foreground active:bg-primary/10 transition-colors"
          data-testid="mobile-bar-scroll-top"
        >
          <ArrowUp className="w-5 h-5 text-primary" />
          <span className="text-[10px] font-medium">Nach oben</span>
        </button>
      </div>
    </div>
  );
}

const WEBSITE_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Stressfrei Entrümpelungen & Umzüge",
  "alternateName": "Stressfrei Entrümpelungen",
  "url": "https://stressfreientruempelungen.de",
  "description": "Professionelle Entrümpelung, Haushaltsauflösung und Umzüge im Rhein-Erft-Kreis und NRW.",
  "inLanguage": "de-DE",
  "publisher": {
    "@type": "Organization",
    "name": "Stressfrei Entrümpelungen & Umzüge",
    "logo": {
      "@type": "ImageObject",
      "url": "https://stressfreientruempelungen.de/favicon.webp"
    }
  }
});

const LOCAL_BUSINESS_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Stressfrei Entrümpelungen & Umzüge",
  "url": "https://stressfreientruempelungen.de",
  "logo": "https://stressfreientruempelungen.de/favicon.webp",
  "image": "https://stressfreientruempelungen.de/images/professionelle-entruempelung-service-rhein-erft-kreis.webp",
  "description": "Professionelle Entrümpelung, Haushaltsauflösung und Umzüge im Rhein-Erft-Kreis und NRW. Faire Festpreise, keine versteckten Kosten.",
  "telephone": "+4922715880940",
  "email": "info@stressfreientruempelungen.de",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kölner Straße 59",
    "addressLocality": "Bergheim",
    "postalCode": "50126",
    "addressRegion": "Nordrhein-Westfalen",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.9591,
    "longitude": 6.6417
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Rhein-Erft-Kreis" },
    { "@type": "City", "name": "Köln" },
    { "@type": "City", "name": "Düsseldorf" },
    { "@type": "City", "name": "Aachen" },
    { "@type": "City", "name": "Bonn" },
    { "@type": "AdministrativeArea", "name": "Nordrhein-Westfalen" }
  ],
  "priceRange": "€€",
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "07:00", "closes": "20:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "18:00" }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "84",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "Maria S." }, "reviewBody": "Super schnell und sauber gearbeitet. Das Team hat alles tadellos hinterlassen. Sehr zu empfehlen!" },
    { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "Thomas K." }, "reviewBody": "Pünktlich, freundlich und faire Preise. Das Angebot kam noch am gleichen Tag. Absolut top!" },
    { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "Andrea B." }, "reviewBody": "Alles stressfrei abgelaufen, genau wie der Name verspricht. Sehr einfühlsam und diskret." },
    { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "Klaus M." }, "reviewBody": "Nachlass meines Vaters musste aufgelöst werden. Das Team war unglaublich einfühlsam. Faire Wertanrechnung." },
    { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "Sabine H." }, "reviewBody": "Vom ersten Anruf bis zur Übergabe alles reibungslos. Festpreis eingehalten, Wohnung besenrein übergeben." }
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+4922715880940",
      "contactType": "customer service",
      "areaServed": "DE",
      "availableLanguage": "German",
      "contactOption": "TollFree",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "07:00",
        "closes": "20:00"
      }
    },
    {
      "@type": "ContactPoint",
      "email": "info@stressfreientruempelungen.de",
      "contactType": "customer support",
      "areaServed": "DE",
      "availableLanguage": "German"
    }
  ],
  "sameAs": [
    "https://wa.me/4915258177453",
    "https://www.facebook.com/stressfreientruempelungen",
    "https://www.instagram.com/stressfrei_entruempelungen/",
    "https://www.tiktok.com/@stressfrei_entruempelung"
  ]
});

const BASE_URL = "https://stressfreientruempelungen.de";

type SeoData = { title: string; description: string };

const SEO_DATA: Record<string, SeoData> = {
  "/entruempelung": {
    title: "Entrümpelung Rhein-Erft-Kreis | Festpreis | Stressfrei Entrümpelungen",
    description: "Professionelle Entrümpelung im Rhein-Erft-Kreis zum Festpreis. ✓ Kostenlose Besichtigung ✓ Besenreine Übergabe ✓ Wertanrechnung. Jetzt Angebot anfordern: 02271 5880940",
  },
  "/haushaltsaufloesung": {
    title: "Haushaltsauflösung Rhein-Erft-Kreis | Komplett-Service | Stressfrei",
    description: "Haushaltsauflösung im Rhein-Erft-Kreis zum Festpreis. Komplett-Service inkl. Entrümpelung, Wertanrechnung & besenreiner Übergabe. ☎ 02271 5880940",
  },
  "/wohnungsaufloesung": {
    title: "Wohnungsauflösung Rhein-Erft-Kreis | Festpreis | Stressfrei Entrümpelungen",
    description: "Wohnungsauflösung im Rhein-Erft-Kreis – professionell und zum fairen Festpreis. Inkl. Demontage, Entsorgung & besenreiner Übergabe. ☎ 02271 5880940",
  },
  "/firmenaufloesung": {
    title: "Firmenauflösung & Gewerberäumung NRW | Festpreis | Stressfrei Entrümpelungen",
    description: "Professionelle Firmenauflösung und Gewerberäumung in NRW. Zuverlässig, diskret und zum Festpreis. Kostenlose Besichtigung – ☎ 02271 5880940",
  },
  "/messie-wohnung": {
    title: "Messie Wohnung Räumung Rhein-Erft-Kreis | Diskret & Professionell",
    description: "Diskrete und professionelle Messie-Wohnung-Räumung im Rhein-Erft-Kreis. Erfahrenes Team, faire Preise, vollständige Entsorgung. ☎ 02271 5880940",
  },
  "/schrottankauf": {
    title: "Schrottankauf & Altmetall Ankauf NRW | Stressfrei Entrümpelungen",
    description: "Schrottankauf und Altmetall-Ankauf in NRW. Faire Preise für Kupfer, Eisen, Aluminium und mehr. Kostenlose Abholung möglich. ☎ 02271 5880940",
  },
  "/entruempelung-in-der-naehe": {
    title: "Entrümpelung in der Nähe | Rhein-Erft-Kreis & Köln | Stressfrei",
    description: "Entrümpelung in Ihrer Nähe im Rhein-Erft-Kreis und Umgebung. Schnelle Reaktionszeiten, faire Festpreise. Jetzt kostenlos anfragen: ☎ 02271 5880940",
  },
  "/kellerentruempelung": {
    title: "Kellerentrümpelung Rhein-Erft-Kreis | Festpreis | Stressfrei Entrümpelungen",
    description: "Professionelle Kellerentrümpelung im Rhein-Erft-Kreis zum Festpreis. Alles aus einer Hand – Demontage, Entsorgung & besenreine Übergabe. ☎ 02271 5880940",
  },
  "/kosten-entruempelung": {
    title: "Entrümpelung Kosten 2025 | Was kostet eine Entrümpelung? | Stressfrei",
    description: "Was kostet eine Entrümpelung? Aktuelle Preise und Kostenübersicht 2025. Transparente Festpreise ohne versteckte Kosten. Kostenlose Einschätzung: ☎ 02271 5880940",
  },
  "/umzug": {
    title: "Umzugsunternehmen Rhein-Erft-Kreis | Stressfrei & Fair | Stressfrei Umzüge",
    description: "Professionelles Umzugsunternehmen im Rhein-Erft-Kreis. Faire Festpreise, erfahrenes Team, pünktlich & zuverlässig. Jetzt Angebot einholen: ☎ 02271 5880940",
  },
  "/kosten-umzug": {
    title: "Umzug Kosten 2025 | Was kostet ein Umzug? | Stressfrei Entrümpelungen",
    description: "Umzugskosten 2025 im Überblick. Kostenrechner und Preistipps für Ihren Umzug im Rhein-Erft-Kreis. Kostenlose Beratung: ☎ 02271 5880940",
  },
  "/privatumzug": {
    title: "Privatumzug Rhein-Erft-Kreis | Stressfrei & Günstig | Stressfrei Umzüge",
    description: "Privatumzug im Rhein-Erft-Kreis zum fairen Festpreis. Erfahrenes Umzugsteam, kompletter Service von der Verpackung bis zur Aufstellung. ☎ 02271 5880940",
  },
  "/seniorenumzug": {
    title: "Seniorenumzug Rhein-Erft-Kreis | Behutsam & Professionell | Stressfrei",
    description: "Einfühlsamer Seniorenumzug im Rhein-Erft-Kreis. Wir kümmern uns um alles – Einpacken, Transport, Aufbau. Fair und zuverlässig. ☎ 02271 5880940",
  },
  "/bueroumzug": {
    title: "Büroumzug & Firmenumzug NRW | Stressfrei & Pünktlich | Stressfrei Umzüge",
    description: "Professioneller Büroumzug in NRW. Minimale Ausfallzeiten, erfahrenes Team, zuverlässige Terminplanung. Kostenlose Besichtigung: ☎ 02271 5880940",
  },
  "/firmenumzug": {
    title: "Firmenumzug NRW | Professionell & Termingerecht | Stressfrei Umzüge",
    description: "Firmenumzug in NRW zum Festpreis. Komplettservice: Planung, Abbau, Transport, Aufbau. Minimale Betriebsunterbrechung. Kostenlose Besichtigung: ☎ 02271 5880940",
  },
  "/gewerbeumzug": {
    title: "Gewerbeumzug NRW | Laden, Lager & Betrieb | Stressfrei Umzüge",
    description: "Gewerbeumzug NRW – für Ladenlokal, Werkstatt, Lager oder Praxis. Professionell, termingerecht, Festpreisgarantie. Kostenlose Besichtigung: ☎ 02271 5880940",
  },
  "/behoerdenumzug": {
    title: "Behördenumzug NRW | Diskret, Sicher & Termingerecht | Stressfrei",
    description: "Behördenumzug NRW – DSGVO-konform, sicherer Aktentransport, Festpreisgarantie. Für Ämter, Behörden und öffentliche Einrichtungen. ☎ 02271 5880940",
  },
  "/archivumzug": {
    title: "Archivumzug NRW | Akten & Archive sicher umziehen | Stressfrei",
    description: "Archivumzug NRW – Akten, Ordner und Archive diskret, systematisch und sicher transportieren. Für Kanzleien, Behörden & Unternehmen. ☎ 02271 5880940",
  },
  "/fernumzug": {
    title: "Fernumzug NRW | Deutschlandweit umziehen | Stressfrei Umzüge",
    description: "Fernumzug aus NRW – deutschlandweit zum Festpreis. Von NRW in jedes Bundesland, vollversichert, Komplettservice. Kostenlose Besichtigung: ☎ 02271 5880940",
  },
  "/einlagerung-rhein-erft-kreis": {
    title: "Einlagerung Rhein-Erft-Kreis | Möbel & Hausrat lagern | Stressfrei",
    description: "Sichere Einlagerung von Möbeln und Hausrat im Rhein-Erft-Kreis. Flexible Laufzeiten, faire Preise. Kombination mit Umzug oder Entrümpelung möglich. ☎ 02271 5880940",
  },
  "/kontakt": {
    title: "Kontakt | Stressfrei Entrümpelungen & Umzüge | Bergheim",
    description: "Nehmen Sie Kontakt auf! Kostenlose Beratung und Angebotserstellung für Entrümpelung, Haushaltsauflösung oder Umzug. ☎ 02271 5880940 | Bergheim, NRW",
  },
  "/terminplaner": {
    title: "Terminplaner | Besichtigungstermin online buchen | Stressfrei Entrümpelungen",
    description: "Buchen Sie Ihren kostenlosen Besichtigungstermin online. Schnell, einfach und unverbindlich. Stressfrei Entrümpelungen Bergheim.",
  },
  "/standorte": {
    title: "Standorte & Einsatzgebiete | Rhein-Erft-Kreis & NRW | Stressfrei Entrümpelungen",
    description: "Stressfrei Entrümpelungen ist in ganz Rhein-Erft-Kreis und NRW aktiv. Bergheim, Kerpen, Pulheim, Hürth, Erftstadt und mehr. ☎ 02271 5880940",
  },
  "/faq": {
    title: "FAQ | Häufige Fragen zur Entrümpelung & Umzug | Stressfrei Entrümpelungen",
    description: "Antworten auf häufige Fragen zu Entrümpelung, Haushaltsauflösung und Umzug. Kosten, Ablauf, Wertanrechnung und mehr erklärt.",
  },
  "/ueber-uns": {
    title: "Über uns | Stressfrei Entrümpelungen & Umzüge Bergheim",
    description: "Lernen Sie das Team von Stressfrei Entrümpelungen kennen. Erfahren, zuverlässig und fair – Ihr Partner im Rhein-Erft-Kreis seit Jahren.",
  },
  "/ratgeber": {
    title: "Ratgeber Entrümpelung & Umzug | Tipps & Infos | Stressfrei Entrümpelungen",
    description: "Hilfreiche Tipps und Ratgeber rund um Entrümpelung, Haushaltsauflösung und Umzug. Informieren Sie sich kostenlos.",
  },
  "/entruempelung-bergheim": {
    title: "Entrümpelung Bergheim | Festpreis | Stressfrei Entrümpelungen",
    description: "Professionelle Entrümpelung in Bergheim zum Festpreis. ✓ Kostenlose Besichtigung ✓ Besenreine Übergabe. Ihr lokaler Partner: ☎ 02271 5880940",
  },
  "/entruempelung-bedburg": {
    title: "Entrümpelung Bedburg | Festpreis | Stressfrei Entrümpelungen",
    description: "Entrümpelung in Bedburg zum fairen Festpreis. Professionell, zuverlässig und schnell. Kostenlose Besichtigung: ☎ 02271 5880940",
  },
  "/entruempelung-kerpen": {
    title: "Entrümpelung Kerpen | Festpreis | Stressfrei Entrümpelungen",
    description: "Entrümpelung in Kerpen – schnell, sauber und zum Festpreis. Kostenlose Besichtigung und Angebotserstellung. ☎ 02271 5880940",
  },
  "/entruempelung-elsdorf": {
    title: "Entrümpelung Elsdorf | Festpreis | Stressfrei Entrümpelungen",
    description: "Professionelle Entrümpelung in Elsdorf zum Festpreis. Besenreine Übergabe garantiert. Kostenlose Besichtigung: ☎ 02271 5880940",
  },
  "/entruempelung-pulheim": {
    title: "Entrümpelung Pulheim | Festpreis | Stressfrei Entrümpelungen",
    description: "Entrümpelung in Pulheim zum fairen Festpreis. Schnell und professionell – Ihr lokaler Ansprechpartner. ☎ 02271 5880940",
  },
  "/entruempelung-frechen": {
    title: "Entrümpelung Frechen | Festpreis | Stressfrei Entrümpelungen",
    description: "Entrümpelung in Frechen – professionell und zum Festpreis. Kostenlose Besichtigung, besenreine Übergabe. ☎ 02271 5880940",
  },
  "/entruempelung-huerth": {
    title: "Entrümpelung Hürth | Festpreis | Stressfrei Entrümpelungen",
    description: "Entrümpelung in Hürth zum fairen Festpreis. Erfahrenes Team, schnelle Abwicklung, besenreine Übergabe. ☎ 02271 5880940",
  },
  "/entruempelung-erftstadt": {
    title: "Entrümpelung Erftstadt | Festpreis | Stressfrei Entrümpelungen",
    description: "Entrümpelung in Erftstadt – fair, schnell und professionell. Kostenlose Besichtigung vor Ort. ☎ 02271 5880940",
  },
  "/entruempelung-rommerskirchen": {
    title: "Entrümpelung Rommerskirchen | Festpreis | Stressfrei Entrümpelungen",
    description: "Professionelle Entrümpelung in Rommerskirchen. Faire Festpreise, zuverlässiges Team. Kostenlose Besichtigung: ☎ 02271 5880940",
  },
  "/entruempelung-grevenbroich": {
    title: "Entrümpelung Grevenbroich | Festpreis | Stressfrei Entrümpelungen",
    description: "Entrümpelung in Grevenbroich zum Festpreis. Professionell, pünktlich, besenrein. Kostenlose Besichtigung: ☎ 02271 5880940",
  },
  "/entruempelung-rhein-erft-kreis": {
    title: "Entrümpelung Rhein-Erft-Kreis | Alle Städte | Stressfrei Entrümpelungen",
    description: "Entrümpelung im gesamten Rhein-Erft-Kreis. Bergheim, Kerpen, Pulheim, Hürth und mehr. Festpreis, besenreine Übergabe. ☎ 02271 5880940",
  },
  "/umzugsunternehmen-rhein-erft-kreis": {
    title: "Umzugsunternehmen Rhein-Erft-Kreis | Stressfrei & Fair | Stressfrei Umzüge",
    description: "Ihr Umzugsunternehmen im Rhein-Erft-Kreis. Alle 10 Städte abgedeckt. Professionell, pünktlich und zum fairen Festpreis. ☎ 02271 5880940",
  },
  "/umzugsunternehmen-bergheim": {
    title: "Umzugsunternehmen Bergheim | Stressfrei & Fair | Stressfrei Umzüge",
    description: "Ihr Umzugsunternehmen in Bergheim. Professionell, pünktlich und zum fairen Festpreis. Jetzt Angebot einholen: ☎ 02271 5880940",
  },
  "/umzugsunternehmen-bedburg": {
    title: "Umzugsunternehmen Bedburg | Stressfrei & Fair | Stressfrei Umzüge",
    description: "Professionelles Umzugsunternehmen in Bedburg. Faire Preise, erfahrenes Team. Kostenlose Beratung: ☎ 02271 5880940",
  },
  "/umzugsunternehmen-kerpen": {
    title: "Umzugsunternehmen Kerpen | Stressfrei & Fair | Stressfrei Umzüge",
    description: "Zuverlässiges Umzugsunternehmen in Kerpen. Faire Festpreise, professionelle Abwicklung. ☎ 02271 5880940",
  },
  "/umzugsunternehmen-elsdorf": {
    title: "Umzugsunternehmen Elsdorf | Stressfrei & Fair | Stressfrei Umzüge",
    description: "Ihr Umzugsunternehmen in Elsdorf. Professionell und zum Festpreis. Kostenlose Besichtigung: ☎ 02271 5880940",
  },
  "/umzugsunternehmen-pulheim": {
    title: "Umzugsunternehmen Pulheim | Stressfrei & Fair | Stressfrei Umzüge",
    description: "Professionelles Umzugsunternehmen in Pulheim. Schnell, zuverlässig, faire Preise. ☎ 02271 5880940",
  },
  "/umzugsunternehmen-frechen": {
    title: "Umzugsunternehmen Frechen | Stressfrei & Fair | Stressfrei Umzüge",
    description: "Ihr Umzugsunternehmen in Frechen – erfahren und fair. Jetzt Angebot einholen: ☎ 02271 5880940",
  },
  "/umzugsunternehmen-huerth": {
    title: "Umzugsunternehmen Hürth | Stressfrei & Fair | Stressfrei Umzüge",
    description: "Zuverlässiges Umzugsunternehmen in Hürth. Faire Festpreise, professionelles Team. ☎ 02271 5880940",
  },
  "/umzugsunternehmen-erftstadt": {
    title: "Umzugsunternehmen Erftstadt | Stressfrei & Fair | Stressfrei Umzüge",
    description: "Umzugsunternehmen in Erftstadt – professionell und zum Festpreis. Kostenlose Beratung: ☎ 02271 5880940",
  },
  "/impressum": {
    title: "Impressum | Stressfrei Entrümpelungen & Umzüge Bergheim",
    description: "Impressum von Stressfrei Entrümpelungen & Umzüge, Bergheim, Rhein-Erft-Kreis.",
  },
  "/agb": {
    title: "AGB | Stressfrei Entrümpelungen & Umzüge",
    description: "Allgemeine Geschäftsbedingungen von Stressfrei Entrümpelungen & Umzüge Bergheim.",
  },
  "/datenschutz": {
    title: "Datenschutzerklärung | Stressfrei Entrümpelungen & Umzüge",
    description: "Datenschutzerklärung von Stressfrei Entrümpelungen & Umzüge gemäß DSGVO.",
  },
  "/kostenuebernahme-durch-die-pflegekasse-bei-entruempelung-und-umzug-fuer-senioren": {
    title: "Kostenübernahme Pflegekasse bei Entrümpelung für Senioren | Stressfrei",
    description: "Wann übernimmt die Pflegekasse Kosten für Entrümpelung und Umzug bei Senioren? Alle Infos und Tipps zur Beantragung.",
  },
  "/entruempelung-rhein-erft-kreis-preise": {
    title: "Entrümpelung Preise Rhein-Erft-Kreis 2025 | Aktuelle Kosten | Stressfrei",
    description: "Aktuelle Preise für Entrümpelung im Rhein-Erft-Kreis 2025. Was kostet eine Entrümpelung? Kostenübersicht und Tipps.",
  },
  "/missverstaendnisse-zum-thema-entruempelung": {
    title: "Häufige Missverständnisse zur Entrümpelung | Ratgeber | Stressfrei",
    description: "Die häufigsten Missverständnisse zum Thema Entrümpelung aufgeklärt. Was stimmt und was nicht? Ratgeber von Stressfrei Entrümpelungen.",
  },
  "/wie-man-eine-professionelle-entruempelungsfirma-engagiert": {
    title: "Professionelle Entrümpelungsfirma beauftragen | Ratgeber | Stressfrei",
    description: "Wie finde ich eine gute Entrümpelungsfirma? Worauf achten? Ratgeber mit Tipps zur Auswahl des richtigen Anbieters.",
  },
  "/entruempelungstipps": {
    title: "Entrümpelungstipps | Effizient entrümpeln | Stressfrei Entrümpelungen",
    description: "Praktische Tipps für eine effiziente Entrümpelung. Von der Vorbereitung bis zur Entsorgung – so klappt es stressfrei.",
  },
  "/was-kostet-sperrmuell": {
    title: "Was kostet Sperrmüll? | Preise & Tipps 2025 | Stressfrei Entrümpelungen",
    description: "Aktuelle Preise für Sperrmüll 2025. Kostenlos oder kostenpflichtig? Alternativen zur Entsorgung. Alle Infos kompakt.",
  },
  "/": {
    title: "Stressfrei Entrümpelungen & Umzüge | Rhein-Erft-Kreis | Festpreis",
    description: "Ihr professioneller Partner für Entrümpelung, Haushaltsauflösung und Umzüge im Rhein-Erft-Kreis und NRW. Faire Festpreise, kostenlose Besichtigung. ☎ 02271 5880940",
  },
  "/nachlassaufloesung": {
    title: "Nachlassauflösung Rhein-Erft-Kreis | Einfühlsam & Diskret | Stressfrei",
    description: "Einfühlsame Nachlassauflösung im Rhein-Erft-Kreis. Wir kümmern uns respektvoll um den Nachlass – diskret, professionell und zum Festpreis. ☎ 02271 5880940",
  },
  "/betriebsaufloesung": {
    title: "Betriebsauflösung & Gewerberäumung NRW | Festpreis | Stressfrei",
    description: "Professionelle Betriebsauflösung in NRW. Räumung von Produktionsstätten, Lagerhallen und Gewerbeimmobilien. Termingerecht zum Festpreis. ☎ 02271 5880940",
  },
  "/galerie": {
    title: "Galerie | Vorher-Nachher-Bilder | Stressfrei Entrümpelungen & Umzüge",
    description: "Sehen Sie unsere Vorher-Nachher-Bilder aus echten Entrümpelung- und Haushaltsauflösungs-Projekten im Rhein-Erft-Kreis. Qualität, die überzeugt.",
  },
  "/rueckruf": {
    title: "Rückruf anfordern | Stressfrei Entrümpelungen & Umzüge",
    description: "Rückruf kostenlos anfordern. Wir melden uns schnellstmöglich bei Ihnen zurück für Ihre Entrümpelung oder Ihren Umzug im Rhein-Erft-Kreis.",
  },
  "/umzugscheckliste": {
    title: "Umzugscheckliste 2025 | Interaktiv & Kostenlos | Stressfrei Umzüge",
    description: "Kostenlose interaktive Umzugscheckliste 2025 mit 40+ Aufgaben in 6 Phasen. Von 8 Wochen vorher bis nach dem Umzug – nichts vergessen.",
  },
  "/entsorgungsguide": {
    title: "Entsorgungsguide | Was wohin entsorgen? | Stressfrei Entrümpelungen",
    description: "Was darf wohin? Unser Entsorgungsguide erklärt, wie Sie Sperrmüll, Elektroschrott, Sondermüll und mehr korrekt entsorgen. Kostenloser Ratgeber.",
  },
  "/wertanrechnung-bei-der-entruempelung": {
    title: "Wertanrechnung bei Entrümpelung | Geld sparen | Stressfrei Entrümpelungen",
    description: "Wertanrechnung bei der Entrümpelung: Wie verwertbare Gegenstände den Preis senken. Tipps zur Vorbereitung und was angerechnet werden kann.",
  },
  "/haushaltsaufloesung-vorbereiten": {
    title: "Haushaltsauflösung vorbereiten | Schritt-für-Schritt | Stressfrei",
    description: "So bereiten Sie eine Haushaltsauflösung optimal vor. Checkliste, Tipps zu Wertgegenständen und alles was Sie wissen müssen. Kostenloser Ratgeber.",
  },
  "/umzugshelfer-tipps": {
    title: "Umzugshelfer Tipps | Was zu beachten ist | Stressfrei Umzüge",
    description: "Umzugshelfer organisieren: Tipps zu Rechtsfragen, Versicherung und wie Sie alles optimal koordinieren. Ratgeber von Stressfrei Umzüge.",
  },
  "/entruempelung-nach-todesfall": {
    title: "Entrümpelung nach Todesfall | Einfühlsam & Diskret | Stressfrei",
    description: "Entrümpelung und Wohnungsauflösung nach einem Todesfall. Einfühlsam, diskret und professionell. Wir helfen Ihnen in schwierigen Zeiten. ☎ 02271 5880940",
  },
  "/entruempelung-bruehl": {
    title: "Entrümpelung Brühl | Festpreis | Stressfrei Entrümpelungen",
    description: "Professionelle Entrümpelung in Brühl zum Festpreis. ✓ Kostenlose Besichtigung ✓ Besenreine Übergabe. Ihr lokaler Partner: ☎ 02271 5880940",
  },
  "/entruempelung-wesseling": {
    title: "Entrümpelung Wesseling | Festpreis | Stressfrei Entrümpelungen",
    description: "Entrümpelung in Wesseling zum fairen Festpreis. Professionell, zuverlässig und schnell. Kostenlose Besichtigung: ☎ 02271 5880940",
  },
  "/umzugsunternehmen-rommerskirchen": {
    title: "Umzugsunternehmen Rommerskirchen | Stressfrei & Fair | Stressfrei Umzüge",
    description: "Ihr Umzugsunternehmen in Rommerskirchen. Professionell, pünktlich und zum fairen Festpreis. ☎ 02271 5880940",
  },
  "/umzugsunternehmen-grevenbroich": {
    title: "Umzugsunternehmen Grevenbroich | Stressfrei & Fair | Stressfrei Umzüge",
    description: "Zuverlässiges Umzugsunternehmen in Grevenbroich. Faire Preise, erfahrenes Team. ☎ 02271 5880940",
  },
  "/umzugsunternehmen-koeln": {
    title: "Umzugsunternehmen Köln | Stressfrei & Fair | Stressfrei Umzüge",
    description: "Professionelles Umzugsunternehmen in Köln und Umgebung. Faire Festpreise, erfahrenes Team, pünktlich. ☎ 02271 5880940",
  },
  "/umzugsunternehmen-duesseldorf": {
    title: "Umzugsunternehmen Düsseldorf | Stressfrei & Fair | Stressfrei Umzüge",
    description: "Ihr Umzugsunternehmen in Düsseldorf. Professionell und zum Festpreis. Kostenlose Beratung: ☎ 02271 5880940",
  },
  "/umzugsunternehmen-aachen": {
    title: "Umzugsunternehmen Aachen | Stressfrei & Fair | Stressfrei Umzüge",
    description: "Zuverlässiges Umzugsunternehmen in Aachen. Faire Festpreise, professionelle Abwicklung. ☎ 02271 5880940",
  },
};

const AGGREGATE_RATING = {
  "@type": "AggregateRating",
  "ratingValue": "5.0",
  "reviewCount": "84",
  "bestRating": "5",
  "worstRating": "1",
};

const SERVICE_SCHEMAS: Record<string, object> = {
  "/entruempelung": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Entrümpelung",
    "description": "Professionelle Entrümpelung zum Festpreis im Rhein-Erft-Kreis. Kostenlose Besichtigung, besenreine Übergabe, Wertanrechnung.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Rhein-Erft-Kreis" },
    "serviceType": "Entrümpelung",
    "url": `${BASE_URL}/entruempelung`,
    "offers": { "@type": "AggregateOffer", "priceCurrency": "EUR", "lowPrice": "300", "highPrice": "5000" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/haushaltsaufloesung": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Haushaltsauflösung",
    "description": "Haushaltsauflösung im Rhein-Erft-Kreis zum Festpreis. Komplett-Service inkl. Entrümpelung, Wertanrechnung & besenreiner Übergabe.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Rhein-Erft-Kreis" },
    "serviceType": "Haushaltsauflösung",
    "url": `${BASE_URL}/haushaltsaufloesung`,
    "offers": { "@type": "AggregateOffer", "priceCurrency": "EUR", "lowPrice": "500", "highPrice": "8000" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/wohnungsaufloesung": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Wohnungsauflösung",
    "description": "Wohnungsauflösung im Rhein-Erft-Kreis – professionell und zum fairen Festpreis. Inkl. Demontage, Entsorgung & besenreiner Übergabe.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Rhein-Erft-Kreis" },
    "serviceType": "Wohnungsauflösung",
    "url": `${BASE_URL}/wohnungsaufloesung`,
    "offers": { "@type": "AggregateOffer", "priceCurrency": "EUR", "lowPrice": "400", "highPrice": "5000" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/firmenaufloesung": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Firmenauflösung & Gewerberäumung",
    "description": "Professionelle Firmenauflösung und Gewerberäumung in NRW. Zuverlässig, diskret und zum Festpreis.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Nordrhein-Westfalen" },
    "serviceType": "Firmenauflösung",
    "url": `${BASE_URL}/firmenaufloesung`,
    "offers": { "@type": "AggregateOffer", "priceCurrency": "EUR", "lowPrice": "800", "highPrice": "15000" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/messie-wohnung": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Messie Wohnung Räumung",
    "description": "Diskrete und professionelle Messie-Wohnung-Räumung im Rhein-Erft-Kreis. Erfahrenes Team, faire Preise, vollständige Entsorgung.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Rhein-Erft-Kreis" },
    "serviceType": "Messie Wohnung Räumung",
    "url": `${BASE_URL}/messie-wohnung`,
    "offers": { "@type": "AggregateOffer", "priceCurrency": "EUR", "lowPrice": "500", "highPrice": "8000" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/kellerentruempelung": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kellerentrümpelung",
    "description": "Professionelle Kellerentrümpelung im Rhein-Erft-Kreis zum Festpreis. Demontage, Entsorgung & besenreine Übergabe.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Rhein-Erft-Kreis" },
    "serviceType": "Kellerentrümpelung",
    "url": `${BASE_URL}/kellerentruempelung`,
    "offers": { "@type": "AggregateOffer", "priceCurrency": "EUR", "lowPrice": "200", "highPrice": "1500" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/umzug": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Umzugsservice",
    "description": "Professioneller Umzugsservice im Rhein-Erft-Kreis. Faire Festpreise, erfahrenes Team, pünktlich & zuverlässig.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Rhein-Erft-Kreis" },
    "serviceType": "Umzug",
    "url": `${BASE_URL}/umzug`,
    "offers": { "@type": "AggregateOffer", "priceCurrency": "EUR", "lowPrice": "300", "highPrice": "5000" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/privatumzug": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Privatumzug",
    "description": "Privatumzug im Rhein-Erft-Kreis zum fairen Festpreis. Kompletter Service von der Verpackung bis zur Aufstellung.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Rhein-Erft-Kreis" },
    "serviceType": "Privatumzug",
    "url": `${BASE_URL}/privatumzug`,
    "offers": { "@type": "AggregateOffer", "priceCurrency": "EUR", "lowPrice": "300", "highPrice": "4000" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/seniorenumzug": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Seniorenumzug",
    "description": "Einfühlsamer Seniorenumzug im Rhein-Erft-Kreis. Einpacken, Transport, Aufbau – wir kümmern uns um alles.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Rhein-Erft-Kreis" },
    "serviceType": "Seniorenumzug",
    "url": `${BASE_URL}/seniorenumzug`,
    "offers": { "@type": "AggregateOffer", "priceCurrency": "EUR", "lowPrice": "300", "highPrice": "4000" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/bueroumzug": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Büroumzug & Firmenumzug",
    "description": "Professioneller Büroumzug in NRW. Minimale Ausfallzeiten, erfahrenes Team, zuverlässige Terminplanung.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Nordrhein-Westfalen" },
    "serviceType": "Büroumzug",
    "url": `${BASE_URL}/bueroumzug`,
    "offers": { "@type": "AggregateOffer", "priceCurrency": "EUR", "lowPrice": "500", "highPrice": "10000" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/firmenumzug": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Firmenumzug NRW",
    "description": "Professioneller Firmenumzug in NRW. Komplettservice: Planung, Abbau, Transport, Aufbau. Minimale Betriebsunterbrechung.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Nordrhein-Westfalen" },
    "serviceType": "Firmenumzug",
    "url": `${BASE_URL}/firmenumzug`,
    "offers": { "@type": "AggregateOffer", "priceCurrency": "EUR", "lowPrice": "1500", "highPrice": "20000" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/gewerbeumzug": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Gewerbeumzug NRW",
    "description": "Gewerbeumzug in NRW – für Ladenlokal, Werkstatt, Lager oder Praxis. Professionell, termingerecht, Festpreisgarantie.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Nordrhein-Westfalen" },
    "serviceType": "Gewerbeumzug",
    "url": `${BASE_URL}/gewerbeumzug`,
    "offers": { "@type": "AggregateOffer", "priceCurrency": "EUR", "lowPrice": "800", "highPrice": "15000" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/behoerdenumzug": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Behördenumzug NRW",
    "description": "Behördenumzug NRW – DSGVO-konform, sicherer Aktentransport, Festpreisgarantie. Für Ämter, Behörden und öffentliche Einrichtungen.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Nordrhein-Westfalen" },
    "serviceType": "Behördenumzug",
    "url": `${BASE_URL}/behoerdenumzug`,
    "offers": { "@type": "AggregateOffer", "priceCurrency": "EUR", "lowPrice": "1000", "highPrice": "25000" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/archivumzug": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Archivumzug NRW",
    "description": "Archivumzug NRW – Akten, Ordner und Archive diskret, systematisch und sicher transportieren. Für Kanzleien, Behörden und Unternehmen.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Nordrhein-Westfalen" },
    "serviceType": "Archivumzug",
    "url": `${BASE_URL}/archivumzug`,
    "offers": { "@type": "AggregateOffer", "priceCurrency": "EUR", "lowPrice": "500", "highPrice": "10000" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/fernumzug": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fernumzug NRW",
    "description": "Fernumzug aus NRW – deutschlandweit zum Festpreis. Von NRW in jedes Bundesland, vollversichert, Komplettservice.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Deutschland" },
    "serviceType": "Fernumzug",
    "url": `${BASE_URL}/fernumzug`,
    "offers": { "@type": "AggregateOffer", "priceCurrency": "EUR", "lowPrice": "1500", "highPrice": "8000" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/schrottankauf": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Schrottankauf & Altmetall Ankauf",
    "description": "Schrottankauf und Altmetall-Ankauf in NRW. Faire Preise für Kupfer, Eisen, Aluminium und mehr.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Nordrhein-Westfalen" },
    "serviceType": "Schrottankauf",
    "url": `${BASE_URL}/schrottankauf`,
    "offers": { "@type": "Offer", "priceCurrency": "EUR", "description": "Faire Ankaufspreise für Altmetall – kostenlose Bewertung vor Ort" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/kosten-entruempelung": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Entrümpelung Kosten & Preisrechner",
    "description": "Faire Entrümpelungskosten im Rhein-Erft-Kreis. Kostenlose Besichtigung, transparente Festpreise – keine versteckten Kosten.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Rhein-Erft-Kreis" },
    "serviceType": "Entrümpelung",
    "url": `${BASE_URL}/kosten-entruempelung`,
    "offers": { "@type": "AggregateOffer", "priceCurrency": "EUR", "lowPrice": "200", "highPrice": "8000", "description": "Entrümpelung ab 200 € – Festpreis nach kostenloser Besichtigung" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/kosten-umzug": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Umzug Kosten & Preisrechner",
    "description": "Faire Umzugskosten im Rhein-Erft-Kreis. Kostenloser Kostenvoranschlag, transparente Festpreise ohne versteckte Zusatzkosten.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Rhein-Erft-Kreis" },
    "serviceType": "Umzug",
    "url": `${BASE_URL}/kosten-umzug`,
    "offers": { "@type": "AggregateOffer", "priceCurrency": "EUR", "lowPrice": "300", "highPrice": "5000", "description": "Umzug ab 300 € – Festpreis nach kostenloser Besichtigung" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/einpackservice": {
    "@context": "https://schema.org", "@type": "Service",
    "name": "Einpackservice für Umzüge",
    "description": "Professioneller Einpackservice im Rhein-Erft-Kreis. Wir verpacken Ihren gesamten Hausrat sicher und effizient — inkl. Verpackungsmaterial.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Rhein-Erft-Kreis" },
    "serviceType": "Einpackservice", "url": `${BASE_URL}/einpackservice`,
    "offers": { "@type": "Offer", "priceCurrency": "EUR", "description": "Festpreis nach Besichtigung" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/auspackservice": {
    "@context": "https://schema.org", "@type": "Service",
    "name": "Auspackservice nach dem Umzug",
    "description": "Professioneller Auspackservice im Rhein-Erft-Kreis. Wir packen aus, räumen ein und entsorgen das Verpackungsmaterial — damit Sie sofort wohnen können.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Rhein-Erft-Kreis" },
    "serviceType": "Auspackservice", "url": `${BASE_URL}/auspackservice`,
    "offers": { "@type": "Offer", "priceCurrency": "EUR", "description": "Festpreis nach Besichtigung" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/moebelmontagedienst": {
    "@context": "https://schema.org", "@type": "Service",
    "name": "Möbelmontagedienst",
    "description": "Professionelle Möbelmontage im Rhein-Erft-Kreis. IKEA, Küchen, Regale, Schlafzimmer — wir bauen auf und ab. Schnell, sauber, Festpreis.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Rhein-Erft-Kreis" },
    "serviceType": "Möbelmontage", "url": `${BASE_URL}/moebelmontagedienst`,
    "offers": { "@type": "Offer", "priceCurrency": "EUR", "description": "Festpreis nach Besichtigung" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/umzugstransport": {
    "@context": "https://schema.org", "@type": "Service",
    "name": "Umzugstransport",
    "description": "Zuverlässiger Umzugstransport im Rhein-Erft-Kreis und NRW. Eigene Fahrzeuge, vollversichert, Festpreis — vom Kleintransporter bis zum 7,5-Tonner.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Nordrhein-Westfalen" },
    "serviceType": "Umzugstransport", "url": `${BASE_URL}/umzugstransport`,
    "offers": { "@type": "Offer", "priceCurrency": "EUR", "description": "Festpreis nach Besichtigung" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/halteverbotszone": {
    "@context": "https://schema.org", "@type": "Service",
    "name": "Halteverbotszone einrichten für Umzug",
    "description": "Wir beantragen die Halteverbotszone für Ihren Umzug im Rhein-Erft-Kreis. Schnell, unkompliziert, behördlich genehmigt.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Rhein-Erft-Kreis" },
    "serviceType": "Halteverbotszone", "url": `${BASE_URL}/halteverbotszone`,
    "offers": { "@type": "Offer", "priceCurrency": "EUR", "description": "Kosten je nach Gemeinde" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/schwerlasttransport": {
    "@context": "https://schema.org", "@type": "Service",
    "name": "Schwerlasttransport",
    "description": "Professioneller Schwerlasttransport im Rhein-Erft-Kreis. Tresore, Klaviere, Maschinen — wir transportieren sicher, versichert und zum Festpreis.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Rhein-Erft-Kreis" },
    "serviceType": "Schwerlasttransport", "url": `${BASE_URL}/schwerlasttransport`,
    "offers": { "@type": "Offer", "priceCurrency": "EUR", "description": "Festpreis nach Besichtigung" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/aussenlifteinsatz": {
    "@context": "https://schema.org", "@type": "Service",
    "name": "Außenlift / Möbellift",
    "description": "Außenlifteinsatz für Umzüge in höhere Stockwerke. Sicher, schonend, schneller als Tragen durch enge Treppenhäuser. Im Rhein-Erft-Kreis und NRW.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Rhein-Erft-Kreis" },
    "serviceType": "Außenlift", "url": `${BASE_URL}/aussenlifteinsatz`,
    "offers": { "@type": "Offer", "priceCurrency": "EUR", "description": "Festpreis nach Besichtigung" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/tapeten-entfernen": {
    "@context": "https://schema.org", "@type": "Service",
    "name": "Tapeten entfernen",
    "description": "Professionelles Tapeten entfernen im Rhein-Erft-Kreis. Auch mehrlagige und hartnäckige Tapeten. Wände werden besenrein übergeben.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Rhein-Erft-Kreis" },
    "serviceType": "Tapeten entfernen", "url": `${BASE_URL}/tapeten-entfernen`,
    "offers": { "@type": "Offer", "priceCurrency": "EUR", "description": "Festpreis nach Besichtigung" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/grundreinigung": {
    "@context": "https://schema.org", "@type": "Service",
    "name": "Grundreinigung",
    "description": "Professionelle Grundreinigung im Rhein-Erft-Kreis. Tiefenreinigung für Wohnungen, Häuser und Büros — inkl. Küche, Bad, Böden und Fenster.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Rhein-Erft-Kreis" },
    "serviceType": "Grundreinigung", "url": `${BASE_URL}/grundreinigung`,
    "offers": { "@type": "Offer", "priceCurrency": "EUR", "description": "Festpreis nach Besichtigung" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/gebaeudereinigung": {
    "@context": "https://schema.org", "@type": "Service",
    "name": "Gebäudereinigung",
    "description": "Professionelle Gebäudereinigung im Rhein-Erft-Kreis. Treppenhäuser, Büros, Praxen, Außenbereiche — regelmäßig oder einmalig.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Rhein-Erft-Kreis" },
    "serviceType": "Gebäudereinigung", "url": `${BASE_URL}/gebaeudereinigung`,
    "offers": { "@type": "Offer", "priceCurrency": "EUR", "description": "Festpreis nach Besichtigung" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/renovierungsservice": {
    "@context": "https://schema.org", "@type": "Service",
    "name": "Renovierungsservice",
    "description": "Professioneller Renovierungsservice im Rhein-Erft-Kreis. Streichen, Tapezieren, Spachteln, kleine Reparaturen — alles aus einer Hand zum Festpreis.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Rhein-Erft-Kreis" },
    "serviceType": "Renovierung", "url": `${BASE_URL}/renovierungsservice`,
    "offers": { "@type": "Offer", "priceCurrency": "EUR", "description": "Festpreis nach Besichtigung" },
    "aggregateRating": AGGREGATE_RATING,
  },
  "/betriebsaufloesung": {
    "@context": "https://schema.org", "@type": "Service",
    "name": "Betriebsauflösung & Gewerberäumung",
    "description": "Professionelle Betriebsauflösung in NRW. Räumung von Produktionsstätten, Werkstätten, Lagerhallen und Gewerbeimmobilien — termingerecht zum Festpreis. Altmetallverwertung inklusive.",
    "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940" },
    "areaServed": { "@type": "AdministrativeArea", "name": "NRW" },
    "serviceType": "Betriebsauflösung", "url": `${BASE_URL}/betriebsaufloesung`,
    "offers": { "@type": "Offer", "priceCurrency": "EUR", "description": "Festpreis nach kostenloser Besichtigung" },
    "aggregateRating": AGGREGATE_RATING,
  },
};

const FAQ_SCHEMAS: Record<string, object> = {
  "/firmenaufloesung": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Wie läuft eine Firmenauflösung ab?", "acceptedAnswer": { "@type": "Answer", "text": "Zunächst besichtigen wir das Objekt und erstellen ein Festpreisangebot. Am vereinbarten Termin räumen wir alle Räumlichkeiten, demontieren Einbauten und sorgen für die fachgerechte Entsorgung. Verwertbare Gegenstände werden angerechnet." } },
      { "@type": "Question", "name": "Was passiert mit Inventar, Geräten und Mobiliar?", "acceptedAnswer": { "@type": "Answer", "text": "Wiederverwendbares Inventar, Büromöbel, Geräte und Maschinen werden bewertet und ihr Wert direkt vom Auflösungspreis abgezogen. Elektronik und Sondermüll werden gemäß den Vorschriften fachgerecht entsorgt." } },
      { "@type": "Question", "name": "Gibt es eine Wertanrechnung bei Firmenauflösungen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Metalle, Büromöbel, Regale, Maschinen oder Elektronik können den Auflösungspreis erheblich reduzieren. In Einzelfällen ist sogar eine vollständige Kostendeckung möglich." } },
      { "@type": "Question", "name": "Können Sie auch nach Geschäftsschluss oder am Wochenende arbeiten?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, nach Absprache arbeiten wir auch abends oder am Wochenende, um den Geschäftsbetrieb nicht zu stören. Sprechen Sie uns auf Ihre Anforderungen an." } },
      { "@type": "Question", "name": "Wie lange dauert eine Firmenauflösung?", "acceptedAnswer": { "@type": "Answer", "text": "Das hängt von der Größe der Flächen und dem Umfang des Inventars ab. Kleine Gewerbeeinheiten räumen wir oft in einem Tag, große Gewerbeflächen können mehrere Tage in Anspruch nehmen." } },
    ],
  },
  "/privatumzug": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Was kostet ein Privatumzug?", "acceptedAnswer": { "@type": "Answer", "text": "Die Kosten hängen von der Wohnungsgröße, dem Umzugsvolumen, dem Stockwerk und der Entfernung ab. Wir erstellen Ihnen nach einer kurzen Besichtigung oder Videobegehung ein transparentes Festpreisangebot ohne versteckte Kosten." } },
      { "@type": "Question", "name": "Was gehört zur Umzugsdienstleistung?", "acceptedAnswer": { "@type": "Answer", "text": "Unser Umzugsservice umfasst: Auf- und Abbauen von Möbeln, fachgerechtes Ein- und Auspacken, Transport mit eigenem Fahrzeug sowie das Aufstellen der Möbel in der neuen Wohnung. Auf Wunsch auch Verpackungsmaterial und Einpackservice." } },
      { "@type": "Question", "name": "Wie früh sollte man einen Privatumzug buchen?", "acceptedAnswer": { "@type": "Answer", "text": "Idealerweise 4–6 Wochen im Voraus, besonders in der Hochsaison (Sommer, Monatsende). Für dringende Umzüge versuchen wir kurzfristige Termine zu ermöglichen – rufen Sie uns einfach an." } },
      { "@type": "Question", "name": "Übernehmen Sie auch die Verpackung?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, auf Wunsch bieten wir einen vollständigen Einpackservice an. Wir verpacken alle Gegenstände sicher und stellen auch die passenden Umzugskartons und Materialien." } },
      { "@type": "Question", "name": "Können Sie auch Sperrmüll oder alte Möbel entsorgen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, als kombinierter Umzugs- und Entrümpelungsdienstleister können wir nicht mehr benötigte Möbel und Gegenstände direkt mit entsorgen oder an Interessierte weitergeben. Wertanrechnung ist ebenfalls möglich." } },
    ],
  },
  "/seniorenumzug": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Wie läuft ein Seniorenumzug ab?", "acceptedAnswer": { "@type": "Answer", "text": "Wir planen alles gemeinsam mit Ihnen: Besichtigung beider Wohnungen, Angebotserstellung, Einpacken, Transport und Aufbau in der neuen Wohnung. Auf Wunsch helfen wir auch bei der Haushaltsauflösung oder Einlagerung nicht mehr benötigter Gegenstände." } },
      { "@type": "Question", "name": "Können Sie auch bei der Haushaltsauflösung nach dem Umzug helfen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, das ist ein typischer Kombinationsauftrag: Wir ziehen den Senior oder die Seniorin um und räumen anschließend die alte Wohnung komplett aus – alles aus einer Hand zum Festpreis." } },
      { "@type": "Question", "name": "Was kostet ein Seniorenumzug?", "acceptedAnswer": { "@type": "Answer", "text": "Die Kosten richten sich nach Umfang, Entfernung und gewünschten Zusatzleistungen. Nach kostenloser Besichtigung erhalten Sie ein faires Festpreisangebot ohne Überraschungen. In manchen Fällen übernimmt die Pflegekasse einen Teil der Kosten." } },
      { "@type": "Question", "name": "Können Umzugskosten bei Senioren von der Pflegekasse übernommen werden?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, unter bestimmten Voraussetzungen (Pflegegrad, Einzug in betreutes Wohnen oder Pflegeeinrichtung) kann die Pflegekasse Kosten für den Umzug und die Wohnungsauflösung übernehmen. Wir beraten Sie gerne dazu." } },
      { "@type": "Question", "name": "Wie lange dauert ein Seniorenumzug?", "acceptedAnswer": { "@type": "Answer", "text": "Ein normaler Seniorenumzug (2–3 Zimmer) ist in der Regel an einem Tag erledigt. Bei größeren Wohnungen oder kombinierten Aufträgen mit Haushaltsauflösung können 2 Tage nötig sein." } },
    ],
  },
  "/bueroumzug": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Wie lange dauert ein Büroumzug?", "acceptedAnswer": { "@type": "Answer", "text": "Das hängt von der Bürogröße und dem Umfang ab. Kleine Büros (bis 10 Arbeitsplätze) bewegen wir oft an einem Tag. Größere Büros planen wir als mehrtägige Aktion – auf Wunsch auch über das Wochenende." } },
      { "@type": "Question", "name": "Können Sie Büromöbel demontieren und wieder aufbauen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir demontieren alle Büromöbel, Regalsysteme und Trennwände fachgerecht und montieren sie im neuen Büro wieder auf. Wir arbeiten schnell und sorgfältig, um Ausfallzeiten zu minimieren." } },
      { "@type": "Question", "name": "Ist ein Büroumzug am Wochenende oder nach Geschäftsschluss möglich?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, für minimale Betriebsunterbrechungen arbeiten wir auf Wunsch auch am Wochenende oder abends. Sprechen Sie uns bei der Terminplanung darauf an." } },
      { "@type": "Question", "name": "Was passiert mit Altgeräten, Druckern und Elektronik?", "acceptedAnswer": { "@type": "Answer", "text": "Nicht mehr benötigte Geräte können wir fachgerecht entsorgen oder – sofern noch wertvoll – ankaufen und den Wert vom Umzugspreis abziehen. IT-Equipment wird gesondert und sicher transportiert." } },
      { "@type": "Question", "name": "Wie früh sollte man einen Büroumzug planen?", "acceptedAnswer": { "@type": "Answer", "text": "Idealerweise 6–8 Wochen im Voraus, damit wir Terminwünsche, Montage-Pläne und eventuelle Sonderanforderungen rechtzeitig koordinieren können." } },
    ],
  },
  "/firmenumzug": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Was kostet ein Firmenumzug in NRW?", "acceptedAnswer": { "@type": "Answer", "text": "Die Kosten richten sich nach Unternehmensgröße, Stockwerk und Entfernung. Nach kostenloser Besichtigung erhalten Sie einen verbindlichen Festpreis." } },
      { "@type": "Question", "name": "Wie lange dauert ein Firmenumzug?", "acceptedAnswer": { "@type": "Answer", "text": "Kleine Büros in ein bis zwei Tagen, größere Unternehmen phasenweise für minimale Betriebsunterbrechung." } },
      { "@type": "Question", "name": "Können wir den Firmenumzug auf ein Wochenende legen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, Wochenendumzüge sind möglich und empfehlenswert, damit montags der Betrieb am neuen Standort direkt startet." } },
      { "@type": "Question", "name": "Übernehmen Sie Demontage und Montage von Büromöbeln?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir demontieren, kennzeichnen und montieren alle Büromöbel fachgerecht am neuen Standort." } },
      { "@type": "Question", "name": "Was ist beim Transport sensibler Unterlagen zu beachten?", "acceptedAnswer": { "@type": "Answer", "text": "Akten werden in verschlossenen Umzugsboxen transportiert. Für besonders sensible Unterlagen bieten wir gesonderte Sicherungsmaßnahmen an." } },
    ],
  },
  "/gewerbeumzug": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Was kostet ein Gewerbeumzug in NRW?", "acceptedAnswer": { "@type": "Answer", "text": "Kosten variieren nach Art und Größe des Gewerbes. Kostenlose Besichtigung, danach Festpreisangebot ohne versteckte Kosten." } },
      { "@type": "Question", "name": "Können Sie schwere Maschinen transportieren?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir haben Equipment und Erfahrung für Schwertransporte gewerblicher Maschinen und Geräte." } },
      { "@type": "Question", "name": "Wie minimieren Sie Betriebsunterbrechungen?", "acceptedAnswer": { "@type": "Answer", "text": "Durch sorgfältige Planung und auf Wunsch Samstags-/Sonntagsumzüge für minimale Ausfallzeiten." } },
      { "@type": "Question", "name": "Helfen Sie bei der Einrichtung am neuen Standort?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, Regalsysteme, Ladeneinbauten und Möbel werden am neuen Standort nach Plan aufgebaut." } },
      { "@type": "Question", "name": "Übernehmen Sie auch Gewerbeabfallentsorgung?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, nicht mehr benötigtes Inventar kann direkt entsorgt oder verwertet werden – mit möglicher Wertanrechnung." } },
    ],
  },
  "/behoerdenumzug": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Wie werden sensible Akten beim Behördenumzug gesichert?", "acceptedAnswer": { "@type": "Answer", "text": "In verschlossenen Archivboxen oder gesicherten Containern. Verschwiegenheitserklärung und DSGVO-Abstimmung möglich." } },
      { "@type": "Question", "name": "Können Behördenumzüge außerhalb der Amtszeiten stattfinden?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, auf Wunsch abends, am Wochenende oder an Feiertagen für minimale Betriebsunterbrechung." } },
      { "@type": "Question", "name": "Was kostet ein Behördenumzug in NRW?", "acceptedAnswer": { "@type": "Answer", "text": "Kosten abhängig von Umfang und Fläche. Kostenloses Festpreisangebot, das Ausschreibungsanforderungen erfüllt." } },
      { "@type": "Question", "name": "Können Sie Archivbestände umziehen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, sicherer Aktentransport und Archivumzug sind unsere Spezialität. Auch in Kombination buchbar." } },
      { "@type": "Question", "name": "Wie koordinieren Sie Umzüge über mehrere Abteilungen?", "acceptedAnswer": { "@type": "Answer", "text": "Mit detailliertem Etappenplan – jede Abteilung wird einzeln umgezogen, Betrieb bleibt aufrechterhalten." } },
    ],
  },
  "/archivumzug": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Wie werden Akten beim Archivumzug verpackt?", "acceptedAnswer": { "@type": "Answer", "text": "In beschrifteten und nummerierten Archivboxen oder verschlossenen Sicherheitsbehältern für lückenlose Nachverfolgbarkeit." } },
      { "@type": "Question", "name": "Wie viele Laufmeter können Sie transportieren?", "acceptedAnswer": { "@type": "Answer", "text": "Von wenigen Regalmeter bis mehrere hundert Laufmeter – wir skalieren Fahrzeuge und Team entsprechend." } },
      { "@type": "Question", "name": "Wie sichern Sie die Vertraulichkeit?", "acceptedAnswer": { "@type": "Answer", "text": "Diskrete Transporte in verschlossenen Behältern, Vertraulichkeitsvereinbarung und DSGVO-Abstimmung möglich." } },
      { "@type": "Question", "name": "Können Sie das Archiv am neuen Standort einräumen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, vollständiger Service inklusive systematischem Einräumen nach Ihrer Vorgabe am Zielort." } },
      { "@type": "Question", "name": "Was kostet ein Archivumzug in NRW?", "acceptedAnswer": { "@type": "Answer", "text": "Abhängig von Menge, Weg und Leistungsumfang. Kostenloses Festpreisangebot nach Bestandsaufnahme." } },
    ],
  },
  "/fernumzug": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Was kostet ein Fernumzug aus NRW?", "acceptedAnswer": { "@type": "Answer", "text": "3-Zimmer-Wohnung NRW → München ca. 2.500–5.000 €. Verbindlicher Festpreis nach kostenloser Besichtigung." } },
      { "@type": "Question", "name": "Wie lange dauert ein Fernumzug?", "acceptedAnswer": { "@type": "Answer", "text": "Bei Strecken bis 400 km oft an einem Tag. Längere Strecken bis zwei Tage. Einzug am Folgetag möglich." } },
      { "@type": "Question", "name": "Können Sie Möbel zwischenlagern?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, Einlagerung kombinierbar wenn Einzugstermine nicht übereinstimmen. Flexible Laufzeiten, faire Preise." } },
      { "@type": "Question", "name": "Was passiert bei einem Schaden beim Fernumzug?", "acceptedAnswer": { "@type": "Answer", "text": "Alles vollversichert. Schäden werden über unsere Umzugsversicherung abgedeckt, Zustandsdokumentation möglich." } },
      { "@type": "Question", "name": "Helfen Sie auch bei Umzügen aus dem Ausland nach NRW?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir helfen auch bei Umzügen aus dem europäischen Ausland nach NRW." } },
    ],
  },
  "/einlagerung-rhein-erft-kreis": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Wie lange kann ich Möbel und Hausrat einlagern?", "acceptedAnswer": { "@type": "Answer", "text": "Die Einlagerungsdauer ist flexibel – von wenigen Wochen bis zu mehreren Monaten oder länger. Wir passen die Vertragslaufzeit individuell an Ihre Situation an." } },
      { "@type": "Question", "name": "Was kostet die Einlagerung von Möbeln?", "acceptedAnswer": { "@type": "Answer", "text": "Die Kosten hängen vom benötigten Volumen und der Lagerdauer ab. Nach einer kurzen Einschätzung des Umfangs erhalten Sie ein faires Festpreisangebot. Rufen Sie uns an: 02271 5880940." } },
      { "@type": "Question", "name": "Sind die eingelagerten Gegenstände versichert?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, eingelagerte Gegenstände sind versichert. Die genauen Versicherungsdetails besprechen wir bei der Angebotsstellung mit Ihnen." } },
      { "@type": "Question", "name": "Kann ich während der Lagerzeit auf meine Sachen zugreifen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, nach vorheriger Absprache ist der Zugang zum Lager möglich. Bitte kontaktieren Sie uns, um einen Termin zu vereinbaren." } },
      { "@type": "Question", "name": "Kann ich die Einlagerung mit einem Umzug oder einer Entrümpelung kombinieren?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, das ist eine unserer häufigsten Kombinationsleistungen. Wir räumen aus, transportieren direkt ins Lager und liefern alles an Ihre neue Adresse, wenn Sie bereit sind." } },
    ],
  },
  "/kosten-entruempelung": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Wie berechnen sich die Kosten einer Entrümpelung?", "acceptedAnswer": { "@type": "Answer", "text": "Die Kosten richten sich nach der zu entrümpelnden Fläche (m²), dem Füllgrad, dem Stockwerk (Aufwand für Transport), der Art des Mülls und dem Wert verwertbarer Gegenstände. Ein Keller ab ca. 350 €, eine Wohnung ab ca. 800 €." } },
      { "@type": "Question", "name": "Was ist in den Kosten der Entrümpelung enthalten?", "acceptedAnswer": { "@type": "Answer", "text": "Im Festpreis enthalten sind: Demontage und Zerlegen von Möbeln, Abtransport aller Gegenstände, fachgerechte Entsorgung (Sperrmüll, Elektronik, Sondermüll), und besenreine Übergabe. Keine versteckten Kosten." } },
      { "@type": "Question", "name": "Gibt es versteckte Kosten bei einer Entrümpelung?", "acceptedAnswer": { "@type": "Answer", "text": "Nein. Wir arbeiten ausschließlich mit Festpreisen nach vorheriger Besichtigung. Der vereinbarte Preis gilt – unabhängig davon, wie lange die Arbeit dauert." } },
      { "@type": "Question", "name": "Kann ich Entrümpelungskosten von der Steuer absetzen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, Entrümpelungskosten können als haushaltsnahe Dienstleistung steuerlich geltend gemacht werden – bis zu 20 % der Arbeitskosten (max. 4.000 € pro Jahr). Wir stellen Ihnen eine entsprechende Rechnung aus." } },
      { "@type": "Question", "name": "Wann ist eine kostenlose Entrümpelung möglich?", "acceptedAnswer": { "@type": "Answer", "text": "In seltenen Fällen – wenn der Wert der verwertbaren Gegenstände (Altmetall, Antiquitäten, Elektronikartikel) die Entrümpelungskosten übersteigt. Das kommt vor allem bei großen Mengen Altmetall oder sehr hochwertigen Gegenständen vor." } },
    ],
  },
  "/kosten-umzug": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Was kostet ein Umzug durchschnittlich?", "acceptedAnswer": { "@type": "Answer", "text": "Ein lokaler Privatumzug (2–3 Zimmer) kostet im Schnitt 500–1.200 €. Fernumzüge oder größere Wohnungen können 1.500–3.000 € und mehr kosten. Wir erstellen Ihnen nach Besichtigung ein genaues Festpreisangebot." } },
      { "@type": "Question", "name": "Wovon hängen die Umzugskosten ab?", "acceptedAnswer": { "@type": "Answer", "text": "Entscheidend sind: Wohnungsgröße, Etage (mit/ohne Aufzug), Entfernung, gewünschte Zusatzleistungen (Einpacken, Auf-/Abbau), Zugang (Halteverbotszone nötig?) und Sonderposten wie Klavier oder Tresor." } },
      { "@type": "Question", "name": "Was ist beim Umzugsangebot zu beachten?", "acceptedAnswer": { "@type": "Answer", "text": "Achten Sie auf: Festpreis vs. Stundenabrechnung, was genau inkludiert ist, ob Verpackungsmaterial extra kostet, und ob das Unternehmen versichert ist. Wir arbeiten ausschließlich mit Festpreisen." } },
      { "@type": "Question", "name": "Wie kann ich Umzugskosten sparen?", "acceptedAnswer": { "@type": "Answer", "text": "Tipps: Selbst einpacken, Umzug unter der Woche (günstiger als Wochenende), alte Möbel vorab entrümpeln, Halteverbotszone frühzeitig beantragen, und mehrere Angebote vergleichen." } },
      { "@type": "Question", "name": "Können Umzugskosten steuerlich abgesetzt werden?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, bei einem beruflich bedingten Umzug können die Kosten als Werbungskosten abgesetzt werden. Bei privatem Umzug sind die Handwerkerkosten (Montage, Auf-/Abbau) als haushaltsnahe Dienstleistung absetzbar." } },
    ],
  },
  "/entruempelung-in-der-naehe": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Wie finde ich eine seriöse Entrümpelung in der Nähe?", "acceptedAnswer": { "@type": "Answer", "text": "Achten Sie auf Google-Bewertungen, transparente Festpreise, eine klare Webseite mit Adresse und Telefonnummer sowie Vor-Ort-Besichtigung vor der Auftragserteilung. Stressfrei Entrümpelungen hat 5,0 Sterne bei Google (84 Bewertungen)." } },
      { "@type": "Question", "name": "Wie schnell können Sie zu mir kommen?", "acceptedAnswer": { "@type": "Answer", "text": "Oft sind wir innerhalb von 24–48 Stunden vor Ort für eine kostenlose Besichtigung. In dringenden Fällen versuchen wir, den Auftrag so schnell wie möglich durchzuführen." } },
      { "@type": "Question", "name": "In welchen Städten sind Sie tätig?", "acceptedAnswer": { "@type": "Answer", "text": "Wir entrümpeln im gesamten Rhein-Erft-Kreis und darüber hinaus: Bergheim, Kerpen, Bedburg, Pulheim, Frechen, Hürth, Erftstadt, Elsdorf, Grevenbroich, Rommerskirchen und Köln." } },
      { "@type": "Question", "name": "Was kostet eine Entrümpelung in meiner Nähe?", "acceptedAnswer": { "@type": "Answer", "text": "Die Kosten richten sich nach Fläche, Füllgrad und Art des Inhalts. Ein Keller beginnt ab ca. 350 €, eine Wohnungsauflösung ab ca. 800 €. Sie erhalten nach kostenloser Besichtigung einen verbindlichen Festpreis." } },
      { "@type": "Question", "name": "Bieten Sie auch in Köln Entrümpelungen an?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir sind regelmäßig in Köln und Umgebung tätig. Kontaktieren Sie uns für eine schnelle Terminvereinbarung." } },
    ],
  },
  "/betriebsaufloesung": {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Was ist der Unterschied zwischen Betriebsauflösung und Firmenauflösung?", "acceptedAnswer": { "@type": "Answer", "text": "Eine Betriebsauflösung bezieht sich auf die Räumung produktiver Betriebsstätten — Werkstätten, Produktionshallen, Lagerhallen, Gewerbebetriebe mit Maschinen und Industrieausstattung. Eine Firmenauflösung umfasst typischerweise Büros und administrative Bereiche. Wir führen beide Arten durch." } },
      { "@type": "Question", "name": "Können Sie auch Insolvenz-Betriebsauflösungen durchführen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Wir haben Erfahrung mit Betriebsauflösungen im Rahmen von Insolvenzen und arbeiten auch mit Insolvenzverwaltern zusammen. Kurzfristige Termine und strenge Fristen sind für uns selbstverständlich." } },
      { "@type": "Question", "name": "Was passiert mit den Maschinen und Anlagen?", "acceptedAnswer": { "@type": "Answer", "text": "Funktionstüchtige Maschinen können verwertet und auf den Räumungspreis angerechnet werden. Defekte oder veraltete Anlagen werden fachgerecht demontiert und als Schrottmetall verwertet. Sondermüll entsorgen wir vorschriftsgemäß." } },
      { "@type": "Question", "name": "Wie schnell kann die Betriebsauflösung stattfinden?", "acceptedAnswer": { "@type": "Answer", "text": "Nach der Besichtigung und Angebotsannahme sind wir in der Regel innerhalb von 3–10 Werktagen einsatzbereit. Bei dringenden Fällen können wir auch kurzfristiger reagieren." } },
      { "@type": "Question", "name": "Was kostet eine Betriebsauflösung?", "acceptedAnswer": { "@type": "Answer", "text": "Die Kosten hängen stark von Fläche, Füllgrad und Entsorgungsaufwand ab. Durch Wertanrechnung von Metallen und verwertbaren Gütern können die Kosten erheblich sinken. Nach der kostenlosen Besichtigung erstellen wir ein verbindliches Festpreisangebot." } },
      { "@type": "Question", "name": "Führen Sie auch Teilräumungen von Betrieben durch?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir räumen auch einzelne Hallen, Lagerbereiche oder Gebäudeteile. Sie definieren den Umfang, wir führen exakt das aus — nicht mehr und nicht weniger." } },
      { "@type": "Question", "name": "Erstellen Sie einen Entsorgungsnachweis?", "acceptedAnswer": { "@type": "Answer", "text": "Auf Wunsch dokumentieren wir alle entsorgten Materialien und stellen entsprechende Nachweise aus — wichtig für Behörden, Insolvenzverwalter und Eigentumsübertragungen." } },
    ],
  },
  "/einpackservice": {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Bringen Sie das Verpackungsmaterial mit?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, komplett. Kartons in verschiedenen Größen, Luftpolsterfolie, Packpapier, Klebeband und Spezialverpackungen für Bilder und Spiegel — wir bringen alles mit, inklusive im Preis." } },
      { "@type": "Question", "name": "Kann ich den Einpackservice auch ohne Umzug buchen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, Sie können den Einpackservice separat buchen und danach einen anderen Transporteur beauftragen. Wir sind flexibel und arbeiten auch mit Ihren eigenen Helfern zusammen." } },
      { "@type": "Question", "name": "Wie lange dauert das Einpacken einer 3-Zimmer-Wohnung?", "acceptedAnswer": { "@type": "Answer", "text": "In der Regel 4–8 Stunden mit 2–3 Personen, je nach Menge und Zerbrechlichkeit der Gegenstände. Besonders viel Geschirr, Bücher oder Sammlungen brauchen mehr Zeit." } },
      { "@type": "Question", "name": "Sind meine Sachen während des Einpackens versichert?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, alle Gegenstände sind während unserer Arbeit durch unsere Betriebshaftpflicht und Transportversicherung abgedeckt. Bei Schäden greift die Versicherung unmittelbar." } },
      { "@type": "Question", "name": "Was ist mit sehr wertvollen oder empfindlichen Gegenständen?", "acceptedAnswer": { "@type": "Answer", "text": "Kunstwerke, Antiquitäten und besonders wertvolle Stücke verpacken wir mit besonderer Sorgfalt und Spezialpolsterung. Informieren Sie uns vorab, damit wir das passende Material mitbringen." } },
      { "@type": "Question", "name": "Was kostet der Einpackservice?", "acceptedAnswer": { "@type": "Answer", "text": "Der Preis richtet sich nach der Größe der Wohnung und dem Umfang. Typisch sind 300–700 € für eine 2-3 Zimmer Wohnung, inklusive Verpackungsmaterial. Wir erstellen ein verbindliches Festpreisangebot." } },
      { "@type": "Question", "name": "Können Sie Einpackservice und Auspackservice kombinieren?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, das ist unsere häufigste Kombination. Wir packen ein, transportieren und packen am Zielort aus — alles aus einer Hand zum Kombi-Festpreis." } },
    ],
  },
  "/auspackservice": {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Muss ich beim Auspacken dabei sein?", "acceptedAnswer": { "@type": "Answer", "text": "Es ist hilfreich, wenn Sie beim Start kurz vor Ort sind, um uns zu zeigen, was wohin soll. Danach können Sie ruhig weg — wir erledigen den Rest gewissenhaft." } },
      { "@type": "Question", "name": "Können Sie auch Küchen einräumen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, das ist einer unserer Schwerpunkte. Wir räumen Küchen, Kühlschränke, Vorratskammern und alle Schränke nach Ihren Wünschen ein — praktisch und sinnvoll sortiert." } },
      { "@type": "Question", "name": "Wie lange dauert das Auspacken einer 3-Zimmer-Wohnung?", "acceptedAnswer": { "@type": "Answer", "text": "In der Regel 4–8 Stunden mit 2–3 Personen, abhängig vom Umfang und der Anzahl der Kartons. Mit Möbelaufbau kann es etwas länger dauern." } },
      { "@type": "Question", "name": "Was passiert mit alten Kartons und Verpackungen?", "acceptedAnswer": { "@type": "Answer", "text": "Alles wird von uns zusammengefaltet und mitgenommen und umweltgerecht entsorgt. Sie müssen sich um nichts kümmern." } },
      { "@type": "Question", "name": "Können Sie auch Möbel aufbauen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, Möbelmontage ist ein fester Bestandteil unseres Angebots. Am besten gleich dazu buchen, damit alles aus einer Hand abläuft und keine Koordination notwendig ist." } },
      { "@type": "Question", "name": "Eignet sich der Auspackservice auch für Senioren?", "acceptedAnswer": { "@type": "Answer", "text": "Absolut ja — das ist tatsächlich einer unserer häufigsten Anwendungsfälle. Wir sind geduldig, fürsorglich und helfen Senioren beim Einzug ohne Zeitdruck und mit viel Verständnis." } },
      { "@type": "Question", "name": "Kann ich den Auspackservice auch ohne Umzug buchen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, auch als Einzelleistung möglich — zum Beispiel wenn Sie selbst oder mit Freunden umgezogen sind und jetzt Hilfe beim Auspacken und Einräumen brauchen." } },
    ],
  },
  "/moebelmontagedienst": {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Können Sie auch Einbauküchen demontieren und neu aufbauen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, das ist eines unserer Spezialgebiete. Wir demontieren, reinigen die Teile, transportieren und bauen die Küche am neuen Standort wieder auf — inklusive Anschlussarbeiten für Spüle, Herd und Geschirrspüler." } },
      { "@type": "Question", "name": "Was ist, wenn Teile fehlen oder beschädigt sind?", "acceptedAnswer": { "@type": "Answer", "text": "Wir informieren Sie sofort, wenn wir fehlende oder beschädigte Teile feststellen, und beraten Sie zu den nächsten Schritten — ob Ersatzbestellung beim Hersteller oder alternative Lösung." } },
      { "@type": "Question", "name": "Können Sie auch neue (noch nicht aufgebaute) Möbel aufbauen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir bauen auch brandneue Möbel aus dem Karton auf — egal ob vom Möbelhaus, IKEA oder Online-Shop. Inklusive Einräumen und korrekter Aufstellung nach Ihren Wünschen." } },
      { "@type": "Question", "name": "Bringen Sie Werkzeug mit?", "acceptedAnswer": { "@type": "Answer", "text": "Komplett. Akkuschrauber, Dübelsatz, Wasserwaage, Inbusschlüssel aller Größen, Schutzfolie für Böden — wir kommen voll ausgestattet." } },
      { "@type": "Question", "name": "Wie wird der Preis berechnet?", "acceptedAnswer": { "@type": "Answer", "text": "Der Preis hängt von der Anzahl der Möbelstücke, dem Aufwand und der Komplexität ab. Nach kurzer Absprache erstellen wir ein verbindliches Festpreisangebot." } },
      { "@type": "Question", "name": "Können Sie auch IKEA-Möbel montieren?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, natürlich. IKEA-Möbel — PAX-Schränke, Kallax-Regale, Hemnes-Serien, Billy-Regale, Malm-Betten und mehr — montieren wir täglich." } },
      { "@type": "Question", "name": "Wie weit fahren Sie für Möbelmontagen?", "acceptedAnswer": { "@type": "Answer", "text": "Wir sind im gesamten Rhein-Erft-Kreis und dem angrenzenden Großraum Köln tätig. Für weiter entfernte Einsätze sprechen Sie uns an — wir finden eine Lösung." } },
    ],
  },
  "/umzugstransport": {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Welche Fahrzeuggrößen haben Sie?", "acceptedAnswer": { "@type": "Answer", "text": "Wir verfügen über Kleintransporter (ca. 8 m³), 3,5-Tonner (ca. 15 m³) und 7,5-Tonner (ca. 40 m³). Für große Haushalte setzen wir auch mehrere Fahrzeuge ein." } },
      { "@type": "Question", "name": "Transportieren Sie auch überregional — Fernumzüge?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir transportieren in ganz NRW und darüber hinaus. Umzüge nach Bayern, Baden-Württemberg oder Berlin sind möglich. Bitte sprechen Sie uns für Fernumzüge direkt an." } },
      { "@type": "Question", "name": "Was ist, wenn etwas beim Transport beschädigt wird?", "acceptedAnswer": { "@type": "Answer", "text": "Alle Transporte sind vollversichert. Bei Schäden greift unsere Transportversicherung — wir klären das für Sie direkt mit der Versicherung." } },
      { "@type": "Question", "name": "Kann ich auch nur den Transport buchen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, reiner Transport ohne weitere Leistungen ist möglich. Sie können aber auch Ein- und Auspackservice sowie Möbelmontage dazu buchen — alles aus einer Hand." } },
      { "@type": "Question", "name": "Wie planen Sie den Umzugstermin?", "acceptedAnswer": { "@type": "Answer", "text": "Wir koordinieren den Termin sorgfältig, prüfen Parkplatzsituation und Zufahrt vorab und beantragen bei Bedarf Halteverbotszonen für Sie." } },
      { "@type": "Question", "name": "Was passiert, wenn es am Umzugstag regnet?", "acceptedAnswer": { "@type": "Answer", "text": "Wir kommen bei jedem Wetter. Regen ist kein Grund für Absagen — wir haben Folien, Decken und wasserdichte Verpackungen dabei." } },
      { "@type": "Question", "name": "Transportieren Sie auch Pflanzen und empfindliche Gegenstände?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, Pflanzen, Gemälde, Spiegel, Aquarien und andere empfindliche Gegenstände transportieren wir mit besonderer Sorgfalt. Bitte beim Anfragen erwähnen." } },
    ],
  },
  "/halteverbotszone": {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Wie lange im Voraus muss die Halteverbotszone beantragt werden?", "acceptedAnswer": { "@type": "Answer", "text": "In der Regel 5–10 Werktage vor dem Umzugstag. Je nach Gemeinde kann es auch länger dauern. Deshalb sollten Sie so früh wie möglich anfragen." } },
      { "@type": "Question", "name": "Was kostet die Halteverbotszone?", "acceptedAnswer": { "@type": "Answer", "text": "Die Gebühren bestehen aus der behördlichen Genehmigungsgebühr (je nach Gemeinde 25–100 €) und unserer Dienstleistungsgebühr. Wir nennen Ihnen die Gesamtkosten transparent vorab." } },
      { "@type": "Question", "name": "Können Sie die Zone für beide Adressen einrichten?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wenn Start- und Zieladresse in unserem Tätigkeitsgebiet liegen, richten wir die Halteverbotszone an beiden Adressen ein — in der Regel zu vergünstigten Gesamtkonditionen." } },
      { "@type": "Question", "name": "Was passiert, wenn trotzdem jemand in der Halteverbotszone parkt?", "acceptedAnswer": { "@type": "Answer", "text": "Mit einer offiziellen Genehmigung haben Sie das Recht, die Polizei oder ein Abschleppunternehmen zu rufen. Wir unterstützen Sie dabei, falls nötig." } },
      { "@type": "Question", "name": "Ist die Halteverbotszone im Umzugspreis enthalten?", "acceptedAnswer": { "@type": "Answer", "text": "Die Halteverbotszone ist eine optionale Zusatzleistung. Wir nennen Ihnen die Kosten transparent im Vorfeld — keine Überraschungen." } },
      { "@type": "Question", "name": "Können Sie auch in Köln oder Düsseldorf eine Halteverbotszone einrichten?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir sind nicht auf den Rhein-Erft-Kreis beschränkt. Auch in Köln, Leverkusen, Düsseldorf und anderen NRW-Städten können wir Halteverbotszonen beantragen." } },
      { "@type": "Question", "name": "Wie lang muss die Halteverbotszone sein?", "acceptedAnswer": { "@type": "Answer", "text": "Für einen 7,5-Tonner empfehlen wir mindestens 12–15 Meter. Für mehrere Fahrzeuge entsprechend mehr. Wir beraten Sie, was in Ihrer Situation sinnvoll ist." } },
    ],
  },
  "/schwerlasttransport": {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Können Sie auch Pianos und Flügel transportieren?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir haben langjährige Erfahrung mit dem Transport von Klavieren, Pianos und Flügeln. Diese erfordern besondere Sorgfalt, ein spezielles Klavierrollbrett und ausreichend Personal." } },
      { "@type": "Question", "name": "Was ist das maximale Gewicht, das Sie transportieren können?", "acceptedAnswer": { "@type": "Answer", "text": "Das hängt vom Objekt und der Situation ab. Tresore bis 500 kg und mehr sind für uns kein Problem. Wir besprechen das individuell nach Besichtigung." } },
      { "@type": "Question", "name": "Können Sie durch enge Treppenhäuser transportieren?", "acceptedAnswer": { "@type": "Answer", "text": "Wir prüfen das immer vor Ort. Für enge Treppen haben wir spezielle Techniken und Hilfsmittel. Falls es nicht geht, organisieren wir alternativ den Außenlift oder einen Kran." } },
      { "@type": "Question", "name": "Sind Schäden am Boden oder Treppenhaus versichert?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, alle möglichen Schäden an Böden, Wänden, Treppengeländern und Türrahmen sind durch unsere Betriebshaftpflichtversicherung gedeckt." } },
      { "@type": "Question", "name": "Transportieren Sie auch Maschinen und Industriegüter?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, für Firmen transportieren wir Maschinen, Laborgeräte, CNC-Anlagen und schwere Büroausstattungen — auch innerhalb von Betrieben oder bei Betriebsverlagerungen." } },
      { "@type": "Question", "name": "Können Sie Tresore in obere Stockwerke transportieren?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Tresore bis zu mehreren hundert Kilogramm transportieren wir über Treppen oder per Außenlift in jedes Stockwerk — sicher und ohne Beschädigungen." } },
      { "@type": "Question", "name": "Was kostet ein Schwerlasttransport?", "acceptedAnswer": { "@type": "Answer", "text": "Der Preis hängt von Gewicht, Maßen, Entfernung, Stockwerk und Schwierigkeitsgrad ab. Wir erstellen nach Besichtigung oder Foto-Einschätzung ein verbindliches Festpreisangebot." } },
    ],
  },
  "/aussenlifteinsatz": {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Bis in welche Etage reicht der Außenlift?", "acceptedAnswer": { "@type": "Answer", "text": "Unser Außenlift reicht standardmäßig bis in das 5. Stockwerk und höher — je nach Modell und Gebäudestruktur. Bitte sprechen Sie uns an." } },
      { "@type": "Question", "name": "Brauche ich eine Genehmigung für den Außenlift?", "acceptedAnswer": { "@type": "Answer", "text": "In der Regel nicht. Wenn der Lift öffentlichen Verkehrsraum beansprucht, beantragen wir eine Halteverbotszone und ggf. eine Sondernutzungserlaubnis — inklusive im Service." } },
      { "@type": "Question", "name": "Wie groß dürfen die Möbel sein?", "acceptedAnswer": { "@type": "Answer", "text": "Die Nutzlastbühne ist ca. 60 × 150 cm groß und trägt bis zu 200 kg. Selbst große Sofas, Schlafzimmerschränke und Kühlschränke passen problemlos." } },
      { "@type": "Question", "name": "Geht das auch über Balkon oder Fenster?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, der Außenlift kann über Balkone oder große Fenster be- und entladen werden. Das ist oft die einfachste Variante." } },
      { "@type": "Question", "name": "Ist der Außenlifteinsatz teuer?", "acceptedAnswer": { "@type": "Answer", "text": "Im Vergleich zum manuellen Tragen durch enge Treppenhäuser — mit dem Risiko von Schäden und dem enormen Zeitaufwand — ist der Außenlift oft die günstigere und sicherere Option." } },
      { "@type": "Question", "name": "Wie lange dauert der Einsatz des Außenlifts?", "acceptedAnswer": { "@type": "Answer", "text": "Aufbau ca. 30–60 Minuten, Transport je nach Umfang 1–4 Stunden, Abbau ca. 30 Minuten. Der gesamte Einsatz ist meist in einem halben bis ganzen Tag abgeschlossen." } },
      { "@type": "Question", "name": "Was passiert, wenn der Außenlift nicht passt?", "acceptedAnswer": { "@type": "Answer", "text": "Wir informieren Sie nach der Vorprüfung sofort. In diesem Fall bieten wir alternative Lösungen an — zum Beispiel Kran-Unterstützung oder spezielle Trage-Technik für enge Treppenhäuser." } },
    ],
  },
  "/tapeten-entfernen": {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Können Sie auch mehrere Lagen Tapete entfernen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, das ist unser Spezialgebiet. Auch bei 3 oder 4 Lagen übereinander, hartnäckigen Leimresten oder beschichteten Tapeten haben wir die richtigen Methoden und Geräte." } },
      { "@type": "Question", "name": "Was passiert, wenn die Wand darunter beschädigt ist?", "acceptedAnswer": { "@type": "Answer", "text": "Wir informieren Sie sofort und können auf Wunsch kleinere Wandreparaturen oder das Grundieren mit einkalkulieren." } },
      { "@type": "Question", "name": "Müssen wir Möbel ausräumen?", "acceptedAnswer": { "@type": "Answer", "text": "Idealerweise ja — für einen reibungslosen Ablauf. Wenn das nicht möglich ist, schützen wir verbleibende Möbel sorgfältig mit Folien und Decken." } },
      { "@type": "Question", "name": "Entsorgen Sie die alten Tapeten?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, alle Tapeten, Kleberreste und Verpackungen werden von uns ordnungsgemäß entsorgt. Keine Fahrten zur Deponie, kein zusätzlicher Sperrmüll für Sie." } },
      { "@type": "Question", "name": "Kann ich danach direkt streichen?", "acceptedAnswer": { "@type": "Answer", "text": "Nicht immer sofort — die Wände müssen ggf. 24–48 Stunden trocknen. Danach empfehlen wir Grundierung vor dem Streichen. Wir beraten Sie, was als nächstes zu tun ist." } },
      { "@type": "Question", "name": "Was kostet Tapeten entfernen pro Quadratmeter?", "acceptedAnswer": { "@type": "Answer", "text": "In der Regel 4–10 € pro m² je nach Tapetentyp, Lagenzahl und Wandzustand. Für eine 3-Zimmer-Wohnung liegen die Kosten typischerweise bei 400–900 €. Wir erstellen ein verbindliches Festpreisangebot." } },
      { "@type": "Question", "name": "Können Sie Raufaser entfernen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, Raufaser ist einer der häufigsten Fälle. Mit Dampf und der richtigen Technik lösen wir auch hartnäckige Raufaser sauber und schonend ab." } },
    ],
  },
  "/grundreinigung": {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Was ist der Unterschied zwischen Grundreinigung und normaler Reinigung?", "acceptedAnswer": { "@type": "Answer", "text": "Die Grundreinigung ist eine Tiefenreinigung — Schränke innen, hinter Geräten, Backofen, Kalk entfernen, Böden maschinell reinigen. Alles, was bei der regulären Reinigung üblicherweise nicht gemacht wird." } },
      { "@type": "Question", "name": "Können Sie eine Wohnung für die Übergabe reinigen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, die Übergabereinigung ist einer unserer häufigsten Aufträge. Wir stellen sicher, dass die Wohnung in einwandfreiem Zustand übergeben werden kann — inklusive Fotodokumentation auf Wunsch." } },
      { "@type": "Question", "name": "Bringen Sie Reinigungsmittel und Equipment mit?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, komplett. Staubsauger, Wischmopp, Scheuerpads, Entkalker, Backofenreiniger, Glasreiniger, Scheuermittel — wir bringen alles mit." } },
      { "@type": "Question", "name": "Wie lange dauert eine Grundreinigung?", "acceptedAnswer": { "@type": "Answer", "text": "Für eine 3-Zimmer-Wohnung rechnen wir in der Regel 4–8 Stunden mit 2–3 Personen, abhängig vom Verschmutzungsgrad." } },
      { "@type": "Question", "name": "Können Sie auch nach der Entrümpelung reinigen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir kombinieren Grundreinigung sehr häufig mit unserer Entrümpelungsleistung — besonders praktisch für Haushaltsauflösungen und Erbschaften." } },
      { "@type": "Question", "name": "Was kostet eine Grundreinigung für eine 2-Zimmer-Wohnung?", "acceptedAnswer": { "@type": "Answer", "text": "Eine typische 2-Zimmer-Wohnung (ca. 50–60 m²) kostet zwischen 250–450 € abhängig vom Verschmutzungsgrad. Wir erstellen ein verbindliches Festpreisangebot nach kurzer Absprache." } },
      { "@type": "Question", "name": "Kann ich direkt nach der Grundreinigung einziehen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, nach unserer Grundreinigung ist die Immobilie sofort bezugsfertig. Böden sind trocken, Küche und Bad sind hygienisch sauber — Sie können direkt einziehen." } },
    ],
  },
  "/gebaeudereinigung": {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Können Sie regelmäßig reinigen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir bieten wöchentliche, zweiwöchentliche und monatliche Reinigungsverträge für Gebäude und Büros an. Mit festen Terminen und gleichbleibender Qualität." } },
      { "@type": "Question", "name": "Reinigen Sie auch Tiefgaragen und Außenbereiche?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, auf Anfrage reinigen wir auch Tiefgaragen, Parkplätze, Außentreppen und Eingangsbereiche — mit Hochdruckreiniger und geeignetem Equipment." } },
      { "@type": "Question", "name": "Können Sie außerhalb der Geschäftszeiten reinigen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir sind flexibel und reinigen Büros und Praxen gerne früh morgens ab 6 Uhr, abends oder am Wochenende — ohne Störung des Betriebs." } },
      { "@type": "Question", "name": "Bringen Sie alles mit?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, alles. Staubsauger, Wischmopp, professionelle Reinigungsmittel, Leitern für Glasflächen, Hochdruckreiniger — wir kommen komplett ausgestattet." } },
      { "@type": "Question", "name": "Was kostet die regelmäßige Treppenhausreinigung?", "acceptedAnswer": { "@type": "Answer", "text": "Je nach Größe des Gebäudes, Stockwerken und Häufigkeit ab ca. 80–250 € pro Reinigung. Mehrfamilienhäuser mit 6 Parteien liegen typischerweise bei 100–150 €. Wir erstellen ein individuelles Angebot." } },
      { "@type": "Question", "name": "Können Sie leerstehende Immobilien reinigen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, gerade für leerstehende Immobilien bieten wir einmalige Grundreinigungen an — ideal vor Neuvermietung, Verkauf oder Übergabe." } },
      { "@type": "Question", "name": "Arbeiten Sie für WEGs (Wohnungseigentümergemeinschaften)?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir übernehmen Reinigungsverträge für Wohnungseigentümergemeinschaften und Hausverwaltungen — mit regelmäßigen Berichten und Fotodokumentation." } },
    ],
  },
  "/renovierungsservice": {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Was gehört zum Renovierungsservice?", "acceptedAnswer": { "@type": "Answer", "text": "Streichen (Wände, Decken, Türen, Fensterrahmen), Tapezieren, Spachteln, Grundieren, kleine Reparaturen, Silikon erneuern, Dübellöcher füllen — alle leichten Renovierungsarbeiten." } },
      { "@type": "Question", "name": "Können Sie eine ganze Wohnung renovieren?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir übernehmen die komplette Renovierung einer Wohnung oder einzelne Räume — ganz nach Ihrem Bedarf und Budget." } },
      { "@type": "Question", "name": "Bringen Sie Materialien und Farben mit?", "acceptedAnswer": { "@type": "Answer", "text": "Auf Wunsch ja — wir besorgen Farben, Tapeten und Materialien nach Ihrer Wahl oder geben Empfehlungen. Alternativ können Sie Material auch selbst stellen." } },
      { "@type": "Question", "name": "Wie schnell können Sie kommen?", "acceptedAnswer": { "@type": "Answer", "text": "In der Regel innerhalb von 3–7 Werktagen nach Auftragserteilung — bei dringenden Wohnungsübergaben versuchen wir noch schneller zu reagieren." } },
      { "@type": "Question", "name": "Renovieren Sie auch für Vermieter zwischen zwei Mietern?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, das ist eine unserer häufigsten Aufgaben. Wir renovieren schnell und kosteneffizient, damit die Wohnung schnell wieder vermietet werden kann." } },
      { "@type": "Question", "name": "Was kostet eine Renovierung für eine 3-Zimmer-Wohnung?", "acceptedAnswer": { "@type": "Answer", "text": "Komplett streichen für eine ca. 70 m² Wohnung kostet in der Regel 800–1.800 € abhängig von Wandzustand, Tapetenart und Farbwahl. Wir erstellen nach Besichtigung ein verbindliches Angebot." } },
      { "@type": "Question", "name": "Können Sie auch Schönheitsreparaturen für Mieter durchführen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir helfen Mietern bei der Wohnungsrückgabe: Dübellöcher füllen, Wände streichen, damit die Wohnung im vertragsgemäßen Zustand übergeben werden kann." } },
    ],
  },
};

const BREADCRUMB_NAMES: Record<string, string> = {
  "/entruempelung": "Entrümpelung",
  "/haushaltsaufloesung": "Haushaltsauflösung",
  "/wohnungsaufloesung": "Wohnungsauflösung",
  "/firmenaufloesung": "Firmenauflösung",
  "/messie-wohnung": "Messie-Wohnung Räumung",
  "/schrottankauf": "Schrottankauf",
  "/kellerentruempelung": "Kellerentrümpelung",
  "/kosten-entruempelung": "Entrümpelung Kosten",
  "/entruempelung-in-der-naehe": "Entrümpelung in der Nähe",
  "/umzug": "Umzug",
  "/privatumzug": "Privatumzug",
  "/seniorenumzug": "Seniorenumzug",
  "/bueroumzug": "Büroumzug",
  "/firmenumzug": "Firmenumzug",
  "/gewerbeumzug": "Gewerbeumzug",
  "/behoerdenumzug": "Behördenumzug",
  "/archivumzug": "Archivumzug",
  "/fernumzug": "Fernumzug",
  "/kosten-umzug": "Umzug Kosten",
  "/einlagerung-rhein-erft-kreis": "Einlagerung",
  "/einpackservice": "Einpackservice",
  "/auspackservice": "Auspackservice",
  "/moebelmontagedienst": "Möbelmontagedienst",
  "/umzugstransport": "Umzugstransport",
  "/halteverbotszone": "Halteverbotszone",
  "/schwerlasttransport": "Schwerlasttransport",
  "/aussenlifteinsatz": "Außenlift",
  "/tapeten-entfernen": "Tapeten entfernen",
  "/grundreinigung": "Grundreinigung",
  "/gebaeudereinigung": "Gebäudereinigung",
  "/renovierungsservice": "Renovierungsservice",
  "/kontakt": "Kontakt",
  "/terminplaner": "Terminplaner",
  "/standorte": "Standorte",
  "/faq": "FAQ",
  "/ueber-uns": "Über uns",
  "/ratgeber": "Ratgeber",
  "/entruempelung-bergheim": "Entrümpelung Bergheim",
  "/entruempelung-bedburg": "Entrümpelung Bedburg",
  "/entruempelung-kerpen": "Entrümpelung Kerpen",
  "/entruempelung-elsdorf": "Entrümpelung Elsdorf",
  "/entruempelung-pulheim": "Entrümpelung Pulheim",
  "/entruempelung-frechen": "Entrümpelung Frechen",
  "/entruempelung-huerth": "Entrümpelung Hürth",
  "/entruempelung-erftstadt": "Entrümpelung Erftstadt",
  "/entruempelung-rommerskirchen": "Entrümpelung Rommerskirchen",
  "/entruempelung-grevenbroich": "Entrümpelung Grevenbroich",
  "/entruempelung-rhein-erft-kreis": "Entrümpelung Rhein-Erft-Kreis",
  "/umzugsunternehmen-rhein-erft-kreis": "Umzugsunternehmen Rhein-Erft-Kreis",
  "/umzugsunternehmen-bergheim": "Umzugsunternehmen Bergheim",
  "/umzugsunternehmen-bedburg": "Umzugsunternehmen Bedburg",
  "/umzugsunternehmen-kerpen": "Umzugsunternehmen Kerpen",
  "/umzugsunternehmen-elsdorf": "Umzugsunternehmen Elsdorf",
  "/umzugsunternehmen-pulheim": "Umzugsunternehmen Pulheim",
  "/umzugsunternehmen-frechen": "Umzugsunternehmen Frechen",
  "/umzugsunternehmen-huerth": "Umzugsunternehmen Hürth",
  "/umzugsunternehmen-erftstadt": "Umzugsunternehmen Erftstadt",
  "/impressum": "Impressum",
  "/agb": "AGB",
  "/datenschutz": "Datenschutz",
  "/kostenuebernahme-durch-die-pflegekasse-bei-entruempelung-und-umzug-fuer-senioren": "Kostenübernahme Pflegekasse",
  "/entruempelung-rhein-erft-kreis-preise": "Entrümpelung Preise Rhein-Erft-Kreis",
  "/missverstaendnisse-zum-thema-entruempelung": "Missverständnisse Entrümpelung",
  "/wie-man-eine-professionelle-entruempelungsfirma-engagiert": "Professionelle Entrümpelungsfirma",
  "/entruempelungstipps": "Entrümpelungstipps",
  "/was-kostet-sperrmuell": "Sperrmüll Kosten",
  "/nachlassaufloesung": "Nachlassauflösung",
  "/betriebsaufloesung": "Betriebsauflösung",
  "/galerie": "Galerie",
  "/rueckruf": "Rückruf",
  "/umzugscheckliste": "Umzugscheckliste",
  "/entsorgungsguide": "Entsorgungsguide",
  "/wertanrechnung-bei-der-entruempelung": "Wertanrechnung",
  "/haushaltsaufloesung-vorbereiten": "Haushaltsauflösung vorbereiten",
  "/umzugshelfer-tipps": "Umzugshelfer Tipps",
  "/entruempelung-nach-todesfall": "Entrümpelung nach Todesfall",
  "/entruempelung-bruehl": "Entrümpelung Brühl",
  "/entruempelung-wesseling": "Entrümpelung Wesseling",
  "/umzugsunternehmen-rommerskirchen": "Umzugsunternehmen Rommerskirchen",
  "/umzugsunternehmen-grevenbroich": "Umzugsunternehmen Grevenbroich",
  "/umzugsunternehmen-koeln": "Umzugsunternehmen Köln",
  "/umzugsunternehmen-duesseldorf": "Umzugsunternehmen Düsseldorf",
  "/umzugsunternehmen-aachen": "Umzugsunternehmen Aachen",
};

export function PageLayout({ children, ...rest }: { children: React.ReactNode; pageName?: string; title?: string; description?: string; [key: string]: unknown }) {
  void rest;
  const [location] = useLocation();

  useEffect(() => {
    if (location !== "/") {
      document.getElementById("lcp-hero-static")?.remove();
      document.getElementById("lcp-hero-mobile")?.remove();
      document.getElementById("lcp-hero-text")?.remove();
    }

    const seo = SEO_DATA[location];
    const pageUrl = `${BASE_URL}${location === "/" ? "" : location}`;

    const setMetaName = (name: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.name = name; document.head.appendChild(el); }
      el.content = content;
    };
    const setMetaProp = (property: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", property); document.head.appendChild(el); }
      el.content = content;
    };

    setMetaName("twitter:card", "summary_large_image");
    setMetaName("twitter:site", "@stressfrei_entruempelungen");
    const existingOgImage = document.querySelector<HTMLMetaElement>('meta[property="og:image"]')?.content;
    if (existingOgImage) setMetaName("twitter:image", existingOgImage);
    else setMetaName("twitter:image", "https://stressfreientruempelungen.de/images/professionelle-entruempelung-service-rhein-erft-kreis.webp");
    setMetaProp("og:image:width", "1200");
    setMetaProp("og:image:height", "630");
    let metaAuthor = document.querySelector<HTMLMetaElement>('meta[name="author"]');
    if (!metaAuthor) { metaAuthor = document.createElement("meta"); metaAuthor.name = "author"; document.head.appendChild(metaAuthor); }
    metaAuthor.content = "Stressfrei Entrümpelungen & Umzüge";

    if (seo) {
      document.title = seo.title;
      setMetaName("description", seo.description);
      setMetaProp("og:title", seo.title);
      setMetaProp("og:description", seo.description);
      setMetaProp("og:url", pageUrl);
      const existingOgType = document.querySelector<HTMLMetaElement>('meta[property="og:type"]')?.content;
      if (!existingOgType || existingOgType === "website") setMetaProp("og:type", "website");
      setMetaName("twitter:title", seo.title);
      setMetaName("twitter:description", seo.description);
    }

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = pageUrl;

    let hreflangDe = document.querySelector<HTMLLinkElement>('link[hreflang="de"]');
    if (!hreflangDe) {
      hreflangDe = document.createElement("link");
      hreflangDe.rel = "alternate";
      hreflangDe.setAttribute("hreflang", "de");
      document.head.appendChild(hreflangDe);
    }
    hreflangDe.href = pageUrl;

    let hreflangDefault = document.querySelector<HTMLLinkElement>('link[hreflang="x-default"]');
    if (!hreflangDefault) {
      hreflangDefault = document.createElement("link");
      hreflangDefault.rel = "alternate";
      hreflangDefault.setAttribute("hreflang", "x-default");
      document.head.appendChild(hreflangDefault);
    }
    hreflangDefault.href = pageUrl;

    return () => {
      document.title = "Stressfrei Entrümpelungen & Umzüge | Professionell, Fair & Zuverlässig";
    };
  }, [location]);

  const pageName = BREADCRUMB_NAMES[location];
  const breadcrumbSchema = pageName
    ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Startseite", "item": `${BASE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": pageName, "item": `${BASE_URL}${location}` },
        ],
      })
    : null;

  const serviceSchemaObj = SERVICE_SCHEMAS[location];
  const serviceSchema = serviceSchemaObj ? JSON.stringify(serviceSchemaObj) : null;

  const faqSchemaObj = FAQ_SCHEMAS[location];
  const faqSchema = faqSchemaObj ? JSON.stringify(faqSchemaObj) : null;

  return (
    <div className="min-h-screen bg-background pb-14 md:pb-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: WEBSITE_SCHEMA }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: LOCAL_BUSINESS_SCHEMA }}
      />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
        />
      )}
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serviceSchema }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqSchema }}
        />
      )}
      <Navbar />
      {pageName && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border/20" data-testid="breadcrumb-nav">
          <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-4 sm:px-6 py-2">
            <ol className="flex items-center gap-1.5 text-[11px] sm:text-xs text-muted-foreground min-w-0">
              <li className="shrink-0">
                <Link href="/" className="hover:text-primary transition-colors" data-testid="breadcrumb-link-home">
                  Startseite
                </Link>
              </li>
              <li aria-hidden="true" className="shrink-0 opacity-40 select-none">›</li>
              <li className="font-medium text-foreground truncate" aria-current="page" data-testid="breadcrumb-current-page">
                {pageName}
              </li>
            </ol>
          </nav>
        </div>
      )}
      {children}
      <Footer />
      <ScrollToTop />
      <MobileBottomBar />
      <DesktopStickyBar />
    </div>
  );
}

export function PageHero({
  title,
  subtitle,
  highlight,
  badge,
  showCTA = true,
  children,
}: {
  title: string;
  subtitle: string;
  highlight?: string;
  badge?: string;
  showCTA?: boolean;
  children?: React.ReactNode;
}) {
  const effectiveHighlight = highlight ?? badge;
  return (
    <>
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {effectiveHighlight && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
            {effectiveHighlight}
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4" data-testid="text-page-title">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6" data-testid="text-page-subtitle">
          {subtitle}
        </p>
        {showCTA && (
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <a href="tel:+4922715880940" data-testid="link-page-call">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
                <Phone className="w-4 h-4 mr-2" />
                02271 / 5880940
              </Button>
            </a>
            <a href="https://wa.me/4915258177453?text=Hallo%2C%20ich%20m%C3%B6chte%20ein%20kostenloses%20Angebot%20anfragen." target="_blank" rel="noopener noreferrer" data-testid="link-page-whatsapp">
              <Button variant="outline" size="lg" className="border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.554 4.112 1.523 5.836L.044 23.956l6.278-1.648A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 01-5.001-1.368l-.358-.213-3.727.977.994-3.634-.234-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
                Per WhatsApp anfragen
              </Button>
            </a>
          </div>
        )}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </section>
    {showCTA && <QuickContactStrip />}
  </>
  );
}

export function QuickContactStrip() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: "quick_contact_strip",
          name: fd.get("name"),
          phone: fd.get("phone"),
          service: fd.get("service"),
          message: `Schnellanfrage: ${fd.get("service")}`,
        }),
      });
    } catch {}
    setSent(true);
    setSending(false);
    trackConversion("quick_contact_strip", {
      phone: fd.get("phone") as string,
    });
  };
  return (
    <section className="py-5 sm:py-6 border-b border-border/50 bg-card/50" data-testid="section-quick-contact">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {sent ? (
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800">
            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
            <div>
              <p className="font-semibold text-sm text-green-800 dark:text-green-300">Anfrage erhalten!</p>
              <p className="text-xs text-green-700 dark:text-green-400">Wir melden uns schnellstmöglich bei Ihnen.</p>
            </div>
          </div>
        ) : (
          <>
            <p className="text-center text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">Kostenloses Angebot anfordern</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2" data-testid="form-quick-contact">
              <input
                name="name"
                placeholder="Ihr Name *"
                required
                className="flex-1 min-w-0 rounded-lg border border-border bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                data-testid="input-quick-name"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Telefon *"
                required
                className="flex-1 min-w-0 rounded-lg border border-border bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                data-testid="input-quick-phone"
              />
              <select
                name="service"
                className="flex-1 min-w-0 rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                data-testid="select-quick-service"
              >
                <option value="Entrümpelung">Entrümpelung</option>
                <option value="Haushaltsauflösung">Haushaltsauflösung</option>
                <option value="Umzug">Umzug</option>
                <option value="Wohnungsauflösung">Wohnungsauflösung</option>
                <option value="Sonstiges">Sonstiges</option>
              </select>
              <Button type="submit" disabled={sending} className="shrink-0 shadow-md shadow-primary/15" data-testid="button-quick-submit">
                <Send className="w-4 h-4 mr-1.5" />
                {sending ? "Sende …" : "Anfragen"}
              </Button>
            </form>
            <p className="text-center text-[11px] text-muted-foreground mt-2">Kostenlos & unverbindlich · Festpreisgarantie · Antwort in Stunden</p>
          </>
        )}
      </div>
    </section>
  );
}

function CTAContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  if (sent) {
    return (
      <div className="text-center py-6">
        <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-3" />
        <p className="font-medium text-foreground" data-testid="text-cta-form-success">Vielen Dank für Ihre Anfrage!</p>
        <p className="text-sm text-muted-foreground mt-1">Wir melden uns schnellstmöglich bei Ihnen.</p>
      </div>
    );
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formName: "cta_formular", name: fd.get("name"), phone: fd.get("phone"), email: fd.get("email"), message: fd.get("message") }),
      });
    } catch (err) {}
    setSent(true);
    trackConversion("cta_formular", {
      phone: fd.get("phone") as string,
      email: fd.get("email") as string,
    });
  };
  return (
    <form
      className="space-y-3"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input name="name" placeholder="Ihr Name *" required data-testid="input-cta-name" />
        <PhoneInput name="phone" placeholder="Telefonnummer" required data-testid="input-cta-phone" />
      </div>
      <Input name="email" type="email" placeholder="E-Mail *" required data-testid="input-cta-email" />
      <Textarea name="message" placeholder="Beschreiben Sie kurz Ihr Anliegen..." className="resize-none" rows={3} required data-testid="input-cta-message" />
      <Button type="submit" className="w-full" size="lg" disabled={sending} data-testid="button-cta-submit">
        <Send className="w-4 h-4 mr-2" />
        {sending ? "Wird gesendet..." : "Kostenlose Anfrage senden"}
      </Button>
    </form>
  );
}

const allInternalLinks = {
  entruempelung: [
    { label: "Kellerentrümpelung", href: "/kellerentruempelung" },
    { label: "Entrümpelung Kosten & Rechner", href: "/kosten-entruempelung" },
    { label: "Haushaltsauflösung", href: "/haushaltsaufloesung" },
    { label: "Wohnungsauflösung", href: "/wohnungsaufloesung" },
    { label: "Firmenauflösung", href: "/firmenaufloesung" },
    { label: "Messie-Wohnung räumen", href: "/messie-wohnung" },
    { label: "Schrottankauf", href: "/schrottankauf" },
    { label: "Entsorgungsguide", href: "/entsorgungsguide" },
    { label: "Umzüge", href: "/umzug" },
  ],
  kellerentruempelung: [
    { label: "Entrümpelung", href: "/entruempelung" },
    { label: "Entrümpelung Kosten & Rechner", href: "/kosten-entruempelung" },
    { label: "Haushaltsauflösung", href: "/haushaltsaufloesung" },
    { label: "Wohnungsauflösung", href: "/wohnungsaufloesung" },
    { label: "Messie-Wohnung räumen", href: "/messie-wohnung" },
    { label: "Schrottankauf", href: "/schrottankauf" },
    { label: "Entsorgungsguide", href: "/entsorgungsguide" },
  ],
  "entruempelung-in-der-naehe": [
    { label: "Entrümpelung", href: "/entruempelung" },
    { label: "Kellerentrümpelung", href: "/kellerentruempelung" },
    { label: "Haushaltsauflösung", href: "/haushaltsaufloesung" },
    { label: "Wohnungsauflösung", href: "/wohnungsaufloesung" },
    { label: "Messie-Wohnung räumen", href: "/messie-wohnung" },
    { label: "Entrümpelung Kosten & Rechner", href: "/kosten-entruempelung" },
    { label: "Schrottankauf", href: "/schrottankauf" },
  ],
  haushaltsaufloesung: [
    { label: "Entrümpelung", href: "/entruempelung" },
    { label: "Kellerentrümpelung", href: "/kellerentruempelung" },
    { label: "Wohnungsauflösung", href: "/wohnungsaufloesung" },
    { label: "Seniorenumzug", href: "/seniorenumzug" },
    { label: "Messie-Wohnung räumen", href: "/messie-wohnung" },
    { label: "Kostenübernahme Pflegekasse", href: "/kostenuebernahme-durch-die-pflegekasse-bei-entruempelung-und-umzug-fuer-senioren" },
    { label: "Ratgeber: Todesfall", href: "/entruempelung-nach-todesfall" },
  ],
  wohnungsaufloesung: [
    { label: "Entrümpelung", href: "/entruempelung" },
    { label: "Kellerentrümpelung", href: "/kellerentruempelung" },
    { label: "Haushaltsauflösung", href: "/haushaltsaufloesung" },
    { label: "Firmenauflösung", href: "/firmenaufloesung" },
    { label: "Privatumzug", href: "/privatumzug" },
    { label: "Schrottankauf", href: "/schrottankauf" },
  ],
  firmenaufloesung: [
    { label: "Entrümpelung", href: "/entruempelung" },
    { label: "Büroumzug", href: "/bueroumzug" },
    { label: "Wohnungsauflösung", href: "/wohnungsaufloesung" },
    { label: "Schrottankauf", href: "/schrottankauf" },
    { label: "Einlagerung", href: "/einlagerung-rhein-erft-kreis" },
  ],
  "messie-wohnung": [
    { label: "Entrümpelung", href: "/entruempelung" },
    { label: "Kellerentrümpelung", href: "/kellerentruempelung" },
    { label: "Haushaltsauflösung", href: "/haushaltsaufloesung" },
    { label: "Wohnungsauflösung", href: "/wohnungsaufloesung" },
    { label: "Kostenübernahme Pflegekasse", href: "/kostenuebernahme-durch-die-pflegekasse-bei-entruempelung-und-umzug-fuer-senioren" },
  ],
  umzug: [
    { label: "Umzug Kosten & Rechner", href: "/kosten-umzug" },
    { label: "Privatumzug", href: "/privatumzug" },
    { label: "Seniorenumzug", href: "/seniorenumzug" },
    { label: "Büroumzug", href: "/bueroumzug" },
    { label: "Einlagerung", href: "/einlagerung-rhein-erft-kreis" },
    { label: "Entrümpelung", href: "/entruempelung" },
    { label: "Haushaltsauflösung", href: "/haushaltsaufloesung" },
    { label: "Umzugscheckliste", href: "/umzugscheckliste" },
  ],
  privatumzug: [
    { label: "Umzüge", href: "/umzug" },
    { label: "Seniorenumzug", href: "/seniorenumzug" },
    { label: "Einlagerung", href: "/einlagerung-rhein-erft-kreis" },
    { label: "Entrümpelung", href: "/entruempelung" },
    { label: "Wohnungsauflösung", href: "/wohnungsaufloesung" },
    { label: "Umzugscheckliste", href: "/umzugscheckliste" },
  ],
  seniorenumzug: [
    { label: "Umzüge", href: "/umzug" },
    { label: "Privatumzug", href: "/privatumzug" },
    { label: "Haushaltsauflösung", href: "/haushaltsaufloesung" },
    { label: "Kostenübernahme Pflegekasse", href: "/kostenuebernahme-durch-die-pflegekasse-bei-entruempelung-und-umzug-fuer-senioren" },
    { label: "Einlagerung", href: "/einlagerung-rhein-erft-kreis" },
  ],
  bueroumzug: [
    { label: "Umzüge", href: "/umzug" },
    { label: "Firmenumzug", href: "/firmenumzug" },
    { label: "Firmenauflösung", href: "/firmenaufloesung" },
    { label: "Privatumzug", href: "/privatumzug" },
    { label: "Einlagerung", href: "/einlagerung-rhein-erft-kreis" },
    { label: "Entrümpelung", href: "/entruempelung" },
  ],
  firmenumzug: [
    { label: "Umzüge", href: "/umzug" },
    { label: "Büroumzug", href: "/bueroumzug" },
    { label: "Gewerbeumzug", href: "/gewerbeumzug" },
    { label: "Behördenumzug", href: "/behoerdenumzug" },
    { label: "Fernumzug", href: "/fernumzug" },
    { label: "Einlagerung", href: "/einlagerung-rhein-erft-kreis" },
    { label: "Firmenauflösung", href: "/firmenaufloesung" },
  ],
  gewerbeumzug: [
    { label: "Umzüge", href: "/umzug" },
    { label: "Firmenumzug", href: "/firmenumzug" },
    { label: "Büroumzug", href: "/bueroumzug" },
    { label: "Archivumzug", href: "/archivumzug" },
    { label: "Einlagerung", href: "/einlagerung-rhein-erft-kreis" },
    { label: "Firmenauflösung", href: "/firmenaufloesung" },
  ],
  behoerdenumzug: [
    { label: "Umzüge", href: "/umzug" },
    { label: "Firmenumzug", href: "/firmenumzug" },
    { label: "Archivumzug", href: "/archivumzug" },
    { label: "Büroumzug", href: "/bueroumzug" },
    { label: "Einlagerung", href: "/einlagerung-rhein-erft-kreis" },
  ],
  archivumzug: [
    { label: "Umzüge", href: "/umzug" },
    { label: "Behördenumzug", href: "/behoerdenumzug" },
    { label: "Firmenumzug", href: "/firmenumzug" },
    { label: "Büroumzug", href: "/bueroumzug" },
    { label: "Einlagerung", href: "/einlagerung-rhein-erft-kreis" },
    { label: "Gewerbeumzug", href: "/gewerbeumzug" },
  ],
  fernumzug: [
    { label: "Umzüge", href: "/umzug" },
    { label: "Privatumzug", href: "/privatumzug" },
    { label: "Firmenumzug", href: "/firmenumzug" },
    { label: "Einlagerung", href: "/einlagerung-rhein-erft-kreis" },
    { label: "Büroumzug", href: "/bueroumzug" },
    { label: "Umzug Kosten", href: "/kosten-umzug" },
  ],
  einlagerung: [
    { label: "Umzüge", href: "/umzug" },
    { label: "Privatumzug", href: "/privatumzug" },
    { label: "Büroumzug", href: "/bueroumzug" },
    { label: "Entrümpelung", href: "/entruempelung" },
    { label: "Wohnungsauflösung", href: "/wohnungsaufloesung" },
  ],
  schrottankauf: [
    { label: "Entrümpelung", href: "/entruempelung" },
    { label: "Haushaltsauflösung", href: "/haushaltsaufloesung" },
    { label: "Firmenauflösung", href: "/firmenaufloesung" },
    { label: "Wohnungsauflösung", href: "/wohnungsaufloesung" },
  ],
  "kosten-entruempelung": [
    { label: "Entrümpelung", href: "/entruempelung" },
    { label: "Kellerentrümpelung", href: "/kellerentruempelung" },
    { label: "Haushaltsauflösung", href: "/haushaltsaufloesung" },
    { label: "Wohnungsauflösung", href: "/wohnungsaufloesung" },
    { label: "Messie-Wohnung räumen", href: "/messie-wohnung" },
    { label: "Umzug Kosten", href: "/kosten-umzug" },
    { label: "Schrottankauf", href: "/schrottankauf" },
    { label: "Entsorgungsguide", href: "/entsorgungsguide" },
  ],
  "kosten-umzug": [
    { label: "Umzüge", href: "/umzug" },
    { label: "Privatumzug", href: "/privatumzug" },
    { label: "Seniorenumzug", href: "/seniorenumzug" },
    { label: "Büroumzug", href: "/bueroumzug" },
    { label: "Entrümpelung Kosten", href: "/kosten-entruempelung" },
    { label: "Einlagerung", href: "/einlagerung-rhein-erft-kreis" },
    { label: "Umzugscheckliste", href: "/umzugscheckliste" },
  ],
};

const locationLinks = [
  { label: "Entrümpelung Bergheim", href: "/entruempelung-bergheim" },
  { label: "Entrümpelung Kerpen", href: "/entruempelung-kerpen" },
  { label: "Entrümpelung Frechen", href: "/entruempelung-frechen" },
  { label: "Entrümpelung Hürth", href: "/entruempelung-huerth" },
  { label: "Entrümpelung Pulheim", href: "/entruempelung-pulheim" },
  { label: "Entrümpelung Erftstadt", href: "/entruempelung-erftstadt" },
  { label: "Entrümpelung Bedburg", href: "/entruempelung-bedburg" },
  { label: "Entrümpelung Elsdorf", href: "/entruempelung-elsdorf" },
  { label: "Umzug Rhein-Erft-Kreis", href: "/umzugsunternehmen-rhein-erft-kreis" },
  { label: "Umzug Bergheim", href: "/umzugsunternehmen-bergheim" },
  { label: "Umzug Kerpen", href: "/umzugsunternehmen-kerpen" },
  { label: "Umzug Frechen", href: "/umzugsunternehmen-frechen" },
  { label: "Umzug Hürth", href: "/umzugsunternehmen-huerth" },
];

export function InternalLinksSection({ pageKey }: { pageKey: string }) {
  const serviceLinks = allInternalLinks[pageKey as keyof typeof allInternalLinks] || [];
  if (serviceLinks.length === 0) return null;

  return (
    <section className="py-14 sm:py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6" data-testid="text-internal-links-title">
          Weitere Leistungen & Informationen
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {serviceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 px-4 py-3 rounded-lg border border-border/50 text-sm text-muted-foreground hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-colors"
              style={{ textDecoration: "none" }}
              data-testid={`link-internal-${link.href.slice(1)}`}
            >
              <ChevronDown className="w-3.5 h-3.5 -rotate-90 shrink-0" />
              {link.label}
            </Link>
          ))}
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-4">In Ihrer Nähe</h3>
        <div className="flex flex-wrap gap-2">
          {locationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-full text-xs border border-border/50 text-muted-foreground hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-colors"
              style={{ textDecoration: "none" }}
              data-testid={`link-location-${link.href.slice(1)}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogArticleCTA({ topic = "Entrümpelung" }: { topic?: string } = {}) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formName: "blog_article_cta", name: fd.get("name"), phone: fd.get("phone"), message: `Anfrage über Blog-Artikel: ${topic}` }),
      });
    } catch {}
    setSent(true);
    setSending(false);
    trackConversion("blog_article_cta", {
      phone: fd.get("phone") as string,
    });
  };
  return (
    <section className="py-10 sm:py-12 bg-gradient-to-br from-primary/10 via-primary/5 to-background border-y border-primary/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <div className="shrink-0">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-foreground text-lg mb-1">
              Brauchen Sie professionelle Hilfe mit der {topic}?
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Kostenlose Besichtigung · Verbindlicher Festpreis · Oft 24–48h Ausführung
            </p>
            {sent ? (
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                Anfrage erhalten! Wir melden uns schnellstmöglich.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  name="name"
                  placeholder="Ihr Name *"
                  required
                  className="flex-1 rounded-lg border border-border bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Telefonnummer *"
                  required
                  className="flex-1 rounded-lg border border-border bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <Button type="submit" disabled={sending} className="shrink-0">
                  <Send className="w-4 h-4 mr-2" />
                  {sending ? "Sende …" : "Angebot anfordern"}
                </Button>
              </form>
            )}
          </div>
          <div className="shrink-0 flex flex-col gap-2 text-sm">
            <a href="tel:+4922715880940" className="flex items-center gap-2 font-semibold text-foreground hover:text-primary transition-colors whitespace-nowrap">
              <Phone className="w-4 h-4 text-primary" />
              02271 / 5880940
            </a>
            <a
              href="https://wa.me/4915258177453"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold text-[#25D366] hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              <IconWhatsapp className="w-4 h-4" />
              Per WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTASection({ title, subtitle }: { title?: string; subtitle?: string } = {}) {
  return (
    <section className="py-20 sm:py-28 bg-primary/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4" data-testid="text-cta-title">
            {title || "Bereit für eine stressfreie Lösung?"}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {subtitle || "Kontaktieren Sie uns für ein kostenloses und unverbindliches Angebot. Wir beraten Sie gerne."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4" data-testid="text-cta-form-title">
              Anfrage senden
            </h3>
            <CTAContactForm />
          </Card>
          <div className="space-y-5">
            <Card className="p-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Rufen Sie uns an</p>
                  <a href="tel:+4922715880940" className="font-semibold text-foreground hover:text-primary transition-colors" data-testid="link-cta-call">
                    02271 / 5880940
                  </a>
                </div>
              </div>
            </Card>
            <Card className="p-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Schreiben Sie uns</p>
                  <a href="mailto:info@stressfreientruempelungen.de" className="font-semibold text-foreground hover:text-primary transition-colors" data-testid="link-cta-email">
                    info@stressfreientruempelungen.de
                  </a>
                </div>
              </div>
            </Card>
            <Card className="p-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <IconWhatsapp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <a href="https://wa.me/4915258177453" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-primary transition-colors" data-testid="link-cta-whatsapp">
                    Jetzt schreiben
                  </a>
                </div>
              </div>
            </Card>
            <Card className="p-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Einsatzgebiet</p>
                  <p className="font-semibold text-foreground">Rhein-Erft-Kreis & NRW</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
