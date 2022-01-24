import type { Config } from "stylelint";

import { hasModule } from "@workspace/helpers/module";

import { extendTailwindAtRuleSelectors } from "../other/tailwind";

// https://github.com/stylelint-scss/stylelint-scss
const config: Partial<Config> = {
	plugins: ["stylelint-scss"],

	rules: {
		"scss/at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: [...extendTailwindAtRuleSelectors()],
			},
		],
	},
};


export default hasModule("sass") ? config : {};
