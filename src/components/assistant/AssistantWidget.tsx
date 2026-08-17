"use client";

import { useEffect, useRef, useState } from "react";
import {
  CALENDLY_URL,
  KEMI_EMAIL,
  KEMI_NAME,
  QUOTE_URL,
  STARTER_PROMPTS,
  TEAM_EMAIL,
  WHATSAPP_URL,
  matchAnswer,
  type MatchResult,
} from "@/lib/assistant-knowledge";

interface Message {
  id: number;
  role: "user" | "assistant";
  text: string;
  handoff?: MatchResult["handoff"];
  showNotifyForm?: boolean;
}

const WELCOME =
  "Hi, I'm the Floats assistant. Ask me about what we build, what it costs, turnaround times, or how realmspace measures an activation — and I'll point you the right way.";

let nextId = 1;

export function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: "assistant", text: WELCOME },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  const push = (m: Omit<Message, "id">) =>
    setMessages((prev) => [...prev, { ...m, id: nextId++ }]);

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text || typing) return;
    push({ role: "user", text });
    setInput("");
    setTyping(true);
    const result = matchAnswer(text);
    // Simulate a short retrieval/typing delay so the harness feels responsive
    // but not instant (this is where the LLM call lands in the full build).
    window.setTimeout(() => {
      push({ role: "assistant", text: result.answer, handoff: result.handoff });
      setTyping(false);
    }, 400 + Math.random() * 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close assistant" : "Open assistant"}
        className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full bg-cobalt text-white pl-4 pr-5 py-3 text-sm font-medium shadow-xl hover:bg-cobalt/90 transition-all"
      >
        {open ? (
          <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.9 9.9 0 01-3.53-.65L3 20l1.35-3.5A7.7 7.7 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
        Ask Floats
      </button>

      {/* Panel */}
      <div
        className={`fixed bottom-20 right-5 z-[60] flex w-[380px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-mist/40 bg-white shadow-2xl transition-all duration-200 ${
          open
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-3 opacity-0 pointer-events-none"
        }`}
        style={{ height: "min(600px, calc(100vh - 7rem))" }}
      >
        {/* Header */}
        <div className="bg-inkwell px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="flex size-2.5 rounded-full bg-cobalt" />
            <h3 className="text-white font-medium">Ask Floats</h3>
          </div>
          <p className="text-[12px] text-mist mt-0.5">
            realmspace assistant · instant answers, no bots on hold
          </p>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto bg-ecru/40 px-4 py-4 space-y-3">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-cobalt text-white rounded-br-sm"
                    : "bg-white text-inkwell border border-mist/40 rounded-bl-sm"
                }`}
              >
                <p>{m.text}</p>

                {m.handoff === "quote" && (
                  <a
                    href={QUOTE_URL}
                    className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-inkwell text-white px-4 py-2 text-[13px] font-medium hover:bg-inkwell/90 transition-colors"
                  >
                    Get my quote
                    <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )}

                {m.handoff === "unknown" && (
                  <div className="mt-3 space-y-2">
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-cobalt/40 text-cobalt px-3.5 py-1.5 text-[13px] font-medium hover:bg-cobalt hover:text-white transition-colors"
                      >
                        Book a call
                      </a>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-cobalt/40 text-cobalt px-3.5 py-1.5 text-[13px] font-medium hover:bg-cobalt hover:text-white transition-colors"
                      >
                        WhatsApp us
                      </a>
                      <a
                        href={`mailto:${KEMI_EMAIL}?subject=${encodeURIComponent(
                          "Question for the Floats team",
                        )}&body=${encodeURIComponent("Hi " + KEMI_NAME + ",\n\nI had a question the assistant couldn't answer yet:\n\n")}`}
                        className="rounded-full border border-cobalt/40 text-cobalt px-3.5 py-1.5 text-[13px] font-medium hover:bg-cobalt hover:text-white transition-colors"
                      >
                        Email {KEMI_NAME}
                      </a>
                    </div>

                    <button
                      onClick={() => {
                        setMessages((prev) =>
                          prev.map((msg) =>
                            msg.id === m.id ? { ...msg, showNotifyForm: !msg.showNotifyForm } : msg,
                          ),
                        );
                      }}
                      className="text-[12px] text-inkwell/50 underline underline-offset-2 hover:text-inkwell transition-colors"
                    >
                      We&apos;ll email you when we have an answer
                    </button>

                    {m.showNotifyForm && (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          if (!notifyEmail.trim()) return;
                          window.location.href = `mailto:${TEAM_EMAIL}?subject=${encodeURIComponent(
                            "Please notify me when you can answer my question",
                          )}&body=${encodeURIComponent(
                            "My question was: " + m.text + "\n\nNotify me at: " + notifyEmail,
                          )}`;
                        }}
                        className="flex gap-2"
                      >
                        <input
                          type="email"
                          required
                          value={notifyEmail}
                          onChange={(e) => setNotifyEmail(e.target.value)}
                          placeholder="Your email"
                          className="min-w-0 flex-1 rounded-full border border-mist/60 bg-white px-3.5 py-1.5 text-[13px] text-inkwell placeholder:text-inkwell/40 focus:outline-none focus:border-cobalt"
                        />
                        <button
                          type="submit"
                          className="rounded-full bg-cobalt text-white px-3.5 py-1.5 text-[13px] font-medium hover:bg-cobalt/90 transition-colors"
                        >
                          Notify me
                        </button>
                      </form>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex justify-start">
              <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm bg-white border border-mist/40 px-4 py-3">
                <span className="size-1.5 rounded-full bg-inkwell/40 animate-bounce" />
                <span className="size-1.5 rounded-full bg-inkwell/40 animate-bounce [animation-delay:120ms]" />
                <span className="size-1.5 rounded-full bg-inkwell/40 animate-bounce [animation-delay:240ms]" />
              </div>
            </div>
          )}
        </div>

        {/* Starter prompts (only before the user has asked anything) */}
        {messages.length <= 1 && (
          <div className="px-4 pb-2 bg-ecru/40">
            <p className="text-[11px] text-inkwell/40 mb-2">Popular questions</p>
            <div className="flex flex-wrap gap-2">
              {STARTER_PROMPTS.map((p) => (
                <button
                  key={p}
                  onClick={() => send(p)}
                  className="rounded-full border border-mist bg-white px-3 py-1.5 text-[12px] text-inkwell/70 hover:border-cobalt hover:text-cobalt transition-colors"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-mist/40 bg-white px-3 py-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question…"
            className="min-w-0 flex-1 rounded-full border border-mist/60 bg-ecru/40 px-4 py-2.5 text-sm text-inkwell placeholder:text-inkwell/40 focus:outline-none focus:border-cobalt"
          />
          <button
            type="submit"
            disabled={!input.trim() || typing}
            aria-label="Send"
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-cobalt text-white hover:bg-cobalt/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}
