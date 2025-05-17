"use client";

import React from "react";
import Image from "next/image";

import { Title, Modal } from "@/ui";

export default function LinkedIn() {
  const redirectToLinkedin = () => {
    const redirectUri =
      process.env.NEXT_PUBLIC_REDIRECT_URI ||
      window.location.origin + "/profile";
    window.location.href = `${
      process.env.NEXT_PUBLIC_BACK
    }/auth/linkedin?state=${encodeURIComponent(redirectUri)}`;
  };

  return (
    <Modal id="linkedin_modal">
      <section className="flex flex-col items-stretch justify-center gap-8 py-8 md:py-10 m-auto">
        <Title
          position="center"
          className="text-xl font-semibold text-gray-600"
        >
          Войти через LinkedIn
        </Title>

        <div className="flex flex-col items-center w-full gap-8">
          <Image
            src="/icons/linkedin.svg"
            alt="LinkedIn"
            width={90}
            height={90}
            className="cursor-pointer transition-transform duration-300 ease-out hover:scale-110 hover:rotate-6"
            onClick={redirectToLinkedin}
          />

          <p className="text-center text-sm text-gray-600 leading-relaxed max-w-xs">
            Войдите через LinkedIn, чтобы воспользоваться дополнительными
            функциями сайта и сохранить свои данные. Мы не собираем и не
            используем вашу личную информацию, и вы сами решаете, какие данные
            добавить в профиль, включая вымышленные.
          </p>
        </div>
      </section>
    </Modal>
  );
}
