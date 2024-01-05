type InputProps = {
  type: string;
  placeholder: string;
};

export const Input = ({ type, placeholder }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input input-bordered my-2 h-10 w-full text-sm"
    />
  );
};
