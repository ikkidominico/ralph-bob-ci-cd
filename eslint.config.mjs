import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
    },
    {
        ignores: ["node_modules/", "dist/"],
    },
    {
        languageOptions: { globals: globals.node },
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
];
