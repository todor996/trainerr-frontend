import { Navigate, Route, Routes } from 'react-router-dom';
import { OnboardingAppInfo } from '../components/OnboardingAppInfo.component.tpov';
import { OnboardingAppFeatures } from '../components/OnboardingAppFeatures.component.tpov';
import { OnboardingAppStyle } from '../components/OnboardingAppStyle.component.tpov';
import { useTranslation } from 'react-i18next';
import { Progress, View, YStack } from 'tamagui';
import { useOnboardingStore } from '../store/onboarding.store';
import { TrrStepper } from '@shared/components/TrrStepper.component';

export default function OnboardingAppPage(): JSX.Element {
  const { t } = useTranslation();

  const { progress } = useOnboardingStore();

  return (
    <YStack
      backgroundColor="$base"
      alignItems="center"
      width="100%"
      height="100%"
      marginVertical="24px"
    >
      <div className="my-6 flex w-full max-w-[390px] justify-center px-6">
        <TrrStepper
          // TODO: Talk with team about color (primary or accent)
          color="$accent"
          toConnect={true}
          steps={[
            {
              label: t('onboarding:stepper.singUp'),
              state: 'completed',
            },
            {
              label: t('onboarding:stepper.profile'),
              state: 'completed',
            },
            {
              label: t('onboarding:stepper.app'),
              state: 'active',
            },
          ]}
        />
      </div>

      <YStack width="100%" alignItems="center">
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
      </YStack>
    </YStack>
  );
}
