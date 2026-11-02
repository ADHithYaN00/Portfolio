import React, { useState } from 'react';
import { HelpCircle, Sparkles, X, ChevronRight, ChevronLeft, Zap, ArrowUpRight, MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ChibiCompanion({ onOpenMythology }) {
  const [isOpen, setIsOpen] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const faqs = [
    {
      id: "mythology",
      category: "🏛️ ANCIENT REALM CODEX",
      badgeColor: "bg-[#D4AF37] text-black font-black",
      shortLabel: "Ancient Codex",
      question: "What is the Ancient Neuromarketing & Experiential Codex?",
      answer: "A high-graphics mythological realm unveiling 6 landmark case studies (Coca-Cola fMRI, Cheetos EEG, Red Bull Stratos, Campbell's Biometrics, Hyundai EEG, and ₹36L+ Conclave Architecture) where brands generated billions adapting subconscious neuro-principles.",
      actionLabel: "Enter Ancient Codex 🏛️",
      actionCallback: onOpenMythology
    },
    {
      id: "superpower",
      category: "🧠 SECRET SUPERPOWER",
      badgeColor: "bg-[#00F0FF] text-[#0B0E14]",
      shortLabel: "Superpower",
      question: "What's Adhi's unfair advantage in marketing?",
      answer: "He doesn't guess what consumers want — he investigates how EEG-based frontal asymmetry and eye-tracking gaze fixations reveal subconscious preference before conscious bias kicks in. Combining consumer neuroscience with generative AI storytelling turns creative ideas into measurable commercial outcomes.",
      actionLabel: "Read about Neuromarketing",
      actionHref: "#about"
    },
    {
      id: "growth",
      category: "⚡ +137.5% VIRAL SURGE",
      badgeColor: "bg-[#FF0055] text-white",
      shortLabel: "+137.5% Growth",
      question: "How did he spike YouTube views by 137.5% at Zenrises?",
      answer: "Relentless visual hook and narrative experimentation! At Zenrises Creatives, Adhithyan spearheaded AI-assisted video scripting, thumbnail A/B testing, and search metadata strategies to scale YouTube reach by +137.5% views and +79.5% subscriber expansion.",
      actionLabel: "View Zenrises Case Study",
      actionHref: "#projects"
    },
    {
      id: "deals",
      category: "💰 ₹36L+ SPONSORSHIPS",
      badgeColor: "bg-[#F59E0B] text-[#0B0E14]",
      shortLabel: "₹36L+ Deals",
      question: "How on earth did he close ₹36+ Lakh in sponsorships?",
      answer: "By abandoning generic banner logos! Adhithyan pitched experiential demographic access, creator activations, and measurable digital ROI to corporate marketing leads for Incident NITK (₹25L+) and Bizwaves NITK (₹8L+), leading teams of up to 120+ students.",
      actionLabel: "Examine Track Record",
      actionHref: "#experience"
    },
    {
      id: "ethos",
      category: "💡 BRAND PHILOSOPHY",
      badgeColor: "bg-[#7928CA] text-white",
      shortLabel: "Brand Ethos",
      question: "What is his core belief about branding?",
      answer: "“Great marketing goes beyond mere visibility — it shapes perception, creates meaning, and builds lasting emotional connections.” He is fascinated by what makes people notice, trust, and ultimately fall in love with a brand.",
      actionLabel: "Read Origin Story",
      actionHref: "#about"
    },
    {
      id: "roles",
      category: "🎯 CAREER FOCUS",
      badgeColor: "bg-[#00F0FF] text-[#0B0E14]",
      shortLabel: "Target Roles",
      question: "What kind of opportunities is Adhi seeking?",
      answer: "Full-time Brand Strategy, Creative Marketing, Growth, or Management Trainee roles. With an MBA in Marketing & Operations from NITK (Class of '26), he is equipped to take full ownership of campaigns from strategic concept to commercial delivery.",
      actionLabel: "Initiate Conversation",
      actionHref: "#contact"
    },
    {
      id: "location",
      category: "📍 BANGALORE & CONTACT",
      badgeColor: "bg-[#FF0055] text-white",
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
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end select-none pointer-events-auto"
      aria-label="Interactive portfolio FAQ companion"
    >
      {/* FAQ Speech Panel */}
      {isOpen && (
        <div 
          className="mb-3 w-[310px] sm:w-[380px] bg-white border-2.5 border-[#0B0E14] rounded-3xl p-4 sm:p-5 shadow-spider-md relative group animate-fadeIn"
          role="region"
          aria-live="polite"
        >
          {/* Header Strip */}
          <div className="flex items-center justify-between pb-2 mb-3 border-b-2 border-zinc-100">
            <div className="flex items-center gap-1.5 font-mono font-bold text-[11px] text-[#0B0E14]">
              <HelpCircle className="w-4 h-4 text-[#FF0055]" />
              <span>CHIBI FAQ // ABOUT ADHI</span>
              <span className="bg-zinc-100 text-zinc-600 px-1.5 py-0.5 rounded text-[10px]">
                {currentIndex + 1}/{faqs.length}
              </span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-6 h-6 bg-zinc-100 text-zinc-700 hover:bg-[#FF0055] hover:text-white rounded-full flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Minimize FAQ companion"
            >
              <X className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* Quick FAQ Question Pills (1-Click Selector) */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {faqs.map((f, idx) => (
              <button
                key={f.id}
                onClick={() => setCurrentIndex(idx)}
                className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border transition-all ${
                  currentIndex === idx
                    ? 'bg-[#0B0E14] text-white border-[#0B0E14] shadow-sm'
                    : 'bg-zinc-50 text-zinc-600 border-zinc-200 hover:border-[#0B0E14]'
                }`}
              >
                {f.shortLabel}
              </button>
            ))}
          </div>

          {/* Active Question & Category */}
          <div className="space-y-2 mb-3">
            <span className={`inline-block font-mono font-bold text-[9px] px-2 py-0.5 rounded uppercase tracking-wider ${currentFaq.badgeColor}`}>
              {currentFaq.category}
            </span>
            <h4 className="font-syne font-bold text-sm sm:text-base text-[#0B0E14] leading-snug">
              {currentFaq.question}
            </h4>
          </div>

          {/* Active Answer */}
          <p className="font-sans text-xs text-zinc-700 font-medium leading-relaxed mb-4 bg-zinc-50/90 p-2.5 rounded-xl border border-zinc-200">
            {currentFaq.answer}
          </p>

          {/* Footer Controls & Direct Action Link */}
          <div className="flex items-center justify-between pt-2 border-t border-zinc-100">
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                className="w-7 h-7 bg-white hover:bg-zinc-100 text-[#0B0E14] border border-zinc-300 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Previous question"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
              </button>
              <button
                onClick={handleNext}
                className="w-7 h-7 bg-white hover:bg-zinc-100 text-[#0B0E14] border border-zinc-300 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Next question"
              >
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {currentFaq.actionCallback ? (
              <button
                onClick={currentFaq.actionCallback}
                className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#D4AF37] hover:text-[#0B0E14] transition-colors"
              >
                <span>{currentFaq.actionLabel}</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            ) : (
              <a
                href={currentFaq.actionHref}
                target={currentFaq.isExternal ? "_blank" : undefined}
                rel={currentFaq.isExternal ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#FF0055] hover:text-[#0B0E14] transition-colors"
              >
                <span>{currentFaq.actionLabel}</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            )}
          </div>

          {/* Speech Bubble Tail */}
          <div className="absolute -bottom-2.5 right-8 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-[#0B0E14]" />
          <div className="absolute -bottom-2 right-8 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white" />
        </div>
      )}

      {/* Chibi Character Trigger */}
      <div 
        onClick={() => {
          if (!isOpen) setIsOpen(true);
          else setCurrentIndex((prev) => (prev + 1) % faqs.length);
        }}
        className="relative group cursor-pointer"
        title="Click to explore interactive FAQs about Adhithyan!"
      >
        {/* Glow Ring */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#00F0FF] via-[#FF0055] to-[#F59E0B] opacity-75 blur-sm group-hover:opacity-100 transition-opacity animate-pulse" />

        {/* Chibi Avatar Circle */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border-3 border-[#0B0E14] bg-white shadow-spider-md overflow-hidden transform group-hover:scale-105 group-hover:-translate-y-1 transition-all">
          <img 
            src="/images/chibi-marketer.jpg" 
            alt="Adhithyan Chibi Digital Marketer FAQ Guide"
            className="w-full h-full object-cover object-top scale-110"
          />
        </div>

        {/* Interactive FAQ Badge */}
        <div className="absolute -top-1 -right-1 bg-[#0B0E14] text-[#00F0FF] text-[9px] font-mono font-black px-2 py-0.5 rounded-full border border-white shadow-sm flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF0055] animate-ping" />
          <span>FAQ</span>
        </div>
      </div>
    </aside>
  );
}
