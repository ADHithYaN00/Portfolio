import React, { useState, useEffect, useRef } from 'react';
import { AlertTriangle, Clock, RefreshCw, Zap, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

export default function SectionAnomalyTimer({ sectionId, sectionName = "ZONE" }) {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [breachState, setBreachState] = useState('idle'); // 'idle' | 'opening' | 'emerged' | 'healing' | 'stabilized'
  const timerRef = useRef(null);

  // Monitor when the parent section enters or leaves viewport
  useEffect(() => {
    const targetElement = document.getElementById(sectionId);
    if (!targetElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Section must be at least 20% visible
        rootMargin: '0px'
      }
    );

    observer.observe(targetElement);
    return () => observer.disconnect();
  }, [sectionId]);

  // Countdown timer: runs only when section is on screen, time > 0, and not already breaching
  useEffect(() => {
    if (isIntersecting && timeLeft > 0 && breachState === 'idle') {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            triggerBreachSequence();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isIntersecting, timeLeft, breachState]);

  // Cinematic Movie Scene Trigger
  const triggerBreachSequence = () => {
    setBreachState('opening');

    // Step 2: Spider evil monster emerges from crack
    setTimeout(() => {
      setBreachState('emerged');
    }, 1400);

    // Step 3: Crack slowly heals & spider retreats back inside
    setTimeout(() => {
      setBreachState('healing');
    }, 4600);

    // Step 4: Stabilized, show reset button
    setTimeout(() => {
      setBreachState('stabilized');
    }, 7200);
  };

  // Reset function back to 1:00
  const handleReset = (e) => {
    if (e) e.stopPropagation();
    setTimeLeft(60);
    setBreachState('idle');
  };

  // Instant trigger for preview / testing
  const handleInstantBreach = (e) => {
    e.stopPropagation();
    setTimeLeft(0);
    triggerBreachSequence();
  };

  // Format seconds to MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <>
      {/* Visual Timer Pill in Section */}
      <div className="relative z-20 flex items-center justify-between gap-2.5 pb-4 mb-6 border-b border-zinc-200/80 text-xs font-mono select-none">
        <div className="flex items-center gap-2">
          {/* Status Dot */}
          <span className="relative flex h-2.5 w-2.5">
            {isIntersecting && breachState === 'idle' && (
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                timeLeft <= 10 ? 'bg-[#FF0055]' : timeLeft <= 25 ? 'bg-[#F59E0B]' : 'bg-[#00F0FF]'
              }`} />
            )}
            <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
              !isIntersecting ? 'bg-zinc-400' :
              timeLeft <= 10 ? 'bg-[#FF0055]' :
              timeLeft <= 25 ? 'bg-[#F59E0B]' : 'bg-[#00F0FF]'
            }`} />
          </span>

          <span className="font-bold text-[#0B0E14] uppercase text-[10px] sm:text-xs tracking-wider">
            DIMENSIONAL TIMELINE // {sectionName}
          </span>

          <span className="text-[10px] text-zinc-500 hidden sm:inline">
            ({isIntersecting ? 'TICKING WHILE VIEWING' : 'PAUSED OFF-SCREEN'})
          </span>
        </div>

        {/* Timer Display or Reset Action */}
        <div className="flex items-center gap-2">
          {breachState === 'stabilized' ? (
            <button
              onClick={handleReset}
              className="spider-btn px-3 py-1 bg-[#FF0055] text-white hover:bg-[#E11D48] text-xs font-mono font-bold rounded-lg flex items-center gap-1.5 shadow-sm animate-pulse"
              title="Click to reset timer to 01:00"
            >
              <RefreshCw className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>RESET TIMELINE (01:00)</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              {/* Monospace Countdown Clock */}
              <div className={`px-2.5 py-1 rounded-md border font-mono font-black text-xs sm:text-sm tracking-widest flex items-center gap-1.5 transition-colors ${
                timeLeft <= 10
                  ? 'bg-[#FF0055] text-white border-[#0B0E14] animate-bounce shadow-sm'
                  : timeLeft <= 25
                  ? 'bg-[#F59E0B]/20 text-[#0B0E14] border-[#F59E0B]'
                  : 'bg-white text-[#0B0E14] border-zinc-300 shadow-sm'
              }`}>
                <Clock className="w-3.5 h-3.5" />
                <span>{formatTime(timeLeft)}</span>
              </div>

              {/* Instant Preview Button (so user can test the movie scene anytime) */}
              <button
                onClick={handleInstantBreach}
                className="px-2 py-1 bg-zinc-100 hover:bg-[#0B0E14] hover:text-[#00F0FF] text-zinc-600 text-[10px] font-mono font-bold rounded border border-zinc-300 transition-colors hidden sm:flex items-center gap-1"
                title="Instant movie breach preview"
              >
                <Zap className="w-2.5 h-2.5 fill-current" />
                <span>Test Breach</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================
          CINEMATIC MOVIE SCENE OVERLAY (TRIGGERS WHEN TIMER = 0:00)
          ======================================================== */}
      {breachState !== 'idle' && (
        <div 
          className="fixed inset-0 z-50 pointer-events-auto flex items-center justify-center overflow-hidden animate-fadeIn"
          style={{ backgroundColor: breachState === 'stabilized' ? 'rgba(5, 0, 18, 0.85)' : '#04000C' }}
        >
          {/* Chromatic Screen Rumble Container */}
          <div className={`relative w-full h-full flex items-center justify-center ${
            breachState === 'opening' || breachState === 'emerged' ? 'animate-screen-rumble' : ''
          }`}>

            {/* Glowing Dimensional Void Halos */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#FF0055]/20 blur-[130px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#00F0FF]/25 blur-[140px] pointer-events-none" />

            {/* Jagged Dimensional Fracture Lightning Veins */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-10 animate-lightning-pulse"
              viewBox="0 0 1920 1080"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Main Central Lightning Tear */}
              <path 
                d="M960 0L920 280L1020 460L890 620L980 820L950 1080" 
                stroke="#00F0FF" 
                strokeWidth="6" 
                strokeLinecap="round"
                className="filter drop-shadow-[0_0_15px_#00F0FF]"
              />
              <path 
                d="M960 0L920 280L1020 460L890 620L980 820L950 1080" 
                stroke="#FF0055" 
                strokeWidth="3" 
                strokeLinecap="round"
                className="filter drop-shadow-[0_0_20px_#FF0055]"
              />
              {/* Radiating Branch Fractures */}
              <path d="M920 280L740 340L610 260" stroke="#00F0FF" strokeWidth="3" opacity="0.8" />
              <path d="M1020 460L1250 420L1380 500" stroke="#FF0055" strokeWidth="3" opacity="0.8" />
              <path d="M890 620L680 720L520 680" stroke="#00F0FF" strokeWidth="3" opacity="0.8" />
              <path d="M980 820L1220 890L1360 840" stroke="#FF0055" strokeWidth="3" opacity="0.8" />
            </svg>

            {/* The Dimensional Crack Rip Opening */}
            <div className={`absolute inset-0 z-20 flex items-center justify-center ${
              breachState === 'healing' ? 'animate-crack-heal' : 'animate-fissure-tear'
            }`}>
              {/* Inner Cosmic Void */}
              <div className="relative w-full max-w-4xl h-[550px] sm:h-[650px] mx-auto rounded-3xl overflow-hidden border-2 border-[#00F0FF] shadow-[0_0_50px_#FF0055]">
                
                {/* Spider Evil Emerging / Retracting */}
                <div className={`w-full h-full relative flex items-center justify-center ${
                  breachState === 'emerged' ? 'animate-spider-emerge' :
                  breachState === 'healing' ? 'animate-spider-retreat' :
                  'opacity-0'
                }`}>
                  <img 
                    src="/images/spider-evil.jpg" 
                    alt="Multiverse Spider Evil Anomaly Emerging from Dimensional Crack"
                    className="w-full h-full object-cover object-center filter contrast-125 brightness-110 scale-105"
                  />

                  {/* Dramatic Comic Sound Effect Stamp */}
                  <div className="absolute top-8 left-8 sm:left-12 bg-[#FF0055] text-white font-comic text-2xl sm:text-4xl px-4 py-1.5 border-3 border-[#0B0E14] shadow-[4px_4px_0px_#00F0FF] transform -rotate-6 animate-bounce select-none">
                    💥 ANOMALY BREACH!
                  </div>

                  <div className="absolute bottom-8 right-8 sm:right-12 bg-[#0B0E14] text-[#00F0FF] font-mono font-black text-xs sm:text-sm px-4 py-2 border-2 border-[#00F0FF] shadow-[3px_3px_0px_#FF0055] transform rotate-3 select-none">
                    ⚠️ CRACK OPENED // ENTITY ACTIVE
                  </div>
                </div>

                {/* Healing Energy Sutures (Visible during healing phase) */}
                {breachState === 'healing' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00F0FF]/40 to-transparent flex items-center justify-center animate-pulse">
                    <div className="bg-[#0B0E14] text-[#00F0FF] font-mono font-black text-sm px-5 py-2.5 rounded-xl border-2 border-[#00F0FF] shadow-[0_0_30px_#00F0FF]">
                      ⚡ CRACK HEALING // ENTITY RETREATS INTO THE VOID...
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Movie Title Banner & Narrative Overlay */}
            <div className="absolute top-10 inset-x-6 z-30 flex flex-col items-center text-center space-y-2 pointer-events-none">
              <span className="bg-[#FF0055] text-white font-mono font-black text-xs uppercase px-3 py-1 rounded-md border border-white tracking-widest shadow-lg">
                CINEMATIC EVENT // SECTION: {sectionName}
              </span>
              <h2 className="spider-glitch font-syne font-black text-3xl sm:text-5xl text-white tracking-tight uppercase drop-shadow-[0_0_20px_#00F0FF]">
                {breachState === 'opening' && "A FISSURE RIPS THROUGH REALITY..."}
                {breachState === 'emerged' && "THE SPIDER EVIL EMERGES FROM THE VOID!"}
                {breachState === 'healing' && "THE CRACK SLOWLY HEALS & SEALS SHUT..."}
                {breachState === 'stabilized' && "DIMENSIONAL STABILITY RESTORED"}
              </h2>
            </div>

            {/* Stabilized State: RESET BUTTON */}
            {breachState === 'stabilized' && (
              <div className="absolute bottom-16 inset-x-6 z-40 flex flex-col items-center space-y-4 animate-fadeIn">
                <div className="bg-[#0B0E14]/90 p-6 rounded-3xl border-3 border-[#00F0FF] shadow-[0_0_40px_#00F0FF] max-w-md w-full text-center space-y-4">
                  <div className="flex items-center justify-center gap-2 text-[#00F0FF] font-mono font-bold text-xs uppercase">
                    <CheckCircle2 className="w-4 h-4 text-[#00F0FF]" />
                    <span>BREACH CONTAINED & TIMELINE HEALED</span>
                  </div>

                  <p className="font-sans text-xs text-zinc-300 font-medium">
                    The dimensional fracture has sealed. The spider evil has retreated back into the multiverse abyss.
                  </p>

                  <button
                    onClick={handleReset}
                    className="spider-btn-pink w-full py-4 rounded-xl font-display font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-105 shadow-[0_0_25px_#FF0055] transition-transform"
                  >
                    <RefreshCw className="w-4 h-4 stroke-[3]" />
                    <span>RESET 1:00 TIMER & RESUME</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
}
