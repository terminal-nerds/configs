import { defineConfig } from "eslint-define-config";

const config = defineConfig({
	parser: "@typescript-eslint/parser",
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
		"pnpm-lock.yaml",
		// Unignore files starting with dot (usually configuration files)
		"!.*",
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
