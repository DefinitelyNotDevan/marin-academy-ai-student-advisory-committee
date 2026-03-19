import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6">
        <div className="w-[min(1140px,100%-2.5rem)] mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#BE2828]/80 mb-4">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About the AI Advisory Committee
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            A student-led group at Marin Academy dedicated to honest, grounded exploration of artificial
            intelligence — its opportunities, its risks, and its real-world implications.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6">
        <div className="w-[min(1140px,100%-2.5rem)] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: text */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#BE2828]">Our Purpose</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5">
                Students Thinking Critically About AI
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The AI Student Advisory Committee is made up of students at Marin Academy who are passionate
                about understanding how artificial intelligence shapes our world — not just the technical side, but the
                human, ethical, and social dimensions.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We believe the most important conversations about AI aren't happening in boardrooms — they're happening
                right here, among young people who will inherit the world these technologies are building.
              </p>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Our work focuses on moving past the hype and headlines to engage with AI's real implications: for our
                school, our community, and the world.
              </p>

              {/* Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: "🔍", title: "Critical Inquiry", desc: "We ask hard questions about AI rather than accepting it at face value — exploring what it can and can't do, and who it serves." },
                  { icon: "🌐", title: "Real-World Connections", desc: "We bring in practitioners and researchers who work with AI daily — not to lecture, but to have honest conversations." },
                  { icon: "🤝", title: "Community Engagement", desc: "Our events are open to all students and faculty at Marin Academy — no background in tech required." },
                  { icon: "📚", title: "Informed Perspective", desc: "We want MA students to enter college and careers with nuanced, grounded views on AI's role in society." },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="text-2xl mb-2">{icon}</div>
                    <h3 className="font-semibold text-[#111] mb-1">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: info card */}
            <div className="bg-[#0a0a0a] text-white rounded-2xl p-6 divide-y divide-white/10">
              {[
                { icon: "🏫", label: "School", value: "Marin Academy, San Rafael, CA" },
                { icon: "📅", label: "Current Program", value: "Spring 2026 AI Speaker Series" },
                { icon: "📍", label: "Speaker Series Location", value: "BBLC Lecture Hall · Lunch Block · 1–2 pm" },
                { icon: "🎙️", label: "Speaker Types", value: "MA Alumni, UC Berkeley researchers, industry leaders, entrepreneurs" },
                { icon: "🌱", label: "Topics We Explore", value: "Environmental impact · Social justice · Education · Policy · Careers · Ethics" },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                  <span className="text-xl shrink-0">{icon}</span>
                  <div>
                    <div className="text-white/50 text-xs font-medium mb-0.5">{label}</div>
                    <div className="text-white text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="w-[min(1140px,100%-2.5rem)] mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BE2828]">Our Work</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3">
              What the Committee Does
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From organizing speaker events to advising on AI at MA, we work to make sure student voices are
              part of the conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🎤", title: "Speaker Series", desc: "We organize a curated series of talks each semester, bringing in researchers, engineers, founders, and MA alumni to speak candidly about their work in AI — during lunch, open to all." },
              { icon: "💬", title: "Honest Conversations", desc: "We don't host panels designed to hype AI or bash it. We aim for candid, informed discussions that help students develop their own views — based on real information." },
              { icon: "📢", title: "Community Outreach", desc: "We announce events school-wide, coordinate with faculty, and work to make sure all students — regardless of technical background — feel welcome and included." },
              { icon: "🏛️", title: "Advisory Role", desc: "As an advisory committee, we aim to represent the student perspective in conversations about how AI is — and should be — used in our school community and educational environment." },
              { icon: "🛠️", title: "Workshops & Events", desc: "We're building out hands-on programming beyond the speaker series — including student workshops and community events exploring AI tools, ethics, and real-world applications. Stay tuned." },
              { icon: "🔬", title: "Student Research", desc: "We connect students with opportunities to explore AI more deeply — through independent projects, faculty collaboration, and connections to researchers doing work that matters." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-semibold text-[#111] mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions We're Exploring */}
      <section className="py-20 px-6">
        <div className="w-[min(1140px,100%-2.5rem)] mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BE2828]">Why It Matters</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3">
              The Questions We're Exploring
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our speaker series isn't just about AI — it's about the world AI is building, and our role in shaping it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { icon: "🌏", q: "What does it cost to build AI?", a: "The minerals in AI chips come from somewhere. The power that runs data centers has to come from somewhere. What are the real environmental and human costs behind AI infrastructure?" },
              { icon: "⚖️", q: "Who does AI serve — and who does it harm?", a: "AI systems make decisions that affect people's lives. Who designs them? Who benefits? And what happens when they go wrong in communities without power to push back?" },
              { icon: "🎓", q: "What does a career in AI actually look like?", a: "Not the stock-option dream — the real day-to-day. What skills matter? What's exciting? What's frustrating? What should students be learning right now?" },
              { icon: "💡", q: "Can AI be a force for good?", a: "From detecting dyslexia in K–12 students to expanding financial access in emerging markets — what does responsible, human-centered AI actually look like in practice?" },
            ].map(({ icon, q, a }) => (
              <div key={q} className="bg-[#0a0a0a] rounded-2xl p-6 text-white">
                <div className="text-2xl mb-3">{icon}</div>
                <h3 className="font-semibold text-white mb-2 text-base">{q}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
