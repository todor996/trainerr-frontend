import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from 'react-daisyui';
import { TrrInput } from '@shared/components/TrrInput.component';
import { TrrCheckbox } from '@shared/components/TrrCheckbox.component';
import { emailRegex } from '@shared/consts/regex';
import { useAppDispatch } from '@store/hooks.store';
import { trainerSignupAction } from '@modules/auth/store/authActions.store';

export interface FormInputs {
  firstName: string;
  lastName: string;
  terms: boolean;
  birthday: string;
  email: string;
  password: string;
}

export function FormSignUp(): JSX.Element {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  async function onSubmit(data: FormInputs) {
    dispatch(trainerSignupAction(data));
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
        <TrrInput
          type="text"
          placeholder={t('auth:firstNamePlaceholder')}
          autoComplete="first-name"
          label={t('auth:firstNameLabel')}
          registerProps={register('firstName', { required: true })}
          error={errors['firstName'] && t(`auth:error:${errors['firstName'].type}`)}
        />
        <TrrInput
          type="text"
          placeholder={t('auth:lastNamePlaceholder')}
          autoComplete="family-name"
          label={t('auth:lastNameLabel')}
          registerProps={register('lastName', { required: true })}
          error={errors['lastName'] && t(`auth:error:${errors['lastName'].type}`)}
        />
        <TrrInput
          type="date"
          placeholder={t('auth:birthdayLabel')}
          autoComplete="bday"
          label={t('auth:birthdayLabel')}
          registerProps={register('birthday', { required: true })}
          error={errors['birthday'] && t(`auth:error:${errors['birthday'].type}`)}
        />
        <TrrInput
          type="email"
          placeholder={t('auth:emailPlaceholder')}
          autoComplete="email"
          label={t('auth:emailLabel')}
          registerProps={register('email', {
            required: true,
            pattern: {
              value: emailRegex,
              message: 'Entered value does not match email format',
            },
          })}
          error={errors['email'] && t(`auth:error:${errors['email'].type}`)}
        />
        <TrrInput
          type="password"
          placeholder={t('auth:passwordPlaceholder')}
          autoComplete="new-password"
          label={t('auth:passwordLabel')}
          registerProps={register('password', { required: true, minLength: 8 })}
          error={errors['password'] && t(`auth:error:${errors['password'].type}`)}
        />
        <TrrCheckbox registerProps={register('terms', { required: true })}>
          {t('auth:checkbox.checkboxLabel')}{' '}
          <Link to="#" className="cursor-pointer text-primary">
            {t('auth:checkbox.checkboxPrivacy')}
          </Link>{' '}
          {t('auth:checkbox.checkboxAnd')}{' '}
          <Link to="#" className="cursor-pointer text-primary">
            {t('auth:checkbox.checkboxTerms')}
          </Link>
          .
        </TrrCheckbox>

        <Button type="submit" className="btn-primary w-full">
          {t('auth:signUpButton')}
        </Button>
      </form>
    </>
  );
}
