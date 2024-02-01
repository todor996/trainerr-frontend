// import { useAuthNavigate } from '@shared/hooks/useAuthNavigate.hook';

interface RouterGuardProps {
  children: JSX.Element | JSX.Element[];
}

export function RouterGuard({ children }: RouterGuardProps): JSX.Element {
  // TODO: Uncomment this when we connect to backend properly
  // useAuthNavigate();

  return <>{children}</>;
}
