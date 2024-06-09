import { useParams } from 'react-router-dom';
import { FormHeader } from '../components/FormHeader.component.tpov';
import { Card } from 'react-daisyui';
import { TrrButton } from '@shared/components/TrrButton.component';
import { TrainingForm } from '../components/TraningForm.component.tpov';

export default function TrainingFormPage(): JSX.Element {
  const { planId } = useParams();

  const isEdit = planId !== undefined;
  const headerText = isEdit ? 'Edit Training' : 'Add Training';

  return (
    <div className="flex h-full flex-col items-center justify-start bg-base-300">
      {/* HEADER */}
      {/* TODO: Refactor this so it can be used on multiple places */}
      {/* TODO: Connect Header and Form */}
      <FormHeader text={headerText}>
        {/* {isEdit && ( */}
        {/* TODO: Handle outlined variant */}
        <TrrButton
          className="shadow"
          minWidth="120px"
          size="$3"
          themeColor="$error"
          variant="outlined"
        >
          Delete
        </TrrButton>
        {/* )} */}
        <TrrButton className="shadow" minWidth="120px" size="$3">
          Cancel
        </TrrButton>
        <TrrButton className="shadow" minWidth="120px" size="$3" themeColor="$primary">
          Save
        </TrrButton>
      </FormHeader>

      <Card className="my-3 flex h-full w-full max-w-[768px] flex-col items-center justify-start bg-base-100 p-6">
        {/* TODO: Create TrainingTrainingForm */}
        <TrainingForm />
      </Card>
    </div>
  );
}
