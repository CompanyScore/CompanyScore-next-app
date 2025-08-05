import { Button, Container } from '@/shared/ui';

export const Call = () => {
  return (
    <div className="bg-neutral-100">
      <div className="bg-cover bg-no-repeat rounded-t-[50px] text-white bg-[url(/imgs/background.png)]">
        <Container className="flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-semibold md:leading-[1.2] text-center">
            Ваш отзыв важен — помогите другим сделать правильный выбор
          </h2>

          <Button className="mt-11 py-2 px-6 btn-primary text-xl font-normal">
            Оставить отзыв
          </Button>
        </Container>
      </div>
    </div>
  );
};
