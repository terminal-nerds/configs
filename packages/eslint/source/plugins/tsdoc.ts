import { defineConfig } from "eslint-define-config";

/** {@link https://github.com/microsoft/tsdoc/tree/main/eslint-plugin} */
const config = defineConfig({
	plugins: ["tsdoc"],
	rules: {
		"tsdoc/syntax": ["warn"],
	},
});

export default config;
