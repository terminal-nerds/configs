import { createMergedConfig } from "@terminal-nerds/snippets-config";

import { HAS_SVELTE, HAS_TAILWINDCSS } from "./checks.js";
// eslint-disable-next-line unicorn/prevent-abbreviations
import pluginJSDoc from "./plugins/jsdoc.js";
import pluginSvelte from "./plugins/svelte.js";
import pluginTailwindCSS from "./plugins/tailwindcss.js";
import prettier from "./prettier.js";

const config = createMergedConfig([
	// Base
	prettier,

	// Plugins
	pluginJSDoc,
	HAS_SVELTE && pluginSvelte,
	HAS_TAILWINDCSS && pluginTailwindCSS,
]);

export default config;
