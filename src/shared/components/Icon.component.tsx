import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { twJoin } from 'tailwind-merge';

export function Icon({
  icon,
  className = '',
  size = 24,
}: {
  icon: IconDefinition;
  className?: string;
  size?: 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40; // in px
}): JSX.Element {
  const sizeMap = {
    8: 'h-2 w-2',
    12: 'h-3 w-3',
    16: 'h-4 w-4',
    20: 'h-5 w-5',
    24: 'h-6 w-6',
    28: 'h-7 w-7',
    32: 'h-8 w-8',
    36: 'h-9 w-9',
    40: 'h-10 w-10',
  };

  return (
    <span
      className={twJoin(`flex items-center justify-center`, sizeMap[size], className)}
    >
      <FontAwesomeIcon className="h-full w-full" icon={icon} />
    </span>
  );
}
