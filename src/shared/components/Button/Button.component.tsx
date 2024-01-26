import { MouseEventHandler } from 'react';
import { Button as DaisyButton } from 'react-daisyui';
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
    <DaisyButton type={type} onClick={onClick} className={`${className}`}>
      {children}
    </DaisyButton>
  );
}
