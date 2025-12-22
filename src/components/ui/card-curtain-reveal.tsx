"use client"

import * as React from "react"
import { HTMLMotionProps, Variants, motion } from "motion/react"

import { cn } from "@/lib/utils"

const curtainVariants: Variants = {
  visible: {
    clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)",
    transition: {
      duration: 0.4,
      ease: ["easeOut", [0.25, 1.5, 0.5, 1]],
    },
  },

  hidden: {
    clipPath: "polygon(50% 0,50% 0,50% 100%,50% 100%)",
    transition: {
      duration: 0.3,
      ease: ["easeOut", [0.25, 1.5, 0.5, 1]],
    },
  },
}

interface CardCurtainRevealContextValue {
  isMouseIn: boolean
}
const CardCurtainRevealContext = React.createContext<
  CardCurtainRevealContextValue | undefined
>(undefined)

function useCardCurtainRevealContext() {
  const context = React.useContext(CardCurtainRevealContext)
  if (!context) {
    throw new Error(
      "useCardCurtainRevealContext must be used within a CardCurtainReveal Component"
    )
  }
  return context
}

interface CardCurtainRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  forceOpen?: boolean
}

const CardCurtainReveal = React.forwardRef<
  HTMLDivElement,
  CardCurtainRevealProps
>(({ children, className, forceOpen = false, ...props }, ref) => {
  const [isMouseIn, setIsMouseIn] = React.useState(false)
  const handleMouseEnter = React.useCallback(() => setIsMouseIn(true), [])
  const handleMouseLeave = React.useCallback(() => setIsMouseIn(false), [])

  const isOpen = forceOpen || isMouseIn

  return (
    <CardCurtainRevealContext.Provider value={{ isMouseIn: isOpen }}>
      <div
        ref={ref}
        className={cn("group relative overflow-hidden", className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </div>
    </CardCurtainRevealContext.Provider>
  )
})
CardCurtainReveal.displayName = "CardCurtainReveal"

const CardCurtainRevealFooter = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ className, ...props }, ref) => {
  const { isMouseIn } = useCardCurtainRevealContext()

  return (
    <motion.div
      ref={ref}
      variants={curtainVariants}
      initial="hidden"
      animate={isMouseIn ? "visible" : "hidden"}
      className={cn("absolute inset-0 z-0", className)}
      {...props}
    />
  )
})
CardCurtainRevealFooter.displayName = "CardCurtainRevealFooter"

const CardCurtainRevealBody = React.forwardRef<
  HTMLDivElement,
  React.HtmlHTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative z-10 flex h-full flex-col justify-between p-6",
        className
      )}
      {...props}
    />
  )
})
CardCurtainRevealBody.displayName = "CardCurtainRevealBody"

const CardCurtainRevealTitle = React.forwardRef<
  HTMLHeadingElement,
  HTMLMotionProps<"h2">
>(({ className, ...props }, ref) => {
  const { isMouseIn } = useCardCurtainRevealContext()

  return (
    <motion.h2
      ref={ref}
      animate={{
        y: isMouseIn ? -10 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className={cn("text-2xl font-bold", className)}
      {...props}
    />
  )
})
CardCurtainRevealTitle.displayName = "CardCurtainRevealTitle"

const CardCurtain = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ className, ...props }, ref) => {
    const { isMouseIn } = useCardCurtainRevealContext()

    return (
      <motion.div
        ref={ref}
        animate={{
          opacity: isMouseIn ? 1 : 0,
          y: isMouseIn ? 0 : 20,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className={cn("", className)}
        {...props}
      />
    )
  }
)
CardCurtain.displayName = "CardCurtain"

const CardCurtainRevealDescription = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ className, ...props }, ref) => {
  const { isMouseIn } = useCardCurtainRevealContext()

  return (
    <motion.div
      ref={ref}
      animate={{
        opacity: isMouseIn ? 1 : 0,
        y: isMouseIn ? 0 : 10,
      }}
      transition={{
        duration: 0.3,
        delay: 0.1,
        ease: "easeOut",
      }}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
CardCurtainRevealDescription.displayName = "CardCurtainRevealDescription"

export {
  CardCurtainReveal,
  CardCurtainRevealBody,
  CardCurtainRevealFooter,
  CardCurtainRevealDescription,
  CardCurtainRevealTitle,
  CardCurtain,
}
