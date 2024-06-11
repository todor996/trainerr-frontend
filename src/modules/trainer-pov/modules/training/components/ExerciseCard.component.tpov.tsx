import { MouseEventHandler } from 'react';
import { Badge, Card } from 'react-daisyui';
import { twMerge } from 'tailwind-merge';
import { Unit } from '../store/slice.store';

interface ExerciseCardProps {
  className?: string;
  title: string;
  imgSrc: string;
  description?: string;
  units: Unit[];
  TitleIcon?: JSX.ElementType;
  Action?: JSX.ElementType;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}

export function ExerciseCard({
  className,
  title,
  description,
  units,
  imgSrc,
  Action,
  onClick,
}: ExerciseCardProps): JSX.Element {
  return (
    <Card
      className={twMerge(
        'flex min-h-28 shrink grow flex-row items-center space-x-2 border border-base-content border-opacity-20 px-3 py-3 shadow hover:shadow-lg',
        className,
      )}
      onClick={onClick}
    >
      {/* IMAGE */}
      <div className="flex h-full max-h-24 w-full max-w-24">
        <img
          className="card h-24 min-h-24 w-24 min-w-24 object-cover"
          src={imgSrc}
          alt="exercise"
        />
      </div>

      {/* CONTENT */}
      <div className="flex h-24 w-full flex-col items-start justify-start">
        {/* HEADER */}
        <div className="flex w-full flex-row items-center justify-between">
          {/* TITLE */}
          <span className="font-medium">{title}</span>

          {/* ACTION */}
          {Action && <Action className="size-8 p-0" color="ghost" size="sm" />}
        </div>

        {/* TAGS */}
        {/* TODO: Think of makeing TrrBadge with proper maps for size and text size */}
        <div className=" flex w-full flex-row items-center gap-1 overflow-x-scroll">
          {units.map((unit, index) => (
            <Badge className="shrink-0 text-xs font-medium" key={index} size="md">
              {unit.unit}
            </Badge>
          ))}
        </div>

        {/* BODY */}
        {/* TODO: Handle long text */}
        <p className="mt-2 text-xs">{description}</p>
      </div>
    </Card>
  );
}
