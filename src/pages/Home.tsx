import { Phone, MessageCircle, Users, Bed, MapPin, Star, Calendar, Euro } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/exterior_porche_relax.jpg';
import roomImage from '@/assets/habitacion_principal_cama.jpg';
import patioImage from '@/assets/porche_vista_general.jpeg';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.3) 100%), url(${heroImage})` }}
      >
        <link rel="preload" as="image" href={heroImage} />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            Vivienda Rural <span className="text-primary-glow">La Monería</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-100 font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Alojamiento de lujo en plena naturaleza junto al mítico Río Tinto,
            en el corazón de la Cuenca Minera de Huelva
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild className="btn-hero text-lg px-8 py-4">
              <a href="/contacto">
                <Calendar className="h-5 w-5 mr-2" />
                Consultar Disponibilidad
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4"
            >
              <a href="/galeria">
                <Users className="h-5 w-5 mr-2" />
                Ver Galería
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 section-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-elegant text-center p-6">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">Hasta 8 personas</h3>
                <p className="text-muted-foreground">Perfecta para familias y grupos</p>
              </CardContent>
            </Card>
            <Card className="card-elegant text-center p-6">
              <CardContent className="pt-6">
                <Bed className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">4 habitaciones</h3>
                <p className="text-muted-foreground">Cómodas y completamente equipadas</p>
              </CardContent>
            </Card>
            <Card className="card-elegant text-center p-6">
              <CardContent className="pt-6">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">Ubicación única</h3>
                <p className="text-muted-foreground">Junto al famoso Río Tinto</p>
              </CardContent>
            </Card>
            <Card className="card-elegant text-center p-6">
              <CardContent className="pt-6">
                <Euro className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">Desde 250€/noche</h3>
                <p className="text-muted-foreground">Estancia mínima 2 noches</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About the Property */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img src={patioImage} alt="Porche de La Monería" className="rounded-xl shadow-lg w-full h-64 object-cover" loading="lazy" />
                <img src={roomImage} alt="Habitación principal" className="rounded-xl shadow-lg w-full h-64 object-cover mt-8" loading="lazy" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Una experiencia única en la historia minera de España
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-6">
                  Nuestra vivienda, construida en 1902 y completamente rehabilitada en 2011,
                  combina la autenticidad histórica con el confort moderno. Utilizamos materiales
                  tradicionales de la zona: muros de piedra, madera de castaño y tejas de barro.
                </p>
                <p className="text-muted-foreground mb-6">
                  Ubicada en la Aldea Las Delgadas (Zalamea la Real), junto a las famosas Minas de Riotinto,
                  ofrece acceso privilegiado a uno de los paisajes más singulares del mundo,
                  estudiado por la NASA como análogo terrestre de Marte.
                </p>
                <p className="text-muted-foreground">
                  Con piscina salina, jardín de 150 m², chimenea, barbacoa y aire acondicionado,
                  La Monería es el refugio perfecto para descubrir la riqueza natural e histórica
                  de la Cuenca Minera de Huelva.
                </p>
              </div>
            </div>
            <div className="bg-muted/30 rounded-xl p-8">
              <h3 className="font-serif text-2xl font-semibold mb-6 text-foreground">
                Servicios incluidos
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-primary mt-1" />
                  <span>Climatización completa (aire acondicionado y calefacción)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-primary mt-1" />
                  <span>Chimenea con una carga de leña gratuita</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-primary mt-1" />
                  <span>Ropa de cama y menaje completo</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-primary mt-1" />
                  <span>Piscina salina y jardín privado</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-primary mt-1" />
                  <span>Barbacoa y zona de exterior</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-primary mt-1" />
                  <span>Cocina totalmente equipada</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Commitment */}
      <section className="py-16 section-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Compromiso con lo local
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Colaboramos exclusivamente con profesionales y proveedores locales,
            contribuyendo directamente al desarrollo económico de la Cuenca Minera.
            Desde la construcción hasta el mantenimiento, apostamos por el talento de nuestra tierra.
          </p>
          <div className="inline-flex items-center space-x-2 text-accent font-medium">
            <span>Apoyamos la economía local</span>
            <Star className="h-5 w-5" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-warm text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para vivir una experiencia única?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Reserva tu estancia en La Monería y descubre la magia del Río Tinto.
            Llamanos directamente para consultar disponibilidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 font-semibold"
            >
              <a href="tel:654873176">
                <Phone className="h-5 w-5 mr-2" />
                654 873 176
              </a>
            </Button>
            <Button
              asChild
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 font-semibold"
            >
              <a href="/contacto">
                <Calendar className="h-5 w-5 mr-2" />
                Más información
              </a>
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">
            RTA: VTAR/HU/00392 | Estancia mínima: 2 noches
          </p>
        </div>
      </section>
    </>
  );
}