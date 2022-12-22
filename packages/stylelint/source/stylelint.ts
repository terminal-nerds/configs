import { hasModule } from "@workspace/shared/module";
import type { Config } from "stylelint";

import { extendTailwindAtRuleSelectors } from "./other/tailwind";

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

	rules: {
		// https://stylelint.io/user-guide/rules/list
		"at-rule-no-unknown": hasModule("sass")
			? undefined
			: [true, { ignoreAtRules: [...extendTailwindAtRuleSelectors()] }],

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
