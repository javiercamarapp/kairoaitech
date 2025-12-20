import React, { useRef } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import {
  CardHoverReveal,
  CardHoverRevealContent,
  CardHoverRevealMain,
} from "@/components/ui/reveal-on-hover";
import { Badge } from "@/components/ui/badge";

// Import business images
import restaurantImg from "@/assets/businesses/restaurant.png";
import clothingStoreImg from "@/assets/businesses/clothing-store.png";
import clinicImg from "@/assets/businesses/clinic.png";
import hotelImg from "@/assets/businesses/hotel.png";
import gymImg from "@/assets/businesses/gym.png";
import realEstateImg from "@/assets/businesses/real-estate.png";
import lawFirmImg from "@/assets/businesses/law-firm.png";
import insuranceImg from "@/assets/businesses/insurance.png";
import autoRepairImg from "@/assets/businesses/auto-repair.png";
import academyImg from "@/assets/businesses/academy.png";

interface Business {
  id: string;
  name: string;
  description: string;
  aiExample: string;
  image: string;
  services: string[];
}

const businesses: Business[] = [
  {
    id: "restaurant",
    name: "Restaurantes",
    description: "Optimiza la experiencia gastronómica con pedidos inteligentes y recomendaciones personalizadas.",
    aiExample: "Chatbot que toma pedidos por WhatsApp, sugiere platillos basados en preferencias anteriores y gestiona reservaciones automáticamente.",
    image: restaurantImg,
    services: ["Pedidos IA", "Reservaciones", "Recomendaciones"],
  },
  {
    id: "clothing",
    name: "Tiendas de Ropa",
    description: "Personal shopper virtual que conoce el estilo de cada cliente y anticipa tendencias.",
    aiExample: "IA que analiza el historial de compras para recomendar outfits, notifica sobre nuevos productos y ofrece probador virtual.",
    image: clothingStoreImg,
    services: ["Personal Shopper", "Probador Virtual", "Alertas"],
  },
  {
    id: "clinic",
    name: "Clínicas Médicas",
    description: "Mejora la atención al paciente con triaje inteligente y seguimiento automatizado.",
    aiExample: "Sistema que evalúa síntomas antes de la cita, envía recordatorios de medicamentos y agenda seguimientos automáticos.",
    image: clinicImg,
    services: ["Triaje IA", "Recordatorios", "Seguimiento"],
  },
  {
    id: "hotel",
    name: "Hoteles",
    description: "Concierge virtual 24/7 que personaliza cada estadía y anticipa necesidades.",
    aiExample: "Asistente que responde preguntas sobre servicios, hace reservas en restaurantes locales y ajusta la habitación según preferencias.",
    image: hotelImg,
    services: ["Concierge Virtual", "Reservas", "Personalización"],
  },
  {
    id: "gym",
    name: "Gimnasios",
    description: "Entrenamiento personalizado con IA que adapta rutinas según progreso y objetivos.",
    aiExample: "Coach virtual que genera planes de ejercicio, monitorea progreso, ajusta intensidad y motiva con mensajes personalizados.",
    image: gymImg,
    services: ["Coach IA", "Planes Personalizados", "Monitoreo"],
  },
  {
    id: "realestate",
    name: "Inmobiliarias",
    description: "Búsqueda inteligente de propiedades que entiende exactamente lo que busca el cliente.",
    aiExample: "IA que filtra propiedades por ubicación, presupuesto y estilo de vida, programa visitas virtuales y genera comparativas automáticas.",
    image: realEstateImg,
    services: ["Búsqueda IA", "Tours Virtuales", "Comparativas"],
  },
  {
    id: "lawfirm",
    name: "Bufetes de Abogados",
    description: "Análisis de documentos legales en segundos con precisión y detección de riesgos.",
    aiExample: "Sistema que revisa contratos, identifica cláusulas problemáticas, sugiere modificaciones y genera resúmenes ejecutivos.",
    image: lawFirmImg,
    services: ["Análisis Legal", "Revisión Contratos", "Resúmenes"],
  },
  {
    id: "insurance",
    name: "Agencias de Seguros",
    description: "Cotizaciones instantáneas y análisis de riesgo personalizado para cada cliente.",
    aiExample: "IA que evalúa perfil del cliente, compara coberturas, genera cotizaciones en tiempo real y detecta oportunidades de venta cruzada.",
    image: insuranceImg,
    services: ["Cotizaciones IA", "Análisis Riesgo", "Cross-selling"],
  },
  {
    id: "autorepair",
    name: "Talleres Mecánicos",
    description: "Diagnóstico predictivo que anticipa fallas antes de que ocurran.",
    aiExample: "Sistema que analiza datos del vehículo, predice mantenimientos necesarios, agenda citas automáticas y envía alertas preventivas.",
    image: autoRepairImg,
    services: ["Diagnóstico IA", "Mantenimiento Predictivo", "Alertas"],
  },
  {
    id: "academy",
    name: "Academias y Escuelas",
    description: "Tutorías personalizadas que se adaptan al ritmo de aprendizaje de cada estudiante.",
    aiExample: "Tutor virtual que identifica áreas de mejora, genera ejercicios personalizados, responde dudas 24/7 y reporta progreso a padres.",
    image: academyImg,
    services: ["Tutor IA", "Ejercicios Personalizados", "Reportes"],
  },
];

export function BusinessShowcaseSection() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative bg-background overflow-hidden">
      <div className="px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <SectionHeader
            title="Negocios que pueden implementar IA"
            subtitle="Descubre cómo diferentes industrias están transformando sus operaciones con inteligencia artificial"
          />
        </div>
      </div>

      {/* Draggable Carousel */}
      <div ref={constraintsRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
        <motion.div
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          className="flex gap-4 md:gap-6 px-4 md:px-6 lg:px-12 pb-4"
          style={{ width: "max-content" }}
        >
          {businesses.map((business, index) => (
            <ScrollAnimate
              key={business.id}
              delay={0.1 + index * 0.05}
              duration={0.6}
              y={30}
            >
              <CardHoverReveal
                className="w-[260px] sm:w-[280px] md:w-[320px] h-[340px] sm:h-[380px] md:h-[420px] flex-shrink-0 rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-border"
              >
                <CardHoverRevealMain className="w-full h-full">
                  <img
                    src={business.image}
                    alt={business.name}
                    className="w-full h-full object-cover pointer-events-none"
                    draggable={false}
                  />
                </CardHoverRevealMain>

                <CardHoverRevealContent className="flex flex-col justify-end p-3 sm:p-4 md:p-5 bg-gradient-to-t from-zinc-900 via-zinc-900/95 to-zinc-900/70">
                  {/* Services */}
                  <div className="mb-2 md:mb-3">
                    <div className="flex flex-wrap gap-1 md:gap-1.5">
                      {business.services.slice(0, 2).map((service) => (
                        <Badge 
                          key={service} 
                          variant="outline" 
                          className="text-gray-300 border-gray-600 text-[10px] md:text-xs py-0.5 px-1.5 md:px-2"
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-white mb-1">
                      {business.name}
                    </h3>
                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed line-clamp-2">
                      {business.description}
                    </p>
                  </div>
                </CardHoverRevealContent>
              </CardHoverReveal>
            </ScrollAnimate>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default BusinessShowcaseSection;
