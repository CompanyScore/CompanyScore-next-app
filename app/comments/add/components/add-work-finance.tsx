import { Input, Title, Tooltip } from '@/ui';
import React, { useEffect } from 'react';
import { Checkbox, Radio } from '@/shared';
import { IconInfoCircle, IconMessage2Exclamation } from '@tabler/icons-react';
import { useCommentWorkForm } from '@/store/form';
import { useWorkSocialBenefitApi } from '@/store/api';

export const AddWorkFinance = () => {
  const { commentWorkForm, updateCommentWorkForm } = useCommentWorkForm();
  const { items, getWorkSocialBenefits, loading } = useWorkSocialBenefitApi();

  useEffect(() => {
    getWorkSocialBenefits();
  }, [getWorkSocialBenefits]);

  const handleChange = (id: string) => {
    const selected = commentWorkForm.finance.socialBenefits.includes(id)
      ? commentWorkForm.finance.socialBenefits.filter(e => e !== id)
      : [...commentWorkForm.finance.socialBenefits, id];

    updateCommentWorkForm({
      finance: {
        ...commentWorkForm.finance,
        socialBenefits: selected,
      },
    });
  };

  return (
    <div className="flex flex-col gap-6 max-w-[900px] w-full m-auto">
      <Title>Оцените работу: Finance</Title>

      <div className="flex gap-2">
        <IconMessage2Exclamation stroke={1} width={50} />
        <p>
          Эти данные помогут нам лучше понять уровень компенсации и прозрачность
          системы оплаты труда. Пожалуйста, указывайте значения в долларах США
          за один год на период вашей работы в этой компании.
        </p>
      </div>

      <p>Насколько вы были удовлетворены уровнем выплаты бонусов и премий?</p>
      <Input
        type="number"
        value={commentWorkForm.finance.bonusesValue}
        onChange={val =>
          updateCommentWorkForm({
            finance: {
              ...commentWorkForm.finance,
              bonusesValue: Number(val),
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
            value: 300,
          },
          { label: 'В целом нормально', value: 600 },
          {
            label: 'Полностью устраивали',
            value: 1000,
          },
        ]}
        className="flex flex-col"
        selectedValue={commentWorkForm.finance.bonusesPoints}
        onChange={val =>
          updateCommentWorkForm({
            finance: {
              ...commentWorkForm.finance,
              bonusesPoints: Number(val),
            },
          })
        }
      />

      <p>Насколько вы были удовлетворены уровнем медицинской страховки?</p>
      <Input
        type="number"
        value={commentWorkForm.finance.medicineValue}
        onChange={val =>
          updateCommentWorkForm({
            finance: {
              ...commentWorkForm.finance,
              medicineValue: Number(val),
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
            value: 300,
          },
          { label: 'В целом норм, покрытие ограниченное', value: 600 },
          {
            label: 'Полностью устраивала, всё покрывалось',
            value: 1000,
          },
        ]}
        className="flex flex-col"
        selectedValue={commentWorkForm.finance.medicinePoints}
        onChange={val =>
          updateCommentWorkForm({
            finance: {
              ...commentWorkForm.finance,
              medicinePoints: Number(val),
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
        value={commentWorkForm.finance.profitShareValue}
        onChange={val =>
          updateCommentWorkForm({
            finance: {
              ...commentWorkForm.finance,
              profitShareValue: Number(val),
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
            value: 500,
          },
          {
            label: 'Да, для всех сотрудников',
            value: 1000,
          },
        ]}
        className="flex flex-col"
        selectedValue={commentWorkForm.finance.profitSharePoints}
        onChange={val =>
          updateCommentWorkForm({
            finance: {
              ...commentWorkForm.finance,
              profitSharePoints: Number(val),
            },
          })
        }
      />

      <p>Предоставлялись ли следующие социальные выплаты и льготы?</p>
      <div className="flex flex-col gap-2">
        {loading ? (
          <p>Загрузка...</p>
        ) : (
          items.map(item => (
            <div key={item.id} className="flex items-center gap-2">
              <Checkbox
                value={item.id}
                label={item.label}
                selected={commentWorkForm.finance.socialBenefits.includes(
                  item.id,
                )}
                onChange={() => handleChange(item.id)}
              />

              <Tooltip tip="Стиль управления, доступность и открытость руководства, качество обратной связи">
                <IconInfoCircle stroke={1} />
              </Tooltip>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
