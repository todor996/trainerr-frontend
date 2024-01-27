import { Theme } from 'react-daisyui';
import { twMerge } from 'tailwind-merge';

interface ThemeItemProps {
  className?: string;
  theme: string;
}

export function ThemeItem({ theme, className = '' }: ThemeItemProps): JSX.Element {
  return (
    <Theme className={twMerge('flex w-full gap-2', className)} dataTheme={theme}>
      <span>{theme}</span>
      <span className="base-100 flex gap-1">
        <span className="min-h-4 min-w-2 rounded bg-primary"></span>
        <span className="min-h-4 min-w-2 rounded bg-secondary"></span>
        <span className="min-h-4 min-w-2 rounded bg-accent"></span>
        <span className="min-h-4 min-w-2 rounded bg-base-content"></span>
      </span>
    </Theme>
  );
}
