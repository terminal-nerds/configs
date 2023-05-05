import type { Config } from "stylelint";

const config: Partial<Config> = {
	ignoreFiles: [
		// Unignore files starting with dot (usually configuration files)
		"!.*",
		// Ignore...
		"**/.git",
		"**/build",
		"**/dist",
		"**/.husky",
		"**/.svelte-kit",
		"**/.turbo",
		"**/.vercel",
		"**/node_modules",
	],

	/** @see {@link https://stylelint.io/user-guide/rules/list} Built-in rules list */
	rules: {
		// RATIONALE: Prevent conflicting with `order` plugin
		"declaration-empty-line-before": undefined,

		// RATIONALE: Allow CSS Modules
		"selector-pseudo-class-no-unknown": [true, { ignorePseudoClasses: ["local", "global"] }],

		// RATIONALE:
		// Longhand properties are more readable and descriptive.
		// Not everyone is a CSS Ninja. It's minifiers job to reduce it.
		"declaration-block-no-redundant-longhand-properties": undefined,
	},
};

export default config;
