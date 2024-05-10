import { forwardRef } from 'react';
import { TextArea, TextAreaProps } from 'tamagui';

interface TrrTextareaProps extends TextAreaProps {
  name?: string;
  label?: string;
  error?: string;
}

export const TrrTextarea = forwardRef<HTMLTextAreaElement, TrrTextareaProps>(
  (props, ref) => {
    const { placeholder, autoComplete, label, error, ...otherProps } = props;

    return (
      <label className="form-control w-full">
        {label && <span className={`label-text mb-1`}>{label}</span>}
        <TextArea
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ref={ref as any}
          className={`${error && 'border-error'}`}
          autoComplete={autoComplete}
          placeholder={placeholder}
          {...otherProps}
        />
        {/* TODO: handle messages that are not errors */}
        {error && <span className={`label-text-alt mt-1 text-error`}>{error}</span>}
      </label>
    );
  },
);
