import { Title } from '../SignUp/Title.component';
import { PresentationSection } from '../shared/PresentationSection.component';
import { LogInSection } from './LogInSection';

export function LogIn(): JSX.Element {
  return (
    <>
      <Title />
      <section className="m-3 lg:m-0 lg:grid lg:grid-cols-2">
        <LogInSection />
        <PresentationSection />
      </section>
    </>
  );
}
