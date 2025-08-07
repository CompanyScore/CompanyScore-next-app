export function CompaniesSort() {
  return (
    <div className="self-end flex gap-[16px]">
      <p className="text-neutral-500">Сортировать по:</p>
      <select defaultValue="Pick a font" className="select-ghost">
        <option>По популярности</option>
        <option>Inter</option>
        <option>Poppins</option>
        <option>Raleway</option>
      </select>
    </div>
  );
}
