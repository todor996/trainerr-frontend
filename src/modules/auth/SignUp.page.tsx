import { Loading } from 'react-daisyui';
import useLazyLoadResourceHook from '@shared/hooks/lazyLoadResource.hook';
import { PresentationSection } from '@shared/components/PresentationSection/PresentationSection.component';
import { Title } from '@shared/components/Title/Title.component';
import { useAuthNavigate } from '@shared/hooks/useAuthNavigate.hook.ts';
import { SignUpSection } from './components/SignUp/SignUpSection.component';

export default function SignUp(): JSX.Element {
  const loaded = useLazyLoadResourceHook({ folderName: 'auth', namespace: 'auth' });
  useAuthNavigate();

  return loaded ? (
    <>
      <Title />
      <section className="m-3 lg:m-0 lg:grid lg:grid-cols-2">
        <SignUpSection />
        <PresentationSection />
      </section>
    </>
  ) : (
    <Loading />
  );
}
