# Spec 001 — Header

**Sección:** Header (sticky)
**Estado:** Listo para plan/implementación
**Depende de:** `constitution.md`

---

## 1. Objetivo

Proveer navegación persistente y acceso inmediato a los canales de contacto (WhatsApp, CTA principal) durante todo el recorrido del usuario por la página, reforzando la identidad de marca de VeneCars Motors desde el primer scroll.

---

## 2. Alcance

Incluye: logo, navegación principal, botón CTA fijo, ícono flotante de WhatsApp, comportamiento sticky y su versión responsive (menú hamburguesa en mobile).

No incluye: contenido del Hero (ver `002-hero`), lógica de formulario de contacto (ver `007-contacto`).

---

## 3. Criterios de aceptación (EARS)

1. **CUANDO** la página carga, **EL sistema DEBE** mostrar el header fijo en la parte superior con: logo VeneCars Motors, menú de navegación y botón CTA.
2. **CUANDO** el usuario hace scroll hacia abajo, **EL sistema DEBE** mantener el header visible (sticky) sin que tape contenido ni parpadee.
3. **CUANDO** el ancho de pantalla es menor a 768px, **EL sistema DEBE** colapsar la navegación en un menú hamburguesa, manteniendo visibles el logo y el CTA.
4. **CUANDO** el usuario hace clic en un ítem del menú (Inicio / Catálogo / Consignación / Taller y Repuestos / Nosotros / Contacto), **EL sistema DEBE** desplazar el scroll suavemente (`smooth-scroll`) hasta la sección correspondiente.
5. **CUANDO** la página está en cualquier punto del scroll, **EL sistema DEBE** mostrar un ícono flotante de WhatsApp en una posición fija (esquina inferior derecha), visible en todos los breakpoints.
6. **CUANDO** el usuario hace clic en el ícono de WhatsApp, **EL sistema DEBE** abrir una conversación de WhatsApp (link `wa.me`) en una nueva pestaña, con un mensaje predefinido (ej. "Hola, quiero más información sobre sus vehículos").
7. **SIEMPRE**, el botón CTA principal del header **DEBE** ser visualmente distinguible (color de acento, no el azul marino base) sin romper la paleta definida en la constitución.

---

## 4. Restricciones (heredadas de `constitution.md`)

- Paleta: azul marino + blanco + gris; rojo solo como acento puntual (ej. en el CTA o el ícono de WhatsApp, no en todo el header).
- Sin animaciones agresivas al hacer sticky (transición sutil, máx. 200-300ms).
- Logo debe respetar proporciones originales, sin distorsión.
- Navegación debe ser completamente operable por teclado (accesibilidad).

---

## 5. Fuera de alcance

- Buscador interno.
- Selector de idioma.
- Login/área de usuario.

---

## 6. Notas para el agente

- El link de WhatsApp usará un número de referencia temporal (`+58XXXXXXXXXX`) hasta que el cliente confirme el número oficial — marcar como `TODO` visible en el código.
- El orden de los ítems del menú debe coincidir exactamente con el de la Sección 4 de `constitution.md`.
