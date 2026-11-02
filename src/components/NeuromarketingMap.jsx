import React, { useState } from 'react';
import { 
  Brain, 
  Eye, 
  Sparkles, 
  HeartHandshake, 
  CreditCard, 
  Repeat, 
  ArrowRight, 
  Zap, 
  Clock, 
  CheckCircle2, 
  Target, 
  TrendingUp, 
  ShieldCheck,
  ChevronRight,
  Layers,
  Activity
} from 'lucide-react';
import AppleGlassCard from './AppleGlassCard';

export default function NeuromarketingMap() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeScenario, setActiveScenario] = useState('d2c'); // 'd2c' | 'b2b'

  const stages = [
    {
      id: "stage-1",
      number: "01",
      timeframe: "0.05s (50ms)",
      title: "The Sensory Gate",
      subtitle: "The Subconscious Scroll-Stop",
      icon: Eye,
      color: "#00F0FF",
      accentBg: "bg-[#00F0FF]/15 text-[#00F0FF] border-[#00F0FF]/40",
      neuroMechanism: "Visual Cortex & Amygdala",
      brainAction: "Before conscious thoughts register, the primitive brain filters visual stimuli for high contrast, faces, and biological relevance.",
      d2cStory: {
        scenario: "Mindless Instagram / YouTube reel scrolling",
        marketerAction: "Deploy high-contrast 0.5s visual hook, bold dynamic typography, and direct eye contact.",
        outcome: "+380ms fixation dwell time; stops scroll dead in its tracks."
      },
      b2bStory: {
        scenario: "Corporate VP skimming a crowded pitch inbox",
        marketerAction: "Headline focused on guaranteed demographic access and quantifiable commercial upside.",
        outcome: "Immediate 3-second cognitive pause; pitch deck gets opened."
      }
    },
    {
      id: "stage-2",
      number: "02",
      timeframe: "0.25s (250ms)",
      title: "Approach vs. Avoidance",
      subtitle: "The Emotional Gatekeeper",
      icon: Brain,
      color: "#F59E0B",
      accentBg: "bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/40",
      neuroMechanism: "Frontal EEG Asymmetry (FAA)",
      brainAction: "The Left Frontal Alpha band activates for desire & curiosity ('Approach'), while Right Frontal activation triggers skepticism ('Avoidance').",
      d2cStory: {
        scenario: "Viewer decides whether to swipe away or keep watching",
        marketerAction: "Validate an unexpressed frustration immediately; strip away boring corporate rhetoric.",
        outcome: "+42% Left Alpha Approach Bias; customer feels 'they get me'."
      },
      b2bStory: {
        scenario: "Brand manager weighs brand safety vs audience scale",
        marketerAction: "Showcase institutional credibility (NITK lineage) and verified ₹25L+ past alliances.",
        outcome: "Neural threat appraisal dissolves; positive desire takes over."
      }
    },
    {
      id: "stage-3",
      number: "03",
      timeframe: "2.0s – 15s",
      title: "Narrative Transportation",
      subtitle: "Mirror Neurons & Meaning",
      icon: HeartHandshake,
      color: "#FF0055",
      accentBg: "bg-[#FF0055]/15 text-[#FF0055] border-[#FF0055]/40",
      neuroMechanism: "Mirror Neurons & Oxytocin Release",
      brainAction: "The brain synchronizes with relatable storytellers. Cortisol (stress) drops while oxytocin (empathy and brand trust) floods the neural pathways.",
      d2cStory: {
        scenario: "Customer experiences the product's transformation story",
        marketerAction: "High-velocity AI video storytelling highlighting before-and-after relief.",
        outcome: "2.4x higher video completion rate; authentic peer sharing."
      },
      b2bStory: {
        scenario: "Sponsor envisions their brand activating on a 40,000+ festival ground",
        marketerAction: "Present experiential mockups, live influencer integrations, and real-time telemetry.",
        outcome: "Sponsor emotional buy-in moves from passive review to active excitement."
      }
    },
    {
      id: "stage-4",
      number: "04",
      timeframe: "Checkout Moment",
      title: "The Decision Paradox",
      subtitle: "Overcoming the Pain of Paying",
      icon: CreditCard,
      color: "#00F0FF",
      accentBg: "bg-[#00F0FF]/15 text-[#00F0FF] border-[#00F0FF]/40",
      neuroMechanism: "Prefrontal Cortex vs. Insula",
      brainAction: "The Ventromedial Prefrontal Cortex calculates expected dopamine reward against the Insula's physical pain response to parting with capital.",
      d2cStory: {
        scenario: "Customer hovers over the 'Buy Now' button",
        marketerAction: "Transparent pricing anchors, money-back safety, and zero-friction 1-click checkout.",
        outcome: "Reward signal overwhelms pain threshold; zero cart abandonment."
      },
      b2bStory: {
        scenario: "Corporate legal & finance scrutinizing an ₹11L+ invoice",
        marketerAction: "Clear milestone deliverables, tier guarantees, and direct commercial ROI projections.",
        outcome: "Contracts cleared and capital wired without protracted stalls."
      }
    },
    {
      id: "stage-5",
      number: "05",
      timeframe: "Day 1 – Long Term",
      title: "Peak-End Memory Encoding",
      subtitle: "The Brand Evangelist Loop",
      icon: Repeat,
      color: "#A855F7",
      accentBg: "bg-[#A855F7]/20 text-[#A855F7] border-[#A855F7]/50",
      neuroMechanism: "Hippocampus & Dopaminergic Habit",
      brainAction: "Memories aren't stored as averages—the brain imprints the most emotionally intense moment ('Peak') and the final impression ('End').",
      d2cStory: {
        scenario: "Order unboxing and first-time product experience",
        marketerAction: "Personalized welcome note, unexpected delight gift, and VIP community invitation.",
        outcome: "Unprompted user-generated content, high repeat LTV, and word-of-mouth."
      },
      b2bStory: {
        scenario: "Post-event impact dossier and sponsor executive debrief",
        marketerAction: "Deliver verified attendance metrics, press clippings, and customized photo-album ROI deck.",
        outcome: "Multi-year recurring sponsorship renewals signed ahead of next season."
      }
    }
  ];

  const current = stages[activeStep];
  const currentScenarioData = activeScenario === 'd2c' ? current.d2cStory : current.b2bStory;

  return (
    <section 
      id="neuromarketing-map" 
      className="py-28 bg-[#090C12] border-b border-white/10 relative overflow-hidden"
      aria-label="Neuromarketing and Consumer Psychology Route Map"
    >
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#00F0FF]/5 rounded-full blur-[160px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#F59E0B] font-bold mb-3">
              <Activity className="w-3.5 h-3.5 text-[#F59E0B] animate-pulse" />
              <span>CHAPTER 06 // THE COGNITIVE ROUTE MAP</span>
            </div>
            <h2 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              How Neuromarketing <span className="italic font-normal text-[#F59E0B]">Works in Real Life</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-zinc-300 font-normal max-w-2xl mt-2 leading-relaxed">
              Decoding the journey inside a consumer’s mind from casual 50-millisecond glance to high-trust commercial action and lifelong brand devotion.
            </p>
          </div>

          {/* Real-Life Scenario Selector */}
          <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md shrink-0">
            <span className="text-[11px] font-mono font-medium text-zinc-400 uppercase px-3">
              REAL-WORLD LENS:
            </span>
            <button
              onClick={() => setActiveScenario('d2c')}
              className={`px-4 py-1.5 rounded-full font-mono text-xs font-bold uppercase transition-all duration-200 ${
                activeScenario === 'd2c'
                  ? 'bg-[#F59E0B] text-black shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                  : 'bg-transparent text-zinc-400 hover:text-white'
              }`}
            >
              📱 D2C Viral Video
            </button>
            <button
              onClick={() => setActiveScenario('b2b')}
              className={`px-4 py-1.5 rounded-full font-mono text-xs font-bold uppercase transition-all duration-200 ${
                activeScenario === 'b2b'
                  ? 'bg-[#F59E0B] text-black shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                  : 'bg-transparent text-zinc-400 hover:text-white'
              }`}
            >
              🤝 ₹36L+ Sponsorship
            </button>
          </div>
        </div>

        {/* =========================================================================
            ROUTE MAP PROGRESSION PIPELINE (Interactive Stepper)
            ========================================================================= */}
        <div className="relative mb-12">
          {/* Pipeline Track */}
          <div className="hidden lg:block absolute top-1/2 left-6 right-6 h-0.5 bg-white/10 -translate-y-1/2 z-0 rounded-full" />
          <div 
            className="hidden lg:block absolute top-1/2 left-6 h-0.5 bg-gradient-to-r from-[#F59E0B] via-[#00F0FF] to-[#A855F7] -translate-y-1/2 z-0 rounded-full transition-all duration-500 shadow-[0_0_10px_#F59E0B]"
            style={{ width: `${(activeStep / (stages.length - 1)) * 92}%` }}
          />

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 relative z-10">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStep === idx;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${
                    isActive
                      ? 'bg-gradient-to-b from-[#171D2A] to-[#0E121B] text-white border-[#F59E0B] shadow-[0_0_25px_rgba(245,158,11,0.25)] transform -translate-y-1'
                      : 'bg-[#0E121B]/70 text-zinc-300 border-white/10 hover:border-white/20 hover:bg-[#0E121B]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-serif font-black text-xs border ${
                      isActive 
                        ? 'bg-[#F59E0B] text-black border-[#F59E0B]' 
                        : 'bg-white/5 text-zinc-400 border-white/10 group-hover:text-white'
                    }`}>
                      {stage.number}
                    </span>
                    <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-[#F59E0B]/20 text-[#F59E0B]' : 'bg-white/5 text-zinc-500'
                    }`}>
                      {stage.timeframe}
                    </span>
                  </div>

                  <div>
                    <div className="font-serif font-bold text-sm sm:text-base leading-tight mb-1 text-white">
                      {stage.title}
                    </div>
                    <div className={`font-mono text-[10px] truncate ${isActive ? 'text-[#F59E0B]' : 'text-zinc-500'}`}>
                      {stage.neuroMechanism}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            ACTIVE MILESTONE DEEP-DIVE HUD (Apple Tilt Glass Card)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: The Subconscious Brain State */}
          <div className="lg:col-span-6 flex flex-col">
            <AppleGlassCard glowColor={current.color} className="h-full flex flex-col justify-between border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs">
                  <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#F59E0B]">
                    <Brain className="w-4 h-4" />
                    STAGE {current.number} // NEURAL TELEMETRY
                  </span>
                  <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold border border-[#F59E0B]/30 bg-[#F59E0B]/15 text-[#F59E0B]">
                    {current.timeframe}
                  </span>
                </div>

                <h3 className="font-serif font-black text-2xl sm:text-3xl text-white mb-2 leading-tight">
                  {current.title}
                </h3>
                <div className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-6">
                  {current.subtitle}
                </div>

                {/* Brain Mechanism Badge */}
                <div className="glass-telemetry-tile p-5 rounded-2xl mb-4 bg-black/40 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
                    <span className="font-mono font-bold text-xs uppercase text-[#F59E0B]">
                      Targeted Neural Circuit:
                    </span>
                    <span className="font-mono font-medium text-xs text-zinc-200">
                      {current.neuroMechanism}
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {current.brainAction}
                  </p>
                </div>
              </div>

              {/* Bottom Quick Indicator */}
              <div className="glass-telemetry-tile p-3.5 rounded-xl flex items-center justify-between text-xs text-zinc-300 bg-black/40 border border-white/10">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>Cognitive Speed:</span>
                </span>
                <span className="font-mono font-bold tracking-wider text-[#F59E0B]">
                  {current.timeframe.toUpperCase()}
                </span>
              </div>
            </AppleGlassCard>
          </div>

          {/* Right Column: Real-World Execution Playbook */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-[#0E121B]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-7 sm:p-9 h-full flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#F59E0B]" />
                    <span className="font-mono font-bold text-xs uppercase text-zinc-300 tracking-wider">
                      REAL-WORLD EXECUTION PLAYBOOK
                    </span>
                  </div>
                  <span className="font-mono text-[10px] font-bold bg-[#F59E0B]/15 text-[#F59E0B] px-3 py-1 rounded-full border border-[#F59E0B]/30 uppercase">
                    {activeScenario === 'd2c' ? '📱 D2C Video' : '🤝 B2B Sponsorship'}
                  </span>
                </div>

                {/* Scenario Context */}
                <div className="mb-6">
                  <span className="text-[11px] font-mono font-medium text-zinc-500 uppercase tracking-widest block mb-1">
                    The Consumer Scenario:
                  </span>
                  <div className="font-serif italic text-base sm:text-lg text-white leading-snug">
                    "{currentScenarioData.scenario}"
                  </div>
                </div>

                {/* Marketer Strategic Action */}
                <div className="p-5 rounded-2xl bg-black/40 border border-white/10 mb-5">
                  <span className="text-[11px] font-mono font-bold text-[#F59E0B] uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <Zap className="w-3.5 h-3.5 text-[#F59E0B]" />
                    What Adhithyan Executes:
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                    {currentScenarioData.marketerAction}
                  </p>
                </div>

                {/* Measurable Business Outcome */}
                <div className="p-5 rounded-2xl bg-[#F59E0B]/5 border border-[#F59E0B]/30 mb-6">
                  <span className="text-[11px] font-mono font-bold text-[#F59E0B] uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-[#F59E0B]" />
                    Commercial Outcome:
                  </span>
                  <div className="font-serif font-bold text-sm sm:text-base text-zinc-100">
                    {currentScenarioData.outcome}
                  </div>
                </div>
              </div>

              {/* Next Step Controller */}
              <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-400 font-medium">
                  Step {activeStep + 1} of {stages.length}
                </span>

                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % stages.length)}
                  className="px-6 py-2.5 bg-[#F59E0B] hover:bg-[#d98206] text-black font-mono font-bold text-xs uppercase tracking-wider rounded-full inline-flex items-center gap-1.5 transition-all duration-200 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                >
                  <span>
                    {activeStep === stages.length - 1 ? 'Replay Route Map ↺' : 'Next Stage ➔'}
                  </span>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
