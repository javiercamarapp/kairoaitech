"use client";

import { Button } from "@/components/ui/button";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

// Import integration logos
import oracleMicros from "@/assets/integrations/oracle-micros.png";
import untable from "@/assets/integrations/untable.png";
import sap from "@/assets/integrations/sap.png";
import zendesk from "@/assets/integrations/zendesk.png";
import rappi from "@/assets/integrations/rappi.png";
import genesys from "@/assets/integrations/genesys.png";
import five9 from "@/assets/integrations/five9.png";
import twilio from "@/assets/integrations/twilio.png";
import aspel from "@/assets/integrations/aspel.png";
import procore from "@/assets/integrations/procore.png";
const ICONS_ROW1 = [oracleMicros, sap, zendesk, rappi, genesys];
const ICONS_ROW2 = [five9, twilio, aspel, procore, untable];
const repeatedIcons = (icons: string[], repeat = 4) => Array.from({
  length: repeat
}).flatMap(() => icons);
export default function IntegrationHero() {
  return <section className="relative w-full overflow-hidden bg-background py-6 md:py-10">

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-2">
        <ScrollAnimate delay={0.1} duration={0.6} y={30}>
          <h2 className="mb-2 md:mb-3 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Intégrate con tus herramientas favoritas
          </h2>
        </ScrollAnimate>

        <ScrollAnimate delay={0.2} duration={0.6} y={30}>
          <p className="mb-4 md:mb-6 max-w-md md:max-w-2xl text-center text-xs md:text-sm lg:text-base text-muted-foreground">
              Podemos conectarnos a más de 250 softwares que se usan en el día a día en todas las industrias para integrar perfectamente con tu flujo de trabajo a la IA.   
          </p>
        </ScrollAnimate>

        <ScrollAnimate delay={0.3} duration={0.6} y={30}>
          <Button asChild size="lg" className="mb-6 md:mb-8 h-10 md:h-12 rounded-full pl-5 pr-3 text-sm md:text-base bg-black text-white hover:bg-black/90 active:-translate-y-1 transition-all duration-150">
            <Link to="/contacto">
              <span className="text-nowrap">Comenzar ahora</span>
              <ChevronRight className="ml-1" />
            </Link>
          </Button>
        </ScrollAnimate>

        {/* Carousel */}
        <ScrollAnimate delay={0.4} duration={0.6} y={30} className="w-full">
          <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
            {/* Row 1 */}
            <div className="mb-2 md:mb-3 flex animate-scroll-left">
              {repeatedIcons(ICONS_ROW1, 4).map((src, i) => <div key={`row1-${i}`} className="mx-1.5 md:mx-2 flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 flex-shrink-0 items-center justify-center rounded-lg md:rounded-xl bg-card border border-border shadow-sm">
                  <img src={src} alt="" className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 object-contain" />
                </div>)}
            </div>

            {/* Row 2 */}
            <div className="flex animate-scroll-right">
              {repeatedIcons(ICONS_ROW2, 4).map((src, i) => <div key={`row2-${i}`} className="mx-1.5 md:mx-2 flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 flex-shrink-0 items-center justify-center rounded-lg md:rounded-xl bg-card border border-border shadow-sm">
                  <img src={src} alt="" className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 object-contain" />
                </div>)}
            </div>

            {/* Fade overlays */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent" />
          </div>
        </ScrollAnimate>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
    </section>;
}