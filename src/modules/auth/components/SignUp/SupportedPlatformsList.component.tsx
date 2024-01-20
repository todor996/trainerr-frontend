import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';

export function SupportedPlatformsList(): JSX.Element {
  return (
    <div className="grid grid-cols-3 items-end gap-4">
      <div className="flex flex-col items-center">
        <FontAwesomeIcon icon={faApple} className="fa-2xl" />
        <p>iOS</p>
      </div>
      <div className="flex flex-col items-center">
        <FontAwesomeIcon icon={faAndroid} className="fa-xl" />
        <p>Android</p>
      </div>
      <div className="flex flex-col items-center">
        <FontAwesomeIcon icon={faGlobe} className="fa-xl" />
        <p>Web</p>
      </div>
    </div>
  );
}
