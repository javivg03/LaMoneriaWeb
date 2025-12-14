import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p>Avda. de Andalucía, 19</p>
                  <p>Aldea Las Delgadas</p>
                  <p>Minas de Riotinto (Huelva)</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a
                  href="tel:654873176"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  654 873 176
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:agarcia1619@icahuelva.es"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  agarcia1619@icahuelva.es
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><a href="/alojamiento" className="text-sm text-muted-foreground hover:text-primary transition-colors">Alojamiento</a></li>
              <li><a href="/servicios" className="text-sm text-muted-foreground hover:text-primary transition-colors">Servicios</a></li>
              <li><a href="/entorno" className="text-sm text-muted-foreground hover:text-primary transition-colors">Entorno</a></li>
              <li><a href="/galeria" className="text-sm text-muted-foreground hover:text-primary transition-colors">Galería</a></li>
              <li><a href="/como-llegar" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cómo llegar</a></li>
              <li><a href="/enlaces" className="text-sm text-muted-foreground hover:text-primary transition-colors">Enlaces útiles</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/legal/aviso-legal" className="text-sm text-muted-foreground hover:text-primary transition-colors">Aviso Legal</a></li>
              <li><a href="/legal/privacidad" className="text-sm text-muted-foreground hover:text-primary transition-colors">Política de Privacidad</a></li>
              <li><a href="/legal/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">Política de Cookies</a></li>
            </ul>
            <div className="mt-4 pt-4 border-t border-border/30">
              <p className="text-xs text-muted-foreground">
                RTA: VTAR/HU/00392
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/p/Vivienda-rural-La-Moneria-100028486377169/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/lamoneriarural/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Vivienda Rural La Monería. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}