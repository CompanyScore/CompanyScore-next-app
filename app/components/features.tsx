import { Title } from '@/ui';
import { Card } from '@/ui/card';

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
    {
      id: '05',
      title: 'Сообщество,\nменяющее рынок труда',
      body: 'Мы верим, что честные отзывы помогают компаниям становиться лучше, а IT-специалистам — принимать обоснованные решения и находить лучшие возможности',
      large: true,
    },
  ];

  return (
    <div className="relative mx-auto w-full px-4 py-16 md:py-24">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-400">
        /​почему мы/
      </p>
      <Title size="4" className="mb-4 text-2xl font-bold sm:text-3xl">
        Станьте частью перемен
      </Title>
      <p className="mb-12 max-w-2xl text-sm leading-relaxed text-neutral-700 sm:text-base">
        Мы создаём пространство, где&nbsp;
        <span className="font-semibold text-orange-600">
          каждый голос важен
        </span>
        , а опыт — ценен. Наша миссия — сделать рынок труда прозрачным и
        справедливым, чтобы каждый мог найти работу, где его ценят и уважают
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map(feature => (
          <Card
            key={feature.id}
            className={`rounded-xl border  p-6 shadow-sm transition hover:shadow-md ${feature.large ? 'col-span-2 border-neutral-200 bg-orange-50' : 'border-neutral-200 bg-white'}`}
            // className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <span className="mb-4 block text-xs font-medium uppercase tracking-widest text-neutral-400">
              {feature.id}
            </span>
            <Title
              size="2"
              className="whitespace-pre-line text-lg font-semibold"
            >
              {feature.title}
            </Title>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              {feature.body}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};
