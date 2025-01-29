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
      width={70}
      height={70}
      className="object-cover"
    />
  );
}
