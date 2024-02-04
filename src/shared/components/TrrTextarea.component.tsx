import { forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Textarea, TextareaProps } from 'react-daisyui';

interface TrrTextareaProps extends TextareaProps {
  label?: string;
  error?: string;
  registerProps?: UseFormRegisterReturn<string>;
}

export const TrrTextarea = forwardRef<HTMLTextAreaElement, TrrTextareaProps>(
  (props, ref) => {
    const { placeholder, autoComplete, label, error, registerProps, ...otherProps } =
      props;

    return (
      <label className="form-control w-full">
        {label && (
          <span className={`label-text mb-1 ${error && 'text-error'}`}>{label}</span>
        )}
        <Textarea
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={`${error && 'border-error'}`}
          ref={ref}
          {...otherProps}
          {...registerProps}
        />
        {/* TODO: handle messages that are not errors */}
        {error && <span className={`label-text-alt mt-1 text-error`}>{error}</span>}
      </label>
    );
  },
);
