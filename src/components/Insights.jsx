import React, { useState } from 'react';
import { BookOpen, Clock, Tag, ArrowUpRight, ChevronRight, MessageSquareQuote, Sparkles, Zap } from 'lucide-react';
import { insightsData } from '../data/portfolioData';

export default function Insights() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section 
      id="insights" 
      className="py-28 bg-[#07090E] border-b border-white/10 relative overflow-hidden"
      aria-label="Brand Insights and Ideas"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#00F0FF]/5 rounded-full blur-[160px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#F59E0B] font-bold mb-3">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] inline-block animate-pulse" />
              <span>CHAPTER 05 // DISPATCHES</span>
            </div>
            <h2 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Ideas, Essays &amp; <span className="italic font-normal text-[#F59E0B]">Strategic Notes</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <span className="font-mono font-medium text-xs uppercase bg-white/5 border border-white/15 text-zinc-300 px-4 py-2 rounded-full shadow-md backdrop-blur-md">
              NEUROMARKETING • VIRAL AI PLAYBOOKS • B2B DEALS
            </span>
          </div>
        </div>

        {/* Editorial Articles List */}
        <div className="space-y-6">
          {insightsData.map((item) => (
            <article 
              key={item.id}
              className="bg-[#0E121B]/80 backdrop-blur-xl border border-white/10 hover:border-[#F59E0B]/40 rounded-3xl p-7 sm:p-9 hover:-translate-y-1 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                <div className="lg:w-3/4 space-y-4">
                  {/* Article Metadata */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                    <span className="bg-[#F59E0B]/15 text-[#F59E0B] font-bold px-3 py-1 rounded-full border border-[#F59E0B]/30">
                      {item.issue}
                    </span>
                    <span className="text-zinc-400">
                      {item.date}
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="flex items-center gap-1.5 text-zinc-400">
                      <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                      {item.readTime}
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="bg-white/5 text-zinc-300 uppercase text-[10px] px-2.5 py-0.5 rounded-full border border-white/10">
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white leading-snug group-hover:text-[#F59E0B] transition-colors">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                    {item.excerpt}
                  </p>

                  {/* Topic Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.topics.map((topic, tIdx) => (
                      <span 
                        key={tIdx}
                        className="text-xs font-mono text-zinc-400 bg-white/5 px-3 py-1 rounded-full border border-white/5"
                      >
                        #{topic}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Key Takeaway */}
                  {expandedId === item.id && (
                    <div className="mt-6 p-6 rounded-2xl bg-black/50 border border-[#F59E0B]/30 text-zinc-200 shadow-lg animate-fadeIn">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider mb-2 flex items-center gap-2 text-[#F59E0B]">
                        <MessageSquareQuote className="w-4 h-4" />
                        <span>TACTICAL EXECUTIVE TAKEAWAY</span>
                      </div>
                      <p className="font-sans text-sm sm:text-base text-zinc-100 font-medium leading-relaxed">
                        {item.takeaway}
                      </p>
                    </div>
                  )}
                </div>

                {/* Right Action Button */}
                <div className="lg:w-1/4 flex lg:flex-col items-center lg:items-end justify-between gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/10">
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="px-5 py-2.5 bg-white/10 hover:bg-[#F59E0B] hover:text-black text-white font-mono font-bold text-xs uppercase tracking-wider rounded-full border border-white/15 inline-flex items-center gap-2 transition-all duration-200"
                  >
                    <span>{expandedId === item.id ? 'Hide Key' : 'Read Strategic Key'}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${expandedId === item.id ? 'rotate-90' : ''}`} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
