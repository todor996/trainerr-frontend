import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Theme } from 'react-daisyui';

import { Button } from '@shared/components/Button/Button.component';
import { localKeys } from '@shared/consts/localization.const';
import { TrrDropdown } from '@shared/components/TrrDropdown.component';
import { ThemeItem } from '@shared/components/ThemeItem.component';
import { DEFAULT_THEMES } from '@shared/consts/daisyui.const';

export function Header(): JSX.Element {
  const { t, i18n } = useTranslation();

  const [currentTheme, setCurrentTheme] = useState(getThemeDom());

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
          toggleContent={<ThemeItem className="justify-between" theme={currentTheme} />}
          toggleClassName="hover:bg-base-100 hover:text-base-content"
          // TODO: Show DEFAULT_THEMES + Trainer's custom themes as options
          items={DEFAULT_THEMES.map((theme) => ({
            isActive: theme === currentTheme,
            content: theme,
            value: theme,
          }))}
          Item={({ isActive, content, value, onClick }) => {
            return (
              <Theme className="mt-2" dataTheme={value} onClick={onClick}>
                <Button
                  className={`btn btn-ghost btn-sm w-40 hover:bg-base-100 hover:text-base-content ${isActive && 'btn-outline'}`}
                >
                  <ThemeItem className="justify-between" theme={content} />
                </Button>
              </Theme>
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
          items={localKeys.map((key) => ({
            isActive: key === i18n.language,
            content: t(`${key}.full`),
            value: key,
          }))}
          onSelect={(key) => setLanguage(key as string)}
        />
      </div>
    </div>
  );
}
