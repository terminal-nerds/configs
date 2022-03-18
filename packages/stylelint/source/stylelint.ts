import type { Config } from "stylelint";

import { getIgnorePatterns } from "@workspace/helpers/configuration";
import { hasModule } from "@workspace/helpers/module";

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

		"selector-pseudo-class-no-unknown": [
			true,
			{ ignorePseudoClasses: ["local", "global"] },
		],

		"custom-property-pattern": "^([a-z][a-z0-9]*)([_-][a-z0-9]+)*$",
		"selector-class-pattern": "^([a-z][a-z0-9]*)(_[a-z0-9]+)*$",
	},
};

export default config;
