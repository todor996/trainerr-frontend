import { ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Checkbox, CheckboxProps } from 'react-daisyui';
import { twMerge } from 'tailwind-merge';

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
    className,
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
        <Checkbox
          className={twMerge('checkbox-primary', className)}
          {...otherProps}
          {...registerProps}
        />
        <span>
          {label} {children}
        </span>
      </label>
      {message && <p className="ml-8 text-xs">{message}</p>}
    </div>
  );
}
