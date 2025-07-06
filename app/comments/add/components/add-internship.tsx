import React from 'react';
import { internshipFormStore } from '@/store/form';
import { Calendar, Radio, StarRating } from '@/shared';
import { Title } from '@/ui';

export const AddInternship = () => {
  const { internshipForm, updateInternshipForm } = internshipFormStore();

  const fromDate = internshipForm.period.from
    ? new Date(internshipForm.period.from)
    : null;
  const toDate = internshipForm.period.to
    ? new Date(internshipForm.period.to)
    : null;

  const handleFromChange = (date: Date | null) => {
    updateInternshipForm({
      period: {
        ...internshipForm.period,
        from: date ? date.toISOString().split('T')[0] : '',
      },
    });
  };

  const handleToChange = (date: Date | null) => {
    updateInternshipForm({
      period: {
        ...internshipForm.period,
        to: date ? date.toISOString().split('T')[0] : '',
      },
    });
  };

  return (
    <div className="flex flex-col gap-6 max-w-[900px] w-full m-auto">
      <Title>Оцените cтажировку</Title>

      <div className="flex flex-col gap-4">
        <p>Период стажировки</p>
        <p>
          Информация о периоде стажировки будет использоваться для аналитики и
          не будет публиковаться в отзывах
        </p>
        <div className="flex gap-4">
          <Calendar label="От" value={fromDate} onChange={handleFromChange} />
          <Calendar label="До" value={toDate} onChange={handleToChange} />
        </div>
      </div>

      <p>Насколько полезным была стажировки для вас?</p>
      <StarRating
        value={internshipForm.isUseful}
        onChange={val =>
          updateInternshipForm({
            ...internshipForm,
            isUseful: val,
          })
        }
      />

      <p>Насколько понятно были организованы задачи стажировки?</p>
      <StarRating
        value={internshipForm.clearlyOrganized}
        onChange={val =>
          updateInternshipForm({
            ...internshipForm,
            clearlyOrganized: val,
          })
        }
      />

      <p>Насколько соответствовали задачи уровню стажера?</p>
      <StarRating
        value={internshipForm.correspondedInternLevel}
        onChange={val =>
          updateInternshipForm({
            ...internshipForm,
            correspondedInternLevel: val,
          })
        }
      />

      <p>Насколько интересными и развивающими были задачи?</p>
      <StarRating
        value={internshipForm.developingAssignment}
        onChange={val =>
          updateInternshipForm({
            ...internshipForm,
            developingAssignment: val,
          })
        }
      />

      <p>Как вы оцениваете доступность и поддержку наставника/руководителя?</p>
      <StarRating
        value={internshipForm.supportSupervisor}
        onChange={val =>
          updateInternshipForm({
            ...internshipForm,
            supportSupervisor: val,
          })
        }
      />

      <p>Была ли стажировка оплачиваемой?</p>
      <Radio
        options={[
          { label: 'Нет', value: 0 },
          { label: 'Да', value: 1000 },
        ]}
        selectedValue={internshipForm.isPaid}
        onChange={val =>
          updateInternshipForm({
            ...internshipForm,
            isPaid: Number(val),
          })
        }
      />

      <p>Предлагала ли компания трудоустройство после стажировки?</p>
      <Radio
        options={[
          { label: 'Нет', value: 0 },
          { label: 'Да', value: 1000 },
        ]}
        selectedValue={internshipForm.isOffer}
        onChange={val =>
          updateInternshipForm({
            ...internshipForm,
            isOffer: Number(val),
          })
        }
      />
    </div>
  );
};
