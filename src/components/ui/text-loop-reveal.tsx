"use client";

import { FC, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextLoopRevealProps {
  text: string;
  className?: string;
  wordDelay?: number;
  loopDelay?: number;
}

const TextLoopReveal: FC<TextLoopRevealProps> = ({
  text,
  className,
  wordDelay = 0.15,
  loopDelay = 3000,
}) => {
  const words = text.split(" ");
  const [key, setKey] = useState(0);

  useEffect(() => {
    const totalDuration = words.length * wordDelay * 1000 + loopDelay;
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, totalDuration);
    return () => clearInterval(interval);
  }, [words.length, wordDelay, loopDelay]);

  return (
    <span
      className={cn(
        "flex w-full flex-wrap justify-center text-center lg:justify-start lg:text-left",
        className,
      )}
    >
      <AnimatePresence mode="wait">
        <motion.span key={key} className="flex w-full flex-wrap justify-center lg:justify-start">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
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
      </AnimatePresence>
    </span>
  );
};

export { TextLoopReveal };
