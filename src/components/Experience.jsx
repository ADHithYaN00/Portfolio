import React, { useState } from 'react';
import { Briefcase, GraduationCap, MapPin, Award, Users, Trophy, Zap, Sparkles, Megaphone } from 'lucide-react';
import { experienceData, leadershipData, educationData, scholasticAchievements } from '../data/portfolioData';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('leadership');

  return (
    <section 
      id="experience" 
      className="py-24 bg-[#FAFCFF] border-b-3 border-[#0B0E14] relative halftone-spider"
      aria-label="Track Record and Leadership"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b-2.5 border-[#0B0E14]">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0B0E14] text-[#FF0055] font-mono font-bold text-xs uppercase px-3 py-1 rounded-md border border-[#0B0E14] shadow-spider-sm mb-3">
              <span>// CHAPTER 02 • MISSION LOG</span>
            </div>
            <h2 className="spider-glitch font-syne font-black text-4xl sm:text-5xl text-[#0B0E14] tracking-tight uppercase">
              TRACK RECORD & BRAND IMPACT
            </h2>
          </div>

          {/* Tab Switcher */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('leadership')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-display font-black tracking-wider uppercase transition-all border-2 ${
                activeTab === 'leadership'
                  ? 'bg-[#0B0E14] text-white border-[#0B0E14] shadow-spider-sm'
                  : 'bg-white text-zinc-700 border-zinc-300 hover:border-[#0B0E14]'
              }`}
            >
              <Megaphone className="w-3.5 h-3.5 text-[#FF0055]" />
              <span>Sponsorships & Revenue</span>
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-display font-black tracking-wider uppercase transition-all border-2 ${
                activeTab === 'experience'
                  ? 'bg-[#0B0E14] text-white border-[#0B0E14] shadow-spider-sm'
                  : 'bg-white text-zinc-700 border-zinc-300 hover:border-[#0B0E14]'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>Campaigns & Growth</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-display font-black tracking-wider uppercase transition-all border-2 ${
                activeTab === 'education'
                  ? 'bg-[#0B0E14] text-white border-[#0B0E14] shadow-spider-sm'
                  : 'bg-white text-zinc-700 border-zinc-300 hover:border-[#0B0E14]'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Education & Honors</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Brand Leadership & Sponsorship Revenue */}
        {activeTab === 'leadership' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Top Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="spider-card p-6 rounded-2xl border-t-4 border-t-[#FF0055]">
                <span className="font-mono font-bold text-xs text-zinc-500 uppercase tracking-wider block mb-1">
                  CUMULATIVE CAPITAL ACQUIRED
                </span>
                <span className="font-syne font-black text-5xl text-[#0B0E14] leading-none block">
                  ₹36+ LAKH
                </span>
                <span className="font-mono text-xs text-[#FF0055] font-bold inline-block mt-2">
                  Incident (₹25L+) & Bizwaves (₹8L+)
                </span>
              </div>

              <div className="spider-card p-6 rounded-2xl border-t-4 border-t-[#00F0FF]">
                <span className="font-mono font-bold text-xs text-zinc-500 uppercase tracking-wider block mb-1">
                  MARKETING & CREATIVE SQUAD
                </span>
                <span className="font-syne font-black text-5xl text-[#0B0E14] leading-none block">
                  120+ CREW
                </span>
                <span className="font-mono text-xs text-[#00F0FF] font-bold inline-block mt-2">
                  Campus Activations, Buzz & PR
                </span>
              </div>

              <div className="spider-card p-6 rounded-2xl border-t-4 border-t-[#F59E0B]">
                <span className="font-mono font-bold text-xs text-zinc-500 uppercase tracking-wider block mb-1">
                  SOUTH INDIAN FLAGSHIP FESTS
                </span>
                <span className="font-syne font-black text-4xl text-[#0B0E14] leading-none block mt-1">
                  NITK PROPERTIES
                </span>
                <span className="font-mono text-xs text-[#F59E0B] font-bold inline-block mt-2">
                  Premier National Brand Collaborations
                </span>
              </div>
            </div>

            {/* Leadership Timeline Cards */}
            <div className="space-y-6">
              {leadershipData.map((lead) => (
                <div 
                  key={lead.id}
                  className="spider-card rounded-2xl p-6 sm:p-8 hover:-translate-y-1 transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Meta Left Column */}
                    <div className="lg:col-span-4 space-y-2">
                      <div className="inline-block bg-zinc-100 text-[#0B0E14] font-mono font-bold text-xs px-2.5 py-0.5 rounded border border-zinc-300">
                        {lead.period}
                      </div>
                      <h3 className="font-syne font-black text-2xl text-[#0B0E14] leading-tight">
                        {lead.role}
                      </h3>
                      <div className="font-sans font-bold text-sm text-zinc-700">
                        {lead.organization}
                      </div>
                      <div className="flex flex-wrap items-center gap-2 pt-2">
                        <span className="px-3 py-1 bg-[#FF0055]/15 text-[#FF0055] font-mono font-bold text-xs rounded-lg border border-[#FF0055]">
                          💰 {lead.revenue}
                        </span>
                        <span className="px-3 py-1 bg-[#00F0FF]/15 text-[#00F0FF] font-mono font-bold text-xs rounded-lg border border-[#00F0FF]">
                          👥 {lead.teamSize}
                        </span>
                      </div>
                    </div>

                    {/* Highlights Right Column */}
                    <div className="lg:col-span-8 space-y-3">
                      {lead.highlights.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-zinc-50/80 p-3.5 rounded-xl border border-zinc-200">
                          <span className="text-[#FF0055] font-bold text-sm mt-0.5">✦</span>
                          <span className="font-sans text-sm text-zinc-800 font-medium leading-relaxed">
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Campaigns & Growth Experience */}
        {activeTab === 'experience' && (
          <div className="space-y-6 animate-fadeIn">
            {experienceData.map((item) => (
              <div 
                key={item.id}
                className="spider-card rounded-2xl p-6 sm:p-8 hover:-translate-y-1 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Meta Column */}
                  <div className="lg:col-span-4 space-y-2">
                    <div className="inline-block bg-[#00F0FF]/20 text-[#0B0E14] font-mono font-bold text-xs px-2.5 py-0.5 rounded border border-[#00F0FF]">
                      {item.period}
                    </div>
                    <h3 className="font-syne font-black text-3xl text-[#0B0E14]">
                      {item.company}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-zinc-600">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#FF0055]" />
                        {item.location}
                      </span>
                      <span>•</span>
                      <span className="bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Details Column */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="inline-block bg-[#0B0E14] text-white font-mono font-bold text-xs px-3 py-1 rounded uppercase tracking-wider">
                      ROLE: {item.role}
                    </div>

                    <p className="font-sans text-sm sm:text-base text-zinc-700 leading-relaxed font-medium">
                      {item.description}
                    </p>

                    {/* Contributions */}
                    <div className="space-y-2.5 pt-1">
                      {item.contributions.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-3 bg-zinc-50 p-3 rounded-xl border border-zinc-200">
                          <Zap className="w-4 h-4 text-[#00F0FF] fill-[#00F0FF] shrink-0 mt-0.5" />
                          <span className="font-sans text-xs sm:text-sm text-zinc-800 font-medium leading-relaxed">
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-3">
                      {item.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-2.5 py-1 text-xs font-mono font-bold bg-white text-zinc-800 border border-zinc-300 rounded-lg shadow-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Education & Honors */}
        {activeTab === 'education' && (
          <div className="space-y-10 animate-fadeIn">
            {/* Academic Degrees */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {educationData.map((edu, idx) => (
                <div 
                  key={edu.id}
                  className="spider-card p-6 rounded-2xl flex flex-col justify-between hover:-translate-y-1 transition-all"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-200 text-xs font-mono font-bold">
                      <span className="bg-[#0B0E14] text-white px-2 py-0.5 rounded">{edu.period}</span>
                      <span className="text-zinc-600">{edu.location}</span>
                    </div>

                    <h3 className="font-syne font-black text-2xl text-[#0B0E14] leading-tight pt-1">
                      {edu.degree}
                    </h3>
                    <div className="font-mono font-bold text-xs uppercase text-[#FF0055]">
                      {edu.field}
                    </div>
                    <div className="font-sans font-bold text-sm text-zinc-700">
                      {edu.institution}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-200 mt-5">
                    <span className="inline-block px-2.5 py-1 bg-zinc-100 text-[#0B0E14] text-xs font-mono font-bold rounded-lg border border-zinc-300">
                      ★ {edu.honors}
                    </span>
                    <p className="font-sans text-xs text-zinc-600 mt-2.5 leading-relaxed font-medium">
                      {edu.notes}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Scholastic Achievements & Awards */}
            <div className="mt-8 pt-8 border-t-2 border-zinc-200">
              <div className="inline-flex items-center gap-2 bg-[#0B0E14] text-white font-mono font-bold text-xs uppercase px-3 py-1 rounded-md mb-6">
                <Trophy className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>COMPETITIONS & SCHOLASTIC MERIT</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {scholasticAchievements.map((ach, idx) => (
                  <div key={idx} className="spider-card p-6 rounded-2xl space-y-2 hover:-translate-y-1 transition-all">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-syne font-black text-xl text-[#0B0E14]">
                        {ach.title}
                      </h4>
                      <span className="font-mono font-bold text-[10px] uppercase bg-zinc-100 text-zinc-800 px-2 py-0.5 rounded border border-zinc-300 shrink-0">
                        {ach.event}
                      </span>
                    </div>
                    <div className="font-sans font-bold text-xs text-zinc-600">
                      {ach.organization}
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-zinc-700 leading-relaxed pt-1 font-medium">
                      {ach.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
