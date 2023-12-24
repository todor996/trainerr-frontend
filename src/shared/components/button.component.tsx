import Loader from "@assets/loading-circle-white.svg?react";

interface ButtonProps {
  variant?: "primary" | "secondary";
  label: string;
  loading?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
}

const BUTTON_VARIANTS: Record<string, { base: string; text: string }> = {
  primary: {
    base: "bg-indigo-600 hover:bg-indigo-700",
    text: "text-white",
  },
  secondary: {
    base: "bg-blue-100",
    text: "text-blue-400",
  },
};

const BUTTON_SIZES: Record<string, { base: string; text: string }> = {
  small: {
    base: "px-3 py-1.5",
    text: "text-xs",
  },
  medium: {
    base: "px-4 py-2.5",
    text: "text-base",
  },
  large: {
    base: "p-4",
    text: "text-base",
  },
};

const DEFAULT_BUTTON_PROPS: Partial<ButtonProps> = {
  loading: false,
  variant: "primary",
  disabled: false,
  size: "medium",
};

function getButtonColors(
  variant: string | undefined,
  disabled: boolean | undefined,
  loading: boolean | undefined
) {
  if (disabled) {
    return { base: "bg-slate-100", text: "text-slate-400" };
  }
  if (!disabled && loading) {
    return { base: "bg-indigo-400", text: "text-white" };
  }
  return BUTTON_VARIANTS[variant || "primary"];
}

function Button({ label, loading, variant, disabled, size }: ButtonProps) {
  const { base, text } = getButtonColors(variant, disabled, loading);
  const { base: padding, text: textSize } = BUTTON_SIZES[size || "medium"];

  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-lg ${base} ${padding}`}
      disabled={disabled}
    >
      <div
        className={`${text} ${textSize} flex flex-row items-center gap-2 font-semibold leading-normal`}
      >
        {label}
        {loading && !disabled && <Loader className="animate-spin" />}
      </div>
    </button>
  );
}

Button.defaultProps = DEFAULT_BUTTON_PROPS;

export default Button;
