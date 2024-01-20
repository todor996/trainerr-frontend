import useLazyLoadResourceHook from '@shared/hooks/lazyLoadResource.hook';
import { LogIn as LogInComponent } from './components/LogIn/LogIn.component';

export default function LogIn(): JSX.Element {
  useLazyLoadResourceHook({ folderName: 'auth', namespace: 'auth' });

  return <LogInComponent />;
}
