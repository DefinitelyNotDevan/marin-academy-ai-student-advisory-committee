"use client";
import { useState } from "react";
import Image from "next/image";

type BadgeVariant = "past" | "next" | "today" | "upcoming" | "alumni";

interface Speaker {
  initials: string;
  name: string;
  affiliation: string;
  topic: string;
  date: string;
  badge: string;
  badgeVariant: BadgeVariant;
  bio: string;
  tags: string[];
  photo?: string;
  highlight?: boolean;
}

const badgeStyles: Record<BadgeVariant, string> = {
  past:     "bg-gray-100 text-gray-500",
  next:     "bg-yellow-100 text-yellow-700 ring-1 ring-yellow-300",
  today:    "bg-[#BE2828] text-white ring-1 ring-[#BE2828]",
  upcoming: "bg-blue-50 text-blue-700",
  alumni:   "bg-red-50 text-[#BE2828]",
};

export function SpeakerCard({ s }: { s: Speaker }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      onClick={() => setExpanded((e) => !e)}
      className={`rounded-2xl border bg-white shadow-sm flex flex-col overflow-hidden transition-all cursor-pointer hover:shadow-md ${
        s.highlight ? "border-[#BE2828] shadow-red-100" : "border-gray-200"
      }`}
    >
      {/* Card header */}
      <div className="flex items-start gap-3 p-5 pb-0">
        {s.photo ? (
          <Image
            src={s.photo}
            alt={s.name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-100 shrink-0"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#BE2828] to-[#e04444] grid place-items-center text-white font-bold text-sm shrink-0">
            {s.initials}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="font-semibold text-[#111]">{s.name}</div>
          <div className="text-gray-500 text-xs">{s.affiliation}</div>
        </div>
        <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full shrink-0 ${badgeStyles[s.badgeVariant]}`}>
          {s.badge}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col gap-2 flex-1">
        <div className="flex items-center gap-1.5 text-gray-400 text-xs">
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <rect x="1" y="2" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M1 5.5h12" stroke="currentColor" strokeWidth="1.5" />
            <path d="M4 1v2M10 1v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          {s.date}
        </div>
        <div className="text-[#BE2828] text-sm font-semibold">{s.topic}</div>
        <p className={`text-gray-600 text-sm leading-relaxed transition-all ${expanded ? "" : "line-clamp-4"}`}>
          {s.bio}
        </p>
        <div className="text-xs text-gray-400 mt-1">
          {expanded ? "Click to collapse ↑" : "Click to read more ↓"}
        </div>
      </div>

      {/* Tags */}
      <div className="px-5 pb-5 flex flex-wrap gap-1.5">
        {s.tags.map((t) => (
          <span key={t} className="text-[11px] bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
