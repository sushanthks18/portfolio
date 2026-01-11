'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { X } from 'lucide-react';
import { gsap } from '@/lib/gsap';

interface DetailPanelProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function DetailPanel({ isOpen, onClose, children }: DetailPanelProps) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      
      // Open animation
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();
        
        tl.to(backdropRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
        })
        .fromTo(
          panelRef.current,
          { x: '100%', opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
          '-=0.2'
        )
        .fromTo(
          contentRef.current?.children || [],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'power2.out' },
          '-=0.3'
        );
      });

      return () => {
        ctx.revert();
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      return () => document.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen]);

  const handleClose = () => {
    // Close animation
    const tl = gsap.timeline({
      onComplete: onClose,
    });

    tl.to(contentRef.current?.children || [], {
      y: 20,
      opacity: 0,
      duration: 0.3,
      stagger: 0.05,
      ease: 'power2.in',
    })
    .to(
      panelRef.current,
      { x: '100%', opacity: 0, duration: 0.4, ease: 'power2.in' },
      '-=0.2'
    )
    .to(backdropRef.current, { opacity: 0, duration: 0.3 }, '-=0.3');
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 opacity-0"
        onClick={handleClose}
        style={{ marginTop: 0 }}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className="fixed top-0 right-0 h-screen w-full md:w-2/3 lg:w-1/2 bg-gradient-to-br from-slate-900 to-slate-950 z-50 overflow-y-auto opacity-0 shadow-2xl border-l-2 border-sky-500/20"
        style={{ transform: 'translateX(100%)' }}
      >
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 bg-circuit-pattern opacity-5 pointer-events-none" />

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-800/50 rounded-lg transition-all z-10 group"
          aria-label="Close panel"
        >
          <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Content */}
        <div ref={contentRef} className="relative p-8 mt-16">
          {children}
        </div>
      </div>
    </>
  );
}
