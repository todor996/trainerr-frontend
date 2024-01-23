import { useTranslation } from 'react-i18next';

interface PlansTrainer {}

export default function PlansTrainer(props: PlansTrainer): JSX.Element {
  const { t } = useTranslation();

  console.log({ props });

  return (
    <>
      <div className="flex">Hello from Ovo radi {t('training:rnd')}</div>
    </>
  );
}
