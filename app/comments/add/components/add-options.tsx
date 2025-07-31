import React, { useEffect, useMemo, useState } from 'react';
import {
  useCompanyStore,
  usePositionApi,
  usePositionCategoryApi,
} from '@/store/api';
import {
  useCommentForm,
  useCommentInternshipForm,
  useCommentInterviewForm,
  useCommentTaskForm,
  useCommentWorkPrimaryForm,
} from '@/store/form';
import { Checkbox, Radio } from '@/shared';
import { Button, Card, Title } from '@/ui';
import { OptionType, Select } from '@/ui/select';
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

const PositionAndWorkExperience = () => {
  const { commentForm, updateCommentForm } = useCommentForm();
  const { positions, getPositions } = usePositionApi();
  const { categories, getCategories } = usePositionCategoryApi();

  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    commentForm.userPositionCategoryId || null,
  );

  useEffect(() => {
    getPositions();
    getCategories();
  }, [getPositions, getCategories]);

  const categoryOptions = useMemo(() => {
    return categories.map(cat => ({
      label: cat.title,
      value: cat.id,
    }));
  }, [categories]);

  const filteredPositionOptions = useMemo(() => {
    return positions
      .filter(
        pos => pos.category.id === selectedCategoryId || !selectedCategoryId,
      )
      .map(pos => ({
        label: pos.title,
        value: pos.id,
      }));
  }, [positions, selectedCategoryId]);

  const yearOptions = [1, 2, 3].map(y => ({ label: `${y}`, value: y }));
  const monthOptions = Array.from({ length: 12 }, (_, i) => ({
    label: `${i + 1}`,
    value: i + 1,
  }));

  return (
    <div className="flex flex-col justify-between gap-6 w-full">
      <div className="flex gap-4">
        <div className="w-full">
          <p className="text-lg">Категория должности</p>
          <Select
            placeholder="Категория"
            isClearable
            options={categoryOptions}
            value={
              categoryOptions.find(opt => opt.value === selectedCategoryId) ??
              null
            }
            onChange={option => {
              const categoryId = option?.value || null;
              setSelectedCategoryId(String(categoryId));
              updateCommentForm({
                ...commentForm,
                userPositionCategoryId: String(categoryId) || '',
                userPositionId: '',
              });
            }}
          />
        </div>

        <div className="w-full">
          <p className="text-lg">Должность</p>
          <Select
            placeholder="Должность"
            isClearable
            isDisabled={!selectedCategoryId} // 🔒 блокируем если не выбрана категория
            options={filteredPositionOptions}
            value={
              filteredPositionOptions.find(
                opt => opt.value === commentForm.userPositionId,
              ) ?? null
            }
            onChange={option =>
              updateCommentForm({
                ...commentForm,
                userPositionId: option?.value ? String(option.value) : '',
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
                yearOptions.find(
                  opt => opt.value === commentForm.userGradeYears,
                ) ?? null
              }
              onChange={val =>
                updateCommentForm({
                  ...commentForm,
                  userGradeYears: Number(val?.value),
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
                monthOptions.find(
                  opt => opt.value === commentForm.userGradeMonths,
                ) ?? null
              }
              onChange={val =>
                updateCommentForm({
                  ...commentForm,
                  userGradeMonths: Number(val?.value),
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

export default PositionAndWorkExperience;

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
