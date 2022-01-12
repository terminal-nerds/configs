import { defineConfig } from "eslint-define-config";

import { hasModule } from "@workspace/helpers";

const commentRuleOptions = "allow-with-description";

const config = defineConfig({
	// https://github.com/typescript-eslint/typescript-eslint
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

export default hasModule("typescript") && hasModule("tslib") ? config : {};
