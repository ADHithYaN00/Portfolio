import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Insights from './components/Insights';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GoldenParticles from './components/GoldenParticles';
import ChibiCompanion from './components/ChibiCompanion';
import MythologicalSanctum from './components/MythologicalSanctum';
import CursorDustTrail from './components/CursorDustTrail';
import AmbientAudio from './components/AmbientAudio';
import NeuromarketingMap from './components/NeuromarketingMap';
import ExecutiveDashboard from './components/ExecutiveDashboard';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio_theme');
      if (saved === 'dark' || saved === 'light') return saved;
    } catch (e) {}
    return 'dark'; // Updated luxury dark editorial theme as default
  });
  const [darkViewMode, setDarkViewMode] = useState('portfolio'); // Default to full luxury portfolio
  const [isMuted, setIsMuted] = useState(false);
  const [realm, setRealm] = useState(() => {
    return window.location.hash === '#ancient-codex' || window.location.hash === '#mythology' 
      ? 'mythology' 
      : 'modern';
  });

  useEffect(() => {
    try {
      const root = document.documentElement;
      const body = document.body;
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');

      if (theme === 'dark') {
        root.classList.add('dark');
        if (body) body.classList.add('dark');
        localStorage.setItem('portfolio_theme', 'dark');
        if (metaThemeColor) metaThemeColor.setAttribute('content', '#07090E');
      } else {
        root.classList.remove('dark');
        if (body) body.classList.remove('dark');
        localStorage.setItem('portfolio_theme', 'light');
        if (metaThemeColor) metaThemeColor.setAttribute('content', '#07090E');
      }
    } catch (e) {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleMute = () => {
    setIsMuted(prev => {
      const next = !prev;
      try {
        localStorage.setItem('portfolio_music_muted', String(next));
      } catch (e) {}
      return next;
    });
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#ancient-codex' || window.location.hash === '#mythology') {
        setRealm('mythology');
      } else if (!window.location.hash || window.location.hash === '#hero') {
        setRealm('modern');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMythologyRealm = () => {
    setRealm('mythology');
    window.location.hash = '#ancient-codex';
  };

  const returnToModernRealm = () => {
    setRealm('modern');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Universal Stardust Particle Cursor / Arabian Sand Cursor */}
      <CursorDustTrail isAncient={realm === 'mythology'} />

      {/* Subtle Ambient Background Music Engine & Floating Controller */}
      <AmbientAudio isMuted={isMuted} onToggleMute={toggleMute} theme={theme} />

      {realm === 'mythology' ? (
        <MythologicalSanctum onReturnToModern={returnToModernRealm} />
      ) : theme === 'dark' && darkViewMode === 'dashboard' ? (
        <ExecutiveDashboard 
          onOpenMythology={openMythologyRealm}
          onToggleTheme={toggleTheme}
          onSwitchToFullPortfolio={() => setDarkViewMode('portfolio')}
          isMuted={isMuted}
          onToggleMute={toggleMute}
        />
      ) : (
        <div className="relative min-h-screen bg-[#07090E] text-zinc-100 selection:bg-[#F59E0B] selection:text-black flex flex-col font-sans overflow-x-hidden">
          {/* Subtle Ambient Glows */}
          <div className="fixed top-0 right-10 w-[550px] h-[550px] bg-[#F59E0B]/5 rounded-full blur-[160px] pointer-events-none -z-10" />
          <div className="fixed top-1/3 left-0 w-[500px] h-[500px] bg-[#00F0FF]/4 rounded-full blur-[170px] pointer-events-none -z-10" />
          <div className="fixed bottom-1/4 right-0 w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-[150px] pointer-events-none -z-10" />

          {/* Accessible Skip Link */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-5 py-2.5 bg-[#F59E0B] text-black font-mono font-bold text-xs uppercase tracking-wider rounded-full shadow-lg"
          >
            Skip directly to main content
          </a>

          {/* Progress Indicator */}
          <div 
            className="fixed top-0 left-0 h-[3px] z-50 transition-all duration-75 ease-out bg-gradient-to-r from-[#F59E0B] via-[#EAB308] to-[#00F0FF] shadow-[0_0_8px_rgba(245,158,11,0.5)]"
            style={{ width: `${scrollProgress}%` }}
            role="progressbar"
            aria-valuenow={Math.round(scrollProgress)}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="Page reading progress"
          />

          {/* Navigation */}
          <Navbar 
            onOpenMythology={openMythologyRealm} 
            theme={theme} 
            onToggleTheme={toggleTheme}
            darkViewMode={darkViewMode}
            onToggleDarkViewMode={() => setDarkViewMode(prev => prev === 'dashboard' ? 'portfolio' : 'dashboard')}
            isMuted={isMuted}
            onToggleMute={toggleMute}
          />

          {/* Main Content Area */}
          <main id="main-content" className="flex-grow relative z-10">
            <Hero onOpenMythology={openMythologyRealm} />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Insights />
            <NeuromarketingMap />
            <Contact />
          </main>

          {/* Interactive Chibi Marketer Companion */}
          <ChibiCompanion onOpenMythology={openMythologyRealm} />

          {/* Colophon & Footer */}
          <Footer onOpenMythology={openMythologyRealm} theme={theme} onToggleTheme={toggleTheme} />
        </div>
      )}
    </>
  );
}
