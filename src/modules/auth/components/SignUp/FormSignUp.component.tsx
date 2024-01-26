import { Input } from '@shared/components/Input/Input.component';
import { Button } from '@shared/components/Button/Button.component';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Checkbox } from '../../../../shared/components/Checkbox/Checkbox.component';
import { useAppDispatch } from '@store/hooks.store.ts';
import { trainerSignupAction } from '@modules/auth/store/authActions.store.ts';

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
        <Input
          type="text"
          placeholder={t('auth:firstNamePlaceholder')}
          autoComplete="first-name"
          label={t('auth:firstNameLabel')}
          registerProps={register('firstName', { required: true })}
          error={errors['firstName'] && t(`auth:error:${errors['firstName'].type}`)}
        />
        <Input
          type="text"
          placeholder={t('auth:lastNamePlaceholder')}
          autoComplete="family-name"
          label={t('auth:lastNameLabel')}
          registerProps={register('lastName', { required: true })}
          error={errors['lastName'] && t(`auth:error:${errors['lastName'].type}`)}
        />
        <Input
          type="date"
          placeholder={t('auth:birthdayLabel')}
          autoComplete="bday"
          label={t('auth:birthdayLabel')}
          registerProps={register('birthday', { required: true })}
          error={errors['birthday'] && t(`auth:error:${errors['birthday'].type}`)}
        />
        <Input
          type="email"
          placeholder={t('auth:emailPlaceholder')}
          autoComplete="email"
          label={t('auth:emailLabel')}
          registerProps={register('email', {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format',
            },
          })}
          error={errors['email'] && t(`auth:error:${errors['email'].type}`)}
        />
        <Input
          type="password"
          placeholder={t('auth:passwordPlaceholder')}
          autoComplete="new-password"
          label={t('auth:passwordLabel')}
          registerProps={register('password', { required: true, minLength: 8 })}
          error={errors['password'] && t(`auth:error:${errors['password'].type}`)}
        />
        <Checkbox registerProps={register('terms', { required: true })} className="gap-2">
          {t('auth:checkBoxString')}{' '}
          <a className="cursor-pointer text-primary">{t('auth:checkBoxPrivacy')}</a>{' '}
          {t('auth:checkBoxAnd')}{' '}
          <a className="cursor-pointer text-primary">{t('auth:checkBoxTerms')}</a>.
        </Checkbox>

        <Button type="submit" className="btn-primary w-full">
          {t('auth:signUpButton')}
        </Button>
      </form>
    </>
  );
}
