'use client';

import { useState } from 'react';
import { Button, Container } from '@/shared/ui';
import { useAuth } from '@/api';
import { Auth } from '@/features';
import Link from 'next/link';

export const Hero = () => {
  const { isAuth } = useAuth();

  const [visible, setVisible] = useState(false);

  const cards = [
    { title: '1 345', description: 'проверенных отзывов' },
    { title: '100+', description: 'новых отзывов ежемесячно' },
    { title: '487', description: ' компаний в базе' },
    { title: '679+', description: 'пользователей' },
  ];

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-no-repeat rounded-b-[50px]"
      style={{
        backgroundImage:
          'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(imgs/hero-bg.svg)',
      }}
    >
      <Container className="flex flex-col items-center gap-16 text-center text-white">
        <div>
          <h1 className="mb-6 text-4xl md:text-7xl text-center font-extrabold leading-tight ">
            Ваш голос меняет рынок труда
          </h1>

          <p className="mx-auto max-w-2xl text-lg md:text-2xl">
            Поделитесь своим отзывом о работе в компании —
            <br />
            помогите другим сделать правильный выбор
          </p>

          {isAuth ? (
            <Link href="/comments/add">
              <Button className="mt-20 py-2 px-6 btn-primary text-xl font-normal">
                Оставить отзыв
              </Button>
            </Link>
          ) : (
            <Link href="/access">
              <Button
                className="mt-20 py-2 px-6 btn-primary text-xl font-normal"
                onClick={() => {
                  setVisible(true);
                }}
              >
                Авторизоваться
              </Button>
            </Link>
          )}
          <Auth type="login" visible={visible} setVisible={setVisible} />
        </div>
        <WebHero cards={cards} />
        <MobileHero cards={cards} />
      </Container>
    </div>
  );
};

type Card = {
  title: string;
  description: string;
};

type Props = {
  cards: Card[];
};

const WebHero = ({ cards }: Props) => {
  return (
    <div className="hidden md:flex flex-wrap justify-between gap-4 mt-20 w-full">
      {cards.map((card, index) => (
        <div
          key={index}
          className="mb-24 flex flex-col items-center justify-center rounded-xl border border-amber-100 bg-black/60 px-4 py-6 w-40 md:w-72 m-auto"
        >
          <span className="mb-1 text-4xl font-bold leading-none">
            {card.title}
          </span>
          <span className="text-lg opacity-80">{card.description}</span>
        </div>
      ))}
    </div>
  );
};

const MobileHero = ({ cards }: Props) => {
  return (
    <div className="mb-24 flex md:hidden flex-col justify-between gap-2 max-w-80 w-full py-4 border border-amber-100 bg-black/60 rounded-xl">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center m-auto"
        >
          <span className="text-4xl font-bold leading-none">{card.title}</span>
          <span className="text-lg mt-1 opacity-80">{card.description}</span>
        </div>
      ))}
    </div>
  );
};
