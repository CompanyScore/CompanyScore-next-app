"use client";

import { Button, Dropdown, Input, Modal, Title, useToast } from "@/ui";
import { useCompaniesStore, useSuggestedCompanyStore } from "@/store";
import { useSuggestPostForm } from "@/hook";
import { countriesWithCities } from "@/constants/countriesWithCities";

type SuggestCompanyFormData = {
  name: string;
  description: string;
};

export function SuggestPostCompanyModal() {
  const { postSuggestedCompany } = useSuggestedCompanyStore();
  const { suggestedCompany, updateSuggestedCompany } =
    useSuggestedCompanyStore();
  const { getCompanies } = useCompaniesStore();

  const toast = useToast();

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useSuggestPostForm();

  const closeModal = () => {
    const modal = document.getElementById(
      "suggest_post_company_modal",
    ) as HTMLInputElement;
    if (modal) {
      modal.checked = false; // Закрывает модалку в daisyUI
    }
  };

  const resetForm = () => {
    reset();
    closeModal();
  };

  const countryOptions = countriesWithCities.map(({ label, value }) => ({
    label,
    value,
  }));

  const onSubmit = async (data: SuggestCompanyFormData) => {
    try {
      await postSuggestedCompany({
        name: data.name,
        description: data.description,
      });
      toast.success("Предложение отправлено!");
      resetForm();
    } catch {
      const error = useSuggestedCompanyStore.getState().error;
      toast.error(error || "Ошибка");
      resetForm();
    }
  };

  const onSelectSuggestedCompanyCountry = (countryCode: string) => {
    const country = countriesWithCities.find((c) => c.value === countryCode);

    updateSuggestedCompany({
      country: country?.value || "",
    });

    getCompanies({ selectedCountry: country?.label });
  };

  const onSelectSuggestedCompanyCity = (city: string) => {
    updateSuggestedCompany({
      city,
    });

    getCompanies({ selectedCity: city });
  };

  const suggestedCityOptions =
    countriesWithCities.find((c) => c.value === suggestedCompany.country)
      ?.cities || [];

  return (
    <Modal id="suggest_post_company_modal">
      <Title size="3" position="center">
        Предложите компанию
      </Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center gap-4 w-full max-w-xl m-auto">
          <Dropdown
            text="Страна"
            options={countryOptions}
            isFirstDisabled={true}
            selectedValue={suggestedCompany.country}
            onSelect={onSelectSuggestedCompanyCountry}
            width="100%"
          />

          <Dropdown
            text="Город"
            options={suggestedCityOptions}
            isFirstDisabled={true}
            selectedValue={suggestedCompany.city}
            onSelect={onSelectSuggestedCompanyCity}
            width="100%"
          />

          <Input
            placeholder="Название компании"
            value={watch("name")}
            onChange={(value) => setValue("name", String(value))}
          />
          <p className="text-error">{errors.name?.message}</p>
        </div>

        <Button className="btn-primary w-full">Отправить</Button>
      </form>
    </Modal>
  );
}
