import { useLazyLoadResourceHook } from '@shared/hooks/lazyLoadResource.hook';
import { PresentationSection } from '@modules/auth/components/PresentationSection.component';
import { Title } from '@shared/components/Title.component';
import { LogInSection } from './components/LogIn/LogInSection';
import { LoadingPage } from '@shared/components/LoadingPage.component';

export default function LogInPage(): JSX.Element {
  const loaded = useLazyLoadResourceHook({ folderName: 'auth', namespace: 'auth' });

  return loaded ? (
    <>
      <Title />
      <section className="m-3 md:m-0 md:grid md:grid-cols-2">
        <LogInSection />
        <PresentationSection />
      </section>
    </>
  ) : (
    <LoadingPage />
  );
}
