import * as React from "react";
import { Loader } from "./svg";

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  label: string;
  loading?: boolean;
  disabled?: boolean;
  icon?: JSX.Element | null;
  tooltip?: string;
  iconPosition?: "left" | "right" | "icon-only";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

const BUTTON_VARIANTS: Record<
  string,
  { base: string; text: string; loader?: string }
> = {
  primary: {
    base: "bg-indigo-600 hover:bg-indigo-700",
    text: "text-white",
    loader: "white",
  },
  secondary: {
    base: "bg-gray-100 hover:bg-slate-200",
    text: "text-slate-900",
    loader: "bg-slate-900",
  },
  tertiary: {
    base: "bg-transparent",
    text: "text-slate-600",
    loader: "bg-slate-600",
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
  icon: null,
  iconPosition: "left",
  tooltip: "Loader",
  onClick: () => {},
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

function Button({
  label,
  loading = false,
  disabled = false,
  size = "medium",
  variant = "primary",
  icon,
  iconPosition,
  tooltip,
  onClick,
}: ButtonProps) {
  const {
    base,
    text,
    loader: loaderColor,
  } = getButtonColors(variant, disabled, loading);
  const { base: padding, text: textSize } = BUTTON_SIZES[size];

  const buttonClasses = `inline-flex items-center justify-center gap-2 rounded-lg ${base} ${padding} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  }`;

  const renderIcon = () => {
    const iconClasses = `w-4 h-4 ${iconPosition === "left" ? "mr-2" : ""} ${
      iconPosition === "right" ? "ml-2" : ""
    }`;

    const iconWithProps = React.isValidElement(icon)
      ? React.cloneElement(
          icon as React.DetailedReactHTMLElement<
            { className: string },
            HTMLElement
          >,
          { className: iconClasses }
        )
      : icon;
    const renderedIcon = loading ? (
      <Loader className="animate-spin" color={loaderColor} />
    ) : (
      iconWithProps
    );

    if (!renderedIcon) {
      return null;
    }
    if (iconPosition === "icon-only") {
      return (
        <span
          className="tooltip tooltip-bottom"
          data-tip={tooltip}
          data-tooltip-placement="bottom"
        >
          {renderedIcon}
        </span>
      );
    }

    return renderedIcon;
  };

  return (
    <button
      type="button"
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
    >
      {iconPosition === "left" ||
        (iconPosition === "icon-only" && renderIcon())}
      {iconPosition !== "icon-only" && (
        <span
          className={`flex-1 ${text} ${textSize} ${
            loading ? "opacity-75" : ""
          }`}
        >
          {label}
        </span>
      )}
      {iconPosition === "right" && renderIcon()}
    </button>
  );
}

Button.defaultProps = DEFAULT_BUTTON_PROPS;

export default Button;
