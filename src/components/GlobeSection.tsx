import React from "react";
import { Globe } from "@/components/ui/globe";
import { ScrollAnimate } from "@/components/ui/scroll-animate";

export function GlobeSection() {
  return (
    <section className="relative w-full bg-zinc-950 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <ScrollAnimate delay={0.1} duration={0.6} y={30}>
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Presencia <span className="text-orange-500">Global</span>
          </h2>
        </ScrollAnimate>

        <ScrollAnimate delay={0.2} duration={0.6} y={30}>
          <p className="text-center text-zinc-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-8 md:mb-12">
            Trabajamos con empresas en Estados Unidos, México y España, llevando soluciones de IA a nivel internacional.
          </p>
        </ScrollAnimate>

        <ScrollAnimate delay={0.3} duration={0.8} y={50}>
          <div className="relative flex items-center justify-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <Globe className="opacity-90" />
            
            {/* Gradient overlay */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-zinc-950 to-transparent" />
          </div>
        </ScrollAnimate>

        {/* Country labels */}
        <ScrollAnimate delay={0.5} duration={0.6} y={30}>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <span className="text-white text-sm md:text-base">Estados Unidos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <span className="text-white text-sm md:text-base">México</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <span className="text-white text-sm md:text-base">España</span>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}

export default GlobeSection;
