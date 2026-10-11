import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(
  selector: string,
  options?: {
    y?: number;
    x?: number;
    duration?: number;
    stagger?: number;
    delay?: number;
    scale?: number;
    start?: string;
    ease?: string;
  }
) {
  useLayoutEffect(() => {
    const {
      y = 30,
      x = 0,
      duration = 0.7,
      stagger = 0.1,
      delay = 0,
      scale,
      start = 'top 85%',
      ease = 'power3.out',
    } = options || {};

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(selector) as HTMLElement[];
      if (elements.length === 0) return;

      const triggerEl = elements[0].parentElement || elements[0];

      gsap.fromTo(
        elements,
        { 
          opacity: 0, 
          y, 
          x, 
          scale: scale !== undefined ? scale : 1 
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration,
          ease,
          delay,
          stagger,
          scrollTrigger: {
            trigger: triggerEl,
            start,
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [selector, JSON.stringify(options)]);
}
