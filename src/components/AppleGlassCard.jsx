import React, { useRef, useEffect } from 'react';

/**
 * AppleGlassCard (Pristine, Ultra-Smooth & Zero-Fluctuation)
 * 
 * Implements high-performance Apple visionOS glassmorphism:
 * 1. Stationary Outer Hitbox: All pointer events are bound to containerRef (stationary layout box),
 *    completely eliminating boundary thrashing, edge-oscillation, and mouseenter/mouseleave flutter.
 * 2. GPU translate3d Glare: Glare spotlight uses a pre-rendered high-res circle translated via
 *    GPU compositing (translate3d), completely eliminating CSS radial-gradient re-parsing and raster churn.
 * 3. Smart Sleep Physics: Lerp damping loop automatically pauses when values settle, eliminating
 *    continuous DOM style mutations, sub-pixel jitter, and CPU/GPU resource waste when idle.
 * 4. Flat Composition Surface: Eliminates transform-style: preserve-3d to ensure Chromium's backdrop-filter
 *    never drops frames, flickers, or suffers from black-box buffer invalidation.
 */
export default function AppleGlassCard({ 
  children, 
  className = '', 
  glowColor = 'rgba(0, 240, 255, 0.22)', 
  maxTilt = 6,
  scale = 1.012
}) {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const glareRef = useRef(null);

  const state = useRef({
    isHovered: false,
    // Target endpoints
    targetRotateX: 0,
    targetRotateY: 0,
    targetScale: 1,
    targetGlareX: 0,
    targetGlareY: 0,
    targetGlareOpacity: 0,
    // Interpolated current values
    currentRotateX: 0,
    currentRotateY: 0,
    currentScale: 1,
    currentGlareX: 0,
    currentGlareY: 0,
    currentGlareOpacity: 0,
    rafId: null,
    isAnimating: false,
  });

  useEffect(() => {
    // Disable interactive tilt on coarse pointer devices (touchscreens)
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return;

    const container = containerRef.current;
    const card = cardRef.current;
    const glare = glareRef.current;
    if (!container || !card) return;

    const s = state.current;
    const LERP = 0.12;

    const renderLoop = () => {
      // Fluid linear interpolation (Lerp)
      s.currentRotateX += (s.targetRotateX - s.currentRotateX) * LERP;
      s.currentRotateY += (s.targetRotateY - s.currentRotateY) * LERP;
      s.currentScale += (s.targetScale - s.currentScale) * LERP;
      s.currentGlareX += (s.targetGlareX - s.currentGlareX) * LERP;
      s.currentGlareY += (s.targetGlareY - s.currentGlareY) * LERP;
      s.currentGlareOpacity += (s.targetGlareOpacity - s.currentGlareOpacity) * LERP;

      // Apply 3D perspective tilt & scale
      card.style.transform = `perspective(1000px) rotateX(${s.currentRotateX.toFixed(3)}deg) rotateY(${s.currentRotateY.toFixed(3)}deg) scale3d(${s.currentScale.toFixed(4)}, ${s.currentScale.toFixed(4)}, 1)`;

      // Apply GPU-accelerated specular glare spotlight position
      if (glare) {
        glare.style.transform = `translate3d(${s.currentGlareX.toFixed(1)}px, ${s.currentGlareY.toFixed(1)}px, 0)`;
        glare.style.opacity = s.currentGlareOpacity.toFixed(3);
      }

      // Check if settled:
      // When hovered: if distance to target is sub-pixel, snap and pause loop
      // When unhovered: if returned to neutral, snap to idle and pause loop
      const deltaX = Math.abs(s.targetRotateX - s.currentRotateX);
      const deltaY = Math.abs(s.targetRotateY - s.currentRotateY);
      const deltaScale = Math.abs(s.targetScale - s.currentScale);
      const deltaGlare = Math.abs(s.targetGlareOpacity - s.currentGlareOpacity);

      const hasSettled = deltaX < 0.005 && deltaY < 0.005 && deltaScale < 0.0005 && deltaGlare < 0.005;

      if (hasSettled) {
        s.currentRotateX = s.targetRotateX;
        s.currentRotateY = s.targetRotateY;
        s.currentScale = s.targetScale;
        s.currentGlareOpacity = s.targetGlareOpacity;

        if (!s.isHovered) {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
          if (glare) glare.style.opacity = '0';
        } else {
          card.style.transform = `perspective(1000px) rotateX(${s.currentRotateX.toFixed(3)}deg) rotateY(${s.currentRotateY.toFixed(3)}deg) scale3d(${s.currentScale.toFixed(4)}, ${s.currentScale.toFixed(4)}, 1)`;
          if (glare) glare.style.opacity = s.currentGlareOpacity.toFixed(3);
        }

        s.isAnimating = false;
        return;
      }

      // Continue animating
      s.rafId = requestAnimationFrame(renderLoop);
    };

    const wakeLoop = () => {
      if (!s.isAnimating) {
        s.isAnimating = true;
        s.rafId = requestAnimationFrame(renderLoop);
      }
    };

    const handlePointerEnter = (e) => {
      s.isHovered = true;
      s.targetScale = scale;
      s.targetGlareOpacity = 0.85;

      const rect = container.getBoundingClientRect();
      const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
      const y = Math.max(0, Math.min(rect.height, e.clientY - rect.top));
      s.currentGlareX = x;
      s.currentGlareY = y;
      s.targetGlareX = x;
      s.targetGlareY = y;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      s.targetRotateX = ((y - centerY) / centerY) * -maxTilt;
      s.targetRotateY = ((x - centerX) / centerX) * maxTilt;

      wakeLoop();
    };

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
      const y = Math.max(0, Math.min(rect.height, e.clientY - rect.top));

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      s.targetRotateX = ((y - centerY) / centerY) * -maxTilt;
      s.targetRotateY = ((x - centerX) / centerX) * maxTilt;
      s.targetGlareX = x;
      s.targetGlareY = y;
      s.targetScale = scale;
      s.targetGlareOpacity = 0.85;

      wakeLoop();
    };

    const handlePointerLeave = () => {
      s.isHovered = false;
      s.targetRotateX = 0;
      s.targetRotateY = 0;
      s.targetScale = 1;
      s.targetGlareOpacity = 0;
      wakeLoop();
    };

    container.addEventListener('pointerenter', handlePointerEnter, { passive: true });
    container.addEventListener('pointermove', handlePointerMove, { passive: true });
    container.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    return () => {
      container.removeEventListener('pointerenter', handlePointerEnter);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerleave', handlePointerLeave);
      if (s.rafId) cancelAnimationFrame(s.rafId);
    };
  }, [maxTilt, scale]);

  return (
    <div
      ref={containerRef}
      className={`relative [perspective:1200px] my-5 ${className.includes('h-full') ? 'h-full flex flex-col' : ''}`}
    >
      <div
        ref={cardRef}
        style={{
          transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          willChange: 'transform',
        }}
        className={`apple-glass-card p-4 sm:p-5 rounded-2xl text-white font-mono relative overflow-hidden select-none cursor-default ${className}`}
      >
        {/* Dynamic Specular Spotlight Glare (GPU translate3d composited) */}
        <div
          ref={glareRef}
          aria-hidden="true"
          className="pointer-events-none absolute -left-[200px] -top-[200px] w-[400px] h-[400px] rounded-full z-20"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.08) 40%, transparent 70%)',
            opacity: 0,
            willChange: 'transform, opacity',
            transform: 'translate3d(0, 0, 0)',
          }}
        />

        {/* Ambient colored blur glow behind the frosted glass */}
        <div 
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 -right-10 w-44 h-44 rounded-full blur-[45px] opacity-25 z-0"
          style={{ backgroundColor: glowColor }}
        />

        {/* Apple Sub-pixel Specular Glass Rim Refraction */}
        <div className="glass-reflection z-10 pointer-events-none" />

        {/* Elevated Content Container */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}
