"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

/**
 * AuroraBackgroundDemo
 *
 * Drop this anywhere in your app to preview the Aurora Background component
 * with Marin Academy's red/black/white brand palette.
 *
 * Best used as a hero section on the home page:
 *
 *   // app/page.tsx
 *   import { AuroraBackgroundDemo } from "@/components/ui/aurora-background-demo";
 *   export default function Home() { return <AuroraBackgroundDemo />; }
 */
export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 text-center"
      >
        {/* eyebrow */}
        <span className="inline-flex items-center gap-2 rounded-full border border-[#BE2828]/30 bg-[#BE2828]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#BE2828]">
          <span className="h-2 w-2 rounded-full bg-[#BE2828]" />
          Spring 2026 Speaker Series
        </span>

        {/* headline */}
        <h1 className="text-4xl md:text-7xl font-bold dark:text-white">
          Students Exploring{" "}
          <span style={{ background: "linear-gradient(to right, #BE2828, #e04444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            AI's Real Impact
          </span>
        </h1>

        {/* sub-headline */}
        <p className="font-extralight text-base md:text-2xl dark:text-neutral-200 max-w-2xl">
          Marin Academy's AI Student Advisory Committee connects students with
          the people building, questioning, and shaping artificial intelligence.
        </p>

        {/* CTAs */}
        <div className="flex gap-3 mt-2 flex-wrap justify-center">
          <InteractiveHoverButton
            href="/speakers"
            text="View Speaker Series"
            className="px-6 py-2.5 text-sm text-white bg-[#BE2828] border-[#BE2828] hover:text-white"
          />
          <InteractiveHoverButton
            href="/about"
            text="About the Committee"
            className="px-6 py-2.5 text-sm border-black/30 dark:border-white/30 dark:text-white"
          />
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
