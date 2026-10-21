import { describe, it, expect } from 'vitest';
import { cn, formatEditorialDate, getBarodaTimeString } from '@/lib/utils';

describe('Utility Functions', () => {
  it('merges Tailwind classes correctly with conflict resolution', () => {
    const result = cn('px-4 py-2 bg-paper text-ink', 'px-6 bg-vermilion');
    expect(result).toContain('px-6');
    expect(result).not.toContain('px-4');
    expect(result).toContain('bg-vermilion');
    expect(result).not.toContain('bg-paper');
  });

  it('formats editorial date in uppercase month and year', () => {
    const testDate = new Date(2026, 9, 21); // Oct 21, 2026
    const formatted = formatEditorialDate(testDate);
    expect(formatted).toMatch(/OCT.*2026/);
  });

  it('generates valid Baroda local time string with IST indicator', () => {
    const timeData = getBarodaTimeString();
    expect(timeData.timezone).toContain('IST');
    expect(timeData.raw).toContain('IST');
    expect(timeData.time).toMatch(/\d{1,2}:\d{2}:\d{2}/);
  });
});
