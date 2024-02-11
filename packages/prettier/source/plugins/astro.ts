/** @see {@link https://github.com/sveltejs/prettier-plugin-astro} Plugin Astro options */
const config = {
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],

	plugins: ["prettier-plugin-astro"],
} as const;

export default config;
