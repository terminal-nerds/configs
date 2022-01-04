import type { Config } from "stylelint";

import { hasModule } from "@workspace/helpers";

// https://github.com/stylelint-scss/stylelint-scss
const config: Partial<Config> = {
	plugins: ["stylelint-scss"],

	rules: {
		"scss/at-rule-no-unknown": [
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
