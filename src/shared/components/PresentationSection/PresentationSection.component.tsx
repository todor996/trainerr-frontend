import { SupportedPlatformsList } from './SupportedPlatformsList.component';
import { Title } from '../Title/Title.component';
import { PhoneMockup } from 'react-daisyui';

export function PresentationSection(): JSX.Element {
  return (
    <div className="hidden gap-4 bg-primary py-6 lg:flex lg:flex-col lg:items-center">
      <h2 className="text-3xl font-semibold lg:flex lg:flex-col lg:items-center lg:justify-center">
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
