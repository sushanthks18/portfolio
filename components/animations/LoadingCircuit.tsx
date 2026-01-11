'use client';

import { useEffect, useState, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export default function LoadingCircuit() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<(SVGCircleElement | null)[]>([]);

  useEffect(() => {
    // Check for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsLoading(false);
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Fade out the loading screen
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => setIsLoading(false),
          });
        },
      });

      // Animate circles sequentially
      circleRefs.current.forEach((circle, i) => {
        if (circle) {
          tl.to(
            circle,
            {
              strokeDashoffset: 0,
              duration: 0.3,
              ease: 'power2.out',
            },
            i * 0.1
          );
        }
      });

      // Hold for a moment
      tl.to({}, { duration: 0.5 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (!isLoading) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-slate-950 z-[100] flex items-center justify-center"
    >
      <div className="relative">
        {/* Circuit animation */}
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          className="animate-pulse"
        >
          <defs>
            <linearGradient id="load-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f5ff" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
          </defs>

          {/* Concentric circles */}
          {[60, 80, 100].map((r, i) => (
            <circle
              key={i}
              ref={(el) => { circleRefs.current[i] = el; }}
              cx="100"
              cy="100"
              r={r}
              fill="none"
              stroke="url(#load-gradient)"
              strokeWidth="2"
              strokeDasharray={`${2 * Math.PI * r}`}
              strokeDashoffset={`${2 * Math.PI * r}`}
              className="drop-shadow-[0_0_10px_rgba(14,165,233,0.8)]"
            />
          ))}

          {/* Center nodes */}
          <circle cx="100" cy="100" r="8" fill="#00f5ff" className="animate-pulse" />
          
          {/* Corner nodes */}
          {[
            { cx: 100, cy: 40 },
            { cx: 160, cy: 100 },
            { cx: 100, cy: 160 },
            { cx: 40, cy: 100 },
          ].map((pos, i) => (
            <circle
              key={i}
              {...pos}
              r="5"
              fill="#0ea5e9"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>

        {/* Loading text */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <p className="text-sky-400 font-mono text-sm animate-pulse">
            Initializing System...
          </p>
        </div>
      </div>
    </div>
  );
}
