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

    // Particle settings: Spider-Verse chromatic motes & Genshin starlight
    const particleCount = Math.min(Math.floor(window.innerWidth / 28), 50);
    const particles = [];

    const colors = [
      'rgba(0, 240, 255, ',    // electric spider cyan
      'rgba(255, 0, 85, ',     // spider-verse magenta pink
      'rgba(245, 158, 11, ',   // genshin celestial amber/gold
      'rgba(121, 40, 202, ',   // multiverse violet
      'rgba(56, 189, 248, '    // anime anemo sky
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.0 + 0.6,
        colorBase: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.4 + 0.15,
        baseAlpha: Math.random() * 0.4 + 0.15,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -Math.random() * 0.45 - 0.1, // float upward like anime wind motes
        phase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02
      });
    }

    // Mouse interaction
    let mouse = { x: -1000, y: -1000, radius: 100 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.phase += p.pulseSpeed;

        // Subtle shimmering pulse
        p.alpha = p.baseAlpha + Math.sin(p.phase) * 0.12;

        // Gentle mouse interaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
        }

        // Wrap around boundaries
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Draw soft glowing starlight particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorBase}${Math.max(0.04, p.alpha)})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = p.colorBase.includes('240') ? 'rgba(0, 240, 255, 0.4)' : 'rgba(255, 0, 85, 0.4)';
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
      className={`fixed inset-0 pointer-events-none z-20 ${className}`}
      aria-hidden="true"
    />
  );
}
