import { Title } from './Title';
import { SignUpFormSection } from './SignUpFormSection';
import { PresentationSection } from './PresentationSection';

export function SignUp(): JSX.Element {
  return (
    <>
      <Title />
      <section className="m-3 lg:m-0 lg:grid lg:grid-cols-2">
        <SignUpFormSection />
        <PresentationSection />
      </section>
    </>
  );
}
