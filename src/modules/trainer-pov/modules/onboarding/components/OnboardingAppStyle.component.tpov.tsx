import { ThemeItem } from '@shared/components/ThemeItem.component';
import { Title } from '@shared/components/Title.component';
import { TrrColorPicker } from '@shared/components/TrrColorPicker.component';
import { TrrDropdown, TrrDropdownItem } from '@shared/components/TrrDropdown.component';
import { TrrUpload } from '@shared/components/TrrUpload.component';
import { DEFAULT_THEMES } from '@shared/consts/daisyui.const';
import { ColorService } from '@shared/services/color.service';
import { Validator } from '@shared/services/validator.service';
import { useAppDispatch, useAppSelector } from '@store/hooks.store';
import { useFormik } from 'formik';
import { ChangeEvent, useEffect, useState } from 'react';
import { PhoneMockup } from 'react-daisyui';
import { Link, useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Avatar, Button, Form, ThemeName, getTokens } from 'tamagui';
import { onboardingActions } from '../../store/onboardingSlice.store';
import { TrrButton } from '@shared/components/TrrButton.component';
import { formatHex } from 'culori';
import { useTranslation } from 'react-i18next';

interface FormInputs {
  logoUrl?: string;
  base: string;
  primary: string;
  secondary: string;
  accent: string;
  neutral: string;
  info: string;
  success: string;
  warning: string;
  error: string;
}

const colors = getTokens().color;

const initFromValues: FormInputs = {
  logoUrl: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Chloe',
  base: formatHex(colors.base.val),
  primary: formatHex(colors.primary.val),
  secondary: formatHex(colors.secondary.val),
  accent: formatHex(colors.accent.val),
  neutral: formatHex(colors.neutral.val),
  info: formatHex(colors.info.val),
  success: formatHex(colors.success.val),
  warning: formatHex(colors.warning.val),
  error: formatHex(colors.error.val),
};

const DEFAULT_AVATAR = 'https://api.dicebear.com/7.x/lorelei/svg?seed=Chloe';

export function OnboardingAppStyle(): JSX.Element {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { colorSystem } = useAppSelector((state) => state.onboarding.app);

  const formik = useFormik({
    initialValues: initFromValues,
    validate: handleValidation,
    onSubmit: handleSubmit,
  });

  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string>(DEFAULT_AVATAR);

  useEffect(() => {
    if (colorSystem) {
      const { base, primary, secondary, accent, neutral, info, success, warning, error } =
        colorSystem;

      formik.setValues({
        ...formik.values,
        base: formatHex(base?.color) || initFromValues.base,
        primary: formatHex(primary?.color) || initFromValues.primary,
        secondary: formatHex(secondary?.color) || initFromValues.secondary,
        accent: formatHex(accent?.color) || initFromValues.accent,
        neutral: formatHex(neutral?.color) || initFromValues.neutral,
        info: formatHex(info?.color) || initFromValues.info,
        success: formatHex(success?.color) || initFromValues.success,
        warning: formatHex(warning?.color) || initFromValues.warning,
        error: formatHex(error?.color) || initFromValues.error,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSubmit(values: FormInputs) {
    console.log('handleSubmit', { values });

    // TODO: Change this
    navigate('/trainer/onboarding/profile');
  }

  function handleValidation(values: FormInputs) {
    const errors: Partial<FormInputs> = Validator.formatErrors({
      base: new Validator(values.base).required().hexColor(),
      primary: new Validator(values.primary).required().hexColor(),
      secondary: new Validator(values.secondary).required().hexColor(),
      accent: new Validator(values.accent).required().hexColor(),
      neutral: new Validator(values.neutral).required().hexColor(),
      info: new Validator(values.info).required().hexColor(),
      success: new Validator(values.success).required().hexColor(),
      warning: new Validator(values.warning).required().hexColor(),
      error: new Validator(values.error).required().hexColor(),
    });

    return errors;
  }

  async function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    // Call formik function so it can track the changes
    formik.handleChange(event);

    // Get input values
    const color = event.target.value;
    const name = event.target.name;

    // Validate color
    const error = new Validator(color).required().hexColor().error;

    // If there is an error, return
    if (error) {
      return;
    }

    // TODO: Generate and setup all tokens and colors before change

    // Generate palette and tokens
    const palette = ColorService.generatePalette(color, name);
    const tokens = ColorService.generateTokens(palette);
    const tamaguiTokenDict = getTokens().color;

    // Update tokens and root styles that will reflect on UI
    const root = document.querySelector(':root') as HTMLElement;
    Object.entries(tokens).forEach(([key, val]) => {
      tamaguiTokenDict[key].val = val;
      root.style.setProperty(`--${tamaguiTokenDict[key].name}`, val);
    });

    // Sve changes to store
    dispatch(
      onboardingActions.updateApp({
        colorSystem: {
          ...colorSystem,
          [name]: palette,
        },
      }),
    );
  }

  const [currentTheme, setCurrentTheme] = useState<ThemeName>(getThemeDom());

  // Set porperly theme on load

  useEffect(() => {
    setThemeDom(getThemeDom());
  }, []);

  // TODO: Move theme fn to service and store + update Header component

  /**
   * Format items for ThemeDropdown
   */
  function getThemeItems(): Array<TrrDropdownItem> {
    // TODO: Show DEFAULT_THEMES + Trainer's custom themes as options

    return DEFAULT_THEMES.map((theme) => ({
      isActive: theme === currentTheme,
      content: theme,
      value: theme,
    }));
  }

  function getThemeDom(): ThemeName {
    return (localStorage.getItem('theme') || 'cupcake') as ThemeName;
  }

  function setThemeDom(theme: string): void {
    localStorage.setItem('theme', theme);
    document.querySelector('html')!.dataset.theme = theme;
  }

  function handleFile(event: ChangeEvent<HTMLInputElement>) {
    // TODO: Handle this properly

    if (!event.target.files?.length) {
      console.log('No files selected');
      return;
    }

    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setFileUrl(imageUrl);
    setFile(file);
  }

  return (
    <div className="flex w-full flex-col items-center">
      {/* BODY */}
      <div className="flex w-full flex-row">
        {/* LEFT SIDE - CONFIGURATION */}
        <div className="mr-6 flex w-full flex-col items-center">
          {/* TITLE */}
          <div className="flex w-full max-w-[390px] flex-row justify-start">
            <h3 className="mb-6 text-xl font-semibold">
              {t('onboarding:app.style.title')}
            </h3>
          </div>

          {/* FORM */}
          <Form
            className="flex w-full max-w-[390px] flex-col items-start gap-4"
            onSubmit={formik.handleSubmit}
          >
            <div className="flex w-full flex-row items-center justify-between">
              <TrrUpload onChange={handleFile}>
                <div className="flex flex-row items-center gap-6">
                  <Avatar circular size="$6">
                    <Avatar.Image accessibilityLabel={file?.name} src={fileUrl} />
                    <Avatar.Fallback delayMs={600} backgroundColor="$blue10" />
                  </Avatar>
                  <span className="text-sm">{t('onboarding:app.style.logoLabel')}</span>
                </div>
              </TrrUpload>

              <TrrDropdown
                closeOnSelect={false}
                toggleContent={
                  <ThemeItem className="bg-transparent" dataTheme={currentTheme} />
                }
                toggleClassName="hover:bg-base-300 hover:text-base-content"
                items={getThemeItems()}
                Item={({ isActive, content, onClick }) => {
                  return (
                    // TODO: Replace this with ThemeButton
                    <Button
                      className={twMerge(
                        'mt-2 min-w-40 bg-base-100 hover:bg-base-300',
                        isActive && 'border-2 border-solid border-primary',
                      )}
                      onPress={onClick}
                    >
                      <ThemeItem className="bg-transparent" dataTheme={content} />
                    </Button>
                  );
                }}
                onSelect={(theme) => {
                  setThemeDom(theme as string);
                  setCurrentTheme(theme as ThemeName);
                }}
              />
            </div>

            <div className="flex w-full flex-row gap-2">
              <TrrColorPicker
                className="w-full"
                id="base"
                name="base"
                width="100%"
                borderColor="$base"
                key={currentTheme + 'base'}
                label={t('onboarding:app.style.colors.base')}
                value={formik.values.base}
                theme={currentTheme}
                error={formik.touched.base && formik.errors.base}
                onChange={(event) => handleOnChange(event)}
                onBlur={formik.handleBlur}
              />
              <div className="w-full bg-transparent"></div>
            </div>

            <div className="flex flex-row gap-2">
              <TrrColorPicker
                id="primary"
                name="primary"
                width="100%"
                borderColor="$primary"
                key={currentTheme + 'primary'}
                label={t('onboarding:app.style.colors.primary')}
                value={formik.values.primary}
                theme={currentTheme}
                error={formik.touched.primary && formik.errors.primary}
                onChange={(event) => handleOnChange(event)}
                onBlur={formik.handleBlur}
              />
              <TrrColorPicker
                id="secondary"
                name="secondary"
                width="100%"
                borderColor="$secondary"
                key={currentTheme + 'secondary'}
                label={t('onboarding:app.style.colors.secondary')}
                value={formik.values.secondary}
                theme={currentTheme}
                error={formik.touched.secondary && formik.errors.secondary}
                onChange={(event) => handleOnChange(event)}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className="flex flex-row gap-2">
              <TrrColorPicker
                id="accent"
                name="accent"
                width="100%"
                borderColor="$accent"
                key={currentTheme + 'accent'}
                label={t('onboarding:app.style.colors.accent')}
                value={formik.values.accent}
                theme={currentTheme}
                error={formik.touched.accent && formik.errors.accent}
                onChange={(event) => handleOnChange(event)}
                onBlur={formik.handleBlur}
              />
              <TrrColorPicker
                id="neutral"
                name="neutral"
                width="100%"
                borderColor="$neutral"
                key={currentTheme + 'neutral'}
                label={t('onboarding:app.style.colors.neutral')}
                value={formik.values.neutral}
                theme={currentTheme}
                error={formik.touched.neutral && formik.errors.neutral}
                onChange={(event) => handleOnChange(event)}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className="flex flex-row gap-2">
              <TrrColorPicker
                id="info"
                name="info"
                width="100%"
                borderColor="$info"
                key={currentTheme + 'info'}
                label={t('onboarding:app.style.colors.info')}
                value={formik.values.info}
                theme={currentTheme}
                error={formik.touched.info && formik.errors.info}
                onChange={(event) => handleOnChange(event)}
                onBlur={formik.handleBlur}
              />
              <TrrColorPicker
                id="success"
                name="success"
                width="100%"
                borderColor="$success"
                key={currentTheme + 'success'}
                label={t('onboarding:app.style.colors.success')}
                value={formik.values.success}
                theme={currentTheme}
                error={formik.touched.success && formik.errors.success}
                onChange={(event) => handleOnChange(event)}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className="flex flex-row gap-2">
              <TrrColorPicker
                id="warning"
                name="warning"
                width="100%"
                borderColor="$warning"
                key={currentTheme + 'warning'}
                label={t('onboarding:app.style.colors.warning')}
                value={formik.values.warning}
                theme={currentTheme}
                error={formik.touched.warning && formik.errors.warning}
                onChange={(event) => handleOnChange(event)}
                onBlur={formik.handleBlur}
              />
              <TrrColorPicker
                id="error"
                name="error"
                width="100%"
                borderColor="$error"
                key={currentTheme + 'error'}
                label={t('onboarding:app.style.colors.error')}
                value={formik.values.error}
                theme={currentTheme}
                error={formik.touched.error && formik.errors.error}
                onChange={(event) => handleOnChange(event)}
                onBlur={formik.handleBlur}
              />
            </div>
          </Form>
        </div>

        {/* RIGHT SIDE - PREVIEW */}
        <div className="flex w-full flex-col items-start justify-center bg-base-200 py-6 text-base-content">
          <PhoneMockup className="-my-16 scale-75">
            <Title />
          </PhoneMockup>
        </div>
      </div>

      <div className="my-12 flex w-full max-w-[390px] flex-row gap-2">
        <Link className="grow" to={'/trainer/onboarding/app/features'}>
          <TrrButton
            className="w-full"
            {...{ type: 'button' }}
            tag="span"
            themeColor="secondary"
          >
            {t('onboarding:back')}
          </TrrButton>
        </Link>

        <TrrButton
          className="grow"
          tag="span"
          themeColor="primary"
          onPress={() => formik.handleSubmit()}
        >
          {t('onboarding:next')}
        </TrrButton>
      </div>
    </div>
  );
}
