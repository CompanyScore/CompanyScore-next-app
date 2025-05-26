import { useCommentFormStore, useCompaniesStore } from '@/store';
import { Button, Dropdown, Title } from '@/ui';
import { countriesWithCities } from '@/constants/countriesWithCities'; // путь зависит от твоей структуры
import { CreateCompanyModal } from '@/app/companies/modals';

export const CommentsAddCompany = () => {
  const { form, updateForm } = useCommentFormStore();
  const { companies, getCompanies } = useCompaniesStore();

  const onSelectCountry = (countryCode: string) => {
    const country = countriesWithCities.find(c => c.value === countryCode);
    updateForm({
      location: {
        ...form.location,
        country: country?.value || '',
        city: '', // очищаем город при смене страны
      },
    });
    getCompanies({ selectedCountry: country?.label });
  };

  const onSelectCity = (city: string) => {
    updateForm({
      location: {
        ...form.location,
        city,
      },
    });

    getCompanies({ selectedCity: city });
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
        country: country,
        city: city,
      },
    });
  };

  const onSelectCompany = (companyId: string) => {
    updateForm({
      companyId,
    });
  };

  const countryOptions = countriesWithCities.map(({ label, value }) => ({
    label,
    value,
  }));

  const cityOptions =
    countriesWithCities.find(c => c.value === form.location.country)?.cities ||
    [];

  const openModal = () => {
    const modal = document.getElementById(
      'create_company_modal',
    ) as HTMLInputElement;
    if (modal) {
      modal.checked = true;
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-4 w-full max-w-xl m-auto">
        <Title size="2" position="center">
          Выберите локацию и компанию
        </Title>

        <Dropdown
          text="Страна"
          options={countryOptions}
          isFirstDisabled={true}
          selectedValue={form.location.country}
          onSelect={onSelectCountry}
          width="100%"
        />

        <Dropdown
          text="Город"
          options={cityOptions}
          isFirstDisabled={true}
          selectedValue={form.location.city}
          onSelect={onSelectCity}
          width="100%"
        />

        <Dropdown
          text="Компания"
          options={companies.map(company => ({
            label: company.name,
            value: company.id,
          }))}
          isFirstDisabled={true}
          selectedValue={form.companyId}
          onSelect={onSelectCompany}
          width="100%"
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
