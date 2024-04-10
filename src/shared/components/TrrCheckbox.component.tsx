import { ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { Checkbox, CheckboxProps } from 'tamagui';
import { Check } from '@tamagui/lucide-icons';

interface TrrCheckboxProps extends CheckboxProps {
  className?: string;
  label?: string;
  disabled?: boolean;
  message?: string;
  children?: ReactNode;
  registerProps?: UseFormRegisterReturn<string>;
}

// TODO: Handle errors
export function TrrCheckbox(props: TrrCheckboxProps): JSX.Element {
  const {
    // className,
    label = '',
    message = '',
    children,
    registerProps,
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
        {/* <Checkbox
          className={twMerge('checkbox-primary', className)}
          {...otherProps}
          {...registerProps}
        /> */}
        <Checkbox size="$4" {...otherProps} {...registerProps}>
          <Checkbox.Indicator>
            <Check />
          </Checkbox.Indicator>
        </Checkbox>
        <span>
          {label} {children}
        </span>
      </label>
      {message && <p className="ml-8 text-xs">{message}</p>}
    </div>
  );
}
