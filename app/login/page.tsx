"use client";

import React from "react";
import Image from "next/image";
import LinkedIn from "./modals/linkedin-modal";

export default function LoginPage() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
      <div className="w-full lg:w-1/2 lg:mr-10 mt-12 lg:mt-0">
        <p className="text-2xl font-bold text-blue-500">
          Делитесь опытом – делайте мир лучше!
        </p>
        <div className="text-lg text-gray-500 mt-4 space-y-4 [p]:indent-6 text-justify">
          <p>
            Добро пожаловать на платформу, где каждый отзыв становится вкладом в
            создание честного и прозрачного сообщества! Здесь вы можете подробно
            рассказать о своём опыте взаимодействия с компаниями, поделиться как
            положительными, так и негативными впечатлениями.
          </p>
          <p>
            Мы даем возможность не просто оставить отзыв, а оценить сервис,
            рассказать о мельчайших деталях обслуживания и качестве продукта.
            Ваши рассказы помогают другим пользователям сделать осознанный
            выбор, а компаниям – улучшать качество своих услуг и работать над
            ошибками.
          </p>
          <p>
            Представьте, что каждая оценка и комментарий — это голос за качество
            и честность. Объединяя мнения, мы создаём пространство, где
            прозрачность становится залогом доверия, а каждый пользователь имеет
            возможность влиять на рынок.
          </p>
          <p>
            Присоединяйтесь к нам, делитесь опытом, оценивайте компании и
            помогайте другим находить надёжных партнёров. Вместе мы делаем мир
            бизнеса открытее и справедливее!
          </p>
        </div>

        <button className="btn bg-blue-500 text-white mt-6 self-start hover:bg-blue-600">
          <label htmlFor="linkedin_modal">Войти через LinkedIn</label>
        </button>
      </div>

      <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
        <Image
          src="/imgs/comp.avif"
          width={100}
          height={100}
          alt="logo"
          className="w-96 h-auto object-cover"
        />
      </div>

      <LinkedIn />
    </div>
  );
}
