import { Flame, Snowflake, Utensils, Bed, Wifi, Waves, TreePine, Users, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/UI/card';
import Layout from '@/components/Layout/Layout';

export default function Servicios() {
  const services = [
    {
      icon: Snowflake,
      title: "Climatización completa",
      description: "Aire acondicionado y calefacción centralizados para tu máximo confort en cualquier época del año. Sistema de última generación que garantiza la temperatura perfecta."
    },
    {
      icon: Flame,
      title: "Chimenea con leña gratuita",
      description: "Disfruta de veladas únicas junto al fuego con nuestra acogedora chimenea. Incluimos una carga de leña gratuita para crear un ambiente cálido y romántico."
    },
    {
      icon: Utensils,
      title: "Cocina de alta gama",
      description: "Cocina totalmente equipada con electrodomésticos de última generación y menaje completo para 8 personas. Todo lo necesario para preparar desde desayunos hasta cenas especiales."
    },
    {
      icon: Bed,
      title: "Ropa de cama premium",
      description: "Sábanas de alta calidad incluidas en el precio. En temporada de invierno proporcionamos fundas nórdicas para mayor comodidad y calidez."
    },
    {
      icon: Waves,
      title: "Piscina salina",
      description: "Refréscate en nuestra piscina de agua salina, más suave para la piel y respetuosa con el medio ambiente. Perfecta para relajarse bajo el sol andaluz."
    },
    {
      icon: TreePine,
      title: "Jardín y zona exterior",
      description: "Amplio jardín de 150 m² con barbacoa, porche cubierto y patio interior con columnas romanas y fuente. Espacios perfectos para disfrutar al aire libre."
    },
    {
      icon: Wifi,
      title: "WiFi de alta velocidad",
      description: "Conexión a internet gratuita de alta velocidad en todas las estancias. Perfecto para mantenerte conectado o trabajar si es necesario."
    }
  ];

  return (
    <Layout
      title="Servicios - Vivienda Rural La Monería | Comodidades y equipamiento completo"
      description="Descubre todos los servicios incluidos en La Monería: climatización, chimenea, piscina salina, cocina equipada, jardín y mucho más. Confort rural de lujo."
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Servicios y comodidades
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Todo lo necesario para una estancia perfecta en el corazón de la Cuenca Minera de Huelva
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Commitment Section */}
      <section className="py-16 section-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Compromiso con proveedores locales
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                En La Monería creemos firmemente en el desarrollo sostenible de nuestra comarca
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Users className="h-8 w-8 text-accent mt-1" />
                    <div>
                      <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                        Profesionales de la zona
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Trabajamos exclusivamente con profesionales locales para la construcción,
                        mantenimiento y conservación de nuestra propiedad, garantizando la
                        calidad y autenticidad del servicio.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Wrench className="h-8 w-8 text-accent mt-1" />
                    <div>
                      <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                        Economía local
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Todos nuestros proveedores son empresas locales de la Cuenca Minera,
                        favoreciendo directamente el desarrollo económico de nuestra comarca
                        y manteniendo vivas las tradiciones artesanales.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA to Environment */}
      <section className="py-16 bg-gradient-warm text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Descubre nuestro entorno único
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ubicados junto al famoso Río Tinto, en un paisaje que la NASA estudia
            como análogo terrestre de Marte
          </p>
          <a
            href="/entorno"
            className="inline-flex items-center px-8 py-4 bg-white text-primary hover:bg-white/90 rounded-lg font-semibold transition-colors"
          >
            Explorar el entorno
          </a>
        </div>
      </section>
    </Layout>
  );
}