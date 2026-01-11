'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export default function CircuitDivider() {
  const lineRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    const ctx = gsap.context(() => {
      // Draw animation on scroll into view
      gsap.fromTo(
        line,
        { strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-16 overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(14, 165, 233, 0)" />
            <stop offset="50%" stopColor="rgba(14, 165, 233, 0.6)" />
            <stop offset="100%" stopColor="rgba(14, 165, 233, 0)" />
          </linearGradient>
        </defs>

        {/* Main circuit line */}
        <path
          ref={lineRef}
          d="M 0 40 L 200 40 L 220 20 L 240 40 L 400 40 L 420 60 L 440 40 L 600 40 L 620 20 L 640 40 L 800 40 L 820 60 L 840 40 L 1000 40 L 1020 20 L 1040 40 L 1200 40"
          fill="none"
          stroke="url(#circuit-gradient)"
          strokeWidth="2"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          className="drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]"
        />

        {/* Circuit nodes */}
        {[220, 420, 620, 820, 1020].map((x, i) => (
          <circle
            key={i}
            cx={x}
            cy={i % 2 === 0 ? 20 : 60}
            r="4"
            fill="rgba(0, 245, 255, 0.8)"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
