import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles, Music } from 'lucide-react';

// Melodic cinematic chord progressions (Frequencies in Hz)
// Warm, emotional, uplifting progression in D / Bm / G / A
const CHORD_PROGRESSIONS = [
  // Chord 1: Dmaj9 (Warm, inspiring opening)
  [146.83, 220.00, 277.18, 329.63, 369.99, 440.00],
  // Chord 2: Bm9 (Deep, contemplative resonance)
  [123.47, 185.00, 220.00, 277.18, 293.66, 369.99],
  // Chord 3: Gmaj9 (Expansive, airy wonder)
  [98.00, 146.83, 196.00, 246.94, 293.66, 392.00],
  // Chord 4: A add9 (Triumphant, harmonic resolution)
  [110.00, 164.81, 220.00, 277.18, 329.63, 440.00]
];

// Pentatonic stardust bells (Crystal clear chimes)
const CHIME_FREQUENCIES = [587.33, 739.99, 880.00, 1108.73, 1318.51, 1479.98];

class AmbientAudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.filter = null;
    this.delay = null;
    this.delayGain = null;
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

    // Master volume: comfortable, audible, soothing level (0.35)
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);

    // Warm Lowpass Filter (Set to 2400Hz so rich harmonics & melodies are clearly audible on all speakers)
    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.setValueAtTime(2400, this.ctx.currentTime);
    this.filter.Q.setValueAtTime(1.2, this.ctx.currentTime);

    // Stereo space delay (reverb-like atmospheric shimmer)
    this.delay = this.ctx.createDelay();
    this.delay.delayTime.setValueAtTime(0.38, this.ctx.currentTime);

    this.delayGain = this.ctx.createGain();
    this.delayGain.gain.setValueAtTime(0.32, this.ctx.currentTime);

    this.delay.connect(this.delayGain);
    this.delayGain.connect(this.delay);

    // Routing
    this.filter.connect(this.masterGain);
    this.filter.connect(this.delay);
    this.delay.connect(this.masterGain);
    this.masterGain.connect(this.ctx.destination);
  }

  async resumeContext() {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      try {
        await this.ctx.resume();
      } catch (err) {
        console.warn('AudioContext resume awaiting user gesture:', err);
      }
    }
  }

  async start() {
    this.init();
    if (!this.ctx) return;

    await this.resumeContext();

    this.isPlaying = true;

    // Smooth fade-in to audible master volume (0.32)
    const now = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value || 0.001, now);
    this.masterGain.gain.linearRampToValueAtTime(0.32, now + 1.2);

    this.playChordSequence();
    this.scheduleNextChime();
  }

  playChordSequence() {
    if (!this.isPlaying || !this.ctx) return;

    const chord = CHORD_PROGRESSIONS[this.currentChordIndex];
    this.currentChordIndex = (this.currentChordIndex + 1) % CHORD_PROGRESSIONS.length;

    const chordDuration = 7.5; // seconds per chord
    const now = this.ctx.currentTime;

    // Play each note in chord with dual-oscillator warmth
    chord.forEach((freq, idx) => {
      // Primary Oscillator: Warm triangle wave
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = idx === 0 ? 'sine' : 'triangle';
      osc1.frequency.setValueAtTime(freq, now);
      osc1.detune.setValueAtTime((idx - 2.5) * 3, now); // soft chorus detuning

      // Secondary Oscillator: Pure sine wave for deep harmonic body
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(freq, now);
      osc2.detune.setValueAtTime(-(idx - 2.5) * 3, now);

      // Note volume: audible, warm, and balanced
      const baseNoteVolume = 0.08 / (1 + idx * 0.12);

      // Volume envelope: smooth fade-in, rich sustain, gentle release
      gain1.gain.setValueAtTime(0.0001, now);
      gain1.gain.linearRampToValueAtTime(baseNoteVolume, now + 1.8);
      gain1.gain.setValueAtTime(baseNoteVolume, now + chordDuration - 1.5);
      gain1.gain.linearRampToValueAtTime(0.0001, now + chordDuration);

      gain2.gain.setValueAtTime(0.0001, now);
      gain2.gain.linearRampToValueAtTime(baseNoteVolume * 0.7, now + 1.8);
      gain2.gain.setValueAtTime(baseNoteVolume * 0.7, now + chordDuration - 1.5);
      gain2.gain.linearRampToValueAtTime(0.0001, now + chordDuration);

      osc1.connect(gain1);
      gain1.connect(this.filter);

      osc2.connect(gain2);
      gain2.connect(this.filter);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + chordDuration + 0.4);
      osc2.stop(now + chordDuration + 0.4);

      this.activeVoices.push({ osc: osc1, gain: gain1 }, { osc: osc2, gain: gain2 });
    });

    // Clean up expired voice references
    this.activeVoices = this.activeVoices.filter(v => {
      try {
        return v.osc.playbackState !== 3;
      } catch (e) {
        return true;
      }
    });

    // Overlap chords by 1.6s for seamless continuous harmony
    this.chordTimeout = setTimeout(() => {
      if (this.isPlaying) {
        this.playChordSequence();
      }
    }, (chordDuration - 1.6) * 1000);
  }

  scheduleNextChime() {
    if (!this.isPlaying || !this.ctx) return;

    // Random chime interval between 3.5s and 6.5s
    const interval = (3.5 + Math.random() * 3.0) * 1000;

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

    // Audible crystalline bell envelope
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.065, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);

    osc.connect(gain);
    gain.connect(this.filter);

    osc.start(now);
    osc.stop(now + 3.0);
  }

  // Play an immediate welcoming chime when the user toggles sound on
  playWelcomeChime() {
    if (!this.ctx) this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    [587.33, 880.00, 1108.73].forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now + i * 0.12);

      gain.gain.setValueAtTime(0.0001, now + i * 0.12);
      gain.gain.linearRampToValueAtTime(0.08, now + i * 0.12 + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.12 + 1.8);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now + i * 0.12);
      osc.stop(now + i * 0.12 + 2.0);
    });
  }

  stop() {
    if (!this.ctx || !this.masterGain) return;
    this.isPlaying = false;
    clearTimeout(this.chordTimeout);
    clearTimeout(this.chimeTimeout);

    // Smooth 0.8s fade out
    const now = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.8);

    setTimeout(() => {
      this.activeVoices.forEach(v => {
        try {
          v.osc.stop();
          v.osc.disconnect();
        } catch (e) {}
      });
      this.activeVoices = [];
    }, 850);
  }
}

// Global persistent audio engine
let globalAudioEngine = null;

export function getAudioEngine() {
  if (!globalAudioEngine && typeof window !== 'undefined') {
    globalAudioEngine = new AmbientAudioEngine();
  }
  return globalAudioEngine;
}

export default function AmbientAudio({ isMuted, onToggleMute, theme = 'light' }) {
  const [hasInteracted, setHasInteracted] = useState(false);
  const isDark = theme === 'dark';

  // Handle play / stop based on isMuted state
  useEffect(() => {
    const engine = getAudioEngine();
    if (!engine) return;

    if (!isMuted) {
      engine.start();
    } else {
      engine.stop();
    }
  }, [isMuted]);

  // Unlock audio on ANY first user interaction across the window
  useEffect(() => {
    const unlockOnGesture = async () => {
      setHasInteracted(true);
      const engine = getAudioEngine();
      if (engine) {
        await engine.resumeContext();
        if (!isMuted && !engine.isPlaying) {
          engine.start();
        }
      }
    };

    window.addEventListener('click', unlockOnGesture, { passive: true });
    window.addEventListener('pointerdown', unlockOnGesture, { passive: true });
    window.addEventListener('keydown', unlockOnGesture, { passive: true });
    window.addEventListener('touchstart', unlockOnGesture, { passive: true });

    return () => {
      window.removeEventListener('click', unlockOnGesture);
      window.removeEventListener('pointerdown', unlockOnGesture);
      window.removeEventListener('keydown', unlockOnGesture);
      window.removeEventListener('touchstart', unlockOnGesture);
    };
  }, [isMuted]);

  const handleButtonClick = async () => {
    const engine = getAudioEngine();
    if (engine) {
      await engine.resumeContext();
      if (isMuted) {
        // Unmuting: play instant chime so user hears audio immediately
        engine.playWelcomeChime();
      }
    }
    onToggleMute();
  };

  return (
    <div 
      className="fixed bottom-5 left-5 z-40 select-none animate-fadeIn pointer-events-auto"
      aria-label="Background ambient music controller"
    >
      <button
        onClick={handleButtonClick}
        className={`group flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl border transition-all duration-300 backdrop-blur-md shadow-lg ${
          isDark
            ? isMuted
              ? 'bg-[#0E1117]/95 text-zinc-400 border-white/15 hover:border-white/40 hover:text-white'
              : 'bg-[#121622]/95 text-white border-white/25 hover:border-white/50 shadow-[0_0_25px_rgba(255,255,255,0.15)]'
            : isMuted
              ? 'bg-white/95 text-zinc-700 border-2 border-[#0B0E14] shadow-spider-sm hover:scale-105'
              : 'bg-white/95 text-[#0B0E14] border-2.5 border-[#0B0E14] shadow-spider hover:scale-105'
        }`}
        title={isMuted ? "Click to play celestial ambient music" : "Click to mute music"}
        aria-pressed={!isMuted}
      >
        {/* Animated Volume / Equalizer Bars */}
        <div className="relative flex items-center justify-center">
          {isMuted ? (
            <div className="relative">
              <VolumeX className="w-4 h-4 text-zinc-500 group-hover:text-current transition-colors" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#FF0055] animate-ping" />
            </div>
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
          <span className="font-mono font-bold text-[10px] tracking-wider uppercase leading-none flex items-center gap-1">
            <span>{isMuted ? 'Music: Muted' : 'Music: Playing'}</span>
            {!isMuted && <span className="text-[10px] text-emerald-400">♫</span>}
          </span>
          <span className="font-sans text-[9px] text-zinc-400 group-hover:text-zinc-200 transition-colors leading-tight mt-0.5">
            {isMuted ? 'Click to un-mute 🎵' : 'Celestial ambient audio'}
          </span>
        </div>
      </button>
    </div>
  );
}
