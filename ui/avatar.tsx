type Props = {
  src: string;
  className?: string;
};

export function Avatar({ src, className }: Props) {
  return (
    <div className="avatar">
      <div className={`ring-primary w-20 rounded-full ring-2 ${className}`}>
        <img src={src} alt="ImageTable" width={40} height={40} />
      </div>
    </div>
  );
}
