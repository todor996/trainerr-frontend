import { PlatformsList } from './PlatformsList';
import Mobile from 'src/assets/Mobile.png';

export function PresentationSection(): JSX.Element {
  return (
    <div className="hidden gap-4 bg-primary py-6 lg:flex lg:flex-col lg:items-center">
      <h2 className="text-3xl font-semibold lg:flex lg:flex-col lg:items-center lg:justify-center">
        <span>Your App</span>
        <span>Your Logo</span>
        <span>Your Colors</span>
      </h2>
      <p>On ALL platforms</p>

      <PlatformsList />

      <h5 className="font-medium">Within minutes</h5>
      <img src={Mobile} alt="Mobile" />
    </div>
  );
}
