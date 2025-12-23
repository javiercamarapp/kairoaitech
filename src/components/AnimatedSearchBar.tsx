import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const NEGOCIOS = [
  "Restaurante",
  "Cafetería",
  "Tienda de ropa",
  "Peluquería",
  "Gimnasio",
  "Panadería",
  "Farmacia",
  "Ferretería",
  "Floristería",
  "Taller mecánico",
  "Consultorio médico",
  "Clínica dental",
  "Estudio de yoga",
  "Agencia de viajes",
  "Inmobiliaria",
];

interface AnimatedSearchBarProps {
  className?: string;
  placeholder?: string;
}

export function AnimatedSearchBar({ 
  className, 
  placeholder = "Busca tu negocio..." 
}: AnimatedSearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredNegocios = value.trim() 
    ? NEGOCIOS.filter(negocio => 
        negocio.toLowerCase().startsWith(value.toLowerCase())
      )
    : [];

  const handleSelect = (negocio: string) => {
    setValue(negocio);
    setIsFocused(false);
    inputRef.current?.blur();
  };

  return (
    <motion.div
      className={cn("w-full max-w-2xl mx-auto relative z-50", className)}
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
        <Search className="ml-4 h-4 w-4 text-muted-foreground" />
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 150)}
          placeholder={placeholder}
          className="flex-1 bg-transparent py-2 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
      </motion.div>

      {/* Dropdown de sugerencias */}
      <AnimatePresence>
        {isFocused && filteredNegocios.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-zinc-900 border border-border rounded-xl shadow-2xl overflow-hidden z-[100]"
          >
            {filteredNegocios.map((negocio, index) => (
              <button
                key={negocio}
                onClick={() => handleSelect(negocio)}
                className="w-full text-left px-5 py-3 text-sm text-foreground hover:bg-muted transition-colors cursor-pointer"
              >
                {negocio}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default AnimatedSearchBar;
