import { useAuthGuard } from './useAuthGuard.hook';
import { useTrainerGuard } from './useTrainerGuard.hook';

interface RouterGuardProps {
  children: JSX.Element | JSX.Element[];
}

export function RouterGuard({ children }: RouterGuardProps): JSX.Element {
  useAuthGuard();
  useTrainerGuard();

  return <>{children}</>;
}
