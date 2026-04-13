import type { Metadata } from "next";
import "./globals.css";
import { SiteNav }       from "@/components/ui/site-nav";
import { SiteFooter }    from "@/components/ui/site-footer";
import { ContactWidget } from "@/components/ui/contact-widget";
import { LiveBanner }    from "@/components/ui/live-banner";

const speakerDates = [
  { name: "Michael Brand",      topic: "AI & Environmental Impact",              dateISO: "2026-02-19" },
  { name: "Bella Raja '20",     topic: "Conflict Minerals & AI Hardware",        dateISO: "2026-03-09" },
  { name: "Lauren Chambers",    topic: "Social Justice, Tech & Government",      dateISO: "2026-03-26" },
  { name: "Michael Lu '21",     topic: "From MA to NVIDIA: AI & Autonomous Vehicles", dateISO: "2026-04-23" },
  { name: "Matt Flannery",      topic: "Machine Learning & Financial Inclusion", dateISO: "2026-04-30" },
  { name: "Ava Iannuccillo '20",topic: "Human-Centered AI in Science & Education", dateISO: "2026-05-15" },
];

export const metadata: Metadata = {
  title: "AI Student Advisory Committee – Marin Academy",
  description:
    "Marin Academy's AI Student Advisory Committee explores how artificial intelligence shapes teaching, learning, and life at MA. Spring 2026 Speaker Series.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-[#111] antialiased leading-relaxed font-sans">
        <LiveBanner speakers={speakerDates} />
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
        <ContactWidget />
      </body>
    </html>
  );
}
