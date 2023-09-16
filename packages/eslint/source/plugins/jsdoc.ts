import { defineConfig } from "eslint-define-config";

import { HAS_TYPESCRIPT } from "../checks.ts";

/** @see {@link https://github.com/gajus/eslint-plugin-jsdoc} JSDoc plugin options */
const config = defineConfig({
	extends: [HAS_TYPESCRIPT ? "plugin:jsdoc/recommended-typescript" : "plugin:jsdoc/recommended"],
	rules: {
		"jsdoc/check-tag-names": [
			"warn",
			{
				definedTags: ["defaultValue"],
			},
		],
		"jsdoc/require-jsdoc": ["off"],
		"jsdoc/require-params": ["off"],
		"jsdoc/require-returns": ["off"],
		"jsdoc/tag-lines": ["warn", "any"],
		"jsdoc/valid-types": [HAS_TYPESCRIPT ? "off" : "warn"],
	},
});

export default config;
