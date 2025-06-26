'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/ui';

// import { ThemeController } from './';

export function HeaderMobile() {
  const pathname = usePathname();

  const pages = [
    { href: '/', label: 'Главная' },
    { href: '/about', label: 'О нас' },
    { href: '/companies', label: 'Компании' },
    { href: '/users', label: 'Пользователи' },
    { href: '/analytic', label: 'Аналитика' },
    { href: '/blog', label: 'Блог' },
    { href: '/profile', label: 'Профиль' },
  ];

  return (
    <div className="flex min-[1300px]:hidden navbar bg-black text-white">
      <div className="navbar-start">
        <Image src="/icons/header-logo.svg" alt="Logo" width={32} height={32} />
        <div className="text-xl">CompanyScore</div>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-end gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="https://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu dropdown-content z-[9999] mt-3 w-screen max-w-screen bg-white text-black shadow-2xl rounded-none px-6 py-4 text-lg space-y-3"
          >
            {pages.map(({ href, label }) => (
              <li key={href} className="border-b last:border-none">
                <Link
                  href={href}
                  className={`block pb-2 transition-colors duration-150 text-center ${
                    pathname === href
                      ? 'text-black font-semibold border-b-2 border-black'
                      : 'hover:text-amber-500'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}

            <Button className="mt-20 btn-primary text-lg font-normal w-52 m-auto">
              Оставить отзыв
            </Button>
          </ul>
        </div>

        {/* <ThemeController /> */}
        {/* <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="https://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button> */}
      </div>
    </div>
  );
}
