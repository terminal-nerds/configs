import { defineConfig } from "eslint-define-config";

// https://github.com/mysticatea/eslint-plugin-node
const config = defineConfig({
	extends: ["plugin:node/recommended"],
	rules: {
		// RATIONALE: Allow `plugin-import` to handle them
		"node/no-extraneous-import": ["off"],
		"node/no-unpublished-import": ["off"],
		"node/no-unpublished-require": ["off"],
		"node/no-missing-import": ["off"],
		"node/no-unsupported-features/es-syntax": [
			"error",
			{ ignores: ["modules"] },
		],
	},
	settings: {
		node: {
			resolvePaths: [__dirname],
			tryExtensions: [".cjs", ".js", ".mjs", ".ts"],
		},
	},
});

export default config;
