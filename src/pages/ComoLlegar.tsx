import Layout from '@/components/Layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Car, Plane, Train, Navigation } from 'lucide-react';

export default function ComoLlegar() {
  return (
    <Layout
      title="Cómo llegar - Vivienda Rural La Monería | Ubicación y acceso"
      description="Encuentra La Monería en Minas de Riotinto, Huelva. Indicaciones desde Sevilla, Huelva y principales aeropuertos."
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Cómo llegar
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ubicados en la Aldea Las Delgadas (Zalamea la Real), junto a Minas de Riotinto (Huelva)
            </p>
          </div>
        </div>
      </section>

      {/* Address Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="card-elegant mb-12">
              <CardContent className="p-8 text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="font-serif text-2xl font-semibold mb-4 text-foreground">
                  Dirección
                </h2>
                <address className="not-italic text-lg text-muted-foreground">
                  <p>Avda. de Andalucía, 19</p>
                  <p>Aldea Las Delgadas</p>
                  <p>21640 Zalamea la Real (Huelva)</p>
                </address>
                <a
                  href="https://maps.google.com/?q=Avda+de+Andalucia+19+Las+Delgadas+Minas+de+Riotinto+Huelva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-6 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-semibold transition-colors"
                >
                  <Navigation className="h-5 w-5 mr-2" />
                  Abrir en Google Maps
                </a>
              </CardContent>
            </Card>

            {/* Directions */}
            <h2 className="font-serif text-3xl font-bold mb-8 text-center text-foreground">
              Cómo llegar desde...
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Car className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                        Desde Sevilla (80 km)
                      </h3>
                      <ol className="text-muted-foreground space-y-2 list-decimal list-inside">
                        <li>Tomar la A-66 dirección Mérida/Huelva</li>
                        <li>Salir en la N-630 hacia Minas de Riotinto</li>
                        <li>Seguir indicaciones hacia Aldea Las Delgadas</li>
                        <li>La vivienda está en Avda. de Andalucía, 19</li>
                      </ol>
                      <p className="text-sm text-accent mt-3">Tiempo aproximado: 1 hora</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Car className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                        Desde Huelva (65 km)
                      </h3>
                      <ol className="text-muted-foreground space-y-2 list-decimal list-inside">
                        <li>Tomar la N-435 dirección Badajoz</li>
                        <li>Continuar hasta Zalamea la Real</li>
                        <li>Seguir hacia Minas de Riotinto</li>
                        <li>La Aldea Las Delgadas está antes de llegar al pueblo</li>
                      </ol>
                      <p className="text-sm text-accent mt-3">Tiempo aproximado: 50 minutos</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Plane className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                        Aeropuerto de Sevilla (90 km)
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        El aeropuerto más cercano con conexiones nacionales e internacionales.
                      </p>
                      <p className="text-muted-foreground">
                        Recomendamos alquilar un coche para desplazarse hasta la vivienda y explorar la zona.
                      </p>
                      <p className="text-sm text-accent mt-3">Tiempo aproximado: 1h 15min</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Car className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                        Recomendación de llegada
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        La mejor forma de llegar a La Monería es en vehículo propio o de alquiler. La zona no cuenta con transporte público directo a la aldea.
                      </p>
                      <p className="text-muted-foreground">
                        Esto te permitirá además moverte con libertad por toda la comarca de la Cuenca Minera y la Sierra de Aracena.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 section-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">
              Consejos para el viaje
            </h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong className="text-foreground">Vehículo propio necesario:</strong> La aldea no cuenta con transporte público.
                Es indispensable disponer de coche propio para llegar y para explorar los numerosos puntos de interés de la comarca.
              </p>
              <p>
                <strong className="text-foreground">GPS actualizado:</strong> Asegúrate de que tu navegador tenga
                la dirección exacta: Avda. de Andalucía, 19, Las Delgadas, Minas de Riotinto.
              </p>
              <p>
                <strong className="text-foreground">Llegada:</strong> Te enviaremos indicaciones detalladas
                por WhatsApp una vez confirmada tu reserva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-warm text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            ¿Tienes dudas sobre cómo llegar?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contacta con nosotros y te ayudaremos con las indicaciones
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center px-8 py-4 bg-white text-primary hover:bg-white/90 rounded-lg font-semibold transition-colors"
          >
            Contactar
          </a>
        </div>
      </section>
    </Layout>
  );
}
