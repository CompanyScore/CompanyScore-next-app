'use client';

import { useState } from 'react';
import { Button, Container } from '@/shared/ui';
import { useAuth } from '@/api';
import { Auth } from '@/features';
import Link from 'next/link';

export const Call = () => {
  const { isAuth } = useAuth();

  const [visible, setVisible] = useState(false); // стейты модалки

  return (
    <div className="bg-neutral-100">
      <div className="bg-cover bg-no-repeat rounded-t-[50px] text-white bg-[url(/imgs/background.png)]">
        <Container className="flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-semibold md:leading-[1.2] text-center">
            Ваш отзыв важен — помогите другим сделать правильный выбор
          </h2>

          {isAuth ? (
            <Link href="/comments/add">
              <Button className="mt-11 py-2 px-6 btn-primary text-xl font-normal">
                Оставить отзыв
              </Button>
            </Link>
          ) : (
            <Link href="/access">
              <Button
                className="mt-11 py-2 px-6 btn-primary text-xl font-normal"
                onClick={() => {
                  setVisible(true);
                }}
              >
                Авторизоваться
              </Button>
            </Link>
          )}
          <Auth type="login" visible={visible} setVisible={setVisible} />
        </Container>
      </div>
    </div>
  );
};
