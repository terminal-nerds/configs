import { defineConfig } from "eslint-define-config";

// https://github.com/mysticatea/eslint-plugin-node
const config = defineConfig({
	extends: ["plugin:react/recommended"],
	rules: {
		// RATIONALE:
		// `<></>` can be confusing, is better to use `<Fragment></Fragment>`
		// for readability
		"react/jsx-fragments": ["warn", "element"],
	},
});

export default config;
