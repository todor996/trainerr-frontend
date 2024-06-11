import { useTranslation } from 'react-i18next';
import { localKeys } from '@shared/consts/localization.const';
import { TrrSelect, TrrSelectItem } from '@shared/components/TrrSelect.component';
import { Avatar, SizableText, XStack } from 'tamagui';

// TODO: Get info from store
// TODO: Localize everything
// TODO: Handle mobile version
export function Header(): JSX.Element {
  const { t, i18n } = useTranslation();

  /**
   * Format items for LocalizationDropdown
   */
  function getLocalItems(): TrrSelectItem[] {
    return localKeys.map((key) => ({
      content: t(`${key}.full`),
      value: key,
    }));
  }

  function setLanguage(key: string): void {
    i18n.changeLanguage(key);
  }

  return (
    <XStack
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="$base"
      paddingHorizontal="24px"
      paddingBottom="12px"
      paddingTop="24px"
    >
      <XStack gap="8px">
        <Avatar circular size="$2.5">
          {/* TODO: Get and show proper data */}
          <Avatar.Image
            accessibilityLabel={'Fit In A Bit V2'}
            src={
              'https://api.dicebear.com/7.x/notionists/svg?seed=Coco&backgroundColor=c0aede&scale=150'
            }
          />
          <Avatar.Fallback delayMs={600} backgroundColor="$base" borderColor="$primary" />
        </Avatar>
        {/* // TODO Set 24px font size */}
        <SizableText fontSize="24px" fontWeight={500}>
          Fit In A Bit
        </SizableText>
      </XStack>

      <XStack alignItems="center" gap="8px">
        {/* TODO: Add after MVP */}
        {/* <TrrDropdown
          closeOnSelect={false}
          toggleContent={
            <ThemeItem className="bg-transparent" dataTheme={currentTheme} />
          }
          toggleClassName="hover:bg-base-300 hover:text-base-content"
          items={getThemeItems()}
          Item={({
            isActive,
            content,
            // value,
            onClick,
          }) => {
            return (
              // TODO: Replace this with ThemeButton
              <Button
                className={twMerge(
                  'mt-2 min-w-40 bg-base-100 hover:bg-base-300',
                  isActive && 'border-2 border-solid border-primary',
                )}
                size="sm"
                // dataTheme={value}
                onPress={onClick}
              >
                <ThemeItem className="bg-transparent" dataTheme={content} />
              </Button>
            );
          }}
          onSelect={(theme) => {
            setThemeDom(theme as string);
            setCurrentTheme(theme as string);
          }}
        /> */}

        <TrrSelect
          size="$3"
          value={i18n.language}
          items={getLocalItems()}
          onChange={(key) => setLanguage(key as string)}
        />
      </XStack>
    </XStack>
  );
}
