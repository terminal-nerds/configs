import { defineConfig } from "eslint-define-config";

import { hasModule } from "@workspace/helpers/module";

// https://github.com/storybookjs/eslint-plugin-storybook
const config = defineConfig({
	overrides: [
		{
			files: ["*.stories.@(js|jsx|ts|tsx|svelte|vue)"],
			extends: [
				"plugin:storybook/recommended",
				"plugin:storybook/csf",
				"plugin:storybook/csf-strict",
			],
		},
	],
});

export default hasModule("sb") ? config : {};
