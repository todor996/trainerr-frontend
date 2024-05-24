import { Steps } from 'react-daisyui';
import { Navigate, Route, Routes } from 'react-router-dom';
import { OnboardingAppInfo } from '../components/OnboardingAppInfo.component.tpov';
import { OnboardingAppFeatures } from '../components/OnboardingAppFeatures.component.tpov';
import { OnboardingAppStyle } from '../components/OnboardingAppStyle.component.tpov';
import { TrrStep } from '@shared/components/TrrStep.component';
import { useTranslation } from 'react-i18next';
import { Progress, View } from 'tamagui';
import { useOnboardingStore } from '../store/onboarding.store';

export default function OnboardingAppPage(): JSX.Element {
  const { t } = useTranslation();

  const { progress } = useOnboardingStore();

  return (
    <>
      <div className="mx-6 my-6 flex w-full max-w-[560px] justify-center">
        <Steps className="w-full max-w-[560px]">
          <TrrStep color="primary" state="completed">
            {t('onboarding:stepper.singUp')}
          </TrrStep>
          <TrrStep color="primary" state="completed">
            {t('onboarding:stepper.profile')}
          </TrrStep>
          <TrrStep color="primary" state="active">
            {t('onboarding:stepper.app')}
          </TrrStep>
        </Steps>
      </div>

      <div className="flex w-full flex-col items-center">
        <div className="my-6 flex w-full max-w-[390px] flex-col items-center px-6">
          <h1 className="text-3xl font-semibold">{t('onboarding:app.title')}</h1>
          <View className="mt-2 flex flex-row items-center">
            <Progress max={100} value={progress} backgroundColor="$primary-300">
              <Progress.Indicator backgroundColor="$primary" />
            </Progress>
            <span className="ml-2">{progress}%</span>
          </View>
        </div>

        <Routes>
          <Route path="" element={<Navigate to="info" />} />
          <Route path="info" element={<OnboardingAppInfo />} />
          <Route path="features" element={<OnboardingAppFeatures />} />
          <Route path="style" element={<OnboardingAppStyle />} />
          <Route path="*" element={<Navigate to="info" />} />
        </Routes>
      </div>
    </>
  );
}
