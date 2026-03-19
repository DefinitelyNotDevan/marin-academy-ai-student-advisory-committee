import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * shadcn/ui's `cn` helper — merges Tailwind classes safely,
 * resolving conflicts in the right order.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
