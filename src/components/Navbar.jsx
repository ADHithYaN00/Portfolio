import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Zap, Sparkles, FileText, Download, Sun, Moon, Volume2, VolumeX, Eye } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { getAudioEngine } from './AmbientAudio';

export default function Navbar({ 
  onOpenMythology, 
  theme = 'light', 
  onToggleTheme, 
  darkViewMode = 'dashboard', 
  onToggleDarkViewMode, 
  isMuted = false, 
  onToggleMute 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'insights', 'neuromarketing-map', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Work', href: '#projects', id: 'projects' },
    { name: 'Playbook', href: '#neuromarketing-map', id: 'neuromarketing-map' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const isDark = theme === 'dark';

  const handleToggleMute = async () => {
    const engine = getAudioEngine();
    if (engine) {
      await engine.resumeContext();
      if (isMuted) {
        engine.playWelcomeChime();
      }
    }
    if (onToggleMute) onToggleMute();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Editorial Strip */}
      <div className={`hidden md:block border-b transition-all duration-300 ${
        isDark ? 'bg-black text-zinc-300 border-white/10' : 'bg-[#0B0E14] text-white border-zinc-800'
      } ${scrolled ? 'h-0 opacity-0 overflow-hidden' : 'py-1.5 opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center space-x-4">
            <span className={`flex items-center gap-1.5 font-bold ${isDark ? 'text-white' : 'text-[#00F0FF]'}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-white' : 'bg-[#00F0FF]'} animate-pulse`} />
              ADHITHYAN M. // PORTFOLIO '26
            </span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-400 font-sans text-[11px]">MBA (Marketing & Operations) • NITK</span>
            <span className="text-zinc-600">/</span>
            <span className={`font-sans font-bold text-[11px] ${isDark ? 'text-zinc-200' : 'text-[#FF0055]'}`}>
              ₹36L+ Sponsorships Raised
            </span>
          </div>
          <div className="flex items-center space-x-3 text-[11px]">
            <span className="text-zinc-400">BASE: BANGALORE, KARNATAKA</span>
            <span className={`${
              isDark ? 'bg-white text-black' : 'bg-[#FF0055] text-white'
            } font-mono font-bold px-2 py-0.5 rounded text-[10px]`}>
              OPEN FOR ROLES
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-200 ${
          scrolled 
            ? 'bg-[#07090D]/95 backdrop-blur-md border-b border-white/10 py-3' 
            : 'bg-[#07090D]/80 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Monogram / Brand Identity matching Editorial Mockup */}
          <a 
            href="#hero" 
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="font-mono font-black text-sm px-2.5 py-1.5 rounded-lg bg-[#141822] text-white border border-white/20 shadow-sm group-hover:border-[#F59E0B] transition-colors shrink-0">
              AM
            </div>
            <div>
              <span className="font-serif font-black text-base sm:text-lg tracking-tight block leading-tight text-white group-hover:text-[#F59E0B] transition-colors">
                Adhithyan M.
              </span>
              <span className="font-sans text-[11px] text-zinc-400 block -mt-0.5 font-normal tracking-normal">
                Brand Strategist · Marketing &amp; Ops
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links matching Mockup */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-sans uppercase tracking-wider font-semibold transition-all relative py-1 ${
                    isActive
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#F59E0B] rounded-full shadow-[0_0_8px_#F59E0B]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA & Controls matching Editorial Mockup */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Portfolio '26 Status Indicator */}
            <div className="hidden xl:inline-flex items-center gap-2 font-mono text-xs text-zinc-300 font-medium px-2 py-1">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] shadow-[0_0_8px_#F59E0B]" />
              <span>Portfolio '26</span>
            </div>

            {/* Resume Button */}
            <a
              href="/Adhithyan_M_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Adhithyan_M_Resume.pdf"
              className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white font-sans text-xs border border-white/20 inline-flex items-center gap-1.5 transition-all hover:border-white/40 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Let's Build Button (Golden Yellow) */}
            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-[#F59E0B] hover:bg-[#EAB308] text-black font-sans font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5 transition-all transform hover:scale-105 shadow-[0_4px_14px_rgba(245,158,11,0.35)] cursor-pointer"
            >
              <span>Let's Build</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
            </a>

            {/* Ambient Music Mute/Unmute Button */}
            <button
              type="button"
              onClick={handleToggleMute}
              className="p-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-zinc-300 flex items-center justify-center cursor-pointer transition-colors"
              title={isMuted ? "Unmute Ambient Music" : "Mute Ambient Music"}
              aria-label="Toggle ambient music"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-zinc-500" /> : <Volume2 className="w-4 h-4 text-[#F59E0B]" />}
            </button>

            {/* Minimalist Theme Toggle Button (Touch & iOS optimized) */}
            <button
              type="button"
              onClick={onToggleTheme}
              className="p-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-zinc-300 flex items-center justify-center cursor-pointer select-none touch-manipulation active:scale-95 transition-all"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-300 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-300 transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Ancient Realm Mystery Portal Button */}
            <button
              type="button"
              onClick={onOpenMythology}
              className="matte-sand-btn px-3 py-1.5 rounded-xl text-xs uppercase tracking-wider inline-flex items-center gap-1.5"
              title="Unlock the Ancient Arabian Neuromarketing Codex"
            >
              <Eye className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>CODEX</span>
            </button>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="lg:hidden flex items-center space-x-1.5">
            {/* Mobile Mute/Unmute Button */}
            <button
              onClick={handleToggleMute}
              className={`p-1.5 rounded-lg border transition-all flex items-center justify-center ${
                isDark
                  ? isMuted ? 'bg-white/5 text-zinc-500 border-white/10' : 'bg-white/15 text-white border-white/20'
                  : isMuted ? 'bg-white text-zinc-400 border border-zinc-300' : 'bg-white text-[#FF0055] border-2 border-[#0B0E14]'
              }`}
              title={isMuted ? "Unmute Ambient Music" : "Mute Ambient Music"}
              aria-label="Toggle ambient music"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-pulse" />}
            </button>

            {/* Mobile Theme Toggle Button (Touch-optimized for iOS & Android) */}
            <button
              type="button"
              onClick={onToggleTheme}
              className={`w-9 h-9 rounded-xl border transition-all flex items-center justify-center cursor-pointer select-none touch-manipulation active:scale-95 ${
                isDark
                  ? 'bg-white/15 text-white border-white/25 active:bg-white/20'
                  : 'bg-white text-[#0B0E14] border-2 border-[#0B0E14] shadow-spider-sm active:bg-zinc-100'
              }`}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-zinc-900" />}
            </button>

            <button
              onClick={onOpenMythology}
              className="matte-sand-btn animate-matte-sand-pulse sm:hidden text-[11px] uppercase px-2.5 py-1.5 rounded-lg inline-flex items-center gap-1"
              title="Unlock the Ancient Arabian Neuromarketing Codex"
            >
              <Eye className="w-3 h-3 stroke-[2.5]" />
              <span>CODEX</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-1.5 rounded-lg transition-colors ${
                isDark
                  ? 'bg-[#121620] border border-white/20 text-white hover:bg-[#1A202E]'
                  : 'bg-white border-2 border-[#0B0E14] shadow-spider-sm text-[#0B0E14] hover:bg-zinc-100'
              }`}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5 stroke-[2.5]" /> : <Menu className="w-5 h-5 stroke-[2.5]" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className={`lg:hidden px-6 py-6 shadow-2xl animate-fadeIn border-b ${
          isDark 
            ? 'bg-[#0B0D12] border-white/15 text-white' 
            : 'bg-white border-b-3 border-[#0B0E14] shadow-spider-lg'
        }`}>
          <div className="flex flex-col space-y-3">
            <div className={`text-xs font-mono font-bold uppercase pb-2 border-b flex items-center justify-between ${
              isDark ? 'border-zinc-800 text-zinc-400' : 'border-zinc-200 text-zinc-600'
            }`}>
              <span>// DIRECT PORTFOLIO NAVIGATION</span>
              <span className={`font-mono font-black text-[10px] px-2 py-0.5 rounded ${
                isDark ? 'bg-white text-black' : 'bg-[#00F0FF] text-black border border-[#0B0E14]'
              }`}>
                NITK '26
              </span>
            </div>

            {/* Quick Audio Mute / Unmute Switch Row */}
            <button
              onClick={handleToggleMute}
              className={`w-full py-2.5 px-3 rounded-lg border flex items-center justify-between font-mono text-xs font-bold uppercase transition-colors ${
                isDark
                  ? 'bg-white/5 text-zinc-200 border-white/15 hover:bg-white/10'
                  : 'bg-zinc-50 text-[#0B0E14] border-2 border-[#0B0E14]'
              }`}
            >
              <span className="flex items-center gap-2">
                {isMuted ? <VolumeX className="w-4 h-4 text-zinc-400" /> : <Volume2 className="w-4 h-4 text-[#00F0FF] animate-pulse" />}
                <span>{isMuted ? 'Ambient Audio: Muted' : 'Ambient Audio: Playing 🎵'}</span>
              </span>
              <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded">
                {isMuted ? 'Tap to Play' : 'Tap to Mute'}
              </span>
            </button>

            {/* Quick Theme Switch Row (iOS & Web touch-optimized) */}
            <button
              type="button"
              onClick={onToggleTheme}
              className={`w-full py-3 px-4 rounded-xl border flex items-center justify-between font-mono text-xs font-bold uppercase cursor-pointer select-none touch-manipulation active:scale-98 transition-all ${
                isDark
                  ? 'bg-white/10 text-white border-white/20 active:bg-white/15'
                  : 'bg-zinc-100 text-[#0B0E14] border-2 border-[#0B0E14] shadow-spider-sm active:bg-zinc-200'
              }`}
            >
              <span className="flex items-center gap-2.5">
                {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-zinc-900" />}
                <span>{isDark ? 'Mode: Dark Theme' : 'Mode: Light Theme'}</span>
              </span>
              <span className="text-[10px] bg-white/15 px-2.5 py-1 rounded border border-white/10 font-black">
                Switch to {isDark ? 'Light' : 'Dark'}
              </span>
            </button>

            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between py-2.5 px-3 text-lg font-syne font-black rounded-lg transition-colors ${
                  isDark
                    ? 'text-zinc-200 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
                    : 'text-[#0B0E14] hover:bg-zinc-100 border-2 border-transparent hover:border-[#0B0E14]'
                }`}
              >
                <span>{link.name}</span>
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  isDark ? 'bg-white/10 text-zinc-300' : 'bg-[#0B0E14] text-white'
                }`}>
                  0{idx + 1}
                </span>
              </a>
            ))}

            <div className="pt-2 space-y-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  if (onOpenMythology) onOpenMythology();
                }}
                className="matte-sand-btn animate-matte-sand-pulse w-full py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4 stroke-[2.5]" />
                <span>ARABIAN DESERT CODEX</span>
              </button>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className={`w-full text-center block py-3.5 rounded-xl font-display font-black text-xs uppercase tracking-wider ${
                  isDark
                    ? 'bg-white text-black hover:bg-zinc-200'
                    : 'spider-btn-pink'
                }`}
              >
                Connect With Adhithyan Direct 🚀
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
