"use client";
import { useState } from "react";

export default function Chatbot({ onClose }) {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Namaste! Main HemoBot hoon 🩸. Kaise madad kar sakta hoon?" }
  ]);
  const [input, setInput] = useState("");

  async function sendMessage() {
    if (!input) return;

    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setInput("");

    const res = await fetch("https://YOUR-BACKEND.onrender.com/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
  }

  return (
    <div style={overlay}>
      <div style={box}>
        <div style={header}>
          <b>🩸 HemoBot</b>
          <button onClick={onClose}>❌</button>
        </div>

        <div style={chat}>
          {messages.map((m, i) => (
            <p key={i}><b>{m.role === "user" ? "You" : "Bot"}:</b> {m.content}</p>
          ))}
        </div>

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

/* styles */
const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000
};

const box = {
  width: 350,
  background: "#fff",
  borderRadius: 10,
  padding: 10
};

const header = {
  display: "flex",
  justifyContent: "space-between"
};

const chat = {
  height: 250,
  overflowY: "auto",
  margin: "10px 0"
};
