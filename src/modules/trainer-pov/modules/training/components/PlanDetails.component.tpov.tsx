import { faXmark, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { HeaderSmall } from '@modules/trainer-pov/components/HeaderSmall.component.tpov';
import { TrrIcon } from '@shared/components/TrrIcon.component';
import { Button, Badge } from 'react-daisyui';
import { ExerciseCard } from './ExerciseCard.component.tpov';
import { Training, TrainingPlan } from '../store/slice.store';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface PlanDetailsProps {
  plan: TrainingPlan;
  toggleVisible: () => void;
}

export function PlanDetails({ plan, toggleVisible }: PlanDetailsProps): JSX.Element {
  const [selectedTraining, setSelectedTraining] = useState<Training | null>(
    plan.trainings[0],
  );

  useEffect(() => {
    setSelectedTraining(plan.trainings[0]);
  }, [plan]);

  function isSelected(training: Training) {
    return selectedTraining?.id === training.id;
  }

  function handleOnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log('handleOnClick');

    event.stopPropagation();
  }

  return (
    <div className="h-full w-[390px] space-y-4 bg-base-200 px-3 py-6 text-base-content">
      {/* HEADER */}
      <HeaderSmall
        title="Plan"
        Action={(defaultProps) => (
          <Button {...defaultProps} onClick={toggleVisible}>
            <TrrIcon icon={faXmark} />
          </Button>
        )}
      />

      {/* TITLE */}
      <div className="align-center flex w-full flex-row justify-between">
        <h3 className="flex items-center text-xl font-medium">{plan.name}</h3>

        {/* TODO: Think of creating TrrButtonIcon */}
        <Button className="size-8 p-0" color="ghost" size="sm" onClick={handleOnClick}>
          <TrrIcon icon={faEllipsis} />
        </Button>
      </div>

      {/* BODY */}
      {/* TODO: Set max height & add See More option  */}
      <p className="text-sm">{plan.description}</p>

      <div className="align-center flex w-full flex-row justify-between">
        {/* TODO: Add padding to this row because of the scroll */}
        {/* TODO: Fix spacing between elements */}
        {/* TABS */}
        <div className="mr-2 flex w-full flex-row items-center gap-1 overflow-x-scroll py-2">
          {plan.trainings.map((training) => (
            // TODO: Think of creating TrrBadge
            <Badge
              className={twMerge(
                'shrink-0 cursor-pointer text-sm font-medium',
                isSelected(training) && 'border border-primary-content bg-primary',
              )}
              key={training.id}
              size="lg"
              onClick={() => setSelectedTraining(training)}
            >
              {training.name}
            </Badge>
          ))}
        </div>

        {/* ACTION */}
        <Button className="size-8 p-0" color="ghost" size="sm" onClick={handleOnClick}>
          <TrrIcon icon={faEllipsis} />
        </Button>
      </div>

      {/* CARDS */}
      {/* TODO: Fix this */}
      {selectedTraining?.exercise.map((exercise) => (
        <ExerciseCard
          key={exercise.id}
          title={exercise.name}
          description={exercise.description}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          units={exercise.units as any}
          imgSrc={
            exercise.media[0]?.src ||
            'https://cdn.muscleandstrength.com/sites/default/files/images/articles/articles/bench-press-5.jpg'
          }
          Action={(defaultProps) => (
            <Button {...defaultProps} onClick={handleOnClick}>
              <TrrIcon icon={faEllipsis} />
            </Button>
          )}
        />
      ))}
    </div>
  );
}
