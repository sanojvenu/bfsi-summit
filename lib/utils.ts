import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a time string like "09:15" as "9:15 AM" */
export function formatTime(time: string): string {
  const [hourStr, minute] = time.split(":");
  const hour = parseInt(hourStr, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minute} ${ampm}`;
}

/** Compute days/hours/minutes/seconds remaining until a target date */
export function getCountdown(targetDate: Date): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
} {
  const now = Date.now();
  const total = targetDate.getTime() - now;

  if (total <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
  }

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds, total };
}

/** The BFSI Summit 2026 target date — February 19, 2027, 09:00 IST */
export const SUMMIT_DATE = new Date("2027-02-19T09:00:00+05:30");

/** Summit metadata */
export const SUMMIT = {
  name: "BFSI Tech Innovation Summit",
  edition: "3rd Annual",
  year: "2027",
  theme: "The BFSI Renaissance: Intelligence, Integrity & Innovation",
  date: "19 February 2027",
  dateShort: "19 Feb 2027",
  time: "09:00 AM – 06:00 PM IST",
  venue: "Jio World Convention Centre, Bandra Kurla Complex",
  city: "Mumbai, India",
  registrationDeadline: "15 January 2027",
  tagline: "Where India's BFSI leadership defines the digital decade",
} as const;
