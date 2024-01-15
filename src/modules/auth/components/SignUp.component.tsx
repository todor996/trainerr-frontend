import { Title } from './Title.component';
import { SignUpFormSection } from './SignUpFormSection.component';
import { PresentationSection } from './PresentationSection.component';

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
