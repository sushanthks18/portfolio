'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Download, ChevronDown } from 'lucide-react';
import { gsap } from '@/lib/gsap';
import CircuitBackground from './animations/CircuitBackground';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const rolesRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero elements sequentially
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      // Add profile photo animation
      if (profileRef.current) {
        tl.fromTo(
          profileRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8 }
        );
      }
      
      tl.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      );
      
      // Typewriter effect for name
      if (nameRef.current) {
        const text = "Sushanth K S";
        const chars = text.split('');
        
        // Create spans for each character
        nameRef.current.innerHTML = chars
          .map((char) => `<span class="char" style="opacity:0">${char === ' ' ? '&nbsp;' : char}</span>`)
          .join('');
        
        // Animate each character with slower speed
        tl.to('.char', {
          opacity: 1,
          duration: 0.05,
          stagger: 0.15,  // Slower: 150ms per character
          ease: 'none',
          onComplete: () => {
            // Show cursor after typing completes
            setShowCursor(true);
            // Hide cursor after 3 seconds
            setTimeout(() => setShowCursor(false), 3000);
          }
        }, '-=0.3');
      }
      
      tl.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        rolesRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.3'
      )
      .fromTo(
        taglineRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.2'
      );

      if (ctaRef.current) {
        tl.fromTo(
          Array.from(ctaRef.current.children),
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.15 },
          '-=0.2'
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-circuit-pattern"
    >
      {/* NEW: Circuit Background Animation Layer */}
      <CircuitBackground />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-sky-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-sky-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container py-20">
        {/* Profile Photo - Desktop: right side, Mobile: center top */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1
              ref={titleRef}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0"
            >
              Hi, I&apos;m{' '}
              <span ref={nameRef} className="animated-gradient-text whitespace-nowrap">
                Sushanth K S
              </span>
              {showCursor && <span className="typing-cursor"></span>}
            </h1>
            
            <p
              ref={subtitleRef}
              className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-4 opacity-0"
            >
              Electronics & Communication Engineering student with strong programming skills, focused on building intelligent systems through embedded hardware and software integration.
            </p>
            
            <p
              ref={rolesRef}
              className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-8 opacity-0"
            >
              Embedded Systems | IoT | AI | Software Development
            </p>
            
            <div className="max-w-3xl mx-auto lg:mx-0 mb-12">
              <p
                ref={taglineRef}
                className="text-2xl sm:text-3xl md:text-4xl font-semibold gradient-text opacity-0 py-4 px-6 bg-slate-900/30 backdrop-blur-sm rounded-lg border-2 border-sky-500/30 shadow-lg shadow-sky-500/20"
              >
                &quot;Bridging embedded hardware and software to build intelligent engineering systems.&quot;
              </p>
            </div>
            
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <button
                onClick={scrollToProjects}
                className="btn-primary"
              >
                View Projects
              </button>
              <a
                href="/resume.pdf"
                download
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div
            ref={profileRef}
            className="flex-shrink-0 opacity-0 order-first lg:order-last"
          >
            <div className="relative w-[280px] h-[280px] lg:w-[320px] lg:h-[320px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 opacity-20 blur-2xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-sky-500/30 shadow-2xl shadow-sky-500/20">
                <Image
                  src="/profile.jpg"
                  alt="Sushanth K S - ECE Engineer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-sky-500" />
        </div>
      </div>
    </section>
  );
}
