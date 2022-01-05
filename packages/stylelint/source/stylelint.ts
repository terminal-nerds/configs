import type { Config } from "stylelint";

import { hasModule } from "@workspace/helpers";
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

		"at-rule-no-unknown": hasModule("scss")
			? undefined
			: [
					true,
					{
						ignoreAtRules: [...extendTailwindAtRuleSelectors()],
					},
			  ],
	},
};

export default config;
