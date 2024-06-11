import { NavOption } from '@shared/types/NavOption.type';
import { TrrNavItem } from './TrrNavItem.component';
import { SizableText } from 'tamagui';

interface TrrSidenavItemProps extends Partial<NavOption> {}

export function TrrSidenavItem(props: TrrSidenavItemProps): JSX.Element {
  const isActive = location.pathname.includes(props.to!);
  const isParent = !!props.navChildren?.length;

  const toShowSubOptions = isActive && isParent;

  return (
    <>
      <TrrNavItem
        isParent={isParent}
        isActive={isActive}
        text={props.text}
        icon={props.icon}
        to={props.to}
      />
      {toShowSubOptions &&
        props.navChildren!.map((subOption, index) => {
          return (
            <TrrNavItem to={subOption.to} isChild={subOption.isChild} key={index}>
              <SizableText>{subOption.text}</SizableText>
            </TrrNavItem>
          );
        })}
    </>
  );
}
