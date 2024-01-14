import { Button } from './Button';
import { AppLogo } from './AppLogo';
import { Subheading } from './Subheading';
import { TermsComponent } from './TermsComponent';
import { FormSignUp } from './FormSignUp';
import { Title } from './Title';
import { HaveAccComponent } from './HaveAccComponent';
import { MobileComponent } from './MobileComponent';

export function SignUp(): JSX.Element {
  return (
    <>
      <Title />
      <section className="m-3 lg:m-0 lg:grid lg:grid-cols-2">
        <div className="py-6 md:flex md:justify-center">
          <div className="flex flex-col justify-between">
            <FormSignUp />
            <TermsComponent />
            <Button className="btn-primary w-full">Sign Up</Button>
            <HaveAccComponent />
          </div>
        </div>

        <div className="hidden gap-4 bg-primary py-6 lg:flex lg:flex-col lg:items-center">
          <Subheading />
          <AppLogo />
          <MobileComponent />
        </div>
      </section>
    </>
  );
}
