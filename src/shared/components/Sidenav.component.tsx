import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { SidenavItem } from './SidenavItem.component';
import { NavItem } from './NavItem.component';
import { navOptionsTpov } from '@shared/consts/nav.tpov.const';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export function Sidenav(): JSX.Element {
  const { t, i18n } = useTranslation();

  // TODO: Set POV dynamically
  const navOptions = useRef(navOptionsTpov());

  useEffect(() => {
    navOptions.current = navOptionsTpov();
  }, [i18n.language]);

  function logOut() {
    console.log('Log Out');
  }

  return (
    <nav className="h-screen h-svh w-48 min-w-52 border-r-2 border-base-200 px-2 pb-6 pt-3">
      <div className="flex h-full flex-col justify-between">
        {/* TOP OPTIONS */}
        <div className="flex flex-col gap-1">
          {navOptions.current.topNavOptions.map((option, index) => {
            return <SidenavItem {...option} key={index} />;
          })}
        </div>

        {/* BOTTOM OPTIONS */}
        <div className="flex flex-col gap-1">
          {navOptions.current.bottomNavOptions.map((option, index) => {
            return <SidenavItem {...option} key={index} />;
          })}

          <NavItem
            to="/login"
            icon={faChevronRight}
            text={t('action.logout')}
            onClick={logOut}
          />
        </div>
      </div>
    </nav>
  );
}
