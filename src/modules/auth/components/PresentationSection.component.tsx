import { SupportedPlatformsList } from './SupportedPlatformsList.component';
import { Title } from '../../../shared/components/Title.component';
import { PhoneMockup } from 'react-daisyui';

export function PresentationSection(): JSX.Element {
  return (
    <div className="hidden gap-4 bg-base-200 py-6 text-base-content md:flex md:flex-col md:items-center">
      <h2 className="text-3xl sm:font-semibold md:flex md:flex-col md:items-center md:justify-center md:font-medium lg:font-semibold">
        <span>Your App</span>
        <span>Your Logo</span>
        <span>Your Colors</span>
      </h2>
      <p>On ALL platforms</p>

      <SupportedPlatformsList />

      <h5 className="font-medium">Within minutes</h5>

      {/* TODO: https://trello.com/c/3euK3Rry/11-presentation-section-component */}
      <PhoneMockup className="-my-16 scale-75">
        <Title />
      </PhoneMockup>

      {/* TODO: think about using daisyui without a component, since it seems that it fixes the problem, maybe */}
      {/* <div className="mockup-phone -my-16 scale-75">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            <Title />
          </div>
        </div>
      </div> */}
    </div>
  );
}
