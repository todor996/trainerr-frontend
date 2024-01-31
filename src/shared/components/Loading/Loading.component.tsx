type LoadingProps = {
  className?: string;
  size?: string;
};

export function Loading({ className, size = 'w-32' }: LoadingProps) {
  return <span className={`loading loading-spinner text-primary ${size} ${className}`} />;
}
