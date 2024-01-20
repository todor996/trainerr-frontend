import { MouseEventHandler } from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
};

export function Button({
  children,
  className,
  onClick,
  type = 'button',
}: ButtonProps): JSX.Element {
  return (
    <button type={type} onClick={onClick} className={`btn flex w-full ${className}`}>
      {children}
    </button>
  );
}
