import { useParams } from 'react-router-dom';
import { PlanForm } from '../components/PlanForm.component.tpov';
import { FormHeader } from '../components/FormHeader.component.tpov';
import { Card } from 'react-daisyui';
import { TrrButton } from '@shared/components/TrrButton.component';

export default function PlansFormPage(): JSX.Element {
  const { planId } = useParams();

  const isEdit = planId !== undefined;
  const headerText = isEdit ? 'Edit Plan' : 'Add Plan';

  return (
    <div className="flex h-full flex-col items-center justify-start bg-base-300">
      {/* HEADER */}
      {/* TODO: Connect this buttons with proper form */}
      <FormHeader text={headerText}>
        <TrrButton minWidth="120px" className="shadow" size="$3">
          Cancel
        </TrrButton>
        <TrrButton
          className="shadow"
          themeColor="$primary"
          minWidth="120px"
          marginLeft="12px"
          size="$3"
        >
          Save
        </TrrButton>
      </FormHeader>

      <Card className="my-3 flex h-full w-full max-w-[768px] flex-col items-center justify-start bg-base-100 p-6">
        <PlanForm />
      </Card>
    </div>
  );
}
