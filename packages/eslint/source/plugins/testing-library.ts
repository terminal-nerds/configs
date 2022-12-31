import { hasPackage } from "@workspace/shared/package";
import { defineConfig } from "eslint-define-config";

function getExtendedConfig() {
	if (hasPackage("react")) {
		return "plugin:testing-library/react";
	} else if (hasPackage("svelte")) {
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
