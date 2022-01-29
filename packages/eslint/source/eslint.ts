import { defineConfig } from "eslint-define-config";

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
		"**/.github/workflows",
		"**/.husky",
		"**/.svelte-kit",
		"**/.turbo",
		"**/.ultra.cache.json",
		"**/.vercel",
		"**/build",
		"**/dist",
		"**/package-lock.json",
		"**/pnpm-lock.yaml",
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
