import {
  useCommentFormStore,
  useCompaniesStore,
  useSuggestedCompanyStore,
} from "@/store";
import { Accordion, Dropdown, Input } from "@/ui";
import { countriesWithCities } from "@/constants/countriesWithCities"; // путь зависит от твоей структуры

export const CommentsAddCompany = () => {
  const { form, updateForm } = useCommentFormStore();
  const { companies, getCompanies } = useCompaniesStore();
  const { suggestedCompany, updateSuggestedCompany } =
    useSuggestedCompanyStore();

  const onSelectCountry = (countryCode: string) => {
    const country = countriesWithCities.find((c) => c.value === countryCode);
    updateForm({
      location: {
        ...form.location,
        country: country?.value || "",
        city: "", // очищаем город при смене страны
      },
    });
    getCompanies({ selectedCountry: country?.label });
  };

  const onSelectSuggestedCompanyCountry = (countryCode: string) => {
    const country = countriesWithCities.find((c) => c.value === countryCode);

    updateSuggestedCompany({
      country: country?.value || "",
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

  const onSelectSuggestedCompanyCity = (city: string) => {
    updateSuggestedCompany({
      city,
    });

    getCompanies({ selectedCity: city });
  };

  const onSelectCompany = (searchedCompanyName: string) => {
    getCompanies({ searchedCompanyName });
    updateForm({
      companyId:
        companies.find((company) => company.name === searchedCompanyName)?.id ||
        "",
    });
  };

  const countryOptions = countriesWithCities.map(({ label, value }) => ({
    label,
    value,
  }));

  const cityOptions =
    countriesWithCities.find((c) => c.value === form.location.country)?.cities ||
    [];

  const suggestedCityOptions =
    countriesWithCities.find((c) => c.value === suggestedCompany.country)
      ?.cities || [];

  return (
    <div className="flex flex-col gap-6">
      <Accordion
        title="Выберите компанию, о которой хотите оставить отзыв"
        name="comments-add-company"
        defaultChecked={true}
      >
        <div className="flex flex-col items-center gap-4 w-full max-w-xl m-auto">
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
            options={companies.map((company) => company.name)}
            isFirstDisabled={true}
            selectedValue={
              companies.find((company) => company.id === form.companyId)
                ?.name || ""
            }
            onSelect={onSelectCompany}
            width="100%"
          />
        </div>
      </Accordion>

      <Accordion
        title="Если вы не нашли свою компанию, напишите название компании и мы
          добавим её"
        name="comments-add-company"
      >
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
            type="text"
            placeholder="Введите название компании"
            value={suggestedCompany.name}
            onChange={(val) =>
              updateSuggestedCompany({
                name: String(val),
              })
            }
            className="w-full max-w-xl m-auto"
          />
        </div>
      </Accordion>
    </div>
  );
};
