import { defineConfig } from "eslint-define-config";

// https://github.com/jest-community/eslint-plugin-jest
const config = defineConfig({
	extends: ["plugin:jest/recommended", "plugin:jest/style"],

	env: {
		"jest/globals": true,
	},

	settings: {
		jest: {
			/* eslint-disable-next-line
			   unicorn/prefer-module,
			   @typescript-eslint/no-var-requires
			*/
			version: 27,
		},
	},
});

export default config;
