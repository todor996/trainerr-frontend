import { NavOption } from '@type/NavOption.type';
import { Button } from 'react-daisyui';
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
    <Link to={to!}>
      <Button
        onClick={onClick}
        className={twMerge(
          'flex w-full justify-start gap-2 rounded-none text-base font-medium',
          className,
        )}
        tag="span"
        active={active}
        color="ghost"
      >
        {icon && <Icon size={16} icon={icon} />}
        <span className={active ? 'font-semibold' : ''}>
          {text} {props.children}
        </span>
      </Button>
    </Link>
  );
}
