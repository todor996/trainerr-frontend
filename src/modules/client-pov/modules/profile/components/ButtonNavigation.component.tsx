import { useState } from 'react';
import { faAppleWhole, faDumbbell, faUser } from '@fortawesome/free-solid-svg-icons';
import { TrrIcon } from '@shared/components/TrrIcon.component';
import { BottomNavigation } from 'react-daisyui';

export default function ButtonNav(): JSX.Element {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index: number) => {
    setActiveItem(index);
  };

  return (
    <BottomNavigation size="sm">
      <BottomNavigation.Item
        color={activeItem === 0 ? 'primary' : undefined}
        onClick={() => handleItemClick(0)}
      >
        <TrrIcon icon={faDumbbell}></TrrIcon>
      </BottomNavigation.Item>
      <BottomNavigation.Item
        color={activeItem === 1 ? 'primary' : undefined}
        onClick={() => handleItemClick(1)}
      >
        <TrrIcon icon={faAppleWhole}></TrrIcon>
      </BottomNavigation.Item>
      <BottomNavigation.Item
        color={activeItem === 2 ? 'primary' : undefined}
        onClick={() => handleItemClick(2)}
      >
        <TrrIcon icon={faUser}></TrrIcon>
      </BottomNavigation.Item>
    </BottomNavigation>
  );
}
