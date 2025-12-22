import { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Layout from '@/components/Layout/Layout';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fechaEntrada: '',
    fechaSalida: '',
    huespedes: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create Email message
    const subject = `Consulta de Reserva - La Monería (${formData.nombre})`;
    const body = `Hola! Me interesa reservar en La Monería:

Nombre: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono}

Detalles de la reserva:
Entrada: ${formData.fechaEntrada}
Salida: ${formData.fechaSalida}
Huéspedes: ${formData.huespedes}

Mensaje:
${formData.mensaje}

---
Consulta enviada desde la web La Monería.`;

    const mailtoUrl = `mailto:agarcia1619@icahuelva.es?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
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
                  <h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">
                    Solicitar información
                  </h2>
                  <div className="bg-ochre-light border border-ochre/20 rounded-lg p-4 mb-6">
                    <p className="text-sm text-ochre-foreground">
                      <strong>Importante:</strong> Este formulario enviará tu consulta por correo electrónico.
                      No realizamos reservas online directas; la disponibilidad se confirma
                      siempre por teléfono llamando al 654 873 176.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nombre">Nombre completo *</Label>
                        <Input
                          id="nombre"
                          type="text"
                          required
                          value={formData.nombre}
                          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="telefono">Teléfono *</Label>
                        <Input
                          id="telefono"
                          type="tel"
                          required
                          value={formData.telefono}
                          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="fechaEntrada">Fecha de entrada</Label>
                        <Input
                          id="fechaEntrada"
                          type="date"
                          value={formData.fechaEntrada}
                          onChange={(e) => setFormData({ ...formData, fechaEntrada: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="fechaSalida">Fecha de salida</Label>
                        <Input
                          id="fechaSalida"
                          type="date"
                          value={formData.fechaSalida}
                          onChange={(e) => setFormData({ ...formData, fechaSalida: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="huespedes">Huéspedes</Label>
                        <Select value={formData.huespedes} onValueChange={(value) => setFormData({ ...formData, huespedes: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 persona</SelectItem>
                            <SelectItem value="2">2 personas</SelectItem>
                            <SelectItem value="3">3 personas</SelectItem>
                            <SelectItem value="4">4 personas</SelectItem>
                            <SelectItem value="5">5 personas</SelectItem>
                            <SelectItem value="6">6 personas</SelectItem>
                            <SelectItem value="7">7 personas</SelectItem>
                            <SelectItem value="8">8 personas</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="mensaje">Mensaje</Label>
                      <Textarea
                        id="mensaje"
                        rows={4}
                        placeholder="Cuéntanos sobre tu estancia, necesidades especiales, preguntas..."
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      />
                    </div>

                    <Button type="submit" className="btn-hero w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      Enviar consulta por Email
                    </Button>
                  </form>
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