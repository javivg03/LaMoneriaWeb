import { Phone, MessageCircle, Users, Bed, Bath, Car, Wifi, Utensils, Home as HomeIcon, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout/Layout';
import salonImage from '@/assets/salon_chimenea.jpeg';
import banoImage from '@/assets/baño_ducha_moderna.jpg';
import habitacionImage from '@/assets/habitacion_matrimonio_principal.jpg';
import piscinaImage from '@/assets/exterior_piscina_detalle.jpeg';
import cocinaImage from '@/assets/cocina_isla_vista_general.jpeg';
import patioImage from '@/assets/patio_fuente_decoracion.jpeg';

export default function Alojamiento() {
  return (
    <Layout
      title="Alojamiento - Vivienda Rural La Monería | Casa rural en Huelva para 8 personas"
      description="Vivienda rural completamente rehabilitada para 8 personas en Las Delgadas, Minas de Riotinto. 4 habitaciones, piscina salina, jardín, chimenea. RTA: VTAR/HU/00392."
    >
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${salonImage})` }}
        />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Nuestra vivienda rural de lujo
          </h1>
          <p className="text-xl opacity-90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Una espectacular vivienda para 8 personas en la Aldea Las Delgadas (Zalamea la Real),
            frente a las famosas Minas de Riotinto en Huelva
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Nuestra vivienda data de 1902 y fue rehabilitada totalmente en 2011, utilizando
                  materiales naturales y tradicionales de la zona: muros de piedra, madera de castaño
                  y tejas de barro. Para esta rehabilitación contratamos a profesionales locales,
                  al igual que hacemos para el mantenimiento de la vivienda y la conservación y mejora
                  de la finca.
                </p>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Todos nuestros proveedores son locales, favoreciendo directamente la economía de
                  la Cuenca Minera. Esta filosofía de trabajo nos permite mantener la autenticidad
                  del entorno mientras ofrecemos el máximo confort a nuestros huéspedes.
                </p>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  La vivienda tiene dos plantas y cuatro habitaciones amplias y luminosas. El salón
                  cuenta con una acogedora chimenea (incluimos una carga de leña gratis), tres baños
                  completos, aire acondicionado y calefacción centralizados, y una cocina de diseño
                  con electrodomésticos de alta gama y menaje completo para hasta 8 personas.
                </p>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  El patio interior luce hermosas columnas de estilo romano con una fuente de agua
                  que aporta frescor y tranquilidad. Además, dispone de un amplio porche y jardín
                  de 150 m² con barbacoa y piscina salina, perfectos para disfrutar del clima
                  mediterráneo en cualquier época del año.
                </p>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Nuestra vivienda rural está inscrita en el Registro de Turismo de Andalucía con
                  el número VTAR/HU/00392. Ofrecemos alojamiento de alquiler completo con estancia
                  mínima de 2 noches y capacidad para 8 personas. El precio es desde 250 €/noche.
                </p>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Se incluyen sábanas de alta calidad —fundas nórdicas en invierno— y un completísimo
                  equipamiento de menaje. La vivienda cuenta con chimenea, calefacción y aire
                  acondicionado para garantizar el máximo confort en cualquier temporada.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-muted/30 rounded-xl p-8 mt-12">
                <h3 className="font-serif text-2xl font-semibold mb-4">Información de contacto</h3>
                <div className="space-y-3 mb-6">
                  <p className="flex items-center space-x-3">
                    <HomeIcon className="h-5 w-5 text-primary" />
                    <span>Avda. de Andalucía, 19, Aldea Las Delgadas, 21640 Zalamea la Real (Huelva)</span>
                  </p>
                  <p className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:654873176" className="hover:text-primary transition-colors">654 873 176</a>
                  </p>
                  <p className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <a href="mailto:agarcia1619@icahuelva.es" className="hover:text-primary transition-colors">
                      agarcia1619@icahuelva.es
                    </a>
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="btn-hero">
                    <a href="tel:654873176">
                      <Phone className="h-4 w-4 mr-2" />
                      Llamar ahora
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="https://wa.me/34654873176" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                  <img src={piscinaImage} alt="Piscina salina" className="rounded-lg shadow-md h-48 w-full object-cover" />
                  <img src={habitacionImage} alt="Habitación matrimonio" className="rounded-lg shadow-md h-48 w-full object-cover" />
                  <img src={banoImage} alt="Baño completo" className="rounded-lg shadow-md h-48 w-full object-cover" />
                  <img src={salonImage} alt="Salón con chimenea" className="rounded-lg shadow-md h-48 w-full object-cover" />
                  <img src={cocinaImage} alt="Cocina moderna" className="rounded-lg shadow-md h-48 w-full object-cover" />
                  <img src={patioImage} alt="Patio con fuente" className="rounded-lg shadow-md h-48 w-full object-cover" />
                </div>
              </div>
            </div>

            {/* Sidebar with features */}
            <div className="lg:col-span-1">
              <Card className="card-elegant sticky top-24">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-6">Características</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm">Capacidad: 8 personas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Bed className="h-5 w-5 text-primary" />
                      <span className="text-sm">4 habitaciones</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Bath className="h-5 w-5 text-primary" />
                      <span className="text-sm">3 baños completos</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="h-5 w-5 text-primary" />
                      <span className="text-sm">Piscina salina</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="h-5 w-5 text-primary" />
                      <span className="text-sm">Jardín 150 m²</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="h-5 w-5 text-primary" />
                      <span className="text-sm">Chimenea + leña gratis</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="h-5 w-5 text-primary" />
                      <span className="text-sm">Aire acondicionado</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Utensils className="h-5 w-5 text-primary" />
                      <span className="text-sm">Cocina totalmente equipada</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Car className="h-5 w-5 text-primary" />
                      <span className="text-sm">Aparcamiento gratuito</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Wifi className="h-5 w-5 text-primary" />
                      <span className="text-sm">WiFi gratuito</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary mb-2">desde 250€</p>
                      <p className="text-sm text-muted-foreground mb-4">por noche (mín. 2 noches)</p>
                      <p className="text-xs text-muted-foreground">RTA: VTAR/HU/00392</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}