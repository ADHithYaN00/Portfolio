import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Zap, Sparkles, FileText, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'insights', 'contact'];
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
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Track Record', href: '#experience', id: 'experience' },
    { name: 'Campaigns & Works', href: '#projects', id: 'projects' },
    { name: 'Arsenal', href: '#skills', id: 'skills' },
    { name: 'Dispatches', href: '#insights', id: 'insights' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Spider-Verse Editorial Strip */}
      <div className={`hidden md:block bg-[#0B0E14] text-white border-b border-zinc-800 transition-all duration-300 ${scrolled ? 'h-0 opacity-0 overflow-hidden' : 'py-1.5 opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-[#00F0FF] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
              ADHITHYAN M. // PORTFOLIO '26
            </span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-300 font-sans text-[11px]">MBA (Marketing & Ops) • NITK</span>
            <span className="text-zinc-600">/</span>
            <span className="text-[#FF0055] font-sans font-bold text-[11px]">₹36L+ Sponsorships Raised</span>
          </div>
          <div className="flex items-center space-x-3 text-[11px]">
            <span className="text-zinc-400">BASE: BANGALORE, KARNATAKA</span>
            <span className="bg-[#FF0055] text-white font-mono font-bold px-2 py-0.5 rounded text-[10px]">
              OPEN FOR ROLES
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-200 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border-b-2.5 border-[#0B0E14] shadow-spider py-2.5' 
            : 'bg-white/90 backdrop-blur-sm border-b-2 border-[#0B0E14] py-3.5'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Monogram / Brand */}
          <a 
            href="#hero" 
            className="group flex items-center gap-2.5 focus:outline-none"
          >
            <div className="bg-[#0B0E14] text-white font-syne font-black text-xl px-2.5 py-0.5 rounded-lg border-2 border-[#0B0E14] shadow-spider-sm group-hover:bg-[#FF0055] transition-colors">
              AM
            </div>
            <div>
              <span className="spider-glitch font-syne font-black text-xl sm:text-2xl tracking-tight text-[#0B0E14] block leading-none">
                ADHITHYAN M.
              </span>
              <span className="font-mono font-bold text-[10px] text-zinc-500 uppercase tracking-wider block mt-0.5">
                Brand Strategist • NITK
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-display uppercase tracking-wider font-bold transition-all px-3 py-1.5 rounded-lg border-2 ${
                    isActive
                      ? 'bg-[#0B0E14] text-white border-[#0B0E14] shadow-spider-sm font-black'
                      : 'bg-transparent text-zinc-800 border-transparent hover:bg-zinc-100 hover:border-[#0B0E14]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-2.5">
            <a
              href="/Adhithyan_M_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Adhithyan_M_Resume.pdf"
              className="px-3.5 py-1.5 rounded-xl font-display font-black text-xs uppercase tracking-wider inline-flex items-center gap-1.5 bg-white text-[#0B0E14] border-2 border-[#0B0E14] shadow-spider-sm hover:bg-[#00F0FF] transition-colors"
            >
              <FileText className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Resume (PDF)</span>
            </a>
            <a
              href="#contact"
              className="spider-btn-pink px-4 py-1.5 rounded-xl font-display font-black text-xs uppercase tracking-wider inline-flex items-center gap-1.5"
            >
              <span>Collaborate</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center space-x-2">
            <a
              href="/Adhithyan_M_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Adhithyan_M_Resume.pdf"
              className="sm:hidden text-[11px] font-display font-black uppercase px-2.5 py-1.5 bg-white text-[#0B0E14] border-2 border-[#0B0E14] shadow-spider-sm rounded-lg inline-flex items-center gap-1"
            >
              <FileText className="w-3 h-3" />
              <span>CV</span>
            </a>
            <a
              href="#contact"
              className="sm:hidden text-xs font-display font-black uppercase px-3 py-1.5 bg-[#FF0055] text-white border-2 border-[#0B0E14] shadow-spider-sm rounded-lg"
            >
              Connect
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-white border-2 border-[#0B0E14] shadow-spider-sm rounded-lg text-[#0B0E14] hover:bg-zinc-100 focus:outline-none"
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
        <div className="lg:hidden bg-white border-b-3 border-[#0B0E14] px-6 py-6 shadow-spider-lg animate-fadeIn">
          <div className="flex flex-col space-y-3">
            <div className="text-xs font-mono font-bold uppercase pb-2 border-b border-zinc-200 flex items-center justify-between text-zinc-600">
              <span>// DIRECT PORTFOLIO NAVIGATION</span>
              <span className="bg-[#00F0FF] text-black font-mono font-black text-[10px] px-2 py-0.5 rounded border border-[#0B0E14]">
                NITK '26
              </span>
            </div>
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-2.5 px-3 text-lg font-syne font-black text-[#0B0E14] hover:bg-zinc-100 border-2 border-transparent hover:border-[#0B0E14] rounded-lg transition-colors"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono font-bold bg-[#0B0E14] text-white px-2 py-0.5 rounded">
                  0{idx + 1}
                </span>
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="spider-btn-pink w-full text-center block py-3.5 rounded-xl font-display font-black text-xs uppercase tracking-wider"
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
