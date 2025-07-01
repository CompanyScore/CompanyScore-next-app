import { Checkbox } from '@/shared';
import React from 'react';
import { useCommentFormStore2, useCompaniesStore } from '@/store';
import { Button, Card, Title } from '@/ui';
import { positions } from '@/constants';
import { OptionType, Select } from '@/ui/select';
import { countriesWithCities } from '@/constants/countriesWithCities';
import { CreateCompanyModal } from '@/app/companies/modals';

export const CommentsAddOptions = () => {
  return (
    <div className="flex flex-col gap-6 m-auto w-full max-w-[900px]">
      <Title>Оставить отзыв</Title>

      <Company />
      <PositionAndWorkExperience />

      <div className="divider before:bg-black after:bg-black"></div>

      <p>Желаете оставить отзыв анонимно?</p>
      <div className="flex gap-4">
        <Checkbox
          label="Да"
          value="interview"
          selected={false} // Replace with actual state
          onChange={() => console.log('checkbox change')}
        />
        <Checkbox
          label="Нет"
          value="interview"
          selected={false} // Replace with actual state
          onChange={() => console.log('checkbox change')}
        />
      </div>

      <div className="divider before:bg-black after:bg-black"></div>

      <Forms />
    </div>
  );
};

const PositionAndWorkExperience = () => {
  const { form, updateForm } = useCommentFormStore2();

  const positionOptions: OptionType[] = positions.map(pos => ({
    label: pos,
    value: pos,
  }));

  const handlePositionChange = (option: OptionType | null) => {
    updateForm({
      userinfo: {
        ...form.userinfo,
        position: option?.value ? String(option.value) : '',
      },
    });
  };

  const handleYearChange = (years: number) => {
    updateForm({
      userinfo: {
        ...form.userinfo,
        grade: {
          ...form.userinfo.grade,
          years,
        },
      },
    });
  };

  const handleMonthChange = (months: number) => {
    updateForm({
      userinfo: {
        ...form.userinfo,
        grade: {
          ...form.userinfo.grade,
          months,
        },
      },
    });
  };

  const yearOptions = [1, 2, 3].map(y => ({ label: `${y}`, value: y }));
  const monthOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(y => ({
    label: `${y}`,
    value: y,
  }));

  return (
    <div className="flex flex-col justify-between gap-4 w-full">
      <p>Должность</p>
      <Select
        placeholder="Должность"
        isClearable
        options={positionOptions}
        value={
          positionOptions.find(opt => opt.value === form.userinfo.position) ??
          null
        }
        onChange={handlePositionChange}
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
                opt => opt.value === form.userinfo.grade.years,
              ) ?? null
            }
            onChange={val => handleYearChange(Number(val))}
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
                opt => opt.value === form.userinfo.grade.years,
              ) ?? null
            }
            onChange={val => handleMonthChange(Number(val))}
          />
          <p>месяцев</p>
        </div>
      </div>
    </div>
  );
};

const Company = () => {
  const { form, updateForm } = useCommentFormStore2();
  const { companies, getCompanies } = useCompaniesStore();

  const countryOptions: OptionType[] = countriesWithCities.map(
    ({ label, value }) => ({
      label,
      value,
    }),
  );

  const cityOptions: OptionType[] =
    countriesWithCities
      .find(c => c.value === form.company.location.country)
      ?.cities.map(city => ({ label: city, value: city })) || [];

  const onSelectCountry = (option: OptionType | null) => {
    const value = option?.value ? String(option.value) : '';
    const label = option?.label || '';
    updateForm({
      company: {
        ...form.company,
        location: {
          ...form.company.location,
          country: value,
          city: '',
        },
      },
    });
    getCompanies({ selectedCountry: label });
  };

  const onSelectCity = (option: OptionType | null) => {
    const value = option?.value ? String(option.value) : '';
    updateForm({
      company: {
        ...form.company,
        location: {
          ...form.company.location,
          city: value,
        },
      },
    });
    getCompanies({ selectedCity: value });
  };

  const companyOptions = companies.map(company => ({
    label: company.name,
    value: company.id ?? '',
  }));

  const onSelectCompany = (option: OptionType | null) => {
    updateForm({
      company: {
        ...form.company,
        companyId: option?.value ? String(option.value) : '',
      },
    });
  };

  const onGetCreatedCompanyId = async (
    companyId: string,
    country: string,
    city: string,
  ) => {
    await getCompanies({});
    updateForm({
      company: {
        companyId,
        location: { country, city },
      },
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
      <p>Компания</p>
      <div className="flex gap-4">
        <Select
          placeholder="Страна"
          isClearable
          options={countryOptions}
          value={
            countryOptions.find(
              opt => opt.value === form.company.location.country,
            ) ?? null
          }
          onChange={onSelectCountry}
        />
        <Select
          placeholder="Город"
          isClearable
          isDisabled={!form.company.location.country}
          options={cityOptions}
          value={
            cityOptions.find(opt => opt.value === form.company.location.city) ??
            null
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
            companyOptions.find(opt => opt.value === form.company.companyId) ??
            null
          }
          onChange={onSelectCompany}
        />
        <Button onClick={openModal}>Добавить компанию</Button>
      </div>
      <CreateCompanyModal onGetCreatedCompanyId={onGetCreatedCompanyId} />
    </div>
  );
};

const Forms = () => {
  const { form, updateForm } = useCommentFormStore2();

  const handleCheckboxTask = () => {
    updateForm({
      task: {
        ...form.task,
        isTask: !form.task.isTask,
      },
    });
  };

  const handleCheckboxInterview = () => {
    updateForm({
      interview: {
        ...form.interview,
        isInterview: !form.interview.isInterview,
      },
    });
  };

  const handleCheckboxIntern = () => {
    updateForm({
      intern: {
        ...form.intern,
        isIntern: !form.intern.isIntern,
      },
    });
  };

  const handleCheckboxWork = () => {
    updateForm({
      work: {
        ...form.work,
        isWork: !form.work.isWork,
      },
    });
  };
  return (
    <div className="flex flex-col gap-6 m-auto w-full">
      <h3>Выберите форму</h3>
      <div className="flex flex-wrap w-full gap-10">
        <Card className="flex flex-col gap-4 max-w-96 w-full">
          <div className="flex justify-between">
            <div>icon</div>
            <Checkbox
              label=""
              value="task"
              selected={form.task.isTask}
              onChange={handleCheckboxTask}
            />
          </div>
          <h3>Рассказать про тестовое задание</h3>
          <div>
            Оцените опыт прохождения тестового или технического задания.
            Расскажите, насколько оно соответствовало указанной вакансии,
            сколько заняло по времени и т.д.
          </div>
        </Card>
        <Card className="flex flex-col gap-4 max-w-96 w-full">
          <div className="flex justify-between">
            <div>icon</div>
            <Checkbox
              label=""
              value="interview"
              selected={form.interview.isInterview}
              onChange={handleCheckboxInterview}
            />
          </div>
          <h3>Рассказать про собеседование</h3>
          <div>
            Оцените опыт прохождения собеседования. Поделитесь, получили ли вы
            предложение о работе, насколько собеседование отвечало вашим
            ожиданиям о вакансии.
          </div>
        </Card>
        <Card className="flex flex-col gap-4 max-w-96 w-full">
          <div className="flex justify-between">
            <div>icon</div>
            <Checkbox
              label=""
              value="intern"
              selected={form.intern.isIntern}
              onChange={handleCheckboxIntern}
            />
          </div>
          <h3>Рассказать про стажировку</h3>
          <div>
            Оцените стажировку. Расскажите, была ли она оплачиваемой, помогла ли
            найти работу, насколько полезны были задачи и был ли у вас
            профессиональный рост.
          </div>
        </Card>
        <Card className="flex flex-col gap-4 max-w-96 w-full">
          <div className="flex justify-between">
            <div>icon</div>
            <Checkbox
              label=""
              value="work"
              selected={form.work.isWork}
              onChange={handleCheckboxWork}
            />
          </div>
          <h3>Рассказать про опыт работы</h3>
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
