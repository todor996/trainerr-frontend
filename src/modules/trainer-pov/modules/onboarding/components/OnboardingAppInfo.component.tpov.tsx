import { TrrInput } from '@shared/components/TrrInput.component';
import { TrrTextarea } from '@shared/components/TrrTextarea.component';
import { Button } from 'react-daisyui';
import { Link } from 'react-router-dom';

export function OnboardingAppInfo(): JSX.Element {
  return (
    <div className="flex w-full max-w-[390px] flex-col px-3">
      <h3 className="mb-6 text-xl font-semibold">Info</h3>

      <form className="flex max-w-[390px] flex-col items-start gap-4">
        <TrrInput label="App Name" placeholder="Your App" />
        <TrrTextarea label="Description" placeholder="Something about your app" />

        <div className="my-12 flex w-full flex-row gap-2">
          <Link className="grow" to={'/trainer/onboarding/profile'}>
            <Button className="w-full" type="button">
              Back
            </Button>
          </Link>

          <Link className="grow" to={'/trainer/onboarding/app/features'}>
            <Button className="w-full" type="submit" color="primary">
              Next
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
