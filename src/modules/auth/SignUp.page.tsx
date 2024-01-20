import useLazyLoadResourceHook from '@shared/hooks/lazyLoadResource.hook';
import { SignUp as SignUpComponent } from './components/SignUp/SignUp.component';

export default function SignUp(): JSX.Element {
  useLazyLoadResourceHook({ folderName: 'auth', namespace: 'auth' });

  return <SignUpComponent />;
}
