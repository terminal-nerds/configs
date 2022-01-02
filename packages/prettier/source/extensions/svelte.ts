// https://github.com/sveltejs/prettier-plugin-svelte
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
};

export default config;
