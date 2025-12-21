import React from "react";
import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { motion } from "motion/react";
const data = [{
  name: "Ene",
  value: 20
}, {
  name: "Feb",
  value: 40
}, {
  name: "Mar",
  value: 60
}, {
  name: "Abr",
  value: 80
}, {
  name: "May",
  value: 100
}, {
  name: "Jun",
  value: 130
}, {
  name: "Jul",
  value: 160
}];
const stats = [{
  value: "50+",
  label: "Proyectos Gestionados"
}, {
  value: "99.9%",
  label: "Garantía de Disponibilidad"
}, {
  value: "1,200+",
  label: "Clientes Empresariales"
}, {
  value: "1.2s",
  label: "Tiempo de Respuesta Promedio"
}];
export function FeaturedStats() {
  return <section className="w-full bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="flex-1 w-full">
            <ScrollAnimate delay={0.1} duration={0.6} y={30}>
              <p className="text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed mb-8">
                Impulsando equipos con insights en tiempo real.{" "}
                <span className="text-muted-foreground">
                  Nuestro panel de análisis de próxima generación te ayuda a rastrear el rendimiento, gestionar clientes y tomar decisiones basadas en datos en segundos con ayuda de la IA.     
                </span>
              </p>
            </ScrollAnimate>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => <ScrollAnimate key={index} delay={0.2 + index * 0.1} duration={0.6} y={30}>
                  <motion.div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300" whileHover={{
                y: -3,
                scale: 1.02
              }} transition={{
                duration: 0.2
              }}>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </motion.div>
                </ScrollAnimate>)}
            </div>
          </div>

          {/* Area Chart */}
          <ScrollAnimate delay={0.4} duration={0.8} y={40} className="flex-1 w-full">
            <motion.div className="h-[250px] md:h-[350px] w-full bg-card border border-border rounded-2xl p-4 md:p-6 shadow-sm" whileHover={{
            scale: 1.01
          }} transition={{
            duration: 0.3
          }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Tooltip contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--foreground))"
                }} />
                  <Area type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>
          </ScrollAnimate>
        </div>
      </div>
    </section>;
}
export default FeaturedStats;