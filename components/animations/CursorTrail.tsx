'use client';

import { useEffect, useRef } from 'react';

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<{ x: number; y: number; life: number }[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only show on desktop
    if (window.innerWidth < 768) return;

    // Check for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Add new point
      pointsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        life: 1,
      });
    };

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw points
      pointsRef.current = pointsRef.current.filter((point) => {
        point.life -= 0.02;
        
        if (point.life <= 0) return false;

        // Draw circuit trace
        ctx.strokeStyle = `rgba(0, 245, 255, ${point.life * 0.5})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
        ctx.stroke();

        // Glow effect
        ctx.fillStyle = `rgba(14, 165, 233, ${point.life * 0.2})`;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 8, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      // Connect recent points
      if (pointsRef.current.length > 1) {
        ctx.strokeStyle = 'rgba(0, 245, 255, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(pointsRef.current[0].x, pointsRef.current[0].y);
        
        for (let i = 1; i < Math.min(pointsRef.current.length, 10); i++) {
          ctx.lineTo(pointsRef.current[i].x, pointsRef.current[i].y);
        }
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none hidden md:block"
      style={{ zIndex: 50 }}
    />
  );
}
