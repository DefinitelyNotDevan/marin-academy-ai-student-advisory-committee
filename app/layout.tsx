import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Student Advisory Committee – Marin Academy",
  description:
    "Marin Academy's AI Student Advisory Committee explores how artificial intelligence shapes teaching, learning, and life at MA. Spring 2026 Speaker Series.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
