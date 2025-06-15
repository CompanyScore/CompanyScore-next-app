import { Button, Container, Title } from '@/ui';
import { IconArrowRight } from '@tabler/icons-react';

export const Steps = () => {
  const steps = [
    {
      title: 'Оставьте отзыв',
      description:
        'Поделитесь опытом работы, прохождения собеседования или выполнения тестового задания — ваша история важна и поможет другим',
      button: 'Оставить отзыв',
    },
    {
      title: 'Читайте и анализируйте ',
      description:
        'Используйте удобные фильтры и статистику, чтобы быстро найти работодателя, который соответствует вашим ожиданиям',
      button: 'Посмотреть аналитику',
    },
    {
      title: 'Делайте осознанный выбор работы',
      description:
        'Выбирайте компанию, где ценят ваш вклад и развивают потенциал, избегая токсичных условий и ненужных испытаний',
      button: 'Искать компанию',
    },
  ];
  return (
    <div className=" bg-neutral-100 rounded-3xl">
      <Container>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-400">
          / КАК ЭТО РАБОТАЕТ /
        </p>
        <Title size="4" className="mb-4 text-2xl font-bold sm:text-3xl">
          Простые шаги к прозрачности
        </Title>

        <div className="flex flex-col justify-between mt-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex justify-between items-center flex-wrap gap-4 border-t-amber-700 border-t-2 py-10 px-7"
            >
              <div className="flex flex-col max-w-[600px]">
                <Title
                  size="2"
                  className="whitespace-pre-line text-2xl font-semibold"
                >
                  {step.title}
                </Title>
                <p className="mt-3 text-base leading-relaxed text-neutral-700">
                  {step.description}
                </p>
              </div>
              <div className="flex justify-end">
                <Button className="btn-secondary">
                  {step.button} <IconArrowRight stroke={1} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
