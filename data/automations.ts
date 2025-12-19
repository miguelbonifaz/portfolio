import { Automation } from './types'
import { automationSchema } from './schemas'
import { z } from 'zod'

const automationsData: Automation[] = [
  {
    id: '1',
    slug: 'bonifaz-peluqueros-bot',
    name: 'Bonifaz Peluqueros',
    shortDescription: 'Bot de agendamiento de citas que gestiona sincronización de calendario, reprogramación y consultas del menú de servicios.',
    longDescription: 'Este agente de inteligencia artificial revoluciona la gestión de citas para Bonifaz Peluqueros. Integrado directamente en WhatsApp, permite a los clientes reservar, reprogramar y cancelar citas las 24 horas del día, los 7 días de la semana, sin intervención humana. El sistema se sincroniza en tiempo real con el calendario del negocio, evitando conflictos de horarios y enviando recordatorios automáticos para reducir significativamente la tasa de ausentismo. Además, responde consultas sobre precios, ubicación y servicios ofrecidos, liberando al personal para enfocarse en la atención al cliente presencial.',
    features: [
      'Agendamiento automatizado 24/7',
      'Sincronización de calendario en tiempo real',
      'Recordatorios de citas automáticos',
      'Reprogramación y cancelación autónoma',
      'Consultas de menú de servicios y precios',
      'Manejo de lenguaje natural'
    ],
    status: 'live',
    icon: 'scissors',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
    images: {
      hero: '/assets/images/projects/bonifaz-peluqueros/bonifaz-peluqueros-hero.png',
      gallery: [
        '/assets/images/projects/bonifaz-peluqueros/bonifaz-peluqueros-gallery-1.png',
        '/assets/images/projects/bonifaz-peluqueros/bonifaz-peluqueros-gallery-2.png'
      ]
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
    shortDescription: 'Asistente virtual para pastelería que cotiza tortas personalizadas, informa sobre productos y gestiona disponibilidad.',
    longDescription: 'Asistente inteligente diseñado para pastelerías artesanales. Este bot guía a los clientes a través del proceso de personalización de tortas, ayudándoles a elegir sabores, tamaños y decoraciones. Calcula cotizaciones estimadas al instante y verifica la disponibilidad de fechas para pedidos especiales. Su objetivo es agilizar el proceso de venta y asegurar que cada pedido cuente con toda la información necesaria antes de pasar al equipo de cocina.',
    features: [
      'Cotización de tortas personalizadas',
      'Catálogo interactivo de productos',
      'Consulta de disponibilidad de fechas',
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