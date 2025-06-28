'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import { useProfileStore } from '@/store';
// import { ThemeController } from './';
import { Avatar } from '@/ui';
import Image from 'next/image';

export function Header() {
  const { profile, getProfile } = useProfileStore();
  const pathname = usePathname();

  const pages = [
    { href: '/', label: '!Главная' },
    { href: '/about', label: 'О\u00A0нас' },
    { href: '/companies', label: 'Компании' },
    { href: '/comments', label: 'Отзывы' },
    { href: '/users', label: 'Пользователи' },
    { href: '/analytic', label: 'Аналитика' },
    { href: '/blog', label: 'Блог' },
  ];

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <div className="hidden min-[1300px]:flex justify-between items-center navbar bg-black text-white px-10">
      <div className="max-w-96 w-full">
        <Image src="/icons/header-logo.svg" alt="Logo" width={32} height={32} />

        <h1 className="text-3xl">CompanyScore</h1>
      </div>
      <ul className="flex gap-10 text-2xl">
        {pages.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`pb-1 min-w-16 ${
                pathname === href ? 'border-b-2 border-white' : 'hover:border-b'
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-end gap-2 max-w-96 w-full">
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="">
            <Avatar
              src={
                profile?.avatar
                  ? `${process.env.NEXT_PUBLIC_S3_IMAGES}/${profile.avatar}`
                  : '/imgs/avatar.jpg'
              }
            />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-white text-black border border-gray-200 rounded-xl shadow-lg z-[9999] w-96 p-4 space-y-2"
          >
            <li className="flex flex-row items-center border-b pb-2">
              <Avatar
                src={
                  profile?.avatar
                    ? `${process.env.NEXT_PUBLIC_S3_IMAGES}/${profile.avatar}`
                    : '/imgs/avatar.jpg'
                }
              />
              <div className="flex flex-col items-start">
                <div className="text-sm text-gray-700">{profile.name}</div>
                <div className="text-xs text-gray-500">{profile.email}</div>
              </div>
            </li>
            <li>
              <Link
                href="/profile"
                className="hover:bg-gray-100 rounded px-2 py-1"
              >
                Профиль
              </Link>
            </li>
            <li>
              <a className="hover:bg-gray-100 rounded px-2 py-1">
                Пароль и безопасность
              </a>
            </li>
            <li>
              <a className="text-red-500 hover:bg-red-50 rounded px-2 py-1">
                Выйти
              </a>
            </li>
          </ul>
        </div>
        {/* <ThemeController /> */}
      </div>
    </div>
  );
}
