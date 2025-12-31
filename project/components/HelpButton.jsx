"use client";
import { useState } from "react";
import Chatbot from "./Chatbot";

export default function HelpButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} style={helpBtn}>
        ❓ Help
      </button>

      {open && <Chatbot onClose={() => setOpen(false)} />}
    </>
  );
}

const helpBtn = {
  position: "fixed",
  bottom: 20,
  right: 20,
  padding: "10px 15px",
  background: "#e11d48",
  color: "#fff",
  borderRadius: 20,
  border: "none",
  cursor: "pointer"
};
