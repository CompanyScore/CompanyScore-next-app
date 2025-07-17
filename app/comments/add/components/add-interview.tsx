import React from 'react';
import { useCommentInterviewForm } from '@/store/form';
import { Checkbox, Radio, StarRating } from '@/shared';
import { Title } from '@/ui';
import { CommentInterviewFormType } from '@/store/form/comment-interview.form';

export const AddInterview = () => {
  const { commentInterviewForm, updateCommentInterviewForm } =
    useCommentInterviewForm();

  const stages: {
    label: string;
    value: keyof CommentInterviewFormType;
    score: number;
  }[] = [
    {
      label: 'Видео презентация',
      value: 'isVideoStage',
      score: 100,
    },
    {
      label: 'Интервью с HR',
      value: 'isHrStage',
      score: 150,
    },
    {
      label: 'Тест',
      value: 'isTestStage',
      score: 200,
    },
    {
      label: 'Техническое задание',
      value: 'isTaskStage',
      score: 250,
    },
    {
      label: 'Техническое интервью',
      value: 'isTechStage',
      score: 300,
    },
    {
      label: 'Интервью с командой',
      value: 'isTeamStage',
      score: 200,
    },
    {
      label: 'Финальное интервью',
      value: 'isFinalStage',
      score: 300,
    },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-[900px] w-full m-auto">
      <Title>Оцените собеседование</Title>
      <div className="flex flex-col gap-4 w-full m-auto">
        <p>Насколько описание вакансии соответствовало этой позиции?</p>
        <StarRating
          value={commentInterviewForm.correspondedPosition}
          onChange={val =>
            updateCommentInterviewForm({
              ...commentInterviewForm,
              correspondedPosition: Number(val),
            })
          }
        />

        <p>Насколько чётко и грамотно были организованы этапы собеседования?</p>
        <StarRating
          value={commentInterviewForm.clearlyStages}
          onChange={val =>
            updateCommentInterviewForm({
              ...commentInterviewForm,
              clearlyStages: Number(val),
            })
          }
        />

        <p>
          Насколько вежливо и уважительно с вами общались представители
          компании?
        </p>
        <StarRating
          value={commentInterviewForm.talkedPolitely}
          onChange={val =>
            updateCommentInterviewForm({
              ...commentInterviewForm,
              talkedPolitely: Number(val),
            })
          }
        />

        <p>
          Насколько вопросы на собеседовании соответствовали должности и
          предполагаемым задачам?
        </p>
        <StarRating
          value={commentInterviewForm.realWork}
          onChange={val =>
            updateCommentInterviewForm({
              ...commentInterviewForm,
              realWork: Number(val),
            })
          }
        />

        <p>
          Какие этапы были в вашем собеседовании? (отметьте всё, что применимо)
        </p>

        <div className="flex flex-col gap-2">
          {stages.map(stage => (
            <Checkbox
              key={stage.label}
              value={stage.value}
              label={stage.label}
              selected={Boolean(commentInterviewForm[stage.value])}
              onChange={() =>
                updateCommentInterviewForm({
                  ...commentInterviewForm,
                  [stage.value]:
                    commentInterviewForm[stage.value] === stage.score
                      ? 0
                      : stage.score,
                })
              }
            />
          ))}
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
          selectedValue={commentInterviewForm.interviewTime}
          onChange={val =>
            updateCommentInterviewForm({
              ...commentInterviewForm,
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
          selectedValue={commentInterviewForm.feedback}
          onChange={val =>
            updateCommentInterviewForm({
              ...commentInterviewForm,
              feedback: Number(val),
            })
          }
        />
      </div>
    </div>
  );
};
