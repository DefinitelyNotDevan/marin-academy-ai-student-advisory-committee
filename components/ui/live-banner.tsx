"use client";
import Link from "next/link";

interface Speaker {
  name: string;
  topic: string;
  dateISO: string;
}

export function LiveBanner({ speakers }: { speakers: Speaker[] }) {
  const now = new Date();
  const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const currentHour = now.getHours() + now.getMinutes() / 60;

  const liveSpeaker = speakers.find((s) => {
    const [y, m, d] = s.dateISO.split("-").map(Number);
    const speakerDay = new Date(y, m - 1, d);
    return speakerDay.getTime() === todayMidnight.getTime() && currentHour < 14;
  });

  if (!liveSpeaker) return null;

  return (
    <div className="bg-[#BE2828] text-white text-sm font-semibold px-4 py-2.5 flex items-center justify-center gap-3">
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
      </span>
      <span>
        Live today:{" "}
        <span className="underline underline-offset-2">{liveSpeaker.name}</span>
        {" — "}{liveSpeaker.topic}
      </span>
      <Link
        href="/speakers"
        className="ml-1 border border-white/50 rounded-full px-3 py-0.5 text-xs hover:bg-white/10 transition-colors shrink-0"
      >
        Details →
      </Link>
    </div>
  );
}
