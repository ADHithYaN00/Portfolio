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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#0B0E14]/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="bg-white border-3 border-[#0B0E14] rounded-3xl shadow-spider-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative text-[#0B0E14]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#0B0E14] text-white px-6 sm:px-8 py-4 border-b-2 border-zinc-800 flex items-center justify-between z-10">
          <div className="flex items-center space-x-3">
            <span className="font-mono font-bold text-xs uppercase bg-[#FF0055] text-white px-2.5 py-0.5 rounded">
              ★ {project.badge || `CASE STUDY // ${project.number}`}
            </span>
            <span className="font-mono text-xs uppercase text-zinc-400 hidden sm:inline">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 bg-zinc-800 text-white rounded-lg hover:bg-[#FF0055] transition-colors focus:outline-none"
            aria-label="Close case study details"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 md:p-10 space-y-8 halftone-spider">
          <div>
            <div className="inline-block bg-zinc-100 text-[#0B0E14] font-mono font-bold text-xs uppercase px-2.5 py-1 rounded border border-zinc-300 mb-3">
              // CAMPAIGN DOSSIER • {project.deliverable}
            </div>
            <h2 id="modal-project-title" className="font-syne font-black text-3xl sm:text-4xl text-[#0B0E14] leading-tight">
              {project.title}
            </h2>
            <p className="mt-3 text-base text-zinc-700 font-medium leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-zinc-50 border-2 border-zinc-200">
            <div>
              <span className="text-zinc-500 block uppercase text-[10px] font-mono font-bold">Role</span>
              <span className="font-sans font-bold text-sm text-[#0B0E14] mt-1 block">{project.role}</span>
            </div>
            <div>
              <span className="text-zinc-500 block uppercase text-[10px] font-mono font-bold">Timeline</span>
              <span className="font-sans font-bold text-sm text-[#0B0E14] mt-1 block">{project.timeline}</span>
            </div>
            <div>
              <span className="text-zinc-500 block uppercase text-[10px] font-mono font-bold">Deliverable</span>
              <span className="font-sans font-bold text-sm text-[#0B0E14] mt-1 block">{project.deliverable}</span>
            </div>
            <div>
              <span className="text-zinc-500 block uppercase text-[10px] font-mono font-bold">Category</span>
              <span className="font-sans font-bold text-sm text-[#FF0055] mt-1 block truncate">{project.category}</span>
            </div>
          </div>

          {/* Proof-of-Work Telemetry Card */}
          <ProjectProofCard projectId={project.id} />

          {/* Deep Dive Breakdown */}
          <div className="space-y-5">
            <div className="bg-white p-6 rounded-2xl border-2 border-zinc-200 space-y-2">
              <h3 className="font-syne font-bold text-lg text-[#0B0E14] flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#FF0055] rounded-full inline-block"></span>
                The Creative & Marketing Challenge
              </h3>
              <p className="font-sans text-sm text-zinc-700 leading-relaxed font-medium">
                {project.challenge}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-zinc-200 space-y-2">
              <h3 className="font-syne font-bold text-lg text-[#0B0E14] flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#00F0FF] rounded-full inline-block"></span>
                Strategic Approach & Execution
              </h3>
              <p className="font-sans text-sm text-zinc-700 leading-relaxed font-medium">
                {project.solution}
              </p>
            </div>

            <div className="bg-[#FAFCFF] p-6 rounded-2xl border-2 border-[#0B0E14] space-y-2">
              <h3 className="font-syne font-bold text-lg text-[#0B0E14] flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#F59E0B] rounded-full inline-block"></span>
                Commercial Impact & Verification
              </h3>
              <p className="font-sans text-sm text-zinc-900 font-bold leading-relaxed">
                {project.impact}
              </p>
            </div>
          </div>

          {/* Key Findings Bullet Cards */}
          {project.keyFindings && (
            <div className="space-y-3">
              <h4 className="font-mono font-bold text-xs uppercase tracking-widest text-zinc-600">
                ★ KEY FINDINGS & STRATEGIC TAKEAWAYS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFindings.map((finding, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-zinc-300 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF0055] shrink-0 mt-0.5" />
                    <span className="font-sans text-xs text-zinc-800 font-medium leading-relaxed">{finding}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Close Action */}
          <div className="pt-4 border-t border-zinc-200 flex justify-end">
            <button
              onClick={onClose}
              className="spider-btn px-6 py-2.5 bg-[#0B0E14] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-zinc-800"
            >
              Close Dossier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
