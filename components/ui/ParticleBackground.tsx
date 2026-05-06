"use client";

import React, { useRef, useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  length: number;
  angle: number;
  color: string;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Adjust particle count based on screen size
      const particleCount = Math.floor((canvas.width * canvas.height) / 8000);
      particles = [];

      // Color palette similar to the screenshot
      const colors = ["#2563eb", "#3b82f6", "#60a5fa", "#818cf8"];

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: 0,
          vy: 0,
          size: Math.random() * 1.5 + 1, // thickness
          length: Math.random() * 6 + 4, // length of the dash
          angle: -Math.PI / 6 + (Math.random() * 0.2 - 0.1), // slightly varied angle ~ -30 degrees
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Calculate distance to mouse
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRef.current.radius) {
          // Calculate force
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
          
          // Repel force intensity
          const repelIntensity = 7;
          const pushX = forceDirectionX * force * -repelIntensity;
          const pushY = forceDirectionY * force * -repelIntensity;

          p.vx += pushX;
          p.vy += pushY;
        }

        // Return to origin force
        const returnForce = 0.05;
        p.vx += (p.originX - p.x) * returnForce;
        p.vy += (p.originY - p.y) * returnForce;

        // Friction
        const friction = 0.85;
        p.vx *= friction;
        p.vy *= friction;

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Draw particle
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        // Draw a rounded rectangle for a dash effect
        ctx.roundRect(-p.length / 2, -p.size / 2, p.length, p.size, p.size / 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    init();
    draw();

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
}
