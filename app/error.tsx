"use client";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  console.error(error);

  return (
    <html lang="ru">
      <body className="bg-base-200">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col text-center">
            <h1 className="text-6xl font-bold text-error">
              Ой! Что-то пошло не так.
            </h1>
            <p className="py-6 text-lg">{error}</p>
            <p className="py-6 text-lg">
              К сожалению, произошла непредвиденная ошибка. Пожалуйста,
              повторите позже.
            </p>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/" className="btn btn-primary">
              Вернуться на главную
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
