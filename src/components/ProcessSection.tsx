"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "motion/react";
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

export function ProcessSection() {
  const stackRef = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end start"],
  });

  return (
    <section className="relative bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
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
                Nuestro proceso comienza con una inmersión profunda en tu visión. En la fase de
                Descubrimiento, mantenemos conversaciones significativas para comprender tu identidad
                de marca, objetivos y la esencia que deseas transmitir.
              </p>
            </ScrollAnimate>
          </div>

          {/* Right Column - Animated Stacking Cards */}
          <div
            ref={stackRef}
            className="relative"
            style={{ height: `${PROCESS_PHASES.length * 80}vh` }}
          >
            <div className="sticky top-24 h-[70vh]">
              {PROCESS_PHASES.map((phase, index) => {
                const n = PROCESS_PHASES.length;
                const start = index / n;
                const end = (index + 1) / n;

                const y = useTransform(scrollYProgress, [start, end], [90, 0]);
                const scale = useTransform(scrollYProgress, [start, end], [0.95, 1]);
                const opacity = useTransform(
                  scrollYProgress,
                  [start, start + 0.06, end - 0.02, end],
                  [0, 1, 1, index === n - 1 ? 1 : 0]
                );

                return (
                  <motion.div
                    key={phase.id}
                    className="absolute inset-0"
                    style={{ y, scale, opacity, zIndex: n - index }}
                  >
                    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-6 shadow-2xl backdrop-blur-md md:p-8">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-xl font-bold text-white md:text-2xl">
                          {phase.title}
                        </h3>
                        <span className="flex-shrink-0 text-3xl font-bold text-white/70 md:text-4xl">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="mt-4 text-sm text-zinc-300 md:text-base leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
