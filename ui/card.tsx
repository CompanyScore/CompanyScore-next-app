type Props = {
  className?: string;
  children: React.ReactNode;
};

export function Card({ className, children }: Props) {
  return (
    <div
      className={`border-2 border-gray-400 p-4 rounded-lg cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
}
