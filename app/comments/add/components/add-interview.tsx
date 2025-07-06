import React, { useEffect } from 'react';
import { interviewFormStore } from '@/store/form';
import { Checkbox, Radio, StarRating } from '@/shared';
import { Title } from '@/ui';
import { useInterviewStageApi } from '@/store/api';

export const AddInterview = () => {
  const { interviewForm, updateInterviewForm } = interviewFormStore();
  const { stages, getInterviewStages, loading } = useInterviewStageApi();

  useEffect(() => {
    getInterviewStages();
  }, [getInterviewStages]);

  const handleStageChange = (id: string) => {
    const updatedStages = interviewForm.stages.includes(id)
      ? interviewForm.stages.filter(stageId => stageId !== id)
      : [...interviewForm.stages, id];

    updateInterviewForm({
      ...interviewForm,
      stages: updatedStages,
    });
  };

  return (
    <div className="flex flex-col gap-6 max-w-[900px] w-full m-auto">
      <Title>Оцените собеседование</Title>
      <div className="flex flex-col gap-4 w-full m-auto">
        <p>Насколько описание вакансии соответствовало этой позиции?</p>
        <StarRating
          value={interviewForm.correspondedPosition}
          onChange={val =>
            updateInterviewForm({
              ...interviewForm,
              correspondedPosition: Number(val),
            })
          }
        />

        <p>Насколько чётко и грамотно были организованы этапы собеседования?</p>
        <StarRating
          value={interviewForm.clearlyStages}
          onChange={val =>
            updateInterviewForm({
              ...interviewForm,
              clearlyStages: Number(val),
            })
          }
        />

        <p>
          Насколько вежливо и уважительно с вами общались представители
          компании?
        </p>
        <StarRating
          value={interviewForm.talkedPolitely}
          onChange={val =>
            updateInterviewForm({
              ...interviewForm,
              talkedPolitely: Number(val),
            })
          }
        />

        <p>
          Насколько вопросы на собеседовании соответствовали должности и
          предполагаемым задачам?
        </p>
        <StarRating
          value={interviewForm.realWork}
          onChange={val =>
            updateInterviewForm({
              ...interviewForm,
              realWork: Number(val),
            })
          }
        />

        <p>
          Какие этапы были в вашем собеседовании? (отметьте всё, что применимо)
        </p>

        <div className="flex flex-col gap-2">
          {loading ? (
            <p>Загрузка...</p>
          ) : (
            stages.map(stage => (
              <Checkbox
                key={stage.id}
                value={stage.id}
                label={stage.label}
                selected={interviewForm.stages.includes(stage.id)}
                onChange={() => handleStageChange(stage.id)}
              />
            ))
          )}
        </div>

        <p>
          Сколько времени занял весь процесс собеседований — от подачи заявки до
          финального ответа?
        </p>

        <Radio
          options={[
            { label: 'Менее 3 дней', value: 1000 },
            { label: '3-7 дней', value: 750 },
            {
              label: '1-2 недели',
              value: 500,
            },
            {
              label: 'Около месяца',
              value: 250,
            },
            { label: 'Более 2 месяцев', value: 0 },
          ]}
          selectedValue={interviewForm.interviewTime}
          onChange={val =>
            updateInterviewForm({
              ...interviewForm,
              interviewTime: Number(val),
            })
          }
          className="flex flex-col"
        />

        <p>Была ли обратная связь после интервью?</p>
        <Radio
          options={[
            { label: 'Нет', value: 0 },
            { label: 'Шаблонный ответ', value: 500 },
            {
              label: 'Развернутый ответ',
              value: 1000,
            },
          ]}
          selectedValue={interviewForm.feedback}
          onChange={val =>
            updateInterviewForm({
              ...interviewForm,
              feedback: Number(val),
            })
          }
        />
      </div>
    </div>
  );
};
