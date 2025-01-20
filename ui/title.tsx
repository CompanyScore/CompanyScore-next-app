import React from "react";

type TitleType = {
  text: string;
};

export function Title({ text }: TitleType) {
  return <h2 className="text-4xl">{text}</h2>;
}
