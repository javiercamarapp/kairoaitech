"use client";

import { FC, useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextLoopRevealProps {
  text: string;
  className?: string;
  wordDelay?: number;
}

const TextLoopReveal: FC<TextLoopRevealProps> = ({
  text,
  className,
  wordDelay = 0.15,
}) => {
  const words = text.split(" ");
  const [isVisible, setIsVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setAnimationKey((prev) => prev + 1);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={cn(
        "flex w-full flex-wrap justify-center text-center lg:justify-start lg:text-left",
        className,
      )}
    >
      <motion.span key={animationKey} className="flex w-full flex-wrap justify-center lg:justify-start">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.4,
              delay: i * wordDelay,
              ease: "easeOut",
            }}
            className="mx-[0.125em] inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </span>
  );
};

export { TextLoopReveal };
