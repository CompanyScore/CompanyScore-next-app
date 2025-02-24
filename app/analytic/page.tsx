"use client";

import { useUserStore } from "@/store";
import { Container } from "@/ui";
import { redirect } from "next/navigation";

export default function AnalyticPage() {
  const { userId } = useUserStore();

  if (!userId) {
    redirect("/");
  }

  return (
    <div className="flex flex-col gap-20 p-10">
      <p className="text-2xl font-bold text-yellow-500">
        В разработке, будет скоро
      </p>
      <Container>
        <div className="hero-content flex-col lg:flex-row-reverse justify-between p-10">
          <div
            className="radial-progress"
            style={
              {
                "--value": "70",
                "--size": "12rem",
                "--thickness": "2rem",
              } as React.CSSProperties
            }
            role="progressbar"
          >
            70%
          </div>

          <div className="flex flex-col w-full lg:w-1/2 mt-12 lg:mt-0 lg:mr-10">
            <p className="text-2xl font-bold text-purple-500">
              Подробная статистика и объективные данные!
            </p>
            <div className="text-lg text-gray-500 mt-4 space-y-4 [p]:indent-6 text-justify">
              <p>
                Мы собираем и анализируем данные, чтобы предоставить вам точную
                и актуальную статистику. Узнайте, как пользователи оценивают
                компании, какие рейтинги получают работодатели и как изменяются
                показатели со временем.
              </p>

              <p>
                В разделе аналитики вы найдёте информацию о количестве
                оставленных оценок, средней оценке компаний, востребованных
                профессиях, динамике зарплат и многом другом. Мы помогаем вам
                ориентироваться в данных, чтобы принимать взвешенные решения.
              </p>

              <p>
                Используйте аналитику, чтобы следить за тенденциями, находить
                надёжных работодателей и принимать стратегически важные решения!
              </p>
            </div>

            <button className="btn bg-purple-500 text-white mt-6 self-start hover:bg-purple-600">
              Подробнее
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
