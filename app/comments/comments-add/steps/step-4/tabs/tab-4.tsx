import { Tab } from "@/shared";
import { Title, Input } from "@/ui";

type Props = {
  salary: number;
  premium: number;
  bonuses: number;
  stocks: number;
  dividends: number;
  setSalary: (value: number) => void;
  setPremium: (value: number) => void;
  setBonuses: (value: number) => void;
  setStocks: (value: number) => void;
  setDividends: (value: number) => void;
};

export const Tab4 = ({
  salary,
  premium,
  bonuses,
  stocks,
  dividends,
  setSalary,
  setPremium,
  setBonuses,
  setStocks,
  setDividends,
}: Props) => {
  return (
    <Tab name="comment-add" label="Финансы">
      <Title size="3">Зарплата</Title>
      <Input
        value={salary.toString()}
        onChange={(newVal) => setSalary(Number(newVal))}
        type="number"
      />

      <Title size="3">Премия</Title>
      <Input
        value={premium.toString()}
        onChange={(newVal) => setPremium(Number(newVal))}
        type="number"
      />

      <Title size="3">Бонусы</Title>
      <Input
        value={bonuses.toString()}
        onChange={(newVal) => setBonuses(Number(newVal))}
        type="number"
      />

      <Title size="3">Акции</Title>
      <Input
        value={stocks.toString()}
        onChange={(newVal) => setStocks(Number(newVal))}
        type="number"
      />

      <Title size="3">Дивиденды</Title>
      <Input
        value={dividends.toString()}
        onChange={(newVal) => setDividends(Number(newVal))}
        type="number"
      />
    </Tab>
  );
};
