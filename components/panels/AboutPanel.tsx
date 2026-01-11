import Image from 'next/image';
import { GraduationCap, Target, Wrench, Download } from 'lucide-react';

export default function AboutPanel() {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold gradient-text">About Sushanth K S</h2>

      {/* Profile Card */}
      <div className="card p-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <div className="relative w-32 h-32 flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 opacity-20 blur-xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-sky-500/30">
              <Image
                src="/profile.jpg"
                alt="Sushanth K S"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-slate-50">Sushanth K S</h3>
            <p className="text-sky-400 font-semibold mt-1">3rd Year ECE Student</p>
            <p className="text-slate-300 mt-2">
              Siddaganga Institute of Technology
            </p>
            <p className="text-slate-400 mt-1">
              <span className="text-sky-400 font-semibold">Graduating:</span> 2027
            </p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="card p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-sky-500/10 rounded-lg">
            <GraduationCap className="w-6 h-6 text-sky-500" />
          </div>
          <h3 className="text-xl font-bold text-slate-50">Education</h3>
        </div>
        <div className="space-y-3 pl-12">
          <div>
            <p className="font-semibold text-slate-200">B.Tech in Electronics & Communication Engineering</p>
            <p className="text-slate-400 text-sm">Siddaganga Institute of Technology, Tumkur</p>
            <p className="text-sky-400 text-sm">2023 - 2027 </p>
          </div>
        </div>
      </div>

      {/* Core Strengths */}
      <div className="card p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-sky-500/10 rounded-lg">
            <Target className="w-6 h-6 text-sky-500" />
          </div>
          <h3 className="text-xl font-bold text-slate-50">Core ECE Strengths</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-12">
          {[
            'Digital Electronics',
            'Signals & Systems',
            'Control Systems',
            'Communication Theory',
            'Analog Circuits',
            'Microprocessors',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-sky-400" />
              <span className="text-slate-300">{item}</span>
            </div>
          ))}
        </div>
      </div>
      {/* software Strengths */}
      <div className="card p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-sky-500/10 rounded-lg">
            <Target className="w-6 h-6 text-sky-500" />
          </div>
          <h3 className="text-xl font-bold text-slate-50">Software & Programming Strengths</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-12">
          {[
            'Strong foundation in Computer Science fundamentals (DSA, OOPS, DBMS basics)',
            'Problem solving using Data Structures & Algorithms',
            'Frontend development with React.js, Next.js, HTML, CSS, Tailwind CSS',
            'Programming in C++, Python, JavaScript',
            'Backend & API fundamentals using Node.js and REST APIs',
            'Database basics with MongoDB',
            'Understanding of software development lifecycle and version control (Git)' ,
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-sky-400" />
              <span className="text-slate-300">{item}</span>
            </div>
          ))}
        </div>
      </div>


      {/* Hands-on Experience */}
      <div className="card p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-sky-500/10 rounded-lg">
            <Wrench className="w-6 h-6 text-sky-500" />
          </div>
          <h3 className="text-xl font-bold text-slate-50">Hands-on Experience</h3>
        </div>
        <div className="space-y-3 pl-12">
          <div>
            <p className="font-semibold text-slate-200">Embedded Systems & IoT</p>
            <p className="text-slate-400 text-sm">Embedded C, Arduino, ESP32, Sensor Integration</p>
          </div>
          <div>
            <p className="font-semibold text-slate-200">Full-stack Development</p>
            <p className="text-slate-400 text-sm">JavaScript, TypeScript, React, Node.js, MongoDB</p>
          </div>
          <div>
            <p className="font-semibold text-slate-200">AI/ML Applications</p>
            <p className="text-slate-400 text-sm">Machine Learning, Random Forest, Data Analysis, Python</p>
          </div>
        </div>
      </div>

      {/* Career Goals */}
      <div className="bg-gradient-to-r from-sky-500/10 to-sky-600/10 border border-sky-500/30 rounded-xl p-6">
        <h3 className="text-xl font-bold text-slate-50 mb-4">🎯 Career Goals</h3>
        <div className="space-y-3 text-slate-300">
          <p>
            <span className="text-sky-400 font-semibold">Summer 2026:</span> Seeking internship opportunities in Core ECE, Embedded Systems, IoT, or Software Development
          </p>
          <p>
            <span className="text-sky-400 font-semibold">Full-time 2027:</span> Available for roles from June 2027 in Embedded Systems, AI-Engineering, and Full-stack Development
          </p>
          <p className="text-sm text-slate-400 italic mt-4">
            "Passionate about bridging hardware and software to build intelligent systems that solve real-world problems"
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/resume.pdf"
          download
          className="btn-primary inline-flex items-center justify-center gap-2"
        >
          <Download className="w-5 h-5" />
          Download Resume
        </a>
        <button
          onClick={() => window.open('https://www.linkedin.com/in/sushanth-ks-02b406292/', '_blank')}
          className="btn-secondary inline-flex items-center justify-center gap-2"
        >
          View LinkedIn Profile
        </button>
      </div>
    </div>
  );
}
