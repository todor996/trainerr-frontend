import { faCircleInfo, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { TrrIcon } from '@shared/components/TrrIcon.component';
import { TrrInput } from '@shared/components/TrrInput.component';
import { TrrTextarea } from '@shared/components/TrrTextarea.component';
import { Badge, Button } from 'react-daisyui';
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useTrainingStore } from '../store/training.store';
import { Plan } from '@shared/types/Plan.type';
import { Training } from '@shared/types/Training.type';

interface PlanFormProps {
  className?: string;
}

interface FormInputs extends Partial<Plan> {
  name: string;
  description: string;
}

export function TrainingForm({ className }: PlanFormProps): JSX.Element {
  const store = useTrainingStore();
  const { plan } = store;

  const [selectedTraining, setSelectedTraining] = useState<Training | undefined>(
    plan.trainings?.[0],
  );

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  function isSelected(training: Training) {
    return selectedTraining?.uid === training.uid;
  }

  function onSubmit(data: FormInputs) {
    store.updateTraining({
      plan: {
        ...plan,
        name: data.name,
        description: data.description,
      },
    });
  }

  return (
    <form
      className={twMerge('flex w-full max-w-[390px] flex-col space-y-4', className)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TrrInput
        label="Name"
        placeholder="Training Plan Name"
        error={errors['name'] && 'Name is required'}
      />
      <TrrTextarea
        label="Description"
        placeholder="Training Plan Description"
        error={errors['description'] && 'Description is required'}
      />

      {/* TRAINING SECTION */}
      <div>
        <div className="flex flex-row items-center gap-2">
          <h3 className="text-lg font-medium">Training</h3>
          <TrrIcon icon={faCircleInfo} size={16} />
        </div>

        <div className="align-center flex w-full flex-row justify-between">
          <div className="mr-2 flex w-full flex-row items-center gap-1 overflow-x-scroll py-2">
            <Link to={'/trainer/training/training/form'}>
              <Badge
                className="shrink-0 cursor-pointer border border-primary-content text-sm font-medium hover:border hover:border-primary-content hover:bg-primary"
                size="lg"
              >
                + {plan.trainings?.length ? '' : 'Add Training'}
              </Badge>
            </Link>
            {plan?.trainings.map((training) => (
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

          {false && (
            <Button className="size-8 p-0" color="ghost" size="sm">
              <TrrIcon icon={faEllipsis} />
            </Button>
          )}
        </div>

        {/* {(selectedTraining?.workouts || []).map((exercise) => (
          <TrainingExerciseCard
            className="mt-4 w-full"
            title={exercise.name}
            imgSrc={
              exercise.media?.[0].src || 'https://image.boxrox.com/2021/06/Pull-Up.jpg'
            }
            units={exercise.units}
          ></TrainingExerciseCard>
        ))} */}
      </div>
    </form>
  );
}
