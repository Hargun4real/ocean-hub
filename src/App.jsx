import { useState } from "react";

export default function SchoolDashboard() {
  const [selectedSubject, setSelectedSubject] = useState("All");

  const essentials = [
    { name: "ChatGPT", icon: "💬", link: "https://chatgpt.com" },
    { name: "Google Classroom", icon: "🎓", link: "https://classroom.google.com" },
    { name: "Google Docs", icon: "📝", link: "https://docs.google.com" },
    { name: "Google Drive", icon: "☁️", link: "https://drive.google.com" },
    { name: "Calendar", icon: "📅", link: "https://calendar.google.com" },
    { name: "Citations", icon: "🔎", link: "https://www.citationmachine.net" },
  ];

  const subjects = [
    { name: "Social Studies", emoji: "🌍", tasks: 3, progress: 70 },
    { name: "Science", emoji: "🧪", tasks: 2, progress: 55 },
    { name: "Math", emoji: "📐", tasks: 4, progress: 40 },
    { name: "English", emoji: "📚", tasks: 2, progress: 80 },
    { name: "Other", emoji: "✨", tasks: 1, progress: 30 },
  ];

  const dueTasks = [
    { subject: "Math", task: "Complete assignment 5", due: "Tomorrow", priority: "High" },
    { subject: "Science", task: "Submit lab report", due: "Friday", priority: "Medium" },
    { subject: "English", task: "Essay draft", due: "Next Week", priority: "Medium" },
    { subject: "Social Studies", task: "Finish source analysis", due: "Monday", priority: "High" },
  ];

  const filteredTasks = selectedSubject === "All" ? dueTasks : dueTasks.filter((task) => task.subject === selectedSubject);

  const checklist = [
    "Check Google Classroom",
    "Open notes and textbook",
    "Start the hardest task first",
    "Use ChatGPT for planning, studying, or editing",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-800 text-white">
      <div className="flex min-h-screen">
        <aside className="hidden lg:flex w-72 flex-col bg-white/10 backdrop-blur-xl border-r border-white/15 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold">Ocean Hub 🌊</h1>
            <p className="text-sm text-cyan-100 mt-1">Your schoolwork command center</p>
          </div>

          <nav className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-cyan-200 mb-3">Essentials</p>
            {essentials.map((item, index) => (
              <a key={index} href={item.link} target="_blank" className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/15 transition-all text-cyan-50">
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
          </nav>

          <div className="mt-auto bg-cyan-300/15 rounded-3xl p-4 border border-cyan-200/20">
            <p className="font-bold">Focus Mode ⚡</p>
            <p className="text-sm text-cyan-100 mt-1">Pick one task, set a timer, and lock in without distractions.</p>
          </div>
        </aside>

        <main className="flex-1 p-5 md:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-7">
            <section className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                <div>
                  <p className="text-cyan-200 font-semibold mb-2">Welcome back, Angel</p>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tight">Schoolwork Dashboard</h2>
                  <p className="text-cyan-100 mt-3 max-w-2xl">Organize your classes, assignments, due dates, links, and study flow in one calm ocean-blue workspace.</p>
                </div>

                <div className="grid grid-cols-3 gap-3 min-w-[260px]">
                  <div className="bg-white/10 rounded-2xl p-4 text-center border border-white/10">
                    <p className="text-3xl font-black">5</p>
                    <p className="text-xs text-cyan-100">Subjects</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 text-center border border-white/10">
                    <p className="text-3xl font-black">4</p>
                    <p className="text-xs text-cyan-100">Due Soon</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 text-center border border-white/10">
                    <p className="text-3xl font-black">6</p>
                    <p className="text-xs text-cyan-100">Tools</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">Subjects</h3>
                    <button className="bg-cyan-300 text-blue-950 font-bold px-4 py-2 rounded-2xl shadow-lg hover:scale-105 transition-all">+ Add Task</button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {subjects.map((subject, index) => (
                      <button key={index} onClick={() => setSelectedSubject(subject.name)} className="text-left bg-white/10 border border-white/15 rounded-3xl p-5 shadow-xl hover:bg-white/15 hover:scale-[1.02] transition-all">
                        <div className="flex items-start justify-between mb-5">
                          <div className="flex items-center gap-3">
                            <div className="text-3xl bg-cyan-200/15 rounded-2xl p-3">{subject.emoji}</div>
                            <div>
                              <h4 className="text-xl font-bold">{subject.name}</h4>
                              <p className="text-cyan-100 text-sm">{subject.tasks} active tasks</p>
                            </div>
                          </div>
                          <span className="text-cyan-200 text-sm">View</span>
                        </div>
                        <div className="h-3 bg-blue-950/50 rounded-full overflow-hidden">
                          <div className="h-full bg-cyan-300 rounded-full" style={{ width: `${subject.progress}%` }} />
                        </div>
                        <p className="text-xs text-cyan-100 mt-2">{subject.progress}% organized</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-6 shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Work Session Checklist ✅</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {checklist.map((item, index) => (
                      <label key={index} className="flex items-center gap-3 bg-black/10 rounded-2xl p-4 hover:bg-black/20 transition-all">
                        <input type="checkbox" className="h-5 w-5 accent-cyan-300" />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-6 shadow-xl">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <h3 className="text-2xl font-bold">Due Soon ⏰</h3>
                    <select value={selectedSubject} onChange={(event) => setSelectedSubject(event.target.value)} className="bg-blue-950/80 border border-cyan-200/20 rounded-xl px-3 py-2 text-sm">
                      <option>All</option>
                      {subjects.map((subject) => <option key={subject.name}>{subject.name}</option>)}
                    </select>
                  </div>

                  <div className="space-y-4">
                    {filteredTasks.map((item, index) => (
                      <div key={index} className="bg-cyan-200/15 border border-cyan-100/20 rounded-2xl p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-bold">{item.task}</p>
                            <p className="text-sm text-cyan-100">{item.subject}</p>
                          </div>
                          <span className="bg-cyan-300 text-blue-950 text-xs font-bold px-3 py-1 rounded-full">{item.due}</span>
                        </div>
                        <p className="text-xs text-cyan-100 mt-3">Priority: {item.priority}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-6 shadow-xl lg:hidden">
                  <h3 className="text-2xl font-bold mb-4">Essentials 💻</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {essentials.map((item, index) => (
                      <a key={index} href={item.link} target="_blank" className="bg-white/10 rounded-2xl p-4 text-center hover:bg-white/20 transition-all">
                        <div className="text-2xl mb-1">{item.icon}</div>
                        <div className="text-sm font-semibold">{item.name}</div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="bg-cyan-300 text-blue-950 rounded-3xl p-6 shadow-xl">
                  <h3 className="text-xl font-extrabold">Classroom Sync 🎓</h3>
                  <p className="text-sm mt-2">This button is a placeholder for now. A real Google Classroom connection would need Google login/API setup.</p>
                  <button className="mt-4 bg-blue-950 text-white px-4 py-3 rounded-2xl font-bold w-full hover:scale-[1.02] transition-all">Connect Classroom</button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
