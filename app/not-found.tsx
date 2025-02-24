export default function NotFound() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-9xl font-bold text-error">404</h1>
          <h2 className="text-3xl font-bold mt-4">Ой! Страница не найдена</h2>
          <p className="py-6">
            Извините, мы не можем найти страницу, которую вы ищете.
          </p>
          <a href="/" className="btn btn-neutral">
            Вернуться на главную
          </a>
        </div>
      </div>
    </div>
  );
}
