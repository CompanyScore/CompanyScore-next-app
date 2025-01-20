import React from "react";

type AvatarType = {
  src: string;
  width: number;
};

export function Avatar({ src, width = 70 }: AvatarType) {
  return (
    <div className="avatar">
      <div className="w-24 rounded">
        <img src={src} alt="Avatar" width={width} />
      </div>
    </div>
  );
}
