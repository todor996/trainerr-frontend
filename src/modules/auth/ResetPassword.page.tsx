import { useLazyLoadResourceHook } from '@shared/hooks/lazyLoadResource.hook';
import { Title } from '../../shared/components/Title.component';
import { FormResetPassword } from './components/ResetPassword/FormResetPassword.component';
import { LoadingPage } from '@core/components/LoadingPage.component';

export default function ResetPasswordPage(): JSX.Element {
  const loaded = useLazyLoadResourceHook({ folderName: 'auth', namespace: 'auth' });

  return loaded ? (
    <>
      <Title />
      <FormResetPassword />
    </>
  ) : (
    <LoadingPage />
  );
}
