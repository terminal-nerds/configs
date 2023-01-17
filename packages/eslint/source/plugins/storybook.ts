import { defineConfig } from "eslint-define-config";

// https://github.com/storybookjs/eslint-plugin-storybook
const config = defineConfig({
	ignorePatterns: ["**/storybook-static"],
	overrides: [
		{
			files: ["*.stories.@(js|jsx|mdx|ts|tsx|svelte|vue)"],
			extends: ["plugin:storybook/recommended", "plugin:storybook/csf", "plugin:storybook/csf-strict"],
		},
	],
});

export default config;
