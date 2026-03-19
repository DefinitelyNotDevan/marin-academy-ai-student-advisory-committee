"use client";
import { useState } from "react";

const CONTACT_EMAIL = "rmansfield@ma.org";

export function ContactWidget() {
  const [open, setOpen]         = useState(false);
  const [sent, setSent]         = useState(false);
  const [name, setName]         = useState("");
  const [email, setEmail]       = useState("");
  const [subject, setSubject]   = useState("");
  const [message, setMessage]   = useState("");
  const [error, setError]       = useState(false);

  function handleSend() {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const sub  = subject.trim() || "Message from MA AI Committee Website";
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setTimeout(() => {
      setOpen(false);
      setTimeout(() => {
        setSent(false);
        setName(""); setEmail(""); setSubject(""); setMessage("");
      }, 400);
    }, 3000);
  }

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open contact form"
        aria-expanded={open}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 active:scale-95"
        style={{ backgroundColor: "#BE2828" }}
      >
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <rect x="1" y="3" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M1 5.5l8 5 8-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
        Contact Us
      </button>

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Contact form"
          className="fixed bottom-20 right-6 z-50 w-[340px] rounded-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-start justify-between px-5 py-4 border-b border-gray-100">
            <div>
              <div className="font-semibold text-[#111]">Get in Touch</div>
              <div className="text-gray-400 text-xs mt-0.5">We'll get back to you soon</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close contact form"
              className="text-gray-400 hover:text-gray-600 text-lg leading-none mt-0.5"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          {!sent ? (
            <div className="px-5 py-4 flex flex-col gap-3">
              {[
                { id: "c-name",    label: "Your Name",   type: "text",  val: name,    set: setName,    ph: "e.g. Alex Smith" },
                { id: "c-email",   label: "Your Email",  type: "email", val: email,   set: setEmail,   ph: "you@example.com" },
                { id: "c-subject", label: "Subject",     type: "text",  val: subject, set: setSubject, ph: "e.g. Speaking invitation…" },
              ].map(({ id, label, type, val, set, ph }) => (
                <div key={id} className="flex flex-col gap-1">
                  <label htmlFor={id} className="text-xs font-medium text-gray-600">{label}</label>
                  <input
                    id={id}
                    type={type}
                    value={val}
                    onChange={(e) => set(e.target.value)}
                    placeholder={ph}
                    className="rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#BE2828] transition-colors"
                  />
                </div>
              ))}
              <div className="flex flex-col gap-1">
                <label htmlFor="c-msg" className="text-xs font-medium text-gray-600">Message</label>
                <textarea
                  id="c-msg"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what's on your mind…"
                  className="rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#BE2828] transition-colors resize-none"
                />
              </div>
              <button
                onClick={handleSend}
                className="w-full rounded-lg py-2.5 text-sm font-semibold text-white transition-colors"
                style={{ backgroundColor: error ? "#6b7280" : "#BE2828" }}
              >
                {error ? "Please fill in all fields" : "Send Message →"}
              </button>
            </div>
          ) : (
            <div className="px-5 py-8 text-center">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="font-semibold text-[#111] mb-1">Message Ready!</h3>
              <p className="text-gray-500 text-sm">Your email client will open with the message pre-filled.</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
