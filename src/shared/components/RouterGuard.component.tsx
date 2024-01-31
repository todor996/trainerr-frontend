import { useAuthNavigate } from '@shared/hooks/useAuthNavigate.hook';

interface RouterGuardProps {
  children: JSX.Element | JSX.Element[];
}

export function RouterGuard({ children }: RouterGuardProps): JSX.Element {
  useAuthNavigate();

  return <>{children}</>;
}
