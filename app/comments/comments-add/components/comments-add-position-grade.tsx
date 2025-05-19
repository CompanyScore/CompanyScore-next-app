import { Dropdown, Input, Title } from '@/ui';
import React from 'react';
import { positions } from '@/constants';
import { useCommentFormStore } from '@/store';

export const CommentsAddPositionGrade = () => {
  const { form, updateForm } = useCommentFormStore();

  const handleYearsChange = (years: number) => {
    updateForm({ grade: { ...form.grade, years } });
  };

  const handleMonthsChange = (months: number) => {
    updateForm({ grade: { ...form.grade, months } });
  };

  return (
    <div className="flex flex-col gap-6">
      <Title size="2" position="center">
        Укажите вашу должность и стаж работы
      </Title>
      <div className="flex flex-col gap-4 w-full max-w-xl m-auto">
        <Dropdown
          text="Должность"
          options={positions}
          isFirstDisabled={true}
          selectedValue={form.position}
          onSelect={val => updateForm({ position: val })}
          width="100%"
        />
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <p>Количество лет</p>
            <Input
              type="number"
              placeholder="Лет опыта"
              value={form.grade.years}
              onChange={val => handleYearsChange(Number(val))}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Количество месяцев</p>
            <Input
              type="number"
              placeholder="Месяцев опыта"
              value={form.grade.months}
              onChange={val => handleMonthsChange(Number(val))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
