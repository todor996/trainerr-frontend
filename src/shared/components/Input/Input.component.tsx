import { InputHTMLAttributes, forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Input as DaisyInput } from 'react-daisyui';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  registerProps?: UseFormRegisterReturn<string>;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, autoComplete, label, error, registerProps }, ref) => {
    return (
      <label className="form-control w-full">
        {label && (
          <div className="label ">
            <span className={`label-text ${error && 'text-error'}`}>{label}</span>
          </div>
        )}
        <DaisyInput
          autoComplete={autoComplete}
          type={type}
          placeholder={placeholder}
          className={`${error && 'border-error'}`}
          ref={ref}
          {...registerProps}
        />
        {error && (
          <div className="label ">
            <span className={`label-text-alt text-error`}>{error}</span>
          </div>
        )}
      </label>
    );
  },
);
