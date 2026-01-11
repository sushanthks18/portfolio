'use client';

import { useEffect, useRef } from 'react';
import { Trophy, Award, Lightbulb, Users } from 'lucide-react';
import { gsap } from '@/lib/gsap';

const achievements = [
  {
    icon: Trophy,
    title: 'Best Mini Project Award',
    description: 'Recognized for innovative project implementation',
    highlight: true,
  },
  {
    icon: Award,
    title: 'State-level Competition',
    description: '2nd Place in "Save Energy" competition',
    highlight: true,
  },
  {
    icon: Lightbulb,
    title: 'Generative AI Workshop',
    description: 'NxtWave - Advanced AI training',
    highlight: false,
  },
  {
    icon: Users,
    title: 'IIC Club Member',
    description: 'Finance Team - Institution Innovation Council',
    highlight: false,
  },
];

export default function Achievements() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      achievementsRef.current.forEach((achievement, index) => {
        if (!achievement) return;
        
        gsap.fromTo(
          achievement,
          { 
            y: 60,
            opacity: 0,
            rotateY: -15
          },
          {
            y: 0,
            opacity: 1,
            rotateY: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: achievement,
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
    <section ref={sectionRef} className="py-20 bg-slate-950">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Achievements & <span className="gradient-text">Recognition</span>
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          Recognition for technical excellence and leadership
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            
            return (
              <div
                key={index}
                ref={(el) => { achievementsRef.current[index] = el; }}
                className={`card text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/20 cursor-pointer ${
                  achievement.highlight ? 'border-sky-500/50 bg-sky-500/5' : ''
                }`}
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-full ${
                    achievement.highlight 
                      ? 'bg-sky-500/20' 
                      : 'bg-sky-500/10'
                  }`}>
                    <Icon className={`w-8 h-8 ${
                      achievement.highlight 
                        ? 'text-sky-400' 
                        : 'text-sky-500'
                    }`} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-50 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-slate-400">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
