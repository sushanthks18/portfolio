import { Sprout, Droplets, Calculator, Github, ExternalLink, Award } from 'lucide-react';

const projects = [
  {
    icon: Sprout,
    title: 'Krishi Sakha',
    subtitle: 'IoT Smart Farming Solution',
    description: 'Full-stack IoT platform for precision agriculture with real-time monitoring and ML-powered crop recommendations.',
    tech: ['ESP32', 'Sensors', 'Random Forest ML', 'MongoDB', 'React', 'Node.js'],
    achievements: [
      '90.4% ML model accuracy for crop recommendations',
      'Real-time environmental monitoring system',
      'Full-stack implementation from hardware to cloud',
      'Best Mini Project Award Winner',
    ],
    github: 'https://github.com/sushanthks18/krishisakha-an-iot-based-farm-assistan',
    demo: 'https://krishi-sakha.vercel.app',
  },
  {
    icon: Droplets,
    title: 'AquaAdvisor',
    subtitle: 'AI Irrigation Advisory System',
    description: 'Satellite imagery-based irrigation advisory using NDVI analysis and machine learning for water optimization.',
    tech: ['Python', 'Sentinel-2', 'NDVI', 'Flask', 'Data Processing'],
    achievements: [
      'Sentinel-2 satellite imagery processing',
      'Automated water stress detection',
      'Python Flask backend for data pipeline',
      'Water conservation through data-driven insights',
    ],
    github: 'https://github.com/sushanthks18/AquaAdvisor-AI-Powered-Water-Use-Efficiency-Advisor-for-Agriculture',
    demo: 'https://aquai-saha.vercel.app',
  },
  {
    icon: Calculator,
    title: 'Digital Calculator',
    subtitle: 'Embedded System Project',
    description: 'Arduino-based digital calculator demonstrating microcontroller interfacing and embedded system design fundamentals.',
    tech: ['Arduino', 'Embedded C', 'LCD Display', 'Keypad Interface'],
    achievements: [
      'Custom LCD and keypad interfacing',
      'Efficient embedded C programming',
      'Hardware-software integration',
      'Hands-on microcontroller experience',
    ],
    github: 'https://github.com/sushanthks18/digital-calculator',
    demo: null,
  },
];

export default function ProjectsPanel() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-4xl font-bold gradient-text">Featured Projects</h2>
        <p className="text-slate-400 mt-2">Technical case studies showcasing hardware and software expertise</p>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {projects.map((project, index) => {
          const Icon = project.icon;
          
          return (
            <div key={index} className="card p-6 hover:border-sky-500/50 transition-all">
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-sky-500/10 rounded-lg">
                  <Icon className="w-8 h-8 text-sky-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-50">{project.title}</h3>
                  <p className="text-sky-400 font-semibold">{project.subtitle}</p>
                </div>
                {index === 0 && (
                  <div className="flex items-center gap-1 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-xs">
                    <Award className="w-4 h-4" />
                    <span>Award Winner</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-slate-300 mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-800 text-sky-400 text-sm rounded-full border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Achievements */}
              <div className="bg-slate-800/30 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-slate-300 mb-2">Key Achievements:</p>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-slate-400 flex gap-2">
                      <span className="text-sky-400 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-sky-400 rounded-lg transition-all"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* More Projects CTA */}
      <div className="text-center pt-6">
        <a
          href="https://github.com/sushanthks18?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center gap-2"
        >
          <Github className="w-5 h-5" />
          View All Projects on GitHub
        </a>
      </div>
    </div>
  );
}
