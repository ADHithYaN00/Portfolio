import React from 'react';
import { Brain, TrendingUp, DollarSign, MapPin, Eye, Zap, Sparkles, CheckCircle2, BarChart3, Layers } from 'lucide-react';

export default function ProjectProofCard({ projectId }) {
  if (projectId === 'project-1') {
    // Neuromarketing & Consumer Psychology
    return (
      <div className="my-5 p-4 sm:p-5 rounded-2xl bg-zinc-950 text-white border-2 border-[#00F0FF] shadow-[3px_3px_0px_#00F0FF] font-mono">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800 text-xs">
          <span className="flex items-center gap-1.5 text-[#00F0FF] font-bold uppercase tracking-wider">
            <Brain className="w-4 h-4 text-[#00F0FF]" />
            PROOF-OF-WORK // NEURO-TELEMETRY
          </span>
          <span className="bg-[#00F0FF]/20 text-[#00F0FF] px-2 py-0.5 rounded text-[10px] font-black border border-[#00F0FF]/40">
            EEG & EYE-TRACKING
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-3">
          <div className="bg-zinc-900/90 p-3 rounded-xl border border-zinc-800">
            <span className="text-zinc-400 block text-[10px] uppercase font-bold">Frontal Asymmetry (FAA)</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-[#00F0FF] font-syne font-black text-xl">+42%</span>
              <span className="text-zinc-300 text-[11px]">Left Alpha Approach Bias</span>
            </div>
            <div className="w-full bg-zinc-800 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-[#00F0FF] h-full w-[78%] rounded-full animate-pulse" />
            </div>
          </div>

          <div className="bg-zinc-900/90 p-3 rounded-xl border border-zinc-800">
            <span className="text-zinc-400 block text-[10px] uppercase font-bold">Fixation Dwell Time</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-[#FF0055] font-syne font-black text-xl">380ms</span>
              <span className="text-zinc-300 text-[11px]">Optimal Encoding Saccade</span>
            </div>
            <div className="w-full bg-zinc-800 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-[#FF0055] h-full w-[85%] rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-zinc-800/80 text-[10px] text-zinc-400">
          <span className="text-zinc-300">Metric: Subconscious Memory Encoding Score</span>
          <span className="text-[#00F0FF] font-bold font-mono">92/100 VALIDATED</span>
        </div>
      </div>
    );
  }

  if (projectId === 'project-2') {
    // Zenrises Creatives Audience Growth
    return (
      <div className="my-5 p-4 sm:p-5 rounded-2xl bg-zinc-950 text-white border-2 border-[#FF0055] shadow-[3px_3px_0px_#FF0055] font-mono">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800 text-xs">
          <span className="flex items-center gap-1.5 text-[#FF0055] font-bold uppercase tracking-wider">
            <TrendingUp className="w-4 h-4 text-[#FF0055]" />
            PROOF-OF-WORK // AUDIENCE SCALE
          </span>
          <span className="bg-[#FF0055]/20 text-[#FF0055] px-2 py-0.5 rounded text-[10px] font-black border border-[#FF0055]/40">
            YOUTUBE & REELS
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs mb-3">
          <div className="bg-zinc-900/90 p-3 rounded-xl border border-zinc-800">
            <span className="text-zinc-400 block text-[10px] uppercase font-bold">Organic Viewership</span>
            <div className="font-syne font-black text-2xl text-[#FF0055] mt-1">+137.5%</div>
            <span className="text-[10px] text-zinc-400 block mt-0.5">Algorithm SEO & Thumbnails</span>
          </div>

          <div className="bg-zinc-900/90 p-3 rounded-xl border border-zinc-800">
            <span className="text-zinc-400 block text-[10px] uppercase font-bold">Subscriber Acquisition</span>
            <div className="font-syne font-black text-2xl text-[#00F0FF] mt-1">+79.5%</div>
            <span className="text-[10px] text-zinc-400 block mt-0.5">Hook Pacing & Retention</span>
          </div>
        </div>

        {/* Visual Mini Trajectory Bar */}
        <div className="bg-zinc-900/60 p-2.5 rounded-xl border border-zinc-800/80 flex items-center justify-between text-[11px]">
          <span className="text-zinc-400">CTR Surge:</span>
          <span className="text-white font-bold bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700">
            2.4x Baseline CTR
          </span>
          <span className="text-[#FF0055] font-bold">★ High-Retention Funnel</span>
        </div>
      </div>
    );
  }

  if (projectId === 'project-3') {
    // Local Tourism & Artisan Empowerment Platform
    return (
      <div className="my-5 p-4 sm:p-5 rounded-2xl bg-zinc-950 text-white border-2 border-[#F59E0B] shadow-[3px_3px_0px_#F59E0B] font-mono">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800 text-xs">
          <span className="flex items-center gap-1.5 text-[#F59E0B] font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4 text-[#F59E0B]" />
            PROOF-OF-WORK // VALUE CHAIN MAP
          </span>
          <span className="bg-[#F59E0B]/20 text-[#F59E0B] px-2 py-0.5 rounded text-[10px] font-black border border-[#F59E0B]/40">
            DTC BLUEPRINT
          </span>
        </div>

        {/* 3-Step Architecture Flow */}
        <div className="grid grid-cols-3 gap-2 text-center text-xs mb-3">
          <div className="bg-zinc-900/90 p-2.5 rounded-xl border border-zinc-800">
            <div className="text-[10px] font-black text-[#F59E0B]">STAGE 01</div>
            <div className="font-sans font-bold text-xs text-white mt-1">Geo Discovery</div>
            <div className="text-[9px] text-zinc-400 mt-0.5">Interactive Map</div>
          </div>

          <div className="bg-zinc-900/90 p-2.5 rounded-xl border border-zinc-800">
            <div className="text-[10px] font-black text-[#F59E0B]">STAGE 02</div>
            <div className="font-sans font-bold text-xs text-white mt-1">Provenance</div>
            <div className="text-[9px] text-zinc-400 mt-0.5">Artisan Heritage</div>
          </div>

          <div className="bg-zinc-900/90 p-2.5 rounded-xl border border-zinc-800">
            <div className="text-[10px] font-black text-[#F59E0B]">STAGE 03</div>
            <div className="font-sans font-bold text-xs text-white mt-1">Fair Commerce</div>
            <div className="text-[9px] text-zinc-400 mt-0.5">0% Middleman</div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-zinc-800/80 text-[10px] text-zinc-400">
          <span>Award: Rural Indian Business Conclave Winner</span>
          <span className="text-[#F59E0B] font-bold">100% ETHICAL TRACEABILITY</span>
        </div>
      </div>
    );
  }

  if (projectId === 'project-4') {
    // ₹36L+ Corporate Sponsorship Architecture
    return (
      <div className="my-5 p-4 sm:p-5 rounded-2xl bg-zinc-950 text-white border-2 border-[#7928CA] shadow-[3px_3px_0px_#7928CA] font-mono">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800 text-xs">
          <span className="flex items-center gap-1.5 text-[#00F0FF] font-bold uppercase tracking-wider">
            <DollarSign className="w-4 h-4 text-[#00F0FF]" />
            PROOF-OF-WORK // CAPITAL PORTFOLIO
          </span>
          <span className="bg-[#7928CA]/30 text-[#00F0FF] px-2 py-0.5 rounded text-[10px] font-black border border-[#7928CA]">
            COMMERCIAL ALLIANCES
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs mb-3">
          <div className="bg-zinc-900/90 p-3 rounded-xl border border-zinc-800">
            <span className="text-zinc-400 block text-[10px] uppercase font-bold">Incident NITK</span>
            <div className="font-syne font-black text-2xl text-[#00F0FF] mt-1">₹25L+</div>
            <span className="text-[10px] text-zinc-400 block mt-0.5">South India Flagship Fest</span>
          </div>

          <div className="bg-zinc-900/90 p-3 rounded-xl border border-zinc-800">
            <span className="text-zinc-400 block text-[10px] uppercase font-bold">Bizwaves (2 Editions)</span>
            <div className="font-syne font-black text-2xl text-[#FF0055] mt-1">₹11L+</div>
            <span className="text-[10px] text-zinc-400 block mt-0.5">Management Conclave</span>
          </div>
        </div>

        <div className="bg-zinc-900/60 p-2.5 rounded-xl border border-zinc-800/80 flex items-center justify-between text-[11px]">
          <span className="text-zinc-400">Team Mobilized:</span>
          <span className="text-white font-bold bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700">
            120+ Crew Members
          </span>
          <span className="text-[#00F0FF] font-bold">₹36L+ Cumulative Closed</span>
        </div>
      </div>
    );
  }

  return null;
}
