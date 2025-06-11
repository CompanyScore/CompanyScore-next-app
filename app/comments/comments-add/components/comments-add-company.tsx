'use client';

import { useCommentFormStore2, useCompaniesStore } from '@/store';
import { Button, Select, Title } from '@/ui';
import { countriesWithCities } from '@/constants/countriesWithCities';
import { CreateCompanyModal } from '@/app/companies/modals';
import { OptionType } from '@/ui/select';

export const CommentsAddCompany = () => {
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

  const companyOptions = companies.map(company => ({
    label: company.name,
    value: company.id ?? '',
  }));

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
    <div>
      <Title size="3">Выбор компании</Title>
      <div className="mb-8">
        Укажите в какой стране и городе находится компания, про которую пойдет
        речь в отзыве
      </div>

      <div className="flex flex-row justify-between gap-20 w-full">
        <Title size="2" className="w-full max-w-48">
          Локация
        </Title>
        <div className="flex flex-wrap items-end gap-4 w-full">
          <div className="w-full max-w-96">
            <Title size="2">Страна</Title>
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
          </div>
          <div className="w-full max-w-96">
            <Title size="2">Город</Title>
            <Select
              placeholder="Город"
              isClearable
              isDisabled={!form.company.location.country}
              options={cityOptions}
              value={
                cityOptions.find(
                  opt => opt.value === form.company.location.city,
                ) ?? null
              }
              onChange={onSelectCity}
            />
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="flex justify-between gap-20 w-full">
        <Title size="2" className="w-full max-w-48">
          Работодатель
        </Title>
        <div className="flex flex-wrap items-end gap-4 w-full">
          <div className="w-full max-w-96">
            <Title size="2">Компания</Title>
            <Select
              placeholder="Компания"
              isClearable
              options={companyOptions}
              value={
                companyOptions.find(
                  opt => opt.value === form.company.companyId,
                ) ?? null
              }
              onChange={onSelectCompany}
            />
          </div>
          <div>
            <Button onClick={openModal}>Добавить компанию</Button>
          </div>
        </div>
      </div>
      <CreateCompanyModal onGetCreatedCompanyId={onGetCreatedCompanyId} />
    </div>
  );
};
