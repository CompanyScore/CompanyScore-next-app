'use client';

import { useCommentFormStore, useCompaniesStore } from '@/store';
import { Button, Select, Title } from '@/ui';
import { countriesWithCities } from '@/constants/countriesWithCities';
import { CreateCompanyModal } from '@/app/companies/modals';
import { OptionType } from '@/ui/select';

export const CommentsAddCompany = () => {
  const { form, updateForm } = useCommentFormStore();
  const { companies, getCompanies } = useCompaniesStore();

  const countryOptions: OptionType[] = countriesWithCities.map(
    ({ label, value }) => ({
      label,
      value,
    }),
  );

  const cityOptions: OptionType[] =
    countriesWithCities
      .find(c => c.value === form.location.country)
      ?.cities.map(city => ({ label: city, value: city })) || [];

  const companyOptions = companies.map(company => ({
    label: company.name,
    value: company.id ?? '', // теперь точно string
  }));

  const onSelectCountry = (option: OptionType | null) => {
    const value = option?.value ? String(option.value) : '';
    const label = option?.label || '';
    updateForm({
      location: {
        ...form.location,
        country: value,
        city: '',
      },
    });
    getCompanies({ selectedCountry: label });
  };

  const onSelectCity = (option: OptionType | null) => {
    const value = option?.value ? String(option.value) : '';
    updateForm({
      location: {
        ...form.location,
        city: value,
      },
    });
    getCompanies({ selectedCity: value });
  };

  const onSelectCompany = (option: OptionType | null) => {
    updateForm({
      companyId: option?.value ? String(option.value) : '',
    });
  };

  const onGetCreatedCompanyId = async (
    companyId: string,
    country: string,
    city: string,
  ) => {
    await getCompanies({});
    updateForm({
      companyId,
      location: {
        country,
        city,
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
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-4 w-full max-w-xl m-auto">
        <Title size="2" position="center">
          Выберите локацию и компанию
        </Title>

        <Select
          placeholder="Страна"
          isClearable
          options={countryOptions}
          value={
            countryOptions.find(opt => opt.value === form.location.country) ??
            null
          }
          onChange={onSelectCountry}
        />

        <Select
          placeholder="Город"
          isClearable
          isDisabled={!form.location.country}
          options={cityOptions}
          value={
            cityOptions.find(opt => opt.value === form.location.city) ?? null
          }
          onChange={onSelectCity}
        />

        <Select
          placeholder="Компания"
          isClearable
          options={companyOptions}
          value={
            companyOptions.find(opt => opt.value === form.companyId) ?? null
          }
          onChange={onSelectCompany}
        />

        <div className="divider"></div>

        <Title size="2" position="center">
          Если компании нет в списке, предложите ее
        </Title>

        <Button onClick={openModal}>Предложить компанию</Button>
      </div>

      <CreateCompanyModal onGetCreatedCompanyId={onGetCreatedCompanyId} />
    </div>
  );
};
