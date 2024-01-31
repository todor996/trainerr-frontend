import useLazyLoadResourceHook from '@shared/hooks/lazyLoadResource.hook';
import { LogIn as LogInComponent } from './components/LogIn/LogIn.component';
import { useAuthNavigate } from '@shared/hooks/useAuthNavigate.hook.ts';

export default function LogIn(): JSX.Element {
  useLazyLoadResourceHook({ folderName: 'auth', namespace: 'auth' });
  useAuthNavigate();

  return <LogInComponent />;
}
