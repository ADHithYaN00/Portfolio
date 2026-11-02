import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Volume2, VolumeX, Sparkles, Music } from 'lucide-react';

// Pitch-perfect frequencies (Hz) for soothing ambient chord progressions
const CHORD_PROGRESSIONS = [
  // Chord 1: Dmaj9 (Warm, celestial opening)
  [146.83, 220.00, 277.18, 329.63, 369.99],
  // Chord 2: Bm9 (Reflective, deep resonance)
  [123.47, 185.00, 220.00, 277.18, 293.66],
  // Chord 3: Gmaj9 (Airy, expansive wonder)
  [98.00, 146.83, 185.00, 246.94, 293.66],
  // Chord 4: Asus4/add9 (Atmospheric, meditative resolution)
  [110.00, 164.81, 220.00, 246.94, 329.63]
];

// Stardust pentatonic bells (Hz)
const CHIME_FREQUENCIES = [587.33, 739.99, 880.00, 1108.73, 1318.51];

class AmbientAudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.filter = null;
    this.delay = null;
    this.delayFeedback = null;
    this.isPlaying = false;
    this.chordTimeout = null;
    this.chimeTimeout = null;
    this.currentChordIndex = 0;
    this.activeVoices = [];
  }

  init() {
    if (this.ctx) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    this.ctx = new AudioContextClass();

    // Master volume (deliberately subtle and unobtrusive)
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);

    // Warm Lowpass Filter (analog warmth, removes harsh highs)
    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.setValueAtTime(450, this.ctx.currentTime);
    this.filter.Q.setValueAtTime(1.1, this.ctx.currentTime);

    // Subtle stereo delay for expansive celestial atmosphere
    this.delay = this.ctx.createDelay();
    this.delay.delayTime.setValueAtTime(0.42, this.ctx.currentTime);

    this.delayFeedback = this.ctx.createGain();
    this.delayFeedback.gain.setValueAtTime(0.28, this.ctx.currentTime);

    this.delay.connect(this.delayFeedback);
    this.delayFeedback.connect(this.delay);

    // Audio graph routing
    this.filter.connect(this.masterGain);
    this.filter.connect(this.delay);
    this.delay.connect(this.masterGain);
    this.masterGain.connect(this.ctx.destination);
  }

  start() {
    this.init();
    if (!this.ctx) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isPlaying = true;

    // Smooth 1.8s fade-in to subtle master volume
    const now = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(0.001, now);
    this.masterGain.gain.linearRampToValueAtTime(0.18, now + 1.8);

    this.playChordSequence();
    this.scheduleNextChime();
  }

  playChordSequence() {
    if (!this.isPlaying || !this.ctx) return;

    const chord = CHORD_PROGRESSIONS[this.currentChordIndex];
    this.currentChordIndex = (this.currentChordIndex + 1) % CHORD_PROGRESSIONS.length;

    const chordDuration = 8.5; // seconds per chord
    const now = this.ctx.currentTime;

    // Play each note in the chord with subtle micro-detuning
    chord.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();

      // Blend sine (pure) and triangle (warm harmonics)
      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      // ±3 cents detune for lush analog chorusing
      osc.detune.setValueAtTime((idx - 2) * 2.5, now);

      // Volume envelope: soft fade-in, sustain, gentle fade-out
      const baseNoteVolume = 0.045 / (1 + idx * 0.15);
      oscGain.gain.setValueAtTime(0.0001, now);
      oscGain.gain.linearRampToValueAtTime(baseNoteVolume, now + 2.2);
      oscGain.gain.setValueAtTime(baseNoteVolume, now + chordDuration - 2.0);
      oscGain.gain.linearRampToValueAtTime(0.0001, now + chordDuration);

      osc.connect(oscGain);
      oscGain.connect(this.filter);

      osc.start(now);
      osc.stop(now + chordDuration + 0.5);

      this.activeVoices.push({ osc, gain: oscGain });
    });

    // Clean up expired voice references
    this.activeVoices = this.activeVoices.filter(v => {
      try {
        return v.osc.playbackState !== 3; // FINISHED_STATE
      } catch (e) {
        return true;
      }
    });

    // Next chord begins with smooth 1.8s overlap
    this.chordTimeout = setTimeout(() => {
      if (this.isPlaying) {
        this.playChordSequence();
      }
    }, (chordDuration - 1.8) * 1000);
  }

  scheduleNextChime() {
    if (!this.isPlaying || !this.ctx) return;

    // Random interval between 4.5 and 8.5 seconds
    const interval = (4.5 + Math.random() * 4.0) * 1000;

    this.chimeTimeout = setTimeout(() => {
      if (!this.isPlaying || !this.ctx) return;
      this.playStardustChime();
      this.scheduleNextChime();
    }, interval);
  }

  playStardustChime() {
    if (!this.ctx || !this.isPlaying) return;

    const now = this.ctx.currentTime;
    const freq = CHIME_FREQUENCIES[Math.floor(Math.random() * CHIME_FREQUENCIES.length)];

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    // Bell-like strike envelope
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.035, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

    osc.connect(gain);
    gain.connect(this.filter);

    osc.start(now);
    osc.stop(now + 3.5);
  }

  stop() {
    if (!this.ctx || !this.masterGain) return;
    this.isPlaying = false;
    clearTimeout(this.chordTimeout);
    clearTimeout(this.chimeTimeout);

    // Gentle 0.9s fade out
    const now = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.9);

    setTimeout(() => {
      this.activeVoices.forEach(v => {
        try {
          v.osc.stop();
          v.osc.disconnect();
        } catch (e) {}
      });
      this.activeVoices = [];
    }, 950);
  }
}

// Global engine instance so it persists cleanly across navigation
let globalAudioEngine = null;

export function getAudioEngine() {
  if (!globalAudioEngine && typeof window !== 'undefined') {
    globalAudioEngine = new AmbientAudioEngine();
  }
  return globalAudioEngine;
}

export default function AmbientAudio({ isMuted, onToggleMute, theme = 'light' }) {
  const [isPlaying, setIsPlaying] = useState(!isMuted);
  const isDark = theme === 'dark';

  useEffect(() => {
    const engine = getAudioEngine();
    if (!engine) return;

    if (!isMuted) {
      engine.start();
      setIsPlaying(true);
    } else {
      engine.stop();
      setIsPlaying(false);
    }
  }, [isMuted]);

  // Handle first user interaction autoplay unlock (browser policy)
  useEffect(() => {
    const handleFirstInteraction = () => {
      const engine = getAudioEngine();
      if (engine && !isMuted && !engine.isPlaying) {
        engine.start();
        setIsPlaying(true);
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('keydown', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [isMuted]);

  return (
    <div 
      className="fixed bottom-5 left-5 z-40 select-none animate-fadeIn pointer-events-auto"
      aria-label="Subtle background ambient sound control"
    >
      <button
        onClick={onToggleMute}
        className={`group flex items-center gap-2.5 px-3.5 py-2 rounded-2xl border transition-all duration-300 backdrop-blur-md shadow-lg ${
          isDark
            ? isMuted
              ? 'bg-[#0E1117]/90 text-zinc-400 border-white/10 hover:border-white/30 hover:text-white'
              : 'bg-[#121622]/95 text-white border-white/20 hover:border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.1)]'
            : isMuted
              ? 'bg-white/95 text-zinc-600 border-[#0B0E14] shadow-spider-sm hover:text-[#0B0E14] hover:bg-zinc-50'
              : 'bg-white/95 text-[#0B0E14] border-2 border-[#0B0E14] shadow-spider hover:scale-105'
        }`}
        title={isMuted ? "Click to play subtle background music" : "Click to mute background music"}
        aria-pressed={!isMuted}
      >
        {/* Animated Volume / Equalizer Icon */}
        <div className="relative flex items-center justify-center">
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-zinc-400 group-hover:text-current transition-colors" />
          ) : (
            <div className="flex items-center gap-1">
              <Volume2 className={`w-4 h-4 ${isDark ? 'text-white' : 'text-[#FF0055]'}`} />
              {/* 3 Animated Equalizer Bars */}
              <div className="flex items-end gap-0.5 h-3.5 w-3 ml-0.5">
                <span className={`w-0.5 rounded-full animate-sound-bar-1 ${isDark ? 'bg-white' : 'bg-[#00F0FF]'}`} />
                <span className={`w-0.5 rounded-full animate-sound-bar-2 ${isDark ? 'bg-zinc-300' : 'bg-[#FF0055]'}`} />
                <span className={`w-0.5 rounded-full animate-sound-bar-3 ${isDark ? 'bg-zinc-400' : 'bg-[#F59E0B]'}`} />
              </div>
            </div>
          )}
        </div>

        {/* Status Text & Hint */}
        <div className="flex flex-col text-left">
          <span className="font-mono font-bold text-[10px] tracking-wider uppercase leading-none">
            {isMuted ? 'Ambient: Muted' : 'Ambient: Playing'}
          </span>
          <span className="font-sans text-[9px] text-zinc-400 group-hover:text-zinc-300 transition-colors leading-tight mt-0.5">
            {isMuted ? 'Click to un-mute 🎵' : 'Gentle celestial audio'}
          </span>
        </div>
      </button>
    </div>
  );
}
