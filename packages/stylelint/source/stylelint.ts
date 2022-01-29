import type { Config } from "stylelint";

import { hasModule } from "@workspace/helpers/module";

import { extendTailwindAtRuleSelectors } from "./other/tailwind";

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
		"at-rule-no-unknown": hasModule("sass")
			? undefined
			: [
					true,
					{
						ignoreAtRules: [...extendTailwindAtRuleSelectors()],
					},
			  ],

		"selector-pseudo-class-no-unknown": [
			true,
			{
				ignorePseudoClasses: ["local", "global"],
			},
		],

		"selector-class-pattern": "^([a-z][a-z0-9]*)(_[a-z0-9]+)*$",
	},
};

export default config;
