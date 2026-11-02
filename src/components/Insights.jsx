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
      className="py-24 bg-[#FAFCFF] border-b-3 border-[#0B0E14] relative halftone-spider"
      aria-label="Brand Insights and Ideas"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b-2.5 border-[#0B0E14]">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0B0E14] text-[#00F0FF] font-mono font-bold text-xs uppercase px-3 py-1 rounded-md border border-[#0B0E14] shadow-spider-sm mb-3">
              <span>// CHAPTER 05 • DISPATCHES</span>
            </div>
            <h2 className="spider-glitch font-syne font-black text-4xl sm:text-5xl text-[#0B0E14] tracking-tight uppercase">
              IDEAS, ESSAYS & STRATEGIC NOTES
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="font-mono font-bold text-xs uppercase bg-white text-[#0B0E14] px-3 py-1.5 rounded-lg border-2 border-[#0B0E14] shadow-spider-sm">
              NEUROMARKETING • VIRAL AI PLAYBOOKS • B2B DEALS
            </span>
          </div>
        </div>

        {/* Editorial Articles List */}
        <div className="space-y-6">
          {insightsData.map((item, idx) => (
            <article 
              key={item.id}
              className="spider-card rounded-3xl p-6 sm:p-9 hover:-translate-y-1 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                <div className="lg:w-3/4 space-y-3.5">
                  {/* Article Metadata */}
                  <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
                    <span className="bg-[#0B0E14] text-[#00F0FF] font-bold px-2 py-0.5 rounded text-xs">
                      {item.issue}
                    </span>
                    <span className="text-zinc-500 font-medium">
                      {item.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-zinc-600 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#FF0055]" />
                      {item.readTime}
                    </span>
                    <span>•</span>
                    <span className="bg-zinc-100 text-[#0B0E14] font-bold uppercase text-[10px] px-2.5 py-0.5 rounded border border-zinc-200">
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-syne font-bold text-2xl sm:text-3xl text-[#0B0E14] leading-snug hover:text-[#FF0055] transition-colors">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-sans text-sm sm:text-base text-zinc-600 leading-relaxed font-medium">
                    {item.excerpt}
                  </p>

                  {/* Topic Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.topics.map((topic, tIdx) => (
                      <span 
                        key={tIdx}
                        className="text-xs font-mono font-medium text-zinc-600 bg-zinc-50 px-2.5 py-0.5 rounded border border-zinc-200"
                      >
                        #{topic}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Key Takeaway */}
                  {expandedId === item.id && (
                    <div className="mt-5 p-5 rounded-2xl bg-zinc-50 border-2 border-[#0B0E14] text-[#0B0E14] shadow-spider-sm animate-fadeIn">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider mb-1.5 flex items-center gap-2 text-[#FF0055]">
                        <MessageSquareQuote className="w-4 h-4 stroke-[2.5]" />
                        <span>TACTICAL EXECUTIVE TAKEAWAY</span>
                      </div>
                      <p className="font-sans text-sm sm:text-base text-zinc-800 font-semibold leading-relaxed">
                        {item.takeaway}
                      </p>
                    </div>
                  )}
                </div>

                {/* Right Action Button */}
                <div className="lg:w-1/4 flex lg:flex-col items-center lg:items-end justify-between gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-zinc-200">
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="spider-btn px-4 py-2 bg-white text-[#0B0E14] hover:bg-zinc-50 font-display font-black text-xs uppercase tracking-wider rounded-xl inline-flex items-center gap-1.5"
                  >
                    <span>{expandedId === item.id ? 'Hide Key' : 'Read Strategic Key'}</span>
                    <ChevronRight className={`w-4 h-4 stroke-[3] transition-transform ${expandedId === item.id ? 'rotate-90' : ''}`} />
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
