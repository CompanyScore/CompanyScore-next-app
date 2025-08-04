import React from 'react';
import { useCommentInternshipForm } from '@/store/form';
import { Calendar, Radio, StarRating } from '@/shared/ui';
import { Title } from '@/shared/ui';

export const AddInternship = () => {
  const { commentInternshipForm, updateCommentInternshipForm } =
    useCommentInternshipForm();

  const fromDate = commentInternshipForm.dateFrom
    ? new Date(commentInternshipForm.dateFrom)
    : null;
  const toDate = commentInternshipForm.dateTo
    ? new Date(commentInternshipForm.dateTo)
    : null;

  const handleFromChange = (date: Date | null) => {
    updateCommentInternshipForm({
      ...commentInternshipForm,
      dateFrom: date ?? null,
    });
  };

  const handleToChange = (date: Date | null) => {
    updateCommentInternshipForm({
      ...commentInternshipForm,
      dateTo: date ?? null,
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
        value={commentInternshipForm.isUseful}
        onChange={val =>
          updateCommentInternshipForm({
            ...commentInternshipForm,
            isUseful: val,
          })
        }
      />

      <p>Насколько понятно были организованы задачи стажировки?</p>
      <StarRating
        value={commentInternshipForm.clearlyOrganized}
        onChange={val =>
          updateCommentInternshipForm({
            ...commentInternshipForm,
            clearlyOrganized: val,
          })
        }
      />

      <p>Насколько соответствовали задачи уровню стажера?</p>
      <StarRating
        value={commentInternshipForm.correspondedInternLevel}
        onChange={val =>
          updateCommentInternshipForm({
            ...commentInternshipForm,
            correspondedInternLevel: val,
          })
        }
      />

      <p>Насколько интересными и развивающими были задачи?</p>
      <StarRating
        value={commentInternshipForm.developingAssignment}
        onChange={val =>
          updateCommentInternshipForm({
            ...commentInternshipForm,
            developingAssignment: val,
          })
        }
      />

      <p>Как вы оцениваете доступность и поддержку наставника/руководителя?</p>
      <StarRating
        value={commentInternshipForm.supportSupervisor}
        onChange={val =>
          updateCommentInternshipForm({
            ...commentInternshipForm,
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
        selectedValue={commentInternshipForm.isPaid}
        onChange={val =>
          updateCommentInternshipForm({
            ...commentInternshipForm,
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
        selectedValue={commentInternshipForm.isOffer}
        onChange={val =>
          updateCommentInternshipForm({
            ...commentInternshipForm,
            isOffer: Number(val),
          })
        }
      />
    </div>
  );
};
