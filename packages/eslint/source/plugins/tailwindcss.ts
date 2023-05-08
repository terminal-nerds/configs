import { defineConfig } from "eslint-define-config";

/** @see {@link https://github.com/francoismassart/eslint-plugin-tailwindcss} */
const config = defineConfig({
	extends: ["plugin:tailwindcss/recommended"],
	plugins: ["tailwindcss"],
	rules: {
		// RATIONALE: Let Tailwind CSS official plugin for Prettier take care of sorting
		"classnames-order": ["off"],
		// RATIONALE: Conflicts with using CSS modules
		"no-custom-classname": ["off"],
	},
});

export default config;
