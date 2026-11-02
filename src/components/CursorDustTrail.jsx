import React, { useEffect, useRef } from 'react';

export default function CursorDustTrail({ isAncient = false }) {
  const canvasRef = useRef(null);
  const isAncientRef = useRef(isAncient);

  useEffect(() => {
    isAncientRef.current = isAncient;
  }, [isAncient]);

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

    // Palette 1: Modern Antigravity Stardust (Gold, Cyan, Magenta, White)
    const modernColors = [
      'rgba(245, 158, 11, ',   // Amber Gold
      'rgba(212, 175, 55, ',   // Royal Gold
      'rgba(0, 240, 255, ',    // Electric Cyan
      'rgba(255, 0, 85, ',     // Spider-Verse Pink
      'rgba(255, 255, 255, '   // Pure Stardust
    ];

    // Palette 2: Authentic Arabian Desert Sand Grains (Pharaoh Gold, Dune Silt, Amber Quartz, Terracotta)
    const arabianSandColors = [
      'rgba(212, 175, 55, ',   // Pharaonic Royal Gold
      'rgba(235, 198, 130, ',  // Sunlit Arabian Dune Sand
      'rgba(255, 226, 145, ',  // Glistening Desert Quartz
      'rgba(245, 158, 11, ',   // Amber Torchfire
      'rgba(196, 140, 75, ',   // Weathered Sandstone Terracotta
      'rgba(255, 248, 225, '   // White-Gold Sand Sparkle
    ];

    const particles = [];
    let orbitAngle = 0;
    let windTime = 0;
    let idleCounter = 0;

    const spawnSandGrain = (originX, originY, isClickBurst = false) => {
      const ancient = isAncientRef.current;
      const activeColors = ancient ? arabianSandColors : modernColors;
      const colorBase = activeColors[Math.floor(Math.random() * activeColors.length)];
      const spread = ancient ? 10 : 6;

      if (ancient) {
        // Authentic Desert Sand Physics
        const angle = isClickBurst ? Math.random() * Math.PI * 2 : (Math.random() - 0.5) * Math.PI;
        const speed = isClickBurst ? Math.random() * 3.8 + 1.2 : Math.random() * 1.4 + 0.3;

        particles.push({
          x: originX + (Math.random() - 0.5) * spread,
          y: originY + (Math.random() - 0.5) * spread,
          // Natural ballistic gravity: sand grains shower downwards with side desert wind drift
          vx: Math.cos(angle) * speed + (Math.random() * 0.8 + 0.3), // desert wind pushing right
          vy: Math.sin(angle) * speed + (isClickBurst ? 0.8 : Math.random() * 1.8 + 0.8), // gravity fall
          size: Math.random() * 1.8 + 0.7, // fine granular sand scale (0.7px to 2.5px)
          alpha: 1.0,
          decay: isClickBurst ? Math.random() * 0.025 + 0.016 : Math.random() * 0.02 + 0.012,
          colorBase,
          phase: Math.random() * Math.PI * 2,
          isSand: true,
          isFaceted: Math.random() > 0.28, // 72% crystalline faceted sand granules
          isSparkle: Math.random() > 0.8, // 20% sunlit crystal sparkles
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.22,
          gravity: 0.045
        });
      } else {
        // Modern Antigravity Upward Levitation
        particles.push({
          x: originX + (Math.random() - 0.5) * spread,
          y: originY + (Math.random() - 0.5) * spread,
          vx: (Math.random() - 0.5) * 1.2,
          vy: -Math.random() * 1.8 - 0.4,
          size: Math.random() * 2.8 + 1.2,
          alpha: 1.0,
          decay: Math.random() * 0.025 + 0.015,
          colorBase,
          phase: Math.random() * Math.PI * 2,
          isSand: false,
          isFaceted: false,
          isSparkle: false,
          rotation: 0,
          rotSpeed: 0,
          gravity: -0.012
        });
      }
    };

    const handleMouseMove = (e) => {
      mouse.visible = true;
      const dx = e.clientX - mouse.x;
      const dy = e.clientY - mouse.y;
      mouse.speed = Math.min(Math.sqrt(dx * dx + dy * dy), 40);

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
          target.closest('.mythic-tablet') ||
          target.closest('.arabian-tomb-tablet') ||
          target.closest('.matte-sand-btn')
        )
      );

      const ancient = isAncientRef.current;
      // Spawn particles along motion trajectory: sand kicks up in rich granular wake
      const count = ancient 
        ? Math.min(Math.floor(mouse.speed / 2.5) + 3, 9) 
        : Math.min(Math.floor(mouse.speed / 4) + 1, 4);

      for (let i = 0; i < count; i++) {
        spawnSandGrain(mouse.x, mouse.y, false);
      }
    };

    const handleMouseDown = () => {
      mouse.isDown = true;
      const ancient = isAncientRef.current;
      const burstCount = ancient ? 26 : 14;

      // Sand splash burst on click
      for (let i = 0; i < burstCount; i++) {
        spawnSandGrain(mouse.x, mouse.y, true);
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
      const ancient = isAncientRef.current;
      windTime += 0.035;
      idleCounter++;

      // In ancient mode, release an occasional gentle sand grain trickle even when idle
      if (ancient && mouse.visible && mouse.x > 0 && idleCounter % 4 === 0) {
        spawnSandGrain(mouse.x, mouse.y + 8, false);
      }

      // 1. Render Sand Grains / Dust Trail
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.isSand) {
          // Desert sand physics: ballistic gravity pulling down + gentle desert wind oscillation
          p.vy += p.gravity;
          p.vx += Math.sin(windTime + p.phase) * 0.035;
          p.rotation += p.rotSpeed;
        } else {
          // Modern upward levitation
          p.vy += p.gravity;
          p.vx += Math.sin(p.phase) * 0.04;
          p.phase += 0.08;
        }

        p.alpha -= p.decay;

        if (p.alpha <= 0 || p.y > height + 20) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);

        if (p.isSand) {
          if (p.isFaceted) {
            // Render sharp faceted crystalline sand grain (diamond/rhomboid)
            ctx.rotate(p.rotation);
            ctx.beginPath();
            ctx.moveTo(0, -p.size);
            ctx.lineTo(p.size * 0.75, 0);
            ctx.lineTo(0, p.size * 1.15);
            ctx.lineTo(-p.size * 0.75, 0);
            ctx.closePath();
            ctx.fillStyle = `${p.colorBase}${Math.max(0, p.alpha)})`;
            ctx.shadowBlur = 3;
            ctx.shadowColor = 'rgba(212, 175, 55, 0.65)';
            ctx.fill();

            // Sunlit sparkle glint on rotating facet
            if (p.isSparkle && Math.sin(p.rotation * 2) > 0.5) {
              ctx.beginPath();
              ctx.arc(0, 0, p.size * 0.45, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, p.alpha * 1.2)})`;
              ctx.shadowBlur = 6;
              ctx.shadowColor = '#FFE082';
              ctx.fill();
            }
          } else {
            // Fine round sand silt speck
            ctx.beginPath();
            ctx.arc(0, 0, p.size * 0.85, 0, Math.PI * 2);
            ctx.fillStyle = `${p.colorBase}${Math.max(0, p.alpha)})`;
            ctx.shadowBlur = 2;
            ctx.shadowColor = 'rgba(212, 175, 55, 0.5)';
            ctx.fill();
          }
        } else {
          // Modern glowing circular dust mote
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.colorBase}${p.alpha})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.colorBase.includes('240') ? 'rgba(0, 240, 255, 0.7)' : 'rgba(245, 158, 11, 0.7)';
          ctx.fill();
        }

        ctx.restore();
      }

      // 2. Render Main Cursor Reticle
      if (mouse.visible && mouse.x > 0 && mouse.y > 0) {
        orbitAngle += ancient ? 0.045 : 0.06;

        if (ancient) {
          // ========================================================
          // ANCIENT ARABIAN CURSOR: THE SUN SCARAB & COMPASS
          // ========================================================
          const coreSize = mouse.isDown ? 3 : mouse.isHovering ? 5 : 4;
          const ringRadius = mouse.isHovering ? 20 : 13;

          // Weathered Brass & Gold Solar Ring
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, ringRadius, 0, Math.PI * 2);
          ctx.strokeStyle = mouse.isHovering 
            ? 'rgba(255, 224, 130, 0.9)' 
            : 'rgba(212, 175, 55, 0.65)';
          ctx.lineWidth = mouse.isHovering ? 2 : 1.3;
          ctx.stroke();

          // 4 Pharaonic Solar Cardinal Notches
          for (let ray = 0; ray < 4; ray++) {
            const rayAngle = orbitAngle * 0.35 + (ray * Math.PI / 2);
            const innerX = mouse.x + Math.cos(rayAngle) * (ringRadius - 2);
            const innerY = mouse.y + Math.sin(rayAngle) * (ringRadius - 2);
            const outerX = mouse.x + Math.cos(rayAngle) * (ringRadius + 3.5);
            const outerY = mouse.y + Math.sin(rayAngle) * (ringRadius + 3.5);

            ctx.beginPath();
            ctx.moveTo(innerX, innerY);
            ctx.lineTo(outerX, outerY);
            ctx.strokeStyle = '#D4AF37';
            ctx.lineWidth = 1.3;
            ctx.stroke();
          }

          // Orbiting Golden Sand Crystal 1
          const sandX1 = mouse.x + Math.cos(orbitAngle) * (ringRadius + 3);
          const sandY1 = mouse.y + Math.sin(orbitAngle) * (ringRadius + 3);
          ctx.beginPath();
          ctx.arc(sandX1, sandY1, 2, 0, Math.PI * 2);
          ctx.fillStyle = '#FFE082';
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#D4AF37';
          ctx.fill();
          ctx.shadowBlur = 0;

          // Counter-orbiting Amber Sand Crystal 2
          const sandX2 = mouse.x + Math.cos(orbitAngle + Math.PI) * (ringRadius - 3.5);
          const sandY2 = mouse.y + Math.sin(orbitAngle + Math.PI) * (ringRadius - 3.5);
          ctx.beginPath();
          ctx.arc(sandX2, sandY2, 1.6, 0, Math.PI * 2);
          ctx.fillStyle = '#F59E0B';
          ctx.shadowBlur = 6;
          ctx.shadowColor = '#F59E0B';
          ctx.fill();
          ctx.shadowBlur = 0;

          // Central Radiant Desert Sun Core
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, coreSize, 0, Math.PI * 2);
          ctx.fillStyle = mouse.isHovering ? '#FFFBEB' : '#FDE68A';
          ctx.shadowBlur = mouse.isHovering ? 16 : 10;
          ctx.shadowColor = '#D4AF37';
          ctx.fill();
          ctx.shadowBlur = 0;

        } else {
          // ========================================================
          // MODERN CURSOR: ANTIGRAVITY STARDUST
          // ========================================================
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
