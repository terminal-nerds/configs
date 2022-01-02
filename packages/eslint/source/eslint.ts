import { defineConfig } from "eslint-define-config";

const config = defineConfig({
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},

	ignorePatterns: [
		"**/node_modules",
		"**/.git",
		"**/.husky",
		"**/.svelte-kit",
		"**/.turbo",
		"**/.vercel",
		"**/build",
		"**/dist",
		// Unignore files starting with dot (usually configuration files)
		"!.*",
	],

	extends: ["eslint:recommended"],

	rules: {
		"indent": ["warn", "tab", { SwitchCase: 1 }],
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
		"quotes": ["warn", "double", { avoidEscape: true }],
		"no-console": ["warn", { allow: ["debug"] }],
		"no-alert": ["error"],
		"no-debugger": ["error"],
		"func-names": ["error", "as-needed"],
	},
});

export default config;
