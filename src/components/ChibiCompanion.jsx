import React, { useState } from 'react';
import { HelpCircle, Sparkles, X, ChevronRight, ChevronLeft, Zap, ArrowUpRight, MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ChibiCompanion({ onOpenMythology }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const faqs = [
    {
      id: "mythology",
      category: "𓆣 ARABIAN DESERT & MUMMY CODEX",
      badgeColor: "bg-[#F59E0B]/20 text-[#F59E0B] border-[#F59E0B]/40",
      shortLabel: "Arabian Codex",
      question: "What is the Arabian Desert & Mummy Neuromarketing Codex?",
      answer: "A high-graphics Arabian desert sanctuary with flickering torches, golden sand dunes, and pharaonic mummy sarcophagi unveiling 6 landmark case studies (Coca-Cola fMRI, Cheetos EEG, Red Bull Stratos, Campbell's Biometrics, Hyundai EEG, and ₹36L+ Conclave Architecture) where brands generated billions adapting subconscious neuro-principles.",
      actionLabel: "Enter Arabian Codex 𓆣",
      actionCallback: onOpenMythology
    },
    {
      id: "superpower",
      category: "🧠 SECRET SUPERPOWER",
      badgeColor: "bg-[#00F0FF]/15 text-[#00F0FF] border-[#00F0FF]/30",
      shortLabel: "Superpower",
      question: "What's Adhi's unfair advantage in marketing?",
      answer: "He doesn't guess what consumers want — he investigates how EEG-based frontal asymmetry and eye-tracking gaze fixations reveal subconscious preference before conscious bias kicks in. Combining consumer neuroscience with generative AI storytelling turns creative ideas into measurable commercial outcomes.",
      actionLabel: "Read about Neuromarketing",
      actionHref: "#about"
    },
    {
      id: "growth",
      category: "⚡ +137.5% VIRAL SURGE",
      badgeColor: "bg-[#FF0055]/15 text-[#FF0055] border-[#FF0055]/30",
      shortLabel: "+137.5% Growth",
      question: "How did he spike YouTube views by 137.5% at Zenrises?",
      answer: "Relentless visual hook and narrative experimentation! At Zenrises Creatives, Adhithyan spearheaded AI-assisted video scripting, thumbnail A/B testing, and search metadata strategies to scale YouTube reach by +137.5% views and +79.5% subscriber expansion.",
      actionLabel: "View Zenrises Case Study",
      actionHref: "#projects"
    },
    {
      id: "deals",
      category: "💰 ₹36L+ SPONSORSHIPS",
      badgeColor: "bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/30",
      shortLabel: "₹36L+ Deals",
      question: "How on earth did he close ₹36+ Lakh in sponsorships?",
      answer: "By abandoning generic banner logos! Adhithyan pitched experiential demographic access, creator activations, and measurable digital ROI to corporate marketing leads for Incident NITK (₹25L+) and Bizwaves NITK (₹11L+), leading teams of up to 120+ students.",
      actionLabel: "Examine Track Record",
      actionHref: "#experience"
    },
    {
      id: "ethos",
      category: "💡 BRAND PHILOSOPHY",
      badgeColor: "bg-white/10 text-white border-white/20",
      shortLabel: "Brand Ethos",
      question: "What is his core belief about branding?",
      answer: "“Great marketing goes beyond mere visibility — it shapes perception, creates meaning, and builds lasting emotional connections.” He is fascinated by what makes people notice, trust, and ultimately fall in love with a brand.",
      actionLabel: "Read Origin Story",
      actionHref: "#about"
    },
    {
      id: "roles",
      category: "🎯 CAREER FOCUS",
      badgeColor: "bg-[#00F0FF]/15 text-[#00F0FF] border-[#00F0FF]/30",
      shortLabel: "Target Roles",
      question: "What kind of opportunities is Adhi seeking?",
      answer: "Full-time Brand Strategy, Creative Marketing, Growth, or Management Trainee roles. With an MBA in Marketing & Operations from NITK (Class of '26), he is equipped to take full ownership of campaigns from strategic concept to commercial delivery.",
      actionLabel: "Initiate Conversation",
      actionHref: "#contact"
    },
    {
      id: "location",
      category: "📍 BANGALORE & CONTACT",
      badgeColor: "bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/30",
      shortLabel: "Location & Links",
      question: "Where is he based and how do I connect?",
      answer: "Based in Bangalore, Karnataka, and open to full-time roles (on-site, hybrid, or remote). Reach him directly at adhithyan2242@gmail.com, or connect on LinkedIn and Instagram with 1-click below!",
      actionLabel: "Connect on LinkedIn ↗",
      actionHref: personalInfo.socials.linkedin,
      isExternal: true
    }
  ];

  const currentFaq = faqs[currentIndex];

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % faqs.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + faqs.length) % faqs.length);
  };

  return (
    <aside 
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end select-none pointer-events-auto"
      aria-label="Interactive portfolio FAQ companion"
    >
      {/* FAQ Speech Panel */}
      {isOpen && (
        <div 
          className="mb-4 w-[320px] sm:w-[390px] bg-[#0E121B]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-5 sm:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.85)] relative group animate-fadeIn text-zinc-100"
          role="region"
          aria-live="polite"
        >
          {/* Header Strip */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2 font-mono font-bold text-[11px] text-[#F59E0B]">
              <HelpCircle className="w-4 h-4 text-[#F59E0B]" />
              <span>FAQ COMPANION // ADHITHYAN</span>
              <span className="bg-white/10 text-zinc-300 px-2 py-0.5 rounded-full text-[10px]">
                {currentIndex + 1}/{faqs.length}
              </span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 bg-white/5 text-zinc-400 hover:text-white hover:bg-white/15 rounded-full flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Minimize FAQ companion"
            >
              <X className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* Quick FAQ Question Pills */}
          <div className="flex flex-wrap gap-1.5 mb-3.5">
            {faqs.map((f, idx) => (
              <button
                key={f.id}
                onClick={() => setCurrentIndex(idx)}
                className={`text-[10px] font-mono px-2.5 py-1 rounded-full border transition-all ${
                  currentIndex === idx
                    ? 'bg-[#F59E0B] text-black border-[#F59E0B] font-bold shadow-[0_0_10px_rgba(245,158,11,0.3)]'
                    : 'bg-white/5 text-zinc-300 border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {f.shortLabel}
              </button>
            ))}
          </div>

          {/* Active Question & Category */}
          <div className="space-y-2 mb-3">
            <span className={`inline-block font-mono font-bold text-[9px] px-2.5 py-0.5 rounded-full uppercase tracking-wider border ${currentFaq.badgeColor}`}>
              {currentFaq.category}
            </span>
            <h4 className="font-serif font-bold text-base sm:text-lg text-white leading-snug">
              {currentFaq.question}
            </h4>
          </div>

          {/* Active Answer */}
          <p className="font-sans text-xs text-zinc-300 font-normal leading-relaxed mb-4 bg-black/40 p-3.5 rounded-2xl border border-white/10">
            {currentFaq.answer}
          </p>

          {/* Footer Controls & Direct Action Link */}
          <div className="flex items-center justify-between pt-3 border-t border-white/10">
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                className="w-7 h-7 bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white border border-white/10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Previous question"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-7 h-7 bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white border border-white/10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Next question"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {currentFaq.actionCallback ? (
              <button
                onClick={currentFaq.actionCallback}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#F59E0B] hover:underline transition-colors"
              >
                <span>{currentFaq.actionLabel}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <a
                href={currentFaq.actionHref}
                target={currentFaq.isExternal ? "_blank" : undefined}
                rel={currentFaq.isExternal ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#F59E0B] hover:underline transition-colors"
              >
                <span>{currentFaq.actionLabel}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      )}

      {/* Chibi Character Trigger */}
      <button 
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative group cursor-pointer focus:outline-none p-0 bg-transparent border-0"
        title={isOpen ? "Click to close FAQ companion" : "Click to explore interactive FAQs about Adhithyan!"}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close FAQ menu" : "Open FAQ menu"}
      >
        {/* Amber Glow Ring */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#00F0FF] to-[#F59E0B] opacity-75 blur-md group-hover:opacity-100 transition-opacity animate-pulse" />

        {/* Chibi Avatar Circle */}
        <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full border-2 border-[#F59E0B] bg-[#0E121B] shadow-[0_0_20px_rgba(245,158,11,0.4)] overflow-hidden transform group-hover:scale-105 group-hover:-translate-y-1 transition-all">
          <img 
            src="/images/chibi-marketer.jpg" 
            alt="Adhithyan Chibi Digital Marketer FAQ Guide"
            className="w-full h-full object-cover object-top scale-110"
          />
        </div>

        {/* Interactive FAQ Badge */}
        <div className="absolute -top-1 -right-1 bg-[#F59E0B] text-black text-[9px] font-mono font-black px-2 py-0.5 rounded-full border border-black shadow-sm flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
          <span>FAQ</span>
        </div>
      </button>
    </aside>
  );
}
