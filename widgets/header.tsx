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
    { href: '/', label: 'Главная' },
    { href: '/about', label: 'О нас' },
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
    <div className="hidden min-[1300px]:flex justify-between navbar bg-black text-white px-10">
      <div className="max-w-96 w-full">
        <Image src="/icons/header-logo.svg" alt="Logo" width={32} height={32} />

        <h1 className="text-3xl">CompanyScore</h1>
      </div>
      <div className="flex gap-10 text-2xl">
        {pages.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`pb-1 min-w-16 ${
              pathname === href ? 'border-b-2 border-white' : 'hover:border-b'
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="flex justify-end gap-2 max-w-96 w-full">
        <Link href="/profile">
          <Avatar
            src={
              profile?.avatar
                ? `${process.env.NEXT_PUBLIC_S3_IMAGES}/${profile.avatar}`
                : '/imgs/avatar.jpg'
            }
          />
        </Link>
        {/* <ThemeController /> */}
      </div>
    </div>
  );
}
