import { Mountain, Camera, TreePine, Compass, Castle, Waves, Wine, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout/Layout';
import rioTinto from '@/assets/entorno_rio_tinto.jpg';

export default function Entorno() {
  const attractions = [
    {
      icon: Waves,
      title: "Río Tinto - Marte en la Tierra",
      description: "El famoso río de aguas rojizas, estudiado por la NASA y el Centro de Astrobiología del CSIC como ejemplo único de biodiversidad en entorno ácido extremo."
    },
    {
      icon: Mountain,
      title: "Museo Minero y Archivo Histórico",
      description: "Descubre la fascinante historia de la minería en Riotinto, una de las explotaciones más antiguas del mundo con más de 5.000 años de historia."
    },
    {
      icon: Camera,
      title: "Barrio Inglés de Bellavista",
      description: "Conjunto arquitectónico único en Andalucía que recrea un pueblo británico de finales del siglo XIX, con su emblemático Club Inglés."
    },
    {
      icon: TreePine,
      title: "Ferrocarril Turístico Minero",
      description: "Viaje panorámico siguiendo el cauce del Río Tinto en vagones restaurados de la época victoriana, una experiencia inolvidable."
    },
    {
      icon: Castle,
      title: "Peña de Hierro",
      description: "Impresionante mina a cielo abierto y subterránea con espectaculares formaciones geológicas y paisajes de otro mundo."
    },
    {
      icon: Compass,
      title: "Corta Atalaya",
      description: "Una de las minas a cielo abierto más grandes de Europa, con miradores que ofrecen vistas espectaculares de la explotación minera."
    }
  ];

  const culturalSites = [
    "Dólmenes de El Pozuelo - monumentos megalíticos únicos en la región",
    "Centro de Interpretación de la Cultura Dolménica de Zalamea",
    "Museo Vázquez Díaz en Nerva - arte contemporáneo en entorno histórico",
    "Gruta de las Maravillas en Aracena - maravilla subterránea",
    "Castillo templario de Aracena con iglesia del siglo XIII",
    "Parque Natural Sierra de Aracena y Picos de Aroche",
    "Coto de Doñana - patrimonio natural mundial",
    "Castillo de Cortegana (siglos XII-XVI)",
    "Reserva Natural del Castillo de las Guardas"
  ];

  return (
    <Layout
      title="Entorno - Vivienda Rural La Monería | Río Tinto y Cuenca Minera de Huelva"
      description="Descubre el entorno único de La Monería: Río Tinto estudiado por la NASA, Minas de Riotinto, Parque Natural Sierra de Aracena, Gruta de las Maravillas y mucho más."
    >
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${rioTinto})` }}
        />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Un entorno único en el mundo
          </h1>
          <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
            Descubre la fascinante Cuenca Minera de Huelva, donde el Río Tinto
            crea paisajes estudiados por la NASA como análogo terrestre de Marte
          </p>
        </div>
      </section>

      {/* Rio Tinto Special Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
                El Río Tinto: Un laboratorio natural único
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
              <p className="mb-6 leading-relaxed">
                El Río Tinto es mucho más que un río: es un fenómeno geológico y biológico
                extraordinario que ha captado la atención de la comunidad científica mundial.
                Sus aguas, de un característico color rojizo debido a la alta concentración
                de hierro y otros minerales, crean un ecosistema único que ha sido estudiado
                por la NASA y el Centro de Astrobiología del CSIC.
              </p>

              <p className="mb-6 leading-relaxed">
                Los científicos han encontrado en el Río Tinto un ejemplo fascinante de
                biodiversidad en condiciones extremas, con microorganismos que pueden
                sobrevivir en un entorno altamente ácido. Este descubrimiento ha
                convertido la zona en un laboratorio natural para el estudio de la
                vida en condiciones similares a las que podrían existir en otros planetas.
              </p>

              <p className="mb-6 leading-relaxed">
                Por esta razón, el programa "Marte en la Tierra" utiliza esta región como
                campo de entrenamiento y investigación para misiones espaciales futuras.
                Los paisajes rojizos y las formaciones geológicas únicas ofrecen un
                escenario verdaderamente marciano en plena Andalucía.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Attractions */}
      <section className="py-16 section-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Principales atractivos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explora los lugares más emblemáticos de la Cuenca Minera y sus alrededores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <Card key={index} className="card-elegant">
                <CardContent className="p-6">
                  <div className="text-center">
                    <attraction.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                      {attraction.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {attraction.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural and Natural Heritage */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-foreground text-center">
              Patrimonio cultural y natural
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-6 text-foreground">
                  Historia y cultura
                </h3>
                <div className="space-y-4">
                  {culturalSites.slice(0, 5).map((site, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{site}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold mb-6 text-foreground">
                  Naturaleza y aventura
                </h3>
                <div className="space-y-4">
                  {culturalSites.slice(5).map((site, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <TreePine className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{site}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 section-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-foreground text-center">
              Actividades recomendadas
            </h2>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6 leading-relaxed">
                La privilegiada ubicación de La Monería te permite disfrutar de múltiples
                actividades. Recomendamos especialmente los senderos por el Río Tinto y la
                sierra, donde podrás contemplar paisajes únicos y descubrir la rica
                biodiversidad de la región.
              </p>

              <p className="mb-6 leading-relaxed">
                Los amantes de la historia disfrutarán visitando la galería romana de
                Riotinto, testimonio de más de 2.000 años de explotación minera. Para
                los más aventureros, las rutas de senderismo por la Sierra de Aracena
                ofrecen espectaculares vistas panorámicas y la oportunidad de conocer
                pueblos con encanto.
              </p>

              <p className="leading-relaxed">
                No te pierdas la experiencia gastronómica local con el enoturismo en
                La Palma del Condado, donde podrás degustar excelentes vinos de la
                región, o una visita a la ermita de la Virgen del Rocío en Almonte,
                uno de los santuarios más importantes de Andalucía.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-warm text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para explorar este mundo único?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Reserva tu estancia en La Monería y sumérgete en la fascinante
            historia y naturaleza de la Cuenca Minera de Huelva
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 font-semibold"
            >
              <a href="tel:654873176">
                Llamar para reservar
              </a>
            </Button>
            <Button
              asChild
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 font-semibold"
            >
              <a href="/como-llegar">
                Cómo llegar
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}