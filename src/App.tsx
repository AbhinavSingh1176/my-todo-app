import React, { useState, useEffect, useRef } from "react";

// --- ICONS (FIXED: All multi-path icons wrapped in fragments) ---
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
    left: <polyline points="15 18 9 12 15 6" />,
    right: <polyline points="9 18 15 12 9 6" />,
    play: <polygon points="5 3 19 12 5 21 5 3" />,
    pause: (
      <>
        <rect x="6" y="4" width="4" height="16" />
        <rect x="14" y="4" width="4" height="16" />
      </>
    ),
    grip: (
      <>
        <circle cx="9" cy="12" r="1" />
        <circle cx="9" cy="5" r="1" />
        <circle cx="9" cy="19" r="1" />
        <circle cx="15" cy="12" r="1" />
        <circle cx="15" cy="5" r="1" />
        <circle cx="15" cy="19" r="1" />
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

// --- AUDIO SOURCES ---
const AUDIO_TRACKS = {
  lofi: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3",
  rain: "https://cdn.pixabay.com/download/audio/2022/04/27/audio_65a6e612f0.mp3?filename=soft-rain-ambient-111154.mp3",
  forest:
    "https://cdn.pixabay.com/download/audio/2021/09/06/audio_03d6d52583.mp3?filename=forest-lullaby-110624.mp3",
  waves:
    "https://cdn.pixabay.com/download/audio/2021/08/09/audio_00832bb57a.mp3?filename=ocean-waves-11167.mp3",
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

// --- AUDIO PLAYER COMPONENT ---
const AudioPlayer = ({
  isPlaying,
  volumes,
}: {
  isPlaying: boolean;
  volumes: any;
}) => {
  const refs = useRef<{ [key: string]: HTMLAudioElement }>({});

  useEffect(() => {
    Object.keys(AUDIO_TRACKS).forEach((key) => {
      const el = refs.current[key];
      if (el) {
        if (isPlaying) {
          el.volume = volumes[key] || 0;
          if (volumes[key] > 0 && el.paused) el.play().catch(() => {});
          if (volumes[key] === 0) el.pause();
        } else {
          el.pause();
        }
      }
    });
  }, [isPlaying, volumes]);

  return (
    <>
      {Object.entries(AUDIO_TRACKS).map(([key, url]) => (
        <audio
          key={key}
          ref={(el) => {
            if (el) refs.current[key] = el;
          }}
          src={url}
          loop
        />
      ))}
    </>
  );
};

export default function App() {
  // --- STATE ---
  const [tasks, setTasks] = useState<any[]>(() =>
    JSON.parse(localStorage.getItem("zenTasks_v4") || "[]")
  );
  const [habits, setHabits] = useState<any[]>(() =>
    JSON.parse(
      localStorage.getItem("zenHabits_v4") ||
        '[{"id":1,"text":"Drink Water","completed":false}]'
    )
  );
  const [availableTags, setAvailableTags] = useState<string[]>(() =>
    JSON.parse(
      localStorage.getItem("zenTags_v4") ||
        '["Work", "Study", "Life", "Urgent"]'
    )
  );

  const [view, setView] = useState<"list" | "3day" | "month">("list");
  const [theme, setTheme] = useState("violet");
  const [darkMode, setDarkMode] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  // Audio & Timer
  const [timerTime, setTimerTime] = useState(25 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [showSoundMixer, setShowSoundMixer] = useState(false);
  const [volumes, setVolumes] = useState<any>({
    lofi: 0.5,
    rain: 0,
    forest: 0,
    waves: 0,
  });

  // Inputs & Modals
  const [inputValue, setInputValue] = useState("");
  const [selectedTag, setSelectedTag] = useState("Life");
  const [showSettings, setShowSettings] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  // --- PERSISTENCE ---
  useEffect(() => {
    localStorage.setItem("zenTasks_v4", JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    localStorage.setItem("zenHabits_v4", JSON.stringify(habits));
  }, [habits]);
  useEffect(() => {
    localStorage.setItem("zenTags_v4", JSON.stringify(availableTags));
  }, [availableTags]);

  // --- LOGIC: DATE & TIME HELPERS ---
  const isSameDay = (d1: Date, d2: Date) => {
    const a = new Date(d1);
    const b = new Date(d2);
    return (
      a.getDate() === b.getDate() &&
      a.getMonth() === b.getMonth() &&
      a.getFullYear() === b.getFullYear()
    );
  };

  const getDayDate = (dayName: string) => {
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const now = new Date();
    const target = days.indexOf(dayName.toLowerCase().substring(0, 3));
    if (target === -1) return null;
    const diff = (target + 7 - now.getDay()) % 7;
    const d = new Date();
    d.setDate(now.getDate() + (diff === 0 ? 7 : diff));
    return d;
  };

  // --- LOGIC: DRAG AND DROP ---
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

  // --- LOGIC: ADD TASK (Smart Parsing) ---
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

    // 1. Time Parsing (e.g., "at 5pm", "at 14:00")
    const timeMatch = lower.match(/\bat\s+(\d{1,2}(:\d{2})?(am|pm)?)/i);
    if (timeMatch) {
      time = timeMatch[1];
      text = text.replace(timeMatch[0], ""); // Remove time string from text
    }

    // 2. Date Parsing
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
        const nextDate = getDayDate(d);
        if (nextDate) date = nextDate;
        text = text.replace(regex, " ");
      }
    });

    // 3. Flags Parsing
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

    // Clean up extra spaces
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

  // --- LOGIC: TIMER ---
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerTime > 0) {
      interval = setInterval(() => setTimerTime((t) => t - 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerTime]);

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

  return (
    <div className={`${darkMode ? "dark" : ""} font-sans relative`}>
      <AudioPlayer isPlaying={isTimerRunning} volumes={volumes} />

      <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300">
        {/* --- HEADER --- */}
        <div className="bg-white dark:bg-slate-900 border-b dark:border-slate-800 p-4 sticky top-0 z-20 shadow-sm">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold tracking-tight">
                Zen<span className={activeTheme.main}>Station</span>
              </h1>

              {/* Color Picker */}
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
              {/* Sound Mixer Toggle */}
              <button
                onClick={() => setShowSoundMixer(!showSoundMixer)}
                className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 ${
                  showSoundMixer ? activeTheme.main : ""
                }`}
              >
                <Icon name="sliders" />
              </button>

              {/* Sound Mixer Popup */}
              {showSoundMixer && (
                <div className="absolute top-12 right-0 w-64 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-slate-700 z-50">
                  <h4 className="font-bold text-sm mb-3 flex items-center gap-2">
                    <Icon name="music" size={14} /> Soundscapes
                  </h4>
                  <div className="space-y-3">
                    {Object.keys(volumes).map((k) => (
                      <div key={k} className="flex items-center gap-2">
                        <span className="text-xs uppercase w-12 font-bold opacity-60">
                          {k}
                        </span>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.1"
                          value={volumes[k]}
                          onChange={(e) =>
                            setVolumes({
                              ...volumes,
                              [k]: parseFloat(e.target.value),
                            })
                          }
                          className="flex-1 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Timer */}
              <div className="flex items-center gap-3 bg-gray-100 dark:bg-slate-800 px-3 py-1.5 rounded-full">
                <span className="font-mono text-sm font-bold w-10 text-center">
                  {formatTime(timerTime)}
                </span>
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className={`p-1.5 rounded-full text-white ${activeTheme.bg} hover:opacity-90`}
                >
                  <Icon name={isTimerRunning ? "pause" : "play"} size={12} />
                </button>
              </div>

              {/* Settings Toggle */}
              <button
                onClick={() => setShowSettings(true)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full"
              >
                <Icon name="sliders" size={18} />
              </button>

              {/* Dark Mode */}
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
          {/* --- SIDEBAR --- */}
          <div className="w-full lg:w-64 space-y-6">
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
                  />
                  {v === "list"
                    ? "My List"
                    : v === "3day"
                    ? "3-Day Plan"
                    : "Month View"}
                </button>
              ))}
            </div>

            {/* Habits */}
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

          {/* --- MAIN AREA --- */}
          <div className="flex-1">
            {/* Input */}
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

            {/* LIST VIEW */}
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

            {/* 3-DAY & MONTH VIEWS (reused structure) */}
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

              <div className="pt-6 border-t dark:border-slate-800">
                <h4 className="font-bold text-sm mb-2 opacity-60 uppercase">
                  Data
                </h4>
                <p className="text-xs text-gray-500 mb-4">
                  Your tasks are saved automatically to this browser. To move
                  them to another computer, download a backup.
                </p>
                <button
                  onClick={downloadData}
                  className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-gray-900 dark:text-gray-300"
                >
                  <Icon name="download" /> Download Backup JSON
                </button>
              </div>
            </div>
          </div>
        )}

        {/* HELP MODAL */}
        {showHelp && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold mb-4">How to be Zen 🧘</h2>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 mb-6 list-disc pl-5">
                <li>
                  <b>Smart Typing:</b> Type "Math HW tom" to set date to
                  tomorrow. The word "tom" disappears!
                </li>
                <li>
                  <b>Times:</b> Type "at 5pm" or "at 14:00" to set a time.
                </li>
                <li>
                  <b>Urgency:</b> Type "!urgent" to flag a task red.
                </li>
                <li>
                  <b>Soundscapes:</b> Click the sliders icon (top right) to mix
                  Rain, Forest, and Waves with your music.
                </li>
                <li>
                  <b>Drag & Drop:</b> Open "3-Day Plan" or "Month" to drag tasks
                  to new dates.
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

        {/* HELP FAB */}
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
