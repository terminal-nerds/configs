import { defineConfig } from "eslint-define-config";

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
				"ts-expect-error": "allow-with-description",
				"ts-ignore": "allow-with-description",
				"ts-nocheck": "allow-with-description",
				"ts-check": "allow-with-description",
				"minimumDescriptionLength": 3,
			},
		],
	},
});

export default config;
