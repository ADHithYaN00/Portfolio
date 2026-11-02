import React, { useState, useEffect } from 'react';
import { ArrowLeft, Sparkles, Brain, Eye, Zap, TrendingUp, DollarSign, Award, ChevronRight, ShieldCheck, Download, ExternalLink, Compass, Layers, Flame, Scroll } from 'lucide-react';
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
    <div className="relative min-h-screen bg-[#070503] text-[#EDE4D3] font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      
      {/* Antigravity Floating Desert Gold & Stardust Particles */}
      <GoldenParticles />

      {/* ========================================================
          HIGH GRAPHICS ARABIAN DESERT & MUMMY TOMB ATMOSPHERE
          ======================================================== */}
      {/* Background Arabian Sanctuary & Desert Dunes Concept Art */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center filter brightness-[0.52] contrast-125 scale-105 animate-ken-burns"
          style={{ backgroundImage: `url('/images/arabian-sanctum.jpg')` }}
        />
        {/* Deep Desert Sand & Starry Midnight Radial Vignettes */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#070503]/80 to-[#070503]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070503]/90 via-[#070503]/25 to-[#070503]" />
      </div>

      {/* Drifting Desert Mirage Sand Winds */}
      <div className="fixed inset-0 pointer-events-none z-0 animate-desert-drift">
        <div className="w-[120%] h-[120%] bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent blur-3xl transform -rotate-6" />
      </div>

      {/* Sacred Pharaonic Astronomy Rings & Astrolabes */}
      <div className="fixed -top-40 -right-40 w-[720px] h-[720px] rounded-full border border-[#D4AF37]/20 pointer-events-none z-0" style={{ animation: 'celestialRuneSpin 140s linear infinite' }}>
        <div className="w-full h-full rounded-full border-2 border-dashed border-[#F59E0B]/15" />
      </div>
      <div className="fixed -bottom-40 -left-40 w-[640px] h-[640px] rounded-full border border-[#38BDF8]/15 pointer-events-none z-0" style={{ animation: 'celestialRuneSpin 100s linear infinite reverse' }} />

      {/* Flickering Brass Lantern & Torchlight Ambient Illuminations */}
      <div className="fixed top-1/4 left-1/5 w-[520px] h-[520px] bg-[#FF7A00]/12 rounded-full blur-[170px] pointer-events-none -z-10 animate-torch-flicker" />
      <div className="fixed bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/15 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="fixed top-2/3 left-1/3 w-[460px] h-[460px] bg-[#0284C7]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* ========================================================
          ARABIAN CODEX TOP NAVIGATION BAR
          ======================================================== */}
      <header className="sticky top-0 z-50 bg-[#0A0704]/92 backdrop-blur-md border-b border-[#D4AF37]/30 shadow-[0_10px_35px_rgba(0,0,0,0.85)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Ancient Pharaoh Seal & Breadcrumb */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFE082] via-[#D4AF37] to-[#8C6D1F] p-0.5 shadow-[0_0_20px_rgba(212,175,55,0.45)] flex items-center justify-center">
              <span className="font-cinzel font-black text-[#1A140B] text-lg select-none">𓆣</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-cinzel font-black text-xs sm:text-sm tracking-widest text-[#F8EED7] uppercase block">
                  ADHITHYAN M. // ARABIAN DESERT CODEX
                </span>
                <span className="text-[10px] text-[#D4AF37] hidden md:inline">☥</span>
              </div>
              <span className="font-mono text-[10px] text-[#D4AF37] tracking-wider uppercase block">
                The Pharaoh's Tomb of Neuromarketing & Experiential Embalming
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
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-[#D4AF37]/45 bg-[#140E08]/90 text-xs font-cinzel font-bold text-[#EDE4D3] hover:border-[#D4AF37] hover:text-[#D4AF37] shadow-sm transition-all"
            >
              <Scroll className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Sacred Parchment CV</span>
            </a>

            {/* Portal Return Button (Switches back to modern view) */}
            <button
              onClick={onReturnToModern}
              className="matte-sand-btn px-4 sm:px-5 py-2 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
              title="Return to the Spider-Verse Modern Portfolio"
            >
              <ArrowLeft className="w-4 h-4 stroke-[3] group-hover:-translate-x-1 transition-transform" />
              <span>WHAT // RETURN</span>
            </button>
          </div>

        </div>
      </header>

      {/* ========================================================
          MUMMY SANCTUM HERO SECTION
          ======================================================== */}
      <section className="relative z-10 pt-20 pb-16 px-6 max-w-6xl mx-auto text-center">
        
        {/* Ancient Hieroglyphic Cartouche Pill */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#16100A]/85 border border-[#D4AF37]/55 shadow-[0_0_30px_rgba(212,175,55,0.3)] mb-6 backdrop-blur-md">
          <span className="text-[#D4AF37] text-sm">𓆣</span>
          <span className="font-mono font-bold text-xs text-[#F5E6CC] tracking-widest uppercase">
            THE PHARAOH'S MUMMY CODEX // CLASSIFIED COMMERCIAL TELEMETRY
          </span>
          <span className="text-[#D4AF37] text-sm">𓂀</span>
        </div>

        {/* Grand Desert & Tomb Title */}
        <h1 className="font-myth font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] tracking-tight leading-[1.05] mythic-gold-text uppercase drop-shadow-[0_12px_30px_rgba(0,0,0,0.95)] mb-6">
          THE ANCIENT DESERT CODEX
        </h1>

        <div className="inline-block mb-6 px-4 py-1 rounded-lg bg-[#241A0E]/60 border border-[#D4AF37]/25 text-[#D4AF37] font-cinzel font-bold text-sm tracking-widest uppercase">
          ✦ NEUROMARKETING & EXPERIENTIAL EMBALMMENT ✦
        </div>

        <p className="max-w-3xl mx-auto font-serif text-base sm:text-xl text-[#DCD1BA] leading-relaxed italic mb-8">
          "{mythologyCodexData.header.subtitle}"
        </p>

        {/* Strategic Credential Plaque */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 p-3.5 px-6 rounded-2xl bg-[#140E08]/90 border border-[#D4AF37]/40 shadow-2xl backdrop-blur-md text-xs font-cinzel">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-ping" />
            <span className="text-[#D4AF37] font-bold">EMBALMED & CURATED BY ADHITHYAN M.</span>
          </div>
          <span className="text-zinc-600 hidden sm:inline">|</span>
          <span className="text-zinc-300">MBA (Marketing & Operations) — NITK</span>
        </div>

        {/* Category Relic Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-12">
          {mythologyCodexData.categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs font-cinzel font-bold tracking-wider uppercase transition-all border ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] text-[#140E08] border-[#FFE082] shadow-[0_0_25px_rgba(212,175,55,0.6)] font-black scale-105'
                  : 'bg-[#140E08]/80 text-[#B8A88E] border-zinc-800 hover:border-[#D4AF37]/60 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </section>

      {/* ========================================================
          THE 6 SACRED MUMMY TOMBS: HIGH-IMPACT CASE STUDIES
          ======================================================== */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredStudies.map((relic) => (
            <article
              key={relic.id}
              className={`arabian-tomb-tablet rounded-3xl p-7 sm:p-9 flex flex-col justify-between border ${relic.borderColor}/50 hover:${relic.borderColor}`}
            >
              <div>
                
                {/* Header: Mummy Sarcophagus Name & Hieroglyph Cartouche */}
                <div className="flex items-start justify-between pb-4 mb-6 border-b border-[#D4AF37]/25">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#2D2113] to-[#120D08] border border-[#D4AF37]/50 flex items-center justify-center text-xl shadow-inner hieroglyph-text select-none">
                      {relic.hieroglyph}
                    </div>
                    <div>
                      <span className="font-cinzel font-black text-xs text-[#D4AF37] tracking-widest block uppercase">
                        {relic.romanNumeral}
                      </span>
                      <span className="font-cinzel text-xs text-[#F5E6CC] font-bold block mt-0.5">
                        {relic.godhead}
                      </span>
                      <span className="font-mono text-[10px] text-[#A6957B] uppercase tracking-wider block mt-0.5">
                        {relic.tombArtifact}
                      </span>
                    </div>
                  </div>

                  <div className="px-3.5 py-1.5 rounded-lg bg-[#140D07] border border-[#D4AF37]/40 text-xs font-cinzel font-bold text-[#FDE68A] shadow-sm">
                    {relic.brand}
                  </div>
                </div>

                {/* Relic Title */}
                <h2 className="font-cinzel font-black text-2xl sm:text-3xl text-[#FAF4E8] leading-snug mb-3">
                  {relic.studyTitle}
                </h2>

                <p className="font-serif italic text-sm text-[#D5C9B3] leading-relaxed mb-6">
                  "{relic.tagline}"
                </p>

                {/* Primary Metric Monolith */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#110B06]/90 border border-[#D4AF37]/35 shadow-inner mb-6">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="font-cinzel font-black text-2xl sm:text-3xl mythic-gold-text">
                        {relic.metrics.primary}
                      </div>
                      <div className="font-mono text-[10px] text-[#A6957B] uppercase mt-1">
                        {relic.metrics.primaryLabel}
                      </div>
                    </div>

                    <div className="border-x border-zinc-800">
                      <div className="font-cinzel font-black text-2xl sm:text-3xl text-[#38BDF8]">
                        {relic.metrics.secondary}
                      </div>
                      <div className="font-mono text-[10px] text-[#A6957B] uppercase mt-1">
                        {relic.metrics.secondaryLabel}
                      </div>
                    </div>

                    <div>
                      <div className="font-cinzel font-black text-lg sm:text-2xl text-[#EDE4D3] truncate">
                        {relic.metrics.tertiary}
                      </div>
                      <div className="font-mono text-[10px] text-[#A6957B] uppercase mt-1 truncate">
                        {relic.metrics.tertiaryLabel}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deep Dive Pillars */}
                <div className="space-y-4 text-xs font-sans">
                  
                  {/* The Commercial Mystery */}
                  <div className="p-4 rounded-xl bg-black/50 border border-zinc-800/90">
                    <span className="font-cinzel font-bold text-[#EDE4D3] block mb-1 text-xs uppercase flex items-center gap-1.5">
                      <span className="text-[#D4AF37]">✦</span> The Commercial Mystery
                    </span>
                    <p className="text-[#C8BCAB] leading-relaxed font-medium">
                      {relic.theMystery}
                    </p>
                  </div>

                  {/* The Subconscious Neuro Revelation */}
                  <div className="p-4 rounded-xl bg-[#0B1220]/90 border border-[#38BDF8]/30">
                    <span className="font-cinzel font-bold text-[#38BDF8] block mb-1 text-xs uppercase flex items-center gap-1.5">
                      <Brain className="w-3.5 h-3.5 text-[#38BDF8]" /> Subconscious Neural Revelation
                    </span>
                    <p className="text-zinc-200 leading-relaxed font-medium">
                      {relic.neuroRevelation}
                    </p>
                  </div>

                  {/* Commercial Impact */}
                  <div className="p-4 rounded-xl bg-[#1D1408]/90 border border-[#D4AF37]/50">
                    <span className="font-cinzel font-bold text-[#F59E0B] block mb-1 text-xs uppercase flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#F59E0B]" /> Monumental Dynastic Outcome
                    </span>
                    <p className="text-[#FFF7E8] font-bold leading-relaxed">
                      {relic.commercialOutcome}
                    </p>
                  </div>

                </div>

              </div>

              {/* Strategic Rule Inscription */}
              <div className="mt-6 pt-4 border-t border-[#D4AF37]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono">
                <span className="text-[#D4AF37] font-bold flex items-center gap-1">
                  <span>𓆣</span>
                  <span>TOMB AXIOM:</span>
                </span>
                <span className="font-serif italic text-[#DCD1BA]">
                  "{relic.strategicRule}"
                </span>
              </div>

            </article>
          ))}
        </div>

      </section>

      {/* ========================================================
          THE 3 IMMUTABLE LAWS OF PHARAONIC MARKETING
          ======================================================== */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        
        <div className="text-center mb-12">
          <span className="font-mono font-bold text-xs text-[#D4AF37] tracking-widest uppercase block mb-2">
            // SACRED PAPYRUS OF THE HIGH PRIESTS
          </span>
          <h2 className="font-cinzel font-black text-3xl sm:text-4xl text-[#FAF4E8] uppercase">
            THE THREE LAWS OF NEURO-EXPERIENTIAL EMBALMING
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mythologyCodexData.ancientPrinciples.map((prin, pIdx) => (
            <div
              key={pIdx}
              className="p-7 rounded-2xl bg-[#140E08]/90 border border-[#D4AF37]/35 shadow-xl backdrop-blur-md relative overflow-hidden group hover:border-[#D4AF37]/70 transition-colors"
            >
              <div className="text-5xl font-serif text-[#D4AF37]/45 mb-3 select-none hieroglyph-text">
                {prin.rune}
              </div>
              <span className="font-mono text-[9px] text-[#A6957B] uppercase tracking-wider block mb-1">
                {prin.hieroglyphTitle}
              </span>
              <h3 className="font-cinzel font-black text-lg text-[#FAF4E8] mb-1">
                {prin.title}
              </h3>
              <p className="font-mono text-[11px] text-[#D4AF37] uppercase font-bold mb-3">
                {prin.subtitle}
              </p>
              <p className="font-sans text-xs text-[#C8BCAB] leading-relaxed font-medium">
                {prin.description}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* ========================================================
          SANCTUM FOOTER & PORTAL RETURN
          ======================================================== */}
      <footer className="relative z-10 bg-[#060402] border-t border-[#D4AF37]/25 py-14 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          
          <div className="w-14 h-14 rounded-full border border-[#D4AF37]/50 bg-[#140E08] mx-auto flex items-center justify-center text-2xl shadow-[0_0_25px_rgba(212,175,55,0.4)] select-none">
            𓆣
          </div>

          <h3 className="font-cinzel font-black text-2xl sm:text-3xl mythic-gold-text uppercase">
            READY TO EMBALM SUBCONSCIOUS LOYALTY INTO YOUR BRAND?
          </h3>

          <p className="font-sans text-sm text-[#A6957B] max-w-xl mx-auto leading-relaxed">
            Whether architecting multi-crore collegiate conclave sponsorships, neuromarketing-backed packaging overhauls, or high-arousal viral storytelling—let's build an enduring brand dynasty.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onReturnToModern}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] text-[#140E08] font-cinzel font-black text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:scale-105 transition-transform flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4 stroke-[3]" />
              <span>Return to Multiverse Portfolio</span>
            </button>

            <a
              href={`mailto:${personalInfo.email}?subject=${encodeURIComponent('[Strategic Consultation] Arabian Codex // Neuromarketing & Experiential Inquiry')}`}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-cinzel font-bold text-xs uppercase tracking-wider border border-white/20 transition-all flex items-center gap-2"
            >
              <span>Summon Adhithyan to Your Brand Empire</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-8 text-xs font-mono text-[#8C7A62] uppercase tracking-widest">
            ADHITHYAN M. // ARABIAN DESERT CODEX // PHARAOH'S ARCHIVES // NITK '26
          </div>

        </div>
      </footer>

      {/* Sticky Floating Return Pill (Allows 1-click return anytime while browsing) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={onReturnToModern}
          className="matte-sand-btn px-4 py-2.5 rounded-full text-xs uppercase tracking-widest flex items-center gap-2 transition-all transform hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4 stroke-[3] group-hover:-translate-x-1 transition-transform" />
          <span>WHAT // EXIT SANCTUM</span>
        </button>
      </div>

    </div>
  );
}
