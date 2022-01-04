import type { Config } from "stylelint";

const config: Partial<Config> = {
	ignoreFiles: [
		"**/node_modules",
		"**/.git",
		"**/.husky",
		"**/.svelte-kit",
		"**/.turbo",
		"**/.vercel",
		"**/build",
		"**/dist",
		// Unignore files starting with dot (usually configuration files)
		"!.*",
	],

	rules: {
		// https://stylelint.io/user-guide/rules/list
	},
};

export default config;
