import { defineConfig } from "eslint-define-config";

/** @see {@link https://github.com/jsx-eslint/eslint-plugin-react} Plugin repo */
const config = defineConfig({
	extends: ["plugin:react/recommended", "plugin:react/jsx-runtime"],
	settings: {
		react: {
			version: "detect",
		},
	},
});

export default config;
