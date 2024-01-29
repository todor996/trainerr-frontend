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

  const onSubmit = async (data: FormInputs) => {
    console.log('Form Data:', data);
    dispatch(trainerSignupAction(data))
      //eslint-disable-next-line
      .then((response: any) => {
        console.log(response);
      });
  };
  console.log(errors);

  return (
    <>
      <h2 className="pb-4 text-4xl">{t('auth:signUp')}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
        <Input
          type="text"
          placeholder={t('auth:firstNamePlaceholder')}
          label={t('auth:firstNameLabel')}
          registerProps={register('firstName', { required: true })}
          error={errors['firstName'] && t(`auth:error:${errors['firstName'].type}`)}
        />
        <Input
          type="text"
          placeholder={t('auth:lastNamePlaceholder')}
          label={t('auth:lastNameLabel')}
          registerProps={register('lastName', { required: true })}
          error={errors['lastName'] && t(`auth:error:${errors['lastName'].type}`)}
        />
        <Input
          type="date"
          placeholder={t('auth:birthdayLabel')}
          label={t('auth:birthdayLabel')}
          registerProps={register('birthday', { required: true })}
          error={errors['birthday'] && t(`auth:error:${errors['birthday'].type}`)}
        />
        <Input
          type="email"
          placeholder={t('auth:emailPlaceholder')}
          autoComplete="current-email"
          label={t('auth:emailLabel')}
          registerProps={register('email', { required: true })}
          error={errors['email'] && t(`auth:error:${errors['email'].type}`)}
        />
        <Input
          type="password"
          placeholder={t('auth:passwordPlaceholder')}
          autoComplete="current-password"
          label={t('auth:passwordLabel')}
          registerProps={register('password', { required: true, minLength: 8 })}
          error={errors['password'] && t(`auth:error:${errors['password'].type}`)}
        />
        <Checkbox registerProps={register('terms', { required: true })} className="gap-2">
          Yes, I accept <a className="cursor-pointer text-primary">privacy policy</a> &{' '}
          <a className="cursor-pointer text-primary">terms of use</a>.
        </Checkbox>

        <Button type="submit" className="btn-primary w-full">
          {t('auth:signUpButton')}
        </Button>
      </form>
    </>
  );
}
