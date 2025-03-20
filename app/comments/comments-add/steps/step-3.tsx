import { Dropdown } from "@/ui";
import React from "react";

type Props = {
  countries: string[];
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  cities: Record<string, string[]>;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
};

export const Step3 = ({
  countries,
  country,
  setCountry,
  cities,
  city,
  setCity,
}: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <Dropdown
        text="Страна"
        options={countries}
        isFirstDisabled={true}
        selectedValue={country}
        onSelect={setCountry}
      />
      <Dropdown
        text="Город"
        options={country ? cities[country] : []}
        isFirstDisabled={true}
        selectedValue={city}
        onSelect={setCity}
      />
    </div>
  );
};
