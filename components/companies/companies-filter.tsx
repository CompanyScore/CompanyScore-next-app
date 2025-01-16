import React from "react";

export default function CompaniesFilter() {
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        placeholder="Компания"
        className="input input-bordered input-primary w-full max-w-44"
      />

      <select className="select select-primary w-full max-w-44">
        <option disabled selected>
          Страна
        </option>
        <option>Казахстан</option>
        <option>Россия</option>
        <option>Кыргызстан</option>
        <option>Узбекистан</option>
      </select>

      <select className="select select-primary w-full max-w-44">
        <option disabled selected>
          Город
        </option>
        <option>Алматы</option>
        <option>Астана</option>
        <option>Караганда</option>
        <option>Шимкент</option>
      </select>

      <select className="select select-primary w-full max-w-44">
        <option disabled selected>
          Рэйтинг
        </option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
    </div>
  );
}
