import { Sidenav } from '@shared/components/Sidenav.component';

interface ExercisesClientProps {}

export default function ExercisesClient(props: ExercisesClientProps): JSX.Element {
  console.log({ props });

  return (
    <div className="flex">
      <Sidenav />
      <div>Hello from ExercisesClient!</div>
    </div>
  );
}
