'use client';

import { useEffect, useRef } from 'react';
import { Sprout, Droplets, Calculator, ExternalLink, Github, Code, Brain, Radio, Utensils } from 'lucide-react';
import { gsap } from '@/lib/gsap';

const projects = [
  {
    icon: Sprout,
    title: 'Krishi Sakha',
    subtitle: 'IoT Smart Farming Solution',
    description: 'Full-stack IoT platform for precision agriculture with real-time monitoring and ML-powered crop recommendations',
    tech: ['ESP32', 'Sensors', 'Random Forest ML', 'MongoDB', 'React', 'Node.js'],
    highlights: [
      'ESP32-based sensor network for soil and environmental monitoring',
      'Machine Learning model with 90.4% accuracy for crop recommendations',
      'Real-time data visualization dashboard',
      'Full-stack implementation from hardware to cloud',
    ],
    github: 'https://github.com/sushanthks18/krishisakha-an-iot-based-farm-assistan',
    demo: 'https://github.com/sushanthks18/krishisakha-an-iot-based-farm-assistan',
  },
  {
    icon: Droplets,
    title: 'AquaAdvisor',
    subtitle: 'AI Irrigation Advisory System',
    description: 'Satellite imagery-based irrigation advisory using NDVI analysis and machine learning for water optimization',
    tech: ['Python', 'Sentinel-2', 'NDVI', 'Flask', 'Data Processing', 'ML'],
    highlights: [
      'Sentinel-2 satellite imagery processing for NDVI analysis',
      'Python Flask backend for data pipeline',
      'Automated irrigation recommendations',
      'Water conservation through data-driven insights',
    ],
    github: 'https://github.com/sushanthks18/AquaAdvisor-AI-Powered-Water-Use-Efficiency-Advisor-for-Agriculture',
    demo: 'https://aquai-saha.vercel.app',
  },
  {
    icon: Calculator,
    title: 'Digital Calculator',
    subtitle: 'Embedded System Project',
    description: 'Arduino-based digital calculator demonstrating microcontroller interfacing and embedded system design',
    tech: ['Arduino', 'Embedded C', 'LCD', 'Keypad Interface', 'Hardware Design'],
    highlights: [
      'Microcontroller-based calculation system',
      'Custom LCD and keypad interfacing',
      'Efficient embedded C programming',
      'Hardware-software integration',
    ],
    github: 'https://github.com/sushanthks/digital-calculator',
    demo: '#',
  },
  {
  icon:Utensils,
  title: 'Mess Feedback & Analytics System',
  subtitle: 'Full-Stack MERN Dashboard',
  description: 'A data-driven platform for Hostel Mess management, enabling students to rate meals and Owners to analyze feedback via interactive charts to reduce food waste.',
  tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'Cloudinary', 'Tailwind'],
  highlights: [
    'Real-time Analytics Dashboard with Recharts visualization',
    'Role-Based Authentication (Student vs Owner) with JWT',
    'Weekly Menu Management system with Image Uploads',
    'Secure Email Invitation workflow for onboarding owners',
  ],
  github: 'https://github.com/sushanthks18/Mess-Feedback-Analytics-System.git',
  demo: '#',
},
  {
    icon: Brain,
    title: 'Anti-Greenwashing Carbon Credit Platform',
    subtitle: 'Machine Learning Project',
    description: 'Blockchain-based platform for authenticating carbon credit projects and preventing greenwashing through AI-powered verification',
    tech: ['Python', 'TensorFlow', 'Blockchain', 'Solidity', 'Web3.js', 'Flask', 'React'],
    highlights: [
      'AI algorithms to detect fraudulent carbon credit claims',
      'Smart contracts for transparent credit tracking',
      'Real-time monitoring and verification system',
      'Geospatial analysis for environmental impact validation',
    ],
    github: 'https://github.com/sushanthks18/Anti-Greenwashing-Carbon-Credit-Platform.git',
    demo: '#',
  },
  {
    icon: Calculator,
    title: 'TaxSaver',
    subtitle: 'Tax Calculation & Filing Application',
    description: 'Comprehensive tax management application that simplifies tax calculation, filing, and compliance for individuals and small businesses',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tax API Integration', 'PDF Generation'],
    highlights: [
      'Intuitive tax calculation with real-time updates',
      'Automated form generation and PDF export',
      'Secure document upload and storage system',
      'Tax deduction optimization algorithms',
    ],
    github: 'https://github.com/sushanthks18/TaxSaver.git',
    demo: '#',
  },
  {
    icon: Calculator,
    title: 'Campus Queue Waiting Time Problem Analyzer',
    subtitle: 'Queue Optimization Solution',
    description: 'Analytics platform for measuring and optimizing queue waiting times in campus facilities like cafeterias, libraries, and administrative offices',
    tech: ['Python', 'Data Analysis', 'Statistics', 'Queueing Theory', 'Visualization', 'Optimization Algorithms'],
    highlights: [
      'Statistical analysis of queue patterns and bottlenecks',
      'Predictive modeling for peak waiting time estimation',
      'Recommendation engine for optimal staffing levels',
      'Data visualization for queue performance metrics',
    ],
    github: 'https://github.com/sushanthks18/Campus-Queue-Waiting-Time-Problem-Analyzer.git',
    demo: '#',
  }
  
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      projectsRef.current.forEach((project, index) => {
        if (!project) return;
        
        gsap.fromTo(
          project,
          { 
            y: 80,
            opacity: 0 
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: project,
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
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          Technical case studies showcasing embedded systems, IoT, and full-stack development expertise
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            
            return (
              <div
                key={index}
                ref={(el) => { projectsRef.current[index] = el; }}
                className="card group hover:shadow-2xl hover:shadow-sky-500/20"
              >
                {/* Icon and title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-sky-500/10 rounded-lg group-hover:bg-sky-500/20 transition-colors">
                    <Icon className="w-8 h-8 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-50">{project.title}</h3>
                    <p className="text-sm text-sky-400">{project.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 mb-4">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-800 text-sky-400 text-xs font-medium rounded-full border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="text-sm text-slate-400 flex gap-2">
                      <span className="text-sky-500 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-slate-800">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-300 hover:text-sky-500 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  {project.demo && project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-300 hover:text-sky-500 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
