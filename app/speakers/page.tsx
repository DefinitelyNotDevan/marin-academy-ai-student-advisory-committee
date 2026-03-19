import Link from "next/link";
import Image from "next/image";

/* ─── Types ─────────────────────────────────────────────────── */
type BadgeVariant = "past" | "next" | "upcoming" | "alumni";

interface Speaker {
  initials: string;
  name: string;
  org: string;
  topic: string;
  date: string;
  badge: string;
  badgeVariant: BadgeVariant;
  bio: string;
  tags: string[];
  highlight?: boolean;
}

/* ─── Data ───────────────────────────────────────────────────── */
const speakers: Speaker[] = [
  {
    initials: "MB",
    name: "Michael Brand",
    org: "UC Berkeley · Goldman School of Public Policy",
    topic: "AI & Environmental Impact",
    date: "February 19, 2026 · In Person",
    badge: "Completed",
    badgeVariant: "past",
    bio: "Michael is a graduate student at UC Berkeley's Goldman School of Public Policy and founder of Building A Sustainable Internet — the world's first undergraduate-taught course on sustainable digital infrastructure. He serves on the California Public Utilities Commission and has presented internationally on the hidden environmental costs of AI and the internet.",
    tags: ["Energy & Data Centers", "Policy", "Sustainability"],
  },
  {
    initials: "BR",
    name: "Bella Raja '20",
    org: "Oxford / Stanford Ph.D. · MA Alumna",
    topic: "Conflict Minerals & AI Hardware",
    date: "March 9, 2026 · BBLC Lecture Hall",
    badge: "Completed",
    badgeVariant: "past",
    bio: "A Marin Academy alumna now pursuing doctoral research at Oxford and Stanford, Bella studies the intersection of conflict mineral supply chains and AI hardware infrastructure. Her work examines the community impacts of resource extraction on communities affected by the production of AI's physical components — an often invisible dimension of how AI is built.",
    tags: ["Supply Chains", "Global Justice", "MA Alum"],
  },
  {
    initials: "LC",
    name: "Lauren Chambers",
    org: "UC Berkeley Researcher",
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
    org: "Software Engineer · NVIDIA · MA Alumnus",
    topic: "Alumni Perspective: Life as an AI Engineer",
    date: "April 23, 2026 · BBLC Lecture Hall",
    badge: "MA Alum",
    badgeVariant: "alumni",
    bio: "Michael graduated from Marin Academy in 2021 and is now a software engineer at NVIDIA — one of the companies most central to the AI hardware revolution. He'll share what the path from MA to a career in AI actually looks like, what day-to-day work involves, and his honest perspective on the industry.",
    tags: ["AI Hardware", "Software Engineering", "MA Alum '21"],
  },
  {
    initials: "MF",
    name: "Matt Flannery",
    org: "CEO · Branch.co",
    topic: "Impact Investing, Microlending & AI",
    date: "April 30, 2026 · BBLC Lecture Hall",
    badge: "Upcoming",
    badgeVariant: "upcoming",
    bio: "Matt Flannery is the CEO of Branch.co, a fintech company focused on microlending and financial access in emerging markets. He'll speak about how AI is being applied to impact investing and financial inclusion — exploring both the transformative potential and the ethical questions that come with deploying AI in high-stakes financial contexts.",
    tags: ["FinTech", "Impact Investing", "Global Markets"],
  },
  {
    initials: "AI",
    name: "Ava Iannuccillo '20",
    org: "Assoc. Product Manager · UCSF · MA Alumna",
    topic: "Human-Centered AI in Science & Education",
    date: "May 15, 2026 · Virtual (Google Meet)",
    badge: "MA Alum",
    badgeVariant: "alumni",
    bio: "Ava is a product engineer and MA '20 alumna specializing in human-centered design and emerging technology. She holds a B.S./M.S. in Human Factors Engineering from Tufts University. As an Associate Product Manager at UCSF's Dyslexia Center, she leads a statewide platform for K–12 dyslexia screening and intervention — using AI to make neuroscience research accessible to classrooms across California.",
    tags: ["Human-Centered Design", "AI in Education", "MA Alum '20"],
  },
];

/* ─── Badge styles ───────────────────────────────────────────── */
const badgeStyles: Record<BadgeVariant, string> = {
  past:     "bg-gray-100 text-gray-500",
  next:     "bg-yellow-100 text-yellow-700 ring-1 ring-yellow-300",
  upcoming: "bg-blue-50 text-blue-700",
  alumni:   "bg-red-50 text-red-600",
};

/* ─── Page ───────────────────────────────────────────────────── */
export default function SpeakersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6">
        <div className="w-[min(1140px,100%-2.5rem)] mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-red-400 mb-4">
            Spring 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            AI Speaker Series
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mb-8">
            Six conversations with researchers, engineers, entrepreneurs, and MA alumni — exploring the
            real-world implications of AI across fields, industries, and communities.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "📍 BBLC Lecture Hall",
              "🕐 Lunch Time · 1–2 pm",
              "👥 All Students & Faculty Welcome",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white/10 text-white/70 px-4 py-1.5 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Cards */}
      <section className="py-20 px-6">
        <div className="w-[min(1140px,100%-2.5rem)] mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-red-600">
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-400 grid place-items-center text-white font-bold text-sm shrink-0">
                    {s.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-[#111]">{s.name}</div>
                    <div className="text-gray-500 text-xs">{s.org}</div>
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
                  <div className="text-red-600 text-sm font-semibold">{s.topic}</div>
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

      {/* Ava Spotlight */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="w-[min(780px,100%-2.5rem)] mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-red-600">Featured Speaker</span>
            <h2 className="text-3xl font-bold mt-2">Spotlight: Ava Iannuccillo '20</h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="flex gap-6 items-start flex-wrap mb-6">
              <Image
                src="/images/ava-iannuccillo.jpg"
                alt="Ava Iannuccillo"
                width={100}
                height={100}
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-100 shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold mb-1">Ava Iannuccillo</h3>
                <div className="text-red-600 font-medium text-sm">Associate Product Manager · UCSF Dyslexia Center</div>
                <div className="text-gray-500 text-sm mt-1">B.S./M.S. Human Factors Engineering, Tufts University · MA Class of 2020</div>
              </div>
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Ava is a product engineer specializing in human-centered design, scientific research, and emerging technology.
              She has worked across consumer, medical, and assistive technology sectors, and currently leads product
              development at UCSF's Dyslexia Center — a statewide digital screening, intervention, and research platform
              used in K–12 classrooms across California.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The platform translates neuroscience research into practical tools for identifying and supporting students
              with reading challenges. Ava uses AI in design processes and collaborates with researchers to develop
              improved machine learning models for children's speech recognition.
            </p>

            <div className="bg-gray-50 rounded-xl p-5 mb-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-red-600">Session Topics</span>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Personal path: MA, Tufts, and beyond",
                  "Human-centered design principles",
                  "Product design in practice",
                  "AI for science and education",
                  "Q&A with students",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-gray-600">
                    <span className="text-red-500">✦</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-xl px-5 py-4 text-sm text-gray-600">
              <strong className="text-[#111]">📅 May 15, 2026 · 12:40–1:30 pm</strong> — Virtual via Google Meet · Open to all students and faculty
            </div>
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
            <Link href="/about" className="rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 text-sm transition-colors">
              Contact the Committee
            </Link>
            <Link href="/" className="rounded-full border border-white/30 hover:bg-white/10 text-white font-semibold px-6 py-3 text-sm transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
