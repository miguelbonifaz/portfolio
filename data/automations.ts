import { Automation } from './types'
import { automationSchema } from './schemas'
import { z } from 'zod'

const automationsData: Automation[] = [
  {
    id: '1',
    name: 'Email Assistant',
    description: 'Agente de IA que gestiona y responde correos automáticamente',
    features: [
      'Clasificación automática de emails',
      'Respuestas inteligentes',
      'Priorización de mensajes',
      'Integración con Gmail',
    ],
    status: 'live',
    icon: 'mail',
  },
  {
    id: '2',
    name: 'Task Scheduler',
    description: 'Automatización de tareas repetitivas y recordatorios',
    features: [
      'Programación de tareas',
      'Recordatorios inteligentes',
      'Integración con calendario',
      'Notificaciones personalizadas',
    ],
    status: 'development',
    icon: 'calendar',
  },
]

// Validate all automations on import
const automationsArraySchema = z.array(automationSchema)
export const automations = automationsArraySchema.parse(automationsData)
