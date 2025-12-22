import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Phone, MessageCircle, Mail, MapPin, Clock, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { format, addDays, isBefore, startOfDay } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Layout from '@/components/Layout/Layout';

// Form validation schema
const contactSchema = z.object({
  nombre: z.string().min(2, 'El nombre es demasiado corto'),
  email: z.string().email('Email no válido'),
  telefono: z.string().min(9, 'Teléfono debe tener al menos 9 dígitos'),
  fechaEntrada: z.string().refine((val) => {
    const date = new Date(val);
    const today = startOfDay(new Date());
    return !isBefore(date, today);
  }, 'La fecha de entrada no puede ser pasada'),
  fechaSalida: z.string(),
  huespedes: z.string().min(1, 'Selecciona el número de huéspedes'),
  mensaje: z.string().min(10, 'El mensaje debe ser más detallado (mín. 10 carácteres)')
}).refine((data) => {
  const entrada = new Date(data.fechaEntrada);
  const salida = new Date(data.fechaSalida);
  const minSalida = addDays(entrada, 2);
  return !isBefore(salida, minSalida);
}, {
  message: "La estancia mínima es de 2 noches",
  path: ["fechaSalida"]
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contacto() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      huespedes: "2",
      fechaEntrada: format(addDays(new Date(), 1), 'yyyy-MM-dd'),
      fechaSalida: format(addDays(new Date(), 3), 'yyyy-MM-dd'),
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('submitting');
    try {
      const response = await fetch('https://formspree.io/f/mqakovge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          _subject: `Nueva reserva - ${data.nombre}`,
          _replyto: data.email
        })
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <Layout
      title="Contacto - Vivienda Rural La Monería | Reservas por teléfono 654 873 176"
      description="Contacta con La Monería para reservar tu estancia. Teléfono: 654 873 176. Email: agarcia1619@icahuelva.es. Ubicados en Las Delgadas, Minas de Riotinto."
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Contacto y reservas
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Estamos aquí para ayudarte a planificar tu estancia perfecta en La Monería
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="card-elegant">
                <CardContent className="p-6">
                  {status === 'success' ? (
                    <div className="text-center py-12">
                      <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h2 className="text-2xl font-serif font-bold mb-4">¡Mensaje enviado!</h2>
                      <p className="text-muted-foreground mb-8">
                        Gracias por tu interés. Hemos recibido tu consulta y te responderemos lo antes posible por email.
                      </p>
                      <Button onClick={() => setStatus('idle')} variant="outline">
                        Enviar otro mensaje
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">
                        Solicitar información
                      </h2>

                      {status === 'error' && (
                        <div className="bg-destructive/10 border border-destructive/20 text-destructive rounded-lg p-4 mb-6 flex items-center">
                          <AlertCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                          <p className="text-sm">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o llámanos directamente.</p>
                        </div>
                      )}

                      <div className="bg-ochre-light border border-ochre/20 rounded-lg p-4 mb-6">
                        <p className="text-sm text-ochre-foreground">
                          <strong>Importante:</strong> Este formulario enviará tu consulta directamente a los propietarios.
                          No es una reserva inmediata; confirmamos disponibilidad
                          siempre por teléfono llamando al 654 873 176.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="nombre">Nombre completo *</Label>
                            <Input
                              id="nombre"
                              {...register('nombre')}
                              className={errors.nombre ? 'border-destructive' : ''}
                            />
                            {errors.nombre && <p className="text-xs text-destructive">{errors.nombre.message}</p>}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="telefono">Teléfono *</Label>
                            <Input
                              id="telefono"
                              type="tel"
                              {...register('telefono')}
                              className={errors.telefono ? 'border-destructive' : ''}
                            />
                            {errors.telefono && <p className="text-xs text-destructive">{errors.telefono.message}</p>}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            {...register('email')}
                            className={errors.email ? 'border-destructive' : ''}
                          />
                          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="fechaEntrada">Fecha de entrada</Label>
                            <Input
                              id="fechaEntrada"
                              type="date"
                              {...register('fechaEntrada')}
                              className={errors.fechaEntrada ? 'border-destructive' : ''}
                            />
                            {errors.fechaEntrada && <p className="text-xs text-destructive">{errors.fechaEntrada.message}</p>}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="fechaSalida">Fecha de salida</Label>
                            <Input
                              id="fechaSalida"
                              type="date"
                              {...register('fechaSalida')}
                              className={errors.fechaSalida ? 'border-destructive' : ''}
                            />
                            {errors.fechaSalida && <p className="text-xs text-destructive">{errors.fechaSalida.message}</p>}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="huespedes">Huéspedes</Label>
                            <Select
                              onValueChange={(value) => setValue('huespedes', value)}
                              defaultValue="2"
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Seleccionar" />
                              </SelectTrigger>
                              <SelectContent>
                                {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                                  <SelectItem key={n} value={n.toString()}>{n} {n === 1 ? 'persona' : 'personas'}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {errors.huespedes && <p className="text-xs text-destructive">{errors.huespedes.message}</p>}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="mensaje">Mensaje *</Label>
                          <Textarea
                            id="mensaje"
                            rows={4}
                            placeholder="Cuéntanos sobre tu estancia, necesidades especiales..."
                            {...register('mensaje')}
                            className={errors.mensaje ? 'border-destructive' : ''}
                          />
                          {errors.mensaje && <p className="text-xs text-destructive">{errors.mensaje.message}</p>}
                        </div>

                        <Button
                          type="submit"
                          className="btn-hero w-full"
                          disabled={status === 'submitting'}
                        >
                          {status === 'submitting' ? (
                            <>
                              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                              Enviando...
                            </>
                          ) : (
                            <>
                              <Mail className="h-4 w-4 mr-2" />
                              Enviar consulta directa
                            </>
                          )}
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="card-elegant">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
                    Información de contacto
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Teléfono de reservas</p>
                        <a
                          href="tel:654873176"
                          className="text-primary hover:text-primary-glow transition-colors"
                        >
                          654 873 176
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a
                          href="mailto:agarcia1619@icahuelva.es"
                          className="text-primary hover:text-primary-glow transition-colors"
                        >
                          agarcia1619@icahuelva.es
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Dirección</p>
                        <p className="text-muted-foreground">
                          Avda. de Andalucía, 19<br />
                          Aldea Las Delgadas<br />
                          21640 Zalamea la Real (Huelva)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Horario de atención</p>
                        <p className="text-muted-foreground">
                          Lunes a domingo: 9:00 - 21:00h
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="card-elegant">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
                    Contacto directo
                  </h3>
                  <div className="space-y-3">
                    <Button asChild className="btn-hero w-full">
                      <a href="tel:654873176">
                        <Phone className="h-4 w-4 mr-2" />
                        Llamar ahora
                      </a>
                    </Button>

                    <Button asChild variant="outline" className="w-full">
                      <a href="https://wa.me/34654873176" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Escribir por WhatsApp
                      </a>
                    </Button>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border text-center">
                    <p className="text-sm text-muted-foreground">
                      RTA: VTAR/HU/00392<br />
                      Estancia mínima: 2 noches<br />
                      Precio desde 250€/noche
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="card-elegant">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
                    Nuestra ubicación
                  </h3>
                  <div className="bg-muted/30 rounded-lg h-48 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">
                        Mapa interactivo próximamente
                      </p>
                      <Button asChild variant="outline" className="mt-2">
                        <a href="/como-llegar">
                          Ver cómo llegar
                        </a>
                      </Button>
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