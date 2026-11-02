import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Brain, 
  Download, 
  ExternalLink, 
  Mail, 
  MapPin, 
  Sun, 
  Volume2, 
  VolumeX, 
  Eye, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  Building,
  Calendar
} from 'lucide-react';
import { 
  personalInfo, 
  aboutData, 
  experienceData, 
  leadershipData, 
  educationData, 
  projectsData, 
  skillsData, 
  scholasticAchievements, 
  contactDetails 
} from '../data/portfolioData';
import { TOOLKIT_LOGOS } from './ToolLogos';
import { getAudioEngine } from './AmbientAudio';

export default function ExecutiveDashboard({ onOpenMythology, onToggleTheme, isMuted, onToggleMute }) {
  const [activeTab, setActiveTab] = useState('overview');

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

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'leadership', label: 'Leadership & Track Record' },
    { id: 'projects', label: 'Case Studies & ROI' },
    { id: 'neuromarketing', label: 'Neuromarketing' },
    { id: 'toolkit', label: 'Toolkit' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-[#050608] text-zinc-100 font-sans selection:bg-white selection:text-black">
      
      {/* ========================================================
          EXECUTIVE DASHBOARD HEADER
          ======================================================== */}
      <header className="sticky top-0 z-40 bg-[#07090D]/95 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Identity & Status */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center font-mono font-bold text-xs text-white">
              AM
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-sm tracking-wider uppercase text-white">
                  ADHITHYAN M.
                </span>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="hidden sm:inline-block font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                  Executive Dossier
                </span>
              </div>
              <span className="font-sans text-[11px] text-zinc-400 block">
                MBA (Marketing & Operations) • NITK '26
              </span>
            </div>
          </div>

          {/* Executive Controls */}
          <div className="flex items-center space-x-2.5">
            {/* Audio Toggle */}
            <button
              onClick={handleToggleMute}
              className="w-9 h-9 rounded-lg border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 flex items-center justify-center transition-colors"
              title={isMuted ? "Unmute Ambient Audio" : "Mute Ambient Audio"}
              aria-label="Toggle ambient music"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Switch to Creative Light Theme */}
            <button
              onClick={onToggleTheme}
              className="h-9 px-3 rounded-lg border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              title="Switch to Creative Light View"
            >
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Light Theme</span>
            </button>

            {/* Ancient Codex Mystery Portal */}
            <button
              onClick={onOpenMythology}
              className="matte-sand-btn h-9 px-3.5 rounded-lg text-xs uppercase tracking-wider flex items-center gap-1.5"
              title="Enter the Ancient Desert Codex"
            >
              <Eye className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>ARABIAN CODEX</span>
            </button>

            {/* Download CV */}
            <a
              href="/Adhithyan_M_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Adhithyan_M_Resume.pdf"
              className="hidden md:inline-flex items-center gap-1.5 h-9 px-3.5 rounded-lg bg-white text-black hover:bg-zinc-200 text-xs font-mono font-bold uppercase tracking-wider transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>

        </div>
      </header>

      {/* ========================================================
          EXECUTIVE HERO HUD & CORE KPIs
          ======================================================== */}
      <section className="border-b border-zinc-800/80 py-12 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
              <span>EXECUTIVE MARKETING DASHBOARD</span>
              <span>•</span>
              <span className="text-zinc-200 font-bold">BANGALORE, INDIA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Creative Brand Strategist & Marketing Leader
            </h1>

            <p className="text-base text-zinc-400 font-normal leading-relaxed">
              Bridging consumer neuroscience, high-velocity creative direction, and measurable commercial outcomes. Specializing in brand positioning, sponsorship acquisition, and data-backed video storytelling.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}?subject=${encodeURIComponent('[Strategic Inquiry] Brand / Marketing Leadership Discussion')}`}
              className="h-11 px-5 rounded-lg bg-white text-black hover:bg-zinc-200 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Direct Inquiries</span>
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-5 rounded-lg border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
            >
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* High-Impact Metric HUD (No crowding, clean stark boxes) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl border border-zinc-800 bg-[#0B0D12]">
            <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-1">
              Corporate Capital
            </div>
            <div className="text-3xl font-bold text-white tracking-tight mb-1">
              ₹36L+
            </div>
            <div className="text-xs text-zinc-400">
              Sponsorships closed across Incident & Bizwaves NITK
            </div>
          </div>

          <div className="p-5 rounded-xl border border-zinc-800 bg-[#0B0D12]">
            <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-1">
              Audience Growth
            </div>
            <div className="text-3xl font-bold text-white tracking-tight mb-1">
              +137.5%
            </div>
            <div className="text-xs text-zinc-400">
              YouTube reach expansion at Zenrises Creatives
            </div>
          </div>

          <div className="p-5 rounded-xl border border-zinc-800 bg-[#0B0D12]">
            <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-1">
              Team Mobilization
            </div>
            <div className="text-3xl font-bold text-white tracking-tight mb-1">
              120+
            </div>
            <div className="text-xs text-zinc-400">
              Marketing, creative & event crew led
            </div>
          </div>

          <div className="p-5 rounded-xl border border-zinc-800 bg-[#0B0D12]">
            <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-1">
              Partner Retention
            </div>
            <div className="text-3xl font-bold text-white tracking-tight mb-1">
              100%
            </div>
            <div className="text-xs text-zinc-400">
              Multi-edition corporate brand renewal rate
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          DASHBOARD NAVIGATION TABS
          ======================================================== */}
      <div className="border-b border-zinc-800 bg-[#07090D]/80 sticky top-[69px] z-30">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto scrollbar-none">
          <nav className="flex space-x-2 py-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white text-black'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ========================================================
          ACTIVE DASHBOARD VIEWPORT (CLEAN, MINIMAL, UNCLUTTERED)
          ======================================================== */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        
        {/* TAB 1: OVERVIEW & PROFILE */}
        {activeTab === 'overview' && (
          <div className="space-y-8 max-w-5xl">
            <div className="p-8 rounded-2xl border border-zinc-800 bg-[#0B0D12] space-y-5">
              <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest block">
                EXECUTIVE SUMMARY
              </span>
              <h2 className="text-2xl font-bold text-white leading-snug">
                “Great marketing goes beyond mere visibility — it shapes perception, creates meaning, and builds lasting emotional connections.”
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                {aboutData.philosophy}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Academic Credentials */}
              <div className="p-6 rounded-2xl border border-zinc-800 bg-[#0B0D12] space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4 text-white" />
                  <span>Academic Qualifications</span>
                </div>
                <div className="space-y-4 pt-1">
                  {educationData.map((edu) => (
                    <div key={edu.id} className="border-l-2 border-zinc-800 pl-3 space-y-0.5">
                      <div className="font-bold text-sm text-white">{edu.degree} — {edu.field}</div>
                      <div className="text-xs text-zinc-400">{edu.institution} • {edu.period}</div>
                      <div className="text-[11px] text-zinc-500">{edu.honors}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Strategic Pillars */}
              <div className="p-6 rounded-2xl border border-zinc-800 bg-[#0B0D12] space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-wider">
                  <Brain className="w-4 h-4 text-white" />
                  <span>Strategic Competencies</span>
                </div>
                <div className="space-y-3 pt-1">
                  {aboutData.corePillars.map((pillar, idx) => (
                    <div key={idx} className="border-l-2 border-zinc-800 pl-3">
                      <div className="font-bold text-sm text-white">{pillar.title}</div>
                      <div className="text-xs text-zinc-400 mt-0.5">{pillar.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Honors & Recognitions */}
            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#0B0D12]">
              <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-white" />
                <span>Scholastic & Leadership Distinctions</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {scholasticAchievements.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg border border-zinc-800/80 bg-zinc-900/40">
                    <div className="font-bold text-xs text-white">{item.title}</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">{item.organization} • {item.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: LEADERSHIP & TRACK RECORD */}
        {activeTab === 'leadership' && (
          <div className="space-y-8 max-w-5xl">
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest block">
                CAMPUS FESTIVAL CONCLAVES & CORPORATE ENGAGEMENT
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {leadershipData.map((lead) => (
                  <div key={lead.id} className="p-6 rounded-2xl border border-zinc-800 bg-[#0B0D12] space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-mono text-[10px] text-zinc-500 uppercase">{lead.period}</div>
                        <h3 className="font-bold text-base text-white">{lead.role}</h3>
                        <div className="text-xs text-zinc-400">{lead.organization}</div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-white font-bold">
                          {lead.revenue}
                        </span>
                        <div className="text-[10px] text-zinc-500 mt-1">{lead.teamSize}</div>
                      </div>
                    </div>
                    <ul className="space-y-1.5 pt-2 border-t border-zinc-800/60">
                      {lead.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                          <span className="text-zinc-600 mt-0.5">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest block">
                PROFESSIONAL EXPERIENCE
              </span>
              <div className="space-y-4">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="p-6 rounded-2xl border border-zinc-800 bg-[#0B0D12] space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <h3 className="font-bold text-base text-white">{exp.role}</h3>
                        <div className="text-xs text-zinc-400">{exp.company} • {exp.location}</div>
                      </div>
                      <span className="font-mono text-[11px] text-zinc-500">{exp.period}</span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">{exp.description}</p>
                    <ul className="space-y-1 pt-2 border-t border-zinc-800/60">
                      {exp.contributions.map((c, i) => (
                        <li key={i} className="text-xs text-zinc-400 flex items-start gap-2">
                          <span className="text-zinc-600 mt-0.5">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: KEY PROJECTS & MEASURED ROI */}
        {activeTab === 'projects' && (
          <div className="space-y-6 max-w-5xl">
            <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest block">
              FLAGSHIP MARKETING INITIATIVES
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectsData.map((proj) => (
                <div key={proj.id} className="p-6 rounded-2xl border border-zinc-800 bg-[#0B0D12] flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">{proj.category}</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-white font-bold">
                        {proj.metric}
                      </span>
                    </div>
                    <h3 className="font-bold text-base text-white leading-snug">{proj.title}</h3>
                    <div className="font-mono text-[11px] text-zinc-400">{proj.client}</div>
                    <p className="text-xs text-zinc-300 leading-relaxed">{proj.summary}</p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-zinc-800/80">
                    <div className="font-mono text-[10px] text-zinc-500 uppercase mb-1">Key Impact</div>
                    <div className="text-xs text-zinc-200 font-bold">{proj.impact}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: NEUROMARKETING FRAMEWORK */}
        {activeTab === 'neuromarketing' && (
          <div className="space-y-8 max-w-5xl">
            <div className="p-8 rounded-2xl border border-zinc-800 bg-[#0B0D12] space-y-4">
              <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest block">
                THE 4-STAGE NEUROMARKETING CONVERSION ROUTE
              </span>
              <h2 className="text-2xl font-bold text-white">
                How Subconscious Brainwaves Determine Purchasing Decisions Before Conscious Logic Registers
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed">
                95% of buying choices are calculated in the subconscious brain. Here is the operational framework Adhithyan utilizes to move consumers from passive attention to permanent brand loyalty.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-xl border border-zinc-800 bg-[#0B0D12] space-y-2">
                <div className="font-mono text-xs text-zinc-500 uppercase">Stage 01 • 0–50ms</div>
                <h3 className="font-bold text-sm text-white">The Subconscious Sensory Gate</h3>
                <p className="text-xs text-zinc-400">
                  Visual cortex filters for contrast, facial expressions, and biological relevance before cognitive evaluation begins.
                </p>
                <div className="text-[11px] text-zinc-300 pt-2 border-t border-zinc-800/60 font-mono">
                  Applied Rule: 0.5s visual hook & high-contrast focal points.
                </div>
              </div>

              <div className="p-6 rounded-xl border border-zinc-800 bg-[#0B0D12] space-y-2">
                <div className="font-mono text-xs text-zinc-500 uppercase">Stage 02 • 0.5–2.0s</div>
                <h3 className="font-bold text-sm text-white">Affective Emotional Resonance</h3>
                <p className="text-xs text-zinc-400">
                  Amygdala & ventromedial prefrontal cortex (vmPFC) assess cultural relevance, warmth, and status elevation.
                </p>
                <div className="text-[11px] text-zinc-300 pt-2 border-t border-zinc-800/60 font-mono">
                  Applied Rule: Frame narrative identity before listing product features.
                </div>
              </div>

              <div className="p-6 rounded-xl border border-zinc-800 bg-[#0B0D12] space-y-2">
                <div className="font-mono text-xs text-zinc-500 uppercase">Stage 03 • 2.0–5.0s</div>
                <h3 className="font-bold text-sm text-white">Striatal Value Computation</h3>
                <p className="text-xs text-zinc-400">
                  Nucleus accumbens (reward anticipate) vs. insula (price pain). When dopamine exceeds friction, conversion occurs.
                </p>
                <div className="text-[11px] text-zinc-300 pt-2 border-t border-zinc-800/60 font-mono">
                  Applied Rule: Eliminate checkout friction; anchor tangible perceived gain.
                </div>
              </div>

              <div className="p-6 rounded-xl border border-zinc-800 bg-[#0B0D12] space-y-2">
                <div className="font-mono text-xs text-zinc-500 uppercase">Stage 04 • Post-Purchase</div>
                <h3 className="font-bold text-sm text-white">Episodic Memory Embalming</h3>
                <p className="text-xs text-zinc-400">
                  Hippocampus locks experiential delight into long-term memory, generating high organic retention and zero-CAC referrals.
                </p>
                <div className="text-[11px] text-zinc-300 pt-2 border-t border-zinc-800/60 font-mono">
                  Applied Rule: Deliver unexpected post-purchase delight & social proof.
                </div>
              </div>
            </div>

            {/* Portal Link to Deep Case Studies */}
            <div className="p-6 rounded-xl border border-zinc-700 bg-zinc-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-bold text-sm text-white">Want to examine the real-world billion-dollar case studies?</div>
                <div className="text-xs text-zinc-400 mt-0.5">Explore the Arabian Desert Codex (Coca-Cola, Cheetos, Red Bull, Campbell's, Hyundai).</div>
              </div>
              <button
                onClick={onOpenMythology}
                className="matte-sand-btn px-4 py-2 rounded-lg text-xs uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap self-start sm:self-auto"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Open Arabian Codex</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 5: SOFTWARE TOOLKIT */}
        {activeTab === 'toolkit' && (
          <div className="space-y-6 max-w-5xl">
            <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest block">
              12 SPECIALIZED CREATIVE & MARKETING ENGINES
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {(skillsData.toolkit || []).map((tool, idx) => {
                const logoInfo = TOOLKIT_LOGOS[tool.name];
                const LogoComp = logoInfo?.component;

                return (
                  <div key={idx} className="p-4 rounded-xl border border-zinc-800 bg-[#0B0D12] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 p-2 flex items-center justify-center shrink-0">
                      {LogoComp ? <LogoComp className="w-5 h-5" /> : <Sparkles className="w-4 h-4 text-zinc-400" />}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">{tool.name}</div>
                      <div className="font-mono text-[10px] text-zinc-400">{tool.category}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 6: CONTACT & INQUIRIES */}
        {activeTab === 'contact' && (
          <div className="space-y-8 max-w-4xl">
            <div className="p-8 rounded-2xl border border-zinc-800 bg-[#0B0D12] space-y-6">
              <div>
                <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-2">
                  DIRECT PROFESSIONAL INQUIRIES
                </span>
                <h2 className="text-2xl font-bold text-white">Let's discuss full-time brand, growth, or leadership roles.</h2>
                <p className="text-xs text-zinc-400 mt-2">
                  Based in Bangalore and open to on-site, hybrid, or remote opportunities. Prompt response within 24 hours.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-800/80">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors block"
                >
                  <div className="font-mono text-[10px] text-zinc-500 uppercase">Direct Email</div>
                  <div className="font-bold text-xs text-white truncate mt-1">{personalInfo.email}</div>
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors block"
                >
                  <div className="font-mono text-[10px] text-zinc-500 uppercase">LinkedIn</div>
                  <div className="font-bold text-xs text-white mt-1">/in/adhithyan2242 ↗</div>
                </a>

                <a
                  href={personalInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors block"
                >
                  <div className="font-mono text-[10px] text-zinc-500 uppercase">Instagram</div>
                  <div className="font-bold text-xs text-white mt-1">@adhi_mdk_7 ↗</div>
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={`mailto:${personalInfo.email}?subject=${encodeURIComponent('[Strategic Leadership Inquiry] Brand Strategy / Marketing Role')}`}
                  className="inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Initiate Conversation Directly</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* ========================================================
          EXECUTIVE FOOTER
          ======================================================== */}
      <footer className="border-t border-zinc-800/80 py-8 px-6 text-center text-xs font-mono text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            ADHITHYAN M. // EXECUTIVE MARKETING DOSSIER // NITK SURATHKAL '26
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={onToggleTheme}
              className="hover:text-white transition-colors underline"
            >
              Switch to Creative Multiverse View
            </button>
            <span>•</span>
            <button
              onClick={onOpenMythology}
              className="hover:text-white transition-colors underline"
            >
              Arabian Desert Codex
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
