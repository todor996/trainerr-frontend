import Apple from 'src/assets/apple.svg';
import Andriod from 'src/assets/andriod.svg';
import Globe from 'src/assets/globe.svg';

export function PlatformsList(): JSX.Element {
  return (
    <div className="grid grid-cols-3 items-end gap-4">
      <div className="flex flex-col items-center">
        <img src={Apple} alt="Apple Logo" className="w-6" />
        <p>iOS</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={Andriod} alt="Andriod Logo" className="w-6" />
        <p>Andriod</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={Globe} alt="Globe Logo" className="w-6" />
        <p>Web</p>
      </div>
    </div>
  );
}
