import Layout from '@/components/Layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

// Import all property images
import rioTinto from '@/assets/Rio Tinto.jpg';
import barbacoa from '@/assets/barbacoa.jpg';
import bano from '@/assets/baño.jpg';
import fotoAseo from '@/assets/foto aseo.jpg';
import fotoSalonChimenea from '@/assets/foto salon chimenea.jpeg';
import fotoSalonComedor from '@/assets/foto salon comedor.jpg';
import fotoVestidor from '@/assets/foto vestidor.jpg';
import habitacionMatrimonio from '@/assets/habitacion matrimonio.jpg';
import habitacionPrincipal2 from '@/assets/habitacion principal 2.jpeg';
import habitacionPrincipal from '@/assets/habitacion principal.jpg';
import habitacion from '@/assets/habitacion.jpg';
import panoramicaPiscina from '@/assets/panoramica piscina.jpge.jpg';
import piscina2 from '@/assets/piscina 2 .jpeg';
import porche from '@/assets/porche.jpge.jpg';
import recibidor from '@/assets/recibidor.jpg';
import salonPlantaAlta from '@/assets/salon planta alta.jpg';

export default function Galeria() {
  const galleryImages = [
    { id: 1, src: rioTinto, alt: "Vista del famoso Río Tinto", category: "Entorno" },
    { id: 2, src: panoramicaPiscina, alt: "Vista panorámica de la piscina", category: "Piscina" },
    { id: 3, src: piscina2, alt: "Piscina salina", category: "Piscina" },
    { id: 4, src: porche, alt: "Porche exterior", category: "Exterior" },
    { id: 5, src: barbacoa, alt: "Zona de barbacoa", category: "Exterior" },
    { id: 6, src: recibidor, alt: "Recibidor de entrada", category: "Interior" },
    { id: 7, src: fotoSalonComedor, alt: "Salón comedor", category: "Interior" },
    { id: 8, src: fotoSalonChimenea, alt: "Salón con chimenea", category: "Interior" },
    { id: 9, src: salonPlantaAlta, alt: "Salón planta alta", category: "Interior" },
    { id: 10, src: habitacionPrincipal, alt: "Habitación principal", category: "Habitaciones" },
    { id: 11, src: habitacionPrincipal2, alt: "Habitación principal vista 2", category: "Habitaciones" },
    { id: 12, src: habitacionMatrimonio, alt: "Habitación de matrimonio", category: "Habitaciones" },
    { id: 13, src: habitacion, alt: "Habitación", category: "Habitaciones" },
    { id: 14, src: fotoVestidor, alt: "Vestidor", category: "Habitaciones" },
    { id: 15, src: bano, alt: "Baño", category: "Baños" },
    { id: 16, src: fotoAseo, alt: "Aseo", category: "Baños" },
  ];

  return (
    <Layout
      title="Galería - Vivienda Rural La Monería | Fotos del alojamiento"
      description="Descubre en imágenes La Monería: piscina salina, jardín, chimenea, habitaciones y el impresionante entorno del Río Tinto."
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Galería de imágenes
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Descubre cada rincón de La Monería y el espectacular entorno del Río Tinto
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <Card key={image.id} className="card-elegant overflow-hidden group cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-square bg-muted/50 relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                      <p className="text-sm font-medium text-foreground">{image.alt}</p>
                      <p className="text-xs text-muted-foreground">{image.category}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Próximamente añadiremos más fotografías de la propiedad y el entorno.
            </p>
            <p className="text-sm text-muted-foreground">
              También puedes ver más imágenes en nuestras redes sociales.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-warm text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            ¿Te gusta lo que ves?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Reserva tu estancia y vive la experiencia en persona
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center px-8 py-4 bg-white text-primary hover:bg-white/90 rounded-lg font-semibold transition-colors"
          >
            Contactar para reservar
          </a>
        </div>
      </section>
    </Layout>
  );
}
