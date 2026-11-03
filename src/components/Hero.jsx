import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Download, MousePointer } from 'lucide-react';

// Dynamic Counter: Rapidly rolls numbers on page load and smoothly decelerates
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
    <span className="font-serif font-bold text-2xl sm:text-3xl text-white tracking-tight inline-flex items-baseline">
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
      className="relative min-h-screen bg-[#07090E] text-white pt-24 pb-12 sm:pt-28 md:pt-32 overflow-hidden flex flex-col justify-between select-none"
    >
      {/* Background Ambience: Subtle warm dark radial gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#F59E0B]/5 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#00F0FF]/4 rounded-full blur-[180px]" />
        <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-[#F59E0B]/4 rounded-full blur-[170px]" />
      </div>

      {/* Far Left Vertical Edge: SCROLL TO EXPLORE Indicator matching mockup */}
      <div className="hidden 2xl:flex fixed left-5 top-1/2 -translate-y-1/2 -rotate-90 origin-left items-center gap-2.5 font-mono text-[10px] tracking-[0.25em] text-zinc-500 uppercase select-none pointer-events-none z-20">
        <svg className="w-3.5 h-3.5 rotate-90 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="7" />
          <line x1="12" y1="6" x2="12" y2="10" />
        </svg>
        <span>SCROLL TO EXPLORE</span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full flex-grow flex flex-col justify-between">
        
        {/* =========================================================================
            UPPER HERO SECTION: 3 COLUMNS (LEFT HEADLINE | CENTER COLLAGE | RIGHT CARDS)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center pt-4 sm:pt-6 pb-12">
          
          {/* =========================================================================
              LEFT COLUMN: STRATEGY EYEBROW, HUGE HEADLINE, BIO, CTAs & STATS
              ========================================================================= */}
          <div className="lg:col-span-5 text-left space-y-5 sm:space-y-6 order-1">
            
            {/* Top Eyebrow with lightning / star bullets */}
            <div className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-zinc-300 font-bold flex-wrap">
              <span>BRAND STRATEGIST</span>
              <span className="text-[#F59E0B]">⚡</span>
              <span>MARKETING</span>
              <span className="text-[#F59E0B]">⚡</span>
              <span>OPERATIONS</span>
            </div>

            {/* Main Hero Headline matching mockup */}
            <h1 className="font-serif font-black text-4xl sm:text-5xl md:text-6xl xl:text-[4.75rem] text-white leading-[1.06] tracking-tight">
              I Build Brands <br />
              People <br />
              <span className="font-serif italic font-normal text-[#F59E0B] relative inline-block drop-shadow-[0_0_35px_rgba(245,158,11,0.35)]">
                Remember.
                {/* Hand-drawn Golden Underline matching mockup */}
                <svg 
                  className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3.5 text-[#F59E0B] opacity-90 overflow-visible" 
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

            {/* Bio Paragraph matching mockup */}
            <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed font-normal max-w-md pt-1">
              At the intersection of marketing, consumer psychology and creative storytelling, I turn ideas into brands that earn attention, trust and long-term relevance.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-[#F59E0B] hover:bg-[#EAB308] text-black font-sans font-bold text-xs sm:text-sm tracking-wider transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_12px_28px_rgba(245,158,11,0.35)] cursor-pointer"
              >
                <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                <span>Explore My Work</span>
              </a>

              <a
                href="/Adhithyan_M_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Adhithyan_M_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-sans font-medium text-xs sm:text-sm border border-white/20 hover:border-white/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Metrics Row matching mockup */}
            <div className="flex items-center gap-6 sm:gap-8 pt-6 border-t border-white/10">
              <div>
                <AnimatedCounter targetValue={36} prefix="₹" suffix="L+" />
                <div className="font-sans text-[11px] sm:text-xs text-zinc-400 mt-1 font-normal">
                  Sponsorships Raised
                </div>
              </div>
              <div className="h-8 w-px bg-white/15" />
              <div>
                <AnimatedCounter targetValue={137.5} suffix="%" decimals={1} />
                <div className="font-sans text-[11px] sm:text-xs text-zinc-400 mt-1 font-normal">
                  YouTube View Growth
                </div>
              </div>
              <div className="h-8 w-px bg-white/15" />
              <div>
                <AnimatedCounter targetValue={120} suffix="+" />
                <div className="font-sans text-[11px] sm:text-xs text-zinc-400 mt-1 font-normal">
                  Volunteers Led
                </div>
              </div>
            </div>

          </div>

          {/* =========================================================================
              CENTER COLUMN: ARTISTIC EDITORIAL PHOTO COLLAGE MATCHING MOCKUP
              ========================================================================= */}
          <div className="lg:col-span-4 flex justify-center items-center relative order-2 my-4 lg:my-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] group">
              {/* Golden Ambient Halo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#F59E0B]/20 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity pointer-events-none" />

              {/* The Masterpiece Portrait Collage */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
                <img 
                  src="/images/hero-center-collage.jpg" 
                  alt="Adhithyan M. - Better Ideas. Bigger Impact." 
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: FEATURED PROJECTS (3 STACKED CARDS MATCHING MOCKUP)
              ========================================================================= */}
          <div className="lg:col-span-3 flex flex-col space-y-3.5 order-3 w-full">
            
            {/* Header: FEATURED PROJECTS ──────── ↗ */}
            <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-xs font-mono tracking-widest uppercase text-zinc-400">
              <span className="text-[11px] font-bold">FEATURED PROJECTS</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </div>

            {/* Card 1: Bizwaves (Event & Branding) */}
            <a 
              href="#projects"
              className="group relative rounded-2xl p-4 border border-white/15 bg-gradient-to-br from-[#161327]/90 via-[#0E0C1C]/90 to-[#070610]/95 backdrop-blur-xl shadow-lg hover:border-pink-500/50 hover:shadow-[0_15px_30px_rgba(236,72,153,0.25)] transition-all transform hover:-translate-y-1 block overflow-hidden"
            >
              <div 
                className="absolute inset-0 opacity-40 group-hover:opacity-55 transition-opacity bg-cover bg-center"
                style={{ backgroundImage: `url('/images/feat-bizwaves-top.jpg')` }}
              />
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <h3 className="font-serif font-black text-xl text-white tracking-tight group-hover:text-pink-200 transition-colors">
                    Bizwaves
                  </h3>
                  <p className="font-sans text-[11px] text-zinc-300 mt-0.5 font-normal">
                    Event &amp; Branding
                  </p>
                  <p className="font-mono text-[10px] text-zinc-400">
                    (2025 &amp; 2026)
                  </p>
                </div>
                <div className="w-7 h-7 rounded-full border border-white/20 bg-white/10 group-hover:bg-pink-500 group-hover:text-white group-hover:border-pink-400 flex items-center justify-center transition-all shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </div>
            </a>

            {/* Card 2: mypet9 (Petcare Startup) */}
            <a 
              href="#projects"
              className="group relative rounded-2xl p-4 border border-white/15 bg-gradient-to-br from-[#042f2e]/90 via-[#0d9488]/80 to-[#14b8a6]/90 backdrop-blur-xl shadow-lg hover:border-cyan-400/50 hover:shadow-[0_15px_30px_rgba(6,182,212,0.25)] transition-all transform hover:-translate-y-1 block overflow-hidden"
            >
              <div 
                className="absolute inset-0 opacity-40 group-hover:opacity-55 transition-opacity bg-cover bg-center"
                style={{ backgroundImage: `url('/images/feat-mypet9-top.jpg')` }}
              />
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-1.5 font-serif font-black text-xl text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                    <span>mypet9</span>
                  </div>
                  <p className="font-sans text-[11px] text-zinc-200 mt-0.5 font-normal">
                    Petcare Startup
                  </p>
                  <p className="font-mono text-[10px] text-cyan-200">
                    (Brand &amp; Growth)
                  </p>
                </div>
                <div className="w-7 h-7 rounded-full border border-white/20 bg-white/10 group-hover:bg-cyan-400 group-hover:text-black group-hover:border-cyan-300 flex items-center justify-center transition-all shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </div>
            </a>

            {/* Card 3: Silent Mind (Content & Community) */}
            <a 
              href="#projects"
              className="group relative rounded-2xl p-4 border border-white/15 bg-gradient-to-br from-[#1c1204]/90 via-[#2d1c07]/80 to-[#452709]/90 backdrop-blur-xl shadow-lg hover:border-amber-400/50 hover:shadow-[0_15px_30px_rgba(245,158,11,0.25)] transition-all transform hover:-translate-y-1 block overflow-hidden"
            >
              <div 
                className="absolute inset-0 opacity-40 group-hover:opacity-55 transition-opacity bg-cover bg-center"
                style={{ backgroundImage: `url('/images/feat-silentmind-top.jpg')` }}
              />
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <h3 className="font-serif font-black text-xl text-white tracking-tight group-hover:text-amber-200 transition-colors">
                    Silent Mind
                  </h3>
                  <p className="font-sans text-[11px] text-zinc-300 mt-0.5 font-normal">
                    Content &amp; Community
                  </p>
                  <p className="font-mono text-[10px] text-amber-200">
                    (Ancient Wisdom)
                  </p>
                </div>
                <div className="w-7 h-7 rounded-full border border-white/20 bg-white/10 group-hover:bg-[#F59E0B] group-hover:text-black group-hover:border-[#F59E0B] flex items-center justify-center transition-all shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </div>
            </a>

          </div>

        </div>

        {/* =========================================================================
            LOWER SHOWCASE SECTION: "MY WORK" • PROJECTS THAT MATTER MATCHING MOCKUP
            ========================================================================= */}
        <div className="pt-12 pb-8 border-t border-white/10 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Eyebrow + Headline + Description */}
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.2em] text-[#F59E0B] uppercase font-bold">
                <span>MY WORK</span>
                <span className="w-8 h-[1px] bg-[#F59E0B]/50" />
              </div>
              <h2 className="font-serif font-black text-3xl sm:text-4xl text-white leading-tight">
                Projects <br />
                <span className="italic font-normal text-[#F59E0B]">That Matter.</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed max-w-sm pt-1">
                From building event brands to launching petcare platforms and creating meaningful content, I work on ideas that connect people, build communities and create lasting impact.
              </p>
            </div>

            {/* Right Column: 3 Showcase Wide Cards in a Row */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Wide Card 1: Bizwaves */}
              <a 
                href="#projects"
                className="group relative rounded-2xl h-36 border border-white/15 overflow-hidden shadow-lg hover:border-pink-500/50 hover:shadow-[0_15px_30px_rgba(236,72,153,0.25)] transition-all transform hover:-translate-y-1 block"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('/images/showcase-bizwaves-wide.jpg')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between z-10">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-white">Bizwaves</h3>
                    <p className="font-sans text-[11px] text-zinc-300">Marketing Head (2025 &amp; 2026)</p>
                  </div>
                  <div className="w-6 h-6 rounded-full border border-white/20 bg-white/10 group-hover:bg-pink-500 group-hover:text-white flex items-center justify-center transition-all shrink-0">
                    <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                  </div>
                </div>
              </a>

              {/* Wide Card 2: mypet9 */}
              <a 
                href="#projects"
                className="group relative rounded-2xl h-36 border border-white/15 overflow-hidden shadow-lg hover:border-cyan-400/50 hover:shadow-[0_15px_30px_rgba(6,182,212,0.25)] transition-all transform hover:-translate-y-1 block"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('/images/showcase-mypet9-wide.jpg')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between z-10">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-white">mypet9</h3>
                    <p className="font-sans text-[11px] text-zinc-300">Brand, Marketing &amp; Growth</p>
                  </div>
                  <div className="w-6 h-6 rounded-full border border-white/20 bg-white/10 group-hover:bg-cyan-400 group-hover:text-black flex items-center justify-center transition-all shrink-0">
                    <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                  </div>
                </div>
              </a>

              {/* Wide Card 3: Silent Mind */}
              <a 
                href="#projects"
                className="group relative rounded-2xl h-36 border border-white/15 overflow-hidden shadow-lg hover:border-amber-400/50 hover:shadow-[0_15px_30px_rgba(245,158,11,0.25)] transition-all transform hover:-translate-y-1 block"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('/images/showcase-silentmind-wide.jpg')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between z-10">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-white">Silent Mind</h3>
                    <p className="font-sans text-[11px] text-zinc-300">Content &amp; Community</p>
                  </div>
                  <div className="w-6 h-6 rounded-full border border-white/20 bg-white/10 group-hover:bg-[#F59E0B] group-hover:text-black flex items-center justify-center transition-all shrink-0">
                    <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                  </div>
                </div>
              </a>

            </div>

          </div>
        </div>

        {/* =========================================================================
            BOTTOM STRIP: SELECTED ACHIEVEMENTS & TIMELESS WISDOM MATCHING MOCKUP
            ========================================================================= */}
        <div className="pt-6 pb-2 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
          {/* Left: Selected Achievements with Golden Dots */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-zinc-400">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500">
              SELECTED ACHIEVEMENTS
            </span>
            <span className="flex items-center gap-2 text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              <span>₹36L+ Sponsorships Raised</span>
            </span>
            <span className="flex items-center gap-2 text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              <span>137.5% YouTube View Growth</span>
            </span>
            <span className="flex items-center gap-2 text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              <span>120+ Volunteers Led</span>
            </span>
          </div>

          {/* Right: Eternal Stories. Timeless Wisdom. */}
          <a 
            href="#about"
            className="flex items-center gap-2 text-zinc-400 hover:text-[#F59E0B] font-serif italic text-sm transition-colors cursor-pointer group"
          >
            <span>Eternal Stories. Timeless Wisdom.</span>
            <ArrowUpRight className="w-3.5 h-3.5 not-italic group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
