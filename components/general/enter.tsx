"use client";
import React from "react";

export default function Enter() {
  return (
    <div>
      <input type="checkbox" id="modal_enter" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box flex justify-around w-full">
          <div role="tablist" className="tabs tabs-bordered">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab m-auto text-center"
              aria-label="Авторизация"
              defaultChecked
            />

            <div role="tabpanel" className="tab-content pt-6 w-full">
              <Login />
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Регистрация"
            />
            <div role="tabpanel" className="tab-content pt-6 w-full">
              <SignUp />
            </div>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="modal_enter">
          Close
        </label>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <input
        type="text"
        placeholder="Имя"
        className="input input-bordered input-primary w-full max-w-xs"
      />
      <input
        type="text"
        placeholder="Пароль"
        className="input input-bordered input-primary w-full max-w-xs"
      />
      <button className="btn btn-primary">Отправить</button>
    </div>
  );
}

function SignUp() {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <input
        type="text"
        placeholder="Имя"
        className="input input-bordered input-primary w-full max-w-xs"
      />
      <input
        type="text"
        placeholder="Пароль"
        className="input input-bordered input-primary w-full max-w-xs"
      />
      <button className="btn btn-primary">Отправить</button>
    </div>
  );
}
