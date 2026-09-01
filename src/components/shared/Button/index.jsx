import { Link } from "react-router-dom";

const Button = ({
  onClick,
  children,
  variant = "primary",
  to,
  btnType = "solid",
  size = "md",
}) => {
  const base =
    "group rounded-[30px] font-medium justify-center w-fit items-center hover:brightness-90 inline-flex cursor-pointer transition-all";

  const sizes = {
    sm: "px-3 py-1 text-xs sm:text-sm",
    md: "px-2 lg:px-3 py-2 text-sm sm:text-base",
    lg: "px-3 lg:px-5 py-2 text-[12px] sm:text-lg",
  };

  const variants = {
    primary: "bg-[var(--color-primary)] text-white shadow-xl",
    secondary: "bg-[var(--color-secondary)] !text-white shadow-xl",
    muted: "bg-[var(--color-muted)] !text-white shadow-xl",
  };

  const outlineVariants = {
    primary:
      "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",

    secondary:
      "border border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white",

    muted:
      "border border-[var(--color-muted)] text-[var(--color-muted)] hover:bg-[var(--color-muted)] hover:text-white",
  };

  const gradientVariants = {
 primary:
    "bg-gradient-to-r from-[var(--color-primary-dark)] via-[var(--color-primary-light)] to-[var(--color-primary-dark)] text-white shadow-xl",

  secondary:
    "bg-gradient-to-r from-[var(--color-secondary-dark)] via-[var(--color-secondary-light)] to-[var(--color-secondary-dark)] text-white shadow-xl",
  };

  let variantClass;

  if (btnType === "outline") {
    variantClass = outlineVariants[variant];
  } else if (btnType === "gradient") {
    variantClass = gradientVariants[variant];
  } else {
    variantClass = variants[variant];
  }

  const className = `${base} ${sizes[size]} ${variantClass}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;