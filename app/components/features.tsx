import { Container, Title } from '@/ui';
import Image from 'next/image';

export const Features = () => {
  const features = [
    {
      id: '01',
      title: 'Только проверенные\nи анонимные отзывы',
      body: 'Мы гарантируем достоверность каждого отзыва благодаря тщательной модерации. Ваша анонимность под защитой — делитесь правдой, не раскрывая личных данных',
    },
    {
      id: '02',
      title: 'Удобный поиск\nи глубокий анализ',
      body: 'Ищите работодателей по зарплатам, условиям и корпоративной культуре. Наши фильтры и аналитика помогут быстро оценить репутацию компании и перспективы для вашей карьеры',
    },
    {
      id: '03',
      title: 'Прозрачность\nи честность',
      body: 'Мы раскрываем реальные условия работы, включая средние доходы, особенности руководства и скрытые нюансы, которые обычно не озвучивают на собеседовании',
    },
    {
      id: '04',
      title: 'Экономия времени\nи сил',
      body: 'Читайте отзывы, чтобы получить объективное представление о компаниях и сэкономить время на собеседованиях и тестовых заданиях, избегая ненужных этапов',
    },
  ];

  return (
    <Container>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-400">
        / ​почему мы /
      </p>
      <Title>Станьте частью перемен</Title>
      <p className="mt-4 mb-12 max-w-2xl text-sm leading-relaxed text-neutral-700 sm:text-base">
        Мы создаём пространство, где&nbsp;
        <span className="font-semibold text-amber-700">каждый голос важен</span>
        , а опыт — ценен. Наша миссия — сделать рынок труда прозрачным и
        справедливым, чтобы каждый мог найти работу, где его ценят и уважают
      </p>

      {/* 'border-neutral-200 bg-orange-50'  */}

      <div className={`flex justify-between gap-6 flex-wrap w-full`}>
        {features.map(feature => (
          <div
            key={feature.id}
            className={`flex w-96 m-auto rounded-xl border p-6 border-neutral-400 bg-white `}
          >
            <div className={`flex flex-col`}>
              <span className="text-xs text-amber-700">
                &lt;{feature.id}&gt;
              </span>
              <Title
                size="2"
                className="whitespace-pre-line text-lg font-semibold mt-4"
              >
                {feature.title}
              </Title>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                {feature.body}
              </p>
            </div>
          </div>
        ))}
        <div
          className={`flex justify-between m-auto rounded-xl border p-6 border-neutral-400 bg-orange-50 max-w-[800px] w-96 md:w-full`}
        >
          <div className={`flex flex-col  max-w-80 w-full`}>
            <span className="text-xs text-amber-700">&lt;05&gt;</span>
            <Title
              size="2"
              className="whitespace-pre-line text-lg font-semibold mt-4"
            >
              Сообщество, меняющее рынок труда
            </Title>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Мы верим, что честные отзывы помогают компаниям становиться лучше,
              а IT-специалистам — принимать обоснованные решения и находить
              лучшие возможности
            </p>
          </div>

          <Image
            src="/imgs/logo.svg"
            width={300}
            height={232}
            alt="logo"
            className="hidden md:block w-full h-auto max-w-[240px]"
          />
        </div>
      </div>
    </Container>
  );
};
