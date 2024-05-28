import { H1 } from 'tamagui';

export function Title(): JSX.Element {
  return (
    <H1
      className="flex justify-center p-8 text-2xl font-bold"
      backgroundColor="$base"
      size="$4"
      textAlign="center"
      textTransform="uppercase"
      fontWeight={600}
    >
      trainerr
    </H1>
  );
}
