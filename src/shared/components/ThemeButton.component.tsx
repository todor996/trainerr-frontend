import { Button } from 'react-daisyui';
import { ThemeItem } from './ThemeItem.component';
import { twMerge } from 'tailwind-merge';

// TODO: Handle Button Props properly
interface ThemeButtonProps {
  dataTheme: string;
  className?: string;
  active?: boolean;
  onClick?: () => void;
}

export function ThemeButton({
  dataTheme,
  className,
  active,
  onClick = () => {},
}: ThemeButtonProps): JSX.Element {
  return (
    <Button
      className={twMerge(
        'mt-2 min-w-40 bg-base-100 hover:bg-base-300',
        active && 'border-2 border-solid border-primary',
        className,
      )}
      size="sm"
      dataTheme={dataTheme}
      onClick={onClick}
    >
      <ThemeItem className="bg-transparent" dataTheme={dataTheme} />
    </Button>
  );
}
