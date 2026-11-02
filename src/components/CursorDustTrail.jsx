import React, { useEffect, useRef } from 'react';

export default function CursorDustTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Only activate custom particle cursor on devices with fine pointer (mouse/trackpad)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Apply custom cursor class to body
    document.body.classList.add('custom-dust-cursor');

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const mouse = {
      x: -100,
      y: -100,
      prevX: -100,
      prevY: -100,
      speed: 0,
      isHovering: false,
      isDown: false,
      visible: false
    };

    // Stardust colors: Gold, Cyan, Magenta, Alabaster
    const dustColors = [
      'rgba(245, 158, 11, ',   // Celestial Amber Gold
      'rgba(212, 175, 55, ',   // Ancient Royal Gold
      'rgba(0, 240, 255, ',    // Electric Cyan Starlight
      'rgba(255, 0, 85, ',     // Spider-Verse Pink Spark
      'rgba(255, 255, 255, '   // Pure Cosmic Stardust
    ];

    const particles = [];
    let orbitAngle = 0;

    const handleMouseMove = (e) => {
      mouse.visible = true;
      const dx = e.clientX - mouse.x;
      const dy = e.clientY - mouse.y;
      mouse.speed = Math.min(Math.sqrt(dx * dx + dy * dy), 35);

      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Check if hovering clickable elements
      const target = e.target;
      mouse.isHovering = !!(
        target && (
          target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[role="button"]') ||
          target.closest('.spider-btn') ||
          target.closest('.mythic-tablet')
        )
      );

      // Spawn dust particles along trajectory
      const count = Math.min(Math.floor(mouse.speed / 4) + 1, 4);
      for (let i = 0; i < count; i++) {
        const spread = 6;
        const colorBase = dustColors[Math.floor(Math.random() * dustColors.length)];
        particles.push({
          x: mouse.x + (Math.random() - 0.5) * spread,
          y: mouse.y + (Math.random() - 0.5) * spread,
          vx: (Math.random() - 0.5) * 1.2,
          vy: -Math.random() * 1.8 - 0.4, // float upwards (antigravity drift)
          size: Math.random() * 2.8 + 1.2,
          alpha: 1.0,
          decay: Math.random() * 0.025 + 0.015,
          colorBase,
          phase: Math.random() * Math.PI * 2
        });
      }
    };

    const handleMouseDown = () => {
      mouse.isDown = true;
      // Burst of dust particles on click
      for (let i = 0; i < 14; i++) {
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 3.5 + 1.2;
        const colorBase = dustColors[Math.floor(Math.random() * dustColors.length)];
        particles.push({
          x: mouse.x,
          y: mouse.y,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity - 1.2, // bias upwards
          size: Math.random() * 3.2 + 1.4,
          alpha: 1.0,
          decay: Math.random() * 0.03 + 0.02,
          colorBase,
          phase: Math.random() * Math.PI * 2
        });
      }
    };

    const handleMouseUp = () => {
      mouse.isDown = false;
    };

    const handleMouseLeave = () => {
      mouse.visible = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Render Floating Dust Trail
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.012; // continuous subtle upward antigravity acceleration
        p.vx += Math.sin(p.phase) * 0.04;
        p.phase += 0.08;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Draw soft glowing dust mote
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorBase}${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.colorBase.includes('240') ? 'rgba(0, 240, 255, 0.7)' : 'rgba(245, 158, 11, 0.7)';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 2. Render Main Particle Cursor (when inside window)
      if (mouse.visible && mouse.x > 0 && mouse.y > 0) {
        orbitAngle += 0.06;

        // Dynamic size on hover or click
        const coreSize = mouse.isDown ? 2.5 : mouse.isHovering ? 4.5 : 3.5;
        const ringRadius = mouse.isHovering ? 18 : 12;

        // Outer Frosted Halo
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, ringRadius, 0, Math.PI * 2);
        ctx.strokeStyle = mouse.isHovering 
          ? 'rgba(0, 240, 255, 0.65)' 
          : 'rgba(245, 158, 11, 0.45)';
        ctx.lineWidth = mouse.isHovering ? 1.8 : 1.2;
        ctx.stroke();

        // Orbiting micro dust spark
        const orbitX = mouse.x + Math.cos(orbitAngle) * (ringRadius + 2);
        const orbitY = mouse.y + Math.sin(orbitAngle) * (ringRadius + 2);
        ctx.beginPath();
        ctx.arc(orbitX, orbitY, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = '#00F0FF';
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#00F0FF';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Counter-orbiting secondary micro spark
        const orbitX2 = mouse.x + Math.cos(orbitAngle + Math.PI) * (ringRadius - 3);
        const orbitY2 = mouse.y + Math.sin(orbitAngle + Math.PI) * (ringRadius - 3);
        ctx.beginPath();
        ctx.arc(orbitX2, orbitY2, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = '#FF0055';
        ctx.shadowBlur = 4;
        ctx.shadowColor = '#FF0055';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Central Radiant Dust Core
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, coreSize, 0, Math.PI * 2);
        ctx.fillStyle = mouse.isHovering ? '#FFFFFF' : '#FFFBEB';
        ctx.shadowBlur = 12;
        ctx.shadowColor = mouse.isHovering ? '#00F0FF' : '#F59E0B';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      document.body.classList.remove('custom-dust-cursor');
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      aria-hidden="true"
    />
  );
}
