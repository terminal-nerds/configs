import { defineConfig } from "eslint-define-config";

const CONFIG_TO_EXTEND = [];

if (process.env["ESLINT_PLUGIN_DIFF_ENABLE"] === "true") {
	CONFIG_TO_EXTEND.push("plugin:diff/diff");
}

// https://github.com/paleite/eslint-plugin-diff
const config = defineConfig({
	extends: CONFIG_TO_EXTEND,
});

export default config;
