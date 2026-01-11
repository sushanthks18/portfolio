'use client';

import { useState, useEffect } from 'react';
import { Sparkles, SparklesIcon } from 'lucide-react';

export default function AnimationToggle() {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference on mount
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setAnimationsEnabled(false);
    }

    // Listen for changes
    const handler = (e: MediaQueryListEvent) => {
      setAnimationsEnabled(!e.matches);
    };
    
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    // Set CSS variable for animations
    document.documentElement.style.setProperty(
      '--animations-enabled',
      animationsEnabled ? '1' : '0'
    );
  }, [animationsEnabled]);

  return (
    <button
      onClick={() => setAnimationsEnabled(!animationsEnabled)}
      className="fixed bottom-6 right-6 z-50 p-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-500"
      aria-label={`${animationsEnabled ? 'Disable' : 'Enable'} animations`}
      title={`${animationsEnabled ? 'Disable' : 'Enable'} circuit animations`}
    >
      {animationsEnabled ? (
        <Sparkles className="w-5 h-5 text-sky-400" />
      ) : (
        <SparklesIcon className="w-5 h-5 text-slate-400" />
      )}
    </button>
  );
}
