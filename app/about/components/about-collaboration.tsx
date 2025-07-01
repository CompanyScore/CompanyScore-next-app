import { Container, Title } from '@/ui';
import Image from 'next/image';

export const Collaboration = () => {
  return (
    <div className="bg-brand-50 rounded-[50px] md:pt-0 md:max-w-7xl m-auto">
      <Container className="flex flex-row">
        <div className="flex flex-col">
          <p className="md:mt-4 mb-3 md:mb-2 text-xs font-semibold uppercase tracking-tighter text-neutral-400">
            / СОТРУДНИЧЕСТВО /
          </p>
          <div className="flex flex-col md:flex-row justify-between">
            <Title className="text-3xl md:leading-[1.2] md:w-2/3">
              Мы открыты для 
              <span className="text-amber-700">новых идей и партнёрств</span>,
              которые помогут сделать рынок труда прозрачнее и удобнее для всех.
              Если вы разделяете наши ценности и хотите вместе создавать
              инновационные решения — свяжитесь с нами!
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
