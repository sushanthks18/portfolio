'use client';

import { useEffect, useRef } from 'react';
import { Cpu, Radio, Code, Terminal, Brain, Wrench } from 'lucide-react';
import { gsap } from '@/lib/gsap';

const skillCategories = [
  {
    icon: Cpu,
    title: 'Core ECE',
    skills: [
      'Digital Electronics',
      'Signals & Systems',
      'Control Systems',
      'Communication Theory',
      'Analog Circuits',
      'Microprocessors',
    ],
  },
  {
    icon: Radio,
    title: 'Embedded/IoT',
    skills: [
      'Embedded C',
      'Arduino',
      'ESP32',
      'Sensor Integration',
      'MQTT Protocol',
      'Hardware Debugging',
    ],
  },
  {
    icon: Code,
    title: 'Software Development',
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Node.js',
      'Next.js',
      'Flask',
    ],
  },
  {
    icon: Terminal,
    title: 'Programming',
    skills: [
      'C',
      'C++',
      'Python',
      'Data Structures',
      'Algorithms',
      'Problem Solving',
    ],
  },
  {
    icon: Brain,
    title: 'AI/Data',
    skills: [
      'Machine Learning',
      'Random Forest',
      'Data Analysis',
      'NDVI Processing',
      'Model Training',
      'Data Visualization',
    ],
  },
  {
    icon: Wrench,
    title: 'Tools & Tech',
    skills: [
      'Git & GitHub',
      'MongoDB',
      'Tailwind CSS',
      'VS Code',
      'Linux',
      'Arduino IDE',
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      skillsRef.current.forEach((skill, index) => {
        if (!skill) return;
        
        gsap.fromTo(
          skill,
          { 
            scale: 0.8,
            opacity: 0 
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: skill,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-slate-900">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          A comprehensive skillset spanning hardware, software, and intelligent systems
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            
            return (
              <div
                key={index}
                ref={(el) => { skillsRef.current[index] = el; }}
                className="card group hover:scale-105"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-sky-500/10 rounded-lg group-hover:bg-sky-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-sky-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-50">{category.title}</h3>
                </div>

                {/* Skills list */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-3 py-2 bg-slate-800/50 text-slate-300 text-sm rounded-lg border border-slate-700 hover:border-sky-500/50 hover:text-sky-400 transition-all duration-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
