import { ThemeItem } from '@shared/components/ThemeItem.component';
import { Title } from '@shared/components/Title.component';
import { TrrColorPicker } from '@shared/components/TrrColorPicker.component';
import { TrrDropdown, TrrDropdownItem } from '@shared/components/TrrDropdown.component';
import { DEFAULT_THEMES } from '@shared/consts/daisyui.const';
import { Theme } from 'daisyui';
import { useEffect, useState } from 'react';
import { Avatar, Button, PhoneMockup } from 'react-daisyui';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export function OnboardingAppStyle(): JSX.Element {
  const [currentTheme, setCurrentTheme] = useState<Theme>(getThemeDom());

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

  function getThemeDom(): Theme {
    return (localStorage.getItem('theme') || 'cupcake') as Theme;
  }

  function setThemeDom(theme: string): void {
    localStorage.setItem('theme', theme);
    document.querySelector('html')!.dataset.theme = theme;
  }

  return (
    <div className="flex w-full flex-col items-center">
      {/* BODY */}
      <div className="flex w-full flex-row">
        {/* LEFT SIDE - CONFIGURATION */}
        <div className="mr-6 flex w-full flex-col items-center">
          {/* TITLE */}
          <div className="flex w-full max-w-[390px] flex-row justify-start">
            <h3 className="mb-6 text-xl font-semibold">Style</h3>
          </div>

          {/* FORM */}
          <form className="flex w-full max-w-[390px] flex-col items-start gap-4">
            <div className="flex w-full flex-row items-center justify-between">
              {/* TODO: Make file upload component */}
              <div className="flex  flex-row items-center gap-6">
                <Avatar
                  src="https://api.dicebear.com/7.x/lorelei/svg?seed=Chloe"
                  shape="circle"
                  border={true}
                  size="sm"
                />
                <span className="text-sm">Logo</span>
              </div>

              <TrrDropdown
                closeOnSelect={false}
                toggleContent={
                  <ThemeItem className="bg-transparent" dataTheme={currentTheme} />
                }
                toggleClassName="hover:bg-base-300 hover:text-base-content"
                items={getThemeItems()}
                Item={({ isActive, content, value, onClick }) => {
                  return (
                    // TODO: Replace this with ThemeButton
                    <Button
                      className={twMerge(
                        'mt-2 min-w-40 bg-base-100 hover:bg-base-300',
                        isActive && 'border-2 border-solid border-primary',
                      )}
                      size="sm"
                      dataTheme={value}
                      onClick={onClick}
                    >
                      <ThemeItem className="bg-transparent" dataTheme={content} />
                    </Button>
                  );
                }}
                onSelect={(theme) => {
                  setThemeDom(theme as string);
                  setCurrentTheme(theme as Theme);
                }}
              />
            </div>

            <div className="flex w-full flex-row gap-2">
              <TrrColorPicker
                className="w-full"
                key={currentTheme + 'base'}
                label="Base"
                value="base-100"
                theme={currentTheme}
              />
              <div className="w-full bg-transparent"></div>
            </div>

            <div className="flex flex-row gap-2">
              <TrrColorPicker
                key={currentTheme + 'primary'}
                label="Primary"
                value="primary"
                theme={currentTheme}
              />
              <TrrColorPicker
                key={currentTheme + 'secondary'}
                label="Secondary"
                value="secondary"
                theme={currentTheme}
              />
            </div>

            <div className="flex flex-row gap-2">
              <TrrColorPicker
                key={currentTheme + 'accent'}
                label="Accent"
                value="accent"
                theme={currentTheme}
              />
              <TrrColorPicker
                key={currentTheme + 'neutral'}
                label="Neutral"
                value="neutral"
                theme={currentTheme}
              />
            </div>

            <div className="flex flex-row gap-2">
              <TrrColorPicker
                key={currentTheme + 'info'}
                label="Info"
                value="info"
                theme={currentTheme}
              />
              <TrrColorPicker
                key={currentTheme + 'success'}
                label="Success"
                value="success"
                theme={currentTheme}
              />
            </div>

            <div className="flex flex-row gap-2">
              <TrrColorPicker
                key={currentTheme + 'warning'}
                label="Warning"
                value="warning"
                theme={currentTheme}
              />
              <TrrColorPicker
                key={currentTheme + 'error'}
                label="Error"
                value="error"
                theme={currentTheme}
              />
            </div>
          </form>
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
          <Button className="w-full" type="button">
            Back
          </Button>
        </Link>

        <Link className="grow" to={'/trainer/onboarding/profile'}>
          <Button className="w-full" type="submit" color="primary">
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
}
