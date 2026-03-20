"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  href?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, href, ...props }, ref) => {
  const inner = (
    /* outer flex row — text slides left off-screen, arrow slides in from right */
    <span className="flex items-center justify-center gap-2 overflow-hidden">
      {/* label slides out to the left */}
      <span className="transition-all duration-300 group-hover:-translate-x-full group-hover:opacity-0 whitespace-nowrap">
        {text}
      </span>
      {/* arrow + label slide in from the right, absolutely positioned */}
      <span className="absolute inset-0 flex items-center justify-center gap-1.5 translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 whitespace-nowrap">
        {text}
        <ArrowRight size={15} strokeWidth={2.5} />
      </span>
    </span>
  );

  const base = cn(
    "group relative cursor-pointer overflow-hidden rounded-full border font-semibold inline-flex items-center justify-center",
    className,
  );

  if (href) {
    return <a href={href} className={base}>{inner}</a>;
  }

  return (
    <button ref={ref} className={base} {...props}>
      {inner}
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
export { InteractiveHoverButton };
