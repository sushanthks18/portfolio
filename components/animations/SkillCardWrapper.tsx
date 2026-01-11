'use client';

import { ReactNode, useState } from 'react';

interface SkillCardWrapperProps {
  children: ReactNode;
}

export default function SkillCardWrapper({ children }: SkillCardWrapperProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover glow effect */}
      {isHovered && (
        <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-sky-600 rounded-xl opacity-30 blur-lg transition-opacity duration-300 pointer-events-none" />
      )}
      
      {/* Circuit trace animation on hover */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            style={{ opacity: 0.3 }}
          >
            <path
              d="M 0 0 L 100 0 L 100 100 L 0 100 Z"
              fill="none"
              stroke="#00f5ff"
              strokeWidth="1"
              strokeDasharray="5,5"
              className="animate-[dash_1s_linear_infinite]"
            />
          </svg>
        </div>
      )}

      {/* Original content - untouched */}
      <div className={`relative transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}>
        {children}
      </div>

      {/* Particle burst on hover */}
      {isHovered && (
        <>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-sky-400 rounded-full animate-ping pointer-events-none"
              style={{
                top: '50%',
                left: '50%',
                animationDelay: `${i * 0.1}s`,
                transform: `rotate(${i * 45}deg) translateX(40px)`,
              }}
            />
          ))}
        </>
      )}
    </div>
  );
}
