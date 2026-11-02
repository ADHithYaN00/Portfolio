import React from 'react';
import { Brain, TrendingUp, DollarSign, MapPin, Eye, Zap, Sparkles, CheckCircle2, BarChart3, Layers, Award, Users } from 'lucide-react';
import AppleGlassCard from './AppleGlassCard';

export default function ProjectProofCard({ projectId }) {
  if (projectId === 'project-1') {
    // Neuromarketing & Consumer Psychology
    return (
      <AppleGlassCard 
        glowColor="#00F0FF" 
        className="border-[#00F0FF]/40 hover:border-[#00F0FF]/80 hover:shadow-[0_0_35px_rgba(0,240,255,0.3)]"
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs">
          <span className="flex items-center gap-1.5 text-[#00F0FF] font-bold uppercase tracking-wider">
            <Brain className="w-4 h-4 text-[#00F0FF] drop-shadow-[0_0_8px_#00F0FF]" />
            PROOF-OF-WORK // NEURO-TELEMETRY
          </span>
          <span className="bg-[#00F0FF]/15 text-[#00F0FF] px-2.5 py-0.5 rounded-md text-[10px] font-black border border-[#00F0FF]/40 backdrop-blur-md shadow-sm">
            EEG & EYE-TRACKING
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-3">
          <div className="glass-telemetry-tile p-3 rounded-xl">
            <span className="text-zinc-300 block text-[10px] uppercase font-bold tracking-wider">
              Frontal Asymmetry (FAA)
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-[#00F0FF] font-syne font-black text-2xl drop-shadow-[0_0_10px_rgba(0,240,255,0.4)]">
                +42%
              </span>
              <span className="text-zinc-200 text-[11px] font-medium">Left Alpha Approach Bias</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full mt-2.5 overflow-hidden border border-white/5">
              <div className="bg-gradient-to-r from-[#00F0FF] to-[#38BDF8] h-full w-[78%] rounded-full shadow-[0_0_10px_#00F0FF]" />
            </div>
          </div>

          <div className="glass-telemetry-tile p-3 rounded-xl">
            <span className="text-zinc-300 block text-[10px] uppercase font-bold tracking-wider">
              Fixation Dwell Time
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-[#FF0055] font-syne font-black text-2xl drop-shadow-[0_0_10px_rgba(255,0,85,0.4)]">
                380ms
              </span>
              <span className="text-zinc-200 text-[11px] font-medium">Optimal Encoding Saccade</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full mt-2.5 overflow-hidden border border-white/5">
              <div className="bg-gradient-to-r from-[#FF0055] to-[#FB7185] h-full w-[85%] rounded-full shadow-[0_0_10px_#FF0055]" />
            </div>
          </div>
        </div>

        <div className="glass-telemetry-tile p-2.5 sm:p-3 rounded-xl flex items-center justify-between gap-2 text-[11px] text-zinc-300">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shrink-0 animate-pulse" />
            <span>Memory Encoding Score</span>
          </div>
          <span className="text-[#00F0FF] font-bold font-mono tracking-wider whitespace-nowrap bg-[#00F0FF]/15 px-2.5 py-0.5 rounded border border-[#00F0FF]/40 text-[10px] sm:text-[11px] shadow-sm">
            92/100 VALIDATED
          </span>
        </div>
      </AppleGlassCard>
    );
  }

  if (projectId === 'project-2') {
    // Zenrises Creatives Audience Growth
    return (
      <AppleGlassCard 
        glowColor="#FF0055" 
        className="border-[#FF0055]/40 hover:border-[#FF0055]/80 hover:shadow-[0_0_35px_rgba(255,0,85,0.3)]"
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs">
          <span className="flex items-center gap-1.5 text-[#FF0055] font-bold uppercase tracking-wider">
            <TrendingUp className="w-4 h-4 text-[#FF0055] drop-shadow-[0_0_8px_#FF0055]" />
            PROOF-OF-WORK // AUDIENCE SCALE
          </span>
          <span className="bg-[#FF0055]/15 text-[#FF0055] px-2.5 py-0.5 rounded-md text-[10px] font-black border border-[#FF0055]/40 backdrop-blur-md shadow-sm">
            YOUTUBE & REELS
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs mb-3">
          <div className="glass-telemetry-tile p-3 rounded-xl">
            <span className="text-zinc-300 block text-[10px] uppercase font-bold tracking-wider">
              Organic Viewership
            </span>
            <div className="font-syne font-black text-2xl sm:text-3xl text-[#FF0055] mt-1 drop-shadow-[0_0_10px_rgba(255,0,85,0.4)]">
              +137.5%
            </div>
            <span className="text-[10px] text-zinc-300 block mt-1 font-medium">
              Algorithm SEO & Pacing
            </span>
          </div>

          <div className="glass-telemetry-tile p-3 rounded-xl">
            <span className="text-zinc-300 block text-[10px] uppercase font-bold tracking-wider">
              Subscriber Lift
            </span>
            <div className="font-syne font-black text-2xl sm:text-3xl text-[#00F0FF] mt-1 drop-shadow-[0_0_10px_rgba(0,240,255,0.4)]">
              +79.5%
            </div>
            <span className="text-[10px] text-zinc-300 block mt-1 font-medium">
              Retention & Hook Design
            </span>
          </div>
        </div>

        {/* Visual Mini Trajectory Bar */}
        <div className="glass-telemetry-tile p-2.5 sm:p-3 rounded-xl flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-zinc-300 text-[11px]">CTR Surge:</span>
            <span className="text-white font-bold bg-white/10 px-2 py-0.5 rounded border border-white/15 text-[10px] sm:text-[11px] whitespace-nowrap">
              2.4x Baseline
            </span>
          </div>
          <span className="text-[#FF0055] font-bold text-[10px] sm:text-[11px] tracking-wide whitespace-nowrap">
            ★ High-Retention Funnel
          </span>
        </div>
      </AppleGlassCard>
    );
  }

  if (projectId === 'project-3') {
    // Local Tourism & Artisan Empowerment Platform (Value Chain Map)
    return (
      <AppleGlassCard 
        glowColor="#F59E0B" 
        className="border-[#F59E0B]/40 hover:border-[#F59E0B]/80 hover:shadow-[0_0_35px_rgba(245,158,11,0.3)]"
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs">
          <span className="flex items-center gap-1.5 text-[#F59E0B] font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4 text-[#F59E0B] drop-shadow-[0_0_8px_#F59E0B]" />
            PROOF-OF-WORK // VALUE CHAIN MAP
          </span>
          <span className="bg-[#F59E0B]/15 text-[#F59E0B] px-2.5 py-0.5 rounded-md text-[10px] font-black border border-[#F59E0B]/40 backdrop-blur-md shadow-sm">
            DTC BLUEPRINT
          </span>
        </div>

        {/* 3-Step Glass Flow */}
        <div className="grid grid-cols-3 gap-2 text-center text-xs mb-3">
          <div className="glass-telemetry-tile p-2.5 sm:p-3 rounded-xl flex flex-col justify-between">
            <div className="text-[10px] font-black text-[#F59E0B] tracking-wider uppercase">
              STAGE 01
            </div>
            <div className="font-sans font-bold text-xs sm:text-sm text-white my-1 leading-tight">
              Geo Discovery
            </div>
            <div className="text-[10px] text-zinc-300 font-medium">
              Interactive Map
            </div>
          </div>

          <div className="glass-telemetry-tile p-2.5 sm:p-3 rounded-xl flex flex-col justify-between">
            <div className="text-[10px] font-black text-[#F59E0B] tracking-wider uppercase">
              STAGE 02
            </div>
            <div className="font-sans font-bold text-xs sm:text-sm text-white my-1 leading-tight">
              Provenance
            </div>
            <div className="text-[10px] text-zinc-300 font-medium">
              Artisan Heritage
            </div>
          </div>

          <div className="glass-telemetry-tile p-2.5 sm:p-3 rounded-xl flex flex-col justify-between">
            <div className="text-[10px] font-black text-[#F59E0B] tracking-wider uppercase">
              STAGE 03
            </div>
            <div className="font-sans font-bold text-xs sm:text-sm text-white my-1 leading-tight">
              Fair Commerce
            </div>
            <div className="text-[10px] text-zinc-300 font-medium">
              0% Middleman
            </div>
          </div>
        </div>

        {/* Award Footer */}
        <div className="glass-telemetry-tile p-2.5 sm:p-3 rounded-xl flex items-center justify-between gap-2 text-[11px]">
          <div className="flex items-center gap-1.5 text-zinc-300 min-w-0">
            <Award className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
            <span className="truncate">Rural Indian Conclave Winner</span>
          </div>
          <span className="text-[#F59E0B] font-bold text-[10px] sm:text-[11px] tracking-wider whitespace-nowrap bg-[#F59E0B]/15 px-2 py-0.5 rounded border border-[#F59E0B]/40 shrink-0 shadow-sm">
            100% ETHICAL TRACEABILITY
          </span>
        </div>
      </AppleGlassCard>
    );
  }

  if (projectId === 'project-4') {
    // ₹36L+ Corporate Sponsorship Architecture (Capital Portfolio)
    return (
      <AppleGlassCard 
        glowColor="#00F0FF" 
        className="border-[#00F0FF]/40 hover:border-[#00F0FF]/80 hover:shadow-[0_0_35px_rgba(0,240,255,0.3)]"
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs">
          <span className="flex items-center gap-1.5 text-[#00F0FF] font-bold uppercase tracking-wider">
            <DollarSign className="w-4 h-4 text-[#00F0FF] drop-shadow-[0_0_8px_#00F0FF]" />
            PROOF-OF-WORK // CAPITAL PORTFOLIO
          </span>
          <span className="bg-[#7928CA]/30 text-[#00F0FF] px-2.5 py-0.5 rounded-md text-[10px] font-black border border-[#00F0FF]/40 backdrop-blur-md shadow-sm">
            COMMERCIAL ALLIANCES
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs mb-3">
          <div className="glass-telemetry-tile p-3 rounded-xl">
            <span className="text-zinc-300 block text-[10px] uppercase font-bold tracking-wider">
              Incident NITK
            </span>
            <div className="font-syne font-black text-2xl sm:text-3xl text-[#00F0FF] mt-1 drop-shadow-[0_0_10px_rgba(0,240,255,0.4)]">
              ₹25L+
            </div>
            <span className="text-[10px] text-zinc-300 block mt-1 font-medium">
              South India Flagship Fest
            </span>
          </div>

          <div className="glass-telemetry-tile p-3 rounded-xl">
            <span className="text-zinc-300 block text-[10px] uppercase font-bold tracking-wider">
              Bizwaves (2 Editions)
            </span>
            <div className="font-syne font-black text-2xl sm:text-3xl text-[#FF0055] mt-1 drop-shadow-[0_0_10px_rgba(255,0,85,0.4)]">
              ₹11L+
            </div>
            <span className="text-[10px] text-zinc-300 block mt-1 font-medium">
              Management Conclave
            </span>
          </div>
        </div>

        {/* Clean 2-Row Structured Telemetry Tile */}
        <div className="glass-telemetry-tile p-3 rounded-xl text-xs space-y-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <Users className="w-3.5 h-3.5 text-[#00F0FF] shrink-0" />
              <span className="font-medium text-[11px]">Team Mobilized:</span>
            </div>
            <span className="text-white font-bold bg-white/10 px-2.5 py-0.5 rounded border border-white/20 text-[11px] shadow-sm whitespace-nowrap">
              120+ Crew Members
            </span>
          </div>

          <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/10">
            <span className="text-zinc-400 text-[11px]">Cumulative Sponsorship:</span>
            <span className="text-[#00F0FF] font-bold text-xs tracking-wide drop-shadow-sm whitespace-nowrap bg-[#00F0FF]/10 px-2 py-0.5 rounded border border-[#00F0FF]/30">
              ₹36L+ Closed
            </span>
          </div>
        </div>
      </AppleGlassCard>
    );
  }

  return null;
}
