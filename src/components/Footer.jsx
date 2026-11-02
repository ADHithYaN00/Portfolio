import React from 'react';
import { ArrowUp, Sparkles, Zap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0E14] text-white border-t-3 border-[#0B0E14] relative z-10 font-display">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-zinc-800">
          
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="spider-glitch font-syne font-black text-3xl sm:text-4xl text-white tracking-tight">
                ADHITHYAN M.
              </span>
              <span className="w-2.5 h-2.5 bg-[#FF0055] rounded-full inline-block animate-pulse" />
            </div>
            
            <p className="text-zinc-400 text-sm font-sans font-medium leading-relaxed max-w-sm">
              Creative Brand Marketer with an MBA in Marketing & Operations from NITK. Decoding subconscious consumer emotion with neuromarketing and scaling reach with high-velocity AI video storytelling.
            </p>

            <div className="text-xs font-mono flex items-center space-x-3 pt-2">
              <span className="bg-[#00F0FF]/15 text-[#00F0FF] px-2.5 py-1 rounded border border-[#00F0FF]/40 text-[10px] uppercase font-bold">
                AVAILABLE FOR STRATEGIC ROLES
              </span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-400">CLASS OF 2026</span>
            </div>
          </div>

          {/* Quick Indices */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-xs">
            <div>
              <span className="text-[#00F0FF] block uppercase tracking-widest text-[11px] mb-3 font-mono font-bold">
                CURATED INDEX
              </span>
              <ul className="space-y-2 text-zinc-300 font-mono">
                <li><a href="#about" className="hover:text-[#00F0FF] transition-colors">01 // Origin Story</a></li>
                <li><a href="#experience" className="hover:text-[#00F0FF] transition-colors">02 // Track Record</a></li>
                <li><a href="#projects" className="hover:text-[#00F0FF] transition-colors">03 // Creative Works</a></li>
                <li><a href="#skills" className="hover:text-[#00F0FF] transition-colors">04 // Arsenal</a></li>
                <li><a href="#insights" className="hover:text-[#00F0FF] transition-colors">05 // Dispatches</a></li>
              </ul>
            </div>

            <div>
              <span className="text-[#FF0055] block uppercase tracking-widest text-[11px] mb-3 font-mono font-bold">
                DIRECT CHANNELS
              </span>
              <ul className="space-y-2 text-zinc-300 font-mono">
                <li><a href="#contact" className="hover:text-[#FF0055] transition-colors">06 // Collaborate</a></li>
                <li>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-[#00F0FF] transition-colors"
                  >
                    Direct Email ↗
                  </a>
                </li>
                <li>
                  <a 
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#00F0FF] transition-colors"
                  >
                    LinkedIn Profile ↗
                  </a>
                </li>
                <li>
                  <a 
                    href={personalInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FF0055] transition-colors"
                  >
                    Instagram Profile ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Return to Top */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between">
            <button
              onClick={scrollToTop}
              className="spider-btn inline-flex items-center space-x-2 px-5 py-2.5 bg-zinc-900 text-white hover:bg-zinc-800 font-mono font-bold text-xs uppercase tracking-wider rounded-xl border border-zinc-700"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            <div className="text-left md:text-right text-xs text-zinc-400 mt-6 md:mt-0 font-mono">
              <div>BASE: BANGALORE, KARNATAKA</div>
              <div className="text-[#00F0FF] uppercase font-bold">MBA • NITK</div>
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
            <span className="text-[#00F0FF] font-bold">Spider-Verse Glitch & Genshin Sky</span>
            <span>• React & Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
