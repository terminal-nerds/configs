import { JAVASCRIPT_EXTENSIONS } from "@terminal-nerds/snippets-extension/schema/javascript";
import { MARKDOWN_EXTENSIONS } from "@terminal-nerds/snippets-extension/schema/markdown";
import { TYPESCRIPT_EXTENSIONS } from "@terminal-nerds/snippets-extension/schema/typescript";
import { UI_LIBRARY_EXTENSIONS } from "@terminal-nerds/snippets-extension/schema/ui-library";
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
			extends: ["plugin:storybook/recommended", "plugin:storybook/csf", "plugin:storybook/csf-strict"],
		},
	],
});

export default config;
