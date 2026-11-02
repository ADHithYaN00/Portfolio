import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Download } from 'lucide-react';

// Dynamic Counter: Rapidly rolls numbers on page load and smoothly decelerates to final value
function AnimatedCounter({ targetValue, prefix = "", suffix = "", decimals = 0, duration = 1800, delay = 150 }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    let animId;

    const timer = setTimeout(() => {
      const step = (now) => {
        if (!startTimestamp) startTimestamp = now;
        const elapsed = now - startTimestamp;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(ease * targetValue);

        if (progress < 1) {
          animId = requestAnimationFrame(step);
        } else {
          setDisplayValue(targetValue);
        }
      };

      animId = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animId);
    };
  }, [targetValue, duration, delay]);

  const formattedNumber = decimals > 0 
    ? displayValue.toFixed(decimals) 
    : Math.floor(displayValue);

  return (
    <span className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight inline-flex items-baseline">
      <span>{prefix}</span>
      <span>{formattedNumber}</span>
      <span>{suffix}</span>
    </span>
  );
}

export default function Hero({ onOpenMythology }) {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen bg-[#07090E] text-white pt-28 pb-14 md:pt-36 md:pb-16 overflow-hidden flex flex-col justify-between select-none"
    >
      {/* Background Ambience: Subtle warm dark radial gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#F59E0B]/5 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#7928CA]/8 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#00F0FF]/5 rounded-full blur-[170px]" />
      </div>

      {/* Bottom Right: Ancient Temple Ruins Silhouette bathed in Sunset Gold */}
      <div 
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-[380px] sm:w-[460px] md:w-[540px] h-[260px] sm:h-[300px] pointer-events-none z-0 opacity-40 mix-blend-screen bg-no-repeat bg-bottom bg-contain"
        style={{
          backgroundImage: `url('/images/hero-temple-ruins.jpg')`,
          maskImage: 'radial-gradient(circle at bottom right, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(circle at bottom right, black 40%, transparent 85%)'
        }}
      />

      {/* Main Hero Grid: Left Collage | Center Typography & Bio | Right 3D Perspective Cards */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full flex-grow flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center my-auto">
          
          {/* =========================================================================
              LEFT COLUMN: ARTISTIC EDITORIAL PHOTO COLLAGE
              ========================================================================= */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start relative order-2 lg:order-1">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] group">
              
              {/* Subtle Golden Halo Glow behind Collage */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#F59E0B]/20 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity pointer-events-none" />

              {/* The Masterpiece Portrait Collage Image */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] bg-gradient-to-b from-[#161B26] to-[#0A0D14]">
                <img 
                  src="/images/hero-portrait-collage.jpg" 
                  alt="Adhithyan M. - Brand Strategist & Marketing Leader" 
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  loading="eager"
                />

                {/* Subtle Refraction Border Glow */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/15 pointer-events-none" />
              </div>

            </div>
          </div>

          {/* =========================================================================
              CENTER COLUMN: TYPOGRAPHY, HEADLINE & EDITORIAL CTAs
              ========================================================================= */}
          <div className="lg:col-span-5 text-left space-y-5 sm:space-y-6 order-1 lg:order-2">
            
            {/* Top Eyebrow */}
            <div className="inline-flex items-center gap-2 sm:gap-2.5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-zinc-300 font-bold flex-wrap">
              <span>CREATIVE STRATEGIST</span>
              <span className="text-[#F59E0B] font-black">×</span>
              <span>MARKETING BUILDER</span>
              <span className="text-[#F59E0B] font-black">×</span>
              <span>BRAND STORYTELLER</span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="font-serif font-black text-4xl sm:text-5xl md:text-6xl xl:text-[5rem] text-white leading-[1.05] tracking-tight">
              I Build <br />
              Brands People <br />
              <span className="font-serif italic font-normal text-[#F59E0B] relative inline-block drop-shadow-[0_0_35px_rgba(245,158,11,0.35)]">
                Remember.
                {/* Hand-drawn Golden Curve Underline */}
                <svg 
                  className="absolute -bottom-2.5 left-0 w-full h-4 text-[#F59E0B] opacity-90 overflow-visible" 
                  viewBox="0 0 160 16" 
                  fill="none" 
                  preserveAspectRatio="none"
                >
                  <path 
                    d="M3 12 C 45 3, 115 2, 157 9" 
                    stroke="currentColor" 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                  />
                </svg>
              </span>
            </h1>

            {/* Editorial Bio Paragraph */}
            <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed font-normal max-w-lg pt-1">
              At the intersection of marketing, consumer psychology and creative storytelling, I turn ideas into brands that earn attention, trust and long-term relevance.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#F59E0B] hover:bg-[#EAB308] text-black font-sans font-bold text-xs sm:text-sm uppercase tracking-wider transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_12px_28px_rgba(245,158,11,0.35)] cursor-pointer"
              >
                <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                <span>Explore My Work</span>
              </a>

              <a
                href="/Adhithyan_M_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Adhithyan_M_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-sans font-medium text-xs sm:text-sm border border-white/20 hover:border-white/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: 3 ANGLED PERSPECTIVE 3D FLOATING CARDS
              ========================================================================= */}
          <div className="lg:col-span-3 flex flex-col space-y-4 sm:space-y-5 order-3 w-full">
            
            {/* Card 1: Bizwaves (Events & Branding) */}
            <a 
              href="#projects"
              className="group relative rounded-2xl p-4 sm:p-5 border border-white/15 bg-gradient-to-br from-[#161327]/90 via-[#0E0C1C]/90 to-[#070610]/95 backdrop-blur-xl shadow-[0_15px_35px_-8px_rgba(0,0,0,0.7)] hover:border-pink-500/50 hover:shadow-[0_20px_45px_rgba(236,72,153,0.25)] transition-all transform hover:-translate-y-1 block overflow-hidden"
            >
              {/* Concert stage purple glow backdrop */}
              <div 
                className="absolute inset-0 opacity-25 group-hover:opacity-40 transition-opacity bg-cover bg-center"
                style={{ backgroundImage: `url('/images/card-bizwaves-bg.jpg')` }}
              />
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-pink-500/20 rounded-full blur-2xl" />

              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-pink-300 font-bold block mb-1">
                    EVENTS & BRANDING
                  </span>
                  <h3 className="font-serif font-black text-2xl text-white tracking-tight group-hover:text-pink-200 transition-colors">
                    Bizwaves
                  </h3>
                  <p className="font-sans text-[11px] text-zinc-300 mt-1 font-medium">
                    Marketing Head (2025 & 2026)
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/20 bg-white/10 group-hover:bg-pink-500 group-hover:text-white group-hover:border-pink-400 flex items-center justify-center transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>
            </a>

            {/* Card 2: Audience Scale (Content & Video) */}
            <a 
              href="#projects"
              className="group relative rounded-2xl p-4 sm:p-5 border border-white/15 bg-gradient-to-br from-[#0B1A24]/90 via-[#07131B]/90 to-[#050D13]/95 backdrop-blur-xl shadow-[0_15px_35px_-8px_rgba(0,0,0,0.7)] hover:border-cyan-400/50 hover:shadow-[0_20px_45px_rgba(6,182,212,0.25)] transition-all transform hover:-translate-y-1 block overflow-hidden"
            >
              {/* Cyan aurora wave backdrop */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-35 transition-opacity bg-gradient-to-r from-teal-500/30 via-cyan-500/20 to-transparent" />
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-cyan-400/20 rounded-full blur-2xl" />

              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-cyan-300 font-bold block mb-1">
                    AUDIENCE & VIDEO
                  </span>
                  <h3 className="font-serif font-black text-2xl text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                    Zenrises
                  </h3>
                  <p className="font-sans text-[11px] text-zinc-300 mt-1 font-medium">
                    +137.5% YouTube View Surge & AI Hooks
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/20 bg-white/10 group-hover:bg-cyan-400 group-hover:text-black group-hover:border-cyan-300 flex items-center justify-center transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>
            </a>

            {/* Card 3: Capital Portfolio (Commercial Alliances) */}
            <a 
              href="#projects"
              className="group relative rounded-2xl p-4 sm:p-5 border border-white/15 bg-gradient-to-br from-[#1E170A]/90 via-[#140F05]/90 to-[#0B0802]/95 backdrop-blur-xl shadow-[0_15px_35px_-8px_rgba(0,0,0,0.7)] hover:border-amber-400/50 hover:shadow-[0_20px_45px_rgba(245,158,11,0.25)] transition-all transform hover:-translate-y-1 block overflow-hidden"
            >
              {/* Golden amber wave backdrop */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-35 transition-opacity bg-gradient-to-r from-amber-500/30 via-yellow-500/20 to-transparent" />
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-amber-400/20 rounded-full blur-2xl" />

              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-amber-300 font-bold block mb-1">
                    COMMERCIAL ALLIANCES
                  </span>
                  <h3 className="font-serif font-black text-2xl text-white tracking-tight group-hover:text-amber-200 transition-colors">
                    ₹36L+ Raised
                  </h3>
                  <p className="font-sans text-[11px] text-zinc-300 mt-1 font-medium">
                    Incident & Bizwaves NITK Surathkal
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/20 bg-white/10 group-hover:bg-[#F59E0B] group-hover:text-black group-hover:border-amber-300 flex items-center justify-center transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>
            </a>

          </div>

        </div>

      </div>

      {/* =========================================================================
          BOTTOM HUD: 3 METRIC COLUMNS & SCROLL TO EXPLORE
          ========================================================================= */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 pt-8 sm:pt-10 border-t border-white/10 mt-6 sm:mt-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* 3 Metric Columns */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Metric 1 */}
            <div>
              <div className="flex items-baseline">
                <AnimatedCounter targetValue={36} prefix="₹" suffix="L+" decimals={0} delay={150} />
              </div>
              <div className="font-sans font-bold text-xs sm:text-sm text-zinc-200 mt-0.5">
                Sponsorships Raised
              </div>
              <div className="font-sans text-[11px] text-zinc-400">
                (Bizwaves, Incident & more)
              </div>
            </div>

            {/* Metric 2 */}
            <div>
              <div className="flex items-baseline">
                <AnimatedCounter targetValue={137.5} prefix="" suffix="%" decimals={1} delay={300} />
              </div>
              <div className="font-sans font-bold text-xs sm:text-sm text-zinc-200 mt-0.5">
                YouTube View Growth
              </div>
              <div className="font-sans text-[11px] text-zinc-400">
                (AI video storytelling & scripting)
              </div>
            </div>

            {/* Metric 3 */}
            <div>
              <div className="flex items-baseline">
                <AnimatedCounter targetValue={120} prefix="" suffix="+" decimals={0} delay={450} />
              </div>
              <div className="font-sans font-bold text-xs sm:text-sm text-zinc-200 mt-0.5">
                Volunteers Led
              </div>
              <div className="font-sans text-[11px] text-zinc-400">
                (Marketing & Creative Teams)
              </div>
            </div>

          </div>

          {/* Centered Scroll Indicator */}
          <div className="md:col-span-4 flex items-center justify-start md:justify-end">
            <a 
              href="#about"
              className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-zinc-400 hover:text-white transition-colors group cursor-pointer"
            >
              <span>SCROLL TO EXPLORE</span>
              <div className="w-4 h-7 rounded-full border border-zinc-500 group-hover:border-white flex items-start justify-center p-1 transition-colors">
                <div className="w-1 h-2 rounded-full bg-[#F59E0B] animate-bounce" />
              </div>
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
