'use client';

import { useEffect, useState } from 'react';
import { Searcher } from '@/shared/ui';
import { Error, Button, Toast, Select } from '@/shared/ui';
import { useCompanyStore } from '@/store/api';
import { CreateCompanyModal } from '@/app/companies/modals';
import { OptionType } from '@/shared/ui/select';

const ratingOptions: OptionType[] = ['1', '2', '3', '4', '5'].map(r => ({
  label: r,
  value: r,
}));

export function CompaniesFilter() {
  const { getLocations, countryOptions, cityOptions, getCompanies, error } =
    useCompanyStore();

  const [selectedRating, setSelectedRating] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    getLocations(selectedCountry);
  }, [getLocations, selectedCountry]);

  const onSearchCompanyByName = (searchedCompanyName: string) => {
    getCompanies({ searchedCompanyName });
  };

  const countryOptionsFormatted: OptionType[] = countryOptions.map(c => ({
    label: c,
    value: c,
  }));

  const cityOptionsFormatted: OptionType[] = cityOptions.map(c => ({
    label: c,
    value: c,
  }));

  const onReset = () => {
    setSelectedCountry('');
    setSelectedCity('');
    setSelectedRating('');
    getCompanies({});
  };

  const openModal = () => {
    const modal = document.getElementById(
      'create_company_modal',
    ) as HTMLInputElement | null;
    if (modal) {
      modal.checked = true;
    }
  };

  if (error) return <Error text={error} />;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center flex-wrap gap-4 max-w-[750px] w-full">
          <Searcher onSearch={onSearchCompanyByName} />

          <div className="flex items-center gap-4 w-full">
            <Select
              placeholder="Все страны"
              isClearable
              options={countryOptionsFormatted}
              value={selectedCountry || null}
              onChange={val => {
                setSelectedCountry(val ?? '');
                setSelectedCity(''); // сбрасываем город при смене страны
                getCompanies({ selectedCountry: val ?? '' });
              }}
            />

            <Select
              placeholder="Все города"
              isClearable
              isDisabled={!selectedCountry}
              options={cityOptionsFormatted}
              value={selectedCity || null}
              onChange={val => {
                setSelectedCity(val ?? '');
                getCompanies({ selectedCity: val ?? '' });
              }}
            />

            <Select
              placeholder="Все рейтинги"
              isClearable
              options={ratingOptions}
              value={selectedRating || null}
              onChange={val => {
                setSelectedRating(val ?? '');
                getCompanies({ selectedRating: val ?? '' });
              }}
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button onClick={onReset}>Сбросить</Button>
          <Button onClick={openModal}>Предложить компанию</Button>
        </div>
      </div>

      <CreateCompanyModal />
      <Toast />
    </div>
  );
}
