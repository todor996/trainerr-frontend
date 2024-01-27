import { useTranslation } from 'react-i18next';

export default function PlansTrainer(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex">Hello from Ovo radi {t('training:rnd')}</div>
    </>
  );
}
