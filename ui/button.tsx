type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

export function Button({
  children,
  disabled = false,
  onClick,
  className = 'btn-primary',
}: ButtonProps) {
  return (
    <button
      className={`btn px-4 py-2 rounded cursor-pointer ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
