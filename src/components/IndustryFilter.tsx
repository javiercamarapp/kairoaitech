import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
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

const industries = [
  { id: 'all', name: 'Todas', icon: Sparkles },
  { id: 'construccion', name: 'Construcción', icon: Building2 },
  { id: 'restaurantes', name: 'Restaurantes', icon: UtensilsCrossed },
  { id: 'call-centers', name: 'Call Centers', icon: Phone },
  { id: 'gimnasios', name: 'Gimnasios', icon: Dumbbell },
  { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart },
  { id: 'tiendas-ropa', name: 'Tiendas de Ropa', icon: Shirt },
  { id: 'clinicas', name: 'Clínicas', icon: Stethoscope },
  { id: 'hoteles', name: 'Hoteles', icon: Hotel },
  { id: 'inmobiliarias', name: 'Inmobiliarias', icon: Home },
  { id: 'abogados', name: 'Despacho de Abogados', icon: Scale },
  { id: 'seguros', name: 'Agencia de Seguros', icon: Shield },
  { id: 'contables', name: 'Servicios Contables', icon: Calculator },
  { id: 'financieros', name: 'Servicios Financieros', icon: Landmark },
  { id: 'talleres', name: 'Talleres', icon: Wrench },
  { id: 'tienditas', name: 'Tienditas', icon: Store },
  { id: 'mercados', name: 'Mercados', icon: ShoppingBasket },
  { id: 'educacion', name: 'Educación', icon: GraduationCap },
  { id: 'turismo', name: 'Turismo', icon: Plane },
  { id: 'automotriz', name: 'Automotriz', icon: Car },
  { id: 'belleza', name: 'Salones de Belleza', icon: Scissors },
  { id: 'logistica', name: 'Logística', icon: Truck },
  { id: 'manufactura', name: 'Manufactura', icon: Factory },
  { id: 'salud', name: 'Salud y Bienestar', icon: Heart },
  { id: 'entretenimiento', name: 'Entretenimiento', icon: Music },
  { id: 'fotografia', name: 'Fotografía', icon: Camera },
  { id: 'consultoria', name: 'Consultoría', icon: Briefcase },
  { id: 'agricultura', name: 'Agricultura', icon: Leaf },
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
    <section className="py-12 md:py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Filtra por industria
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Selecciona tu sector para ver soluciones personalizadas
          </p>
        </motion.div>

        {/* Desktop: Grid of buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="hidden md:flex flex-wrap justify-center gap-3"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isSelected = selectedIndustry === industry.id;
            
            return (
              <motion.button
                key={industry.id}
                onClick={() => onSelectIndustry(industry.id)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border",
                  isSelected
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                    : "bg-background/50 text-foreground border-border/50 hover:border-primary/50 hover:bg-primary/5"
                )}
              >
                <Icon className="w-4 h-4" />
                <span>{industry.name}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Mobile: Horizontal scrollable list */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:hidden"
        >
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            {/* Scrollable container */}
            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
              <div className="flex gap-2 pb-2" style={{ width: 'max-content' }}>
                {industries.map((industry, index) => {
                  const Icon = industry.icon;
                  const isSelected = selectedIndustry === industry.id;
                  
                  return (
                    <motion.button
                      key={industry.id}
                      onClick={() => onSelectIndustry(industry.id)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border whitespace-nowrap",
                        isSelected
                          ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                          : "bg-background/80 text-foreground border-border/50"
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
