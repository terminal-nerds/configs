import { hasPackage } from "@workspace/shared/package";
import { defineConfig } from "eslint-define-config";

const getExtendedConfigs = () => {
	const configs = ["plugin:import/recommended"];

	if (hasPackage("typescript")) {
		configs.push("plugin:import/typescript");
	}

	return configs;
};

// https://github.com/import-js/eslint-plugin-import
const config = defineConfig({
	extends: getExtendedConfigs(),

	rules: {
		// @see: https://github.com/import-js/eslint-plugin-import/issues/1868
		"import/no-unresolved": ["off"], // Doesn't support ESM yet
		/**
		 * RATIONALE:
		 * Combine with: https://github.com/lydell/eslint-plugin-simple-import-sort
		 */
		"import/first": ["error"],
		"import/newline-after-import": ["error"],
		"import/no-duplicates": ["error"],
	},
});

export default config;
