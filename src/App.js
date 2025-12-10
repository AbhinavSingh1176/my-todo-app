import React, { useState, useEffect, useMemo } from "react";
import {
  Calendar as CalendarIcon,
  CheckCircle2,
  Circle,
  Plus,
  Settings,
  Moon,
  Sun,
  LayoutList,
  Trash2,
  Flag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// --- Utility: Simple Date Helpers ---
const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
const isSameDay = (d1, d2) => {
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

// --- Main Component ---
export default function ZenTaskApp() {
  // --- State ---
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Welcome to your new Zen Space",
      completed: false,
      date: new Date(),
      priority: "low",
    },
    {
      id: 2,
      text: "Try typing 'Buy milk tomorrow'",
      completed: false,
      date: new Date(),
      priority: "high",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [view, setView] = useState("list"); // 'list' or 'calendar'
  const [darkMode, setDarkMode] = useState(false);
  const [accentColor, setAccentColor] = useState("violet"); // violet, blue, emerald, rose
  const [currentDate, setCurrentDate] = useState(new Date()); // For calendar navigation

  // --- Theme Classes ---
  const themes = {
    violet: "text-violet-500 bg-violet-500 border-violet-500 ring-violet-500",
    blue: "text-blue-500 bg-blue-500 border-blue-500 ring-blue-500",
    emerald:
      "text-emerald-500 bg-emerald-500 border-emerald-500 ring-emerald-500",
    rose: "text-rose-500 bg-rose-500 border-rose-500 ring-rose-500",
  };

  // --- Smart Input Logic (NLP Lite) ---
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    let date = new Date();
    let text = inputValue;
    let priority = "low";

    // Basic Parsing Logic
    const lowerText = text.toLowerCase();
    if (lowerText.includes("tomorrow")) {
      date.setDate(date.getDate() + 1);
      text = text.replace(/tomorrow/i, "").trim();
    } else if (lowerText.includes("next week")) {
      date.setDate(date.getDate() + 7);
      text = text.replace(/next week/i, "").trim();
    } else if (lowerText.includes("today")) {
      text = text.replace(/today/i, "").trim();
    }

    if (lowerText.includes("!urgent")) {
      priority = "high";
      text = text.replace(/!urgent/i, "").trim();
    }

    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
      date: date,
      priority: priority,
    };

    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // --- Progress Logic ---
  const completedCount = tasks.filter((t) => t.completed).length;
  const progress =
    tasks.length === 0 ? 0 : (completedCount / tasks.length) * 100;

  // --- Calendar Grid Generator ---
  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    // Fill padding days
    for (let i = 0; i < firstDay.getDay(); i++) days.push(null);
    // Fill actual days
    for (let i = 1; i <= lastDay.getDate(); i++)
      days.push(new Date(year, month, i));

    return days;
  }, [currentDate]);

  return (
    <div
      className={`${
        darkMode
          ? "dark bg-slate-900 text-slate-100"
          : "bg-gray-50 text-slate-800"
      } min-h-screen transition-colors duration-300 font-sans`}
    >
      {/* --- Sidebar / Navigation (Simulated) --- */}
      <div className="max-w-5xl mx-auto p-6 md:p-12 flex flex-col md:flex-row gap-8">
        {/* Left Panel: Controls */}
        <div className="w-full md:w-64 flex flex-col gap-6">
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            Zen<span className={themes[accentColor].split(" ")[0]}>Task.</span>
          </h1>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => setView("list")}
              className={`p-3 rounded-lg flex items-center gap-3 transition-all ${
                view === "list"
                  ? "bg-white dark:bg-slate-800 shadow-md"
                  : "hover:bg-gray-200 dark:hover:bg-slate-800"
              }`}
            >
              <LayoutList size={20} /> My Lists
            </button>
            <button
              onClick={() => setView("calendar")}
              className={`p-3 rounded-lg flex items-center gap-3 transition-all ${
                view === "calendar"
                  ? "bg-white dark:bg-slate-800 shadow-md"
                  : "hover:bg-gray-200 dark:hover:bg-slate-800"
              }`}
            >
              <CalendarIcon size={20} /> Calendar
            </button>
          </div>

          <div className="mt-auto pt-6 border-t dark:border-slate-700">
            <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">
              Appearance
            </p>
            <div className="flex gap-3 mb-4">
              {["violet", "blue", "emerald", "rose"].map((c) => (
                <button
                  key={c}
                  onClick={() => setAccentColor(c)}
                  className={`w-6 h-6 rounded-full ${
                    c === "violet"
                      ? "bg-violet-500"
                      : c === "blue"
                      ? "bg-blue-500"
                      : c === "emerald"
                      ? "bg-emerald-500"
                      : "bg-rose-500"
                  } ${
                    accentColor === c
                      ? "ring-2 ring-offset-2 ring-gray-400 dark:ring-offset-slate-900"
                      : ""
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-2 text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>

        {/* Right Panel: Main Content */}
        <div className="flex-1">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm mb-2 text-gray-500 dark:text-gray-400">
              <span>Daily Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 w-full bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${
                  themes[accentColor].split(" ")[1]
                }`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Input Area */}
          <form onSubmit={handleAddTask} className="mb-8 relative group">
            <input
              type="text"
              placeholder="Add a task... (try 'Call Mom tomorrow !urgent')"
              className="w-full p-4 pl-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-transparent focus:border-gray-200 dark:focus:border-slate-700 focus:ring-0 text-lg transition-all outline-none"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Plus
              className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                themes[accentColor].split(" ")[0]
              }`}
              size={24}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden group-focus-within:flex gap-2 text-xs text-gray-400">
              <span className="bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded">
                Enter to add
              </span>
            </div>
          </form>

          {/* VIEW: List */}
          {view === "list" && (
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold mb-2">Tasks</h2>
              {tasks.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  <CheckCircle2 size={48} className="mx-auto mb-4 opacity-20" />
                  <p>All clear! Relax or add a new task.</p>
                </div>
              ) : (
                tasks
                  .sort((a, b) => a.completed - b.completed)
                  .map((task) => (
                    <div
                      key={task.id}
                      className={`group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm transition-all hover:shadow-md ${
                        task.completed ? "opacity-50" : ""
                      }`}
                    >
                      <button
                        onClick={() => toggleTask(task.id)}
                        className="transition-colors"
                      >
                        {task.completed ? (
                          <CheckCircle2
                            className={themes[accentColor].split(" ")[0]}
                            size={24}
                          />
                        ) : (
                          <Circle
                            className="text-gray-300 hover:text-gray-400"
                            size={24}
                          />
                        )}
                      </button>
                      <div className="flex-1">
                        <p
                          className={`text-lg ${
                            task.completed ? "line-through text-gray-400" : ""
                          }`}
                        >
                          {task.text}
                        </p>
                        <p
                          className={`text-xs flex items-center gap-2 ${
                            new Date(task.date) < new Date() && !task.completed
                              ? "text-red-400"
                              : "text-gray-400"
                          }`}
                        >
                          <CalendarIcon size={12} /> {formatDate(task.date)}
                          {task.priority === "high" && (
                            <span className="text-red-500 font-bold flex items-center gap-1">
                              <Flag size={10} /> Urgent
                            </span>
                          )}
                        </p>
                      </div>
                      <button
                        onClick={() => deleteTask(task.id)}
                        className="opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-400 transition-all"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))
              )}
            </div>
          )}

          {/* VIEW: Calendar */}
          {view === "calendar" && (
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={() =>
                    setCurrentDate(
                      new Date(currentDate.setMonth(currentDate.getMonth() - 1))
                    )
                  }
                  className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full"
                >
                  <ChevronLeft size={20} />
                </button>
                <h3 className="text-lg font-bold">
                  {currentDate.toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </h3>
                <button
                  onClick={() =>
                    setCurrentDate(
                      new Date(currentDate.setMonth(currentDate.getMonth() + 1))
                    )
                  }
                  className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center mb-2">
                {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                  <span key={d} className="text-xs font-bold text-gray-400">
                    {d}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((day, idx) => {
                  if (!day)
                    return <div key={idx} className="aspect-square"></div>;
                  const dayTasks = tasks.filter((t) => isSameDay(t.date, day));
                  const isToday = isSameDay(day, new Date());
                  return (
                    <div
                      key={idx}
                      className={`aspect-square p-1 rounded-lg border border-gray-100 dark:border-slate-700 relative hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors ${
                        isToday ? "bg-blue-50/50 dark:bg-slate-700/50" : ""
                      }`}
                    >
                      <span
                        className={`text-xs ${
                          isToday
                            ? themes[accentColor].split(" ")[0] + " font-bold"
                            : "text-gray-500"
                        }`}
                      >
                        {day.getDate()}
                      </span>
                      <div className="flex flex-col gap-1 mt-1">
                        {dayTasks.map((t) => (
                          <div
                            key={t.id}
                            className={`w-full h-1.5 rounded-full ${
                              t.completed
                                ? "bg-gray-300"
                                : themes[accentColor].split(" ")[1]
                            }`}
                            title={t.text}
                          ></div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
