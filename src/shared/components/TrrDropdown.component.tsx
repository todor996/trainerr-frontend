import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { Button, Dropdown } from 'react-daisyui';
import { TrrIcon } from './TrrIcon.component';
import { twMerge } from 'tailwind-merge';

export interface TrrDropdownItem {
  isActive: boolean;
  content: JSX.Element | string;
  value: unknown;
}

interface TrrDropdownProps {
  // TODO: Add all props from Dropdown form daisyUI
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Toggle?: JSX.ElementType | null;
  toggleContent?: JSX.Element | string;
  toggleClassName?: string;
  items: Array<TrrDropdownItem>;
  Item?: JSX.ElementType | null;
  open?: boolean;
  closeOnSelect?: boolean;
  onToggle?: (isOpened: boolean) => void;
  onSelect: (item: unknown, index?: number) => void;
}

/**
 * Dropdown wrapper for daisyUI dropdown component
 *
 * Define fully custom Toggle:
 * P.S. Its important to get `onClick` function (trough function props) and
 *      call that function on click, so toggle effect is trigged.
 * eg
 * `<TrrDropdown
 *    Toggle={({ onClick: dropdownOnClick }) => <Button onClick={dropdownOnClick}>Lee lee</Button>}
 *    items={localKeys.map((key) => ({
 *      isActive: key === i18n.language,
 *      content: t(`${key}.full`),
 *      value: key,
 *    }))}
 *    onSelect={(key) => setLanguage(key as string)}
 * />
 *
 * @param param0
 * @returns
 */
export function TrrDropdown({
  Toggle,
  toggleContent,
  toggleClassName,
  items,
  Item = null,
  open = false,
  closeOnSelect = true,
  onToggle = () => {},
  onSelect = () => {},
}: TrrDropdownProps): JSX.Element {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isOpened, setIsOpened] = useState(open);

  useEffect(() => {
    document.addEventListener('click', handleOutsideDropdownClick, { capture: true });

    return () => {
      document.removeEventListener('click', handleOutsideDropdownClick);
    };
  }, []);

  useEffect(() => {
    onToggle(isOpened);
  }, [isOpened, onToggle]);

  function handleOutsideDropdownClick(event: MouseEvent): void {
    if (dropdownRef.current?.contains(event.target as Node)) {
      return;
    }

    // Close if click is outside of dropdown
    setIsOpened(false);
  }

  function handleOnSelect(item: TrrDropdownItem, index: number) {
    onSelect(item.value, index);

    if (closeOnSelect) {
      setIsOpened(false);
    }
  }

  return (
    <Dropdown end={true} open={isOpened} key={isOpened.toString()} ref={dropdownRef}>
      <Dropdown.Toggle button={false}>
        {Toggle ? (
          <Toggle onClick={() => setIsOpened(!isOpened)} />
        ) : (
          <Button
            className={twMerge(
              'btn-ghost btn-outline btn-sm flex flex-row flex-nowrap gap-2',
              toggleClassName,
            )}
            onClick={() => setIsOpened(!isOpened)}
          >
            {toggleContent}
            <TrrIcon
              className={isOpened ? 'rotate-180' : 'rotate-0'}
              size={8}
              icon={faChevronDown}
            />
          </Button>
        )}
      </Dropdown.Toggle>

      <Dropdown.Menu className="z-10 mt-1 bg-base-100">
        <div className="z-10 flex max-h-64 flex-col gap-1.5 overflow-y-scroll bg-base-100 p-1">
          {items.map((item, index) =>
            Item ? (
              <Item {...item} key={index} onClick={() => handleOnSelect(item, index)} />
            ) : (
              <Button
                className={`btn-ghost btn-sm items-center ${item.isActive && 'btn-active'}`}
                key={index}
                data-dropdown-is-active={item.isActive}
                onClick={() => handleOnSelect(item, index)}
              >
                {item.content}
              </Button>
            ),
          )}
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}
