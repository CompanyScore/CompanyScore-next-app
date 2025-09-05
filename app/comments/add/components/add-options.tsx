import React, { useEffect, useMemo, useState } from 'react';
import { useCompanyStore } from '@/store/api';
import { usePositionsAndCategoriesApi } from '@/api';
import {
  useCommentForm,
  useCommentInternshipForm,
  useCommentInterviewForm,
  useCommentTaskForm,
  useCommentWorkPrimaryForm,
} from '@/store/form';
import { Checkbox, Radio } from '@/shared/ui';
import { Button, Card, Title } from '@/shared/ui';
import { OptionType, Select } from '@/shared/ui/select';
import { countriesWithCities } from '@/constants/countriesWithCities';
import { CreateCompanyModal } from '@/app/companies/modals';
import { IconChecklist } from '@tabler/icons-react';
import { IconMicrophone } from '@tabler/icons-react';
import { IconSchool } from '@tabler/icons-react';
import { IconCurrencyDollar } from '@tabler/icons-react';

export const AddOptions = () => {
  const { commentForm, updateCommentForm } = useCommentForm();

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

const Company = () => {
  const { commentForm, updateCommentForm } = useCommentForm();
  const { companies, getCompanies } = useCompanyStore();

  const countryOptions: OptionType[] = countriesWithCities.map(
    ({ label, value }) => ({ label, value }),
  );

  const cityOptions: OptionType[] =
    countriesWithCities
      .find(c => c.value === commentForm.companyLocation.country)
      ?.cities.map(city => ({ label: city, value: city })) || [];

  const companyOptions: OptionType[] = companies.map(c => ({
    label: c.name,
    value: c.id ?? '',
  }));

  const onSelectCountry = (val: string | null) => {
    const country = val ?? '';
    // Нужен label для бэка
    const countryLabel =
      countryOptions.find(o => o.value === country)?.label ?? '';
    updateCommentForm({
      ...commentForm,
      companyLocation: {
        ...commentForm.companyLocation,
        country,
        city: '', // сбрасываем город
      },
      companyId: '', // опционально: можно сбросить выбранную компанию
    });
    getCompanies({ selectedCountry: countryLabel });
  };

  const onSelectCity = (val: string | null) => {
    const city = val ?? '';
    updateCommentForm({
      ...commentForm,
      companyLocation: {
        ...commentForm.companyLocation,
        city,
      },
      // companyId: '' // при желании сбрасывать компанию при смене города
    });
    getCompanies({ selectedCity: city });
  };

  const onSelectCompany = (val: string | null) => {
    updateCommentForm({
      ...commentForm,
      companyId: val ?? '',
    });
  };

  const openModal = () => {
    const modal = document.getElementById(
      'create_company_modal',
    ) as HTMLInputElement | null;
    if (modal) modal.checked = true;
  };

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

  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg">Компания</p>

      <div className="flex gap-4">
        <Select
          placeholder="Страна"
          isClearable
          options={countryOptions}
          value={commentForm.companyLocation.country || null}
          onChange={onSelectCountry}
        />
        <Select
          placeholder="Город"
          isClearable
          isDisabled={!commentForm.companyLocation.country}
          options={cityOptions}
          value={commentForm.companyLocation.city || null}
          onChange={onSelectCity}
        />
      </div>

      <div className="flex gap-4">
        <Select
          placeholder="Компания"
          isClearable
          options={companyOptions}
          value={commentForm.companyId || null}
          onChange={onSelectCompany}
        />
        <Button onClick={openModal}>Добавить компанию</Button>
      </div>

      <CreateCompanyModal onGetCreatedCompanyId={onGetCreatedCompanyId} />
    </div>
  );
};

export const PositionAndWorkExperience = () => {
  const { commentForm, updateCommentForm } = useCommentForm();
  const { positions, categories, fetchData } = usePositionsAndCategoriesApi();

  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    commentForm.userPositionCategoryId || null,
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const categoryOptions = useMemo(
    () => categories.map(cat => ({ label: cat.title, value: cat.id })),
    [categories],
  );

  const filteredPositionOptions = useMemo(
    () =>
      positions
        .filter(
          p => !selectedCategoryId || p.category.id === selectedCategoryId,
        )
        .map(p => ({ label: p.title, value: p.id })),
    [positions, selectedCategoryId],
  );

  // Select ожидает строки
  const yearOptions = useMemo(
    () => [1, 2, 3].map(y => ({ label: `${y}`, value: `${y}` })),
    [],
  );

  const monthOptions = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => {
        const m = i + 1;
        return { label: `${m}`, value: `${m}` };
      }),
    [],
  );

  return (
    <div className="flex flex-col justify-between gap-6 w-full">
      <div className="flex gap-4">
        <div className="w-full">
          <p className="text-lg">Категория должности</p>
          <Select
            placeholder="Категория"
            isClearable
            options={categoryOptions}
            value={selectedCategoryId}
            onChange={id => {
              setSelectedCategoryId(id);
              updateCommentForm({
                ...commentForm,
                userPositionCategoryId: id ?? '',
                userPositionId: '', // сброс должности при смене категории
              });
            }}
          />
        </div>

        <div className="w-full">
          <p className="text-lg">Должность</p>
          <Select
            placeholder="Должность"
            isClearable
            isDisabled={!selectedCategoryId}
            options={filteredPositionOptions}
            value={commentForm.userPositionId || null}
            onChange={id =>
              updateCommentForm({
                ...commentForm,
                userPositionId: id ?? '',
              })
            }
          />
        </div>
      </div>

      <div>
        <p className="text-lg">
          Стаж работы до момента взаимодействия с компанией
        </p>
        <div className="flex gap-4 w-full">
          <div className="flex items-center gap-2 w-full">
            <Select
              placeholder="Лет опыта"
              isClearable
              options={yearOptions}
              value={
                commentForm.userGradeYears
                  ? String(commentForm.userGradeYears)
                  : null
              }
              onChange={val =>
                updateCommentForm({
                  ...commentForm,
                  userGradeYears: val ? Number(val) : 0,
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
                commentForm.userGradeMonths
                  ? String(commentForm.userGradeMonths)
                  : null
              }
              onChange={val =>
                updateCommentForm({
                  ...commentForm,
                  userGradeMonths: val ? Number(val) : 0,
                })
              }
            />
            <p>месяцев</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Forms = () => {
  const { commentTaskForm, updateCommentTaskForm } = useCommentTaskForm();
  const { commentInterviewForm, updateCommentInterviewForm } =
    useCommentInterviewForm();
  const { commentInternshipForm, updateCommentInternshipForm } =
    useCommentInternshipForm();
  const { commentWorkPrimaryForm, updateCommentWorkPrimaryForm } =
    useCommentWorkPrimaryForm();

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
              selected={commentTaskForm.isTask}
              onChange={() =>
                updateCommentTaskForm({
                  ...commentTaskForm,
                  isTask: !commentTaskForm.isTask,
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
              selected={commentInterviewForm.isInterview}
              onChange={() =>
                updateCommentInterviewForm({
                  ...commentInterviewForm,
                  isInterview: !commentInterviewForm.isInterview,
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
              selected={commentInternshipForm.isInternship}
              onChange={() =>
                updateCommentInternshipForm({
                  ...commentInternshipForm,
                  isInternship: !commentInternshipForm.isInternship,
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
              selected={commentWorkPrimaryForm.isWork}
              onChange={() =>
                updateCommentWorkPrimaryForm({
                  ...commentWorkPrimaryForm,
                  isWork: !commentWorkPrimaryForm.isWork,
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
