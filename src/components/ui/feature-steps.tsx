import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { BlurText } from "@/components/ui/blur-text"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  autoPlayInterval = 4000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)
  const [textKey, setTextKey] = useState(0)

  // Auto-play on all devices
  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setTextKey((prev) => prev + 1)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  return (
    <div className={cn("pt-0 pb-8 px-8 md:pt-0 md:pb-12 md:px-12", className)}>
      <div className="max-w-7xl mx-auto w-full">
        <BlurText
          text={title}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center text-foreground justify-center"
          delay={80}
          animateBy="words"
          direction="top"
        />

        {/* Mobile Carousel - Auto-play only, no controls */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-4"
            >
              {/* Image */}
              <div className="relative h-[250px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={features[currentFeature].image}
                  alt={features[currentFeature].title || features[currentFeature].step}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              {/* Content with BlurText effect */}
              <div className="text-center px-4">
                <BlurText
                  key={`title-${textKey}`}
                  text={features[currentFeature].title || features[currentFeature].step}
                  className="text-xl font-semibold text-primary mb-3 justify-center"
                  delay={50}
                  animateBy="words"
                  direction="top"
                />
                <BlurText
                  key={`content-${textKey}`}
                  text={features[currentFeature].content}
                  className="text-sm text-muted-foreground leading-relaxed justify-center"
                  delay={30}
                  animateBy="words"
                  direction="bottom"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-row gap-10">
          {/* Steps list */}
          <div className="md:w-1/2 space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 cursor-pointer"
                initial={{ opacity: 0.7 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.5 }}
                transition={{ duration: 0.5 }}
                onClick={() => {
                  setCurrentFeature(index)
                  setProgress(0)
                }}
              >
                <motion.div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center border-2 shrink-0 mt-1",
                    index === currentFeature
                      ? "bg-primary border-primary text-primary-foreground"
                      : index < currentFeature
                      ? "bg-primary/20 border-primary text-primary"
                      : "bg-muted border-muted-foreground/30 text-muted-foreground"
                  )}
                >
                  {index < currentFeature ? (
                    <span className="text-sm font-bold">✓</span>
                  ) : (
                    <span className="text-sm font-semibold">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3 className={cn(
                    "text-xl font-semibold transition-colors duration-300",
                    index === currentFeature ? "text-primary" : "text-muted-foreground"
                  )}>
                    {feature.title || feature.step}
                  </h3>
                  <p className={cn(
                    "text-sm mt-2 leading-relaxed transition-colors duration-300",
                    index === currentFeature ? "text-foreground" : "text-muted-foreground"
                  )}>
                    {feature.content}
                  </p>
                  
                  {/* Progress bar */}
                  {index === currentFeature && (
                    <div className="h-1 w-full bg-muted rounded-full mt-4 overflow-hidden">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1 }}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image display */}
          <div className={cn("md:w-1/2", imageHeight)}>
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -20 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.title || feature.step}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
