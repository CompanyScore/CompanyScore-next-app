'use client';

import { useEffect, useState } from 'react';
import { Searcher } from '@/shared';
import { Error, Button, Toast, Select } from '@/ui';
import { useCompaniesStore } from '@/store';
import { CreateCompanyModal } from '@/app/companies/modals';
import { OptionType } from '@/ui/select';

const ratingOptions: OptionType[] = ['1', '2', '3', '4', '5'].map(r => ({
  label: r,
  value: r,
}));

export function CompaniesFilter() {
  const { getLocations, countryOptions, cityOptions, getCompanies, error } =
    useCompaniesStore();

  const [selectedRating, setSelectedRating] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    getLocations(selectedCountry);
  }, [getLocations, selectedCountry]);

  const onSearchCompanyByName = (searchedCompanyName: string) => {
    getCompanies({ searchedCompanyName });
  };

  const onSelectRating = (option: OptionType | null) => {
    const value = option?.value != null ? String(option.value) : '';
    setSelectedRating(value);
    getCompanies({ selectedRating: value });
  };

  const onSelectCountry = (option: OptionType | null) => {
    const value = option?.value ? String(option.value) : '';
    setSelectedCountry(value);
    getCompanies({ selectedCountry: value });
  };

  const onSelectCity = (option: OptionType | null) => {
    const value = option?.value ? String(option.value) : '';
    setSelectedCity(value);
    getCompanies({ selectedCity: value });
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
    ) as HTMLInputElement;
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
              value={
                countryOptionsFormatted.find(
                  opt => opt.value === selectedCountry,
                ) ?? null
              }
              onChange={onSelectCountry}
            />

            <Select
              placeholder="Все города"
              isClearable
              isDisabled={!selectedCountry}
              options={cityOptionsFormatted}
              value={
                cityOptionsFormatted.find(opt => opt.value === selectedCity) ??
                null
              }
              onChange={onSelectCity}
            />

            <Select
              placeholder="Все рейтинги"
              isClearable
              options={ratingOptions}
              value={
                ratingOptions.find(opt => opt.value === selectedRating) ?? null
              }
              onChange={onSelectRating}
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
