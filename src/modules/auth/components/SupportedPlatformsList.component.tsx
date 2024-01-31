import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';
import { TrrIcon } from '@shared/components/TrrIcon.component';

export function SupportedPlatformsList(): JSX.Element {
  return (
    <div className="grid grid-cols-3 items-end gap-4">
      <div className="flex flex-col items-center">
        <TrrIcon icon={faApple}></TrrIcon>
        <p>iOS</p>
      </div>
      <div className="flex flex-col items-center">
        <TrrIcon icon={faAndroid}></TrrIcon>
        <p>Android</p>
      </div>
      <div className="flex flex-col items-center">
        <TrrIcon icon={faGlobe}></TrrIcon>
        <p>Web</p>
      </div>
    </div>
  );
}
