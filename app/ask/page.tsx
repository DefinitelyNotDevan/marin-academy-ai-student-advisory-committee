"use client";
import { useState, useEffect } from "react";

const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL ?? "";

interface QA {
  question: string;
  answer: string;
  category: string;
  answeredAt: string;
}

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      if (inQuotes && line[i + 1] === '"') { field += '"'; i++; }
      else inQuotes = !inQuotes;
    } else if (c === "," && !inQuotes) {
      result.push(field); field = "";
    } else {
      field += c;
    }
  }
  result.push(field);
  return result;
}

function parseQAs(json: { questions?: { question: string; answer: string; category: string; answeredAt: string }[] }): QA[] {
  return (json.questions ?? []).filter(q => q.question && q.answer);
}

export default function AskPage() {
  const [question, setQuestion] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [qas, setQAs] = useState<QA[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!APPS_SCRIPT_URL) return;
    fetch(APPS_SCRIPT_URL)
      .then(r => r.json())
      .then(json => setQAs(parseQAs(json)))
      .catch(() => {});
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!question.trim()) return;
    setFormStatus("submitting");
    try {
      if (APPS_SCRIPT_URL) {
        await fetch(APPS_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: question.trim() }),
        });
      }
      setFormStatus("success");
      setQuestion("");
    } catch {
      setFormStatus("error");
    }
  }

  const filtered = qas.filter(qa =>
    !search ||
    qa.question.toLowerCase().includes(search.toLowerCase()) ||
    qa.answer.toLowerCase().includes(search.toLowerCase()) ||
    qa.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6">
        <div className="w-[min(1140px,100%-2.5rem)] mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#BE2828]/80 mb-4">
            AI &amp; Academic Integrity
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Ask the AI Committee
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Not sure what counts as okay AI use? Been flagged for something you didn't do? Ask us —
            anonymously. We review every question and post answers here so everyone can benefit.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-white/50">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 7v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="8" cy="4.5" r="0.75" fill="currentColor"/>
            </svg>
            100% anonymous — no names, no emails, no tracking
          </div>
        </div>
      </section>

      {/* Submit form */}
      <section className="py-20 px-6">
        <div className="w-[min(680px,100%-2.5rem)] mx-auto">
          {formStatus === "success" ? (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
              <svg className="mx-auto mb-3 text-green-500" width="32" height="32" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 12.5l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h2 className="font-bold text-xl mb-2">Question submitted</h2>
              <p className="text-gray-600 mb-6">
                The committee reviews questions every one to two weeks. When yours is answered, it&apos;ll appear in the Q&amp;A below.
              </p>
              <button
                onClick={() => setFormStatus("idle")}
                className="text-sm text-[#BE2828] hover:underline"
              >
                Submit another question
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="rounded-2xl border border-gray-200 bg-white shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-2">Submit Your Question</h2>
              <p className="text-gray-500 text-sm mb-6">
                Questions are reviewed by the Student AI Advisory Committee and MA faculty. Answers are posted here for everyone to see.
              </p>
              <textarea
                value={question}
                onChange={e => setQuestion(e.target.value)}
                placeholder="e.g. Can I use AI to brainstorm if my teacher didn't mention it? Does Grammarly count as AI? What should I do if I'm accused of using AI and I didn't?"
                rows={5}
                className="w-full rounded-xl border border-gray-200 p-4 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#BE2828]/30 resize-none"
                required
              />
              {formStatus === "error" && (
                <p className="text-red-600 text-sm mt-2">Something went wrong. Please try again.</p>
              )}
              <button
                type="submit"
                disabled={formStatus === "submitting" || !question.trim()}
                className="mt-4 w-full rounded-full bg-[#BE2828] hover:bg-[#a82323] disabled:opacity-50 text-white font-semibold py-3 text-sm transition-colors"
              >
                {formStatus === "submitting" ? "Submitting…" : "Ask Anonymously"}
              </button>
              <p className="text-center text-xs text-gray-400 mt-3">
                We don&apos;t collect any identifying information
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Q&A Feed */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="w-[min(1140px,100%-2.5rem)] mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BE2828]">
              Answered Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3">Q&amp;A</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Student questions, answered by the AI Advisory Committee and faculty. Updated regularly.
            </p>
          </div>

          {qas.length > 0 && (
            <div className="max-w-2xl mx-auto mb-8">
              <input
                type="search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search questions…"
                className="w-full rounded-full border border-gray-200 bg-white px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#BE2828]/30"
              />
            </div>
          )}

          {qas.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <p className="text-lg font-medium mb-2">No answered questions yet</p>
              <p className="text-sm">
                Be the first to ask — the committee reviews questions every one to two weeks.
              </p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <p>No results for &ldquo;{search}&rdquo;</p>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto space-y-4">
              {filtered.map((qa, i) => (
                <QACard key={i} qa={qa} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* What it is / isn't */}
      <section className="py-20 px-6">
        <div className="w-[min(900px,100%-2.5rem)] mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0a0a0a] rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4 text-[#BE2828]">What this is</h3>
              <ul className="space-y-2.5 text-white/70 text-sm">
                {[
                  "A low-pressure place to ask about gray areas before they become problems",
                  "Answered by students and faculty together, so both sides are represented",
                  "A way to get general guidance if you've been wrongly flagged",
                  "A searchable resource — one question answered helps everyone",
                ].map(item => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[#BE2828] shrink-0">&#8594;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-4 text-gray-700">What this isn&apos;t</h3>
              <ul className="space-y-2.5 text-gray-500 text-sm">
                {[
                  "A place to report other students",
                  "A replacement for the formal academic integrity process",
                  "A venue that rules on individual cases",
                  "Anything that tracks or identifies you in any way",
                ].map(item => (
                  <li key={item} className="flex gap-2">
                    <span className="text-gray-400 shrink-0">&#8594;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function QACard({ qa }: { qa: QA }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article
      onClick={() => setExpanded(e => !e)}
      className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="flex items-start gap-3">
        <span className="shrink-0 w-7 h-7 rounded-full bg-[#BE2828]/10 text-[#BE2828] text-xs font-bold grid place-items-center">
          Q
        </span>
        <p className="font-semibold text-[#111] text-sm leading-snug flex-1">{qa.question}</p>
      </div>
      {expanded && (
        <div className="mt-4 flex items-start gap-3">
          <span className="shrink-0 w-7 h-7 rounded-full bg-gray-100 text-gray-500 text-xs font-bold grid place-items-center">
            A
          </span>
          <p className="text-gray-600 text-sm leading-relaxed flex-1">{qa.answer}</p>
        </div>
      )}
      <div className="mt-3 flex items-center justify-between">
        {qa.category ? (
          <span className="text-[11px] bg-gray-100 text-gray-500 px-2.5 py-0.5 rounded-full">
            {qa.category}
          </span>
        ) : <span />}
        <p className="text-xs text-gray-400">{expanded ? "Collapse ↑" : "See answer ↓"}</p>
      </div>
    </article>
  );
}
