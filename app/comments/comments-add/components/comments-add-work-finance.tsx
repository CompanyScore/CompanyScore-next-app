import { Input, Title, Tooltip } from '@/ui';
import React, { useEffect } from 'react';
import { Checkbox, Radio } from '@/shared';
import { IconInfoCircle, IconMessage2Exclamation } from '@tabler/icons-react';
import { workFormStore } from '@/form';
import { useWorkSocialBenefitStore } from '@/store';

export const CommentsAddWorkFinance = () => {
  const { workForm, updateWorkForm } = workFormStore();
  const { items, getWorkSocialBenefits, loading } = useWorkSocialBenefitStore();

  useEffect(() => {
    getWorkSocialBenefits();
  }, [getWorkSocialBenefits]);

  const handleChange = (id: string) => {
    const selected = workForm.finance.socialBenefits.includes(id)
      ? workForm.finance.socialBenefits.filter(e => e !== id)
      : [...workForm.finance.socialBenefits, id];

    updateWorkForm({
      finance: {
        ...workForm.finance,
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
          icon Эти данные помогут нам лучше понять уровень компенсации и
          прозрачность системы оплаты труда. Пожалуйста, указывайте значения в
          долларах США за один год на период вашей работы в этой компании.
        </p>
      </div>

      <p>Насколько вы были удовлетворены уровнем выплаты бонусов и премий?</p>
      <Input
        type="number"
        value={workForm.finance.bonusesAndPremium.value}
        onChange={val =>
          updateWorkForm({
            finance: {
              ...workForm.finance,
              bonusesAndPremium: {
                ...workForm.finance.bonusesAndPremium,
                value: Number(val),
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
        selectedValue={workForm.finance.bonusesAndPremium.points}
        onChange={val =>
          updateWorkForm({
            finance: {
              ...workForm.finance,
              bonusesAndPremium: {
                ...workForm.finance.bonusesAndPremium,
                points: Number(val),
              },
            },
          })
        }
      />

      <p>Насколько вы были удовлетворены уровнем медицинской страховки?</p>
      <Input
        type="number"
        value={workForm.finance.medicine.value}
        onChange={val =>
          updateWorkForm({
            finance: {
              ...workForm.finance,
              medicine: {
                ...workForm.finance.medicine,
                value: Number(val),
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
        selectedValue={workForm.finance.medicine.points}
        onChange={val =>
          updateWorkForm({
            finance: {
              ...workForm.finance,
              medicine: {
                ...workForm.finance.medicine,
                points: Number(val),
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
        value={workForm.finance.profitShare.value}
        onChange={val =>
          updateWorkForm({
            finance: {
              ...workForm.finance,
              profitShare: {
                ...workForm.finance.profitShare,
                value: Number(val),
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
        selectedValue={workForm.finance.profitShare.points}
        onChange={val =>
          updateWorkForm({
            finance: {
              ...workForm.finance,
              profitShare: {
                ...workForm.finance.profitShare,
                points: Number(val),
              },
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
            <Checkbox
              key={item.id}
              value={item.id}
              label={item.label}
              selected={workForm.finance.socialBenefits.includes(item.id)}
              onChange={() => handleChange(item.id)}
            />
          ))
        )}
      </div>
      {/* <Checkbox
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
      /> */}
    </div>
  );
};
