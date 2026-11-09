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
    shortDescription: 'Agente de IA en WhatsApp que cotiza tortas personalizadas, entiende imágenes y notas de voz, y prellena los pedidos para el equipo.',
    longDescription: [
      'Agente de inteligencia artificial integrado en WhatsApp que atiende a los clientes de la pastelería Dulce Sabor y toma sus cotizaciones de tortas personalizadas de principio a fin. Guía al cliente para elegir el diseño, las porciones y la fecha de entrega, muestra un resumen y crea el pedido solo cuando el cliente lo confirma.',
      'El agente entiende texto, notas de voz, imágenes y documentos: analiza la foto de referencia del cliente y, si no tiene una, le envía un buscador de imágenes para elegir el diseño. Responde preguntas sobre productos, promociones y el negocio con búsqueda semántica sobre la base de conocimiento de la pastelería.',
      'Del lado del equipo, la IA lee la conversación y prellena la cotización con sabor, porciones, temática, productos adicionales e imágenes elegidas, señalando los datos ambiguos en lugar de inventarlos. Cada nuevo pedido genera un aviso inmediato por WhatsApp y Telegram.',
      'Todas las conversaciones se ven en tiempo real desde el panel, donde el equipo puede pausar el bot y atender personalmente; al reactivarse, el agente retoma sabiendo lo que pasó en el chat.',
    ].join('\n\n'),
    features: [
      'Cotizaciones de tortas personalizadas 24/7 por WhatsApp',
      'Entiende texto, notas de voz, imágenes y documentos',
      'Buscador de diseños cuando el cliente no tiene referencia',
      'Respuestas sobre productos y promociones con búsqueda semántica',
      'Prellenado de cotizaciones con IA a partir del chat',
      'Avisos de nuevos pedidos al equipo por WhatsApp y Telegram',
      'Bandeja de chats en vivo con opción de pausar el bot'
    ],
    status: 'live',
    icon: 'cake',
    videoUrl: '/assets/videos/dulce-sabor-agent.mp4',
    techStack: ['Laravel', 'Laravel AI SDK', 'OpenAI', 'WhatsApp Cloud API', 'Reverb', 'React + Inertia', 'SerpAPI'],
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