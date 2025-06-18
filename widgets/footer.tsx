'use client';

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button, Container } from '@/ui';
import {
  IconBrandLinkedin,
  IconBrandTelegram,
  IconPhone,
} from '@tabler/icons-react';

const pages = [
  { href: '/', label: 'Главная' },
  { href: '/about', label: 'О\u00A0нас' },
  { href: '/companies', label: 'Компании' },
  { href: '/comments', label: 'Отзывы' },
  { href: '/users', label: 'Пользователи' },
  { href: '/analytic', label: 'Аналитика' },
  { href: '/blog', label: 'Блог' },
];

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-black text-white">
      <Container>
        <div className="flex justify-between flex-wrap gap-10 w-full">
          <div className="flex items-center max-w-96 w-full">
            <Image
              src="/icons/header-logo.svg"
              alt="Logo"
              width={32}
              height={32}
            />
            <h1 className="text-2xl">CompanyScore</h1>
          </div>

          <div>
            <div className="flex justify-between w-full">
              <div className="flex flex-col w-48">
                <p className="text-sm text-gray-400">Разделы</p>
                <ul className="flex flex-col gap-2 mt-6">
                  {pages.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className={`pb-1 min-w-16 ${
                          pathname === href
                            ? 'border-b-2 border-white'
                            : 'hover:border-b'
                        }`}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col w-48">
                <p className="text-sm text-gray-400">О сервисе</p>
                <ul className="flex flex-col gap-2 mt-6">
                  {pages.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className={`pb-1 min-w-16 ${
                          pathname === href
                            ? 'border-b-2 border-white'
                            : 'hover:border-b'
                        }`}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Button className="mt-10 btn-neutral text-xl font-normal">
            Написать нам
          </Button>
        </div>

        <div className="flex justify-between items-center flex-wrap gap-8 w-full mt-20">
          <div className="flex w-96 gap-4">
            <IconBrandLinkedin stroke={1} />
            <IconBrandTelegram stroke={1} />
            <IconPhone stroke={1} />
          </div>
          <p className="w-96">support@companyscore.ru</p>
          <p className="text-xs w-96">© 2025 CompanyScore</p>
        </div>
      </Container>
    </footer>
  );
}
