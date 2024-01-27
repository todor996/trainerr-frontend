import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { SidenavItem } from './SidenavItem.component';
import { NavItem } from './NavItem.component';
import { trainerNavOptions } from '@shared/consts/routerTrainerPOV.const';

export function Sidenav(): JSX.Element {
  // TODO: Set POV dynamically
  const { topNavOptions, bottomNavOptions } = trainerNavOptions;

  function logOut() {
    console.log('Log Out');
  }

  return (
    <nav className="h-screen h-svh w-48 min-w-48 border-r-2 border-base-200 pb-6 pt-3">
      <div className="flex h-full flex-col justify-between">
        {/* TOP OPTIONS */}
        <div>
          {topNavOptions.map((option, index) => {
            return <SidenavItem {...option} key={index} />;
          })}
        </div>

        {/* BOTTOM OPTIONS */}
        <div>
          {bottomNavOptions.map((option, index) => {
            return <SidenavItem {...option} key={index} />;
          })}

          <NavItem to="/login" icon={faChevronRight} text="Log Out" onClick={logOut} />
        </div>
      </div>
    </nav>
  );
}
