type InputProps = {
  type: string;
  placeholder: string;
  autoComplete?: string;
  required?: boolean;
};

export const Input = ({
  type,
  placeholder,
  autoComplete,
  required = false,
}: InputProps) => {
  return (
    <input
      autoComplete={autoComplete}
      type={type}
      placeholder={placeholder}
      className="input input-bordered w-full"
      required={required}
    />
  );
};
