import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin, Clock, ArrowUpRight, ShieldCheck, Sparkles, Zap, ExternalLink } from 'lucide-react';
import { personalInfo, contactDetails } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: contactDetails.inquiryTypes[0],
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyDraft = () => {
    const draftText = `To: ${personalInfo.email}\nSubject: [Portfolio Inquiry] ${formData.inquiryType} from ${formData.name}\n\nName: ${formData.name}\nEmail: ${formData.email}\nInquiry Focus: ${formData.inquiryType}\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(draftText);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.inquiryType} from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hello Adhithyan,\n\nName: ${formData.name}\nEmail: ${formData.email}\nInquiry Focus: ${formData.inquiryType}\n\nMessage:\n${formData.message}\n\nSent via Portfolio Contact Form`
    );
    return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Automatically trigger email client
    window.location.href = getMailtoUrl();
  };

  return (
    <section 
      id="contact" 
      className="py-28 bg-[#07090E] border-b border-white/10 relative overflow-hidden"
      aria-label="Contact and Collaboration"
    >
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-[#00F0FF]/5 rounded-full blur-[160px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#F59E0B] font-bold mb-3">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] inline-block animate-pulse" />
              <span>CHAPTER 07 // TRANSMISSION DECK</span>
            </div>
            <h2 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Initiate a <span className="italic font-normal text-[#F59E0B]">Conversation</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <span className="font-mono font-medium text-xs uppercase bg-white/5 border border-white/15 text-zinc-300 px-4 py-2 rounded-full shadow-md backdrop-blur-md">
              BANGALORE, KARNATAKA • OPEN TO ROLES
            </span>
          </div>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Connect Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0E121B]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-7 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <h3 className="font-serif font-bold text-2xl text-white leading-snug mb-3">
                Let's Engineer Measurable Brand Impact.
              </h3>
              <p className="font-sans text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                Whether you’re seeking a driven Marketing &amp; Operations leader for full-time brand roles, creative consulting on AI-assisted video distribution, or corporate brand partnerships, I am accessible across these verified channels.
              </p>
            </div>

            {/* Quick Connect Cards */}
            <div className="space-y-4">
              
              {/* Email Card */}
              <div className="p-5 bg-[#0E121B]/70 border border-white/10 hover:border-[#F59E0B]/40 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.4)] space-y-3 transition-colors">
                <div className="text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-between text-zinc-300">
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#F59E0B]" />
                    DIRECT ELECTRONIC MAIL
                  </span>
                  <span className="bg-[#F59E0B]/15 text-[#F59E0B] px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-[#F59E0B]/30">
                    PRIMARY
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm font-mono font-medium text-white hover:text-[#F59E0B] truncate select-all transition-colors"
                  >
                    {personalInfo.email}
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 bg-white/10 text-white font-mono font-bold text-xs rounded-full border border-white/15 flex items-center gap-1.5 hover:bg-[#F59E0B] hover:text-black transition-all shrink-0"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 stroke-[2]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="p-5 bg-[#0E121B]/70 border border-white/10 hover:border-[#00F0FF]/40 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.4)] space-y-3 transition-colors">
                <div className="text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-between text-zinc-300">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#00F0FF]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
                    </svg>
                    PROFESSIONAL NETWORK
                  </span>
                  <span className="bg-[#00F0FF]/15 text-[#00F0FF] px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-[#00F0FF]/30">
                    LINKEDIN
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-xs sm:text-sm font-mono text-zinc-300 truncate">
                    linkedin.com/in/adhithyan2242
                  </span>

                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30 hover:bg-[#00F0FF] hover:text-black font-mono font-bold text-xs rounded-full flex items-center gap-1 shrink-0 transition-all"
                    aria-label="Open LinkedIn profile"
                  >
                    <span>Connect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="p-5 bg-[#0E121B]/70 border border-white/10 hover:border-[#FF0055]/40 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.4)] space-y-3 transition-colors">
                <div className="text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-between text-zinc-300">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#FF0055]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    CREATIVE &amp; VISUAL IDENTITY
                  </span>
                  <span className="bg-[#FF0055]/15 text-[#FF0055] px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-[#FF0055]/30">
                    INSTAGRAM
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-xs sm:text-sm font-mono text-zinc-300 truncate">
                    @adhi_mdk_7
                  </span>

                  <a
                    href={personalInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-[#FF0055]/10 text-[#FF0055] border border-[#FF0055]/30 hover:bg-[#FF0055] hover:text-white font-mono font-bold text-xs rounded-full flex items-center gap-1 shrink-0 transition-all"
                    aria-label="Open Instagram profile"
                  >
                    <span>Follow</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Response Guarantee */}
            <div className="p-4 bg-black/40 rounded-2xl border border-white/10 text-xs font-mono font-medium text-zinc-400 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>LOCATION: <strong className="text-zinc-200">{personalInfo.location}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#00F0FF] shrink-0" />
                <span>RESPONSE: <strong className="text-zinc-200">{contactDetails.responseTime}</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0E121B]/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="font-mono font-bold text-xs uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#F59E0B]" />
                  COLLABORATION DISPATCH FORM
                </span>
                <span className="bg-white/5 text-[#F59E0B] font-mono font-bold text-[10px] px-3 py-1 rounded-full border border-white/10 uppercase">
                  DIRECT TRANSMIT
                </span>
              </div>

              {formSubmitted ? (
                <div className="py-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/40 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h4 className="font-serif font-black text-3xl text-white">
                    Dispatch Prepared!
                  </h4>
                  <p className="font-sans text-sm text-zinc-300 max-w-md mx-auto leading-relaxed font-normal">
                    Thank you, <strong className="text-white">{formData.name || 'Friend'}</strong>. Your default email client was opened with your message ready to send to <span className="text-[#F59E0B] font-mono font-bold">{personalInfo.email}</span>.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={getMailtoUrl()}
                      className="px-6 py-2.5 rounded-full bg-[#F59E0B] text-black font-mono font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:bg-[#d98206] transition-all"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Launch Mail Client</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={handleCopyDraft}
                      className="px-5 py-2.5 bg-white/10 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-full border border-white/15 hover:bg-white/20 inline-flex items-center gap-2 transition-all"
                    >
                      {copiedDraft ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedDraft ? 'Copied to Clipboard!' : 'Copy Form Draft'}</span>
                    </button>

                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', inquiryType: contactDetails.inquiryTypes[0], message: '' });
                      }}
                      className="px-5 py-2.5 bg-white/5 text-zinc-400 font-mono font-medium text-xs uppercase tracking-wider rounded-full hover:bg-white/10 hover:text-white transition-all"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono font-medium uppercase tracking-wider text-zinc-400 mb-2">
                        Your Name / Brand *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Brand Director / Hiring Lead"
                        className="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl text-sm font-sans font-normal text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-medium uppercase tracking-wider text-zinc-400 mb-2">
                        Your Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="collaborate@brand.com"
                        className="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl text-sm font-sans font-normal text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-xs font-mono font-medium uppercase tracking-wider text-zinc-400 mb-2">
                      Collaboration Focus
                    </label>
                    <select
                      id="inquiryType"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl text-sm font-mono font-medium text-white focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-all"
                    >
                      {contactDetails.inquiryTypes.map((type, idx) => (
                        <option key={idx} value={type} className="bg-[#0E121B] text-white font-sans">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono font-medium uppercase tracking-wider text-zinc-400 mb-2">
                      Message / Campaign Context *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about the role, prospective campaign, or sponsorship partnership..."
                      className="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl text-sm font-sans font-normal text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#F59E0B] hover:bg-[#d98206] text-black font-mono font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(245,158,11,0.35)] transition-all duration-200"
                  >
                    <span>Transmit Dispatch!</span>
                    <Send className="w-4 h-4 stroke-[2.5]" />
                  </button>

                  <p className="text-[11px] font-mono text-zinc-500 text-center uppercase tracking-wider">
                    🔒 Every transmission is handled with strict professional confidentiality.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
