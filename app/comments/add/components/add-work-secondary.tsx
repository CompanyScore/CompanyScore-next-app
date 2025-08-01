import { useCommentWorkSecondaryForm } from '@/store/form';
import { Checkbox, Radio } from '@/shared';
import { Title, Tooltip } from '@/shared/ui';
import { IconInfoCircle } from '@tabler/icons-react';
import { CommentWorkSecondaryFormType } from '@/store/form/comment-work-secondary.form';

export const AddWorkSecondary = () => {
  const { commentWorkSecondaryForm, updateCommentWorkSecondaryForm } =
    useCommentWorkSecondaryForm();

  const educations: {
    label: string;
    value: keyof CommentWorkSecondaryFormType;
    score: number;
  }[] = [
    {
      label: 'Онлайн курсы',
      value: 'isOnlineCoursesEdu',
      score: 100,
    },
    {
      label: 'Оффлайн курсы',
      value: 'isOfflineCoursesEdu',
      score: 150,
    },
    {
      label: 'Тренинги',
      value: 'isTrainingsEdu',
      score: 200,
    },
    {
      label: 'Командировки',
      value: 'isBusinessTripsEdu',
      score: 150,
    },
    {
      label: 'Частичная оплата учебы',
      value: 'isPartUniPayEdu',
      score: 250,
    },
    {
      label: 'Полная оплата учебы',
      value: 'isFullUniPayEdu',
      score: 300,
    },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-[900px] w-full m-auto">
      <Title>Оцените работу: Secondary</Title>

      <p>
        Насколько рабочие задачи соответствовали должности и способствовали
        вашему профессиональному развитию?
      </p>
      <Radio
        options={[
          {
            label: 'Задачи не соответствовали должности и не развивали',
            value: 0,
          },
          {
            label: 'В целом соответствовали, но развитие ограниченное',
            value: 500,
          },
          {
            label: 'Полностью соответствовали и активно развивали навыки',
            value: 1000,
          },
        ]}
        selectedValue={commentWorkSecondaryForm.development}
        onChange={val =>
          updateCommentWorkSecondaryForm({
            ...commentWorkSecondaryForm,
            development: Number(val),
          })
        }
        className="flex flex-col"
      />

      <p>Насколько комфортной и удобной была ваша рабочая среда в офисе?</p>
      <Radio
        options={[
          {
            label: 'Очень некомфортно, мешало работе',
            value: 0,
          },
          {
            label: 'Нейтрально, терпимо, но можно улучшить',
            value: 500,
          },
          {
            label: 'Максимально комфортно, всё устраивало',
            value: 1000,
          },
        ]}
        selectedValue={commentWorkSecondaryForm.comfort}
        onChange={val =>
          updateCommentWorkSecondaryForm({
            ...commentWorkSecondaryForm,
            comfort: Number(val),
          })
        }
        className="flex flex-col"
      />

      <p>
        Были ли вы свидетелем дискриминации по полу, возрасту, этнической
        принадлежности и так далее?
      </p>
      <Radio
        options={[
          {
            label: 'Нет',
            value: 0,
          },
          {
            label: 'Да',
            value: 1000,
          },
        ]}
        selectedValue={commentWorkSecondaryForm.discrimination}
        onChange={val =>
          updateCommentWorkSecondaryForm({
            ...commentWorkSecondaryForm,
            discrimination: Number(val),
          })
        }
        className="flex"
      />

      <div className="flex items-center gap-2">
        <p>
          Как вы оцениваете этичность компании и её социальную ответственность?
        </p>
        <Tooltip tip="Оцениваются честность, порядочность компании и её отношение к сотрудникам, обществу и окружающей среде">
          <IconInfoCircle stroke={1} />
        </Tooltip>
      </div>
      <Radio
        options={[
          {
            label: 'Есть проблемы с этикой и заботой о людях',
            value: 0,
          },
          {
            label: 'Этичность скорее формальная',
            value: 300,
          },
          {
            label: 'В целом соблюдает нормы',
            value: 600,
          },
          {
            label: 'Компания ведёт себя честно и проявляет заботу о людях',
            value: 1000,
          },
        ]}
        selectedValue={commentWorkSecondaryForm.ethics}
        onChange={val =>
          updateCommentWorkSecondaryForm({
            ...commentWorkSecondaryForm,
            ethics: Number(val),
          })
        }
        className="flex flex-col"
      />

      <p>
        Проводилась ли в компании регулярная оценка эффективности вашей работы
        (Performance Review)?
      </p>
      <Radio
        options={[
          {
            label: 'Нет',
            value: 0,
          },
          {
            label: '3 месяца',
            value: 300,
          },
          {
            label: 'Полгода',
            value: 600,
          },
          {
            label: 'Год',
            value: 1000,
          },
        ]}
        selectedValue={commentWorkSecondaryForm.performanceReview}
        onChange={val =>
          updateCommentWorkSecondaryForm({
            ...commentWorkSecondaryForm,
            performanceReview: Number(val),
          })
        }
        className="flex"
      />

      <p>
        Организовывала ли компания за свой счёт корпоративные мероприятия
        (праздники, выезды, тимбилдинги)?
      </p>
      <Radio
        options={[
          {
            label: 'Мероприятий не было',
            value: 0,
          },
          {
            label: 'Проводились редко',
            value: 300,
          },
          {
            label: 'Проводили, было норм',
            value: 600,
          },
          {
            label: 'Часто и на хорошем уровне',
            value: 1000,
          },
        ]}
        selectedValue={commentWorkSecondaryForm.events}
        onChange={val =>
          updateCommentWorkSecondaryForm({
            ...commentWorkSecondaryForm,
            events: Number(val),
          })
        }
        className="flex flex-col"
      />

      <p>
        Какие формы обучения или повышения квалификации поддерживала компания?
      </p>

      <div className="flex flex-col gap-2">
        {educations.map(education => (
          <Checkbox
            key={education.label}
            value={education.value}
            label={education.label}
            selected={Boolean(commentWorkSecondaryForm[education.value])}
            onChange={() =>
              updateCommentWorkSecondaryForm({
                ...commentWorkSecondaryForm,
                [education.value]:
                  commentWorkSecondaryForm[education.value] === education.score
                    ? 0
                    : education.score,
              })
            }
          />
        ))}
      </div>
    </div>
  );
};
