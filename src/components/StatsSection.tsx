import React from "react";
import { motion } from "motion/react";
import { ScrollAnimate } from "@/components/ui/scroll-animate";

const stats = [
  { value: "+3", label: "Años de experiencia" },
  { value: "+43", label: "Profesionales a tu Disposición" },
  { value: "+130", label: "Clientes Satisfechos" },
  { value: "+13", label: "Mentorías, Consultorías y Cursos" },
  { value: "+23", label: "Países con casos de Éxito" },
];

export function StatsSection() {
  return (
    <section className="relative w-full bg-zinc-950 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        {/* Header */}
        <ScrollAnimate delay={0.1} duration={0.6} y={30}>
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Confianza Basada en Experiencia y{" "}
            <span className="text-orange-500">Enfoque Especializado en IA</span>
          </h2>
        </ScrollAnimate>

        <ScrollAnimate delay={0.2} duration={0.6} y={30}>
          <p className="text-center text-zinc-400 text-sm md:text-base lg:text-lg max-w-3xl mx-auto mb-12 md:mb-16">
            Un equipo experto dedicado exclusivamente al desarrollo de inteligencia artificial
          </p>
        </ScrollAnimate>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <ScrollAnimate
              key={index}
              delay={0.3 + index * 0.1}
              duration={0.6}
              y={40}
            >
              <motion.div
                className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="block text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 mb-2 md:mb-3">
                  {stat.value}
                </span>
                <span className="block text-zinc-700 text-xs sm:text-sm md:text-base leading-tight">
                  {stat.label}
                </span>
              </motion.div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
