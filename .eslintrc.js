module.exports = {
  env: {
      browser: true,
      commonjs: true,
      es6: true,
      jest: true,
      node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "plugin:testing-library/react"
  ],

  parserOptions: {
      ecmaFeatures: {
          jsx: true
      },
      ecmaVersion: 2018,
      sourceType: "module"
  },
  plugins: [
    "import"
  ],
  root: true,
  rules: {
      "comma-dangle": [
        "warn",
        "never"
    ],
      "max-len": [
        "warn",
        {
            code: 120
        }
    ],
    "react/jsx-filename-extension": [
      "error",
      {
          extensions: [
              ".js",
              ".jsx",
              ".ts",
              ".tsx"
          ]
      }
],
    "react/jsx-curly-spacing": [
      "warn",
      {
          allowMultiline: true,
          children: {
              when: "always"
          },
          spacing: {
              objectLiterals: "always"
          },
          when: "always"
      }
    ],

  },
  settings: {
      react: {
          version: "detect"
      }
  }
};
