type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export const Button = ({ children, className }: ButtonProps) => {
  return <button className={`btn w-full ${className}`}>{children}</button>;
};
