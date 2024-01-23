import { useTranslation } from 'react-i18next';

interface ExercisesTrainerProps {}

export default function ExercisesTrainer(props: ExercisesTrainerProps): JSX.Element {
  const { t } = useTranslation();

  console.log({ props });

  return (
    <div className="flex">
      <div>Hello from ExercisesTrainer & {t('training:rnd')}!</div>
    </div>
  );
}
