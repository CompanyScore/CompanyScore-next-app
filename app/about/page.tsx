"use client";

import { Container } from "@/ui";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function AboutPage() {
  const [editableText, setEditableText] = useState(
    "Компания предоставляет отличные условия для роста и развития, высококвалифицированные коллеги и инновационная атмосфера. Руководство всегда поддерживает инициативу, а культура открытости и разнообразия способствует комфортной рабочей среде. Это было невероятное место для профессионального роста и обучения.",
  );

  const handleInputChange = (e: any) => {
    setEditableText(e.target.innerText);
  };

  return (
    <div className="flex flex-col gap-20 p-10">
      <Container>
        <div className="hero-content flex-col lg:flex-row-reverse justify-between p-10">
          <div className="relative w-full lg:w-1/2">
            <img
              className="w-full rounded-lg"
              src="https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg"
              alt="Main"
            />
            <div className="absolute bg-purple-500 text-white p-5 rounded-lg -bottom-5 -left-5 right-10 min-w-xs">
              <p
                contentEditable="true"
                className="text-sm editable-text"
                onInput={handleInputChange}
                suppressContentEditableWarning={true}
              >
                {editableText}
              </p>
              <div className="mt-3 rating rating-md flex space-x-2">
                {[...Array(5)].map((_, index) => (
                  <input
                    key={index}
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-white"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full lg:w-1/2 mt-12 lg:mt-0 lg:mr-10">
            <p className="text-2xl font-bold text-purple-500">
              Делитесь опытом, влияйте на выбор!
            </p>
            <div className="text-lg text-gray-500 mt-4 space-y-4 [p]:indent-6 text-justify">
              <p>
                Мы создали платформу, где каждый может делиться своим опытом
                взаимодействия с компаниями. Наш проект помогает пользователям
                оставлять отзывы, ставить оценки и тем самым делиться ценными
                рекомендациями с другими.
              </p>

              <p>
                Наша миссия – сделать взаимодействие между клиентами и
                компаниями прозрачным и доверительным. Мы верим, что честные
                отзывы помогают компаниям становиться лучше, а пользователям –
                принимать осознанные решения.
              </p>

              <p>
                Присоединяйтесь к нашему сообществу, чтобы делиться своим
                мнением, находить надёжные компании и делать мир немного лучше!
              </p>
            </div>

            <button className="btn bg-purple-500 text-white mt-6 self-start hover:bg-purple-600">
              Поддержать нас
            </button>
          </div>
        </div>
      </Container>

      <Container>
        <div className="hero-content flex-col lg:flex-row self-start gap-20 p-10">
          <Image
            src="/imgs/dimash-ava.jpg"
            alt="Dimash Ava"
            className="max-w-sm rounded-lg shadow-2xl"
            width={300}
            height={400}
          />
          <div>
            <h1 className="text-5xl font-bold">Димаш</h1>
            <p className="py-6">Full-stack developer</p>
            <p className="py-6">
              LinkedIn:
              <Link
                href="https://www.linkedin.com/in/dinmukhamed-amirov-4b520726b/"
                target="_blank"
                className="underline"
              >
                https://www.linkedin.com/in/dinmukhamed-amirov-4b520726b/
              </Link>
            </p>
          </div>
        </div>
      </Container>

      <Container>
        <div className="hero-content ml-auto flex-col lg:flex-row-reverse gap-20 p-10">
          <Image
            src="/imgs/adil-ava.jpg"
            alt="Adil Ava"
            className="max-w-sm rounded-lg shadow-2xl"
            width={300}
            height={300}
          />
          <div>
            <h1 className="text-5xl font-bold">Адиль</h1>
            <p className="py-6">Frontend developer</p>
            <p className="py-6">
              LinkedIn:
              <Link
                href="https://www.linkedin.com/in/adil-kemelbek/"
                target="_blank"
                className="underline"
              >
                https://www.linkedin.com/in/adil-kemelbek/
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
