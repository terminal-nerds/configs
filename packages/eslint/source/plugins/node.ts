import { defineConfig } from "eslint-define-config";

/**
 * NOTE:
 * https://github.com/mysticatea/eslint-plugin-node
 * is no longer actively maintained.
 * It has been replaced by:
 * https://github.com/eslint-community/eslint-plugin-n
 */
const config = defineConfig({
	extends: ["plugin:n/recommended"],
	rules: {
		// RATIONALE: Allow `plugin-import` to handle them
		"n/no-extraneous-import": ["off"],
		"n/no-unpublished-import": ["off"],
		"n/no-unpublished-require": ["off"],
		"n/no-missing-import": ["off"],

		// FIXME: TypeScript might have features not supported in a specific n.js version.
		// @see https://github.com/mysticatea/eslint-plugin-node/issues/250
		"n/no-unsupported-features/es-syntax": [
			"off",
			// "error",
			// { ignores: ["modules"] },
		],
	},
	settings: {
		n: {
			// eslint-disable-next-line unicorn/prefer-module
			resolvePaths: [__dirname],
			tryExtensions: [".cjs", ".js", ".mjs", ".ts"],
		},
	},
});

export default config;
