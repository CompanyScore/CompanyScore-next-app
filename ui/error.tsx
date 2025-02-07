import React from "react";

type ErrorType = {
  text: string;
};

export function Error({ text }: ErrorType) {
  return <p className="text-center text-red-600 text-lg">{text}</p>;
}
