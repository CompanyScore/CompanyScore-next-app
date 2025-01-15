// 'use client';

import Cookies from "js-cookie";
import Image from "next/image";

export default function LanguageController() {
  const handleChangeLanguage = (value: string) => {
    Cookies.set("language", value);
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        <Image
          src="/icons/language.svg"
          alt="Language"
          width={24}
          height={24}
        />
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
      >
        <li>
          <input
            type="radio"
            name="lang-dropdown"
            className="btn btn-sm btn-block btn-ghost justify-start text-white"
            aria-label="English"
            value="english"
            onClick={() => handleChangeLanguage("english")}
          />
        </li>
        <li>
          <input
            type="radio"
            name="lang-dropdown"
            className="btn btn-sm btn-block btn-ghost justify-start text-white"
            aria-label="Russian"
            value="russian"
            onClick={() => handleChangeLanguage("russian")}
          />
        </li>
        <li>
          <input
            type="radio"
            name="lang-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start text-white"
            aria-label="Kazakh"
            value="kazakh"
            onClick={() => handleChangeLanguage("kazakh")}
          />
        </li>
      </ul>
    </div>
  );
}
