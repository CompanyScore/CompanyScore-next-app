"use client";

import { Container } from "@/ui";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-20 p-10">
      <p className="text-2xl font-bold text-yellow-500">
        В разработке, будет скоро
      </p>
      <Container>
        <div className="hero-content flex-col lg:flex-row-reverse justify-between p-10">
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src="https://w0.peakpx.com/wallpaper/35/608/HD-wallpaper-scrooge-mcduck-money-duck-animation-coin-disney.jpg"
                alt="money"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Средняя зарплата в IT
                <div className="badge badge-primary">NEW</div>
              </h2>
              <p>
                Рынок IT продолжает расти, и вместе с ним меняются зарплатные
                ожидания специалистов.
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-secondary badge-outline">
                  Зарплаты
                </div>
                <div className="badge badge-secondary badge-outline">2025</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full lg:w-1/2 mt-12 lg:mt-0 lg:mr-10">
            <p className="text-2xl font-bold text-purple-500">
              Актуальные данные, аналитика и тренды!
            </p>
            <div className="text-lg text-gray-500 mt-4 space-y-4 [p]:indent-6 text-justify">
              <p>
                В нашем блоге вы найдёте свежие аналитические обзоры, статистику
                и полезную информацию о рынке труда. Мы рассказываем, сколько
                открытых вакансий в разных сферах, какие зарплаты предлагают
                работодатели, какие профессии востребованы и как меняются
                тренды.
              </p>

              <p>
                Наша цель – предоставить вам объективные данные, которые помогут
                лучше ориентироваться в профессиональной среде. Читайте
                экспертные статьи, следите за динамикой рынка и принимайте
                осознанные решения для развития карьеры.
              </p>

              <p>
                Оставайтесь в курсе ключевых изменений и будьте в числе первых,
                кто узнаёт о новых возможностях!
              </p>
            </div>

            <button className="btn bg-purple-500 text-white mt-6 self-start hover:bg-purple-600">
              Подкинь на доширак)
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
