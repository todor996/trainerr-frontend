import useLazyLoadResourceHook from '@shared/hooks/lazyLoadResource.hook';
import { SignUp as SignUpComponent } from './components/SignUp/SignUp.component';
import { useAuthNavigate } from '@shared/hooks/useAuthNavigate.hook.ts';

export default function SignUp(): JSX.Element {
  useLazyLoadResourceHook({ folderName: 'auth', namespace: 'auth' });
  useAuthNavigate();

  return <SignUpComponent />;
}
