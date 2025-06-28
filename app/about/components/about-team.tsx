import { Button, Container, Title } from '@/ui';
import { IconArrowUpRight } from '@tabler/icons-react';

type Block = {
  title: string;
  description: string;
  offset?: boolean;
  smallerFont?: boolean;
  mobileOffset?: boolean;
};
type BlockProps = {
  blocks: Block[];
};

const blocks: Block[] = [
  { title: '2024', description: 'Основано в' },
  {
    title: '12',
    description: 'Энтузиастов в команде',
    offset: true,
    mobileOffset: true,
  },
  { title: '20+', description: 'Компетенций' },
  {
    title: '100%',
    description: 'Вовлеченность в развитии продукта',
    smallerFont: true,
    mobileOffset: true,
  },
];
export const Team = () => {
  return (
    <div className="bg-neutral-100 rounded-[50px] md:pt-10 md:max-w-7xl m-auto">
      <Container className="md:pt-12">
        <div className="flex flex-col">
          <p className="mt-4 mb-2 text-xs font-semibold uppercase tracking-tighter text-neutral-400">
            / НАША КОМАНДА /
          </p>
          <div className="flex md:flex-row flex-col justify-between">
            <Title className="text-xl md:text-xl md:leading-[1.4] md:w-1/2">
              Хотя&nbsp;мы&nbsp;только начинаем свой путь, наша команда полна{' '}
              <span className="text-amber-700">энергии и&nbsp;амбиций</span>{' '}
              сделать рынок труда прозрачнее и&nbsp;справедливее. Мы&nbsp;верим,
              что&nbsp;открытость и&nbsp;честность отзывов помогут
              IT-специалистам принимать более взвешенные решения и&nbsp;строить
              карьеру в&nbsp;комфортных условиях
            </Title>
            <div className="flex md:justify-end md:items-end pt-6 md:pt-0">
              <Button className="btn-neutral border border-1-black max-w-[302px] w-80 h-14 text-xl">
                Подробнее о команде <IconArrowUpRight stroke={1} />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex">
          <WebTeam blocks={blocks} />
          <MobileTeam blocks={blocks} />
        </div>
      </Container>
    </div>
  );
};

const WebTeam = ({ blocks }: BlockProps) => {
  return (
    <div className="hidden md:flex flex-wrap gap-6 mt-10 items-start">
      {blocks.map((block, index) => (
        <div
          key={index}
          className={`
              flex flex-col text-left justify-center mt-8 w-40 md:w-72 m-auto
              ${block.offset ? 'mt-22 md:mt-40' : ''}
            `}
        >
          <span className="text-7xl text-neutral-800 font-semibold pt-5 pr-5">
            {block.title}
          </span>
          <span
            className={`text-base text-neutral-500 pt-2 ${block.smallerFont ? 'text-[15px]' : ''}`}
          >
            {block.description}
          </span>
        </div>
      ))}
    </div>
  );
};

const MobileTeam = ({ blocks }: BlockProps) => {
  return (
    <div className="flex md:hidden flex-col w-full pt-20 md:pt-0">
      {blocks.map((block, index) => (
        <div
          key={index}
          className={`flex flex-col ${block.mobileOffset ? 'pl-[48vw] pt-16' : ''}`}
        >
          <span className="text-7xl text-neutral-800 font-semibold">
            {block.title}
          </span>
          <span
            className={`text-base text-neutral-500 ${block.smallerFont ? 'text-[15px]' : ''}`}
          >
            {block.description}
          </span>
        </div>
      ))}
    </div>
  );
};
