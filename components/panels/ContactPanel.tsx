import { Mail, Github, Linkedin, Code2, MapPin, Phone, ExternalLink, Copy } from 'lucide-react';
import { useState } from 'react';

export default function ContactPanel() {
  const [copied, setCopied] = useState(false);
  const email = 'sushanthks804@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold gradient-text">Let's Connect</h2>
        <p className="text-slate-400 mt-2">Open to exciting opportunities and collaborations</p>
      </div>

      {/* Career Status */}
      <div className="bg-gradient-to-r from-sky-500/10 to-sky-600/10 border border-sky-500/30 rounded-xl p-6 text-center">
        <h3 className="text-2xl font-bold text-slate-50 mb-4">🎯 Currently Seeking</h3>
        <div className="space-y-3 text-slate-300">
          <p>
            <span className="text-sky-400 font-semibold text-lg">Summer 2026 Internships</span>
          </p>
          <p className="text-sm">
            Available for 2-3 month internships in Core ECE, Embedded Systems, IoT, or Software Development
          </p>
          <div className="my-4 border-t border-sky-500/20" />
          <p>
            <span className="text-sky-400 font-semibold text-lg">Full-time Roles from June 2027</span>
          </p>
          <p className="text-sm">
            Open to Embedded Systems, AI-Engineering, and Full-stack Development positions
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="space-y-4">
        {/* Email */}
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-sky-500/10 rounded-lg">
              <Mail className="w-5 h-5 text-sky-500" />
            </div>
            <h3 className="text-lg font-semibold text-slate-50">Email</h3>
          </div>
          <p className="text-slate-300 mb-3 font-mono text-sm">{email}</p>
          <div className="flex gap-2">
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-sky-400 rounded-lg transition-all"
            >
              <Copy className="w-4 h-4" />
              {copied ? 'Copied!' : 'Copy'}
            </button>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sushanthks804@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition-all"
            >
              <Mail className="w-4 h-4" />
              Send Email
            </a>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-sky-500/10 rounded-lg">
              <Linkedin className="w-5 h-5 text-sky-500" />
            </div>
            <h3 className="text-lg font-semibold text-slate-50">LinkedIn</h3>
          </div>
          <p className="text-slate-400 text-sm mb-3">Connect with me professionally</p>
          <a
            href="https://www.linkedin.com/in/sushanth-ks-02b406292/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-sky-400 rounded-lg transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            Visit Profile
          </a>
        </div>

        {/* GitHub */}
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-sky-500/10 rounded-lg">
              <Github className="w-5 h-5 text-sky-500" />
            </div>
            <h3 className="text-lg font-semibold text-slate-50">GitHub</h3>
          </div>
          <p className="text-slate-400 text-sm mb-3">Check out my code and projects</p>
          <a
            href="https://github.com/sushanthks18?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-sky-400 rounded-lg transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            View Repositories
          </a>
        </div>

        {/* LeetCode */}
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-sky-500/10 rounded-lg">
              <Code2 className="w-5 h-5 text-sky-500" />
            </div>
            <h3 className="text-lg font-semibold text-slate-50">LeetCode</h3>
          </div>
          <p className="text-slate-400 text-sm mb-3">View my coding profile</p>
          <a
            href="https://leetcode.com/u/sushanthks/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-sky-400 rounded-lg transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            View Profile
          </a>
        </div>
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
        <div className="flex items-center gap-3 text-slate-400">
          <MapPin className="w-5 h-5 text-sky-500" />
          <span>Tumkur, Karnataka</span>
        </div>
        <div className="flex items-center gap-3 text-slate-400">
          <Phone className="w-5 h-5 text-sky-500" />
          <span>+91 90192 95870</span>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center pt-6 border-t border-slate-800">
        <p className="text-slate-500 text-sm italic">
          Looking forward to discussing how I can contribute to your team!
        </p>
      </div>
    </div>
  );
}
