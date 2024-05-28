import { TrrCheckbox } from '@shared/components/TrrCheckbox.component';
import { Validator } from '@shared/services/validator.service';
import { useFormik } from 'formik';
import { t } from 'i18next';
import { useEffect } from 'react';
import { Badge } from 'react-daisyui';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Paragraph } from 'tamagui';
import { Feature } from '@shared/types/Feature.type';
import { TrrButton } from '@shared/components/TrrButton.component';
import { useOnboardingStore } from '../store/onboarding.store';

interface FormInputs extends Record<Feature, boolean> {
  [Feature.TRAINING]: boolean;
  [Feature.NUTRITION]: boolean;
  [Feature.QUESTIONNAIRE]: boolean;
}

const initFromValues: FormInputs = {
  training: false,
  nutrition: false,
  questionnaire: false,
};

export function OnboardingAppFeatures(): JSX.Element {
  const navigate = useNavigate();

  const store = useOnboardingStore();
  const { features } = store.app;

  const formik = useFormik({
    initialValues: initFromValues,
    validate: handleValidation,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    Validator.setErrorMessages({
      training: t('onboarding:error.training'),
    });
  }, []);

  useEffect(() => {
    features.forEach((feature) => {
      formik.setFieldValue(feature, true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [features]);

  function handleSubmit(values: FormInputs) {
    const features = Object.entries(values)
      .filter(([, isSelected]) => isSelected)
      .map(([feature]) => feature as Feature);

    store.updateApp({ features });
    navigate('/trainer/onboarding/app/style');
  }

  function handleValidation(values: FormInputs) {
    const errors = Object.values(values).every((value) => !value)
      ? { training: 'Please select at least one feature' }
      : {};

    const isSomeSelected = Object.values(values).some((value) => value);
    store.updateProgress({ features: isSomeSelected ? 33 : 0 });

    return errors;
  }

  function onCheckedChangeTraining(value: boolean | string) {
    formik.setFieldValue('training', value);

    if (value) {
      formik.setFieldError('training', '');
    }

    return formik.handleChange;
  }

  function onCheckedChangeNutrition(value: boolean | string) {
    formik.setFieldValue('nutrition', value);

    if (value) {
      formik.setFieldError('nutrition', '');
    }

    return formik.handleChange;
  }

  return (
    <div className="flex w-full max-w-[390px] flex-col px-6">
      <h3 className="mb-6 text-xl font-semibold">{t('onboarding:app.features.title')}</h3>

      <Form
        className="flex max-w-[390px] flex-col items-start gap-4"
        onSubmit={formik.handleSubmit}
      >
        <TrrCheckbox
          id="training"
          name="training"
          value="training"
          message={t('onboarding:app.features.trainingDescription')}
          checked={formik.values.training}
          onCheckedChange={onCheckedChangeTraining}
        >
          <span className="font-medium">
            {t('onboarding:app.features.trainingLabel')}
          </span>
        </TrrCheckbox>

        <TrrCheckbox
          id="nutrition"
          name="nutrition"
          value="nutrition"
          message="Create Nutrition Plans for your Clients"
          checked={formik.values.nutrition}
          onCheckedChange={(event) => onCheckedChangeNutrition(event)}
        >
          <span className="font-medium">
            {t('onboarding:app.features.nutritionLabel')}
          </span>
        </TrrCheckbox>

        <TrrCheckbox
          id="questionary"
          name="questionary"
          value="questionary"
          message={t('onboarding:app.features.questionaryDescription')}
          disabled={true}
        >
          <span className="font-medium">
            {t('onboarding:app.features.questionaryLabel')}
          </span>
          <Badge className="ml-1 font-medium" outline={true} color="success">
            {t('comingSoon')}
          </Badge>
        </TrrCheckbox>

        <div className="my-12 flex flex-col gap-2">
          <div className="flex w-full flex-row gap-2">
            <Link className="grow" to={'/trainer/onboarding/app/info'}>
              {/* type="button" */}
              {/* TODO: Maybe handle submit on back?  */}
              <TrrButton className="w-full" themeColor="$secondary">
                {t('onboarding:back')}
              </TrrButton>
            </Link>

            <Form.Trigger className="grow">
              <TrrButton className="w-full" tag="span" themeColor="$primary">
                {t('onboarding:next')}
              </TrrButton>
            </Form.Trigger>
          </div>

          {(formik.touched.nutrition || formik.touched.training) && (
            <Paragraph size="$2" color="$error">
              {formik.errors.training}
            </Paragraph>
          )}
        </div>
      </Form>
    </div>
  );
}
