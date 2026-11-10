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
      'Agente de IA en WhatsApp que reserva, reprograma y cancela citas las 24 horas, según la disponibilidad real de cada profesional. Entiende texto y notas de voz, y confirma cada acción con un resumen.',
      'El equipo ve las conversaciones en tiempo real y puede pausar el bot para atender personalmente.',
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
      'Agente de IA en WhatsApp que toma cotizaciones de tortas personalizadas de principio a fin. Entiende texto, notas de voz e imágenes, ayuda al cliente a elegir su diseño y crea el pedido solo tras su confirmación.',
      'Del lado del equipo, la IA prellena cada cotización a partir del chat y avisa de nuevos pedidos por WhatsApp y Telegram. El bot puede pausarse en cualquier conversación para atender personalmente.',
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
    screenshots: [
      { src: '/assets/images/automations/dulce-sabor/chat.webp', title: 'Bandeja de chats', description: 'Conversaciones en tiempo real, con el asistente activable por cliente.', width: 1920, height: 1200, span: 3 },
      { src: '/assets/images/automations/dulce-sabor/board.webp', title: 'Tablero de cotizaciones', description: 'Detalle de cada pedido: sabor, porciones, productos, precio, anticipo y entrega.', width: 1920, height: 1200, span: 3 },
      { src: '/assets/images/automations/dulce-sabor/products.webp', title: 'Productos', description: 'Catálogo con embeddings para la búsqueda semántica del agente.', width: 1920, height: 1200, span: 2 },
      { src: '/assets/images/automations/dulce-sabor/whatsapp-catalog.webp', title: 'Catálogo de WhatsApp', description: 'Los productos se sincronizan con el catálogo de WhatsApp Business.', width: 1080, height: 2400, span: 1 },
    ],
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