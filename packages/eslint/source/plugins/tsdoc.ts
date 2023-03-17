import { TYPESCRIPT_EXTENSIONS } from "@terminal-nerds/snippets-extension/schema";
import { defineConfig } from "eslint-define-config";

/** {@link https://github.com/microsoft/tsdoc/tree/main/eslint-plugin} */
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
