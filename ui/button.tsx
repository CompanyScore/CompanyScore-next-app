type Props = {
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
}: Props) {
  return (
    <button
      className={`btn px-4 py-2 rounded-full cursor-pointer font-normal ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
