import React, { useState, useEffect, useMemo, useRef } from 'react';

// --- ICONS (FIXED: All multi-path icons are wrapped in fragments <>) ---
const Icon = ({ name, size = 18, className = "" }: any) => {
  const icons: any = {
    check: <path d="M20 6L9 17l-5-5" />,
    circle: <circle cx="12" cy="12" r="10" />,
    plus: <path d="M12 5v14M5 12h14" />,
    trash: <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />,
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
    flame: <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.6-3.3.3.5.9 1.5 2.9 2.8z" />,
    checkCircle: <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3" />,
    repeat: (
      <>
        <path d="M17 1l4 4-4 4" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <path d="M7 23l-4-4 4-4" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </>
    )
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {icons[name] || icons.circle}
    </svg>
  );
};

// --- CONFIG & THEMES ---
const THEMES: any = {
  violet: { main: 'text-violet-600', bg: 'bg-violet-500', border: 'border-violet-200', light: 'bg-violet-50', ring: 'focus:border-violet-500' },
  blue:   { main: 'text-blue-600', bg: 'bg-blue-500', border: 'border-blue-200', light: 'bg-blue-50', ring: 'focus:border-blue-500' },
  rose:   { main: 'text-rose-600', bg: 'bg-rose-500', border: 'border-rose-200', light: 'bg-rose-50', ring: 'focus:border-rose-500' },
  emerald:{ main: 'text-emerald-600', bg: 'bg-emerald-500', border: 'border-emerald-200', light: 'bg-emerald-50', ring: 'focus:border-emerald-500' },
};

const TAGS_STYLES: any = {
  Work: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  Study: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
  Life: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300",
  Urgent: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
};

const LOFI_URL = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3";

export default function App() {
  // --- STATE ---
  const [tasks, setTasks] = useState<any[]>(() => {
    const s = localStorage.getItem('zenTasks_v3');
    return s ? JSON.parse(s) : [];
  });
  const [habits, setHabits] = useState<any[]>(() => {
    const s = localStorage.getItem('zenHabits_v3');
    return s ? JSON.parse(s) : [{id: 1, text: "Drink Water", completed: false}];
  });

  const [view, setView] = useState<'list' | '3day' | 'month'>('list');
  const [theme, setTheme] = useState('violet');
  const [darkMode, setDarkMode] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Input State
  const [inputValue, setInputValue] = useState("");
  const [selectedTag, setSelectedTag] = useState("Life");
  
  // Timer State
  const [timerTime, setTimerTime] = useState(25 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // --- PERSISTENCE ---
  useEffect(() => { localStorage.setItem('zenTasks_v3', JSON.stringify(tasks)); }, [tasks]);
  useEffect(() => { localStorage.setItem('zenHabits_v3', JSON.stringify(habits)); }, [habits]);

  // --- LOGIC: HELPERS ---
  const isSameDay = (d1: Date, d2: Date) => {
    const a = new Date(d1); const b = new Date(d2);
    return a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();
  };

  const getDayDate = (dayName: string) => {
    const days = ['sun','mon','tue','wed','thu','fri','sat'];
    const now = new Date();
    const target = days.indexOf(dayName.toLowerCase().substring(0,3));
    if (target === -1) return null;
    const diff = (target + 7 - now.getDay()) % 7;
    const d = new Date(); d.setDate(now.getDate() + (diff === 0 ? 7 : diff));
    return d;
  };

  // --- LOGIC: DRAG AND DROP ---
  const handleDragStart = (e: React.DragEvent, taskId: number) => {
    e.dataTransfer.setData("taskId", taskId.toString());
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Necessary to allow dropping
  };

  const handleDrop = (e: React.DragEvent, targetDate: Date) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    if (!taskId) return;

    setTasks(prev => prev.map(t => {
      if (t.id.toString() === taskId) {
        return { ...t, date: targetDate };
      }
      return t;
    }));
  };

  // --- LOGIC: ADD TASK (With NLP & Tags) ---
  const handleAddTask = (e: any) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    let text = inputValue;
    let date = new Date();
    let priority = 'normal';
    let recurring = false;
    let tag = selectedTag;

    const lower = text.toLowerCase();
    
    // Date Parsing
    if (lower.includes(' tom ')) { date.setDate(date.getDate() + 1); text = text.replace(/ tom /i, ' '); }
    if (lower.includes(' tod ')) { text = text.replace(/ tod /i, ' '); }
    ['mon','tue','wed','thu','fri','sat','sun'].forEach(d => {
       if(lower.includes(` ${d}`)) { 
         const nextDate = getDayDate(d);
         if(nextDate) date = nextDate; 
         text = text.replace(new RegExp(` ${d}`, 'i'), ' '); 
       }
    });

    if (lower.includes("!urgent")) { priority = "urgent"; tag = "Urgent"; text = text.replace(/!urgent/i, ""); }
    if (lower.includes("!study")) { tag = "Study"; text = text.replace(/!study/i, ""); }
    if (lower.includes("!work")) { tag = "Work"; text = text.replace(/!work/i, ""); }
    if (lower.includes("!rec")) { recurring = true; text = text.replace(/!rec/i, ""); }

    setTasks([...tasks, { id: Date.now(), text: text.trim(), completed: false, date, priority, tag, recurring }]);
    setInputValue("");
  };

  // --- LOGIC: TIMER ---
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerTime > 0) {
      interval = setInterval(() => setTimerTime(t => t - 1), 1000);
      if(audioRef.current) { audioRef.current.volume = 0.4; audioRef.current.play().catch(() => {}); }
    } else {
      clearInterval(interval);
      if(audioRef.current) audioRef.current.pause();
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerTime]);

  // --- RENDER HELPERS ---
  const activeTheme = THEMES[theme];
  const formatTime = (s: number) => `${Math.floor(s/60)}:${(s%60).toString().padStart(2,'0')}`;

  return (
    <div className={`${darkMode ? 'dark' : ''} font-sans`}>
      <audio ref={audioRef} src={LOFI_URL} loop />
      
      <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300">
        
        {/* --- HEADER --- */}
        <div className="bg-white dark:bg-slate-900 border-b dark:border-slate-800 p-4 sticky top-0 z-20 shadow-sm">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="flex items-center gap-3">
               <h1 className="text-xl font-bold tracking-tight">Zen<span className={activeTheme.main}>Life</span></h1>
               
               {/* Color Picker */}
               <div className="flex gap-2 ml-4 px-3 py-1 bg-gray-100 dark:bg-slate-800 rounded-full">
                 {Object.keys(THEMES).map(k => (
                   <button key={k} onClick={() => setTheme(k)} className={`w-4 h-4 rounded-full ${THEMES[k].bg} ${theme === k ? 'ring-2 ring-offset-1 ring-gray-400 dark:ring-slate-600' : ''}`} />
                 ))}
               </div>
             </div>

             <div className="flex items-center gap-4">
                {/* Timer */}
                <div className="flex items-center gap-3 bg-gray-100 dark:bg-slate-800 px-3 py-1.5 rounded-full">
                   <span className="font-mono text-sm font-bold w-10 text-center">{formatTime(timerTime)}</span>
                   <button onClick={() => setIsTimerRunning(!isTimerRunning)} className={`p-1.5 rounded-full text-white ${activeTheme.bg} hover:opacity-90`}>
                      <Icon name={isTimerRunning ? "pause" : "play"} size={12} />
                   </button>
                </div>
                {/* Dark Mode */}
                <button onClick={() => setDarkMode(!darkMode)} className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full">
                   <Icon name={darkMode ? "sun" : "moon"} size={18} />
                </button>
             </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-8">
           
           {/* --- SIDEBAR --- */}
           <div className="w-full lg:w-64 space-y-6">
              {/* Navigation */}
              <div className="flex flex-col gap-1">
                 <button onClick={() => setView('list')} className={`p-3 rounded-lg flex items-center gap-3 text-sm font-medium transition-all ${view === 'list' ? 'bg-white dark:bg-slate-900 shadow-sm' : 'hover:bg-gray-100 dark:hover:bg-slate-800'}`}>
                    <Icon name="list" className={view === 'list' ? activeTheme.main : 'text-gray-400'} /> My List
                 </button>
                 <button onClick={() => setView('3day')} className={`p-3 rounded-lg flex items-center gap-3 text-sm font-medium transition-all ${view === '3day' ? 'bg-white dark:bg-slate-900 shadow-sm' : 'hover:bg-gray-100 dark:hover:bg-slate-800'}`}>
                    <Icon name="columns" className={view === '3day' ? activeTheme.main : 'text-gray-400'} /> 3-Day Plan
                 </button>
                 <button onClick={() => setView('month')} className={`p-3 rounded-lg flex items-center gap-3 text-sm font-medium transition-all ${view === 'month' ? 'bg-white dark:bg-slate-900 shadow-sm' : 'hover:bg-gray-100 dark:hover:bg-slate-800'}`}>
                    <Icon name="calendar" className={view === 'month' ? activeTheme.main : 'text-gray-400'} /> Month View
                 </button>
              </div>

              {/* Habits */}
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-slate-800">
                 <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-sm flex items-center gap-2"><Icon name="flame" className="text-orange-500" size={16}/> Habits</h3>
                    <button onClick={() => { const t = prompt("Habit:"); if(t) setHabits([...habits, {id: Date.now(), text:t, completed:false}]) }} className="text-xs bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded hover:bg-gray-200">+</button>
                 </div>
                 <div className="space-y-2">
                    {habits.map(h => (
                       <div key={h.id} onClick={() => setHabits(habits.map(x => x.id === h.id ? {...x, completed: !x.completed} : x))} className="flex items-center gap-2 cursor-pointer group">
                          <div className={`w-4 h-4 rounded border flex items-center justify-center ${h.completed ? 'bg-orange-500 border-orange-500 text-white' : 'border-gray-300 dark:border-slate-600'}`}>
                             {h.completed && <Icon name="check" size={10} />}
                          </div>
                          <span className={`text-sm ${h.completed ? 'line-through text-gray-400' : ''}`}>{h.text}</span>
                          <button onClick={(e) => { e.stopPropagation(); setHabits(habits.filter(x => x.id !== h.id)) }} className="ml-auto opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500"><Icon name="trash" size={12} /></button>
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
                     placeholder="Add task... (try 'Study Math tom !urgent')" 
                     className={`w-full p-4 pl-12 pr-32 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-transparent outline-none transition-all ${activeTheme.ring}`}
                   />
                   <div className={`absolute left-4 top-1/2 -translate-y-1/2 ${activeTheme.main}`}><Icon name="plus" /></div>
                   
                   {/* Tag Selector */}
                   <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      <select 
                        value={selectedTag} 
                        onChange={(e) => setSelectedTag(e.target.value)}
                        className="bg-gray-100 dark:bg-slate-800 text-xs font-bold py-1 px-2 rounded-lg outline-none cursor-pointer hover:bg-gray-200"
                      >
                         {Object.keys(TAGS_STYLES).map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                   </div>
                 </div>
              </form>

              {/* --- VIEW: LIST --- */}
              {view === 'list' && (
                 <div className="space-y-2">
                    {tasks.length === 0 && <div className="text-center py-12 text-gray-400 opacity-50">No tasks yet</div>}
                    {tasks.sort((a,b) => Number(a.completed) - Number(b.completed)).map(task => (
                       <div key={task.id} className={`group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-transparent hover:border-gray-200 dark:hover:border-slate-700 transition-all ${task.completed ? 'opacity-50' : ''}`}>
                          <button onClick={() => setTasks(tasks.map(t => t.id === task.id ? {...t, completed: !t.completed} : t))} className={task.completed ? activeTheme.main : 'text-gray-300 hover:text-gray-400'}>
                             <Icon name={task.completed ? "checkCircle" : "circle"} size={22} />
                          </button>
                          <div className="flex-1">
                             <div className="flex items-center gap-2">
                                <span className={`${task.completed ? 'line-through' : ''}`}>{task.text}</span>
                                {task.recurring && <Icon name="repeat" size={14} className="text-orange-400"/>}
                             </div>
                             <div className="flex items-center gap-2 mt-1">
                                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${TAGS_STYLES[task.tag] || TAGS_STYLES['Life']}`}>{task.tag}</span>
                                <span className={`text-xs px-2 py-0.5 rounded-full ${task.priority === 'urgent' ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-500 dark:bg-slate-800'}`}>{new Date(task.date).toLocaleDateString(undefined, {weekday:'short'})}</span>
                             </div>
                          </div>
                          <button onClick={() => setTasks(tasks.filter(t => t.id !== task.id))} className="opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-500"><Icon name="trash" /></button>
                       </div>
                    ))}
                 </div>
              )}

              {/* --- VIEW: 3-DAY COLUMNS (DRAG & DROP) --- */}
              {view === '3day' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[0, 1, 2].map(offset => {
                    const date = new Date();
                    date.setDate(date.getDate() + offset);
                    const dayTasks = tasks.filter(t => isSameDay(t.date, date));
                    
                    return (
                      <div 
                        key={offset} 
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, date)}
                        className="bg-gray-100/50 dark:bg-slate-900/50 p-4 rounded-2xl min-h-[400px] border border-transparent hover:border-gray-200 dark:hover:border-slate-700 transition-colors"
                      >
                         <h3 className={`font-bold mb-4 flex items-center gap-2 ${offset === 0 ? activeTheme.main : 'text-gray-500'}`}>
                            {offset === 0 ? 'Today' : offset === 1 ? 'Tomorrow' : date.toLocaleDateString(undefined, {weekday: 'long'})}
                            <span className="text-xs opacity-50 font-normal">{date.getDate()}</span>
                         </h3>
                         <div className="space-y-3">
                           {dayTasks.map(task => (
                             <div 
                               key={task.id} 
                               draggable
                               onDragStart={(e) => handleDragStart(e, task.id)}
                               className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm cursor-grab active:cursor-grabbing hover:shadow-md transition-all border border-gray-100 dark:border-slate-700"
                             >
                                <div className="flex justify-between items-start mb-2">
                                  <span className={`text-sm ${task.completed ? 'line-through opacity-50' : ''}`}>{task.text}</span>
                                  <Icon name="grip" className="text-gray-300" size={14}/>
                                </div>
                                <div className="flex justify-between items-center">
                                   <span className={`text-[10px] px-1.5 py-0.5 rounded ${TAGS_STYLES[task.tag]}`}>{task.tag}</span>
                                   <button onClick={() => setTasks(tasks.map(t => t.id === task.id ? {...t, completed: !t.completed} : t))} className={`text-xs ${task.completed ? 'text-green-500' : 'text-gray-300'}`}>
                                      {task.completed ? 'Done' : 'Do'}
                                   </button>
                                </div>
                             </div>
                           ))}
                           {dayTasks.length === 0 && <div className="text-center text-xs text-gray-400 py-8 border-2 border-dashed border-gray-200 dark:border-slate-700 rounded-xl">Drop here</div>}
                         </div>
                      </div>
                    )
                  })}
                </div>
              )}

              {/* --- VIEW: MONTH CALENDAR (DRAG & DROP) --- */}
              {view === 'month' && (
                 <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                       <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth()-1)))} className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full"><Icon name="left"/></button>
                       <h2 className="font-bold">{currentDate.toLocaleDateString(undefined, {month:'long', year:'numeric'})}</h2>
                       <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth()+1)))} className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full"><Icon name="right"/></button>
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                       {['S','M','T','W','T','F','S'].map(d => <div key={d} className="text-center text-xs font-bold text-gray-400 mb-2">{d}</div>)}
                       {(() => {
                          const year = currentDate.getFullYear();
                          const month = currentDate.getMonth();
                          const first = new Date(year, month, 1);
                          const days = [];
                          for(let i=0; i<first.getDay(); i++) days.push(null);
                          for(let i=1; i<=new Date(year, month+1, 0).getDate(); i++) days.push(new Date(year, month, i));
                          
                          return days.map((day, i) => {
                             if(!day) return <div key={i}></div>;
                             const isToday = isSameDay(day, new Date());
                             const dayTasks = tasks.filter(t => isSameDay(t.date, day));
                             return (
                                <div 
                                  key={i} 
                                  onDragOver={handleDragOver}
                                  onDrop={(e) => handleDrop(e, day)}
                                  className={`min-h-[80px] p-2 rounded-xl border relative transition-colors ${isToday ? `${activeTheme.light} ${activeTheme.border}` : 'border-gray-100 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800'}`}
                                >
                                   <span className={`text-xs font-bold ${isToday ? activeTheme.main : 'text-gray-400'}`}>{day.getDate()}</span>
                                   <div className="flex flex-col gap-1 mt-1">
                                      {dayTasks.map(t => (
                                         <div 
                                           key={t.id}
                                           draggable
                                           onDragStart={(e) => handleDragStart(e, t.id)} 
                                           className={`text-[10px] truncate px-1.5 py-1 rounded cursor-grab active:cursor-grabbing ${t.completed ? 'opacity-40 line-through' : 'bg-gray-100 dark:bg-slate-700'}`}
                                         >
                                            {t.text}
                                         </div>
                                      ))}
                                   </div>
                                </div>
                             )
                          });
                       })()}
                    </div>
                 </div>
              )}
           </div>
        </div>
      </div>
    </div>
  );
}