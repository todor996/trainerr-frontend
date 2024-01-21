import { Sidenav } from '@shared/components/Sidenav.component';
import useLazyLoadResourceHook from '@shared/hooks/lazyLoadResource.hook';
import { useTranslation } from 'react-i18next';

interface ExercisesTrainerProps {}

export default function ExercisesTrainer(props: ExercisesTrainerProps): JSX.Element {
  useLazyLoadResourceHook({ folderName: 'training/trainer', namespace: 'training' });

  const { t } = useTranslation();

  console.log({ props });

  return (
    <div className="flex">
      <Sidenav />
      <div>Hello from ExercisesTrainer & {t('training:rnd')}!</div>
    </div>
  );
}
