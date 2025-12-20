'use client';

import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

interface BlurTextEffectProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  animateBy?: 'words' | 'letters';
}

export const BlurTextEffect: React.FC<BlurTextEffectProps> = ({ 
  children, 
  className = '',
  delay = 0,
  stagger = 0.08,
  duration = 0.6,
  animateBy = 'words'
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const elements = animateBy === 'words' 
    ? children.split(' ') 
    : children.split('');

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate when entering viewport
          const items = containerRef.current?.querySelectorAll('span.animate-item');
          if (!items) return;

          gsap.set(items, { opacity: 0, y: 15, filter: 'blur(10px)' });

          gsap.to(items, {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: duration,
            ease: 'power3.out',
            stagger: stagger,
            delay: delay,
            clearProps: 'filter',
          });

          setHasAnimated(true);
        } else if (hasAnimated) {
          // Reset when leaving viewport so it can animate again
          const items = containerRef.current?.querySelectorAll('span.animate-item');
          if (!items) return;
          
          gsap.set(items, { opacity: 0, y: 15, filter: 'blur(10px)' });
          setHasAnimated(false);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      observer.disconnect();
    };
  }, [children, delay, stagger, duration, hasAnimated]);

  return (
    <span className={`inline ${className}`} ref={containerRef}>
      {elements.map((element, i) => (
        <span 
          key={`${element}-${i}`} 
          className="animate-item inline-block opacity-0" 
          style={{ filter: 'blur(10px)' }}
        >
          {element}
          {animateBy === 'words' && i < elements.length - 1 && '\u00A0'}
        </span>
      ))}
    </span>
  );
};
