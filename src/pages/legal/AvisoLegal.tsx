import Layout from '@/components/Layout/Layout';

export default function AvisoLegal() {
  return (
    <Layout 
      title="Aviso Legal - Vivienda Rural La Monería"
      description="Aviso legal e información sobre el titular del sitio web de Vivienda Rural La Monería."
    >
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h1 className="font-serif text-4xl font-bold mb-8 text-foreground">Aviso Legal</h1>
            
            <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-foreground">
              1. Datos identificativos
            </h2>
            <p className="text-muted-foreground">
              En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, 
              de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, 
              a continuación se reflejan los siguientes datos:
            </p>
            <ul className="text-muted-foreground list-disc pl-6 space-y-2">
              <li><strong>Titular:</strong> Vivienda Rural La Monería</li>
              <li><strong>Domicilio:</strong> Avda. de Andalucía, 19, Aldea Las Delgadas, 21660 Minas de Riotinto (Huelva)</li>
              <li><strong>Registro de Turismo de Andalucía (RTA):</strong> VTAR/HU/00392</li>
              <li><strong>Contacto:</strong> agarcia1619@icahuelva.es</li>
              <li><strong>Teléfono:</strong> 654 873 176</li>
            </ul>

            <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-foreground">
              2. Objeto
            </h2>
            <p className="text-muted-foreground">
              El presente sitio web tiene por objeto facilitar al público en general el conocimiento de las 
              actividades que esta organización realiza y los servicios que presta, en particular el 
              alquiler vacacional de la vivienda rural.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-foreground">
              3. Propiedad intelectual e industrial
            </h2>
            <p className="text-muted-foreground">
              Los derechos de propiedad intelectual del contenido de las páginas web, su diseño gráfico y 
              códigos son titularidad del propietario del sitio web y, por tanto, queda prohibida su 
              reproducción, distribución, comunicación pública, transformación o cualquier otra actividad 
              que se pueda realizar con los contenidos de sus páginas web ni aun citando las fuentes, 
              salvo consentimiento por escrito del titular.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-foreground">
              4. Exclusión de garantías y responsabilidad
            </h2>
            <p className="text-muted-foreground">
              El titular no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier 
              naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, 
              falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos 
              en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-foreground">
              5. Modificaciones
            </h2>
            <p className="text-muted-foreground">
              El titular se reserva el derecho de efectuar sin previo aviso las modificaciones que considere 
              oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios 
              que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-foreground">
              6. Legislación aplicable y jurisdicción
            </h2>
            <p className="text-muted-foreground">
              La relación entre el titular y el usuario se regirá por la normativa española vigente y cualquier 
              controversia se someterá a los Juzgados y tribunales de la ciudad de Huelva.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
