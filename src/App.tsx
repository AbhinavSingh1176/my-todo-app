import React, { useState, useEffect, useRef } from "react";

// --- ICONS ---
const Icon = ({ name, size = 18, className = "" }: any) => {
  const icons: any = {
    check: <path d="M20 6L9 17l-5-5" />,
    circle: <circle cx="12" cy="12" r="10" />,
    plus: <path d="M12 5v14M5 12h14" />,
    trash: (
      <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    ),
    calendar: (
      <g>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </g>
    ),
    list: (
      <g>
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </g>
    ),
    columns: (
      <g>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
      </g>
    ),
    sun: (
      <g>
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </g>
    ),
    moon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />,
    play: <polygon points="5 3 19 12 5 21 5 3" />,
    pause: (
      <g>
        <rect x="6" y="4" width="4" height="16" />
        <rect x="14" y="4" width="4" height="16" />
      </g>
    ),
    headphones: (
      <g>
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </g>
    ),
    cloud: <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />,
    bolt: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
    music: (
      <g>
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </g>
    ),
    help: (
      <g>
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </g>
    ),
    x: (
      <g>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </g>
    ),
    download: (
      <g>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </g>
    ),
    flame: (
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.6-3.3.3.5.9 1.5 2.9 2.8z" />
    ),
    checkCircle: (
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3" />
    ),
    repeat: (
      <g>
        <path d="M17 1l4 4-4 4" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <path d="M7 23l-4-4 4-4" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </g>
    ),
    sliders: (
      <g>
        <line x1="4" y1="21" x2="4" y2="14" />
        <line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" />
        <line x1="20" y1="12" x2="20" y2="3" />
        <line x1="1" y1="14" x2="7" y2="14" />
        <line x1="9" y1="8" x2="15" y2="8" />
        <line x1="17" y1="16" x2="23" y2="16" />
      </g>
    ),
    coffee: (
      <g>
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </g>
    ),
    water: (
      <g>
        <path d="M2 12h20" />
        <path d="M2 16h20" />
        <path d="M2 8h20" />
      </g>
    ),
    noise: (
      <g>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </g>
    ),
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {icons[name] || icons.circle}
    </svg>
  );
};

// --- CONFIG ---
const ALARM_SOUND =
  "https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3";

const THEMES: any = {
  violet: {
    main: "text-violet-600",
    bg: "bg-violet-500",
    border: "border-violet-200",
    light: "bg-violet-50",
    Hz: "bg-violet-100",
    ring: "focus:border-violet-500",
  },
  blue: {
    main: "text-blue-600",
    bg: "bg-blue-500",
    border: "border-blue-200",
    light: "bg-blue-50",
    Hz: "bg-blue-100",
    ring: "focus:border-blue-500",
  },
  rose: {
    main: "text-rose-600",
    bg: "bg-rose-500",
    border: "border-rose-200",
    light: "bg-rose-50",
    Hz: "bg-rose-100",
    ring: "focus:border-rose-500",
  },
  emerald: {
    main: "text-emerald-600",
    bg: "bg-emerald-500",
    border: "border-emerald-200",
    light: "bg-emerald-50",
    Hz: "bg-emerald-100",
    ring: "focus:border-emerald-500",
  },
};

export default function App() {
  // --- STATE ---
  const [user, setUser] = useState<any>(() =>
    JSON.parse(localStorage.getItem("zenUser") || "null")
  );
  const [tasks, setTasks] = useState<any[]>(() =>
    JSON.parse(localStorage.getItem("zenTasks_v6") || "[]")
  );
  const [habits, setHabits] = useState<any[]>(() =>
    JSON.parse(
      localStorage.getItem("zenHabits_v6") ||
        '[{"id":1,"text":"Drink Water","completed":false}]'
    )
  );
  const [availableTags, setAvailableTags] = useState<string[]>(() =>
    JSON.parse(
      localStorage.getItem("zenTags_v6") ||
        '["Work", "Study", "Life", "Urgent"]'
    )
  );
  const [theme, setTheme] = useState(
    () => localStorage.getItem("zenTheme") || "violet"
  );
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("zenDark") === "true"
  );
  const [volumes, setVolumes] = useState<any>(() =>
    JSON.parse(
      localStorage.getItem("zenVolumes") ||
        JSON.stringify({
          lofi: 0.35,
          rain: 0,
          thunder: 0,
          forest: 0,
          waves: 0,
          brown: 0,
          master: 0.92,
        })
    )
  );

  const [timerMode, setTimerMode] = useState<"focus" | "break">("focus");
  const [workDuration, setWorkDuration] = useState(() =>
    parseInt(localStorage.getItem("zenWorkDur") || "25")
  );
  const [breakDuration, setBreakDuration] = useState(() =>
    parseInt(localStorage.getItem("zenBreakDur") || "5")
  );
  const [timerTime, setTimerTime] = useState(workDuration * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const [view, setView] = useState<"list" | "3day" | "month">("list");
  const [showSoundMixer, setShowSoundMixer] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedTag, setSelectedTag] = useState("Life");
  const [loginName, setLoginName] = useState("");
  const [loginPin, setLoginPin] = useState("");
  const [loginError, setLoginError] = useState("");

  const currentDate = new Date();
  const activeTheme = THEMES[theme];

  // ---------- NEW WebAudio ENGINE REFS ----------
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterNodesRef = useRef<any>(null);
  const channelGainsRef = useRef<Record<string, GainNode>>({});
  const channelSrcRef = useRef<Record<string, AudioBufferSourceNode | null>>(
    {}
  );
  const bufferCacheRef = useRef<Record<string, AudioBuffer | null>>({});
  const convolverIRRef = useRef<AudioBuffer | null>(null);

  // ------------------- WebAudio Helpers & Generators --------------------
  const createStereoBuffer = (
    ctx: BaseAudioContext,
    seconds: number,
    fillFn: (L: Float32Array, R: Float32Array, sr: number) => void
  ) => {
    const sr = ctx.sampleRate;
    const frameCount = Math.max(1, Math.floor(seconds * sr));
    const buffer = ctx.createBuffer(2, frameCount, sr);
    const left = buffer.getChannelData(0);
    const right = buffer.getChannelData(1);
    fillFn(left, right, sr);
    const fadeSec = Math.min(0.05, seconds * 0.02);
    const fadeFrames = Math.floor(fadeSec * sr);
    for (let i = 0; i < fadeFrames; i++) {
      const inGain = i / fadeFrames;
      const outGain = 1 - inGain;
      left[i] *= inGain;
      right[i] *= inGain;
      left[frameCount - 1 - i] *= outGain;
      right[frameCount - 1 - i] *= outGain;
    }
    return buffer;
  };

  const generateIR = (ctx: BaseAudioContext, seconds = 2, decay = 3) => {
    const sr = ctx.sampleRate;
    const length = Math.floor(seconds * sr);
    const ir = ctx.createBuffer(2, length, sr);
    for (let ch = 0; ch < 2; ch++) {
      const channel = ir.getChannelData(ch);
      for (let i = 0; i < length; i++) {
        const t = i / sr;
        channel[i] =
          (Math.random() * 2 - 1) * Math.pow(1 - t / seconds, decay) * 0.7;
      }
    }
    return ir;
  };

  const createSoftLimiterCurve = (amount = 1) => {
    const k = amount;
    const samples = 44100;
    const curve = new Float32Array(samples);
    const deg = Math.PI / 180;
    for (let i = 0; i < samples; ++i) {
      const x = (i * 2) / samples - 1;
      curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    return curve;
  };

  // Procedural/simple generators
  const generateBrownBuffer = (ctx: BaseAudioContext, seconds = 14) =>
    createStereoBuffer(ctx, seconds, (L, R, sr) => {
      let lastL = 0,
        lastR = 0;
      for (let i = 0; i < L.length; i++) {
        const whiteL = Math.random() * 2 - 1;
        const whiteR = Math.random() * 2 - 1;
        lastL = (lastL + 0.02 * whiteL) / 1.02;
        lastR = (lastR + 0.02 * whiteR) / 1.02;
        L[i] = lastL * 0.35;
        R[i] = lastR * 0.35;
      }
      for (let i = 2; i < L.length; i++) {
        L[i] = (L[i] + L[i - 1] * 0.6 + L[i - 2] * 0.35) / 1.95;
        R[i] = (R[i] + R[i - 1] * 0.6 + R[i - 2] * 0.35) / 1.95;
      }
    });

  const generateRainBuffer = (ctx: BaseAudioContext, seconds = 12) =>
    createStereoBuffer(ctx, seconds, (L, R, sr) => {
      for (let i = 0; i < L.length; i++) {
        L[i] = 0;
        R[i] = 0;
      }
      const dropletsPerSec = 40 + Math.floor(Math.random() * 40);
      const totalDroplets = Math.floor(seconds * dropletsPerSec);
      for (let d = 0; d < totalDroplets; d++) {
        const pos = Math.floor(Math.random() * L.length);
        const len = Math.floor(sr * (0.02 + Math.random() * 0.12));
        const pan = Math.random() * 0.8 - 0.4;
        for (let j = 0; j < len && pos + j < L.length; j++) {
          const env = Math.exp(-j / (sr * (0.02 + Math.random() * 0.04)));
          const noise =
            (Math.random() * 2 - 1) * env * (0.3 + Math.random() * 0.8);
          L[pos + j] += noise * (1 - (pan + 1) / 2) * 0.9;
          R[pos + j] += noise * ((pan + 1) / 2) * 0.9;
        }
      }
      for (let i = 1; i < L.length; i++) {
        L[i] = L[i] * 0.6 + L[i - 1] * 0.35;
        R[i] = R[i] * 0.6 + R[i - 1] * 0.35;
      }
    });

  const generateWavesBuffer = (ctx: BaseAudioContext, seconds = 16) =>
    createStereoBuffer(ctx, seconds, (L, R, sr) => {
      const baseFreq = 0.06 + Math.random() * 0.08;
      const phaseL = Math.random() * Math.PI * 2;
      const phaseR = phaseL + 0.5;
      for (let i = 0; i < L.length; i++) {
        const t = i / sr;
        const swellL =
          0.6 + 0.4 * Math.sin(2 * Math.PI * baseFreq * t + phaseL);
        const swellR =
          0.6 + 0.4 * Math.sin(2 * Math.PI * baseFreq * t + phaseR);
        const surfL = (Math.random() * 2 - 1) * 0.18 * swellL;
        const surfR = (Math.random() * 2 - 1) * 0.18 * swellR;
        const rumble = Math.sin(2 * Math.PI * 60 * t) * 0.02;
        L[i] = surfL + rumble * (0.9 + 0.1 * Math.random());
        R[i] = surfR + rumble * (0.9 + 0.1 * Math.random());
      }
      for (let i = 2; i < L.length; i++) {
        L[i] = (L[i] + L[i - 1] * 0.6 + L[i - 2] * 0.3) / 1.9;
        R[i] = (R[i] + R[i - 1] * 0.6 + R[i - 2] * 0.3) / 1.9;
      }
    });

  const generateThunderBuffer = (ctx: BaseAudioContext, seconds = 18) =>
    createStereoBuffer(ctx, seconds, (L, R, sr) => {
      for (let i = 0; i < L.length; i++) {
        L[i] = 0;
        R[i] = 0;
      }
      const events = 1 + Math.floor(Math.random() * 3);
      for (let e = 0; e < events; e++) {
        const start = Math.floor(Math.random() * (L.length * 0.8));
        const dur = Math.floor(sr * (1.0 + Math.random() * 3.0));
        const pan = Math.random() * 0.8 - 0.4;
        for (let i = 0; i < dur && start + i < L.length; i++) {
          const env = Math.exp(-i / (sr * (0.6 + Math.random() * 1.6)));
          const rumble = (Math.random() * 2 - 1) * 0.9 * env;
          const bright =
            (Math.random() * 2 - 1) * 0.15 * Math.exp(-i / (sr * 0.03));
          L[start + i] += rumble * (1 - (pan + 1) / 2) * 0.9 + bright * 0.8;
          R[start + i] += rumble * ((pan + 1) / 2) * 0.9 + bright * 0.8;
        }
      }
      for (let i = 2; i < L.length; i++) {
        L[i] = (L[i] + 0.6 * L[i - 1] + 0.3 * L[i - 2]) / 1.9;
        R[i] = (R[i] + 0.6 * R[i - 1] + 0.3 * R[i - 2]) / 1.9;
      }
    });

  const generateForestBuffer = (ctx: BaseAudioContext, seconds = 16) =>
    createStereoBuffer(ctx, seconds, (L, R, sr) => {
      for (let i = 0; i < L.length; i++) {
        const w1 = (Math.random() * 2 - 1) * 0.18;
        const w2 = (Math.random() * 2 - 1) * 0.14;
        L[i] = (w1 + w2) * 0.7;
        R[i] = (w1 * 0.9 + w2 * 0.6) * 0.7;
      }
      const chirps = Math.floor(seconds * 1.3);
      for (let c = 0; c < chirps; c++) {
        const pos = Math.floor(Math.random() * L.length);
        const len = Math.floor(sr * (0.05 + Math.random() * 0.22));
        const startFreq = 700 + Math.random() * 1600;
        const endFreq = startFreq + (Math.random() * 400 - 200);
        const pan = Math.random() * 0.8 - 0.4;
        for (let i = 0; i < len && pos + i < L.length; i++) {
          const tt = i / len;
          const freq = startFreq + (endFreq - startFreq) * tt;
          const env = Math.sin(Math.PI * tt) * Math.exp(-tt * 2);
          const s = Math.sin(2 * Math.PI * freq * (i / sr)) * env * 0.6;
          L[pos + i] += s * (1 - (pan + 1) / 2);
          R[pos + i] += s * ((pan + 1) / 2);
        }
      }
      for (let i = 2; i < L.length; i++) {
        L[i] = L[i] * 0.7 + L[i - 1] * 0.25;
        R[i] = R[i] * 0.7 + R[i - 1] * 0.25;
      }
    });

  const generateLofiBuffer = (ctx: BaseAudioContext, seconds = 60) =>
    createStereoBuffer(ctx, seconds, (L, R, sr) => {
      // Chords
      const chords = [
        [220, 277.18, 329.63],
        [196, 246.94, 329.63],
        [185, 233.08, 293.66],
        [174.61, 220, 277.18],
      ];
      const chordLen = seconds / chords.length;
      for (let c = 0; c < chords.length; c++) {
        const chord = chords[c];
        const start = Math.floor(c * chordLen * sr);
        const end = Math.floor((c + 1) * chordLen * sr);
        for (let i = start; i < end && i < L.length; i++) {
          const t = i / sr - c * chordLen;
          let pad = 0;
          for (let n = 0; n < chord.length; n++) {
            const freq = chord[n] * (0.5 + 0.5 * (n / (chord.length + 1)));
            let partial = 0;
            const detune = 1 + (n - 1) * 0.002;
            for (let h = 1; h < 8; h++)
              partial +=
                (Math.sin(2 * Math.PI * freq * h * t * detune) / h) * 0.6;
            pad += partial * (0.6 / chord.length);
          }
          const env = 0.6 * (0.5 + 0.5 * Math.sin(Math.PI * (t / chordLen)));
          L[i] += pad * env * (0.9 + 0.1 * Math.cos(t * 0.1));
          R[i] += pad * env * (0.9 + 0.1 * Math.sin(t * 0.11));
        }
      }
      // Beat
      const bpm = 70;
      const beatInterval = 60 / bpm;
      for (let t = 0; t < seconds; t += beatInterval) {
        const pos = Math.floor(t * sr);
        const kickLen = Math.floor(sr * 0.18);
        for (let i = 0; i < kickLen && pos + i < L.length; i++) {
          const tt = i / kickLen;
          const kEnv = Math.exp(-tt * 6);
          const freq = 60 * (1 - tt * 0.6);
          const s = Math.sin(2 * Math.PI * freq * (i / sr)) * kEnv * 0.9;
          L[pos + i] += s * 0.8;
          R[pos + i] += s * 0.8;
        }
        const hatPos = pos + Math.floor(beatInterval * sr * 0.5);
        const hatLen = Math.floor(sr * 0.04);
        for (let i = 0; i < hatLen && hatPos + i < L.length; i++) {
          const env = Math.exp(-i / (sr * 0.01));
          const noise = (Math.random() * 2 - 1) * env * 0.12;
          L[hatPos + i] += noise * 0.8;
          R[hatPos + i] += noise * 0.6;
        }
      }
      // Vinyl Crackle
      const crackles = Math.floor(seconds * 3);
      for (let c = 0; c < crackles; c++) {
        const pos = Math.floor(Math.random() * L.length);
        const len = Math.floor(sr * (0.01 + Math.random() * 0.05));
        for (let i = 0; i < len && pos + i < L.length; i++) {
          const env = Math.exp(-i / (sr * 0.008));
          const n = (Math.random() * 2 - 1) * env * 0.05;
          L[pos + i] += n * (0.7 + Math.random() * 0.6);
          R[pos + i] += n * (0.6 + Math.random() * 0.6);
        }
      }
      // Normalize
      let max = 0.001;
      for (let i = 0; i < L.length; i++)
        max = Math.max(max, Math.abs(L[i]), Math.abs(R[i]));
      const norm = 0.5 / max;
      for (let i = 0; i < L.length; i++) {
        L[i] *= norm;
        R[i] *= norm;
      }
    });

  // ---------------- AudioContext + master chain init --------------------
  useEffect(() => {
    const AudioCtor =
      (window as any).AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtor) return;
    const ctx = new AudioCtor();
    audioCtxRef.current = ctx;

    // master nodes
    const masterIn = ctx.createGain();
    const hp = ctx.createBiquadFilter();
    hp.type = "highpass";
    hp.frequency.value = 40;
    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 14000;
    const convolver = ctx.createConvolver();
    try {
      convolver.buffer = generateIR(ctx, 2.0, 3.2);
      convolverIRRef.current = convolver.buffer;
    } catch (e) {
      /* ignore */
    }
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -24;
    comp.knee.value = 6;
    comp.ratio.value = 3.5;
    comp.attack.value = 0.01;
    comp.release.value = 0.25;
    const limiter = ctx.createWaveShaper();
    limiter.curve = createSoftLimiterCurve(2);
    limiter.oversample = "4x";
    const masterGain = ctx.createGain();
    masterGain.gain.value = volumes.master ?? 0.92;

    masterIn.connect(hp);
    hp.connect(lp);
    lp.connect(convolver);
    convolver.connect(comp);
    comp.connect(limiter);
    limiter.connect(masterGain);
    masterGain.connect(ctx.destination);

    masterNodesRef.current = {
      masterIn,
      hp,
      lp,
      convolver,
      comp,
      limiter,
      masterGain,
    };

    // per-channel gains
    ["lofi", "rain", "thunder", "waves", "brown", "forest"].forEach((k) => {
      const g = ctx.createGain();
      g.gain.value = 0;
      g.connect(masterIn);
      channelGainsRef.current[k] = g;
      channelSrcRef.current[k] = null;
      bufferCacheRef.current[k] = null;
    });

    return () => {
      Object.values(channelSrcRef.current).forEach((s) => {
        try {
          s?.stop();
        } catch (e) {}
      });
      try {
        ctx.close();
      } catch (e) {}
      audioCtxRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Resume context helper
  const resumeAudioContext = async () => {
    try {
      const ctx = audioCtxRef.current;
      if (ctx && ctx.state === "suspended") await ctx.resume();
    } catch (e) {}
  };

  // Start/stop channels & ramp gains when volumes change ------------------
  useEffect(() => {
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    const startChannel = async (key: string) => {
      if (!ctx || channelSrcRef.current[key]) return;
      await resumeAudioContext();

      let buf = bufferCacheRef.current[key];
      if (!buf) {
        switch (key) {
          case "rain":
            buf = generateRainBuffer(ctx, 12 + Math.random() * 8);
            break;
          case "thunder":
            buf = generateThunderBuffer(ctx, 14 + Math.random() * 10);
            break;
          case "waves":
            buf = generateWavesBuffer(ctx, 12 + Math.random() * 8);
            break;
          case "brown":
            buf = generateBrownBuffer(ctx, 12 + Math.random() * 6);
            break;
          case "forest":
            buf = generateForestBuffer(ctx, 14 + Math.random() * 6);
            break;
          case "lofi":
            buf = generateLofiBuffer(ctx, 60);
            break;
          default:
            buf = generateBrownBuffer(ctx, 12);
        }
        bufferCacheRef.current[key] = buf;
      }

      const src = ctx.createBufferSource();
      src.buffer = buf!;
      src.loop = true;

      // gentle per-channel shaping
      let nodeOut: AudioNode = src;
      if (key === "brown") {
        const lp = ctx.createBiquadFilter();
        lp.type = "lowpass";
        lp.frequency.value = 900;
        src.connect(lp);
        nodeOut = lp;
      } else if (key === "waves") {
        const lp = ctx.createBiquadFilter();
        lp.type = "lowpass";
        lp.frequency.value = 8000;
        lp.Q.value = 0.7;
        src.connect(lp);
        nodeOut = lp;
      } else if (key === "forest") {
        const hp = ctx.createBiquadFilter();
        hp.type = "highpass";
        hp.frequency.value = 160;
        src.connect(hp);
        nodeOut = hp;
      } else if (key === "thunder") {
        const lp = ctx.createBiquadFilter();
        lp.type = "lowpass";
        lp.frequency.value = 1200;
        src.connect(lp);
        nodeOut = lp;
      }

      const panner = ctx.createStereoPanner();
      panner.pan.value = (Math.random() - 0.5) * 0.6;
      nodeOut.connect(panner);
      panner.connect(channelGainsRef.current[key]);

      try {
        src.start();
      } catch (e) {}
      channelSrcRef.current[key] = src;
    };

    const stopChannel = (key: string) => {
      const s = channelSrcRef.current[key];
      if (s) {
        try {
          s.stop();
        } catch (e) {}
        channelSrcRef.current[key] = null;
      }
    };

    Object.keys(channelGainsRef.current).forEach((key) => {
      const desired = volumes[key] || 0;
      const g = channelGainsRef.current[key];
      if (!g) return;
      try {
        g.gain.cancelScheduledValues(0);
        g.gain.setValueAtTime(g.gain.value, ctx.currentTime);
        g.gain.linearRampToValueAtTime(desired, ctx.currentTime + 0.25);
      } catch (e) {
        g.gain.value = desired;
      }

      if (desired > 0.001) startChannel(key).catch(() => {});
      else
        setTimeout(() => {
          if ((channelGainsRef.current[key]?.gain.value || 0) < 0.001)
            stopChannel(key);
        }, 300);
    });

    // master gain
    try {
      const mg = masterNodesRef.current.masterGain;
      mg.gain.cancelScheduledValues(0);
      mg.gain.setValueAtTime(mg.gain.value, ctx.currentTime);
      mg.gain.linearRampToValueAtTime(
        volumes.master ?? 0.92,
        ctx.currentTime + 0.25
      );
    } catch (e) {}
  }, [volumes]);

  // ------------------ Rest of App UI logic ------------------
  useEffect(() => {
    if (user) localStorage.setItem("zenTasks_v6", JSON.stringify(tasks));
  }, [tasks, user]);
  useEffect(() => {
    if (user) localStorage.setItem("zenHabits_v6", JSON.stringify(habits));
  }, [habits, user]);
  useEffect(() => {
    if (user) localStorage.setItem("zenTags_v6", JSON.stringify(availableTags));
  }, [availableTags, user]);
  useEffect(() => {
    if (user) localStorage.setItem("zenTheme", theme);
  }, [theme, user]);
  useEffect(() => {
    if (user) localStorage.setItem("zenDark", String(darkMode));
  }, [darkMode, user]);
  useEffect(() => {
    if (user) localStorage.setItem("zenVolumes", JSON.stringify(volumes));
  }, [volumes, user]);
  useEffect(() => {
    if (user) localStorage.setItem("zenWorkDur", String(workDuration));
  }, [workDuration, user]);
  useEffect(() => {
    if (user) localStorage.setItem("zenBreakDur", String(breakDuration));
  }, [breakDuration, user]);

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerTime > 0) {
      interval = setInterval(() => setTimerTime((t) => t - 1), 1000);
    } else if (timerTime === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      const audio = new Audio(ALARM_SOUND);
      audio.volume = 0.5;
      audio.play().catch(() => void 0);
      if (timerMode === "focus") {
        setTimerMode("break");
        setTimerTime(breakDuration * 60);
      } else {
        setTimerMode("focus");
        setTimerTime(workDuration * 60);
      }
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerTime, timerMode, workDuration, breakDuration]);

  const isSameDay = (d1: Date, d2: Date) => {
    const a = new Date(d1);
    const b = new Date(d2);
    return (
      a.getDate() === b.getDate() &&
      a.getMonth() === b.getMonth() &&
      a.getFullYear() === b.getFullYear()
    );
  };

  const handleAddTask = (e: any) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    let text = inputValue;
    let date = new Date();
    let priority = "normal";
    let recurring = false;
    let tag = selectedTag;
    let time = "";

    const lower = text.toLowerCase();
    const timeMatch = lower.match(/\bat\s+(\d{1,2}(:\d{2})?(am|pm)?)/i);
    if (timeMatch) {
      time = timeMatch[1];
      text = text.replace(timeMatch[0], "");
    }

    if (lower.includes(" tom ")) {
      const d = new Date();
      d.setDate(d.getDate() + 1);
      date = d;
      text = text.replace(/ tom /gi, " ");
    }

    if (lower.includes("!urgent")) {
      priority = "urgent";
      tag = "Urgent";
      text = text.replace(/!urgent/gi, "");
    }
    if (lower.includes("!rec")) {
      recurring = true;
      text = text.replace(/!rec/gi, "");
    }

    text = text.replace(/\s+/g, " ").trim();
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text,
        completed: false,
        date,
        priority,
        tag,
        recurring,
        time,
      },
    ]);
    setInputValue("");
  };

  const handleDragStart = (e: React.DragEvent, taskId: number) =>
    e.dataTransfer.setData("taskId", taskId.toString());
  const handleDragOver = (e: React.DragEvent) => e.preventDefault();
  const handleDrop = (e: React.DragEvent, targetDate: Date) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    if (!taskId) return;
    setTasks((prev) =>
      prev.map((t) =>
        t.id.toString() === taskId ? { ...t, date: targetDate } : t
      )
    );
  };

  const downloadData = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify({ tasks, habits, availableTags }));
    const a = document.createElement("a");
    a.href = dataStr;
    a.download = "zen_backup.json";
    a.click();
  };

  const handleLogin = () => {
    if (!loginName || loginPin.length !== 4) {
      setLoginError("Enter name & 4-digit PIN");
      return;
    }
    const savedUser = JSON.parse(localStorage.getItem("zenUser") || "null");
    if (
      !savedUser ||
      (savedUser.name === loginName && savedUser.pin === loginPin)
    ) {
      const newUser = { name: loginName, pin: loginPin };
      localStorage.setItem("zenUser", JSON.stringify(newUser));
      setUser(newUser);
    } else {
      setLoginError("Incorrect Profile");
    }
  };

  // ---------- UI ----------
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
        <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-sm text-center">
          <div className="mb-6 flex justify-center text-violet-500">
            <Icon name="lock" size={48} />
          </div>
          <h1 className="text-2xl font-bold mb-2">ZenStation</h1>
          <p className="text-gray-400 text-sm mb-6">
            Enter your Name & 4-Digit PIN to sync.
          </p>
          <input
            placeholder="Your Name"
            className="w-full p-3 bg-gray-100 rounded-xl mb-3 outline-none focus:ring-2 focus:ring-violet-200"
            value={loginName}
            onChange={(e) => setLoginName(e.target.value)}
          />
          <input
            placeholder="4-Digit PIN"
            type="password"
            maxLength={4}
            className="w-full p-3 bg-gray-100 rounded-xl mb-4 outline-none focus:ring-2 focus:ring-violet-200 text-center tracking-widest font-bold"
            value={loginPin}
            onChange={(e) => setLoginPin(e.target.value)}
          />
          {loginError && (
            <p className="text-red-500 text-xs mb-4">{loginError}</p>
          )}
          <button
            onClick={handleLogin}
            className="w-full py-3 bg-violet-600 text-white rounded-xl font-bold hover:bg-violet-700 transition-all"
          >
            Enter Zen Mode
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${darkMode ? "dark" : ""} font-sans relative`}>
      <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300">
        {/* Header */}
        <div className="bg-white dark:bg-slate-900 border-b dark:border-slate-800 p-4 sticky top-0 z-20 shadow-sm">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold tracking-tight">
                Zen<span className={activeTheme.main}>Station</span>
              </h1>
              <div className="hidden sm:flex gap-2 ml-4 px-3 py-1 bg-gray-100 dark:bg-slate-800 rounded-full">
                {Object.keys(THEMES).map((k) => (
                  <button
                    key={k}
                    onClick={() => setTheme(k)}
                    className={`w-4 h-4 rounded-full ${THEMES[k].bg} ${
                      theme === k
                        ? "ring-2 ring-offset-1 ring-gray-400 dark:ring-slate-600"
                        : ""
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 relative">
              {/* Sound Mixer */}
              <button
                onClick={() => {
                  setShowSoundMixer(!showSoundMixer);
                  resumeAudioContext().catch(() => {});
                }}
                className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 ${
                  showSoundMixer ? activeTheme.main : ""
                }`}
              >
                <Icon name="headphones" />
              </button>

              {/* Mixer Popup */}
              {showSoundMixer && (
                <div className="absolute top-12 right-0 w-80 bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 z-50">
                  <h4 className="font-bold text-sm mb-4 flex items-center gap-2 text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    🎵 Soundscapes
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <label className="text-xs w-20">Master</label>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volumes.master}
                        onChange={(e) =>
                          setVolumes({
                            ...volumes,
                            master: parseFloat(e.target.value),
                          })
                        }
                        className="flex-1"
                      />
                      <div className="w-10 text-right text-xs">
                        {Math.round((volumes.master || 0) * 100)}%
                      </div>
                    </div>
                    <hr className="dark:border-slate-700" />
                    {[
                      "lofi",
                      "rain",
                      "thunder",
                      "waves",
                      "brown",
                      "forest",
                    ].map((k) => (
                      <div key={k} className="flex items-center gap-3">
                        <div className="w-20 text-xs font-bold opacity-60 capitalize">
                          {k}
                        </div>
                        <div
                          className={`p-2 rounded-lg ${
                            volumes[k] > 0
                              ? activeTheme.light + " " + activeTheme.main
                              : "bg-gray-100 dark:bg-slate-700 text-gray-400"
                          }`}
                        >
                          <Icon
                            name={
                              k === "lofi"
                                ? "music"
                                : k === "rain"
                                ? "cloud"
                                : k === "thunder"
                                ? "bolt"
                                : k === "forest"
                                ? "cloud"
                                : k === "waves"
                                ? "water"
                                : "noise"
                            }
                            size={16}
                          />
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.01"
                          value={volumes[k]}
                          onChange={(e) => {
                            setVolumes({
                              ...volumes,
                              [k]: parseFloat(e.target.value),
                            });
                            resumeAudioContext().catch(() => {});
                          }}
                          className="flex-1 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
                        />
                        <div className="w-8 text-xs text-right">
                          {Math.round((volumes[k] || 0) * 100)}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Timer / Controls */}
              <div className="flex items-center gap-3 bg-gray-100 dark:bg-slate-800 px-3 py-1.5 rounded-full">
                {timerMode === "break" && (
                  <Icon name="coffee" size={14} className="text-orange-400" />
                )}
                <span className="font-mono text-sm font-bold w-10 text-center">{`${Math.floor(
                  timerTime / 60
                )}:${(timerTime % 60).toString().padStart(2, "0")}`}</span>
                <button
                  onClick={() => {
                    resumeAudioContext().catch(() => {});
                    setIsTimerRunning(!isTimerRunning);
                  }}
                  className={`p-1.5 rounded-full text-white ${activeTheme.bg} hover:opacity-90`}
                >
                  <Icon name={isTimerRunning ? "pause" : "play"} size={12} />
                </button>
              </div>

              <button
                onClick={() => setShowSettings(true)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full"
              >
                <Icon name="sliders" size={18} />
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full"
              >
                <Icon name={darkMode ? "sun" : "moon"} size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64 space-y-6">
            <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${activeTheme.bg}`}
              >
                {user.name[0]}
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase">
                  Welcome Back
                </p>
                <p className="font-bold">{user.name}</p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              {["list", "3day", "month"].map((v: any) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`p-3 rounded-lg flex items-center gap-3 text-sm font-medium transition-all ${
                    view === v
                      ? "bg-white dark:bg-slate-900 shadow-sm"
                      : "hover:bg-gray-100 dark:hover:bg-slate-800"
                  }`}
                >
                  <Icon
                    name={
                      v === "list"
                        ? "list"
                        : v === "3day"
                        ? "columns"
                        : "calendar"
                    }
                    className={view === v ? activeTheme.main : "text-gray-400"}
                  />{" "}
                  {v === "list"
                    ? "My List"
                    : v === "3day"
                    ? "3-Day Plan"
                    : "Month View"}
                </button>
              ))}
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-slate-800">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-sm flex items-center gap-2">
                  <Icon name="flame" className="text-orange-500" size={16} />{" "}
                  Habits
                </h3>
                <button
                  onClick={() => {
                    const t = prompt("Habit:");
                    if (t)
                      setHabits([
                        ...habits,
                        { id: Date.now(), text: t, completed: false },
                      ]);
                  }}
                  className="text-xs bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded hover:bg-gray-200"
                >
                  +
                </button>
              </div>
              <div className="space-y-2">
                {habits.map((h) => (
                  <div
                    key={h.id}
                    onClick={() =>
                      setHabits(
                        habits.map((x) =>
                          x.id === h.id ? { ...x, completed: !x.completed } : x
                        )
                      )
                    }
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center ${
                        h.completed
                          ? "bg-orange-500 border-orange-500 text-white"
                          : "border-gray-300 dark:border-slate-600"
                      }`}
                    >
                      {h.completed && <Icon name="check" size={10} />}
                    </div>
                    <span
                      className={`text-sm ${
                        h.completed ? "line-through text-gray-400" : ""
                      }`}
                    >
                      {h.text}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setHabits(habits.filter((x) => x.id !== h.id));
                      }}
                      className="ml-auto opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500"
                    >
                      <Icon name="trash" size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main (tasks) */}
          <div className="flex-1">
            <form onSubmit={handleAddTask} className="mb-6 relative group">
              <div className="relative">
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Try: 'Math HW tom at 5pm !urgent'"
                  className={`w-full p-4 pl-12 pr-32 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-transparent outline-none transition-all ${activeTheme.ring}`}
                />
                <div
                  className={`absolute left-4 top-1/2 -translate-y-1/2 ${activeTheme.main}`}
                >
                  <Icon name="plus" />
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <select
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    className="bg-gray-100 dark:bg-slate-800 text-xs font-bold py-1 px-2 rounded-lg outline-none cursor-pointer hover:bg-gray-200"
                  >
                    {availableTags.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </form>

            {view === "list" && (
              <div className="space-y-2">
                {tasks.length === 0 && (
                  <div className="text-center py-12 text-gray-400 opacity-50">
                    No tasks. Type something above!
                  </div>
                )}
                {tasks
                  .sort((a, b) => Number(a.completed) - Number(b.completed))
                  .map((task) => (
                    <div
                      key={task.id}
                      className={`group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-transparent hover:border-gray-200 dark:hover:border-slate-700 transition-all ${
                        task.completed ? "opacity-50" : ""
                      }`}
                    >
                      <button
                        onClick={() =>
                          setTasks(
                            tasks.map((t) =>
                              t.id === task.id
                                ? { ...t, completed: !t.completed }
                                : t
                            )
                          )
                        }
                        className={
                          task.completed
                            ? activeTheme.main
                            : "text-gray-300 hover:text-gray-400"
                        }
                      >
                        <Icon
                          name={task.completed ? "checkCircle" : "circle"}
                          size={22}
                        />
                      </button>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`${
                              task.completed ? "line-through" : ""
                            }`}
                          >
                            {task.text}
                          </span>
                          {task.recurring && (
                            <Icon
                              name="repeat"
                              size={14}
                              className="text-orange-400"
                            />
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider bg-gray-100 dark:bg-slate-800 opacity-70">
                            {task.tag}
                          </span>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              task.priority === "urgent"
                                ? "bg-red-100 text-red-600"
                                : "bg-gray-100 text-gray-500 dark:bg-slate-800"
                            }`}
                          >
                            {new Date(task.date).toLocaleDateString(undefined, {
                              weekday: "short",
                            })}{" "}
                            {task.time ? `@ ${task.time}` : ""}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          setTasks(tasks.filter((t) => t.id !== task.id))
                        }
                        className="opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-500"
                      >
                        <Icon name="trash" />
                      </button>
                    </div>
                  ))}
              </div>
            )}

            {(view === "3day" || view === "month") && (
              <div
                className={`grid ${
                  view === "3day" ? "grid-cols-1 md:grid-cols-3" : "grid-cols-7"
                } gap-4`}
              >
                {(view === "3day"
                  ? [0, 1, 2]
                  : Array.from(
                      { length: 35 },
                      (_, i) =>
                        i -
                        new Date(
                          currentDate.getFullYear(),
                          currentDate.getMonth(),
                          1
                        ).getDay() +
                        1
                    )
                ).map((offset: any) => {
                  const date = new Date();
                  if (view === "month")
                    date.setFullYear(
                      currentDate.getFullYear(),
                      currentDate.getMonth(),
                      offset
                    );
                  else date.setDate(date.getDate() + offset);
                  const dayTasks = tasks.filter((t) => isSameDay(t.date, date));
                  const isToday = isSameDay(date, new Date());
                  return (
                    <div
                      key={offset}
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleDrop(e, date)}
                      className={`min-h-[100px] p-3 rounded-xl border transition-colors ${
                        isToday
                          ? `${activeTheme.light} ${activeTheme.border}`
                          : "bg-white dark:bg-slate-900 border-gray-100 dark:border-slate-800"
                      }`}
                    >
                      <div
                        className={`text-xs font-bold mb-2 ${
                          isToday ? activeTheme.main : "opacity-50"
                        }`}
                      >
                        {view === "3day" && offset === 0
                          ? "Today"
                          : date.getDate()}
                      </div>
                      <div className="space-y-2">
                        {dayTasks.map((t) => (
                          <div
                            key={t.id}
                            draggable
                            onDragStart={(e) => handleDragStart(e, t.id)}
                            className="bg-gray-50 dark:bg-slate-800 p-2 rounded text-xs cursor-grab shadow-sm border border-gray-100 dark:border-slate-700"
                          >
                            {t.text}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* SETTINGS MODAL */}
        {showSettings && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl p-6 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Settings</h3>
                <button onClick={() => setShowSettings(false)}>
                  <Icon name="x" />
                </button>
              </div>
              <div className="mb-6">
                <h4 className="font-bold text-sm mb-3 opacity-60 uppercase flex items-center gap-2">
                  <Icon name="clock" size={14} /> Timer Durations (Mins)
                </h4>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="text-xs mb-1 block">Focus</label>
                    <input
                      type="number"
                      value={workDuration}
                      onChange={(e) => {
                        setWorkDuration(parseInt(e.target.value));
                        setTimerTime(parseInt(e.target.value) * 60);
                      }}
                      className="w-full bg-gray-100 dark:bg-slate-800 p-2 rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-xs mb-1 block">Break</label>
                    <input
                      type="number"
                      value={breakDuration}
                      onChange={(e) =>
                        setBreakDuration(parseInt(e.target.value))
                      }
                      className="w-full bg-gray-100 dark:bg-slate-800 p-2 rounded-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="font-bold text-sm mb-2 opacity-60 uppercase">
                  Manage Tags
                </h4>
                <div className="flex flex-wrap gap-2 mb-2">
                  {availableTags.map((t) => (
                    <span
                      key={t}
                      className="bg-gray-100 dark:bg-slate-800 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                    >
                      {t}{" "}
                      <button
                        onClick={() =>
                          setAvailableTags(availableTags.filter((x) => x !== t))
                        }
                        className="text-red-400 hover:text-red-600"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    id="newTag"
                    placeholder="New Tag..."
                    className="flex-1 bg-gray-50 dark:bg-slate-800 p-2 rounded-lg text-sm outline-none border border-transparent focus:border-violet-500"
                  />
                  <button
                    onClick={() => {
                      const val = (
                        document.getElementById("newTag") as HTMLInputElement
                      ).value;
                      if (val) {
                        setAvailableTags([...availableTags, val]);
                        (
                          document.getElementById("newTag") as HTMLInputElement
                        ).value = "";
                      }
                    }}
                    className={`px-4 py-2 rounded-lg text-white text-sm ${activeTheme.bg}`}
                  >
                    Add
                  </button>
                </div>
              </div>
              <div className="pt-6 border-t dark:border-slate-800 flex justify-between items-center">
                <button
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                  }}
                  className="text-xs text-red-400 hover:text-red-600"
                >
                  Log Out / Reset
                </button>
                <button
                  onClick={downloadData}
                  className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-gray-900 dark:text-gray-300"
                >
                  <Icon name="download" /> Backup Data
                </button>
              </div>
            </div>
          </div>
        )}

        {/* HELP MODAL */}
        {showHelp && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold mb-4">Zen Guide 🧘</h2>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 mb-6 list-disc pl-5">
                <li>
                  <b>Profile:</b> Data saves to your Name/PIN.
                </li>
                <li>
                  <b>Smart Typing:</b> &quot;Math HW tom at 5pm !urgent&quot;
                  auto-sets everything.
                </li>
                <li>
                  <b>Timer:</b> Click Settings to change Focus (25m) and Break
                  (5m) durations.
                </li>
                <li>
                  <b>Soundscapes:</b> Click 🎧 to mix Rain/Forest sounds.
                </li>
              </ul>
              <button
                onClick={() => setShowHelp(false)}
                className={`w-full py-3 rounded-xl text-white font-bold ${activeTheme.bg}`}
              >
                Got it
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => setShowHelp(true)}
          className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg text-white hover:scale-105 transition-transform ${activeTheme.bg}`}
        >
          <Icon name="help" size={24} />
        </button>
      </div>
    </div>
  );
}
