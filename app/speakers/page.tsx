import Link from "next/link";
import Image from "next/image";
import { ContactButton } from "@/components/ui/contact-button";

/* ─── Types ─────────────────────────────────────────────────── */
type BadgeVariant = "past" | "next" | "upcoming" | "alumni";

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

/* ─── Data ───────────────────────────────────────────────────── */
const speakers: Speaker[] = [
  {
    initials: "MB",
    name: "Michael Brand",
    affiliation: "UC Berkeley",
    topic: "AI & Environmental Impact",
    date: "February 19, 2026 · In Person",
    badge: "Completed",
    badgeVariant: "past",
    bio: "Michael is a graduate student at UC Berkeley's Goldman School of Public Policy and founder of Building A Sustainable Internet — the world's first undergraduate-taught course on sustainable digital infrastructure. He serves on the California Public Utilities Commission and has presented internationally on the hidden environmental costs of AI and the internet.",
    tags: ["Energy & Data Centers", "Policy", "Sustainability"],
    photo: "/images/michael-brand.png",
  },
  {
    initials: "BR",
    name: "Bella Raja '20",
    affiliation: "University of Cambridge",
    topic: "Conflict Minerals & AI Hardware",
    date: "March 9, 2026 · BBLC Lecture Hall",
    badge: "Completed",
    badgeVariant: "past",
    bio: "A Marin Academy alumna beginning her Ph.D. at the University of Cambridge, Bella studies the intersection of conflict mineral supply chains and AI hardware infrastructure. Her work examines the community impacts of resource extraction on communities affected by the production of AI's physical components — an often invisible dimension of how AI is built.",
    tags: ["Supply Chains", "Global Justice", "MA Alum '20"],
  },
  {
    initials: "LC",
    name: "Lauren Chambers",
    affiliation: "UC Berkeley",
    topic: "Social Justice, Tech & Government",
    date: "March 26, 2026 · BBLC Lecture Hall",
    badge: "Next Up",
    badgeVariant: "next",
    bio: "Lauren Chambers is a researcher at UC Berkeley whose work sits at the crossroads of technology, social justice, and government policy. Her research explores how AI and data systems interact with governance structures — and who benefits, and who is harmed, when these systems make decisions that affect people's lives.",
    tags: ["Social Justice", "Government & Policy", "Equity"],
    highlight: true,
  },
  {
    initials: "ML",
    name: "Michael Lu '21",
    affiliation: "NVIDIA",
    topic: "Life as an AI Engineer",
    date: "April 23, 2026 · BBLC Lecture Hall",
    badge: "MA Alum",
    badgeVariant: "alumni",
    bio: "Michael graduated from Marin Academy in 2021 and is now a software engineer at NVIDIA — one of the companies most central to the AI hardware revolution. He'll share what the path from MA to a career in AI actually looks like, what day-to-day work involves, and his honest perspective on the industry.",
    tags: ["AI Hardware", "Software Engineering", "MA Alum '21"],
  },
  {
    initials: "MF",
    name: "Matt Flannery",
    affiliation: "Branch.co",
    topic: "Impact Investing, Microlending & AI",
    date: "April 30, 2026 · BBLC Lecture Hall",
    badge: "Upcoming",
    badgeVariant: "upcoming",
    bio: "Matt Flannery is the founder of Branch.co, a fintech company focused on microlending and financial access in emerging markets. He'll speak about how AI is being applied to impact investing and financial inclusion — exploring both the transformative potential and the ethical questions that come with deploying AI in high-stakes financial contexts.",
    tags: ["FinTech", "Impact Investing", "Global Markets"],
  },
  {
    initials: "AI",
    name: "Ava Iannuccillo '20",
    affiliation: "UCSF",
    topic: "Human-Centered AI in Science & Education",
    date: "May 15, 2026 · Virtual (Google Meet)",
    badge: "MA Alum",
    badgeVariant: "alumni",
    bio: "Ava is a product engineer and MA '20 alumna specializing in human-centered design and emerging technology. She holds a B.S./M.S. in Human Factors Engineering from Tufts University. As an Associate Product Manager at UCSF's Dyslexia Center, she leads a statewide platform for K–12 dyslexia screening and intervention — using AI to make neuroscience research accessible to classrooms across California.",
    tags: ["Human-Centered Design", "AI in Education", "MA Alum '20"],
    photo: "/images/ava-iannuccillo.jpg",
  },
];

/* ─── Badge styles ───────────────────────────────────────────── */
const badgeStyles: Record<BadgeVariant, string> = {
  past:     "bg-gray-100 text-gray-500",
  next:     "bg-yellow-100 text-yellow-700 ring-1 ring-yellow-300",
  upcoming: "bg-blue-50 text-blue-700",
  alumni:   "bg-red-50 text-[#BE2828]",
};

/* ─── Page ───────────────────────────────────────────────────── */
export default function SpeakersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6">
        <div className="w-[min(1140px,100%-2.5rem)] mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#BE2828]/80 mb-4">
            Spring 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            AI Speaker Series
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Six conversations with researchers, engineers, entrepreneurs, and MA alumni — exploring the
            real-world implications of AI across fields, industries, and communities.
          </p>
        </div>
      </section>

      {/* Speaker Cards */}
      <section className="py-20 px-6">
        <div className="w-[min(1140px,100%-2.5rem)] mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BE2828]">
              Confirmed Speakers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3">
              Meet the Speakers
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From conflict minerals to microlending, from neuroscience to national policy — our speakers
              bring perspectives that go beyond the AI hype.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakers.map((s) => (
              <article
                key={s.name}
                className={`rounded-2xl border bg-white shadow-sm flex flex-col overflow-hidden transition-shadow hover:shadow-md ${
                  s.highlight ? "border-yellow-300 shadow-yellow-100" : "border-gray-200"
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
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">{s.bio}</p>
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 text-center">
        <div className="w-[min(720px,100%-2.5rem)] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in Speaking?</h2>
          <p className="text-white/70 mb-8">
            Are you an MA alumnus working in AI or a researcher interested in visiting? We'd love to hear from you.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <ContactButton className="rounded-full bg-[#BE2828] hover:bg-[#a82323] text-white font-semibold px-6 py-3 text-sm transition-colors">
              Contact the Committee
            </ContactButton>
            <Link href="/" className="rounded-full border border-white/30 hover:bg-white/10 text-white font-semibold px-6 py-3 text-sm transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
