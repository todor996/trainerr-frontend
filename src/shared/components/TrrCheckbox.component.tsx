import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { Checkbox, CheckboxProps } from 'tamagui';
import { Check } from '@tamagui/lucide-icons';

interface TrrCheckboxProps extends CheckboxProps {
  className?: string;
  label?: string;
  disabled?: boolean;
  message?: string;
  error?: string;
  children?: ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// TODO: Handle errors
export function TrrCheckbox(props: TrrCheckboxProps): JSX.Element {
  const {
    // className,
    label = '',
    message = '',
    error = '',
    children,
    ...otherProps
  } = props;

  return (
    <div className="flex flex-col gap-1">
      <label
        className={twMerge(
          'flex w-fit flex-row items-center gap-2',
          otherProps.disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        )}
      >
        <Checkbox size="$4" {...{ type: 'checkbox' }} {...otherProps}>
          <Checkbox.Indicator>
            {/* TODO: Add better color when you are setting up a theme */}
            <Check color={'$blue11Dark'} />
          </Checkbox.Indicator>
        </Checkbox>
        <span>
          {label} {children}
        </span>
      </label>
      {message && <p className="mt-1 text-xs">{message}</p>}
      {error && <p className="mt-1 text-xs text-error">{error}</p>}
    </div>
  );
}
