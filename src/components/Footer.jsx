import React from 'react';
import { ArrowUp, Sparkles, Zap, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenMythology, theme = 'light', onToggleTheme }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDark = theme === 'dark';

  return (
    <footer className={`border-t transition-colors duration-300 relative z-10 font-display ${
      isDark ? 'bg-black text-white border-zinc-800' : 'bg-[#0B0E14] text-white border-[#0B0E14]'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-zinc-800">
          
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="font-syne font-black text-3xl sm:text-4xl text-white tracking-tight">
                ADHITHYAN M.
              </span>
              <span className={`w-2.5 h-2.5 rounded-full inline-block ${
                isDark ? 'bg-white' : 'bg-[#FF0055]'
              } animate-pulse`} />
            </div>
            
            <p className="text-zinc-400 text-sm font-sans font-medium leading-relaxed max-w-sm">
              Creative Brand Marketer with an MBA in Marketing & Operations from NITK. Decoding subconscious consumer emotion with neuromarketing and scaling reach with high-velocity AI video storytelling.
            </p>

            <div className="text-xs font-mono flex items-center space-x-3 pt-2">
              <span className={`px-2.5 py-1 rounded text-[10px] uppercase font-bold border ${
                isDark 
                  ? 'bg-white/10 text-white border-white/20' 
                  : 'bg-[#00F0FF]/15 text-[#00F0FF] border-[#00F0FF]/40'
              }`}>
                AVAILABLE FOR STRATEGIC ROLES
              </span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-400">CLASS OF 2026</span>
            </div>
          </div>

          {/* Quick Indices */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-xs">
            <div>
              <span className={`block uppercase tracking-widest text-[11px] mb-3 font-mono font-bold ${
                isDark ? 'text-zinc-300' : 'text-[#00F0FF]'
              }`}>
                CURATED INDEX
              </span>
              <ul className="space-y-2 text-zinc-400 font-mono">
                <li><a href="#about" className="hover:text-white transition-colors">01 // Origin Story</a></li>
                <li><a href="#experience" className="hover:text-white transition-colors">02 // Track Record</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">03 // Creative Works</a></li>
                <li><a href="#skills" className="hover:text-white transition-colors">04 // Arsenal</a></li>
                <li><a href="#insights" className="hover:text-white transition-colors">05 // Dispatches</a></li>
                <li><a href="#neuromarketing-map" className="hover:text-white transition-colors">06 // Cognitive Route Map</a></li>
              </ul>
            </div>

            <div>
              <span className={`block uppercase tracking-widest text-[11px] mb-3 font-mono font-bold ${
                isDark ? 'text-zinc-300' : 'text-[#FF0055]'
              }`}>
                DIRECT CHANNELS
              </span>
              <ul className="space-y-2 text-zinc-400 font-mono">
                <li><a href="#contact" className="hover:text-white transition-colors">07 // Collaborate</a></li>
                <li>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-white transition-colors"
                  >
                    Direct Email ↗
                  </a>
                </li>
                <li>
                  <a 
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn Profile ↗
                  </a>
                </li>
                <li>
                  <a 
                    href={personalInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
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
                className="inline-flex items-center space-x-1.5 px-3 py-2 bg-white/5 hover:bg-white/10 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl border border-white/15 cursor-pointer select-none touch-manipulation active:scale-95 transition-all"
                title="Toggle Theme"
                aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDark ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5 text-zinc-300" />}
                <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
              </button>

              <button
                onClick={scrollToTop}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-zinc-900 text-white hover:bg-zinc-800 font-mono font-bold text-xs uppercase tracking-wider rounded-xl border border-zinc-700 transition-colors"
                aria-label="Back to top of page"
              >
                <span>Top</span>
                <ArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>

            <div className="text-left md:text-right text-xs text-zinc-400 mt-6 md:mt-0 font-mono">
              <div>BASE: BANGALORE, KARNATAKA</div>
              <div className={`${isDark ? 'text-zinc-200' : 'text-[#00F0FF]'} uppercase font-bold`}>MBA • NITK</div>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Notes */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4 font-mono">
          <p>
            &copy; {new Date().getFullYear()} Adhithyan M. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-zinc-400">
            <span>Aesthetic:</span>
            <span className={`${isDark ? 'text-white' : 'text-[#00F0FF]'} font-bold`}>
              {isDark ? 'Minimalist Monochrome Studio' : 'Spider-Verse & Genshin Celestial'}
            </span>
            <span>• React & Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}