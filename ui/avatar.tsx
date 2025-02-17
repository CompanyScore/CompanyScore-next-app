import Image from "next/image";
import classNames from "classnames";

type AvatarType = {
  src: string;
  className?: string;
};

export function Avatar({ src, className }: AvatarType) {
  return (
    <Image
      src={src}
      alt="Avatar"
      width={90}
      height={80}
      className={classNames("rounded object-contain max-h-20", className)}
    />
  );
}
