import { defineConfig } from "eslint-define-config";

const config = defineConfig({
	// https://github.com/microsoft/tsdoc/tree/main/eslint-plugin
	plugins: ["tsdoc"],
	rules: {
		"tsdoc/syntax": ["warn"],
	},
});

export default config;
