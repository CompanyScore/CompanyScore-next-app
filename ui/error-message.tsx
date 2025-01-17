import React from "react";

type ErrorMessageType = {
  text: string;
};

export function ErrorMessage({ text }: ErrorMessageType) {
  return <p className="text-center text-red-600 text-lg">{text}</p>;
}
