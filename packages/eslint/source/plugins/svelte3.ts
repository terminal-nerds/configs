import { defineConfig } from "eslint-define-config";

import { hasModule } from "@workspace/helpers/module";

const config = defineConfig({
	// https://github.com/sveltejs/eslint-plugin-svelte3
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

export default hasModule("svelte") ? config : {};
