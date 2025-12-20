import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Mic } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimatedSearchBarProps {
  className?: string;
  placeholder?: string;
}

export function AnimatedSearchBar({ 
  className, 
  placeholder = "¿Qué quieres saber sobre AI?" 
}: AnimatedSearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  return (
    <motion.div
      className={cn("w-full max-w-2xl mx-auto", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <motion.div
        className={cn(
          "relative flex items-center rounded-full border-2 bg-background/80 backdrop-blur-sm transition-all duration-300",
          isFocused 
            ? "border-primary/50 shadow-lg shadow-primary/10" 
            : "border-border/50 hover:border-border"
        )}
        animate={{
          scale: isFocused ? 1.02 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Search Icon */}
        <motion.div
          className="pl-5 pr-2"
          animate={{ 
            scale: isFocused ? 1.1 : 1,
            color: isFocused ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))'
          }}
          transition={{ duration: 0.2 }}
        >
          <Search className="h-5 w-5" />
        </motion.div>

        {/* Input */}
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="flex-1 bg-transparent py-4 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none"
        />

        {/* Mic Icon */}
        <motion.button
          className="pr-5 pl-2 text-muted-foreground hover:text-foreground transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          type="button"
        >
          <Mic className="h-5 w-5" />
        </motion.button>

        {/* Animated border glow */}
        {isFocused && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/30 pointer-events-none"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}

export default AnimatedSearchBar;
