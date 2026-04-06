import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home, Phone, Search, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-lg mx-auto">
        <div className="text-8xl font-black text-primary/20 mb-2 select-none">404</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
          Seite nicht gefunden
        </h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Die gesuchte Seite existiert nicht oder wurde verschoben. Kein Problem — navigieren Sie zu einer unserer Hauptseiten.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <Link href="/">
            <Button className="w-full gap-2" data-testid="button-404-home">
              <Home className="w-4 h-4" />
              Zur Startseite
            </Button>
          </Link>
          <Link href="/entruempelung">
            <Button variant="outline" className="w-full gap-2" data-testid="button-404-entruempelung">
              <Search className="w-4 h-4" />
              Entrümpelung
            </Button>
          </Link>
          <Link href="/haushaltsaufloesung">
            <Button variant="outline" className="w-full gap-2" data-testid="button-404-haushaltsaufloesung">
              <ArrowRight className="w-4 h-4" />
              Haushaltsauflösung
            </Button>
          </Link>
          <Link href="/kontakt">
            <Button variant="outline" className="w-full gap-2" data-testid="button-404-kontakt">
              <Phone className="w-4 h-4" />
              Kontakt
            </Button>
          </Link>
        </div>

        <p className="text-sm text-muted-foreground">
          Oder rufen Sie uns direkt an:{" "}
          <a href="tel:+4922715880940" className="text-primary font-semibold hover:underline" data-testid="link-404-phone">
            02271 / 5880940
          </a>
        </p>
      </div>
    </div>
  );
}
