import { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/UI/button';
import logo from '@/assets/logo-la-moneria.png';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Alojamiento', href: '/alojamiento' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Entorno', href: '/entorno' },
  { name: 'Galería', href: '/galeria' },
  { name: 'Cómo llegar', href: '/como-llegar' },
  { name: 'Contacto', href: '/contacto' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <img src={logo} alt="La Monería - Vivienda Rural" className="h-8 lg:h-10 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons - Privacy Focused */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild className="btn-hero">
              <a href="/contacto">
                <Phone className="h-4 w-4 mr-2" />
                Reservar / Contactar
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border/50 bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 mt-4 border-t border-border/30 space-y-2">
                <a
                  href="tel:654873176"
                  className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-primary hover:bg-muted/50 rounded-md"
                >
                  <Phone className="h-5 w-5" />
                  <span>Llamar: 654 873 176</span>
                </a>
                <a
                  href="https://wa.me/34654873176"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-accent hover:bg-muted/50 rounded-md"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}