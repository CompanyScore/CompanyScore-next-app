"use client";

import { Container } from "@/ui";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsLinkedin } from "react-icons/bs";

export default function AboutPage() {
  const [editableText, setEditableText] = useState(
    "Компания предоставляет отличные условия для роста и развития, высококвалифицированные коллеги и инновационная атмосфера. Руководство всегда поддерживает инициативу, а культура открытости и разнообразия способствует комфортной рабочей среде. Это было невероятное место для профессионального роста и обучения.",
  );
  const [rating, setRating] = useState(8);

  const handleInputChange = (e: React.FormEvent<HTMLDivElement>) => {
    setEditableText(e.currentTarget.innerText);
  };

  return (
    <div className="flex flex-col gap-20 p-10">
      <Container>
        <div className="hero-content flex-col lg:flex-row-reverse justify-between p-10">
          <div className="relative w-full lg:w-1/2">
            <Image
              src="/imgs/google.jpeg"
              alt="Google"
              className="w-full rounded-lg"
              width={800}
              height={500}
            />
            {/* <img
              className="w-full rounded-lg"
              src="https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg"
              alt="Main"
            /> */}
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
                {[...Array(10)].map((_, index) => (
                  <label key={index} className="relative cursor-pointer group">
                    <input
                      type="radio"
                      name="rating-5"
                      className="peer hidden"
                      onChange={() => setRating(index + 1)}
                    />
                    <div
                      className={`mask mask-star-2 w-9 h-9 flex items-center justify-center ${
                        rating >= index + 1 ? "bg-stone-50" : "bg-stone-400"
                      }`}
                    >
                      <span className="text-sm font-bold text-purple-500">
                        {index + 1}
                      </span>
                    </div>
                  </label>
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

      <div className="flex w-full justify-between gap-4">
        <div className="card card-side bg-base-20 shadow-xl flex-1">
          <figure>
            <Image
              src="/imgs/dimash-ava.jpg"
              alt="Dimash Ava"
              className="w-full rounded-lg shadow-2xl"
              width={300}
              height={400}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Dimash</h2>
            <p>Full-stack developer</p>
            <div className="card-actions justify-end">
              <Link
                href="https://www.linkedin.com/in/dinmukhamed-amirov-4b520726b/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <BsLinkedin size={32} />
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-20 shadow-xl flex-1">
          <figure>
            <Image
              src="/imgs/adil-ava.jpg"
              alt="Adil Ava"
              className="w-full rounded-lg shadow-2xl"
              width={300}
              height={300}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Adil</h2>
            <p>Full-stack developer</p>
            <div className="card-actions justify-end">
              <Link
                href="https://www.linkedin.com/in/adil-kemelbek/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <BsLinkedin size={32} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
