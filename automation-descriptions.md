# Descripciones de Automatizaciones

## Agente 1: Bonifaz Peluqueros

### Estado
**Status**: EN VIVO
**Badge**: Agente en Vivo (green dot pulsante)

### Información Básica
**Cliente**: Peluquería Bonifaz Peluqueros
**Plataforma**: WhatsApp Business
**Icono**: scissors (tijeras)

### Descripción Corta
Bot de agendamiento de citas que gestiona sincronización de calendario, reprogramación y consultas del menú de servicios.

### Descripción Detallada
Agente conversacional de IA integrado con WhatsApp que automatiza completamente el proceso de agendamiento de la peluquería. Permite a los clientes gestionar sus citas 24/7 sin intervención humana, sincronizando en tiempo real con el sistema de gestión interno.

### Funcionalidades Principales
- ✓ Reserva automática vía WhatsApp
- ✓ Cancelación de citas existentes
- ✓ Reagendamiento de citas
- ✓ Consulta de próximas citas del cliente
- ✓ Recordatorios automáticos para reducir ausencias
- ✓ Consultas sobre servicios disponibles y precios
- ✓ Sincronización con calendario en tiempo real

### Stack Tecnológico
- OpenAI API (GPT para procesamiento de lenguaje natural)
- WhatsApp Business API
- Supabase (base de datos)
- n8n / Make (automatización de flujos)
- Integración con sistema web Laravel

### Resultados/Impacto
- Reducción de ausencias mediante recordatorios automáticos
- Disponibilidad 24/7 para agendamiento
- Liberación del personal de tareas administrativas repetitivas
- Mejora en la experiencia del cliente

---

## Agente 2: Dulce Sabor

### Estado
**Status**: EN DESARROLLO
**Badge**: En Desarrollo (yellow/orange dot)

### Información Básica
**Cliente**: Pastelería Dulce Sabor
**Plataforma**: WhatsApp Business
**Icono**: cake (torta) o coffee

### Descripción Corta
Asistente virtual para pastelería que permite cotizar tortas personalizadas, consultar productos y gestionar pedidos.

### Descripción Detallada
Bot conversacional diseñado para pastelería que actúa como asistente de ventas virtual. Permite a los clientes explorar el catálogo, obtener cotizaciones personalizadas de tortas y realizar pedidos directamente a través de WhatsApp. (Actualmente en fase de desarrollo)

### Funcionalidades Principales
- ✓ Cotización de tortas personalizadas
- ✓ Información detallada sobre productos del catálogo
- ✓ Consulta de disponibilidad para fechas específicas
- ⚠ Toma de pedidos directos (en proceso)
- ⚠ Seguimiento de estado de pedidos (planificado)
- ✓ Respuestas a preguntas frecuentes sobre ingredientes y productos

### Stack Tecnológico
- OpenAI API (GPT para procesamiento de lenguaje natural)
- WhatsApp Business API
- Supabase (base de datos)
- n8n / Make (automatización de flujos)

### Estado Actual del Desarrollo
**Fase Actual**: Implementación de lógica de cotización
**Próximos Pasos**:
1. Completar módulo de toma de pedidos
2. Integrar pasarela de pago
3. Implementar sistema de confirmación de disponibilidad
4. Testing con usuarios reales

### Funcionalidades en Roadmap
- Sistema de pago integrado
- Galería de imágenes de productos
- Recomendaciones personalizadas basadas en ocasiones
- Integración con sistema de inventario

---

## Tech Stack Compartido (Sección en automations.html)

### Componentes Principales
- **OpenAI API**: Motor de inteligencia artificial para procesamiento de lenguaje natural
- **WhatsApp Business**: Plataforma de mensajería para comunicación con clientes
- **Supabase**: Base de datos en tiempo real y backend
- **n8n / Make**: Herramientas de automatización para orquestar flujos de trabajo

### Arquitectura
Los agentes funcionan con una arquitectura serverless que garantiza:
- Escalabilidad automática
- Disponibilidad 24/7
- Respuestas en tiempo real
- Integración con sistemas existentes
