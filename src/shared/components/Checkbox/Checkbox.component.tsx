import { ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Checkbox } from 'react-daisyui';

type CheckboxProps = {
  className?: string;
  children?: ReactNode;
  registerProps?: UseFormRegisterReturn<string>;
};

export function TrrCheckbox({
  className,
  children,
  registerProps,
}: CheckboxProps): JSX.Element {
  return (
    <label className="form-control">
      <div className="label justify-normal gap-2 ">
        <Checkbox {...registerProps} className={`checkbox-primary ${className}`} />
        <span className="label-text">{children}</span>
      </div>
    </label>
  );
}
