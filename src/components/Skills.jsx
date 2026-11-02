import React from 'react';
import { Palette, Video, Brain, Megaphone, Sparkles, TrendingUp, Compass, Award, Zap, CheckCircle2, ArrowRight, Layers, Wrench } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { TOOLKIT_LOGOS } from './ToolLogos';

export default function Skills() {
  const sectorAccents = [
    {
      sector: "SECTOR 01",
      badge: "bg-[#00F0FF]/15 text-[#00F0FF] border-[#00F0FF]/30",
      accentBorder: "border-[#00F0FF]/30 hover:border-[#00F0FF]/60",
      accentText: "text-[#00F0FF]",
      bulletBg: "bg-[#00F0FF]",
      pillTag: "bg-[#00F0FF]/10 text-[#00F0FF] border-[#00F0FF]/30"
    },
    {
      sector: "SECTOR 02",
      badge: "bg-[#FF0055]/15 text-[#FF0055] border-[#FF0055]/30",
      accentBorder: "border-[#FF0055]/30 hover:border-[#FF0055]/60",
      accentText: "text-[#FF0055]",
      bulletBg: "bg-[#FF0055]",
      pillTag: "bg-[#FF0055]/10 text-[#FF0055] border-[#FF0055]/30"
    },
    {
      sector: "SECTOR 03",
      badge: "bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/30",
      accentBorder: "border-[#F59E0B]/30 hover:border-[#F59E0B]/60",
      accentText: "text-[#F59E0B]",
      bulletBg: "bg-[#F59E0B]",
      pillTag: "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/30"
    },
    {
      sector: "SECTOR 04",
      badge: "bg-[#A855F7]/15 text-[#A855F7] border-[#A855F7]/30",
      accentBorder: "border-[#A855F7]/30 hover:border-[#A855F7]/60",
      accentText: "text-[#A855F7]",
      bulletBg: "bg-[#A855F7]",
      pillTag: "bg-[#A855F7]/10 text-[#A855F7] border-[#A855F7]/30"
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-28 bg-[#090C12] border-b border-white/10 relative overflow-hidden"
      aria-label="Creative Suite and Capabilities"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-[#00F0FF]/5 rounded-full blur-[160px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#F59E0B] font-bold mb-3">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] inline-block animate-pulse" />
              <span>CHAPTER 04 // STRATEGIC ARSENAL</span>
            </div>
            <h2 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Creative Arsenal &amp; <span className="italic font-normal text-[#F59E0B]">Capabilities</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <span className="font-mono font-medium text-xs uppercase bg-white/5 border border-white/15 text-zinc-300 px-4 py-2 rounded-full shadow-md backdrop-blur-md">
              STRATEGY • CREATIVE • INSIGHTS • EXECUTION
            </span>
          </div>
        </div>

        {/* 4-Sector Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillsData.categories.map((category, catIdx) => {
            const acc = sectorAccents[catIdx % sectorAccents.length];

            return (
              <div 
                key={catIdx}
                className="bg-[#0E121B]/80 backdrop-blur-xl border border-white/10 hover:border-[#F59E0B]/40 rounded-3xl p-7 sm:p-9 hover:-translate-y-1 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between"
              >
                <div>
                  {/* Sector Header */}
                  <div className="flex items-start justify-between pb-5 border-b border-white/10 mb-6">
                    <div>
                      <div className={`inline-block px-3 py-0.5 rounded-full font-mono font-bold text-[11px] uppercase tracking-wider mb-2 border ${acc.badge}`}>
                        {category.sector || `SECTOR 0${catIdx + 1}`}
                      </div>
                      <h3 className="font-serif font-bold text-2xl sm:text-[1.65rem] text-white leading-tight">
                        {category.title}
                      </h3>
                      {category.subtitle && (
                        <p className="font-sans italic text-xs sm:text-sm text-zinc-400 font-normal mt-1.5 leading-snug">
                          {category.subtitle}
                        </p>
                      )}
                    </div>
                    <span className={`font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border uppercase ml-2 shrink-0 ${acc.pillTag}`}>
                      ACTIVE
                    </span>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2.5">
                    {category.skills.map((skill, sIdx) => {
                      const skillName = typeof skill === 'string' ? skill : skill.name;
                      const skillLevel = typeof skill === 'object' && skill.level ? skill.level : null;

                      return (
                        <div 
                          key={sIdx}
                          className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-white/15 hover:bg-white/5 transition-all group"
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-2 h-2 rounded-full ${acc.bulletBg} group-hover:scale-125 transition-transform shrink-0`} />
                            <span className="font-sans font-medium text-sm text-zinc-200 group-hover:text-white transition-colors">
                              {skillName}
                            </span>
                          </div>
                          {skillLevel ? (
                            <span className="font-mono font-bold text-[11px] uppercase bg-white/5 text-[#F59E0B] px-2.5 py-0.5 rounded border border-white/10">
                              {skillLevel}
                            </span>
                          ) : (
                            <span className="font-mono text-[11px] text-zinc-500 group-hover:text-zinc-300 transition-colors">
                              0{sIdx + 1}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Sector Footer Pill */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="uppercase font-semibold text-[11px]">
                    {category.skills.length} Core Capabilities
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-zinc-500">
                    COMPREHENSIVE COMPETENCY
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================
            CREATIVE TOOLKIT SECTION (LUXURY EDITORIAL SHOWCASE)
            ======================================================== */}
        <div className="bg-[#0E121B]/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.7)] mb-16 relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F59E0B]/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00F0FF]/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 text-[#F59E0B] font-mono font-bold text-xs uppercase px-3 py-1 rounded-full border border-[#F59E0B]/25 mb-3">
                  <Wrench className="w-3.5 h-3.5" />
                  <span>// PRODUCTION SUITE &amp; AI SYSTEMS</span>
                </div>
                <h3 className="font-serif font-bold text-3xl sm:text-4xl text-white tracking-tight">
                  Creative Toolkit &amp; <span className="italic font-normal text-[#F59E0B]">Software</span>
                </h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 font-normal mt-1.5">
                  High-velocity creative software, frontier AI models, paid acquisition suites, and operational intelligence engines.
                </p>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs font-bold bg-white/5 px-4 py-2 rounded-full border border-white/10 text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
                <span>{(skillsData.toolkit?.length || 12)} SPECIALIZED ENGINES</span>
              </div>
            </div>

            {/* Toolkit Grid with Software Logos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
              {(skillsData.toolkit || [
                { name: "Figma", category: "Design & UX" },
                { name: "Canva", category: "Brand Graphics" },
                { name: "CapCut", category: "Video Production" },
                { name: "ChatGPT", category: "Strategy & Copy" },
                { name: "Gemini", category: "Multimodal AI" },
                { name: "Claude", category: "Cognitive AI" },
                { name: "Perplexity", category: "Deep Research" },
                { name: "Google Sheets", category: "Data & Ops" },
                { name: "Notion", category: "Workflows & Docs" },
                { name: "Microsoft Teams", category: "Enterprise Collab" },
                { name: "Google Ads", category: "Paid Media" },
                { name: "Google Search Console", category: "Search SEO" }
              ]).map((tool, tIdx) => {
                const logoInfo = TOOLKIT_LOGOS[tool.name];
                const LogoComponent = logoInfo?.component;

                return (
                  <div
                    key={tIdx}
                    className="group bg-black/40 hover:bg-[#141A26] p-4 rounded-2xl border border-white/10 hover:border-[#F59E0B]/50 transition-all duration-300 transform hover:-translate-y-1 cursor-default flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                  >
                    <div>
                      {/* Top Row: Software Logo & Slot Number */}
                      <div className="flex items-center justify-between mb-3">
                        <div 
                          className="w-11 h-11 rounded-xl p-2.5 flex items-center justify-center transition-transform duration-200 group-hover:scale-110 shadow-sm border border-white/10 bg-white/5"
                        >
                          {LogoComponent ? (
                            <LogoComponent className="w-6 h-6 object-contain" />
                          ) : (
                            <Sparkles className="w-5 h-5 text-zinc-400" />
                          )}
                        </div>
                        <span className="font-mono font-medium text-[10px] text-zinc-500 group-hover:text-[#F59E0B] transition-colors">
                          #{String(tIdx + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Tool Name */}
                      <div className="font-serif font-bold text-base sm:text-lg text-white tracking-tight group-hover:text-[#F59E0B] transition-colors leading-tight">
                        {tool.name}
                      </div>
                    </div>

                    {/* Category Label */}
                    <div className="font-mono text-[10px] uppercase font-medium text-zinc-400 mt-2.5 pt-2 border-t border-white/5">
                      {tool.category}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Summary Banner */}
            <div className="mt-8 p-4 rounded-2xl bg-black/40 border border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="text-[#F59E0B] font-bold uppercase tracking-wider">
                COMPLETE TOOLKIT DIRECTORY:
              </span>
              <span className="font-sans font-medium text-zinc-300 text-xs sm:text-sm">
                Figma · Canva · CapCut · ChatGPT · Gemini · Claude · Perplexity · Google Sheets · Notion · Microsoft Teams · Google Ads · Google Search Console
              </span>
            </div>
          </div>
        </div>

        {/* Strategic Marketing Tenets Panel */}
        <div className="bg-gradient-to-r from-black/80 via-[#0E121B] to-black/80 text-white p-8 sm:p-10 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 space-y-3">
              <span className="inline-block bg-[#F59E0B]/15 text-[#F59E0B] font-mono font-bold text-xs uppercase px-3 py-1 rounded-full border border-[#F59E0B]/30">
                STRATEGIC CREATIVE CODE
              </span>
              <h3 className="font-serif font-black text-3xl sm:text-4xl text-white leading-tight">
                Strategic Tenets of Modern Marketing
              </h3>
              <p className="font-sans text-xs text-zinc-400 font-normal leading-relaxed">
                Guiding principles for high-conversion creative brand execution and measurable growth.
              </p>
            </div>

            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-black/50 p-6 rounded-2xl border border-white/10 hover:border-[#00F0FF]/40 transition-colors">
                <span className="font-mono font-bold text-xs uppercase text-[#00F0FF] block mb-2">
                  01 / NEURAL RESONANCE
                </span>
                <p className="font-sans text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                  Tapping subconscious consumer emotion, gaze fixations, and EEG brainwave symmetry before spend.
                </p>
              </div>

              <div className="bg-black/50 p-6 rounded-2xl border border-white/10 hover:border-[#FF0055]/40 transition-colors">
                <span className="font-mono font-bold text-xs uppercase text-[#FF0055] block mb-2">
                  02 / CREATIVE VELOCITY
                </span>
                <p className="font-sans text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                  Data-backed visual hooks, rapid thumbnail A/B testing, and generative AI production workflows.
                </p>
              </div>

              <div className="bg-black/50 p-6 rounded-2xl border border-white/10 hover:border-[#F59E0B]/40 transition-colors">
                <span className="font-mono font-bold text-xs uppercase text-[#F59E0B] block mb-2">
                  03 / COMMERCIAL VALUE
                </span>
                <p className="font-sans text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                  Converting raw attention into high-stakes corporate sponsorships and measurable pipeline growth.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
