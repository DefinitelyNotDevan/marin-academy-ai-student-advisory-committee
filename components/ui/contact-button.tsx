"use client";

export function ContactButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent("open-contact"))}
      className={className}
    >
      {children}
    </button>
  );
}
