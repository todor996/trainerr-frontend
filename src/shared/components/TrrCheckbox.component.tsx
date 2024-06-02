import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { Checkbox, CheckboxProps, SizableText } from 'tamagui';
import { Check } from '@tamagui/lucide-icons';
import { ColorName } from '@shared/services/Color.service';

interface TrrCheckboxProps extends CheckboxProps {
  className?: string;
  label?: string;
  disabled?: boolean;
  message?: string;
  error?: string;
  children?: ReactNode;
  themeColor?: ColorName;
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
    themeColor = '$primary',
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
        <Checkbox
          size="$4"
          {...{ type: 'checkbox' }}
          {...otherProps}
          backgroundColor={props.checked ? `${themeColor}-100` : ``}
          hoverStyle={{ borderColor: `${themeColor}` }}
          borderColor={props.checked ? `${themeColor}` : ''}
        >
          <Checkbox.Indicator backgroundColor={`${themeColor}-100`}>
            <Check color={themeColor} />
          </Checkbox.Indicator>
        </Checkbox>
        <span>
          {label} {children}
        </span>
      </label>
      {message && (
        <SizableText marginTop="$1.5" size="$2">
          {message}
        </SizableText>
      )}
      {error && (
        <SizableText marginTop="$1.5" color="$error" size="$2">
          {error}
        </SizableText>
      )}
    </div>
  );
}
