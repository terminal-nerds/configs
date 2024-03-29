import { defineConfig } from "eslint-define-config";

const commentRuleOptions = "allow-with-description";

const config = defineConfig({
	// https://github.com/typescript-eslint/typescript-eslint
	extends: ["plugin:@typescript-eslint/recommended"],
	parserOptions: {
		parser: "@typescript-eslint/parser",
		// eslint-disable-next-line unicorn/prefer-module
		tsconfigRootDir: __dirname,
	},
	rules: {
		/** RATIONALE: Enforce the practice, where we explain shortly the decision of using them. */
		"@typescript-eslint/ban-ts-comment": [
			"warn",
			{
				"ts-expect-error": commentRuleOptions,
				"ts-ignore": commentRuleOptions,
				"ts-nocheck": commentRuleOptions,
				"ts-check": commentRuleOptions,
				minimumDescriptionLength: 3,
			},
		],
		/**
		 * RATIONALE: Ignore the underscore prefix for unused arguments. Sometimes we have omit some function arguments,
		 * until we get the one we can actually use.
		 */
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				argsIgnorePattern: "^_",
				varsIgnorePattern: "^_",
			},
		],
	},
});

export default config;
