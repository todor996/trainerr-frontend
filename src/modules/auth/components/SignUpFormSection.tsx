import { Button } from './Button';
import { TermsComponent } from './TermsComponent';
import { FormSignUp } from './FormSignUp';
import { HaveAccComponent } from './HaveAccComponent';
import { useTranslation } from 'react-i18next';

export function SignUpFormSection(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="md:flex md:justify-center">
      <div className="flex flex-col justify-between lg:w-1/2">
        <FormSignUp />
        <TermsComponent />
        <Button className="btn-primary w-full">{t('auth:signUpButton')}</Button>
        <HaveAccComponent />
      </div>
    </div>
  );
}
