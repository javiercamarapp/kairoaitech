import React from 'react';
import { ArrowUpRight, Scale, Briefcase, FileText, Users, Gavel, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  CardCurtainReveal,
  CardCurtainRevealBody,
  CardCurtainRevealDescription,
  CardCurtainRevealFooter,
  CardCurtainRevealTitle,
  CardCurtain,
} from '@/components/ui/card-curtain-reveal';
import { motion } from 'motion/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  industry: string;
  icon: React.ElementType;
}

const solutions: Solution[] = [
  {
    id: 'abogados-1',
    title: 'Asistente Legal',
    subtitle: 'IA Especializada',
    description: 'Automatiza la revisión de contratos, genera documentos legales y responde consultas de clientes las 24 horas. Reduce el tiempo de investigación legal en un 70% con análisis de jurisprudencia impulsado por IA.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2340&auto=format&fit=crop',
    industry: 'abogados',
    icon: Scale,
  },
  {
    id: 'abogados-2',
    title: 'Gestión de Casos',
    subtitle: 'Automatización Inteligente',
    description: 'Organiza y prioriza casos automáticamente, genera recordatorios de fechas límite y mantén a tus clientes informados con actualizaciones automáticas sobre el estado de sus casos.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2340&auto=format&fit=crop',
    industry: 'abogados',
    icon: Briefcase,
  },
  {
    id: 'abogados-3',
    title: 'Análisis Documental',
    subtitle: 'Due Diligence',
    description: 'Procesa miles de documentos en minutos, identifica cláusulas críticas y genera resúmenes ejecutivos. Ideal para due diligence, fusiones y adquisiciones.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2342&auto=format&fit=crop',
    industry: 'abogados',
    icon: FileText,
  },
  {
    id: 'abogados-4',
    title: 'Atención al Cliente',
    subtitle: 'Chatbot Legal 24/7',
    description: 'Un asistente virtual que responde preguntas frecuentes, agenda citas y califica prospectos automáticamente, permitiendo a tu equipo enfocarse en casos complejos.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2338&auto=format&fit=crop',
    industry: 'abogados',
    icon: Users,
  },
  {
    id: 'abogados-5',
    title: 'Predicción de Casos',
    subtitle: 'Analytics Predictivo',
    description: 'Analiza casos históricos para predecir probabilidades de éxito, estimar tiempos de resolución y optimizar estrategias legales basadas en datos.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2340&auto=format&fit=crop',
    industry: 'abogados',
    icon: Gavel,
  },
  {
    id: 'abogados-6',
    title: 'Compliance Automatizado',
    subtitle: 'Gestión de Riesgos',
    description: 'Monitorea cambios regulatorios en tiempo real, evalúa el cumplimiento normativo y genera alertas automáticas para mantener a tus clientes siempre en regla.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2340&auto=format&fit=crop',
    industry: 'abogados',
    icon: Shield,
  },
];

interface SolutionsGridProps {
  selectedIndustry: string;
}

const SolutionCard: React.FC<{ solution: Solution }> = ({ solution }) => (
  <CardCurtainReveal className="h-[420px] rounded-2xl border border-white/10 bg-black overflow-hidden cursor-pointer">
    <CardCurtainRevealBody className="h-full">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
            <solution.icon className="h-5 w-5 text-white" />
          </div>
          <span className="text-xs font-medium uppercase tracking-wider text-white/60 group-hover:text-black transition-colors duration-300">
            {solution.subtitle}
          </span>
        </div>
        <CardCurtainRevealTitle className="text-xl font-bold text-white group-hover:text-black transition-colors duration-300">
          {solution.title}
        </CardCurtainRevealTitle>
      </div>

      <CardCurtain className="flex-1 flex flex-col justify-between">
        <CardCurtainRevealDescription className="text-sm leading-relaxed !text-white mt-4">
          <p>{solution.description}</p>
        </CardCurtainRevealDescription>

        <div className="mt-6">
          <Button size="sm" variant="secondary" className="group/btn bg-black text-white hover:bg-black/80">
            Conocer más
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Button>
        </div>
      </CardCurtain>
    </CardCurtainRevealBody>

    <CardCurtainRevealFooter>
      <div className="relative h-full w-full">
        <img
          width="100%"
          height="100%"
          alt={solution.title}
          className="h-full w-full object-cover"
          src={solution.image}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </CardCurtainRevealFooter>
  </CardCurtainReveal>
);

export const SolutionsGrid: React.FC<SolutionsGridProps> = ({ selectedIndustry }) => {
  const isMobile = useIsMobile();
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const filteredSolutions = selectedIndustry === 'all' 
    ? solutions 
    : solutions.filter(s => s.industry === selectedIndustry);

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  if (filteredSolutions.length === 0) {
    return (
      <section className="pb-16 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-muted-foreground text-lg">
            No hay soluciones disponibles para esta industria todavía.
          </p>
        </div>
      </section>
    );
  }

  // Mobile: Carousel
  if (isMobile) {
    return (
      <section className="pb-16">
        <Carousel
          opts={{
            align: 'center',
            loop: true,
          }}
          plugins={[autoplayPlugin.current]}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="">
            {filteredSolutions.map((solution) => (
              <CarouselItem key={solution.id} className="basis-[85%]">
                <SolutionCard solution={solution} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                current === index 
                  ? "w-6 bg-primary" 
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    );
  }

  // Desktop: Grid
  return (
    <section className="pb-16 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filteredSolutions.map((solution) => (
            <motion.div
              key={solution.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <SolutionCard solution={solution} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};