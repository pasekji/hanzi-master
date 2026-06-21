// ============================================
// STORAGE
// ============================================
const STORAGE_KEY = 'hanzi_master_v3';
const LANGUAGE_KEY = 'hanzi_master_ui_language';
const SOUND_KEY = 'hanzi_master_sound_enabled';
const AMBIENCE_KEY = 'hanzi_master_ambience_enabled';

const SOUND_PATTERNS = {
  tap: [{ frequency: 520, start: 0, duration: 0.045, gain: 0.022, type: 'triangle' }],
  select: [
    { frequency: 520, start: 0, duration: 0.055, gain: 0.03, type: 'triangle' },
    { frequency: 680, start: 0.045, duration: 0.07, gain: 0.026, type: 'sine' }
  ],
  stroke: [{ frequency: 640, start: 0, duration: 0.035, gain: 0.018, type: 'sine' }],
  correct: [
    { frequency: 660, start: 0, duration: 0.08, gain: 0.04, type: 'sine' },
    { frequency: 880, start: 0.07, duration: 0.1, gain: 0.036, type: 'sine' }
  ],
  wrong: [
    { frequency: 185, start: 0, duration: 0.09, gain: 0.035, type: 'triangle' },
    { frequency: 135, start: 0.08, duration: 0.11, gain: 0.026, type: 'sine' }
  ],
  reveal: [
    { frequency: 392, start: 0, duration: 0.07, gain: 0.026, type: 'sine' },
    { frequency: 494, start: 0.07, duration: 0.09, gain: 0.03, type: 'sine' }
  ],
  complete: [
    { frequency: 523, start: 0, duration: 0.08, gain: 0.036, type: 'sine' },
    { frequency: 659, start: 0.07, duration: 0.09, gain: 0.034, type: 'sine' },
    { frequency: 784, start: 0.15, duration: 0.14, gain: 0.032, type: 'sine' }
  ]
};

let audioContext = null;
let ambienceNodes = null;

function loadSoundEnabled() {
  try {
    const saved = localStorage.getItem(SOUND_KEY);
    return saved === null ? true : saved === 'true';
  } catch (e) {
    return true;
  }
}

function saveSoundEnabled(enabled) {
  try {
    localStorage.setItem(SOUND_KEY, String(enabled));
  } catch (e) {
    console.warn('Failed to save sound setting:', e);
  }
}

function loadAmbienceEnabled() {
  try {
    return localStorage.getItem(AMBIENCE_KEY) === 'true';
  } catch (e) {
    return false;
  }
}

function saveAmbienceEnabled(enabled) {
  try {
    localStorage.setItem(AMBIENCE_KEY, String(enabled));
  } catch (e) {
    console.warn('Failed to save ambience setting:', e);
  }
}

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!audioContext) audioContext = new AudioContextClass();
  return audioContext;
}

function playSoundEffect(name, enabled = true) {
  if (!enabled) return;
  const pattern = SOUND_PATTERNS[name] || SOUND_PATTERNS.tap;
  const context = getAudioContext();
  if (!context) return;
  if (context.state === 'suspended') {
    context.resume().catch(() => {});
  }
  const startAt = context.currentTime + 0.012;
  pattern.forEach(note => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const noteStart = startAt + note.start;
    const noteEnd = noteStart + note.duration;
    oscillator.type = note.type;
    oscillator.frequency.setValueAtTime(note.frequency, noteStart);
    gain.gain.setValueAtTime(0.0001, noteStart);
    gain.gain.exponentialRampToValueAtTime(note.gain, noteStart + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, noteEnd);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(noteStart);
    oscillator.stop(noteEnd + 0.02);
  });
}

function createAmbienceNoiseBuffer(context) {
  const duration = 2.4;
  const buffer = context.createBuffer(1, Math.floor(context.sampleRate * duration), context.sampleRate);
  const data = buffer.getChannelData(0);
  let last = 0;
  for (let i = 0; i < data.length; i += 1) {
    last = (last + (Math.random() * 2 - 1) * 0.018) / 1.018;
    data[i] = last * 0.5;
  }
  return buffer;
}

function scheduleAmbiencePluck() {
  if (!ambienceNodes) return;
  const { context, pluckBus } = ambienceNodes;
  const motif = [392, 523.25, 587.33, 440];
  const startAt = context.currentTime + 0.04;
  motif.forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const noteStart = startAt + index * 0.18;
    oscillator.type = index % 2 ? 'sine' : 'triangle';
    oscillator.frequency.setValueAtTime(frequency, noteStart);
    gain.gain.setValueAtTime(0.0001, noteStart);
    gain.gain.exponentialRampToValueAtTime(index === 1 ? 0.018 : 0.012, noteStart + 0.026);
    gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + 0.85);
    oscillator.connect(gain);
    gain.connect(pluckBus);
    oscillator.start(noteStart);
    oscillator.stop(noteStart + 0.92);
  });
}

function startAmbienceLoop() {
  const context = getAudioContext();
  if (!context) return false;
  if (context.state === 'suspended') {
    context.resume().catch(() => {});
  }
  if (ambienceNodes) return true;

  const now = context.currentTime;
  const master = context.createGain();
  const noiseFilter = context.createBiquadFilter();
  const noiseGain = context.createGain();
  const noise = context.createBufferSource();
  const droneBus = context.createGain();
  const pluckBus = context.createGain();
  const drones = [196, 246.94, 329.63].map((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, now);
    oscillator.detune.setValueAtTime(index === 1 ? 4 : -3, now);
    gain.gain.setValueAtTime(index === 0 ? 0.008 : 0.005, now);
    oscillator.connect(gain);
    gain.connect(droneBus);
    oscillator.start(now);
    return oscillator;
  });

  noise.buffer = createAmbienceNoiseBuffer(context);
  noise.loop = true;
  noiseFilter.type = 'lowpass';
  noiseFilter.frequency.setValueAtTime(760, now);
  noiseFilter.Q.setValueAtTime(0.45, now);
  noiseGain.gain.setValueAtTime(0.015, now);
  droneBus.gain.setValueAtTime(0.42, now);
  pluckBus.gain.setValueAtTime(0.28, now);
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(0.085, now + 1.2);

  noise.connect(noiseFilter);
  noiseFilter.connect(noiseGain);
  noiseGain.connect(master);
  droneBus.connect(master);
  pluckBus.connect(master);
  master.connect(context.destination);
  noise.start(now);

  ambienceNodes = {
    context,
    master,
    noise,
    drones,
    pluckBus,
    timer: window.setInterval(scheduleAmbiencePluck, 5200)
  };
  scheduleAmbiencePluck();
  return true;
}

function stopAmbienceLoop() {
  if (!ambienceNodes) return;
  const nodes = ambienceNodes;
  ambienceNodes = null;
  window.clearInterval(nodes.timer);
  const now = nodes.context.currentTime;
  nodes.master.gain.cancelScheduledValues(now);
  nodes.master.gain.setValueAtTime(Math.max(nodes.master.gain.value, 0.0001), now);
  nodes.master.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);
  window.setTimeout(() => {
    try {
      nodes.noise.stop();
      nodes.drones.forEach(oscillator => oscillator.stop());
      nodes.master.disconnect();
    } catch (e) {
      // Audio nodes may already be stopped by the browser.
    }
  }, 650);
}

