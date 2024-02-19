import { useParams } from 'react-router-dom';
import { TrainingPlanForm } from '../components/TrainingPlanForm.component.tpov';
import { TrainingFormHeader } from '../components/TrainingFormHeader.component.tpov';
import { Button, Card } from 'react-daisyui';

export default function TrainingTrainingFormPage(): JSX.Element {
  const { planId } = useParams();

  const isEdit = planId !== undefined;
  const headerText = isEdit ? 'Edit Training' : 'Add Training';

  return (
    <div className="flex h-full flex-col items-center justify-start bg-base-300">
      {/* HEADER */}
      {/* TODO: Refactor this so it can be used on multiple places */}
      {/* TODO: Connect Header and Form */}
      <TrainingFormHeader className="w-full px-6 py-3" text={headerText}>
        {isEdit && (
          <Button className="min-w-[120px] text-error shadow" size="sm">
            Delete
          </Button>
        )}
        <Button className="min-w-[120px] shadow" size="sm">
          Cancel
        </Button>
        <Button className="min-w-[120px] shadow" size="sm" color="primary">
          Save
        </Button>
      </TrainingFormHeader>

      <Card className="my-3 flex h-full w-full max-w-[768px] flex-col items-center justify-start bg-base-100 p-6">
        {/* TODO: Create TrainingTrainingForm */}
        <TrainingPlanForm />
      </Card>
    </div>
  );
}
