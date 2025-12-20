import React from "react";
import { BlurTextEffect } from "@/components/ui/blur-text-effect";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  align?: "left" | "center" | "right";
  titleDelay?: number;
  subtitleDelay?: number;
}

export function SectionHeader({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  align = "center",
  titleDelay = 0.2,
  subtitleDelay = 0.5,
}: SectionHeaderProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  return (
    <ScrollAnimate 
      className={cn("mb-10 md:mb-12", alignClass, className)} 
      delay={0.1} 
      duration={0.7}
    >
      <h2 
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 px-2",
          titleClassName
        )}
      >
        <BlurTextEffect delay={titleDelay} stagger={0.02}>
          {title}
        </BlurTextEffect>
      </h2>
      {subtitle && (
        <p 
          className={cn(
            "text-sm md:text-lg text-muted-foreground max-w-3xl px-4",
            align === "center" && "mx-auto",
            subtitleClassName
          )}
        >
          <BlurTextEffect delay={subtitleDelay} stagger={0.01}>
            {subtitle}
          </BlurTextEffect>
        </p>
      )}
    </ScrollAnimate>
  );
}

export default SectionHeader;
