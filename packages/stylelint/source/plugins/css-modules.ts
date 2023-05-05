import { exclude } from "@terminal-nerds/snippets-array/filter";
import { STYLESHEETS_EXTENSIONS } from "@terminal-nerds/snippets-extension/schema/stylesheet";
import type { Config } from "stylelint";

import { HAS_SASS } from "../checks.ts";

/** @see {@link https://github.com/juanca/stylelint-css-modules} Plugin repository */
const config: Partial<Config> = {
	plugins: ["stylelint-css-modules"],
	rules: {
		"css-modules/composed-class-names": true,
		"css-modules/css-variables": [
			true,
			{
				resolve: {
					extensions: exclude(STYLESHEETS_EXTENSIONS, [HAS_SASS && "sass", HAS_SASS && "scss"]).map(
						(extension) => `.${extension}`,
					),
					modules: ["node_modules"],
				},
			},
		],
	},
};

export default config;
