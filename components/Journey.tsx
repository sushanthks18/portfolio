'use client';

import { useEffect, useRef } from 'react';
import { GraduationCap, Cpu, Code, Lightbulb } from 'lucide-react';
import { gsap } from '@/lib/gsap';

const journeyItems = [
  {
    icon: GraduationCap,
    title: '3rd Year B.Tech ECE',
    subtitle: 'Siddaganga Institute of Technology',
    description: 'Building a strong foundation in electronics and communication engineering',
  },
  {
    icon: Cpu,
    title: 'Core Strengths',
    subtitle: 'Electronics & Communication Fundamentals',
    description: 'Digital Electronics, Signals & Systems, Control Systems, Communication Theory',
  },
  {
    icon: Code,
    title: 'Hands-on Experience',
    subtitle: 'Embedded Systems & IoT',
    description: 'Embedded C, Arduino, ESP32, Sensor Integration, Microcontroller Programming',
  },
  {
    icon: Lightbulb,
    title: 'Software Engineering',
    subtitle: 'Full-stack & AI Applications',
    description: 'Applied AI/ML to electronics and software systems, building end-to-end solutions',
  },
];

export default function Journey() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        if (!item) return;
        
        gsap.fromTo(
          item,
          { 
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0 
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-slate-950">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My <span className="gradient-text">Journey</span>
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          From core electronics to software engineering, bridging disciplines to create innovative solutions
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-sky-500 to-sky-900"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {journeyItems.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  ref={(el) => { itemsRef.current[index] = el; }}
                  className="relative"
                >
                  <div className={`flex flex-col md:flex-row gap-8 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="card hover:scale-105 transition-transform duration-300">
                        <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                          <div className="p-3 bg-sky-500/10 rounded-lg">
                            <Icon className="w-6 h-6 text-sky-500" />
                          </div>
                          <h3 className="text-xl font-bold text-slate-50">{item.title}</h3>
                        </div>
                        <h4 className="text-sky-400 font-semibold mb-3">{item.subtitle}</h4>
                        <p className="text-slate-400">{item.description}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden md:flex w-2/12 justify-center">
                      <div className="w-4 h-4 bg-sky-500 rounded-full border-4 border-slate-950 z-10"></div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block w-5/12"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
