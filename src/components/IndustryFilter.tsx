import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
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
  { id: 'all', name: 'Todas', icon: Sparkles },
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
  return (
    <section className="py-8 md:py-12 px-4">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
        >
          {/* Title - Left aligned */}
          <h2 className="text-lg md:text-xl font-semibold text-foreground whitespace-nowrap shrink-0">
            Filtra por industria
          </h2>

          {/* Scrollable filter bar */}
          <div className="relative flex-1 min-w-0">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            {/* Scrollable container */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 px-2" style={{ width: 'max-content' }}>
                {industries.map((industry, index) => {
                  const Icon = industry.icon;
                  const isSelected = selectedIndustry === industry.id;
                  
                  return (
                    <motion.button
                      key={industry.id}
                      onClick={() => onSelectIndustry(industry.id)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.02 }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border whitespace-nowrap",
                        isSelected
                          ? "bg-primary text-primary-foreground border-primary shadow-md"
                          : "bg-muted/50 text-muted-foreground border-transparent hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{industry.name}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryFilter;
