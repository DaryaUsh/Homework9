import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
  env: {

    "browser": true,

    "es2021": true

  },

  extends: "eslint:recommended",

  "parserOptions": {

    "ecmaVersion": 12,

    "sourceType": "module"

  },



  rules: {

    'indent': ["error", 2],

    "quotes": ["error", "single"],

    "semi": ["error", "always"]
  },

  extends: [

    "eslint:recommended",

    "plugin:prettier/recommended"

  ]
  }
]
