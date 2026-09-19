# Spec 006 — Consignación de Vehículos

**Sección:** Consignación
**Estado:** Prototipo / Implementación básica (placeholder funcional)
**Depende de:** `constitution.md`

> ⚠️ Nota de alcance respecto al PRD original: este spec documenta la sección independiente `ConsignmentSection` (`#consignacion`), la cual se separó del catálogo 0km para darle relevancia propia como pilar de negocio de vehículos seminuevos y en consignación.

---

## 1. Objetivo

Presentar la propuesta de valor del servicio de consignación de vehículos de VeneCars Motors, transmitiendo confianza, respaldo profesional y seguridad jurídica a los propietarios que desean vender sus autos en Puerto Ordaz.

---

## 2. Alcance

**Incluye:**
- Contenedor de sección con ancla (`#consignacion`).
- Encabezado con titular principal y subtítulo descriptivo de confianza.
- Fondo neutro alterno (`brand-gray-light`) para diferenciar la sección visualmente.
- Soporte de layout responsive centrado.

**No incluye (en el estado actual):**
- Formulario de consignación o tasación online (futura fase de interacción).
- Catálogo embebido de vehículos usados/consignados (actualmente el flujo se canaliza a través de WhatsApp o contacto directo).
- Pasos interactivos del proceso de consignación.

---

## 3. Criterios de aceptación (EARS)

1. **CUANDO** la página carga esta sección, **EL sistema DEBE** mostrar un contenedor con identificador `id="consignacion"` para responder a los enlaces de navegación del Header y la tarjeta de acceso rápido de Servicios.
2. **SIEMPRE**, la sección **DEBE** utilizar fondo neutro claro (`bg-brand-gray-light`) y tipografía oscura (`text-brand-black`), manteniendo coherencia con la paleta oficial de `constitution.md`.
3. **SIEMPRE**, el titular **DEBE** mostrar "Consignación Segura" con peso fuerte (`font-heading font-bold text-3xl text-brand-black`).
4. **SIEMPRE**, el subtítulo **DEBE** comunicar el mensaje clave: *"Vende tu vehículo con respaldo profesional, seguridad jurídica y el mejor alcance de mercado."*
5. **CUANDO** el ancho de pantalla varía entre mobile, tablet y desktop, **EL sistema DEBE** centrar el contenido horizontalmente dentro de un contenedor de ancho máximo acotado (`max-w-7xl` con `max-w-xl` para el texto).

---

## 4. Restricciones (heredadas de `constitution.md`)

- Cero videos o animaciones pesadas.
- Uso estricto de los tokens de marca: fondo `brand-gray-light` y textos en `brand-black` / `brand-dark`.
- Sin datos inventados ni promesas comerciales no confirmadas por el cliente.

---

## 5. Datos de referencia (Contenido actual en código)

- **ID del elemento:** `consignacion`
- **Título:** Consignación Segura
- **Descripción:** Vende tu vehículo con respaldo profesional, seguridad jurídica y el mejor alcance de mercado.
- **Fondo:** `brand-gray-light` (`#F8FAFC`)

---

## 6. Fuera de alcance

- Simulador de tasación de vehículos usados.
- Sistema de subida de fotos o documentación para consignar.
- Pasarela o cobro de comisiones.

---

## 7. Notas para el agente

- **Estado de completitud:** En el código actual, `ConsignmentSection.tsx` es un bloque introductorio mínimo. Para una fase posterior, se prevé enriquecer esta sección con los beneficios clave del servicio (seguridad, peritaje mecánico, gestión legal) y un CTA directo a WhatsApp para consignar.
