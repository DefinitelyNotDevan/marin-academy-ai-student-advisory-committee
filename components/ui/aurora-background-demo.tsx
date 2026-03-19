"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

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
        <span className="inline-flex items-center gap-2 rounded-full border border-red-600/30 bg-red-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red-500">
          <span className="h-2 w-2 rounded-full bg-red-500" />
          Spring 2026 Speaker Series
        </span>

        {/* headline */}
        <h1 className="text-4xl md:text-7xl font-bold dark:text-white">
          Students Exploring{" "}
          <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
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
          <a
            href="/speakers"
            className="rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-500 transition-colors"
          >
            View Speaker Series
          </a>
          <a
            href="/about"
            className="rounded-full border border-black/20 dark:border-white/20 px-6 py-2.5 text-sm font-semibold hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            About the Committee
          </a>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
