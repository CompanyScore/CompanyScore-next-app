"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { Avatar } from "@/ui";
import ThemeController from "./theme-controller";
import { useProfileStore } from "@/store";

export default function Header() {
  const { profile, getProfile } = useProfileStore();
  const pathname = usePathname();

  const pages = [
    { href: "/", label: "Главная" },
    { href: "/about", label: "О нас" },
    { href: "/companies", label: "Компании" },
    { href: "/users", label: "Пользователи" },
    { href: "/analytic", label: "Аналитика" },
    { href: "/blog", label: "Блог" },
  ];

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <div className="hidden lg:flex justify-between navbar bg-neutral text-neutral-content px-10">
      <div className="max-w-96 w-full">
        {/* <Image src="/imgs/logo.png" alt="Logo" width={340} height={200} /> */}
        <h1 className=" text-3xl">CompanyScore</h1>
      </div>
      <div className="flex gap-10 text-2xl">
        {pages.map(({ href, label }) => (
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
        <Link href="/profile">
          {profile?.avatar ? (
            <Avatar
              src={`${process.env.NEXT_PUBLIC_API_URL}${profile?.avatar}`}
            />
          ) : (
            <div className="skeleton h-32 w-32"></div>
          )}
        </Link>
        <ThemeController />
      </div>
    </div>
  );
}
