# Spec 007 — ¿Por qué elegirnos? (Bento Grid)

**Sección:** ¿Por qué elegirnos?
**Estado:** Implementado / Listo
**Depende de:** `constitution.md`

> ✅ **Conformidad con `constitution.md`:** Esta versión implementa el **bento-grid de cifras y pilares institucionales** exigido por la Sección 4 (ítem 6) de `constitution.md`, consolidando la propuesta de valor y autoridad de la concesionaria.

---

## 1. Objetivo

Demostrar la solidez y confiabilidad de VeneCars Motors como concesionario oficial en Puerto Ordaz mediante una cuadrícula asimétrica tipo Bento Grid con pilares de garantía, representación de marcas, servicio técnico y seguridad jurídica en consignación.

---

## 2. Alcance

**Incluye:**
- Contenedor de sección con ancla (`#nosotros`).
- Encabezado unificado: etiqueta roja ("¿POR QUÉ ELEGIRNOS?"), titular en negro ("Solidez, Respaldo y Confianza Oficial") y subtítulo descriptivo.
- Bento Grid asimétrico de 4 bloques de valor:
  1. **Garantía Oficial de Fábrica** (col-span-2 en desktop): 3 años o 100.000 km con respaldo directo.
  2. **Marcas Representadas** (col-span-1 en desktop): Venucia & ZXAuto con ingeniería de clase mundial.
  3. **Taller Especializado y Repuestos** (col-span-1 en desktop): Diagnóstico computarizado y repuestos genuinos.
  4. **Consignación Segura y Transparente** (col-span-2 en desktop): Asesoría legal y comercial integral.
- Fondo neutro alterno (`bg-brand-gray-light`) y tarjetas blancas con bordes limpios.

**No incluye:**
- Cifras inventadas no confirmadas (ej. número de autos vendidos).
- Contadores de animación numérica en tiempo real (mantenimiento sobrio).

---

## 3. Criterios de aceptación (EARS)

1. **CUANDO** la página carga esta sección, **EL sistema DEBE** renderizar el contenedor con el ancla `id="nosotros"` para la navegación del Header.
2. **SIEMPRE**, la sección **DEBE** presentar un layout Bento Grid asimétrico (cajas de 2 columnas combinadas con cajas de 1 columna en desktop).
3. **CUANDO** el ancho de pantalla es menor a 768px, **EL sistema DEBE** apilar los 4 bloques verticalmente en 1 columna.
4. **CUANDO** el ancho de pantalla es igual o mayor a 768px, **EL sistema DEBE** estructurar la cuadrícula en 3 columnas maestras distribuidas con `col-span-2` y `col-span-1`.
5. **SIEMPRE**, cada tarjeta del bento **DEBE** incluir: icono representativo, badge superior de categoría, título con tipografía de peso fuerte, descripción de soporte y etiqueta de punto destacado (`highlight`).

---

## 4. Restricciones (heredadas de `constitution.md`)

- Tono de marca estrictamente corporativo y confiable.
- Cero cifras de crédito o ventas inventadas.
- Cumplimiento de contraste AA con fondo `brand-gray-light` y textos en `brand-black` / `neutral-600`.

---

## 5. Datos de referencia

- **ID de navegación:** `nosotros`
- **Pilares:** Garantía 3 años / 100.000 km, Venucia & ZXAuto, Taller Postventa, Consignación sin intermediarios dudosos.

---

## 6. Fuera de alcance

- Widgets de reseñas externas.
- Animaciones complejas o parallax.

---

## 7. Notas para el agente

- La sección está completamente desarrollada en `src/sections/WhyUsSection.tsx` y cumple al 100% con los lineamientos de `constitution.md` y el sistema de diseño Impeccable.
