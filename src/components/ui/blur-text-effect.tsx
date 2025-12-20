'use client';

import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

interface BlurTextEffectProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
}

export const BlurTextEffect: React.FC<BlurTextEffectProps> = ({ 
  children, 
  className = '',
  delay = 0,
  stagger = 0.04,
  duration = 0.6
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

          gsap.set(chars, { opacity: 0, y: 15, filter: 'blur(10px)' });

          gsap.to(chars, {
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
          const chars = containerRef.current?.querySelectorAll('span.char');
          if (!chars) return;
          
          gsap.set(chars, { opacity: 0, y: 15, filter: 'blur(10px)' });
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
    <span className={`inline-block ${className}`} ref={containerRef}>
      {children.split('').map((char, i) => (
        <span 
          key={`${char}-${i}`} 
          className="char inline-block opacity-0" 
          style={{ whiteSpace: 'pre', filter: 'blur(10px)' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};
