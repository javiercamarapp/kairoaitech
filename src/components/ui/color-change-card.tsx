import React from "react";
import { motion, Variants } from "motion/react";
import { ArrowRight } from "lucide-react";
import { InfiniteSlider } from "./infinite-slider";

const cards = [
  {
    heading: "Automatización",
    description: "Optimiza tus procesos con flujos de trabajo inteligentes que reducen costos y aumentan la productividad.",
    imgSrc: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop"
  },
  {
    heading: "Chatbots IA",
    description: "Asistentes virtuales disponibles 24/7 que atienden a tus clientes de manera personalizada.",
    imgSrc: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop"
  },
  {
    heading: "Análisis de Datos",
    description: "Convierte información en decisiones estratégicas con análisis predictivo y reportes en tiempo real.",
    imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    heading: "Integración",
    description: "Conectamos tus sistemas existentes con soluciones de IA para una transformación sin fricciones.",
    imgSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop"
  }
];

const ColorChangeCards = () => {
  return (
    <section className="bg-background px-2 py-8 md:px-4 md:py-12">
      {/* Mobile: Infinite Carousel */}
      <div className="md:hidden">
        <InfiniteSlider speed={40} gap={16} speedOnHover={60}>
          {cards.map((card, index) => (
            <Card
              key={index}
              heading={card.heading}
              description={card.description}
              imgSrc={card.imgSrc}
            />
          ))}
        </InfiniteSlider>
      </div>
      
      {/* Desktop: Grid */}
      <div className="hidden md:grid mx-auto max-w-6xl grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            heading={card.heading}
            description={card.description}
            imgSrc={card.imgSrc}
          />
        ))}
      </div>
    </section>
  );
};

// --- Card Component ---
interface CardProps {
  heading: string;
  description: string;
  imgSrc: string;
}

const Card = ({ heading, description, imgSrc }: CardProps) => {
  return (
    <motion.div
      whileHover="hover"
      className="group relative h-80 w-72 md:h-96 md:w-full flex-shrink-0 overflow-hidden rounded-2xl bg-zinc-900"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        variants={{
          hover: { scale: 1.05 },
        }}
        transition={{ duration: 0.4 }}
      >
        <img
          src={imgSrc}
          alt={heading}
          className="h-full w-full object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-40"
        />
      </motion.div>

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-zinc-950/90 via-zinc-950/50 to-transparent p-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between">
            <h3 className="overflow-hidden text-2xl font-bold text-white md:text-3xl">
              {heading.split("").map((letter, index) => (
                <AnimatedLetter key={index} letter={letter} />
              ))}
            </h3>
            <motion.div
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm"
              variants={{
                hover: { scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" },
              }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="h-5 w-5 text-white" />
            </motion.div>
          </div>

          <p className="mt-3 text-sm text-zinc-300 md:text-base">
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

// --- AnimatedLetter Helper Component ---
interface AnimatedLetterProps {
  letter: string;
}

const letterVariants: Variants = {
  hover: {
    y: "-100%",
  },
};

const AnimatedLetter = ({ letter }: AnimatedLetterProps) => {
  return (
    <span className="relative inline-block h-[1em] overflow-hidden">
      <motion.span
        className="inline-flex flex-col"
        variants={letterVariants}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        <span>{letter === " " ? "\u00A0" : letter}</span>
        <span className="text-primary">{letter === " " ? "\u00A0" : letter}</span>
      </motion.span>
    </span>
  );
};

export default ColorChangeCards;
