import { Users, FileBarChart, Vote, Monitor, Tablet, Phone, UserCheck, Globe, ShieldCheck, Target, Zap, Briefcase } from 'lucide-react';

export const content = {
  global: {
    companyName: "Grupo GS",
    tagline: "Confianza que inicia el mercado",
    contact: {
      phone: "+51 907 355 103",
      email: "info@grupogs.com.pe",
      address: "Calle Carlos Tenaud 192, Lima, Perú",
      whatsapp: "51907355103" // Just numbers for API
    },
    socials: {
      linkedin: "#",
      facebook: "#",
      twitter: "#"
    }
  },
  hero: {
    badge: "Líderes en Recolección de Datos",
    title: {
      main: "Datos precisos para",
      highlight: "Decisiones Estratégicas"
    },
    description: "Somos Grupo GS, su brazo operativo en el mercado. Combinamos tecnología avanzada con rigurosidad metodológica para entregar información veraz, auditada y lista para el análisis de las principales consultoras de Latinoamérica.",
    cta: {
      primary: "Solicitar Cotización",
      secondary: "Explorar Servicios"
    },
    stats: [
      { text: "Auditoría 100% Real" },
      { text: "Cobertura Regional" },
      { text: "Entrega en Tiempo Real" }
    ],
    floatingCard: {
      title: "Panel de Campo",
      status: "Estado en vivo",
      metrics: [
        { label: "Encuestadores Activos", value: "120+" },
        { label: "Regiones Cubiertas", value: "Regional" },
        { label: "Efectividad Muestral", value: "98.5%" }
      ]
    },
    footerStats: [
      { value: "10+", label: "Años de Experiencia" },
      { value: "50k+", label: "Encuestas al año" },
      { value: "Latam", label: "Cobertura Regional" },
      { value: "24/7", label: "Soporte Operativo" }
    ]
  },
  services: {
    title: "Nuestras Soluciones",
    subtitle: "Información en la que puede confiar",
    description: "Desde estudios de mercado hasta opinión pública, nuestra infraestructura está diseñada para garantizar la integridad del dato.",
    items: [
      {
        title: "Estudios Cualitativos",
        description: "Investigación profunda, desde la voz del ciudadano. Recolectamos insights mediante interacciones directas.",
        list: ["Focus Groups", "Entrevistas en profundidad", "Pruebas de producto"]
      },
      {
        title: "Estudios Cuantitativos",
        description: "Datos precisos, recolectados con rigurosidad técnica. Ejecutamos encuestas estructuradas a gran escala.",
        list: ["Estudios Omnibus", "Encuestas de satisfacción", "Estudios de consumo", "Sondeos rápidos / flash polls"]
      },
      {
        title: "Estudios de Opinión Pública",
        description: "Captamos lo que la ciudadanía realmente piensa con rigurosos controles de calidad.",
        list: ["Intención de voto", "Imagen y posicionamiento", "Percepción ciudadana", "Estudios post-debate", "Tracking de campaña"]
      }
    ],
    methodologies: {
      title: "Nuestras Metodologías",
      quote: "“El valor de tu estudio comienza en cómo se recolectan los datos. Combinamos tecnología y experiencia para asegurar una recolección rigurosa.”",
      items: [
        { acronym: "CATI", name: "Computer Assisted Telephone Interviewing", desc: "Encuestas telefónicas con supervisión digital." },
        { acronym: "CAPI", name: "Computer Assisted Personal Interviewing", desc: "Encuestas cara a cara usando tablets." },
        { acronym: "CAWI", name: "Computer Assisted Web Interviewing", desc: "Encuestas autoaplicadas por internet." },
        { acronym: "CASI", name: "Computer Assisted Self Interviewing", desc: "Autoencuestas en dispositivos con asistencia técnica." },
        { acronym: "Híbrido", name: "Presencial & Online", desc: "Combinamos enfoques para mayor precisión y alcance." }
      ]
    }
  },
  about: {
    badge: "Sobre Nosotros",
    title: {
      main: "Más que un proveedor, somos su",
      highlight: "Partner de Campo"
    },
    paragraphs: [
      "En Grupo GS, entendemos que la calidad de cualquier estrategia o política pública depende enteramente de la precisión del dato inicial. Si la recolección falla, el análisis falla.",
      "Nos especializamos exclusivamente en el trabajo de campo (Fieldwork). Esto nos permite ser el aliado neutral y técnico perfecto para consultoras, agencias de publicidad y entidades gubernamentales que necesitan 'ojos y oídos' en la calle, sin conflicto de intereses en el análisis final."
    ],
    features: [
      { title: "Calidad Auditada", desc: "Supervisión mediante audios, GPS y re-visitas." },
      { title: "Cobertura Total", desc: "Red propia en Lima y provincias." },
      { title: "Tecnología Real", desc: "Tablets y sincronización en la nube." },
      { title: "Experiencia", desc: "Más de 10 años en el sector." }
    ]
  },
  contact: {
    title: "Empecemos su próximo proyecto",
    description: "¿Necesita levantar información en campo? Escríbanos para recibir una cotización detallada y tiempos estimados.",
    formTitle: "Solicitar Cotización"
  }
};