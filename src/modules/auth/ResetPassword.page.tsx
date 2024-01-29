import useLazyLoadResourceHook from '@shared/hooks/lazyLoadResource.hook';
import { Title } from '../../shared/components/Title/Title.component';
import { FormResetPassword } from './components/ResetPassword/FormResetPassword.component';
import { Loading } from '@shared/components/Loading/Loading.component';

export default function ResetPasswordPage(): JSX.Element {
  const loaded = useLazyLoadResourceHook({ folderName: 'auth', namespace: 'auth' });

  return loaded ? (
    <>
      <Title />
      <FormResetPassword />
    </>
  ) : (
    <Loading />
  );
}
