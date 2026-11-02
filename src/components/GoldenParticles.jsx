import React, { useEffect, useRef } from 'react';

export default function GoldenParticles({ className = "", mode = "modern" }) {
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

    const isDesert = mode === 'desert-sand';

    // Particle count: desert sand has more granular specks
    const particleCount = isDesert 
      ? Math.min(Math.floor(window.innerWidth / 16), 90)
      : Math.min(Math.floor(window.innerWidth / 22), 65);
    const particles = [];

    // Modern Multiverse vs. Arabian Desert Sand palette
    const modernColors = [
      { r: 245, g: 158, b: 11 },   // Amber Gold
      { r: 212, g: 175, b: 55 },   // Royal Ancient Gold
      { r: 0,   g: 240, b: 255 },  // Electric Cyan
      { r: 255, g: 0,   b: 85 },   // Spider Pink
      { r: 121, g: 40,  b: 202 }   // Multiverse Violet
    ];

    const desertSandColors = [
      { r: 212, g: 175, b: 55 },   // Pharaonic Royal Gold
      { r: 232, g: 198, b: 135 },  // Golden Dune Silt
      { r: 255, g: 228, b: 150 },  // Sunlit Quartz Glimmer
      { r: 245, g: 158, b: 11 },   // Amber Torch Ember
      { r: 185, g: 130, b: 72 },   // Sandstone Terracotta
      { r: 255, g: 248, b: 220 }   // Desert Sand Crystal
    ];

    const colors = isDesert ? desertSandColors : modernColors;

    for (let i = 0; i < particleCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: isDesert ? Math.random() * 1.8 + 0.6 : Math.random() * 2.2 + 0.8,
        color,
        alpha: Math.random() * 0.5 + 0.2,
        baseAlpha: Math.random() * 0.5 + 0.2,
        // Desert sand drifts horizontally with desert wind; modern floats up
        vx: isDesert 
          ? Math.random() * 0.8 + 0.35 // wind blowing from left to right
          : (Math.random() - 0.5) * 0.4,
        vy: isDesert 
          ? Math.random() * 0.35 - 0.05 // gentle drifting down
          : -Math.random() * 0.6 - 0.15, // constant upward levitation
        phase: Math.random() * Math.PI * 2,
        waveSpeed: 0.015 + Math.random() * 0.02,
        waveAmp: isDesert ? 0.2 + Math.random() * 0.25 : 0.35 + Math.random() * 0.4,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.08,
        isFaceted: isDesert && Math.random() > 0.4
      });
    }

    // Mouse repulsion field
    let mouse = { x: -1000, y: -1000, radius: 110 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw constellation threads ONLY in modern mode (never in desert sand)
      if (!isDesert) {
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
      }

      // 2. Update and draw sand / floating particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx + Math.sin(p.phase) * p.waveAmp;
        p.y += p.vy;
        p.phase += p.waveSpeed;
        p.rotation += p.rotSpeed;

        // Shimmering alpha pulse
        p.alpha = p.baseAlpha + Math.sin(p.phase * 1.5) * 0.14;

        // Mouse repulsion
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * (isDesert ? 2.5 : 4);
          p.y -= (dy / dist) * force * (isDesert ? 2.5 : 4);
        }

        // Screen wrap
        if (isDesert) {
          if (p.x > width + 20) p.x = -20;
          if (p.y > height + 20) p.y = -20;
          if (p.y < -20) p.y = height + 20;
        } else {
          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
        }

        // Draw particle
        ctx.save();
        ctx.translate(p.x, p.y);

        if (p.isFaceted) {
          // Sharp faceted desert sand crystal
          ctx.rotate(p.rotation);
          ctx.beginPath();
          ctx.moveTo(0, -p.radius);
          ctx.lineTo(p.radius * 0.85, 0);
          ctx.lineTo(0, p.radius);
          ctx.lineTo(-p.radius * 0.85, 0);
          ctx.closePath();
          ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${Math.max(0, p.alpha)})`;
          ctx.fill();
        } else {
          // Circular silt / stardust particle
          ctx.beginPath();
          ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${Math.max(0, p.alpha)})`;
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mode]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      aria-hidden="true"
    />
  );
}
