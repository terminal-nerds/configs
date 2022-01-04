import { defineConfig } from "eslint-define-config";

// https://github.com/mysticatea/eslint-plugin-node
const config = defineConfig({
	extends: ["plugin:node/recommended"],
	rules: {
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
			// eslint-disable-next-line unicorn/prefer-module
			resolvePaths: [__dirname],
			tryExtensions: [".cjs", ".js", ".mjs", ".node", ".ts"],
		},
	},
});

export default config;
