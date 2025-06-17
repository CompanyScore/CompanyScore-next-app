import { Button, Container } from '@/ui';

export const Call = () => {
  return (
    <div
      className="bg-contain w-full bg-no-repeat rounded-t-3xl text-white"
      style={{
        backgroundImage: 'url(imgs/background.png)',
      }}
    >
      <Container className="flex flex-col items-center ">
        <h2 className="text-3xl md:text-5xl text-center">
          Ваш отзыв важен — помогите другим сделать правильный выбор
        </h2>

        <Button className="mt-10 btn-primary text-xl font-normal">
          Оставить отзыв
        </Button>
      </Container>
    </div>
  );
};
