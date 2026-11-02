import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, Layers, Cpu, Clock, UserCheck, Sparkles, Brain, Award, Play } from 'lucide-react';
import ProjectProofCard from './ProjectProofCard';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="bg-[#0E121B] border border-white/15 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] max-w-4xl w-full max-h-[90vh] overflow-y-auto relative text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#0E121B]/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-white/10 flex items-center justify-between z-10">
          <div className="flex items-center space-x-3">
            <span className="font-mono font-bold text-xs uppercase bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30 px-3 py-1 rounded-full">
              ★ {project.badge || `CASE STUDY // ${project.number}`}
            </span>
            <span className="font-mono text-xs text-zinc-400 hidden sm:inline">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/15 flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Close case study details"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 md:p-10 space-y-8">
          <div>
            <div className="inline-block bg-[#F59E0B]/10 text-[#F59E0B] font-mono font-bold text-xs uppercase px-3 py-1 rounded-md border border-[#F59E0B]/25 mb-3">
              // CAMPAIGN DOSSIER • {project.deliverable}
            </div>
            <h2 id="modal-project-title" className="font-serif font-black text-3xl sm:text-4xl text-white leading-tight">
              {project.title}
            </h2>
            <p className="mt-3 text-base text-zinc-300 font-normal leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-black/40 border border-white/10">
            <div>
              <span className="text-zinc-500 block uppercase text-[10px] font-mono font-bold">Role</span>
              <span className="font-sans font-medium text-sm text-zinc-200 mt-1 block">{project.role}</span>
            </div>
            <div>
              <span className="text-zinc-500 block uppercase text-[10px] font-mono font-bold">Timeline</span>
              <span className="font-sans font-medium text-sm text-zinc-200 mt-1 block">{project.timeline}</span>
            </div>
            <div>
              <span className="text-zinc-500 block uppercase text-[10px] font-mono font-bold">Deliverable</span>
              <span className="font-sans font-medium text-sm text-zinc-200 mt-1 block">{project.deliverable}</span>
            </div>
            <div>
              <span className="text-zinc-500 block uppercase text-[10px] font-mono font-bold">Category</span>
              <span className="font-sans font-medium text-sm text-[#F59E0B] mt-1 block truncate">{project.category}</span>
            </div>
          </div>

          {/* Proof-of-Work Telemetry Card */}
          <ProjectProofCard projectId={project.id} />

          {/* Deep Dive Breakdown */}
          <div className="space-y-5">
            <div className="bg-black/30 p-6 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-serif font-bold text-lg text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#FF0055] rounded-full inline-block"></span>
                The Creative &amp; Marketing Challenge
              </h3>
              <p className="font-sans text-sm text-zinc-300 leading-relaxed font-normal">
                {project.challenge}
              </p>
            </div>

            <div className="bg-black/30 p-6 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-serif font-bold text-lg text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#00F0FF] rounded-full inline-block"></span>
                Strategic Approach &amp; Execution
              </h3>
              <p className="font-sans text-sm text-zinc-300 leading-relaxed font-normal">
                {project.solution}
              </p>
            </div>

            <div className="bg-[#F59E0B]/5 p-6 rounded-2xl border border-[#F59E0B]/30 space-y-2">
              <h3 className="font-serif font-bold text-lg text-[#F59E0B] flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#F59E0B] rounded-full inline-block"></span>
                Commercial Impact &amp; Verification
              </h3>
              <p className="font-sans text-sm text-zinc-200 font-medium leading-relaxed">
                {project.impact}
              </p>
            </div>
          </div>

          {/* Key Findings Bullet Cards */}
          {project.keyFindings && (
            <div className="space-y-3">
              <h4 className="font-mono font-bold text-xs uppercase tracking-widest text-[#F59E0B]">
                ★ KEY FINDINGS &amp; STRATEGIC TAKEAWAYS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFindings.map((finding, idx) => (
                  <div key={idx} className="bg-black/40 p-4 rounded-xl border border-white/10 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span className="font-sans text-xs text-zinc-300 font-normal leading-relaxed">{finding}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Close Action */}
          <div className="pt-4 border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#F59E0B] text-black font-mono font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#d98206] transition-colors"
            >
              Close Dossier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
