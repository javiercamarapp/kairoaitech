import React from "react";
import { Globe } from "@/components/ui/globe";
import { ScrollAnimate } from "@/components/ui/scroll-animate";

export function GlobeSection() {
  return (
    <section className="relative w-full bg-background pt-16 md:pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <ScrollAnimate delay={0.1} duration={0.6} y={30}>
          <h2 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 md:mb-12 bg-gradient-to-b from-zinc-400 to-zinc-600 bg-clip-text text-transparent">
            Operamos internacionalmente
          </h2>
        </ScrollAnimate>

        <ScrollAnimate delay={0.3} duration={0.8} y={50}>
          <div className="relative flex items-start justify-center h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] md:w-[900px] lg:w-[1100px] aspect-square">
              <Globe className="w-full h-full" />
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}

export default GlobeSection;
