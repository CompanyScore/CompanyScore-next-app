import { Container, Title } from '@/shared/ui';
import Image from 'next/image';

export const Collaboration = () => {
  return (
    <div className="bg-brand-50 rounded-[50px]">
      <Container className="flex flex-row">
        <div className="flex flex-col">
          <p className="text-xs font-semibold uppercase tracking-tighter text-neutral-400">
            / СОТРУДНИЧЕСТВО /
          </p>
          <div className="flex flex-col md:flex-row justify-between">
            <Title className="mt-4 md:mt-4 md:text-3xl text-3xl md:leading-[1.2] md:w-2/3">
              Мы&nbsp;открыты для&nbsp;
              <span className="text-amber-700">
                новых идей и&nbsp;партнёрств
              </span>
              , которые помогут сделать рынок труда прозрачнее и&nbsp;удобнее
              для&nbsp;всех. Если&nbsp;вы&nbsp;разделяете наши ценности
              и&nbsp;хотите вместе создавать инновационные решения&nbsp;&mdash;
              свяжитесь с&nbsp;нами!
            </Title>
          </div>
        </div>

        <Image
          src="/imgs/logo.svg"
          width={306}
          height={232}
          alt="logo"
          className="hidden md:block w-full h-auto max-w-[306px]"
        />
      </Container>
    </div>
  );
};
