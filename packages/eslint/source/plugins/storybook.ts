import {
	JAVASCRIPT_EXTENSIONS,
	MARKDOWN_EXTENSIONS,
	TYPESCRIPT_EXTENSIONS,
	UI_LIBRARY_EXTENSIONS,
} from "@terminal-nerds/utils-config/extensions";
import { defineConfig } from "eslint-define-config";

const EXTENSIONS = [
	...MARKDOWN_EXTENSIONS,
	...JAVASCRIPT_EXTENSIONS,
	...TYPESCRIPT_EXTENSIONS,
	...UI_LIBRARY_EXTENSIONS,
].join("|");

// https://github.com/storybookjs/eslint-plugin-storybook
const config = defineConfig({
	ignorePatterns: ["**/storybook-static"],
	overrides: [
		{
			files: [`*.stories.@(${EXTENSIONS})`],
			extends: [
				"plugin:storybook/recommended",
				"plugin:storybook/csf",
				"plugin:storybook/csf-strict",
			],
		},
	],
});

export default config;
