import { TrrInput } from '@shared/components/TrrInput.component';
import { TrrTextarea } from '@shared/components/TrrTextarea.component';
import { Button, Form } from 'tamagui';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { Validator } from '@shared/utils/validator.util';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface FormInputs {
  name: string;
  description: string;
}

const initFromValues: FormInputs = {
  // TODO: Set better initial name
  name: '',
  description: '',
};

export function OnboardingAppInfo(): JSX.Element {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initFromValues,
    onSubmit: handleSubmitFormik,
    validate: handleValidationFormik,
  });

  useEffect(() => {
    Validator.setErrorMessages({
      // required: t('error.required'),
      min: t('error.min'),
      max: t('error.max'),
    });
  });

  function handleSubmitFormik(values: FormInputs) {
    console.log('handleSubmitFormik', { values });
    // TODO: dispatch action

    navigate('/trainer/onboarding/app/features');
  }

  function handleValidationFormik(values: FormInputs) {
    console.log('handleValidationFormik', { values });

    const errors: Partial<FormInputs> = Validator.formatErrors({
      name: new Validator(values.name).required().max(120),
      description: new Validator(values.description).max(255),
    });

    console.log({ errors });

    return errors;
  }

  return (
    <div className="flex w-full max-w-[390px] flex-col px-3">
      <h3 className="mb-6 text-xl font-semibold">Info</h3>

      <Form className="flex max-w-[390px] flex-col gap-4" onSubmit={formik.handleSubmit}>
        <TrrInput
          id="name"
          name="name"
          type="text"
          value={formik.values.name}
          label={t('uncommon.guest')}
          placeholder="Your App"
          error={formik.touched.description ? formik.errors.name : ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TrrTextarea
          id="description"
          name="description"
          value={formik.values.description}
          label="Description"
          placeholder="Something about your app"
          error={formik.touched.description ? formik.errors.description : ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <Form.Trigger className="grow" disabled={formik.isSubmitting}>
          <Button
            className="w-full"
            tag="span"
            color="primary"
            disabled={formik.isSubmitting}
          >
            {t('onboarding:next')}
          </Button>
        </Form.Trigger>
      </Form>
    </div>
  );
}
