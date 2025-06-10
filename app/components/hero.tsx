import { Title } from '@/ui';

export const Hero = () => {
  const cards = [
    { title: '1 345', description: 'проверенных отзывов' },
    { title: '100+', description: 'новых отзывов ежемесячно' },
    { title: '487', description: ' компаний в базе' },
    { title: '679+', description: 'пользователей' },
  ];

  return (
    <div className="overflow-hidden bg-black text-white">
      <div
        className="absolute inset-0 w-full min-h-[560px] max-h-[800px] hero mt-24 "
        style={{
          backgroundImage: 'url(imgs/hero.png)',
        }}
      ></div>
      <div className="bg-black bg-opacity-50 absolute inset-0 w-full min-h-[560px] max-h-[800px] hero mt-24"></div>
      <div className="relative min-h-[700px] z-10 mx-auto flex max-w-7xl flex-col items-center px-4 text-center justify-end gap-16">
        <div>
          <Title
            size="7"
            className="mb-6 text-7xl font-extrabold leading-tight sm:text-4xl md:text-5xl"
          >
            Ваш голос меняет рынок труда
          </Title>

          <p className="mx-auto max-w-xl text-lg md:text-xl">
            Поделитесь своим отзывом о работе в компании —
            <br className="hidden sm:block" />
            помогите другим сделать правильный выбор
          </p>

          <button className="mt-10 rounded-full bg-brand-300 px-8 py-3 text-lg font-semibold text-black transition ">
            Оставить отзыв
          </button>
        </div>

        <div className="mt-20 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-xl border border-brand-50 bg-black/60 p-6"
            >
              <span className="mb-1 text-3xl font-bold leading-none">
                {card.title}
              </span>
              <span className="text-sm opacity-80">{card.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
