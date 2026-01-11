'use client';

import { useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react';
import { gsap } from '@/lib/gsap';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { 
            y: 40,
            opacity: 0 
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          
          <div ref={contentRef} className="space-y-8">
            <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed">
              Open to <span className="text-sky-400">internships</span> and{' '}
              <span className="text-sky-400">full-time roles</span> in Core ECE,
              Embedded Systems, Software Development, and AI-Engineering
            </p>

            {/* Contact buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&to=sushanthks804@gmail.com&tf=cm"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a
                href="https://github.com/sushanthks18"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sushanth-ks-02b406292/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>

            {/* Additional contact info */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto pt-8">
              <div className="flex items-center justify-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-sky-500" />
                <span>+91 90192 95870</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-sky-500" />
                <span>Tumkur, Karnataka</span>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-12 mt-12 border-t border-slate-800">
              <p className="text-slate-500 text-sm">
                © 2026 Sushanth K S. Built with Next.js, TypeScript, and GSAP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
