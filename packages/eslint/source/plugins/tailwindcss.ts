import { defineConfig } from "eslint-define-config";

// https://github.com/francoismassart/eslint-plugin-tailwindcss
const config = defineConfig({
	extends: ["plugin:tailwindcss/recommended"],
	plugins: ["tailwindcss"],
});

export default config;
