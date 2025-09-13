'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Avatar, Button } from '@/shared/ui';

import { IconBell } from '@tabler/icons-react';
import { Auth } from '@/features';
import { useAuth } from '@/api';

export function Header() {
  const { isAuth, profile, logout } = useAuth();

  const router = useRouter();
  const pathname = usePathname();

  const [visible, setVisible] = useState(false);

  const pages = [
    { href: '/', label: 'Главная' },
    { href: '/about', label: 'О\u00A0нас' },
    { href: '/companies', label: 'Компании' },
    { href: '/comments', label: 'Отзывы' },
    { href: '/users', label: 'Пользователи' },
    { href: '/analytic', label: 'Аналитика' },
    { href: '/blog', label: 'Блог' },
  ];

  const onLogout = async () => {
    await logout.mutateAsync();
    router.replace('/');
    router.refresh();
  };

  return (
    <div className="hidden min-[1300px]:flex justify-between items-center navbar bg-black text-white px-10 py-4">
      <Link href="/" className="max-w-96 w-full cursor-pointer">
        <img src="/icons/header-logo.svg" alt="Logo" width={32} height={32} />
        <h1 className="text-2xl">CompanyScore</h1>
      </Link>
      <ul className="flex gap-10 text-xl">
        {pages.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`pb-1 min-w-16 ${
                pathname === href ? 'border-b-2 border-white' : 'hover:border-b'
              }`}
              onClick={e => {
                if (!isAuth && label === 'Аналитика') {
                  e.preventDefault();
                  setVisible(true);
                }
              }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-end gap-4 max-w-96 w-full cursor-pointer">
        {isAuth ? (
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="flex items-center">
              <Avatar
                className="w-12 h-12"
                src={
                  profile?.avatar
                    ? `${process.env.NEXT_PUBLIC_S3_IMAGES}/${profile.avatar}`
                    : '/imgs/avatar.jpg'
                }
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-white text-black border border-gray-200 rounded-xl shadow-lg z-[9999] w-60 p-4 space-y-2"
            >
              <li className="flex flex-row items-center border-b pb-2">
                <Avatar
                  className="w-20 h-20"
                  src={
                    profile?.avatar
                      ? `${process.env.NEXT_PUBLIC_S3_IMAGES}/${profile.avatar}`
                      : '/imgs/avatar.jpg'
                  }
                />
                <div className="flex flex-col items-start">
                  <div className="text-sm text-gray-700">{profile?.name}</div>
                  <div className="text-xs text-gray-500">{profile?.email}</div>
                </div>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer"
                >
                  Профиль
                </Link>
              </li>
              <li>
                <a className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                  <IconBell stroke={1} /> Уведомления
                </a>
              </li>
              <li onClick={onLogout}>
                <a className="text-red-500 hover:bg-red-50 rounded px-2 py-1 cursor-pointer">
                  Выйти
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <Button
            className="btn-secondary"
            onClick={() => {
              setVisible(true);
            }}
          >
            Войти
          </Button>
        )}
      </div>
      <div className=" text-black">
        <Auth type="login" visible={visible} setVisible={setVisible} />
      </div>
    </div>
  );
}
