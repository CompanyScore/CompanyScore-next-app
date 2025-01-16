"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import ThemeController from "./theme-controller";
import LanguageController from "./language-controller";
import Enter from "./enter";

export default function Header() {
  return (
    <div className="flex justify-between navbar bg-neutral text-neutral-content px-4">
      <div className="max-w-96 w-full">
        <Image src="/icons/logo.svg" alt="Logo" width={24} height={24} />
        <h2 className=" text-3xl">CompanyScore</h2>
      </div>
      <div className="flex gap-4 text-xl">
        <Link href="/">Главная</Link>
        <Link href="/companies">Компании</Link>
        <Link href="/about">О нас</Link>
        <Link href="/analytic">Аналитика</Link>
        <Link href="/blog">Блог</Link>
      </div>
      <div className="flex justify-end max-w-96 w-full">
        <label htmlFor="modal_enter" className="btn">
          Войти
        </label>
        <Link href="/">
          <Image src="/icons/user.svg" alt="User Icon" width={24} height={24} />
        </Link>
        <LanguageController />
        <ThemeController />
      </div>
      <Enter />
    </div>
  );
}
