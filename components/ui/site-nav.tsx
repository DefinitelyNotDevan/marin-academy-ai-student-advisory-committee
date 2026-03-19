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
    <nav className="sticky top-0 z-50 h-[72px] bg-[#0a0a0a] border-b border-white/10">
      <div className="w-[min(1140px,100%-2.5rem)] mx-auto h-full flex items-center justify-between gap-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 text-white">
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
      </div>
    </nav>
  );
}
