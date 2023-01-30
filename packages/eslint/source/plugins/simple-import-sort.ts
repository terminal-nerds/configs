import { defineConfig } from "eslint-define-config";

/** {@link https://github.com/lydell/eslint-plugin-simple-import-sort} */
const config = defineConfig({
	plugins: ["simple-import-sort"],
	rules: {
		"simple-import-sort/exports": ["error"],
		"simple-import-sort/imports": ["error"],
	},
});

export default config;
