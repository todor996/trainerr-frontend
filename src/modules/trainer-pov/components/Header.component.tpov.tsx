import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-daisyui';

import { localKeys } from '@shared/consts/localization.const';
import { TrrDropdown, TrrDropdownItem } from '@shared/components/TrrDropdown.component';
import { ThemeItem } from '@shared/components/ThemeItem.component';
import { DEFAULT_THEMES } from '@shared/consts/daisyui.const';
import { twMerge } from 'tailwind-merge';

// TODO: Get info from store
// TODO: Localize everything
// TODO: Handle mobile version
export function Header(): JSX.Element {
  const { t, i18n } = useTranslation();

  const [currentTheme, setCurrentTheme] = useState(getThemeDom());

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

  /**
   * Format items for LocalizationDropdown
   */
  function getLocalItems(): Array<TrrDropdownItem> {
    return localKeys.map((key) => ({
      isActive: key === i18n.language,
      content: t(`${key}.full`),
      value: key,
    }));
  }

  function setLanguage(key: string): void {
    i18n.changeLanguage(key);
  }

  function getThemeDom(): string {
    return document.querySelector('html')?.dataset.theme as string;
  }

  function setThemeDom(theme: string): void {
    document.querySelector('html')!.dataset.theme = theme;
  }

  return (
    <div className="flex items-center justify-between px-3 py-6">
      <div className="flex gap-2">
        <img
          className="size-8 rounded-full"
          src="https://api.dicebear.com/7.x/notionists/svg?seed=Coco&backgroundColor=c0aede&scale=150"
          alt="avatar"
        />

        <h4 className="text-2xl font-semibold">Fit In A Bit</h4>
      </div>

      <div className="flex items-center gap-2">
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
            setCurrentTheme(theme as string);
          }}
        />

        <TrrDropdown
          toggleContent={t(`${i18n.language}.full`)}
          toggleClassName="w-24"
          items={getLocalItems()}
          onSelect={(key) => setLanguage(key as string)}
        />
      </div>
    </div>
  );
}
