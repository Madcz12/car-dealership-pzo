# Spec 010 — Ubicación y Contacto

**Sección:** Ubicación y contacto
**Estado:** Implementación parcial (tarjetas de contacto directo)
**Depende de:** `constitution.md`

> ⚠️ **Discrepancia detectada con `constitution.md`:** La Sección 4 (ítem 9) de `constitution.md` establece que esta sección DEBE incluir **"mapa + formulario + WhatsApp"**. El código actual (`src/sections/ContactSection.tsx`) implementa la información física y el botón de WhatsApp, pero **no contiene el mapa embebido/interactivo ni el formulario de contacto** descritos en la constitución.

---

## 1. Objetivo

Facilitar la conversión de prospectos calificados y brindar canales directos de contacto (ubicación en Puerto Ordaz, canal directo de WhatsApp y enlace a red social Instagram).

---

## 2. Alcance

**Incluye (comportamiento actual):**
- Contenedor con ancla (`#contacto`) sobre fondo oscuro `bg-brand-black`.
- Encabezado: *"Visítanos o Contáctanos"* con subtítulo explicativo.
- Grid de 3 tarjetas de contacto directo:
  1. **Ubicación física:** Dirección real confirmada en Av. Caroní (al lado de E/S Paseo Caroní 1, Puerto Ordaz, Edo. Bolívar).
  2. **Atención Directa:** Horarios de atención y botón CTA directo hacia WhatsApp (`https://wa.me/584140000000`).
  3. **Redes Sociales:** Icono de Instagram con enlace oficial a `@venecarspzo`.
- Comportamiento responsive: 1 columna en mobile (`grid-cols-1`) y 3 columnas en desktop (`md:grid-cols-3`).

**No incluye (en el estado actual):**
- Mapa interactivo de Google Maps embebido (especificado en `constitution.md`).
- Formulario de contacto / cotización con validación de campos (especificado en `constitution.md`).

---

## 3. Criterios de aceptación (EARS)

1. **CUANDO** la página carga esta sección, **EL sistema DEBE** mostrar el contenedor con `id="contacto"` con fondo negro de marca (`bg-brand-black`) y texto en blanco/gris claro.
2. **SIEMPRE**, la sección **DEBE** presentar exactamente 3 tarjetas informativas:
   - Tarjeta 1: Icono `MapPin` con dirección física oficial.
   - Tarjeta 2: Icono `Phone` con horarios y botón `Button` (`variant="primary"`) que abre WhatsApp en pestaña nueva.
   - Tarjeta 3: Icono SVG de Instagram que enlaza a `https://instagram.com/venecarspzo` (`target="_blank"` y `rel="noopener noreferrer"`).
3. **CUANDO** el ancho de pantalla es menor a 768px, **EL sistema DEBE** apilar las 3 tarjetas verticalmente en 1 columna.
4. **CUANDO** el ancho de pantalla es igual o mayor a 768px, **EL sistema DEBE** distribuir las 3 tarjetas en una fila de 3 columnas de igual ancho (`md:grid-cols-3`).
5. **SIEMPRE**, los datos de dirección física y nombre de usuario de Instagram **DEBEN** coincidir estrictamente con los datos de referencia autorizados en la Sección 6 de `constitution.md`.

---

## 4. Restricciones (heredadas de `constitution.md`)

- Cero datos inventados de dirección o teléfonos no confirmados (se usa el placeholder `584140000000` debidamente marcado como `TODO`).
- Sin animaciones disruptivas.
- Cumplimiento de contraste AA mediante fondo negro (`brand-black`), cajas oscuras con borde (`bg-white/5 border-white/10`) y textos en blanco / `brand-gray`.

---

## 5. Datos de referencia (confirmados en Sección 6 de `constitution.md`)

- **Dirección física:** Av. Caroní, al lado de la estación de servicio Paseo Caroní 1, Puerto Ordaz, Estado Bolívar, Venezuela.
- **Instagram:** `@venecarspzo` (`https://instagram.com/venecarspzo`)
- **WhatsApp:** `+58 414 0000000` (número provisional `TODO` para prototipo).

---

## 6. Fuera de alcance

- Backend de procesamiento de correos o CRM para el formulario (en fase de prototipo).
- Geolocalización automática del usuario.

---

## 7. Notas para el agente

- **Evolución recomendada:** Para cumplir cabalmente con `constitution.md`, en una siguiente iteración se debe incorporar el componente de mapa (iframe / OpenStreetMap / Google Maps) y el formulario visual de cotización.
