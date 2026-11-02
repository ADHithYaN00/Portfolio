import React, { useRef, useState, useCallback, useEffect } from 'react';

/**
 * AppleGlassCard
 * Implements Apple's visionOS / Apple Card interactive glassmorphism:
 * - Real-time 3D perspective tilting following mouse cursor coordinates
 * - Dynamic specular reflection glare (spotlight sheen that moves with the cursor)
 * - Sub-pixel illuminated glass border refraction
 * - Inner 3D parallax depth (translateZ) so metrics float within the glass chassis
 * - Smooth spring-like cubic-bezier reset on mouse leave
 */
export default function AppleGlassCard({ 
  children, 
  className = '', 
  glowColor = 'rgba(0, 240, 255, 0.25)', 
  maxTilt = 10,
  scale = 1.02
}) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const rafId = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = Math.max(0, Math.min(100, (x / rect.width) * 100));
    const percentY = Math.max(0, Math.min(100, (y / rect.height) * 100));

    // Calculate 3D tilt angles based on mouse offset from center
    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      setTransform(
        `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
      );
      setGlare({
        x: percentX.toFixed(1),
        y: percentY.toFixed(1),
        opacity: 0.95
      });
    });
  }, [maxTilt, scale]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (rafId.current) cancelAnimationFrame(rafId.current);
    // Smooth reset back to baseline
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlare(prev => ({ ...prev, opacity: 0 }));
  }, []);

  useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      className="relative [perspective:1000px] my-5"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform,
          transformStyle: 'preserve-3d',
          transition: isHovered 
            ? 'transform 0.08s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease' 
            : 'transform 0.55s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease',
        }}
        className={`apple-glass-card p-4 sm:p-5 rounded-2xl text-white font-mono relative overflow-hidden select-none cursor-default ${className}`}
      >
        {/* Dynamic Apple Specular Glare (Moves with cursor in real-time) */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl z-20 transition-opacity duration-300"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle 280px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.08) 45%, transparent 75%)`,
          }}
        />

        {/* Ambient colored blur glow behind the glass */}
        <div 
          className="pointer-events-none absolute -top-12 -right-12 w-44 h-44 rounded-full blur-[55px] opacity-25 z-0 transition-opacity duration-300"
          style={{ backgroundColor: glowColor }}
        />

        {/* Apple Sub-pixel Specular Glass Rim Sheen */}
        <div className="glass-reflection z-10" />

        {/* Content elevated with 3D parallax depth */}
        <div 
          className="relative z-10"
          style={{ 
            transform: isHovered ? 'translateZ(18px)' : 'translateZ(0px)',
            transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            transformStyle: 'preserve-3d'
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
