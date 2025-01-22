import React from "react";

type AvatarType = {
  src: string;
  width: number;
};

export function Avatar({ src, width = 70 }: AvatarType) {
  return (
    <img
      src={src}
      alt="Avatar"
      width={width}
      className="object-cover max-w-[70px] w-[70px] h-[70px]"
    />
  );
}
