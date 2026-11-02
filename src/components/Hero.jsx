import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Zap, TrendingUp, DollarSign, Users, Award, FileText, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Dynamic Counter: Rapidly rolls numbers on page load and smoothly decelerates to final value
function AnimatedCounter({ targetValue, prefix = "", suffix = "", decimals = 0, duration = 1900, delay = 150, hoverColor = "" }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    let animId;

    const timer = setTimeout(() => {
      const step = (now) => {
        if (!startTimestamp) startTimestamp = now;
        const elapsed = now - startTimestamp;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth cubic ease-out deceleration
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = ease * targetValue;
        setDisplayValue(current);

        if (progress < 1) {
          animId = requestAnimationFrame(step);
        } else {
          setDisplayValue(targetValue);
          setIsFinished(true);
        }
      };

      animId = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animId);
    };
  }, [targetValue, duration, delay, key]);

  const handleReplay = () => {
    setIsFinished(false);
    setDisplayValue(0);
    setKey((prev) => prev + 1);
  };

  const formattedNumber = decimals > 0 
    ? displayValue.toFixed(decimals) 
    : Math.floor(displayValue);

  return (
    <div 
      onMouseEnter={handleReplay}
      className={`font-syne font-black text-5xl text-[#0B0E14] leading-none mb-1.5 transition-colors cursor-pointer select-none inline-flex items-baseline ${hoverColor}`}
      title="Hover to re-roll metric counter"
    >
      <span>{prefix}</span>
      <span>{formattedNumber}</span>
      <span>{suffix}</span>
      {!isFinished && (
        <span className="w-1.5 h-6 bg-[#00F0FF] ml-1.5 animate-pulse inline-block self-center rounded-sm" />
      )}
    </div>
  );
}

export default function Hero({ onOpenMythology }) {
  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#FAFCFF] halftone-spider border-b-3 border-[#0B0E14] overflow-hidden"
    >
      {/* Genshin Impact Anime Scenery Layer (Floating Islands & Twilight Clouds) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-20">
        <div 
          className="w-full h-full bg-cover bg-center animate-ken-burns filter brightness-105 contrast-110"
          style={{ backgroundImage: `url('/images/genshin-scenery.jpg')` }}
        />
        {/* Soft anime atmospheric horizon blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFCFF] via-transparent to-[#FAFCFF]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFCFF] via-transparent to-[#FAFCFF]" />
      </div>

      {/* Spider-Verse Ambient Neon Glows */}
      <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-[#00F0FF]/10 blur-[80px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-56 h-56 rounded-full bg-[#FF0055]/10 blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-64 h-64 rounded-full bg-[#F59E0B]/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        {/* Top Multiverse Issue Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border-2 border-[#0B0E14] shadow-spider-sm mb-6 transform -rotate-1 hover:rotate-0 transition-transform">
          <span className="w-2 h-2 rounded-full bg-[#FF0055] animate-ping" />
          <span className="font-mono font-bold text-[11px] sm:text-xs text-[#0B0E14] uppercase tracking-wider">
            MULTIVERSE ISSUE '26 // BANGALORE • MBA (MARKETING & OPS) NITK
          </span>
          <span className="bg-[#00F0FF] text-[#0B0E14] text-[9px] font-mono font-black px-1.5 py-0.5 rounded border border-[#0B0E14] uppercase">
            ACTIVE
          </span>
        </div>

        {/* Sub-Header Sticker */}
        <div className="flex justify-center mb-3">
          <div className="inline-block bg-[#0B0E14] text-[#00F0FF] font-display font-black text-xs sm:text-sm px-4 py-1 rounded-md border-2 border-white shadow-spider-sm uppercase tracking-widest transform rotate-1">
            ★ CREATIVE BRAND STRATEGIST & MARKETING LEADER ★
          </div>
        </div>

        {/* MAIN HEADING: "ADHITHYAN M." IN ULTRA-BOLD WITH SPIDER-VERSE GLITCH EFFECT */}
        <div className="relative py-2 my-1">
          <h1 className="spider-glitch font-syne font-black text-6xl sm:text-7xl md:text-8xl lg:text-[9.5rem] leading-[0.9] text-[#0B0E14] tracking-tight uppercase select-none cursor-default drop-shadow-[4px_4px_0px_#00F0FF]">
            ADHITHYAN M.
          </h1>
        </div>

        {/* Structured Editorial Tagline */}
        <div className="max-w-3xl mx-auto mt-6 mb-10 space-y-4">
          <p className="font-display text-lg sm:text-xl md:text-2xl text-zinc-900 font-bold leading-snug">
            Bridging{' '}
            <span className="bg-[#00F0FF]/25 text-[#0B0E14] font-black px-2 py-0.5 border border-[#0B0E14] rounded shadow-sm inline-block -rotate-1 mx-1">
              Subconscious Consumer Neuroscience
            </span>{' '}
            and{' '}
            <span className="bg-[#FF0055]/15 text-[#FF0055] font-black px-2 py-0.5 border border-[#0B0E14] rounded shadow-sm inline-block rotate-1 mx-1">
              High-Velocity AI Video Storytelling
            </span>{' '}
            into{' '}
            <span className="bg-[#0B0E14] text-white font-black px-2.5 py-0.5 rounded shadow-spider-sm inline-block -rotate-1 mx-1">
              Measurable Business Outcomes
            </span>.
          </p>

          <p className="font-sans text-sm sm:text-base text-zinc-600 font-medium max-w-2xl mx-auto leading-relaxed">
            {personalInfo.shortBio}
          </p>
        </div>

        {/* 3 Spider-Verse Impact Dossiers (Clean, High-Tech, Crisp) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 text-left">
          
          {/* Panel 1: Video Growth Engine */}
          <div className="spider-card p-6 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-3 right-3 bg-[#00F0FF] text-[#0B0E14] font-mono font-black text-[10px] px-2 py-0.5 border border-[#0B0E14] rounded uppercase tracking-wider">
              GROWTH
            </div>
            <div className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-2">
              AUDIENCE VIRALITY // ZENRISES
            </div>
            <AnimatedCounter 
              targetValue={137.5} 
              prefix="+" 
              suffix="%" 
              decimals={1} 
              delay={150} 
              hoverColor="group-hover:text-[#00F0FF]" 
            />
            <div className="font-display font-bold text-sm text-[#0B0E14]">
              YouTube View Surge
            </div>
            <p className="font-sans text-xs text-zinc-600 mt-1 font-medium">
              Achieved alongside <strong className="text-[#0B0E14]">+79.5% subscribers</strong> through AI video scripting & visual hook testing.
            </p>
          </div>

          {/* Panel 2: Corporate Sponsorship Capital */}
          <div className="spider-card p-6 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-3 right-3 bg-[#FF0055] text-white font-mono font-black text-[10px] px-2 py-0.5 border border-[#0B0E14] rounded uppercase tracking-wider">
              REVENUE
            </div>
            <div className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-2">
              SPONSORSHIPS CLOSED // NITK
            </div>
            <AnimatedCounter 
              targetValue={36} 
              prefix="₹" 
              suffix="L+" 
              decimals={0} 
              delay={300} 
              hoverColor="group-hover:text-[#FF0055]" 
            />
            <div className="font-display font-bold text-sm text-[#0B0E14]">
              Corporate Capital Acquired
            </div>
            <p className="font-sans text-xs text-zinc-600 mt-1 font-medium">
              Closed marquee national brand alliances across <strong className="text-[#0B0E14]">Incident (₹25L+)</strong> and <strong className="text-[#0B0E14]">Bizwaves (₹8L+)</strong>.
            </p>
          </div>

          {/* Panel 3: Creative & Marketing Scale */}
          <div className="spider-card p-6 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-3 right-3 bg-[#F59E0B] text-black font-mono font-black text-[10px] px-2 py-0.5 border border-[#0B0E14] rounded uppercase tracking-wider">
              SCALE
            </div>
            <div className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-2">
              CREW LEADERSHIP // INCIDENT
            </div>
            <AnimatedCounter 
              targetValue={120} 
              prefix="" 
              suffix="+" 
              decimals={0} 
              delay={450} 
              hoverColor="group-hover:text-[#F59E0B]" 
            />
            <div className="font-display font-bold text-sm text-[#0B0E14]">
              Marketing & Creative Volunteers
            </div>
            <p className="font-sans text-xs text-zinc-600 mt-1 font-medium">
              Spearheaded 360° promotional buzz, influencer alliances, and experiential activations.
            </p>
          </div>

        </div>

        {/* Centered Spider-Verse Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          {/* Ancient Mythological Codex Portal Button */}
          <button
            onClick={onOpenMythology}
            className="spider-btn px-6 py-3.5 rounded-xl font-cinzel font-black text-xs sm:text-sm uppercase tracking-wider inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#D4AF37] text-black border-2 border-[#0B0E14] shadow-[4px_4px_0px_#0B0E14] hover:scale-105 transition-all"
            title="Enter Ancient Mythological Theme: Neuromarketing & Experiential Case Studies"
          >
            <span>🏛️ Ancient Mythological Realm</span>
            <Sparkles className="w-4 h-4 fill-black" />
          </button>

          <a
            href="/Adhithyan_M_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Adhithyan_M_Resume.pdf"
            className="spider-btn-pink px-7 py-3.5 rounded-xl font-display font-black text-xs sm:text-sm uppercase tracking-wider inline-flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <FileText className="w-4 h-4 stroke-[2.5]" />
            <span>Download Strategic CV (PDF)</span>
            <Download className="w-4 h-4 stroke-[2.5]" />
          </a>

          <a
            href="#projects"
            className="spider-btn bg-[#0B0E14] text-white hover:bg-zinc-800 px-6 py-3.5 rounded-xl font-display font-black text-xs sm:text-sm uppercase tracking-wider inline-flex items-center gap-2"
          >
            <span>Explore Creative Campaigns</span>
            <ArrowDown className="w-4 h-4 stroke-[3]" />
          </a>

          <a
            href="#experience"
            className="spider-btn bg-white text-[#0B0E14] hover:bg-zinc-50 px-6 py-3.5 rounded-xl font-display font-black text-xs sm:text-sm uppercase tracking-wider inline-flex items-center gap-2"
          >
            <span>Track Record & Leadership</span>
            <ArrowUpRight className="w-4 h-4 stroke-[3]" />
          </a>

          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="spider-btn-cyan px-6 py-3.5 rounded-xl font-display font-black text-xs sm:text-sm uppercase tracking-wider inline-flex items-center gap-2"
          >
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 stroke-[3]" />
          </a>
        </div>

      </div>
    </section>
  );
}
