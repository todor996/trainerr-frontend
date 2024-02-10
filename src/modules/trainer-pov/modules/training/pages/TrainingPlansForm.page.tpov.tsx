import { useParams } from 'react-router-dom';
import { TrainingPlanForm } from '../components/TrainingPlanForm.component.tpov';
import { TrainingPlansFormHeader } from '../components/TrainingPlansFormHeader.component.tpov';
import { Card } from 'react-daisyui';

export default function TrainingPlansFormPage(): JSX.Element {
  const { planId } = useParams();

  const isEdit = planId !== undefined;
  const headerText = isEdit ? 'Edit Plan' : 'Add Plan';

  return (
    <div className="flex h-full flex-col items-center justify-start bg-base-300">
      {/* HEADER */}
      <TrainingPlansFormHeader className="w-full px-6 py-3" text={headerText} />

      <Card className="my-3 flex h-full w-full max-w-[768px] flex-col items-center justify-start bg-base-100 p-6">
        <TrainingPlanForm />
      </Card>
    </div>
  );
}
