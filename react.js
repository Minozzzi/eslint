module.exports = {
  env: {
    es2021: true,
    browser: true,
  },
  extends: ["plugin:react-hooks/recommended", "airbnb", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier", "jsx-a11y"],
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        printWidth: 120,
      },
    ],
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true,
      },
    ],
    "no-useless-constructor": "off",
    "no-empty-function": [
      "error",
      {
        allow: ["constructors", "methods", "asyncMethods"],
      },
    ],
    "no-console": [
      "warn",
      {
        allow: ["info", "warn", "error"],
      },
    ],
    "max-len": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "type",
          "object",
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true,
        },
      },
    ],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".tsx"],
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-no-bind": "off",
  },
};
