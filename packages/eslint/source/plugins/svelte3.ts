import { defineConfig } from "eslint-define-config";

import { getIgnorePatterns } from "@workspace/shared/configuration";
import { hasModule } from "@workspace/shared/module";

// https://github.com/sveltejs/eslint-plugin-svelte3
const config = defineConfig({
	ignorePatterns: getIgnorePatterns([
		{
			module: "@sveltejs/kit",
			patterns: "**/.svelte-kit",
		},
	]),
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
