import { hasPackage } from "@workspace/shared/package";
import { defineConfig } from "eslint-define-config";

// https://github.com/ota-meshi/eslint-plugin-svelte
const config = defineConfig({
	extends: ["plugin:svelte/recommended", "plugin:svelte/prettier"],
	ignorePatterns: ["**/.svelte-kit"],
	overrides: [
		{
			files: ["*.svelte"],
			parser: "svelte-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		extraFileExtensions: [".svelte"],
	},
	plugins: ["svelte"],
});

export default config;
