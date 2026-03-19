import { AuroraBackgroundDemo }  from "@/components/ui/aurora-background-demo";
import { ContainerScroll }       from "@/components/ui/container-scroll-animation";
import Link                       from "next/link";

/* ─── Speaker preview data ──────────────────────────────────── */
const speakers = [
  {
    initials: "MB",
    name: "Michael Brand",
    org: "UC Berkeley · Goldman School",
    topic: "AI & Environmental Impact",
    date: "Feb 19, 2026",
    badge: "Completed",
    badgeColor: "bg-gray-200 text-gray-600",
    tags: ["Energy & Data Centers", "Policy", "Sustainability"],
  },
  {
    initials: "BR",
    name: "Bella Raja '20",
    org: "Oxford / Stanford Ph.D.",
    topic: "Conflict Minerals & AI Hardware",
    date: "Mar 9, 2026",
    badge: "Completed",
    badgeColor: "bg-gray-200 text-gray-600",
    tags: ["Supply Chains", "Global Justice", "MA Alum"],
  },
  {
    initials: "LC",
    name: "Lauren Chambers",
    org: "UC Berkeley Researcher",
    topic: "Social Justice, Tech & Government",
    date: "Mar 26, 2026",
    badge: "Next Up",
    badgeColor: "bg-yellow-100 text-yellow-700",
    tags: ["Social Justice", "Policy", "Equity"],
  },
  {
    initials: "ML",
    name: "Michael Lu '21",
    org: "Software Engineer · NVIDIA",
    topic: "Life as an AI Engineer",
    date: "Apr 23, 2026",
    badge: "Upcoming",
    badgeColor: "bg-blue-50 text-blue-700",
    tags: ["AI Hardware", "Software Eng.", "MA Alum '21"],
  },
  {
    initials: "MF",
    name: "Matt Flannery",
    org: "CEO · Branch.co",
    topic: "Impact Investing & Microlending",
    date: "Apr 30, 2026",
    badge: "Upcoming",
    badgeColor: "bg-blue-50 text-blue-700",
    tags: ["FinTech", "Impact Investing", "Global Markets"],
  },
  {
    initials: "AI",
    name: "Ava Iannuccillo '20",
    org: "Assoc. Product Manager · UCSF",
    topic: "Human-Centered AI in Education",
    date: "May 15, 2026",
    badge: "Upcoming",
    badgeColor: "bg-blue-50 text-blue-700",
    tags: ["Human-Centered Design", "AI in Education", "MA Alum '20"],
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero with Aurora ─────────────────────────────────── */}
      <AuroraBackgroundDemo />

      {/* ── Container Scroll — Speaker Series Preview ───────── */}
      <section className="bg-white overflow-hidden">
        <ContainerScroll
          titleComponent={
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red-600 mb-4">
                Spring 2026
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-[#0a0a0a] font-['Space_Grotesk'] leading-tight">
                Meet the{" "}
                <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                  Speaker Series
                </span>
              </h2>
              <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto">
                Six conversations with researchers, engineers, and MA alumni — exploring AI's real-world impact.
              </p>
            </div>
          }
        >
          {/* Speaker grid inside the scroll card */}
          <div className="h-full overflow-y-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {speakers.map((s) => (
              <div
                key={s.name}
                className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm flex flex-col gap-2"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-400 grid place-items-center text-white text-xs font-bold shrink-0">
                    {s.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm truncate">{s.name}</div>
                    <div className="text-gray-500 text-xs truncate">{s.org}</div>
                  </div>
                  <span className={`ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${s.badgeColor}`}>
                    {s.badge}
                  </span>
                </div>
                <div className="text-red-600 text-xs font-medium">{s.topic}</div>
                <div className="text-gray-400 text-xs">{s.date}</div>
                <div className="flex flex-wrap gap-1 mt-auto">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ContainerScroll>

        {/* CTA below scroll */}
        <div className="text-center pb-20 -mt-10">
          <Link
            href="/speakers"
            className="inline-flex rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-3 transition-colors text-sm"
          >
            View Full Speaker Series →
          </Link>
        </div>
      </section>
    </>
  );
}
