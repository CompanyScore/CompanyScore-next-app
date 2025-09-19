'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

import { useAuth } from '@/api';

import { Button } from '@/shared/ui';
import { Auth } from '@/features';

export function HeaderMobile() {
  const { isAuth, logout } = useAuth();

  const router = useRouter();
  const pathname = usePathname();

  const [visible, setVisible] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const pages = [
    { href: '/', label: 'Главная' },
    { href: '/about', label: 'О нас' },
    { href: '/companies', label: 'Компании' },
    { href: '/comments', label: 'Отзывы' },
    { href: '/users', label: 'Пользователи' },
    { href: '/analytic', label: 'Аналитика' },
    { href: '/blog', label: 'Блог' },
    { href: '/profile', label: 'Профиль' },
  ];

  const onLogout = async () => {
    await logout.mutateAsync();
    router.replace('/');
    router.refresh();
  };

  useEffect(() => {
    const element = document.activeElement;
    if (element && element instanceof HTMLElement) element.blur();
  }, [pathname]);

  return (
    <div className="flex min-[1300px]:hidden navbar bg-black text-white">
      <div className="navbar-start">
        <img src="/icons/header-logo.svg" alt="Logo" width={32} height={32} />
        <div className="text-xl">CompanyScore</div>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-end gap-2">
        <div ref={dropdownRef} className="dropdown dropdown-end">
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
            className="menu dropdown-content z-[9999] mt-1 w-screen max-w-screen bg-white text-black shadow-2xl rounded-none px-6 py-4 text-lg space-y-3"
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
                  onClick={e => {
                    if (
                      (!isAuth && label === 'Аналитика') ||
                      label === 'Профиль'
                    ) {
                      e.preventDefault();
                      setVisible(true);
                    }
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
            <Link href="/comments/add">
              <Button className="mt-20 btn-primary text-lg font-normal w-52 ml-[120px]">
                Оставить отзыв
              </Button>
            </Link>
            {isAuth ? (
              <Button className="btn-error w-52 m-auto" onClick={onLogout}>
                Выйти
              </Button>
            ) : (
              <Button
                className="btn-secondary w-52 m-auto"
                onClick={() => {
                  setVisible(true);
                }}
              >
                Войти
              </Button>
            )}
          </ul>
        </div>
      </div>
      <div className=" text-black">
        <Auth type="login" visible={visible} setVisible={setVisible} />
      </div>
    </div>
  );
}
