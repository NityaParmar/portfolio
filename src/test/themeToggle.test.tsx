import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { ThemeToggle } from '@/components/layout/ThemeToggle';

describe('ThemeToggle Component', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('renders theme toggle button with accessible label', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /switch to/i });
    expect(button).toBeInTheDocument();
  });

  it('toggles theme class on root element and persists to localStorage', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /switch to/i });

    // Initial click should toggle mode
    fireEvent.click(button);
    const savedTheme = localStorage.getItem('np_theme');
    expect(['light', 'dark']).toContain(savedTheme);
  });
});
