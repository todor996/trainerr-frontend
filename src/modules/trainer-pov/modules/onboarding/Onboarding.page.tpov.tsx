import { Title } from '@shared/components/Title.component';
import { useLazyLoadResourceHook } from '@shared/hooks/lazyLoadResource.hook';
import { Navigate, Route, Routes } from 'react-router-dom';
import OnboardingProfilePage from './pages/OnboardingProfile.page.tpov';
import OnboardingAppPage from './pages/OnboardingApp.page.tpov';
import { YStack } from 'tamagui';

export default function OnboardingPage(): JSX.Element {
  useLazyLoadResourceHook({
    folderName: 'trainer-pov/modules/onboarding',
    namespace: 'onboarding',
    pov: 'tpov',
  });

  return (
    <YStack
      className="flex h-full min-h-screen w-full flex-col items-center bg-base-300"
      // TODO@theme: set this in configuration
      backgroundColor="$neutral"
      alignItems="center"
    >
      <YStack
        className="flex h-full min-h-screen w-full flex-col items-center bg-base-100 sm:px-6 md:px-12 lg:max-w-[896px] xl:max-w-[1024px]"
        alignItems="center"
        backgroundColor="$base"
      >
        <Title />
        <div className="flex w-full flex-col items-center">
          <Routes>
            <Route path="profile/*" element={<OnboardingProfilePage />} />
            <Route path="app/*" element={<OnboardingAppPage />} />
            <Route path="/*" element={<Navigate to="profile" />} />
          </Routes>
        </div>
      </YStack>
    </YStack>
  );
}
