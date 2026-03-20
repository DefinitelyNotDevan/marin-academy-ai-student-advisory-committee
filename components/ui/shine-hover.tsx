"use client";
import { cn } from "@/lib/utils";

interface ShineButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
  as?: "button" | "a";
}

export function ShineButton({ children, className, as: Tag = "button", href, ...props }: ShineButtonProps) {
  const shineClass = `relative overflow-hidden
    before:absolute before:inset-0 before:rounded-[inherit]
    before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.45)_50%,transparent_75%,transparent_100%)]
    before:bg-[length:250%_250%,100%_100%]
    before:bg-[position:200%_0,0_0]
    before:bg-no-repeat
    before:transition-[background-position]
    before:duration-700
    hover:before:bg-[position:-100%_0,0_0]`;

  if (href) {
    return (
      <a href={href} className={cn(shineClass, className)}>
        {children}
      </a>
    );
  }
  return (
    <Tag className={cn(shineClass, className)} {...props}>
      {children}
    </Tag>
  );
}
