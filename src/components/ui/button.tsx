import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--ai-glow)/0.5)] hover:scale-[1.02] active:scale-[0.98]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-[0_0_20px_hsl(0_84%_60%/0.5)]",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-[hsl(var(--ai-glow))] hover:shadow-[0_0_15px_hsl(var(--ai-glow)/0.3)]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-[0_0_15px_hsl(var(--ai-glow)/0.3)]",
        ghost: "hover:bg-accent/50 hover:text-accent-foreground hover:shadow-[0_0_20px_hsl(var(--ai-glow)/0.2)]",
        link: "text-primary underline-offset-4 hover:underline",
        ai: "relative bg-gradient-to-r from-[hsl(200,100%,50%)] to-[hsl(280,100%,60%)] text-white hover:shadow-[0_0_30px_hsl(var(--ai-glow)/0.6)] hover:scale-[1.02] active:scale-[0.98] before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-r before:from-[hsl(280,100%,60%)] before:to-[hsl(200,100%,50%)] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 before:-z-10",
        "ai-outline": "relative border-2 border-transparent bg-clip-padding hover:scale-[1.02] active:scale-[0.98] before:absolute before:inset-0 before:-z-10 before:rounded-md before:p-[2px] before:bg-gradient-to-r before:from-[hsl(200,100%,50%)] before:to-[hsl(280,100%,60%)] before:animate-border-flow before:bg-[length:200%_200%] after:absolute after:inset-[2px] after:rounded-[calc(0.375rem-2px)] after:bg-background after:-z-10 hover:shadow-[0_0_25px_hsl(var(--ai-glow)/0.4)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
