import React, { useEffect, useState } from "react";

export default function App() {
  const [selectedSubject, setSelectedSubject] = useState("Home");
  const [darkMode, setDarkMode] = useState(true);
  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("oceanNotes")) || {});
  const [timerSeconds, setTimerSeconds] = useState(25 * 60);
  const [timerRunning, setTimerRunning] = useState(false);
  const [gpaGrades, setGpaGrades] = useState(["", "", "", "", ""]);
  const [customCategory, setCustomCategory] = useState({ name: "", icon: "", description: "" });

  const defaultSubjects = {
    "Social Studies": {
      icon: "🌍",
      description: "Keep track of readings, notes, essays, source analysis, and unit reviews.",
      tasks: ["Finish source analysis", "Review ideology notes", "Study key terms", "Prepare for discussion"]
    },
    Science: {
      icon: "🧪",
      description: "Organize labs, worksheets, diagrams, definitions, and test review.",
      tasks: ["Submit lab report", "Review diagrams", "Finish worksheet", "Study vocabulary"]
    },
    Math: {
      icon: "📐",
      description: "Track homework questions, formulas, tests, corrections, and practice work.",
      tasks: ["Complete assignment 5", "Practice word problems", "Review formulas", "Correct mistakes"]
    },
    English: {
      icon: "📚",
      description: "Plan essays, paragraphs, reading responses, quotes, and assignments.",
      tasks: ["Write essay draft", "Find quotes", "Edit paragraph", "Finish reading"]
    },
    Other: {
      icon: "✨",
      description: "Use this for random reminders, electives, clubs, volunteer tasks, and extra work.",
      tasks: ["Organize reminders", "Check emails", "Plan study time", "Update calendar"]
    }
  };

  const [subjects, setSubjects] = useState(() => JSON.parse(localStorage.getItem("oceanSubjects")) || defaultSubjects);
  const subjectNames = Object.keys(subjects);

  const [dueSoon, setDueSoon] = useState(() => JSON.parse(localStorage.getItem("oceanDueSoon")) || [
    { subject: "Math", task: "Math assignment", date: "Tomorrow" },
    { subject: "Science", task: "Science lab report", date: "Friday" },
    { subject: "English", task: "English essay draft", date: "Next week" },
    { subject: "Social Studies", task: "Social Studies source analysis", date: "Monday" }
  ]);
  const [newDue, setNewDue] = useState({ subject: "Math", task: "", date: "" });

  useEffect(() => {
    localStorage.setItem("oceanNotes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("oceanDueSoon", JSON.stringify(dueSoon));
  }, [dueSoon]);

  useEffect(() => {
    localStorage.setItem("oceanSubjects", JSON.stringify(subjects));
  }, [subjects]);

  useEffect(() => {
    if (!timerRunning) return;
    const interval = setInterval(() => {
      setTimerSeconds((seconds) => (seconds > 0 ? seconds - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [timerRunning]);

  const essentials = [
    { name: "ChatGPT", icon: "💬", link: "https://chatgpt.com" },
    { name: "Google Classroom", icon: "🎓", link: "https://classroom.google.com" },
    { name: "Meskanas", icon: "🏫", link: "https://meskanas.macewan.ca" },
    { name: "Google Docs", icon: "📝", link: "https://docs.google.com" },
    { name: "Google Drive", icon: "☁️", link: "https://drive.google.com" },
    { name: "Google Calendar", icon: "📅", link: "https://calendar.google.com" },
    { name: "Citation Machine", icon: "🔎", link: "https://www.citationmachine.net" }
  ];

  const theme = darkMode
    ? {
        page: "linear-gradient(135deg, #001f3f, #004e92, #00bcd4)",
        card: "rgba(255,255,255,0.15)",
        text: "white",
        input: "white",
        inputText: "#00334d"
      }
    : {
        page: "linear-gradient(135deg, #dff9ff, #8ee7ff, #ffffff)",
        card: "rgba(255,255,255,0.75)",
        text: "#00334d",
        input: "white",
        inputText: "#00334d"
      };

  const styles = {
    page: {
      minHeight: "100vh",
      background: theme.page,
      color: theme.text,
      fontFamily: "Arial, sans-serif",
      display: "flex",
      position: "relative",
      overflow: "hidden"
    },
    wave: {
      position: "fixed",
      bottom: "-40px",
      left: 0,
      width: "200%",
      height: "120px",
      background: "rgba(255,255,255,0.18)",
      borderRadius: "45%",
      animation: "waveMove 8s infinite linear",
      zIndex: 0
    },
    sidebar: {
      width: "270px",
      background: "rgba(255, 255, 255, 0.12)",
      padding: "25px",
      borderRight: "1px solid rgba(255,255,255,0.2)",
      minHeight: "100vh",
      boxSizing: "border-box",
      zIndex: 1,
      overflowY: "auto"
    },
    main: {
      flex: 1,
      padding: "30px",
      boxSizing: "border-box",
      zIndex: 1,
      overflowY: "auto"
    },
    card: {
      background: theme.card,
      border: "1px solid rgba(255,255,255,0.25)",
      borderRadius: "22px",
      padding: "22px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.22)",
      marginBottom: "20px",
      backdropFilter: "blur(10px)"
    },
    button: {
      width: "100%",
      textAlign: "left",
      padding: "14px",
      marginBottom: "10px",
      borderRadius: "15px",
      border: "none",
      cursor: "pointer",
      background: "rgba(255,255,255,0.18)",
      color: theme.text,
      fontSize: "15px"
    },
    primaryButton: {
      padding: "12px 16px",
      borderRadius: "14px",
      border: "none",
      cursor: "pointer",
      background: "#67e8f9",
      color: "#00334d",
      fontWeight: "bold",
      marginRight: "8px",
      marginBottom: "8px"
    },
    dangerButton: {
      padding: "12px 16px",
      borderRadius: "14px",
      border: "none",
      cursor: "pointer",
      background: "#fecaca",
      color: "#7f1d1d",
      fontWeight: "bold",
      marginRight: "8px",
      marginBottom: "8px"
    },
    subjectGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
      gap: "18px"
    },
    subjectCard: {
      background: theme.card,
      border: "1px solid rgba(255,255,255,0.25)",
      borderRadius: "22px",
      padding: "22px",
      cursor: "pointer",
      color: theme.text,
      textAlign: "left",
      boxShadow: "0 10px 25px rgba(0,0,0,0.22)"
    },
    link: {
      display: "block",
      color: theme.text,
      textDecoration: "none",
      background: "rgba(255,255,255,0.16)",
      padding: "13px",
      borderRadius: "14px",
      marginBottom: "10px"
    },
    input: {
      width: "100%",
      padding: "12px",
      borderRadius: "12px",
      border: "none",
      marginBottom: "10px",
      boxSizing: "border-box",
      background: theme.input,
      color: theme.inputText,
      fontSize: "15px"
    }
  };

  function addCustomCategory() {
    const name = customCategory.name.trim();
    if (!name) return;

    setSubjects({
      ...subjects,
      [name]: {
        icon: customCategory.icon.trim() || "📌",
        description: customCategory.description.trim() || "Custom workspace for assignments, notes, and reminders.",
        tasks: ["Add your first task", "Write notes", "Check due dates"]
      }
    });

    setCustomCategory({ name: "", icon: "", description: "" });
    setSelectedSubject(name);
  }

  function deleteCategory(subject) {
    if (defaultSubjects[subject]) return;
    const updated = { ...subjects };
    delete updated[subject];
    setSubjects(updated);
    setDueSoon(dueSoon.filter((item) => item.subject !== subject));
    setSelectedSubject("Home");
  }

  function addDueTask() {
    if (!newDue.task.trim() || !newDue.date.trim()) return;
    setDueSoon([...dueSoon, newDue]);
    setNewDue({ subject: subjectNames[0] || "Other", task: "", date: "" });
  }

  function deleteDueTask(index) {
    setDueSoon(dueSoon.filter((_, itemIndex) => itemIndex !== index));
  }

  function updateDueTask(index, field, value) {
    const updated = [...dueSoon];
    updated[index] = { ...updated[index], [field]: value };
    setDueSoon(updated);
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  }

  function calculateGPA() {
    const points = gpaGrades.map(Number).filter((grade) => !isNaN(grade));
    if (points.length === 0) return "0.00";
    const average = points.reduce((sum, grade) => sum + grade, 0) / points.length;
    return average.toFixed(2);
  }

  function HomePage() {
    return (
      <>
        <div style={styles.card}>
          <h1 style={{ fontSize: "42px", margin: 0 }}>Ocean School Dashboard 🌊</h1>
          <p style={{ fontSize: "18px", opacity: 0.9 }}>Click a subject to open its detailed workspace. Your due dates, custom categories, and notes save on this browser.</p>
          <button style={styles.primaryButton} onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <div style={styles.subjectGrid}>
          {subjectNames.map((subject) => (
            <button key={subject} style={styles.subjectCard} onClick={() => setSelectedSubject(subject)}>
              <div style={{ fontSize: "38px" }}>{subjects[subject].icon}</div>
              <h2>{subject}</h2>
              <p>{subjects[subject].description}</p>
              <strong>Open section →</strong>
            </button>
          ))}
        </div>

        <AddCategoryBox />
        <EditableDueSoon />

        <div style={styles.subjectGrid}>
          <StudyTimer />
          <GpaCalculator />
          <CalendarPreview />
        </div>
      </>
    );
  }

  function AddCategoryBox() {
    return (
      <div style={{ ...styles.card, marginTop: "25px" }}>
        <h2>+ Add Custom Category 📌</h2>
        <p>Create your own section for any class, club, exam, project, or reminder.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 120px 2fr auto", gap: "10px" }}>
          <input style={styles.input} value={customCategory.name} onChange={(event) => setCustomCategory({ ...customCategory, name: event.target.value })} placeholder="Category name, ex: Psychology" />
          <input style={styles.input} value={customCategory.icon} onChange={(event) => setCustomCategory({ ...customCategory, icon: event.target.value })} placeholder="Logo, ex: 🧠" />
          <input style={styles.input} value={customCategory.description} onChange={(event) => setCustomCategory({ ...customCategory, description: event.target.value })} placeholder="Description, optional" />
          <button style={styles.primaryButton} onClick={addCustomCategory}>+ Add</button>
        </div>
      </div>
    );
  }

  function EditableDueSoon() {
    return (
      <div style={{ ...styles.card, marginTop: "25px" }}>
        <h2>Editable Due Soon ⏰</h2>
        {dueSoon.map((item, index) => (
          <div key={index} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto", gap: "10px", marginBottom: "10px" }}>
            <select style={styles.input} value={item.subject} onChange={(event) => updateDueTask(index, "subject", event.target.value)}>
              {subjectNames.map((subject) => <option key={subject}>{subject}</option>)}
            </select>
            <input style={styles.input} value={item.task} onChange={(event) => updateDueTask(index, "task", event.target.value)} placeholder="Assignment" />
            <input style={styles.input} value={item.date} onChange={(event) => updateDueTask(index, "date", event.target.value)} placeholder="Due date" />
            <button style={styles.primaryButton} onClick={() => deleteDueTask(index)}>Delete</button>
          </div>
        ))}

        <h3>Add new due date</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto", gap: "10px" }}>
          <select style={styles.input} value={newDue.subject} onChange={(event) => setNewDue({ ...newDue, subject: event.target.value })}>
            {subjectNames.map((subject) => <option key={subject}>{subject}</option>)}
          </select>
          <input style={styles.input} value={newDue.task} onChange={(event) => setNewDue({ ...newDue, task: event.target.value })} placeholder="Assignment name" />
          <input style={styles.input} value={newDue.date} onChange={(event) => setNewDue({ ...newDue, date: event.target.value })} placeholder="Due date" />
          <button style={styles.primaryButton} onClick={addDueTask}>Add</button>
        </div>
      </div>
    );
  }

  function StudyTimer() {
    return (
      <div style={styles.card}>
        <h2>Study Timer ⏱️</h2>
        <p style={{ fontSize: "38px", fontWeight: "bold", margin: "10px 0" }}>{formatTime(timerSeconds)}</p>
        <button style={styles.primaryButton} onClick={() => setTimerRunning(!timerRunning)}>{timerRunning ? "Pause" : "Start"}</button>
        <button style={styles.primaryButton} onClick={() => { setTimerRunning(false); setTimerSeconds(25 * 60); }}>Reset</button>
        <button style={styles.primaryButton} onClick={() => { setTimerRunning(false); setTimerSeconds(5 * 60); }}>5 min break</button>
      </div>
    );
  }

  function GpaCalculator() {
    return (
      <div style={styles.card}>
        <h2>GPA Calculator 📊</h2>
        <p>Enter grade points like 4.0, 3.7, 3.3, etc.</p>
        {gpaGrades.map((grade, index) => (
          <input key={index} style={styles.input} value={grade} onChange={(event) => {
            const updated = [...gpaGrades];
            updated[index] = event.target.value;
            setGpaGrades(updated);
          }} placeholder={`Class ${index + 1} grade point`} />
        ))}
        <h3>Estimated GPA: {calculateGPA()}</h3>
      </div>
    );
  }

  function CalendarPreview() {
    return (
      <div style={styles.card}>
        <h2>Homework Calendar 📅</h2>
        <p>This shows your due list in a calendar-style view.</p>
        {dueSoon.map((item, index) => (
          <div key={index} style={{ background: "rgba(255,255,255,0.16)", padding: "12px", borderRadius: "14px", marginBottom: "10px" }}>
            <strong>{item.date}</strong>
            <p style={{ margin: "5px 0" }}>{item.subject}: {item.task}</p>
          </div>
        ))}
      </div>
    );
  }

  function SubjectPage({ subject }) {
    const data = subjects[subject];
    const subjectDue = dueSoon.filter((item) => item.subject === subject);
    const isCustom = !defaultSubjects[subject];

    return (
      <>
        <button onClick={() => setSelectedSubject("Home")} style={{ ...styles.button, width: "170px", marginBottom: "20px" }}>
          ← Back Home
        </button>

        <div style={styles.card}>
          <h1 style={{ fontSize: "40px", margin: 0 }}>{data.icon} {subject}</h1>
          <p style={{ fontSize: "18px", opacity: 0.9 }}>{data.description}</p>
          {isCustom && <button style={styles.dangerButton} onClick={() => deleteCategory(subject)}>Delete Custom Category</button>}
        </div>

        <div style={styles.subjectGrid}>
          <div style={styles.card}>
            <h2>Tasks ✅</h2>
            {data.tasks.map((task, index) => (
              <label key={index} style={{ display: "block", marginBottom: "12px" }}>
                <input type="checkbox" /> {task}
              </label>
            ))}
          </div>

          <div style={styles.card}>
            <h2>Due Dates ⏰</h2>
            {subjectDue.length === 0 ? <p>No due dates yet.</p> : subjectDue.map((item, index) => (
              <p key={index}><strong>{item.task}</strong> — {item.date}</p>
            ))}
          </div>

          <div style={styles.card}>
            <h2>Saved Notes 📝</h2>
            <textarea
              value={notes[subject] || ""}
              onChange={(event) => setNotes({ ...notes, [subject]: event.target.value })}
              placeholder={`Write your ${subject} notes here...`}
              style={{
                width: "100%",
                minHeight: "180px",
                borderRadius: "14px",
                border: "none",
                padding: "12px",
                boxSizing: "border-box",
                fontSize: "15px",
                background: theme.input,
                color: theme.inputText
              }}
            />
            <p style={{ fontSize: "13px", opacity: 0.8 }}>Notes save automatically on this browser.</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <div style={styles.page}>
      <style>{`
        @keyframes waveMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 850px) {
          aside { display: none; }
          main { padding: 18px !important; }
          .responsive-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div style={styles.wave}></div>

      <aside style={styles.sidebar}>
        <h2>Ocean Hub 🌊</h2>
        <p style={{ opacity: 0.85 }}>Essentials</p>

        <button style={styles.button} onClick={() => setSelectedSubject("Home")}>🏠 Home</button>

        {subjectNames.map((subject) => (
          <button key={subject} style={styles.button} onClick={() => setSelectedSubject(subject)}>
            {subjects[subject].icon} {subject}
          </button>
        ))}

        <hr style={{ borderColor: "rgba(255,255,255,0.25)", margin: "20px 0" }} />

        {essentials.map((item) => (
          <a key={item.name} href={item.link} target="_blank" rel="noreferrer" style={styles.link}>
            {item.icon} {item.name}
          </a>
        ))}

        <button style={styles.button} onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </aside>

      <main style={styles.main}>
        {selectedSubject === "Home" ? <HomePage /> : <SubjectPage subject={selectedSubject} />}
      </main>
    </div>
  );
}
