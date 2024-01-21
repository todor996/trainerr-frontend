import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';
import { Icon } from '@shared/components/Icon.component';

export function SupportedPlatformsList(): JSX.Element {
  return (
    <div className="grid grid-cols-3 items-end gap-4">
      <div className="flex flex-col items-center">
        <Icon icon={faApple}></Icon>
        <p>iOS</p>
      </div>
      <div className="flex flex-col items-center">
        <Icon icon={faAndroid}></Icon>
        <p>Android</p>
      </div>
      <div className="flex flex-col items-center">
        <Icon icon={faGlobe}></Icon>
        <p>Web</p>
      </div>
    </div>
  );
}
