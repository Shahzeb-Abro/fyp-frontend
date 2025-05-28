export const Button = ({
  label = "",
  hasPreIcon = false,
  preIcon,
  hasPostIcon = false,
  postIcon,
  className = "",
  disabled = false,
  type = "button",
  variant = "primary",
  onClick,
}) => {
  const variants = {
    primary:
      "py-3 px-8 rounded-[24px] bg-btn-primary-bg text-btn-primary-text flex items-center gap-[10px] hover:bg-btn-primary-hover active:bg-btn-primary-active transition-all text-sm font-semibold flex items-center justify-center",
    secondary:
      "py-3 px-8 rounded-[24px] bg-btn-secondary-bg text-btn-secondary-text flex items-center gap-[10px] hover:bg-btn-secondary-hover active:bg-btn-secondary-active transition-all text-sm font-semibold flex items-center justify-center",
    tertiary:
      "py-3 px-8 rounded-[24px] border border-btn-tertiary-border text-btn-tertiary-text flex items-center gap-[10px] hover:opacity-80  transition-all text-sm font-semibold h-12 flex items-center justify-center",
  };
  return (
    <button
      className={`${variants[variant]} ${className}`}
      type={type}
      disabled={disabled}
      onClick={() => onClick && onClick()}
    >
      {hasPreIcon && preIcon}
      {label}
      {hasPostIcon && postIcon}
    </button>
  );
};
