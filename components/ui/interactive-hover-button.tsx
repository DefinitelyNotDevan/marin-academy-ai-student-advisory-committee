"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  /** Background color of the expanding blob on hover (hex/css value) */
  blobColor?: string;
  /** Text color when hovering (on top of the blob) */
  hoverTextColor?: string;
  /** If provided, renders an <a> tag instead of <button> */
  href?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(
  (
    {
      text = "Button",
      className,
      blobColor = "#BE2828",
      hoverTextColor = "#ffffff",
      href,
      ...props
    },
    ref,
  ) => {
    const inner = (
      <>
        <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {text}
        </span>
        <div
          className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100"
          style={{ color: hoverTextColor }}
        >
          <span>{text}</span>
          <ArrowRight size={16} />
        </div>
        <div
          className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8]"
          style={{ backgroundColor: blobColor }}
        />
      </>
    );

    if (href) {
      return (
        <a
          href={href}
          className={cn(
            "group relative cursor-pointer overflow-hidden rounded-full border p-2 text-center font-semibold inline-block",
            className,
          )}
        >
          {inner}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(
          "group relative cursor-pointer overflow-hidden rounded-full border p-2 text-center font-semibold",
          className,
        )}
        {...props}
      >
        {inner}
      </button>
    );
  },
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";
export { InteractiveHoverButton };
