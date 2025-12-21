import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useScroll, motion } from 'motion/react';
import { BlurTextEffect } from '@/components/ui/blur-text-effect';
import { ScrollAnimate } from '@/components/ui/scroll-animate';
import { AnimatedSearchBar } from '@/components/AnimatedSearchBar';
import { AIBenefitsSection } from '@/components/AIBenefitsSection';
import { BusinessShowcaseSection } from '@/components/BusinessShowcaseSection';
import { ProcessSection } from '@/components/ProcessSection';
import IntegrationHero from '@/components/ui/integration-hero';
import { FeaturedStats } from '@/components/FeaturedStats';
import { GlobeSection } from '@/components/GlobeSection';
import logoImage from '@/assets/logo.png';
import logoTaquitos from '@/assets/logos/taquitos.png';
import logoAmerica from '@/assets/logos/america.png';
import logoMonterrey from '@/assets/logos/monterrey.png';
import logoKing from '@/assets/logos/king.png';
import logoParadise from '@/assets/logos/paradise.png';
import logoDropin from '@/assets/logos/dropin.png';
import logoPolloLoco from '@/assets/logos/polloloco.png';

export function HeroSection() {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [videoLoaded, setVideoLoaded] = React.useState(false);

  React.useEffect(() => {
    // Start playback ASAP; if autoplay is blocked, the poster/first frame still shows.
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    (v as any).playsInline = true;
    const p = v.play?.();
    if (p && typeof (p as Promise<void>).catch === 'function') {
      (p as Promise<void>).catch(() => {
        // Autoplay can be blocked until user interaction on some devices.
      });
    }
  }, []);

  return <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div className="relative min-h-screen">
            {/* Video background container */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl border border-border/10 lg:rounded-[3rem] mx-1">
              {/* Fallback background */}
              <div className="absolute inset-0 bg-zinc-900" />
              {/* Video */}
              <video 
                ref={videoRef}
                autoPlay 
                loop 
                muted 
                playsInline
                preload="auto"
                onLoadedData={() => setVideoLoaded(true)}
                onCanPlay={() => setVideoLoaded(true)}
                onTimeUpdate={(e) => {
                  const v = e.currentTarget;
                  if (!videoLoaded && v.currentTime > 0) setVideoLoaded(true);
                }}
                className="absolute inset-0 h-full w-full object-cover object-[55%_center] sm:object-center"
                src="/videos/hero-background.mp4"
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
                        Empieza a ahorrar dentro de tu empresa usando IA
                      </BlurTextEffect>
                    </h1>
                    <p className="mt-8 max-w-2xl text-balance text-lg text-secondary">
                      <BlurTextEffect delay={0.5} stagger={0.01}>
                        Construimos soluciones impulsadas por IA que automatizan, escalan y transforman la forma en que las empresas operan.
                      </BlurTextEffect>
                    </p>

                    <ScrollAnimate 
                      className="mt-12 sm:mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start"
                      delay={0.8}
                      duration={0.7}
                      y={40}
                    >
                      <Button asChild size="lg" className="h-12 rounded-full pl-5 pr-3 text-base bg-black text-white hover:bg-black/90 active:-translate-y-1 transition-all duration-150">
                        <Link to="/contacto">
                          <span className="text-nowrap">Ponerse en contacto</span>
                          <ChevronRight className="ml-1" />
                        </Link>
                      </Button>
                      <Button asChild size="lg" variant="ghost" className="h-12 rounded-full px-5 text-base hover:bg-transparent active:-translate-y-1 active:shadow-lg active:shadow-white/40 transition-all duration-150 bg-white/20 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none">
                        <Link to="#link">
                          <span className="text-nowrap text-gray-300 font-medium sm:font-normal sm:text-primary-foreground">Ver soluciones</span>
                        </Link>
                      </Button>
                    </ScrollAnimate>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <motion.section 
          className="bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <div className="group relative m-auto max-w-7xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <motion.div 
                className="md:max-w-44 md:border-r md:pr-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 2.2 }}
              >
                <p className="text-end text-sm text-muted-foreground">Empresas con las que hemos trabajado</p>
              </motion.div>
              <motion.div 
                className="relative md:w-[calc(100%-11rem)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.4 }}
              >
                <InfiniteSlider speedOnHover={60} speed={80} gap={48}>
                  <div className="flex items-center justify-center h-16 w-32">
                    <img className="max-h-12 max-w-full object-contain" src={logoTaquitos} alt="Taquitos Logo" loading="eager" fetchPriority="high" />
                  </div>
                  <div className="flex items-center justify-center h-16 w-32">
                    <img className="max-h-12 max-w-full object-contain" src={logoAmerica} alt="Club América Logo" />
                  </div>
                  <div className="flex items-center justify-center h-16 w-32">
                    <img className="max-h-12 max-w-full object-contain" src={logoMonterrey} alt="Monterrey Logo" />
                  </div>
                  <div className="flex items-center justify-center h-16 w-32">
                    <img className="max-h-12 max-w-full object-contain" src={logoKing} alt="King Logo" />
                  </div>
                  <div className="flex items-center justify-center h-16 w-32">
                    <img className="max-h-12 max-w-full object-contain" src={logoParadise} alt="Paradise Logo" />
                  </div>
                  <div className="flex items-center justify-center h-16 w-32">
                    <img className="max-h-12 max-w-full object-contain" src={logoDropin} alt="Dropin Logo" />
                  </div>
                  <div className="flex items-center justify-center h-16 w-32">
                    <img className="max-h-12 max-w-full object-contain" src={logoPolloLoco} alt="El Pollo Loco Logo" />
                  </div>
                </InfiniteSlider>

                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent"></div>
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent"></div>
                <ProgressiveBlur className="pointer-events-none absolute left-0 top-0 h-full w-20" direction="left" blurIntensity={1} />
                <ProgressiveBlur className="pointer-events-none absolute right-0 top-0 h-full w-20" direction="right" blurIntensity={1} />
              </motion.div>
            </div>
          </div>
          
          {/* Search Bar */}
          <ScrollAnimate className="py-6 px-3 relative z-[100]" delay={0.3} duration={0.7} y={30}>
            <AnimatedSearchBar placeholder="Busca tu negocio..." />
          </ScrollAnimate>
        </motion.section>
        
        {/* AI Benefits Section */}
        <AIBenefitsSection />
        
        {/* Business Showcase Section */}
        <BusinessShowcaseSection />
        
        {/* Integration Hero Section */}
        <IntegrationHero />
        
        {/* Featured Stats Section */}
        <FeaturedStats />
        
        {/* Globe Section */}
        <GlobeSection />
      </main>
    </>;
}
const menuItems = [{
  name: 'Features',
  href: '#link'
}, {
  name: 'Solution',
  href: '#link'
}, {
  name: 'Pricing',
  href: '#link'
}, {
  name: 'About',
  href: '#link'
}];
const HeroHeader = () => {
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
                  <Logo inverted={scrolled} />
                </motion.div>
              </Link>

              <button onClick={() => setMenuState(!menuState)} aria-label={menuState ? 'Close Menu' : 'Open Menu'} className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                <Menu className="m-auto size-6 duration-200 group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0" />
                <X className="absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100" />
              </button>

              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm text-primary-foreground border-primary-foreground">
                  {menuItems.map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index + 0.3 }}
                    >
                      <Link to={item.href} className="block text-muted-foreground duration-150 hover:text-accent-foreground active:-translate-y-1 transition-all">
                        <span className="text-primary-foreground">{item.name}</span>
                      </Link>
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
                      <Link to={item.href} className="block text-muted-foreground duration-150 hover:text-accent-foreground">
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <motion.div 
                className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button asChild variant="outline" size="sm" className="active:-translate-y-1 transition-all duration-150">
                  <Link to="#">
                    <span>Login</span>
                  </Link>
                </Button>
                <Button asChild size="sm" className="bg-black text-white hover:bg-black/90 active:-translate-y-1 transition-all duration-150">
                  <Link to="#">
                    <span>Sign Up</span>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </nav>
    </motion.header>
  );
};
const Logo = ({
  className,
  inverted = false
}: {
  className?: string;
  inverted?: boolean;
}) => {
  return (
    <img 
      src={logoImage} 
      alt="Logo" 
      className={cn(
        'h-6 w-auto sm:h-8 transition-all duration-300',
        inverted && 'brightness-0 invert',
        className
      )}
    />
  );
};
export default HeroSection;