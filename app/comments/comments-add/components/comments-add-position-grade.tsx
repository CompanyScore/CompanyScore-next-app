import React from 'react';
import { Input, Select, Title } from '@/ui';
import { positions } from '@/constants';
import { useCommentFormStore2 } from '@/store';
import { OptionType } from '@/ui/select';

export const CommentsAddPositionGrade = () => {
  const { form, updateForm } = useCommentFormStore2();

  const positionOptions: OptionType[] = positions.map(pos => ({
    label: pos,
    value: pos,
  }));

  const handlePositionChange = (option: OptionType | null) => {
    updateForm({
      userinfo: {
        ...form.userinfo,
        position: option?.value ? String(option.value) : '',
      },
    });
  };

  const handleYearsChange = (years: number) => {
    updateForm({
      userinfo: {
        ...form.userinfo,
        grade: {
          ...form.userinfo.grade,
          years,
        },
      },
    });
  };

  const handleMonthsChange = (months: number) => {
    updateForm({
      userinfo: {
        ...form.userinfo,
        grade: {
          ...form.userinfo.grade,
          months,
        },
      },
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <Title size="2" position="center">
        Укажите вашу должность и стаж работы, в тот период
      </Title>

      <div className="flex flex-col gap-4 w-full max-w-xl m-auto">
        <Select
          placeholder="Должность"
          isClearable
          options={positionOptions}
          value={
            positionOptions.find(opt => opt.value === form.userinfo.position) ??
            null
          }
          onChange={handlePositionChange}
        />

        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <p>Количество лет</p>
            <Input
              type="number"
              placeholder="Лет опыта"
              value={form.userinfo.grade.years}
              onChange={val => handleYearsChange(Number(val))}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Количество месяцев</p>
            <Input
              type="number"
              placeholder="Месяцев опыта"
              value={form.userinfo.grade.months}
              onChange={val => handleMonthsChange(Number(val))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
