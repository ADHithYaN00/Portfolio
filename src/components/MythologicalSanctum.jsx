import React, { useState, useEffect } from 'react';
import { ArrowLeft, Sparkles, Brain, Eye, Zap, TrendingUp, DollarSign, Award, ChevronRight, ShieldCheck, Download, ExternalLink, Compass, Layers } from 'lucide-react';
import { mythologyCodexData } from '../data/mythologyCaseStudies';
import { personalInfo } from '../data/portfolioData';
import GoldenParticles from './GoldenParticles';

export default function MythologicalSanctum({ onReturnToModern }) {
  const [selectedCategory, setSelectedCategory] = useState("All Sacred Relics");
  const [activeRelic, setActiveRelic] = useState(null);

  // Scroll to top upon entering sanctum
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredStudies = selectedCategory === "All Sacred Relics"
    ? mythologyCodexData.caseStudies
    : mythologyCodexData.caseStudies.filter(cs => cs.realmCategory === selectedCategory);

  return (
    <div className="relative min-h-screen bg-[#05060A] text-[#E5E7EB] font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      
      {/* Antigravity Floating Stardust Particles */}
      <GoldenParticles />

      {/* ========================================================
          HIGH GRAPHICS ANCIENT MYTHOLOGICAL ATMOSPHERE
          ======================================================== */}
      {/* Background Sanctum Temple Art */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center filter brightness-[0.45] contrast-125 scale-105 animate-ken-burns"
          style={{ backgroundImage: `url('/images/ancient-sanctum.jpg')` }}
        />
        {/* Deep Mystical Radial Vignette & Cosmic Star Mist */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#05060A]/80 to-[#05060A]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05060A]/90 via-transparent to-[#05060A]" />
      </div>

      {/* Sacred Astral Geometry Rings (Rotates slowly in the background) */}
      <div className="fixed -top-40 -right-40 w-[700px] h-[700px] rounded-full border border-[#D4AF37]/15 pointer-events-none z-0" style={{ animation: 'celestialRuneSpin 120s linear infinite' }}>
        <div className="w-full h-full rounded-full border-2 border-dashed border-[#D4AF37]/10" />
      </div>
      <div className="fixed -bottom-40 -left-40 w-[600px] h-[600px] rounded-full border border-[#38BDF8]/10 pointer-events-none z-0" style={{ animation: 'celestialRuneSpin 90s linear infinite reverse' }} />

      {/* Atmospheric Ambient Glows */}
      <div className="fixed top-1/4 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#FF4500]/10 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="fixed top-2/3 left-1/3 w-[450px] h-[450px] bg-[#38BDF8]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* ========================================================
          SANCTUM TOP NAVIGATION BAR
          ======================================================== */}
      <header className="sticky top-0 z-50 bg-[#07090F]/90 backdrop-blur-md border-b border-[#D4AF37]/25 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Ancient Seal & Breadcrumb */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#8C6D1F] p-0.5 shadow-[0_0_15px_rgba(212,175,55,0.4)] flex items-center justify-center">
              <span className="font-cinzel font-black text-black text-base">🏛️</span>
            </div>
            <div>
              <span className="font-cinzel font-black text-xs sm:text-sm tracking-widest text-[#F3E8C8] uppercase block">
                ADHITHYAN M. // ANCIENT CODEX
              </span>
              <span className="font-mono text-[10px] text-[#D4AF37] tracking-wider uppercase block">
                Pantheon of Neuromarketing & Experiential Strategy
              </span>
            </div>
          </div>

          {/* Action Navigation Controls */}
          <div className="flex items-center space-x-3">
            {/* Download CV Button */}
            <a
              href="/Adhithyan_M_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Adhithyan_M_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#D4AF37]/40 bg-[#0B0E14] text-xs font-cinzel font-bold text-[#E5E7EB] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Strategic CV</span>
            </a>

            {/* Portal Return Button (Switches back to modern view) */}
            <button
              onClick={onReturnToModern}
              className="group relative px-4 sm:px-5 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#D4AF37] text-black font-cinzel font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] transition-all flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
              title="Return to the Spider-Verse Modern Portfolio"
            >
              <ArrowLeft className="w-4 h-4 stroke-[3] group-hover:-translate-x-1 transition-transform" />
              <span>Return to Multiverse</span>
            </button>
          </div>

        </div>
      </header>

      {/* ========================================================
          MYTHOLOGICAL SANCTUM HERO SECTION
          ======================================================== */}
      <section className="relative z-10 pt-20 pb-16 px-6 max-w-6xl mx-auto text-center">
        
        {/* Ancient Laurel & Lore Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121622]/80 border border-[#D4AF37]/50 shadow-[0_0_25px_rgba(212,175,55,0.25)] mb-6 backdrop-blur-md">
          <span className="text-[#D4AF37]">✦</span>
          <span className="font-mono font-bold text-xs text-[#E5E7EB] tracking-widest uppercase">
            SACRED PARCHMENT // CLASSIFIED COMMERCIAL TELEMETRY
          </span>
          <span className="text-[#D4AF37]">✦</span>
        </div>

        {/* Grand Mythological Title */}
        <h1 className="font-myth font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[1.05] mythic-gold-text uppercase drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)] mb-6">
          THE NEUROMARKETING & EXPERIENTIAL SANCTUM
        </h1>

        <p className="max-w-3xl mx-auto font-serif text-base sm:text-xl text-[#CBD5E1] leading-relaxed italic mb-8">
          "{mythologyCodexData.header.subtitle}"
        </p>

        {/* Strategic Credential Plaque */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 p-3 px-6 rounded-2xl bg-[#0B0F19]/90 border border-[#D4AF37]/30 shadow-2xl backdrop-blur-md text-xs font-cinzel">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
            <span className="text-[#D4AF37] font-bold">CURATED BY ADHITHYAN M.</span>
          </div>
          <span className="text-zinc-600 hidden sm:inline">|</span>
          <span className="text-zinc-300">MBA (Marketing & Operations) — NITK</span>
          <span className="text-zinc-600 hidden sm:inline">|</span>
          <span className="text-[#38BDF8] font-bold">₹36L+ Sponsorship Acquisition</span>
        </div>

        {/* Category Relic Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-12">
          {mythologyCodexData.categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-cinzel font-bold tracking-wider uppercase transition-all border ${
                selectedCategory === cat
                  ? 'bg-[#D4AF37] text-black border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.5)] font-black'
                  : 'bg-[#0B0E14]/80 text-[#94A3B8] border-zinc-800 hover:border-[#D4AF37]/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </section>

      {/* ========================================================
          THE SACRED RELICS: 6 HIGH-IMPACT CASE STUDIES
          ======================================================== */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredStudies.map((relic) => (
            <article
              key={relic.id}
              className={`mythic-tablet rounded-3xl p-7 sm:p-9 flex flex-col justify-between border ${relic.borderColor}/40 hover:${relic.borderColor} transition-all`}
            >
              <div>
                
                {/* Header: Roman Numeral & Godhead Archetype */}
                <div className="flex items-start justify-between pb-4 mb-6 border-b border-[#D4AF37]/20">
                  <div>
                    <span className="font-cinzel font-black text-xs text-[#D4AF37] tracking-widest block uppercase">
                      {relic.romanNumeral} // {relic.godhead}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider block mt-0.5">
                      {relic.realmCategory}
                    </span>
                  </div>

                  <div className="px-3 py-1 rounded-md bg-[#05060A] border border-[#D4AF37]/30 text-xs font-cinzel font-bold text-[#D4AF37] shadow-sm">
                    {relic.brand}
                  </div>
                </div>

                {/* Relic Title */}
                <h2 className="font-cinzel font-black text-2xl sm:text-3xl text-[#F8FAFC] leading-snug mb-3">
                  {relic.studyTitle}
                </h2>

                <p className="font-serif italic text-sm text-[#CBD5E1] leading-relaxed mb-6">
                  "{relic.tagline}"
                </p>

                {/* Primary Metric Monolith */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#04060B]/80 border border-[#D4AF37]/30 shadow-inner mb-6">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="font-cinzel font-black text-2xl sm:text-3xl mythic-gold-text">
                        {relic.metrics.primary}
                      </div>
                      <div className="font-mono text-[10px] text-zinc-400 uppercase mt-1">
                        {relic.metrics.primaryLabel}
                      </div>
                    </div>

                    <div className="border-x border-zinc-800">
                      <div className="font-cinzel font-black text-2xl sm:text-3xl text-[#38BDF8]">
                        {relic.metrics.secondary}
                      </div>
                      <div className="font-mono text-[10px] text-zinc-400 uppercase mt-1">
                        {relic.metrics.secondaryLabel}
                      </div>
                    </div>

                    <div>
                      <div className="font-cinzel font-black text-lg sm:text-2xl text-[#E5E7EB] truncate">
                        {relic.metrics.tertiary}
                      </div>
                      <div className="font-mono text-[10px] text-zinc-400 uppercase mt-1 truncate">
                        {relic.metrics.tertiaryLabel}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deep Dive Pillars */}
                <div className="space-y-4 text-xs font-sans">
                  
                  {/* The Mystery */}
                  <div className="p-4 rounded-xl bg-black/40 border border-zinc-800/80">
                    <span className="font-cinzel font-bold text-[#E5E7EB] block mb-1 text-xs uppercase flex items-center gap-1.5">
                      <span className="text-[#D4AF37]">✦</span> The Commercial Mystery
                    </span>
                    <p className="text-zinc-300 leading-relaxed font-medium">
                      {relic.theMystery}
                    </p>
                  </div>

                  {/* The Subconscious Neuro Revelation */}
                  <div className="p-4 rounded-xl bg-[#070B14]/90 border border-[#38BDF8]/25">
                    <span className="font-cinzel font-bold text-[#38BDF8] block mb-1 text-xs uppercase flex items-center gap-1.5">
                      <Brain className="w-3.5 h-3.5 text-[#38BDF8]" /> Subconscious Neural Revelation
                    </span>
                    <p className="text-zinc-200 leading-relaxed font-medium">
                      {relic.neuroRevelation}
                    </p>
                  </div>

                  {/* Commercial Impact */}
                  <div className="p-4 rounded-xl bg-[#140F06]/90 border border-[#D4AF37]/40">
                    <span className="font-cinzel font-bold text-[#F59E0B] block mb-1 text-xs uppercase flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#F59E0B]" /> Monumental Commercial Outcome
                    </span>
                    <p className="text-zinc-100 font-bold leading-relaxed">
                      {relic.commercialOutcome}
                    </p>
                  </div>

                </div>

              </div>

              {/* Strategic Rule Inscription */}
              <div className="mt-6 pt-4 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono">
                <span className="text-[#D4AF37] font-bold">
                  AXIOM:
                </span>
                <span className="font-serif italic text-zinc-300">
                  "{relic.strategicRule}"
                </span>
              </div>

            </article>
          ))}
        </div>

      </section>

      {/* ========================================================
          THE 3 IMMUTABLE LAWS OF MODERN MARKETING
          ======================================================== */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        
        <div className="text-center mb-12">
          <span className="font-mono font-bold text-xs text-[#D4AF37] tracking-widest uppercase block mb-2">
            // IMMUTABLE SACRED LAWS
          </span>
          <h2 className="font-cinzel font-black text-3xl sm:text-4xl text-[#F8FAFC] uppercase">
            THE THREE PILLARS OF NEURO-EXPERIENTIAL DOMINANCE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mythologyCodexData.ancientPrinciples.map((prin, pIdx) => (
            <div
              key={pIdx}
              className="p-7 rounded-2xl bg-[#090C14]/90 border border-[#D4AF37]/30 shadow-xl backdrop-blur-md relative overflow-hidden"
            >
              <div className="text-4xl font-serif text-[#D4AF37]/30 mb-3 select-none">
                {prin.rune}
              </div>
              <h3 className="font-cinzel font-black text-lg text-[#F8FAFC] mb-1">
                {prin.title}
              </h3>
              <p className="font-mono text-[11px] text-[#D4AF37] uppercase font-bold mb-3">
                {prin.subtitle}
              </p>
              <p className="font-sans text-xs text-zinc-300 leading-relaxed font-medium">
                {prin.description}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* ========================================================
          SANCTUM FOOTER & PORTAL RETURN
          ======================================================== */}
      <footer className="relative z-10 bg-[#040508] border-t border-[#D4AF37]/20 py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          
          <div className="w-12 h-12 rounded-full border border-[#D4AF37]/40 bg-[#0B0E14] mx-auto flex items-center justify-center text-xl shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            🏛️
          </div>

          <h3 className="font-cinzel font-black text-2xl sm:text-3xl mythic-gold-text uppercase">
            READY TO APPLY SUBCONSCIOUS TRUTH TO YOUR BRAND?
          </h3>

          <p className="font-sans text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Whether architecting multi-crore sponsorship acquisitions, neuromarketing-backed packaging overhauls, or viral video hooks—let's build your brand empire.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onReturnToModern}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] text-black font-cinzel font-black text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:scale-105 transition-transform flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4 stroke-[3]" />
              <span>Return to Multiverse Portfolio</span>
            </button>

            <a
              href={`mailto:${personalInfo.email}?subject=${encodeURIComponent('[Strategic Consultation] Neuromarketing & Experiential Inquiry')}`}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-cinzel font-bold text-xs uppercase tracking-wider border border-white/20 transition-all flex items-center gap-2"
            >
              <span>Consult with Adhithyan Direct</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-8 text-xs font-mono text-zinc-600 uppercase tracking-widest">
            ADHITHYAN M. // CLASSICAL NEURO-EXPERIENTIAL ARCHIVES // NITK '26
          </div>

        </div>
      </footer>

      {/* Sticky Floating Return Pill (Allows 1-click return anytime while browsing) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={onReturnToModern}
          className="group px-4 py-2.5 rounded-full bg-[#0B0E14]/90 backdrop-blur-md border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-cinzel font-black text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(212,175,55,0.4)] flex items-center gap-2 transition-all transform hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4 stroke-[3] group-hover:-translate-x-1 transition-transform" />
          <span>Exit Sanctum</span>
        </button>
      </div>

    </div>
  );
}
