"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollAnimate } from "@/components/ui/scroll-animate";

const PROCESS_PHASES = [
  {
    id: "process-1",
    title: "Consulta Inicial",
    description:
      "Comenzamos con una conversación profunda para entender tu visión, objetivos de negocio y los desafíos que enfrentas. Esta fase establece las bases para todo lo que sigue.",
  },
  {
    id: "process-2",
    title: "Análisis y Estrategia",
    description:
      "Analizamos tus procesos actuales, identificamos oportunidades de automatización y diseñamos una estrategia de IA personalizada para maximizar el impacto en tu negocio.",
  },
  {
    id: "process-3",
    title: "Desarrollo e Integración",
    description:
      "Nuestro equipo desarrolla e integra las soluciones de IA en tus sistemas existentes. Nos aseguramos de que todo funcione perfectamente con tu infraestructura actual.",
  },
  {
    id: "process-4",
    title: "Pruebas y Optimización",
    description:
      "Realizamos pruebas exhaustivas para garantizar que las soluciones funcionen correctamente. Optimizamos el rendimiento basándonos en datos reales de uso.",
  },
  {
    id: "process-5",
    title: "Lanzamiento y Soporte",
    description:
      "Lanzamos la solución y proporcionamos soporte continuo. Tu éxito es nuestro éxito, por eso estamos contigo en cada paso del camino.",
  },
];

interface CardStickyProps extends HTMLMotionProps<"div"> {
  index: number;
  incrementY?: number;
  incrementZ?: number;
}

const CardSticky = React.forwardRef<HTMLDivElement, CardStickyProps>(
  (
    {
      index,
      incrementY = 40,
      incrementZ = 10,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const y = index * incrementY;
    const z = index * incrementZ;

    return (
      <motion.div
        ref={ref}
        className={cn("sticky", className)}
        style={{ top: `${100 + y}px`, zIndex: z, ...style }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
CardSticky.displayName = "CardSticky";

export function ProcessSection() {
  return (
    <section className="relative bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Header */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <ScrollAnimate delay={0.1} duration={0.6} y={30}>
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Nuestro Proceso
              </span>
            </ScrollAnimate>
            
            <ScrollAnimate delay={0.2} duration={0.6} y={30}>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Planificando tu{" "}
                <span className="text-primary">viaje de transformación</span>
              </h2>
            </ScrollAnimate>
            
            <ScrollAnimate delay={0.3} duration={0.6} y={30}>
              <p className="mt-6 text-base text-muted-foreground md:text-lg">
                Nuestro proceso comienza con una inmersión profunda en tu visión. 
                En la fase de Descubrimiento, mantenemos conversaciones significativas 
                para comprender tu identidad de marca, objetivos y la esencia que deseas transmitir.
              </p>
            </ScrollAnimate>
          </div>

          {/* Right Column - Stacking Cards */}
          <div className="relative pb-20">
            {PROCESS_PHASES.map((phase, index) => (
              <div
                key={phase.id}
                className="sticky mb-6"
                style={{ 
                  top: `${80 + index * 24}px`, 
                  zIndex: index + 1 
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 60, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  viewport={{ once: true, margin: "-80px" }}
                  className="rounded-2xl border border-zinc-700/50 bg-gradient-to-br from-zinc-800 to-zinc-900 p-5 shadow-2xl backdrop-blur-md md:p-6"
                  style={{
                    boxShadow: `0 ${10 + index * 5}px ${30 + index * 10}px -10px rgba(0,0,0,0.5)`
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white md:text-xl">
                        {phase.title}
                      </h3>
                    </div>
                    <span className="flex-shrink-0 text-3xl font-bold text-zinc-600 md:text-4xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-zinc-300 md:text-base">
                    {phase.description}
                  </p>
                </motion.div>
              </div>
            ))}
            {/* Spacer for last card visibility */}
            <div className="h-60 md:h-80" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
