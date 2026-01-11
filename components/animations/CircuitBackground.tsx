'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export default function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Circuit nodes
    const nodes: { x: number; y: number; radius: number }[] = [];
    const nodeCount = 20;
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 2,
      });
    }

    // Data packets
    const packets: { x: number; y: number; targetIndex: number; progress: number }[] = [];
    for (let i = 0; i < 5; i++) {
      packets.push({
        x: nodes[0].x,
        y: nodes[0].y,
        targetIndex: Math.floor(Math.random() * nodeCount),
        progress: Math.random(),
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        ctx.fillStyle = 'rgba(14, 165, 233, 0.3)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Glow effect
        ctx.fillStyle = 'rgba(14, 165, 233, 0.1)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Animate and draw packets
      packets.forEach((packet) => {
        const startNode = nodes[packet.targetIndex];
        const endNode = nodes[(packet.targetIndex + 1) % nodes.length];
        
        packet.progress += 0.005;
        if (packet.progress > 1) {
          packet.progress = 0;
          packet.targetIndex = Math.floor(Math.random() * nodeCount);
        }
        
        packet.x = startNode.x + (endNode.x - startNode.x) * packet.progress;
        packet.y = startNode.y + (endNode.y - startNode.y) * packet.progress;
        
        // Draw packet
        ctx.fillStyle = 'rgba(0, 245, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(packet.x, packet.y, 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Trail
        ctx.fillStyle = 'rgba(0, 245, 255, 0.3)';
        ctx.beginPath();
        ctx.arc(packet.x, packet.y, 6, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches && containerRef.current) {
      containerRef.current.style.display = 'none';
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-20"
      />
    </div>
  );
}
