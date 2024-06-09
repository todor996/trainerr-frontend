import { Title } from '@shared/components/Title.component';
import { useLazyLoadResourceHook } from '@shared/hooks/lazyLoadResource.hook';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/Profile.page.tpov';
import AppPage from './pages/App.page.tpov';
import { YStack } from 'tamagui';

export default function Page(): JSX.Element {
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
            <Route path="profile/*" element={<ProfilePage />} />
            <Route path="app/*" element={<AppPage />} />
            <Route path="/*" element={<Navigate to="profile" />} />
          </Routes>
        </YStack>
      </YStack>
    </YStack>
  );
}
