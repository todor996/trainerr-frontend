import { Link } from 'react-router-dom';
import { FormLogIn } from './FormLogIn.component';
import { useTranslation } from 'react-i18next';

export function LogInSection(): JSX.Element {
  const { t } = useTranslation();
  
  return (
    <div className="md:flex md:justify-center">
      <div className="flex flex-col py-6 lg:w-1/2">
        <h2 className="pb-4 text-4xl">{t('auth:logIn')}</h2>
        <FormLogIn />

        <div className="label">
          <span className="label-text">
            {t('auth:account.accountLabel')}
            <Link to="/auth/signup" className="cursor-pointer text-primary">
              {' '}
              {t('auth:account.accountLink')}
            </Link>
            .
          </span>
        </div>
      </div>
    </div>
  );
}
