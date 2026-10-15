import { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'outline' | 'ghost';
type Size = 'sm' | 'md';

const base =
  'inline-flex items-center justify-center gap-2 font-mono text-sm uppercase tracking-wider transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-40';

const variants: Record<Variant, string> = {
  primary: 'bg-ink text-paper hover:bg-accent',
  outline: 'border border-ink text-ink hover:bg-ink hover:text-paper',
  ghost: 'text-ink underline underline-offset-4 decoration-rule hover:decoration-ink',
};

const sizes: Record<Size, string> = {
  sm: 'px-3 py-2',
  md: 'px-5 py-3',
};

// Shared with <a> elements so links can look like buttons without nesting interactive tags
export function buttonClasses({
  variant = 'primary',
  size = 'md',
  className = '',
}: { variant?: Variant; size?: Size; className?: string } = {}) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export default function Button({ variant = 'primary', size = 'md', className = '', ...props }: ButtonProps) {
  return <button className={buttonClasses({ variant, size, className })} {...props} />;
}
