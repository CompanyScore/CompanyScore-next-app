import { Checkbox, Radio, StarRating } from '@/shared';
import { Title } from '@/ui';
import React from 'react';
import { useCommentFormStore2 } from '@/store';

export const CommentsAddWork = () => {
  const { form, updateForm } = useCommentFormStore2();

  const handleCheckboxPartnership = () => {
    updateForm({
      work: {
        ...form.work,
        rating: {
          ...form.work.rating,
          partnership: !form.work.rating.partnership,
        },
      },
    });
  };

  const handleCheckboxRecycling = () => {
    updateForm({
      work: {
        ...form.work,
        other: {
          ...form.work.other,
          recycling: !form.work.other.recycling,
        },
      },
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <Title size="2" position="center">
        Оцените работу
      </Title>

      <div className="flex flex-col gap-4 w-full m-auto">
        <div className="flex justify-content-between flex-wrap">
          <div className="flex flex-col gap-4 m-auto">
            <div className="flex flex-col gap-2 border-b-2 border-gray-300 pb-4">
              <Title size="2">Оцените руководство</Title>
              <StarRating
                value={form.work.rating.management}
                onChange={val =>
                  updateForm({
                    work: {
                      ...form.work,
                      rating: {
                        ...form.work.rating,
                        management: val,
                      },
                    },
                  })
                }
              />
            </div>

            <div className="flex flex-col gap-2 border-b-2 border-gray-300 pb-4">
              <Title size="1">Оцените команду / коллектив</Title>
              <StarRating
                value={form.work.rating.team}
                onChange={val =>
                  updateForm({
                    work: {
                      ...form.work,
                      rating: {
                        ...form.work.rating,
                        team: val,
                      },
                    },
                  })
                }
              />
            </div>

            <div className="flex flex-col gap-2 border-b-2 border-gray-300 pb-4">
              <Title size="2">Оцените проект / задачи</Title>
              <StarRating
                value={form.work.rating.project}
                onChange={val =>
                  updateForm({
                    work: {
                      ...form.work,
                      rating: {
                        ...form.work.rating,
                        project: val,
                      },
                    },
                  })
                }
              />
            </div>

            <div className="flex flex-col gap-2 border-b-2 border-gray-300 pb-4">
              <Title size="2">Оцените используемые технологии</Title>
              <StarRating
                value={form.work.rating.stack}
                onChange={val =>
                  updateForm({
                    work: {
                      ...form.work,
                      rating: {
                        ...form.work.rating,
                        stack: val,
                      },
                    },
                  })
                }
              />
            </div>

            <div className="flex flex-col gap-2 border-b-2 border-gray-300 pb-4">
              <Title size="2">Оцените возможности для обучения</Title>
              <StarRating
                value={form.work.other.education}
                onChange={val =>
                  updateForm({
                    work: {
                      ...form.work,
                      other: {
                        ...form.work.other,
                        education: val,
                      },
                    },
                  })
                }
              />
            </div>

            <div className="flex flex-col gap-2 border-b-2 border-gray-300 pb-4">
              <Title size="2">Оцените корпоративные мероприятия</Title>
              <StarRating
                value={form.work.other.events}
                onChange={val =>
                  updateForm({
                    work: {
                      ...form.work,
                      other: {
                        ...form.work.other,
                        events: val,
                      },
                    },
                  })
                }
              />
            </div>

            <Checkbox
              label="Есть ли переработки в компании?"
              value="partnership"
              selected={form.work.other.recycling}
              onChange={handleCheckboxRecycling}
            />

            <Checkbox
              label="Предлагается ли партнерство в компании?"
              value="partnership"
              selected={form.work.rating.partnership}
              onChange={handleCheckboxPartnership}
            />

            <Title size="2">Проводятся ли performance review?</Title>
            <Radio
              options={[
                { label: 'Нет', value: 0 },
                { label: 'Полгода', value: 2 },
                { label: 'Год', value: 5 },
              ]}
              selectedValue={form.work.rating.performance}
              onChange={val =>
                updateForm({
                  work: {
                    ...form.work,
                    rating: {
                      ...form.work.rating,
                      performance: Number(val),
                    },
                  },
                })
              }
            />

            <Title size="2">Выберите возможность формата работы</Title>
            <Radio
              options={[
                { label: 'Офис', value: 0 },
                { label: 'Гибрид', value: 2 },
                { label: 'Онлайн', value: 5 },
              ]}
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
          </div>
        </div>
      </div>
    </div>
  );
};
