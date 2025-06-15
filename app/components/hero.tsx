import { Button, Container, Title } from '@/ui';

export const Hero = () => {
  const cards = [
    { title: '1 345', description: 'проверенных отзывов' },
    { title: '100+', description: 'новых отзывов ежемесячно' },
    { title: '487', description: ' компаний в базе' },
    { title: '679+', description: 'пользователей' },
  ];

  return (
    <div
      className="flex items-center justify-center h-full max-h-[820px] bg-cover bg-no-repeat rounded-b-3xl"
      style={{
        backgroundImage:
          'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(imgs/hero-bg.svg)',
      }}
    >
      <Container className="flex flex-col items-center justify-end gap-16 text-center mt-52 mb-28 text-white">
        <div>
          <Title
            position="center"
            className="mb-6 text-5xl md:text-7xl font-extrabold leading-tight "
          >
            Ваш голос меняет рынок труда
          </Title>

          <p className="mx-auto max-w-xl text-lg md:text-xl">
            Поделитесь своим отзывом о работе в компании —
            <br className="hidden sm:block" />
            помогите другим сделать правильный выбор
          </p>

          <Button className="mt-10 btn-primary text-lg">Оставить отзыв</Button>
        </div>

        <div className="flex flex-wrap justify-between gap-4 mt-20 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-xl border border-brand-50 bg-black/60 p-6 w-40 md:w-72 m-auto"
            >
              <span className="mb-1 text-3xl font-bold leading-none">
                {card.title}
              </span>
              <span className="text-sm opacity-80">{card.description}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
