import React, { useEffect, useRef } from 'react';

export default function GoldenParticles({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Antigravity particles: floating upwards, floating embers, cosmic stardust
    const particleCount = Math.min(Math.floor(window.innerWidth / 22), 65);
    const particles = [];

    const colors = [
      { r: 245, g: 158, b: 11 },   // Celestial Amber Gold
      { r: 212, g: 175, b: 55 },   // Royal Ancient Gold
      { r: 0,   g: 240, b: 255 },  // Electric Cyan
      { r: 255, g: 0,   b: 85 },   // Spider Pink
      { r: 121, g: 40,  b: 202 }   // Multiverse Violet
    ];

    for (let i = 0; i < particleCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.2 + 0.8,
        color,
        alpha: Math.random() * 0.45 + 0.15,
        baseAlpha: Math.random() * 0.45 + 0.15,
        // Antigravity upward physics
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.6 - 0.15, // constant upward levitation
        phase: Math.random() * Math.PI * 2,
        waveSpeed: 0.015 + Math.random() * 0.02,
        waveAmp: 0.35 + Math.random() * 0.4,
        depth: Math.random() // for depth-of-field
      });
    }

    // Mouse antigravity repulsion field
    let mouse = { x: -1000, y: -1000, radius: 130 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle antigravity constellation threads between nearby motes
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 85) {
            const lineAlpha = (1 - dist / 85) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // 2. Update and draw floating antigravity particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Harmonic horizontal sway (levitation bobbing)
        p.x += p.vx + Math.sin(p.phase) * p.waveAmp;
        p.y += p.vy;
        p.phase += p.waveSpeed;

        // Shimmering alpha pulse
        p.alpha = p.baseAlpha + Math.sin(p.phase * 1.5) * 0.12;

        // Antigravity mouse repulsion
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          // Float away and upward
          p.x -= (dx / dist) * force * 2.5;
          p.y -= ((dy / dist) * force * 2.5) + 0.8;
        }

        // Boundary wrap: when floating off the top, reappear smoothly at the bottom
        if (p.y < -20) {
          p.y = height + 15;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 15;
        if (p.x > width + 20) p.x = -15;

        // Draw particle with soft glow
        const c = p.color;
        const glowRadius = p.radius * (1.8 + p.depth);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${Math.max(0.05, p.alpha)})`;
        ctx.shadowBlur = glowRadius * 3;
        ctx.shadowColor = `rgba(${c.r}, ${c.g}, ${c.b}, 0.5)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-10 ${className}`}
      aria-hidden="true"
    />
  );
}
