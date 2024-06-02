import { TrrInput } from '@shared/components/TrrInput.component';
import { TrrTextarea } from '@shared/components/TrrTextarea.component';
import { Form } from 'tamagui';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { Validator } from '@shared/services/validator.service';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrrButton } from '@shared/components/TrrButton.component';
import { useOnboardingStore } from '../store/onboarding.store';

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

  const { app, updateApp, updateProgress } = useOnboardingStore();

  const [localProgress, setLocalProgress] = useState(0);

  const formik = useFormik({
    initialValues: initFromValues,
    onSubmit: handleSubmit,
    validate: handleValidation,
  });

  useEffect(() => {
    Validator.setErrorMessages({
      min: t('error.min'),
      max: t('error.max'),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    formik.setValues({
      ...initFromValues,
      name: app.name,
      description: app.description,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [app]);

  useEffect(() => {
    updateProgress({ info: localProgress });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localProgress]);

  function handleSubmit(values: FormInputs) {
    updateApp(values);
    navigate('/trainer/onboarding/app/features');
  }

  function handleValidation(values: FormInputs) {
    const errors: Partial<FormInputs> = Validator.formatErrors({
      name: new Validator(values.name).max(70),
      description: new Validator(values.description).max(320),
    });

    // TODO: Make service for Progress & move that logic in store

    const isNameValid = values.name && !errors.name;
    const isDescriptionValid = values.description && !errors.description;

    const nameProgress = isNameValid ? 33 / 2 : 0;
    const descriptionProgress = isDescriptionValid ? 33 / 2 : 0;

    const tempProgress = nameProgress + descriptionProgress;

    setLocalProgress(tempProgress);

    return errors;
  }

  return (
    <div className="flex w-full max-w-[390px] flex-col px-3">
      <h3 className="mb-6 text-xl font-semibold">{t('onboarding:app.info.title')}</h3>

      <Form className="flex max-w-[390px] flex-col gap-4" onSubmit={formik.handleSubmit}>
        <TrrInput
          id="name"
          name="name"
          type="text"
          value={formik.values.name}
          label={t('onboarding:app.info.nameLabel')}
          placeholder={t('onboarding:app.info.namePlaceholder')}
          error={formik.touched.name ? formik.errors.name : ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <TrrTextarea
          id="description"
          name="description"
          value={formik.values.description}
          label={t('onboarding:app.info.descriptionLabel')}
          placeholder={t('onboarding:app.info.descriptionPlaceholder')}
          error={formik.touched.description ? formik.errors.description : ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <Form.Trigger className="grow" disabled={formik.isSubmitting}>
          <TrrButton
            className="w-full"
            tag="span"
            themeColor="$primary"
            disabled={formik.isSubmitting}
          >
            {t('onboarding:next')}
          </TrrButton>
        </Form.Trigger>
      </Form>
    </div>
  );
}
