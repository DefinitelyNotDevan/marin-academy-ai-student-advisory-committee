"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/",         label: "Home" },
  { href: "/speakers", label: "Speaker Series" },
  { href: "/about",    label: "About" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 h-[72px] bg-[#0a0a0a]/97 backdrop-blur-md border-b border-white/8">
      <div className="w-[min(1140px,100%-2.5rem)] mx-auto h-full flex items-center justify-between gap-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 text-white">
          <div className="w-[38px] h-[38px] bg-gradient-to-br from-red-600 to-red-500 rounded-md grid place-items-center font-bold text-sm font-['Space_Grotesk'] shrink-0">
            AI
          </div>
          <div className="leading-tight">
            <div className="font-semibold text-sm font-['Space_Grotesk']">AI Advisory Committee</div>
            <div className="text-white/50 text-xs">Marin Academy</div>
          </div>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === href
                    ? "text-red-400"
                    : "text-white/70 hover:text-white"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/about"
          className="hidden md:inline-flex rounded-md bg-red-600 hover:bg-red-500 text-white text-sm font-semibold px-4 py-2 transition-colors"
        >
          About Us
        </Link>
      </div>
    </nav>
  );
}
