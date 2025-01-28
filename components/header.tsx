"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import ThemeController from "./theme-controller";
// import LanguageController from "./language-controller";

export default function Header() {
  return (
    <div className="flex justify-between navbar bg-neutral text-neutral-content px-10">
      <div className="max-w-96 w-full">
        <Image src="/imgs/logo.png" alt="Logo" width={340} height={200} />
      </div>
      <div className="flex gap-10 text-2xl">
        <Link href="/">Главная</Link>
        <Link href="/about">О нас</Link>
        <Link href="/companies">Компании</Link>
        <Link href="/users">Пользователи</Link>
        <Link href="/analytic">Аналитика</Link>
        <Link href="/blog">Блог</Link>
      </div>
      <div className="flex justify-end max-w-96 w-full">
        <label htmlFor="modal_enter" className="btn">
          Войти
        </label>
        <Link href="/profile">
          <Image src="/icons/user.svg" alt="User Icon" width={24} height={24} />
        </Link>
        {/* <LanguageController /> */}
        <ThemeController />
      </div>
    </div>
  );
}
