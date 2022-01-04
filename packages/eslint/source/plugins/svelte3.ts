import { defineConfig } from "eslint-define-config";

import { hasModule } from "@workspace/helpers";

// https://github.com/sveltejs/eslint-plugin-svelte3
const config = defineConfig({
	extends: ["plugin:compat/recommended"],
	plugins: ["svelte3"],
	overrides: [
		{
			files: ["*.svelte"],
			// @ts-ignore: `eslint-define-config` doesn't have this specified in `Overrides` type
			processor: "svelte3/svelte3",
		},
	],
	settings: {
		"svelte3/typescript": hasModule("typescript"),
	},
});

export default config;
