# Spec 010 — Ubicación y Contacto

**Sección:** Ubicación y contacto
**Estado:** Listo para plan/implementación (versión final — resuelve la discrepancia detectada en la versión retroactiva anterior)
**Depende de:** `constitution.md`

> Esta versión reemplaza la anterior. Se agregó el mapa embebido y el formulario de contacto que exige `constitution.md` (ítem 9), manteniendo intactas las 3 tarjetas de contacto directo ya implementadas y validadas.

---

## 1. Objetivo

Facilitar la conversión de prospectos calificados ofreciendo múltiples vías de contacto: información directa (ubicación, WhatsApp, Instagram), visualización geográfica real del local, y un formulario de contacto para consultas que no requieren respuesta inmediata por chat.

---

## 2. Alcance

Incluye: encabezado de sección, las 3 tarjetas de contacto directo ya existentes, mapa embebido interactivo, formulario de contacto con envío vía WhatsApp (sin backend).

No incluye: envío de formulario por email/CRM (fuera de alcance del proyecto en esta fase, según `constitution.md` Sección 7), geolocalización automática del usuario.

---

## 3. Criterios de aceptación (EARS)

**Comportamiento ya validado (sin cambios):**

1. **CUANDO** la página carga esta sección, **EL sistema DEBE** mostrar el contenedor con `id="contacto"`, fondo negro de marca y las 3 tarjetas de contacto directo (Ubicación, Atención Directa/WhatsApp, Redes Sociales) tal como están implementadas hoy.

**Comportamiento nuevo (mapa):**

2. **CUANDO** se renderiza la sección, **EL sistema DEBE** mostrar debajo de las 3 tarjetas un mapa embebido (iframe) centrado en la dirección oficial (Av. Caroní, al lado de la estación de servicio Paseo Caroní 1, Puerto Ordaz), con un marcador visible en el punto exacto o el más cercano disponible.
3. **SIEMPRE**, el mapa **DEBE** ser interactivo (zoom, arrastre) dentro de su propio contenedor, sin afectar el scroll de la página al pasar el cursor sobre él en desktop (usar `loading="lazy"` en el iframe).
4. **CUANDO** el ancho de pantalla es menor a 768px, **EL sistema DEBE** mostrar el mapa a ancho completo con una altura reducida (ej. 250-300px) para no dominar la pantalla.

**Comportamiento nuevo (formulario):**

5. **CUANDO** se renderiza la sección, **EL sistema DEBE** mostrar un formulario de contacto junto al mapa (lado a lado en desktop, apilado debajo en mobile) con los campos: Nombre (requerido), Teléfono/WhatsApp (requerido), Vehículo de interés (opcional, texto libre), Mensaje (requerido).
6. **CUANDO** el usuario intenta enviar el formulario con campos requeridos vacíos, **EL sistema DEBE** mostrar validación inline (mensaje de error por campo) y no permitir el envío.
7. **CUANDO** el usuario completa los campos requeridos y presiona "Enviar", **EL sistema DEBE** construir un mensaje de WhatsApp pre-formateado con los datos ingresados y abrir `wa.me` con ese mensaje en una nueva pestaña — **NO** existe backend ni envío de email en esta fase.
8. **CUANDO** el envío del formulario se completa (abre WhatsApp), **EL sistema DEBE** mostrar una confirmación visual breve (ej. "Te estamos redirigiendo a WhatsApp") y limpiar los campos del formulario.
9. **SIEMPRE**, los campos del formulario **DEBEN** ser accesibles por teclado, con `label` asociado a cada `input` (no solo `placeholder`).

---

## 4. Restricciones (heredadas de `constitution.md`)

- Cero backend/CRM en esta fase — el formulario es un "atajo" hacia WhatsApp, no un sistema de envío real.
- Mapa y formulario deben respetar la paleta vigente: fondo negro de la sección, tarjetas/inputs con `bg-white/5 border-white/10` (mismo lenguaje visual que las 3 tarjetas existentes).
- Sin animaciones agresivas al mostrar errores de validación (aparición simple, sin shake ni parpadeo).
- El número de WhatsApp usado en el mensaje del formulario debe ser el mismo placeholder ya documentado (`+58 414 0000000`, marcado `TODO`).

---

## 5. Datos de referencia (confirmados)

- **Dirección física:** Av. Caroní, al lado de la estación de servicio Paseo Caroní 1, Puerto Ordaz, Estado Bolívar, Venezuela.
- **Instagram:** `@venecarspzo`
- **WhatsApp:** `+58 414 0000000` (provisional, `TODO`)

---

## 6. Fuera de alcance

- Envío real de formulario a email o CRM.
- Autocompletado de dirección o validación de número telefónico contra un formato específico de país (validación básica de "campo no vacío" es suficiente para el prototipo).
- Múltiples idiomas en el formulario.

---

## 7. Notas para el agente

- Para el mapa, usar un iframe de Google Maps (URL de embed sin API key, vía parámetro `output=embed`) o de OpenStreetMap como alternativa — cualquiera de las dos cumple el criterio, documentar cuál se eligió en `plan.md`.
- Si no se tiene la coordenada exacta del local, usar una búsqueda por dirección de texto en el embed (es aceptable para el prototipo) y marcar como `TODO` ajustar a coordenadas exactas cuando el cliente las confirme.
- Reutilizar el componente `Button` existente para el botón de envío del formulario, manteniendo consistencia visual con el resto del sitio.
