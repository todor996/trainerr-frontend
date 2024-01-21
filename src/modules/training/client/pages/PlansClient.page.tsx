import { Sidenav } from '@shared/components/Sidenav.component';

interface PlansTrainer {}

export default function PlansTrainer(props: PlansTrainer): JSX.Element {
  console.log({ props });

  return (
    <>
      <div className="flex">
        <Sidenav />
        Hello from TrainingPlansTrainer
      </div>
    </>
  );
}
