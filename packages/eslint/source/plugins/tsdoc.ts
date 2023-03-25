import { TYPESCRIPT_EXTENSIONS } from "@terminal-nerds/snippets-extension/schema/typescript";
import { defineConfig } from "eslint-define-config";

/** @see {@link https://github.com/microsoft/tsdoc/tree/main/eslint-plugin} TSDoc plugin options */
const config = defineConfig({
	overrides: [
		{
			// Declare an override that applies to TypeScript files only
			files: TYPESCRIPT_EXTENSIONS.map((extension) => `*.${extension}`),
			rules: {
				"tsdoc/syntax": ["warn"],
			},
		},
	],
	plugins: ["tsdoc"],
});

export default config;
