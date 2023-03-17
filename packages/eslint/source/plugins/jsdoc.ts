import { defineConfig } from "eslint-define-config";

/** @see {@link https://github.com/gajus/eslint-plugin-jsdoc} JSDoc plugin options */
const config = defineConfig({
	extends: ["plugin:jsdoc/recommended"],
	rules: {
		"jsdoc/require-jsdoc": ["off"],
		"jsdoc/require-returns": ["off"],
	},
});

export default config;
