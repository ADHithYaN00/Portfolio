import React, { useState } from 'react';
import { Briefcase, GraduationCap, MapPin, Award, Users, Trophy, Zap, Sparkles, Megaphone, CheckCircle2 } from 'lucide-react';
import { experienceData, leadershipData, educationData, scholasticAchievements } from '../data/portfolioData';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('leadership');

  return (
    <section 
      id="experience" 
      className="py-28 bg-[#090C12] border-b border-white/10 relative overflow-hidden"
      aria-label="Track Record and Leadership"
    >
      {/* Ambient Radial Lights */}
      <div className="absolute top-1/3 -right-36 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-[150px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#00F0FF]/5 rounded-full blur-[170px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#F59E0B] font-bold mb-3">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] inline-block animate-pulse" />
              <span>CHAPTER 02 // MISSION LOG</span>
            </div>
            <h2 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Track Record &amp; <span className="italic font-normal text-[#F59E0B]">Brand Impact</span>
            </h2>
          </div>

          {/* Pill Tab Switcher */}
          <div className="mt-8 md:mt-0 flex flex-wrap items-center gap-2 p-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
            <button
              onClick={() => setActiveTab('leadership')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 ${
                activeTab === 'leadership'
                  ? 'bg-[#F59E0B] text-black shadow-[0_0_20px_rgba(245,158,11,0.35)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Megaphone className="w-3.5 h-3.5" />
              <span>Sponsorships &amp; Revenue</span>
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 ${
                activeTab === 'experience'
                  ? 'bg-[#F59E0B] text-black shadow-[0_0_20px_rgba(245,158,11,0.35)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Campaigns &amp; Growth</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-[#F59E0B] text-black shadow-[0_0_20px_rgba(245,158,11,0.35)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education &amp; Honors</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Brand Leadership & Sponsorship Revenue */}
        {activeTab === 'leadership' && (
          <div className="space-y-10 animate-fadeIn">
            {/* Top Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="bg-[#0E121B]/80 backdrop-blur-xl border border-white/10 hover:border-[#F59E0B]/40 p-7 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-all duration-300 group">
                <span className="font-mono font-medium text-xs text-zinc-400 uppercase tracking-widest block mb-2">
                  CUMULATIVE CAPITAL ACQUIRED
                </span>
                <span className="font-serif font-black text-4xl sm:text-5xl text-white leading-none block group-hover:text-[#F59E0B] transition-colors">
                  ₹36+ LAKH
                </span>
                <span className="font-mono text-xs text-[#F59E0B] font-semibold inline-block mt-3">
                  Incident (₹25L+) &amp; Bizwaves (₹11L+)
                </span>
              </div>

              <div className="bg-[#0E121B]/80 backdrop-blur-xl border border-white/10 hover:border-[#00F0FF]/40 p-7 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-all duration-300 group">
                <span className="font-mono font-medium text-xs text-zinc-400 uppercase tracking-widest block mb-2">
                  MARKETING &amp; CREATIVE SQUAD
                </span>
                <span className="font-serif font-black text-4xl sm:text-5xl text-white leading-none block group-hover:text-[#00F0FF] transition-colors">
                  120+ CREW
                </span>
                <span className="font-mono text-xs text-[#00F0FF] font-semibold inline-block mt-3">
                  Campus Activations, Buzz &amp; PR
                </span>
              </div>

              <div className="bg-[#0E121B]/80 backdrop-blur-xl border border-white/10 hover:border-[#F59E0B]/40 p-7 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-all duration-300 group">
                <span className="font-mono font-medium text-xs text-zinc-400 uppercase tracking-widest block mb-2">
                  SOUTH INDIAN FLAGSHIP FESTS
                </span>
                <span className="font-serif font-black text-3xl sm:text-4xl text-white leading-none block mt-1 group-hover:text-[#F59E0B] transition-colors">
                  NITK PROPERTIES
                </span>
                <span className="font-mono text-xs text-zinc-400 font-semibold inline-block mt-3">
                  Premier National Brand Alliances
                </span>
              </div>
            </div>

            {/* Leadership Timeline Cards */}
            <div className="space-y-6">
              {leadershipData.map((lead) => (
                <div 
                  key={lead.id}
                  className="bg-[#0E121B]/80 backdrop-blur-xl border border-white/10 hover:border-[#F59E0B]/40 rounded-3xl p-7 sm:p-9 shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Meta Left Column */}
                    <div className="lg:col-span-4 space-y-3">
                      <div className="inline-block bg-white/5 text-zinc-300 font-mono font-bold text-xs px-3 py-1 rounded-full border border-white/10">
                        {lead.period}
                      </div>
                      <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white leading-snug">
                        {lead.role}
                      </h3>
                      <div className="font-sans font-medium text-sm text-[#F59E0B]">
                        {lead.organization}
                      </div>
                      <div className="flex flex-wrap items-center gap-2.5 pt-3">
                        <span className="px-3.5 py-1 bg-[#F59E0B]/15 text-[#F59E0B] font-mono font-bold text-xs rounded-full border border-[#F59E0B]/30">
                          💰 {lead.revenue}
                        </span>
                        <span className="px-3.5 py-1 bg-white/5 text-zinc-200 font-mono font-bold text-xs rounded-full border border-white/15">
                          👥 {lead.teamSize}
                        </span>
                      </div>
                    </div>

                    {/* Highlights Right Column */}
                    <div className="lg:col-span-8 space-y-3.5">
                      {lead.highlights.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-3.5 bg-black/40 p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                          <span className="text-[#F59E0B] font-bold text-sm mt-0.5">✦</span>
                          <span className="font-sans text-sm text-zinc-300 font-normal leading-relaxed">
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
                className="bg-[#0E121B]/80 backdrop-blur-xl border border-white/10 hover:border-[#F59E0B]/40 rounded-3xl p-7 sm:p-9 shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Meta Column */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="inline-block bg-[#00F0FF]/15 text-[#00F0FF] font-mono font-bold text-xs px-3 py-1 rounded-full border border-[#00F0FF]/30">
                      {item.period}
                    </div>
                    <h3 className="font-serif font-bold text-3xl text-white">
                      {item.company}
                    </h3>
                    <div className="flex items-center gap-2.5 text-xs font-mono text-zinc-400">
                      <span className="flex items-center gap-1 text-zinc-300">
                        <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                        {item.location}
                      </span>
                      <span>•</span>
                      <span className="bg-white/5 px-2.5 py-0.5 rounded border border-white/10 text-zinc-300">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Details Column */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="inline-block bg-[#F59E0B]/10 text-[#F59E0B] font-mono font-bold text-xs px-3 py-1 rounded-md border border-[#F59E0B]/25 uppercase tracking-wider">
                      ROLE: {item.role}
                    </div>

                    <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {/* Contributions */}
                    <div className="space-y-2.5 pt-1">
                      {item.contributions.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-3.5 bg-black/40 p-3.5 rounded-xl border border-white/5">
                          <Zap className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                          <span className="font-sans text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
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
                          className="px-3 py-1 text-xs font-mono font-medium bg-white/5 text-zinc-300 border border-white/10 rounded-full"
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
          <div className="space-y-12 animate-fadeIn">
            {/* Academic Degrees */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {educationData.map((edu) => (
                <div 
                  key={edu.id}
                  className="bg-[#0E121B]/80 backdrop-blur-xl border border-white/10 hover:border-[#F59E0B]/40 p-7 rounded-3xl flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono font-medium">
                      <span className="bg-white/10 text-white px-2.5 py-0.5 rounded-full">{edu.period}</span>
                      <span className="text-zinc-400">{edu.location}</span>
                    </div>

                    <h3 className="font-serif font-bold text-2xl text-white leading-snug pt-1">
                      {edu.degree}
                    </h3>
                    <div className="font-mono font-bold text-xs uppercase text-[#F59E0B]">
                      {edu.field}
                    </div>
                    <div className="font-sans font-medium text-sm text-zinc-300">
                      {edu.institution}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 mt-6">
                    <span className="inline-block px-3 py-1 bg-[#F59E0B]/15 text-[#F59E0B] text-xs font-mono font-bold rounded-full border border-[#F59E0B]/30">
                      ★ {edu.honors}
                    </span>
                    <p className="font-sans text-xs text-zinc-400 mt-3 leading-relaxed font-normal">
                      {edu.notes}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Scholastic Achievements & Awards */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white font-mono font-bold text-xs uppercase px-4 py-2 rounded-full mb-8">
                <Trophy className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>COMPETITIONS &amp; SCHOLASTIC MERIT</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {scholasticAchievements.map((ach, idx) => (
                  <div 
                    key={idx} 
                    className="bg-[#0E121B]/70 border border-white/10 hover:border-[#F59E0B]/30 p-6 rounded-2xl space-y-2.5 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-serif font-bold text-xl text-white">
                        {ach.title}
                      </h4>
                      <span className="font-mono font-bold text-[10px] uppercase bg-white/5 text-[#F59E0B] px-2.5 py-0.5 rounded-full border border-white/10 shrink-0">
                        {ach.event}
                      </span>
                    </div>
                    <div className="font-sans font-medium text-xs text-zinc-400">
                      {ach.organization}
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1 font-normal">
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
