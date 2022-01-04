import type { Config } from "stylelint";

import { hasModule } from "@workspace/helpers";

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

		"at-rule-no-unknown": hasModule("scss") ? undefined : [
			true,
			{
				ignoreAtRules: [
					...(hasModule("tailwindcss")
						? [
								// TailwindCSS specific at rule selectors
								"tailwind",
								"apply",
								"variants",
								"responsive",
								"screen",
						  ]
						: ""),
				],
			},
		],
	},
};

export default config;
