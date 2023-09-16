import { JAVASCRIPT_EXTENSIONS } from "@terminal-nerds/snippets-extension/schema/javascript";
import { TYPESCRIPT_EXTENSIONS } from "@terminal-nerds/snippets-extension/schema/typescript";
import { defineConfig } from "eslint-define-config";

/**
 * NOTE: https://github.com/mysticatea/eslint-plugin-node is no longer actively maintained. It has been replaced by:
 * https://github.com/eslint-community/eslint-plugin-n.
 */
const config = defineConfig({
	extends: ["plugin:n/recommended"],
	rules: {
		/** RATIONALE: Allow `eslint-plugin-import` to handle imports. */
		"n/no-extraneous-import": ["off"],
		"n/no-unpublished-import": ["off"],
		"n/no-unpublished-require": ["off"],
		"n/no-missing-import": ["off"],
	},
	settings: {
		n: {
			// eslint-disable-next-line unicorn/prefer-module
			resolvePaths: [__dirname],
			tryExtensions: [...JAVASCRIPT_EXTENSIONS, ...TYPESCRIPT_EXTENSIONS],
		},
	},
});

export default config;
