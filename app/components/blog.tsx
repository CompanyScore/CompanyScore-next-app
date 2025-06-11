import { Button, Title } from '@/ui';
import Image from 'next/image';

export const Blog = () => {
  const articles = [
    {
      date: '20 мая 2025',
      title: 'Обзор компании XYZ: плюсы, минусы и отзывы сотрудников',
      excerpt:
        'Собеседование — это не просто формальность, а важный этап, который может…',
      reads: 405,
      minutes: 7,
      image: '/imgs/article-1.png',
    },
    {
      date: '20 мая 2025',
      title: 'Обзор компании XYZ: плюсы, минусы и отзывы сотрудников',
      excerpt:
        'Собеседование — это не просто формальность, а важный этап, который может…',
      reads: 405,
      minutes: 7,
      image: '/imgs/article-1.png',
    },
    {
      date: '20 мая 2025',
      title: 'Обзор компании XYZ: плюсы, минусы и отзывы сотрудников',
      excerpt:
        'Собеседование — это не просто формальность, а важный этап, который может…',
      reads: 405,
      minutes: 7,
      image: '/imgs/article-1.png',
    },
    {
      date: '20 мая 2025',
      title: 'Обзор компании XYZ: плюсы, минусы и отзывы сотрудников',
      excerpt:
        'Собеседование — это не просто формальность, а важный этап, который может…',
      reads: 405,
      minutes: 7,
      image: '/imgs/article-1.png',
    },
  ];

  return (
    <div className="relative mx-auto w-full px-7 py-16 md:py-24 bg-neutral-100 rounded-3xl">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-400">
        /БЛОГ/
      </p>
      <Title size="4" className="mb-4 text-2xl font-bold sm:text-3xl">
        Советы и инсайты
      </Title>
      <p className="mb-12 max-w-2xl text-sm leading-relaxed text-neutral-700 sm:text-base">
        В нашем блоге мы делимся&nbsp;
        <span className="font-semibold text-orange-600">
          реальными историями&nbsp;
        </span>
        из первых рук, публикуем обзоры компаний и даём практические советы по
        прохождению собеседований и развитию карьеры
      </p>
      <div className="flex gap-6">
        <div className="max-w-[600px]">
          <Image
            src={articles[0].image}
            alt="first article image"
            width={600}
            height={460}
          />

          <div className="flex mt-6 flex-col gap-2">
            <div className="flex">
              <span className="text-neutral-500 w-full">
                {articles[0].date}
              </span>
              <div className="w-full flex justify-end">
                <span className="text-neutral-500">
                  {articles[0].reads} &nbsp;
                </span>
                <span className="text-neutral-500">{articles[0].minutes}</span>
              </div>
            </div>
            <Title size="2" className="font-medium">
              {articles[0].title}
            </Title>
            <p className="text-lg text-neutral-500">{articles[0].excerpt}</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {articles.map(
            (article, index) =>
              index !== 0 && (
                <div className="flex gap-3" key={index}>
                  <Image
                    src={article.image}
                    className="max-w-[224px]"
                    alt="article image"
                    width={224}
                    height={168}
                  />
                  <div className="flex flex-col gap-2">
                    <div className="flex">
                      <span className="w-full text-neutral-500">
                        {article.date}
                      </span>
                      <div className="flex justify-end w-full">
                        <span className="text-neutral-500">
                          {article.reads} &nbsp;
                        </span>
                        <span className="text-neutral-500">
                          {article.minutes}
                        </span>
                      </div>
                    </div>
                    <Title size="2" className="font-medium">
                      {article.title}
                    </Title>
                    <p className="text-lg text-neutral-500">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
              ),
          )}
          <Button className="rounded-full max-w-56 gap-10 ml-auto w-full">
            Перейти в блог
          </Button>
        </div>
      </div>
    </div>
  );
};
