import { TrrCheckbox } from '@shared/components/TrrCheckbox.component';
import { Badge, Button } from 'react-daisyui';
import { Link } from 'react-router-dom';

export function OnboardingAppFeatures(): JSX.Element {
  return (
    <div className="flex w-full max-w-[390px] flex-col px-6">
      <h3 className="mb-6 text-xl font-semibold">Features</h3>

      <form className="flex max-w-[390px] flex-col items-start gap-4">
        <TrrCheckbox message="Create Training Plans for your Clients">
          <span className="font-medium">Training Plan</span>
        </TrrCheckbox>

        <TrrCheckbox message="Create Nutrition Plans for your Clients">
          <span className="font-medium">Nutrition Plan</span>
        </TrrCheckbox>

        <TrrCheckbox message="Communicate with your Clients" disabled={true}>
          <span className="font-medium">Chat</span>
          <Badge className="ml-1 font-medium" outline={true} color="success">
            Coming Soon
          </Badge>
        </TrrCheckbox>

        <div className="my-12 flex w-full flex-row gap-2">
          <Link className="grow" to={'/trainer/onboarding/app/info'}>
            <Button className="w-full" type="button">
              Back
            </Button>
          </Link>

          <Link className="grow" to={'/trainer/onboarding/app/style'}>
            <Button className="w-full" type="submit" color="primary">
              Next
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
