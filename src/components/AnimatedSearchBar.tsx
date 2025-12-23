import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Solution {
  title: string;
  description: string;
  benefits: string[];
}

interface SearchResult {
  solutions: Solution[];
  message: string;
}

interface AnimatedSearchBarProps {
  className?: string;
  placeholder?: string;
}

const SEARCH_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/search-solutions`;

export function AnimatedSearchBar({ 
  className, 
  placeholder = "¿Qué problema quieres resolver en tu negocio?" 
}: AnimatedSearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SearchResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const searchSolutions = useCallback(async (query: string) => {
    if (query.trim().length < 3) {
      setResult(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(SEARCH_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al buscar soluciones');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error('Search error:', err);
      setError(err instanceof Error ? err.message : 'Error al buscar');
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    // Debounce the search
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      searchSolutions(newValue);
    }, 500);
  };

  const handleScheduleClick = (solution: Solution) => {
    const baseUrl = "https://cal.com/javier-eduardo-camara-porte-petit-hioult/30min";
    const notes = `Interesado en: ${solution.title}\n\nDescripción: ${solution.description}\n\nBeneficios:\n${solution.benefits.map(b => `• ${b}`).join('\n')}`;
    const url = `${baseUrl}?notes=${encodeURIComponent(notes)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.div
      className={cn("w-full max-w-3xl mx-auto relative z-50", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <motion.div
        className={cn(
          "relative flex items-center rounded-full border-2 bg-background/90 backdrop-blur-md transition-all duration-300",
          isFocused 
            ? "border-primary/60 shadow-xl shadow-primary/20" 
            : "border-border/50 hover:border-primary/30"
        )}
        animate={{
          scale: isFocused ? 1.02 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="ml-4 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder={placeholder}
          className="flex-1 bg-transparent py-3 px-3 text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        {isLoading && (
          <Loader2 className="mr-4 h-4 w-4 animate-spin text-primary" />
        )}
      </motion.div>

      {/* Dropdown de resultados IA */}
      <AnimatePresence>
        {isFocused && (result || isLoading || error) && value.trim().length >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-3 bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl overflow-hidden z-[100]"
          >
            {isLoading && (
              <div className="flex items-center gap-3 p-6 text-muted-foreground">
                <Loader2 className="h-5 w-5 animate-spin text-primary" />
                <span className="text-sm">Buscando soluciones con IA...</span>
              </div>
            )}

            {error && (
              <div className="p-6 text-destructive text-sm">
                {error}
              </div>
            )}

            {!isLoading && result && result.solutions.length > 0 && (
              <div className="p-4 space-y-3">
                {result.message && (
                  <p className="text-sm text-muted-foreground px-2 pb-2 border-b border-border/30">
                    <Sparkles className="inline h-3 w-3 mr-1 text-primary" />
                    {result.message}
                  </p>
                )}
                
                {result.solutions.map((solution, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleScheduleClick(solution)}
                    className="w-full text-left p-4 rounded-xl bg-muted/30 hover:bg-primary/10 transition-all duration-200 group cursor-pointer border border-transparent hover:border-primary/20"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {solution.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {solution.description}
                        </p>
                        {solution.benefits && solution.benefits.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {solution.benefits.slice(0, 3).map((benefit, i) => (
                              <span 
                                key={i} 
                                className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                              >
                                {benefit}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-1" />
                    </div>
                  </motion.button>
                ))}

                <div className="pt-2 px-2 border-t border-border/30">
                  <p className="text-xs text-muted-foreground text-center">
                    Haz clic en una solución para agendar una demostración
                  </p>
                </div>
              </div>
            )}

            {!isLoading && result && result.solutions.length === 0 && (
              <div className="p-6 text-center text-muted-foreground text-sm">
                No se encontraron soluciones para "{value}". Intenta con otro término.
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default AnimatedSearchBar;
