"use client"

import type React from "react"
import { useState } from "react"
import { ArrowUpRight, Calendar } from "lucide-react"
import { motion } from "motion/react"

export function LetsWorkTogether() {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsClicked(true)

    setTimeout(() => {
      setShowSuccess(true)
    }, 500)
  }

  const handleBookCall = () => {
    window.open("https://cal.com", "_blank")
  }

  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex items-center justify-center py-12 md:py-20">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8">
        {/* Success State */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: showSuccess ? 1 : 0, 
            y: showSuccess ? 0 : 20,
            pointerEvents: showSuccess ? "auto" : "none"
          }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: showSuccess ? 1 : 0.9 }}
            className="text-center"
          >
            <span className="text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
              Perfect
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8">
              Let's talk
            </h2>
          </motion.div>

          {/* Book a call button */}
          <motion.button
            onClick={handleBookCall}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            className="group relative flex items-center gap-4 transition-all duration-500 cursor-pointer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ 
              opacity: showSuccess ? 1 : 0, 
              y: showSuccess ? 0 : 15,
              scale: isButtonHovered ? 1.02 : 1
            }}
            transition={{ delay: 0.15 }}
          >
            {/* Left line */}
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-primary/50" />

            {/* Button content */}
            <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-card/50 backdrop-blur-sm hover:bg-card transition-all">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">
                Book a call
              </span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>

            {/* Right line */}
            <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </motion.button>

          {/* Subtle subtext */}
          <p className="mt-6 text-sm text-muted-foreground">
            15 min intro call
          </p>
        </motion.div>

        {/* Available indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isClicked ? 0 : 1 }}
          className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
          </span>
          <span className="text-sm text-muted-foreground">
            Disponible para proyectos
          </span>
        </motion.div>

        {/* Main CTA Button */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ 
            opacity: isClicked ? 0 : 1,
            scale: isClicked ? 0.95 : 1,
            pointerEvents: isClicked ? "none" : "auto"
          }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <motion.button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
            className="group relative cursor-pointer"
          >
            <motion.div
              className="relative z-10 flex flex-col items-center"
              animate={{ scale: isHovered ? 1.02 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center">
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-none">
                  Trabajemos
                </span>
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-none mt-2">
                  juntos
                </span>
              </div>

              <motion.div
                className="mt-8 flex items-center gap-3 text-primary"
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
                <span className="text-lg font-medium">Iniciar proyecto</span>
              </motion.div>
            </motion.div>

            {/* Hover glow effect */}
            <motion.div
              className="absolute inset-0 -z-10 rounded-3xl bg-primary/5 blur-3xl"
              animate={{ 
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1.1 : 1
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-center max-w-lg"
          >
            <p className="text-muted-foreground mb-4">
              ¿Tienes un proyecto en mente? Nos encantaría escucharte. Creemos algo excepcional juntos.
            </p>
            <span className="text-foreground font-medium">contacto@kairoai.tech</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
