import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, Layers, Sparkles, Filter, Zap } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import ProjectProofCard from './ProjectProofCard';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const categories = [
    'All',
    'Neuromarketing & Consumer Psychology',
    'Brand Campaign & Audience Growth',
    'Marketplace Concept & Brand Identity',
    'Experiential Marketing & Sponsorships'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section 
      id="projects" 
      className="py-28 bg-[#07090E] border-b border-white/10 relative overflow-hidden"
      aria-label="Selected Campaigns and Case Studies"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-[#00F0FF]/5 rounded-full blur-[170px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#F59E0B] font-bold mb-3">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] inline-block animate-pulse" />
              <span>CHAPTER 03 // CREATIVE WORKS</span>
            </div>
            <h2 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Selected Works &amp; <span className="italic font-normal text-[#F59E0B]">Case Studies</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <span className="font-mono font-medium text-xs uppercase bg-white/5 border border-white/15 text-zinc-300 px-4 py-2 rounded-full shadow-md backdrop-blur-md">
              NEUROMARKETING • VIRAL VIDEO • ₹36L+ SPONSORSHIPS
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <span className="text-xs font-mono font-bold text-[#F59E0B] mr-2 flex items-center gap-1.5 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5" />
            FILTER:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium uppercase transition-all duration-200 border ${
                selectedCategory === cat
                  ? 'bg-[#F59E0B] text-black border-[#F59E0B] font-bold shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                  : 'bg-white/5 text-zinc-300 border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <article 
              key={project.id}
              className="bg-[#0E121B]/80 backdrop-blur-xl border border-white/10 hover:border-[#F59E0B]/40 rounded-3xl p-7 sm:p-9 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div>
                {/* Issue Number & Category */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10 mb-6">
                  <span className="text-[11px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30 tracking-wider">
                    {project.badge || `ISSUE #${project.number}`}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white leading-snug mb-3 group-hover:text-[#F59E0B] transition-colors">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed font-normal mb-5">
                  {project.summary}
                </p>

                {/* Visual Proof-of-Work Infographic Card */}
                <div className="mb-6">
                  <ProjectProofCard projectId={project.id} />
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-3 py-1 bg-white/5 text-zinc-300 text-xs font-mono border border-white/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-400">
                  🎯 {project.deliverable}
                </span>

                <button
                  onClick={() => setActiveProject(project)}
                  className="px-4 py-2 bg-white/10 hover:bg-[#F59E0B] hover:text-black text-white font-mono font-bold text-xs uppercase tracking-wider rounded-full border border-white/15 inline-flex items-center gap-1.5 transition-all duration-200 shadow-sm"
                >
                  <span>Read Dossier</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Deep Dive */}
        {activeProject && (
          <ProjectModal 
            project={activeProject} 
            onClose={() => setActiveProject(null)} 
          />
        )}
      </div>
    </section>
  );
}
