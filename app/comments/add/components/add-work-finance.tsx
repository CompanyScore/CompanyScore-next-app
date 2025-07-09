import { Input, Title, Tooltip } from '@/ui';
import React from 'react';
import { Checkbox, Radio } from '@/shared';
import { IconInfoCircle, IconMessage2Exclamation } from '@tabler/icons-react';
import { useCommentWorkFinanceForm } from '@/store/form';
import { CommentWorkFinanceFormType } from '@/store/form/comment-work-finance.form';

export const AddWorkFinance = () => {
  const { commentWorkFinanceForm, updateCommentWorkFinanceForm } =
    useCommentWorkFinanceForm();

  const socials: { label: string; value: keyof CommentWorkFinanceFormType }[] =
    [
      {
        label: 'Бесплатное питание',
        value: 'isFreeMealsSocial',
      },
      {
        label: 'Компенсация проезда',
        value: 'isTransportSocial',
      },
      {
        label: 'Компенсация жилья',
        value: 'isHousingSocial',
      },
      {
        label: 'Праздничные выплаты',
        value: 'isHolidayBonusSocial',
      },
      {
        label: 'Оплата обучения',
        value: 'isEducationSocial',
      },
      {
        label: 'Выплаты на ребёнка',
        value: 'isChildAllowanceSocial',
      },
      {
        label: 'Материальная помощь',
        value: 'isFinancialAssistSocial',
      },
    ];

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
        value={commentWorkFinanceForm.bonusesValue}
        onChange={val =>
          updateCommentWorkFinanceForm({
            ...commentWorkFinanceForm,
            bonusesValue: Number(val),
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
        selectedValue={commentWorkFinanceForm.bonusesPoints}
        onChange={val =>
          updateCommentWorkFinanceForm({
            ...commentWorkFinanceForm,
            bonusesPoints: Number(val),
          })
        }
      />

      <p>Насколько вы были удовлетворены уровнем медицинской страховки?</p>
      <Input
        type="number"
        value={commentWorkFinanceForm.medicineValue}
        onChange={val =>
          updateCommentWorkFinanceForm({
            ...commentWorkFinanceForm,
            medicineValue: Number(val),
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
        selectedValue={commentWorkFinanceForm.medicinePoints}
        onChange={val =>
          updateCommentWorkFinanceForm({
            ...commentWorkFinanceForm,
            medicinePoints: Number(val),
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
        value={commentWorkFinanceForm.profitShareValue}
        onChange={val =>
          updateCommentWorkFinanceForm({
            ...commentWorkFinanceForm,
            profitShareValue: Number(val),
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
        selectedValue={commentWorkFinanceForm.profitSharePoints}
        onChange={val =>
          updateCommentWorkFinanceForm({
            ...commentWorkFinanceForm,
            profitSharePoints: Number(val),
          })
        }
      />

      <p>Предоставлялись ли следующие социальные выплаты и льготы?</p>
      <div className="flex flex-col gap-2">
        {socials.map(social => (
          <Checkbox
            key={social.label}
            value={social.value}
            label={social.label}
            selected={Boolean(commentWorkFinanceForm[social.value])}
            onChange={() =>
              updateCommentWorkFinanceForm({
                ...commentWorkFinanceForm,
                [social.value]: !commentWorkFinanceForm[social.value],
              })
            }
          />
        ))}
      </div>
    </div>
  );
};
