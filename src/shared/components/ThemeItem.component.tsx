import { Theme } from 'react-daisyui';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';

interface ThemeItemProps {
  className?: string;
  theme: string;
}

export function ThemeItem({ theme, className = '' }: ThemeItemProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <Theme
      className={twMerge('flex w-full items-center justify-between gap-2', className)}
      dataTheme={theme}
    >
      <span>{t(`theme.${theme}`)}</span>
      <span className="flex gap-1">
        <span className="min-h-4 min-w-2 rounded bg-primary"></span>
        <span className="min-h-4 min-w-2 rounded bg-secondary"></span>
        <span className="min-h-4 min-w-2 rounded bg-accent"></span>
        <span className="min-h-4 min-w-2 rounded bg-base-content"></span>
      </span>
    </Theme>
  );
}
