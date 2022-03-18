import { defineConfig } from "eslint-define-config";

import { getIgnorePatterns } from "@workspace/helpers/configuration";

const config = defineConfig({
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},

	ignorePatterns: [
		// Unignore files starting with dot (usually configuration files)
		"!.*",
		// Ignore...
		"**/node_modules",
		"**/.git",
		"**/build",
		"**/dist",
		"**/package-lock.json",
		"**/pnpm-lock.yaml",
		...getIgnorePatterns([
			{
				module: "husky",
				patterns: "**/.husky",
			},
			{
				module: "turbo",
				patterns: "**/.turbo",
			},
			{
				module: "vercel",
				patterns: "**/.vercel",
			},
		]),
	],

	extends: ["eslint:recommended"],

	rules: {
		// "indent": ["warn", "tab", { SwitchCase: 1 }],
		"max-len": [
			"warn",
			{
				code: 100,
				tabWidth: 4,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreUrls: true,
			},
		],
		"no-console": ["warn", { allow: ["debug"] }],
		"func-names": ["error", "as-needed"],
	},
});

export default config;
