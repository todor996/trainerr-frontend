import { useTranslation } from 'react-i18next';
import { FormSignUp } from './FormSignUp.component';
import { Link } from 'react-router-dom';

export function SignUpSection(): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className="md:flex md:justify-center">
      <div className="flex flex-col justify-between py-6 lg:w-1/2">
        <h2 className="pb-4 text-4xl">{t('auth:signUp')}</h2>
        <FormSignUp />

        <div className="label">
          <span className="label-text">
            {t('auth:signup.loginLabel')}{' '}
            <Link to="/auth/login" className="cursor-pointer text-primary">
              {t('auth:signup.loginLink')}
            </Link>
            .
          </span>
        </div>
      </div>
    </div>
  );
}
