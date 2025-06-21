import { Input, Title } from '@/ui';
import React from 'react';
import { useCommentFormStore2 } from '@/store';
import { Checkbox, Radio } from '@/shared';

export const CommentsAddWork3 = () => {
  const { form, updateForm } = useCommentFormStore2();

  return (
    <div className="flex flex-col gap-6 max-w-[900px] w-full m-auto">
      <Title>Оцените работу 3</Title>

      <p>
        Насколько вы были удовлетворены уровнем выплаты бонусов, премии или
        мотивационных надбавок?
      </p>
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
            label: 'Бонусов не было или они были совсем незначительными',
            value: 0,
          },
          {
            label: 'Выплаты были, но ниже ожиданий',
            value: 2,
          },
          { label: 'В среднем, ничего особенного', value: 5 },
          {
            label: 'Бонусы в целом устраивали.',
            value: 5,
          },
          {
            label: 'Всё соответствовало ожиданиям или даже лучше',
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
            label: 'Страховка бесполезна или почти ничего не покрывает',
            value: 0,
          },
          {
            label: 'Покрытие слабое, мало что реально доступно',
            value: 2,
          },
          { label: 'Покрытие базовое, могло быть лучше', value: 5 },
          {
            label: 'Лечиться можно, основные услуги покрывались',
            value: 5,
          },
          {
            label: 'Всё нужное включено, страховка надёжная',
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

      <p>
        Предлагает ли компания долевое участие, акции, партнёрство или долю от
        прибыли сотрудникам?
      </p>
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
            label: 'Да, предлагается широкой группе сотрудников',
            value: 0,
          },
          {
            label: 'Нет, такие возможности не предусмотрены',
            value: 2,
          },
          {
            label:
              'Да, но только ограниченному кругу (топ-менеджмент, ключевые специалисты)',
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

      <p>
        Предоставлялись ли следующие социальные выплаты и льготы? (отметьте всё,
        что применимо)
      </p>

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
        label="Компенсация питания / бесплатное питание"
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
