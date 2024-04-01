import { Avatar } from 'react-daisyui';
import { twMerge } from 'tailwind-merge';

interface HeaderSmallProps {
  className?: string;
  title: string;
  titleClassName?: string;
  logoSrc?: string;
  Action?: JSX.ElementType;
}

export function HeaderSmall({
  className,
  title,
  titleClassName,
  logoSrc = 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
  Action,
}: HeaderSmallProps): JSX.Element {
  return (
    <div className={twMerge('flex flex-row items-center', className)}>
      <div className="flex grow basis-[90px] items-center">
        <Avatar src={logoSrc} shape="circle" size={32} />
      </div>
      <div
        className={twMerge(
          'flex grow justify-center text-xl font-semibold',
          titleClassName,
        )}
      >
        <h2>{title}</h2>
      </div>
      <div className="flex grow basis-[90px] justify-end">
        {Action && <Action className="size-8 p-0" color="ghost" size="sm" />}
      </div>
    </div>
  );
}
