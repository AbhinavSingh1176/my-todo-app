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
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </>
    ),
    list: (
      <>
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </>
    ),
    columns: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </>
    ),
    moon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />,
    play: <polygon points="5 3 19 12 5 21 5 3" />,
    pause: (
      <>
        <rect x="6" y="4" width="4" height="16" />
        <rect x="14" y="4" width="4" height="16" />
      </>
    ),
    flame: (
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.6-3.3.3.5.9 1.5 2.9 2.8z" />
    ),
    checkCircle: (
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3" />
    ),
    repeat: (
      <>
        <path d="M17 1l4 4-4 4" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <path d="M7 23l-4-4 4-4" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </>
    ),
    sliders: (
      <>
        <line x1="4" y1="21" x2="4" y2="14" />
        <line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" />
        <line x1="20" y1="12" x2="20" y2="3" />
        <line x1="1" y1="14" x2="7" y2="14" />
        <line x1="9" y1="8" x2="15" y2="8" />
        <line x1="17" y1="16" x2="23" y2="16" />
      </>
    ),
    music: (
      <>
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </>
    ),
    help: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </>
    ),
    x: (
      <>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </>
    ),
    download: (
      <>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </>
    ),
    headphones: (
      <>
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </>
    ),
    cloud: <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />,
    cloudRain: (
      <>
        <line x1="16" y1="13" x2="16" y2="21" />
        <line x1="8" y1="13" x2="8" y2="21" />
        <line x1="12" y1="15" x2="12" y2="23" />
        <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
      </>
    ),
    zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
    wind: (
      <>
        <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
      </>
    ),
    waves: (
      <>
        <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      </>
    ),
    coffee: (
      <>
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
    lock: (
      <>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
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
      {icons[name]}
    </svg>
  );
};

// --- LOFI PLAYLIST (YouTube IDs) ---
// Build a larger playlist by using many video IDs; the embed will loop through them.
// If you want different tracks, replace/add video IDs to the array below.
// Note: YouTube embed volume is not reliable across browsers; the lofi iframe is used for variety/looping only.
const LOFI_VIDEO_IDS = [
  "jfKfPfyJRdk", // lofi hip hop radio - beats to relax/study to (example)
  "5qap5aO4i9A", // lofi study beats
  "DWcJFNfaw9c",
  "V1Pl8CzNzCw",
  "bQ5n3CxG3w4",
  "7NOSDKb0HlU",
  "xGmJdS2Zkho",
  "jywT8b2zc54",
  "hHW1oY26kxQ",
  "kU5cXx3TGcM",
  // add more IDs as desired...
];

// --- HELPER: create smooth looped buffer ---
// This fills a buffer and applies short fade at start/end to avoid clicks when looping.
const createSmoothBuffer = (
  audioContext: AudioContext,
  lengthSeconds: number,
  fillFn: (data: Float32Array, sampleRate: number) => void
) => {
  const sampleRate = audioContext.sampleRate;
  const frameCount = Math.max(1, Math.floor(lengthSeconds * sampleRate));
  const buffer = audioContext.createBuffer(1, frameCount, sampleRate);
  const data = buffer.getChannelData(0);
  fillFn(data, sampleRate);

  // apply crossfade (fade-in/out) to avoid loop clicks
  const fadeTime = Math.min(0.05, lengthSeconds * 0.02); // 50ms or 2% of buffer
  const fadeFrames = Math.floor(fadeTime * sampleRate);
  for (let i = 0; i < fadeFrames; i++) {
    const fadeIn = i / fadeFrames;
    const fadeOut = 1 - fadeIn;
    data[i] *= fadeIn;
    data[frameCount - 1 - i] *= fadeOut;
  }
  return buffer;
};

// --- AMBIENT SOUND GENERATORS (improved) ---
const generateBrownNoiseBuffer = (
  audioContext: AudioContext,
  lengthSeconds = 12
) => {
  return createSmoothBuffer(audioContext, lengthSeconds, (data, sr) => {
    let lastOut = 0;
    for (let i = 0; i < data.length; i++) {
      const white = Math.random() * 2 - 1;
      lastOut = (lastOut + 0.02 * white) / 1.02;
      data[i] = lastOut * 0.5; // scale down
    }
    // apply gentle lowpass in buffer domain by simple smoothing
    for (let i = 2; i < data.length; i++) {
      data[i] = (data[i] + data[i - 1] * 0.75 + data[i - 2] * 0.5) / 2.25;
    }
  });
};

const generateRainBuffer = (audioContext: AudioContext, lengthSeconds = 10) => {
  return createSmoothBuffer(audioContext, lengthSeconds, (data, sr) => {
    // Create many short random droplets with small decays
    for (let i = 0; i < data.length; i++) data[i] = 0;
    const dropletCount = Math.floor(lengthSeconds * 35); // avg droplets per second
    for (let d = 0; d < dropletCount; d++) {
      const pos = Math.floor(Math.random() * data.length);
      const droplen = Math.floor(sr * (0.03 + Math.random() * 0.12)); // 30-150 ms
      for (let j = 0; j < droplen && pos + j < data.length; j++) {
        const env = Math.exp(-j / (sr * 0.03 + Math.random() * 0.06));
        const noise = (Math.random() * 2 - 1) * 0.6 * env;
        // high-frequency emphasis for rain droplets
        data[pos + j] += noise * (0.6 + Math.random() * 0.8);
      }
    }
    // mild smoothing so droplets sit naturally
    for (let i = 1; i < data.length; i++)
      data[i] = data[i] * 0.6 + data[i - 1] * 0.4;
  });
};

const generateWavesBuffer = (
  audioContext: AudioContext,
  lengthSeconds = 16
) => {
  return createSmoothBuffer(audioContext, lengthSeconds, (data, sr) => {
    // Low-frequency sine "swell" modulated with surf noise bursts
    const baseFreq = 0.08 + Math.random() * 0.06; // 0.08 - 0.14Hz (swell)
    let phase = Math.random() * Math.PI * 2;
    for (let i = 0; i < data.length; i++) {
      const t = i / sr;
      // swell envelope between 0.6 - 1.0
      const swell =
        0.6 + 0.4 * (0.5 + 0.5 * Math.sin(2 * Math.PI * baseFreq * t + phase));
      // surf high-frequency noise, amplitude follows swell
      const surf = (Math.random() * 2 - 1) * 0.25 * swell;
      // low rumble component
      const rumble =
        Math.sin(2 * Math.PI * 80 * t) * 0.02 * swell +
        Math.sin(2 * Math.PI * 40 * t) * 0.01;
      data[i] = surf + rumble;
    }
    // light smoothing
    for (let i = 2; i < data.length; i++)
      data[i] = (data[i] + data[i - 1] * 0.6 + data[i - 2] * 0.3) / 1.9;
  });
};

const generateThunderBuffer = (
  audioContext: AudioContext,
  lengthSeconds = 20
) => {
  return createSmoothBuffer(audioContext, lengthSeconds, (data, sr) => {
    for (let i = 0; i < data.length; i++) data[i] = 0;
    // place 1-3 thunder events randomly
    const events = 1 + Math.floor(Math.random() * 3);
    for (let e = 0; e < events; e++) {
      const start = Math.floor(Math.random() * (data.length * 0.8));
      const dur = Math.floor(sr * (1.0 + Math.random() * 2.5)); // 1-3.5s
      for (let i = 0; i < dur && start + i < data.length; i++) {
        const env = Math.exp(-i / (sr * (0.6 + Math.random() * 1.5)));
        // low-frequency rumble with some noisy highs
        const r = (Math.random() * 2 - 1) * 0.8 * env;
        const high =
          (Math.random() * 2 - 1) * 0.15 * Math.exp(-i / (sr * 0.02));
        data[start + i] += r * 0.8 + high;
      }
    }
    // smooth overall
    for (let i = 2; i < data.length; i++)
      data[i] = (data[i] + 0.6 * data[i - 1] + 0.3 * data[i - 2]) / 1.9;
  });
};

const generateForestBuffer = (
  audioContext: AudioContext,
  lengthSeconds = 16
) => {
  return createSmoothBuffer(audioContext, lengthSeconds, (data, sr) => {
    // base gentle filtered noise (wind in leaves)
    for (let i = 0; i < data.length; i++) {
      const white = (Math.random() * 2 - 1) * 0.25;
      // lowpass-ish by averaging neighbors later
      data[i] = white;
    }
    // bird chirps: small harmonic sweeps placed randomly
    const chirps = Math.floor(lengthSeconds * 1.8); // ~1-2 chirps per sec
    for (let c = 0; c < chirps; c++) {
      const pos = Math.floor(Math.random() * data.length);
      const chirpLen = Math.floor(sr * (0.05 + Math.random() * 0.25)); // 50-300ms
      const startFreq = 800 + Math.random() * 1500;
      const endFreq = startFreq + (Math.random() * 1000 - 300);
      for (let i = 0; i < chirpLen && pos + i < data.length; i++) {
        const tt = i / chirpLen;
        const freq = startFreq + (endFreq - startFreq) * tt;
        const env = Math.sin(Math.PI * tt) * Math.exp(-tt * 2);
        data[pos + i] += Math.sin(2 * Math.PI * freq * (i / sr)) * 0.6 * env;
      }
    }
    // smooth/filter the buffer
    for (let i = 2; i < data.length; i++)
      data[i] = data[i] * 0.7 + data[i - 1] * 0.3;
  });
};

// --- CONFIG ---
const THEMES: any = {
  violet: {
    main: "text-violet-600",
    bg: "bg-violet-500",
    border: "border-violet-200",
    light: "bg-violet-50",
    ring: "focus:border-violet-500",
  },
  blue: {
    main: "text-blue-600",
    bg: "bg-blue-500",
    border: "border-blue-200",
    light: "bg-blue-50",
    ring: "focus:border-blue-500",
  },
  rose: {
    main: "text-rose-600",
    bg: "bg-rose-500",
    border: "border-rose-200",
    light: "bg-rose-50",
    ring: "focus:border-rose-500",
  },
  emerald: {
    main: "text-emerald-600",
    bg: "bg-emerald-500",
    border: "border-emerald-200",
    light: "bg-emerald-50",
    ring: "focus:border-emerald-500",
  },
};

const ALARM_SOUND =
  "https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3";

export default function App() {
  // --- USER ACCOUNT STATE ---
  const [user, setUser] = useState<any>(() =>
    JSON.parse(localStorage.getItem("zenUser") || "null")
  );

  // --- APP STATE ---
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

  // Preferences
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
          lofi: 0.3,
          rain: 0,
          thunder: 0,
          waves: 0,
          brown: 0,
          forest: 0,
        })
    )
  );

  const [view, setView] = useState<"list" | "3day" | "month">("list");
  const [currentDate, setCurrentDate] = useState(new Date());

  // --- TIMER STATE ---
  const [timerMode, setTimerMode] = useState<"focus" | "break">("focus");
  const [workDuration, setWorkDuration] = useState(() =>
    parseInt(localStorage.getItem("zenWorkDur") || "25")
  );
  const [breakDuration, setBreakDuration] = useState(() =>
    parseInt(localStorage.getItem("zenBreakDur") || "5")
  );
  const [timerTime, setTimerTime] = useState(workDuration * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // UI States
  const [showSoundMixer, setShowSoundMixer] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedTag, setSelectedTag] = useState("Life");
  const [showSettings, setShowSettings] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  // Login Inputs
  const [loginName, setLoginName] = useState("");
  const [loginPin, setLoginPin] = useState("");
  const [loginError, setLoginError] = useState("");

  // --- ENHANCED SOUND ENGINE WITH WEB AUDIO API ---
  const audioContextRef = useRef<AudioContext | null>(null);
  // Each ambient channel will have its own gain node
  const gainNodesRef = useRef<{ [key: string]: GainNode }>({});
  // Active BufferSource nodes (we restart them when needed)
  const sourceNodesRef = useRef<{
    [key: string]: AudioBufferSourceNode | null;
  }>({});
  const lofiAudioRef = useRef<HTMLIFrameElement | null>(null);

  // persist a map of buffers so we don't regenerate every time
  const buffersRef = useRef<{ [key: string]: AudioBuffer | null }>({});

  // Init AudioContext and gains once
  useEffect(() => {
    const AudioContext =
      window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();
    audioContextRef.current = ctx;

    // create primary destination gain to allow global control if needed
    ["rain", "thunder", "waves", "brown", "forest"].forEach((key) => {
      const gainNode = ctx.createGain();
      gainNode.gain.value = 0;
      gainNode.connect(ctx.destination);
      gainNodesRef.current[key] = gainNode;
      sourceNodesRef.current[key] = null;
      buffersRef.current[key] = null;
    });

    return () => {
      // stop all sources and close context on unmount
      Object.values(sourceNodesRef.current).forEach((s) => {
        try {
          s?.stop();
        } catch {}
      });
      ctx.close().catch(() => {});
      audioContextRef.current = null;
    };
  }, []);

  // Utility: ensure AudioContext is running (required by many browsers)
  const resumeAudioContext = async () => {
    try {
      const ctx = audioContextRef.current;
      if (ctx && ctx.state === "suspended") {
        await ctx.resume();
      }
    } catch (e) {
      // ignore; will try again on interaction
    }
  };

  // Start or stop ambient sources according to volumes
  useEffect(() => {
    const ctx = audioContextRef.current;
    if (!ctx) return;

    // helper to start a channel: ensure a buffer exists for channel, create source, connect -> gain and loop
    const startChannel = async (key: string) => {
      if (!ctx) return;
      await resumeAudioContext();

      // if source already running, just set gain
      if (sourceNodesRef.current[key]) {
        return;
      }

      // generate buffer if missing
      let buffer = buffersRef.current[key];
      if (!buffer) {
        switch (key) {
          case "rain":
            buffer = generateRainBuffer(ctx, 12);
            break;
          case "thunder":
            buffer = generateThunderBuffer(ctx, 20);
            break;
          case "waves":
            buffer = generateWavesBuffer(ctx, 16);
            break;
          case "brown":
            buffer = generateBrownNoiseBuffer(ctx, 14);
            break;
          case "forest":
            buffer = generateForestBuffer(ctx, 16);
            break;
          default:
            buffer = generateBrownNoiseBuffer(ctx, 10);
        }
        buffersRef.current[key] = buffer;
      }

      // create source
      const src = ctx.createBufferSource();
      src.buffer = buffer!;
      src.loop = true;

      // apply slight filtering per type for character
      let nodeOut: AudioNode = src;
      if (key === "brown") {
        const lp = ctx.createBiquadFilter();
        lp.type = "lowpass";
        lp.frequency.value = 900;
        lp.Q.value = 0.7;
        src.connect(lp);
        nodeOut = lp;
      } else if (key === "waves") {
        const bp = ctx.createBiquadFilter();
        bp.type = "lowpass";
        bp.frequency.value = 6000;
        bp.Q.value = 0.7;
        src.connect(bp);
        nodeOut = bp;
      } else if (key === "forest") {
        const hp = ctx.createBiquadFilter();
        hp.type = "highpass";
        hp.frequency.value = 200; // cut lows a bit
        src.connect(hp);
        nodeOut = hp;
      } else if (key === "thunder") {
        const lpThunder = ctx.createBiquadFilter();
        lpThunder.type = "lowpass";
        lpThunder.frequency.value = 1000;
        lpThunder.Q.value = 0.8;
        src.connect(lpThunder);
        nodeOut = lpThunder;
      } else {
        // default connect directly
      }

      nodeOut.connect(gainNodesRef.current[key]);

      try {
        src.start();
        sourceNodesRef.current[key] = src;
      } catch (err) {
        // might have been started/stopped already; ignore
      }
    };

    const stopChannel = (key: string) => {
      const src = sourceNodesRef.current[key];
      if (src) {
        try {
          src.stop();
        } catch (e) {}
        sourceNodesRef.current[key] = null;
      }
    };

    // update gains and start/stop accordingly
    ["rain", "thunder", "waves", "brown", "forest"].forEach((key) => {
      const vol = volumes[key] || 0;
      const gainNode = gainNodesRef.current[key];
      if (!gainNode) return;
      // smooth ramp to target to avoid pops
      try {
        gainNode.gain.cancelScheduledValues(0);
        gainNode.gain.setValueAtTime(gainNode.gain.value, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(vol, ctx.currentTime + 0.25);
      } catch (e) {
        gainNode.gain.value = vol;
      }

      if (vol > 0.001) {
        startChannel(key).catch(() => {});
      } else {
        // schedule stop after fade completes
        setTimeout(() => {
          // if volume still zero, stop sources
          const stillVol = gainNodesRef.current[key]?.gain.value || 0;
          if (stillVol < 0.001) stopChannel(key);
        }, 350);
      }
    });
  }, [volumes]);

  // --- PERSISTENCE ---
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

  // --- LOGIC: TIMER ---
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerTime > 0) {
      interval = setInterval(() => setTimerTime((t) => t - 1), 1000);
    } else if (timerTime === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      const audio = new Audio(ALARM_SOUND);
      audio.volume = 0.5;
      audio.play().catch(() => {});
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

  // --- LOGIC: HELPERS ---
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
      date.setDate(date.getDate() + 1);
      text = text.replace(/ tom /gi, " ");
    } else if (lower.endsWith(" tom")) {
      date.setDate(date.getDate() + 1);
      text = text.replace(/ tom$/gi, " ");
    }
    if (lower.includes(" tod ")) {
      text = text.replace(/ tod /gi, " ");
    } else if (lower.endsWith(" tod")) {
      text = text.replace(/ tod$/gi, " ");
    }

    ["mon", "tue", "wed", "thu", "fri", "sat", "sun"].forEach((d) => {
      const regex = new RegExp(`\\b${d}\\b`, "gi");
      if (regex.test(text)) {
        const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
        const target = days.indexOf(d.substring(0, 3));
        const diff = (target + 7 - new Date().getDay()) % 7;
        const nextDate = new Date();
        nextDate.setDate(new Date().getDate() + (diff === 0 ? 7 : diff));
        date = nextDate;
        text = text.replace(regex, " ");
      }
    });

    if (lower.includes("!urgent")) {
      priority = "urgent";
      tag = "Urgent";
      text = text.replace(/!urgent/gi, "");
    }
    if (lower.includes("!study")) {
      tag = "Study";
      text = text.replace(/!study/gi, "");
    }
    if (lower.includes("!work")) {
      tag = "Work";
      text = text.replace(/!work/gi, "");
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

  const activeTheme = THEMES[theme];
  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  const downloadData = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify({ tasks, habits, availableTags }));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "zen_backup.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
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

  // Build YouTube playlist src from IDs for more variety/infinite loop feel
  const lofiSrc = `https://www.youtube.com/embed/${
    LOFI_VIDEO_IDS[0]
  }?autoplay=1&controls=0&loop=1&playlist=${LOFI_VIDEO_IDS.join(
    ","
  )}&modestbranding=1&rel=0&iv_load_policy=3`;

  return (
    <div className={`${darkMode ? "dark" : ""} font-sans relative`}>
      <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300">
        {/* Lofi Player (Hidden YouTube iframe) */}
        {volumes.lofi > 0 && (
          <iframe
            ref={lofiAudioRef}
            title="lofi-player"
            src={lofiSrc}
            allow="autoplay"
            style={{ display: "none" }}
          />
        )}

        {/* --- HEADER --- */}
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
                  resumeAudioContext();
                }}
                className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 ${
                  showSoundMixer ? activeTheme.main : ""
                }`}
              >
                <Icon name="headphones" />
              </button>

              {showSoundMixer && (
                <div className="absolute top-12 right-0 w-96 bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 z-50">
                  <h4 className="font-bold text-sm mb-4 flex items-center gap-2 text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    🎵 Soundscapes
                  </h4>
                  <div className="space-y-4">
                    {/* Lofi Music */}
                    <div className="flex items-center gap-3">
                      <div className="w-28 text-xs font-bold opacity-60">
                        Lofi Music
                      </div>
                      <div
                        className={`p-2 rounded-lg ${
                          volumes["lofi"] > 0
                            ? activeTheme.light + " " + activeTheme.main
                            : "bg-gray-100 dark:bg-slate-700 text-gray-400"
                        }`}
                      >
                        <Icon name="music" size={16} />
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={volumes["lofi"]}
                        onChange={(e) => {
                          setVolumes({
                            ...volumes,
                            lofi: parseFloat(e.target.value),
                          });
                          resumeAudioContext();
                        }}
                        className="flex-1 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
                      />
                      <span className="text-xs w-8 text-right opacity-60">
                        {Math.round(volumes["lofi"] * 100)}%
                      </span>
                    </div>
                    <hr className="dark:border-slate-700" />

                    {/* Rain */}
                    <div className="flex items-center gap-3">
                      <div className="w-28 text-xs font-bold opacity-60">
                        Rain
                      </div>
                      <div
                        className={`p-2 rounded-lg ${
                          volumes["rain"] > 0
                            ? activeTheme.light + " " + activeTheme.main
                            : "bg-gray-100 dark:bg-slate-700 text-gray-400"
                        }`}
                      >
                        <Icon name="cloudRain" size={16} />
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={volumes["rain"]}
                        onChange={(e) => {
                          setVolumes({
                            ...volumes,
                            rain: parseFloat(e.target.value),
                          });
                          resumeAudioContext();
                        }}
                        className="flex-1 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
                      />
                      <span className="text-xs w-8 text-right opacity-60">
                        {Math.round(volumes["rain"] * 100)}%
                      </span>
                    </div>

                    {/* Thunder */}
                    <div className="flex items-center gap-3">
                      <div className="w-28 text-xs font-bold opacity-60">
                        Thunder
                      </div>
                      <div
                        className={`p-2 rounded-lg ${
                          volumes["thunder"] > 0
                            ? activeTheme.light + " " + activeTheme.main
                            : "bg-gray-100 dark:bg-slate-700 text-gray-400"
                        }`}
                      >
                        <Icon name="zap" size={16} />
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={volumes["thunder"]}
                        onChange={(e) => {
                          setVolumes({
                            ...volumes,
                            thunder: parseFloat(e.target.value),
                          });
                          resumeAudioContext();
                        }}
                        className="flex-1 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
                      />
                      <span className="text-xs w-8 text-right opacity-60">
                        {Math.round(volumes["thunder"] * 100)}%
                      </span>
                    </div>

                    {/* Waves */}
                    <div className="flex items-center gap-3">
                      <div className="w-28 text-xs font-bold opacity-60">
                        Ocean
                      </div>
                      <div
                        className={`p-2 rounded-lg ${
                          volumes["waves"] > 0
                            ? activeTheme.light + " " + activeTheme.main
                            : "bg-gray-100 dark:bg-slate-700 text-gray-400"
                        }`}
                      >
                        <Icon name="waves" size={16} />
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={volumes["waves"]}
                        onChange={(e) => {
                          setVolumes({
                            ...volumes,
                            waves: parseFloat(e.target.value),
                          });
                          resumeAudioContext();
                        }}
                        className="flex-1 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
                      />
                      <span className="text-xs w-8 text-right opacity-60">
                        {Math.round(volumes["waves"] * 100)}%
                      </span>
                    </div>

                    {/* Brown Noise */}
                    <div className="flex items-center gap-3">
                      <div className="w-28 text-xs font-bold opacity-60">
                        Brown Noise
                      </div>
                      <div
                        className={`p-2 rounded-lg ${
                          volumes["brown"] > 0
                            ? activeTheme.light + " " + activeTheme.main
                            : "bg-gray-100 dark:bg-slate-700 text-gray-400"
                        }`}
                      >
                        <Icon name="wind" size={16} />
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={volumes["brown"]}
                        onChange={(e) => {
                          setVolumes({
                            ...volumes,
                            brown: parseFloat(e.target.value),
                          });
                          resumeAudioContext();
                        }}
                        className="flex-1 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
                      />
                      <span className="text-xs w-8 text-right opacity-60">
                        {Math.round(volumes["brown"] * 100)}%
                      </span>
                    </div>

                    {/* Forest */}
                    <div className="flex items-center gap-3">
                      <div className="w-28 text-xs font-bold opacity-60">
                        Forest
                      </div>
                      <div
                        className={`p-2 rounded-lg ${
                          volumes["forest"] > 0
                            ? activeTheme.light + " " + activeTheme.main
                            : "bg-gray-100 dark:bg-slate-700 text-gray-400"
                        }`}
                      >
                        <Icon name="cloud" size={16} />
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={volumes["forest"]}
                        onChange={(e) => {
                          setVolumes({
                            ...volumes,
                            forest: parseFloat(e.target.value),
                          });
                          resumeAudioContext();
                        }}
                        className="flex-1 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
                      />
                      <span className="text-xs w-8 text-right opacity-60">
                        {Math.round(volumes["forest"] * 100)}%
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-4 italic">
                    💡 Improved procedural generators: smoother loop, better
                    character for each sound. Use small volumes and mix for best
                    results.
                  </p>
                </div>
              )}

              {/* Timer Display */}
              <div className="flex items-center gap-3 bg-gray-100 dark:bg-slate-800 px-3 py-1.5 rounded-full">
                {timerMode === "break" && (
                  <Icon name="coffee" size={14} className="text-orange-400" />
                )}
                <span className="font-mono text-sm font-bold w-10 text-center">
                  {formatTime(timerTime)}
                </span>
                <button
                  onClick={() => {
                    resumeAudioContext();
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
          {/* SIDEBAR */}
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

          {/* MAIN AREA */}
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
                ).map((offset) => {
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
                  <b>Smart Typing:</b> "Math HW tom at 5pm !urgent" auto-sets
                  everything.
                </li>
                <li>
                  <b>Timer:</b> Click Settings to change Focus (25m) and Break
                  (5m) durations.
                </li>
                <li>
                  <b>Soundscapes:</b> Click 🎧 to mix Lofi music with ambient
                  sounds like Rain, Thunder, Ocean waves, Brown Noise and Forest
                  ambience.
                </li>
                <li>
                  <b>Sounds:</b> All ambient sounds are now generated by
                  improved procedural buffers (smoother loops, filtered to match
                  character).
                </li>
                <li>
                  <b>Note:</b> Modern browsers require a user interaction to
                  allow audio playback. Adjust a slider or press the play button
                  to activate audio context.
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
          onClick={() => {
            setShowHelp(true);
          }}
          className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg text-white hover:scale-105 transition-transform ${activeTheme.bg}`}
        >
          <Icon name="help" size={24} />
        </button>
      </div>
    </div>
  );
}
