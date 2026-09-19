# Spec 011 — Footer (Pie de Página)

**Sección:** Footer
**Estado:** Implementado / Estable
**Depende de:** `constitution.md`

---

## 1. Objetivo

Cerrar la landing page de manera institucional y sobria, reforzando la identidad corporativa de VeneCars Motors mediante el logotipo oficial en versión clara, la razón social legal, el año de vigencia dinámico y la ubicación geográfica de la empresa.

---

## 2. Alcance

**Incluye:**
- Contenedor semántico `<footer>` de ancho completo con fondo `brand-black` y borde superior sutil (`border-t border-white/10`).
- Componente de logotipo `Logo` en variante clara (`isLight={true}`).
- Texto de copyright con cálculo dinámico del año (`new Date().getFullYear()`).
- Razón social legal: *VeneCars Motors C.A.*
- Ubicación de referencia: *Puerto Ordaz, Estado Bolívar, Venezuela.*
- Disposición responsive (columna en mobile, fila justificada en `sm` en adelante).

**No incluye (en el estado actual):**
- Columnas de enlaces secundarios de navegación o mapa del sitio.
- Enlaces a términos y condiciones / política de privacidad (pueden sumarse si el cliente los requiere a futuro).

---

## 3. Criterios de aceptación (EARS)

1. **CUANDO** la página carga esta sección, **EL sistema DEBE** renderizar la etiqueta semántica `<footer>` al final de la página.
2. **SIEMPRE**, el fondo **DEBE** ser negro institucional (`bg-brand-black`) con un borde superior semitransparente (`border-t border-white/10`) y espaciado vertical cómodo (`py-10`).
3. **SIEMPRE**, el pie de página **DEBE** incluir el logotipo oficial de VeneCars Motors usando el componente `<Logo isLight={true} />`.
4. **SIEMPRE**, el texto de derechos reservados **DEBE** calcular el año actual dinámicamente y mostrar: *"© [Año] VeneCars Motors C.A. Todos los derechos reservados."*
5. **SIEMPRE**, se **DEBE** incluir la línea de ubicación: *"Puerto Ordaz, Estado Bolívar, Venezuela."*.
6. **CUANDO** el ancho de pantalla es menor a 640px (`sm`), **EL sistema DEBE** apilar el logo y los textos verticalmente con alineación centrada (`flex-col items-center text-center gap-6`).
7. **CUANDO** el ancho de pantalla es igual o mayor a 640px, **EL sistema DEBE** distribuir el logo a la izquierda y el texto legal a la derecha (`sm:flex-row sm:justify-between sm:text-right`).

---

## 4. Restricciones (heredadas de `constitution.md`)

- Paleta: fondo `brand-black`, textos en `brand-gray` (`text-brand-gray/70` para lectura secundaria).
- Cero fuentes decorativas; tipografía sans-serif limpia.
- Cero enlaces rotos o marcas adicionales fuera de VeneCars Motors C.A.

---

## 5. Datos de referencia (confirmados en `constitution.md`)

- **Razón Social:** VeneCars Motors C.A.
- **Ciudad / Estado / País:** Puerto Ordaz, Estado Bolívar, Venezuela.

---

## 6. Fuera de alcance

- Formulario de suscripción a newsletter.
- Menús complejos de navegación multinivel en el footer.

---

## 7. Notas para el agente

- **Conformidad con `constitution.md`:** El componente actual (`src/sections/FooterSection.tsx`) cumple a cabalidad con todos los principios establecidos en `constitution.md` (paleta negro/blanco/gris, rendimiento estático, datos corporativos verificados).
