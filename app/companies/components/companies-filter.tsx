"use client";
import { useState } from "react";
import { Searcher } from "@/shared";
import { Error, Dropdown, Button } from "@/ui";
import { useCompaniesStore } from "@/store";
import { SuggestPostCompanyModal } from "@/app/companies/modals";

const ratingOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export function CompaniesFilter() {
  const { error, getCompanies } = useCompaniesStore();

  const [selectedRating, setSelectedRating] = useState("");

  const onSearchCompanyByName = (searchedCompanyName: string) => {
    getCompanies({ searchedCompanyName });
  };

  const onSelectRating = (selectedRating: string) => {
    setSelectedRating(selectedRating);
    getCompanies({ selectedRating });
  };

  if (error) return <Error text={error} />;

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex space-x-3">
          <Searcher onSearch={onSearchCompanyByName} />
          <Dropdown
            text="Все рейтинги"
            options={ratingOptions}
            selectedValue={selectedRating}
            onSelect={onSelectRating}
          />
        </div>

        <Button className="btn-primary">
          <label htmlFor="suggest_post_company_modal">
            Предложить компанию
          </label>
        </Button>
      </div>
      <SuggestPostCompanyModal />
    </div>
  );
}
