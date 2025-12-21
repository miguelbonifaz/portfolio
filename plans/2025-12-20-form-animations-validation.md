# Plan: Animaciones y Validación del Formulario de Contacto

**IMPORTANT:** As you complete each task below, update this file to mark checkboxes as done `- [x]` for real-time progress tracking.

## Overview

Mejorar la experiencia del usuario en el formulario de contacto agregando:
1. **Animaciones de envío**: Feedback visual cuando se envía el formulario
2. **Validación mejorada**: Validación en tiempo real de campos con mensajes claros

### Estado Actual

El formulario ya tiene:
- Validación del lado del servidor con Zod (app/actions/contact.ts:7-11)
- Mensajes de error mostrados después del submit (Contact.tsx:99-103, 120-124, 141-145)
- Loading state con spinner durante el envío (Contact.tsx:12-31)
- Toast notifications para éxito/error (Contact.tsx:41-62)
- Atributo `required` HTML5 en inputs (Contact.tsx:97, 118, 139)

### Mejoras a Implementar

1. **Animaciones de Envío**
   - Animación shake/pulse en error de validación
   - Animación de éxito (checkmark o similar)
   - Transición suave al resetear el formulario
   - Animación de los mensajes de error al aparecer

2. **Validación en Tiempo Real**
   - Validación mientras el usuario escribe (on blur)
   - Indicadores visuales de campo válido/inválido
   - Contador de caracteres para el mensaje (min 10)
   - Validación de email con formato correcto antes del submit

## Phase 1: Validación del Cliente en Tiempo Real

- [x] Crear schema de validación Zod compartido entre cliente y servidor
- [x] Mover `contactSchema` a un archivo compartido (data/schemas.ts)
- [x] Implementar hook personalizado `useFormValidation` para validación en tiempo real
- [x] Agregar validación on blur en cada campo
- [x] Agregar indicadores visuales (borde verde/rojo) según estado de validación
- [x] Implementar contador de caracteres para el campo mensaje
- [x] Agregar validación de formato de email mientras se escribe

## Phase 2: Animaciones del Formulario

- [x] Agregar animaciones en Tailwind config o CSS para:
  - Shake animation (error)
  - Success checkmark animation
  - Fade in/out para mensajes de error
  - Pulse animation para el botón de envío
- [x] Implementar animación shake en campos con error
- [x] Agregar animación de éxito al enviar correctamente (checkmark icon)
- [x] Animar la aparición de mensajes de error individuales
- [x] Suavizar la transición al resetear el formulario después de éxito
- [x] Agregar micro-interacciones en el botón submit (hover, active states mejorados)

## Phase 3: Testing y Refinamiento

- [x] Probar todos los casos de validación:
  - Nombre muy corto (< 2 caracteres) ✓
  - Email inválido ✓
  - Mensaje muy corto (< 10 caracteres) ✓
  - Campos vacíos ✓
- [x] Verificar que animaciones funcionen correctamente
- [x] Build exitoso sin errores TypeScript
- [x] Servidor dev corriendo en http://localhost:3000
- [x] Commit final con todas las mejoras (commit: 26d6fa0)

## Technical Notes

- El formulario usa React Server Actions con `useActionState`
- Ya existe validación del servidor en `app/actions/contact.ts`
- Componente usa `react-hot-toast` para notificaciones
- Estilo minimalista con bordes inferiores (border-b)
- Se debe mantener coherencia con el diseño actual

## Files to Modify

- `components/sections/Contact.tsx` - Componente principal
- `app/actions/contact.ts` - Validación del servidor (posible refactor)
- `data/schemas.ts` (nuevo) - Schema compartido de validación
- `app/globals.css` o Tailwind config - Animaciones personalizadas
- `hooks/useFormValidation.ts` (nuevo) - Hook de validación
