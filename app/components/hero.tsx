import { Button, Container } from '@/shared/ui';

export const Hero = () => {
  const cards = [
    { title: '1 345', description: 'проверенных отзывов' },
    { title: '100+', description: 'новых отзывов ежемесячно' },
    { title: '487', description: ' компаний в базе' },
    { title: '679+', description: 'пользователей' },
  ];

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-no-repeat rounded-b-3xl"
      style={{
        backgroundImage:
          'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(imgs/hero-bg.svg)',
      }}
    >
      <Container className="flex flex-col items-center gap-16 text-center text-white">
        <div>
          <h1 className="mb-6 text-4xl md:text-7xl text-center font-extrabold leading-tight ">
            Ваш голос меняет рынок труда
          </h1>

          <p className="mx-auto max-w-2xl text-lg md:text-2xl">
            Поделитесь своим отзывом о работе в компании —
            <br />
            помогите другим сделать правильный выбор
          </p>

          <Button className="mt-10 btn-primary text-xl font-normal">
            Оставить отзыв
          </Button>
        </div>

        <WebHero cards={cards} />
        <MobileHero cards={cards} />
      </Container>
    </div>
  );
};

type Card = {
  title: string;
  description: string;
};

type Props = {
  cards: Card[];
};

const WebHero = ({ cards }: Props) => {
  return (
    <div className="hidden md:flex flex-wrap justify-between gap-4 mt-20 w-full">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center rounded-xl border border-amber-300 bg-black/60 p-6 w-40 md:w-72 m-auto"
        >
          <span className="mb-1 text-3xl font-bold leading-none">
            {card.title}
          </span>
          <span className="text-sm opacity-80">{card.description}</span>
        </div>
      ))}
    </div>
  );
};

const MobileHero = ({ cards }: Props) => {
  return (
    <div className="flex md:hidden flex-col justify-between gap-2 max-w-80 w-full py-4 border border-amber-300 bg-black/60 rounded-xl">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center m-auto"
        >
          <span className="text-2xl font-bold leading-none">{card.title}</span>
          <span className="text-sm mt-1 opacity-80">{card.description}</span>
        </div>
      ))}
    </div>
  );
};
