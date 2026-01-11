import { Cpu, Radio, Code, Terminal, Brain, Wrench } from 'lucide-react';

const skillCategories = [
  {
    icon: Cpu,
    title: 'Core ECE',
    skills: [
      { name: 'Digital Electronics', level: 85 },
      { name: 'Signals & Systems', level: 80 },
      { name: 'Control Systems', level: 75 },
      { name: 'Communication Theory', level: 75 },
      { name: 'Analog Circuits', level: 70 },
      { name: 'Microprocessors', level: 80 },
    ],
  },
  {
    icon: Radio,
    title: 'Embedded & IoT',
    skills: [
      { name: 'Embedded C', level: 85 },
      { name: 'Arduino', level: 90 },
      { name: 'ESP32', level: 85 },
      { name: 'Sensor Integration', level: 80 },
      { name: 'MQTT Protocol', level: 75 },
      { name: 'Hardware Debugging', level: 70 },
    ],
  },
  {
    icon: Code,
    title: 'Software Development',
    skills: [
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Next.js', level: 75 },
      { name: 'Flask', level: 70 },
    ],
  },
  {
    icon: Terminal,
    title: 'Programming',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'C', level: 80 },
      { name: 'C++', level: 75 },
      { name: 'Data Structures', level: 80 },
      { name: 'Algorithms', level: 75 },
      { name: 'Problem Solving', level: 85 },
    ],
  },
  {
    icon: Brain,
    title: 'AI & Data',
    skills: [
      { name: 'Machine Learning', level: 75 },
      { name: 'Random Forest', level: 80 },
      { name: 'Data Analysis', level: 75 },
      { name: 'NDVI Processing', level: 70 },
      { name: 'Model Training', level: 75 },
      { name: 'Data Visualization', level: 70 },
    ],
  },
  {
    icon: Wrench,
    title: 'Tools & Tech',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Linux', level: 70 },
      { name: 'Arduino IDE', level: 85 },
    ],
  },
];

export default function SkillsPanel() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-4xl font-bold gradient-text">Technical Skills</h2>
        <p className="text-slate-400 mt-2">Comprehensive skillset spanning hardware, software, and intelligent systems</p>
      </div>

      {/* Skills Categories */}
      <div className="space-y-6">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          
          return (
            <div key={index} className="card p-6">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-sky-500/10 rounded-lg">
                  <Icon className="w-6 h-6 text-sky-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-50">{category.title}</h3>
              </div>

              {/* Skills with Progress Bars */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 text-sm">{skill.name}</span>
                      <span className="text-sky-400 text-xs font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-sky-500 to-sky-600 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-sky-500/10 to-sky-600/10 border border-sky-500/30 rounded-xl p-6">
        <h3 className="text-xl font-bold text-slate-50 mb-3">💼 Professional Summary</h3>
        <p className="text-slate-300 leading-relaxed">
          Versatile engineer with expertise spanning <span className="text-sky-400 font-semibold">core electronics</span>, 
          <span className="text-sky-400 font-semibold"> embedded systems</span>, 
          <span className="text-sky-400 font-semibold"> IoT development</span>, and 
          <span className="text-sky-400 font-semibold"> full-stack software engineering</span>. 
          Proven ability to bridge hardware and software domains to deliver end-to-end solutions.
        </p>
      </div>
    </div>
  );
}
