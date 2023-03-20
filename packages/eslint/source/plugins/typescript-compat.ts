import { defineConfig } from "eslint-define-config";

/** @see {@link https://github.com/azu/eslint-plugin-typescript-compat} Plugin repo */
const config = defineConfig({
	plugins: ["typescript-compat"],
	extends: ["plugin:typescript-compat/recommended"],
});

export default config;
