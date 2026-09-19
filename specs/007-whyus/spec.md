# Spec 007 — ¿Por qué elegirnos? (Why Us)

**Sección:** ¿Por qué elegirnos?
**Estado:** Prototipo / Implementación básica (placeholder pendiente de bento-grid)
**Depende de:** `constitution.md`

> ⚠️ **Discrepancia detectada con `constitution.md`:** La Sección 4 (ítem 6) de `constitution.md` establece que esta sección DEBE incluir un **"bento-grid de cifras"** para proyectar credibilidad y métricas institucionales. El código actual (`src/sections/WhyUsSection.tsx`) solo contiene un encabezado y subtítulo introductorio, sin la cuadrícula bento ni las cifras numéricas especificadas en la constitución.

---

## 1. Objetivo

Demostrar la solidez y confiabilidad de VeneCars Motors como concesionario líder en Puerto Ordaz frente a competidores informales o tradicionales, mediante argumentos de autoridad y respaldo corporativo.

---

## 2. Alcance

**Incluye (comportamiento actual):**
- Contenedor de sección con ancla (`#nosotros`).
- Encabezado con título centrado: *"¿Por qué elegir VeneCars Motors?"*.
- Subtítulo descriptivo: *"Más que una concesionaria, tu aliado de confianza en Puerto Ordaz."*.
- Fondo neutro alterno (`bg-brand-gray-light`) y tipografía en `brand-black`.

**No incluye (en el estado actual):**
- Bento-grid con métricas/cifras clave (especificado en `constitution.md`, pendiente de desarrollo).
- Iconografía de pilares de confianza (garantía, taller, transparencia legal).
- Testimonios o sellos de certificación.

---

## 3. Criterios de aceptación (EARS)

1. **CUANDO** la página carga esta sección, **EL sistema DEBE** renderizar el elemento contenedor con el ancla `id="nosotros"` para satisfacer la navegación del Header.
2. **SIEMPRE**, la sección **DEBE** emplear la paleta vigente con fondo claro (`bg-brand-gray-light`), título en `text-brand-black` y texto secundario legible.
3. **SIEMPRE**, el título **DEBE** formularse en tipografía de titulares (`font-heading font-bold text-3xl`).
4. **CUANDO** el usuario visualiza la sección en cualquier resolución (mobile, tablet, desktop), **EL sistema DEBE** mantener el texto centrado con un ancho máximo de lectura (`max-w-xl`).

---

## 4. Restricciones (heredadas de `constitution.md`)

- Tono de marca estrictamente serio, profesional y corporativo.
- Prohibido el uso de métricas o cifras inventadas que no hayan sido validadas por el cliente (ej. número de autos vendidos, años de experiencia).
- Prohibidas animaciones agresivas o elementos parpadeantes.

---

## 5. Datos de referencia (Contenido actual en código)

- **ID de navegación:** `nosotros`
- **Título:** ¿Por qué elegir VeneCars Motors?
- **Subtítulo:** Más que una concesionaria, tu aliado de confianza en Puerto Ordaz.
- **Fondo:** `brand-gray-light`

---

## 6. Fuera de alcance

- Animaciones interactivas complejas o contadores de números en tiempo real.
- Integración de reseñas de Google Maps o widgets externos.

---

## 7. Notas para el agente

- **Acción futura requerida:** Cuando se definan las métricas oficiales con el cliente, se debe construir el componente de bento-grid de cifras para dar cumplimiento total al ítem 6 de `constitution.md`.
- El spec actual refleja fielmente el componente React existente en `src/sections/WhyUsSection.tsx` tras la corrección de paleta a `brand-black`.
