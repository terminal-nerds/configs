import { defineConfig } from "eslint-define-config";

/** {@link https://github.com/gajus/eslint-plugin-jsdoc} */
const config = defineConfig({
	extends: ["plugin:jsdoc/recommended"],
	rules: {
		"jsdoc/require-jsdoc": ["off"],
		"jsdoc/require-returns": ["off"],
	},
});

export default config;
