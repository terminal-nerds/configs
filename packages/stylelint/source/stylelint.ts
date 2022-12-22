import type { Config } from "stylelint";

import { getIgnorePatterns } from "@workspace/shared/configuration";
import { hasModule } from "@workspace/shared/module";

import { extendTailwindAtRuleSelectors } from "./other/tailwind";

const config: Partial<Config> = {
	ignoreFiles: [
		// Unignore files starting with dot (usually configuration files)
		"!.*",
		// Ignore...
		"**/node_modules",
		"**/.git",
		"**/build",
		"**/dist",
		...getIgnorePatterns([
			{
				module: "husky",
				patterns: "**/.husky",
			},
			{
				module: "@sveltejs/kit",
				patterns: "**/.svelte-kit",
			},
			{
				module: "turbo",
				patterns: "**/.turbo",
			},
			{
				module: "vercel",
				patterns: "**/.vercel",
			},
		]),
	],

	rules: {
		// https://stylelint.io/user-guide/rules/list
		"at-rule-no-unknown": !hasModule("sass")
			? [true, { ignoreAtRules: [...extendTailwindAtRuleSelectors()] }]
			: undefined,

		// RATIONALE: Prevent conflicting with `order` plugin
		"declaration-empty-line-before": undefined,

		// RATIONALE: Allow CSS Modules
		"selector-pseudo-class-no-unknown": [
			true,
			{ ignorePseudoClasses: ["local", "global"] },
		],

		// RATIONALE:
		// Longhand properties are more readable and descriptive.
		// Not everyone is a CSS Ninja. It's minifiers job to reduce it.
		"declaration-block-no-redundant-longhand-properties": undefined,

		"custom-property-pattern": "^([a-z][a-z0-9]*)([_-][a-z0-9]+)*$",
		// RATIONALE: Enforce `snake_case`, for the easier destructuring with CSS modules
		"selector-class-pattern": "^([a-z][a-z0-9]*)(_[a-z0-9]+)*$",
	},
};

export default config;
