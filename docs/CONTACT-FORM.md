# Formulario de Contacto - Documentación

## Resumen

El formulario de contacto está implementado usando **Server Actions** de Next.js 15, con validación completa, rate limiting, y envío de emails usando Nodemailer.

## 🏗️ Arquitectura

### Componentes Principales

```
portfolio-nextjs/
├── app/
│   └── actions/
│       └── contact.ts          # Server Action con lógica de envío
├── components/
│   └── sections/
│       └── Contact.tsx         # Componente del formulario
└── .env.local.example          # Variables de entorno ejemplo
```

## 📝 Server Action

### Archivo: `app/actions/contact.ts`

El Server Action maneja toda la lógica del lado del servidor:

#### Características:

1. **Validación con Zod**
   - Nombre: mínimo 2 caracteres
   - Email: formato válido
   - Mensaje: mínimo 10 caracteres

2. **Rate Limiting**
   - 5 mensajes por hora por email
   - Implementación en memoria (para producción usar Redis)
   - Previene spam y abuso

3. **Envío de Emails**
   - Email principal a ti con los datos del contacto
   - Auto-reply al remitente confirmando recepción
   - Templates HTML profesionales

4. **Manejo de Errores**
   - Errores de validación por campo
   - Errores de envío de email
   - Mensajes amigables al usuario

### Schema de Validación

```typescript
const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})
```

### Respuesta del Server Action

```typescript
type ContactFormState = {
  success: boolean
  message: string
  errors?: {
    name?: string[]
    email?: string[]
    message?: string[]
  }
}
```

## 🎨 Componente Contact

### Archivo: `components/sections/Contact.tsx`

El componente usa React hooks modernos para manejar el formulario:

#### Hooks Utilizados:

1. **`useFormState`** - Maneja el estado del formulario con Server Actions
2. **`useFormStatus`** - Obtiene el estado de pending del formulario
3. **`useEffect`** - Muestra toast notifications basado en el estado
4. **`useRef`** - Referencia al formulario para reset

#### Características:

- ✅ Validación en tiempo real
- ✅ Estados de loading con spinner
- ✅ Toast notifications para success/error
- ✅ Reset automático del formulario al enviar
- ✅ Errores mostrados debajo de cada campo
- ✅ Botón deshabilitado durante envío

### Componente SubmitButton

```typescript
function SubmitButton() {
  const { pending } = useFormStatus()
  
  return (
    <button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="animate-spin" />
          Enviando...
        </>
      ) : (
        'Enviar Mensaje'
      )}
    </button>
  )
}
```

## 📧 Configuración de Email

### Variables de Entorno

Crea un archivo `.env.local` basado en `.env.local.example`:

```bash
# Mailtrap Configuration (Desarrollo)
MAILTRAP_HOST=sandbox.smtp.mailtrap.io
MAILTRAP_PORT=2525
MAILTRAP_USER=tu_usuario_mailtrap
MAILTRAP_PASS=tu_password_mailtrap

# Email Configuration
MAILTRAP_FROM=portfolio@miguelbonifaz.dev
CONTACT_EMAIL=miguelbonifaz126@gmail.com
```

### Obtener Credenciales de Mailtrap

1. Ve a [https://mailtrap.io/](https://mailtrap.io/)
2. Crea una cuenta gratuita
3. Ve a "Email Testing" → "Inboxes"
4. Crea un inbox o usa el default
5. Click en "Show Credentials"
6. Copia las credenciales SMTP a tu `.env.local`

### Para Producción

En producción, reemplaza Mailtrap con un servicio real:

**Opciones recomendadas:**

1. **Resend** (Recomendado para Next.js)
   ```bash
   npm install resend
   ```
   - Fácil integración
   - Excelente DX
   - Free tier generoso

2. **SendGrid**
   - Muy confiable
   - 100 emails/día gratis
   - Buena documentación

3. **Mailgun**
   - Potente API
   - Buenos precios
   - Excelente deliverability

4. **Amazon SES**
   - Muy económico
   - Altamente escalable
   - Requiere más configuración

## 📬 Templates de Email

### Email Principal (a ti)

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      /* Estilos profesionales */
    </style>
  </head>
  <body>
    <div class="header">
      <h1>Nuevo Mensaje de Contacto</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Nombre</div>
        <div class="value">{name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value">{email}</div>
      </div>
      <div class="field">
        <div class="label">Mensaje</div>
        <div class="message-box">{message}</div>
      </div>
    </div>
  </body>
</html>
```

### Auto-Reply (al remitente)

```html
<!DOCTYPE html>
<html>
  <body>
    <div class="header">
      <h1>¡Gracias por contactarme!</h1>
    </div>
    <div class="content">
      <p>Hola {name},</p>
      <p>He recibido tu mensaje y te responderé en 24-48 horas.</p>
      <p>Mientras tanto, puedes:</p>
      <ul>
        <li>Ver mis proyectos</li>
        <li>Conectar en LinkedIn</li>
        <li>Seguirme en X</li>
      </ul>
    </div>
  </body>
</html>
```

## 🔒 Rate Limiting

### Implementación Actual (Desarrollo)

```typescript
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(identifier: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(identifier)

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + 60 * 60 * 1000, // 1 hour
    })
    return true
  }

  if (limit.count >= 5) {
    return false
  }

  limit.count++
  return true
}
```

**Límite:** 5 mensajes por hora por email

### Para Producción

Usar una solución más robusta:

1. **Redis + Upstash**
   ```typescript
   import { Ratelimit } from "@upstash/ratelimit"
   import { Redis } from "@upstash/redis"

   const ratelimit = new Ratelimit({
     redis: Redis.fromEnv(),
     limiter: Ratelimit.slidingWindow(5, "1 h"),
   })
   ```

2. **Vercel KV** (si usas Vercel)
   ```typescript
   import { kv } from '@vercel/kv'
   ```

## 🎨 Toast Notifications

### Configuración

```typescript
import toast, { Toaster } from 'react-hot-toast'

// En el componente
<Toaster />

// Success
toast.success('¡Mensaje enviado!', {
  duration: 5000,
  position: 'bottom-right',
  style: {
    background: '#1f2937',
    color: '#fff',
  },
})

// Error
toast.error('Error al enviar', {
  duration: 5000,
  position: 'bottom-right',
  style: {
    background: '#ef4444',
    color: '#fff',
  },
})
```

## 🧪 Testing

### Testing Local

1. **Configurar Mailtrap:**
   ```bash
   cp .env.local.example .env.local
   # Editar .env.local con tus credenciales
   ```

2. **Iniciar desarrollo:**
   ```bash
   npm run dev
   ```

3. **Probar el formulario:**
   - Ir a http://localhost:3000/#contact
   - Llenar el formulario
   - Enviar
   - Verificar toast notification
   - Revisar inbox en Mailtrap

### Casos de Prueba

#### ✅ Happy Path
1. Llenar todos los campos correctamente
2. Click en "Enviar Mensaje"
3. Ver spinner "Enviando..."
4. Ver toast success
5. Formulario se resetea
6. Email aparece en Mailtrap

#### ❌ Validación
1. **Nombre corto:**
   - Escribir "A"
   - Error: "El nombre debe tener al menos 2 caracteres"

2. **Email inválido:**
   - Escribir "test@"
   - Error: "Email inválido"

3. **Mensaje corto:**
   - Escribir "Hola"
   - Error: "El mensaje debe tener al menos 10 caracteres"

#### 🚫 Rate Limiting
1. Enviar 5 mensajes con el mismo email
2. Intentar enviar el 6to mensaje
3. Ver error: "Has enviado demasiados mensajes..."

### Testing en Producción

1. **Cambiar a servicio real:**
   - Configurar SendGrid/Resend/etc
   - Actualizar variables de entorno
   - Probar envío real

2. **Monitoreo:**
   - Logs de envíos exitosos
   - Logs de errores
   - Métricas de deliverability

## 🐛 Troubleshooting

### Error: "Hubo un error al enviar el mensaje"

**Causas posibles:**

1. **Credenciales incorrectas:**
   - Verificar `.env.local`
   - Verificar que las variables estén bien escritas
   - Reiniciar el servidor de desarrollo

2. **Mailtrap down:**
   - Verificar status en https://mailtrap.io/
   - Probar con otro servicio

3. **Network issues:**
   - Verificar conexión a internet
   - Verificar firewall

### Error: "Has enviado demasiados mensajes"

**Solución:**
- Esperar 1 hora
- O limpiar el rate limit (desarrollo):
  ```typescript
  // En contact.ts, comentar temporalmente:
  // if (!checkRateLimit(validatedData.email)) { ... }
  ```

### Formulario no se resetea

**Solución:**
- Verificar que `formRef.current?.reset()` se ejecute
- Verificar que el estado sea `success: true`

### Toast no aparece

**Solución:**
- Verificar que `<Toaster />` esté en el componente
- Verificar que `useEffect` se ejecute
- Revisar console para errores

## 📊 Métricas y Monitoreo

### Logs Importantes

```typescript
// En contact.ts
console.log('Contact form submitted:', {
  name: validatedData.name,
  email: validatedData.email,
  timestamp: new Date().toISOString(),
})

console.log('Email sent successfully to:', validatedData.email)

console.error('Error sending contact form:', error)
```

### Métricas a Trackear

1. **Envíos exitosos:** Cuántos mensajes se envían
2. **Errores de validación:** Qué campos fallan más
3. **Rate limit hits:** Cuántas veces se bloquea
4. **Tiempo de respuesta:** Cuánto tarda el envío

## 🚀 Mejoras Futuras

### Corto Plazo

- [ ] Honeypot field para anti-spam
- [ ] reCAPTCHA v3 para protección adicional
- [ ] Confirmación de email antes de enviar
- [ ] Guardar mensajes en base de datos

### Largo Plazo

- [ ] Dashboard para ver mensajes
- [ ] Responder desde el dashboard
- [ ] Etiquetas y categorías
- [ ] Integración con CRM
- [ ] Analytics de formulario

## 📚 Recursos

- [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
- [React Hook Form](https://react-hook-form.com/)
- [Nodemailer Documentation](https://nodemailer.com/)
- [Zod Documentation](https://zod.dev/)
- [React Hot Toast](https://react-hot-toast.com/)

---

**Última actualización:** 16 de diciembre, 2025
**Estado:** ✅ Completamente funcional

