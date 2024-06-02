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
      // TODO@theme: set this in configuration
      backgroundColor="$neutral"
      alignItems="center"
      width="100%"
      height="100%"
      minHeight="100vh"
    >
      <YStack
        // TODO@theme: set this with props
        // TODO@theme: set @media breakpoints like in tailwind with tamagui
        className="sm:px-6 md:px-12 lg:max-w-[896px] xl:max-w-[1024px]"
        alignItems="center"
        height="100%"
        minHeight="100vh"
        backgroundColor="$base"
        width="100%"
      >
        <Title />
        <YStack
          className="flex h-full w-full flex-col items-center"
          height="100%"
          width="100%"
          alignItems="center"
        >
          <Routes>
            <Route path="profile/*" element={<OnboardingProfilePage />} />
            <Route path="app/*" element={<OnboardingAppPage />} />
            <Route path="/*" element={<Navigate to="profile" />} />
          </Routes>
        </YStack>
      </YStack>
    </YStack>
  );
}
