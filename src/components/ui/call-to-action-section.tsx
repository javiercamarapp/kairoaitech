import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "motion/react";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Sparkles } from "lucide-react";
import robotHandImage from "@/assets/robot-hand-cta.png";

export default function CallToActionSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative pt-8 pb-32 md:pt-12 md:pb-48 lg:pb-56 overflow-hidden bg-background">
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Badge */}
        <ScrollAnimate delay={0.1} duration={0.6} y={20}>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-muted-foreground mb-8">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span>Únete a más de 100+ empresas usando IA</span>
          </div>
        </ScrollAnimate>

        {/* Main heading */}
        <ScrollAnimate delay={0.2} duration={0.7} y={30}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            Desbloquea tu próxima
            <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              gran oportunidad
            </span>
          </h2>
        </ScrollAnimate>

        {/* Description */}
        <ScrollAnimate delay={0.3} duration={0.6} y={20}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Transforma tu empresa con soluciones de IA personalizadas. Automatiza procesos, reduce costos y escala tu negocio.
          </p>
        </ScrollAnimate>

        {/* CTA Button with Robot Hand */}
        <ScrollAnimate delay={0.4} duration={0.6} y={20}>
          <div className="relative inline-block">
            {/* Robot Hand - positioned to point at button from bottom-right */}
            <motion.div
              className="absolute -bottom-48 -right-6 md:-bottom-72 md:-right-20 lg:-bottom-96 lg:-right-28 w-40 h-56 md:w-64 md:h-96 lg:w-80 lg:h-[28rem] pointer-events-none z-20"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: 0.6,
                ease: "easeOut"
              }}
            >
              <motion.img
                src={robotHandImage}
                alt="Mano robótica apuntando al botón"
                loading="eager"
                decoding="async"
                className="w-full h-full object-contain rotate-[-15deg] md:rotate-[-10deg]"
                animate={{ 
                  y: [0, -8, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            <motion.div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="inline-block relative"
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
                animate={{ 
                  scale: isHovered ? 1.3 : 1,
                  opacity: isHovered ? 0.8 : 0.4
                }}
                transition={{ duration: 0.3 }}
              />
              
              <Button 
                asChild 
                size="lg" 
                className={cn(
                  "relative h-14 rounded-full px-8 text-lg font-medium",
                  "bg-foreground text-background hover:bg-foreground/90",
                  "active:-translate-y-1 transition-all duration-200",
                  "shadow-lg hover:shadow-xl"
                )}
              >
                <Link to="/contacto" className="flex items-center gap-2">
                  <span>Empezar ahora</span>
                  <motion.div
                    animate={{ x: isHovered ? 4 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </div>
        </ScrollAnimate>

      </div>
    </section>
  );
}
