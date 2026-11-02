import React from 'react';
import { Palette, Video, Brain, Megaphone, Sparkles, TrendingUp, Compass, Award, Zap, CheckCircle2, ArrowRight, Layers, Wrench } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { TOOLKIT_LOGOS } from './ToolLogos';

export default function Skills() {
  const sectorAccents = [
    {
      sector: "SECTOR 01",
      badge: "bg-[#00F0FF] text-[#0B0E14]",
      accentBorder: "border-[#00F0FF]",
      accentText: "text-[#00F0FF]",
      bulletBg: "bg-[#00F0FF]",
      pillTag: "bg-[#00F0FF]/15 text-[#00A3B4] border-[#00F0FF]"
    },
    {
      sector: "SECTOR 02",
      badge: "bg-[#FF0055] text-white",
      accentBorder: "border-[#FF0055]",
      accentText: "text-[#FF0055]",
      bulletBg: "bg-[#FF0055]",
      pillTag: "bg-[#FF0055]/15 text-[#FF0055] border-[#FF0055]"
    },
    {
      sector: "SECTOR 03",
      badge: "bg-[#F59E0B] text-[#0B0E14]",
      accentBorder: "border-[#F59E0B]",
      accentText: "text-[#F59E0B]",
      bulletBg: "bg-[#F59E0B]",
      pillTag: "bg-[#F59E0B]/15 text-[#D97706] border-[#F59E0B]"
    },
    {
      sector: "SECTOR 04",
      badge: "bg-[#7928CA] text-white",
      accentBorder: "border-[#7928CA]",
      accentText: "text-[#7928CA]",
      bulletBg: "bg-[#7928CA]",
      pillTag: "bg-[#7928CA]/15 text-[#7928CA] border-[#7928CA]"
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-24 bg-[#FAFCFF] border-b-3 border-[#0B0E14] relative halftone-spider"
      aria-label="Creative Suite and Capabilities"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b-2.5 border-[#0B0E14]">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0B0E14] text-[#F59E0B] font-mono font-bold text-xs uppercase px-3 py-1 rounded-md border border-[#0B0E14] shadow-spider-sm mb-3">
              <span>// CHAPTER 04 • STRATEGIC ARSENAL</span>
            </div>
            <h2 className="spider-glitch font-syne font-black text-4xl sm:text-5xl text-[#0B0E14] tracking-tight uppercase">
              CREATIVE ARSENAL & CAPABILITIES
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="font-mono font-bold text-xs uppercase bg-white text-[#0B0E14] px-3 py-1.5 rounded-lg border-2 border-[#0B0E14] shadow-spider-sm">
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
                className="spider-card rounded-3xl p-7 sm:p-8 hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Sector Header */}
                  <div className="flex items-start justify-between pb-4 border-b-2 border-zinc-200 mb-6">
                    <div>
                      <div className="inline-block px-2.5 py-0.5 rounded-md font-mono font-black text-[11px] uppercase tracking-wider mb-2 border border-[#0B0E14] shadow-spider-sm ${acc.badge}">
                        {category.sector || `SECTOR 0${catIdx + 1}`}
                      </div>
                      <h3 className="font-syne font-black text-2xl sm:text-[1.65rem] text-[#0B0E14] leading-tight uppercase">
                        {category.title}
                      </h3>
                      {category.subtitle && (
                        <p className="font-sans italic text-xs sm:text-sm text-zinc-600 font-medium mt-1.5 leading-snug">
                          {category.subtitle}
                        </p>
                      )}
                    </div>
                    <span className={`font-mono font-black text-[10px] px-2.5 py-0.5 rounded border uppercase ml-2 shrink-0 ${acc.pillTag}`}>
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
                          className="flex items-center justify-between p-3 rounded-xl bg-zinc-50/90 border border-zinc-200 hover:border-[#0B0E14] hover:bg-white hover:translate-x-1 transition-all group"
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-2 h-2 rounded-full ${acc.bulletBg} group-hover:scale-125 transition-transform shrink-0`} />
                            <span className="font-sans font-bold text-sm text-[#0B0E14] group-hover:text-black">
                              {skillName}
                            </span>
                          </div>
                          {skillLevel ? (
                            <span className="font-mono font-bold text-[11px] uppercase bg-white text-zinc-700 px-2 py-0.5 rounded border border-zinc-300">
                              {skillLevel}
                            </span>
                          ) : (
                            <span className="font-mono text-[11px] text-zinc-400 group-hover:text-[#0B0E14] transition-colors">
                              0{sIdx + 1}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Sector Footer Pill */}
                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span className="uppercase font-bold text-[11px]">
                    {category.skills.length} Core Capabilities
                  </span>
                  <span className="text-[10px] tracking-widest uppercase">
                    COMPREHENSIVE COMPETENCY
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================
            CREATIVE TOOLKIT SECTION (NEW DEDICATED SHOWCASE)
            ======================================================== */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border-3 border-[#0B0E14] shadow-spider-lg mb-16 relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F0FF]/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF0055]/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b-2 border-zinc-200">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#0B0E14] text-[#00F0FF] font-mono font-bold text-xs uppercase px-3 py-1 rounded-md border border-[#0B0E14] shadow-spider-sm mb-2">
                  <Wrench className="w-3.5 h-3.5" />
                  <span>// PRODUCTION SUITE & AI SYSTEMS</span>
                </div>
                <h3 className="spider-glitch font-syne font-black text-3xl sm:text-4xl text-[#0B0E14] tracking-tight uppercase">
                  CREATIVE TOOLKIT
                </h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-600 font-medium mt-1">
                  High-velocity creative software, frontier AI models, paid acquisition suites, and operational intelligence engines.
                </p>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs font-bold bg-[#FAFCFF] px-3.5 py-2 rounded-xl border border-zinc-300">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] animate-ping" />
                <span>11 SPECIALIZED TOOLS</span>
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
                { name: "Google Ads", category: "Paid Media" },
                { name: "Google Search Console", category: "Search SEO" }
              ]).map((tool, tIdx) => {
                const logoInfo = TOOLKIT_LOGOS[tool.name];
                const LogoComponent = logoInfo?.component;
                const borderAcc = logoInfo?.border || "hover:border-[#00F0FF] hover:shadow-[3px_3px_0px_#00F0FF]";

                return (
                  <div
                    key={tIdx}
                    className={`group bg-zinc-50 hover:bg-white p-4 rounded-2xl border-2 border-zinc-200 transition-all duration-200 transform hover:-translate-y-1.5 cursor-default flex flex-col justify-between ${borderAcc}`}
                  >
                    <div>
                      {/* Top Row: Software Logo & Slot Number */}
                      <div className="flex items-center justify-between mb-3">
                        <div 
                          className="w-11 h-11 rounded-xl p-2.5 flex items-center justify-center transition-transform duration-200 group-hover:scale-110 shadow-sm border border-black/5 bg-white"
                          style={{
                            boxShadow: `0 4px 12px ${logoInfo?.bg || 'rgba(0,0,0,0.05)'}`
                          }}
                        >
                          {LogoComponent ? (
                            <LogoComponent className="w-6 h-6 object-contain" />
                          ) : (
                            <Sparkles className="w-5 h-5 text-zinc-400" />
                          )}
                        </div>
                        <span className="font-mono font-black text-[10px] text-zinc-400 group-hover:text-zinc-600 transition-colors">
                          #{String(tIdx + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Tool Name */}
                      <div className="font-syne font-black text-base sm:text-lg text-[#0B0E14] tracking-tight group-hover:text-[#FF0055] transition-colors leading-tight">
                        {tool.name}
                      </div>
                    </div>

                    {/* Category Label */}
                    <div className="font-mono text-[10px] uppercase font-bold text-zinc-500 mt-2.5 pt-2 border-t border-zinc-200/60">
                      {tool.category}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Copy / Direct Summary Banner */}
            <div className="mt-8 p-4 rounded-2xl bg-zinc-100 border border-zinc-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="text-zinc-500 font-bold uppercase">
                COMPLETE TOOLKIT DIRECTORY:
              </span>
              <span className="font-sans font-bold text-[#0B0E14] text-xs sm:text-sm">
                Figma · Canva · CapCut · ChatGPT · Gemini · Claude · Perplexity · Google Sheets · Notion · Google Ads · Google Search Console
              </span>
            </div>
          </div>
        </div>

        {/* Strategic Marketing Tenets Panel */}
        <div className="bg-[#0B0E14] text-white p-8 sm:p-10 rounded-3xl border-3 border-[#0B0E14] shadow-spider-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 space-y-2">
              <span className="inline-block bg-[#FF0055] text-white font-mono font-bold text-xs uppercase px-2.5 py-1 rounded">
                STRATEGIC CREATIVE CODE
              </span>
              <h3 className="font-syne font-black text-3xl sm:text-4xl text-white leading-tight uppercase">
                STRATEGIC TENETS OF MODERN MARKETING
              </h3>
              <p className="font-sans text-xs text-zinc-400 font-medium">
                Guiding principles for high-conversion creative brand execution and measurable growth.
              </p>
            </div>

            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-zinc-900/90 p-5 rounded-2xl border border-zinc-700 hover:border-[#00F0FF] transition-colors">
                <span className="font-mono font-bold text-xs uppercase text-[#00F0FF] block mb-2">
                  01 / NEURAL RESONANCE
                </span>
                <p className="font-sans text-xs text-zinc-300 font-medium leading-relaxed">
                  Tapping subconscious consumer emotion, gaze fixations, and EEG brainwave symmetry before spend.
                </p>
              </div>

              <div className="bg-zinc-900/90 p-5 rounded-2xl border border-zinc-700 hover:border-[#FF0055] transition-colors">
                <span className="font-mono font-bold text-xs uppercase text-[#FF0055] block mb-2">
                  02 / CREATIVE VELOCITY
                </span>
                <p className="font-sans text-xs text-zinc-300 font-medium leading-relaxed">
                  Data-backed visual hooks, rapid thumbnail A/B testing, and generative AI production workflows.
                </p>
              </div>

              <div className="bg-zinc-900/90 p-5 rounded-2xl border border-zinc-700 hover:border-[#F59E0B] transition-colors">
                <span className="font-mono font-bold text-xs uppercase text-[#F59E0B] block mb-2">
                  03 / COMMERCIAL VALUE
                </span>
                <p className="font-sans text-xs text-zinc-300 font-medium leading-relaxed">
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
