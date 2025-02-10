import Image from "next/image";
import React from "react";

type AvatarType = {
  src: string;
};

export function Avatar({ src }: AvatarType) {
  return (
    <Image
      src={src}
      alt="Avatar"
      width={90}
      height={80}
      className="rounded object-contain max-h-20"
    />
  );
}
