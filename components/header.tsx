"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import { Avatar } from "@/ui";
import ThemeController from "./theme-controller";
import { useUserStore } from "@/store/user-id";

export default function Header() {
  const { userId, setUserId, clearUserId } = useUserStore();

  const pathname = usePathname();

  return (
    <div className="flex justify-between navbar bg-neutral text-neutral-content px-10">
      <div className="max-w-96 w-full">
        <Image src="/imgs/logo.png" alt="Logo" width={340} height={200} />
      </div>
      <div className="flex gap-10 text-2xl">
        {[
          { href: "/", label: "Главная" },
          { href: "/about", label: "О нас" },
          { href: "/companies", label: "Компании" },
          { href: "/users", label: "Пользователи" },
          { href: "/analytic", label: "Аналитика" },
          { href: "/blog", label: "Блог" },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`pb-1 ${
              pathname === href ? "border-b-2 border-white" : "hover:border-b"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="flex justify-end max-w-96 w-full">
        {userId ? (
          <Link href="/profile">
            <Avatar
              src={`${process.env.NEXT_PUBLIC_API_URL}/files/users/avatars/default-ava.jpg`}
            />
          </Link>
        ) : (
          <label htmlFor="modal_enter" className="btn">
            Войти
          </label>
        )}
        <ThemeController />
      </div>
    </div>
  );
}
