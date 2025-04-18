import { Checkbox, Radio, StarRating } from "@/shared";
import { Input, Title } from "@/ui";
import React from "react";
import { useCommentFormStore } from "@/store";

export const CommentsAddWork = () => {
  const { form, updateForm } = useCommentFormStore();

  const handleCheckboxChange = () => {
    updateForm({ work: { ...form.work, isWork: !form.work.isWork } });
  };

  return (
    <div className="flex flex-col gap-6">
      <Title size="2" position="center">
        Вы работали / работаете в этой компании?
      </Title>

      <div className="flex flex-col gap-4 w-full m-auto">
        <Checkbox
          label="Да, я работаю или работал в компании"
          value="work"
          selected={form.work.isWork}
          onChange={handleCheckboxChange}
        />

        {form.work.isWork && (
          <div className="flex justify-content-between flex-wrap">
            <div className="flex flex-col gap-4 m-auto">
              <div className="flex flex-col gap-2 border-b-2 border-gray-300 pb-4">
                <Title size="2">Оцените руководство</Title>
                <StarRating
                  value={form.work.rating.management}
                  onChange={(val) =>
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
                  onChange={(val) =>
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
                  onChange={(val) =>
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
                  onChange={(val) =>
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
                  onChange={(val) =>
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
                  onChange={(val) =>
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

              <Title size="2">Выберите возможность формата работы</Title>
              <Radio
                options={[
                  { label: "Офис", value: 0 },
                  { label: "Гибрид", value: 2 },
                  { label: "Онлайн", value: 5 },
                ]}
                selectedValue={form.work.rating.workFormat}
                onChange={(val) =>
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

            <div className="flex flex-col gap-4 m-auto">
              <Title size="2">Уровень зарплаты</Title>
              <Input
                type="number"
                value={form.work.finance.salary}
                onChange={(val) =>
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
                onChange={(val) =>
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
                onChange={(val) =>
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
                onChange={(val) =>
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
                onChange={(val) =>
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
                onChange={(val) =>
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
        )}
      </div>
    </div>
  );
};
