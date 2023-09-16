import { defineConfig } from "eslint-define-config";

import { HAS_TYPESCRIPT } from "../checks.ts";

/** @see {@link https://github.com/import-js/eslint-plugin-import} Repository */
const config = defineConfig({
	extends: getExtendedConfigs(),

	rules: {
		"import/export": ["warn"],
		/**
		 * RATIONALE: Doesn't fully support ESM yet, see below:
		 * https://github.com/import-js/eslint-plugin-import/issues/1868.
		 */
		"import/no-unresolved": ["off"],
		"import/first": ["error"],
		"import/newline-after-import": ["error"],
		"import/no-duplicates": ["error"],
		"import/order": [
			"warn",
			{
				/* prettier-ignore */
				groups: [
					"builtin",
					"external",
					"internal",
					"parent",
					"sibling",
					"index",
					"object",
				],
				pathGroups: [
					{
						pattern: "$**/**",
						group: "internal",
						position: "after",
					},
				],
			},
		],
	},
});

export default config;

function getExtendedConfigs() {
	const configs = ["plugin:import/recommended"];

	if (HAS_TYPESCRIPT) {
		configs.push("plugin:import/typescript");
	}

	return configs;
}
