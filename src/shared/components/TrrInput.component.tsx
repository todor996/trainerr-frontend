import { forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Input, InputProps } from 'react-daisyui';

interface TrrInputProps extends InputProps {
  label?: string;
  error?: string;
  registerProps?: UseFormRegisterReturn<string>;
}

export const TrrInput = forwardRef<HTMLInputElement, TrrInputProps>((props, ref) => {
  const {
    label,
    error,
    type = 'text',
    placeholder,
    autoComplete,
    registerProps,
    ...otherProps
  } = props;

  return (
    <label className="form-control w-full">
      {label && (
        <span className={`label-text mb-1 ${error && 'text-error'}`}>{label}</span>
      )}
      <Input
        className={`${error && 'border-error'}`}
        autoComplete={autoComplete}
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...otherProps}
        {...registerProps}
      />
      {error && <span className={`label-text-alt mt-1 text-error`}>{error}</span>}
    </label>
  );
});
