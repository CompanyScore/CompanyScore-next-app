import { Input, Title, Tooltip } from '@/ui';
import React from 'react';
import { useCommentFormStore2 } from '@/store';
import { Checkbox, Radio } from '@/shared';
import { IconInfoCircle } from '@tabler/icons-react';

export const CommentsAddWork3 = () => {
  const { form, updateForm } = useCommentFormStore2();

  return (
    <div className="flex flex-col gap-6 max-w-[900px] w-full m-auto">
      <Title>Оцените работу 3</Title>

      <p>
        icon Эти данные помогут нам лучше понять уровень компенсации и
        прозрачность системы оплаты труда. Пожалуйста, указывайте значения в
        долларах США за один год на период вашей работы в этой компании.
      </p>

      <p>Насколько вы были удовлетворены уровнем выплаты бонусов и премий?</p>
      <Input
        type="number"
        value={form.work.finance.bonuses}
        onChange={val =>
          updateForm({
            work: {
              ...form.work,
              finance: {
                ...form.work.finance,
                bonuses: Number(val),
              },
            },
          })
        }
      />
      <Radio
        options={[
          {
            label: 'Не было',
            value: 0,
          },
          {
            label: 'Выплаты редкие',
            value: 2,
          },
          { label: 'В целом нормально', value: 5 },
          {
            label: 'Полностью устраивали',
            value: 5,
          },
        ]}
        className="flex flex-col"
        selectedValue={form.work.rating.workFormat}
        onChange={val =>
          updateForm({
            work: {
              ...form.work,
              rating: {
                ...form.work.rating,
                workFormat: Number(val),
              },
            },
          })
        }
      />

      <p>Насколько вы были удовлетворены уровнем медицинской страховки?</p>
      <Input
        type="number"
        value={form.work.finance.medicine}
        onChange={val =>
          updateForm({
            work: {
              ...form.work,
              finance: {
                ...form.work.finance,
                medicine: Number(val),
              },
            },
          })
        }
      />
      <Radio
        options={[
          {
            label: 'Страховки не было',
            value: 0,
          },
          {
            label: 'Страховка была, условия слабые',
            value: 2,
          },
          { label: 'В целом норм, покрытие ограниченное', value: 5 },
          {
            label: 'Полностью устраивала, всё покрывалось',
            value: 5,
          },
        ]}
        className="flex flex-col"
        selectedValue={form.work.rating.workFormat}
        onChange={val =>
          updateForm({
            work: {
              ...form.work,
              rating: {
                ...form.work.rating,
                workFormat: Number(val),
              },
            },
          })
        }
      />

      <div className="flex items-center gap-2">
        <p>Предлагает ли компания долю от прибыли сотрудникам?</p>
        <Tooltip tip="долевое участие, акции, партнёрство, дивиденды">
          <IconInfoCircle stroke={1} />
        </Tooltip>
      </div>
      <Input
        type="number"
        value={form.work.finance.stocks}
        onChange={val =>
          updateForm({
            work: {
              ...form.work,
              finance: {
                ...form.work.finance,
                stocks: Number(val),
              },
            },
          })
        }
      />
      <Radio
        options={[
          {
            label: 'Нет, такие возможности не предусмотрены',
            value: 0,
          },
          {
            label:
              'Да, но только ограниченному кругу (топ-менеджмент, ключевые специалисты)',
            value: 2,
          },
          {
            label: 'Да, для всех сотрудников',
            value: 5,
          },
        ]}
        className="flex flex-col"
        selectedValue={form.work.rating.workFormat}
        onChange={val =>
          updateForm({
            work: {
              ...form.work,
              rating: {
                ...form.work.rating,
                workFormat: Number(val),
              },
            },
          })
        }
      />

      <p>Предоставлялись ли следующие социальные выплаты и льготы?</p>

      <Checkbox
        label="Материальная помощь при трудных обстоятельствах"
        value="interview"
        selected={false} // Replace with actual state
        onChange={() => console.log('checkbox change')}
      />
      <Checkbox
        label="Оплата/субсидия на обучение, курсы"
        value="interview"
        selected={false} // Replace with actual state
        onChange={() => console.log('checkbox change')}
      />
      <Checkbox
        label="Бесплатное питание"
        value="interview"
        selected={false} // Replace with actual state
        onChange={() => console.log('checkbox change')}
      />
      <Checkbox
        label="Выплаты к рождению ребёнка"
        value="interview"
        selected={false} // Replace with actual state
        onChange={() => console.log('checkbox change')}
      />
      <Checkbox
        label="Компенсация аренды жилья"
        value="interview"
        selected={false} // Replace with actual state
        onChange={() => console.log('checkbox change')}
      />
      <Checkbox
        label="Компенсация расходов на проезд"
        value="interview"
        selected={false} // Replace with actual state
        onChange={() => console.log('checkbox change')}
      />
      <Checkbox
        label="Выплаты к профессиональным праздникам"
        value="interview"
        selected={false} // Replace with actual state
        onChange={() => console.log('checkbox change')}
      />

      {/* <Input
              type="number"
              value={form.work.finance.dividends}
              onChange={val =>
                updateForm({
                  work: {
                    ...form.work,
                    finance: {
                      ...form.work.finance,
                      dividends: Number(val),
                    },
                  },
                })
              } */}
      {/* /> */}
    </div>
  );
};
