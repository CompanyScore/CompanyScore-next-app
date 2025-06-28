import { Container } from '@/ui';
export const Hero = () => {
  return (
    <Container className="flex flex-col text-neutral-800 pb-10">
      <h1 className="text-3xl md:text-5xl md:leading-[1.2]">
        CompanyScore&nbsp;&mdash; молодой стартап, который с&nbsp;2024&nbsp;года{' '}
        <span className="text-amber-600">меняет подход</span> к&nbsp;выбору
        работодателя в&nbsp;IT-сфере. Мы&nbsp;создаём платформу, где&nbsp;каждый
        специалист может поделиться своим опытом и&nbsp;получить честную,
        проверенную информацию о&nbsp;компаниях
      </h1>
    </Container>
  );
};
