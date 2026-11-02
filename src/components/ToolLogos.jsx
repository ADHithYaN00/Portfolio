import React from 'react';

export function FigmaLogo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 38 57" className={className} fill="none">
      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/>
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/>
      <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/>
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/>
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/>
    </svg>
  );
}

export function CanvaLogo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <defs>
        <linearGradient id="canva-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C4CC" />
          <stop offset="100%" stopColor="#7D2AE8" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="22" fill="url(#canva-grad)" />
      <path 
        d="M29 32.5c-4.2 0-7.8-3.2-7.8-8.5 0-5.4 3.9-8.5 8.2-8.5 2.8 0 5 1.4 6 3.4l-2.6 1.4c-.6-1.2-1.9-2-3.4-2-2.5 0-4.6 2-4.6 5.6 0 3.5 2 5.6 4.6 5.6 1.6 0 3-.8 3.7-2l2.6 1.3c-1.1 2.2-3.4 3.7-6.7 3.7z" 
        fill="#FFFFFF" 
      />
    </svg>
  );
}

export function CapCutLogo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <rect width="48" height="48" rx="10" fill="#0E1015" />
      <path d="M13 14H35L24 23L13 14Z" fill="#FFFFFF" />
      <path d="M13 34H35L24 25L13 34Z" fill="#FFFFFF" />
      <path d="M11 16L22 24L11 32V16Z" fill="#00F0FF" />
      <path d="M37 16L26 24L37 32V16Z" fill="#00F0FF" />
    </svg>
  );
}

export function ChatGPTLogo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#10A37F">
      <path d="M22.28 9.77a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 4.1a5.98 5.98 0 0 0-3.95 4.3 6.05 6.05 0 0 0 .74 7.12 5.98 5.98 0 0 0 .52 4.91 6.05 6.05 0 0 0 6.51 2.9A6.06 6.06 0 0 0 19.02 19.9a5.98 5.98 0 0 0 3.95-4.3 6.05 6.05 0 0 0-.69-5.83zm-8.8 11.23a4.5 4.5 0 0 1-2.87-1.04l.14-.08 4.78-2.76a.78.78 0 0 0 .39-.68v-6.74l2.03 1.17a.07.07 0 0 1 .04.06v5.58a4.52 4.52 0 0 1-4.51 4.5zm-8.68-4.2a4.5 4.5 0 0 1-.55-3.01l.14.09 4.78 2.76a.78.78 0 0 0 .78 0l5.84-3.37v2.35a.08.08 0 0 1-.03.07l-4.83 2.79a4.52 4.52 0 0 1-6.13-1.68zm-1.4-8.84a4.5 4.5 0 0 1 2.32-1.98v5.69a.78.78 0 0 0 .39.68l5.84 3.37-2.03 1.17a.08.08 0 0 1-.08 0l-4.83-2.79a4.52 4.52 0 0 1-1.61-6.14zm14.13 4.22l-5.84-3.37 2.03-1.17a.08.08 0 0 1 .08 0l4.83 2.79a4.51 4.51 0 0 1-.68 8.16v-5.73a.78.78 0 0 0-.42-.68zm2.01-3.15l-.14-.09-4.78-2.76a.78.78 0 0 0-.78 0l-5.84 3.37V7.18a.08.08 0 0 1 .03-.07l4.83-2.79a4.51 4.51 0 0 1 6.68 4.7zm-9.06 4.38l-2.61-1.5 2.61-1.5 2.61 1.5-2.61 1.5z"/>
    </svg>
  );
}

export function GeminiLogo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <defs>
        <linearGradient id="gemini-star-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1B73E8"/>
          <stop offset="45%" stopColor="#8AB4F8"/>
          <stop offset="100%" stopColor="#FF7769"/>
        </linearGradient>
      </defs>
      <path 
        d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" 
        fill="url(#gemini-star-grad)"
      />
    </svg>
  );
}

export function ClaudeLogo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#D97706">
      <path d="M13.4 2h-2.8l-.6 6.3-5.2-3.7-1.4 1.9 4.7 4.3-6.3.7v2.4l6.3.7-4.7 4.3 1.4 1.9 5.2-3.7.6 6.3h2.8l.6-6.3 5.2 3.7 1.4-1.9-4.7-4.3 6.3-.7v-2.4l-6.3-.7 4.7-4.3-1.4-1.9-5.2 3.7-.6-6.3z"/>
    </svg>
  );
}

export function PerplexityLogo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#20B2AA">
      <path d="M12 2L4 6.6v10.8L12 22l8-4.6V6.6L12 2zm0 2.3l5.8 3.3L12 11 6.2 7.6 12 4.3zM5.8 8.7L11 11.7v6.7L5.8 15.1V8.7zm7.4 8.4V11.7l5.2-3v6.4l-5.2 3z"/>
    </svg>
  );
}

export function GoogleSheetsLogo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path fill="#0F9D58" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
      <path fill="#87CEAB" d="M14 2v6h6"/>
      <rect x="7" y="11" width="10" height="8" rx="0.5" fill="#FFFFFF"/>
      <rect x="7.5" y="11.5" width="4.2" height="3" fill="#0F9D58"/>
      <rect x="12.3" y="11.5" width="4.2" height="3" fill="#0F9D58"/>
      <rect x="7.5" y="15.2" width="4.2" height="3.2" fill="#0F9D58"/>
      <rect x="12.3" y="15.2" width="4.2" height="3.2" fill="#0F9D58"/>
    </svg>
  );
}

export function NotionLogo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l11.474-.746c.746-.047.886-.466.886-.933 0-.607-.56-.887-1.306-.84l-11.754.747c-.84.047-1.446.467-1.728 1.306zm.7 2.893v12.27c0 .886.467 1.353 1.4 1.306l12.5-1.026c.747-.047 1.027-.56 1.027-1.353V6.307c0-.746-.467-1.12-1.307-1.073l-12.453 1.026c-.746.047-1.167.42-1.167 1.04zm4.293 2.053l4.667 6.44V9.62c0-.56.28-1.026 1.026-1.026.654 0 .934.466.934 1.026v7.466c0 .56-.467 1.027-1.027 1.027-.56 0-.84-.28-1.12-.654l-4.76-6.626v6.253c0 .56-.374 1.027-1.027 1.027-.654 0-.934-.467-.934-1.027v-7.466c0-.56.467-1.027 1.027-1.027.653 0 .933.28 1.214.654z"/>
    </svg>
  );
}

export function GoogleAdsLogo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path fill="#FBBC04" d="M3.7 15.3l5.5-9.6c.7-1.2 2.3-1.6 3.5-.9l.8.5c1.2.7 1.6 2.3.9 3.5l-5.5 9.6c-.7 1.2-2.3 1.6-3.5.9l-.8-.5c-1.2-.7-1.6-2.3-.9-3.5z"/>
      <path fill="#4285F4" d="M14.6 4.8l5.5 9.6c.7 1.2.3 2.8-.9 3.5l-.8.5c-1.2.7-2.8.3-3.5-.9L9.4 7.9c-.7-1.2-.3-2.8.9-3.5l.8-.5c1.2-.7 2.8-.3 3.5.9z"/>
      <circle fill="#34A853" cx="5.5" cy="18.5" r="2.5"/>
    </svg>
  );
}

export function GoogleSearchConsoleLogo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <circle cx="10" cy="10" r="6" stroke="#4285F4" strokeWidth="2.5" fill="none"/>
      <line x1="14.5" y1="14.5" x2="20" y2="20" stroke="#EA4335" strokeWidth="3" strokeLinecap="round"/>
      <path d="M7.5 12l2-3 2 1.5 2.5-3.5" stroke="#34A853" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="9.5" cy="9" r="0.9" fill="#FBBC04"/>
      <circle cx="11.5" cy="10.5" r="0.9" fill="#FBBC04"/>
      <circle cx="14" cy="7" r="0.9" fill="#FBBC04"/>
    </svg>
  );
}

export function MicrosoftTeamsLogo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <path d="M31 16.5C31 14.567 32.567 13 34.5 13C36.433 13 38 14.567 38 16.5C38 18.433 36.433 20 34.5 20C32.567 20 31 18.433 31 16.5Z" fill="#505AC9"/>
      <path d="M29 22.5C29 21.6716 29.6716 21 30.5 21H38.5C40.9853 21 43 23.0147 43 25.5V28C43 28.5523 42.5523 29 42 29H36V34C36 35.1046 35.1046 36 34 36H29V22.5Z" fill="#505AC9"/>
      <path d="M19 12C19 9.23858 21.2386 7 24 7C26.7614 7 29 9.23858 29 12C29 14.7614 26.7614 17 24 17C21.2386 17 19 14.7614 19 12Z" fill="#7B83EB"/>
      <path d="M16 19C16 17.8954 16.8954 17 18 17H30C31.1046 17 32 17.8954 32 19V34C32 35.6569 30.6569 37 29 37H19C17.3431 37 16 35.6569 16 34V19Z" fill="#7B83EB"/>
      <rect x="5" y="15" width="20" height="20" rx="4" fill="#464EB8"/>
      <path d="M17.8 21.5H12.2V23.5H14.1V30H15.9V23.5H17.8V21.5Z" fill="#FFFFFF"/>
    </svg>
  );
}

// Logo Registry with Theme-Aware Accents
export const TOOLKIT_LOGOS = {
  "Figma": {
    component: FigmaLogo,
    accent: "#F24E1E",
    bg: "rgba(242, 78, 30, 0.08)",
    border: "hover:border-[#F24E1E] hover:shadow-[3px_3px_0px_#F24E1E]"
  },
  "Canva": {
    component: CanvaLogo,
    accent: "#00C4CC",
    bg: "rgba(0, 196, 204, 0.08)",
    border: "hover:border-[#00C4CC] hover:shadow-[3px_3px_0px_#00C4CC]"
  },
  "CapCut": {
    component: CapCutLogo,
    accent: "#00F0FF",
    bg: "rgba(0, 240, 255, 0.08)",
    border: "hover:border-[#00F0FF] hover:shadow-[3px_3px_0px_#00F0FF]"
  },
  "ChatGPT": {
    component: ChatGPTLogo,
    accent: "#10A37F",
    bg: "rgba(16, 163, 127, 0.08)",
    border: "hover:border-[#10A37F] hover:shadow-[3px_3px_0px_#10A37F]"
  },
  "Gemini": {
    component: GeminiLogo,
    accent: "#1B73E8",
    bg: "rgba(27, 115, 232, 0.08)",
    border: "hover:border-[#1B73E8] hover:shadow-[3px_3px_0px_#1B73E8]"
  },
  "Claude": {
    component: ClaudeLogo,
    accent: "#D97706",
    bg: "rgba(217, 119, 6, 0.08)",
    border: "hover:border-[#D97706] hover:shadow-[3px_3px_0px_#D97706]"
  },
  "Perplexity": {
    component: PerplexityLogo,
    accent: "#20B2AA",
    bg: "rgba(32, 178, 170, 0.08)",
    border: "hover:border-[#20B2AA] hover:shadow-[3px_3px_0px_#20B2AA]"
  },
  "Google Sheets": {
    component: GoogleSheetsLogo,
    accent: "#0F9D58",
    bg: "rgba(15, 157, 88, 0.08)",
    border: "hover:border-[#0F9D58] hover:shadow-[3px_3px_0px_#0F9D58]"
  },
  "Notion": {
    component: NotionLogo,
    accent: "#0B0E14",
    bg: "rgba(11, 14, 20, 0.08)",
    border: "hover:border-[#0B0E14] hover:shadow-[3px_3px_0px_#0B0E14]"
  },
  "Microsoft Teams": {
    component: MicrosoftTeamsLogo,
    accent: "#505AC9",
    bg: "rgba(80, 90, 201, 0.08)",
    border: "hover:border-[#505AC9] hover:shadow-[3px_3px_0px_#505AC9]"
  },
  "Google Ads": {
    component: GoogleAdsLogo,
    accent: "#4285F4",
    bg: "rgba(66, 133, 244, 0.08)",
    border: "hover:border-[#4285F4] hover:shadow-[3px_3px_0px_#4285F4]"
  },
  "Google Search Console": {
    component: GoogleSearchConsoleLogo,
    accent: "#34A853",
    bg: "rgba(52, 168, 83, 0.08)",
    border: "hover:border-[#34A853] hover:shadow-[3px_3px_0px_#34A853]"
  }
};
