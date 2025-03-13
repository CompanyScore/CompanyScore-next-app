type StepProps = {
  children: React.ReactNode;
};

export function Step({ children }: StepProps) {
  return <span>{children}</span>;
}
