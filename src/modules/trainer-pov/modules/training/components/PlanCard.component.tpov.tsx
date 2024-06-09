import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { TrrIcon } from '@shared/components/TrrIcon.component';
import { MouseEventHandler } from 'react';
import { Card } from 'react-daisyui';
import { twMerge } from 'tailwind-merge';

interface PlanCardProps {
  title: string;
  icon?: IconDefinition;
  iconClassName?: string;
  description?: string;
  className?: string;
  TitleIcon?: JSX.ElementType;
  Action?: JSX.ElementType;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}

export function PlanCard({
  className,
  title,
  icon,
  iconClassName,
  description,
  TitleIcon,
  Action,
  onClick,
}: PlanCardProps): JSX.Element {
  return (
    <Card
      className={twMerge(
        'flex min-h-32 shrink grow basis-[26%] flex-col space-y-2 border border-base-content border-opacity-20 px-4 py-3 shadow hover:shadow-lg md:basis-[100%] lg:max-w-[376px] lg:basis-[40%] xl:max-w-[410px] xl:basis-[26%]',
        className,
      )}
      onClick={onClick}
    >
      {/* HEADER */}
      <div className="flex w-full flex-row items-center justify-between">
        {/* ICON & TITLE */}
        <div className="flex flex-row space-x-2">
          {TitleIcon && <TitleIcon />}
          {icon && <TrrIcon className={iconClassName} icon={icon} />}

          <span className="font-medium">{title}</span>
        </div>

        {/* ACTION */}
        {Action && <Action className="-mr-2 size-8 p-0" color="ghost" size="sm" />}
      </div>

      {/* BODY */}
      <p className=" text-sm">{description}</p>
    </Card>
  );
}
