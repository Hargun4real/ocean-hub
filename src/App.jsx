import React from "react";

export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #001f3f, #005f99, #00bcd4)",
      color: "white",
      fontFamily: "Arial, sans-serif",
      padding: "30px"
    }}>
      <h1>Ocean School Dashboard 🌊</h1>
      <p>Your organized schoolwork hub.</p>

      <div style={{ display: "flex", gap: "20px", marginTop: "30px", flexWrap: "wrap" }}>
        {["Social Studies", "Science", "Math", "English", "Other"].map((subject) => (
          <div key={subject} style={{
            background: "rgba(255,255,255,0.15)",
            padding: "20px",
            borderRadius: "20px",
            width: "220px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
          }}>
            <h2>{subject}</h2>
            <p>Assignments, notes, and study tasks.</p>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: "35px",
        background: "rgba(255,255,255,0.15)",
        padding: "25px",
        borderRadius: "20px"
      }}>
        <h2>Due Soon ⏰</h2>
        <ul>
          <li>Math assignment — Tomorrow</li>
          <li>Science lab — Friday</li>
          <li>English essay — Next week</li>
        </ul>
      </div>

      <div style={{
        marginTop: "35px",
        background: "rgba(255,255,255,0.15)",
        padding: "25px",
        borderRadius: "20px"
      }}>
        <h2>Essentials 💻</h2>
        <p>
          <a href="https://chatgpt.com" style={{ color: "white" }}>ChatGPT</a> |{" "}
          <a href="https://classroom.google.com" style={{ color: "white" }}>Google Classroom</a> |{" "}
          <a href="https://docs.google.com" style={{ color: "white" }}>Google Docs</a>
        </p>
      </div>
    </div>
  );
}
