import React, { useState } from 'react';
import { MapPin, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '../components/Button';

interface ContactFormData {
  name: string;
  phone: string;
  vehicle: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    vehicle: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Por favor ingresa tu nombre.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Por favor ingresa un número de contacto.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Por favor escribe un mensaje o consulta.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Construcción del mensaje preformateado para WhatsApp (Spec 010 EARS #7)
    // TODO: Confirmar número oficial de WhatsApp con el cliente
    const whatsappNumber = '584140000000';
    const lines = [
      'Hola VeneCars Motors, deseo solicitar información:',
      `• Nombre: ${formData.name.trim()}`,
      `• Teléfono: ${formData.phone.trim()}`,
    ];

    if (formData.vehicle.trim()) {
      lines.push(`• Vehículo de interés: ${formData.vehicle.trim()}`);
    }

    lines.push(`• Mensaje: ${formData.message.trim()}`);

    const messageText = encodeURIComponent(lines.join('\n'));
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${messageText}`;

    setIsSubmitted(true);

    // Abrir WhatsApp en nueva pestaña
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Limpiar formulario tras envío (EARS #8)
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        vehicle: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contacto" className="py-16 sm:py-20 lg:py-24 bg-brand-black text-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Principal */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <span className="inline-block text-xs uppercase font-bold tracking-widest text-brand-accent">
            Ubicación y Contacto
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-white">
            Visítanos o Contáctanos
          </h2>
          <p className="text-brand-gray text-base sm:text-lg">
            Estamos ubicados en Puerto Ordaz para brindarte la mejor atención personalizada.
          </p>
        </div>

        {/* 3 Tarjetas de Contacto Directo Existentes (EARS #1) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 lg:mb-16">
          {/* Ubicación Física */}
          <div className="p-6 bg-white/5 border border-white/10 flex flex-col items-center text-center">
            <MapPin className="w-8 h-8 text-white mb-3" />
            <h3 className="font-heading font-semibold text-lg text-brand-white mb-2">Ubicación</h3>
            <p className="text-sm text-brand-gray leading-relaxed">
              Av. Caroní, al lado de la estación de servicio Paseo Caroní 1.<br />
              Puerto Ordaz, Edo. Bolívar.
            </p>
          </div>

          {/* Atención Directa WhatsApp */}
          <div className="p-6 bg-white/5 border border-white/10 flex flex-col items-center text-center">
            <Phone className="w-8 h-8 text-white mb-3" />
            <h3 className="font-heading font-semibold text-lg text-brand-white mb-2">Atención Directa</h3>
            <p className="text-sm text-brand-gray mb-4">
              Lunes a Sábado • Asesoría personalizada
            </p>
            {/* TODO: Reemplazar con el número oficial cuando se confirme */}
            <Button variant="primary" size="sm" href="https://wa.me/584140000000" target="_blank" className="border border-white/20">
              Escribir por WhatsApp
            </Button>
          </div>

          {/* Redes Sociales Instagram */}
          <div className="p-6 bg-white/5 border border-white/10 flex flex-col items-center text-center">
            <svg 
              className="w-8 h-8 text-white mb-3" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            <h3 className="font-heading font-semibold text-lg text-brand-white mb-2">Redes Sociales</h3>
            <p className="text-sm text-brand-gray mb-4">
              Síguenos en nuestra cuenta oficial
            </p>
            <a 
              href="https://instagram.com/venecarspzo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-semibold text-white hover:text-brand-gray hover:underline"
            >
              @venecarspzo
            </a>
          </div>
        </div>

        {/* Mapa y Formulario lado a lado en desktop / apilados en mobile (EARS #2, #3, #4, #5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Columna Mapa Embebido (5 columnas en desktop) */}
          <div className="lg:col-span-5 flex flex-col bg-white/5 border border-white/10 overflow-hidden min-h-[300px] sm:min-h-[380px]">
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <span className="text-xs uppercase font-heading font-bold tracking-wider text-brand-gray">
                Sede Principal en Puerto Ordaz
              </span>
              <span className="text-[11px] text-neutral-400">Av. Caroní</span>
            </div>
            <div className="relative w-full flex-grow min-h-[260px]">
              {/* Google Maps embed sin API key para ubicación aproximada de Paseo Caroní, Puerto Ordaz */}
              <iframe
                title="Ubicación de VeneCars Motors en Puerto Ordaz"
                src="https://maps.google.com/maps?q=Av.+Caroni,+Puerto+Ordaz,+Bolivar,+Venezuela&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0 grayscale opacity-85 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Columna Formulario de Contacto (7 columnas en desktop) */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-white/5 border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2">
                Envíanos una consulta
              </h3>
              <p className="text-xs sm:text-sm text-brand-gray mb-6">
                Completa tus datos y te redirigiremos de inmediato a WhatsApp con tu mensaje preparado.
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-brand-whatsapp/20 border border-brand-whatsapp/40 text-brand-white flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-whatsapp shrink-0" />
                  <p className="text-xs sm:text-sm font-medium">
                    ¡Gracias! Te estamos redirigiendo a nuestro canal de WhatsApp para atenderte.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Campo: Nombre */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-brand-gray mb-1.5">
                      Nombre completo <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ej. Carlos Mendoza"
                      className={`w-full px-3.5 py-2.5 text-sm bg-black/40 border text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-colors ${
                        errors.name ? 'border-brand-accent' : 'border-white/15 focus:border-white/40'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-brand-accent flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Campo: Teléfono / WhatsApp */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-brand-gray mb-1.5">
                      Teléfono / WhatsApp <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ej. +58 414 1234567"
                      className={`w-full px-3.5 py-2.5 text-sm bg-black/40 border text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-colors ${
                        errors.phone ? 'border-brand-accent' : 'border-white/15 focus:border-white/40'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-brand-accent flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                </div>

                {/* Campo: Vehículo de Interés (Opcional) */}
                <div>
                  <label htmlFor="contact-vehicle" className="block text-xs font-semibold uppercase tracking-wider text-brand-gray mb-1.5">
                    Vehículo o servicio de interés <span className="text-neutral-500 text-[10px]">(Opcional)</span>
                  </label>
                  <input
                    id="contact-vehicle"
                    name="vehicle"
                    type="text"
                    value={formData.vehicle}
                    onChange={handleChange}
                    placeholder="Ej. ZXAuto Grandlion, Venucia V-Online, Servicio de Taller..."
                    className="w-full px-3.5 py-2.5 text-sm bg-black/40 border border-white/15 text-white placeholder-neutral-500 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-brand-accent transition-colors"
                  />
                </div>

                {/* Campo: Mensaje */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-brand-gray mb-1.5">
                    Mensaje o consulta <span className="text-brand-accent">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escribe tu consulta o requerimiento específico..."
                    className={`w-full px-3.5 py-2.5 text-sm bg-black/40 border text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-colors resize-none ${
                      errors.message ? 'border-brand-accent' : 'border-white/15 focus:border-white/40'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-brand-accent flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Botón de Envío */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-brand-accent hover:bg-brand-accent-hover text-white font-heading font-bold text-sm tracking-normal transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar a WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
