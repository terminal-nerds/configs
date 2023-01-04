import { defineConfig } from "eslint-define-config";

// https://github.com/jest-community/eslint-plugin-jest
const config = defineConfig({
	extends: ["plugin:jest/recommended", "plugin:jest/style"],
	env: {
		"jest/globals": true,
	},
	ignorePatterns: ["**/coverage"],
	settings: {
		jest: {
			version: 29,
		},
	},
});

export default config;
