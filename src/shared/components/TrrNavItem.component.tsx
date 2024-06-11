import { NavOption } from '@shared/types/NavOption.type';
import { Link, useMatch } from 'react-router-dom';
import { TrrIcon } from './TrrIcon.component';
import { TrrButton } from './TrrButton.component';

interface TrrNavItemProps extends Partial<NavOption> {
  className?: string;
}

export function TrrNavItem(props: TrrNavItemProps): JSX.Element {
  const { to, icon, text, isParent, isActive, onClick } = props;

  const isMatching = !!useMatch(to!);

  const active = isActive ?? isMatching;

  return (
    <Link to={to!} onClick={onClick}>
      <TrrButton
        width="100%"
        themeVariant="ghost"
        justifyContent="flex-start"
        fontWeight={active ? '600' : '500'}
        backgroundColor={active && !isParent ? '$base-700' : '$base'}
      >
        {icon && <TrrIcon size={16} icon={icon} />}
        {text} {active} {props.children}
      </TrrButton>
    </Link>
  );
}
