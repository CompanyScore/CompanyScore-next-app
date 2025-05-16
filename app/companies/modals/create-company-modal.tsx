"use client";

import { useCompaniesStore } from "@/store";
import { countriesWithCities } from "@/constants";
import { Button, Dropdown, Input, Modal, Title, useToast } from "@/ui";
import { useState } from "react";

type Props = {
  onGetCreatedCompanyId?: (
    companyId: string,
    country: string,
    city: string,
  ) => void;
};

export function CreateCompanyModal({ onGetCreatedCompanyId }: Props) {
  const toast = useToast();
  const { getCompanies, createCompany } = useCompaniesStore();

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedName, setSelectedName] = useState("");

  const closeModal = () => {
    const modal = document.getElementById(
      "create_company_modal",
    ) as HTMLInputElement;
    if (modal) {
      modal.checked = false; // Закрывает модалку в daisyUI
    }
  };

  const countryOptions = countriesWithCities.map(({ label, value }) => ({
    label,
    value,
  }));

  const suggestedCityOptions =
    countriesWithCities.find((c) => c.value === selectedCountry)?.cities || [];

  const onSubmit = async () => {
    event?.preventDefault();

    if (!selectedCountry || !selectedCity || !selectedName) {
      toast.error("Заполните все поля");
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

      toast.success("Компания создана");
      getCompanies({});
      resetForm();
      closeModal();
    } catch {
      const error = useCompaniesStore.getState().error;
      toast.error(error || "Ошибка");
      resetForm();
      closeModal();
    }
  };

  const onSelectCountry = (countryCode: string) => {
    const country = countriesWithCities.find((c) => c.value === countryCode);

    if (country) {
      setSelectedCountry(country.value);
      setSelectedCity(""); // очищаем город при смене страны
    }
  };

  const onSelectCity = (city: string) => {
    setSelectedCity(city);
  };

  const resetForm = () => {
    setSelectedCountry("");
    setSelectedCity("");
    setSelectedName("");
  };

  return (
    <Modal id="create_company_modal">
      <Title size="3" position="center">
        Предложите компанию
      </Title>

      <form onSubmit={onSubmit}>
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
            options={suggestedCityOptions}
            isFirstDisabled={true}
            selectedValue={selectedCity}
            onSelect={onSelectCity}
            width="100%"
          />

          <Input
            placeholder="Название компании"
            value={selectedName}
            className="w-full"
            onChange={(value) => setSelectedName(String(value))}
          />
        </div>

        <Button className="btn-primary w-full mt-4">Отправить</Button>
      </form>
    </Modal>
  );
}
