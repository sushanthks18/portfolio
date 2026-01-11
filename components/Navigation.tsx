'use client';

import { useState, useEffect } from 'react';
import { Github, Linkedin, Code2, Instagram } from 'lucide-react';

interface NavigationProps {
  onPanelOpen: (panel: string) => void;
}

export default function Navigation({ onPanelOpen }: NavigationProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleNavClick = (panel: string) => {
    onPanelOpen(panel);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="bg-slate-900/80 backdrop-blur-lg border-b border-slate-800 shadow-lg">
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <button
              onClick={scrollToTop}
              className="font-bold text-xl text-white hover:text-sky-400 transition-colors"
            >
              Sushanth K S
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              <button
                onClick={scrollToTop}
                className="px-4 py-2 text-slate-300 hover:text-sky-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="px-4 py-2 text-slate-300 hover:text-sky-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('projects')}
                className="px-4 py-2 text-slate-300 hover:text-sky-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => handleNavClick('skills')}
                className="px-4 py-2 text-slate-300 hover:text-sky-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
              >
                Skills
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="px-4 py-2 text-slate-300 hover:text-sky-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
              >
                Contact
              </button>
            </div>

            {/* Social Icons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://github.com/sushanthks18?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-800/50 rounded-lg transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sushanth-ks-02b406292/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-800/50 rounded-lg transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com/u/sushanthks/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-800/50 rounded-lg transition-all"
                aria-label="LeetCode"
              >
                <Code2 className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-sky-400 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2 border-t border-slate-800">
              <button
                onClick={scrollToTop}
                className="block w-full text-left px-4 py-2 text-slate-300 hover:text-sky-400 hover:bg-slate-800/50 rounded-lg transition-all"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="block w-full text-left px-4 py-2 text-slate-300 hover:text-sky-400 hover:bg-slate-800/50 rounded-lg transition-all"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('projects')}
                className="block w-full text-left px-4 py-2 text-slate-300 hover:text-sky-400 hover:bg-slate-800/50 rounded-lg transition-all"
              >
                Projects
              </button>
              <button
                onClick={() => handleNavClick('skills')}
                className="block w-full text-left px-4 py-2 text-slate-300 hover:text-sky-400 hover:bg-slate-800/50 rounded-lg transition-all"
              >
                Skills
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="block w-full text-left px-4 py-2 text-slate-300 hover:text-sky-400 hover:bg-slate-800/50 rounded-lg transition-all"
              >
                Contact
              </button>
              
              {/* Mobile Social Icons */}
              <div className="flex items-center gap-3 px-4 pt-4 border-t border-slate-800">
                <a
                  href="https://github.com/sushanthks18?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-800/50 rounded-lg transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sushanth-ks-02b406292/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-800/50 rounded-lg transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://leetcode.com/u/sushanthks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-800/50 rounded-lg transition-all"
                >
                  <Code2 className="w-5 h-5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
