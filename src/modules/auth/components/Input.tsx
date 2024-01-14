type InputProps = {
  type: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  label?: string;
};

export function Input({
  type,
  placeholder,
  autoComplete,
  required = false,
  label,
}: InputProps): JSX.Element {
  return (
    <label className="form-control w-full">
      {label && (
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
      )}
      <input
        autoComplete={autoComplete}
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full"
        required={required}
      />
    </label>
  );
}
