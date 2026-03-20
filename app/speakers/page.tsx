import Link from "next/link";
import { ContactButton } from "@/components/ui/contact-button";
import { SpeakerCard } from "@/components/ui/speaker-card";
import { img } from "@/lib/img-path";

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
    photo: img("/images/michael-brand.png"),
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
    photo: img("/images/bella-raja.jpg"),
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
    photo: img("/images/lauren-chambers.jpg"),
  },
  {
    initials: "ML",
    name: "Michael Lu '21",
    affiliation: "NVIDIA",
    topic: "From MA to NVIDIA: AI & Autonomous Vehicles",
    date: "April 23, 2026 · BBLC Lecture Hall",
    badge: "MA Alum",
    badgeVariant: "alumni",
    bio: "Michael graduated from Marin Academy in 2021 and went on to earn a B.S. in Applied Math–CS and an M.S. in Computer Science from Brown University. He's now a Software Engineer at NVIDIA specializing in simulation and model evaluation for autonomous vehicle development. He'll share the real path from MA to a career at the center of the AI revolution.",
    tags: ["Autonomous Vehicles", "Software Engineering", "MA Alum '21"],
    photo: img("/images/michael-lu.jpg"),
  },
  {
    initials: "MF",
    name: "Matt Flannery",
    affiliation: "Branch.co / Kiva.org",
    topic: "Machine Learning & Financial Inclusion",
    date: "April 30, 2026 · BBLC Lecture Hall",
    badge: "Upcoming",
    badgeVariant: "upcoming",
    bio: "Matt Flannery is the CEO and founder of Branch.co and co-founder of Kiva.org. Branch uses machine learning to assess creditworthiness via smartphone data, serving borrowers in India, Nigeria, and Kenya. He'll discuss how algorithmic lending works in practice, why transparency matters when AI makes financial decisions, and what 'fair' looks like in automated systems.",
    tags: ["FinTech", "Machine Learning", "Global Markets"],
    photo: img("/images/matt-flannery.jpg"),
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
    photo: img("/images/ava-iannuccillo.jpg"),
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
              <SpeakerCard key={s.name} s={s} />
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
