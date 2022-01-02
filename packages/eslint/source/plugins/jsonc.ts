import { defineConfig } from "eslint-define-config";

// https://github.com/amilajack/eslint-plugin-compat
const config = defineConfig({
	extends: ["plugin:jsonc/recommended-with-jsonc", "plugin:jsonc/prettier"],

	overrides: [
		{
			files: ["*.json", "*.json5", "*.jsonc"],
			// @ts-ignore
			parser: "jsonc-eslint-parser",
		},
	],
});

export default config;
