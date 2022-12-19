import { defineConfig } from "eslint-define-config";

// https://github.com/francoismassart/eslint-plugin-tailwindcss
const config = defineConfig({
	extends: ["plugin:tailwindcss/recommended"],
	plugins: ["tailwindcss"],

	rules: {
		"@emotion/import-from-emotion": ["error"],
		"@emotion/jsx-import": ["off"],
		"@emotion/no-vanilla": ["warn"],
		"@emotion/pkg-renaming": ["error"],
		"@emotion/styled-import": ["error"],
	},
});

export default config;
