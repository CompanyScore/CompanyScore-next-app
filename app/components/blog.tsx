import { Button, Container, Title } from '@/ui';
import Image from 'next/image';
import { IconArrowRight, IconEye } from '@tabler/icons-react';
import { IconBook } from '@tabler/icons-react';

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
    <div className="bg-neutral-100 rounded-3xl">
      <Container>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-400">
          / БЛОГ /
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
        <div className="flex justify-between gap-6">
          <div className="max-w-[626px] w-full h-auto cursor-pointer">
            <div className="max-w-[626px] h-auto w-full overflow-hidden rounded-lg">
              <Image
                src={articles[0].image}
                alt="first article image"
                width={626}
                height={460}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>

            <div className="flex mt-6 flex-col gap-2">
              <div className="flex">
                <span className="text-neutral-500 w-full">
                  {articles[0].date}
                </span>
                <div className="w-full flex justify-end">
                  <span className="flex gap-1 text-neutral-500">
                    <IconEye stroke={1} /> {articles[0].reads} &nbsp;
                  </span>
                  <span className="flex gap-1 text-neutral-500">
                    <IconBook stroke={1} /> {articles[0].minutes}
                  </span>
                </div>
              </div>
              <Title size="2" className="font-medium">
                {articles[0].title}
              </Title>
              <p className="text-lg text-neutral-500">{articles[0].excerpt}</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 max-w-[626px] w-full">
            {articles.map(
              (article, index) =>
                index !== 0 && (
                  <div className="flex gap-3 cursor-pointer" key={index}>
                    <div className="max-w-[224px] h-[168px] w-full overflow-hidden rounded-lg">
                      <Image
                        src={article.image}
                        alt="article image"
                        width={224}
                        height={168}
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex">
                        <span className="w-full text-neutral-500">
                          {article.date}
                        </span>
                        <div className="flex justify-end w-full">
                          <span className="flex gap-1 text-neutral-500">
                            <IconEye stroke={1} /> {article.reads} &nbsp;
                          </span>
                          <span className="flex gap-1 text-neutral-500">
                            <IconBook stroke={1} /> {article.minutes}
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
            <Button className="btn-secondary max-w-56 ml-auto">
              Перейти в блог <IconArrowRight stroke={1} />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
