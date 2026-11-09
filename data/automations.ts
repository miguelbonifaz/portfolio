import { Automation } from './types'
import { automationSchema } from './schemas'
import { z } from 'zod'

const automationsData: Automation[] = [
  {
    id: '1',
    slug: 'bonifaz-peluqueros-bot',
    name: 'Bonifaz Peluqueros',
    shortDescription: 'Agente de IA en WhatsApp que reserva, reprograma y cancela citas 24/7, con disponibilidad real por profesional y soporte para notas de voz.',
    longDescription: [
      'Agente de inteligencia artificial integrado en WhatsApp que atiende a los clientes de Bonifaz Peluqueros las 24 horas. Consulta los servicios, revisa la disponibilidad real de cada profesional y reserva, reprograma o cancela citas directamente en el sistema del negocio, sin intervención humana.',
      'El cliente puede escribir o enviar notas de voz: los audios se transcriben automáticamente y el agente responde igual que a un mensaje de texto. Recuerda el contexto de cada conversación y, antes de crear o modificar una cita, siempre muestra un resumen y espera la confirmación del cliente.',
      'Todos los mensajes se procesan en segundo plano, en orden y con reintentos automáticos ante fallos, así que ninguna conversación se pierde aunque lleguen muchas a la vez.',
      'El equipo ve todas las conversaciones en tiempo real desde el panel y puede pausar el bot en cualquier chat para atender personalmente.',
    ].join('\n\n'),
    features: [
      'Reservas, cambios y cancelaciones 24/7 por WhatsApp',
      'Entiende texto y notas de voz',
      'Disponibilidad real por profesional, con alternativas si el día está lleno',
      'Confirmación con resumen antes de cada acción',
      'Bandeja de chats en vivo con opción de pausar el bot',
      'Recordatorios automáticos a clientes y agenda diaria para cada profesional'
    ],
    status: 'live',
    icon: 'scissors',
    videoUrl: '/assets/videos/bonifaz-peluqueros-agent.mp4',
    techStack: ['Laravel', 'Laravel AI SDK', 'OpenAI', 'WhatsApp Cloud API', 'Horizon', 'Reverb', 'Vue 3'],
    images: {
      hero: '/assets/images/projects/bonifaz-peluqueros/bonifaz-peluqueros-hero.png',
      gallery: []
    },
    cta: {
      text: 'Probar Demo en WhatsApp',
      url: 'https://wa.me/1234567890' // Placeholder
    }
  },
  {
    id: '2',
    slug: 'dulce-sabor-assistant',
    name: 'Dulce Sabor',
    shortDescription: 'Asistente virtual para pastelería que cotiza tortas personalizadas e informa sobre productos.',
    longDescription: 'Asistente inteligente diseñado para pastelerías. Este bot guía a los clientes a través del proceso de personalización de tortas, ayudándoles a elegir sabores, tamaños y decoraciones. Calcula cotizaciones estimadas al instante. Su objetivo es agilizar el proceso de venta y asegurar que cada pedido cuente con toda la información necesaria para facilitar la confirmación del pedido.',
    features: [
      'Cotización de tortas personalizadas',
      'Catálogo interactivo de productos',
      'Respuestas a preguntas frecuentes',
      'Toma de pedidos paso a paso'
    ],
    status: 'development',
    icon: 'cake',
    images: {
      hero: '/assets/images/projects/bonifaz-peluqueros/bonifaz-peluqueros-hero.png', // Fallback for now
      gallery: []
    }
  },
]

// Validate all automations on import
const automationsArraySchema = z.array(automationSchema)
export const automations = automationsArraySchema.parse(automationsData)

export const getAutomationBySlug = (slug: string): Automation | undefined => {
  return automations.find((automation) => automation.slug === slug)
}

export const getAllAutomations = (): Automation[] => {
  return automations
}