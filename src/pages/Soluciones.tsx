import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useScroll } from 'motion/react';
import { cn } from '@/lib/utils';
import logoImage from '@/assets/logo.png';
import { BlurTextEffect } from '@/components/ui/blur-text-effect';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { IndustryFilter } from '@/components/IndustryFilter';
import { SolutionsGrid } from '@/components/SolutionsGrid';

const menuItems = [
  {
    name: 'Soluciones',
    href: '/soluciones',
    isRoute: true
  },
  {
    name: 'Kairo AI',
    href: '/kairo-ai',
    isRoute: true
  },
  {
    name: 'Nosotros',
    href: '/#nosotros'
  }
];

const Soluciones = () => {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [videoLoaded, setVideoLoaded] = React.useState(false);
  const [selectedIndustry, setSelectedIndustry] = React.useState('all');

  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    (v as any).playsInline = true;
    const p = v.play?.();
    if (p && typeof (p as Promise<void>).catch === 'function') {
      (p as Promise<void>).catch(() => {});
    }
  }, []);

  return (
    <>
      <SolucionesHeader />
      <main className="overflow-x-hidden">
        <section>
          <div className="relative min-h-screen">
            {/* Video background container */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl border border-border/10 lg:rounded-[3rem] mx-1">
              {/* Fallback background */}
              <div 
                className={cn(
                  "absolute inset-0 bg-zinc-900 transition-opacity duration-500",
                  videoLoaded ? "opacity-0" : "opacity-100"
                )} 
              />
              {/* Video */}
              <video 
                ref={videoRef}
                autoPlay 
                loop 
                muted 
                playsInline
                preload="metadata"
                onLoadedData={() => setVideoLoaded(true)}
                onCanPlay={() => setVideoLoaded(true)}
                onTimeUpdate={(e) => {
                  const v = e.currentTarget;
                  if (!videoLoaded && v.currentTime > 0) setVideoLoaded(true);
                }}
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
                  videoLoaded ? "opacity-100" : "opacity-0"
                )}
                src="/videos/soluciones-hero.mp4"
              />
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
              {/* Bottom fade for text readability */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
            </div>
            
            {/* Content overlay */}
            <div className="relative z-10 flex flex-col min-h-screen">
              <div className="flex-1 flex items-center py-4 md:py-24">
              <div className="mx-auto max-w-7xl px-6 lg:px-12 w-full">
                  <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                    <h1 className="mt-20 max-w-2xl text-balance text-3xl font-bold sm:text-4xl md:text-6xl lg:mt-16 xl:text-7xl text-primary-foreground mx-auto lg:mx-0">
                      <BlurTextEffect delay={0.2} stagger={0.02}>
                        Las mejores soluciones de inteligencia artificial
                      </BlurTextEffect>
                    </h1>
                    <p className="mt-8 max-w-2xl text-balance text-lg text-secondary">
                      <BlurTextEffect delay={0.5} stagger={0.01}>
                        Contamos con las mejores soluciones de inteligencia artificial para cada tipo de industria.
                      </BlurTextEffect>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Filter Section */}
        <IndustryFilter 
          selectedIndustry={selectedIndustry} 
          onSelectIndustry={setSelectedIndustry} 
        />

        {/* Solutions Grid */}
        <SolutionsGrid selectedIndustry={selectedIndustry} />
        
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
};

const SolucionesHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollYProgress } = useScroll();
  
  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', latest => {
      setScrolled(latest > 0.05);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav data-state={menuState && 'active'} className="group fixed z-20 w-full pt-2">
        <motion.div 
          className={cn('mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12', scrolled && 'bg-background/50 backdrop-blur-2xl')}
          animate={{
            boxShadow: scrolled ? '0 10px 40px -10px rgba(0,0,0,0.3)' : '0 0 0 0 rgba(0,0,0,0)',
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6', scrolled && 'lg:py-4')}
          >
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link to="/" aria-label="home" className="flex items-center space-x-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img 
                    src={logoImage} 
                    alt="Logo" 
                    className={cn(
                      'h-6 w-auto sm:h-8 transition-all duration-300',
                      scrolled && '[filter:brightness(0)_saturate(100%)]'
                    )}
                  />
                </motion.div>
              </Link>

              <button onClick={() => setMenuState(!menuState)} aria-label={menuState ? 'Close Menu' : 'Open Menu'} className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                <Menu className={cn("m-auto size-6 duration-200 group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0", scrolled ? "text-foreground" : "text-white")} />
                <X className={cn("absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100", scrolled ? "text-foreground" : "text-white")} />
              </button>

              <div className="hidden lg:block">
                <ul className={cn("flex gap-8 text-sm transition-colors duration-300", scrolled ? "text-foreground" : "text-primary-foreground")}>
                  {menuItems.map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index + 0.3 }}
                    >
                      {'isRoute' in item && item.isRoute ? (
                        <Link to={item.href} className="block duration-150 hover:opacity-70 active:-translate-y-1 transition-all">
                          <span>{item.name}</span>
                        </Link>
                      ) : (
                        <a href={item.href} className="block duration-150 hover:opacity-70 active:-translate-y-1 transition-all">
                          <span>{item.name}</span>
                        </a>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border bg-background p-6 shadow-2xl shadow-zinc-300/20 group-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:group-data-[state=active]:flex dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      {'isRoute' in item && item.isRoute ? (
                        <Link to={item.href} className="block text-muted-foreground duration-150 hover:text-accent-foreground">
                          <span>{item.name}</span>
                        </Link>
                      ) : (
                        <a href={item.href} className="block text-muted-foreground duration-150 hover:text-accent-foreground">
                          <span>{item.name}</span>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Soluciones;
