import Layout from '@/components/Layout/Layout';

export default function Privacidad() {
  return (
    <Layout 
      title="Política de Privacidad - Vivienda Rural La Monería"
      description="Política de privacidad y protección de datos de Vivienda Rural La Monería."
    >
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h1 className="font-serif text-4xl font-bold mb-8 text-foreground">Política de Privacidad</h1>
            
            <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-foreground">
              1. Responsable del tratamiento
            </h2>
            <ul className="text-muted-foreground list-disc pl-6 space-y-2">
              <li><strong>Identidad:</strong> Vivienda Rural La Monería</li>
              <li><strong>Dirección:</strong> Avda. de Andalucía, 19, Aldea Las Delgadas, 21660 Minas de Riotinto (Huelva)</li>
              <li><strong>Correo electrónico:</strong> agarcia1619@icahuelva.es</li>
              <li><strong>Teléfono:</strong> 654 873 176</li>
            </ul>

            <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-foreground">
              2. Finalidad del tratamiento
            </h2>
            <p className="text-muted-foreground">
              Los datos personales que nos proporcione serán utilizados para:
            </p>
            <ul className="text-muted-foreground list-disc pl-6 space-y-2">
              <li>Gestionar las reservas y consultas realizadas a través del formulario de contacto</li>
              <li>Enviar información relacionada con su estancia</li>
              <li>Cumplir con las obligaciones legales aplicables al sector turístico</li>
            </ul>

            <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-foreground">
              3. Legitimación
            </h2>
            <p className="text-muted-foreground">
              La base legal para el tratamiento de sus datos es:
            </p>
            <ul className="text-muted-foreground list-disc pl-6 space-y-2">
              <li>La ejecución de un contrato de alojamiento turístico</li>
              <li>El consentimiento del interesado al enviar el formulario de contacto</li>
              <li>El cumplimiento de obligaciones legales</li>
            </ul>

            <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-foreground">
              4. Conservación de datos
            </h2>
            <p className="text-muted-foreground">
              Los datos personales proporcionados se conservarán mientras se mantenga la relación 
              comercial o durante los años necesarios para cumplir con las obligaciones legales.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-foreground">
              5. Destinatarios
            </h2>
            <p className="text-muted-foreground">
              Los datos no se cederán a terceros salvo en los casos en que exista una obligación legal. 
              No se realizan transferencias internacionales de datos.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-foreground">
              6. Derechos del interesado
            </h2>
            <p className="text-muted-foreground">
              Cualquier persona tiene derecho a obtener confirmación sobre si estamos tratando datos 
              personales que le conciernan. Las personas interesadas tienen derecho a:
            </p>
            <ul className="text-muted-foreground list-disc pl-6 space-y-2">
              <li>Acceder a sus datos personales</li>
              <li>Solicitar la rectificación de los datos inexactos</li>
              <li>Solicitar su supresión cuando los datos ya no sean necesarios</li>
              <li>Solicitar la limitación del tratamiento de sus datos</li>
              <li>Oponerse al tratamiento de sus datos</li>
              <li>Solicitar la portabilidad de los datos</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Para ejercer estos derechos, puede dirigirse a: agarcia1619@icahuelva.es
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-foreground">
              7. Seguridad de los datos
            </h2>
            <p className="text-muted-foreground">
              Adoptamos las medidas técnicas y organizativas necesarias para garantizar la seguridad 
              de los datos de carácter personal y evitar su alteración, pérdida, tratamiento o acceso 
              no autorizado.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
