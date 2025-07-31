import { Card } from '@/ui';

type CompaniesCardProps = {
  name: string;
  country: string;
  city: string;
  rating?: number;
  logo?: string;
};

export function CompaniesCard({
  name,
  country,
  city,
  rating,
  logo,
}: CompaniesCardProps) {
  return (
    <Card className="flex flex-col w-96">
      <img src={logo ? logo : '/imgs/company-logo.jpg'} alt={`Logo ${name}`} />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Страна: {country}</p>
        <p>Город: {city}</p>
        <p>Рейтинг: {rating}</p>
      </div>
      <button className="btn btn-primary justify-self-end">Подробнее</button>
    </Card>
  );
}
