import { NavOption } from '@type/NavOption.type';
import { Button } from 'react-daisyui';
import { useMatch } from 'react-router-dom';
import { Icon } from './Icon.component';
import { twMerge } from 'tailwind-merge';

interface NavItemProps extends Partial<NavOption> {
  className?: string;
}

export function NavItem(props: NavItemProps): JSX.Element {
  const { to, icon, text, isChild, isActive, className, onClick } = props;

  const isMatching = !!useMatch(to!);

  const active = isActive ?? isMatching;

  console.log({ isActive: active, isChild });

  return (
    <Button
      onClick={onClick}
      className={twMerge(
        'flex w-full justify-start gap-2 rounded-none text-base font-medium',
        className,
      )}
      tag="a"
      href={to}
      active={active}
      color="ghost"
    >
      {icon && <Icon size={16} icon={icon} />}
      <span className={active ? 'font-semibold' : ''}>
        {text} {props.children}
      </span>
    </Button>
  );
}
