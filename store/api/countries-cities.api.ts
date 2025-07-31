import { useApi } from '@/api';
import { create } from 'zustand';

type CityType = {
  id: string;
  name: string;
};

type CountryType = {
  id: string;
  name: string;
  cities: CityType[];
};

interface CountriesAndCitiesState {
  countryAndCity: CountryType[];
  error: string;
  getCountriesAndCities: () => Promise<void>;
}

export const useCountriesAndCitiesStore = create<CountriesAndCitiesState>(
  set => ({
    countryAndCity: [],
    error: '',

    getCountriesAndCities: async () => {
      try {
        const response = await useApi.get('/country');
        set({ countryAndCity: response.data });
        console.log(response.data);
      } catch (error: unknown) {
        const axiosError = error as {
          response?: { data?: { message?: string } };
        };
        const errorMessage =
          axiosError.response?.data?.message || 'Произошла ошибка';

        set({ error: errorMessage });
      }
    },
  }),
);
