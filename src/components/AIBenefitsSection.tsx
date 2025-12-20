import React from "react"
import { FeatureSteps } from "@/components/ui/feature-steps"

const aiBenefits = [
  {
    step: "Paso 1",
    title: "Automatización Inteligente",
    content: "Reduce hasta un 70% del trabajo repetitivo con IA. Automatiza tareas como respuestas a clientes, procesamiento de datos y generación de reportes, liberando a tu equipo para tareas estratégicas.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    step: "Paso 2", 
    title: "Análisis Predictivo",
    content: "Anticipa tendencias del mercado y comportamiento de clientes. La IA analiza millones de datos en segundos para darte insights que tardarías semanas en obtener manualmente.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    step: "Paso 3",
    title: "Atención 24/7",
    content: "Chatbots y asistentes virtuales que nunca duermen. Atiende a tus clientes en cualquier momento, en múltiples idiomas, con respuestas precisas y personalizadas.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop"
  },
  {
    step: "Paso 4",
    title: "Reducción de Costos",
    content: "Empresas que implementan IA reportan ahorros del 25-40% en costos operativos. Desde optimización de inventarios hasta eficiencia energética, la IA encuentra oportunidades de ahorro ocultas.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop"
  }
]

export function AIBenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <FeatureSteps
        features={aiBenefits}
        title="¿Por qué implementar IA en tu empresa?"
        autoPlayInterval={5000}
        imageHeight="h-[300px] md:h-[450px]"
      />
    </section>
  )
}

export default AIBenefitsSection
