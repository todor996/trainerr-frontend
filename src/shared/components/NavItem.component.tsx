import { NavOption } from '@type/NavOption.type';
import { Link, useMatch } from 'react-router-dom';
import { Icon } from './Icon.component';
import { twMerge } from 'tailwind-merge';

interface NavItemProps extends Partial<NavOption> {
  className?: string;
}

export function NavItem(props: NavItemProps): JSX.Element {
  const { to, icon, text, isActive, className, onClick } = props;

  const isMatching = !!useMatch(to!);

  const active = isActive ?? isMatching;

  return (
    <Link
      className={twMerge(
        'btn btn-ghost flex w-full justify-start gap-2 text-base font-medium',
        'h-10 max-h-10 min-h-0',
        active && 'border-solid border-base-content font-semibold',
        className,
      )}
      to={to!}
      onClick={onClick}
    >
      {icon && <Icon size={16} icon={icon} />}
      {text} {props.children}
    </Link>
  );
}
