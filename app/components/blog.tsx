import { Button, Carousel, Container, Title } from '@/shared/ui';

import { IconArrowRight, IconEye } from '@tabler/icons-react';
import { IconBook } from '@tabler/icons-react';

export const Blog = () => {
  const articles = [
    {
      date: '20 мая 2025',
      title: 'Обзор компании XYZ: плюсы, минусы и отзывы сотрудников',
      excerpt:
        'Собеседование — это не просто формальность, а важный этап, который может определить вашу карьеру. В этой статье мы подробно разберём, как подготовиться к каждому этапу: от составления резюме и изучения компании до ответов на сложные вопросы и поведения на финальной встрече.',
      reads: 405,
      minutes: 7,
      image: '/imgs/article-1.png',
    },
    {
      date: '20 мая 2025',
      title: 'Обзор компании XYZ: плюсы, минусы и отзывы сотрудников',
      excerpt:
        'Собеседование — это не просто формальность, а важный этап, который может определить вашу карьеру. В этой статье мы подробно разберём, как подготовиться к каждому этапу: от составления резюме и изучения компании до ответов на сложные вопросы и поведения на финальной встрече.',
      reads: 405,
      minutes: 7,
      image: '/imgs/article-1.png',
    },
    {
      date: '20 мая 2025',
      title: 'Обзор компании XYZ: плюсы, минусы и отзывы сотрудников',
      excerpt:
        'Собеседование — это не просто формальность, а важный этап, который может определить вашу карьеру. В этой статье мы подробно разберём, как подготовиться к каждому этапу: от составления резюме и изучения компании до ответов на сложные вопросы и поведения на финальной встрече.',
      reads: 405,
      minutes: 7,
      image: '/imgs/article-1.png',
    },
    {
      date: '20 мая 2025',
      title: 'Обзор компании XYZ: плюсы, минусы и отзывы сотрудников',
      excerpt:
        'Собеседование — это не просто формальность, а важный этап, который может определить вашу карьеру. В этой статье мы подробно разберём, как подготовиться к каждому этапу: от составления резюме и изучения компании до ответов на сложные вопросы и поведения на финальной встрече.',
      reads: 405,
      minutes: 7,
      image: '/imgs/article-1.png',
    },
  ];

  return (
    <div className="bg-neutral-100 rounded-t-3xl">
      <Container>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-600">
          / БЛОГ /
        </p>
        <Title className="mb-4">Советы и инсайты</Title>
        <p className="mb-12 max-w-xl text-sm leading-relaxed text-neutral-700 sm:text-base">
          Наш блог — это &nbsp;
          <span className="font-semibold text-amber-700">
            не просто истории:&nbsp;
          </span>
          мы разбираем кейсы, сравниваем зарплаты, анализируем условия работы
          и делимся стратегиями для карьерного роста
        </p>

        <WebBlog articles={articles} />
        <MobileBlog articles={articles} />
      </Container>
    </div>
  );
};

type Article = {
  date: string;
  title: string;
  excerpt: string;
  reads: number;
  minutes: number;
  image: string;
};

type Props = {
  articles: Article[];
};

const WebBlog = ({ articles }: Props) => {
  return (
    <div className="hidden sm:flex flex-wrap justify-center gap-6 w-full m-auto">
      <div className="max-w-[600px] h-auto cursor-pointer">
        <div className="max-w-[626px] h-auto w-full overflow-hidden rounded-2xl">
          <img
            src={articles[0].image}
            alt="first article image"
            width={626}
            height={460}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>

        <div className="flex mt-6 flex-col gap-2">
          <div className="flex">
            <span className="text-neutral-600 w-full">{articles[0].date}</span>
            <div className="w-full flex justify-end">
              <span className="flex gap-1 text-neutral-600">
                <IconEye stroke={1} /> {articles[0].reads} &nbsp;
              </span>
              <span className="flex gap-1 text-neutral-600">
                <IconBook stroke={1} /> {articles[0].minutes}
              </span>
            </div>
          </div>
          <h3 className="text-2xl font-medium">{articles[0].title}</h3>
          <p className="text-lg text-neutral-600">
            {articles[0].excerpt.slice(0, 110)}...
          </p>
        </div>
      </div>
      <div className="flex flex-col max-w-[600px] gap-7">
        {articles.map(
          (article, index) =>
            index !== 0 && (
              <div className="flex gap-3 cursor-pointer " key={index}>
                <div className="max-w-[224px] h-auto overflow-hidden rounded-2xl">
                  <img
                    src={article.image}
                    alt="article image"
                    width={224}
                    height={168}
                    className="h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>
                <div className="flex flex-col gap-2 max-w-96">
                  <div className="flex justify-between">
                    <span className=" text-neutral-600">{article.date}</span>
                    <div className="flex">
                      <span className="flex gap-1 text-neutral-600">
                        <IconEye stroke={1} /> {article.reads} &nbsp;
                      </span>
                      <span className="flex gap-1 text-neutral-600">
                        <IconBook stroke={1} /> {article.minutes}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium">{article.title}</h3>
                  <p className="text-base text-neutral-600">
                    {article.excerpt.slice(0, 70)}...
                  </p>
                </div>
              </div>
            ),
        )}
        <Button className="btn-neutral max-w-56 ml-auto">
          Перейти в блог <IconArrowRight stroke={1} />
        </Button>
      </div>
    </div>
  );
};

const MobileBlog = ({ articles }: Props) => {
  return (
    <Carousel className="flex sm:hidden">
      {articles.map((article, index) => (
        <div key={index} className="max-w-[300px] h-auto cursor-pointer">
          <div className="max-w-[300px] h-auto w-full overflow-hidden rounded-2xl">
            <img
              src={article.image}
              alt="first article image"
              width={626}
              height={460}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>

          <div className="flex mt-6 flex-col gap-2">
            <div className="flex">
              <span className="text-neutral-600 w-full">{article.date}</span>
              <div className="w-full flex justify-end">
                <span className="flex gap-1 text-neutral-600">
                  <IconEye stroke={1} /> {article.reads} &nbsp;
                </span>
                <span className="flex gap-1 text-neutral-600">
                  <IconBook stroke={1} /> {article.minutes}
                </span>
              </div>
            </div>
            <h3 className="text-2xl font-medium">{article.title}</h3>
            <p className="text-lg text-neutral-600">
              {article.excerpt.slice(0, 56)}...
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
