# Spec 009 — Testimonios

**Sección:** Testimonios
**Estado:** Listo para plan/implementación (con restricción crítica de contenido — leer Sección 4 antes de implementar)
**Depende de:** `constitution.md`

---

## 1. Objetivo

Reforzar la confianza institucional mostrando experiencias de clientes reales, aportando prueba social a la decisión de compra o consignación.

---

## 2. Alcance

Incluye: encabezado de sección, 2-3 tarjetas de cita de cliente ("quote cards"), diseño responsive.

No incluye: sistema de recolección de reseñas, integración con Google Reviews u otras plataformas externas (posible fase 2).

---

## 3. Criterios de aceptación (EARS)

1. **CUANDO** la página carga esta sección, **EL sistema DEBE** mostrar un encabezado con etiqueta corta en rojo, título en negro y subtítulo — mismo patrón visual que las demás secciones.
2. **SIEMPRE**, la sección **DEBE** mostrar entre 2 y 3 tarjetas de testimonio, cada una con: cita textual del cliente, nombre (o iniciales), y opcionalmente el modelo de vehículo adquirido o servicio recibido.
3. **CUANDO** el ancho de pantalla es igual o mayor a 1024px, **EL sistema DEBE** mostrar las tarjetas en una fila horizontal.
4. **CUANDO** el ancho de pantalla es menor a 1024px, **EL sistema DEBE** apilar o convertir las tarjetas en un carrusel de navegación **manual** (nunca autoplay, consistente con la excepción ya documentada solo para la marquesina de marcas).
5. **CUANDO** se renderiza cada tarjeta, **EL sistema DEBE** usar un ícono o marca visual de comilla ("quote mark") como elemento decorativo, consistente con el patrón "quote card" definido en el PRD original.

---

## 4. Restricción crítica de contenido (leer antes de implementar)

⚠️ **Esta sección NO debe publicarse con testimonios inventados atribuidos como si fueran reales.** Presentar citas ficticias como si vinieran de clientes reales de VeneCars Motors constituye publicidad engañosa, independientemente de la intención.

Para el prototipo/demo (fase de presentación al cliente, no producción):
- Se permite usar contenido de **marcador de posición claramente ficticio** (ej. nombres genéricos tipo "Cliente satisfecho", sin apellido ni foto real) únicamente para ilustrar el diseño visual de la sección.
- El código **DEBE** incluir un comentario `TODO` explícito indicando: *"Reemplazar con testimonios reales verificados antes de publicar en producción — no usar citas ficticias en el sitio en vivo."*
- No usar fotos de personas (de stock o generadas) junto a los testimonios placeholder, para no reforzar la ilusión de que son reales — usar solo iniciales o un ícono genérico de usuario.

Antes de lanzar el sitio a producción, este contenido debe reemplazarse por testimonios reales y verificables (con consentimiento del cliente que los otorgó).

---

## 5. Restricciones adicionales (heredadas de `constitution.md`)

- Sin autoplay en el carrusel mobile — navegación manual (flechas o swipe) únicamente.
- Paleta consistente: fondo claro, comillas decorativas en rojo de acento o negro, texto principal en negro/gris oscuro.
- Sin animaciones agresivas.

---

## 6. Fuera de alcance

- Sistema de recolección/moderación de nuevas reseñas.
- Integración con Google Business Profile u otras plataformas de reseñas externas.
- Calificación por estrellas (a menos que se decida agregar más adelante con datos reales).

---

## 7. Notas para el agente

- Usar como placeholder textos genéricos y neutros (ej. "Excelente atención, todo el proceso fue transparente y rápido.") sin inventar detalles específicos verificables (fechas, montos, nombres completos) que puedan confundirse con un caso real.
- Dejar la estructura de datos (`Testimonial[]` en `types.ts`) lista para recibir testimonios reales fácilmente cuando el cliente los proporcione.
