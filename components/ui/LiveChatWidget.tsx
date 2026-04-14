"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, ChevronRight, Send } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

// ─── Quick reply topics ───────────────────────────────────────────────────────
const TOPICS = [
  {
    icon: "🕋",
    label: "Umrah Packages 2026",
    reply: "Assalamu Alaikum! I'd like to know more about your Umrah packages for 2026. Could you help me?",
    response: "We have 3★ packages from £1,900 and 5★ from £2,100 per person — both include flights, hotels near the Haram, and guided Ziyarah. Shall I send you the full details on WhatsApp?",
  },
  {
    icon: "🌙",
    label: "Hajj 2026 Information",
    reply: "Assalamu Alaikum! I'd like information about your Hajj 2026 packages. Could you help me?",
    response: "Our Hajj 2026 packages are being finalised. We'd love to add you to the priority waiting list — shall I connect you on WhatsApp?",
  },
  {
    icon: "✨",
    label: "Ramadan Umrah",
    reply: "Assalamu Alaikum! I'm interested in performing Umrah during Ramadan 2027. Could you provide more details?",
    response: "Ramadan Umrah carries the reward of Hajj! We're taking bookings for Ramadan 2027 now. Spaces are very limited — let me connect you to our team on WhatsApp.",
  },
  {
    icon: "👥",
    label: "Group Booking",
    reply: "Assalamu Alaikum! I'm interested in arranging a group Umrah booking. Could you help me?",
    response: "We specialise in group bookings for mosques, families, and organisations. Groups of 10+ get exclusive pricing and a dedicated coordinator. Want to discuss on WhatsApp?",
  },
  {
    icon: "💰",
    label: "Pricing & Payment Plans",
    reply: "Assalamu Alaikum! I'd like to know about your pricing and payment plan options. Could you help me?",
    response: "We offer flexible payment plans — spread your cost over monthly instalments with no interest. Shall I share the full breakdown on WhatsApp?",
  },
  {
    icon: "✈️",
    label: "Flights & Departures",
    reply: "Assalamu Alaikum! I'd like to know about flight and departure city options for Umrah. Could you help me?",
    response: "We depart from London, Manchester, Birmingham, Leeds, Glasgow & Edinburgh. All packages include return flights. Want to check availability from your city on WhatsApp?",
  },
];

// ─── Types ────────────────────────────────────────────────────────────────────
type Message = {
  id: number;
  from: "agent" | "user";
  text: string;
  time: string;
};

function now() {
  return new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function LiveChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      from: "agent",
      text: "Assalamu Alaikum! 👋 Welcome to Al-Hidaayah Platinum Travels. How can we help you plan your sacred journey today?",
      time: now(),
    },
  ]);
  const [activeTopic, setActiveTopic] = useState<number | null>(null);
  const [typing, setTyping] = useState(false);
  const [showTopics, setShowTopics] = useState(true);
  const [inputText, setInputText] = useState("");
  const [hasUnread, setHasUnread] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Clear unread when opened
  useEffect(() => {
    if (open) setHasUnread(false);
  }, [open]);

  const handleTopic = (index: number) => {
    if (activeTopic !== null) return;
    setActiveTopic(index);
    setShowTopics(false);
    const topic = TOPICS[index];

    // User message
    const userMsg: Message = { id: Date.now(), from: "user", text: topic.label, time: now() };
    setMessages((m) => [...m, userMsg]);

    // Typing indicator → then agent response
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      const agentMsg: Message = { id: Date.now() + 1, from: "agent", text: topic.response, time: now() };
      setMessages((m) => [...m, agentMsg]);
    }, 1400);
  };

  const handleSendCustom = () => {
    if (!inputText.trim()) return;
    const userMsg: Message = { id: Date.now(), from: "user", text: inputText.trim(), time: now() };
    setMessages((m) => [...m, userMsg]);
    setInputText("");
    setShowTopics(false);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      const agentMsg: Message = {
        id: Date.now() + 1,
        from: "agent",
        text: "JazakAllah Khair for your message! For the fastest response, our team is available on WhatsApp. Click below to continue the conversation.",
        time: now(),
      };
      setMessages((m) => [...m, agentMsg]);
    }, 1200);
  };

  const whatsappUrl = activeTopic !== null
    ? getWhatsAppUrl(TOPICS[activeTopic].reply)
    : getWhatsAppUrl("Assalamu Alaikum! I have a question about your Umrah packages.");

  return (
    <>
      {/* ── Chat Window ──────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed bottom-[7.5rem] right-4 md:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm"
          >
            <div className="rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.35)] border border-white/10"
              style={{ background: "linear-gradient(160deg, #0D1B2A 0%, #0a1628 100%)" }}
            >

              {/* Header */}
              <div className="relative px-5 pt-5 pb-4 bg-gradient-to-r from-primary to-primary/80">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gold/20 border-2 border-gold/40 flex items-center justify-center text-lg">
                        🕋
                      </div>
                      <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-primary" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm leading-none">Al-Hidaayah Support</p>
                      <p className="text-emerald-300 text-xs mt-0.5 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                        Online now · Replies instantly
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <X size={14} className="text-white" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="px-4 py-4 space-y-3 h-72 overflow-y-auto scrollbar-hide">

                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.from === "agent" && (
                      <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-xs shrink-0 mt-auto mr-2">
                        🕋
                      </div>
                    )}
                    <div className={`max-w-[80%] ${msg.from === "user" ? "items-end" : "items-start"} flex flex-col`}>
                      <div className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.from === "user"
                          ? "bg-primary text-white rounded-br-sm"
                          : "bg-white/8 text-white/85 rounded-bl-sm border border-white/8"
                      }`}>
                        {msg.text}
                      </div>
                      <span className="text-white/25 text-[10px] mt-1 px-1">{msg.time}</span>
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                <AnimatePresence>
                  {typing && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-xs">🕋</div>
                      <div className="bg-white/8 border border-white/8 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.span
                            key={i}
                            className="w-1.5 h-1.5 rounded-full bg-white/40 block"
                            animate={{ y: [0, -4, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Quick topic buttons */}
                <AnimatePresence>
                  {showTopics && !typing && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="space-y-2 pt-1"
                    >
                      <p className="text-white/30 text-xs px-1 mb-3">Choose a topic to get started:</p>
                      {TOPICS.map((topic, i) => (
                        <motion.button
                          key={i}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06 }}
                          onClick={() => handleTopic(i)}
                          className="w-full flex items-center justify-between gap-3 bg-white/5 hover:bg-white/10 border border-white/8 hover:border-gold/30 rounded-xl px-4 py-2.5 text-left transition-all group"
                        >
                          <span className="flex items-center gap-2.5 text-sm text-white/80 group-hover:text-white">
                            <span>{topic.icon}</span>
                            {topic.label}
                          </span>
                          <ChevronRight size={13} className="text-white/25 group-hover:text-gold shrink-0 transition-colors" />
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* WhatsApp CTA after reply */}
                <AnimatePresence>
                  {activeTopic !== null && !typing && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-xl text-sm transition-all hover:shadow-[0_4px_20px_rgba(37,211,102,0.35)]"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Continue on WhatsApp
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div ref={bottomRef} />
              </div>

              {/* Input bar */}
              <div className="px-4 pb-4 pt-2 border-t border-white/8">
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-4 py-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendCustom()}
                    placeholder="Type a message..."
                    className="flex-1 bg-transparent text-sm text-white placeholder-white/25 focus:outline-none"
                  />
                  <button
                    onClick={handleSendCustom}
                    disabled={!inputText.trim()}
                    className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0 disabled:opacity-30 hover:bg-primary/80 transition-colors"
                  >
                    <Send size={12} className="text-white" />
                  </button>
                </div>
                <p className="text-white/20 text-[10px] text-center mt-2">
                  Powered by Al-Hidaayah Platinum Travels
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Trigger Button ───────────────────────────────────────── */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open live chat"
        className="fixed bottom-[5.5rem] right-4 md:right-6 z-50 flex items-center gap-2.5 group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        {/* Label pill — hidden on mobile, shown on hover on desktop */}
        <AnimatePresence>
          {!open && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="hidden md:block bg-dark/90 backdrop-blur-sm border border-white/10 text-white text-xs font-semibold px-3.5 py-2 rounded-full shadow-lg whitespace-nowrap"
            >
              💬 How can we help?
            </motion.span>
          )}
        </AnimatePresence>

        {/* Icon button */}
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-[0_4px_24px_rgba(26,92,56,0.5)] flex items-center justify-center border-2 border-primary/30">
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X size={22} className="text-white" />
              </motion.div>
            ) : (
              <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <MessageCircle size={22} className="text-white" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Unread dot */}
          <AnimatePresence>
            {hasUnread && !open && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white flex items-center justify-center"
              >
                <span className="text-white text-[8px] font-bold">1</span>
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </motion.button>
    </>
  );
}
