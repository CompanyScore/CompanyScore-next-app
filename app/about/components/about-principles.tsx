import { type Block } from '@/app/about/types';
import { Container, Title } from '@/shared/ui';

const blocks: Block[] = [
  {
    title: 'Этика\nи уважение',
    description:
      'Мы поддерживаем уважительное общение и конструктивную критику, создавая безопасное пространство для обмена опытом',
  },
  {
    title: 'Инновации\nи технологии',
    description:
      'Мы используем современные технологии и аналитику, чтобы сделать поиск и оценку компаний максимально удобными и информативными',
  },
  {
    title: 'Обратная связь\nи развитие',
    description:
      'Обратная связь нашего сообщества — главный источник ценных идей для дальнейшего и постоянного улучшения платформы',
  },
];
export const Principles = () => {
  return (
    <div className="rounded-[50px] md:max-w-7xl m-auto">
      <Container>
        <div className="flex flex-col">
          <p className="mt-4 mb-2 text-xs font-semibold uppercase tracking-tighter text-neutral-400">
            / НАШИ ПРИНЦИПЫ /
          </p>
          <div className="flex md:flex-row flex-col justify-between">
            <Title className="text-xl md:text-xl md:leading-[1.4] md:w-1/2">
              Мы опираемся на 
              <span className="text-amber-700">три главных принципа</span>,
              которые служат основой для создания прозрачной, этичной
              и инновационной платформы, где каждый пользователь чувствует себя
              услышанным, а его опыт становится частью общего развития
              и улучшения рынка труда
            </Title>
          </div>

          <div className={`flex justify-between gap-6 flex-wrap w-full pt-10`}>
            {blocks.map((block, index) => (
              <div
                key={index}
                className={`flex flex-col w-96 h-[244px] m-auto rounded-[20px] border p-8 border-neutral-400 bg-white`}
              >
                <div className="flex flex-row items-center">
                  <span className="text-6xl text-amber-700 ">[{++index}]</span>
                  <h3 className="text-2xl font-medium pl-3 whitespace-pre-line">
                    {block.title}
                  </h3>
                </div>
                <p className="mt-5 text-base leading-relaxed text-neutral-700">
                  {block.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
