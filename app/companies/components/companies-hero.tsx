'use client';

export function CompaniesHero() {
  return (
    <div
      className="pt-[100px] h-[460px] text-center px-[300px] bg-cover bg-center"
      style={{
        backgroundImage: 'url(imgs/hero-companies.png)',
      }}
    >
      <h1 className="text-5xl font-extrabold mb-7">Делайте осознанный выбор</h1>
      <p className="text-3xl">
        Найдите свою идеальную компанию и сделайте первый шаг к работе мечты!
      </p>
    </div>
  );
}
