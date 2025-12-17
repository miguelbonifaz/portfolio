'use server'

import { z } from 'zod'
import nodemailer from 'nodemailer'

// Contact form schema
const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

export type ContactFormData = z.infer<typeof contactSchema>

export type ContactFormState = {
  success: boolean
  message: string
  errors?: {
    name?: string[]
    email?: string[]
    message?: string[]
  }
}

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(identifier: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(identifier)

  if (!limit || now > limit.resetTime) {
    // Reset or create new limit (5 requests per hour)
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

export async function submitContactForm(
  prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  try {
    // Extract form data
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    }

    // Validate data
    const validationResult = contactSchema.safeParse(data)

    if (!validationResult.success) {
      return {
        success: false,
        message: 'Por favor, corrige los errores en el formulario',
        errors: validationResult.error.flatten().fieldErrors,
      }
    }

    const validatedData = validationResult.data

    // Rate limiting check
    if (!checkRateLimit(validatedData.email)) {
      return {
        success: false,
        message: 'Has enviado demasiados mensajes. Por favor, intenta más tarde.',
      }
    }

    // Send email using Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST || 'sandbox.smtp.mailtrap.io',
      port: parseInt(process.env.MAILTRAP_PORT || '2525'),
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    })

    // Email to yourself
    await transporter.sendMail({
      from: process.env.MAILTRAP_FROM || 'portfolio@miguelbonifaz.dev',
      to: process.env.CONTACT_EMAIL || 'miguelbonifaz126@gmail.com',
      subject: `Nuevo mensaje de contacto de ${validatedData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: #1f2937;
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border: 1px solid #e5e7eb;
                border-top: none;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: #6b7280;
                margin-bottom: 5px;
              }
              .value {
                font-size: 16px;
                color: #1f2937;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-left: 4px solid #1f2937;
                margin-top: 10px;
                border-radius: 4px;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                font-size: 12px;
                color: #6b7280;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">Nuevo Mensaje de Contacto</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nombre</div>
                <div class="value">${validatedData.name}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value">
                  <a href="mailto:${validatedData.email}" style="color: #1f2937; text-decoration: none;">
                    ${validatedData.email}
                  </a>
                </div>
              </div>
              <div class="field">
                <div class="label">Mensaje</div>
                <div class="message-box">
                  ${validatedData.message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
            <div class="footer">
              <p>Este mensaje fue enviado desde tu portfolio en miguelbonifaz.dev</p>
            </div>
          </body>
        </html>
      `,
      text: `
Nuevo mensaje de contacto

Nombre: ${validatedData.name}
Email: ${validatedData.email}

Mensaje:
${validatedData.message}

---
Este mensaje fue enviado desde tu portfolio en miguelbonifaz.dev
      `,
    })

    // Auto-reply to sender
    await transporter.sendMail({
      from: process.env.MAILTRAP_FROM || 'portfolio@miguelbonifaz.dev',
      to: validatedData.email,
      subject: 'Gracias por tu mensaje - Miguel Bonifaz',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: #1f2937;
                color: white;
                padding: 30px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border: 1px solid #e5e7eb;
                border-top: none;
                border-radius: 0 0 8px 8px;
              }
              .button {
                display: inline-block;
                background: #1f2937;
                color: white;
                padding: 12px 24px;
                text-decoration: none;
                border-radius: 4px;
                margin-top: 20px;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                font-size: 12px;
                color: #6b7280;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">¡Gracias por contactarme!</h1>
            </div>
            <div class="content">
              <p>Hola ${validatedData.name},</p>
              <p>He recibido tu mensaje y te responderé lo antes posible, generalmente en las próximas 24-48 horas.</p>
              <p>Mientras tanto, puedes:</p>
              <ul>
                <li>Ver mis proyectos en <a href="https://miguelbonifaz.dev/#works" style="color: #1f2937;">mi portfolio</a></li>
                <li>Conectar conmigo en <a href="https://www.linkedin.com/in/miguelbonifaz126/" style="color: #1f2937;">LinkedIn</a></li>
                <li>Seguirme en <a href="https://x.com/MBonifaz126" style="color: #1f2937;">X (Twitter)</a></li>
              </ul>
              <p>¡Hablamos pronto!</p>
              <p style="margin-top: 30px;">
                <strong>Miguel Bonifaz</strong><br>
                Full-Stack Developer<br>
                <a href="mailto:miguelbonifaz126@gmail.com" style="color: #1f2937;">miguelbonifaz126@gmail.com</a>
              </p>
            </div>
            <div class="footer">
              <p>© 2025 Miguel Bonifaz. Todos los derechos reservados.</p>
            </div>
          </body>
        </html>
      `,
      text: `
Hola ${validatedData.name},

He recibido tu mensaje y te responderé lo antes posible, generalmente en las próximas 24-48 horas.

Mientras tanto, puedes:
- Ver mis proyectos en https://miguelbonifaz.dev/#works
- Conectar conmigo en https://www.linkedin.com/in/miguelbonifaz126/
- Seguirme en https://x.com/MBonifaz126

¡Hablamos pronto!

Miguel Bonifaz
Full-Stack Developer
miguelbonifaz126@gmail.com

---
© 2025 Miguel Bonifaz. Todos los derechos reservados.
      `,
    })

    return {
      success: true,
      message: '¡Mensaje enviado exitosamente! Te responderé pronto.',
    }
  } catch (error) {
    console.error('Error sending contact form:', error)
    return {
      success: false,
      message: 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctame directamente por email.',
    }
  }
}

