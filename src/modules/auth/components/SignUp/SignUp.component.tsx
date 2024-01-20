import { Title } from './Title.component';
import { SignUpSection } from './SignUpSection.component';
import { PresentationSection } from '../shared/PresentationSection.component';

export function SignUp(): JSX.Element {
  return (
    <>
      <Title />
      <section className="m-3 lg:m-0 lg:grid lg:grid-cols-2">
        <SignUpSection />
        <PresentationSection />
      </section>
    </>
  );
}
