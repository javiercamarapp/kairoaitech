import React from "react";
import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { motion } from "motion/react";

const data = [
  { name: "Ene", value: 10 },
  { name: "Feb", value: 15 },
  { name: "Mar", value: 20 },
  { name: "Abr", value: 26 },
  { name: "May", value: 32 },
  { name: "Jun", value: 38 },
  { name: "Jul", value: 45 },
];
const stats = [{
  value: "50+",
  label: "Proyectos Gestionados"
}, {
  value: "99.9%",
  label: "Garantía de Disponibilidad"
}, {
  value: "100+",
  label: "Clientes Empresariales"
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
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
            <motion.div className="h-[250px] md:h-[350px] w-full" whileHover={{
            scale: 1.01
          }} transition={{
            duration: 0.3
          }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={1} />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0.6} />
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="name" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                    tickFormatter={(value) => `${value}%`}
                    domain={[0, 50]}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      color: "hsl(var(--foreground))"
                    }}
                    formatter={(value: number) => [`${value}%`, "Ahorro en gastos operativos"]}
                    labelFormatter={(label) => `Mes: ${label}`}
                    cursor={{ fill: "hsl(var(--primary)/0.1)" }}
                  />
                  <Bar 
                    dataKey="value" 
                    fill="url(#barGradient)" 
                    radius={[6, 6, 0, 0]}
                    animationBegin={0}
                    animationDuration={1500}
                    animationEasing="ease-out"
                  >
                    {data.map((_, index) => (
                      <Cell 
                        key={`cell-${index}`}
                        style={{
                          filter: `drop-shadow(0 4px 8px hsl(var(--primary)/0.3))`,
                        }}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </ScrollAnimate>
        </div>
      </div>
    </section>;
}
export default FeaturedStats;