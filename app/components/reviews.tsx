import { Button, Carousel, Container, Title } from '@/ui';
import { Card } from '@/ui/card';
import { IconArrowRight } from '@tabler/icons-react';
import { IconArrowLeft } from '@tabler/icons-react';

export const Reviews = () => {
  const reviews = [
    {
      title: 'John',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, molestiae.',
    },
    {
      title: 'Black',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio optio facilis inventore consectetur perspiciatis libero nam debitis recusandae quod ratione!',
    },
    {
      title: 'Clark',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, magnam alias aliquam veniam inventore eveniet.',
    },
  ];

  return (
    <Container>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-400">
        / ПОСЛЕДНИЕ ОТЗЫВЫ /
      </p>
      <Title className="mb-4">Истории из первых рук</Title>
      <p className="mb-12 max-w-2xl text-sm leading-relaxed text-neutral-700 sm:text-base">
        Здесь&nbsp;
        <span className="font-semibold text-amber-700">делятся опытом</span>
        &nbsp; и рассказывают о реальных ситуациях — от первых собеседований
        до повседневных рабочих будней. Узнайте, что скрывается за официальными
        описаниями вакансий
      </p>
      {/* className="flex justify-center flex-wrap mt-10 gap-6" */}
      <Carousel>
        {reviews.map((review, index) => (
          <Card key={index} className="max-w-[300px] md:max-w-[392px]">
            <span className="font-semibold text-base">{review.title}</span>
            <p className="">{review.description}</p>
          </Card>
        ))}
      </Carousel>

      <div className="hidden md:flex justify-center gap-6 mt-8">
        <Button className="btn-secondary rounded-full">
          <IconArrowLeft stroke={1} />
        </Button>
        <Button className="btn-secondary rounded-full">
          <IconArrowRight stroke={1} />
        </Button>
        {/* <Pagination page={1} total={1} limit={1} onPageChange={() => {}} /> */}
      </div>
    </Container>
  );
};
