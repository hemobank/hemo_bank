import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Namaste! Main HemoBot hoon 🩸. Aap kya poochna chahoge?" }
  ]);
  const [input, setInput] = useState("");

  async function sendMessage() {
    if (!input) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const res = await fetch("https://chatbot-lato.onrender.com/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();

    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: data.reply },
    ]);
  }

  return (
    <div style={{
      width: 350,
      position: "fixed",
      bottom: 20,
      right: 20,
      border: "1px solid #ccc",
      borderRadius: 10,
      background: "#fff",
      padding: 10
    }}>
      <h3>🩸 HemoBot</h3>

      <div style={{ height: 250, overflowY: "auto" }}>
        {messages.map((m, i) => (
          <p key={i}><b>{m.role === "user" ? "You" : "Bot"}:</b> {m.content}</p>
        ))}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your question..."
        style={{ width: "100%" }}
      />
      <button onClick={sendMessage} style={{ width: "100%", marginTop: 5 }}>
        Send
      </button>
    </div>
  );
}
