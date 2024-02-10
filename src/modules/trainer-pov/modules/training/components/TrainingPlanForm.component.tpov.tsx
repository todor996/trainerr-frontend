import { faCircleInfo, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { TrrIcon } from '@shared/components/TrrIcon.component';
import { TrrInput } from '@shared/components/TrrInput.component';
import { TrrTextarea } from '@shared/components/TrrTextarea.component';
import { Badge, Button } from 'react-daisyui';
import { twMerge } from 'tailwind-merge';
import { TrainingExerciseCard } from './TrainingExerciseCard.component.tpov';

interface TrainingPlanFormProps {
  className?: string;
}

export function TrainingPlanForm({ className }: TrainingPlanFormProps): JSX.Element {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Submitted');
  }

  return (
    <form
      className={twMerge('flex w-full max-w-[390px] flex-col space-y-4', className)}
      onSubmit={handleSubmit}
    >
      <TrrInput label="Name" placeholder="Training Plan Name" />
      <TrrTextarea label="Description" placeholder="Training Plan Description" />

      {/* TRAINING SECTION */}
      <div>
        <div className="flex flex-row items-center gap-2">
          <h3 className="text-lg font-medium">Training</h3>
          <TrrIcon icon={faCircleInfo} size={16} />
        </div>

        <div className="align-center flex w-full flex-row justify-between">
          <div className="mr-2 flex w-full flex-row items-center gap-1 overflow-x-scroll py-2">
            <Badge
              className="shrink-0 cursor-pointer border border-primary-content text-sm font-medium"
              // color="primary"
              size="lg"
            >
              +
            </Badge>
            <Badge
              className="shrink-0 cursor-pointer border border-primary-content text-sm font-medium"
              color="primary"
              size="lg"
            >
              Training 1
            </Badge>
            <Badge
              className="shrink-0 cursor-pointer text-sm font-medium hover:border hover:border-primary-content"
              size="lg"
              color="ghost"
            >
              Training 2
            </Badge>
            <Badge
              className="shrink-0 cursor-pointer text-sm font-medium hover:border hover:border-primary-content"
              size="lg"
              color="ghost"
            >
              Training 3
            </Badge>
            <Badge
              className="shrink-0 cursor-pointer text-sm font-medium"
              size="lg"
              color="ghost"
            >
              Training 4
            </Badge>
          </div>

          {false && (
            <Button className="size-8 p-0" color="ghost" size="sm">
              <TrrIcon icon={faEllipsis} />
            </Button>
          )}
        </div>

        <TrainingExerciseCard
          className="mt-4 w-full"
          title="Zgibovi"
          imgSrc="https://image.boxrox.com/2021/06/Pull-Up.jpg"
        ></TrainingExerciseCard>
      </div>
    </form>
  );
}
