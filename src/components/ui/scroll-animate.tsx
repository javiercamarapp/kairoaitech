'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface ScrollAnimateProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  scale?: number;
}

export const ScrollAnimate: React.FC<ScrollAnimateProps> = ({ 
  children, 
  className = '',
  delay = 0,
  duration = 0.6,
  x = 0,
  y = 30,
  scale = 0.95
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            containerRef.current,
            { opacity: 0, x: x, y: y, scale: scale },
            {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: duration,
              ease: 'power3.out',
              delay: delay,
            }
          );
          setHasAnimated(true);
        } else if (hasAnimated) {
          gsap.set(containerRef.current, { opacity: 0, x: x, y: y, scale: scale });
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
  }, [delay, duration, x, y, scale, hasAnimated]);

  return (
    <div 
      ref={containerRef} 
      className={className}
      style={{ opacity: 0, transform: `translateX(${x}px) translateY(${y}px) scale(${scale})` }}
    >
      {children}
    </div>
  );
};
