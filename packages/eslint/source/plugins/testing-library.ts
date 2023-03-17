import { defineConfig } from "eslint-define-config";

import { HAS_REACT, HAS_SVELTE } from "../checks.ts";

function getExtendedConfig() {
	if (HAS_REACT) {
		return "plugin:testing-library/react";
	} else if (HAS_SVELTE) {
		return "plugin:testing-library/svelte";
	} else {
		return "plugin:testing-library/dom";
	}
}

// https://github.com/testing-library/eslint-plugin-testing-library
const config = defineConfig({
	extends: [getExtendedConfig()],
});

export default config;
