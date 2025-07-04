import React from 'react';
import { useCompaniesStore } from '@/store';
import {
  commentFormStore,
  internshipFormStore,
  interviewFormStore,
  taskFormStore,
  workFormStore,
} from '@/form';
import { positions } from '@/constants';
import { Checkbox, Radio } from '@/shared';
import { Button, Card, Title } from '@/ui';
import { OptionType, Select } from '@/ui/select';
import { countriesWithCities } from '@/constants/countriesWithCities';
import { CreateCompanyModal } from '@/app/companies/modals';
import { IconChecklist } from '@tabler/icons-react';
import { IconMicrophone } from '@tabler/icons-react';
import { IconSchool } from '@tabler/icons-react';
import { IconCurrencyDollar } from '@tabler/icons-react';

export const CommentsAddOptions = () => {
  const { commentForm, updateCommentForm } = commentFormStore();

  return (
    <div className="flex flex-col gap-6 m-auto w-full max-w-[900px]">
      <Title>Оставить отзыв</Title>

      <Company />
      <PositionAndWorkExperience />

      <div className="divider before:bg-black after:bg-black"></div>

      <p className="text-lg">Желаете оставить отзыв анонимно?</p>

      <Radio
        options={[
          {
            label: 'Нет',
            value: 0,
          },
          {
            label: 'Да',
            value: 1,
          },
        ]}
        selectedValue={commentForm.isAnonym}
        onChange={val =>
          updateCommentForm({
            ...commentForm,
            isAnonym: Number(val),
          })
        }
      />

      <div className="divider before:bg-black after:bg-black"></div>

      <Forms />
    </div>
  );
};

const PositionAndWorkExperience = () => {
  const { commentForm, updateCommentForm } = commentFormStore();

  const positionOptions: OptionType[] = positions.map(pos => ({
    label: pos,
    value: pos,
  }));

  const yearOptions = [1, 2, 3].map(y => ({ label: `${y}`, value: y }));

  const monthOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(y => ({
    label: `${y}`,
    value: y,
  }));

  return (
    <div className="flex flex-col justify-between gap-4 w-full">
      <p className="text-lg">Должность</p>
      <Select
        placeholder="Должность"
        isClearable
        options={positionOptions}
        value={
          positionOptions.find(opt => opt.value === commentForm.userPosition) ??
          null
        }
        onChange={option =>
          updateCommentForm({
            ...commentForm,
            userPosition: option?.value ? String(option.value) : '',
          })
        }
      />

      <p>Стаж работы до момента взаимодействия с компанией</p>
      <div className="flex gap-4 w-full">
        <div className="flex items-center gap-2 w-full">
          <Select
            placeholder="Лет опыта"
            isClearable
            options={yearOptions}
            value={
              yearOptions.find(
                opt => opt.value === commentForm.userGrade.years,
              ) ?? null
            }
            onChange={val =>
              updateCommentForm({
                ...commentForm,
                userGrade: {
                  ...commentForm.userGrade,
                  years: Number(val),
                },
              })
            }
          />
          <p>лет</p>
        </div>
        <div className="flex items-center gap-2 w-full">
          <Select
            placeholder="Месяцев опыта"
            isClearable
            options={monthOptions}
            value={
              yearOptions.find(
                opt => opt.value === commentForm.userGrade.years,
              ) ?? null
            }
            onChange={val =>
              updateCommentForm({
                ...commentForm,
                userGrade: {
                  ...commentForm.userGrade,
                  months: Number(val),
                },
              })
            }
          />
          <p>месяцев</p>
        </div>
      </div>
    </div>
  );
};

const Company = () => {
  const { commentForm, updateCommentForm } = commentFormStore();
  const { companies, getCompanies } = useCompaniesStore();

  const countryOptions: OptionType[] = countriesWithCities.map(
    ({ label, value }) => ({
      label,
      value,
    }),
  );

  const cityOptions: OptionType[] =
    countriesWithCities
      .find(c => c.value === commentForm.companyLocation.country)
      ?.cities.map(city => ({ label: city, value: city })) || [];

  const onSelectCountry = (option: OptionType | null) => {
    const value = option?.value ? String(option.value) : '';
    const label = option?.label || '';
    updateCommentForm({
      ...commentForm,
      companyLocation: {
        ...commentForm.companyLocation,
        country: value,
        city: '',
      },
    });
    getCompanies({ selectedCountry: label });
  };

  const onSelectCity = (option: OptionType | null) => {
    const value = option?.value ? String(option.value) : '';
    updateCommentForm({
      ...commentForm,
      companyLocation: {
        ...commentForm.companyLocation,
        city: value,
      },
    });
    getCompanies({ selectedCity: value });
  };

  const companyOptions = companies.map(company => ({
    label: company.name,
    value: company.id ?? '',
  }));

  const onGetCreatedCompanyId = async (
    companyId: string,
    country: string,
    city: string,
  ) => {
    await getCompanies({});
    updateCommentForm({
      ...commentForm,
      companyId,
      companyLocation: { country, city },
    });
  };

  const openModal = () => {
    const modal = document.getElementById(
      'create_company_modal',
    ) as HTMLInputElement;
    if (modal) modal.checked = true;
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg">Компания</p>
      <div className="flex gap-4">
        <Select
          placeholder="Страна"
          isClearable
          options={countryOptions}
          value={
            countryOptions.find(
              opt => opt.value === commentForm.companyLocation.country,
            ) ?? null
          }
          onChange={onSelectCountry}
        />
        <Select
          placeholder="Город"
          isClearable
          isDisabled={!commentForm.companyLocation.country}
          options={cityOptions}
          value={
            cityOptions.find(
              opt => opt.value === commentForm.companyLocation.city,
            ) ?? null
          }
          onChange={onSelectCity}
        />
      </div>
      <div className="flex gap-4">
        <Select
          placeholder="Компания"
          isClearable
          options={companyOptions}
          value={
            companyOptions.find(opt => opt.value === commentForm.companyId) ??
            null
          }
          onChange={option =>
            updateCommentForm({
              ...commentForm,
              companyId: option?.value ? String(option.value) : '',
            })
          }
        />
        <Button onClick={openModal}>Добавить компанию</Button>
      </div>
      <CreateCompanyModal onGetCreatedCompanyId={onGetCreatedCompanyId} />
    </div>
  );
};

const Forms = () => {
  const { taskForm, updateTaskForm } = taskFormStore();
  const { interviewForm, updateInterviewForm } = interviewFormStore();
  const { internshipForm, updateInternshipForm } = internshipFormStore();
  const { workForm, updateWorkForm } = workFormStore();

  return (
    <div className="flex flex-col gap-6 m-auto w-full">
      <h3 className="text-lg">Выберите форму</h3>
      <div className="flex flex-wrap w-full gap-10">
        <Card className="flex flex-col gap-4 max-w-96 w-full">
          <div className="flex justify-between">
            <div className="flex items-center">
              <IconChecklist stroke={2} className="text-primary w-10 h-10" />
              <h3 className="text-lg">Техническое задание</h3>
            </div>
            <Checkbox
              label=""
              value="task"
              selected={taskForm.isTask}
              onChange={() =>
                updateTaskForm({
                  ...taskForm,
                  isTask: !taskForm.isTask,
                })
              }
            />
          </div>
          <div>
            Оцените опыт прохождения тестового или технического задания.
            Расскажите, насколько оно соответствовало указанной вакансии,
            сколько заняло по времени и т.д.
          </div>
        </Card>
        <Card className="flex flex-col gap-4 max-w-96 w-full">
          <div className="flex justify-between">
            <div className="flex items-center">
              <IconMicrophone stroke={2} className="text-primary w-10 h-10" />
              <h3 className="text-lg">Собеседование</h3>
            </div>
            <Checkbox
              label=""
              value="interview"
              selected={interviewForm.isInterview}
              onChange={() =>
                updateInterviewForm({
                  ...interviewForm,
                  isInterview: !interviewForm.isInterview,
                })
              }
            />
          </div>
          <div>
            Оцените опыт прохождения собеседования. Поделитесь, получили ли вы
            предложение о работе, насколько собеседование отвечало вашим
            ожиданиям о вакансии.
          </div>
        </Card>
        <Card className="flex flex-col gap-4 max-w-96 w-full">
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <IconSchool stroke={2} className="text-primary w-10 h-10" />
              <h3 className="text-lg">Стажировка</h3>
            </div>
            <Checkbox
              label=""
              value="intern"
              selected={internshipForm.isInternship}
              onChange={() =>
                updateInternshipForm({
                  ...internshipForm,
                  isInternship: !internshipForm.isInternship,
                })
              }
            />
          </div>
          <div>
            Оцените стажировку. Расскажите, была ли она оплачиваемой, помогла ли
            найти работу, насколько полезны были задачи и был ли у вас
            профессиональный рост.
          </div>
        </Card>
        <Card className="flex flex-col gap-4 max-w-96 w-full">
          <div className="flex justify-between">
            <div className="flex items-center">
              <IconCurrencyDollar
                stroke={2}
                className="text-primary w-10 h-10"
              />
              <h3 className="text-lg">Опыт работы</h3>
            </div>
            <Checkbox
              label=""
              value="work"
              selected={workForm.isWork}
              onChange={() =>
                updateWorkForm({
                  ...workForm,
                  isWork: !workForm.isWork,
                })
              }
            />
          </div>
          <div>
            Оцените работу в компании. Расскажите про условия работы, процессы
            управления корпоративную культуру, уровень зарплаты, социальный
            пакет, и бонусы.
          </div>
        </Card>
      </div>
    </div>
  );
};
