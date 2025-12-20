import { FeatureSteps } from "@/components/ui/feature-section"

const features = [
  { 
    step: 'Paso 1', 
    title: 'Automatización Inteligente',
    content: 'Reduce tareas repetitivas y libera a tu equipo para que se enfoque en lo que realmente importa: hacer crecer tu negocio.', 
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop' 
  },
  { 
    step: 'Paso 2',
    title: 'Decisiones Basadas en Datos',
    content: 'Analiza grandes volúmenes de información en segundos y toma decisiones estratégicas con mayor precisión y confianza.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Paso 3',
    title: 'Experiencia del Cliente Superior',
    content: 'Ofrece atención personalizada 24/7 con chatbots inteligentes que entienden y resuelven las necesidades de tus clientes.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop'
  },
  { 
    step: 'Paso 4',
    title: 'Ventaja Competitiva',
    content: 'Las empresas que adoptan IA hoy lideran su industria mañana. No te quedes atrás en la transformación digital.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop'
  },
]

export function AIFeaturesSection() {
  return (
    <section className="relative bg-black -mt-24">
      {/* Gradient fade from background to black */}
      <div className="h-32 bg-gradient-to-b from-background via-background/50 to-black" />
      
      <div className="pb-24">
        <FeatureSteps 
          features={features}
          title="¿Por qué tu empresa necesita IA?"
          autoPlayInterval={4000}
          imageHeight="h-[400px] md:h-[500px]"
          className="text-white"
        />
      </div>
    </section>
  )
}
