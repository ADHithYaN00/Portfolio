import React from 'react';
import { Brain, Zap, DollarSign, Sparkles, CheckCircle2, GraduationCap, ArrowUpRight } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section 
      id="about" 
      className="py-28 bg-[#07090E] border-b border-white/10 relative overflow-hidden"
      aria-label="About Section"
    >
      {/* Subtle Warm Amber & Indigo Atmospheric Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#00F0FF]/5 rounded-full blur-[160px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#F59E0B] font-bold mb-3">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] inline-block animate-pulse" />
              <span>CHAPTER 01 // STRATEGIC ORIGIN</span>
            </div>
            <h2 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              About &amp; Strategic <span className="italic font-normal text-[#F59E0B]">Perspective</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="inline-flex items-center gap-2.5 font-mono text-xs uppercase bg-white/5 border border-white/15 text-zinc-300 px-4 py-2 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-md">
              <GraduationCap className="w-4 h-4 text-[#F59E0B]" />
              <span>MBA (Marketing &amp; Operations) • NITK '26</span>
            </div>
          </div>
        </div>

        {/* Narrative & Profile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-[#0E121B]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <h3 className="font-serif font-normal text-2xl sm:text-3xl text-white leading-relaxed mb-6">
                I’m fascinated by what makes people notice, trust, and ultimately{' '}
                <span className="italic font-serif text-[#F59E0B] underline decoration-[#F59E0B]/30 decoration-2 underline-offset-4">
                  fall in love with a brand
                </span>.
              </h3>

              <div className="space-y-5 font-sans text-base text-zinc-300 leading-relaxed font-normal">
                <p>
                  With an{' '}
                  <span className="bg-[#F59E0B]/10 text-[#F59E0B] font-semibold px-2 py-0.5 rounded border border-[#F59E0B]/30">
                    MBA in Marketing &amp; Operations from NITK Surathkal
                  </span>
                  , I work at the intersection of brand strategy, consumer psychology, creative technology, and business growth. I believe great marketing goes beyond visibility — it shapes perception, creates meaning, and builds lasting emotional resonance.
                </p>
                <p>
                  My experience bridges high-concept storytelling and measurable bottom-line outcomes. At{' '}
                  <strong className="text-white font-semibold">Zenrises Creatives</strong>, I leveraged AI-assisted content strategy and audience retention modeling to drive a{' '}
                  <span className="bg-white/10 text-white font-semibold px-2 py-0.5 rounded border border-white/15">
                    137.5% increase in views and 79.5% subscriber growth
                  </span>
                  . At <span className="text-zinc-100 font-semibold underline decoration-white/30">Taj Gateway Bekal (IHCL)</span>, I honed operational precision in luxury hospitality. I also spearheaded corporate sponsorship pitching and brand alliances for leading collegiate properties across South India, securing over{' '}
                  <span className="bg-[#F59E0B]/15 text-[#F59E0B] font-bold px-2 py-0.5 rounded border border-[#F59E0B]/40">
                    ₹36+ Lakh in sponsorships
                  </span>
                  .
                </p>
                <p>
                  Beyond conventional marketing funnels, I am deeply invested in{' '}
                  <span className="text-white font-semibold">neuromarketing research</span> — exploring how Frontal EEG Asymmetry and eye-tracking gaze fixation decode subconscious decision-making, allowing brands to eliminate guesswork and build authentic loyalty.
                </p>
              </div>

              {/* Luxury Editorial Quote Box */}
              <div className="mt-8 p-6 bg-gradient-to-r from-black/60 to-[#0A0D14]/80 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Brain className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <div>
                  <p className="font-serif italic text-base sm:text-lg text-zinc-100 leading-relaxed">
                    “I question the obvious, experiment with the unconventional, and turn ambitious ideas into lasting commercial impact.”
                  </p>
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 mt-2 block">
                    — Strategic Ethos • Adhithyan M.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dossier & Pillars */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Facts Dossier */}
            <div className="bg-[#0E121B]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-7 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                <span className="font-mono font-bold text-xs uppercase tracking-[0.2em] text-[#F59E0B] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                  STRATEGIC DOSSIER
                </span>
                <span className="bg-[#F59E0B]/15 text-[#F59E0B] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-[#F59E0B]/30 tracking-wider">
                  VERIFIED '26
                </span>
              </div>

              <div className="space-y-4">
                {aboutData.quickFacts.map((fact, idx) => (
                  <div key={idx} className="pb-3.5 border-b border-white/5 last:border-0 last:pb-0">
                    <span className="text-zinc-500 font-mono font-medium uppercase text-[11px] tracking-wider block mb-1">
                      {fact.label}
                    </span>
                    <span className="font-sans font-medium text-sm text-zinc-200 leading-snug block">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Capability Pillars */}
            <div className="space-y-3.5">
              <div className="font-mono font-bold text-xs uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2 px-1">
                <Zap className="w-3.5 h-3.5 text-[#F59E0B]" />
                THREE STRATEGIC PILLARS
              </div>

              {aboutData.pillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="bg-[#0E121B]/70 hover:bg-[#0E121B] border border-white/10 hover:border-[#F59E0B]/40 p-5 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-serif font-black text-sm text-[#F59E0B] bg-[#F59E0B]/10 px-2.5 py-0.5 rounded-md border border-[#F59E0B]/25">
                      {pillar.index}
                    </span>
                    <h4 className="font-serif font-bold text-base text-white group-hover:text-[#F59E0B] transition-colors">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed pl-10">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
