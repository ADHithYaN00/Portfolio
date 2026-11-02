import React from 'react';
import { ArrowUp, Sparkles, Zap, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenMythology, theme = 'dark', onToggleTheme }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDark = theme === 'dark';

  return (
    <footer className="border-t border-white/10 bg-[#050608] text-white relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-serif font-bold text-sm text-white">
                AM
              </div>
              <span className="font-serif font-black text-2xl sm:text-3xl text-white tracking-tight">
                ADHITHYAN M.
              </span>
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] inline-block animate-pulse" />
            </div>
            
            <p className="text-zinc-400 text-sm font-sans font-normal leading-relaxed max-w-sm">
              Creative Brand Strategist with an MBA in Marketing &amp; Operations from NITK. Decoding subconscious consumer emotion with neuromarketing and scaling reach through high-velocity creative storytelling.
            </p>

            <div className="text-xs font-mono flex items-center space-x-3 pt-2">
              <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold border bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/30 tracking-wider">
                AVAILABLE FOR STRATEGIC ROLES
              </span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-400">CLASS OF 2026</span>
            </div>
          </div>

          {/* Quick Indices */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-xs">
            <div>
              <span className="block uppercase tracking-[0.2em] text-[11px] mb-4 font-mono font-bold text-[#F59E0B]">
                CURATED INDEX
              </span>
              <ul className="space-y-2.5 text-zinc-400 font-mono">
                <li><a href="#about" className="hover:text-[#F59E0B] transition-colors">01 // Origin Story</a></li>
                <li><a href="#experience" className="hover:text-[#F59E0B] transition-colors">02 // Track Record</a></li>
                <li><a href="#projects" className="hover:text-[#F59E0B] transition-colors">03 // Creative Works</a></li>
                <li><a href="#skills" className="hover:text-[#F59E0B] transition-colors">04 // Arsenal</a></li>
                <li><a href="#insights" className="hover:text-[#F59E0B] transition-colors">05 // Dispatches</a></li>
                <li><a href="#neuromarketing-map" className="hover:text-[#F59E0B] transition-colors">06 // Cognitive Map</a></li>
              </ul>
            </div>

            <div>
              <span className="block uppercase tracking-[0.2em] text-[11px] mb-4 font-mono font-bold text-[#F59E0B]">
                DIRECT CHANNELS
              </span>
              <ul className="space-y-2.5 text-zinc-400 font-mono">
                <li><a href="#contact" className="hover:text-[#F59E0B] transition-colors">07 // Collaborate</a></li>
                <li>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-[#F59E0B] transition-colors"
                  >
                    Direct Email ↗
                  </a>
                </li>
                <li>
                  <a 
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F59E0B] transition-colors"
                  >
                    LinkedIn Profile ↗
                  </a>
                </li>
                <li>
                  <a 
                    href={personalInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F59E0B] transition-colors"
                  >
                    Instagram Profile ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Return to Top & Theme Toggle */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onToggleTheme}
                className="inline-flex items-center space-x-1.5 px-4 py-2 bg-white/5 hover:bg-white/10 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-full border border-white/15 cursor-pointer select-none touch-manipulation active:scale-95 transition-all"
                title="Toggle Theme"
                aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDark ? <Sun className="w-3.5 h-3.5 text-[#F59E0B]" /> : <Moon className="w-3.5 h-3.5 text-zinc-300" />}
                <span>{isDark ? 'Light' : 'Dark'}</span>
              </button>

              <button
                onClick={scrollToTop}
                className="inline-flex items-center space-x-2 px-5 py-2 bg-white/10 text-white hover:bg-[#F59E0B] hover:text-black font-mono font-bold text-xs uppercase tracking-wider rounded-full border border-white/15 transition-all"
                aria-label="Back to top of page"
              >
                <span>Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="text-left md:text-right text-xs text-zinc-400 mt-6 md:mt-0 font-mono">
              <div>BASE: BANGALORE, KARNATAKA</div>
              <div className="text-[#F59E0B] uppercase font-bold mt-1">MBA • NITK SURATHKAL '26</div>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Notes */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4 font-mono">
          <p>
            &copy; {new Date().getFullYear()} Adhithyan M. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-zinc-400">
            <span>Design:</span>
            <span className="text-[#F59E0B] font-bold">
              Luxury Dark Editorial
            </span>
            <span>•</span>
            <span>NITK '26</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
