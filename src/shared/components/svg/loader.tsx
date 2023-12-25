interface CustomSVGProps {
  color?: string;
  className?: string;
}

function Loader({ color, className }: CustomSVGProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        opacity="0.2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99984 16.667C13.6817 16.667 16.6665 13.6822 16.6665 10.0003C16.6665 6.31843 13.6817 3.33366 9.99984 3.33366C6.31794 3.33366 3.33317 6.31843 3.33317 10.0003C3.33317 13.6822 6.31794 16.667 9.99984 16.667ZM9.99984 18.3337C14.6022 18.3337 18.3332 14.6027 18.3332 10.0003C18.3332 5.39795 14.6022 1.66699 9.99984 1.66699C5.39746 1.66699 1.6665 5.39795 1.6665 10.0003C1.6665 14.6027 5.39746 18.3337 9.99984 18.3337Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99984 3.33366C6.31794 3.33366 3.33317 6.31843 3.33317 10.0003C3.33317 13.6822 6.31794 16.667 9.99984 16.667C10.4601 16.667 10.8332 17.0401 10.8332 17.5003C10.8332 17.9606 10.4601 18.3337 9.99984 18.3337C5.39746 18.3337 1.6665 14.6027 1.6665 10.0003C1.6665 5.39795 5.39746 1.66699 9.99984 1.66699C14.6022 1.66699 18.3332 5.39795 18.3332 10.0003C18.3332 10.4606 17.9601 10.8337 17.4998 10.8337C17.0396 10.8337 16.6665 10.4606 16.6665 10.0003C16.6665 6.31843 13.6817 3.33366 9.99984 3.33366Z"
        fill={`url(#paint0_linear_${color})`}
      />
      <defs>
        <linearGradient
          id={`paint0_linear_${color}`}
          x1="9.99984"
          y1="10.0003"
          x2="9.99984"
          y2="16.667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color} />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

Loader.defaultProps = {
  color: "white",
  className: "",
};
export default Loader;
