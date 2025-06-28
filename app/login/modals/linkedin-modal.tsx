'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Title, Modal } from '@/ui';

export default function LinkedIn() {
  const router = useRouter();

  const redirectToLinkedin = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACK}/auth/linkedin/callback`,
        {
          credentials: 'include',
        },
      );

      const data = await response.json();

      if (data.accessToken && data.refreshToken) {
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        localStorage.setItem('userId', data.userId);
        router.push('/profile');
      }
    } catch (err) {
      console.error('Ошибка авторизации через LinkedIn', err);
    }
  };

  return (
    <Modal id="linkedin_modal">
      <section className="flex flex-col items-stretch justify-center gap-8 py-8 md:py-10 m-auto">
        <Title className="text-xl font-semibold text-gray-600">
          Войти через LinkedIn
        </Title>

        <div className="flex flex-col items-center w-full gap-8">
          <img
            src="/icons/linkedin.svg"
            alt="LinkedIn"
            width={90}
            height={90}
            className="cursor-pointer transition-transform duration-300 ease-out hover:scale-110 hover:rotate-6"
            onClick={redirectToLinkedin}
          />

          <p className="text-center text-sm text-gray-600 leading-relaxed max-w-xs">
            Войдите через LinkedIn, чтобы воспользоваться дополнительными
            функциями сайта и сохранить свои данные. Мы не собираем и не
            используем вашу личную информацию, и вы сами решаете, какие данные
            добавить в профиль, включая вымышленные.
          </p>
        </div>
      </section>
    </Modal>
  );
}
