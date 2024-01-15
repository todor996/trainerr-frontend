import { Button } from '@shared/components/Button/Button.component';
import { TermsComponent } from './Terms.component';
import { FormSignUp } from './FormSignUp.component.component';
import { useTranslation } from 'react-i18next';

export function SignUpFormSection(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="md:flex md:justify-center">
      <div className="flex flex-col justify-between py-6 lg:w-1/2">
        <FormSignUp />
        <TermsComponent className="py-4" />
        <Button className="btn-primary w-full">{t('auth:signUpButton')}</Button>
        <div className="py-2">
          <label className="label">
            <span className="label-text">
              You already have an account?{' '}
              <a href="#" className="cursor-pointer text-primary">
                Log In
              </a>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
