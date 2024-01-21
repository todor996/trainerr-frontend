import { NavOption } from '@type/NavOption.type';
import { NavItem } from './NavItem.component';

interface SidenavItemProps extends Partial<NavOption> {}

export function SidenavItem(props: SidenavItemProps): JSX.Element {
  const isActive = location.pathname.includes(props.to!);
  const isParent = !!props.navChildren?.length;

  const toShowSubOptions = isActive && isParent;

  return (
    <>
      <NavItem
        className={isActive ? 'font-semibold' : ''}
        text={props.text}
        icon={props.icon}
        to={props.to}
      />
      {toShowSubOptions &&
        props.navChildren!.map((subOption, index) => {
          return (
            <NavItem to={subOption.to} isChild={subOption.isChild} key={index}>
              <span className="ml-7">{subOption.text}</span>
            </NavItem>
          );
        })}
    </>
  );
}
