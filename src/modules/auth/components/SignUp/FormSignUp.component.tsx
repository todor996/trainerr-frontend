import { Input } from '@shared/components/Input/Input.component';
import { Button } from '@shared/components/Button/Button.component';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Checkbox } from '../../../../shared/components/Checkbox/Checkbox.component';

export interface FormInputs {
  firstName: string;
  lastName: string;
  terms: boolean;
  date: string;
  email: string;
  password: string;
}

export function FormSignUp(): JSX.Element {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    console.log('Form Data:', data);
  };

  return (
    <>
      <h2 className="pb-4 text-4xl">{t('auth:signUp')}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
        <Input
          type="text"
          placeholder={t('auth:firstNamePlaceholder')}
          label={t('auth:firstNameLabel')}
          registerProps={register('firstName', { required: true })}
        />
        <Input
          type="text"
          placeholder={t('auth:lastNamePlaceholder')}
          label={t('auth:lastNameLabel')}
          registerProps={register('lastName', { required: true })}
        />
        <Input
          type="date"
          placeholder={t('auth:birthdayLabel')}
          label={t('auth:birthdayLabel')}
          registerProps={register('date', { required: true })}
        />
        <Input
          type="email"
          placeholder={t('auth:emailPlaceholder')}
          autoComplete="current-email"
          label={t('auth:emailLabel')}
          registerProps={register('email', { required: true })}
        />
        <Input
          type="password"
          placeholder={t('auth:passwordPlaceholder')}
          autoComplete="current-password"
          label={t('auth:passwordLabel')}
          registerProps={register('password', { required: true })}
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
