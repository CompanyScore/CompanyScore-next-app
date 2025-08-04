export function Title({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return <h2 className={`text-3xl sm:text-4xl ${className}`}>{children}</h2>;
}
