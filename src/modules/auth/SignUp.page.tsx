import { PresentationSection } from '@modules/auth/components/PresentationSection.component';
import { Title } from '@shared/components/Title.component';
import { SignUpSection } from './components/SignUp/SignUpSection.component';
import { useLazyLoadResourceHook } from '@shared/hooks/lazyLoadResource.hook';
import { LoadingPage } from '@shared/components/LoadingPage.component';

export default function SignUpPage(): JSX.Element {
  const loaded = useLazyLoadResourceHook({ folderName: 'auth', namespace: 'auth' });

  return loaded ? (
    <>
      <Title />
      <section className="m-3 lg:m-0 lg:grid lg:grid-cols-2">
        <SignUpSection />
        <PresentationSection />
      </section>
    </>
  ) : (
    <LoadingPage />
  );
}
