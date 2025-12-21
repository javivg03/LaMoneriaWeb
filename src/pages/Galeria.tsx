import { useState, useEffect, useCallback } from 'react';
import Layout from '@/components/Layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Comprehensive image imports
// ... (imports remain same, omitted for brevity in instruction but I will include them in full replacement if needed)
// Wait, I should include the imports to be safe.

// (Full list of imports again to ensure no breakage)
import img1 from '@/assets/salon_detalle_decoracion.jpeg';
import img2 from '@/assets/exterior_fachada_jardin.jpeg';
import img3 from '@/assets/exterior_entrada_principal.jpeg';
import img4 from '@/assets/exterior_camino_entrada.jpeg';
import img5 from '@/assets/salon_cojines_detalle.jpeg';
import img6 from '@/assets/salon_vista_general.jpeg';
import img7 from '@/assets/comedor_mesa_sillas.jpeg';
import img8 from '@/assets/ventana_decoracion_plantas.jpeg';
import img9 from '@/assets/habitacion_individuales_1.jpeg';
import img10 from '@/assets/habitacion_detalle_mesita.jpeg';
import img11 from '@/assets/salon_vista_cenital.jpeg';
import img12 from '@/assets/cocina_isla_vista_general.jpeg';
import img13 from '@/assets/cocina_detalle_fregadero.jpeg';
import img14 from '@/assets/patio_fuente_decoracion.jpeg';
import img15 from '@/assets/habitacion_azul_blanca.jpeg';
import img16 from '@/assets/habitacion_detalle_cojines.jpeg';
import img17 from '@/assets/habitacion_vista_puerta.jpeg';
import img18 from '@/assets/habitacion_pasillo_entrada.jpeg';
import img19 from '@/assets/habitacion_cortinas_verdes.jpeg';
import img20 from '@/assets/baño_lavabo_moderno.jpeg';
import img21 from '@/assets/habitacion_lampara_noche.jpeg';
import img22 from '@/assets/baño_espejo_ovalado_1.jpeg';
import img23 from '@/assets/baño_espejo_ovalado_2.jpeg';
import img24 from '@/assets/baño_vista_completa_1.jpeg';
import img25 from '@/assets/habitacion_edredon_pajaros.jpeg';
import img26 from '@/assets/salon_sofa_azul_arco.jpeg';
import img27 from '@/assets/salon_vista_hacia_cocina.jpeg';
import img28 from '@/assets/comedor_mesa_redonda.jpeg';
import img29 from '@/assets/baño_espejo_dorado_detalle.jpeg';
import img30 from '@/assets/baño_vista_puerta_moderno.jpeg';
import img31 from '@/assets/salon_comedor_cocina_integrado.jpeg';
import img32 from '@/assets/salon_isla_cocina_vista.jpeg';
import img33 from '@/assets/comedor_detalle_lampara.jpeg';
import img34 from '@/assets/cocina_isla_primer_plano.jpeg';
import img35 from '@/assets/salon_detalle_sofa.jpeg';
import img36 from '@/assets/porche_comedor_exterior.jpeg';
import img37 from '@/assets/baño_espejo_dorado_primer_plano.jpeg';
import img38 from '@/assets/salon_sofa_detalle_texturas.jpeg';
import img39 from '@/assets/salon_cojines_decorativos.jpeg';
import img40 from '@/assets/salon_terraza_interior.jpeg';
import img41 from '@/assets/comedor_vigas_madera.jpeg';
import img42 from '@/assets/barbacoa_detalle_horno.jpeg';
import img43 from '@/assets/barbacoa_vista_general_exterior.jpeg';
import img44 from '@/assets/porche_vista_general.jpeg';
import entRioTinto from '@/assets/entorno_rio_tinto.jpg';
import extBbqAnt from '@/assets/exterior_barbacoa_antigua.jpg';
import banoDucha from '@/assets/baño_ducha_moderna.jpg';
import banoAseo from '@/assets/baño_aseo_cortinas.jpg';
import salonChim from '@/assets/salon_chimenea.jpeg';
import salonCom from '@/assets/salon_comedor_principal.jpg';
import habVest from '@/assets/habitacion_vestidor.jpg';
import habMat from '@/assets/habitacion_matrimonio_principal.jpg';
import habPrivist from '@/assets/habitacion_principal_vistas.jpeg';
import habPriCam from '@/assets/habitacion_principal_cama.jpg';
import habInv from '@/assets/habitacion_invitados.jpg';
import extPisPan from '@/assets/exterior_piscina_panoramica.jpg';
import extPisDet from '@/assets/exterior_piscina_detalle.jpeg';
import extPorRel from '@/assets/exterior_porche_relax.jpg';
import intRecEnt from '@/assets/interior_recibidor_entrada.jpg';
import salPlAlt from '@/assets/salon_planta_alta_biblioteca.jpg';

export default function Galeria() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const galleryImages = [
    { id: 1, src: extPisPan, alt: "Piscina panorámica", category: "Piscina" },
    { id: 2, src: extPisDet, alt: "Detalle piscina salina", category: "Piscina" },
    { id: 3, src: extPorRel, alt: "Porche área de relax", category: "Exterior" },
    { id: 4, src: img44, alt: "Cenador exterior", category: "Exterior" },
    { id: 5, src: img36, alt: "Comedor exterior en porche", category: "Exterior" },
    // Removed redundant BBQ images (img43, img42)
    { id: 7, src: extBbqAnt, alt: "Barbacoa tradicional", category: "Exterior" },
    { id: 8, src: intRecEnt, alt: "Entrada principal", category: "Interior" },
    { id: 9, src: salonChim, alt: "Salón con chimenea", category: "Interior" },
    { id: 10, src: salonCom, alt: "Comedor principal", category: "Interior" },
    { id: 11, src: img11, alt: "Vista cenital del salón", category: "Interior" },
    { id: 12, src: img6, alt: "Salón vista general", category: "Interior" },
    { id: 13, src: img26, alt: "Sofá azul bajo el arco", category: "Interior" },
    { id: 14, src: salPlAlt, alt: "Biblioteca planta alta", category: "Interior" },
    { id: 16, src: img12, alt: "Isla de la cocina", category: "Interior" },
    { id: 17, src: img14, alt: "Patio fuente romana", category: "Interior" },
    { id: 18, src: habMat, alt: "Dormitorio de matrimonio", category: "Habitaciones" },
    { id: 19, src: habPriCam, alt: "Cama principal", category: "Habitaciones" },
    { id: 20, src: habPrivist, alt: "Dormitorio con vistas", category: "Habitaciones" },
    { id: 21, src: img15, alt: "Habitación doble familiar", category: "Habitaciones" },
    { id: 22, src: habInv, alt: "Dormitorio invitados", category: "Habitaciones" },
    { id: 23, src: habVest, alt: "Vestidor", category: "Habitaciones" },
    { id: 24, src: img25, alt: "Habitación infantil/juvenil", category: "Habitaciones" },
    { id: 25, src: banoDucha, alt: "Baño platos ducha", category: "Baños" },
    { id: 26, src: img20, alt: "Baño lavabo diseño", category: "Baños" },
    { id: 27, src: banoAseo, alt: "Aseo cortesía", category: "Baños" },
    { id: 28, src: img24, alt: "Baño completo principal", category: "Baños" },
    { id: 30, src: img2, alt: "Fachada y jardín", category: "Exterior" },
    { id: 31, src: img3, alt: "Entrada principal", category: "Exterior" },
    { id: 34, src: img8, alt: "Decoración con plantas", category: "Interior" },
    { id: 35, src: img13, alt: "Cocina diseño", category: "Interior" },
    { id: 36, src: img34, alt: "Detalle isla cocina", category: "Interior" },
    { id: 37, src: img27, alt: "Perspectiva cocina", category: "Interior" },
    { id: 38, src: img28, alt: "Mesa comedor redonda", category: "Interior" },
    // Removed redundant Lamp image (img33)
    { id: 40, src: img41, alt: "Vigas vista madera", category: "Interior" },
    { id: 41, src: img38, alt: "Texturas sofá", category: "Interior" },
    { id: 42, src: img40, alt: "Terraza interior", category: "Interior" },
  ];

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0));
    }
  }, [selectedIndex, galleryImages.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1));
    }
  }, [selectedIndex, galleryImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

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
            {galleryImages.map((image, index) => (
              <Card
                key={image.id}
                className="overflow-hidden group cursor-pointer border-none shadow-none hover:shadow-2xl transition-all duration-500 bg-transparent"
                onClick={() => setSelectedIndex(index)}
              >
                <CardContent className="p-0">
                  <div className="aspect-square bg-white relative overflow-hidden rounded-lg shadow-md group-hover:shadow-none transition-shadow">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Hover info - sharp, no blurs */}
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-medium text-white">{image.alt}</p>
                      <p className="text-xs text-white/80 uppercase tracking-wider">{image.category}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Cada rincón ha sido diseñado para tu comodidad y relax.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8">
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 hidden md:block"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>

          <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center">
            <img
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              className="max-h-[80vh] max-w-full object-contain shadow-2xl animate-in zoom-in-95 duration-300"
            />
            <div className="mt-6 text-center text-white">
              <h3 className="font-serif text-2xl font-semibold mb-1">
                {galleryImages[selectedIndex].alt}
              </h3>
              <p className="text-white/60 uppercase tracking-widest text-sm font-medium">
                {galleryImages[selectedIndex].category}
              </p>
              <div className="mt-4 flex gap-4 md:hidden">
                <button onClick={handlePrev} className="p-2 bg-white/10 rounded-full"><ChevronLeft className="h-6 w-6" /></button>
                <button onClick={handleNext} className="p-2 bg-white/10 rounded-full"><ChevronRight className="h-6 w-6" /></button>
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 hidden md:block"
          >
            <ChevronRight className="h-12 w-12" />
          </button>
        </div>
      )}

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

