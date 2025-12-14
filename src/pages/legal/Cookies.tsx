import Layout from '@/components/Layout/Layout';

export default function Cookies() {
  return (
    <Layout 
      title="Política de Cookies - Vivienda Rural La Monería"
      description="Información sobre el uso de cookies en el sitio web de Vivienda Rural La Monería."
    >
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h1 className="font-serif text-4xl font-bold mb-8 text-foreground">Política de Cookies</h1>
            
            <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-foreground">
              1. ¿Qué son las cookies?
            </h2>
            <p className="text-muted-foreground">
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, 
              tablet o móvil) cuando visita un sitio web. Las cookies permiten que el sitio web recuerde 
              sus acciones y preferencias durante un período de tiempo.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-foreground">
              2. ¿Qué tipos de cookies utilizamos?
            </h2>
            
            <h3 className="font-serif text-xl font-semibold mt-6 mb-3 text-foreground">
              Cookies técnicas (necesarias)
            </h3>
            <p className="text-muted-foreground">
              Son aquellas que permiten al usuario la navegación a través de la página web y la utilización 
              de las diferentes opciones o servicios que en ella existan. Estas cookies son esenciales 
              para el funcionamiento del sitio web.
            </p>

            <h3 className="font-serif text-xl font-semibold mt-6 mb-3 text-foreground">
              Cookies analíticas
            </h3>
            <p className="text-muted-foreground">
              Actualmente este sitio web no utiliza cookies de análisis de terceros. En caso de 
              implementarse en el futuro, se actualizará esta política y se solicitará su consentimiento.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-foreground">
              3. ¿Cómo gestionar las cookies?
            </h2>
            <p className="text-muted-foreground">
              Puede configurar su navegador para que rechace todas las cookies, acepte solo las de 
              determinados sitios o le avise cuando se envíe una cookie. A continuación le indicamos 
              cómo hacerlo en los navegadores más comunes:
            </p>
            <ul className="text-muted-foreground list-disc pl-6 space-y-2">
              <li>
                <strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies
              </li>
              <li>
                <strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies
              </li>
              <li>
                <strong>Safari:</strong> Preferencias → Privacidad → Cookies
              </li>
              <li>
                <strong>Edge:</strong> Configuración → Cookies y permisos del sitio
              </li>
            </ul>

            <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-foreground">
              4. Consecuencias de desactivar las cookies
            </h2>
            <p className="text-muted-foreground">
              Si desactiva las cookies, es posible que algunas funciones del sitio web no funcionen 
              correctamente o que su experiencia de navegación se vea afectada.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-foreground">
              5. Actualización de la política
            </h2>
            <p className="text-muted-foreground">
              Esta política de cookies puede actualizarse, por lo que le recomendamos revisarla 
              periódicamente. Última actualización: Enero 2024.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-foreground">
              6. Contacto
            </h2>
            <p className="text-muted-foreground">
              Para cualquier consulta sobre nuestra política de cookies, puede contactarnos en: 
              agarcia1619@icahuelva.es
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
