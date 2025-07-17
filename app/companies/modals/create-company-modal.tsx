'use client';

import { useCompanyStore } from '@/store/api';
import { Button, Select, Input, Modal, Title, useToast } from '@/ui';
import { useEffect, useState } from 'react';
import { OptionType } from '@/ui/select';
import { useCountriesAndCitiesStore } from '@/store/api/countries-cities.api';

type Props = {
  onGetCreatedCompanyId?: (
    companyId: string,
    country: string,
    city: string,
  ) => void;
};

export function CreateCompanyModal({ onGetCreatedCompanyId }: Props) {
  const toast = useToast();
  const { getCompanies, createCompany } = useCompanyStore();
  const { getCountriesAndCities, countryAndCity } =
    useCountriesAndCitiesStore();

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedName, setSelectedName] = useState('');

  useEffect(() => {
    getCountriesAndCities();
  }, [getCountriesAndCities]);

  const closeModal = () => {
    const modal = document.getElementById(
      'create_company_modal',
    ) as HTMLInputElement;
    if (modal) modal.checked = false;
  };

  const resetForm = () => {
    setSelectedCountry('');
    setSelectedCity('');
    setSelectedName('');
  };

  const countryOptions: OptionType[] = countryAndCity.map(({ name, id }) => ({
    label: name,
    value: id,
  }));

  const cityOptions: OptionType[] =
    countryAndCity
      .find(c => c.id === selectedCountry)
      ?.cities.map(({ name }) => ({
        label: name,
        value: name,
      })) || [];

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedCountry || !selectedCity || !selectedName) {
      toast.error('Заполните все поля');
      return;
    }

    try {
      const companyId = await createCompany({
        country: selectedCountry,
        city: selectedCity,
        name: selectedName,
      });

      if (companyId && onGetCreatedCompanyId) {
        onGetCreatedCompanyId(companyId, selectedCountry, selectedCity);
      }

      toast.success('Компания создана');
      getCompanies({});
      resetForm();
      closeModal();
    } catch {
      const error = useCompanyStore.getState().error;
      toast.error(error || 'Ошибка');
      resetForm();
      closeModal();
    }
  };

  return (
    <Modal id="create_company_modal">
      <Title>Предложите компанию</Title>

      <form onSubmit={onSubmit}>
        <div className="flex flex-col items-center gap-4 w-full max-w-xl m-auto">
          <Select
            placeholder="Страна"
            isClearable
            options={countryOptions}
            value={
              countryOptions.find(opt => opt.value === selectedCountry) ?? null
            }
            onChange={option => {
              setSelectedCountry(option?.value ? String(option.value) : '');
              setSelectedCity('');
            }}
          />

          <Select
            placeholder="Город"
            isClearable
            isDisabled={!selectedCountry}
            options={cityOptions}
            value={cityOptions.find(opt => opt.value === selectedCity) ?? null}
            onChange={option =>
              setSelectedCity(option?.value ? String(option.value) : '')
            }
          />

          <Input
            placeholder="Название компании"
            value={selectedName}
            className="w-full"
            onChange={value => setSelectedName(String(value))}
          />
        </div>

        <Button className="btn-primary w-full mt-4">Отправить</Button>
      </form>
    </Modal>
  );
}
