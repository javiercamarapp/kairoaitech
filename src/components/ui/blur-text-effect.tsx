'use client';

import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

interface BlurTextEffectProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export const BlurTextEffect: React.FC<BlurTextEffectProps> = ({ 
  children, 
  className = '',
  delay = 0,
  stagger = 0.015
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate when entering viewport
          const chars = containerRef.current?.querySelectorAll('span.char');
          if (!chars) return;

          gsap.set(chars, { opacity: 0, y: 10, filter: 'blur(8px)' });

          gsap.to(chars, {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.3,
            ease: 'power2.out',
            stagger: stagger,
            delay: delay,
            clearProps: 'filter',
          });

          setHasAnimated(true);
        } else if (hasAnimated) {
          // Reset when leaving viewport so it can animate again
          const chars = containerRef.current?.querySelectorAll('span.char');
          if (!chars) return;
          
          gsap.set(chars, { opacity: 0, y: 10, filter: 'blur(8px)' });
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
  }, [children, delay, stagger, hasAnimated]);

  return (
    <span className={`inline-block ${className}`} ref={containerRef}>
      {children.split('').map((char, i) => (
        <span 
          key={`${char}-${i}`} 
          className="char inline-block opacity-0" 
          style={{ whiteSpace: 'pre', filter: 'blur(8px)' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};
