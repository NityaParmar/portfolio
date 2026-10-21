import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type BaseProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    target?: string;
    rel?: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-mono text-xs tracking-wider uppercase font-medium whitespace-nowrap shrink-0 transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-vermilion disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer';

  const variants = {
    primary:
      'bg-vermilion text-paper hover:bg-vermilion-hover shadow-sm active:translate-y-[1px]',
    secondary:
      'bg-paper-card text-ink border border-border-hairline hover:bg-paper-subtle active:translate-y-[1px]',
    outline:
      'border border-border-hairline text-ink hover:border-ink hover:bg-paper-subtle active:translate-y-[1px]',
    ghost:
      'text-ink-muted hover:text-ink hover:bg-paper-subtle active:translate-y-[1px]',
  };

  const sizes = {
    sm: 'py-1.5 px-3 text-[11px]',
    md: 'py-2 px-4 text-xs',
    lg: 'py-3 px-6 text-xs font-semibold',
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if ('href' in props && props.href) {
    const { href, target, rel, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={combinedClasses} {...buttonProps}>
      {children}
    </button>
  );
};
