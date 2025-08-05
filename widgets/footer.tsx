'use client';

import { Button, Container } from '@/shared/ui';
import {
  IconBrandLinkedin,
  IconBrandTelegram,
  IconPhone,
} from '@tabler/icons-react';
import Link from 'next/link';

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
  return (
    <footer className="bg-black text-white">
      <Container>
        <div className="flex items-start justify-between flex-wrap gap-10 w-full">
          <div className="flex">
            <Link href="/">
              <div className="flex md:w-[500px]">
                <img
                  src="/icons/header-logo.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                />
                <h1 className="text-2xl">CompanyScore</h1>
              </div>
            </Link>
          </div>

          <div className="flex">
            <div className="flex w-full gap-24">
              <div className="flex flex-col">
                <p className="text-sm text-gray-400">Разделы</p>
                <ul className="flex flex-col gap-2 mt-6">
                  {pages.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="pb-1 min-w-16 hover:border-b-2 border-white transition-all"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col">
                <p className="text-sm text-gray-400">О сервисе</p>
                <ul className="flex flex-col gap-2 mt-6">
                  {pages.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="pb-1 min-w-16 hover:border-b-2 border-white transition-all"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Button className="btn-neutral text-base font-normal">
            Написать нам
          </Button>
        </div>

        <div className="flex justify-between items-center flex-wrap gap-8 w-full mt-14">
          <div className="flex gap-4">
            <IconBrandLinkedin
              className="p-2 border border-white rounded-full w-10 h-10"
              stroke={1}
            />
            <IconBrandTelegram
              className="p-2 border border-white rounded-full w-10 h-10"
              stroke={1}
            />
            <IconPhone
              className="p-2 border border-white rounded-full w-10 h-10"
              stroke={1}
            />
          </div>
          <div className="flex md:flex-row flex-col justify-between md:items-center md:gap-24 gap-8">
            <p className="text-base w-80">support@companyscore.ru</p>
            <p className="text-base">© 2025 CompanyScore</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
