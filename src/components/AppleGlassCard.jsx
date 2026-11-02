import React, { useRef, useEffect } from 'react';

/**
 * AppleGlassCard (Optimized & Butter-Smooth)
 * 
 * Implements high-performance Apple visionOS / Apple Card interactive glassmorphism:
 * - Direct DOM manipulation via Refs (Zero React re-renders during mouse move)
 * - Fluid Lerp (Linear Interpolation) damping physics for liquid-smooth 60/120fps tracking
 * - Real-time specular spotlight reflection glare
 * - Sub-pixel illuminated glass border refraction & inner 3D parallax depth
 * - Automatically throttles and stops rendering when idle to preserve GPU resources
 */
export default function AppleGlassCard({ 
  children, 
  className = '', 
  glowColor = 'rgba(0, 240, 255, 0.22)', 
  maxTilt = 8,
  scale = 1.015
}) {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const contentRef = useRef(null);

  // Physics state (stored in ref to eliminate React render overhead)
  const state = useRef({
    isHovered: false,
    mouseX: 0,
    mouseY: 0,
    rect: null,
    // Target values
    targetRotateX: 0,
    targetRotateY: 0,
    targetScale: 1,
    targetGlareX: 50,
    targetGlareY: 50,
    targetGlareOpacity: 0,
    // Current interpolated values (for buttery smooth inertia)
    currentRotateX: 0,
    currentRotateY: 0,
    currentScale: 1,
    currentGlareX: 50,
    currentGlareY: 50,
    currentGlareOpacity: 0,
    rafId: null,
    isAnimating: false
  });

  useEffect(() => {
    // Disable interactive tilt on coarse pointer devices (touchscreens) for performance
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const card = cardRef.current;
    const glare = glareRef.current;
    const content = contentRef.current;
    if (!card) return;

    const s = state.current;

    // Fluid damping factor (0.1 = luxurious heavy glass feel, 0.15 = responsive snap)
    const LERP_FACTOR = 0.12;

    const updatePhysics = () => {
      // Linear interpolation (Lerp) towards target values
      s.currentRotateX += (s.targetRotateX - s.currentRotateX) * LERP_FACTOR;
      s.currentRotateY += (s.targetRotateY - s.currentRotateY) * LERP_FACTOR;
      s.currentScale += (s.targetScale - s.currentScale) * LERP_FACTOR;
      s.currentGlareX += (s.targetGlareX - s.currentGlareX) * LERP_FACTOR;
      s.currentGlareY += (s.targetGlareY - s.currentGlareY) * LERP_FACTOR;
      s.currentGlareOpacity += (s.targetGlareOpacity - s.currentGlareOpacity) * LERP_FACTOR;

      // Apply GPU-accelerated transform directly to DOM
      card.style.transform = `perspective(1000px) rotateX(${s.currentRotateX.toFixed(3)}deg) rotateY(${s.currentRotateY.toFixed(3)}deg) scale3d(${s.currentScale.toFixed(4)}, ${s.currentScale.toFixed(4)}, ${s.currentScale.toFixed(4)})`;

      if (glare) {
        glare.style.opacity = s.currentGlareOpacity.toFixed(3);
        glare.style.background = `radial-gradient(circle 320px at ${s.currentGlareX.toFixed(1)}% ${s.currentGlareY.toFixed(1)}%, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.1) 40%, transparent 75%)`;
      }

      if (content) {
        const depth = s.isHovered ? 14 : 0;
        content.style.transform = `translateZ(${depth}px)`;
      }

      // Check if physics have settled to baseline
      const isSettled = 
        !s.isHovered &&
        Math.abs(s.currentRotateX) < 0.01 &&
        Math.abs(s.currentRotateY) < 0.01 &&
        Math.abs(s.currentScale - 1) < 0.001 &&
        s.currentGlareOpacity < 0.01;

      if (!isSettled) {
        s.rafId = requestAnimationFrame(updatePhysics);
      } else {
        // Snap to perfect idle to release GPU
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        if (glare) glare.style.opacity = '0';
        if (content) content.style.transform = 'translateZ(0px)';
        s.isAnimating = false;
      }
    };

    const startAnimation = () => {
      if (!s.isAnimating) {
        s.isAnimating = true;
        s.rafId = requestAnimationFrame(updatePhysics);
      }
    };

    const onMouseEnter = () => {
      s.isHovered = true;
      s.targetScale = scale;
      s.targetGlareOpacity = 0.9;
      s.rect = card.getBoundingClientRect();
      startAnimation();
    };

    const onMouseMove = (e) => {
      if (!s.rect) s.rect = card.getBoundingClientRect();
      const x = e.clientX - s.rect.left;
      const y = e.clientY - s.rect.top;
      const centerX = s.rect.width / 2;
      const centerY = s.rect.height / 2;

      // Target angles based on cursor offset from card center
      s.targetRotateX = ((y - centerY) / centerY) * -maxTilt;
      s.targetRotateY = ((x - centerX) / centerX) * maxTilt;

      s.targetGlareX = Math.max(0, Math.min(100, (x / s.rect.width) * 100));
      s.targetGlareY = Math.max(0, Math.min(100, (y / s.rect.height) * 100));

      startAnimation();
    };

    const onMouseLeave = () => {
      s.isHovered = false;
      s.rect = null;
      s.targetRotateX = 0;
      s.targetRotateY = 0;
      s.targetScale = 1;
      s.targetGlareOpacity = 0;
      startAnimation();
    };

    card.addEventListener('mouseenter', onMouseEnter, { passive: true });
    card.addEventListener('mousemove', onMouseMove, { passive: true });
    card.addEventListener('mouseleave', onMouseLeave, { passive: true });

    return () => {
      card.removeEventListener('mouseenter', onMouseEnter);
      card.removeEventListener('mousemove', onMouseMove);
      card.removeEventListener('mouseleave', onMouseLeave);
      if (s.rafId) cancelAnimationFrame(s.rafId);
    };
  }, [maxTilt, scale]);

  return (
    <div
      ref={containerRef}
      className="relative [perspective:1000px] my-5"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div
        ref={cardRef}
        style={{
          transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transformStyle: 'preserve-3d',
          willChange: 'transform'
        }}
        className={`apple-glass-card p-4 sm:p-5 rounded-2xl text-white font-mono relative overflow-hidden select-none cursor-default ${className}`}
      >
        {/* Dynamic Specular Glare (Updated at 60/120fps with zero React overhead) */}
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 rounded-2xl z-20 transition-opacity duration-200"
          style={{ opacity: 0 }}
        />

        {/* Ambient colored blur glow behind the frosted glass */}
        <div 
          className="pointer-events-none absolute -top-10 -right-10 w-44 h-44 rounded-full blur-[45px] opacity-25 z-0"
          style={{ backgroundColor: glowColor }}
        />

        {/* Apple Sub-pixel Specular Glass Rim Refraction */}
        <div className="glass-reflection z-10 pointer-events-none" />

        {/* Elevated 3D parallax content chassis */}
        <div 
          ref={contentRef}
          className="relative z-10"
          style={{ 
            transform: 'translateZ(0px)',
            transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            transformStyle: 'preserve-3d'
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
