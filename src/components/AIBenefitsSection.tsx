import React from "react"
import { FeatureSteps } from "@/components/ui/feature-steps"
import automationImage from "@/assets/automation.png"
import analyticsImage from "@/assets/analytics.png"
import support247Image from "@/assets/support247.png"
import costReductionImage from "@/assets/cost-reduction.png"

const aiBenefits = [
  {
    step: "Paso 1",
    title: "Automatización Inteligente",
    content: "Reduce hasta un 70% del trabajo repetitivo con IA. Automatiza tareas como respuestas a clientes, procesamiento de datos y generación de reportes, liberando a tu equipo para tareas estratégicas.",
    image: automationImage
  },
  {
    step: "Paso 2", 
    title: "Análisis Predictivo",
    content: "Anticipa tendencias del mercado y comportamiento de clientes. La IA analiza millones de datos en segundos para darte insights que tardarías semanas en obtener manualmente.",
    image: analyticsImage
  },
  {
    step: "Paso 3",
    title: "Atención 24/7",
    content: "Chatbots y asistentes virtuales que nunca duermen. Atiende a tus clientes en cualquier momento, en múltiples idiomas, con respuestas precisas y personalizadas.",
    image: support247Image
  },
  {
    step: "Paso 4",
    title: "Reducción de Costos",
    content: "Empresas que implementan IA reportan ahorros del 25-40% en costos operativos. Desde optimización de inventarios hasta eficiencia energética, la IA encuentra oportunidades de ahorro ocultas.",
    image: costReductionImage
  }
]

export function AIBenefitsSection() {
  return (
    <section className="bg-background">
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
