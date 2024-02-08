import { faAppleWhole, faDumbbell, faUser } from '@fortawesome/free-solid-svg-icons';
import { TrrIcon } from '@shared/components/TrrIcon.component';
import { BottomNavigation } from 'react-daisyui';

export default function ButtonNav(): JSX.Element {
  return (
    <BottomNavigation>
      <BottomNavigation.Item>
        <TrrIcon icon={faDumbbell}></TrrIcon>
      </BottomNavigation.Item>
      <BottomNavigation.Item>
        <TrrIcon icon={faAppleWhole}></TrrIcon>
      </BottomNavigation.Item>
      <BottomNavigation.Item>
        <TrrIcon icon={faUser}></TrrIcon>
      </BottomNavigation.Item>
    </BottomNavigation>
  );
}
