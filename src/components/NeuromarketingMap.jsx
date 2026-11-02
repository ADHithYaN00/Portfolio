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
      color: "#FF0055",
      accentBg: "bg-[#FF0055]/15 text-[#FF0055] border-[#FF0055]/40",
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
      color: "#F59E0B",
      accentBg: "bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/40",
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
      color: "#7928CA",
      accentBg: "bg-[#7928CA]/20 text-[#00F0FF] border-[#7928CA]/50",
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
      className="py-24 bg-[#FAFCFF] border-b-3 border-[#0B0E14] relative halftone-spider overflow-hidden"
      aria-label="Neuromarketing and Consumer Psychology Route Map"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 pb-6 border-b-2.5 border-[#0B0E14] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0B0E14] text-[#00F0FF] font-mono font-bold text-xs uppercase px-3 py-1 rounded-md border border-[#0B0E14] shadow-spider-sm mb-3">
              <Activity className="w-3.5 h-3.5 text-[#00F0FF] animate-pulse" />
              <span>// CHAPTER 06 • THE COGNITIVE ROUTE MAP</span>
            </div>
            <h2 className="spider-glitch font-syne font-black text-4xl sm:text-5xl text-[#0B0E14] tracking-tight uppercase">
              HOW NEUROMARKETING WORKS IN REAL LIFE
            </h2>
            <p className="font-sans text-sm sm:text-base text-zinc-600 font-medium max-w-2xl mt-2 leading-relaxed">
              Decoding the journey inside a consumer’s mind from casual 50-millisecond glance to high-trust commercial action and lifelong brand devotion.
            </p>
          </div>

          {/* Real-Life Scenario Selector */}
          <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border-2 border-[#0B0E14] shadow-spider-sm shrink-0">
            <span className="text-[11px] font-mono font-bold text-zinc-500 uppercase px-2">
              REAL-WORLD LENS:
            </span>
            <button
              onClick={() => setActiveScenario('d2c')}
              className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold uppercase transition-all ${
                activeScenario === 'd2c'
                  ? 'bg-[#0B0E14] text-[#00F0FF] shadow-sm'
                  : 'bg-transparent text-zinc-600 hover:text-black'
              }`}
            >
              📱 D2C Viral Video
            </button>
            <button
              onClick={() => setActiveScenario('b2b')}
              className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold uppercase transition-all ${
                activeScenario === 'b2b'
                  ? 'bg-[#0B0E14] text-[#FF0055] shadow-sm'
                  : 'bg-transparent text-zinc-600 hover:text-black'
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
          {/* Subtle Pipeline Track */}
          <div className="hidden lg:block absolute top-1/2 left-6 right-6 h-1 bg-zinc-200 -translate-y-1/2 z-0 rounded-full" />
          <div 
            className="hidden lg:block absolute top-1/2 left-6 h-1 bg-gradient-to-r from-[#00F0FF] via-[#FF0055] to-[#7928CA] -translate-y-1/2 z-0 rounded-full transition-all duration-500"
            style={{ width: `${(activeStep / (stages.length - 1)) * 92}%` }}
          />

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 relative z-10">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStep === idx;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-3.5 sm:p-4 rounded-2xl border-2 transition-all duration-200 flex flex-col justify-between group ${
                    isActive
                      ? 'bg-[#0B0E14] text-white border-[#0B0E14] shadow-spider transform -translate-y-1'
                      : 'bg-white text-[#0B0E14] border-zinc-200 hover:border-[#0B0E14] hover:bg-zinc-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-syne font-black text-xs border ${
                      isActive 
                        ? 'bg-white text-black border-white' 
                        : 'bg-zinc-100 text-zinc-600 border-zinc-300 group-hover:bg-[#00F0FF]/20 group-hover:text-black'
                    }`}>
                      {stage.number}
                    </span>
                    <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded ${
                      isActive ? 'bg-white/15 text-[#00F0FF]' : 'bg-zinc-100 text-zinc-500'
                    }`}>
                      {stage.timeframe}
                    </span>
                  </div>

                  <div>
                    <div className="font-syne font-black text-sm sm:text-base leading-tight mb-0.5">
                      {stage.title}
                    </div>
                    <div className={`font-mono text-[10px] truncate ${isActive ? 'text-zinc-300' : 'text-zinc-500'}`}>
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
            <AppleGlassCard glowColor={current.color} className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs">
                  <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider" style={{ color: current.color }}>
                    <Brain className="w-4 h-4 drop-shadow-sm" />
                    STAGE {current.number} // NEURAL SUBCONSCIOUS TELEMETRY
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-black border backdrop-blur-md ${current.accentBg}`}>
                    {current.timeframe}
                  </span>
                </div>

                <h3 className="font-syne font-black text-2xl sm:text-3xl text-white mb-2 leading-tight">
                  {current.title}
                </h3>
                <div className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-6">
                  {current.subtitle}
                </div>

                {/* Brain Mechanism Badge */}
                <div className="glass-telemetry-tile p-4 rounded-xl mb-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: current.color }} />
                    <span className="font-mono font-bold text-xs uppercase text-white">
                      Targeted Neural Circuit:
                    </span>
                    <span className="font-mono font-bold text-xs text-zinc-300">
                      {current.neuroMechanism}
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
                    {current.brainAction}
                  </p>
                </div>
              </div>

              {/* Bottom Quick Indicator */}
              <div className="glass-telemetry-tile p-3 rounded-xl flex items-center justify-between text-xs text-zinc-300">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" style={{ color: current.color }} />
                  <span>Cognitive Speed:</span>
                </span>
                <span className="font-mono font-bold tracking-wider" style={{ color: current.color }}>
                  {current.timeframe.toUpperCase()}
                </span>
              </div>
            </AppleGlassCard>
          </div>

          {/* Right Column: Real-World Execution Playbook */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="spider-card p-6 sm:p-8 rounded-3xl h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-6 border-b border-zinc-200">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#FF0055]" />
                    <span className="font-mono font-bold text-xs uppercase text-[#0B0E14]">
                      REAL-WORLD EXECUTION PLAYBOOK
                    </span>
                  </div>
                  <span className="font-mono text-[10px] font-bold bg-[#0B0E14] text-white px-2 py-0.5 rounded uppercase">
                    {activeScenario === 'd2c' ? '📱 D2C Video' : '🤝 B2B Sponsorship'}
                  </span>
                </div>

                {/* Scenario Context */}
                <div className="mb-5">
                  <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider block mb-1">
                    The Consumer Scenario:
                  </span>
                  <div className="font-display font-bold text-base sm:text-lg text-[#0B0E14] leading-snug">
                    "{currentScenarioData.scenario}"
                  </div>
                </div>

                {/* Marketer Strategic Action */}
                <div className="p-4 rounded-2xl bg-zinc-50 border-2 border-zinc-200 mb-5">
                  <span className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#F59E0B]" />
                    What Adhithyan Executes:
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-zinc-800 font-semibold leading-relaxed">
                    {currentScenarioData.marketerAction}
                  </p>
                </div>

                {/* Measurable Business Outcome */}
                <div className="p-4 rounded-2xl bg-[#00F0FF]/10 border-2 border-[#00F0FF]/30 mb-6">
                  <span className="text-[11px] font-mono font-bold text-[#008B99] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <TrendingUp className="w-3.5 h-3.5 text-[#00F0FF]" />
                    Commercial Outcome:
                  </span>
                  <div className="font-syne font-bold text-sm sm:text-base text-[#0B0E14]">
                    {currentScenarioData.outcome}
                  </div>
                </div>
              </div>

              {/* Next Step Controller */}
              <div className="pt-4 border-t border-zinc-200 flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-500 font-medium">
                  Step {activeStep + 1} of {stages.length}
                </span>

                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % stages.length)}
                  className="spider-btn px-4 py-2 bg-[#0B0E14] text-white hover:bg-[#FF0055] font-display font-black text-xs uppercase tracking-wider rounded-xl inline-flex items-center gap-1.5 transition-colors"
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
