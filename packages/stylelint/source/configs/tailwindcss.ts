import type { Config } from "stylelint";

import { HAS_SASS } from "../checks.ts";

/** @see {@link https://github.com/stylelint/stylelint-config-standard} Config standard repo */
const config: Partial<Config> = {
	extends: [
		HAS_SASS
			? "stylelint-config-tailwindcss/scss"
			: "stylelint-config-tailwindcss",
	],
};

export default config;
