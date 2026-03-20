"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { img } from "@/lib/img-path";

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
        {/* Brand — MA logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src={img("/images/ma-logo.svg")}
            alt="Marin Academy"
            width={44}
            height={44}
            className="h-[44px] w-[44px] object-contain"
            priority
          />
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
                    ? "text-[#BE2828]"
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
