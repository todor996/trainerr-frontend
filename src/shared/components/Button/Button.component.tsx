import { MouseEventHandler } from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export function Button({ children, className, onClick }: ButtonProps): JSX.Element {
  return (
    <button onClick={onClick} className={`btn w-full ${className}`}>
      {children}
    </button>
  );
}
