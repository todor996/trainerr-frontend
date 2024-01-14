type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export function Button({ children, className }: ButtonProps): JSX.Element {
  return <button className={`btn w-full ${className}`}>{children}</button>;
}
