/** @see {@link https://github.com/sveltejs/prettier-plugin-svelte} Plugin Svelte options */
const config = {
	overrides: [
		{
			files: "*.svelte",
			options: {
				parser: "svelte",
			},
		},
	],

	plugins: ["prettier-plugin-svelte"],

	svelteSortOrder: "options-scripts-markup-styles",
	svelteStrictMode: false,
	svelteBracketNewLine: true,
	svelteAllowShorthand: true,
	svelteIndentScriptAndStyle: true,
} as const;

export default config;
