import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { 
  Building2, 
  UtensilsCrossed, 
  Phone, 
  Dumbbell, 
  ShoppingCart, 
  Shirt, 
  Stethoscope, 
  Hotel, 
  Home, 
  Scale, 
  Shield, 
  Calculator, 
  Landmark, 
  Wrench, 
  Store, 
  ShoppingBasket,
  GraduationCap,
  Plane,
  Car,
  Scissors,
  Sparkles,
  Truck,
  Factory,
  Heart,
  Music,
  Camera,
  Briefcase,
  Leaf,
  Dog
} from 'lucide-react';

interface Industry {
  id: string;
  name: string;
  icon: LucideIcon;
}

const industries: Industry[] = [
  { id: 'all', name: 'Todas las industrias', icon: Sparkles },
  { id: 'abogados', name: 'Abogados', icon: Scale },
  { id: 'agricultura', name: 'Agricultura', icon: Leaf },
  { id: 'automotriz', name: 'Automotriz', icon: Car },
  { id: 'belleza', name: 'Belleza', icon: Scissors },
  { id: 'call-centers', name: 'Call Centers', icon: Phone },
  { id: 'clinicas', name: 'Clínicas', icon: Stethoscope },
  { id: 'construccion', name: 'Construcción', icon: Building2 },
  { id: 'consultoria', name: 'Consultoría', icon: Briefcase },
  { id: 'contables', name: 'Contabilidad', icon: Calculator },
  { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart },
  { id: 'educacion', name: 'Educación', icon: GraduationCap },
  { id: 'entretenimiento', name: 'Entretenimiento', icon: Music },
  { id: 'financieros', name: 'Finanzas', icon: Landmark },
  { id: 'fotografia', name: 'Fotografía', icon: Camera },
  { id: 'gimnasios', name: 'Gimnasios', icon: Dumbbell },
  { id: 'hoteles', name: 'Hoteles', icon: Hotel },
  { id: 'inmobiliarias', name: 'Inmobiliarias', icon: Home },
  { id: 'logistica', name: 'Logística', icon: Truck },
  { id: 'manufactura', name: 'Manufactura', icon: Factory },
  { id: 'mercados', name: 'Mercados', icon: ShoppingBasket },
  { id: 'restaurantes', name: 'Restaurantes', icon: UtensilsCrossed },
  { id: 'salud', name: 'Salud', icon: Heart },
  { id: 'seguros', name: 'Seguros', icon: Shield },
  { id: 'talleres', name: 'Talleres', icon: Wrench },
  { id: 'tiendas-ropa', name: 'Tiendas de Ropa', icon: Shirt },
  { id: 'tienditas', name: 'Tienditas', icon: Store },
  { id: 'turismo', name: 'Turismo', icon: Plane },
  { id: 'veterinarias', name: 'Veterinarias', icon: Dog },
];

interface IndustryFilterProps {
  selectedIndustry: string;
  onSelectIndustry: (industry: string) => void;
}

export const IndustryFilter: React.FC<IndustryFilterProps> = ({
  selectedIndustry,
  onSelectIndustry,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const selectedItem = industries.find(i => i.id === selectedIndustry) || industries[0];
  const SelectedIcon = selectedItem.icon;

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (id: string) => {
    onSelectIndustry(id);
    setIsOpen(false);
  };

  return (
    <section className="py-8 md:py-12 px-4">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-center gap-4"
        >
          {/* Title */}
          <h2 className="text-lg md:text-xl font-semibold text-foreground whitespace-nowrap">
            Filtra por industria
          </h2>

          {/* Dropdown */}
          <div ref={dropdownRef} className="relative w-full sm:flex-1">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 border bg-background",
                isOpen 
                  ? "border-primary ring-2 ring-primary/20" 
                  : "border-border hover:border-primary/50"
              )}
            >
              <div className="flex items-center gap-3">
                <SelectedIcon className="w-5 h-5 text-primary" />
                <span className="text-foreground">{selectedItem.name}</span>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              </motion.div>
            </motion.button>

            {/* Dropdown list */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-50 mt-2 w-full bg-background border border-border rounded-xl shadow-xl overflow-hidden"
                >
                  <div className="max-h-72 overflow-y-auto scrollbar-hide">
                    {industries.map((industry, index) => {
                      const Icon = industry.icon;
                      const isSelected = selectedIndustry === industry.id;
                      
                      return (
                        <motion.button
                          key={industry.id}
                          onClick={() => handleSelect(industry.id)}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.15, delay: index * 0.015 }}
                          className={cn(
                            "w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 text-left",
                            isSelected
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-foreground hover:bg-muted"
                          )}
                        >
                          <Icon className={cn(
                            "w-4 h-4",
                            isSelected ? "text-primary" : "text-muted-foreground"
                          )} />
                          <span>{industry.name}</span>
                          {isSelected && (
                            <motion.div 
                              layoutId="selected-check"
                              className="ml-auto w-2 h-2 rounded-full bg-primary"
                            />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryFilter;
