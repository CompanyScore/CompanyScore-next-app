module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  extends: [
    "next/core-web-vitals", // Next.js + React best practices
    "eslint:recommended", // базовые рекомендации ESLint
    "plugin:@typescript-eslint/recommended", // TS-специфичные правила
    "plugin:react-hooks/recommended", // хуки React
    "prettier", // отключает конфликты с Prettier
  ],
  rules: {
    // Твои кастомные правила
    "react/react-in-jsx-scope": "off", // не нужен в Next
    "@typescript-eslint/ban-ts-comment": "off",
  },
};
