import { CompanyCard, CompanyTable } from "./components";

export default function CompanyDetail() {
  return (
    <section className="flex flex-col items-stretch justify-center gap-8 py-8 md:py-10 m-auto">
      <CompanyCard />
      <CompanyTable />
    </section>
  );
}
