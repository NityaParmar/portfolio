import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges class names safely with Tailwind conflict resolution
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format date in clean editorial monograph style (e.g. "OCTOBER 2026")
 */
export function formatEditorialDate(date: Date = new Date()): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  }).toUpperCase();
}

/**
 * Format current time in Vadodara, Gujarat, India (Asia/Kolkata / IST)
 */
export function getBarodaTimeString(): {
  time: string;
  period: string;
  timezone: string;
  raw: string;
} {
  const now = new Date();
  const timeFormatted = now.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  const parts = timeFormatted.split(' ');
  const timePart = parts[0] || '12:00:00';
  const period = parts[1] || 'AM';

  return {
    time: timePart,
    period,
    timezone: 'IST (UTC+5:30)',
    raw: `${timePart} ${period} IST`,
  };
}
