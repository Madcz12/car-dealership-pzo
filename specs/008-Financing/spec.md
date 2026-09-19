# Spec 008 — Financiamiento

**Sección:** Financiamiento
**Estado:** Listo para plan/implementación
**Depende de:** `constitution.md`

---

## 1. Objetivo

Comunicar que adquirir un vehículo 0km en VeneCars Motors es un proceso simple y acompañado, reduciendo la fricción percibida de financiar una compra, mediante un flujo visual de pasos claros y un CTA directo a un asesor.

---

## 2. Alcance

Incluye: encabezado de sección, 3 pasos numerados del proceso de financiamiento, CTA final hacia WhatsApp.

No incluye: simulador de cuotas funcional (calculadora con tasas reales), integración con entidades bancarias, aprobación de crédito en línea.

---

## 3. Criterios de aceptación (EARS)

1. **CUANDO** la página carga esta sección, **EL sistema DEBE** mostrar un encabezado con etiqueta corta en rojo (ej. "FINANCIAMIENTO"), título en negro (ej. "Estrena tu vehículo en 3 pasos") y subtítulo breve — mismo patrón visual que `004-catalog` y `005-services`.
2. **SIEMPRE**, la sección **DEBE** mostrar exactamente 3 pasos numerados (01, 02, 03), replicando el lenguaje visual de badge numérico ya usado en las tarjetas de `005-services`.
3. **SIEMPRE**, los 3 pasos **DEBEN** ser, en este orden: (1) Cotiza tu vehículo, (2) Evalúa tu plan de pago con un asesor, (3) Retira tu 0km.
4. **CUANDO** se renderiza cada paso, **EL sistema DEBE** mostrar: número de paso, ícono simple representativo, título corto, y descripción de 1-2 líneas.
5. **CUANDO** el ancho de pantalla es igual o mayor a 768px, **EL sistema DEBE** mostrar los 3 pasos en fila horizontal, con un conector visual sutil entre ellos (línea o flecha).
6. **CUANDO** el ancho de pantalla es menor a 768px, **EL sistema DEBE** apilar los 3 pasos verticalmente, manteniendo el conector visual adaptado a orientación vertical.
7. **CUANDO** se renderiza la sección, **EL sistema DEBE** mostrar un CTA final (ej. "Hablar con un asesor de financiamiento") que abre WhatsApp con un mensaje contextual predefinido.
8. **SIEMPRE**, la sección **NO DEBE** mostrar tasas de interés, porcentajes, plazos en meses ni montos específicos, salvo que el cliente los haya confirmado explícitamente — esto es una restricción crítica, no solo de estilo (ver Sección 4).

---

## 4. Restricciones (heredadas de `constitution.md`)

- **Prohibido inventar cifras de financiamiento** (tasas, plazos, porcentajes de inicial). El texto debe mantenerse en términos generales ("planes de pago flexibles", "adaptado a tu perfil") hasta que el cliente confirme condiciones reales — mostrar números falsos en un contexto financiero es engañoso y puede tener implicaciones legales para el cliente.
- Paleta: fondo blanco o gris claro, badges numéricos en negro o rojo de acento (consistente con `005-services`), sin saturar la sección de color.
- Sin animaciones agresivas — transición sutil al hacer scroll es suficiente.
- CTA usa el mismo componente `Button` y el mismo patrón de WhatsApp ya establecido en el resto del sitio.

---

## 5. Fuera de alcance

- Simulador de cuotas interactivo (calculadora con inputs de monto/plazo) — posible fase 2, una vez el cliente confirme tasas y condiciones reales.
- Formulario de precalificación crediticia.
- Listado de bancos o entidades financieras aliadas (a menos que el cliente confirme alianzas específicas).

---

## 6. Notas para el agente

- Mantener el copy de cada paso genérico y orientado a proceso, no a condiciones financieras específicas.
- Reutilizar el componente de badge numérico si ya existe uno genérico de `005-services`/`QuickAccessCard`, para no duplicar estilos.
- El mensaje de WhatsApp del CTA debe diferenciarse del genérico del header (ej. "Hola, quiero información sobre financiamiento para un vehículo 0km") para que el asesor entienda el contexto de la consulta.
