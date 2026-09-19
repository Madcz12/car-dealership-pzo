# Spec 006 — Consignación de Vehículos

**Sección:** Consignación
**Estado:** Implementado / Listo
**Depende de:** `constitution.md`

> ⚠️ Nota de alcance respecto al PRD original: este spec documenta la sección independiente `ConsignmentSection` (`#consignacion`), la cual se separó del catálogo 0km para darle relevancia propia como pilar de negocio de vehículos seminuevos y en consignación.

---

## 1. Objetivo

Presentar la propuesta de valor del servicio de consignación de vehículos de VeneCars Motors, transmitiendo confianza, respaldo profesional y seguridad jurídica a los propietarios que desean vender sus autos en Puerto Ordaz.

---

## 2. Alcance

**Incluye:**
- Contenedor de sección con ancla (`#consignacion`) sobre fondo neutro `bg-brand-gray-light`.
- Encabezado unificado: etiqueta roja ("CONSIGNACIÓN DE VEHÍCULOS"), titular en negro ("Consignación Segura y Transparente") y subtítulo descriptivo.
- Grid de 4 pilares de beneficio: Peritaje Profesional, Seguridad Jurídica, Máxima Exposición y Cero Complicaciones.
- Banner de llamada a la acción (CTA) con botón a WhatsApp para agendar peritaje/consignación.
- Soporte de layout responsive (1 columna en mobile, 2 en tablet, 4 en desktop).

**No incluye:**
- Formulario de tasación automática en línea (los acuerdos de valor se hacen vía peritaje físico y WhatsApp).
- Inventario completo de consignación embebido (la consignación es un servicio para captar vehículos; los disponibles se consultan por WhatsApp).

---

## 3. Criterios de aceptación (EARS)

1. **CUANDO** la página carga esta sección, **EL sistema DEBE** mostrar un contenedor con identificador `id="consignacion"` accesible desde la navegación y tarjetas de servicios.
2. **SIEMPRE**, la sección **DEBE** utilizar fondo neutro claro (`bg-brand-gray-light`) y tipografía oscura (`text-brand-black`), manteniendo coherencia con la paleta oficial de `constitution.md`.
3. **SIEMPRE**, el encabezado **DEBE** seguir el patrón institucional: label rojo + titular fuerte + subtítulo de contexto.
4. **SIEMPRE**, la sección **DEBE** presentar 4 tarjetas de beneficios con icono, título y descripción concisa.
5. **CUANDO** el usuario hace clic en el botón de consignación, **EL sistema DEBE** abrir WhatsApp en nueva pestaña con un mensaje contextual preconfigurado.
6. **CUANDO** el ancho de pantalla es menor a 640px, **EL sistema DEBE** apilar las 4 tarjetas en 1 columna.
7. **CUANDO** el ancho de pantalla está entre 640px y 1023px, **EL sistema DEBE** mostrar las tarjetas en cuadrícula de 2x2.
8. **CUANDO** el ancho de pantalla es igual o mayor a 1024px, **EL sistema DEBE** distribuir las 4 tarjetas en una fila de 4 columnas.

---

## 4. Restricciones (heredadas de `constitution.md`)

- Cero videos o animaciones pesadas.
- Uso estricto de los tokens de marca: fondo `brand-gray-light` y textos en `brand-black` / `brand-dark`.
- Sin datos inventados ni promesas comerciales no confirmadas por el cliente.

---

## 5. Datos de referencia

- **ID del elemento:** `consignacion`
- **WhatsApp CTA:** `+58 414 0000000` (provisional, `TODO`)
- **Mensaje WhatsApp:** *"Hola VeneCars Motors, deseo solicitar información y asesoría para consignar mi vehículo."*

---

## 6. Fuera de alcance

- Simulador de tasación de vehículos usados.
- Sistema de subida de fotos o documentación para consignar.
- Pasarela o cobro de comisiones en línea.

---

## 7. Notas para el agente

- La sección está completamente integrada con el componente `Button` y los tipos `ConsignmentBenefit` definidos en `src/types.ts`.
