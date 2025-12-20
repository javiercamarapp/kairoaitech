"use client";

import { Button } from "@/components/ui/button";
import React from "react";

const ICONS_ROW1 = [
  "https://cdn-icons-png.flaticon.com/512/5968/5968854.png",
  "https://cdn-icons-png.flaticon.com/512/732/732221.png",
  "https://cdn-icons-png.flaticon.com/512/733/733609.png",
  "https://cdn-icons-png.flaticon.com/512/732/732084.png",
  "https://cdn-icons-png.flaticon.com/512/733/733585.png",
  "https://cdn-icons-png.flaticon.com/512/281/281763.png",
  "https://cdn-icons-png.flaticon.com/512/888/888879.png",
];

const ICONS_ROW2 = [
  "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  "https://cdn-icons-png.flaticon.com/512/906/906324.png",
  "https://cdn-icons-png.flaticon.com/512/888/888841.png",
  "https://cdn-icons-png.flaticon.com/512/5968/5968875.png",
  "https://cdn-icons-png.flaticon.com/512/906/906361.png",
  "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  "https://cdn-icons-png.flaticon.com/512/888/888847.png",
];

const repeatedIcons = (icons: string[], repeat = 4) => 
  Array.from({ length: repeat }).flatMap(() => icons);

export default function IntegrationHero() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-12 md:py-20">
      {/* Light grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4">
        <span className="mb-3 md:mb-4 inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-primary/10 px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm font-medium text-primary">
          ⚡ Integraciones
        </span>
        
        <h2 className="mb-3 md:mb-4 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Intégrate con tus herramientas favoritas
        </h2>

        <p className="mb-6 md:mb-8 max-w-md md:max-w-2xl text-center text-sm md:text-base lg:text-lg text-muted-foreground px-2">
          Más de 250 aplicaciones disponibles para integrar perfectamente con tu flujo de trabajo.
        </p>

        <Button size="lg" className="mb-8 md:mb-12 h-10 md:h-12 px-6 md:px-8 text-sm md:text-base rounded-full bg-primary hover:bg-primary/90">
          Comenzar ahora
        </Button>

        {/* Carousel */}
        <div className="relative w-full max-w-5xl overflow-hidden">
          {/* Row 1 */}
          <div className="mb-3 md:mb-4 flex animate-scroll-left">
            {repeatedIcons(ICONS_ROW1, 4).map((src, i) => (
              <div
                key={`row1-${i}`}
                className="mx-2 md:mx-3 flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 flex-shrink-0 items-center justify-center rounded-xl md:rounded-2xl bg-card border border-border shadow-sm"
              >
                <img src={src} alt="" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 object-contain" />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex animate-scroll-right">
            {repeatedIcons(ICONS_ROW2, 4).map((src, i) => (
              <div
                key={`row2-${i}`}
                className="mx-2 md:mx-3 flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 flex-shrink-0 items-center justify-center rounded-xl md:rounded-2xl bg-card border border-border shadow-sm"
              >
                <img src={src} alt="" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 object-contain" />
              </div>
            ))}
          </div>

          {/* Fade overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent" />
        </div>
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
    </section>
  );
}
