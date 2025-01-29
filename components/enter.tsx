"use client";
import { Title } from "@/ui";
import Image from "next/image";
import React from "react";

export default function Enter() {
  const redirectToGitHub = async () => {
    window.location.href = "http://localhost:8080/auth/github";
  };

  const redirectToLinkedin = async () => {
    window.location.href = "http://localhost:8080/auth/linkedin";
  };

  return (
    <div>
      <input type="checkbox" id="modal_enter" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box flex flex-col gap-10 w-full h-60">
          <Title position="center">Войти</Title>
          <div className="flex justify-around w-full">
            <Image
              src="/icons/linkedin.svg"
              alt="linkedin"
              width={60}
              height={60}
              onClick={redirectToLinkedin}
            />
            <Image
              src="/icons/github.svg"
              alt="github"
              width={60}
              height={60}
              onClick={redirectToGitHub}
              className="cursor-pointer"
            />
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="modal_enter">
          Close
        </label>
      </div>
    </div>
  );
}
