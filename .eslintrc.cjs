module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "standard",
    "standard-jsx"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/jsx-one-expression-per-line": "off", // Permitir varias expresiones en una sola línea
    "react/jsx-wrap-multilines": "off", // Desactivar el ajuste de líneas en JSX
    "react/jsx-max-props-per-line": [
      "error",
      { "maximum": 12 } // Permitir hasta 4 atributos por línea
    ]
  },
};
