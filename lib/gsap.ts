import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

// Animation utilities
export const fadeInUp = (element: HTMLElement | string, delay = 0) => {
  return gsap.fromTo(
    element,
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
};

export const fadeIn = (element: HTMLElement | string, delay = 0) => {
  return gsap.fromTo(
    element,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.8,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
};

export const staggerFadeInUp = (elements: string | HTMLElement[], delay = 0) => {
  return gsap.fromTo(
    elements,
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.15,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: elements,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
};
