import React from "react";
import { BlurTextEffect } from "@/components/ui/blur-text-effect";
import {
  ScrollXCarousel,
  ScrollXCarouselContainer,
  ScrollXCarouselProgress,
  ScrollXCarouselWrap,
} from "@/components/ui/scroll-x-carousel";
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
  return (
    <section className="relative">
      {/* Gradient transition from white to black */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-black pointer-events-none z-10" />

      {/* Main content with black background */}
      <div className="bg-black">
        <ScrollXCarousel className="h-[300vh]">
          <ScrollXCarouselContainer className="flex flex-col justify-center pt-32 pb-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto w-full">
              {/* Section Title */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  <BlurTextEffect delay={0} stagger={0.02}>
                    Negocios que pueden implementar IA
                  </BlurTextEffect>
                </h2>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
                  Descubre cómo diferentes industrias están transformando sus operaciones con inteligencia artificial
                </p>
                <ScrollXCarouselProgress className="max-w-md mx-auto" progressStyle="bg-primary" />
              </div>

              {/* Carousel */}
              <ScrollXCarouselWrap 
                className="flex gap-6 py-8" 
                xRange={['0%', '-65%']}
              >
                {businesses.map((business) => (
                  <CardHoverReveal
                    key={business.id}
                    className="w-[350px] md:w-[400px] h-[500px] flex-shrink-0 rounded-2xl overflow-hidden"
                  >
                    <CardHoverRevealMain className="w-full h-full">
                      <img
                        src={business.image}
                        alt={business.name}
                        className="w-full h-full object-cover"
                      />
                    </CardHoverRevealMain>

                    <CardHoverRevealContent className="flex flex-col justify-end p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                      {/* Industry Badge */}
                      <div className="mb-4">
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">
                          Industria
                        </span>
                        <div className="mt-1">
                          <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                            {business.name}
                          </Badge>
                        </div>
                      </div>

                      {/* Services */}
                      <div className="mb-4">
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">
                          Servicios IA
                        </span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {business.services.map((service) => (
                            <Badge 
                              key={service} 
                              variant="outline" 
                              className="text-gray-300 border-gray-600 text-xs"
                            >
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {business.name}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {business.description}
                        </p>
                      </div>
                    </CardHoverRevealContent>
                  </CardHoverReveal>
                ))}
              </ScrollXCarouselWrap>
            </div>
          </ScrollXCarouselContainer>
        </ScrollXCarousel>
      </div>
    </section>
  );
}

export default BusinessShowcaseSection;
