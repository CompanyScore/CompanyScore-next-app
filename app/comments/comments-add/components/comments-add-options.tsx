import { Checkbox } from '@/shared';
import React from 'react';
import { useCommentFormStore2 } from '@/store';
import { Card, Input, Title } from '@/ui';
import { positions } from '@/constants';
import { OptionType, Select } from '@/ui/select';

export const CommentsAddOptions = () => {
  const { form, updateForm } = useCommentFormStore2();

  const handleCheckboxTask = () => {
    updateForm({
      task: {
        ...form.task,
        isTask: !form.task.isTask,
      },
    });
  };

  const handleCheckboxInterview = () => {
    updateForm({
      interview: {
        ...form.interview,
        isInterview: !form.interview.isInterview,
      },
    });
  };

  const handleCheckboxIntern = () => {
    updateForm({
      intern: {
        ...form.intern,
        isIntern: !form.intern.isIntern,
      },
    });
  };

  const handleCheckboxWork = () => {
    updateForm({
      work: {
        ...form.work,
        isWork: !form.work.isWork,
      },
    });
  };

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

  // const handleMonthsChange = (months: number) => {
  //   updateForm({
  //     userinfo: {
  //       ...form.userinfo,
  //       grade: {
  //         ...form.userinfo.grade,
  //         months,
  //       },
  //     },
  //   });
  // };

  return (
    <div className="flex flex-col gap-6 m-auto w-full">
      <Title size="3">Заполнение формы отзыва</Title>
      <Title size="1">
        Укажите информацию про свою должность и о чем вы бы хотели оставить
        отзыв
      </Title>

      <div className="flex justify-between w-full">
        <Title size="2">О себе</Title>
        <div className="w-full max-w-96">
          <Title size="2">Должность</Title>
          <Select
            placeholder="Должность"
            isClearable
            options={positionOptions}
            value={
              positionOptions.find(
                opt => opt.value === form.userinfo.position,
              ) ?? null
            }
            onChange={handlePositionChange}
          />
        </div>
        <div>
          <Title size="2">Стаж работы</Title>

          <Input
            type="number"
            placeholder="Лет опыта"
            value={form.userinfo.grade.years}
            onChange={val => handleYearsChange(Number(val))}
          />

          <Title size="1">Укажите общий стаж вашей работы</Title>

          {/* <div className="flex flex-col gap-2 m-auto">
            <p>Количество месяцев</p>
            <Input
              type="number"
              placeholder="Месяцев опыта"
              value={form.userinfo.grade.months}
              onChange={val => handleMonthsChange(Number(val))}
            />
          </div> */}
        </div>
      </div>

      <div className="divider"></div>

      <div className="flex gap-6 m-auto w-full">
        <div className="flex flex-col">
          <Title size="3">О чём отзыв?</Title>
          <Title size="1">Выберите один или несколько вариантов</Title>
        </div>
        <div className="flex flex-wrap w-full gap-10">
          <Card className="flex flex-col gap-4 max-w-96 w-full">
            <div className="flex justify-between">
              <div>icon</div>
              <Checkbox
                label=""
                value="task"
                selected={form.task.isTask}
                onChange={handleCheckboxTask}
              />
            </div>
            <Title size="2" position="center">
              Рассказать про тестовое задание
            </Title>
            <div>
              Оцените опыт прохождения тестового или технического задания.
              Расскажите, насколько оно соответствовало указанной вакансии,
              сколько заняло по времени и т.д.
            </div>
          </Card>
          <Card className="flex flex-col gap-4 max-w-96 w-full">
            <div className="flex justify-between">
              <div>icon</div>
              <Checkbox
                label=""
                value="interview"
                selected={form.interview.isInterview}
                onChange={handleCheckboxInterview}
              />
            </div>
            <Title size="2" position="center">
              Рассказать про собеседование
            </Title>
            <div>
              Оцените опыт прохождения собеседования. Поделитесь, получили ли вы
              предложение о работе, насколько собеседование отвечало вашим
              ожиданиям о вакансии.
            </div>
          </Card>
          <Card className="flex flex-col gap-4 max-w-96 w-full">
            <div className="flex justify-between">
              <div>icon</div>
              <Checkbox
                label=""
                value="intern"
                selected={form.intern.isIntern}
                onChange={handleCheckboxIntern}
              />
            </div>
            <Title size="2" position="center">
              Рассказать про стажировку
            </Title>
            <div>
              Оцените стажировку. Расскажите, была ли она оплачиваемой, помогла
              ли найти работу, насколько полезны были задачи и был ли у вас
              профессиональный рост.
            </div>
          </Card>
          <Card className="flex flex-col gap-4 max-w-96 w-full">
            <div className="flex justify-between">
              <div>icon</div>
              <Checkbox
                label=""
                value="work"
                selected={form.work.isWork}
                onChange={handleCheckboxWork}
              />
            </div>
            <Title size="2" position="center">
              Рассказать про опыт работы
            </Title>
            <div>
              Оцените работу в компании. Расскажите про условия работы, процессы
              управления корпоративную культуру, уровень зарплаты, социальный
              пакет, и бонусы.
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
