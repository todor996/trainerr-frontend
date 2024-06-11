import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { TrrSidenavItem } from './TrrSidenavItem.component';
import { TrrNavItem } from './TrrNavItem.component';
import { navOptionsTpov } from '@shared/consts/nav.tpov.const';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Nav } from 'tamagui';

export function TrrSidenav(): JSX.Element {
  const { t, i18n } = useTranslation();

  // TODO: Set POV dynamically
  const navOptions = useRef(navOptionsTpov());

  useEffect(() => {
    navOptions.current = navOptionsTpov();
  }, [i18n.language]);

  function logOut() {
    // TODO: Implement t
    console.log('Log Out');
  }

  return (
    <Nav
      height="100svh"
      width="192px"
      minWidth="208px"
      borderRightWidth="1px"
      borderColor="$base-700"
      backgroundColor="$base"
      paddingTop="12px"
      paddingBottom="24px"
      paddingHorizontal="8px"
    >
      <div className="flex h-full flex-col justify-between">
        {/* TOP OPTIONS */}
        <div className="flex flex-col gap-1">
          {navOptions.current.topNavOptions.map((option, index) => {
            return <TrrSidenavItem {...option} key={index} />;
          })}
        </div>

        {/* BOTTOM OPTIONS */}
        <div className="flex flex-col gap-1">
          {navOptions.current.bottomNavOptions.map((option, index) => {
            return <TrrSidenavItem {...option} key={index} />;
          })}

          <TrrNavItem
            to="/login"
            icon={faChevronRight}
            text={t('action.logout')}
            onClick={logOut}
          />
        </div>
      </div>
    </Nav>
  );
}
