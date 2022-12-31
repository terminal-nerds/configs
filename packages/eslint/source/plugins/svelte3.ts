import { hasPackage } from "@workspace/shared/package";
import { defineConfig } from "eslint-define-config";

// https://github.com/sveltejs/eslint-plugin-svelte3
const config = defineConfig({
	ignorePatterns: ["**/.svelte-kit"],
	plugins: ["svelte3"],
	overrides: [
		{
			files: ["*.svelte"],
			// @ts-ignore: `eslint-define-config` doesn't have this specified in `Overrides` type
			processor: "svelte3/svelte3",
		},
	],
	settings: {
		"svelte3/typescript": hasPackage("typescript"),
	},
});

export default config;
