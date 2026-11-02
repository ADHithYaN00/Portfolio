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
      className="py-24 bg-white border-b-3 border-[#0B0E14] relative halftone-spider"
      aria-label="Contact and Collaboration"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b-2.5 border-[#0B0E14]">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0B0E14] text-[#FF0055] font-mono font-bold text-xs uppercase px-3 py-1 rounded-md border border-[#0B0E14] shadow-spider-sm mb-3">
              <span>// CHAPTER 07 • TRANSMISSION DECK</span>
            </div>
            <h2 className="spider-glitch font-syne font-black text-4xl sm:text-5xl text-[#0B0E14] tracking-tight uppercase">
              INITIATE A CONVERSATION
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="font-mono font-bold text-xs uppercase bg-[#00F0FF]/20 text-[#0B0E14] px-3 py-1.5 rounded-lg border-2 border-[#0B0E14] shadow-spider-sm">
              BANGALORE, KARNATAKA • OPEN TO ROLES
            </span>
          </div>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Connect Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="spider-card p-7 rounded-3xl">
              <h3 className="font-syne font-black text-2xl text-[#0B0E14] leading-snug mb-3">
                LET'S ENGINEER MEASURABLE BRAND IMPACT.
              </h3>
              <p className="font-sans text-sm sm:text-base text-zinc-600 font-medium leading-relaxed">
                Whether you’re seeking a driven Marketing & Operations leader for full-time brand roles, creative consulting on AI-assisted video distribution, or corporate brand partnerships, I am accessible across these verified channels.
              </p>
            </div>

            {/* Quick Connect Cards */}
            <div className="space-y-4">
              
              {/* Email Card */}
              <div className="p-5 bg-white rounded-2xl border-2 border-[#0B0E14] shadow-spider-sm space-y-3">
                <div className="text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-between text-[#0B0E14]">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-[#FF0055]" />
                    DIRECT ELECTRONIC MAIL
                  </span>
                  <span className="bg-zinc-100 px-2 py-0.5 rounded text-[10px] font-bold">
                    PRIMARY
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm font-mono font-bold text-[#0B0E14] hover:text-[#FF0055] truncate select-all"
                  >
                    {personalInfo.email}
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="spider-btn px-3 py-1.5 bg-[#0B0E14] text-white font-mono font-bold text-xs rounded-lg flex items-center gap-1 hover:bg-[#FF0055] shrink-0"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="p-5 bg-white rounded-2xl border-2 border-[#0B0E14] shadow-spider-sm space-y-3">
                <div className="text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-between text-[#0B0E14]">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
                    </svg>
                    PROFESSIONAL NETWORK
                  </span>
                  <span className="bg-[#00F0FF]/20 text-[#00F0FF] px-2 py-0.5 rounded text-[10px] font-bold">
                    LINKEDIN
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#0B0E14] truncate">
                    linkedin.com/in/adhithyan2242
                  </span>

                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="spider-btn-cyan px-3.5 py-1.5 font-display font-black text-xs rounded-lg flex items-center gap-1 shrink-0"
                    aria-label="Open LinkedIn profile"
                  >
                    <span>Connect</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
                  </a>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="p-5 bg-white rounded-2xl border-2 border-[#0B0E14] shadow-spider-sm space-y-3">
                <div className="text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-between text-[#0B0E14]">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#E1306C]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    CREATIVE & VISUAL IDENTITY
                  </span>
                  <span className="bg-[#FF0055]/15 text-[#FF0055] px-2 py-0.5 rounded text-[10px] font-bold">
                    INSTAGRAM
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#0B0E14] truncate">
                    @adhi_mdk_7
                  </span>

                  <a
                    href={personalInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="spider-btn-pink px-3.5 py-1.5 font-display font-black text-xs rounded-lg flex items-center gap-1 shrink-0"
                    aria-label="Open Instagram profile"
                  >
                    <span>Follow</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Response Guarantee */}
            <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 text-xs font-mono font-bold text-zinc-700 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF0055] shrink-0" />
                <span>LOCATION: <strong className="text-[#0B0E14]">{personalInfo.location}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#00F0FF] shrink-0" />
                <span>RESPONSE: <strong className="text-[#0B0E14]">{contactDetails.responseTime}</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="spider-card rounded-3xl p-8 sm:p-10">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200 mb-6">
                <span className="font-mono font-bold text-xs uppercase tracking-wider text-[#0B0E14] flex items-center gap-2">
                  <Zap className="w-4 h-4 fill-[#00F0FF] text-[#00F0FF]" />
                  COLLABORATION DISPATCH FORM
                </span>
                <span className="bg-zinc-100 text-[#0B0E14] font-mono font-bold text-[10px] px-2 py-0.5 rounded uppercase">
                  DIRECT TRANSMIT
                </span>
              </div>

              {formSubmitted ? (
                <div className="py-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 bg-[#00F0FF]/20 text-[#00F0FF] border-2 border-[#0B0E14] rounded-full flex items-center justify-center mx-auto shadow-spider-sm">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h4 className="font-syne font-black text-3xl text-[#0B0E14]">
                    DISPATCH PREPARED!
                  </h4>
                  <p className="font-sans text-sm text-zinc-600 max-w-md mx-auto leading-relaxed font-medium">
                    Thank you, <strong className="text-[#0B0E14]">{formData.name || 'Friend'}</strong>. Your default email client was opened with your message ready to send to <span className="text-[#FF0055] font-mono font-bold">{personalInfo.email}</span>.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={getMailtoUrl()}
                      className="spider-btn-pink px-5 py-2.5 rounded-xl font-display font-black text-xs uppercase tracking-wider inline-flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Launch Mail Client</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={handleCopyDraft}
                      className="spider-btn px-4 py-2.5 bg-white text-[#0B0E14] font-mono font-bold text-xs uppercase tracking-wider rounded-xl border-2 border-[#0B0E14] shadow-spider-sm hover:bg-zinc-50 inline-flex items-center gap-1.5"
                    >
                      {copiedDraft ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedDraft ? 'Copied to Clipboard!' : 'Copy Form Draft'}</span>
                    </button>

                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', inquiryType: contactDetails.inquiryTypes[0], message: '' });
                      }}
                      className="px-4 py-2.5 bg-zinc-100 text-zinc-700 font-mono font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-zinc-200"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                        Your Name / Brand *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Brand Director / Hiring Lead"
                        className="w-full px-4 py-3 bg-zinc-50 border-2 border-zinc-200 rounded-xl text-sm font-sans font-medium text-[#0B0E14] placeholder:text-zinc-400 focus:outline-none focus:border-[#0B0E14] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="collaborate@brand.com"
                        className="w-full px-4 py-3 bg-zinc-50 border-2 border-zinc-200 rounded-xl text-sm font-sans font-medium text-[#0B0E14] placeholder:text-zinc-400 focus:outline-none focus:border-[#0B0E14] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                      Collaboration Focus
                    </label>
                    <select
                      id="inquiryType"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-50 border-2 border-zinc-200 rounded-xl text-sm font-mono font-bold text-[#0B0E14] focus:outline-none focus:border-[#0B0E14] focus:bg-white transition-all"
                    >
                      {contactDetails.inquiryTypes.map((type, idx) => (
                        <option key={idx} value={type} className="text-[#0B0E14] font-sans">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                      Message / Campaign Context *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about the role, prospective campaign, or sponsorship partnership..."
                      className="w-full px-4 py-3 bg-zinc-50 border-2 border-zinc-200 rounded-xl text-sm font-sans font-medium text-[#0B0E14] placeholder:text-zinc-400 focus:outline-none focus:border-[#0B0E14] focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="spider-btn-pink w-full py-4 rounded-xl font-display font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <span>Transmit Dispatch!</span>
                    <Send className="w-4 h-4 stroke-[3]" />
                  </button>

                  <p className="text-[11px] font-mono text-zinc-500 text-center uppercase tracking-wide">
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
