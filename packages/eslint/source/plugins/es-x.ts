import { defineConfig } from "eslint-define-config";

/** @see {@link https://github.com/eslint-community/eslint-plugin-es-x} Plugin repo */
const config = defineConfig({
	plugins: ["es-x"],
	parserOptions: {
		ecmaVersion: "latest",
	},

	settings: {
		"es-x": { aggressive: true },
	},
});

export default config;
