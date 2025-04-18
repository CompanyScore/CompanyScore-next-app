import { useCommentFormStore, useCompaniesStore } from "@/store";
import { Dropdown, Input, Title } from "@/ui";
import React, { useEffect, useState } from "react";

export const CommentsAddCompany = () => {
  const { form, updateForm } = useCommentFormStore();

  const { companies, getLocations, countryOptions, cityOptions, getCompanies } =
    useCompaniesStore();

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [searchedCompanyName, setSearchedCompanyName] = useState("");

  const onSelectCountry = async (selectedCountry: string) => {
    setSelectedCountry(selectedCountry);
    getCompanies({ selectedCountry });
    updateForm({
      location: {
        ...form.location,
        country: selectedCountry,
      },
    });
  };

  const onSelectCity = async (selectedCity: string) => {
    setSelectedCity(selectedCity);
    getCompanies({ selectedCity });
    updateForm({
      location: {
        ...form.location,
        city: selectedCity,
      },
    });
  };

  const onSelectCompany = async (searchedCompanyName: string) => {
    setSearchedCompanyName(searchedCompanyName);
    getCompanies({ searchedCompanyName });
    updateForm({
      companyId: companies.find(
        (company) => company.name === searchedCompanyName,
      )?.id as string,
    });
  };

  useEffect(() => {
    getLocations(selectedCountry);
  }, [getLocations, selectedCountry]);

  return (
    <div className="flex flex-col gap-6">
      <Title size="2" position="center">
        Выберите компанию, о которой хотите оставить отзыв
      </Title>
      <div className="flex flex-col items-center gap-4 w-full max-w-xl m-auto">
        <Dropdown
          text="Страна"
          options={countryOptions}
          isFirstDisabled={true}
          selectedValue={selectedCountry}
          onSelect={onSelectCountry}
          width="100%"
        />
        <Dropdown
          text="Город"
          options={cityOptions}
          isFirstDisabled={true}
          selectedValue={selectedCity}
          onSelect={onSelectCity}
          width="100%"
        />
        <Dropdown
          text="Компания"
          options={companies.map((company) => company.name)}
          isFirstDisabled={true}
          selectedValue={searchedCompanyName}
          onSelect={onSelectCompany}
          width="100%"
        />
      </div>
      <Title size="2" position="center">
        Если вы не нашли свою компанию, напишите название компании и мы добавим
        её
      </Title>
      <Input
        type="text"
        placeholder="Введите название компании"
        value={form.suggestedCompanyName}
        onChange={(val) =>
          updateForm({
            suggestedCompanyName: String(val),
          })
        }
        className="w-full max-w-xl m-auto"
      />
    </div>
  );
};
