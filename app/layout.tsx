import type { Metadata } from "next";
import "./globals.css";
import { SiteNav }       from "@/components/ui/site-nav";
import { SiteFooter }    from "@/components/ui/site-footer";
import { ContactWidget } from "@/components/ui/contact-widget";

export const metadata: Metadata = {
  title: "AI Student Advisory Committee – Marin Academy",
  description:
    "Marin Academy's AI Student Advisory Committee explores how artificial intelligence shapes teaching, learning, and life at MA. Spring 2026 Speaker Series.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-[#111] antialiased leading-relaxed font-sans">
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
        <ContactWidget />
      </body>
    </html>
  );
}
