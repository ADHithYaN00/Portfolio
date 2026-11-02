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
      className="py-24 bg-[#FAFCFF] border-b-3 border-[#0B0E14] relative overflow-hidden halftone-spider"
      aria-label="Selected Campaigns and Case Studies"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b-2.5 border-[#0B0E14]">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0B0E14] text-[#00F0FF] font-mono font-bold text-xs uppercase px-3 py-1 rounded-md border border-[#0B0E14] shadow-spider-sm mb-3">
              <span>// CHAPTER 03 • CREATIVE WORKS</span>
            </div>
            <h2 className="spider-glitch font-syne font-black text-4xl sm:text-5xl text-[#0B0E14] tracking-tight uppercase">
              SELECTED CAMPAIGNS & CASE STUDIES
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="font-mono font-bold text-xs uppercase bg-white text-[#0B0E14] px-3 py-1.5 rounded-lg border-2 border-[#0B0E14] shadow-spider-sm">
              NEUROMARKETING • VIRAL VIDEO • ₹36L+ SPONSORSHIPS
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <span className="text-xs font-mono font-bold text-zinc-500 mr-2 flex items-center gap-1.5 uppercase">
            <Filter className="w-3.5 h-3.5 text-[#FF0055]" />
            FILTER:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold uppercase transition-all border-2 ${
                selectedCategory === cat
                  ? 'bg-[#0B0E14] text-white border-[#0B0E14] shadow-spider-sm'
                  : 'bg-white text-zinc-700 border-zinc-200 hover:border-[#0B0E14]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => {
            const accents = [
              { border: 'hover:border-[#00F0FF]', tag: 'bg-[#00F0FF]/20 text-[#00F0FF] border-[#00F0FF]' },
              { border: 'hover:border-[#FF0055]', tag: 'bg-[#FF0055]/20 text-[#FF0055] border-[#FF0055]' },
              { border: 'hover:border-[#F59E0B]', tag: 'bg-[#F59E0B]/20 text-[#F59E0B] border-[#F59E0B]' },
              { border: 'hover:border-[#7928CA]', tag: 'bg-[#7928CA]/20 text-[#7928CA] border-[#7928CA]' },
            ];
            const acc = accents[idx % accents.length];

            return (
              <article 
                key={project.id}
                className={`spider-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-200 ${acc.border}`}
              >
                <div>
                  {/* Issue Number & Category */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-zinc-200 mb-5">
                    <span className={`text-[11px] font-mono font-bold uppercase px-2.5 py-0.5 rounded border ${acc.tag}`}>
                      {project.badge || `ISSUE #${project.number}`}
                    </span>
                    <span className="text-xs font-mono font-bold text-zinc-500">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-syne font-black text-2xl sm:text-3xl text-[#0B0E14] leading-snug mb-3 hover:text-[#FF0055] transition-colors">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="font-sans text-sm sm:text-base text-zinc-600 leading-relaxed font-medium mb-4">
                    {project.summary}
                  </p>

                  {/* Visual Proof-of-Work Infographic Card */}
                  <ProjectProofCard projectId={project.id} />

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-2.5 py-0.5 bg-zinc-100 text-zinc-800 text-xs font-mono font-bold border border-zinc-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-4 border-t border-zinc-200 flex items-center justify-between">
                  <span className="font-mono font-semibold text-xs text-zinc-500">
                    🎯 {project.deliverable}
                  </span>

                  <button
                    onClick={() => setActiveProject(project)}
                    className="spider-btn px-4 py-2 bg-[#0B0E14] text-white hover:bg-[#FF0055] font-display font-black text-xs uppercase tracking-wider rounded-xl inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read Dossier</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
                  </button>
                </div>
              </article>
            );
          })}
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
