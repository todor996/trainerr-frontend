import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form } from 'tamagui';
import { TrrInput } from '@shared/components/TrrInput.component';
import { TrrCheckbox } from '@shared/components/TrrCheckbox.component';
import { useAppDispatch, useAppSelector } from '@store/hooks.store';
import { trainerSignupAction } from '@modules/auth/store/authActions.store';
import { useFormik } from 'formik';
import { Validator } from '@shared/services/validator.service';
import { useEffect } from 'react';
import { updateAuthState } from '@modules/auth/store/authSlice.store';
import { useToastController } from '@tamagui/toast';

interface FormInputs {
  username: string;
  terms: boolean;
  email: string;
  password: string;
  passwordConfirm: string;
}

const initFromValues: FormInputs = {
  username: '',
  terms: false,
  email: '',
  password: '',
  passwordConfirm: '',
};

export function SignUpForm(): JSX.Element {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const toast = useToastController();

  const dispatch = useAppDispatch();
  const { loading, error, success } = useAppSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: initFromValues,
    validate: handleValidationFormik,
    onSubmit: handleSubmitFormik,
  });

  useEffect(() => {
    Validator.setErrorMessages({
      required: t('auth:error.required'),
      email: t('auth:error.email'),
      url: t('auth:error.url'),
      min: t('auth:error.min'),
      max: t('auth:error.max'),
      equals: t('auth:error.equals'),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (error) {
      toast.show('Error', { status: 'error', message: JSON.stringify(error) });

      dispatch(updateAuthState({ error: null }));
    }

    if (success) {
      dispatch(updateAuthState({ success: false }));
      navigate('/trainer/onboarding');
    }

    if (!loading) {
      formik.setSubmitting(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, error, success, dispatch]);

  function handleSubmitFormik(values: FormInputs) {
    dispatch(trainerSignupAction(values));
  }

  function handleValidationFormik(values: FormInputs) {
    const errors = Validator.formatErrors({
      username: new Validator(values.username).required(),
      terms: new Validator(values.terms).required(),
      email: new Validator(values.email).required().email(),
      password: new Validator(values.password).required().min(8),
      passwordConfirm: new Validator(values.passwordConfirm)
        .required()
        .min(8)
        .equals(values.password),
    });
    return errors;
  }

  function onCheckboxChange(value: string | boolean) {
    formik.setFieldValue('terms', value);
    formik.setFieldError('terms', new Validator(value).required().error);

    return formik.handleChange;
  }

  return (
    <>
      {/* TODO: Show proper loader... */}
      {/* {loading && <div className="text-center">Loading...</div>} */}
      <Form className="flex grow flex-col gap-4" onSubmit={formik.handleSubmit}>
        <TrrInput
          id="email"
          name="email"
          type="email"
          value={formik.values.email}
          placeholder={t('auth:emailPlaceholder')}
          autoComplete="email"
          label={t('auth:emailLabel')}
          error={formik.touched.email ? formik.errors.email : ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TrrInput
          id="username"
          name="username"
          type="text"
          value={formik.values.username}
          placeholder={t('auth:usernamePlaceholder')}
          // autoComplete="username"
          label={t('auth:usernameLabel')}
          error={formik.touched.username ? formik.errors.username : ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TrrInput
          id="password"
          name="password"
          type="password"
          value={formik.values.password}
          secureTextEntry={true}
          placeholder={t('auth:passwordPlaceholder')}
          autoComplete="new-password"
          label={t('auth:passwordLabel')}
          error={formik.touched.password ? formik.errors.password : ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TrrInput
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          value={formik.values.passwordConfirm}
          secureTextEntry={true}
          placeholder={t('auth:passwordConfirmPlaceholder')}
          autoComplete="new-password"
          label={t('auth:passwordConfirmLabel')}
          error={formik.touched.passwordConfirm ? formik.errors.passwordConfirm : ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TrrCheckbox
          id="terms"
          name="terms"
          value="terms"
          error={formik.touched.terms ? formik.errors.terms : ''}
          onCheckedChange={(event) => onCheckboxChange(event)}
          onBlur={formik.handleBlur}
        >
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

        <div className="mt-2 flex flex-col gap-2">
          <Form.Trigger disabled={formik.isSubmitting}>
            <Button
              className="btn-primary w-full"
              tag="span"
              disabled={formik.isSubmitting}
            >
              {t('auth:signUpButton')}
            </Button>
          </Form.Trigger>

          <span className="label-text">
            {t('auth:signup.loginLabel')}{' '}
            <Link to="/auth/login" className="cursor-pointer text-primary">
              {t('auth:signup.loginLink')}
            </Link>
          </span>
        </div>
      </Form>
    </>
  );
}
