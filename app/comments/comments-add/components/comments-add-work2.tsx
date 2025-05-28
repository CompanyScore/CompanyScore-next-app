import { Input, Title } from '@/ui';
import React from 'react';
import { useCommentFormStore2 } from '@/store';

export const CommentsAddWork2 = () => {
  const { form, updateForm } = useCommentFormStore2();

  return (
    <div className="flex flex-col gap-6">
      <Title size="2" position="center">
        Оцените работу 2
      </Title>

      <div className="flex flex-col gap-4 w-full m-auto">
        <div className="flex justify-content-between flex-wrap">
          <div className="flex flex-col gap-4 m-auto">
            <Title size="2">Уровень зарплаты</Title>
            <Input
              type="number"
              value={form.work.finance.salary}
              onChange={val =>
                updateForm({
                  work: {
                    ...form.work,
                    finance: {
                      ...form.work.finance,
                      salary: Number(val),
                    },
                  },
                })
              }
            />

            <Title size="2">Медицинкая страховка</Title>
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

            <Title size="2">Премии</Title>
            <Input
              type="number"
              value={form.work.finance.premium}
              onChange={val =>
                updateForm({
                  work: {
                    ...form.work,
                    finance: {
                      ...form.work.finance,
                      premium: Number(val),
                    },
                  },
                })
              }
            />

            <Title size="2">Бонусы</Title>
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

            <Title size="2">Участие в опционах / акциях</Title>
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

            <Title size="2">Дополнительные выплаты / дивиденды</Title>
            <Input
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
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
