import React from 'react';
import { Brain, Zap, DollarSign, Sparkles, CheckCircle2, GraduationCap } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section 
      id="about" 
      className="py-24 bg-[#FAFCFF] border-b-3 border-[#0B0E14] relative overflow-hidden halftone-spider"
      aria-label="About Section"
    >
      {/* Subtle Genshin Anime Horizon Ambient Glow */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full overflow-hidden pointer-events-none z-0 opacity-15">
        <div 
          className="w-full h-full bg-cover bg-center filter contrast-110"
          style={{ backgroundImage: `url('/images/genshin-scenery.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFCFF] via-[#FAFCFF]/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b-2.5 border-[#0B0E14]">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0B0E14] text-[#00F0FF] font-mono font-bold text-xs uppercase px-3 py-1 rounded-md border border-[#0B0E14] shadow-spider-sm mb-3">
              <span>// CHAPTER 01 • STRATEGIC ORIGIN</span>
            </div>
            <h2 className="spider-glitch font-syne font-black text-4xl sm:text-5xl text-[#0B0E14] tracking-tight uppercase">
              ABOUT & STRATEGIC PERSPECTIVES
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="inline-flex items-center gap-2 font-mono font-bold text-xs uppercase bg-white dark:bg-zinc-900 text-[#0B0E14] dark:text-zinc-100 px-3.5 py-1.5 rounded-xl border-2 border-[#0B0E14] dark:border-zinc-700 shadow-spider-sm transition-all hover:scale-105">
              <GraduationCap className="w-4 h-4 text-[#FF0055] dark:text-[#00F0FF]" />
              <span>MBA (Marketing & Operations) • NITK '26</span>
            </div>
          </div>
        </div>

        {/* Narrative & Profile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="spider-card p-7 sm:p-9 rounded-3xl">
              <h3 className="font-syne font-bold text-2xl sm:text-3xl text-[#0B0E14] leading-snug mb-5">
                I’m fascinated by what makes people notice, trust, and ultimately <span className="italic font-serif text-[#FF0055]">fall in love with a brand</span>.
              </h3>

              <div className="space-y-4 font-sans text-base text-zinc-700 leading-relaxed font-medium">
                <p>
                  With an{' '}
                  <span className="bg-[#00F0FF]/25 text-[#0B0E14] font-bold px-1.5 py-0.5 border border-[#0B0E14] rounded">
                    MBA in Marketing & Operations from NITK
                  </span>
                  , I work at the intersection of brand strategy, consumer psychology, creative technology, and business growth. I believe great marketing goes beyond visibility — it shapes perception, creates meaning, and builds lasting connections.
                </p>
                <p>
                  My experience brings together creativity and measurable business outcomes. At{' '}
                  <strong className="text-[#0B0E14]">Zenrises Creatives</strong>, I leveraged AI-assisted content strategy and creative experimentation to drive a{' '}
                  <span className="bg-[#00F0FF]/20 text-[#0B0E14] font-bold px-1.5 py-0.5 border border-[#0B0E14] rounded">
                    137.5% increase in views and 79.5% growth in subscribers
                  </span>
                  . At <span className="font-bold underline decoration-2 decoration-[#FF0055]">Taj Gateway Bekal (IHCL)</span>, I gained experience in workforce engagement and organizational operations. I also led sponsorship pitching and brand partnerships for leading collegiate events across South India, helping secure{' '}
                  <span className="bg-[#FF0055]/15 text-[#FF0055] font-black px-1.5 py-0.5 border border-[#0B0E14] rounded">
                    ₹36+ lakh in sponsorships
                  </span>
                  .
                </p>
                <p>
                  Beyond conventional marketing, I'm deeply interested in{' '}
                  <span className="bg-[#F59E0B]/20 text-[#0B0E14] font-bold px-1.5 py-0.5 border border-[#0B0E14] rounded">
                    neuromarketing
                  </span>{' '}
                  — exploring how EEG-based frontal asymmetry and eye-tracking can reveal subconscious consumer preferences and help brands make more informed decisions.
                </p>
              </div>

              {/* Spider-Verse Editorial Quote Box */}
              <div className="mt-8 p-5 bg-[#0B0E14] text-white rounded-2xl border-2 border-[#0B0E14] shadow-spider flex items-start gap-3.5">
                <Brain className="w-6 h-6 text-[#00F0FF] shrink-0 mt-0.5" />
                <p className="font-sans text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed italic">
                  “I'm here to question the obvious, experiment with the unconventional, and turn interesting ideas into meaningful business outcomes.”
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Pillars & Quick Facts */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Facts Dossier */}
            <div className="spider-card rounded-3xl p-6 sm:p-7">
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b-2 border-[#0B0E14]">
                <span className="font-mono font-bold text-xs uppercase tracking-wider text-[#0B0E14] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF0055]" />
                  STRATEGIC DOSSIER
                </span>
                <span className="bg-[#00F0FF] text-[#0B0E14] font-mono font-black text-[10px] px-2 py-0.5 rounded border border-[#0B0E14]">
                  VERIFIED
                </span>
              </div>

              <div className="space-y-3.5">
                {aboutData.quickFacts.map((fact, idx) => (
                  <div key={idx} className="pb-3 border-b border-zinc-100 last:border-0 last:pb-0">
                    <span className="text-zinc-500 font-bold uppercase text-[10px] font-mono tracking-wider block mb-1">
                      {fact.label}
                    </span>
                    <span className="font-sans font-bold text-xs sm:text-sm text-[#0B0E14] leading-snug block">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Pillars */}
            <div className="space-y-3">
              <div className="font-mono font-bold text-xs uppercase tracking-widest text-zinc-600 flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#FF0055] fill-[#FF0055]" />
                THREE CORE CAPABILITY PILLARS
              </div>

              {aboutData.pillars.map((pillar, idx) => {
                const accents = [
                  { border: 'hover:border-[#00F0FF]', tag: 'bg-[#00F0FF] text-[#0B0E14]' },
                  { border: 'hover:border-[#FF0055]', tag: 'bg-[#FF0055] text-white' },
                  { border: 'hover:border-[#F59E0B]', tag: 'bg-[#F59E0B] text-black' },
                ];
                const acc = accents[idx % accents.length];

                return (
                  <div 
                    key={idx}
                    className={`bg-white p-5 rounded-2xl border-2.5 border-[#0B0E14] shadow-spider-sm hover:-translate-y-1 transition-all ${acc.border}`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`${acc.tag} font-mono font-black text-xs px-2 py-0.5 rounded border border-[#0B0E14]`}>
                        {pillar.index}
                      </span>
                      <h4 className="font-syne font-bold text-sm text-[#0B0E14]">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="font-sans text-xs text-zinc-600 font-medium leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
