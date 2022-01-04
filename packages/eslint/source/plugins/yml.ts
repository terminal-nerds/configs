import { defineConfig } from "eslint-define-config";

// https://github.com/ota-meshi/eslint-plugin-yml
const config = defineConfig({
	extends: ["plugin:yml/recommended", "plugin:yml/prettier"],

	overrides: [
		{
			files: ["*.yml", "*.yaml"],
			// @ts-ignore: `eslint-define-config` doesn't have this specified in `Overrides` type
			parser: "yaml-eslint-parser",
		},
	],
});

export default config;
