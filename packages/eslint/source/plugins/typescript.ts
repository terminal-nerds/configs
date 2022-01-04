/* eslint-disable unicorn/prefer-module */
import { defineConfig } from "eslint-define-config";

const commentRuleOptions = "allow-with-description";

// https://github.com/typescript-eslint/typescript-eslint
const config = defineConfig({
	extends: ["plugin:@typescript-eslint/recommended"],
	parserOptions: {
		parser: "@typescript-eslint/parser",
		// project: ["./tsconfig.json"],
		tsconfigRootDir: __dirname,
	},
	rules: {
		"@typescript-eslint/ban-ts-comment": [
			"warn",
			{
				"ts-expect-error": commentRuleOptions,
				"ts-ignore": commentRuleOptions,
				"ts-nocheck": commentRuleOptions,
				"ts-check": commentRuleOptions,
				"minimumDescriptionLength": 3,
			},
		],
	},
});

export default config;
