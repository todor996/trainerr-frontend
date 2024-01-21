import { Sidenav } from '@shared/components/Sidenav.component';
import useLazyLoadResourceHook from '@shared/hooks/lazyLoadResource.hook';
import { useTranslation } from 'react-i18next';

interface PlansTrainer {}

export default function PlansTrainer(props: PlansTrainer): JSX.Element {
  useLazyLoadResourceHook({ folderName: 'training/trainer', namespace: 'training' });

  const { t } = useTranslation();

  console.log({ props });

  return (
    <>
      <div className="flex">
        <Sidenav />
        Hello from Ovo radi {t('training:rnd')}
      </div>
    </>
  );
}
