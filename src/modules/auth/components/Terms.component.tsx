import { useState } from 'react';

type TermsProps = {
  className?: string;
};

export function TermsComponent({ className }: TermsProps): JSX.Element {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <input
        checked={isChecked}
        onChange={handleCheckboxChange}
        type="checkbox"
        className="checkbox"
      />
      <label className="label">
        <span className="label-text">
          Yes, I accept <a className="cursor-pointer text-primary">privacy policy</a> &{' '}
          <a className="cursor-pointer text-primary">terms of use</a>.
        </span>
      </label>
    </div>
  );
}
