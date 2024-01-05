import useLazyLoadResourceHook from '@shared/hooks/lazyLoadResource.hook';
import { SignUp } from './components/SignUp';

export default function Auth(): JSX.Element {
  useLazyLoadResourceHook({ folderName: 'Auth', namespace: 'auth' });

  return <SignUp />;
}
